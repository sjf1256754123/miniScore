import {config} from 'config.js';
var Config = new config();

class Base {
    constructor() {

    }

    // 当noRefech为true时，不做未授权重试机制
    request(params, noRefech) {
        var that = this;
        if (!params.method) {
            params.method = 'GET';
        }
        wx.request({
            url: Config.BaseUrl + params.url,
            data: params.data,
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                //'content-type': 'application/json',
                 'token':wx.getStorageSync('token')
            },
            method: params.method,
            dataType: 'json',
            success: function (res) {
                var code = res.statusCode.toString();
                var startChar = code.charAt(0);
                if (startChar == '2') {//请求数据成功
                    params.scallBack && params.scallBack(res.data);
                } else {
                    if (code == '401') {//令牌失效或没有令牌
                        //1,重新颁发令牌
                        //2,重新获取原有数据
                        if (!noRefech) {
                            that._refetch(params);
                        }
                        if (noRefech) {
                            params.ecallBack && params.ecallBack(res.data);
                        }
                    } else {
                        params.ecallBack && params.ecallBack(res.data);
                    }
                }
            },
            fail: function (res) {
                console.log('fail');
            }
        })
    }
    //重试机制
    _refetch(params) {
        var token = new Token();
        token.getTokenFromServer((token) => {
            this.request(params, true);
        });
    }

    /*获得元素上的绑定的值*/
    getDataSet(event, key) {
        return event.currentTarget.dataset[key];
    }
}


export {
    Base
}