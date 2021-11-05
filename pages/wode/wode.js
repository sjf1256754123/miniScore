// pages/wode/wode.js
var app = getApp()
var url = app.globalData.ceshiUrl + 'api/index/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIdx: 1,
    menuitems: [],
    userInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      // 获取缓存中的用户信息
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      });
      const db = wx.cloud.database()
      db.collection('score').where({
        _openid:wx.getStorageSync('sercetUserInfo').openid
      }).get().then(res => {
      console.log(111)
      console.log(res.data)
        this.setData({
          menuitems: res.data
        });
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getlistss: function () {
    var that = this
    wx.login({
      success: function (res) { //登录成功
        //console.log(res)
        if (res.code) {
          wx.request({
            // 自行补上自己的 APPID 和 SECRET
            url: app.globalData.ceshiUrl + 'api/index/getkey',
            method: 'get',
            dataType: 'json',
            data: {
              code: res.code
            },
            header: {
              'Content-Type': 'application/json'
            },
            success: res => {
              // 获取到用户的 openid
              //  console.log("用户的openid:" + res.data.openid);
              wx.setStorageSync('openid', res.data.openid);
              var openid = wx.getStorageSync('openid');
              console.log("123:" + openid);
              if (openid != "") {
                // console.log('456')
                wx.request({
                  url: app.globalData.ceshiUrl + 'api/index/getlist',
                  method: 'post',
                  dataType: 'json',
                  data: {
                    openid: openid
                  },
                  header: {
                    'Content-Type': 'application/json'
                  },
                  success: res => {
                    that.setData({
                      menuitems: res.data
                    });
                  }
                })
              } else {
                console.log(123)
              }
            }
          });
          wx.getUserInfo({ //getUserInfo流程
            success: function (data) { //getUserInfo获取用户信息成功
              //console.log(data.userInfo)
              that.setData({
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    });
  }
})