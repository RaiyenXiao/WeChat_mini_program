// pages/others/toast/index.js

var toast = require("../../../templates/showToast/showToast");
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  bindToastOpen1: function () {
    toast.showToast(this, {
      toastStyle: 'toast',
      title: '你输入的码有误,请重新输入',
      duration: 1500,
      mask:false
    });
  },
  bindToastOpen2: function () {
    toast.showToast(this, {
      toastStyle: 'toast2',
      title: '提交成功',
      introduce: '上传资料的审核结果会在24小时内反馈,请注意查看公众号-我的消息中的反馈信息',
      mask: true,
      isSure: true,
      sureText: '好的'
    });
  },
  bindToastOpen3: function () {
    toast.showToast(this, {
      toastStyle: 'toast3',
      title: '宣传视频',
      introduce: '为了更好的增加用户体验 目前该功能限时免费体验 ',
      mask: true,
      isSure: true,
      sureText: '限时免费体验',
      isClose: true,
      closeText: '取消'
    });
  },
  bindToastOpen4: function () {
    toast.showToast(this, {
      toastStyle: 'toast4',
      title: 'Unattended tips',
      introduce: 'After opening this function, visitors can arrive at your company without application. Please open cautiously.',
      mask: true,
      isSure: true,
      sureText: 'Still opening',
      isClose: true,
      closeText: 'Cancel'
    });
  },
  bindToastOpen5: function () {
    toast.showToast(this, {
      toastStyle: 'toast5',
      title: '您还没有人脸信息，无法开启员工取卡，请前往录入。',
      mask: true,
      isSure: true,
      sureText: '前往录入',
      isClose: true,
      closeText: '取消'
    });
  },
  //取消关闭弹层
  bindToastClose: function() {
    toast.hideToast();
  },

  //确定关闭弹层
  bindToastSure: function() {
    toast.hideToast(this, {
      // cb: function () {
      //   wx.navigateTo({
      //     url: '',
      //   })
      // }
    });
  }
});
