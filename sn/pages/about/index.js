Page({
  onLoad: function () {
   
  },
  //地图导航
  getLocaltionMsg:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = 23.2830400000 //纬度
        var longitude = 112.7259300000 //经度
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: '世林蛇场',
          address:'广东省肇庆市四会市大沙镇仁马村'
        })
      }
    })
  },
  //拨打电话
  getTel: function(){
    wx.makePhoneCall({
      phoneNumber: '13727279976' //电话号码
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  }
})