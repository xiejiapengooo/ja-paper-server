import { PaperQuestion, PaperSection, QuestionChoice, QuestionType, SectionType } from "@prisma/client";

type Data = {
  id: string;
  title: string;
  sections: Array<{
    id: PaperSection["id"];
    partId: PaperSection["partId"];
    mediaId: PaperSection["mediaId"];
    type: PaperSection["type"];
    title: PaperSection["title"];
    order: PaperSection["order"];
    questions: Array<{
      id: PaperQuestion["id"];
      type: PaperQuestion["type"];
      order: PaperQuestion["order"];
      prompt: PaperQuestion["prompt"];
      analysis: PaperQuestion["analysis"];
      mediaId: PaperQuestion["mediaId"];
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
      mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
          mediaId: "",
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
  ],
};
