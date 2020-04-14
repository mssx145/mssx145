// pages/dianpu/dianpu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain: false,
    msimg: [],
    datashoucang:[]

  },
  //商品数组
  gouwuche: {},
  

  QueryParams: { //这个是传值必要的一个新建对象
    query: '',
    cid: '',
    pagenum: 1
  },

  


  hanldegouwuche(e) {
    console.log(e)
   let query = e.currentTarget.dataset['index'];
    console.log(query)
    console.log(321)
    var that = this
    console.log(that.data1)
    var arr=that.data1.result
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].msid==query){
        console.log(arr[i])
        var gouwuche=arr[i]
      }
    }
    wx.request({
      url: 'http://192.168.2.100:7001/addgwc',
      data: gouwuche,
      success: (res) => {
        console.log(1111222222)
        console.log(gouwuche)
        that.setData({
          msimg: res.data.result
        })
      }
    })
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    })
  },
  setDisabled(e) { //这个函数是点击收藏按钮的，不用管
   var that=this
    let shoucang = that.data.msimg[0].did
    console.log(that.data.msimg[0],666)
    console.log(shoucang)
    var arrshoucang = that.data.msimg[0]
    console.log(arrshoucang)
    this.setData({
      plain: !that.data.plain,
    })
    if (that.data.plain == true) {
      wx.request({
        url: 'http://192.168.2.100:7001/addshoucang',
        data: arrshoucang,
        success: (res) => {
          // console.log(res.data)
          that.setData({
            datashoucang: res.data.result
          })
        }
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000
      })
    } else {
      wx.request({
        url: 'http://192.168.2.100:7001/deltshoucang',
        data: arrshoucang,
        success: (res) => {
          // console.log(res.data)
          that.setData({
            datashoucang: res.data.result
          })
        }
      })
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
  onLoad: function(options) {
    console.log(options)
    this.QueryParams.cid = options.cid //options能拿到父节点过来的值
    console.log(options)
    let that = this;
    var data1 = []
    wx.request({
      url: 'http://192.168.2.100:7001/jzimg',
      data: this.QueryParams,
      success: (res) => {
        that.data1 = res.data
        console.log(res.data)
        console.log(res.data.result[1].dianpuming)
        that.setData({
          msimg: res.data.result

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