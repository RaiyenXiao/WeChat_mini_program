// components/marquee/marquee.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    size: 12,
    orientation: 'left',
    interval: 20
  },
  /**
   * 组件的方法列表
   */
  ready: function() {
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    that.setData({
      length: length,
      windowWidth: windowWidth,
    });
    that.runMarquee();// 水平一行字滚动完了再按照原来的方向滚动
  },
  methods: {
    runMarquee: function() {
      var that = this;
      var interval = setInterval(function () {
        //文字一直移动到末端
        if (-that.data.marqueeDistance < that.data.length) {
          that.setData({
            marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
          });
        } else {
          clearInterval(interval);
          that.setData({
            marqueeDistance: that.data.windowWidth
          });
          that.runMarquee();
        }
      }, that.data.interval);
    }
  },
})