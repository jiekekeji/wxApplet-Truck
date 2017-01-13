var utils = require('../../utils/util.js');
var that;
Page({

  //*********相关数据**********//
  data: {
    scale: 14,//当前缩放值
    city: '',//当前城市
    //屏幕的高度，默认的
    scheight: 667,
    //经度
    longitude: 110.35,
    //纬度
    latitude: 20.02,
    //根据当前位置获取的附件的货车列表
    markers: [],
    //车辆详情信息
    carDetal: {
      isShowDetail: false,
      title: '123'

    }

  },

  //*********页面相关回调函数**********//

  //监听页面加载
  onLoad: function () {
    that = this;
    refreshmaph();
    refreshLocation();
  },

  //视野发生变化时触发
  regionchange(e) {
    console.log(e.type)
  },

  //点击了货车图标的回调函数
  markertap(e) {
    console.log(e.markerId);
    this.setData({
      'carDetal.isShowDetail': true,
      'carDetal.title': e.markerId
    })
  },

  //控制器点击的回调函数
  controltap(e) {
    console.log(e.controlId)
  },

  //*********自定义的相关监听事件**********//

  //城市列表点击事件
  searchCity: function () {
    console.log(this.data.city);
    if ('' === this.data.city) {
      wx.showToast({
        title: '好懒啊啊，什么都没输入!',
        // icon: 'success',
        duration: 2000
      })
    }
  },

  //进入列表
  toCarList: function () {
    console.log('toCarList');
    var murl = "/pages/carlist/carlist?longitude=" + this.data.longitude
      + "&latitude=" + this.data.latitude;
    wx.navigateTo({
      url: murl
    });
  },

  //缩小地图
  mapPlus: function () {
    var ss = this.data.scale;
    if (5 === ss) {
      return;
    }
    ss--;
    this.setData({
      scale: ss
    });
  },

  //放大地图
  mapAdd: function () {
    console.log(this.data.markers.length);
    var ss = this.data.scale;
    if (18 === ss) {
      return;
    }
    ss++;
    this.setData({
      scale: ss
    });
  },

  //重新定位获取货车列表
  refreshLocation: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    })
    refreshLocation();
  },

  //关闭车辆详情信息
  closeDetail: function () {
    this.setData({
      'carDetal.isShowDetail': false
    })
  }
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

/**
 * 刷新定位位置
 */
function refreshLocation() {
  wx.getLocation({
    type: 'gcj02',
    success: function (res) {
      that.setData({
        longitude: res.longitude,
        latitude: res.latitude,
      });
      //定位成功后重新获取附件的货车列表
      getNearCarByLocation();
    }
  })
}

/**
 * 根据定位点获取附近的车
 */
function getNearCarByLocation() {
  that.setData({
    markers: [],
  });
  //模拟数据,货车数据
  for (var i = 0; i < 5; i++) {
    var mark = {};
    mark.iconPath = "/resources/images/icon-truck.png";
    mark.id = i;
    mark.latitude = that.data.latitude + (Math.random() / 100);
    mark.longitude = that.data.longitude + (Math.random() / 100);
    mark.width = 30;
    mark.height = 30;
    that.data.markers.push(mark);
  }

  //我的位置
  var me = {};
  me.iconPath = "/resources/images/icon_location.png";
  me.id = -100;
  me.latitude = that.data.latitude;
  me.longitude = that.data.longitude;
  me.width = 30;
  me.height = 30;
  that.data.markers.push(me);

  for (var j = 0; j < that.data.markers.length; j++) {
    console.log(that.data.markers);
  }

  console.log(that.data.latitude);
  console.log('me');
  that.setData({
    markers: that.data.markers,
  });
}