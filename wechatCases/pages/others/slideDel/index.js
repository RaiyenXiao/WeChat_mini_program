// pages/others/slideDel/index.js
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
  delItem () {
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？'
    })
  },
  
})