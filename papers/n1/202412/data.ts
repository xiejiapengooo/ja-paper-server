import { PaperQuestion, PaperSection, QuestionChoice, QuestionType, SectionType } from "@prisma/client";

type Data = {
  id: string;
  title: string;
  sections: Array<{
    id: PaperSection["id"];
    partId: PaperSection["partId"];
    type: PaperSection["type"];
    title: PaperSection["title"];
    order: PaperSection["order"];
    content: string;
    contentTranslationZhHans: string;
    questions: Array<{
      id: PaperQuestion["id"];
      type: PaperQuestion["type"];
      order: PaperQuestion["order"];
      prompt: PaperQuestion["prompt"];
      analysis: PaperQuestion["analysis"];
      choices: Array<{
        id: QuestionChoice["id"];
        label: QuestionChoice["label"];
        text: QuestionChoice["text"];
        isCorrect: QuestionChoice["isCorrect"];
      }>;
    }>;
  }>;
};

export const data: Data = {
  id: "",
  title: "2024年12月",
  sections: [
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題1 _____の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。",
      order: 1,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "佐藤選手がゴールを決めたとき、観客は<u>絶叫</u>した。",
          analysis: "选手佐藤进球时，观众发出了尖叫声。\n“絶叫”正确读音是 ぜっきょう，表示“发出尖锐而剧烈的叫声”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "せっきょう",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "ぜっきょう",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "ぜっきゅう",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "せっきゅう",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "<u>背後</u>から物音が聞こえた。",
          analysis: "从背后传来了声音。\n汉字“背後”表示“后方、背后”，标准读音为 はいご；",
          choices: [
            {
              id: "",
              label: "1.",
              text: "はいご",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "はいこう",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "せいご",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "せいこう",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "将来の<u>抱負</u>を述べる。",
          analysis:
            "阐述对将来的抱负。\n“抱負”表示“志向、志愿”，标准读音为 ほうふ；\n其他选项或少读一拍（ほふ）、或浊音不符（ほうぶ、ほぶ）均不正确。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "ほうふ",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "ほうぶ",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "ほふ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "ほぶ",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "人を<u>侮って</u>はいけない。",
          analysis:
            "不可轻视他人。\n“侮る”意思是“轻视、蔑视”，读音应为あなどる；\n“からかう”是“戏弄、嘲笑”；\n“ののしる”是“辱骂、责骂”；\n“裏切る”是“背叛”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "からかって",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "ののしって",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "あなどって",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "うらぎって",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "相手がわかるように、<u>筋道</u>を立てて説明した。",
          analysis: "为了让对方明白，条理分明地进行了说明。\n“筋道”意为“条理、脉络”，正确读音 すじみち；",
          choices: [
            {
              id: "",
              label: "1.",
              text: "きんどう",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "すじどう",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "きんみち",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "すじみち",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "その小説の主人公は、<u>奔放</u>な性格をしている。",
          analysis: "那部小说的主人公性格奔放。\n“奔放”表示“不受束缚、率性”，正确读音 ほんぽう。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "はんぽう",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "ぼんぽう",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "ほんぽう",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "ばんぽう",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題2 （　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。",
      order: 2,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "その生物は、厳しい環境に(　)できる能力を持っている。",
          analysis:
            "那种生物具有能够适应严酷环境的能力。\n“厳しい環境に適応できる”表示“能够适应严苛环境”；\n“合致”是“吻合、一致”；\n“転換”是“转换、转变”；\n“推移”是“变化、推移”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "適応",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "合致",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "転換",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "推移",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "店の売り上げを五年で二倍にするという目標を(　)、みんなで努力している。",
          analysis:
            "大家正为实现“五年内将店铺营业额翻倍”这一目标而努力。\n“目標を掲げる”表示“提出/确定目标”；\n“企む”常用于“企图、图谋不轨”；\n“興る”指“兴起、振兴”；\n“築く”指“建设、构筑”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "企って",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "興って",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "築いて",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "掲げて",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "新しい市長は前市長の政策を(　)し、駅前の開発を進めると述べた。",
          analysis:
            "新市长表示将沿用前任市长的政策，推进车站前的开发。\n“踏襲する”表示“遵循、沿用已有做法”；\n“相続”多指“继承财产”；\n“獲得”指“获得”；\n“伝承”指“传承（文化、技艺等）”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "相続",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "獲得",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "踏襲",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "伝承",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "台風で電車の到着が大幅に遅れたため、駅でしばらく(　)された。",
          analysis:
            "台风导致电车大幅晚点，所以在车站耽搁了一段时间。\n“足止めされる”表示“（因故）被迫停留、滞留”；\n“息抜き”是“缓解压力、休息”；\n“棚上げ”是“暂时搁置议题”；\n“待ち伏せ”是“埋伏等待”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "息抜き",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "棚上げ",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "待ち伏せ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "足止め",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "今日は試合で一日中走り続けたので、疲れて(　)になった。",
          analysis:
            "今天一整天在比赛里不停地跑，所以筋疲力尽了。\n“へとへと”表示“筋疲力尽、精疲力竭”；\n“めちゃめちゃ”是“混乱、不成样子”；\n“どろどろ”“ぐちゃぐちゃ”分别是“泥泞、杂乱”之意。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "めちゃめちゃ",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "へとへと",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "どろどろ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "ぐちゃぐちゃ",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "工場の誘致について、市長が丁寧に説明し、住民の不安の（　）に努めた。",
          analysis:
            "关于工厂的引进，市长做了详细说明，努力消除居民的不安。\n“払拭する”表示“拂去、消除（疑虑、忧虑等）”；\n“喪失”是“丧失”；\n“破棄”是“废弃”；\n“排斥”是“排斥、排挤”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "払拭",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "喪失",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "破棄",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "排斥",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "階段でつまずいて転びそうになったので、(　)隣にいた友人の腕をつかんだ。",
          analysis:
            "在台阶上绊到，差点摔倒，赶紧抓住了旁边朋友的胳膊。\n“とっさに”表示“在瞬间、当下反射性地”；\n“じきに”是“不久”；\n“いまに”是“马上、不久就”；\n“とっくに”是“早就”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "じきに",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "いまに",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "とっさに",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "とっくに",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題3 _____の言葉に意味が最も近いものを、１・２・３・４から一つ選びなさい。",
      order: 3,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "社長は小林部長の<u>手腕</u>を高く評価しているようだ。",
          analysis:
            "社长似乎对小林部长的手腕（能力）给予高度评价。\n“手腕”在此意为“能力”；\n“経験”是“经验”；\n“考え”是“想法”；\n“人柄”是“人品、性格”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "経験",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "能力",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "考え",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "人柄",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "時間を<u>ロス</u>してしまった。",
          analysis:
            "浪费了时间。\n“ロスする”借自英语“lose”，意为“浪费、白费”；\n“無駄にする”与之对应；\n“間違えて”是“弄错”；\n“かいて”无此用法；\n“延長して”是“延长”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "間違えて",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "無駄にして",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "かいて",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "延長して",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "確認が<u>おろそか</u>になっていた。",
          analysis:
            "确认工作被敷衍了事了。\n“おろそか”含义与“いいかげん”相近，都有“不认真、敷衍”的意思；\n“めんどうくさい”是“麻烦”；\n“困難”是“困难”；\n“遅く”是“慢”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "めんどうくさ",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "困難",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "遅く",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "いいかげん",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "私たちのチームの<u>目下</u>の目標は、市の大会で優勝することだ。",
          analysis:
            "我们队当前的目标是在市级比赛中夺冠。\n“目下”（もっか）意为“当前、现在”，对应选项 今；\n“最大”是“最大的”；\n“将来”是“将来”；\n“最低限”是“最低限度”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "最大",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "将来",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "今",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "最低限",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "経費を考慮したうえで、古いアパートの改修工事を<u>請け負う</u>ことにした。",
          analysis:
            "在考虑了费用之后，决定承包对旧公寓的改修工程。\n“請け負う”即“承包、承担”，对应 引き受ける；\n“申し込む”是“申请”；\n“断る”是“拒绝”；\n“諦める”是“放弃”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "引き受ける",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "申し込む",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "断る",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "諦める",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "先生に本を<u>進呈</u>しました。",
          analysis:
            "把书赠送给老师了。\n“進呈する”是“赠呈”，对应敬语“差し上げる”；\n“いただく”是“接受”；\n“貸す”是“借出”，与赠送不同；\n“借りる”是“借入”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "差し上げました",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "いただきました",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "お貸ししました",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "お借りしました",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題4 次の言葉の使い方として最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 4,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "加工",
          analysis:
            "“加工”主要用于对物质材料进行切削、组合或化学处理等，制作出新产品。\n选项2的“余った木材を加工した商品”正是典型用法。\n1、3、4 均把“加工”用于非物理材料（生活习惯、房屋、规章制度），不自然，应分别改为“改善”“改装”“改定”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "食事や運動なとの生活習慣を<u>加工</u>するよう医師からアドバイスを受けた。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "このお店では、余った木材を<u>加工</u>した商品を販売してる。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "両親は古い民家を安く購入して、自分たちで民宿に<u>加工</u>した。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "わが社は、現状に合わせて就業規則の一部を<u>加工</u>することにした。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "養う",
          analysis:
            "“養う”常指供给生活所需以抚养人。\n选项4“養っている”指“抚养孩子”最贴切。\n1 多用“飼う”，“饲养”虫子；\n2 栽种植物多用“育てる”；\n3 “养公司”说法也不自然。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "息子が近くの公園で虫を捕まえてきたので、家で<u>養う</u>ことにした。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "部屋のベランダで植物を<u>養う</u>ために、お店で鉢や土を買った。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "私は一人で売り上げを伸ばし、自分の会社を<u>養って</u>きた。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "山口さんは、会社を経営しながら3人の子どもを<u>養って</u>いる。",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "資質",
          analysis:
            "“資質”侧重指人或动物的天赋、素质。\n选项4用在“人作为运动员的天赋”最自然。\n1 用在“设备”上不合；\n2 虽可指“动物本性”，但不如 4 常见；\n3 “产品质量”应为“品質”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "携帯電話のカメラの<u>資質</u>は日に日に向上している。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "この動物は、見た目はかわいらしいが、<u>資質</u>は荒いので注意が必要だ。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "玩具の会社で製品の<u>資質</u>を管理する仕事をしています。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "森さんは身体能力が高く、陸上選手としての<u>資質</u>に恵まれている",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "正当",
          analysis:
            "“正当”可指“合理、合情理”或“应得、合法”。\n选项 3 “正当な評価を受ける”表示“得到应得的评价”，用法最恰当。\n1 应用“正しく”；\n2 应说“正式な名前”；\n4 应说“順調に”或“着々と”。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "説明書を見て<u>正当</u>に組み立てたのに、部品が一つ余った。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "「まる」はニックネームで、私の<u>正当</u>な名前は「丸山」です。  ",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "その画家は、若いころには<u>正当</u>な評価を受けていなかった。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "トンネルの建設工事は大きな遅れもなく、<u>正当</u>に進んでいる。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "ありきたり",
          analysis:
            "“ありきたり”指“平凡、老套、陈词滥调”。\n选项2用来评价小说情节“老套”，最典型；\n3 虽也自然，但更常见于评价“事物或表达”，首推 2；\n1 、4 用法不当。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "この町はコンビニが<u>ありきたり</u>で、とても便利だ。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "その小説のストーリーは<u>ありきたり</u>で、つまらなかった",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "困っている人がいたら助けるのは、<u>ありきたり</u>のことだ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "<u>ありきたり</u>の方は、入場料が1,000円となっています。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "間柄",
          analysis:
            "“間柄”多用于人与人之间的关系。\n选项1“親しい間柄”描述人际关系最自然。\n2 、3 、4 虽也谈“关系”，但均偏向国家、事物或抽象环境，不如人际用法贴切。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "木村さん、中学クラスメートは、それほど親しい<u>間柄</u>ではない",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "友好条約で両国の<u>間柄</u>は今後進展する",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "生態の変化、近年の環境の破壊との<u>間柄</u>が指摘される",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "父漁民、小さい頃から、海と<u>間柄</u>の深い暮らしをしてきしてきた",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題5 次の文の（　　　）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 5,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "宝くじ売り場があるよ、買ってみない?\nどうせ当たらないんだから、買う(　)無駄だったよ。",
          analysis:
            "反正不会中奖，买了也是浪费。\nこの文は、宝くじを買ったことが無駄だったという意味を表しています。「どうせ当たらないんだから、買うだけ無駄だったよ。」のように、「だけ」を使うことで、「買うことが無駄であった」ということを強調しています。選択肢の中で、「だけ」が最も適切な表現です。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "より",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "のみ",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "には",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "だけ",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "近年の健康意識の高まり(　)健康食品は急成長している。",
          analysis:
            "随着近年来健康意识的提高，健康食品行业飞速发展。\n「～を受けて」表示“受…影响”，说明前项是后项现象的背景原因。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "に次いで",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "にわたって",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "を受けて",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "をめぐって",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "息子はサッカーの練習でよほど疲れていたのか、家に(　)食事もとらず、寝てしまった。",
          analysis:
            "儿子大概是足球练习太累了，一回家饭也不吃就睡了。\n「～なり」接动词原形，表示动作完成后立刻发生另一动作，强调紧接性。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "帰り次第",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "帰るなり",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "帰ったなり",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "帰るとなれば",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt:
            "ウェブサイトごとに異なるパスワードを設定するのは面倒だが、第三者が不正にアクセスされる(　)、やむを得ない。",
          analysis:
            "虽然给每个网站设不同密码很麻烦，但既然存在第三方非法访问的风险，就不得不这么做。\n「～以上」表示“既然…就…”，强调前项条件成立时后项的必然性。",

          choices: [
            {
              id: "",
              label: "1.",
              text: "しかない以上",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "しかない反面",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "恐れがある以上",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "恐れがある反面",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "昨日行った美術館は、一日では(　)作品が展示されていた。",
          analysis: "昨天去的美术馆，展出的作品多到一天看不完。\n「～ほどの」表示程度，强调数量多到无法完成某动作。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "見きれないほどの",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "見ずにはいられないほどの",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "見きれないといった",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "見ずにはいられないといった",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 6,
          prompt: "引っ越しを控えているので、なるべく余計な出費を(　)、友人に誘われたスキー旅行に行くことにした。",
          analysis:
            "因为马上要搬家，虽然想尽量控制额外开支，但还是决定参加朋友邀请的滑雪旅行。\n「～たいところだが」表示“虽然想…但…”，体现计划与现实的矛盾。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "押さえたら抑えたで",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "抑えられるものなら",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "抑えるには抑えずに",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "押さえたいところだが",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 7,
          prompt: "驚いたことに、その小学生は、高校レベルの数学の問題をすらすらと(　)。",
          analysis:
            "正确答案：4.解いてみせた\n令人惊讶的是，那个小学生流畅地解开了高中水平的数学题。\n解析：“解けるとは”的“〜とは…（思わなかった/驚いた）”表示惊讶，“思わなかった”或“驚いた”在该句中被省略。但此处的主语为“那个小学生”而不是“我”，因此选项1不选。\n“解いてみせた”表示“那个小学生成功解出这道题（给别人看）了”，符合语义，选项1正确。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "解けるとは",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "解けるものなら",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "解いたまでだ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "解いてみせた",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 8,
          prompt: "専門家の話では、かつてこの地域一帯は海だった(　）。",
          analysis: "专家称，这一带过去曾是一片海洋。\n「～という」用于转述他人观点，客观引述信息。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "という",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "といえる",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "といった",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "といわれる",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 9,
          prompt:
            "子どもは生まれてくる家庭環境を選べない。だからこそ、親の経済状況によって、子どもの教育機会が奪われること(　)。",
          analysis:
            "孩子无法选择出身家庭。正因如此，绝不允许因父母经济状况剥夺孩子的教育机会。\n「～あってはならない」表示“不允许存在…”，强调社会规范的否定。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "があるわけではない",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "であるわけではない",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "があってはならない",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "であってはならない",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 10,
          prompt:
            "(大学で)\n先生「青木さん、今度の報告誌のモデルを青木さんにお願いできたらと思うんだけど、どうかな」\n青木「やりたいです。でも、私(　)」\n先生「もちろん」",
          analysis:
            "「〜なんか」是典型的自谦表达：“像我这样的人也行吗？”\n “私なんかでいいんですか？”：表达对自己能力的怀疑与谦虚，是非常自然的回应。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "だったらいいんですか",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "なんかでいいんですか",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "だったらいいんでしょう",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "なんかでいいんでしょう",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題6 次の文の__★__に入る最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 6,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "昨日はとても寒く、積り___　___　_★_　___はずっと雪が降っていた。",
          analysis:
            "排序：2 → 3 → 1 → 4\n昨日はとても寒く、積りこそしなかったが午前中ずっと雪が降っていた。\n\nは前面一定是名词，只有“午前中”符合，所以最后一个空是选项4。\n动词简体形后只能放が，表示转折，形成“しなかったが”。\n【动词连用形/たり+こそ+しない】相当于【动词连用形/たり+は+しない】，是动词ない形的强调语气。因此为【積りこそしなかった】。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "が",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "こそ",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "しなかった",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "午前中",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "この映画はあまりにも正直で___　___　_★_　___、コメディー作品だ。",
          analysis:
            "排序：1 → 3 → 2 → 4\nこの映画はあまりにも正直で真面目すぎるがゆえに周りの人々とのトラブルが絶えない男の日常を描いた、コメディー作品だ。\n\n「正直で真面目すぎる」构成原因，后续「がゆえに」（正因为）连接结果。\n「トラブルが絶えない」是具体情节，最后用「男の日常を描いた」修饰「コメディー作品」",
          choices: [
            {
              id: "",
              label: "1.",
              text: "真面目すぎる",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "周りの人々とのトラブルが絶えない",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "がゆえに",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "男の日常を描いた",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "___　___　_★_　___読みやすいように、最近は、ビジネス理論を漫画でわかりやすく解説したものが多い。",
          analysis:
            "排序：3 → 1 → 4 → 2\n一般的にビジネス書というと堅苦しいものと思われるがちだが、ビジネス書に抵抗がある人にも読みやすいように、最近は、ビジネス理論を漫画でわかりやすく解説したものが多い。\n\n「一般的にビジネス書というと」引出普遍印象，后续「堅苦しいと思われるがちだが」表示转折。\n「ビジネス書に抵抗がある人にも」点明目标人群，整体逻辑为：\n“通常认为商业书籍枯燥，但为了让抵触的人也能读，用漫画通俗化”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "堅苦しいものと思われるがちだが",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "抵抗がある人にも",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "一般的にビジネス書というと",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "ビジネス書に",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "渋滞の中を___　___　_★_　___遊園地に入る前から疲れてしまった。",
          analysis:
            "正确选项：1\n参考排序：2 → 4 → 1 → 3\n渋滞の中を3時間運転して、ようやくついたと思ったら、今度は駐車場が混雑していて、遊園地に入る前から疲れてしまった。\n3時間運転して——说明在堵塞的车流中“开了三个小时的车”；\nようやくついたと思ったら——接着“刚以为终于到达的时候”；\n今度は駐車場が混雑していて——紧接着“这次又遇上停车场堵着的情况”，导致“在进游园地之前就已经累坏了”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "今度は",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "3時間運転して",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "駐車場が混雑していて",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "ようやくついたと思ったら",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 5,
          prompt: "商品やサービスが___　___　_★_　___ない。",
          analysis:
            "排序：4 → 2 → 3 → 1\n商品やサービスがどんなに良い物でもその存在が知られないことには売れるも売れないもない。\n\n「どんなに良い物でも」强调品质，后续「存在が知られないことには」表条件，最后「売れるも売れないもない」总结结果。\n句意：再好的商品，若无人知晓，根本谈不上是否畅销。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "売れるも売れないも",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "その存在が",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "知られないことには",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "どんなに良い物でも",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>寂しい片耳</p><p>澤田瞳子</p><p>久しぶりに少し、落ち込んでいる。お気に入りのピアスを片方、落としてしまったからだ。</p><p>これが一人で行動している昼間なら、諦めがつくまで探しに戻るが、生憎、紛失に気付いたのは夜。それも編集者の方々に丸一日取材にご同行いただいた末、お疲れさまと入った店であった。</p><p>ようやく一息ついてらっしゃる編集者さんたちに、（　41　）。動揺を押し殺してさりげなく周りを見回し、やっぱりない、と片耳に触れるのが精いっぱい。朝からほうぼう歩き回った後のため、探しに行くのはどう考えても不可能で、そのまますごすごと家に引き上げた。</p><p>親しいお店で作っていただいたピアスなので、片方だけ発注するのは難しくない。</p><p>（　42　）自分でも珍しいほど落ち込んだのは、それが三、四年ぶりの落とし物だったからだ。</p><p>ピアスホールを開けて間がない二十代の頃は、着用に慣れていなかったため、二、三か月に一度は必ずピアスを落とした。三十代からは徐々にそれが間違になり、この数年ほとんと失敗をしていない。</p><p>最初から自分の迂闊さを（　43　）、何を落とそうともがっかりはしない。もはやそんなことはあるまいと高を括っていただけに、傲慢な自分がなおさら情けなくなる。顧みれば逆上がりも九九も苦手だった子供の頃は、「できないこと」をたくさん抱えているのが当然で、どんなミスをしても平気だった。大人になればなるほど、失敗が怖く、人の眼が気になってきたのは、知らず知らずのうちに自分が「できる」人間と考えるに至ったからかもしれない。</p><p>だがそもそも、年を重ねたから失敗をしないというのは、幻想だ。ピアス（　44　）、最近たまたま落とさない日々が続いていただけで、明日からは毎日紛失を重ねるかもしれない。いや、自分のうっかり工合を考えれば、むしろその方が自然だと自分に言い聞かせながら、私はまだピアスの消えた片耳を撫で続けている。</p>",
      contentTranslationZhHans:
        '<p>寂寞的单耳环</p><p>泽田瞳子</p><p>最近少有地有些消沉。只因弄丢了一只心爱的耳环。</p><p>若是白天独自外出时发生此事，我肯定会坚持找到最后。不巧发现遗失时正值深夜，更是在与编辑部诸位结束整日取材工作后休息的店里。</p><p>实在不忍让疲惫的编辑们再费心。我强压着慌乱，佯装无事地环视四周，但果然还是没有。最终也只能轻抚耳垂，这已是我所能做的全部。考虑到白天里辗转多处的行程，折返寻找已无可能，只得黯然归家。</p><p>这是在熟人店铺里定制的耳环，所以单独补做一只并不难。</p><p>即便如此，我还是出乎自己意料地感到沮丧，因为这是我三四年来第一次弄丢东西。</p><p>二十多岁初穿耳洞时，我还不习惯佩戴饰品，每两三个月必会丢失耳环。步入三十岁后，那种情况逐渐变少，近些年几乎再未出错。</p><p>若早知自己本性粗疏，本不会为任何遗失所困。正因自以为不会再犯，此刻的傲慢之态更显难堪。回想儿时无论单杠翻身上杠还是九九乘法表都难以掌握，总觉得"做不到"才是人生常态，犯再多错也坦然。年岁愈增愈畏惧失误，愈发在意他人眼光，或许正因为在不知不觉中，将自己当作了一个“能干的人”吧。</p><p>但归根结底，认为年岁增长就不会犯错不过是虚妄。即使是耳环，这些日子的安然无恙或许只是侥幸，从明天起可能又会每天都丢。不，以我这粗心大意的性格，这才是应有的常态吧。如此自我劝解着，手指却仍不住摩挲着那只空荡的耳垂。</p>',
      type: SectionType.VOCAB_GRAMMAR,
      title: "問題7 次の文章を読んで、41から44の中に入る最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 7,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "",
          analysis:
            "这里空处前面说：「编辑们总算能够松口气了」，后文描述自己只能压抑住动摇、偷偷四处张望……也就是说，既然编辑们辛苦了一天，“绝对不会让他们为我担心（去帮我找耳环）”。\n「気を使わせる」＝“让（别人）费心、担心”；\n加上否定强化「～はしない」＝“绝不会（让人担心）”；\n中间的「られ」是可能态，将「使わせる」强化为更强烈的否定。\n因此用「気を使わせられはしない」最恰当，表达“我可不会让他们替我操心”的意思。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "気を使えはしない",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "気を使ってなどいない",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "気を使わせられはしない",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "気をつかわせてなどいない",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "",
          analysis:
            "前一句说“因为是常去的店里定做的，只订一只也不难”，本应无伤大雅；但下文却说“自己都觉得前所未有地沮丧”，后面给出原因“因为这是时隔三四年才第一次丢东西”。句意是“尽管单买并不困难，然而我还是异常沮丧”，所以用转折接续「それにもかかわらず」（“虽说如此/尽管如此”）。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "それによって",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "そればかりでなく",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "それどころか",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "それにもかかわらず",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "",
          analysis:
            "句型是“如果……”＋“就不会……”：\n「最初から自分の迂闊さを承知していれば、何を落とそうともがっかりはしない。」\n意即“如果从一开始就意识到自己的粗心，无论丢什么也不会失望”。这里要用假定形「～していれば」表示“如果……的话”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "承知していれば",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "承知していて",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "承知していたのか",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "承知していたかのように",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 4,
          prompt: "",
          analysis:
            "「だって」可以表示“就算是……”的意思。\n「ピアスだって、最近たまたま落とさない日々が続いていただけで……」\n相当于“就算是耳环，只是最近恰好一直没丢而已，明天开始说不定又天天丢”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "なら",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "だって",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "でさえ",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "といって",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（1）</p><p>どんな社会にも、「情報通」と呼ばれる人がいます。</p><p>「物知り」（注）とは違います。多くの場合は、「情報に通じた人」つまり、とこにいけば情報があるのかを知っている人を指します。</p><p>どんなに知識の豊かな人でも、知っている分野や程度にはかぎりがあります。けれども、ある分野については、人並み以上によく知っている人は少なくありません。</p><p>「この問題については、〇〇さんが詳しい」</p><p>「この問題なら、〇〇さんに聞けばわかる」</p><p>そうした引き出しを、人並み以上にもっている人が「情報通」なのです。</p><p>（注）物知り：物事を広くよく知っている人。</p>",
      contentTranslationZhHans:
        '<p>（1）</p><p>任何社会中都存在被称为"消息通"的人。</p><p>他们与"博学者"不同。多数情况下，这类人指的是"通晓信息渠道的人"，即知道去哪里能获取信息的人。</p><p>即使知识再渊博的人，其了解的范围和深度也有限。但在某些特定领域，比常人更为了解的人并不少见。</p><p>“关于这个问题，〇〇最清楚”</p><p>“这个问题的话，问〇〇就能明白”</p><p>这种拥有超出常人范围的"信息抽屉"的人，就是所谓的"消息通"。</p><p>（注）物知り：广泛通晓各类事物的人。</p>',
      type: SectionType.READING,
      title:
        "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 8,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "筆者によると、「情報通」とはどのような人か。",
          analysis:
            '题目要求根据作者观点判断"消息灵通人士"的定义。\n正确选项：3. 清楚谁拥有所需信息的人\n1.错误。"广泛领域"是"博学者"的特征，文中明确区分两者，且强调"情報通"是知道信息所在而非自身拥有信息。\n2.错误。文章未提及对自身信息需求的判断，重点在于掌握信息源的人际网络。\n3.正确。对应原文"知道去哪里能获取信息的人"，即能把握信息持有者的分布。\n4.错误。文中仅停留在知晓信息源阶段，未提及主动解决问题的层面。\n关键句定位：“とこにいけば情報があるのかを知っている人”（知道哪里能获取信息的人），以及通过举例“〇〇さんに聞けば”（问〇〇先生）的表述，都指向选项3的“把握信息持有人”这一核心特征。',
          choices: [
            {
              id: "",
              label: "1.",
              text: "幅広い分野で人並み以上の情報をもっている人。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "何が自分にとって必要な情報かをよく理解している人。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "誰が必要な情報をもっているかをよく把握している人。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "情報をもっている人を見つけて、問題解決ができる人。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（2）</p><p>人間の感覚がいかにあてにならないものかを示す有名な実験があります。</p><p>まず、三つの容器に冷たい水とぬるま湯、それに熱いお湯を用意します。はじめに右手を冷たい水に、左手を熱いお湯に、同時につけます。しばらくつけたら、今度は両手を同時にぬるま湯につけてみます。すると、冷たい水に慣れた右手は温かと感じ、熱いお湯に慣れた左手は同じぬるま湯を冷たいと感じるでしょう。人間の感覚は同じ身体の一部でさえも、ちがう意味を受け取ってしまうのです。</p>",
      contentTranslationZhHans:
        "<p>（2）</p><p>有一个著名实验揭示了人类的感觉有多么不可靠。</p><p>首先准备三个容器，分别装入冷水、温水和热水。先将右手浸入冷水，左手同时浸入热水。保持一段时间后，将双手同时浸入温水。这时会发现：适应了冷水的右手会感觉温水温暖，而适应了热水的左手却会觉得同样的温水冰凉。人类的感觉器官即使在同一躯体上，也会产生不同的感知。</p>",
      type: SectionType.READING,
      title:
        "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 9,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "手の感覚について、実験からどのようなことが分かったか。",
          analysis:
            '题目要求根据实验现象推断关于手部感觉的结论。\n正确选项：4. 因先前接触的水温不同，对温水温度的感受会产生变化\n\n选项解析：\n1.错误。文中未出现"温度无法感知"的描述，相反始终强调"能感知但感受不同"。\n2.错误。实验结果显示：冷水适应的手（右手）会感觉温水温暖，而热水适应的手（左手）会感觉温水冷，选项描述与实验结果相反。\n3.错误。温水实际温度固定，不存在"比之前温度低"的客观事实，属于混淆主观感受与客观温度的陷阱选项。\n4.正确。对应原文"惯れた右手は温かと感じ...左手は冷たいと感じる"，明确说明前段体验影响后续感知。\n关键句定位：\n「冷たい水に慣れた右手は温かと感じ、熱いお湯に慣れた左手は同じぬるま湯を冷たいと感じる」——通过对比实验证明，同一温度因前段接触温度不同而产生相反感受，这正是选项4所述现象。',
          choices: [
            {
              id: "",
              label: "1.",
              text: "熱いお湯や冷たい水につけ続けていると、温度が感じられなくなる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "冷たい水のあとより熱いお湯のあとにつけたほうが、ぬるま湯を温かく感じる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "先につけていた水やお湯の温度より、ぬるま湯の温度のほうが低く感じる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "先につけていた水やお湯の温度によって、ぬるま湯の温度の感じ方が変わる。",
              isCorrect: true,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（3）</p><p>自動車が自動的に運転されることになれば、それは完全に単なる移動手段となり、運転することの娯楽性は存在しなくなる。人間が自分で自動車を運転する楽しさというものは、安全や利便性（注1）とのトレードオフとして（注2）、なくなってしかるべきものなのだろうか。人間を害するリスクのある非合理な娯楽性は、自動運転車とともになくなってしまえばいいと割り切ってしまう前に、安全性と娯楽性が両立する解はあると信じたい。</p><p>（注1）利便性：便利さ</p><p>（注2）~とのトレードオフとして：ここでは、~を得るかわりに</p>",
      contentTranslationZhHans:
        '<p>（3）</p><p>如果汽车实现完全自动驾驶，它将彻底沦为单纯的移动工具，驾驶的乐趣也将不复存在。人类亲手驾驶汽车的愉悦感，难道就应该作为换取安全性与便利性的代价被舍弃吗？全盘否定那些对人类有害的非理性娱乐性，觉得它们就该随着自动驾驶汽车一同消失之前，我更愿意相信存在安全性与娱乐性兼得的解决方案。</p><p>（注1）利便性：方便程度</p><p>（注2）~とのトレードオフとして：此处指"以牺牲~为代价换取"</p>',
      type: SectionType.READING,
      title:
        "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 10,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "自動運転車の登場について、筆者はどのように考えているか。",
          analysis:
            '题目要求判断作者对自动驾驶汽车发展的态度。\n正确选项：1. 虽然安全和便利性很重要，但不愿失去自主驾驶的乐趣\n\n选项解析：\n1.正确。对应原文"人間が...楽しさは...なくなってしかるべきものなのだろうか"的反问句式，以及"両立する解はあると信じたい"的表述，体现作者对保留驾驶乐趣的坚持与对两者共存的期待。\n2.错误。"実現は難しい"（实现困难）属于过度推测。作者仅表达"相信存在解决方案"，未否定其可行性。\n3.错误。"許容せざるをえない"（不得不接受）与作者立场相反。文中通过反问与"信じたい"明确反对单纯舍弃娱乐性。\n4.错误。"犠牲にしてまで...進めてはいけない"（不应以牺牲为代价推进）属于极端化表述。作者并未否定自动驾驶本身，而是强调需兼顾娱乐性。\n关键句定位：\n核心态度句："なくなってしかるべきものなのだろうか"（反问句式否定单纯舍弃娱乐性）\n立场总结句："両立する解はあると信じたい"（明确表达对两者共存的信念）\n——均指向作者在承认安全重要性的同时，强烈希望保留驾驶乐趣的立场（选项1）。',
          choices: [
            {
              id: "",
              label: "1.",
              text: "安全や便利さも重要ではあるが、自分で運転する楽しさは失いたくない。",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "安全性と娯楽性の共存が望ましいが、実現は難しい。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "娯楽性がなくなるが、安全や便利さのためには許容せざるをえない。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "娯楽性を犠牲にしてまで、運転の自動化を進めてはいけない。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（4）</p><p>翻訳という作業は音楽の演奏に似ている。作家は作曲家に、翻訳家は演奏家に、それぞれたとえることができるのではないか。前から、ひそかにそう考えていた。</p><p>新しい世界観を提示するために構成を練り、一つ一つの言葉や音を吟味して組み立てていく作家＝作曲家。かたや（注）、作者に寄りそうようにして意味を汲み、原作や楽譜を丹念にたどってその世界を再現してみせる翻訳家＝演奏家。同じ楽譜をもとにしていても、演奏家によって、生み出される曲の印象がまるで違うことがあるように、小説や詩も、翻訳家の個性や解釈によって、何種類もの異なる翻訳が存在することがありうる。</p><p>（注）かたや：一方</p>",
      contentTranslationZhHans:
        "<p>（4）</p><p>翻译工作与音乐演奏颇为相似。或许可以将作家比作作曲家，将翻译家比作演奏家——这是我长久以来暗自持有的观点。</p><p>作家如同作曲家，通过精心构思来呈现新世界观，逐字逐句推敲锤炼；而翻译家则如演奏家，贴近作者解读深意，细致追随原作或乐谱重现其世界。正如同一份乐谱由不同演奏家诠释会呈现截然不同的曲调印象，小说或诗歌的翻译也可能因翻译家的个性与理解，催生出多种迥异的译本。</p><p>（注）かたや：另一方面</p>",
      type: SectionType.READING,
      title:
        "問題8 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 11,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "筆者は、翻訳のどのような点が音楽の演奏と似ていると述べているか。",
          analysis:
            '题目要求判断作者提出的"翻译与音乐演奏相似点"的核心依据。\n正确选项：2. 即使翻译同一原作，完成的译本也可能呈现多样性\n\n选项解析：\n1.错误。原文强调"再現してみせる"（努力再现），而非"无法再现"。选项曲解为消极结果，与作者对翻译再现性的肯定相悖。\n2.正确。对应原文"同じ楽譜...印象が違う"与"何種類もの異なる翻訳が存在"，明确说明同一原作因诠释者不同产生多样性，与演奏类比的核心相似点完全契合。\n3.错误。"異なる作家の作品でも似た印象"（不同作家的作品可能相似）属无中生有。文中仅讨论同一原作的不同翻译，未涉及跨作品比较。\n4.错误。"さまざまな世界観が生み出される"（创造多种世界观）偷换概念。作者强调翻译家"再現"原作世界观，而非"创造新世界观"，选项与原文逻辑矛盾。\n\n关键句定位：\n类比核心："同じ楽譜をもとにしていても...印象がまるで違う"（同一乐谱不同演奏效果）\n翻译对应："翻訳家の個性や解釈によって...異なる翻訳が存在"（翻译家个性导致译本差异）\n——直接指向选项2的"同一原作译本多样性"这一本质相似点。',
          choices: [
            {
              id: "",
              label: "1.",
              text: "原作を丹念にたどっても、作家の世界観が再現されない可能性がある点。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "同じ原作を翻訳しても、出来上がった翻訳が多様になりうる点。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "翻訳家の個性により、異なる作家の作品でも似た印象になりうる点。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "翻訳家次第で、さまざまな世界観が生み出される可能性がある点。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（1）</p><p>育児といえば、たいていは母親によってなされると思われています。（中略）</p><p>ところがライオンはちょっと違います。同じ群れのライオンは、そろって出産する傾向があり、育児も群れの雌全員が協力して行うのです。赤ちゃんは生まれて一ヵ月あまりは物陰に隠され、母親だけで育てられます。しかし、歩けるようになると、群れに連れてこられて共同生活が始まります。</p><p>ライオンの群れには複数の大人の雌がいますから、それらの子どもたちが集まって、大所帯となります。集められた子どもたちは、自分の母親以外のライオンの乳も飲むことができ、群れの全員の保護を受けることができます。捕食獣（注1）であるライオンは、子育て中も獲物狩りに出かけなければなりません。母親一頭で子育てをしている場合には、外出中にハイエナ（注2）などに子どもが捕食される危険があります。しかし、共同育児をして誰かが子どものそばに残っていれば安心です。</p><p>若い雌ライオンは敏捷（びんしょう）（注3）ですが、子育ての経験に乏しく、失敗することもよくあります。それに比べ、壮年期になったライオンは経験豊富で態度もどっしりとして子育ても上手です。年長の雌がまとめて面倒を見た方が育児はうまくいくかもしれません。反面、若いライオンの敏捷性は狩りでは有利に働くでしょう。ライオンは狩りも共同で行い、獲物はみんなで食べますから年老いて狩りに参加できなくても、食事をとることができるのです。</p><p>ライオンたちは、明確な分業とまではいえなくても、うまく育児と狩りを全員が協力することで、問題を解決しています。</p><p>（注1）捕食獣：ほかの動物を捕らえて食べる獣</p><p>（注2）ハイエナ：動物の一種</p><p>（注3）敏捷だ：動きが素早い</p>",
      contentTranslationZhHans:
        "<p>（1）</p><p>提到育儿，人们通常认为主要由母亲承担。（中略）</p><p>然而狮子的情况有所不同。同一狮群的母狮倾向于一同生产，育儿工作也由全体雌狮协同进行。幼狮出生后约一个月内会被藏在隐蔽处，仅由母亲单独抚养。但当幼狮具备行走能力后，就会被带入狮群开始共同生活。</p><p>由于狮群中存在多只成年雌狮，她们的幼崽聚集形成大家庭。聚集的幼崽不仅能吸食其他雌狮的乳汁，还能得到全体成员的庇护。作为捕食者的母狮，育儿期间仍需外出捕猎。若由单只母狮育儿，外出时幼崽可能遭鬣狗等天敌捕食。但共同育儿，可以确保总有成员留守幼崽身边，安全性得以提升。</p><p>年轻雌狮虽动作敏捷，但育儿经验不足，常出现失误。相比之下，壮年期的雌狮经验丰富且沉稳，育儿技巧更为娴熟。由年长雌狮统一照料或许能使育儿更顺利。另一方面，年轻雌狮的敏捷性在狩猎中更具优势。狮子采取群体狩猎并共享猎物，因此即便年老无法参与捕猎，仍能获得食物。</p><p>狮子们虽未形成明确分工，但通过全体协作，巧妙解决了育儿与捕猎的平衡问题。</p><p>（注1）捕食獣：捕食其他动物的兽类</p><p>（注2）ハイエナ（鬣狗）：一种动物</p><p>（注3）敏捷だ：动作迅速</p>",
      type: SectionType.READING,
      title:
        "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 12,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "ライオンの子育てについて、筆者はどのように述べているか。",
          analysis:
            '问题：关于狮子的育儿方式，作者如何描述？\n正确选项：4. 幼崽能行走后，由群内雌狮协作抚养\n\n选项解析：\n1.错误。文中明确"生後一ヵ月あまりは...母親だけで育てられる"，排除"生後すぐに群れで交替抚养"的表述。\n2.错误。"年長の雌が育てる"属过度限定。原文强调"群れの雌全員が協力"，未限定特定年龄层。\n3.错误。时间轴错位："歩けるようになるまで"对应的是"母親だけで育てられる"阶段，而选项3将"群れの中で"错误嫁接于此时期。\n4.正确。完全对应"歩けるようになると...共同生活が始まる"及"群れの雌全員が協力"的描述。\n关键句定位：\n时间分界点："歩けるようになると、群れに連れてこられて共同生活が始まる"\n协作方式："群れの全員の保護を受ける"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "生後すぐに、群れの中で雌が交代で育てる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "生後一ヵ月あまり過ぎると、経験豊富な年長の雌が育てる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "歩けるようになるまで、群れの中で母親が育てる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "歩けるようになると、群れの雌が協力して育てる。",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "共同生活の利点について、筆者はどのように述べているか。",
          analysis:
            '问题：关于共同生活的优点，作者如何阐述？\n正确选项：2. 根据年龄分担角色，实现育儿与捕猎的兼顾\n\n选项解析：\n1.错误。部分正确但片面。壮年狮的经验主要用于"育児"，而"狩り"主要依赖年轻狮的敏捷性，选项未体现分工结构。\n2.正确。对应"若い雌は狩りで有利""壮年期は育児が上手"的年龄特性分化，及"共同で行い...食事をとれる"的协作收益，完整概括分工协作带来的两立性。\n3.错误。与原文"明確な分業とまではいえなくても"直接矛盾。\n4.错误。"どんな役割もできるようになる"属无根据推测，文中仅说明年轻狮承担狩猎，未提及其掌握育儿技能。\n\n关键句定位：\n年龄特性利用："若い雌は敏捷だが...壮年期は経験豊富"\n协作本质："全員が協力することで、問題を解決"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "壮年期のライオンの経験を育児と狩りに生かすことができる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "年齢に応じて役割を分担することで、育児と狩りが両立できる。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "群れの中での役割分担が明確になり、個々のライオンの負担が減る。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "若いライオンが育児も狩りも経験することで、どんな役割もできるようになる。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（2）</p><p>仕事柄（注1）、私は取材を受けることが多いが、あるとき取材をしている人から、人と話すのが苦手だと打ち明けられたことがある。取材中は自然な感じで会話が進んでいたこともあって少し驚いたが、そう言われてみるとたしかに少し緊張しているように見えなくもない。ただ、取材を受けている私の立場からすると、必ずしも悪い印象は受けなかった。</p><p>むしろ緊張感が相手に対する配慮のように感じられて、良い感じで話をすることができた。</p><p>私たちは、あることが苦手だと思うと、うまくできていないように思える面に目を向けてしまう。スムーズに言葉が出てこなかったことや、話が行きつ戻りつしてしまったことなどが気になって、自分を責める気持ちになる。</p><p>しかし、スムーズに言葉が出なかったことで、会話にため（注2）が出てきていることもある。相手は、その時間的すきまの時に、考えをまとめたり、振り返りをしたりできたりする。トントン拍子に（注3）会話が進まないことで、話している内容を多面的に考えることができたりもする。</p><p>   思うように会話できないときは、失敗ではなく、話を深めるように無意識に心が手助けしているようにも思える。（中略）失敗のように思えることには、それなりに意味があるのだろう。</p><p>欠点のように思えることも、見方を変えるとじつは長所だということが少なくない。自分に対して多面的な見方ができると、気持ちが楽になるし、本来の力を発揮できるようになる。</p><p>（注1）仕事柄：仕事の性質上</p><p>（注2）ため：ここでは、余裕の時間</p><p>（注3）トントン拍子に：順調に</p>",
      contentTranslationZhHans:
        "<p>（2）</p><p>由于工作性质，我常接受采访。有次采访时，对方坦言自己不擅长与人交谈。当时采访过程自然流畅，这让我稍感意外，但仔细想来对方确实略显紧张。不过从被采访者的角度来看，这并未给我留下负面印象。</p><p>相反，这种紧张感反而让我感受到对方的体贴，使对话氛围更为融洽。</p><p>我们一旦自认不擅长某事，就容易把注意力集中在那些做得不够好的方面。比如言辞不够流畅或表达反复绕圈等细节都会让我们在意，从而陷入自我责备。</p><p>然而，言辞不流畅产生的间隙，有时会可以给这场对话制造一些缓冲的空隙。对方可借此间隙整理思路或回顾内容。对话不能按部就班推进，反而能促使多角度思考话题。</p><p>当对话不如预期顺利时，或许这并非失败，，而是可以认为是内心在无意识中试图帮助我们加深交流。（中略）看似失败的现象，自有其存在的意义。</p><p>许多被视为缺点的事物，换个视角看或许正是优点。对自我持多维认知，不仅能缓解压力，更能激发自身潜力。</p><p>（注1）仕事柄：职业特性使然</p><p>（注2）ため：此处指缓冲时间</p><p>（注3）トントン拍子に：顺利推进</p>",
      type: SectionType.READING,
      title:
        "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 13,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "取材をしている人からうまく言葉が出てこないことについて、筆者はどのように考えているか。",
          analysis:
            '问题：关于采访者言辞不流畅的现象，作者如何看待？\n正确选项：2. 受访者可借机整理思路并深化内容\n\n选项解析：\n1.错误。文中强调受访者"利用间隙思考"，而非"被迫在间隙中发言"。选项1将主被动关系颠倒。\n2.正确。对应原文"相手は...考えをまとめたり、振り返りをしたりできたりする"及"話を深める"的描述，直接说明间隙对受访者的积极作用。\n3.错误。"分かりやすく伝えるための準備"属过度引申。未涉及信息整理传达的具体准备行为。\n4.错误。"自ら会話を進めようとする"与作者观点矛盾。文中明确"緊張感が配慮のように感じられ"，受访者无需主动推进对话。\n\n关键句定位：\n核心逻辑："トントン拍子に進まないことで、多面的に考えることができたりする"（不顺遂的对话促进多维度思考）\n直接结论："話を深めるように...手助けしている"（潜意识协助深化对话）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "取材を受けている人は、間を取りながら話さなければならないという気持ちにさせられる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "取材を受けている人は、考えをまとめたり振り返ったりしながら内容が深められる。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "取材を受けている人は、内容をまとめて分かりやすく伝えるための準備ができる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "取材を受けている人は、自分のせいだと考えて自ら会話を進めようとする。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "筆者の考えに合うのはどれか。",
          analysis:
            '问题：与作者观点相符的选项是？\n正确选项：4. 即使认为是失败或缺点，也可能因看待方式不同转化为优点\n\n选项解析：\n1.错误。文中仅讨论"自我认知"，未延伸至"对他人缺点的宽容"，属过度关联。\n2.错误。作者主张"视角转换"而非"改善缺点"，选项与"欠点...長所だ"的核心观点不符。\n3.错误。"探すのがいい"偏离文意。作者强调"多面的に見る"（多维度看待），而非单纯发掘优点。\n4.正确。完全对应"欠点のように思えることも...長所だということが少なくない"的论述，点明主观认知对事物价值的重塑作用。\n\n关键句定位：\n核心观点句："失敗のように思えることには、それなりに意味がある"（失败自有其意义）\n结论升华："見方を変えると...長所だ"（视角转换揭示优点）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "自分に対して多面的な見方ができれば、ほかの人の失敗や欠点にも寛容になる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "欠点だと思えることを改善できれば、自分の能力が発揮できるようになる。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "本来の力を発揮するためには、自分の欠点ではなく長所を探すのがいい。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "失敗や欠点だと思っていても、捉え方次第で長所になり得る。",
              isCorrect: true,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（3）</p><p>　以下は、商品パッケージのデザイナーが書いた文章である。</p><p>　大量生産品のように全国に流通し、多くの方々にご利用いただく商品の場合には、必ずマーケティング調査（注1）が行われます。とくにパッケージのリニューアル時には、従来よりも売り上げを落ちてしまっては大変なので、より慎重に行われます。</p><p>　ただそういう場合、必ず「今までの方が良かった」という意見が過半を占めます。ですがメーカーにとっては、定番となっている商品をどうしてもリニューアル（注2）しなければならないタイミングが必ずやってきます。それは、競合他社が売り上げを伸ばしたり、技術開発に伴い商品そのものが改善されたり、いろいろな理由でそれは必ずやってくる。ところがマーケティング調査してみると「変えない方がいい」という結果が出てしまう。今までのファンはその商品に愛着をもっているわけですから、リニューアルに大賛成してくれるわけがないのです。ですが、どうしても新しくしなければならない。</p><p>　私はこういった時、これまでの財産をうまく生かして、今までのファンがある程度を許容してくれれば、それは大成功だと考えています。最初は少し許せない部分があったとしても、これが一年、二年経つと、新しいデザインも見慣れてくる。したがってマーケティング調査の数字は、そういう時間軸も考えたうえで見る必要があります。</p><p>(注1)マーケティング調査：市場調査</p><p>(注2)リニューアル：ここでは、更新</p>",
      contentTranslationZhHans:
        "<p>（3）</p><p>以下是由商品包装设计师所写的文章。</p><p>像大规模生产品那样在全国流通、为众多顾客所使用的商品，肯定会进行市场调查。尤其是在包装更新时，如果销量比以前下降就麻烦大了，因此会更加谨慎地进行。</p><p>但是在这种情况下，一定会出现超过半数的意见说“还是以前的好”。然而对厂商来说，总会有不得不对常销商品进行改版升级的时候。因为竞品销量上升，或随技术升级商品本身得到改良等各种原因，这样的时机必然会来。但是市场调查结果往往会显示“不改为好”。毕竟一直以来的粉丝们对该商品有深厚的感情，不可能大力支持更新。但又确实不得不推陈出新。</p><p>我在这种时候，认为只要能巧妙地利用原有的资产，让原有的粉丝在某种程度上予以接受，那就是大成功。即使最初有一些令人难以接受的部分，过上一两年后，他们也会逐渐习惯新的设计。因此，观察市场调查的数据时，有必要考虑到这种时间维度。</p><p>（注1）マーケティング調査：市场调查</p><p>（注2）リニューアル：此处指更新</p>",
      type: SectionType.READING,
      title:
        "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 14,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "こういった時とは、どのような時か。",
          analysis:
            "题干问：“こういった時”是指怎样的时机？\n正确答案：2. パッケージの変更を望まないファンが多いのに、変更せざるをえない時\n文中正是在说“尽管大多数粉丝都说‘还是以前的好’，却又不得不进行更新”的时刻。\n\n各选项正误\n1.错误。文中并未说粉丝因更改包装而失去对该商品的喜爱，只是“反对更改”。\n2.正确。如上所述。\n3.错误。原文原因是“竞争对手销量上升”“技术改良”等，而非“为了吸引新粉丝”才一定要改。\n4.错误。调查结果中粉丝的意见很明显都是“反对”，并非“不知道粉丝态度”。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "パッケージの変更に伴って、フアンが商品への愛着を失った時",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "パッケージの変更を望まないフアンが多いのに、変更せざるをえない時",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "新しいフアンを獲得するには、パッケージの変更が不可欠だと分かった時",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "フアンの賛否が分からない状況で、パッケージを変更しなければならない時",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "マーケティング調査の結果について、筆者はどのように考えているか。",
          analysis:
            "题干问：作者如何看待市场调查的结果？\n正确答案：3. 消費者の反応が変わっていくことを考慮して分析するべきだ。\n文末明确指出，“即使最初有些抵触，过一两年就会习惯新设计，所以看市场调查的数据时，要考虑到这样的时间轴”。\n\n各选项正误\n1.错误。作者虽提到“要善用既有资产，让粉丝多少能接受”，但这句并不是针对“调查结果的分析方法”作出的总体评价。\n2.错误。作者并未主张“积极采纳肯定意见”，而是强调要从更长的时间维度来解读数据。\n3.正确。如上所述，必须考虑消费者随着时间变化的反应。\n4.错误。文章提到的是“未来一两年内的变化”，并非“结合过去的结果”来判断偏好变化。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "一部の消費者の意見として、うまく生かすべきだ。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "肯定的な意見を積極的に取り入れて商品開発に生かすべきだ。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "消費者の反応が変わっていくことを考慮して分析するべきだ。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "過去の結果と合わせて、消費者の好みの変化を読み取るべきだ。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>（4）</p><p>群馬県の上野村で暮らすようになって覚えたもののひとつに「待つ」という感覚がある。</p><p>たとえばこの村の農業は春を待たなければはじまらない。山菜も、茸も、それが出てくる時期を待たなければけっして手には入らない。木材として利用するのなら、木を切るのは、森の木々が活動を低下させる秋から冬がくるのを待つ必要がある。実に多くのことが、村では<u>「待つ」ことからはじまっていく</u>。</p><p>それが、自然とともに働き、暮らすということなのであろう。自然の力を借りようとすれば、自然がつくる、それに適したときがくるのを待たなければならない。といってもそれは、のんびりした暮らし方とばかりもいえないのである。なぜなら、ときを待つ以上、逆にそのときを逃してしまったらうまくいかなくなる。田植えのとき、草取りのとき、稲刈りのとき…。村の暮らしには、逃がしてはいけないときがたえずやってくる。</p><p>ときを待つ暮らしにとっては、人間の意志は万能ではない。それよりも自然という他者の動きの方が重要で、人間の意志は、自然の動きをうまく活用する範囲内でしか有効ではない。だから、自然と結ばれ、ときを待ちながら働き暮らしてきた村の人たちは、人間関係のなかでも同じような感覚を育んだ。人間関係においても自分の一方的な意志は万能ではない。人々の動きを理解しながら、ちょうどよいタイミングがくるのを待って、そのときを逃さずに働きかけていく。それが村の人たちの人間関係のつくり方だった。自然との関係のなかで学んだことが人間同士の関係のなかでもいかされていたのである。</p>",
      contentTranslationZhHans:
        '<p>（4）</p><p>在群马县上野村生活后，我学会的一种新的感受就是“等待”。</p><p>例如，这个村庄的农业活动必须等待春天到来才能开始。山菜与菌菇，若不等生长季节到来便无法采摘。若要将砍伐树木作为木材使用，则需等待秋至冬季——山林树木活动趋缓的时期。村庄里，几乎所有事务都始于"等待"。</p><p>这或许就是与自然共生劳作的真谛。若想借助自然之力，就必须等待自然创造出最适宜的时机。但即便如此，这并非全然悠闲的生活方式。那是因为，既然要等待时机，一旦错过了，事情就很难顺利进行。插秧之时、除草之际、收割之期…村中生活永远充斥着不可错过的关键时刻。</p><p>对于这种以"等待"为基础的生活，人类意志并非万能。相比而言，“自然”这一他者的律动更为重要，人类意志唯有在巧妙顺应自然规律的范围内才有效用。因此，与自然共生、在等待中劳作的村民，培养出了同样的“等待”意识。在人际交往中，自己单方面的意志同样无法主宰一切。村民通过理解他人的动向，等待最佳时机降临，并在抓准这个时机精准行动。这正是他们构建人际关系的方式——将自然中学得的智慧运用于人际关系。</p>',
      type: SectionType.READING,
      title:
        "問題9 次の（１）から（４）の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 15,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "「待つ」ことからはじまっていくとあるが、何を待つのか。",
          analysis:
            '问题：文中提到"始于等待"，等待的对象是什么？\n正确选项：3. 等待自然进入适合接受恩惠的状态\n\n选项解析：\n1.错误。"自然恢复丰饶"属过度引申。文中强调利用自然资源的"时机"，而非生态恢复过程。\n2.错误。与文意完全相悖。村民是"顺应自然周期"，而非"让自然配合人类需求"。\n3.正确。对应"自然がつくる、それに適したとき"（自然创造的适宜时机），即自然进入可被合理利用的状态。\n4.错误。"感知自然变化"非核心。等待的本质是"利用时机的成熟"，而非单纯察觉变化。\n关键句定位：\n定义性描述："自然の力を借りようとすれば...適したときがくるのを待たなければならない"（必须等待自然创造适宜时机）\n具体例证："田植えのとき、草取りのとき、稲刈りのとき"（插秧、除草、收割的不可错过时机）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "自然が豊かさを回復して利用できるようになるとき。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "自然を人間の都合に合わせるのに適したとき。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "自然の恵みを受けるのに適した状態になるとき。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "自然の変化が感じられるようになるとき。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "筆者によると、村の人たちの人間関係はどのようにつくられたか。",
          analysis:
            '问题：根据作者观点，村民的人际关系如何构建？\n正确选项：1. 如同与自然的关系，观察对方行动并把握时机介入\n\n选项解析：\n1.正确。完全对应"人々の動きを理解しながら...タイミングがくるのを待って働きかけていく"（理解他人动向，等待时机行动）的描述，体现自然与人际的共通逻辑。\n2.错误。"相手の変化を待つ"（等待对方变化）曲解文意。核心是"主动把握时机"，而非被动等待变化。\n3.错误。"タイミングよく働きかける"（适时介入）表述片面，缺少"观察对方动向"的前提，与"理解しながら"的逻辑不匹配。\n4.错误。"焦らずに待つ"（不急躁等待）偏离重点。文中强调"逃さずに働きかける"（不错失时机行动），而非单纯被动等待。\n\n关键句定位：\n类比逻辑："自然との関係...人間同士の関係...いかされていた"（自然关系智慧运用于人际）\n具体方法："ちょうどよいタイミングがくるのを待って、そのときを逃さずに働きかけていく"（等待最佳时机并精准行动）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "自然との関係と同様に、相手の行動を見ながら時機を捉えて働きかける。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "自然の変化を捉えるように、相手の変化を待って働きかける。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "自然の影響を受けやすい人々の動きを理解し、タイミングよく働きかける。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "自然の変化を待つのと同様に、相手からの働きかけを焦ずに待つ。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>教育を仕事にしていると、面白いことがたくさんある。その中の一つに「未熟さの効用」とても言うべき現象がある。知識や教育技術がたとえ未熟であったとしても、不思議と初めて受け持った授業が生徒との間に一番濃い縁を結ぶことがよくある。</p><p>　通常の仕事は、経験を積み、技術が上がるほど、質が良くなる。教育の世界でも、もちろん経験知は有効に働く。ベテランの安定感は、たしかに大切だ。しかし、教育の場合は、若く未熟てあることがむしろプラスに働くケースがよくあるのも事実だ。初年度に受け持った学生たちのことが鮮明に記憶に残り、その後のつき合いも深い、という経験が私にもある。</p><p>　これはどういうことだろうか。まず考えられるのは、初年度の緊張感が、学生たちに新鮮な印象を与えたということだ。慣れてくると手際が良くなる。すると、学生たちは、安心する一方で油断か出る。レストランで手際のいいコックに料理を出してもらうような気分で、授業を受け始めてしまうのだ。授業を上手にサービスする側と、サービスされる側に、立場がはっきり分かれてしまう。先生はいかにも先生らしく、生徒はいかにも生徒らしい。</p><p>　こうした関係は、安定はしているが、ときに新鮮さに欠ける。これに対して、初年度の教師が持つ緊張感は、生徒にも伝染する。その緊張感の共有が一つの同じ場を作り上けているのだという意識を生みだす。参加し作り上ける感覚が、生徒の方にも生まれる。それが思い出の濃さにもつながる。</p><p>　ここで初年度というのは、教師になって初めての年度というだけではない。学校を替わって、教師が新たな気持ちで臨むときも新鮮さが出る。あるいは新しい教科を担当し、一生懸命勉強して多少の不安を持ちなからも勢いをつけて切り抜けていくときにも、印象深い授業ができやすい。ただ単に未熟であることがいいわけではもちろんない。自分が未熟であることを自覚し、その分精一杯準備し、情熱を持って語りかけるどきに未熱さがプラスに転じるのだ。</p><p>　教育において「新鮮さ」は決定的な重要性を持っている。いわゆる「教師臭さ」は、学ぶ側の構えを鈍くさせてしまう。型どおりの教え方が染みついてじまっている、という印象を与えてしまうだけで大きなマイナスになるのだ。「決まり切った感じ」を印象として与えないようにすることが大切てある。経験知を重ねる良さを残したまま、新鮮さを失わない。これは、もはや一つの技である。「先生も自分たちと一緒に変化してくれるのだ」という意識が学ぶ側に生まれると、場を一緒に盛り上ける機運が高まる。</p>",
      contentTranslationZhHans:
        '<p>从事教育工作常遇趣事，其中一种可称为"不成熟的有效性"。即便知识或教学技巧尚不成熟，执教的第一门课程却常能与学生缔结最深的羁绊。</p><p>普通工作往往经验越丰富、技术越纯熟，质量就越高。教育领域当然也需经验智慧，资深教师的技术稳定性确属可贵。但不可否认，教育界中，年轻教师的不成熟反而常成优势。我自身亦有体验：第一年带过的学生往往记忆最深，后续交往更为深厚。</p><p>为什么会有这样的现象呢？首要因素或是第一年教学的紧张感给学生带来的新鲜印象。技术熟练后虽然效率提升，学生却易在安心之余松懈——如同在餐厅享受老练厨师的流畅服务般被动接受课程，师生角色泾渭分明。教师愈发"教师化"，学生愈发"学生化"。</p><p>这般关系虽稳定，却常失之鲜活。相较之下，新教师的紧张感能感染学生，催生出“共建同一个课堂”的共鸣意识。学生亦萌生共建感，这也是回忆之所以格外深刻的缘由。</p><p>这里所说的"首年"不仅指初任教师的一年，亦包含教师调往另一学校后以全新心态投入、心中满是新鲜感时，或接手新学科奋力钻研、怀抱不安却气势如虹地作出突破时——此类情境下也容易诞生令人难忘的课堂。单纯的不成熟当然没有益处，但当教师自觉不成熟而倾力准备、饱含热情倾谈时，青涩方能转化为优势。</p><p>教育中“新鲜感”具有决定性意义。所谓"教师味"会钝化学习者的主动性，徒留"套路化教学"的刻板印象，弊害甚深。关键在于不让学生产生"固化感"，在保有经验智慧优点的同时不失鲜活。当学习者萌生"老师也在与我们共同蜕变"的认知时，共建课堂的活力自会高涨。</p>',
      type: SectionType.READING,
      title: "問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 16,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "筆者によると、教育の仕事は通常の仕事とどのような点で異なるか。",
          analysis:
            '问题：作者认为教育工作与普通工作的差异点在于？\n正确选项：2. 即便知识或技术不足，仍可能产生良好结果\n\n选项解析：\n1.错误。文中未提及"人格良さ"（人格优秀）的优先性，核心对比在于经验价值与不成熟效果的辩证关系。\n2.正确。对应"未熟さがプラスに働くケースがよくある"（不成熟常成优势）及"知識...未熟でも濃い縁を結ぶ"（知识不足仍缔结深刻关系）的论述。\n3.错误。"好かれやすい"（更受欢迎）属偷换概念。作者强调"印象深い"（记忆深刻）而非单纯受欢迎。\n4.错误。与原文逻辑相悖。文中承认"経験知は有効"（经验有效），仅强调教育存在"不成熟亦有效"的特殊性，未否定经验提升质量的基本规律。\n\n关键句定位：\n核心对比句："通常の仕事は...質が良くなる"（普通工作质量随经验提升）↔"教育の場合は...プラスに働く"（教育中不成熟反成优势）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "知識や技術の高さよりも人格の良さの方が重視される。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "知識や技術が十分でなくても良い結果を生むことがある。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "経験知の豊富なベテランより、若く未熟な方が好かれやすい。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "経験を積み技術が上がっても、仕事の質が良くなるとは限らない。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "筆者によると、初年度の教師の緊張感は学生たちにどのように影響するか。",
          analysis:
            '问题：新教师紧张感如何影响学生？\n正确选项：3. 产生与教师共同构建课程的参与感\n\n选项解析：\n1.错误。"和らげようとする"（试图缓解）属无中生有。文中仅描述紧张感的传染性，未提及学生主动缓解行为。\n2.错误。"生徒らしい態度"（学生式态度）与文意相反。新教师紧张感恰恰打破固有师生角色分化。\n3.正确。完全对应"参加し作り上げる感覚が...生まれる"（产生参与共建感）的表述。\n4.错误。"心を開く"（敞开心扉）属过度引申。文中强调"場を作り上げる意識"（共建场域意识），未涉及心理开放度。\n\n关键句定位：\n影响机制："緊張感の共有が...意識を生み出す"（紧张共享催生共建意识）',
          choices: [
            {
              id: "",
              label: "1.",
              text: "積極的に授業に参加し、教師の緊張感を和らげようとする。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "教師の立場を理解し、生徒らしい態度て授業を受けようとする。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "教師と一緒に授業を作っているのだという気持ちになる。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "教師と緊張感が共有でき、心を開いていいのだと思うようになる。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "筆者によると、教育を仕事にしている人間にとって大切なことは何か。",
          analysis:
            '问题：作者认为教育工作者最重要的是？\n正确选项：1. 永不满足于经验，持续自我革新\n\n选项解析：\n1.正确。对应"経験知を重ねる良さを残したまま、新鮮さを失わない"（在保留经验优势的同时不失新鲜）及"先生も...変化してくれる"（教师共同蜕变）的要求，本质是拒绝经验固化。\n2.错误。"新しい知識を身につける"（获取新知识）偏离重点。核心在于"意识革新"而非单纯知识更新。\n3.错误。虽提及"情熱を持って接する"（热情投入），但选项强调"补足不足"，而文中核心矛盾是"经验与新鲜感的平衡"，非能力短板问题。\n4.错误。"未熟さを隠さず"（不掩饰不成熟）曲解文意。作者主张"自觉不成熟并转化为动力"，而非刻意暴露弱点。\n\n关键句定位：\n终极要求："新鮮さを失わない"（不失新鲜）+"一緒に変化してくれる"（共同变化）→指向持续自我革新',
          choices: [
            {
              id: "",
              label: "1.",
              text: "経験に満足するとなく、自ら変化し続けようとすること。",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "新鮮さを失わないために、自ら新しい知識や技術を身につけること。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "自らの足りなさ補いつつ、情熱を持って接すること。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "自らの未熟さを隠さずに、学ぶ側か一体感を得やすくすること。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>A</p><p>「指示されないと自分から動かない」「指示されたことしかやらない」、いわゆる指示待ちになっているといわれる部下や後輩がいる。指示待ちになるのは、仕事に関する知識や経験が不足していたり仕事に対してやる気がなかったりすることなどが原因だといわれている。しかし実は、そもそも上司からの指示に従うことが自分の役目だと考え、それ以上のことをする必要性を感じていないという場合が多いのだ。</p><p>そのような部下には、何のためのこの仕事を行い、業務全体の中でほかの仕事とどうかかわっているのかを教えることが重要だ。仕事の全体像がイメージできれば、部下は次にやるべきことや工夫できそうな点が分かってくる。その結果、自分に求められていることに気づき、自主的に行動できるようになっていくだろう。</p><p>B</p><p>部下や後輩が指示待ちであるのを簡単に部下自身の責任と決めつけるのは、問題があります。指示待ちになっている理由が何かあるのかもしれません。</p><p>まず部下自身が自主的に動くことの重要性を認識していないケースがあります。「言われた通りにするのが部下の仕事だ」と思いこんでいて、むしろ「どうしましょう」と相談することこそが部下の務めだと信じているケースです。この場合は、どんな仕事もすべてマニュアルで示すことはできず、個人の判断や工夫がいることを伝えることからはじめる必要があります。</p><p>（中略）</p><p>「これはどうしましょうか」と相談された時は、部下自身にその対応策を考えられるかどうか見極めて、「一度、自分なりの案を考えてみて」と要求してみるのです。上司がいつもそのように振る舞えば、部下は上司の思いにそって、「提案型の相談」をするようになってきます。</p>",
      contentTranslationZhHans:
        '<p>A</p><p>有一种下属或后辈被评价为“不指示就不会主动行动”“只做被指示的事”，也就是只会“等待指示”。通常认为，形成这种情况的原因包括工作的知识经验不足或缺乏积极性。但实际上，多数情况源于下属认为"服从上司指示即本职"，未意识到需要做一些指令之上的事。</p><p>对此类下属，关键在于告知他们“此项工作的意义”及“这个工作在整体业务中与其他工作的关联”。若能构建工作全貌认知，下属自会理解后续应做事项与改进空间，进而觉察自己要做什么，并自主推进。</p><p>B</p><p>简单将只会等待指示的行为归咎于下属自身责任，这样的想法是存在问题的。出现这种情况，或许存在特定成因：</p><p>首先下属可能不懂得自主行动的重要性，比如深信“按吩咐行事即下属职责”，反倒将“前来请示该如何是好”视为自己应尽之责。此时首先需告诉他们：并非所有工作皆有指南可循，个人判断与创新不可或缺。</p><p>（中略）</p><p>当上司被下属询问"该如何处理"时，应判断下属能否自主思考对策，并要求他们先尝试拟定自己的方案。如果上司始终如此应对，下属就会顺应上司的期待，转为“提案型请示”。</p>',
      type: SectionType.READING,
      title:
        "問題11 次のAとBの意見文を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。",
      order: 17,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "部下や後輩が指示待ちになっている理由として、AとBが共通して述べていることは何か。",
          analysis:
            '问题：A与B共同指出的下属"等待指示"这一情况的成因是？\n正确选项：4. 认为执行上司指示即本职工作\n\n选项解析：\n1.错误。A提及"知识不足"但仅作次要原因，B未涉及此点，非共同要素。\n2.错误。"缺乏自信"未被两文共同讨论。A强调认知偏差，B探讨责任归属逻辑。\n3.错误。两文均未提及"上司详细指导"为成因，属无关选项。\n4.正确。A的"上司指示従うことが役目"与B的"言われた通りにするのが仕事"完全对应，为共同核心归因。\n\n关键句定位：\nA核心："上司からの指示に従うことが...役目だと考え"\nB核心："言われた通りにするのが部下の仕事だと思いこんで"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "知識や経験が足りず、やるべきことが分からないさと。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "自信がなく自主的に仕事を進めることができないこと。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "上司がいつも丁寧にやり方を教えてくれること。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "上司にいわれたことを行うのが仕事だと思っていること。",
              isCorrect: true,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "指示待ちになっている部下や後輩の対応のしかたについて、AとBはどのように述べているか。",
          analysis:
            '问题：A与B对应对"等待指示"下属的方法如何论述？\n正确选项：3. A强调理解工作目的与全貌，B建议先自主思考方案\n\n选项解析：\n1.错误。A未要求"提案"，仅通过全貌认知促发自主性，与B的"提案型相談"不构成共同建议。\n2.错误。"一緒に考える"（共同思考）非A观点，A侧重个体认知构建。\n3.正确。A的"仕事の全体像を理解"与B的"自分なりの案を考えさせる"分别对应两文核心对策。\n4.错误。B未提"やり方が分かっている仕事"，而是要求未知情境下的自主思考，选项表述偏离。\n\n关键句定位：\nA对策："仕事の全体像がイメージできれば...自主的に行動"\nB对策："自分なりの案を考えてみて...提案型の相談"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "AもBも、自分なりのやり方を考えて提案させるといいと述べている。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "AもBも、仕事の目的を伝え、やるべきことを一緒に考えるといいと述べている。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "Aは仕事の目的と全体像を理解させるといいと述べ、Bは自分でできそうなことはまず一人で考えさせるといいと述べている。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "Aはほかの仕事とのかかわりを教えるといいと述べ、Bはやり方がすでに分かっている仕事を与え自分自身でやらせるといいと述べている。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content:
        "<p>最近、日本ではテレビや書籍で脳科学者がブームになりました。脳科学が一般の人々の関心を強く惹いた最大の理由は、脳科学によって自分がよりよい人生を歩めそうだと感じるからではないでしょうか。</p><p>科学は事物を客観的に扱う三人称的な学問です。そのため、何か冷たく、自分とは関係のないようなよそよそしさ（注1）を感じてしまいます。ところが、脳科学は人間の感情や思考や行動に関わる科学です。そのため、科学としては初めてのことですが、まるで文学や芸術のように一人称（注2）世界に踏み込んできて、幸せな人生のノウハウを提供してくれているように思えるのです。</p><p>しかし、せっかく関心を持っている人に水を差す（注3）つもりはないのですが、脳科学が今よりずっと進歩したとしても、人間の心や私たちの人生について、すみずみまで解き明かせるようになるわけではないと肝に銘じて（注4）おいた方がよいと思います。脳は複雑で、まだまだわからないことが多く、普通的な法則に到達するまでの道のりはきわめて遠いのです。そして、たとえ到達できたとしても、科学の普通法則は人生の個別性や一回（注5）に対しては全く無力です。ゆえに、人生の個別の事柄に適用して何かを予言したりすることは、おそらく不可能でしょう。</p><p>もう一つ大切なのは、科学は事実を扱うことはできますが、価値観の問題を扱うことはできないということです。ですから、脳科学によってある事実が判明したとしても、それを価値観と混同してはいけません。たとえば、ある脳科学の本に、「こうすれば脳を活性化できるので、みなさんもやってみましょう」と書いてあったとします。ですが、脳の活性化は絶対的な価値でしょうか。極端な例で考えてみましょう。副作用の全くない薬物だったとしても、薬物で健康な人間（たとえば受験生）の脳を活性化することは許されるでしょうか。これが許されるかどうかは、論理や価値観に属する話です。価値観は個人と社会が決めるものです。そして、個人の価値と社会の価値も同じとは限りません。脳科学の知見（注6）は事実を記述したものであって、価値とは何の関係もないのです。</p><p>（中略）</p><p>人類がどのような未来を選ぶかという問題も、結局のところ価値観の問題です。科学は、選んだ未来を実現するための道具にはあり得ますが、未来を選ぶ価値観の問題を扱うことはできません。</p><p>（注1）よそよそしい:無関係である</p><p>（注2）一人称:書き手が自分自身をさす</p><p>（注3）水を差す:わきから邪魔をする</p><p>（注4）肝に銘じる:心に強くきざみつけて忘れない</p><p>（注5）一回性:一回起こるだけ</p><p>（注6）知見:見解、見識</p>",
      contentTranslationZhHans:
        '<p>最近在日本，电视和书籍中的脑科学家成为热潮。脑科学能引发大众强烈关注的最大原因，或许在于人们觉得它能帮助自己过上更好的人生。</p><p>科学是客观处理事物的第三人称学科，因此常给人冰冷疏离的感觉。但脑科学是涉及人类情感、思考与行为的科学。正因如此，虽属科学领域之首创，却仿佛文学与艺术一般，以第一人称的视角切入人生，向我们传授幸福人生的秘诀。</p><p>不过，虽然不想给难得开始关注的人泼冷水，但我们必须记住：即使脑科学再进步，也无法完全解析人类心灵与人生的所有细节。大脑极为复杂，未知领域众多，距离发现普遍法则还遥遥无期。即便发现普遍法则，科学普遍规律对人生的独特性和一次性事件也毫无作用。因此，试图用科学预言个体人生具体事项，恐怕永远不可能。</p><p>另一点重要的是，科学能处理事实，却无法处理价值观问题。即使脑科学揭示某些事实，也不能将其与价值观混淆。例如，某脑科学书籍写道："这样做能激活大脑，大家试试吧。"但大脑激活真的是绝对价值吗？极端地说，即使存在毫无副作用的药物，用药物激活健康人类（如考生）的大脑是否应被允许？这一问题属于伦理与价值观范畴，需由个人与社会决定，而个人与社会价值观未必一致。脑科学的见解仅描述事实，与价值无任何关系。</p><p>（中略）</p><p>人类选择何种未来的问题，本质仍是价值观问题。科学或许能成为实现所选未来的工具，但无法替我们决定选择何种未来这一价值观的问题。</p><p>（注1）よそよそしい：无关</p><p>（注2）一人称：指代自身</p><p>（注3）水を差す：干扰</p><p>（注4）肝に銘じる：深刻牢记</p><p>（注5）一回性：仅发生一次</p><p>（注6）知見：观点、认知</p>',
      type: SectionType.READING,
      title: "問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1～4から一つ選びなさい。",
      order: 18,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt: "筆者によると、人々は脳科学に何を期待しているか。",
          analysis:
            '问题：人们为何对脑科学抱有期待？\n正确选项：2. 期待它能指导自己如何获得幸福人生\n\n选项解析：\n1.错误。文中未提及"解释脑机制"是大众关注焦点，核心吸引力在于"人生指南"。\n2.正确。对应"脳科学...幸せな人生のノウハウを提供"（提供幸福人生方法）的表述，直接点明期待本质。\n3.错误。偷换概念。脑科学"涉及"情感等，但大众期待是"应用指导"而非单纯"教授处理方法"。\n4.错误。"客観的に示す"（客观展示）与作者"一人称世界"的论述矛盾，且未提及"定义幸福"。\n\n关键句定位：\n核心动机："脳科学によって...よりよい人生を歩めそうだと感じる"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "複雑な脳の仕組みをわかりやすく説明してくれること。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "どうすれば自分が幸せに生きられるかを教えてくれること。",
              isCorrect: true,
            },
            {
              id: "",
              label: "3.",
              text: "人間の感情や思考や行動の扱い方を教えてくれること。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "人間にとって幸せな人生とは何かを客観的に示してくれること。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt: "脳科学について、筆者の考えに合うのはどれか。",
          analysis:
            '问题：符合作者观点的脑科学论述是？\n正确选项：3. 即使发现普遍法则，也无法应用于个体人生具体事项\n\n选项解析：\n1.错误。与文意相悖。作者强调"普遍法则对个体无效"，否定其应用前提。\n2.错误。逻辑颠倒。文中指出"个体解析≠普遍法则"，选项混淆因果关系。\n3.正确。完全对应"普遍的法则は...個別性や一回性に対して無力"的论述。\n4.错误。"必须通过解析个体才能到达普遍法则"属无中生有，作者未提此路径。\n\n关键句定位：\n核心限制："科学の普遍法則は人生の個別性...全く無力"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "個人の人生に適用するには、普遍的な法則を見つけなければならない。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "個人の脳の機能をすべて解明てきたとしても、普遍的な法則にたとり着けない。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "普遍的な法則にたとり着いたとしても, 人生の個々の事柄には応用てきない。",
              isCorrect: true,
            },
            {
              id: "",
              label: "4.",
              text: "普遍的な法則に到達するには、人生の個々の事柄を解き明かさなければならない。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 3,
          prompt: "筆者が言いたいことは何か。",
          analysis:
            '问题：作者的核心观点是？\n正确选项：4. 科学仅处理事实，不涉及个人与社会的价值观\n\n选项解析：\n1.错误。作者明确"科学事実与価値無関係"，选项反向曲解为"科学影响价值观"。\n2.错误。部分正确但偏离核心。作者强调"科学无法处理价值观"，未主张"需结合两者选择未来"。\n3.错误。"役に立たない"（无用）过度极端。作者承认科学是"实现未来的工具"，仅否定其价值观决策能力。\n4.正确。精准概括"科学は事実を扱う...価値観の問題を扱えない"的核心论点。\n\n关键句定位：\n结论句："科学は...価値観の問題を扱うことはできません"',
          choices: [
            {
              id: "",
              label: "1.",
              text: "科学が証明した事実は、個人や社会の価値観に影響を与える恐れがある。",
              isCorrect: false,
            },
            {
              id: "",
              label: "2.",
              text: "科学だけでなく個人や社会の価値観を考慮したうえで、未来を選ぶ必要がある。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "科学は個人や社会の価値観を扱えす、人類が望む未来の実現には役に立たない。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "科学は事実を対象とするものであり個人や社会の価値観を扱うものではない。",
              isCorrect: true,
            },
          ],
        },
      ],
    },
    {
      id: "",
      partId: "",
      content: "",
      contentTranslationZhHans: "",
      type: SectionType.READING,
      title:
        "問題13 右のページは、ある大学の研究活動助成の案内である。\n下の問いに対する答えとして最もよいものを、1・2・3・4から一つ選びなさい。",
      order: 19,
      questions: [
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 1,
          prompt:
            "サイさんは、9月4日から7日までボランティア活動を行ったので、9月中に助成金を申請しようと考えている。交通費と宿泊費を計算してメモにまとめたが、申請が認められた場合、サイさんに支給される助成金はいくらになるか。\n--------------\nサイさんのメモ\n交通費:12,000円　宿泊費:7,000円を3泊分\n--------------",
          analysis:
            "根据助成金规定：\n交通费：单次活动上限10,000日元（サイ实际支出12,000日元，按上限10,000计算）。\n住宿费：每晚上限6,000日元，最多报销2晚（サイ实际3晚，按2晚计算，共6,000×2=12,000日元）。\n→ 选项1（交通10,000円、宿泊6,000円×2泊分）。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "交通10,000円と、宿泊6,000円を2泊分。",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "交通10,000円と、宿泊6,000円を3泊分。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "交通12,000円と、宿泊7,000円を2泊分。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "交通12,000円と、宿泊7,000円を3泊分。",
              isCorrect: false,
            },
          ],
        },
        {
          id: "",
          type: QuestionType.SINGLE_CHOICE,
          order: 2,
          prompt:
            "ジムさんは、1月10日に日帰りでボランテイア活動を行う予定である。助成金を申請したいと考えているが、活動終了後に必ず提出しなければならないものは何て、いつまでに提出しなければならないか。",
          analysis:
            "ジム为日帰り（当天来回无住宿），\n必交材料：A（申請書）、B（振込口座届）、C（活動証明書）。\n无需提交：D（領収書），无住宿费。\n1月10日结束的活动，截止日期是二个月后，即3月10日。由于并未超过3月24日，因此应以更早的“二个月内”期限为准。只有当“二个月后”的日期超过3月24日时，才会以3月24日作为最终期限。",
          choices: [
            {
              id: "",
              label: "1.",
              text: "AとBとCで、3月10日までに提出する。",
              isCorrect: true,
            },
            {
              id: "",
              label: "2.",
              text: "AとBとCで、3月24日までに提出する。",
              isCorrect: false,
            },
            {
              id: "",
              label: "3.",
              text: "AとBとDで、3月10日までに提出する。",
              isCorrect: false,
            },
            {
              id: "",
              label: "4.",
              text: "AとBとCとDで、3月24日までに提出する。",
              isCorrect: false,
            },
          ],
        },
      ],
    },
  ],
};
