import {config} from 'config.js';
var Config = new config();

class Token {
    constructor(){
        this.verifyUrl = Config.BaseUrl + 'login/validate';
        this.tokenUrl = Config.BaseUrl + 'login/index';
    }

    verify(){
        var token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
    
        }else {
            this._veirfyFromServer(token);
        }
    }

    // 携带令牌去服务器校验令牌
    _veirfyFromServer(token) {
        var that = this;
        wx.request({
            url: that.verifyUrl,
            method: 'GET',
            data: {
                token: token
            },
            success: function (res) {          
                var valid = res.data.isValid;
                if (!valid) {
                    that.getTokenFromServer();
                }
            }
        })
    }

    //从服务器获取token
    getTokenFromServer(callBack) {
        var that = this;
        wx.login({
            success: function (res) {
                console.log(res)
                wx.request({
                    url: that.tokenUrl,
                    method: 'GET',
                    data: {
                        code: res.code
                    },
                    success: function (res) {
                        console.log(res)
                        wx.setStorageSync('token', res.data.token);
                        callBack && callBack(res.data.token);
                    }
                })
            }
        })
    }
}

export {Token};