angular.module('starter.servicesT', [])
// angular.module('starter').controller('DashCtrl',['$scope',function($scope){
  .factory('Seats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var seats = [
    {
    id: 0,
    title: 'ADA画廊系列讲座',
    name: '自然-设计/Nature Inspired Design',
    date: '2015-9-15,3:30PM',
    picUrl: './img/jaguars_oakley_lawson_dos.jpg',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/41854/screenshots/2231809/docks-ao-d.gif',
    num: '1001',
    addr: '建筑大学图书馆凌云报告厅5F'
  }, {
    id: 1,
    title: '北京建筑大学第2届摄影论坛',
    name: '光-影',
    date: '2015-9-11,3:30PM',
    picUrl: './img/squarespace_1x.png',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/1554241/bakery_website_1x.jpg',
    num: '1002',
    addr: '建筑大学图书馆会议大厅-1F'
  },{
    id: 2,
    title: '闲话沙龙——"我与偶像有个约会"',
    name: 'Romantic football fan',
    date: '2015-9-13,3:30PM',
    picUrl: './img/vs_guide_cover_template.png',
    picUrlB: 'https://d13yacurqjgara.cloudfront.net/users/31664/screenshots/1768018/dribbble.gif',
    num: '1003',
    addr: '建筑大学图书馆凌云报告厅5F'
  }
  ];

  return {
    all: function() {
      return seats;
    },
    remove: function(seat) {
      seats.splice(seats.indexOf(seat), 1);
    },
    get: function(seatId) {
      for (var i = 0; i < seats.length; i++) {
        if (seats[i].id === parseInt(seatId)) {
          return seats[i];
        }
      }
      return null;
    }
  };
});