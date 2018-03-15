// pages/commodity/commodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // pNode:父节点，cNode:当前节点
    comClass: [
      {
        name: '热卖',
        pNode: 0,
        cNode: 1,
      }, {
        name: '团购',
        pNode: 0,
        cNode: 2,
      }, {
        name: '净菜',
        pNode: 0,
        cNode: 3,
      },{
        name: '食品',
        pNode: 0,
        cNode: 4,
      },{
        name: '水果', 
        pNode: 4,
        cNode: 9,
      },{
        name: '饮品',
        pNode: 4,
        cNode: 10,
      }, {
        name: '果汁',
        pNode: 4,
        cNode: 11,
      }, {
        name: '汽水',
        pNode: 4,
        cNode: 12,
      }, {
        name: '水果',
        pNode: 4,
        cNode: 13,
      }, {
        name: '咖啡',
        pNode: 4,
        cNode: 14,
      }, {
        name: '茶饮料',
        pNode: 4,
        cNode: 15,
      }, {
        name: '饮用水',
        pNode: 4,
        cNode: 16,
      },{
        name: '功能饮料',
        pNode: 4,
        cNode: 17,
      }, {
        name: '乳品',
        pNode: 0,
        cNode: 5,
      }, {
        name: '粮油',
        pNode: 0,
        cNode: 6,
      }, {
        name: '日用',
        pNode: 0,
        cNode: 7,
      }, {
        name: '酒类',
        pNode: 0,
        cNode: 8,
      }
    ],
    commodity: [
      {
        image: '/static/images/commodity/p1.jpg',
        name: '汇源纸盒苹果汁',
        memo: '100%苹果汁 健康又好喝',
        price: 9.90,
        num: 1,
        unti: 'L',
        stock: 245
      }, {
        image: '/static/images/commodity/p2.jpg',
        name: '屈臣氏苏打水',
        memo: '100%苹果汁 健康又好喝',
        price: 3.50.toFixed(2),
        num: 330,
        unti: 'ml',
        stock: 458
      }, {
        image: '/static/images/commodity/p3.jpg',
        name: '可口可乐',
        memo: '分享装',
        price: 5.50.toFixed(2),
        num: 2,
        unti: 'L',
        stock: 86
      }, {
        image: '/static/images/commodity/p4.jpg',
        name: '宝矿力水特',
        memo: '补充消耗的水分及电解质',
        price: 3.50.toFixed(2),
        num: 330,
        unti: 'ml',
        stock: 235
      }, {
        image: '/static/images/commodity/p5.jpg',
        name: '屈原氏蒸馏水',
        memo: '不添加任何化学成分',
        price: 3.50.toFixed(2),
        num: 330,
        unti: 'ml',
        stock: 230
      }, {
        image: '/static/images/commodity/p6.jpg',
        name: '美汁源',
        memo: '美汁美味',
        price: 3.50.toFixed(2),
        num: 330,
        unti: 'ml',
        stock: 26
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