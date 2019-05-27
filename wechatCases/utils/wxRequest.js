const Promise = require('es6-promise.min.js');
function wxPromise(method, url, data) {
    //返回一个Promise对象
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: method,// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            data: data,
            //在header中统一封装报文头，这样不用每个接口都写一样的报文头定义的代码
            header: {
                "Content-Type": "application/json"
            },
            success: function (res) {
                setTimeout(function () {
                    wx.hideLoading();
                }, 100);
                //这里可以根据自己项目服务端定义的正确的返回码来进行，接口请求成功后的处理，当然也可以在这里进行报文加解密的统一处理
                if (res.data.rtnCode == "000000") {
                    resolve(res);
                } else {
                    //如果出现异常则弹出dialog
                    wx.showModal({
                        title: '提示',
                        content: res.data.errCode + '系统异常',
                        confirmColor: '#118EDE',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                            }
                        }
                    });
                }
            },
            fail: function (res) {
                setTimeout(function () {
                    wx.hideLoading();
                }, 100);
                wx.showToast({
                    title: '服务器暂时无法连接',
                    icon: 'loading',
                    duration: 2000
                })
                reject(res);
            }
        });
    });
}


function getRequest(url, data) {
    return wxPromise("GET", url, data);
}

function postRequest(url, data) {
    return wxPromise("POST", url, data);
}

module.exports = {
    wxPromise: wxPromise,
    postRequest: postRequest,
    getRequest: getRequest,
}
//用法
// const wxRequest = require('wxRequest.js');
// const config = require("config.js");

// function getBusInfoPromise(busName, stopType){
//   var getBusInfoUrl = config.url.getBusInfo;
//   var data = { "busName": busName, "stopType": stopType }
//   return wxRequest.postRequest(getBusInfoUrl, data);
// }

// function getBusStopListPromise(sid, stopType) {
//   var getStopListUrl = config.url.getBusStopList;
//   var data = { "sid": sid, "stopType": stopType }
//   return wxRequest.postRequest( getStopListUrl, data);
// };