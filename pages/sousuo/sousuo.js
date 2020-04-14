// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   sousuozhi:[],
  
   ssearch:[]
  },
  Timeid:-1,
  handleinput(e) {
   
    this.data.sousuozhi = e.detail.value

  },
  sousuo(e){
    console.log(this.data.sousuozhi)
    let sousuovalue = this.data.sousuozhi
    console.log(sousuovalue)
    let that =this
    wx.request({
      url: 'http://192.168.2.100:7001/Search?msname=' + sousuovalue, 
      data: sousuovalue,
      success: (res) => {
        console.log(res.data.result)
        that.setData({
          ssearch: res.data.result
        })
      }
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