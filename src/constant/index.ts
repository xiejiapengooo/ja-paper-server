import { SectionType } from "@prisma/client";

export const SECTION_TYPE_LABEL = {
  [SectionType.VOCAB_GRAMMAR]: "言語知識（文字・語彙・文法）",
  [SectionType.READING]: "読解",
  [SectionType.LISTENING]: "聴解",
};

export const PAPER_QUESTION_TYPE = {
  // 汉字读法
  CHINESE_PRONUNCIATION: "chinese_pronunciation",
  // 汉字书写
  CHINESE_WRITING: "chinese_writing",
  // 词语构成
  WORD_COMPOSITION: "word_composition",
  // 上下关系
  CONTEXT: "context",
  // 近义替换
  SYNONYM_SUBSTITUTION: "synonym_substitution",
  // 用法
  USAGE: "usage",
  // 句子语法1（语法形式的判断）
  SENTENCE_GRAMMAR_1: "sentence_grammar_1",
  // 句子语法2（句子的组织）
  SENTENCE_GRAMMAR_2: "sentence_grammar_2",
  // 文章语法
  ARTICLE_GRAMMAR: "article_grammar",
  // 内容理解（短篇）
  CONTENT_COMPREHENSION_SHORT: "content_comprehension_short",
  // 内容理解（中篇）
  CONTENT_COMPREHENSION_MIDDLE: "content_comprehension_middle",
  // 内容理解（长篇）
  CONTENT_COMPREHENSION_LONG: "content_comprehension_long",
  // 综合理解
  SYNTHETICAL_COMPREHENSION_READ: "synthetical_comprehension_read",
  // 论点理解（中篇）
  THESIS_COMPREHENSION: "thesis_comprehension",
  // 信息检索
  INFORMATION_RETRIEVAL: "information_retrieval",
  // 问题理解
  QUESTION_COMPREHENSION: "question_comprehension",
  // 重点理解
  EMPHASIS_COMPREHENSION: "emphasis_comprehension",
  // 概要理解
  OUTLINE_COMPREHENSION: "outline_comprehension",
  // 语言表达
  LANGUAGE_EXPRESSION: "language_expression",
  // 即时应答
  INSTANT_RESPONSE: "instant_response",
  // 综合理解
  SYNTHETICAL_COMPREHENSION_LISTEN: "synthetical_comprehension_listen",
}

export const PAPER_QUESTION_TYPE_WEIGHT = {

}
