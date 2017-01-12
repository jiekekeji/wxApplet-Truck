/**
 * 获取格式化的时间
 */
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 获取屏幕的高度
 */
function getScreenHeight() {
  wx.getSystemInfo({
    success: function (res) {
      return res.windowHeight;
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getScreenHeight:getScreenHeight
}
