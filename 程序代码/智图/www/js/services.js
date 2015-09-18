angular.module('starter.services', [])
// angular.module('starter').controller('DashCtrl',['$scope',function($scope){
  .factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
  {
    id: 0,
    title: '中国建筑史',
    author: '梁思成',
    press: '生活·读书·新知三联书店',
    calNumber: 'TU',
    picUrl: 'http://img4.douban.com/lpic/s4620026.jpg',
    picUrlB: 'http://i10.topitme.com/l170/1017026254c284cab7.jpg',
    intro: '《中国建筑史》一书处处体现出粱先生融东西方文化于一体的研究方法。针对每一具体的历史时期，先将文献上该阶段的建筑活动表述于前，并把相关的政治、经济、文化背景简要地穿插其中。这样既有利于读者的整体把握，又为后继学者的研究提供了一个基本框架。接下来便是对此一时期现存实物的逐一剖析，描述生动，文字精要。在实例研究中颇多联系比较，其中既有同一时期建筑的横向联系，以表明此阶段建筑型制的共同特征；又有不同历史阶段的纵向比较，从而体现出建筑“词汇”、“文法”的发展演变。在实例分析之后，水到渠成地总结出该时期建筑的特征及与其他时期的传承关系。以梁思成为代表的这一代建筑工作者，在风雨飘摇的动荡中，以自己的热情和才华义无反顾地投入到民族解放的斗争之中，摸索着中国建筑文化的出路。清醒、真实地了解民族的历史与创造具有时代特色的本民族建筑文化，始终是萦绕在他们心中的历史课题。感谢百花文艺出版社的努力，使《中国建筑史》在世纪之交再次面世。同时，此书的出版也向新一代建筑工作者提出了同样的问题。置身在这个特殊时刻的我们，将以怎样的方式去解答这样一份问卷呢',
    x: '',
    y: ''
  }, {
    id: 1,
    title: '中国建筑史',
    author: '梁思成',
    press: '百花文艺出版社',
    calNumber: 'TU-092/220',
    picUrl: './img/s1172152.jpg',
    picUrlB: './img/1106814014e2712930o.jpg',
    intro: '這是已故中國著名建築學家梁思成先生一生最重要的學術專著。作者以嚴肅謹慎、一絲不苟的治學態度，提綱挈領地梳理出數千年來中國建築的概要、發展及特徵等，加以細緻的考證和精闢的論述，完成巨構。書內並附有近二百幅不同年代、不同風格、不同地區建築物的歷史圖片，有的更是作者以及其他建築學家手繪的平面圖、剖面圖或斷面圖等，彌足珍貴。',
    x: '467.406',
    y: '-209.858'
  },{
    id: 2,
    title: '华夏意匠',
    author: '李允鉌',
    press: '天津大学出版社',
    calNumber: 'TU-092/228',
    picUrl: './img/s1852868.jpg',
    picUrlB: './img/100070843037290789.jpg',
    intro: '本书作者李允鉌通过多年潜心研究中国建筑设计传统、长期实地考察东西方建筑，博览中外建筑经典，验证了中国古代存在具有中国民族与地理环境特色的建筑与规划理论，其中许多设计思想与技法属中国独有或首创，在世界都居于领先地位；进而充分肯定了中国古典建筑设计理念是中国悠久历史文化的结晶，也是世界建筑文化艺术宝库中的瑰宝。《华夏意匠》总结了中国古典建筑设计原理，书中字里行间不时流露出一位学者对国家的拳拳热爱之情和对优秀民族文化的自豪感，驳斥了少数西方人傲慢、狭隘的片面学术观点与某些中国“学者”缺乏民族自信的西化倾向，从根本上修正了学术界长期以来存在的种种谬误与偏见，打消了对中国传统建筑的模糊认识，从而全面解决了对中国古典建筑的认识与评价问题。 ',
    x: '165.346',
    y: '-707.438'
  },{
    id: 3,
    title: '目送',
    author: '龙应台',
    press: '湖南文艺出版社',
    calNumber: 'TU-092/229',
    picUrl: './img/s3157563.jpg',
    picUrlB: './img/100070843037290789.jpg',
    intro: '最犀利的一枝笔，也有最难以言尽的时候，从纯真喜悦的《孩子你慢慢来》，到坦率得近乎“痛楚”的《亲爱的安德烈》，“生死大问”《目送》逐渐转往人生的深沉，父亲的逝、母亲的老、儿子的离、朋友的牵挂、兄弟的携手共行……写尽了幽微，如烛光冷照山壁。 ',
    x: '1998.128',
    y: '-709.779'
  },{
    id: 4,
    title: '建筑 ',
    author: '希拉里﹒弗伦奇 ',
    press: '三联书店',
    calNumber: 'A-001',
    picUrl: 'http://img4.douban.com/mpic/s1997637.jpg',
    picUrlB: 'http://f10.topitme.com/o007/100070843037290789.jpg',
    intro: '希拉里·弗伦奇 是英国执业建筑师和金斯敦大学（University of Kingston）皇家艺术学院建筑历史课讲师。她擅于分辩圆柱上的微凸线条和楣构,亦是以建筑语言解构奢华的洛可可的专家,同时能够以简单明了的文字向一般读者描述。',
    x: '468.406',
    y: '-207.858'
  },{
    id: 5,
    title: '写给大家看的设计书（第3版）',
    author: '罗宾·威廉姆斯',
    press: '人民邮电出版社',
    calNumber: 'A-003',
    picUrl: 'http://img3.douban.com/mpic/s23486434.jpg',
    picUrlB: 'http://i10.topitme.com/m120/1012020602e55ebad7.jpg',
    intro: '这本书出自一位世界级设计师之手。复杂的设计原理在书中凝炼为亲密性、对齐、重复和对比4 个基本原则。作者以其简洁明快的风格,将优秀设计所必须遵循的这4 个基本原则及其背后的原理通俗易懂地展现在读者面前。本书包含大量的示例,让你了解怎样才能按照自己的方式设计出美观且内容丰富的产品。',
    x: '71.318',
    y: '-509.796'
  },{
    id: 6,
    title: '建筑艺术',
    author: '乔纳森·格兰西  ',
    press: '旅游教育出版社',
    calNumber: 'A-004',
    picUrl: 'http://img3.douban.com/mpic/s4510432.jpg',
    picUrlB: 'http://f10.topitme.com/o007/100070843037290789.jpg',
    intro: '《目击者文化指南》是一套最具收藏价值的精品文化图书,是一套畅销全球的文化经典著作,全面、系统地展现了人类文明和财富。《目击者文化指南:建筑艺术》为其中一册,是一本全面的建筑艺术指南,内容丰富,包括探索世界上最伟大的建筑,空前荟萃的精美彩色插图为您呈现世界各国的标志性建筑。最佳的视觉资料指南,从塔庙遗址到现代的飞机场,带您纵览上下5000年的建筑设计、风格与结构。超越建筑的外表,不仅为您详细阐述建筑的材料特性、卓越的技术成就之外,还为您区分与解读建筑的关键因素与独到的风格装饰艺术。带您展开一场辉煌的建筑之旅,从西方建筑到东方建筑,展现最伟大的世界建筑奇观。 ',
    x: '70.659',
    y: '-392.572'
  },{
    id: 7,
    title: '建筑家安藤忠雄',
    author: '安藤忠雄 ',
    press: '中信出版社',
    calNumber: 'TU-007',
    picUrl: 'http://img4.douban.com/mpic/s4688677.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '《建筑家安藤忠雄》四十年来,安藤忠雄从没没无名、只能躺在事务所地板发呆、打滚、到处找空地发想建筑样式的非学院出身建筑师,至今日争相为世界各大学建筑系聘请授课、并在世界各地留下各种融入自然环境的建筑作品的建筑家,他的六十八岁人生,几乎都是站在黑暗中,朝着眼前的光明,不断抓住机会拼命向前实现梦想。',
    x: '66.708',
    y: '-339.887'
  },{
    id: 8,
    title: '建筑：形式、空间和秩序',
    author: '程大锦  ',
    press: '天津大学出版社',
    calNumber: 'A-005',
    picUrl: 'http://img3.douban.com/mpic/s22703133.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '《建筑:形式空间和秩序(第3版)》是建筑设计基础语汇的经典入门书,初版三十多年来一直广受好评,被誉为“建筑专业的圣经”。众多建筑专业师生、设计师皆从《建筑:形式空间和秩序(第3版)》中获得重要启发与设计灵感。全书内容涵盖了建筑历史、建筑理论和设计作品,堪称一部图文并茂的建筑百科宝典。这本经典的图解参考书有助于学生和执业建筑师理解建筑设计的基本语汇,在建成环境中检验秩序化的形式和空间。程大锦利用其个性鲜明的精美图画,展示了建筑基本要素之间的关系,这些关系已穿越时空和文化界限。通过浏览这些具有创造性的观念,《建筑：形式空间和秩序(第3版)》鼓励读者以批判性的眼光看待建成环境,促进更深层次地解读建筑。经过再次修订的第三版,对交通、光线、景观和基地环境等章节进行了扩展,除此之外还增加了环境要素、建筑规范方面的新观点以及有关形式、空间和秩序的当代实例。中文版的编译也根据最新的英文版本多次进行了修改,忠实体现了原书的图文特色。除了更新部分文字内容和增添插图,新版本还附有一张配套的光盘,通过程大锦教授创作的三维模型和动画,书中阐释的建筑观念更加生动地展现在读者眼前。',
    x: '70.659',
    y: '324.082'
  },{
    id: 9,
    title: '美的历程',
    author: '李泽厚',
    press: '生活·读书·新知三联书店',
    calNumber: 'TU-007',
    picUrl: 'http://img3.douban.com/mpic/s3893343.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '本书是中国美学的经典之作。凝聚了作者李泽厚先生多年研究,他把中国人古往今来对美的感觉玲珑剔透地展现在大家眼前,如斯感性,如斯亲切。今配以精美的插图,本书就更具体地显现出中国这段波澜壮阔的美的历程。',
    x: '',
    y: ''
  },{
    id: 10,
    title: '我与地坛',
    author: '史铁生',
    press: '人民文学出版社',
    calNumber: 'TU-092/226',
    picUrl: 'http://img4.douban.com/mpic/s4594868.jpg',
    picUrlB: 'http://i10.topitme.com/m120/1012020602e55ebad7.jpg',
    intro: '《我与地坛》收入《我与地坛》、《记忆与印象》等以记事为主的散文,配少量图片。《我与地坛》由中国当代著名作家史铁生著。是史铁生文学作品中,充满哲思又极为人性化的代表作之一。其前第一段和第二段被纳入人民教育出版社的高一教材中。前两部分注重讲地坛和他与母亲的后悔,对于中学生来说,这是一篇令人反思的优秀文章。史铁生是当代中国最令人敬佩的作家之一。他的写作与他的生命完全同构在了一起,在自己的“写作之夜”,史铁生用残缺的身体,说出了最为健全而丰满的思想。他体验到的是生命的苦难,表达出的却是存在的明朗和欢乐,他睿智的言辞,照亮的反而是我们日益幽暗的内心。地坛只是一个载体,而文章的本质却是一个绝望的人寻求希望的过程,以及对母亲的思念。',
    x: '',
    y: ''
  },{
    id: 11,
    title: '乌合之众:大众心理研究',
    author: '古斯塔夫·勒庞',
    press: '广西师范大学出版社',
    calNumber: 'TU-092/219',
    picUrl: 'http://img3.douban.com/mpic/s6781730.jpg',
    picUrlB: 'http://f10.topitme.com/o007/100070843037290789.jpg',
    intro: '勒庞的《大众心理学》是一本当之无愧的名著,他极为精致地描述了集体心态。',
    x: '',
    y: ''
  },{
    id: 12,
    title: '沟通的艺术',
    author: '罗纳德·B·阿德勒 / 拉塞尔·F·普罗科特  ',
    press: '世界图书出版公司·后浪出版公司',
    calNumber: 'A-007',
    picUrl: 'http://img3.douban.com/mpic/s27920443.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '本书分为“看入人里”、“看出人外”和“看人之间”三个部分：“看入人里”主要探讨了与沟通者有关的因素,说明了人际关系的本质,强调自我在沟通中的角色,并分析了知觉与情绪在沟通中的重要性；“看出人外”聚焦于沟通者之外信息的传送与接收,分析了语言的运用和非语言线索的特征,强调了倾听的重要性；“看人之间”则主要讨论了关系的演变过程,侧重于亲密关系的区辨,提出了增进沟通氛围、处理人际冲突的各种沟通方法。本书既关注有关人际沟通的理论介绍,也加入了丰富实用的阅读材料。7大专栏、超过100篇文章,让你可以轻松学习和应用书中的沟通技巧。新增超过50部热门美剧、电影和真人秀的分析,让你可以轻松印证作者在每一章总结的沟通准则,增加阅读的趣味性。',
    x: '',
    y: ''
  },{
    id: 13,
    title: '对话式设计',
    author: '冯·格康 / 玛格及合伙人建筑师事务所 / 《城市·环境·设计》杂志社 ',
    press: '辽宁科学技术出版社',
    calNumber: 'A-008',
    picUrl: 'http://img3.douban.com/mpic/s27223602.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '《对话式设计:gmp建筑师事务所建筑作品》在秉承的总体式设计理念中,多样性和统一性是一对互通互证的概念。“多样性”和“统一性”作为提纲挈领的原则,“流动性”或“都市性”可视为实现“建筑的社会责任”的重要方面。同样,建筑的“创新性和独特性”可从“建筑的社会责任”或“传统性”的角度进行审视。',
    x: '',
    y: ''
  },{
    id: 14,
    title: '当我谈跑步时我谈些什么',
    author: '村上春树',
    press: '南海出版公司',
    calNumber: 'A-009',
    picUrl: 'http://img3.douban.com/mpic/s3507580.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '村上春树,日本著名作家。循着岁月流逝、地点变迁,唯有四分之一个世纪里日日坚持跑步的所见所闻、所惑所思最是真真切切：1982年秋,开始职业作家生涯之际,也开始长跑。此后近30年,从夏威夷的考爱岛到马萨诸塞的剑桥,从日本村上市参加铁人三项赛,到踏上希腊马拉松长跑古道,他,永远奔跑。',
    x: '',
    y: ''
  },{
    id: 15,
    title: '秘密花园',
    author: '乔汉娜·贝斯福 ',
    press: '北京联合出版公司',
    calNumber: 'A-010',
    picUrl: 'http://img3.douban.com/mpic/s28070243.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '欢迎来到秘密花园！',
    x: '',
    y: ''
  },{
    id: 16,
    title: 'The Phaidon Atlas of 21st Century World Architecture',
    author: 'Editors of Phaidon Press',
    press: 'Phaidon Press Inc.',
    calNumber: 'A-006',
    picUrl: 'http://img3.douban.com/mpic/s4499865.jpg',
    picUrlB: 'http://f10.topitme.com/m/201008/20/12822929018610.jpg',
    intro: '"The Phaidon Atlas of 21st Century World Architecture" is a comprehensive portrayal of the finest built architecture from around the world completed since the year 2000. Divided into six world regions, the "Phaidon Atlas of 21st Century World Architecture" provides an important overview of global and local trends in architecture for a wide range of users. The geographical contexts for 21st century architectural production are explored in a global framework presented in accessible graphic formats. Each of the six world regions is introduced by an in-depth look at urban and architectural issues. This statistical data has been researched and analysed by a team from the London School of Economics.More than 1000 key buildings have been chosen through a rigorous selection process involving a panel of expert advisors and specialists from every region. Each building is fully illustrated with drawings and photographs, and described by a short essay. Further information includes key data such as construction cost, client name, area of the building and geographical coordinates. Cross-referencing between projects enables the user to find other buildings by the same architect included in the book. In addition, a mass of useful information is provided. This includes details of architects practices and extensive indexes.',
    x: '',
    y: ''
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(detailId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(detailId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

