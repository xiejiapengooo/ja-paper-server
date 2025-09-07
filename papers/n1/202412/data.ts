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
      type: SectionType.VOCAB_GRAMMAR,
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
      type: SectionType.VOCAB_GRAMMAR,
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
      type: SectionType.VOCAB_GRAMMAR,
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
      type: SectionType.VOCAB_GRAMMAR,
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
  ],
};
