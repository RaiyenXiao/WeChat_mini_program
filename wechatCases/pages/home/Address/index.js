// pages/home/Address/index.js
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
  getLocation() {
    var that = this
    that.checkLocation(that,function(){
      wx.chooseLocation({
        success: function(res) {
         console.log(res)
         var latitude = res.latitude
         var longitude = res.longitude;
         that.setData({
          jingwei: "经纬度：" + longitude + ", " + latitude,
          address: "  地址：" + res.address,
          name: "  地名：" + res.name
         })
        }
    });
    
    });
  },
  //校验位置权限是否打开
  checkLocation(_this, callback = function() {}) {
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.userLocation']) {
          callback()
        }else if (res.authSetting['scope.userLocation'] === false) {
          wx.openSetting({
            success: function(data) {
              if (data.authSetting["scope.userLocation"] === true) {
                wx.showToast({
                  title: '授权成功',
                  icon: 'success',
                  duration: 1000
                })
                _this.getLocation();
              } else {
                wx.showToast({
                  title: '微信信息授权失败',
                  icon: 'none',
                  duration: 3000
                })
              }
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              _this.getLocation();
            }
          })
        }
      }
    })
  },

})