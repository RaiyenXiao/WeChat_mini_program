// pages/others/Restaurant/index.js
const app = getApp();
var util = require("../../../utils/util.js");
var toast = require('../../../templates/showToast/showToast');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphone: false,
    num: 1,
    isChecked: false,//包厢
    sex: [
      { name: '先生', checked: true },
      { name: '女士', checked: false }
    ],
    max: '100',
    checkDate: '',
    checkTime: '',
    week: '今天',
    timeArr: ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'],
    remark: '',//备注
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var arr = that.data.timeArr
    let checkDate = util.getDate();//默认选择当前日期
    let curTime = util.getTime();//获取当前时间
    let checkTime = that.data.checkTime;
    let week = that.data.week;
    if (curTime < arr[0]) {
      checkTime = arr[0]
    }
    if (curTime >= arr[0] && curTime < arr[arr.length - 1]) {
      for (let i = 0; i < arr.length; i++) {
        if (curTime >= arr[i]) {
          checkTime = arr[i + 1]
        }
      }
    }
    if (curTime >= arr[arr.length - 1]) {
      checkDate = util.getNextDay(checkDate);
      checkTime = arr[0];
      week = "明天"
    }
    that.setData({
      checkDate: checkDate,
      checkTime: checkTime,
      week: week,
      isIphone: app.globalData.isIphone,
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    this.setData({
      num: num
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    num++;
    this.setData({
      num: num
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = parseInt(e.detail.value);
    this.setData({
      num: num
    });
  },
  changeSwitch: function () {
    if (!this.data.isChecked) {
      this.setData({
        isChecked: true,
      });
    } else {
      this.setData({
        isChecked: false,
      });
    }
  },
  remarksText: function (e) {
    var value = (e.detail.value).replace(/(^\s*)/g, "");
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    this.setData({
      currentWordNumber: len, //当前字数  
      remark: value
    })
  },
  restaurantSubmit: function (e) {
    var _this = this;
    let checkDate = _this.data.checkDate
    let checkTime = _this.data.checkTime
    let appointment_time = util.datetoTime(checkDate + ' ' + checkTime)//预定时间
    let person_num = e.detail.value.person_num;//预定人数
    let isChecked = _this.data.isChecked;//包厢
    let need_box = '';
    if (isChecked) {
      need_box = 1 //预定包厢
    } else {
      need_box = 0
    }
    let contact_name = (e.detail.value.contact_name).replace(/\s+/g, '');
    let contact_tel = (e.detail.value.phone).replace(/\s+/g, '');//手机号
    let remark = _this.data.remark //备注
    if (contact_name == '') {
      _this.Toast('请填写入住人')
      return false
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (contact_tel == '') {
      _this.Toast('请填写手机号')
      return false
    } else if (!myreg.test(contact_tel)) {
      _this.Toast('请填写有效的手机号')
      return false
    }
    if (remark == "") {
      _this.Toast('请备注您的需求')
      return false
    }
  },
  Toast: function(text) {
    toast.showToast(this, {
      toastStyle: 'toast',
      title: text,
      duration: 1500,
      mask: false
    });
  },
  goReserve:function(){
    wx.navigateTo({
        url: '/pages/home/Restaurant/restaurant-time/index?checkDate='+this.data.checkDate + '&checkTime=' + this.data.checkTime + '&week=' + this.data.week,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

})