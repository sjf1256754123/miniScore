// pages/zscq/zscq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jsxjxitems: [
      // {value: '8', name: '很高',msg:'说明：企业成果近三年有获得省级科技进步奖、专利金奖、专利银奖、专利优秀奖、知识产权维权获胜。',checked: 'true'}, 
      {value: '7.5', name: '高',msg:'说明：I 类知识产权首次使用（授权3年内）；对应产品质量国际先进；与主要产品所属技术领域高度吻合。'},
      {value: '5.5', name: '较高',msg:'说明：I 类知识产权第二次使用（授权8年内）或 II 类知识产权5个及以上（授权3年内）；对应产品质量国内领先；与主要产品所属技术领域吻合。'},
      {value: '3.5', name: '一般',msg:'说明：I 类知识产权第三次使用（授权15年内）或 II 类知识产权3个以上（授权3年以上）；对应产品质量国内先进；与主要产品所属技术领域基本吻合。'},
      {value: '1.5', name: '较低',msg:'说明：无 I 类知识产权；II 类知识产权授权均在5年以上。'},
      {value: '0', name: '弱',msg:'说明：无 I 类知识产权；II 类知识产权授权均在8年以上。'},
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if(e.detail.value.jsxjx==null){
        wx.showToast({
          title: "技术先进程度不能为空", 
          icon: "none",
          duration: 3000,
      });
      return false;
    }else{
      wx.setStorageSync('jsxjx', e.detail.value.jsxjx);
    }  
  
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.navigateTo({
    url: '/pages/zscq1/zscq1'
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
  PrevTamp:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/jbtj/jbtj'
    })
  }
})