var utils = require('../../utils/util.js');
var that;
Page({

    //*********相关数据**********//
    data: {

        carInfo: {
            id: 0,
            name: "小卡车",
            imgUrls: ['/resources/images/car-photo.jpeg']
        }
    },

    //*********页面相关回调函数**********//
    onLoad: function (option) {
        that = this;
        console.log('onLoad');

    },



})