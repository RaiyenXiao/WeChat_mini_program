// pages/others/switch/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isChecked: false,
    status: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  SwitchChange: function(e) {
    var _this= this
    if (!_this.data.isChecked) {
      wx.showModal({
        content: '开启开关吗',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            _this.setData({
              isChecked: true,
            });
          } else if (res.cancel) {
            console.log('用户点击取消')
            _this.setData({
              isChecked: false,
            });
          }
        }
      })
    } else {
      _this.setData({
        isChecked: false,
      });
    }
  },
  switchChange (e) {
    console.log(e)
    this.setData({ isChecked: e.detail.isChecked })
  }
});
