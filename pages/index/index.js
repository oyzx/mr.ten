Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    mapName: '深圳市 - 南山区 - 香山里',
    commoditys: [
      {
        name: '水果',
        memo: '只做新鲜的水果',
        image: '/static/images/commodityIcon/fruit.png'
      },
      {
        name: '土特产',
        memo: '挑选自原产地',
        image: '/static/images/commodityIcon/specialty.png'
      },
      {
        name: '果蔬',
        memo: '生菜 净菜',
        image: '/static/images/commodityIcon/vegetables.png'
      },
      {
        name: '推荐',
        memo: '提供即时配送',
        image: '/static/images/commodityIcon/good.png'
      },
    ],
    commodityList: [
      {
        image: '/static/images/commodity/tg1.jpg',
        name:'华容团子',
        memo:'华容特产，流连忘返',
        price: 5.00.toFixed(2),
        unit:'个',
        stock: 493
      },
      {
        image: '/static/images/commodity/tg2.jpg',
        name: '放养乌鸡蛋',
        memo: '湖南特产，仅此一家',
        price: 3.00.toFixed(2),
        unit: '个',
        stock: 1493
      },
      {
        image: '/static/images/commodity/tg3.jpg',
        name: '智利车厘子',
        memo: '智利车厘子，好吃不贵',
        price: 50.00.toFixed(2),
        unit: 'kg',
        stock: 100
      },
      {
        image: '/static/images/commodity/s3.jpg',
        name: '奶牛草莓',
        memo: '浓浓的奶味，酸酸的爱情',
        price: 30.00.toFixed(2),
        unit: 'kg',
        stock: 393
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})