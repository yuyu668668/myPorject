Page({
  data: {
    imgUrls: [
      'http://p8hntlb71.bkt.clouddn.com/dan88.jpg',
      'http://p8hntlb71.bkt.clouddn.com/banner2.png',
      'http://p8hntlb71.bkt.clouddn.com/dan89.jpg'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },

  onLoad: function() {
    
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '养蛇',
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