// pages/others/calendarHotel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInDate:'',
    checkOutDate:'',
    stayDays:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  selectTime:function(){
    wx.navigateTo({
      url: '../calendarHotel/calendar/index'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];
    if (currPage.data.stayDays>0) {
      that.setData({
        checkInDate: currPage.data.checkInDate,
        checkOutDate:currPage.data.checkOutDate,
        stayDays:currPage.data.stayDays
      })
    }
  },
})