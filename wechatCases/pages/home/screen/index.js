// pages/home/screen/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    //获取微信屏幕亮度
    var _this = this
    wx.getScreenBrightness({
      success: function (res) {
        _this.data.screenBrightness = res.value
      }
    })
    if (wx.setScreenBrightness) {
      wx.setScreenBrightness({
        value: 0.8
      })
    }
    if (wx.setKeepScreenOn) {
      wx.setKeepScreenOn({
        keepScreenOn: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var _this = this
    if (wx.setScreenBrightness) {
      wx.setScreenBrightness({
        value: _this.data.screenBrightness
      })
    }
    if (wx.setKeepScreenOn) {
      wx.setKeepScreenOn({
        keepScreenOn: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var _this = this
    if (wx.setScreenBrightness) {
      wx.setScreenBrightness({
        value: _this.data.screenBrightness
      })
    }
    if (wx.setKeepScreenOn) {
      wx.setKeepScreenOn({
        keepScreenOn: false
      })
    }
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