const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getDate() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  var day = myDate.getDate();
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  var newDay = year + "-" + month + "-" + day;
  return newDay;
}

function getTime() {
  var myDate = new Date();
  var hour = myDate.getHours();
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  var minute = myDate.getMinutes();
  if (minute >= 0 && minute <= 9) {
    minute = "0" + minute;
  }
  return hour + ":" + minute;
}
/*获取下一天日期*/
function getNextDay(d) {
  d = new Date(d);
  d = +d + 1000 * 60 * 60 * 24;
  d = new Date(d);
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var d = d.getDate();
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  return y + "-" + m + "-" + d;
}
// 2018-09-11 11:30 转化时间戳 1542369600
function datetoTime(strtime) {
  var date = new Date(strtime.replace(/-/g, '/')).getTime();
  return date / 1000;
}
module.exports = {
  formatTime: formatTime,
  getDate : getDate,
  getTime : getTime,
  getNextDay:getNextDay,
  datetoTime:datetoTime
}
