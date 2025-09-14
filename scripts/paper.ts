import { Paper, PrismaClient } from "@prisma/client";
import { ConsoleLogger } from "@nestjs/common";
import { data, type Data } from "../papers/n1/202412/data";

const prisma = new PrismaClient();
const logger = new ConsoleLogger();

main()
  .then(() => {})
  .catch(console.log);

async function main() {
  logger.log("Starting upsert...");

  const paper = await prisma.paper.upsert({
    where: {
      id: data.id || "",
    },
    create: {
      level: data.level,
      year: data.year,
      month: data.month,
      title: data.title,
    },
    update: {
      level: data.level,
      year: data.year,
      month: data.month,
      title: data.title,
    },
  });
  logger.log(`Paper ${paper.id} upserted.`);

  for (const partItem of data.parts) {
    const part = await prisma.paperPart.upsert({
      where: {
        id: partItem.id || "",
      },
      create: {
        paperId: paper.id,
        title: partItem.title,
        duration: partItem.duration,
        listeningAudio: partItem.listeningAudio,
      },
      update: {
        paperId: paper.id,
        title: partItem.title,
        duration: partItem.duration,
        listeningAudio: partItem.listeningAudio,
      },
    });
    logger.log(`Paper part ${part.id} upserted.`);

    for (let sectionItemIndex = 0; sectionItemIndex < partItem.sections.length; sectionItemIndex++) {
      const sectionItem = partItem.sections[sectionItemIndex];
      const section = await prisma.paperSection.upsert({
        where: {
          id: sectionItem.id || "",
        },
        create: {
          partId: part.id,
          paperId: paper.id,
          type: sectionItem.type,
          title: sectionItem.title,
          order: sectionItemIndex,
          content: sectionItem.content || "",
          contentTranslationZhHans: sectionItem.contentTranslationZhHans || "",
          imageContent: sectionItem.imageContent || "",
        },
        update: {
          partId: part.id,
          paperId: paper.id,
          type: sectionItem.type,
          title: sectionItem.title,
          order: sectionItemIndex,
          content: sectionItem.content || "",
          contentTranslationZhHans: sectionItem.contentTranslationZhHans || "",
          imageContent: sectionItem.imageContent || "",
        },
      });
      logger.log(`Paper section ${section.id} upserted.`);

      for (let questionItemIndex = 0; questionItemIndex < sectionItem.questions.length; questionItemIndex++) {
        const questionItem = sectionItem.questions[questionItemIndex];
        const question = await prisma.paperQuestion.upsert({
          where: {
            id: questionItem.id || "",
          },
          create: {
            paperId: paper.id,
            partId: part.id,
            sectionId: section.id,
            type: questionItem.type,
            order: questionItemIndex,
            prompt: questionItem.prompt,
            analysis: questionItem.analysis || "",
            listeningAudio: questionItem.listeningAudio || "",
            listeningContent: questionItem.listeningContent || "",
            listeningContentTranslationZhHans: questionItem.listeningContentTranslationZhHans || "",
          },
          update: {
            paperId: paper.id,
            partId: part.id,
            sectionId: section.id,
            type: questionItem.type,
            order: questionItemIndex,
            prompt: questionItem.prompt,
            analysis: questionItem.analysis || "",
            listeningAudio: questionItem.listeningAudio || "",
            listeningContent: questionItem.listeningContent || "",
            listeningContentTranslationZhHans: questionItem.listeningContentTranslationZhHans || "",
          },
        });
        logger.log(`Paper question ${question.id} upserted.`);

        for (let choiceItemIndex = 0; choiceItemIndex < questionItem.choices.length; choiceItemIndex++) {
          const choiceItem = questionItem.choices[choiceItemIndex];
          const choice = await prisma.questionChoice.upsert({
            where: {
              id: choiceItem.id || "",
            },
            create: {
              label: choiceItem.label,
              text: choiceItem.text,
              isCorrect: choiceItem.isCorrect,
              questionId: question.id,
              order: choiceItemIndex,
            },
            update: {
              label: choiceItem.label,
              text: choiceItem.text,
              isCorrect: choiceItem.isCorrect,
              questionId: question.id,
              order: choiceItemIndex,
            },
          });
          logger.log(`Question choice ${choice.id} upserted.`);
        }
      }
    }
  }

  logger.log("Upsert Done!");

  await prisma.$disconnect();
}
