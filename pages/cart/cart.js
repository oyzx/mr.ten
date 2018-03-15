// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infor: {
      name: '李志红',
      sex: '女士',
      phone: '13501151010',
      address: '深圳市 - 南山区 - 香山里 - 4栋12A',
    },
    commodity: [
      {
        id: 1,
        image: '/static/images/commodity/p1.jpg',
        name: '汇源100%纸盒苹果汁',
        price: 9.90.toFixed(2),
        stock: '1L',
        num: 1,
        numState: true,
        less: true,
        add: true,
      },
      {
        id: 2,
        image: '/static/images/commodity/p2.jpg',
        name: '屈臣氏苏打水',
        price: 3.50.toFixed(2),
        stock: '330ml',
        num: 2,
        numState: true,
        less: true,
        add: true,
      },
      {
        id: 3,
        image: '/static/images/commodity/p3.jpg',
        name: '可口可乐',
        price: 4.00.toFixed(2),
        stock: '1L',
        num: 3,
        numState: true,
        less: true,
        add: true,
      },
      {
        id: 4,
        image: '/static/images/commodity/p4.jpg',
        name: '宝矿力水特',
        price: 3.00.toFixed(2),
        stock: '600ml',
        num: 4,
        numState: true,
        less: true,
        add: true,
      },
      {
        id: 5,
        image: '/static/images/commodity/p5.jpg',
        name: '屈臣氏蒸馏水',
        price: 8.50.toFixed(2),
        stock: '550ml',
        num: 5,
        numState: true,
        less: true,
        add: true,
      },
      {
        id:6,
        image: '/static/images/commodity/p6.jpg',
        name: '果粒橙',
        price: 12.00.toFixed(2),
        stock: '1L',
        num: 6,
        numState: true,
        less: true,
        add: true,
      }
    ],
  },
  lessClick: function(e) {
    let data = e.target.dataset;
    if (this.data.commodity[data.key].num == 0) {
      return
    }
    let commodityData = this.data.commodity;
    let currentKey = data.key - 1;
    commodityData[currentKey].num = commodityData[currentKey].num - 1;
    commodityData.splice(currentKey, 1, commodityData[currentKey]);
    this.setData({
      commodity: commodityData,
    })
    if (this.data.commodity[currentKey].num == 0) {
      commodityData[currentKey].less = false;
      commodityData[currentKey].numState = false;
      commodityData.splice(currentKey, 1, commodityData[currentKey]);
      this.setData({
        commodity: commodityData
      })
    }
  },
  addClick: function (e) {
    let data = e.target.dataset;
    let commodityData = this.data.commodity;
    let currentKey = data.key - 1;
    commodityData[currentKey].num = commodityData[currentKey].num + 1;
    commodityData[currentKey].less = true;
    commodityData[currentKey].numState = true;
    commodityData.splice(currentKey, 1, commodityData[currentKey]);

    this.setData({
      commodity: commodityData
    })
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
    if (this.data.num == 0) {
      this.setData({
        less: false,
        numState: false,
      })
    }
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