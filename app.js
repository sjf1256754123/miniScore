//app.js
App({
  onLaunch: function () {
    wx.hideTabBar();
    var that = this;
      // 判断用户是否授权登录
    //   wx.checkSession({
    //     success:function(res){
    //       wx.switchTab({
    //         url: '/pages/gaoqi/gaoqi',
    //       })
    //     },
    //     fail:function(res){
    //          // 登录
    // wx.login({
    //   success: res => {
    //     // console.log(res)
       
    //             wx.request({
    //                 // 自行补上自己的 APPID 和 SECRET
    //                 url: this.globalData.ceshiUrl+'api/index/getkey',
    //                 method: 'get',
    //                 dataType: 'json',
    //                 data:{code:res.code},
    //                 header: {
    //                   'Content-Type': 'application/json'
    //                 },
    //                 success: res => {
    //                     // 获取到用户的 openid
    //                     // console.log("用户的openid:" + res.data.openid);
    //                     this.globalData.openid=res.data.openid;
    //                 }
    //             });
    //             // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //           }
    //         })
    //      }
    //   });

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
  },
  globalData: {
    userInfo: null,
    ceshiUrl:'https://xzgaoqi.zhongzhiwang.com/',
    openid:''
  }
})