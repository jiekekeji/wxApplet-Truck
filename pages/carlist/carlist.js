var utils = require('../../utils/util.js');
var that;
Page({

    //*********相关数据**********//
    data: {
        longitude: 110.35,
        latitude: 20.02,
        varlist: []
    },

    //*********页面相关回调函数**********//
    onLoad: function (option) {
        that = this;

        //获取跳转过来的经度和纬度
        this.data.longitude = option.longitude;
        this.data.latitude = option.latitude;

        console.log(option.longitude + " " + this.data.latitude);
        getCarsData();

    }
})


/**
 * 获取车辆列表
 */
function getCarsData() {
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });

    for (var i; i < 20; i++) {

    }


    setTimeout(function () {
        wx.hideToast()
    }, 2000)
}