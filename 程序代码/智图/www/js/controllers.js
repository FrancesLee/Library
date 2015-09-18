angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  //////////////////////////热门图书推荐数据库

  $scope.phones = [
    {
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
  }, {
    id: 0,
    title: '中国建筑史',
    author: '梁思成',
    press: '生活·读书·新知三联书店',
    calNumber: 'TU',
    picUrl: './img/s4620026.jpg',
    picUrlB: './img/1017026254c284cab7.jpg',
    intro: '《中国建筑史》一书处处体现出粱先生融东西方文化于一体的研究方法。针对每一具体的历史时期，先将文献上该阶段的建筑活动表述于前，并把相关的政治、经济、文化背景简要地穿插其中。这样既有利于读者的整体把握，又为后继学者的研究提供了一个基本框架。接下来便是对此一时期现存实物的逐一剖析，描述生动，文字精要。在实例研究中颇多联系比较，其中既有同一时期建筑的横向联系，以表明此阶段建筑型制的共同特征；又有不同历史阶段的纵向比较，从而体现出建筑“词汇”、“文法”的发展演变。在实例分析之后，水到渠成地总结出该时期建筑的特征及与其他时期的传承关系。以梁思成为代表的这一代建筑工作者，在风雨飘摇的动荡中，以自己的热情和才华义无反顾地投入到民族解放的斗争之中，摸索着中国建筑文化的出路。清醒、真实地了解民族的历史与创造具有时代特色的本民族建筑文化，始终是萦绕在他们心中的历史课题。感谢百花文艺出版社的努力，使《中国建筑史》在世纪之交再次面世。同时，此书的出版也向新一代建筑工作者提出了同样的问题。置身在这个特殊时刻的我们，将以怎样的方式去解答这样一份问卷呢',
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
  }];
  

})
.controller('DashDetailCtrl', function($scope,$stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.detailId);
})

.controller('ChatsCtrl', function($scope,Seats) {
  $scope.seats = Seats.all();
  $scope.remove = function(seat) {
    Seats.remove(seat);
  }
  ////////////////////////外部引入的方法
  // $http.get('js/seat.json').success(function(data) {
  //   $scope.seats = data;
  // });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Seats) {
  $scope.seat = Seats.get($stateParams.seatId);
})

