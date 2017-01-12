var utils = require('../../utils/util.js');
var app = getApp();
var that;
Page({
  /**
   * 相关数据
   */
  data: {
    //屏幕的高度，默认的
    scheight: 0,
    //根据当前位置获取的附件的货车列表
    markers: [{
      iconPath: "/resources/images/icon-truck.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    //地图上的控制器
    controls: [{
      id: 1,
      iconPath: '/resources/images/icon_m_location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  //监听页面加载
  onLoad: function () {
    refreshmaph();
    that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scheight: res.windowHeight,
        })
      }
    });
  },
  //视野发生变化时触发
  regionchange(e) {
    console.log(e.type)
  },
  //点击了货车图标的回调函数
  markertap(e) {
    console.log(e.markerId)
  },
  //控制器点击的回调函数
  controltap(e) {
    console.log(e.controlId)
  },

})

/**
 * 动态设置地图的高度
 */
function refreshmaph() {
  wx.getSystemInfo({
    success: function (res) {
      that.setData({
        scheight: res.windowHeight,
      })
    }
  });
}