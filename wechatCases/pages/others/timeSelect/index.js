// pages/others/timeSelect/index.js
var util = require("../../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeArr:[
      {id:0,time_slot:"00:00 — 01:00"},
      {id:2,time_slot:"02:00 — 03:00"},
      {id:3,time_slot:"03:00 — 04:00"},
      {id:4,time_slot:"04:00 — 05:00"},
      {id:5,time_slot:"05:00 — 06:00"},
      {id:6,time_slot:"06:00 — 07:00"},
      {id:7,time_slot:"07:00 — 08:00"},
      {id:8,time_slot:"08:00 — 09:00"},
      {id:9,time_slot:"09:00 — 10:00"},
      {id:10,time_slot:"10:00 — 11:00"},
      {id:11,time_slot:"11:00 — 12:00"},
      {id:12,time_slot:"12:00 — 13:00"},
      {id:13,time_slot:"13:00 — 14:00"},
      {id:14,time_slot:"14:00 — 15:00"},
      {id:15,time_slot:"15:00 — 16:00"},
      {id:16,time_slot:"16:00 — 17:00"},
      {id:17,time_slot:"17:00 — 18:00"},
      {id:18,time_slot:"18:00 — 19:00"},
      {id:19,time_slot:"19:00 — 20:00"},
      {id:20,time_slot:"20:00 — 21:00"},
      {id:21,time_slot:"21:00 — 22:00"},
      {id:22,time_slot:"22:00 — 23:00"},
      {id:23,time_slot:"23:00 — 00:00"},
    ],
    show:true,
    selectData:'请选择到店时间',
    checkInDate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let checkInDate =  util.getDate();
    this.setData({
      checkInDate:checkInDate,//这是选择的入住时间 这里没有选择默认为了当日
    })
  },
  selectTime: function(e) {
    var time = parseInt(new Date().getHours());    //返回小时数
    let n = e.detail.value
    this.setData({
      index: n,
      time_slot: this.data.timeArr[n].time_slot
    })
  },
  onSelect(e) { 
    console.log(e)
    this.setData({
      selectData: e.detail[0],
      selectTimeId:e.detail[1]
    })
  },
})