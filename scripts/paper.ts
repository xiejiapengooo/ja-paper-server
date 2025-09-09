import { PrismaClient } from "@prisma/client";
// import { ConfigService } from "@nestjs/config";
import { data } from "../papers/n1/202412/data";

const prisma = new PrismaClient();

main()
  .then(() => {})
  .catch(console.log);

async function main() {
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

    for (const sectionItem of partItem.sections) {
      const section = await prisma.paperSection.upsert({
        where: {
          id: sectionItem.id || "",
        },
        create: {
          partId: part.id,
          paperId: paper.id,
          type: sectionItem.type,
          title: sectionItem.title,
          order: sectionItem.order,
          content: sectionItem.content || "",
          contentTranslationZhHans: sectionItem.contentTranslationZhHans || "",
          imageContent: sectionItem.imageContent || "",
        },
        update: {
          partId: part.id,
          paperId: paper.id,
          type: sectionItem.type,
          title: sectionItem.title,
          order: sectionItem.order,
          content: sectionItem.content || "",
          contentTranslationZhHans: sectionItem.contentTranslationZhHans || "",
          imageContent: sectionItem.imageContent || "",
        },
      });

      for (const questionItem of sectionItem.questions) {
        const question = await prisma.paperQuestion.upsert({
          where: {
            id: questionItem.id || "",
          },
          create: {
            paperId: paper.id,
            partId: part.id,
            sectionId: section.id,
            type: questionItem.type,
            order: questionItem.order,
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
            order: questionItem.order,
            prompt: questionItem.prompt,
            analysis: questionItem.analysis || "",
            listeningAudio: questionItem.listeningAudio || "",
            listeningContent: questionItem.listeningContent || "",
            listeningContentTranslationZhHans: questionItem.listeningContentTranslationZhHans || "",
          },
        });

        for (const choiceItem of questionItem.choices) {
          await prisma.questionChoice.upsert({
            where: {
              id: choiceItem.id || "",
            },
            create: {
              label: choiceItem.label,
              text: choiceItem.text,
              isCorrect: choiceItem.isCorrect,
              questionId: question.id,
            },
            update: {
              label: choiceItem.label,
              text: choiceItem.text,
              isCorrect: choiceItem.isCorrect,
              questionId: question.id,
            },
          });
        }
      }
    }
  }
}
