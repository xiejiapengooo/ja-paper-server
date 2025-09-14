import { SectionType } from "@prisma/client";

export const SECTION_TYPE_LABEL = {
  [SectionType.VOCAB_GRAMMAR]: "言語知識（文字・語彙・文法）",
  [SectionType.READING]: "読解",
  [SectionType.LISTENING]: "聴解",
};
