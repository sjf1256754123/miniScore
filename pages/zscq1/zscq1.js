// pages/zscq/zscq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zycpitems: [
      {value: '7.5', name: '强',msg:'知识产权授权I类在5年内、II类在3年内；权利要求项（平均6条）对主要产品技术完全覆盖；企业拥有完全所有权。',checked: 'true'},
      {value: '5.5', name: '较强',msg:'知识产权授权I类在8年内、II类在5年内；权利要求项（平均4条）对主要产品技术大部分覆盖；企业与他人共有所有权。'},
      {value: '3.5', name: '一般',msg:'知识产权I类在15年以上、II类在5年以上；权利要求项（平均1条）对主要产品技术小部分覆盖。'},
      {value: '1.5', name: '较弱',msg:'知识产权I类在15年以上、II类在8年以上；权利要求项（平均1条）对主要产品技术小部分覆盖。'},
      {value: '0', name: '弱',msg:'权利要求项与主要产品技术完全无关。'},
    ]
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
    if(e.detail.value.zycphxzy==null){
      wx.showToast({
        title: "主要产品（服务）在技术上发挥核心支持作用不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
   }else{
     wx.setStorageSync('zycphxzy', e.detail.value.zycphxzy)
   }
  
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/zscq2/zscq2'
  });

  },
  radioChange1(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)

    const zycpitems = this.data.zycpitems
    for (let i = 0, len = zycpitems.length; i < len; ++i) {
      zycpitems[i].checked = zycpitems[i].value === e.detail.value
    }
    this.setData({
      zycpitems
    })
  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/zscq/zscq'
    })
  }
})