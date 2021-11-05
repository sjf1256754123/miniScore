// pages/zscq/zscq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cygjbztems: [
      {value: '1.5', name: '是',checked: 'true'},
      {value: '0', name: '否'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  console.log(wx.getStorageSync('jsxjx'))
    //  console.log(wx.getStorageSync('zycphxzy'))
    //  console.log(wx.getStorageSync('zzyf1'))
    //  console.log(wx.getStorageSync('zzyf2'))
    //  console.log(wx.getStorageSync('zhuanrang1'))
    //  console.log(wx.getStorageSync('zhuanrang2'))
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
  formSubmit(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if(e.detail.value.cygjbz==null){
      wx.showToast({
        title: "企业参与编制国家标准、行业标准、检测方法、技术规范的情况不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
   }else{
     wx.setStorageSync('cygjbz', e.detail.value.cygjbz)
   }

   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/kjcgzhnl/kjcgzhnl'
  });0
  },
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)

    const cygjbztems = this.data.cygjbztems
    for (let i = 0, len = cygjbztems.length; i < len; ++i) {
      cygjbztems[i].checked = cygjbztems[i].value === e.detail.value
    }
    this.setData({
      cygjbztems
    })
  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/zscq2/zscq2'
    })
  }
})