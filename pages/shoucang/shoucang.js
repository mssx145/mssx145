// pages/shoucang/shoucang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datashoucang: []
  },
  handledele(e){
    console.log(e)
    let query = e.currentTarget.dataset['index'];
    console.log(query)
    var that = this
    let arr1 = this.data.datashoucang
    wx.showModal({
      title: '提示',
      content: '是否删除订单',
      success(res) {
        if (res.confirm) {
          for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].did == query) {
              var data11 = arr1[i]
              wx.request({
                url: 'http://192.168.2.100:7001/deleCollection',
                data: data11,
                success: (res) => {
                  that.setData({
                    datashoucang: res.data.result
                  })
                }
              })
            }
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    console.log(666)
   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this
    wx.request({
      url: 'http://192.168.2.100:7001/Collection',
      data: this.QueryParams,
      success: (res) => {
        console.log(res.data)
        that.setData({
          datashoucang: res.data.result
        })
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})