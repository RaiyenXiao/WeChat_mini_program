//app.js
// 环境变量配置
const env = 'test' // dev, test, prod (开发、测试、生产环境) 
const setting = require('config/' + env + '.js')
/**
 * Fundebug 打印日志
 * 其它页面引用  app.globalData.fundebug.notify("TEST", "Hello, Fundebug!");
 * 抛出的错误对象   app.globalData.fundebug.notifyError(new Error("TEST"));
 */
// var fundebug = require('utils/fundebug.1.0.0.min.js');
// fundebug.init({
//   apikey: setting.fundebug.apikey,
//   silent: false
// })
App({
  globalData: {
    userInfo: null,
    //fundebug: fundebug,
    open_id_type: 1,
    isIphoneX: false,
    isIphone: false,
    //WEB_VIEW_URL: setting.api.WEB_VIEW_URL,
  },
  onLaunch: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    /**  获取手机信息 */
    var that = this;
    wx.getSystemInfo({
      success(res) {
        wx.setStorage({
          key: 'sysinfo',
          data: res,
        })
        if (res.platform === 'ios') {
          that.globalData.isIphone = true
        }
        if (res.model.search('iPhone X') != -1) {
          that.globalData.isIphoneX = true
        }
      }
    })
  },
})