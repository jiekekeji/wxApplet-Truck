var utils = require('../../utils/util.js');
var that;
Page({

    //*********相关数据**********//
    data: {
        cartypeList: [],//列表
        comefrom: 1,//从哪个页面来的的
    },

    //*********页面相关回调函数**********//
    onLoad: function (option) {
        that = this;

        getComeFrom(option);
        getCarTypeData();
    },

    //车辆类型选择选择Ok
    selectOk: function (e) {
        var index = e.currentTarget.dataset.index;
        redirectTo(index);
    }
})

/**
 * 重定向到其他的页面
 */
function redirectTo(cartypeID) {
    var to = that.data.comefrom;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    switch (parseInt(to)) {
        case 1:
            prevPage.setData({
                cartype: cartypeID
            })
            break;
        case 2://车辆列表页面过来的
            prevPage.setData({
                cartype: cartypeID
            })
            break;
        case 3:
            break;
    }
    wx.navigateBack({
        delta: 1
    });
}

/**
 * 获取是从哪个页面过来的选择
 * 1:从首页过来的的
 * 2：车辆列表过来的
 */
function getComeFrom(option) {
    var cf = option.comefrom;
    that.setData({
        comefrom: cf
    });
}

/***
 * 获取车辆类型列表
 */
function getCarTypeData() {
    //显示加载框
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });

    var tempTypeList = [];
    //根据车辆类型列表
    for (var i = 0; i < 10; i++) {
        var car = {};
        car.id = i;
        car.type = i;
        tempTypeList.push(car);
    }

    //更新列表数据
    that.setData({
        cartypeList: tempTypeList
    });

    //模拟一下获取数据
    setTimeout(function () {
        wx.hideToast()
    }, 2000)


}

