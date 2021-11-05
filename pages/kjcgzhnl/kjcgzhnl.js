// pages/kjcgzhnl/kjcgzhnl.js
//获取应用实例
const app = getApp()
var url = app.globalData.ceshiUrl+'api/index/';
var Tosave = function(data1='',data2='') {
  // console.log(url)
  var that = this
  //创建一个dialog提示
  wx.showToast({
    title: '正在提交...',
    icon: 'loading',
    duration: 5000
  });
  wx.request({
    url: url + 'tosave',
    method: 'post',
    data: {
      data1:data1,
      data2:data2
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {
      wx.hideToast()
      // console.log('服务器返回' + res.data)
      app.globalData.userInfo = res.data
    },
    fail: function() {
      wx.showToast({
        title: '网络错误！',
        duration: 2000
      })
    },
    complete: function() {
 
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      kjcgzhitems: [
        {value: '25', name: 'A档：转化能力强，≥5项；',checked: 'true'},
        {value: '19', name: 'B档：转化能力较强，≥4项；'},
        {value: '13', name: 'C档：转化能力一般，≥3项；'},
        {value: '7', name: 'D档：转化能力较弱，≥2项；'},
        {value: '1', name: 'E档：转化能力弱，≥1项；'},
        {value: '0', name: 'F档：转化能力无，0项；'},
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('jsxjx'))
     console.log(wx.getStorageSync('zycphxzy'))
     console.log(wx.getStorageSync('zzyf1'))
     console.log(wx.getStorageSync('zzyf2'))
     console.log(wx.getStorageSync('zhuanrang1'))
     console.log(wx.getStorageSync('zhuanrang2'))
     console.log(wx.getStorageSync('cygjbz'))
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
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)

    const kjcgzhitems = this.data.kjcgzhitems
    for (let i = 0, len = kjcgzhitems.length; i < len; ++i) {
      kjcgzhitems[i].checked = kjcgzhitems[i].value === e.detail.value
    }
    this.setData({
      kjcgzhitems
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if(e.detail.value.kjcgzhnl==null){
        wx.showToast({
          title: "科技成果转化能力不能为空", 
          icon: "none",
          duration: 3000,
      });
      return false;
    }else{
      wx.setStorageSync('kjcgzhnl', e.detail.value.kjcgzhnl)
    }
   //条件都请填写开始请求自己的服务器
  //  Tosave(arr1,arr2);
   wx.redirectTo({
    url: '/pages/yjzzkfgl/yjzzkfgl'
  });

  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/zscq3/zscq3'
    })
  }
})