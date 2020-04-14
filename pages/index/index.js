

wx - Page({

  /**
   * 页面的初始数据
   */
  data: {
    dp: [],
    meishi: []
  },
  data_dianpu: { //这个是传值必要的一个新建对象
    query: '',
    cid: '',
    pagenum: 1
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    console.log(options)
    this.data_dianpu.cid = options.cid //options能拿到父节点过来的值
    let that = this;
    // wx.request({
    //   url: 'http://192.168.3.5:7001/datadianpu',
    //   success: (res) => {
    //     console.log(res.data.result)
    //     that.setData({
    //       dp: res.data.result
    //     })
    //   }

    
    // })
    wx.request({
      url: 'http://192.168.2.100:7001/load',
      success: (res) => {
        console.log(res.data.result)
        console.log(res.data.resultmeishi)
        that.setData({
          dp: res.data.result,
          meishi:res.data.resultmeishi
        })
      }
    })


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