.controller('MapCtrl', function($scope, $ionicLoading,$ionicPopup,Abouts) {
  $scope.abouts = Abouts.all();
  $scope.remove = function(about){
    Abouts.remove(about);
  }
})
.controller('MapDetailCtrl',function($scope,$stateParams, Abouts){
  $scope.about = Abouts.get($stateParams.aboutId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.loadf=function(){
    require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/graphic", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, Graphic, FeatureLayer, Point, SpatialReference, PictureMarkerSymbol, InfoTemplate) {
            var Fmap;
            Fmap = new Map("FacilityMap", {
            });
            var FbaseMap = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer");
            Fmap.addLayer(FbaseMap);
            var s = new Search({
            enableButtonMode: false, //this enables the search widget to display as a single button
            enableInfoWindow: true,
            showInfoWindowOnSelect: true,
            map: Fmap
         }, "search");
            var sources = s.get("sources");

            sources = [{
              featureLayer: new FeatureLayer("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/22"),
              searchFields: ["Noise"],
              displayField: "name",
              exactMatch: false,
              outFields: ["name"],
              name: "Noise",
              placeholder: "按噪声级别(1~4)搜索基础设施",
              //Create an InfoTemplate and include three fields
              //infoTemplate: new InfoTemplate("路况信息", "道路名称: ${ROUTENAME}</br>拥堵级别: ${TJAMLEVEL}"),
              enableButtonMode: true,
              minCharacters: 0
            }];
            s.set("sources", sources);
            search.startup();
    });
  }
  $scope.loadf();
})
.controller('StudyCtrl', function($scope,$ionicPopup) {
  $scope.loadData= function() {
      require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/graphic", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, Graphic, FeatureLayer, Point, SpatialReference, PictureMarkerSymbol, InfoTemplate) {
            var map;
            map = new Map("studyMap", {
            });
            var url0 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/7";
            var url1 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/8";
            var url2 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/9";
            var url3 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/10";
            var baseMap = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer");
            var layer = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/Study/MapServer");
            map.addLayer(baseMap);
            map.addLayer(layer);
            var fl0 = new FeatureLayer(url0, {
                  infoTemplate: new InfoTemplate("茶水间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl1 = new FeatureLayer(url1, {
                  infoTemplate: new InfoTemplate("楼梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl2 = new FeatureLayer(url2, {
                  infoTemplate: new InfoTemplate("电梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl3 = new FeatureLayer(url3, {
                  infoTemplate: new InfoTemplate("卫生间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var symbol0 = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-128.png', 40, 40);
            var renderer0 = new esri.renderer.SimpleRenderer(symbol0);
            fl0.setRenderer(renderer0);
            var symbol1 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/hotel-vol-3/256/129-128.png', 40, 40);
            var renderer1 = new esri.renderer.SimpleRenderer(symbol1);
            fl1.setRenderer(renderer1);
            var symbol2 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/healthcare-2/63/restrooms-128.png', 40, 40);
            var renderer2 = new esri.renderer.SimpleRenderer(symbol2);
            fl2.setRenderer(renderer2);
            var symbol3 = new PictureMarkerSymbol('https://cdn3.iconfinder.com/data/icons/cosmo-color-navigation/40/lift_1-128.png', 40, 40);
            var renderer3 = new esri.renderer.SimpleRenderer(symbol3);
            fl3.setRenderer(renderer3);
            map.addLayer(fl3);
            map.addLayer(fl2);
            map.addLayer(fl1);
            map.addLayer(fl0);
            var confirmPopup = $ionicPopup.confirm({
               title: '提示',
               template: '是否允许APP获取您的地理位置?'
             });
             confirmPopup.then(function(res) {
               if(res) {
                  var point = new Point(168.53783444545655, -394.2926115231525, new SpatialReference({ wkid: 3857 }));
                  var pointp = new Point(125.89414333025974, -336.1433416484538, new SpatialReference({ wkid: 3857 }));
                  var symbolP = new PictureMarkerSymbol('./img/resizeAp.png', 40, 40);
                  var symbolPP = new PictureMarkerSymbol('./img/resizeApi.png', 40, 40);
                  var graphic = new Graphic(point, symbolP);
                  var graphicp = new Graphic(pointp, symbolPP);
                  //map.graphics.add(graphic);
                  map.graphics.add(graphicp);
                  map.centerAndZoom(point,0.25);
               } else {
                 alert("无法获取当前位置");
               }
             });
            map.on("click",function(evt){
              map.centerAt(evt.mapPoint);
            });
      });
    } 
  $scope.loadData();
})

.controller('ReadCtrl', function($scope,$ionicPopup,$ionicLoading) {
  $scope.loadD = function() { 
      require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/graphic", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, Graphic, FeatureLayer, Point, SpatialReference, PictureMarkerSymbol, InfoTemplate) {
            var mapT;
            mapT = new Map("readMap", {
            });
            var baseMapT = new esri.layers.ArcGISDynamicMapServiceLayer("http://10.19.1.43/ArcGIS/rest/services/library/baseMapT/MapServer");
            mapT.addLayer(baseMapT);
            var url0T = "http://10.19.1.43/ArcGIS/rest/services/library/FloorTwo/MapServer/10";
            var fl0T = new FeatureLayer(url0T, {
                  infoTemplate: new InfoTemplate("茶水间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var symbol0T = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-128.png', 40, 40);
            var renderer0T = new esri.renderer.SimpleRenderer(symbol0T);
            fl0T.setRenderer(renderer0T);
            mapT.addLayer(fl0T);
            
            mapT.on("click",function(evt){
              mapT.centerAt(evt.mapPoint);
              alert("x:"+evt.mapPoint.x+"y:"+evt.mapPoint.y);
            });
            var alertPopup  = $ionicPopup.alert({
               title: '提示',
               template: '检测到您不在本楼层'
             });
             alertPopup .then(function(res) {
                  var pointT = new Point(95.3163963370537, -408.11328098408154, new SpatialReference({ wkid: 3857 }));
                  var symbolPT = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/education-icons-3/155/vector_313_14-128.png', 64, 64);
                  var graphicT = new Graphic(pointT, symbolPT);
                  mapT.graphics.add(graphicT);
                  mapT.centerAndZoom(pointT,0.25);//0.25 specified factor
             });
      });
    } 
  $scope.loadD(); 
})

.controller('SearchdetailCtrl',function($scope,$ionicPopup,$ionicLoading){
  $scope.loadDa= function() {
      require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/graphic", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, Graphic, FeatureLayer, Point, SpatialReference, PictureMarkerSymbol, InfoTemplate) {
            var Rmap;
            Rmap = new Map("RMap", {
            });
            var url0 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/7";
            var url1 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/8";
            var url2 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/9";
            var url3 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/10";
            var baseMap = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer");
            Rmap.addLayer(baseMap);
            var fl0 = new FeatureLayer(url0, {
                  infoTemplate: new InfoTemplate("茶水间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl1 = new FeatureLayer(url1, {
                  infoTemplate: new InfoTemplate("楼梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl2 = new FeatureLayer(url2, {
                  infoTemplate: new InfoTemplate("电梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl3 = new FeatureLayer(url3, {
                  infoTemplate: new InfoTemplate("卫生间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var symbol0 = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-128.png', 40, 40);
            var renderer0 = new esri.renderer.SimpleRenderer(symbol0);
            fl0.setRenderer(renderer0);
            var symbol1 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/hotel-vol-3/256/129-128.png', 40, 40);
            var renderer1 = new esri.renderer.SimpleRenderer(symbol1);
            fl1.setRenderer(renderer1);
            var symbol2 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/healthcare-2/63/restrooms-128.png', 40, 40);
            var renderer2 = new esri.renderer.SimpleRenderer(symbol2);
            fl2.setRenderer(renderer2);
            var symbol3 = new PictureMarkerSymbol('https://cdn3.iconfinder.com/data/icons/cosmo-color-navigation/40/lift_1-128.png', 40, 40);
            var renderer3 = new esri.renderer.SimpleRenderer(symbol3);
            fl3.setRenderer(renderer3);
            Rmap.addLayer(fl3);
            Rmap.addLayer(fl2);
            Rmap.addLayer(fl1);
            Rmap.addLayer(fl0);
            var confirmPopup = $ionicPopup.confirm({
               title: '提示',
               template: '是否允许APP获取您的地理位置?'
             });
             confirmPopup.then(function(res) {
               if(res) {
                  var pointp = new Point(168.53783444545655, -394.2926115231525, new SpatialReference({ wkid: 3857 }));
                  var point = new Point(40.106253433472496, -625.4920438570248, new SpatialReference({ wkid: 3857 }));
                  var symbolP = new PictureMarkerSymbol('./img/resizeAp.png', 40, 40);
                  var symbolPP = new PictureMarkerSymbol('./img/resizeApi.png', 40, 40);
                  var graphic = new Graphic(point, symbolP);
                  var graphicp = new Graphic(pointp, symbolPP);
                  Rmap.graphics.add(graphic);
                  //Rmap.graphics.add(graphicp);
                  Rmap.centerAndZoom(point,0.25);
               } else {
                 alert("无法获取当前位置");
               }
             });
            Rmap.on("click",function(evt){
              Rmap.centerAt(evt.mapPoint);
            });
      });
    } 
  $scope.loadDa();
})

.controller('LifeCtrl',function($scope,$ionicPopup,$ionicLoading) {
  $scope.loadDat= function() {
      require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/graphic", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, Graphic, FeatureLayer, Point, SpatialReference, PictureMarkerSymbol, InfoTemplate) {
            var LiMap;
            LiMap = new Map("LiMap", {
            });
            var url0 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/7";
            var url1 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/8";
            var url2 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/9";
            var url3 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/10";
            var baseMap = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer");
            LiMap.addLayer(baseMap);
            var fl0 = new FeatureLayer(url0, {
                  infoTemplate: new InfoTemplate("茶水间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl1 = new FeatureLayer(url1, {
                  infoTemplate: new InfoTemplate("楼梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl2 = new FeatureLayer(url2, {
                  infoTemplate: new InfoTemplate("电梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl3 = new FeatureLayer(url3, {
                  infoTemplate: new InfoTemplate("卫生间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var symbol0 = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-128.png', 40, 40);
            var renderer0 = new esri.renderer.SimpleRenderer(symbol0);
            fl0.setRenderer(renderer0);
            var symbol1 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/hotel-vol-3/256/129-128.png', 40, 40);
            var renderer1 = new esri.renderer.SimpleRenderer(symbol1);
            fl1.setRenderer(renderer1);
            var symbol2 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/healthcare-2/63/restrooms-128.png', 40, 40);
            var renderer2 = new esri.renderer.SimpleRenderer(symbol2);
            fl2.setRenderer(renderer2);
            var symbol3 = new PictureMarkerSymbol('https://cdn3.iconfinder.com/data/icons/cosmo-color-navigation/40/lift_1-128.png', 40, 40);
            var renderer3 = new esri.renderer.SimpleRenderer(symbol3);
            fl3.setRenderer(renderer3);
            LiMap.addLayer(fl3);
            LiMap.addLayer(fl2);
            LiMap.addLayer(fl1);
            LiMap.addLayer(fl0);
            var confirmPopup = $ionicPopup.confirm({
               title: '提示',
               template: '是否允许APP获取您的地理位置?'
             });
             confirmPopup.then(function(res) {
               if(res) {
                  var pointp = new Point(675.106253433472496, -695.4920438570248, new SpatialReference({ wkid: 3857 }));
                  var point = new Point(655.106253433472496, -715.4920438570248, new SpatialReference({ wkid: 3857 }));
                  var symbolP = new PictureMarkerSymbol('./img/resizeAp.png', 40, 40);
                  var symbolPP = new esri.symbol.SimpleMarkerSymbol({//这个symbol略丑,你换一个图片吧
                                "color": [255,255,255,14],
                                "size": 202,
                                "angle": -30,
                                "xoffset": 0,
                                "yoffset": 0,
                                "type": "esriSMS",
                                "style": "esriSMSCircle",
                                "outline": {
                                  "color": [0,0,0,255],
                                  "width": 1,
                                  "type": "esriSLS",
                                  "style": "esriSLSSolid"
                                }
                              });
                  var graphic = new Graphic(point, symbolP);
                  var graphicp = new Graphic(pointp, symbolPP);
                  LiMap.graphics.add(graphic);
                  LiMap.graphics.add(graphicp);
                  LiMap.centerAndZoom(point,0.5);
               } else {
                 alert("无法获取当前位置");
               }
             });
            LiMap.on("click",function(evt){
              LiMap.centerAt(evt.mapPoint);
            });
      });
    } 
  $scope.loadDat();
});
////////////////////////////我是分隔线