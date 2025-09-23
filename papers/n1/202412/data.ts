import {
  AnswerType,
  Paper,
  PaperLevel,
  PaperPart,
  PaperQuestion,
  PaperSection,
  QuestionChoice,
  QuestionType,
  SectionType,
} from "@prisma/client";

export type Data = {
  level: Paper["level"];
  year: Paper["year"];
  month: Paper["month"];
  title: Paper["title"];
  parts: Array<{
    title: PaperPart["title"];
    duration: PaperPart["duration"];
    listeningAudio?: PaperPart["listeningAudio"];
    sections: Array<{
      type: PaperSection["type"];
      title: PaperSection["title"];
      content?: string;
      contentTranslationZhHans?: string;
      imageContent?: string;
      questions: Array<{
        type: PaperQuestion["type"];
        answerType: PaperQuestion["answerType"];
        prompt: PaperQuestion["prompt"];
        analysis: PaperQuestion["analysis"];
        listeningAudio?: PaperQuestion["listeningAudio"];
        listeningContent?: PaperQuestion["listeningContent"];
        listeningContentTranslationZhHans?: PaperQuestion["listeningContentTranslationZhHans"];
        choices: Array<{
          label: QuestionChoice["label"];
          text: QuestionChoice["text"];
          isCorrect: QuestionChoice["isCorrect"];
        }>;
      }>;
    }>;
  }>;
};

