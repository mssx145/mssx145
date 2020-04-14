// pages/dianpuxiangqing/dianpuxiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain: false,
    dianpuxinxi:[]
  },
  QueryParams: {//这个是传值必要的一个新建对象
    query: '',
    cid: '',
    pagenum: 1
  },
  setDisabled() {
    console.log(this.data)
    // if (this.data.plain==false){
    this.setData({
      plain: !this.data.plain

    })
    if (this.data.plain == true) {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000
      })
    } else {
      wx.showToast({
        title: '取消',
        icon: 'success',
        duration: 1000
      })
    }
    // }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.QueryParams.cid = options.cid//options能拿到父节点过来的值
    console.log(options)
    let that = this;
    wx.request({
      url: 'http://192.168.2.100:7001/dpxinxi', data: this.QueryParams,
      success: (res) => {
        console.log(res.data)
        console.log(1111111111111)
        console.log(res.data.result[0].dimg)
        
        that.setData({
          dianpuxinxi: res.data.result,
          dimg: res.data.result[0].dimg,
          dimg2: res.data.result[0].dimg2,
          dimg3: res.data.result[0].dimg3,
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