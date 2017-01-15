var utils = require('../../utils/util.js');
var that;
Page({

    //*********相关数据**********//
    data: {
        longitude: 110.35,
        latitude: 20.02,
        carlist: [{ id: 1, lenght: 123 }, { id: 1, lenght: 123 }],//列表
        cartype: 0,//当前车辆类型
        carlength: 0,//当前的车辆长度
    },

    //*********页面相关回调函数**********//
    onLoad: function (option) {
        that = this;

        //获取跳转过来的经度和纬度
        this.data.longitude = option.longitude;
        this.data.latitude = option.latitude;

        console.log(option.longitude + " " + this.data.latitude);
        getCarsData();

    },

    //页面返回
    onShow: function () {
        getCarsData();
    },

    //车辆类选择
    selectCarType: function () {
        var murl = "/pages/cartype/cartype?comefrom=" + 2;
        wx.navigateTo({
            url: murl
        });
    },
    //选择车辆长度
    selectCarLength: function () {
        var murl = "/pages/carlength/carlength";
        wx.navigateTo({
            url: murl
        });
    },
    //车辆列表点击事件,跳转到车辆详情
    carItemTap: function (e) {
        var index = e.currentTarget.dataset.index;
        var id = this.data.carlist[index];
        var murl = "/pages/cardetail/cardetail?id="+id;
        wx.navigateTo({
            url: murl
        });
    }
})

/**
 * 初始化数据
 */
function initData(option) {

}

/**
 * 获取车辆列表
 */
function getCarsData() {
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });

    var tempCarList = [];
    //根据车辆类型什么的获取车辆列表
    for (var i = 0; i < 10; i++) {
        var car = {};
        car.id = i;
        car.lenght = (Math.random() * 10).toFixed(1);
        tempCarList.push(car);
    }

    that.setData({
        carlist: tempCarList
    });

    setTimeout(function () {
        wx.hideToast()
    }, 1000)
}