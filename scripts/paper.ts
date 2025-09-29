import { Paper, PrismaClient } from "@prisma/client";
import { ConsoleLogger } from "@nestjs/common";
import { data, type Data } from "../papers/N1/202412/data";

const prisma = new PrismaClient();
const logger = new ConsoleLogger();

main()
  .then(() => {})
  .catch(console.log);

async function main() {
  logger.log("Starting create...");

  const paper = await prisma.paper.create({
    data: {
      level: data.level,
      year: data.year,
      month: data.month,
      title: data.title,
    },
  });
  logger.log(`Paper ${paper.id} created.`);

  for (let partItemIndex = 0; partItemIndex < data.parts.length; partItemIndex++) {
    const partItem = data.parts[partItemIndex];
    const part = await prisma.paperPart.create({
      data: {
        order: partItemIndex + 1,
        paperId: paper.id,
        title: partItem.title,
        duration: partItem.duration,
        listeningAudio: partItem.listeningAudio,
      },
    });
    logger.log(`Paper part ${part.id} created.`);

    let questionOrder = 1;
    for (let sectionItemIndex = 0; sectionItemIndex < partItem.sections.length; sectionItemIndex++) {
      const sectionItem = partItem.sections[sectionItemIndex];
      const section = await prisma.paperSection.create({
        data: {
          partId: part.id,
          paperId: paper.id,
          type: sectionItem.type,
          title: sectionItem.title,
          order: sectionItemIndex + 1,
          content: sectionItem.content || "",
          contentTranslationZhHans: sectionItem.contentTranslationZhHans || "",
          imageContent: sectionItem.imageContent || "",
        },
      });
      logger.log(`Paper section ${section.id} created.`);

      for (let questionItemIndex = 0; questionItemIndex < sectionItem.questions.length; questionItemIndex++) {
        const questionItem = sectionItem.questions[questionItemIndex];
        const question = await prisma.paperQuestion.create({
          data: {
            paperId: paper.id,
            partId: part.id,
            sectionId: section.id,
            type: questionItem.type,
            answerType: questionItem.answerType,
            order: questionOrder,
            prompt: questionItem.prompt,
            analysis: questionItem.analysis || "",
            listeningAudio: questionItem.listeningAudio || "",
            listeningContent: questionItem.listeningContent || "",
            listeningContentTranslationZhHans: questionItem.listeningContentTranslationZhHans || "",
          },
        });
        questionOrder++;
        logger.log(`Paper question ${question.id} created.`);

        for (let choiceItemIndex = 0; choiceItemIndex < questionItem.choices.length; choiceItemIndex++) {
          const choiceItem = questionItem.choices[choiceItemIndex];
          const choice = await prisma.questionChoice.create({
            data: {
              label: choiceItem.label,
              text: choiceItem.text,
              isCorrect: choiceItem.isCorrect,
              questionId: question.id,
              order: choiceItemIndex + 1,
            },
          });
          logger.log(`Question choice ${choice.id} created.`);
        }
      }
    }
  }

  logger.log("create Done!");

  await prisma.$disconnect();
}
