angular.module('starter.servicesTh', [])
// angular.module('starter').controller('DashCtrl',['$scope',function($scope){
  .factory('Abouts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var abouts = [
    {
    id: 0,
    title: '图书馆简介',
    name: '自然-设计/Nature Inspired Design',
    date: '2015-9-15,3:30PM',
    picUrl: './img/library.png',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/41854/screenshots/2231809/docks-ao-d.gif',
    icon: 'ion-ios-home-outline',
    introA: '建筑意蕴——',
    introB: '馆藏特色——',
    introC: '服务理念——',
    contentA: '2014年12月27日，经过三年建设，北京建筑大学大兴校区一座宏伟的标志性建筑——图书馆凌云出阁。从其外观看，她像一颗夜明珠，璀璨于星光之下，她像一个百宝箱，放光在绿野和池水之中。她更像一篇寓言，你能看到鱼群回游在湖海之滨，你能看到雁阵翱翔于蓝天之上，你能看到白云升起万象之帆、洒落万花之瓣。她还有一只如同知识之窗的大眼睛，正含情脉脉、摄人心魄。一座具有后现代风格的建筑，意蕴丰富，给我们带来无穷遐想。',
    contentB: '我馆积累了一批珍贵的、有价值的建筑类文献，其中中文占60%、外文占40%，清华大学建筑系教材，我馆收藏齐全。著名古籍文献和原版文献约4000册：《中国营造学社汇刊》现存30种，我馆有28种；《埃及的穆斯林建筑》1951年版全球550部，我馆有第299、426、516册三部；英文原版瑞典喜仁龙著《北京的城墙和城门》1924年版全球800册，我馆收藏第241册和第399册；从清乾隆京城全图到各种老北京地图均有收藏，并建立了数字化的《北京地图》特色资源包，被北京市教委评为2011年度优秀资源包项目。',
    contentC: '多年来，我们始终坚持把“读者第一”作为图书馆服务的理念，坚守“以人为本、以本为道，建本励学、知本敦行”馆训，逐步形成了一个由资源建设、流通阅览、信息咨询、培训指导、技术支持、文化导向组成的藏借阅用一体化的现代化文献信息服务体系。图书馆每年开展“把读者放在心中，把微笑挂在脸上”优质服务月活动；依托各种中、外文数据库，积极开展参考咨询、科技查新、代查代引、定题服务、馆际互借和原文传递等服务，为本校的教学、科研工作提供全面信息支持。'
  }, {
    id: 1,
    title: '帮助手册',
    name: '光-影',
    date: '2015-9-11,3:30PM',
    picUrl: './img/study.png',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/1554241/bakery_website_1x.jpg',
    icon: 'ion-ios-help-outline',
    introA: '背景',
    introB: '问题',
    introC: '本产品介绍',
    contentB: '1.馆藏丰富，但分布于图书馆的各处，传统的通过索书号进行查找，极为不便;2.楼层多，面积大，基础设施（诸如茶水间、洗手间、电梯间、楼梯口等等）分散，地毯式的寻找基础设施，浪费时间，更对其他人产生了不必要的影响;3.图书馆拥有大量且分布于各处的阅览座位，同学们难以选择合适自身需求的位置；也很难向其他伙伴准确描述所在自己的方位。',
    contentA: '北京建筑大学大兴校区新图书馆，占地总面积3.5万平米，共8层。2-5层拥有丰富藏书；每层有多处卫生间和茶水间；每层有上百个阅览座位，给学生提供了优质的学习环境。但是在使用中也出现很多不方便的问题：',
    contentC: '1. 将图书查询与室内地图结合，避免了传统通过索书号查找书籍的不便。2.根据用户场景需求，结合缓冲区分析等GIS技术手段，向用户推荐适合的图书馆座位3.提供室内地图与室内定位技术，让用户方便快捷的找到自己所需要的配套设施或书籍区域。4.使用第三方分享插件，室内定位技术等，将自己所在的位置或者所需书籍的位置，清晰便捷的告知给同伴。'
  },{
    id: 2,
    title: '位置分享',
    name: 'Romantic football fan',
    date: '2015-9-13,3:30PM',
    picUrl: './img/tabFour1.png',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/31664/screenshots/1768018/dribbble.gif',
    icon: 'ion-ios-upload-outline',
    introA: '当前位置',
    introB: '',
    introC: '',
    contentA: '连接错误！',
    contentB: '',
    contentC: ''
  }
  ];

  return {
    all: function() {
      return abouts;
    },
    remove: function(about) {
      abouts.splice(abouts.indexOf(about), 1);
    },
    get: function(aboutId) {
      for (var i = 0; i < abouts.length; i++) {
        if (abouts[i].id === parseInt(aboutId)) {
          return abouts[i];
        }
      }
      return null;
    }
  };
});