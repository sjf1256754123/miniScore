// pages/yjzzkfgl/yjzzkfgl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: '1', name:'制定了研发项目组织管理制度文件',checked: 'true'},
      {value: '1', name:'制定了完整的一套研发项目立项、验收文件'},
      {value: '1', name:'制定了研发投入核算体系制度文件'},
      {value: '1', name:'有研发投入核算阶段性证明材料'},
      {value: '2', name: '有近三年研发费用辅助账和汇总表'},
      {value: '1', name: '制定了内部科学技术研究开发机构成立红头文件'},
      {value: '0', name: '无'},
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
     console.log(wx.getStorageSync('kjcgzhnl'))
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
    //  console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if(e.detail.value.cyyjzzkfgl=="" || e.detail.value.cyyjzzkfgl==null){
      wx.showToast({
        title: "企业是否制定了企业研究开发的组织管理制度，建立了研发投入核算体系，编制了研发费用辅助账不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
   }else{
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var msg=e.detail.value.cyyjzzkfgl;
    const sum = msg.reduce((a=0, i) =>
    Number(a)  + Number(i)
    )
    wx.setStorageSync('cyyjzzkfgl', sum)
    //  console.log(sum)
   }
  
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/yjzzkfgl1/yjzzkfgl1'
  });

  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/kjcgzhnl/kjcgzhnl'
    })
  }
})