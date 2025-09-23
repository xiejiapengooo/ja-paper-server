import { SectionType, QuestionType } from "@prisma/client";

export const SECTION_TYPE_LABEL = {
  [SectionType.VOCAB_GRAMMAR]: "言語知識（文字・語彙・文法）",
  [SectionType.READING]: "読解",
  [SectionType.LISTENING]: "聴解",
};

export const PAPER_QUESTION_TYPE_WEIGHT = {
  N1: {
    [QuestionType.CHINESE_PRONUNCIATION]: 1,
    [QuestionType.CONTEXT]: 1,
    [QuestionType.SYNONYM_SUBSTITUTION]: 1,
    [QuestionType.USAGE]: 2,
    [QuestionType.SENTENCE_GRAMMAR_1]: 1,
    [QuestionType.SENTENCE_GRAMMAR_2]: 1,
    [QuestionType.ARTICLE_GRAMMAR]: 2,
    [QuestionType.CONTENT_COMPREHENSION_SHORT]: 2,
    [QuestionType.CONTENT_COMPREHENSION_MIDDLE]: 2,
    [QuestionType.CONTENT_COMPREHENSION_LONG]: 3,
    [QuestionType.SYNTHETICAL_COMPREHENSION_READ]: 2,
    [QuestionType.THESIS_COMPREHENSION]: 3,
    [QuestionType.INFORMATION_RETRIEVAL]: 2,
    [QuestionType.QUESTION_COMPREHENSION]: 2,
    [QuestionType.EMPHASIS_COMPREHENSION]: 1,
    [QuestionType.OUTLINE_COMPREHENSION]: 2,
    [QuestionType.INSTANT_RESPONSE]: 1,
    [QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN]: 3,
  },
}

export const PAPER_SECTION_SCORE = {
  N1: {
    [SectionType.VOCAB_GRAMMAR]: {
      full_score: 60,
      pass_score: 19
    },
    [SectionType.READING]: {
      full_score: 60,
      pass_score: 19
    },
    [SectionType.LISTENING]: {
      full_score: 60,
      pass_score: 19
    },
    ALL: {
      full_score: 180,
      pass_score: 100
    }
  }
}