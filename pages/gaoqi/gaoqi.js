// pages/gaoqi/gaoqi.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
  



    wx.cloud.callFunction({
      name: 'getUserInfo',
      success: res => {
        wx.setStorageSync('sercetUserInfo', res.result)
      },
      fail: res => {
        console.log(res)
      },
    })
    wx.hideTabBar();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile(e) {
    let that = this
    if (wx.getStorageSync('hasUserInfo')) {
      wx.redirectTo({
        url: '/pages/jbtj/jbtj'
      });
    } else {
      wx.getUserProfile({
        desc: '展示用户信息',
        success: (res) => {
          // 缓存用户信息
          wx.setStorageSync('userInfo', res.userInfo)
          wx.setStorageSync('hasUserInfo', true)
          wx.redirectTo({
            url: '/pages/jbtj/jbtj'
          });
        },
        fail: (res) => {
          wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            showCancel: false,
            confirmText: '返回授权',
            success: function (res) {
              if (res.confirm) {
                that.getUserProfile()
              }
            }
          })
        },
      })
    }
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
  NextTamp: function (e) {}
})