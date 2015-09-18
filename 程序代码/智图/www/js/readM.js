angular.module('starter.readM', [])
// require([
//         "dojo/dom-construct", "esri/map", "esri/dijit/Search", "esri/layers/FeatureLayer",  "esri/InfoTemplate", "dojo/domReady!"
//       ], function (domConstruct, Map, Search, FeatureLayer,InfoTemplate) {
//             var mapT;
//             mapT = new Map("readMap", {
//               zoom: 7
//             });
//             var layerT = new esri.layers.ArcGISDynamicMapServiceLayer("http://10.19.1.43/ArcGIS/rest/services/library/FloorTwo/MapServer");
//             mapT.addLayer(layerT);
//             mapT.centerAt(70.659,324.082);
//             mapT.on("click",function(evt){
//               mapT.centerAt(evt.mapPoint);
//             });
//       });