// pages/login/login.js
Page({

  login(e) {
    console.log(e);
    const { userInfo } = e.detail;
    console.log(e.detail)
    wx.setStorageSync('userInfo', e.detail.userInfo);
    console.log(wx.getStorageSync('userInfo'))
    wx.navigateBack({
      detail:1
    })
    
  },
 
 
  
 

})