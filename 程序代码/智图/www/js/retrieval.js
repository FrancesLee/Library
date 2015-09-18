angular.module('starter.retrieval', [])

// AV.initialize("4a1qzdea70ftj34pyz2yudyv9bf0th9103ng2ijdrbvk2xvu", "50tzzqhu81kota6hip4yuho2rgyq19647vwiz72in3mscea8");
// var Book = AV.Object.extend("Book");
// var book = new Book();
// /////////////////////////////////////////query
// var query = new AV.Query(Book);
// var title;
// query.equalTo("title", "中国建筑史");
// query.find({
//   success: function(results) {
//     alert("Successfully retrieved " + results.length + " posts.");
//     // 处理返回的结果数据
//     var arr=[];
//     for (var i = 0; i < results.length; i++) {
//       var object = results[i];
//       /////////////////////////////////数据获取到cards
//       title=object.get('title');
//       var press=object.get('Press');
//       arr[i]="{title: '"+title+"',press: '"+press+"'}";
//       //angular.element("#h").text(title);
//     }
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });