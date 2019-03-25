Page({
  data: {
    list: [
      // {
      //   id: "autoInput",
      //   name: "自动完成文本框",
      //   open: false,
      //   pages: ["autoInput"]
      // },
      // {
      //   id: "form",
      //   name: "表单",
      //   open: false,
      //   pages: ["form", "list"]
      // },
      {
        id: "toast",
        name: "操作提示",
        open: false,
        pages: ["toast"]
      },
      {
        id: "calendar",
        name: "日历",
        open: false,
        pages: ["calendarHotel","calendarModel"]
      },
      {
        id: "Switch",
        name: "Switch开关",
        open: false,
        pages: ["switch"]
      },
      {
        id: "Slider",
        name: "滑动删除",
        open: false,
        pages: ["slideDel"]
      },
    ]
  },
  kindToggle: function(e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
});
