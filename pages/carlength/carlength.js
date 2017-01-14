var utils = require('../../utils/util.js');
var that;
Page({

    //*********相关数据**********//
    data: {
        lengthlist: [],//列表
    },

    //*********页面相关回调函数**********//
    onLoad: function (option) {
        that = this;
        console.log('onLoad');

        getCarLengthList();
    },

    //车辆长度选择xua选择OK
    selectOk: function (e) {
        var index = e.currentTarget.dataset.index;
        redirectTo(index);
    }

})

/**
 * 返回之前的页面
 */
function redirectTo(index) {
    var id = that.data.lengthlist[index].id;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
        carlength: id
    })
    wx.navigateBack({
        delta: 1
    });
}

/**
 * 获取车辆长度列表参数
 */
function getCarLengthList() {

    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });

    var tempCarList = [];
    tempCarList.push({
        id: 0,
        lenght: '不限'
    })
    //根据车辆类型什么的获取车辆列表
    for (var i = 0; i < 5; i++) {
        var car = {};
        car.id = i;
        car.lenght = (Math.random() * 10).toFixed(1) + '米';
        tempCarList.push(car);
    }

    tempCarList.push({
        id: 100,
        lenght: '自定义'
    })

    that.setData({
        lengthlist: tempCarList
    });

    setTimeout(function () {
        wx.hideToast()
    }, 1000)
}