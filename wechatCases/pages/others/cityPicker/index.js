// pages/others/cityPicker/index.js
var app = getApp();
import {
  CityList
} from '../../../utils/pca.js'; //引入城市数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codes: [], //城市ID
    city: '区域', //city名称
    citylist: CityList, //城市数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //选择市
  cityPicker(e) {
    console.log(e)
    let _this = this
    this.setData({
      codes: e.detail.code,
      city: e.detail.value[1]
    })
  },
})