export const data: Data = {
  title: "2024-12",
  level: PaperLevel.N1,
  month: 12,
  year: 2024,
  parts: [
    {
      title: "言語知識（文字・語彙・文法）・読解",
      duration: 110 * 60 * 1000,
      sections: [
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題1 _____の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "佐藤選手がゴールを決めたとき、観客は<u>絶叫</u>した。",
              analysis: "选手佐藤进球时，观众发出了尖叫声。\n“絶叫”正确读音是 ぜっきょう，表示“发出尖锐而剧烈的叫声”。",
              choices: [
                {
                  label: "1.",
                  text: "せっきょう",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "ぜっきょう",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "ぜっきゅう",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "せっきゅう",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "<u>背後</u>から物音が聞こえた。",
              analysis: "从背后传来了声音。\n汉字“背後”表示“后方、背后”，标准读音为 はいご；",
              choices: [
                {
                  label: "1.",
                  text: "はいご",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "はいこう",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "せいご",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "せいこう",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "将来の<u>抱負</u>を述べる。",
              analysis:
                "阐述对将来的抱负。\n“抱負”表示“志向、志愿”，标准读音为 ほうふ；\n其他选项或少读一拍（ほふ）、或浊音不符（ほうぶ、ほぶ）均不正确。",
              choices: [
                {
                  label: "1.",
                  text: "ほうふ",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "ほうぶ",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "ほふ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "ほぶ",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "人を<u>侮って</u>はいけない。",
              analysis:
                "不可轻视他人。\n“侮る”意思是“轻视、蔑视”，读音应为あなどる；\n“からかう”是“戏弄、嘲笑”；\n“ののしる”是“辱骂、责骂”；\n“裏切る”是“背叛”。",
              choices: [
                {
                  label: "1.",
                  text: "からかって",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "ののしって",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "あなどって",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "うらぎって",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "相手がわかるように、<u>筋道</u>を立てて説明した。",
              analysis: "为了让对方明白，条理分明地进行了说明。\n“筋道”意为“条理、脉络”，正确读音 すじみち；",
              choices: [
                {
                  label: "1.",
                  text: "きんどう",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "すじどう",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "きんみち",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "すじみち",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "その小説の主人公は、<u>奔放</u>な性格をしている。",
              analysis: "那部小说的主人公性格奔放。\n“奔放”表示“不受束缚、率性”，正确读音 ほんぽう。",
              choices: [
                {
                  label: "1.",
                  text: "はんぽう",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "ぼんぽう",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "ほんぽう",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "ばんぽう",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題2 （　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "その生物は、厳しい環境に(　)できる能力を持っている。",
              analysis:
                "那种生物具有能够适应严酷环境的能力。\n“厳しい環境に適応できる”表示“能够适应严苛环境”；\n“合致”是“吻合、一致”；\n“転換”是“转换、转变”；\n“推移”是“变化、推移”。",
              choices: [
                {
                  label: "1.",
                  text: "適応",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "合致",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "転換",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "推移",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "店の売り上げを五年で二倍にするという目標を(　)、みんなで努力している。",
              analysis:
                "大家正为实现“五年内将店铺营业额翻倍”这一目标而努力。\n“目標を掲げる”表示“提出/确定目标”；\n“企む”常用于“企图、图谋不轨”；\n“興る”指“兴起、振兴”；\n“築く”指“建设、构筑”。",
              choices: [
                {
                  label: "1.",
                  text: "企って",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "興って",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "築いて",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "掲げて",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "新しい市長は前市長の政策を(　)し、駅前の開発を進めると述べた。",
              analysis:
                "新市长表示将沿用前任市长的政策，推进车站前的开发。\n“踏襲する”表示“遵循、沿用已有做法”；\n“相続”多指“继承财产”；\n“獲得”指“获得”；\n“伝承”指“传承（文化、技艺等）”。",
              choices: [
                {
                  label: "1.",
                  text: "相続",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "獲得",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "踏襲",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "伝承",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "台風で電車の到着が大幅に遅れたため、駅でしばらく(　)された。",
              analysis:
                "台风导致电车大幅晚点，所以在车站耽搁了一段时间。\n“足止めされる”表示“（因故）被迫停留、滞留”；\n“息抜き”是“缓解压力、休息”；\n“棚上げ”是“暂时搁置议题”；\n“待ち伏せ”是“埋伏等待”。",
              choices: [
                {
                  label: "1.",
                  text: "息抜き",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "棚上げ",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "待ち伏せ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "足止め",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "今日は試合で一日中走り続けたので、疲れて(　)になった。",
              analysis:
                "今天一整天在比赛里不停地跑，所以筋疲力尽了。\n“へとへと”表示“筋疲力尽、精疲力竭”；\n“めちゃめちゃ”是“混乱、不成样子”；\n“どろどろ”“ぐちゃぐちゃ”分别是“泥泞、杂乱”之意。",
              choices: [
                {
                  label: "1.",
                  text: "めちゃめちゃ",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "へとへと",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "どろどろ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "ぐちゃぐちゃ",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "工場の誘致について、市長が丁寧に説明し、住民の不安の（　）に努めた。",
              analysis:
                "关于工厂的引进，市长做了详细说明，努力消除居民的不安。\n“払拭する”表示“拂去、消除（疑虑、忧虑等）”；\n“喪失”是“丧失”；\n“破棄”是“废弃”；\n“排斥”是“排斥、排挤”。",
              choices: [
                {
                  label: "1.",
                  text: "払拭",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "喪失",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "破棄",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "排斥",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "階段でつまずいて転びそうになったので、(　)隣にいた友人の腕をつかんだ。",
              analysis:
                "在台阶上绊到，差点摔倒，赶紧抓住了旁边朋友的胳膊。\n“とっさに”表示“在瞬间、当下反射性地”；\n“じきに”是“不久”；\n“いまに”是“马上、不久就”；\n“とっくに”是“早就”。",
              choices: [
                {
                  label: "1.",
                  text: "じきに",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "いまに",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "とっさに",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "とっくに",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題3 _____の言葉に意味が最も近いものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "社長は小林部長の<u>手腕</u>を高く評価しているようだ。",
              analysis:
                "社长似乎对小林部长的手腕（能力）给予高度评价。\n“手腕”在此意为“能力”；\n“経験”是“经验”；\n“考え”是“想法”；\n“人柄”是“人品、性格”。",

              choices: [
                {
                  label: "1.",
                  text: "経験",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "能力",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "考え",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "人柄",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "時間を<u>ロス</u>してしまった。",
              analysis:
                "浪费了时间。\n“ロスする”借自英语“lose”，意为“浪费、白费”；\n“無駄にする”与之对应；\n“間違えて”是“弄错”；\n“かいて”无此用法；\n“延長して”是“延长”。",

              choices: [
                {
                  label: "1.",
                  text: "間違えて",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "無駄にして",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "かいて",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "延長して",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "確認が<u>おろそか</u>になっていた。",
              analysis:
                "确认工作被敷衍了事了。\n“おろそか”含义与“いいかげん”相近，都有“不认真、敷衍”的意思；\n“めんどうくさい”是“麻烦”；\n“困難”是“困难”；\n“遅く”是“慢”。",

              choices: [
                {
                  label: "1.",
                  text: "めんどうくさ",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "困難",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "遅く",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "いいかげん",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "私たちのチームの<u>目下</u>の目標は、市の大会で優勝することだ。",
              analysis:
                "我们队当前的目标是在市级比赛中夺冠。\n“目下”（もっか）意为“当前、现在”，对应选项 今；\n“最大”是“最大的”；\n“将来”是“将来”；\n“最低限”是“最低限度”。",

              choices: [
                {
                  label: "1.",
                  text: "最大",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "将来",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "今",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "最低限",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "経費を考慮したうえで、古いアパートの改修工事を<u>請け負う</u>ことにした。",
              analysis:
                "在考虑了费用之后，决定承包对旧公寓的改修工程。\n“請け負う”即“承包、承担”，对应 引き受ける；\n“申し込む”是“申请”；\n“断る”是“拒绝”；\n“諦める”是“放弃”。",

              choices: [
                {
                  label: "1.",
                  text: "引き受ける",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "申し込む",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "断る",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "諦める",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "先生に本を<u>進呈</u>しました。",
              analysis:
                "把书赠送给老师了。\n“進呈する”是“赠呈”，对应敬语“差し上げる”；\n“いただく”是“接受”；\n“貸す”是“借出”，与赠送不同；\n“借りる”是“借入”。",

              choices: [
                {
                  label: "1.",
                  text: "差し上げました",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "いただきました",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "お貸ししました",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "お借りしました",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題4 次の言葉の使い方として最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "加工",
              analysis:
                "“加工”主要用于对物质材料进行切削、组合或化学处理等，制作出新产品。\n选项2的“余った木材を加工した商品”正是典型用法。\n1、3、4 均把“加工”用于非物理材料（生活习惯、房屋、规章制度），不自然，应分别改为“改善”“改装”“改定”。",

              choices: [
                {
                  label: "1.",
                  text: "食事や運動なとの生活習慣を<u>加工</u>するよう医師からアドバイスを受けた。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "このお店では、余った木材を<u>加工</u>した商品を販売してる。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "両親は古い民家を安く購入して、自分たちで民宿に<u>加工</u>した。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "わが社は、現状に合わせて就業規則の一部を<u>加工</u>することにした。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "養う",
              analysis:
                "“養う”常指供给生活所需以抚养人。\n选项4“養っている”指“抚养孩子”最贴切。\n1 多用“飼う”，“饲养”虫子；\n2 栽种植物多用“育てる”；\n3 “养公司”说法也不自然。",
              choices: [
                {
                  label: "1.",
                  text: "息子が近くの公園で虫を捕まえてきたので、家で<u>養う</u>ことにした。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "部屋のベランダで植物を<u>養う</u>ために、お店で鉢や土を買った。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "私は一人で売り上げを伸ばし、自分の会社を<u>養って</u>きた。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "山口さんは、会社を経営しながら3人の子どもを<u>養って</u>いる。",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "資質",
              analysis:
                "“資質”侧重指人或动物的天赋、素质。\n选项4用在“人作为运动员的天赋”最自然。\n1 用在“设备”上不合；\n2 虽可指“动物本性”，但不如 4 常见；\n3 “产品质量”应为“品質”。",

              choices: [
                {
                  label: "1.",
                  text: "携帯電話のカメラの<u>資質</u>は日に日に向上している。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "この動物は、見た目はかわいらしいが、<u>資質</u>は荒いので注意が必要だ。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "玩具の会社で製品の<u>資質</u>を管理する仕事をしています。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "森さんは身体能力が高く、陸上選手としての<u>資質</u>に恵まれている",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "正当",
              analysis:
                "“正当”可指“合理、合情理”或“应得、合法”。\n选项 3 “正当な評価を受ける”表示“得到应得的评价”，用法最恰当。\n1 应用“正しく”；\n2 应说“正式な名前”；\n4 应说“順調に”或“着々と”。",

              choices: [
                {
                  label: "1.",
                  text: "説明書を見て<u>正当</u>に組み立てたのに、部品が一つ余った。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "「まる」はニックネームで、私の<u>正当</u>な名前は「丸山」です。  ",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "その画家は、若いころには<u>正当</u>な評価を受けていなかった。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "トンネルの建設工事は大きな遅れもなく、<u>正当</u>に進んでいる。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "ありきたり",
              analysis:
                "“ありきたり”指“平凡、老套、陈词滥调”。\n选项2用来评价小说情节“老套”，最典型；\n3 虽也自然，但更常见于评价“事物或表达”，首推 2；\n1 、4 用法不当。",

              choices: [
                {
                  label: "1.",
                  text: "この町はコンビニが<u>ありきたり</u>で、とても便利だ。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "その小説のストーリーは<u>ありきたり</u>で、つまらなかった",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "困っている人がいたら助けるのは、<u>ありきたり</u>のことだ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "<u>ありきたり</u>の方は、入場料が1,000円となっています。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "間柄",
              analysis:
                "“間柄”多用于人与人之间的关系。\n选项1“親しい間柄”描述人际关系最自然。\n2 、3 、4 虽也谈“关系”，但均偏向国家、事物或抽象环境，不如人际用法贴切。",

              choices: [
                {
                  label: "1.",
                  text: "木村さん、中学クラスメートは、それほど親しい<u>間柄</u>ではない",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "友好条約で両国の<u>間柄</u>は今後進展する",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "生態の変化、近年の環境の破壊との<u>間柄</u>が指摘される",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "父漁民、小さい頃から、海と<u>間柄</u>の深い暮らしをしてきしてきた",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題5 次の文の（　　　）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "宝くじ売り場があるよ、買ってみない?\nどうせ当たらないんだから、買う(　)無駄だったよ。",
              analysis:
                "反正不会中奖，买了也是浪费。\nこの文は、宝くじを買ったことが無駄だったという意味を表しています。「どうせ当たらないんだから、買うだけ無駄だったよ。」のように、「だけ」を使うことで、「買うことが無駄であった」ということを強調しています。選択肢の中で、「だけ」が最も適切な表現です。",

              choices: [
                {
                  label: "1.",
                  text: "より",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "のみ",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "には",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "だけ",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "近年の健康意識の高まり(　)健康食品は急成長している。",
              analysis:
                "随着近年来健康意识的提高，健康食品行业飞速发展。\n「～を受けて」表示“受…影响”，说明前项是后项现象的背景原因。",

              choices: [
                {
                  label: "1.",
                  text: "に次いで",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "にわたって",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "を受けて",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "をめぐって",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "息子はサッカーの練習でよほど疲れていたのか、家に(　)食事もとらず、寝てしまった。",
              analysis:
                "儿子大概是足球练习太累了，一回家饭也不吃就睡了。\n「～なり」接动词原形，表示动作完成后立刻发生另一动作，强调紧接性。",

              choices: [
                {
                  label: "1.",
                  text: "帰り次第",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "帰るなり",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "帰ったなり",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "帰るとなれば",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "ウェブサイトごとに異なるパスワードを設定するのは面倒だが、第三者が不正にアクセスされる(　)、やむを得ない。",
              analysis:
                "虽然给每个网站设不同密码很麻烦，但既然存在第三方非法访问的风险，就不得不这么做。\n「～以上」表示“既然…就…”，强调前项条件成立时后项的必然性。",

              choices: [
                {
                  label: "1.",
                  text: "しかない以上",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "しかない反面",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "恐れがある以上",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "恐れがある反面",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "昨日行った美術館は、一日では(　)作品が展示されていた。",
              analysis:
                "昨天去的美术馆，展出的作品多到一天看不完。\n「～ほどの」表示程度，强调数量多到无法完成某动作。",
              choices: [
                {
                  label: "1.",
                  text: "見きれないほどの",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "見ずにはいられないほどの",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "見きれないといった",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "見ずにはいられないといった",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "引っ越しを控えているので、なるべく余計な出費を(　)、友人に誘われたスキー旅行に行くことにした。",
              analysis:
                "因为马上要搬家，虽然想尽量控制额外开支，但还是决定参加朋友邀请的滑雪旅行。\n「～たいところだが」表示“虽然想…但…”，体现计划与现实的矛盾。",
              choices: [
                {
                  label: "1.",
                  text: "押さえたら抑えたで",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "抑えられるものなら",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "抑えるには抑えずに",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "押さえたいところだが",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "驚いたことに、その小学生は、高校レベルの数学の問題をすらすらと(　)。",
              analysis:
                "正确答案：4.解いてみせた\n令人惊讶的是，那个小学生流畅地解开了高中水平的数学题。\n解析：“解けるとは”的“〜とは…（思わなかった/驚いた）”表示惊讶，“思わなかった”或“驚いた”在该句中被省略。但此处的主语为“那个小学生”而不是“我”，因此选项1不选。\n“解いてみせた”表示“那个小学生成功解出这道题（给别人看）了”，符合语义，选项1正确。",
              choices: [
                {
                  label: "1.",
                  text: "解けるとは",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "解けるものなら",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "解いたまでだ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "解いてみせた",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "専門家の話では、かつてこの地域一帯は海だった(　）。",
              analysis: "专家称，这一带过去曾是一片海洋。\n「～という」用于转述他人观点，客观引述信息。",
              choices: [
                {
                  label: "1.",
                  text: "という",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "といえる",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "といった",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "といわれる",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "子どもは生まれてくる家庭環境を選べない。だからこそ、親の経済状況によって、子どもの教育機会が奪われること(　)。",
              analysis:
                "孩子无法选择出身家庭。正因如此，绝不允许因父母经济状况剥夺孩子的教育机会。\n「～あってはならない」表示“不允许存在…”，强调社会规范的否定。",
              choices: [
                {
                  label: "1.",
                  text: "があるわけではない",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "であるわけではない",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "があってはならない",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "であってはならない",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "(大学で)\n先生「青木さん、今度の報告誌のモデルを青木さんにお願いできたらと思うんだけど、どうかな」\n青木「やりたいです。でも、私(　)」\n先生「もちろん」",
              analysis:
                "「〜なんか」是典型的自谦表达：“像我这样的人也行吗？”\n “私なんかでいいんですか？”：表达对自己能力的怀疑与谦虚，是非常自然的回应。",
              choices: [
                {
                  label: "1.",
                  text: "だったらいいんですか",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "なんかでいいんですか",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "だったらいいんでしょう",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "なんかでいいんでしょう",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題6 次の文の__★__に入る最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "昨日はとても寒く、積り___　___　_★_　___はずっと雪が降っていた。",
              analysis:
                "排序：2 → 3 → 1 → 4\n昨日はとても寒く、積りこそしなかったが午前中ずっと雪が降っていた。\n\nは前面一定是名词，只有“午前中”符合，所以最后一个空是选项4。\n动词简体形后只能放が，表示转折，形成“しなかったが”。\n【动词连用形/たり+こそ+しない】相当于【动词连用形/たり+は+しない】，是动词ない形的强调语气。因此为【積りこそしなかった】。",
              choices: [
                {
                  label: "1.",
                  text: "が",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "こそ",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "しなかった",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "午前中",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "この映画はあまりにも正直で___　___　_★_　___、コメディー作品だ。",
              analysis:
                "排序：1 → 3 → 2 → 4\nこの映画はあまりにも正直で真面目すぎるがゆえに周りの人々とのトラブルが絶えない男の日常を描いた、コメディー作品だ。\n\n「正直で真面目すぎる」构成原因，后续「がゆえに」（正因为）连接结果。\n「トラブルが絶えない」是具体情节，最后用「男の日常を描いた」修饰「コメディー作品」",
              choices: [
                {
                  label: "1.",
                  text: "真面目すぎる",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "周りの人々とのトラブルが絶えない",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "がゆえに",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "男の日常を描いた",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "___　___　_★_　___読みやすいように、最近は、ビジネス理論を漫画でわかりやすく解説したものが多い。",
              analysis:
                "排序：3 → 1 → 4 → 2\n一般的にビジネス書というと堅苦しいものと思われるがちだが、ビジネス書に抵抗がある人にも読みやすいように、最近は、ビジネス理論を漫画でわかりやすく解説したものが多い。\n\n「一般的にビジネス書というと」引出普遍印象，后续「堅苦しいと思われるがちだが」表示转折。\n「ビジネス書に抵抗がある人にも」点明目标人群，整体逻辑为：\n“通常认为商业书籍枯燥，但为了让抵触的人也能读，用漫画通俗化”。",
              choices: [
                {
                  label: "1.",
                  text: "堅苦しいものと思われるがちだが",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "抵抗がある人にも",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "一般的にビジネス書というと",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "ビジネス書に",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "渋滞の中を___　___　_★_　___遊園地に入る前から疲れてしまった。",
              analysis:
                "正确选项：1\n参考排序：2 → 4 → 1 → 3\n渋滞の中を3時間運転して、ようやくついたと思ったら、今度は駐車場が混雑していて、遊園地に入る前から疲れてしまった。\n3時間運転して——说明在堵塞的车流中“开了三个小时的车”；\nようやくついたと思ったら——接着“刚以为终于到达的时候”；\n今度は駐車場が混雑していて——紧接着“这次又遇上停车场堵着的情况”，导致“在进游园地之前就已经累坏了”。",
              choices: [
                {
                  label: "1.",
                  text: "今度は",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "3時間運転して",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "駐車場が混雑していて",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "ようやくついたと思ったら",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "商品やサービスが___　___　_★_　___ない。",
              analysis:
                "排序：4 → 2 → 3 → 1\n商品やサービスがどんなに良い物でもその存在が知られないことには売れるも売れないもない。\n\n「どんなに良い物でも」强调品质，后续「存在が知られないことには」表条件，最后「売れるも売れないもない」总结结果。\n句意：再好的商品，若无人知晓，根本谈不上是否畅销。",
              choices: [
                {
                  label: "1.",
                  text: "売れるも売れないも",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "その存在が",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "知られないことには",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "どんなに良い物でも",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>寂しい片耳</p><p>澤田瞳子</p><p>久しぶりに少し、落ち込んでいる。お気に入りのピアスを片方、落としてしまったからだ。</p><p>これが一人で行動している昼間なら、諦めがつくまで探しに戻るが、生憎、紛失に気付いたのは夜。それも編集者の方々に丸一日取材にご同行いただいた末、お疲れさまと入った店であった。</p><p>ようやく一息ついてらっしゃる編集者さんたちに、（　41　）。動揺を押し殺してさりげなく周りを見回し、やっぱりない、と片耳に触れるのが精いっぱい。朝からほうぼう歩き回った後のため、探しに行くのはどう考えても不可能で、そのまますごすごと家に引き上げた。</p><p>親しいお店で作っていただいたピアスなので、片方だけ発注するのは難しくない。</p><p>（　42　）自分でも珍しいほど落ち込んだのは、それが三、四年ぶりの落とし物だったからだ。</p><p>ピアスホールを開けて間がない二十代の頃は、着用に慣れていなかったため、二、三か月に一度は必ずピアスを落とした。三十代からは徐々にそれが間違になり、この数年ほとんと失敗をしていない。</p><p>最初から自分の迂闊さを（　43　）、何を落とそうともがっかりはしない。もはやそんなことはあるまいと高を括っていただけに、傲慢な自分がなおさら情けなくなる。顧みれば逆上がりも九九も苦手だった子供の頃は、「できないこと」をたくさん抱えているのが当然で、どんなミスをしても平気だった。大人になればなるほど、失敗が怖く、人の眼が気になってきたのは、知らず知らずのうちに自分が「できる」人間と考えるに至ったからかもしれない。</p><p>だがそもそも、年を重ねたから失敗をしないというのは、幻想だ。ピアス（　44　）、最近たまたま落とさない日々が続いていただけで、明日からは毎日紛失を重ねるかもしれない。いや、自分のうっかり工合を考えれば、むしろその方が自然だと自分に言い聞かせながら、私はまだピアスの消えた片耳を撫で続けている。</p>",
          contentTranslationZhHans:
            '<p>寂寞的单耳环</p><p>泽田瞳子</p><p>最近少有地有些消沉。只因弄丢了一只心爱的耳环。</p><p>若是白天独自外出时发生此事，我肯定会坚持找到最后。不巧发现遗失时正值深夜，更是在与编辑部诸位结束整日取材工作后休息的店里。</p><p>实在不忍让疲惫的编辑们再费心。我强压着慌乱，佯装无事地环视四周，但果然还是没有。最终也只能轻抚耳垂，这已是我所能做的全部。考虑到白天里辗转多处的行程，折返寻找已无可能，只得黯然归家。</p><p>这是在熟人店铺里定制的耳环，所以单独补做一只并不难。</p><p>即便如此，我还是出乎自己意料地感到沮丧，因为这是我三四年来第一次弄丢东西。</p><p>二十多岁初穿耳洞时，我还不习惯佩戴饰品，每两三个月必会丢失耳环。步入三十岁后，那种情况逐渐变少，近些年几乎再未出错。</p><p>若早知自己本性粗疏，本不会为任何遗失所困。正因自以为不会再犯，此刻的傲慢之态更显难堪。回想儿时无论单杠翻身上杠还是九九乘法表都难以掌握，总觉得"做不到"才是人生常态，犯再多错也坦然。年岁愈增愈畏惧失误，愈发在意他人眼光，或许正因为在不知不觉中，将自己当作了一个“能干的人”吧。</p><p>但归根结底，认为年岁增长就不会犯错不过是虚妄。即使是耳环，这些日子的安然无恙或许只是侥幸，从明天起可能又会每天都丢。不，以我这粗心大意的性格，这才是应有的常态吧。如此自我劝解着，手指却仍不住摩挲着那只空荡的耳垂。</p>',
          type: SectionType.VOCAB_GRAMMAR,
          title: "問題7 次の文章を読んで、41から44の中に入る最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "",
              analysis:
                "这里空处前面说：「编辑们总算能够松口气了」，后文描述自己只能压抑住动摇、偷偷四处张望……也就是说，既然编辑们辛苦了一天，“绝对不会让他们为我担心（去帮我找耳环）”。\n「気を使わせる」＝“让（别人）费心、担心”；\n加上否定强化「～はしない」＝“绝不会（让人担心）”；\n中间的「られ」是可能态，将「使わせる」强化为更强烈的否定。\n因此用「気を使わせられはしない」最恰当，表达“我可不会让他们替我操心”的意思。",
              choices: [
                {
                  label: "1.",
                  text: "気を使えはしない",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "気を使ってなどいない",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "気を使わせられはしない",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "気をつかわせてなどいない",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "",
              analysis:
                "前一句说“因为是常去的店里定做的，只订一只也不难”，本应无伤大雅；但下文却说“自己都觉得前所未有地沮丧”，后面给出原因“因为这是时隔三四年才第一次丢东西”。句意是“尽管单买并不困难，然而我还是异常沮丧”，所以用转折接续「それにもかかわらず」（“虽说如此/尽管如此”）。",
              choices: [
                {
                  label: "1.",
                  text: "それによって",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "そればかりでなく",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "それどころか",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "それにもかかわらず",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "",
              analysis:
                "句型是“如果……”＋“就不会……”：\n「最初から自分の迂闊さを承知していれば、何を落とそうともがっかりはしない。」\n意即“如果从一开始就意识到自己的粗心，无论丢什么也不会失望”。这里要用假定形「～していれば」表示“如果……的话”。",
              choices: [
                {
                  label: "1.",
                  text: "承知していれば",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "承知していて",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "承知していたのか",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "承知していたかのように",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "",
              analysis:
                "「だって」可以表示“就算是……”的意思。\n「ピアスだって、最近たまたま落とさない日々が続いていただけで……」\n相当于“就算是耳环，只是最近恰好一直没丢而已，明天开始说不定又天天丢”。",
              choices: [
                {
                  label: "1.",
                  text: "なら",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "だって",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "でさえ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "といって",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（1）</p><p>どんな社会にも、「情報通」と呼ばれる人がいます。</p><p>「物知り」（注）とは違います。多くの場合は、「情報に通じた人」つまり、とこにいけば情報があるのかを知っている人を指します。</p><p>どんなに知識の豊かな人でも、知っている分野や程度にはかぎりがあります。けれども、ある分野については、人並み以上によく知っている人は少なくありません。</p><p>「この問題については、〇〇さんが詳しい」</p><p>「この問題なら、〇〇さんに聞けばわかる」</p><p>そうした引き出しを、人並み以上にもっている人が「情報通」なのです。</p><p>（注）物知り：物事を広くよく知っている人。</p>",
          contentTranslationZhHans:
            '<p>（1）</p><p>任何社会中都存在被称为"消息通"的人。</p><p>他们与"博学者"不同。多数情况下，这类人指的是"通晓信息渠道的人"，即知道去哪里能获取信息的人。</p><p>即使知识再渊博的人，其了解的范围和深度也有限。但在某些特定领域，比常人更为了解的人并不少见。</p><p>“关于这个问题，〇〇最清楚”</p><p>“这个问题的话，问〇〇就能明白”</p><p>这种拥有超出常人范围的"信息抽屉"的人，就是所谓的"消息通"。</p><p>（注）物知り：广泛通晓各类事物的人。</p>',
          type: SectionType.READING,
          title:
            "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、「情報通」とはどのような人か。",
              analysis:
                '题目要求根据作者观点判断"消息灵通人士"的定义。\n正确选项：3. 清楚谁拥有所需信息的人\n1.错误。"广泛领域"是"博学者"的特征，文中明确区分两者，且强调"情報通"是知道信息所在而非自身拥有信息。\n2.错误。文章未提及对自身信息需求的判断，重点在于掌握信息源的人际网络。\n3.正确。对应原文"知道去哪里能获取信息的人"，即能把握信息持有者的分布。\n4.错误。文中仅停留在知晓信息源阶段，未提及主动解决问题的层面。\n关键句定位：“とこにいけば情報があるのかを知っている人”（知道哪里能获取信息的人），以及通过举例“〇〇さんに聞けば”（问〇〇先生）的表述，都指向选项3的“把握信息持有人”这一核心特征。',
              choices: [
                {
                  label: "1.",
                  text: "幅広い分野で人並み以上の情報をもっている人。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "何が自分にとって必要な情報かをよく理解している人。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "誰が必要な情報をもっているかをよく把握している人。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "情報をもっている人を見つけて、問題解決ができる人。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（2）</p><p>人間の感覚がいかにあてにならないものかを示す有名な実験があります。</p><p>まず、三つの容器に冷たい水とぬるま湯、それに熱いお湯を用意します。はじめに右手を冷たい水に、左手を熱いお湯に、同時につけます。しばらくつけたら、今度は両手を同時にぬるま湯につけてみます。すると、冷たい水に慣れた右手は温かと感じ、熱いお湯に慣れた左手は同じぬるま湯を冷たいと感じるでしょう。人間の感覚は同じ身体の一部でさえも、ちがう意味を受け取ってしまうのです。</p>",
          contentTranslationZhHans:
            "<p>（2）</p><p>有一个著名实验揭示了人类的感觉有多么不可靠。</p><p>首先准备三个容器，分别装入冷水、温水和热水。先将右手浸入冷水，左手同时浸入热水。保持一段时间后，将双手同时浸入温水。这时会发现：适应了冷水的右手会感觉温水温暖，而适应了热水的左手却会觉得同样的温水冰凉。人类的感觉器官即使在同一躯体上，也会产生不同的感知。</p>",
          type: SectionType.READING,
          title:
            "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "手の感覚について、実験からどのようなことが分かったか。",
              analysis:
                '题目要求根据实验现象推断关于手部感觉的结论。\n正确选项：4. 因先前接触的水温不同，对温水温度的感受会产生变化\n\n选项解析：\n1.错误。文中未出现"温度无法感知"的描述，相反始终强调"能感知但感受不同"。\n2.错误。实验结果显示：冷水适应的手（右手）会感觉温水温暖，而热水适应的手（左手）会感觉温水冷，选项描述与实验结果相反。\n3.错误。温水实际温度固定，不存在"比之前温度低"的客观事实，属于混淆主观感受与客观温度的陷阱选项。\n4.正确。对应原文"惯れた右手は温かと感じ...左手は冷たいと感じる"，明确说明前段体验影响后续感知。\n关键句定位：\n「冷たい水に慣れた右手は温かと感じ、熱いお湯に慣れた左手は同じぬるま湯を冷たいと感じる」——通过对比实验证明，同一温度因前段接触温度不同而产生相反感受，这正是选项4所述现象。',
              choices: [
                {
                  label: "1.",
                  text: "熱いお湯や冷たい水につけ続けていると、温度が感じられなくなる。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "冷たい水のあとより熱いお湯のあとにつけたほうが、ぬるま湯を温かく感じる。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "先につけていた水やお湯の温度より、ぬるま湯の温度のほうが低く感じる。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "先につけていた水やお湯の温度によって、ぬるま湯の温度の感じ方が変わる。",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（3）</p><p>自動車が自動的に運転されることになれば、それは完全に単なる移動手段となり、運転することの娯楽性は存在しなくなる。人間が自分で自動車を運転する楽しさというものは、安全や利便性（注1）とのトレードオフとして（注2）、なくなってしかるべきものなのだろうか。人間を害するリスクのある非合理な娯楽性は、自動運転車とともになくなってしまえばいいと割り切ってしまう前に、安全性と娯楽性が両立する解はあると信じたい。</p><p>（注1）利便性：便利さ</p><p>（注2）~とのトレードオフとして：ここでは、~を得るかわりに</p>",
          contentTranslationZhHans:
            '<p>（3）</p><p>如果汽车实现完全自动驾驶，它将彻底沦为单纯的移动工具，驾驶的乐趣也将不复存在。人类亲手驾驶汽车的愉悦感，难道就应该作为换取安全性与便利性的代价被舍弃吗？全盘否定那些对人类有害的非理性娱乐性，觉得它们就该随着自动驾驶汽车一同消失之前，我更愿意相信存在安全性与娱乐性兼得的解决方案。</p><p>（注1）利便性：方便程度</p><p>（注2）~とのトレードオフとして：此处指"以牺牲~为代价换取"</p>',
          type: SectionType.READING,
          title:
            "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "自動運転車の登場について、筆者はどのように考えているか。",
              analysis:
                '题目要求判断作者对自动驾驶汽车发展的态度。\n正确选项：1. 虽然安全和便利性很重要，但不愿失去自主驾驶的乐趣\n\n选项解析：\n1.正确。对应原文"人間が...楽しさは...なくなってしかるべきものなのだろうか"的反问句式，以及"両立する解はあると信じたい"的表述，体现作者对保留驾驶乐趣的坚持与对两者共存的期待。\n2.错误。"実現は難しい"（实现困难）属于过度推测。作者仅表达"相信存在解决方案"，未否定其可行性。\n3.错误。"許容せざるをえない"（不得不接受）与作者立场相反。文中通过反问与"信じたい"明确反对单纯舍弃娱乐性。\n4.错误。"犠牲にしてまで...進めてはいけない"（不应以牺牲为代价推进）属于极端化表述。作者并未否定自动驾驶本身，而是强调需兼顾娱乐性。\n关键句定位：\n核心态度句："なくなってしかるべきものなのだろうか"（反问句式否定单纯舍弃娱乐性）\n立场总结句："両立する解はあると信じたい"（明确表达对两者共存的信念）\n——均指向作者在承认安全重要性的同时，强烈希望保留驾驶乐趣的立场（选项1）。',
              choices: [
                {
                  label: "1.",
                  text: "安全や便利さも重要ではあるが、自分で運転する楽しさは失いたくない。",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "安全性と娯楽性の共存が望ましいが、実現は難しい。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "娯楽性がなくなるが、安全や便利さのためには許容せざるをえない。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "娯楽性を犠牲にしてまで、運転の自動化を進めてはいけない。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（4）</p><p>翻訳という作業は音楽の演奏に似ている。作家は作曲家に、翻訳家は演奏家に、それぞれたとえることができるのではないか。前から、ひそかにそう考えていた。</p><p>新しい世界観を提示するために構成を練り、一つ一つの言葉や音を吟味して組み立てていく作家＝作曲家。かたや（注）、作者に寄りそうようにして意味を汲み、原作や楽譜を丹念にたどってその世界を再現してみせる翻訳家＝演奏家。同じ楽譜をもとにしていても、演奏家によって、生み出される曲の印象がまるで違うことがあるように、小説や詩も、翻訳家の個性や解釈によって、何種類もの異なる翻訳が存在することがありうる。</p><p>（注）かたや：一方</p>",
          contentTranslationZhHans:
            "<p>（4）</p><p>翻译工作与音乐演奏颇为相似。或许可以将作家比作作曲家，将翻译家比作演奏家——这是我长久以来暗自持有的观点。</p><p>作家如同作曲家，通过精心构思来呈现新世界观，逐字逐句推敲锤炼；而翻译家则如演奏家，贴近作者解读深意，细致追随原作或乐谱重现其世界。正如同一份乐谱由不同演奏家诠释会呈现截然不同的曲调印象，小说或诗歌的翻译也可能因翻译家的个性与理解，催生出多种迥异的译本。</p><p>（注）かたや：另一方面</p>",
          type: SectionType.READING,
          title:
            "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者は、翻訳のどのような点が音楽の演奏と似ていると述べているか。",
              analysis:
                '题目要求判断作者提出的"翻译与音乐演奏相似点"的核心依据。\n正确选项：2. 即使翻译同一原作，完成的译本也可能呈现多样性\n\n选项解析：\n1.错误。原文强调"再現してみせる"（努力再现），而非"无法再现"。选项曲解为消极结果，与作者对翻译再现性的肯定相悖。\n2.正确。对应原文"同じ楽譜...印象が違う"与"何種類もの異なる翻訳が存在"，明确说明同一原作因诠释者不同产生多样性，与演奏类比的核心相似点完全契合。\n3.错误。"異なる作家の作品でも似た印象"（不同作家的作品可能相似）属无中生有。文中仅讨论同一原作的不同翻译，未涉及跨作品比较。\n4.错误。"さまざまな世界観が生み出される"（创造多种世界观）偷换概念。作者强调翻译家"再現"原作世界观，而非"创造新世界观"，选项与原文逻辑矛盾。\n\n关键句定位：\n类比核心："同じ楽譜をもとにしていても...印象がまるで違う"（同一乐谱不同演奏效果）\n翻译对应："翻訳家の個性や解釈によって...異なる翻訳が存在"（翻译家个性导致译本差异）\n——直接指向选项2的"同一原作译本多样性"这一本质相似点。',
              choices: [
                {
                  label: "1.",
                  text: "原作を丹念にたどっても、作家の世界観が再現されない可能性がある点。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "同じ原作を翻訳しても、出来上がった翻訳が多様になりうる点。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "翻訳家の個性により、異なる作家の作品でも似た印象になりうる点。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "翻訳家次第で、さまざまな世界観が生み出される可能性がある点。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（1）</p><p>育児といえば、たいていは母親によってなされると思われています。（中略）</p><p>ところがライオンはちょっと違います。同じ群れのライオンは、そろって出産する傾向があり、育児も群れの雌全員が協力して行うのです。赤ちゃんは生まれて一ヵ月あまりは物陰に隠され、母親だけで育てられます。しかし、歩けるようになると、群れに連れてこられて共同生活が始まります。</p><p>ライオンの群れには複数の大人の雌がいますから、それらの子どもたちが集まって、大所帯となります。集められた子どもたちは、自分の母親以外のライオンの乳も飲むことができ、群れの全員の保護を受けることができます。捕食獣（注1）であるライオンは、子育て中も獲物狩りに出かけなければなりません。母親一頭で子育てをしている場合には、外出中にハイエナ（注2）などに子どもが捕食される危険があります。しかし、共同育児をして誰かが子どものそばに残っていれば安心です。</p><p>若い雌ライオンは敏捷（びんしょう）（注3）ですが、子育ての経験に乏しく、失敗することもよくあります。それに比べ、壮年期になったライオンは経験豊富で態度もどっしりとして子育ても上手です。年長の雌がまとめて面倒を見た方が育児はうまくいくかもしれません。反面、若いライオンの敏捷性は狩りでは有利に働くでしょう。ライオンは狩りも共同で行い、獲物はみんなで食べますから年老いて狩りに参加できなくても、食事をとることができるのです。</p><p>ライオンたちは、明確な分業とまではいえなくても、うまく育児と狩りを全員が協力することで、問題を解決しています。</p><p>（注1）捕食獣：ほかの動物を捕らえて食べる獣</p><p>（注2）ハイエナ：動物の一種</p><p>（注3）敏捷だ：動きが素早い</p>",
          contentTranslationZhHans:
            "<p>（1）</p><p>提到育儿，人们通常认为主要由母亲承担。（中略）</p><p>然而狮子的情况有所不同。同一狮群的母狮倾向于一同生产，育儿工作也由全体雌狮协同进行。幼狮出生后约一个月内会被藏在隐蔽处，仅由母亲单独抚养。但当幼狮具备行走能力后，就会被带入狮群开始共同生活。</p><p>由于狮群中存在多只成年雌狮，她们的幼崽聚集形成大家庭。聚集的幼崽不仅能吸食其他雌狮的乳汁，还能得到全体成员的庇护。作为捕食者的母狮，育儿期间仍需外出捕猎。若由单只母狮育儿，外出时幼崽可能遭鬣狗等天敌捕食。但共同育儿，可以确保总有成员留守幼崽身边，安全性得以提升。</p><p>年轻雌狮虽动作敏捷，但育儿经验不足，常出现失误。相比之下，壮年期的雌狮经验丰富且沉稳，育儿技巧更为娴熟。由年长雌狮统一照料或许能使育儿更顺利。另一方面，年轻雌狮的敏捷性在狩猎中更具优势。狮子采取群体狩猎并共享猎物，因此即便年老无法参与捕猎，仍能获得食物。</p><p>狮子们虽未形成明确分工，但通过全体协作，巧妙解决了育儿与捕猎的平衡问题。</p><p>（注1）捕食獣：捕食其他动物的兽类</p><p>（注2）ハイエナ（鬣狗）：一种动物</p><p>（注3）敏捷だ：动作迅速</p>",
          type: SectionType.READING,
          title:
            "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "ライオンの子育てについて、筆者はどのように述べているか。",
              analysis:
                '问题：关于狮子的育儿方式，作者如何描述？\n正确选项：4. 幼崽能行走后，由群内雌狮协作抚养\n\n选项解析：\n1.错误。文中明确"生後一ヵ月あまりは...母親だけで育てられる"，排除"生後すぐに群れで交替抚养"的表述。\n2.错误。"年長の雌が育てる"属过度限定。原文强调"群れの雌全員が協力"，未限定特定年龄层。\n3.错误。时间轴错位："歩けるようになるまで"对应的是"母親だけで育てられる"阶段，而选项3将"群れの中で"错误嫁接于此时期。\n4.正确。完全对应"歩けるようになると...共同生活が始まる"及"群れの雌全員が協力"的描述。\n关键句定位：\n时间分界点："歩けるようになると、群れに連れてこられて共同生活が始まる"\n协作方式："群れの全員の保護を受ける"',
              choices: [
                {
                  label: "1.",
                  text: "生後すぐに、群れの中で雌が交代で育てる。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "生後一ヵ月あまり過ぎると、経験豊富な年長の雌が育てる。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "歩けるようになるまで、群れの中で母親が育てる。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "歩けるようになると、群れの雌が協力して育てる。",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "共同生活の利点について、筆者はどのように述べているか。",
              analysis:
                '问题：关于共同生活的优点，作者如何阐述？\n正确选项：2. 根据年龄分担角色，实现育儿与捕猎的兼顾\n\n选项解析：\n1.错误。部分正确但片面。壮年狮的经验主要用于"育児"，而"狩り"主要依赖年轻狮的敏捷性，选项未体现分工结构。\n2.正确。对应"若い雌は狩りで有利""壮年期は育児が上手"的年龄特性分化，及"共同で行い...食事をとれる"的协作收益，完整概括分工协作带来的两立性。\n3.错误。与原文"明確な分業とまではいえなくても"直接矛盾。\n4.错误。"どんな役割もできるようになる"属无根据推测，文中仅说明年轻狮承担狩猎，未提及其掌握育儿技能。\n\n关键句定位：\n年龄特性利用："若い雌は敏捷だが...壮年期は経験豊富"\n协作本质："全員が協力することで、問題を解決"',
              choices: [
                {
                  label: "1.",
                  text: "壮年期のライオンの経験を育児と狩りに生かすことができる。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "年齢に応じて役割を分担することで、育児と狩りが両立できる。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "群れの中での役割分担が明確になり、個々のライオンの負担が減る。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "若いライオンが育児も狩りも経験することで、どんな役割もできるようになる。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（2）</p><p>仕事柄（注1）、私は取材を受けることが多いが、あるとき取材をしている人から、人と話すのが苦手だと打ち明けられたことがある。取材中は自然な感じで会話が進んでいたこともあって少し驚いたが、そう言われてみるとたしかに少し緊張しているように見えなくもない。ただ、取材を受けている私の立場からすると、必ずしも悪い印象は受けなかった。</p><p>むしろ緊張感が相手に対する配慮のように感じられて、良い感じで話をすることができた。</p><p>私たちは、あることが苦手だと思うと、うまくできていないように思える面に目を向けてしまう。スムーズに言葉が出てこなかったことや、話が行きつ戻りつしてしまったことなどが気になって、自分を責める気持ちになる。</p><p>しかし、スムーズに言葉が出なかったことで、会話にため（注2）が出てきていることもある。相手は、その時間的すきまの時に、考えをまとめたり、振り返りをしたりできたりする。トントン拍子に（注3）会話が進まないことで、話している内容を多面的に考えることができたりもする。</p><p>   思うように会話できないときは、失敗ではなく、話を深めるように無意識に心が手助けしているようにも思える。（中略）失敗のように思えることには、それなりに意味があるのだろう。</p><p>欠点のように思えることも、見方を変えるとじつは長所だということが少なくない。自分に対して多面的な見方ができると、気持ちが楽になるし、本来の力を発揮できるようになる。</p><p>（注1）仕事柄：仕事の性質上</p><p>（注2）ため：ここでは、余裕の時間</p><p>（注3）トントン拍子に：順調に</p>",
          contentTranslationZhHans:
            "<p>（2）</p><p>由于工作性质，我常接受采访。有次采访时，对方坦言自己不擅长与人交谈。当时采访过程自然流畅，这让我稍感意外，但仔细想来对方确实略显紧张。不过从被采访者的角度来看，这并未给我留下负面印象。</p><p>相反，这种紧张感反而让我感受到对方的体贴，使对话氛围更为融洽。</p><p>我们一旦自认不擅长某事，就容易把注意力集中在那些做得不够好的方面。比如言辞不够流畅或表达反复绕圈等细节都会让我们在意，从而陷入自我责备。</p><p>然而，言辞不流畅产生的间隙，有时会可以给这场对话制造一些缓冲的空隙。对方可借此间隙整理思路或回顾内容。对话不能按部就班推进，反而能促使多角度思考话题。</p><p>当对话不如预期顺利时，或许这并非失败，，而是可以认为是内心在无意识中试图帮助我们加深交流。（中略）看似失败的现象，自有其存在的意义。</p><p>许多被视为缺点的事物，换个视角看或许正是优点。对自我持多维认知，不仅能缓解压力，更能激发自身潜力。</p><p>（注1）仕事柄：职业特性使然</p><p>（注2）ため：此处指缓冲时间</p><p>（注3）トントン拍子に：顺利推进</p>",
          type: SectionType.READING,
          title:
            "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "取材をしている人からうまく言葉が出てこないことについて、筆者はどのように考えているか。",
              analysis:
                '问题：关于采访者言辞不流畅的现象，作者如何看待？\n正确选项：2. 受访者可借机整理思路并深化内容\n\n选项解析：\n1.错误。文中强调受访者"利用间隙思考"，而非"被迫在间隙中发言"。选项1将主被动关系颠倒。\n2.正确。对应原文"相手は...考えをまとめたり、振り返りをしたりできたりする"及"話を深める"的描述，直接说明间隙对受访者的积极作用。\n3.错误。"分かりやすく伝えるための準備"属过度引申。未涉及信息整理传达的具体准备行为。\n4.错误。"自ら会話を進めようとする"与作者观点矛盾。文中明确"緊張感が配慮のように感じられ"，受访者无需主动推进对话。\n\n关键句定位：\n核心逻辑："トントン拍子に進まないことで、多面的に考えることができたりする"（不顺遂的对话促进多维度思考）\n直接结论："話を深めるように...手助けしている"（潜意识协助深化对话）',
              choices: [
                {
                  label: "1.",
                  text: "取材を受けている人は、間を取りながら話さなければならないという気持ちにさせられる。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "取材を受けている人は、考えをまとめたり振り返ったりしながら内容が深められる。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "取材を受けている人は、内容をまとめて分かりやすく伝えるための準備ができる。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "取材を受けている人は、自分のせいだと考えて自ら会話を進めようとする。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者の考えに合うのはどれか。",
              analysis:
                '问题：与作者观点相符的选项是？\n正确选项：4. 即使认为是失败或缺点，也可能因看待方式不同转化为优点\n\n选项解析：\n1.错误。文中仅讨论"自我认知"，未延伸至"对他人缺点的宽容"，属过度关联。\n2.错误。作者主张"视角转换"而非"改善缺点"，选项与"欠点...長所だ"的核心观点不符。\n3.错误。"探すのがいい"偏离文意。作者强调"多面的に見る"（多维度看待），而非单纯发掘优点。\n4.正确。完全对应"欠点のように思えることも...長所だということが少なくない"的论述，点明主观认知对事物价值的重塑作用。\n\n关键句定位：\n核心观点句："失敗のように思えることには、それなりに意味がある"（失败自有其意义）\n结论升华："見方を変えると...長所だ"（视角转换揭示优点）',
              choices: [
                {
                  label: "1.",
                  text: "自分に対して多面的な見方ができれば、ほかの人の失敗や欠点にも寛容になる。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "欠点だと思えることを改善できれば、自分の能力が発揮できるようになる。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "本来の力を発揮するためには、自分の欠点ではなく長所を探すのがいい。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "失敗や欠点だと思っていても、捉え方次第で長所になり得る。",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（3）</p><p>　以下は、商品パッケージのデザイナーが書いた文章である。</p><p>　大量生産品のように全国に流通し、多くの方々にご利用いただく商品の場合には、必ずマーケティング調査（注1）が行われます。とくにパッケージのリニューアル時には、従来よりも売り上げを落ちてしまっては大変なので、より慎重に行われます。</p><p>　ただそういう場合、必ず「今までの方が良かった」という意見が過半を占めます。ですがメーカーにとっては、定番となっている商品をどうしてもリニューアル（注2）しなければならないタイミングが必ずやってきます。それは、競合他社が売り上げを伸ばしたり、技術開発に伴い商品そのものが改善されたり、いろいろな理由でそれは必ずやってくる。ところがマーケティング調査してみると「変えない方がいい」という結果が出てしまう。今までのファンはその商品に愛着をもっているわけですから、リニューアルに大賛成してくれるわけがないのです。ですが、どうしても新しくしなければならない。</p><p>　私はこういった時、これまでの財産をうまく生かして、今までのファンがある程度を許容してくれれば、それは大成功だと考えています。最初は少し許せない部分があったとしても、これが一年、二年経つと、新しいデザインも見慣れてくる。したがってマーケティング調査の数字は、そういう時間軸も考えたうえで見る必要があります。</p><p>(注1)マーケティング調査：市場調査</p><p>(注2)リニューアル：ここでは、更新</p>",
          contentTranslationZhHans:
            "<p>（3）</p><p>以下是由商品包装设计师所写的文章。</p><p>像大规模生产品那样在全国流通、为众多顾客所使用的商品，肯定会进行市场调查。尤其是在包装更新时，如果销量比以前下降就麻烦大了，因此会更加谨慎地进行。</p><p>但是在这种情况下，一定会出现超过半数的意见说“还是以前的好”。然而对厂商来说，总会有不得不对常销商品进行改版升级的时候。因为竞品销量上升，或随技术升级商品本身得到改良等各种原因，这样的时机必然会来。但是市场调查结果往往会显示“不改为好”。毕竟一直以来的粉丝们对该商品有深厚的感情，不可能大力支持更新。但又确实不得不推陈出新。</p><p>我在这种时候，认为只要能巧妙地利用原有的资产，让原有的粉丝在某种程度上予以接受，那就是大成功。即使最初有一些令人难以接受的部分，过上一两年后，他们也会逐渐习惯新的设计。因此，观察市场调查的数据时，有必要考虑到这种时间维度。</p><p>（注1）マーケティング調査：市场调查</p><p>（注2）リニューアル：此处指更新</p>",
          type: SectionType.READING,
          title:
            "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "こういった時とは、どのような時か。",
              analysis:
                "题干问：“こういった時”是指怎样的时机？\n正确答案：2. パッケージの変更を望まないファンが多いのに、変更せざるをえない時\n文中正是在说“尽管大多数粉丝都说‘还是以前的好’，却又不得不进行更新”的时刻。\n\n各选项正误\n1.错误。文中并未说粉丝因更改包装而失去对该商品的喜爱，只是“反对更改”。\n2.正确。如上所述。\n3.错误。原文原因是“竞争对手销量上升”“技术改良”等，而非“为了吸引新粉丝”才一定要改。\n4.错误。调查结果中粉丝的意见很明显都是“反对”，并非“不知道粉丝态度”。",
              choices: [
                {
                  label: "1.",
                  text: "パッケージの変更に伴って、フアンが商品への愛着を失った時",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "パッケージの変更を望まないフアンが多いのに、変更せざるをえない時",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "新しいフアンを獲得するには、パッケージの変更が不可欠だと分かった時",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "フアンの賛否が分からない状況で、パッケージを変更しなければならない時",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "マーケティング調査の結果について、筆者はどのように考えているか。",
              analysis:
                "题干问：作者如何看待市场调查的结果？\n正确答案：3. 消費者の反応が変わっていくことを考慮して分析するべきだ。\n文末明确指出，“即使最初有些抵触，过一两年就会习惯新设计，所以看市场调查的数据时，要考虑到这样的时间轴”。\n\n各选项正误\n1.错误。作者虽提到“要善用既有资产，让粉丝多少能接受”，但这句并不是针对“调查结果的分析方法”作出的总体评价。\n2.错误。作者并未主张“积极采纳肯定意见”，而是强调要从更长的时间维度来解读数据。\n3.正确。如上所述，必须考虑消费者随着时间变化的反应。\n4.错误。文章提到的是“未来一两年内的变化”，并非“结合过去的结果”来判断偏好变化。",
              choices: [
                {
                  label: "1.",
                  text: "一部の消費者の意見として、うまく生かすべきだ。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "肯定的な意見を積極的に取り入れて商品開発に生かすべきだ。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "消費者の反応が変わっていくことを考慮して分析するべきだ。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "過去の結果と合わせて、消費者の好みの変化を読み取るべきだ。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>（4）</p><p>群馬県の上野村で暮らすようになって覚えたもののひとつに「待つ」という感覚がある。</p><p>たとえばこの村の農業は春を待たなければはじまらない。山菜も、茸も、それが出てくる時期を待たなければけっして手には入らない。木材として利用するのなら、木を切るのは、森の木々が活動を低下させる秋から冬がくるのを待つ必要がある。実に多くのことが、村では<u>「待つ」ことからはじまっていく</u>。</p><p>それが、自然とともに働き、暮らすということなのであろう。自然の力を借りようとすれば、自然がつくる、それに適したときがくるのを待たなければならない。といってもそれは、のんびりした暮らし方とばかりもいえないのである。なぜなら、ときを待つ以上、逆にそのときを逃してしまったらうまくいかなくなる。田植えのとき、草取りのとき、稲刈りのとき…。村の暮らしには、逃がしてはいけないときがたえずやってくる。</p><p>ときを待つ暮らしにとっては、人間の意志は万能ではない。それよりも自然という他者の動きの方が重要で、人間の意志は、自然の動きをうまく活用する範囲内でしか有効ではない。だから、自然と結ばれ、ときを待ちながら働き暮らしてきた村の人たちは、人間関係のなかでも同じような感覚を育んだ。人間関係においても自分の一方的な意志は万能ではない。人々の動きを理解しながら、ちょうどよいタイミングがくるのを待って、そのときを逃さずに働きかけていく。それが村の人たちの人間関係のつくり方だった。自然との関係のなかで学んだことが人間同士の関係のなかでもいかされていたのである。</p>",
          contentTranslationZhHans:
            '<p>（4）</p><p>在群马县上野村生活后，我学会的一种新的感受就是“等待”。</p><p>例如，这个村庄的农业活动必须等待春天到来才能开始。山菜与菌菇，若不等生长季节到来便无法采摘。若要将砍伐树木作为木材使用，则需等待秋至冬季——山林树木活动趋缓的时期。村庄里，几乎所有事务都始于"等待"。</p><p>这或许就是与自然共生劳作的真谛。若想借助自然之力，就必须等待自然创造出最适宜的时机。但即便如此，这并非全然悠闲的生活方式。那是因为，既然要等待时机，一旦错过了，事情就很难顺利进行。插秧之时、除草之际、收割之期…村中生活永远充斥着不可错过的关键时刻。</p><p>对于这种以"等待"为基础的生活，人类意志并非万能。相比而言，“自然”这一他者的律动更为重要，人类意志唯有在巧妙顺应自然规律的范围内才有效用。因此，与自然共生、在等待中劳作的村民，培养出了同样的“等待”意识。在人际交往中，自己单方面的意志同样无法主宰一切。村民通过理解他人的动向，等待最佳时机降临，并在抓准这个时机精准行动。这正是他们构建人际关系的方式——将自然中学得的智慧运用于人际关系。</p>',
          type: SectionType.READING,
          title:
            "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "「待つ」ことからはじまっていくとあるが、何を待つのか。",
              analysis:
                '问题：文中提到"始于等待"，等待的对象是什么？\n正确选项：3. 等待自然进入适合接受恩惠的状态\n\n选项解析：\n1.错误。"自然恢复丰饶"属过度引申。文中强调利用自然资源的"时机"，而非生态恢复过程。\n2.错误。与文意完全相悖。村民是"顺应自然周期"，而非"让自然配合人类需求"。\n3.正确。对应"自然がつくる、それに適したとき"（自然创造的适宜时机），即自然进入可被合理利用的状态。\n4.错误。"感知自然变化"非核心。等待的本质是"利用时机的成熟"，而非单纯察觉变化。\n关键句定位：\n定义性描述："自然の力を借りようとすれば...適したときがくるのを待たなければならない"（必须等待自然创造适宜时机）\n具体例证："田植えのとき、草取りのとき、稲刈りのとき"（插秧、除草、收割的不可错过时机）',
              choices: [
                {
                  label: "1.",
                  text: "自然が豊かさを回復して利用できるようになるとき。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "自然を人間の都合に合わせるのに適したとき。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "自然の恵みを受けるのに適した状態になるとき。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "自然の変化が感じられるようになるとき。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、村の人たちの人間関係はどのようにつくられたか。",
              analysis:
                '问题：根据作者观点，村民的人际关系如何构建？\n正确选项：1. 如同与自然的关系，观察对方行动并把握时机介入\n\n选项解析：\n1.正确。完全对应"人々の動きを理解しながら...タイミングがくるのを待って働きかけていく"（理解他人动向，等待时机行动）的描述，体现自然与人际的共通逻辑。\n2.错误。"相手の変化を待つ"（等待对方变化）曲解文意。核心是"主动把握时机"，而非被动等待变化。\n3.错误。"タイミングよく働きかける"（适时介入）表述片面，缺少"观察对方动向"的前提，与"理解しながら"的逻辑不匹配。\n4.错误。"焦らずに待つ"（不急躁等待）偏离重点。文中强调"逃さずに働きかける"（不错失时机行动），而非单纯被动等待。\n\n关键句定位：\n类比逻辑："自然との関係...人間同士の関係...いかされていた"（自然关系智慧运用于人际）\n具体方法："ちょうどよいタイミングがくるのを待って、そのときを逃さずに働きかけていく"（等待最佳时机并精准行动）',
              choices: [
                {
                  label: "1.",
                  text: "自然との関係と同様に、相手の行動を見ながら時機を捉えて働きかける。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "自然の変化を捉えるように、相手の変化を待って働きかける。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "自然の影響を受けやすい人々の動きを理解し、タイミングよく働きかける。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "自然の変化を待つのと同様に、相手からの働きかけを焦ずに待つ。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>教育を仕事にしていると、面白いことがたくさんある。その中の一つに「未熟さの効用」とても言うべき現象がある。知識や教育技術がたとえ未熟であったとしても、不思議と初めて受け持った授業が生徒との間に一番濃い縁を結ぶことがよくある。</p><p>　通常の仕事は、経験を積み、技術が上がるほど、質が良くなる。教育の世界でも、もちろん経験知は有効に働く。ベテランの安定感は、たしかに大切だ。しかし、教育の場合は、若く未熟てあることがむしろプラスに働くケースがよくあるのも事実だ。初年度に受け持った学生たちのことが鮮明に記憶に残り、その後のつき合いも深い、という経験が私にもある。</p><p>　これはどういうことだろうか。まず考えられるのは、初年度の緊張感が、学生たちに新鮮な印象を与えたということだ。慣れてくると手際が良くなる。すると、学生たちは、安心する一方で油断か出る。レストランで手際のいいコックに料理を出してもらうような気分で、授業を受け始めてしまうのだ。授業を上手にサービスする側と、サービスされる側に、立場がはっきり分かれてしまう。先生はいかにも先生らしく、生徒はいかにも生徒らしい。</p><p>　こうした関係は、安定はしているが、ときに新鮮さに欠ける。これに対して、初年度の教師が持つ緊張感は、生徒にも伝染する。その緊張感の共有が一つの同じ場を作り上けているのだという意識を生みだす。参加し作り上ける感覚が、生徒の方にも生まれる。それが思い出の濃さにもつながる。</p><p>　ここで初年度というのは、教師になって初めての年度というだけではない。学校を替わって、教師が新たな気持ちで臨むときも新鮮さが出る。あるいは新しい教科を担当し、一生懸命勉強して多少の不安を持ちなからも勢いをつけて切り抜けていくときにも、印象深い授業ができやすい。ただ単に未熟であることがいいわけではもちろんない。自分が未熟であることを自覚し、その分精一杯準備し、情熱を持って語りかけるどきに未熱さがプラスに転じるのだ。</p><p>　教育において「新鮮さ」は決定的な重要性を持っている。いわゆる「教師臭さ」は、学ぶ側の構えを鈍くさせてしまう。型どおりの教え方が染みついてじまっている、という印象を与えてしまうだけで大きなマイナスになるのだ。「決まり切った感じ」を印象として与えないようにすることが大切てある。経験知を重ねる良さを残したまま、新鮮さを失わない。これは、もはや一つの技である。「先生も自分たちと一緒に変化してくれるのだ」という意識が学ぶ側に生まれると、場を一緒に盛り上ける機運が高まる。</p>",
          contentTranslationZhHans:
            '<p>从事教育工作常遇趣事，其中一种可称为"不成熟的有效性"。即便知识或教学技巧尚不成熟，执教的第一门课程却常能与学生缔结最深的羁绊。</p><p>普通工作往往经验越丰富、技术越纯熟，质量就越高。教育领域当然也需经验智慧，资深教师的技术稳定性确属可贵。但不可否认，教育界中，年轻教师的不成熟反而常成优势。我自身亦有体验：第一年带过的学生往往记忆最深，后续交往更为深厚。</p><p>为什么会有这样的现象呢？首要因素或是第一年教学的紧张感给学生带来的新鲜印象。技术熟练后虽然效率提升，学生却易在安心之余松懈——如同在餐厅享受老练厨师的流畅服务般被动接受课程，师生角色泾渭分明。教师愈发"教师化"，学生愈发"学生化"。</p><p>这般关系虽稳定，却常失之鲜活。相较之下，新教师的紧张感能感染学生，催生出“共建同一个课堂”的共鸣意识。学生亦萌生共建感，这也是回忆之所以格外深刻的缘由。</p><p>这里所说的"首年"不仅指初任教师的一年，亦包含教师调往另一学校后以全新心态投入、心中满是新鲜感时，或接手新学科奋力钻研、怀抱不安却气势如虹地作出突破时——此类情境下也容易诞生令人难忘的课堂。单纯的不成熟当然没有益处，但当教师自觉不成熟而倾力准备、饱含热情倾谈时，青涩方能转化为优势。</p><p>教育中“新鲜感”具有决定性意义。所谓"教师味"会钝化学习者的主动性，徒留"套路化教学"的刻板印象，弊害甚深。关键在于不让学生产生"固化感"，在保有经验智慧优点的同时不失鲜活。当学习者萌生"老师也在与我们共同蜕变"的认知时，共建课堂的活力自会高涨。</p>',
          type: SectionType.READING,
          title:
            "問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、教育の仕事は通常の仕事とどのような点で異なるか。",
              analysis:
                '问题：作者认为教育工作与普通工作的差异点在于？\n正确选项：2. 即便知识或技术不足，仍可能产生良好结果\n\n选项解析：\n1.错误。文中未提及"人格良さ"（人格优秀）的优先性，核心对比在于经验价值与不成熟效果的辩证关系。\n2.正确。对应"未熟さがプラスに働くケースがよくある"（不成熟常成优势）及"知識...未熟でも濃い縁を結ぶ"（知识不足仍缔结深刻关系）的论述。\n3.错误。"好かれやすい"（更受欢迎）属偷换概念。作者强调"印象深い"（记忆深刻）而非单纯受欢迎。\n4.错误。与原文逻辑相悖。文中承认"経験知は有効"（经验有效），仅强调教育存在"不成熟亦有效"的特殊性，未否定经验提升质量的基本规律。\n\n关键句定位：\n核心对比句："通常の仕事は...質が良くなる"（普通工作质量随经验提升）↔"教育の場合は...プラスに働く"（教育中不成熟反成优势）',
              choices: [
                {
                  label: "1.",
                  text: "知識や技術の高さよりも人格の良さの方が重視される。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "知識や技術が十分でなくても良い結果を生むことがある。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "経験知の豊富なベテランより、若く未熟な方が好かれやすい。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "経験を積み技術が上がっても、仕事の質が良くなるとは限らない。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、初年度の教師の緊張感は学生たちにどのように影響するか。",
              analysis:
                '问题：新教师紧张感如何影响学生？\n正确选项：3. 产生与教师共同构建课程的参与感\n\n选项解析：\n1.错误。"和らげようとする"（试图缓解）属无中生有。文中仅描述紧张感的传染性，未提及学生主动缓解行为。\n2.错误。"生徒らしい態度"（学生式态度）与文意相反。新教师紧张感恰恰打破固有师生角色分化。\n3.正确。完全对应"参加し作り上げる感覚が...生まれる"（产生参与共建感）的表述。\n4.错误。"心を開く"（敞开心扉）属过度引申。文中强调"場を作り上げる意識"（共建场域意识），未涉及心理开放度。\n\n关键句定位：\n影响机制："緊張感の共有が...意識を生み出す"（紧张共享催生共建意识）',
              choices: [
                {
                  label: "1.",
                  text: "積極的に授業に参加し、教師の緊張感を和らげようとする。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "教師の立場を理解し、生徒らしい態度て授業を受けようとする。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "教師と一緒に授業を作っているのだという気持ちになる。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "教師と緊張感が共有でき、心を開いていいのだと思うようになる。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、教育を仕事にしている人間にとって大切なことは何か。",
              analysis:
                '问题：作者认为教育工作者最重要的是？\n正确选项：1. 永不满足于经验，持续自我革新\n\n选项解析：\n1.正确。对应"経験知を重ねる良さを残したまま、新鮮さを失わない"（在保留经验优势的同时不失新鲜）及"先生も...変化してくれる"（教师共同蜕变）的要求，本质是拒绝经验固化。\n2.错误。"新しい知識を身につける"（获取新知识）偏离重点。核心在于"意识革新"而非单纯知识更新。\n3.错误。虽提及"情熱を持って接する"（热情投入），但选项强调"补足不足"，而文中核心矛盾是"经验与新鲜感的平衡"，非能力短板问题。\n4.错误。"未熟さを隠さず"（不掩饰不成熟）曲解文意。作者主张"自觉不成熟并转化为动力"，而非刻意暴露弱点。\n\n关键句定位：\n终极要求："新鮮さを失わない"（不失新鲜）+"一緒に変化してくれる"（共同变化）→指向持续自我革新',
              choices: [
                {
                  label: "1.",
                  text: "経験に満足するとなく、自ら変化し続けようとすること。",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "新鮮さを失わないために、自ら新しい知識や技術を身につけること。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "自らの足りなさ補いつつ、情熱を持って接すること。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "自らの未熟さを隠さずに、学ぶ側か一体感を得やすくすること。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>A</p><p>「指示されないと自分から動かない」「指示されたことしかやらない」、いわゆる指示待ちになっているといわれる部下や後輩がいる。指示待ちになるのは、仕事に関する知識や経験が不足していたり仕事に対してやる気がなかったりすることなどが原因だといわれている。しかし実は、そもそも上司からの指示に従うことが自分の役目だと考え、それ以上のことをする必要性を感じていないという場合が多いのだ。</p><p>そのような部下には、何のためのこの仕事を行い、業務全体の中でほかの仕事とどうかかわっているのかを教えることが重要だ。仕事の全体像がイメージできれば、部下は次にやるべきことや工夫できそうな点が分かってくる。その結果、自分に求められていることに気づき、自主的に行動できるようになっていくだろう。</p><p>B</p><p>部下や後輩が指示待ちであるのを簡単に部下自身の責任と決めつけるのは、問題があります。指示待ちになっている理由が何かあるのかもしれません。</p><p>まず部下自身が自主的に動くことの重要性を認識していないケースがあります。「言われた通りにするのが部下の仕事だ」と思いこんでいて、むしろ「どうしましょう」と相談することこそが部下の務めだと信じているケースです。この場合は、どんな仕事もすべてマニュアルで示すことはできず、個人の判断や工夫がいることを伝えることからはじめる必要があります。</p><p>（中略）</p><p>「これはどうしましょうか」と相談された時は、部下自身にその対応策を考えられるかどうか見極めて、「一度、自分なりの案を考えてみて」と要求してみるのです。上司がいつもそのように振る舞えば、部下は上司の思いにそって、「提案型の相談」をするようになってきます。</p>",
          contentTranslationZhHans:
            '<p>A</p><p>有一种下属或后辈被评价为“不指示就不会主动行动”“只做被指示的事”，也就是只会“等待指示”。通常认为，形成这种情况的原因包括工作的知识经验不足或缺乏积极性。但实际上，多数情况源于下属认为"服从上司指示即本职"，未意识到需要做一些指令之上的事。</p><p>对此类下属，关键在于告知他们“此项工作的意义”及“这个工作在整体业务中与其他工作的关联”。若能构建工作全貌认知，下属自会理解后续应做事项与改进空间，进而觉察自己要做什么，并自主推进。</p><p>B</p><p>简单将只会等待指示的行为归咎于下属自身责任，这样的想法是存在问题的。出现这种情况，或许存在特定成因：</p><p>首先下属可能不懂得自主行动的重要性，比如深信“按吩咐行事即下属职责”，反倒将“前来请示该如何是好”视为自己应尽之责。此时首先需告诉他们：并非所有工作皆有指南可循，个人判断与创新不可或缺。</p><p>（中略）</p><p>当上司被下属询问"该如何处理"时，应判断下属能否自主思考对策，并要求他们先尝试拟定自己的方案。如果上司始终如此应对，下属就会顺应上司的期待，转为“提案型请示”。</p>',
          type: SectionType.READING,
          title:
            "問題11 次のAとBの意見文を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "部下や後輩が指示待ちになっている理由として、AとBが共通して述べていることは何か。",
              analysis:
                '问题：A与B共同指出的下属"等待指示"这一情况的成因是？\n正确选项：4. 认为执行上司指示即本职工作\n\n选项解析：\n1.错误。A提及"知识不足"但仅作次要原因，B未涉及此点，非共同要素。\n2.错误。"缺乏自信"未被两文共同讨论。A强调认知偏差，B探讨责任归属逻辑。\n3.错误。两文均未提及"上司详细指导"为成因，属无关选项。\n4.正确。A的"上司指示従うことが役目"与B的"言われた通りにするのが仕事"完全对应，为共同核心归因。\n\n关键句定位：\nA核心："上司からの指示に従うことが...役目だと考え"\nB核心："言われた通りにするのが部下の仕事だと思いこんで"',
              choices: [
                {
                  label: "1.",
                  text: "知識や経験が足りず、やるべきことが分からないさと。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "自信がなく自主的に仕事を進めることができないこと。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "上司がいつも丁寧にやり方を教えてくれること。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "上司にいわれたことを行うのが仕事だと思っていること。",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "指示待ちになっている部下や後輩の対応のしかたについて、AとBはどのように述べているか。",
              analysis:
                '问题：A与B对应对"等待指示"下属的方法如何论述？\n正确选项：3. A强调理解工作目的与全貌，B建议先自主思考方案\n\n选项解析：\n1.错误。A未要求"提案"，仅通过全貌认知促发自主性，与B的"提案型相談"不构成共同建议。\n2.错误。"一緒に考える"（共同思考）非A观点，A侧重个体认知构建。\n3.正确。A的"仕事の全体像を理解"与B的"自分なりの案を考えさせる"分别对应两文核心对策。\n4.错误。B未提"やり方が分かっている仕事"，而是要求未知情境下的自主思考，选项表述偏离。\n\n关键句定位：\nA对策："仕事の全体像がイメージできれば...自主的に行動"\nB对策："自分なりの案を考えてみて...提案型の相談"',
              choices: [
                {
                  label: "1.",
                  text: "AもBも、自分なりのやり方を考えて提案させるといいと述べている。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "AもBも、仕事の目的を伝え、やるべきことを一緒に考えるといいと述べている。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "Aは仕事の目的と全体像を理解させるといいと述べ、Bは自分でできそうなことはまず一人で考えさせるといいと述べている。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "Aはほかの仕事とのかかわりを教えるといいと述べ、Bはやり方がすでに分かっている仕事を与え自分自身でやらせるといいと述べている。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          content:
            "<p>最近、日本ではテレビや書籍で脳科学者がブームになりました。脳科学が一般の人々の関心を強く惹いた最大の理由は、脳科学によって自分がよりよい人生を歩めそうだと感じるからではないでしょうか。</p><p>科学は事物を客観的に扱う三人称的な学問です。そのため、何か冷たく、自分とは関係のないようなよそよそしさ（注1）を感じてしまいます。ところが、脳科学は人間の感情や思考や行動に関わる科学です。そのため、科学としては初めてのことですが、まるで文学や芸術のように一人称（注2）世界に踏み込んできて、幸せな人生のノウハウを提供してくれているように思えるのです。</p><p>しかし、せっかく関心を持っている人に水を差す（注3）つもりはないのですが、脳科学が今よりずっと進歩したとしても、人間の心や私たちの人生について、すみずみまで解き明かせるようになるわけではないと肝に銘じて（注4）おいた方がよいと思います。脳は複雑で、まだまだわからないことが多く、普通的な法則に到達するまでの道のりはきわめて遠いのです。そして、たとえ到達できたとしても、科学の普通法則は人生の個別性や一回（注5）に対しては全く無力です。ゆえに、人生の個別の事柄に適用して何かを予言したりすることは、おそらく不可能でしょう。</p><p>もう一つ大切なのは、科学は事実を扱うことはできますが、価値観の問題を扱うことはできないということです。ですから、脳科学によってある事実が判明したとしても、それを価値観と混同してはいけません。たとえば、ある脳科学の本に、「こうすれば脳を活性化できるので、みなさんもやってみましょう」と書いてあったとします。ですが、脳の活性化は絶対的な価値でしょうか。極端な例で考えてみましょう。副作用の全くない薬物だったとしても、薬物で健康な人間（たとえば受験生）の脳を活性化することは許されるでしょうか。これが許されるかどうかは、論理や価値観に属する話です。価値観は個人と社会が決めるものです。そして、個人の価値と社会の価値も同じとは限りません。脳科学の知見（注6）は事実を記述したものであって、価値とは何の関係もないのです。</p><p>（中略）</p><p>人類がどのような未来を選ぶかという問題も、結局のところ価値観の問題です。科学は、選んだ未来を実現するための道具にはあり得ますが、未来を選ぶ価値観の問題を扱うことはできません。</p><p>（注1）よそよそしい:無関係である</p><p>（注2）一人称:書き手が自分自身をさす</p><p>（注3）水を差す:わきから邪魔をする</p><p>（注4）肝に銘じる:心に強くきざみつけて忘れない</p><p>（注5）一回性:一回起こるだけ</p><p>（注6）知見:見解、見識</p>",
          contentTranslationZhHans:
            '<p>最近在日本，电视和书籍中的脑科学家成为热潮。脑科学能引发大众强烈关注的最大原因，或许在于人们觉得它能帮助自己过上更好的人生。</p><p>科学是客观处理事物的第三人称学科，因此常给人冰冷疏离的感觉。但脑科学是涉及人类情感、思考与行为的科学。正因如此，虽属科学领域之首创，却仿佛文学与艺术一般，以第一人称的视角切入人生，向我们传授幸福人生的秘诀。</p><p>不过，虽然不想给难得开始关注的人泼冷水，但我们必须记住：即使脑科学再进步，也无法完全解析人类心灵与人生的所有细节。大脑极为复杂，未知领域众多，距离发现普遍法则还遥遥无期。即便发现普遍法则，科学普遍规律对人生的独特性和一次性事件也毫无作用。因此，试图用科学预言个体人生具体事项，恐怕永远不可能。</p><p>另一点重要的是，科学能处理事实，却无法处理价值观问题。即使脑科学揭示某些事实，也不能将其与价值观混淆。例如，某脑科学书籍写道："这样做能激活大脑，大家试试吧。"但大脑激活真的是绝对价值吗？极端地说，即使存在毫无副作用的药物，用药物激活健康人类（如考生）的大脑是否应被允许？这一问题属于伦理与价值观范畴，需由个人与社会决定，而个人与社会价值观未必一致。脑科学的见解仅描述事实，与价值无任何关系。</p><p>（中略）</p><p>人类选择何种未来的问题，本质仍是价值观问题。科学或许能成为实现所选未来的工具，但无法替我们决定选择何种未来这一价值观的问题。</p><p>（注1）よそよそしい：无关</p><p>（注2）一人称：指代自身</p><p>（注3）水を差す：干扰</p><p>（注4）肝に銘じる：深刻牢记</p><p>（注5）一回性：仅发生一次</p><p>（注6）知見：观点、认知</p>',
          type: SectionType.READING,
          title: "問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1～4から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者によると、人々は脳科学に何を期待しているか。",
              analysis:
                '问题：人们为何对脑科学抱有期待？\n正确选项：2. 期待它能指导自己如何获得幸福人生\n\n选项解析：\n1.错误。文中未提及"解释脑机制"是大众关注焦点，核心吸引力在于"人生指南"。\n2.正确。对应"脳科学...幸せな人生のノウハウを提供"（提供幸福人生方法）的表述，直接点明期待本质。\n3.错误。偷换概念。脑科学"涉及"情感等，但大众期待是"应用指导"而非单纯"教授处理方法"。\n4.错误。"客観的に示す"（客观展示）与作者"一人称世界"的论述矛盾，且未提及"定义幸福"。\n\n关键句定位：\n核心动机："脳科学によって...よりよい人生を歩めそうだと感じる"',
              choices: [
                {
                  label: "1.",
                  text: "複雑な脳の仕組みをわかりやすく説明してくれること。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "どうすれば自分が幸せに生きられるかを教えてくれること。",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "人間の感情や思考や行動の扱い方を教えてくれること。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "人間にとって幸せな人生とは何かを客観的に示してくれること。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "脳科学について、筆者の考えに合うのはどれか。",
              analysis:
                '问题：符合作者观点的脑科学论述是？\n正确选项：3. 即使发现普遍法则，也无法应用于个体人生具体事项\n\n选项解析：\n1.错误。与文意相悖。作者强调"普遍法则对个体无效"，否定其应用前提。\n2.错误。逻辑颠倒。文中指出"个体解析≠普遍法则"，选项混淆因果关系。\n3.正确。完全对应"普遍的法则は...個別性や一回性に対して無力"的论述。\n4.错误。"必须通过解析个体才能到达普遍法则"属无中生有，作者未提此路径。\n\n关键句定位：\n核心限制："科学の普遍法則は人生の個別性...全く無力"',
              choices: [
                {
                  label: "1.",
                  text: "個人の人生に適用するには、普遍的な法則を見つけなければならない。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "個人の脳の機能をすべて解明てきたとしても、普遍的な法則にたとり着けない。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "普遍的な法則にたとり着いたとしても, 人生の個々の事柄には応用てきない。",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "普遍的な法則に到達するには、人生の個々の事柄を解き明かさなければならない。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt: "筆者が言いたいことは何か。",
              analysis:
                '问题：作者的核心观点是？\n正确选项：4. 科学仅处理事实，不涉及个人与社会的价值观\n\n选项解析：\n1.错误。作者明确"科学事実与価値無関係"，选项反向曲解为"科学影响价值观"。\n2.错误。部分正确但偏离核心。作者强调"科学无法处理价值观"，未主张"需结合两者选择未来"。\n3.错误。"役に立たない"（无用）过度极端。作者承认科学是"实现未来的工具"，仅否定其价值观决策能力。\n4.正确。精准概括"科学は事実を扱う...価値観の問題を扱えない"的核心论点。\n\n关键句定位：\n结论句："科学は...価値観の問題を扱うことはできません"',
              choices: [
                {
                  label: "1.",
                  text: "科学が証明した事実は、個人や社会の価値観に影響を与える恐れがある。",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "科学だけでなく個人や社会の価値観を考慮したうえで、未来を選ぶ必要がある。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "科学は個人や社会の価値観を扱えす、人類が望む未来の実現には役に立たない。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "科学は事実を対象とするものであり個人や社会の価値観を扱うものではない。",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          imageContent: "13_1.webp",
          type: SectionType.READING,
          title:
            "問題13 右のページは、ある大学の研究活動助成の案内である。\n下の問いに対する答えとして最もよいものを、1・2・3・4から一つ選びなさい。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "サイさんは、9月4日から7日までボランティア活動を行ったので、9月中に助成金を申請しようと考えている。交通費と宿泊費を計算してメモにまとめたが、申請が認められた場合、サイさんに支給される助成金はいくらになるか。\n--------------\nサイさんのメモ\n交通費:12,000円　宿泊費:7,000円を3泊分\n--------------",
              analysis:
                "根据助成金规定：\n交通费：单次活动上限10,000日元（サイ实际支出12,000日元，按上限10,000计算）。\n住宿费：每晚上限6,000日元，最多报销2晚（サイ实际3晚，按2晚计算，共6,000×2=12,000日元）。\n→ 选项1（交通10,000円、宿泊6,000円×2泊分）。",
              choices: [
                {
                  label: "1.",
                  text: "交通10,000円と、宿泊6,000円を2泊分。",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "交通10,000円と、宿泊6,000円を3泊分。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "交通12,000円と、宿泊7,000円を2泊分。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "交通12,000円と、宿泊7,000円を3泊分。",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              prompt:
                "ジムさんは、1月10日に日帰りでボランテイア活動を行う予定である。助成金を申請したいと考えているが、活動終了後に必ず提出しなければならないものは何て、いつまでに提出しなければならないか。",
              analysis:
                "ジム为日帰り（当天来回无住宿），\n必交材料：A（申請書）、B（振込口座届）、C（活動証明書）。\n无需提交：D（領収書），无住宿费。\n1月10日结束的活动，截止日期是二个月后，即3月10日。由于并未超过3月24日，因此应以更早的“二个月内”期限为准。只有当“二个月后”的日期超过3月24日时，才会以3月24日作为最终期限。",
              choices: [
                {
                  label: "1.",
                  text: "AとBとCで、3月10日までに提出する。",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "AとBとCで、3月24日までに提出する。",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "AとBとDで、3月10日までに提出する。",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "AとBとCとDで、3月24日までに提出する。",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "聴解",
      duration: 61 * 60 * 1000,
      listeningAudio: "listening_0.mp3",
      sections: [
        {
          type: SectionType.LISTENING,
          title:
            "問題1 では、まず質問を聞いてください。それから話を聞いて、用紙の１から４の中から、最もよいものを一つ選んでください。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_1_1.mp3",
              listeningContent:
                '<p data-start-time="00:00:04,850" data-end-time="00:00:15,175">大学の演劇サークルで、女の学生と部長の男の学生と話しています。女の学生は、この後何をしなければなりませんか？</p><p data-start-time="00:00:18,475" data-end-time="00:00:27,575">女：鈴木さん、来週の新入生勧誘のためのサークル体験会、ポスターを見た人から早速参加の申し込みが来てますね。</p><p data-start-time="00:00:27,575" data-end-time="00:00:39,075">男：うん、準備進めないとね。当日来てくれた人には、演劇を一部実際に体験してもらうよね。その時に使うシーン、台本から候補を選ぶのお願いしてたけど、どう？</p><p data-start-time="00:00:39,300" data-end-time="00:00:44,650">女：はい、体験者が多くても使えそうなシーンを3つ、ピックアップしました。</p><p data-start-time="00:00:44,875" data-end-time="00:00:55,575">男：じゃあ、その中から僕が選んで、セリフを印刷しておくよ。あと、当日は受付とか誘導とか、みんなにも手伝ってもらうから、誰が何を担当するか割り振ってほしいんだ。</p><p data-start-time="00:00:55,700" data-end-time="00:01:01,050">女：わかりました。えっと、当日配る入部案内のチラシの準備は？</p><p data-start-time="00:01:01,200" data-end-time="00:01:06,525">男：ああ、それは2年生に印刷してもらおうと思ってるんだ。僕から頼んでおくよ。</p><p data-start-time="00:01:06,800" data-end-time="00:01:07,925">女：わかりました。</p><p data-start-time="00:01:11,275" data-end-time="00:01:15,400">女の学生は、この後何をしなければなりませんか？</p>',
              listeningContentTranslationZhHans:
                "<p>大学戏剧社团里，女学生和部长（男学生）对话，女学生接下来必须做什么？</p><p>女：铃木学长，下周招新的社团体验会，已经有人看到海报后马上报名参加了呢！</p><p>男：嗯，咱们得抓紧准备啦。当天来的新生，要让他们实际体验一段戏剧对吧？之前拜托你从剧本里挑几个适合体验的场景，怎么样了？</p><p>女：嗯！我选了三个即使人多也能用上的场景。</p><p>男：那我来从这三个里选一个，把台词提前打印好。另外当天需要大家帮忙签到、引导之类的，你帮忙把每个人的分工安排一下吧。</p><p>女：明白。对了，当天要发的社团指南传单准备怎么办？</p><p>男：啊那个我打算让二年级同学去印，我去跟他们说就行。</p><p>女：好的。</p><p>女学生接下来必须做什么？</p>",
              prompt: "1番",
              analysis:
                '问题：女学生接下来必须做什么？\n正确选项：3. 决定当天的任务分配\n\n1.错误\n女生已经完成"挑选三个候选场景"，之后由部长负责选择具体场景。所以不需要女生再做。\n\n2.错误\n打印台词是部长明确表示"我来选我来印"，女生不参与。\n\n3.正确\n部长明确指示"需要你分配每个人的工作（割り振ってほしい）"，这是女生接下来的任务。\n\n4.错误\n传单印刷已明确交给二年级学生，且部长会直接联系，与女生无关。\n\n关键点梳理：注意动词主体：\n女生已完成：场景初选\n女生待办：人员分工\n他人负责：部长选场景印台词、二年级印传单',
              choices: [
                {
                  label: "1.",
                  text: "体験会で使うシーンを選ぶ",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "セリフを印刷する",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "当日の仕事の担当を決める",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "ちらしを印刷する",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_1_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,950" data-endtime="00:00:17,225">食品の会社で、男の課長と女の人が、開発中の焼きそばについて話しています。女の人は、この後どのように焼きそばを改良しますか？</p><p data-starttime="00:00:20,750" data-endtime="00:00:26,825">男：植田さん、植田さんが開発担当の冷凍焼きそばですが、試食会のアンケート結果を見ました。</p><p data-starttime="00:00:26,925" data-endtime="00:00:27,525">女：はい。</p><p data-starttime="00:00:27,800" data-endtime="00:00:33,075">男：植田さんがセールスポイントにしたいと言っていた「具がたっぷり入っている」という点は好評でしたね。</p><p data-starttime="00:00:33,250" data-endtime="00:00:35,125">女：はい、ありがとうございます。</p><p data-starttime="00:00:35,350" data-endtime="00:00:51,175">男：味については濃いとか、しょっぱいとかいうコメントが思ったよりも多かったですね。塩分量をもう少し抑えて作ってください。それから麵は適量とやや少ないと答えた人に分かれていました。でも原価から考えると麵の量を増やすのは難しいですね。</p><p data-starttime="00:00:51,475" data-endtime="00:00:57,400">女：そうなんですよね。麵を太くして食べ応えが出るようにするのも一案かと思うのですが。</p><p data-starttime="00:00:57,525" data-endtime="00:01:07,850">男：でも麵の太さについて否定的な評価はなかったし、具とのバランスもあるからとりあえず現状維持で。では次の試食会までに改良をお願いします。</p><p data-starttime="00:01:08,200" data-endtime="00:01:09,400">女：わかりました。</p><p data-starttime="00:01:14,150" data-endtime="00:01:18,850">女の人は、この後どのように焼きそばを改良しますか？</p>',
              listeningContentTranslationZhHans:
                '<p>食品公司里，男课长和女职员交谈开发中的炒面产品。女职员接下来如何改进炒面？</p><p>男：植田啊，你负责开发的冷冻炒面，试吃会的问卷结果我看过了。</p><p>女：嗯。</p><p>男：你主打的"配料管够"这个卖点评价很好啊。</p><p>女：谢谢！</p><p>男：不过关于味道，说太浓、太咸的反馈比预想的多。盐分要再控制一下。另外，面条的量有人觉得刚好，也有人觉得略少。但考虑到成本，加量有点难啊。</p><p>女：确实...要不把面条加粗点，吃起来更有嚼劲？这可能也是个办法。</p><p>男：但没人吐槽面条粗细，而且还要和配料平衡，暂时先别改吧。那就麻烦你在下回试吃会前改进一下吧。</p><p>女：明白了。</p><p>女职员接下来如何改进炒面？</p>',
              prompt: "2番",
              analysis:
                '问题：女职员接下来如何改进炒面？\n正确选项：2. 减少盐分\n\n逐项分析：\n1.❌错误\n→ 配料量已被明确肯定（"好評"），无需改动。\n\n2.✅正确\n→ 课长直接要求"盐分再控制（塩分量を抑えて）"，这是必须执行的指示。\n\n3.❌错误\n→ 因成本问题被否决（"増やすのは難しい"）。\n\n4.❌错误\n→ 加粗面条是女职员的提议，但被课长以"没负面评价"和"平衡问题"否决（"現状維持"）。\n\n关键点梳理：\n必须执行：盐分调整（唯一明确指令）\n维持现状：配料量、面条量、面条粗细\n排除干扰：注意"女职员的提议≠最终决定"，以课长最终判断为准。',
              choices: [
                {
                  label: "1.",
                  text: "具の量を増やす",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "塩分を減らす",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "麵の量を増やす",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "麵の太さを変える",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_1_3.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,975" data-endtime="00:00:14,975">森の自然教室で、ガイドが話しています。冬の森の散策ツアーに参加する人は、この後まず何をしますか？</p><p data-starttime="00:00:17,825" data-endtime="00:00:21,675">今日は冬の森の散策ツアーにご参加、ありがとうございます。</p><p data-starttime="00:00:21,825" data-endtime="00:00:27,425">後ほど外に出て雪の上を歩くためのスノーシューという道具を靴につけて散策します。</p><p data-starttime="00:00:27,750" data-endtime="00:00:37,825">通常ですと、先にこの森に住む動物を紹介したビデオをご覧いただくのですが、この後天気が崩れるようなので順番を入れ替え、先に散策をします。</p><p data-starttime="00:00:38,100" data-endtime="00:00:42,600">これから記念写真を撮るので、この建物の入り口に集まってください。</p><p data-starttime="00:00:42,875" data-endtime="00:00:45,350">その後スノーシューを履きましょう。</p><p data-starttime="00:00:45,550" data-endtime="00:00:49,500">先ほど受付でお渡しした地図は散策の時に使います。</p><p data-starttime="00:00:53,100" data-endtime="00:00:58,650">冬の森の散策ツアーに参加する人は、この後まず何をしますか？</p>',
              listeningContentTranslationZhHans:
                '<p>森林自然教室中，导游在讲话。参加冬季森林徒步的人接下来首先要做什么？</p><p>今天感谢大家参加冬季森林徒步旅行！</p><p>稍后我们会到户外，在雪地上穿上叫"雪鞋"的工具进行徒步。</p><p>通常流程是先让大家看介绍森林动物的视频，但等会儿天气可能会变差，所以调整顺序，先去徒步。</p><p>现在我们要拍纪念照，请到建筑物入口集合。</p><p>之后我们再穿雪鞋。</p><p>刚才在接待处发的地图会在徒步时使用。</p><p>参加冬季森林徒步的人接下来首先要做什么？</p>',
              prompt: "3番",
              analysis:
                "问题：参加冬季森林徒步的人接下来首先要做什么？\n正确选项：3. 移动到建筑物入口\n\n1.❌错误\n→ 穿雪鞋是「之后（その後）」的步骤，并非「首先」。\n\n2.❌错误\n→ 原本应先看视频，但因之后天气变差，调整顺序改为「先徒步」，视频观看被延后。\n\n3.✅正确\n→ 导游明确指示「现在要拍纪念照，请到入口集合（これから記念写真を撮るので、この建物の入り口に集まってください）」，这是最优先动作。\n\n4.❌错误\n→ 地图「已在前台发放（先ほど受付でお渡しした）」，属于已完成事项。\n\n关键点梳理：\n时间顺序：调整后的流程为「集合拍照 → 穿雪鞋徒步 →（天气允许时）看视频」。\n动作主体：集合拍照是「现在立刻执行」的指令，必须最先完成。\n排除干扰：注意「原本流程≠实际执行」，天气变化导致顺序改变是解题核心。",
              choices: [
                {
                  label: "1.",
                  text: "雪の上を歩く道具をつくにつける",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "森の動物のビデオを見る",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "建物の入り口に移動する",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "ツアーの地図を受け取る",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_1_4.mp3",
              listeningContent:
                '<p data-starttime="00:00:07,250" data-endtime="00:00:18,625">電話で、カフェの店長と建築会社の男の人が、店のリフォームについて話しています。男の人は今回のリフォーム案の何を直しますか？</p><p data-starttime="00:00:21,050" data-endtime="00:00:28,100">女：もしもし、カフェチェリーの本田です。メールで送ってもらった店のリフォームの修正案、拝見しました。</p><p data-starttime="00:00:28,275" data-endtime="00:00:35,700">男：お世話になっております。前回のご要望をもとに床の素材を木に変えたんですが、イメージ画像はいかがでしょうか。</p><p data-starttime="00:00:35,825" data-endtime="00:00:43,950">女：ええ、温かみが出ましたね。ただ、店内が前より暗く見えるんですが、壁と照明は前回と同じですよね。</p><p data-starttime="00:00:44,225" data-endtime="00:00:52,100">男：壁はレンガ色のままですし、照明も同じです。床を同じ素材でもう少し明るいものに変えることもできますが…</p><p data-starttime="00:00:52,275" data-endtime="00:01:01,400">女：床はこれでいいと思うので…壁の色のトーンを変えた案を作ってもらえますか。それを見て、場合によっては照明器具の変更を検討しようかな。</p><p data-starttime="00:01:01,650" data-endtime="00:01:10,675">男：承知しました。じゃあ、トーンを上げて修正したものをお送りします。あの、カウンターのデザインも変更していますが、いかがでしょうか。</p><p data-starttime="00:01:10,775" data-endtime="00:01:14,075">女：あ、気に入りました。これでお願いします。</p><p data-starttime="00:01:14,700" data-endtime="00:01:15,950">男：かしこまりました。</p><p data-starttime="00:01:19,225" data-endtime="00:01:23,600">男の人は今回のリフォーム案の何を直しますか？</p>',
              listeningContentTranslationZhHans:
                "<p>电话中，咖啡馆女店长与建筑公司男员工在谈论店铺装修，男人本次要修改装修方案的哪个部分？</p><p>女：您好，我是樱桃咖啡的本田。邮件发来的装修修改方案我看过了。</p><p>男：感谢联系！根据您上次的要求，我们把地板材质换成了木头，效果图感觉如何？</p><p>女：嗯，确实有温馨感了。不过店里看起来比之前暗了，墙壁和照明还是原来的对吧？</p><p>男：是的，墙壁保持砖红色，照明也没变。地板的话可以换成一样材质但更亮一点的，不过……</p><p>女：地板这样就可以了…能做个调整墙壁颜色明暗的方案吗？看完后可能再考虑换照明。</p><p>男：明白了。那我把墙壁颜色调亮些再发新方案给您。对了，柜台设计也改了，您觉得如何？</p><p>女：啊，这个我很喜欢！就按这个来吧。</p><p>男：明白了。</p><p>男方本次要修改装修方案的哪个部分？</p>",
              prompt: "4番",
              analysis:
                "问题：男方本次要修改装修方案的哪个部分？\n正确选项：2. 墙壁颜色的明暗度\n\n1.❌错误\n→ 地板材质已确认「これでいい」（这样就行），无需改动。\n\n2.✅正确\n→ 店长明确要求「壁の色のトーンを変えた案を作って」（调整墙壁颜色明暗），男方回应「承知しました」（收到并执行）。\n\n3.❌错误\n→ 照明更换是「場合によって検討」（可能后续考虑），本次不修改。\n\n4.❌错误\n→ 柜台设计已获肯定「気に入りました」（很喜欢），保持原案不变。\n\n关键点梳理：\n直接指示：墙壁颜色明暗调整是唯一被当场确认的修改项。\n排除干扰项：注意「地板已满意」「柜台已确定」「照明暂不处理」等否定条件。\n对话核心：店长的诉求始终围绕「解决店内昏暗问题」，而唯一执行手段是调整墙壁色调。",
              choices: [
                {
                  label: "1.",
                  text: "床の素材",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "壁の色合いの明るさ",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "照明器具",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "カウンターのデザイン",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_1_4.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,675" data-endtime="00:00:16,175">介護用品を作る会社で、課長と男の人と話しています。男の人は、今日何をしなければなりませんか？</p><p data-starttime="00:00:17,900" data-endtime="00:00:22,425">女：田中さん、来月の介護用品の展示会のことで話したいんですが。</p><p data-starttime="00:00:22,575" data-endtime="00:00:24,000">男：はい、課長。</p><p data-starttime="00:00:24,275" data-endtime="00:00:31,750">女：田中さんの担当は、会場で使う備品のレンタルの予約、顧客への案内状の送付、それからカタログの用意ですね。</p><p data-starttime="00:00:31,900" data-endtime="00:00:38,775">男：はい、取引先への案内状の文面案とレンタル会社に送る予定の注文書は昨日課長にお送りしたかと。</p><p data-starttime="00:00:39,025" data-endtime="00:00:54,475">女：ええ、案内状はあれでいいので、今週中に取引先に送ってください。備品のレンタルですが、会場でしきりに使うパネルとか机とか去年と同じ数になっていますよね。今年は商談のスペースが3つ増えるので、その分を増やしてください。</p><p data-starttime="00:00:54,625" data-endtime="00:00:56,200">男：あっ、すみません。</p><p data-starttime="00:00:56,625" data-endtime="00:01:02,900">女：レンタル会社への注文前に、私が会計課に承認をもらうので、今日中に修正お願いします。</p><p data-starttime="00:01:03,075" data-endtime="00:01:04,075">男：わかりました。</p><p data-starttime="00:01:04,475" data-endtime="00:01:09,825">女：それからカタログは最新のものが納品されますから、当日はそれを持っていってください。</p><p data-starttime="00:01:13,825" data-endtime="00:01:17,875">男の人は、今日何をしなければなりませんか？</p>',
              listeningContentTranslationZhHans:
                "<p>护理用品公司内，科长与男职员正在对话。男职员今天必须做什么？</p><p>女：田中，我想谈谈下个月的护理用品展会事宜。</p><p>男：好的，科长。</p><p>女：你负责预约会场租赁用品、给客户发送邀请函、以及准备产品目录对吧？</p><p>男：是的，发给客户的邀请函草稿和租赁公司的订单昨天已经发给您了。</p><p>女：邀请函没问题，这周内发给客户吧。关于租赁用品，现在订单里的隔板和桌子数量与去年相同，但今年洽谈区增加了三个，需要相应增加数量。</p><p>男：啊，抱歉。</p><p>女：在向租赁公司下单前，我需要让财务科审批，请今天内修改好订单。</p><p>男：明白。</p><p>女：另外产品目录最新版会送过来，当天带去会场就行。</p><p>男职员今天必须做什么？</p>",
              prompt: "5番",
              analysis:
                '问题：男职员今天必须做什么？\n正确选项：1. 修改租赁用品的订单\n\n1.✅正确\n→ 科长明确指示「今日中に修正お願いします」（今日内修改订单），且租赁数量需调整（"商談スペース増加分を増やす"）。\n2.❌错误\n→ 邀请函发送是「今週中に」（本周内完成），非今日紧急任务。\n3.❌错误\n→ 产品目录已到货（"最新のものが納品されます"），无需重新订购。\n4.❌错误\n→ 与财务科联络由科长负责（"私が会計課に承認をもらう"），男职员只需修改订单。\n\n关键点锁定：\n时间紧迫性：科长使用「今日中に」明确限定今日必须完成修改。\n动作主体：男职员的任务是修改订单内容（数量调整），而非流程审批。\n干扰项排除：注意区分「本周任务」与「今日任务」，及「已交付」与「待处理」事项。',
              choices: [
                {
                  label: "1.",
                  text: "備品の注文書を修正する",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "取引先に案内状を送る",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "カタログを注文",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "会計課に連絡する",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.LISTENING,
          title:
            "問題2 では、まず質問を聞いてください。そのあと、用紙のせんたくしを読んでください。読む時間があります。それから話を聞いて用紙の１から４の中から、最もよいものを一つ選んでください。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_1.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,450" data-endtime="00:00:16,225">ラジオで、アナウンサーと花火の会社で働く男の人が話しています。男の人が花火の職人になりたいと思ったきっかけは何ですか？</p><p data-starttime="00:00:35,475" data-endtime="00:00:45,675">女：今日は花火の製作と打ち上げの仕事をされている森田さんにお話を伺います。森田さん、花火のお仕事は「代々家業を受け継がれて」という方が多いそうですね。</p><p data-starttime="00:00:45,800" data-endtime="00:00:48,975">男：そうですね、僕の場合は違うんですけど。</p><p data-starttime="00:00:49,275" data-endtime="00:00:50,525">女：そうなんですか。</p><p data-starttime="00:00:50,875" data-endtime="00:01:07,825">男：大学の時、初めて花火大会の会場で間近で花火を見たんですが、花火響くような音、その圧倒的な力強さに心を奪われたんです。こんな花火を作って打ち上げてみたいと思って、家が花火の会社をしている友人に頼み込んで、この道に入りました。</p><p data-starttime="00:01:07,975" data-endtime="00:01:11,375">女：そうですか、この仕事をされてみていかがですか。</p><p data-starttime="00:01:11,600" data-endtime="00:01:24,300">男：玉を半分にしたものに花火材料を並べていくんですが、少しでもズレがあると空では大きく歪んでしまうんです。正確に詰めるのが難しいのでうまくいった時の達成感は何にも変え難いものです。</p><p data-starttime="00:01:27,550" data-endtime="00:01:32,575">男の人が花火の職人になりたいと思ったきっかけは何ですか？</p>',
              listeningContentTranslationZhHans:
                "<p>电台中，主持人与烟花公司男员工在对话。男性想成为烟花工匠的契机是什么？</p><p>女：今天我们将采访从事烟花制作与燃放工作的森田先生。听说烟花行业多是子承父业代代相传的。</p><p>男：是的，不过我的情况不同。</p><p>女：是这样的吗？</p><p>男：大学时，我第一次在烟花大会现场近距离看到烟花。那震撼的声响和压倒性的力量瞬间俘获了我的心。那时我就想亲手制作并燃放这样的烟花，于是恳求一位家里经营烟花公司的朋友，才入了这行。</p><p>女：原来如此。实际工作后感受如何？</p><p>男：要把火药精准填装到半球形弹壳中，稍有偏差，烟花在空中就会严重变形。正因为难度高，成功时的成就感无与伦比。</p><p>男性想成为烟花工匠的契机是什么？</p>",
              prompt: "1番",
              analysis:
                '问题：男性想成为烟花工匠的契机是什么？\n正确选项：1. 被烟花的震撼力所吸引\n\n1.✅正确\n→ 直接对应「花火の圧倒的な力強さに心を奪われた」（被烟花的压倒性力量震撼），这是触发他入行的核心动机。\n\n2.❌错误\n→ 朋友的作用是「提供入行途径」，并非动机本身（"友人に頼み込んで"是行动手段，非原因）。\n\n3.❌错误\n→ 制作过程的兴趣是入行后的体验（「正確に詰めるのが難しい」属于工作细节描述），非最初契机。\n\n4.❌错误\n→ 成就感是从事工作后的感受（「達成感は何にも変え難い」），属于后续体验而非初衷。\n\n关键点梳理：\n时间轴区分：注意对话中「きっかけ」（契机）与「仕事の感想」（工作感想）的明确分界。\n核心句锁定：「心を奪われた」直接指向对烟花本身的震撼体验，其他选项均为干扰信息。',
              choices: [
                {
                  label: "1.",
                  text: "花火の迫力に、みりょくを感じたから",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "友人が花火の仕事についたから",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "花火を作る過程に興味を持っているから",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "達成感が持っていそうな仕事だと思ったから",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,175" data-endtime="00:00:11,275">宇宙科学館のコンテストで司会者と女の人が話しています。</p><p data-starttime="00:00:11,400" data-endtime="00:00:17,750">女の人は宇宙食の開発で最も大変だったことは何だと言っていますか？</p><p data-starttime="00:00:37,625" data-endtime="00:00:43,775">男：宇宙食開発コンテスト優勝チームのリーダー、中山さんです。おめでとうございます。</p><p data-starttime="00:00:44,025" data-endtime="00:00:45,625">女：ありがとうございます。</p><p data-starttime="00:00:45,825" data-endtime="00:00:52,775">男：中山さんのチームは魚の缶詰を開発されました。ここまで開発するのは大変だったんじゃないですか？</p><p data-starttime="00:00:53,025" data-endtime="00:01:01,450">女：そうですね、宇宙で美味しく食べられるものにするのは大変でした。魚の栄養もできるだけ損ねないようにしました。</p><p data-starttime="00:01:01,500" data-endtime="00:01:05,325">男：先ほど一口いただいたんですが、味がずいぶん濃いですね。</p><p data-starttime="00:01:05,600" data-endtime="00:01:13,950">女：ええ、宇宙では味覚が鈍るそうなので、かなり濃い味にしました。タレも飛び散らないようにとろみをつけました。</p><p data-starttime="00:01:14,150" data-endtime="00:01:18,050">男：そうなんですか。硬さもちょうどよくて食べやすいですね。</p><p data-starttime="00:01:18,250" data-endtime="00:01:32,825">女：そこが最大の難関でした。宇宙ではスプーンしか使わないそうなので、柔らかくしたんですが、食感も楽しめるように工夫しました。最後まで試行錯誤してようやく今の柔らかさにたどり着いたんです。</p><p data-starttime="00:01:35,525" data-endtime="00:01:41,950">女の人は宇宙食の開発で最も大変だったことは何だと言っていますか？</p>',
              listeningContentTranslationZhHans:
                "<p>宇宙科学馆竞赛中主持人与女人在对话</p><p>女人认为开发宇宙食品最大的困难是什么？</p><p>男：恭喜中山女士的团队获得宇宙食品开发大赛冠军！</p><p>女：谢谢！</p><p>男：你们开发了鱼罐头。开发过程很辛苦吧？</p><p>女：是的，要让鱼在宇宙中也能好吃，真的挺难的。我也尽量保留鱼的营养。</p><p>男：刚才尝了一口，味道挺重的。</p><p>女：因为在太空味觉会迟钝，所以调浓了味道，酱汁也特意调稠，防止飞溅。</p><p>男：这样啊。软硬度也刚刚好啊。</p><p>女：这才是最难的。听说太空只能用勺子，所以我们把它做得软一点，但又想办法保留了一些口感。反复试验才达到现在的状态。</p><p>女人认为开发宇宙食品最大的困难是什么？</p>",
              prompt: "2番",
              analysis:
                '问题：女性认为开发宇宙食最大的困难是什么？\n正确选项：4. 调整鱼肉的硬度\n\n1.❌错误\n→ 提及「营养保留」但非最大难点，仅为基础要求（"できるだけ損ねないように"）。\n\n2.❌错误\n→ 「调浓味道」是应对太空环境的常规操作，未被强调为最大困难。\n\n3.❌错误\n→ 「酱汁防飞溅」通过增稠解决，属技术细节而非核心难题。\n\n4.✅正确\n→ 明确点出「硬さ调整」是最大难关（"最大の難関"），且详细描述反复试验过程。\n\n关键点梳理：\n最高级锁定：对话中唯一使用「最大の難関」表述的内容直接对应选项4。\n排除干扰：其他选项均为开发过程中的必要步骤，但未达到「最困难」层级。\n细节对比：硬度需同时满足「勺子使用便利性」与「口感保留」，双重矛盾加剧难度。',
              choices: [
                {
                  label: "1.",
                  text: "魚のえいようが保てる加工をすること",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "味の濃さを調節すること",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "たれが飛び散らないようにすること",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "魚の身のかたさを調整すること",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_3.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,800" data-endtime="00:00:09,575">会社のリーダー研修で講師が話しています。</p><p data-starttime="00:00:09,850" data-endtime="00:00:15,625">講師は部下と接するときに何を忘れないようにしていたと言っていますか？</p><p data-starttime="00:00:34,275" data-endtime="00:00:39,100">チームで仕事を成功させるコツは、リーダーが部下と良好な関係を築くことです。</p><p data-starttime="00:00:39,300" data-endtime="00:00:44,675">そのためには部下への感謝の気持ちを忘れてはいけないと聞いたことがあるかもしれません。</p><p data-starttime="00:00:44,875" data-endtime="00:00:54,350">部下には笑顔で接するべきだとも言われますね。とはいえ、私自身も部下の言い分ばかりを聞てはいられず、厳しい指摘をせざるを得ないこともありました。</p><p data-starttime="00:00:54,500" data-endtime="00:01:03,275">ただそんな時でも話の最後は「これを糧に次は頑張ろう」などと、部下の意識がプラスに転じることを言うように心がけていました。</p><p data-starttime="00:01:03,400" data-endtime="00:01:10,800">部下との関係を築く方法は、一つではありません。今日の研修を通して自分なりの方法を見出してください。</p><p data-starttime="00:01:13,475" data-endtime="00:01:19,175">講師は部下と接するときに何を忘れないようにしていたと言っていますか？</p>',
              listeningContentTranslationZhHans:
                '<p>公司领导培训中讲师正在讲话。</p><p>讲师表示在与下属相处时不能忘记什么？</p><p>要让团队工作成功，关键在于领导与下属建立良好的关系。</p><p>或许你们听说过"要做到这一点，就不能忘记对下属心怀感激"。</p><p>也有人说"应该用笑容面对下属"。但就我个人而言，有时不得不严厉批评下属，不能一味倾听他们的想法。</p><p>不过即使在那种时候，我也会尽量在最后说些像"吃一堑长一智，下次加油"之类的话，让下属的心态转向积极的一面。</p><p>建立与下属关系的方法不止一种。希望通过今天的培训，大家能找到适合自己的方式。</p><p>讲师表示在与下属相处时不能忘记什么？</p>',
              prompt: "3番",
              analysis:
                '问题：讲师表示在与下属相处时注意不忘什么？\n正确选项：4. 用肯定的话语结束对话\n\n1.❌错误\n→ 虽然提到「感謝の気持ち」是常见建议，但讲师未将其作为自身实践重点（"私自身...厳しい指摘をせざるを得ない"说明并非核心）。\n\n2.❌错误\n→ 「笑顔で接する」是普遍观点，但讲师明确转折（"とはいえ"）表明自己并非以此为主。\n\n3.❌错误\n→ 「倾听下属意见」被反向否定（"部下の言い分ばかりを聞いてはいられず"），说明非强调项。\n\n4.✅正确\n→ 明确自述「話の最後は肯定的な言葉で終えるよう心がけた」，直接对应选项4。\n\n关键点梳理：\n转折词定位：通过「とはいえ」「ただそんな時でも」锁定讲师个人实践重点。\n动词锁定：「心がけていました」表明这是讲师主动坚持的行为，而非泛泛而谈的理论。\n排除干扰：选项1-3均为通用建议，但讲师通过自身案例突出「结尾积极化」的独特性。',
              choices: [
                {
                  label: "1.",
                  text: "部下に感謝する気持ちを持つこと",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "笑顔で部下と接すること",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "部下の話をよく聞くこと",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "肯定的ことばで話を終えること",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_4.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,425" data-endtime="00:00:11,575">テレビでアナウンサーの男の人と花屋の店長が話しています。</p><p data-starttime="00:00:11,900" data-endtime="00:00:18,175">店長は花を届けるサービスのどんな点が最も客に喜ばれていると言っていますか？</p><p data-starttime="00:00:36,500" data-endtime="00:00:41,550">男：こちらのお店ではお客様に定期的に花を届けるサービスが好評だそうですね。</p><p data-starttime="00:00:41,650" data-endtime="00:00:53,150">女：はい、私どもの花の定期便では、お客様が希望された色の系統で花束を作ってお届けしています。花は長く咲き続けるよう丁寧に処理をしているんです。</p><p data-starttime="00:00:53,600" data-endtime="00:00:57,750">男：そうですか。あの、どのくらいの頻度で届くんですか？</p><p data-starttime="00:00:58,000" data-endtime="00:01:02,800">女：每月、毎週、もしくは2週間に一度からお選びいただけます。</p><p data-starttime="00:01:03,175" data-endtime="00:01:07,000">男：それはいいですね。花束の大きさも選べるんでしょうか？</p><p data-starttime="00:01:07,200" data-endtime="00:01:19,300">女：大きさは決まっていて、小さなテーブルでも飾りやすいボリュームにしています。毎回自分の好みの色を選択できるので、その点がお客様に何より高い評価をいただいていると感じています。</p><p data-starttime="00:01:19,650" data-endtime="00:01:20,950">男：そうなんですね。</p><p data-starttime="00:01:24,325" data-endtime="00:01:30,600">店長は花を届けるサービスのどんな点が最も客に喜ばれていると言っていますか？</p>',
              listeningContentTranslationZhHans:
                "<p>电视节目中男主持人与花店店长在对话</p><p>店长认为送花服务最受客人好评的点是什么？</p><p>男：听说贵店定期送花服务很受欢迎啊。</p><p>女：是的，我们的定期送花服务会根据客人指定的色系制作花束配送。花朵都经过精心处理，能长时间保持盛开。</p><p>男：这样啊。配送频率是？</p><p>女：可选择每月、每周或两周一次。</p><p>男：真不错。花束大小也能选吗？</p><p>女：大小是固定的，会控制在适合桌面装饰的体积。因为客人每次都能自选颜色搭配，我们这点认为是客人最满意的地方。</p><p>男：原来如此。</p><p>店长认为送花服务最受客人好评的点是什么？</p>",
              prompt: "4番",
              analysis:
                '问题：店长认为送花服务最受客人好评的点是什么？\n正确选项：1. 可自选花色搭配\n\n1.✅正确\n→ 店长明确强调「毎回自分の好みの色を選択できるので、その点が何より高い評価」（可自选颜色是最核心好评点），「何より」直接指向最高优先级。\n\n2.❌错误\n→ 「延长花期」是服务基础要求（"丁寧に処理"），但非店长强调的"最满意项"。\n\n3.❌错误\n→ 配送频率虽可自选，但店长未将其与「最高評価」关联。\n\n4.❌错误\n→ 花束体积被描述为「固定且适中」，属于功能性设计，未提及受特别好评。\n\n关键点锁定：\n最高级关键词：店长使用「何より高い評価」唯一对应选项1。\n排除干扰逻辑：其他选项均为服务特性，但未被赋予「最核心优势」定位。',
              choices: [
                {
                  label: "1.",
                  text: "花の色合いが選べること",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "花が長く楽しめるように処理していること",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "花が届く頻度が選べること",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "ボリュームがある花束であること",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_5.mp3",
              listeningContent:
                '<p data-starttime="00:00:09,375" data-endtime="00:00:19,375">高校サッカーの大会でアナウンサーが監督にインタビューしています。監督はどうして今日の試合に勝てたと言っていますか？</p><p data-starttime="00:00:38,100" data-endtime="00:00:42,825">女：監督、おめでとうございます！今日の試合いかがでしたでしょうか？</p><p data-starttime="00:00:43,175" data-endtime="00:00:53,850">男：選手がよくやってくれました。去年の優勝候補が相手だったので覚悟はしていたんですが、前半先制されてなかなか普段の練習通りにはプレーできませんでした。</p><p data-starttime="00:00:54,400" data-endtime="00:01:00,975">でも劣勢の中、攻撃の手を緩めず最後まで粘り強く戦ったことが勝利につながったと思います。</p><p data-starttime="00:01:01,125" data-endtime="00:01:07,475">このような試合を戦い抜くことで、選手の技術面も精神面も成長してくれることを願っています。</p><p data-starttime="00:01:07,725" data-endtime="00:01:12,700">作戦面では選手交代のタイミングなど、改善すべき点はあると思っています。</p><p data-starttime="00:01:15,575" data-endtime="00:01:19,800">監督はどうして今日の試合に勝てたと言っていますか？</p>',
              listeningContentTranslationZhHans:
                "<p>高中足球赛现场，主持正在采访教练。教练认为本场比赛获胜的原因是什么？</p><p>女：教练，恭喜获胜！今天的比赛您怎么看？</p><p>男：队员们打得很好。因为对手是去年的夺冠热门，我们也有所心理准备。但上半场先被对方抢先得分，导致没能完全发挥平时的训练水平。</p><p>不过即使在劣势中，我们始终坚持进攻，不松懈，这种韧性带来了胜利。</p><p>希望通过这种硬仗，队员们的技术和心态都能成长。</p><p>战术方面，换人时机等环节还需要改进。</p><p>教练认为本场比赛获胜的原因是什么？</p>",
              prompt: "5番",
              analysis:
                '问题：教练认为本场比赛获胜的原因是什么？\n正确选项：2. 因为坚持不懈持续进攻\n\n1.❌错误\n→ 明确否定「前半普段の練習通りにはプレーできませんでした」（上半场未按训练水平发挥）。\n\n2.✅正确\n→ 直接点明「攻撃の手を緩めず最後まで粘り強く戦ったことが勝利につながった」（不松懈进攻+坚持到底=胜因）。\n\n3.❌错误\n→ 技术提升是「未来期望」（"成長してくれることを願っています"），非本次胜因。\n\n4.❌错误\n→ 换人时机被列为「需改进点」（"改善すべき点"），与胜利无关。\n\n关键点锁定：\n因果对应：教练使用「～が勝利につながった」句式直接说明因果关系，指向选项2。\n排除干扰：注意区分「赛前准备」「赛后反思」与「本场胜因」的表述差异。',
              choices: [
                {
                  label: "1.",
                  text: "前半から練習通りのプレーができたから",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "諦めずにせめ続けたから",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "個々の選手の技術が向上した",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "いいタイミングで選手の交代ができたから",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_2_6.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,600" data-endtime="00:00:11,850">市役所で女の上司と男の職員が市民向けのセミナーについて話しています。</p><p data-starttime="00:00:11,850" data-endtime="00:00:18,425">二人は次のセミナーの企画として会議でどんな提案をすることにしましたか？</p><p data-starttime="00:00:37,100" data-endtime="00:00:47,525">女：伊藤さん、起業したい人向けのセミナーですが、今年の企画を来週の会議にかけたいんです。去年の参加者アンケートを踏まえて案を考えておいてくれましたか？</p><p data-starttime="00:00:47,700" data-endtime="00:01:02,475">男：はい、去年は有名企業家を講師に招きましたが、アンケートでは具体的なノウハウをもっと知りたかったってコメントが結構ありました。金融機関の人に資本金や融資などの資金調達について講演してもらうのはどうですか？</p><p data-starttime="00:01:02,525" data-endtime="00:01:03,675">女：そうですね。</p><p data-starttime="00:01:03,850" data-endtime="00:01:15,800">男：他には弁護士の先生に会社設立のための法手続きの話を頼むのもいいかと。あっ、あと、企業経験者を呼んで業種別のグループで話す機会を設けてほしいなんていう意見もありました。</p><p data-starttime="00:01:15,925" data-endtime="00:01:21,000">女：うーん、座談会は会場の見直しが必要ですから、別の機会にしましょう。</p><p data-starttime="00:01:21,075" data-endtime="00:01:21,775">男：はい。</p><p data-starttime="00:01:21,950" data-endtime="00:01:30,200">女：両方の分野の人に講演をお願いしたいところですが、予算がね。アンケートではどちらに対するコメントが多かったですか？</p><p data-starttime="00:01:30,600" data-endtime="00:01:38,950">男：そうですね、会社を立ち上げる際の法手続きに自信がないというコメントもありましたが、資金調達に関するものの方が目につきました。</p><p data-starttime="00:01:39,250" data-endtime="00:01:43,800">女：では、その方面の専門家を呼ぶことを次の企画として図りましょう。</p><p data-starttime="00:01:47,350" data-endtime="00:01:53,275">二人は次のセミナーの企画として会議でどんな提案をすることにしましたか？</p>',
              listeningContentTranslationZhHans:
                "<p>市政府内，女上司与男职员在讨论市民研讨会</p><p>针对下一次研讨会的策划，两人决定在会议上提出什么样的方案？</p><p>女：伊藤，针对有创业意向人群的研讨会，今年方案想在下周会议上讨论。你看过去年参与者的问卷后有什么想法吗？</p><p>男：去年请了知名企业家当讲师，但问卷里很多人说想了解更具体的实操技巧。要不请金融机构的人来讲资金筹措？比如资金、融资等等。</p><p>女：嗯。</p><p>男：另外请律师讲公司设立的法律流程也不错。对了，还有意见说希望按行业分组，让有经验的人来交流。</p><p>女：分组讨论得调整场地，以后再找机会吧。</p><p>男：好的。</p><p>女：虽然想请这两类人，但预算有限...问卷里哪类需求更多？</p><p>男：关于这一点，虽然也有一些人表示对创业时的法律手续没信心，但资金筹措的意见更为突出。</p><p>那么，下一次的策划就请那方面的专家来吧。</p><p>两人决定在会议上提出什么研讨会提案？</p>",
              prompt: "6番",
              analysis:
                '问题：两人决定在会议上提出什么研讨会提案？\n正确选项：2. 邀请金融专家举办讲座\n\n1.❌错误\n→ 去年已实施（"去年は有名企業家を講師に招きました"），今年不重复。\n\n2.✅正确\n→ 女上司最终决策「資金調達の専門家を呼ぶ」（根据问卷反馈优先级和预算限制）。\n\n3.❌错误\n→ 律师提议虽存在，但因「预算有限」且问卷反馈量不及资金问题，未被选中。\n\n4.❌错误\n→ 分组讨论因场地问题被明确推迟（"別の機会に"）。',
              choices: [
                {
                  label: "1.",
                  text: "有名な起業家を呼んで講演会を行う",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "きんゆうの専門家を呼んで講演会を行う",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "弁護士を呼んで講演会を行う",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "業別の座談会を行う",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.LISTENING,
          title:
            "問題3 では、用紙に何も印刷されていません。この問題は、全体としてどんな内容かを聞く問題です。話の前に質問はありません。まず話を聞いてください。それから、質問と選択肢を聞いて、１から４の中から、最もよいものを一つ選んでください。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_3_1.mp3",
              listeningContent:
                '<p data-starttime="00:00:04,925" data-endtime="00:00:10,850">親子向けのクラシックコンサートの会場で、オーケストラの指揮者が話しています。</p><p data-starttime="00:00:13,950" data-endtime="00:00:16,325">緑オーケストラ指揮者の山田です。</p><p data-starttime="00:00:16,600" data-endtime="00:00:26,500">オーケストラには色々な楽器がありますが、指揮者は指揮棒1本だけです。リズムを取るぐらいで簡単そうに見えるかもしれませんが、そんなことはありません。</p><p data-starttime="00:00:26,725" data-endtime="00:00:38,125">というのは、曲に対して持つイメージって人によってバラバラなんですよね。同じ曲の楽譜を見ても、山場がどこにあるとか、この部分は何を表しているのかなどの解釈が違います。</p><p data-starttime="00:00:38,475" data-endtime="00:00:51,500">指揮者は自分なりの解釈をオーケストラの団員に伝えて、演奏をまとめ上げるんです。それだけでなく、団員との信頼関係を築き、演奏者が持つ表現力を最大限に引き出すことも求められるんです。</p><p data-starttime="00:00:53,625" data-endtime="00:00:56,525">指揮者は何について話していますか？</p><p data-starttime="00:00:57,950" data-endtime="00:01:01,600">1.楽器による演奏法の違い</p><p data-starttime="00:01:03,325" data-endtime="00:01:06,775">2.演奏会を楽しみ方</p><p data-starttime="00:01:08,200" data-endtime="00:01:12,575">3.団員の能力を信じることの大切さ</p><p data-starttime="00:01:13,525" data-endtime="00:01:16,425">4.指揮者の役割</p>',
              listeningContentTranslationZhHans:
                "<p>亲子古典音乐会现场，乐团指挥山田在讲话</p><p>我是绿乐团指挥山田。</p><p>乐团里有各种乐器，但指挥者只有一根指挥棒。看起来可能只是打打拍子，好像很简单，实则不然。</p><p>因为每个人对同一首曲子的理解各不相同。即使看同一份乐谱，对高潮的位置、某段音乐表达的内容等解读也会不同。</p><p>指挥者要将自己的解读传达给团员，整合整个演奏。不仅如此，还需与团员建立信任关系，最大限度激发他们的表现力。</p><p>指挥在谈论什么？</p><p>乐器演奏方法的差异</p><p>如何享受音乐会</p><p>相信团员能力的重要性</p><p>指挥者的角色</p>",
              prompt: "1番",
              analysis:
                "指挥提到整合演奏、传达个人解读、建立信任关系，这些都是指挥的核心职责。\n选项1未提及；选项2是观众视角，与指挥无关；选项3是职责的一部分，但不够全面。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_3_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,925" data-endtime="00:00:12,250">テレビでアナウンサーの男の人は、商店街の代表の人にインタビューしています。</p><p data-starttime="00:00:13,025" data-endtime="00:00:20,050">男：地方の商店街が衰退していく傾向がある中で、この桜通り商店街はたくさんのお客様で賑わっていますね。</p><p data-starttime="00:00:20,250" data-endtime="00:00:35,600">女：ありがとうございます。一時はお客様が減って、商店街全体が寂しい時期もありました。それで、3年ほど前から、若い店主たちを中心に、お客様に喜んでもらえるような商店街全体のイベントを企画しているんです。</p><p data-starttime="00:00:35,750" data-endtime="00:00:39,325">男：そうなんですか。どんなイベントをやっていらっしゃるんですか。</p><p data-starttime="00:00:39,700" data-endtime="00:00:48,525">女：例えば、学生デーを設けて、その日は全店舗で学生割引を行ったり、七タなど季節ごとにイベントを開催したりしています。</p><p data-starttime="00:00:48,725" data-endtime="00:00:49,775">男：そうですか。</p><p data-starttime="00:00:50,100" data-endtime="00:01:04,425">女：ほかにも、飲食店で写真を撮りたくなるような盛り付けを工夫したメニューを開発し、それをインターネットで発信したりしています。おかげさまで、近隣の方だけでなく、ネットの記事を見た遠方の方も来てくださっています。</p><p data-starttime="00:01:06,650" data-endtime="00:01:10,725">商店街の代表の人は何について話していますか？</p><p data-starttime="00:01:11,925" data-endtime="00:01:15,775">1.商店街の店の入れ替わり</p><p data-starttime="00:01:16,950" data-endtime="00:01:21,050">2.商店の活性化の取り組み</p><p data-starttime="00:01:21,600" data-endtime="00:01:25,950">3.商店街で新たに取り組むべき課題</p><p data-starttime="00:01:26,550" data-endtime="00:01:30,900">4.商店街で一番人気があるイベント</p>',
              listeningContentTranslationZhHans:
                "<p>电视上，男主持在采访商店街代表：</p><p>男：地方商店街普遍衰落，但这条樱花大道商店街却有很多客人，很热闹啊！</p><p>女：谢谢！之前一段时间客流量减少，整个商店街一度显得十分冷清。所以大概3年前开始，年轻店主们带头策划了吸引顾客的商店街活动。</p><p>男：这样啊，都有些什么活动呢？</p><p>女：比如设立学生日，所有店铺当天都提供学生折扣，还有七夕等季节活动。</p><p>男：这样啊。</p><p>女：另外，餐饮店还开发了摆盘精美的菜单，发到网上宣传。多亏了这个，现在不光是近邻，连外地人看到网上的文章也会来。</p><p>商店街代表在谈论什么？</p><p>商店街店铺的更换情况</p><p>振兴商店街的举措</p><p>商店街面临的新问题</p><p>商店街最受欢迎的活动</p>",
              prompt: "2番",
              analysis:
                "代表详细说明了打折活动、季节性策划、网络宣传等振兴措施。\n选项1和3未提及；选项4只是其中一部分，不全面。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_3_3.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,825" data-endtime="00:00:11,600">テレビの動物番組で、専門家がゴリラについて話しています。</p><p data-starttime="00:00:13,075" data-endtime="00:00:21,825">私はゴリラの生態を研究しています。私の研究は、ジャングルで野生のゴリラの群れを追いかけ、観察することから始まります。</p><p data-starttime="00:00:22,075" data-endtime="00:00:39,525">ただ、警戒しているゴリラに近づいて殴られたりすると危険ですから、少しずつ距離を縮めるんです。ゴリラは他の動物を見ると相手を知ろうと近づきますが、相手が怖がって下を向いたり目を逸らしたりすると、相手を敵だと認識して威嚇してきます。</p><p data-starttime="00:00:39,825" data-endtime="00:00:53,675">なので、我々もひるまずに目を合わせます。そして、ゴリラの行為を真似して、ゴロッと横になったり食べたりしているうちに、ゴリラは我々には敵意がないと認識してくれ、近づくことを許すようになります。</p><p data-starttime="00:00:56,775" data-endtime="00:01:00,025">専門家は何について話していますか？</p><p data-starttime="00:01:00,725" data-endtime="00:01:04,750">1.ゴリラが敵を攻撃する方法</p><p data-starttime="00:01:05,475" data-endtime="00:01:08,775">2.ゴリラの記憶力の良さ</p><p data-starttime="00:01:09,325" data-endtime="00:01:13,775">3.ゴリラとの信頼関係を築く方法</p><p data-starttime="00:01:14,275" data-endtime="00:01:18,150">4.ゴリラの研究を始めた理由</p>',
              listeningContentTranslationZhHans:
                "<p>电视动物节目中，专家在谈论大猩猩。</p><p>我研究的是大猩猩的生态。我的研究从在丛林中追踪、观察野生大猩猩的群体开始。</p><p>不过，如果贸然接近警惕心强的大猩猩，被它打到是很危险的，所以需要逐步缩短距离。大猩猩看到其他动物时会试图靠近了解对方，但如果对方表现出恐惧，低头或移开视线等，它们会将对方视为敌人并威吓。</p><p>因此，我们也要毫不退缩地与它们对视。接着模仿大猩猩的动作——比如翻身躺下或吃东西——它们就会意识到我们没有敌意，最终允许我们靠近。</p><p>专家在谈论什么？</p><p>猩猩攻击敌人的方式</p><p>猩猩记忆力的优秀之处</p><p>与猩猩建立信任的方法</p><p>研究猩猩的初衷</p>",
              prompt: "3番",
              analysis:
                "正确选项3：专家重点描述如何通过模仿行为、保持眼神接触建立信任。\n选项1和2未涉及；选项4是研究背景，非核心内容。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_3_4.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,875" data-endtime="00:00:10,525">ラジオで、ある島の医師が話しています。</p><p data-starttime="00:00:11,550" data-endtime="00:00:24,950">私は、都会の大学病院に10年勤務し、3年前に小さな島の診療所に赴任しました。ここでは、様々な病気や怪我に対応する必要があり、医師としての総合的な技量が高められると感じています。</p><p data-starttime="00:00:25,325" data-endtime="00:00:30,150">島の患者さんとの距離が近く、診療所以外にも患者さんによく会います。</p><p data-starttime="00:00:30,500" data-endtime="00:00:38,150">薬や治療の効果について直接聞けたり、患者さんと一緒に病気に向き合っているという実感があって手応えが感じられます。</p><p data-starttime="00:00:38,450" data-endtime="00:00:46,800">また生活習慣について島の人たちに積極的にアドバイスするなど、地域の予防医療に貢献できることにも魅力を感じています。</p><p data-starttime="00:00:48,450" data-endtime="00:00:51,825">この島の医師は何について話していますか？</p><p data-starttime="00:00:52,500" data-endtime="00:00:56,050">1.この島の医師になったきっかけ</p><p data-starttime="00:00:56,900" data-endtime="00:01:00,375">2.この島の医師としてのやりがい</p><p data-starttime="00:01:00,725" data-endtime="00:01:04,625">3.この島の医療の困難な点</p><p data-starttime="00:01:05,250" data-endtime="00:01:09,650">4.この島の生活習慣と病気の関係</p>',
              listeningContentTranslationZhHans:
                "<p>在广播里，某个岛上的医生在谈话。</p><p>我曾在城里的一所大学医院里工作了10年，3年前来到了这个小岛上的诊所。这里有各种各样的疾病和伤痛需要治疗，我觉得这能提升作为医生的综合技术。</p><p>我跟岛上的病人走得很近，在诊所之外也经常和病人见面。</p><p>我可以直接向他们了解药物和治疗的效果，让我真切感受到自己在和病人一起面对疾病，感觉很有成就感。</p><p>此外，就生活习惯积极地向岛上的居民提供建议，为当地的预防医疗做出贡献，也让我觉得很有意义。</p><p>这位岛屿医生在谈论什么？</p><p>成为这座岛上的医生的契机</p><p>作为这座岛上的医生的成就感</p><p>岛上的医疗困难</p><p>生活习惯与疾病的关系</p>",
              prompt: "4番",
              analysis:
                "医生强调“成就感”“手応え（满足感）”，并提到参与预防医疗的乐趣。\n选项1和4是细节；选项3与内容相反（医生认为这里能提升能力）。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_3_5.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,600" data-endtime="00:00:10,875">市民講座で発酵食品について講師が話しています。</p><p data-starttime="00:00:12,225" data-endtime="00:00:16,500">皆さん、ヨーグルトやチーズなどの発酵食品は好きですか？</p><p data-starttime="00:00:17,000" data-endtime="00:00:30,000">発酵食品は色々な実験を通して健康効果が実証されていますが、加熱すると有益な菌の働きが損なわれるので、できるだけそのまま食べることをお勧めします。</p><p data-starttime="00:00:30,800" data-endtime="00:00:35,250">毎日継続して摂取すると、より効果が期待できます。</p><p data-starttime="00:00:36,025" data-endtime="00:00:48,550">それから、食べ物の組み合わせにも注意を払いたいですね。バナナやごぼうのように食物繊維が含まれているものと一緒に摂ると、菌の活動が活発になるんです。</p><p data-starttime="00:00:52,225" data-endtime="00:00:55,175">講師は何について話していますか？</p><p data-starttime="00:00:56,275" data-endtime="00:01:00,075">1.発酵食品に含まれる成分</p><p data-starttime="00:01:00,700" data-endtime="00:01:04,325">2.発酵食品を使った料理</p><p data-starttime="00:01:04,850" data-endtime="00:01:08,950">3.発酵食品が好まれる理由</p><p data-starttime="00:01:09,575" data-endtime="00:01:13,825">4.発酵食品の効果的な食べ方</p>',
              listeningContentTranslationZhHans:
                "<p>市民讲座上，讲师在讲解发酵食品。</p><p>大家都喜欢酸奶和芝士等发酵食品吗？</p><p>各项实验证明，发酵食品对健康有益，然而将它们加热后，会降低有益菌的效果，建议大家直接食用。</p><p>每天持续摄取，还可能会有更好的效果。</p><p>另外，大家也要注意饮食搭配。搭配香蕉、牛蒡等富含膳食纤维的食物一起食用，可以促进有益菌群的活性。</p><p>讲师在谈论什么？</p><p>发酵食品的成分</p><p>发酵食品的烹饪方法</p><p>发酵食品受欢迎的原因</p><p>发酵食品的有效食用方法</p>",
              prompt: "5番",
              analysis: "讲师重点说明“直接吃”“每天吃”“搭配膳食纤维”等具体食用建议。\n其他选项均未直接涉及。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.LISTENING,
          title:
            "問題4 では、問題用紙に何も印刷されていません。まず文を聞いてください。それから、それに対する返事を聞いて、１から３の中から、最もよいものを一つ選んでください。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_1.mp3",
              listeningContent:
                '<p data-starttime="00:00:04,675" data-endtime="00:00:08,725">先輩、テニスの全国大会、きっと優勝してみせます。</p><p data-starttime="00:00:11,075" data-endtime="00:00:13,900">1.全力を出してくるよ。</p><p data-starttime="00:00:15,125" data-endtime="00:00:18,200">2.あきらめるのは早いんじゃない？</p><p data-starttime="00:00:19,575" data-endtime="00:00:22,850">3.うん、期待してるからね。</p>',
              listeningContentTranslationZhHans:
                "<p>前辈，网球全国赛我一定会拿冠军的！</p><p>我会全力以赴的。</p><p>现在放弃也太早了吧？</p><p>嗯，我很期待哦。</p>",
              prompt: "1番",
              analysis:
                "对方表达的是“我一定会赢”的自信和信心，此时作为听者，最自然的回应是表达“对你的表现很期待”，选项3用“我很期待”正好做到了肯定和鼓励。而选项1又变成了对方自言自语，选项2则会让人误解对方有放弃的意思，故排除。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,725" data-endtime="00:00:11,125">ねえ、歌手のもりなお、明日のコンサートを最後に引退するって、知ってた？</p><p data-starttime="00:00:12,200" data-endtime="00:00:16,725">1.えっ、明日で引退するの？どうして？</p><p data-starttime="00:00:17,525" data-endtime="00:00:21,375">2.えっ、コンサートだけは続けるんだ。</p><p data-starttime="00:00:21,825" data-endtime="00:00:26,175">3.えっ、明日のコンサート中止になったの？</p>',
              listeningContentTranslationZhHans:
                "<p>诶，你知道吗？歌手森直听说明天的演唱会之后就要退出歌坛了。</p><p>诶，明天就退出了？为什么啊？</p><p>诶，就只有演唱会继续开啊。</p><p>诶，明天的演唱会取消了吗？</p>",
              prompt: "2番",
              analysis:
                "题干是在问“你知道森直要在明天的演唱会后退出歌坛吗？”，重点是“退出歌坛”，所以最自然的反应是表达惊讶并追问“为什么要退休？”，即选项1。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_3.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,400" data-endtime="00:00:09,000">ゼミでやった実験、データを整理するのに手こずったね。</p><p data-starttime="00:00:10,425" data-endtime="00:00:13,575">1.確かにスムーズにいったよね。</p><p data-starttime="00:00:14,375" data-endtime="00:00:18,250">2.あ、もっと大変だと思っていたんだね。</p><p data-starttime="00:00:19,500" data-endtime="00:00:23,400">3.本当、途中で嫌になっちゃったよ。</p>',
              listeningContentTranslationZhHans:
                "<p>在研究班做实验，整理数据的时候真是费了好大劲儿。</p><p>确实挺顺利的嘛。</p><p>你是不是还以为会更难呀。</p><p>真的，中途都不想做了。</p>",
              prompt: "3番",
              analysis: "说话人感叹“费劲儿”，听者以“中途都不想做了。”来呼应说话人的无奈，选项2最贴切。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_4.mp3",
              listeningContent:
                '<p data-starttime="00:00:04,975" data-endtime="00:00:08,650">美容師さんに言われるままにパーマかけちゃったけど、どうかな？</p><p data-starttime="00:00:09,325" data-endtime="00:00:13,650">1.え一？美容師さんにアドバイスもらわなかったんだ。</p><p data-starttime="00:00:14,400" data-endtime="00:00:18,025">2.美容師さんの言うとおりにして正解だよ。</p><p data-starttime="00:00:18,925" data-endtime="00:00:23,200">3.美容師さんのすすめるスタイルにすればよかったかもね。</p>',
              listeningContentTranslationZhHans:
                "<p>我听美发师的建议烫了这个头发，你觉得怎么样？</p><p>诶？美发师没给你建议？</p><p>听美发师的真是没错。</p><p>也许该剪美容师推荐的发型才对。</p>",
              prompt: "4番",
              analysis:
                "说话人问“怎么样”，想确认自己听从美容师建议是否正确。选项2直接肯定“听美容师的没错”，是最恰当的回应。选项1反问对方没采纳建议，和实际不符；选项3又显得对方有错，也不符合“怎么样”的询问意图。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_5.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,325" data-endtime="00:00:09,725">研究会の発表の事前練習、明日なら見てあげられなくもないよ。</p><p data-starttime="00:00:11,025" data-endtime="00:00:14,625">1.どうしても明日は難しいですか？</p><p data-starttime="00:00:15,425" data-endtime="00:00:19,825">2.すみません、では明日お願いします。</p><p data-starttime="00:00:20,450" data-endtime="00:00:24,200">3.じゃあ、今日の方がいいんですね。</p>',
              listeningContentTranslationZhHans:
                "<p>明天的话，我也不是不可以帮你预演一下研讨会发言。</p><p>你明天真的是完全不行吗？</p><p>不好意思，那就麻烦你明天帮忙了。</p><p>那今天可以是吗？</p>",
              prompt: "5番",
              analysis:
                "对方是“明天也可以帮你看”，意思是“如果你要的话，明天行”。此时要接受这个好意，选项2“那就明天拜托你了”最自然",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_6.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,900" data-endtime="00:00:11,375">ねえ、私たち午後から出張だけど、新幹線、今運転を見合わせるって。</p><p data-starttime="00:00:12,325" data-endtime="00:00:16,375">1.えっ、いつ頃通転を再開するんだろう。</p><p data-starttime="00:00:17,300" data-endtime="00:00:21,800">2.あっ、新幹線動いたんだ。良かった。</p><p data-starttime="00:00:22,600" data-endtime="00:00:26,725">3.じゃあ、予定を変更しなくてよさそうだね。</p>',
              listeningContentTranslationZhHans:
                "<p>我们下午要出差，但是听说新干线现在停运了。</p><p>诶，不知道大概什么时候会恢复啊。</p><p>啊，新干线在运行啊，太好了。</p><p>那看来我们不用改日程了吧。</p>",
              prompt: "6番",
              analysis:
                "说话人只报告“暂停运行”，并未提恢复信息，听者最自然会追问“什么时候能恢复？”，选项1符合。选项2明显和“暂停”矛盾，选项3则错误地认为可以按原计划走，也与“暂停中”不符。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_7.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,400" data-endtime="00:00:11,350">あの、このカウンターで3,000円以上のレシートと引き換えにお皿がもらえるって聞いたんですが。</p><p data-starttime="00:00:12,325" data-endtime="00:00:16,875">1.あっ、商品のお取り替えをご希望ですね。</p><p data-starttime="00:00:18,025" data-endtime="00:00:21,925">2.3,000円のご予算でお求めでしょうか。</p><p data-starttime="00:00:22,600" data-endtime="00:00:27,075">3.あっ、はい。レシートをお預かりします。</p>',
              listeningContentTranslationZhHans:
                "<p>那个，我听说来这个柜台用消费金额3000日元以上的收据可以换盘子，是真的吗？</p><p>啊，您是想退换商品是吧</p><p>您是想用3000日元预算买东西吗？</p><p>啊，好的。我来看看您的收据。</p>",
              prompt: "7番",
              analysis:
                "顾客是来凭收据换盘子，店员应该“收下收据”进行换取，选项3最合适；选项1误以为顾客要换商品，选项2又变成预算询问，都不对。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_8.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,825" data-endtime="00:00:12,025">ゼミの食事会、いつもの店に電話したんだけど、キャンセルが出ない限り、席確保できないって。</p><p data-starttime="00:00:13,025" data-endtime="00:00:16,675">1.ああ、キャンセルできないんだね。</p><p data-starttime="00:00:17,750" data-endtime="00:00:21,800">2.じゃあ何とか予約取れそうだね。</p><p data-starttime="00:00:22,575" data-endtime="00:00:26,575">3.じゃあ、他の店探すしかないね</p>',
              listeningContentTranslationZhHans:
                "<p>我给研讨会小组聚餐常去的那家店打过电话了，他们说只要没有客人取消，就订不到座位。</p><p>啊，就没法取消了吗？</p><p>那看来还能订到吧？</p><p>那我们只能找别家店了。</p>",
              prompt: "8番",
              analysis:
                "店家明确“除非有人取消，否则无法提供座位”，也就是说当前无法订位。对策是“只能另找别家”，选项3贴切。选项1和2都和事实相悖。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_9.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,300" data-endtime="00:00:11,500">山本課長って先月この支店に異動してきたと思ったら、海外に転勤だって。</p><p data-starttime="00:00:12,650" data-endtime="00:00:16,475">1.この間来たばかりなのにまた異動？</p><p data-starttime="00:00:17,025" data-endtime="00:00:21,725">2.えっ、この支店に来るはずが海外転勤になったの？</p><p data-starttime="00:00:22,475" data-endtime="00:00:26,675">3.課長、長いことこの支店にいたもんね。</p>',
              listeningContentTranslationZhHans:
                "<p>山本课长上个月才刚调到这家分店，现在又要调去海外了。</p><p>之前才刚来，又要调动了？</p><p>诶，明明要来这家分店的，结果是调去海外了？</p><p>课长在这家分店待了很久了吧。</p>",
              prompt: "9番",
              analysis:
                "对方表达“刚调来就要再调走”，最自然的反应是感叹“才刚来就又要调动？”，即选项1。选项2语序奇怪且把重点放在“原本要来这里”；选项3则说“待了很久”，与“才来一个月”矛盾。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_10.mp3",
              listeningContent:
                '<p data-starttime="00:00:06,075" data-endtime="00:00:09,925">卒業論文の提出まであと10日で、切羽詰まってきたよ。</p><p data-starttime="00:00:10,975" data-endtime="00:00:14,125">1.ヘえー、余裕あるんだね。</p><p data-starttime="00:00:15,425" data-endtime="00:00:18,650">2.あと少しだから頑張って。</p><p data-starttime="00:00:19,325" data-endtime="00:00:22,950">3.すごい、もう書き終わったんだ。</p>',
              listeningContentTranslationZhHans:
                "<p>离毕业论文提交只有10天了，我都快赶不及了。</p><p>哇，你还挺从容的啊。</p><p>快到最后关头了，加油吧。</p><p>哇，你都写完了啊？</p>",
              prompt: "10番",
              analysis:
                "说话人是“时间紧迫很焦虑”，听者应给予鼓励，“最后关头加油”最合适，即选项2。选项1误以为对方很从容，选项3则误解为已完成。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_4_11.mp3",
              listeningContent:
                '<p data-starttime="00:00:05,475" data-endtime="00:00:09,900">みどり社との共同研究、中止を余儀なくされたって課長が言ってたよ。</p><p data-starttime="00:00:10,775" data-endtime="00:00:14,925">1.今になって中止にはできないもんね。</p><p data-starttime="00:00:15,925" data-endtime="00:00:19,550">2.えっ、いったい何があったの？</p><p data-starttime="00:00:20,425" data-endtime="00:00:24,350">3.あー、続けられることになったんだね。</p>',
              listeningContentTranslationZhHans:
                "<p>课长说和绿公司的联合研究被迫中止了。</p><p>现在想要中止也不行了吧。</p><p>诶，到底发生了什么事？</p><p>啊，原来又能继续下去了啊。</p>",
              prompt: "11番",
              analysis:
                "信息是“联合研究被迫中止”，听者最自然会好奇“到底为什么要中止？发生了什么？”即选项2。选项1和3都与“中止”的事实不符。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: true,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          type: SectionType.LISTENING,
          title:
            "問題5 では長めの話を聞きます。この問題には練習はありません。問題用紙に、メモをとってもかまいません。 \n１番\n問題用紙に何も印刷されていません。まず話を聞いてください。それから、質問と選択肢を聞いて、１から４の中から、最もよいものを一つ選んでください。\n２番\nまず話を聞いてください。それから、二つの質問を聞いて、それぞれ問題用紙の１から４の中から、最もよいものを一つ選んでください。",
          questions: [
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_5_1.mp3",
              listeningContent:
                '<p data-starttime="00:00:02,225" data-endtime="00:00:05,600">書店で店長と店員二人が話しています。</p><p data-starttime="00:00:06,825" data-endtime="00:00:15,475">店長：最近お客さんが減って、売り上げが落ちてるんだよね。駅の近くに新しい書店もできたし。何か売上を回復するいい案ないかな？</p><p data-starttime="00:00:15,525" data-endtime="00:00:25,775">店員A：今全国の売り上げランキングで上位に入ってる本を入口近くに置いてますけど、もっとお客様の目に留まりやすいようにレジの近いところに置くのはどうですか？</p><p data-starttime="00:00:25,975" data-endtime="00:00:37,025">店員B：うちは近くにデザイン関係の会社が多いからか、以前からデザイン関連の本がよく売れてますよね。それに店員の推薦文を書いたカードをつけてもっと目立たせたらどうですか？</p><p data-starttime="00:00:37,275" data-endtime="00:00:40,175">店長：前にやったことあるけど、手間がかかるんだよね。</p><p data-starttime="00:00:40,375" data-endtime="00:00:51,375">店員A：それか、雑誌をより充実させるのはどうでしょうか。最近は種類も増えているので。雑誌が揃っていれば、それを目当てに来てくれる新しいお客さんも増えるかもしれません。</p><p data-starttime="00:00:51,800" data-endtime="00:00:52,525">店長：そうだね。</p><p data-starttime="00:00:52,725" data-endtime="00:01:07,125">店員B：私は以前からのお客様を引き続きターゲットにした方がいいと思うんです。写真集とか雑誌とか種類に関わらず、デザインに関連する本を1ヵ所にまとめたコーナーを作るのはどうですか？それがうちの強みになると思うんです。</p><p data-starttime="00:01:07,275" data-endtime="00:01:10,825">店員A：新しいコーナーですか？場所はどうするんですか？</p><p data-starttime="00:01:10,975" data-endtime="00:01:23,075">店長：うーん…じゃ、ソファーが置いてある閲覧スペースに棚を増やして、そこに集めようか。1ヵ所にまとめてある方がアピールになるね。推薦文のカードをつけるのは様子を見てからにしよう。</p><p data-starttime="00:01:25,925" data-endtime="00:01:31,375">書店の売り上げを回復するために、まずどうすることにしましたか？</p><p data-starttime="00:01:31,725" data-endtime="00:01:35,375">1.売れている本をレジの近くに置く。</p><p data-starttime="00:01:38,225" data-endtime="00:01:43,150">2.デザイン関連の本に推薦文のカードをつける。</p><p data-starttime="00:01:46,175" data-endtime="00:01:49,725">3.雑誌のコーナーを広くする</p><p data-starttime="00:01:52,775" data-endtime="00:01:56,875">4.デザイン関連の本のコーナーを作る。</p>',
              listeningContentTranslationZhHans:
                "<p>书店里，店长与两名员工在对话。</p><p>店长：最近客人减少，销售额下滑了。车站附近还新开了书店。有什么恢复销量的好主意吗？</p><p>店员A：现在把全国畅销书排名靠前的放在入口附近了，但或许该挪到收银台旁边，让顾客更容易看到？</p><p>店员B：咱们附近设计公司多，设计类的书一直卖得好。要不要再附上一张写有店员推荐语的卡片，让它更吸引人？</p><p>店长：之前试过，不过太费事了。</p><p>店员A：要不扩充杂志区？现在种类多了，如果杂志齐全的话，可能会吸引一些专门为此而来的新顾客。</p><p>店长：有道理。</p><p>店员B：我觉得该以老客为主。不如把设计相关书，无论是摄影集还是杂志，都集中设个专区？这应该能成为我们的特色。</p><p>店员A：新专区吗？要放哪儿呢？</p><p>店长：嗯…那在沙发阅读区加个书架集中展示吧。集中在一个专区更有吸引力。推荐卡就再看看情况吧。</p><p>书店为恢复销售额首先决定怎么做？</p><p>将畅销书转移到收银台附近</p><p>在设计相关书籍上加上推荐卡</p><p>扩充杂志区</p><p>为设计相关书籍设立专区</p>",
              prompt: "1番",
              analysis:
                "1.❌错误\n→ 店员A的一开始的提议，但店长未采纳，后续讨论转向其他方案。\n\n2.❌错误\n→ 店员B提出，但店长以「手間がかかる」为由，暂不执行。\n\n3.❌错误\n→ 店员A的第二个提议，店长未明确回应，最终决策未涉及杂志区扩展。\n\n4.✅正确\n→ 店长最终拍板「閲覧スペースに棚を増やしてデザイン関連本を集める」，明确指向设立专区。\n\n关键点锁定：\n最终决策：店长结尾使用「じゃ、～しよう」句式，表明执行动作。\n排除干扰：注意区分「提议」与「决定」，店员B的专区提议是唯一被采纳的方案。\n动作优先级：「まずどうする」对应「首先实施」，即专区设立为第一措施。",
              choices: [
                {
                  label: "1.",
                  text: "①",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "②",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "③",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "④",
                  isCorrect: true,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_5_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:03,000" data-endtime="00:00:05,925">テレビを見ながら夫婦が話しています。</p><p data-starttime="00:00:07,600" data-endtime="00:00:12,000">テレビ：最近、一般の人が製品の工場を見学できるところがあります。</p><p data-starttime="00:00:12,175" data-endtime="00:00:15,025">今日はその中から四つご紹介します。</p><p data-starttime="00:00:15,125" data-endtime="00:00:27,475">まず、ヒガシヤの工場。こちらではカップスープの製造工程を見学したあと、カップに好きな具と粉末のスープを組み合わせて入れて、オリジナルのカップスープを作って持って帰れます。</p><p data-starttime="00:00:27,725" data-endtime="00:00:45,225">次はニシマル牛乳工場です。こちらでは製造管理のため味覚の専門家が、製品の風味を自分の舌で確認するシステムを取り入れています。見学の際、味覚の専門家から実際の牛乳の検査方法などについて聞くことができます。</p><p data-starttime="00:00:45,450" data-endtime="00:00:58,475">ミナミはサッカーボールの工場です。ボール用の皮が次第に立体的になっていく様子に目を見張ります。小さなボールに色付けする作業を体験できて、できたものはお土産に持って帰れます。</p><p data-starttime="00:00:58,850" data-endtime="00:01:12,050">最後はおもちゃメーカーのキタヤ。この工場では車や電車のおもちゃを作る過程が見学できます。ここでしか入手できないオリジナル商品が購入可能なのも人気の理由なんだそうですよ。</p><p data-starttime="00:01:14,350" data-endtime="00:01:18,250">女：ヘー、面白そう。今度子供を連れて行ってみない？</p><p data-starttime="00:01:18,400" data-endtime="00:01:30,400">男：うん、いいね。僕は機械化されてる工場でも最終的には人間の舌で確認しているっていうの興味深かったけど。でも、まぁ子供も一緒だから実際に作れるところの方がいいな。</p><p data-starttime="00:01:30,625" data-endtime="00:01:32,050">女：あ、ボールね。</p><p data-starttime="00:01:32,100" data-endtime="00:01:43,400">男：あ、そっちじゃなくて。いつも飲んでるのとちょっと違う味にできるなんて面白そう。行くならそこがいいな。君はどこがいいと思う？涼太が好きな乗り物？</p><p data-starttime="00:01:43,650" data-endtime="00:01:53,850">女：うーん、そこはオリジナル商品をねだられて買う羽目になりそう。お土産をもらえるところならその心配がないからいいよね。うちに帰ってから遊べるし。</p><p data-starttime="00:01:54,125" data-endtime="00:01:57,400">男：うん、じゃあ涼太にも聞いてから決めよう。</p><p data-starttime="00:02:04,500" data-endtime="00:02:09,925">質問1：男の人はどの工場に行きたいと言っていますか？</p><p data-starttime="00:02:19,850" data-endtime="00:02:25,000">質問2：女の人はどの工場に行きたいと言っていますか？</p>',
              listeningContentTranslationZhHans:
                "<p>夫妻在一边看电视一遍聊天。</p><p>电视：最近有些工厂向公众开放参观。</p><p>今天介绍其中四家：</p><p>首先是东屋工厂。参观杯装汤制作流程后，可选喜欢的配料和汤粉装在杯子里组合，制作自己的原创汤品带走。</p><p>然后是西丸牛奶厂。出于品控管理需要，这里引入了一种机制：味觉专家会用自己的味蕾检测风味。参观时可听专家讲解牛奶的实际检查方法。</p><p>“南”是一家足球工厂。这里可以看到足球皮革逐渐立体成型的过程。可以体验给小球涂色的过程，还能把它们带走作为纪念。</p><p>最后是北谷玩具厂。这里可以参观汽车、电车玩具制作过程，还可买到独家的原创商品，这也是工厂大受欢迎的原因哦。</p><p>女：挺有趣的！下次带孩子去吧？</p><p>男：好啊。机械化工厂最终还要靠人的味觉检测，这点我挺感兴趣。但带孩子的话还是能动手的地方更好。</p><p>女：啊，是足球厂吧？</p><p>男：啊，不是那里。能调出和平时不一样的汤，好像挺有意思的，要不去那儿吧。你觉得呢？去看凉太喜欢的交通工具吗？</p><p>女：嗯…去那的话孩子肯定会闹着买独家商品。能免费拿纪念品的地方更好，回家还能接着玩。</p><p>男：嗯，那先问问凉太再定吧。</p><p>问题1：丈夫想去哪个工厂？</p><p>问题2：妻子想去哪个工厂？</p>",
              prompt: "質問1",
              analysis:
                '选择理由：能自创不同口味的汤（"味にできるなんて面白そう"）。\n男人明确否定南工厂（"そっちじゃなくて"）。西丸仅是兴趣未选择，北谷未提及。',
              choices: [
                {
                  label: "1.",
                  text: "ヒガシヤ",
                  isCorrect: true,
                },
                {
                  label: "2.",
                  text: "ニシマル",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "ミナミ",
                  isCorrect: false,
                },
                {
                  label: "4.",
                  text: "キタヤ",
                  isCorrect: false,
                },
              ],
            },
            {
              type: QuestionType.SYNTHETICAL_COMPREHENSION_LISTEN,
              answerType: AnswerType.SINGLE_CHOICE,
              listeningAudio: "listening_5_2.mp3",
              listeningContent:
                '<p data-starttime="00:00:03,000" data-endtime="00:00:05,925">テレビを見ながら夫婦が話しています。</p><p data-starttime="00:00:07,600" data-endtime="00:00:12,000">テレビ：最近、一般の人が製品の工場を見学できるところがあります。</p><p data-starttime="00:00:12,175" data-endtime="00:00:15,025">今日はその中から四つご紹介します。</p><p data-starttime="00:00:15,125" data-endtime="00:00:27,475">まず、ヒガシヤの工場。こちらではカップスープの製造工程を見学したあと、カップに好きな具と粉末のスープを組み合わせて入れて、オリジナルのカップスープを作って持って帰れます。</p><p data-starttime="00:00:27,725" data-endtime="00:00:45,225">次はニシマル牛乳工場です。こちらでは製造管理のため味覚の専門家が、製品の風味を自分の舌で確認するシステムを取り入れています。見学の際、味覚の専門家から実際の牛乳の検査方法などについて聞くことができます。</p><p data-starttime="00:00:45,450" data-endtime="00:00:58,475">ミナミはサッカーボールの工場です。ボール用の皮が次第に立体的になっていく様子に目を見張ります。小さなボールに色付けする作業を体験できて、できたものはお土産に持って帰れます。</p><p data-starttime="00:00:58,850" data-endtime="00:01:12,050">最後はおもちゃメーカーのキタヤ。この工場では車や電車のおもちゃを作る過程が見学できます。ここでしか入手できないオリジナル商品が購入可能なのも人気の理由なんだそうですよ。</p><p data-starttime="00:01:14,350" data-endtime="00:01:18,250">女：ヘー、面白そう。今度子供を連れて行ってみない？</p><p data-starttime="00:01:18,400" data-endtime="00:01:30,400">男：うん、いいね。僕は機械化されてる工場でも最終的には人間の舌で確認しているっていうの興味深かったけど。でも、まぁ子供も一緒だから実際に作れるところの方がいいな。</p><p data-starttime="00:01:30,625" data-endtime="00:01:32,050">女：あ、ボールね。</p><p data-starttime="00:01:32,100" data-endtime="00:01:43,400">男：あ、そっちじゃなくて。いつも飲んでるのとちょっと違う味にできるなんて面白そう。行くならそこがいいな。君はどこがいいと思う？涼太が好きな乗り物？</p><p data-starttime="00:01:43,650" data-endtime="00:01:53,850">女：うーん、そこはオリジナル商品をねだられて買う羽目になりそう。お土産をもらえるところならその心配がないからいいよね。うちに帰ってから遊べるし。</p><p data-starttime="00:01:54,125" data-endtime="00:01:57,400">男：うん、じゃあ涼太にも聞いてから決めよう。</p><p data-starttime="00:02:04,500" data-endtime="00:02:09,925">質問1：男の人はどの工場に行きたいと言っていますか？</p><p data-starttime="00:02:19,850" data-endtime="00:02:25,000">質問2：女の人はどの工場に行きたいと言っていますか？</p>',
              listeningContentTranslationZhHans:
                "<p>夫妻在一边看电视一遍聊天。</p><p>电视：最近有些工厂向公众开放参观。</p><p>今天介绍其中四家：</p><p>首先是东屋工厂。参观杯装汤制作流程后，可选喜欢的配料和汤粉装在杯子里组合，制作自己的原创汤品带走。</p><p>然后是西丸牛奶厂。出于品控管理需要，这里引入了一种机制：味觉专家会用自己的味蕾检测风味。参观时可听专家讲解牛奶的实际检查方法。</p><p>“南”是一家足球工厂。这里可以看到足球皮革逐渐立体成型的过程。可以体验给小球涂色的过程，还能把它们带走作为纪念。</p><p>最后是北谷玩具厂。这里可以参观汽车、电车玩具制作过程，还可买到独家的原创商品，这也是工厂大受欢迎的原因哦。</p><p>女：挺有趣的！下次带孩子去吧？</p><p>男：好啊。机械化工厂最终还要靠人的味觉检测，这点我挺感兴趣。但带孩子的话还是能动手的地方更好。</p><p>女：啊，是足球厂吧？</p><p>男：啊，不是那里。能调出和平时不一样的汤，好像挺有意思的，要不去那儿吧。你觉得呢？去看凉太喜欢的交通工具吗？</p><p>女：嗯…去那的话孩子肯定会闹着买独家商品。能免费拿纪念品的地方更好，回家还能接着玩。</p><p>男：嗯，那先问问凉太再定吧。</p><p>问题1：丈夫想去哪个工厂？</p><p>问题2：妻子想去哪个工厂？</p>",
              prompt: "質問1",
              analysis:
                "妻子提议「ボールね」指向南工厂。\n后续强调「免费纪念品无购买压力」，南厂符合条件（涂色体验成品可带走，无需额外消费）。\n对于北谷则担心消费，对于东屋则未明确支持。",
              choices: [
                {
                  label: "1.",
                  text: "ヒガシヤ",
                  isCorrect: false,
                },
                {
                  label: "2.",
                  text: "ニシマル",
                  isCorrect: false,
                },
                {
                  label: "3.",
                  text: "ミナミ",
                  isCorrect: true,
                },
                {
                  label: "4.",
                  text: "キタヤ",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
