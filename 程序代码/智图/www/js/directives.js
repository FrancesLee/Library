angular.module('starter.directives', [])
require([
        "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/layers/FeatureLayer", "esri/symbols/PictureMarkerSymbol", "esri/InfoTemplate", "dojo/domReady!"
      ], function (domConstruct, Map, Search, FeatureLayer, PictureMarkerSymbol, InfoTemplate) {
            var map;
            map = new Map("studyMap", {
              zoom: 7
            });
            var url0 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/7";
            var url1 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/8";
            var url2 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/9";
            var url3 = "http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer/10";
            var baseMap = new esri.layers.ArcGISDynamicMapServiceLayer ("http://10.19.1.43/ArcGIS/rest/services/library/BaseMapF/MapServer");
            map.addLayer(baseMap);
            var fl0 = new FeatureLayer(url0, {
                  infoTemplate: new InfoTemplate("茶水间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl1 = new FeatureLayer(url1, {
                  infoTemplate: new InfoTemplate("楼梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl2 = new FeatureLayer(url2, {
                  infoTemplate: new InfoTemplate("卫生间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var fl3 = new FeatureLayer(url3, {
                  infoTemplate: new InfoTemplate("电梯间", "SHAPE: ${SHAPE}"),
                  outFields: ["SHAPE"]
            });
            var symbol0 = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-128.png', 40, 40);
            var renderer0 = new esri.renderer.SimpleRenderer(symbol0);
            fl0.setRenderer(renderer0);
            var symbol1 = new PictureMarkerSymbol('https://cdn3.iconfinder.com/data/icons/cosmo-color-finance-1/40/career-128.png', 40, 40);
            var renderer1 = new esri.renderer.SimpleRenderer(symbol1);
            fl1.setRenderer(renderer1);
            var symbol2 = new PictureMarkerSymbol('https://cdn4.iconfinder.com/data/icons/healthcare-2/63/restrooms-128.png', 40, 40);
            var renderer2 = new esri.renderer.SimpleRenderer(symbol2);
            fl2.setRenderer(renderer2);
            var symbol3 = new PictureMarkerSymbol('https://cdn1.iconfinder.com/data/icons/smashicons-travel-flat/59/24_-_Elevator_Flat-128.png', 40, 40);
            var renderer3 = new esri.renderer.SimpleRenderer(symbol3);
            fl3.setRenderer(renderer3);
            map.addLayer(fl3);
            map.addLayer(fl2);
            map.addLayer(fl1);
            map.addLayer(fl0);
            //center and zoom
            map.on("click",function(evt){
              map.centerAt(evt.mapPoint);
            });
      });
// /////////////////////////////////////////////////////////////////////////////////////
// require([
//         "esri/urlUtils",
//         "esri/map",
//         "esri/graphic",            
//         "esri/tasks/RouteTask",            
//         "esri/tasks/RouteParameters",

//         "esri/tasks/FeatureSet",            
//         "esri/symbols/SimpleMarkerSymbol",
//         "esri/symbols/SimpleLineSymbol",          

//         "esri/Color",
//         "dojo/on",
//         "dijit/registry",

//         "dijit/layout/BorderContainer",
//         "dijit/layout/ContentPane",
//         "dijit/form/HorizontalSlider",
//         "dijit/form/HorizontalRuleLabels"
//       ], function (
//         urlUtils, Map, Graphic, RouteTask, RouteParameters,
//         FeatureSet, SimpleMarkerSymbol, SimpleLineSymbol,           
//         Color, on, registry
//       ) {
//         var map, routeTask, routeParams;
//         var stopSymbol, routeSymbol, lastStop;

//         urlUtils.addProxyRule({
//           urlPrefix: "route.arcgis.com",  
//           proxyUrl: "/sproxy/"
//         });
        
//         map = new esri.Map("studyMap", {
//             zoom: 8
//         });
//           var baseMap = new esri.layers.ArcGISTiledMapServiceLayer("http://10.19.1.43/ArcGIS/rest/services/library/FloorFour/MapServer");
//           map.addLayer(baseMap);

//         map.on("click", addStop);         

//         routeTask = new RouteTask("http://10.19.1.43/ArcGIS/rest/services/library/FloorFour/MapServer");

//         //setup the route parameters
//         routeParams = new RouteParameters();
//         routeParams.stops = new FeatureSet();
//         routeParams.outSpatialReference = {
//           "wkid" : 3857
//         };

//         routeTask.on("solve-complete", showRoute);
//         routeTask.on("error", errorHandler);               

//         //define the symbology used to display the route
//         stopSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_CROSS).setSize(15);
//         stopSymbol.outline.setWidth(4);
//         routeSymbol = new SimpleLineSymbol().setColor(new dojo.Color([0, 0, 255, 0.5])).setWidth(5);

//         //Adds a graphic when the user clicks the map. If 2 or more points exist, route is solved.
//         function addStop(evt) {
//           var stop = map.graphics.add(new Graphic(evt.mapPoint, stopSymbol));
//           routeParams.stops.features.push(stop);

//           if (routeParams.stops.features.length >= 2) {
//             routeTask.solve(routeParams);
//             lastStop = routeParams.stops.features.splice(0, 1)[0];
//           }
//         }

//         //Adds the solved route to the map as a graphic
//         function showRoute(evt) {
//           map.graphics.add(evt.result.routeResults[0].route.setSymbol(routeSymbol));
//         }

//         //Displays any error returned by the Route Task
//         function errorHandler(err) {
//           alert("An error occured\n" + err.message + "\n" + err.details.join("\n"));

//           routeParams.stops.features.splice(0, 0, lastStop);
//           map.graphics.remove(routeParams.stops.features.splice(1, 1)[0]);
//         }

//        });
// 地图代码到此结束