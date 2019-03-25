Component({
  properties: {
    // 开关状态
    isChecked: {
      type: Boolean,
      value: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },

  methods: {
    changeSwitch: function() {
      let { isChecked, disabled } = this.data;//properties和data指向的是同一个js对象。properties里的会覆盖data里的
      if (disabled) return;
      var _this=this
      if (!isChecked) {
        wx.showModal({
          content: "确定要开启开关吗",
          success: function(res) {
            if (res.confirm) {
              _this.setData({
                isChecked:true
              })
            } else if (res.cancel) {
              _this.setData({
                isChecked:false
              })
            }
          }
        });
      } else {
        _this.setData({
          isChecked:false
        })
      }
      this.triggerEvent("change", {isChecked:this.data.isChecked});
    }
  }
});
