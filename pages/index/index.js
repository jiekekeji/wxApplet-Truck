var utils = require('../../utils/util.js');
var app = getApp();
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
    console.log('refreshScHeight=' + utils.getScreenHeight());
    // refreshScHeight();
  },
  regionchange(e) {
    console.log(e.type)
  },
  //点击了货车图标
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  //刷地图的高度
  refreshScHeight: function () {
    console.log('refreshScHeight=' + utils.getScreenHeight());
    this.setData({
      scheight: getScreenHeight(),
    })
  },


})