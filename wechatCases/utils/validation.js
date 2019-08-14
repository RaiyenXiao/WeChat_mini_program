/**
 * 验证是否是手机号
 * 匹配规则：第一位为1，第二位为3,4,5,7,8，剩余9为为0-9的随机数字
 */
function isPhone(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}
function isEmail(strEmail) {
  //声明邮箱正则
  var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if (myreg.test(strEmail))//对输入的值进行判断
  {
    return false;
  }else{
    return true;
  }
}
//校验身份证
function checkID(ID) {
  if (typeof ID !== 'string') return false;
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
  var d = new Date(birthday);
  var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
  var currentTime = new Date().getTime();
  var time = d.getTime();
  var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  var sum = 0,
    i, residue;

  if (!/^\d{17}(\d|x)$/i.test(ID)) return false;
  if (city[ID.substr(0, 2)] === undefined) return false;
  if (time >= currentTime || birthday !== newBirthday) return false;
  for (i = 0; i < 17; i++) {
    sum += ID.substr(i, 1) * arrInt[i];
  }
  residue = arrCh[sum % 11];
  if (residue !== ID.substr(17, 1)) return false;

  return true;
}

//校验护照
function checkPassport(passport) {
  if (typeof passport !== 'string') return false;
  //var reg = /^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/;
  var reg = /^([a-zA-z0-9]){6,20}$/;
  if (reg.test(passport) === false) {
    return false;
  } else {
    return true;
  }
}

//校验电话
function checkPhone(phone) {
  if (typeof phone !== 'string') return false;
  var phone_reg = /^1[0-9]{10}$/;
  if (phone_reg.test(phone) === false) {
    return false;
  } else {
    return true;
  }
}

function checkNumber(num) {
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

//检验公司码/邀请码
function checkCode(code) {
  var code_reg = /[\W]/;
  if (code_reg.test(code) === false) {
    return false;
  } else {
    return true;
  }
}

//校验姓名 允许字母 中文
function checkName(name) {
  var regEX = /^[a-zA-Z\u4E00-\u9FA5]+$/;
  if (regEX.test(name) === false) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  isPhone: isPhone,
  isEmail: isEmail
}