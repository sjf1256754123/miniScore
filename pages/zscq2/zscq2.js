// pages/zscq/zscq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(wx.getStorageSync('jsxjx'))
    // console.log(wx.getStorageSync('zycphxzy'))
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
    //Ⅰ类知识产权 自主研发验证
    if(e.detail.value.zzyf1==''){
      wx.showToast({
        title: "Ⅰ类知识产权自主研发不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
    }else{
      wx.setStorageSync('zzyf1', e.detail.value.zzyf1)
    }
    //Ⅰ类知识产权 转让、受让、并购验证
    if(e.detail.value.zhuanrang1==''){
      wx.showToast({
        title: "Ⅰ类知识产权转让、受让、并购不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
    }else{
      wx.setStorageSync('zhuanrang1', e.detail.value.zhuanrang1)
    } 
    //II类知识产权 自主研发验证
    if(e.detail.value.zzyf2==''){
      wx.showToast({
        title: "Ⅱ类知识产权自主研发不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
    }else{
      wx.setStorageSync('zzyf2', e.detail.value.zzyf2)
    }
    //II类知识产权 转让、受让、并购验证
    if(e.detail.value.zhuanrang2==''){
      wx.showToast({
        title: "Ⅱ类知识产权转让、受让、并购不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
    }else{
      wx.setStorageSync('zhuanrang2', e.detail.value.zhuanrang2)
    } 

   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/zscq3/zscq3'
  });

  },
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)

    const jsxjxitems = this.data.jsxjxitems
    for (let i = 0, len = jsxjxitems.length; i < len; ++i) {
      jsxjxitems[i].checked = jsxjxitems[i].value === e.detail.value
    }
    this.setData({
      jsxjxitems
    })
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
  radioChange2(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)

    const cygjbzitems = this.data.cygjbzitems
    for (let i = 0, len = cygjbzitems.length; i < len; ++i) {
      cygjbzitems[i].checked = cygjbzitems[i].value === e.detail.value
    }
    this.setData({
      cygjbzitems
    })
  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/zscq1/zscq1'
    })
  }
})