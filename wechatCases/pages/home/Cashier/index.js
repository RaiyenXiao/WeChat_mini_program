// pages/Cashier/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked:false,
    bankAccount: "", //银行账号
    bankName: "", //银行名称
    companyAddress: "", //单位地址
    errMsg: "",
    taxNumber: "", //抬头税号
    telephone: "", //手机号码
    title: "", //抬头名称
    type: 0, //0 单位 1 个人
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 申请发票录入
   */
  chooseInvoece: function() {
    var that = this
    that.checkAuth(that, function() {
      that.invoeStatus()
    })
  },
  checkAuth(_this, callback = function() {}) {
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.invoiceTitle']) {
          callback()
        }else if (res.authSetting['scope.invoiceTitle'] === false) {
          wx.openSetting({
            success: function(data) {
              if (data.authSetting["scope.invoiceTitle"] === true) {
                wx.showToast({
                  title: '授权成功',
                  icon: 'success',
                  duration: 1000
                })
                _this.chooseInvoece();
              } else {
                wx.showToast({
                  title: '发票抬头授权失败',
                  icon: 'none',
                  duration: 3000
                })
              }
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.invoiceTitle',
            success() {
              _this.chooseInvoece();
            }
          })
        }
      }
    })
  },
  invoeStatus() {
    let _that = this;
    if (!_that.data.isChecked) {
      wx.chooseInvoiceTitle({
        success(res) {
          console.log('需要发票res:', res);
          _that.setData({
            title: res.title,
            taxNumber: res.taxNumber,
            bankAccount: res.bankAccount,
            bankName: res.bankName,
            type: parseInt(res.type),
            telephone: res.telephone,
            companyAddress: res.companyAddress,
            isChecked: true,
            //need_invoice: 1
          })
        },
        fail: res => {
          console.log('res:fail', res);
        }
      })
    } else {
      _that.setData({
        title: '',
        taxNumber: '',
        bankAccount: '',
        bankName: '',
        type: '',
        telephone: '',
        companyAddress: '',
        isChecked: false,
        //need_invoice: 0
      })
    }

  },
})