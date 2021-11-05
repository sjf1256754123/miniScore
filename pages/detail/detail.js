// pages/detail/detail.js
const app = getApp();
var url = app.globalData.ceshiUrl+'api/index/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:'',
  zf:0,
  zscq:0,
  kjcgzhnl:0,
  yjkfnl:0,
  qyczx:0,
  cptime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options.id)
   this.setData({
     id:options.id
   });
   var that = this
   wx.request({
    url: url + 'detail',
    method: 'post',
    dataType: 'json',
    data: {
      id:that.data.id
    },
    success:function(res){
    console.log(res.data.min_zf)
    that.setData({
      zf:res.data.min_zf+'---'+res.data.max_zf,
      zscq:res.data.min_zscq+'---'+res.data.max_zscq,
      kjcgzhnl:res.data.min_kjcgzhnl+'---'+res.data.max_kjcgzhnl,
      yjkfnl:res.data.min_yjkfnl+'---'+res.data.max_yjkfnl,
      qyczx:res.data.min_qyczx+'---'+res.data.max_qyczx,
      cptime:res.data.add_time
    });
    }
   })
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
  NextTamp:function(){
    wx.reLaunch({
      url: '/pages/gaoqi/gaoqi',
    })
  }
})