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
            "“加工”主要用于对物质材料进行切削、组合或化学处理等，制作出新产品。\\n选项2的“余った木材を加工した商品”正是典型用法。\\n1、3、4 均把“加工”用于非物理材料（生活习惯、房屋、规章制度），不自然，应分别改为“改善”“改装”“改定”。",
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
            "“養う”常指供给生活所需以抚养人。\\n选项4“養っている”指“抚养孩子”最贴切。\\n1 多用“飼う”，“饲养”虫子；\\n2 栽种植物多用“育てる”；\\n3 “养公司”说法也不自然。",
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
            "“資質”侧重指人或动物的天赋、素质。\\n选项4用在“人作为运动员的天赋”最自然。\\n1 用在“设备”上不合；\\n2 虽可指“动物本性”，但不如 4 常见；\\n3 “产品质量”应为“品質”。",
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
            "“正当”可指“合理、合情理”或“应得、合法”。\\n选项 3 “正当な評価を受ける”表示“得到应得的评价”，用法最恰当。\\n1 应用“正しく”；\\n2 应说“正式な名前”；\\n4 应说“順調に”或“着々と”。",
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
            "“ありきたり”指“平凡、老套、陈词滥调”。\\n选项2用来评价小说情节“老套”，最典型；\\n3 虽也自然，但更常见于评价“事物或表达”，首推 2；\\n1 、4 用法不当。",
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
            "“間柄”多用于人与人之间的关系。\\n选项1“親しい間柄”描述人际关系最自然。\\n2 、3 、4 虽也谈“关系”，但均偏向国家、事物或抽象环境，不如人际用法贴切。",
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
  ],
};
