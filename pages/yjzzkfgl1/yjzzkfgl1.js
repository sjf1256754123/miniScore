// pages/yjzzkfgl/yjzzkfgl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select1: false,
    yjzzkf1: '--请选择--',
    yjzzkfz1: '',
    select2: false,
    yjzzkf2: '--请选择--',
    yjzzkfz2: '',
    select3: false,
    yjzzkf3: '--请选择--',
    yjzzkfz3: '',
    select4: false,
    yjzzkf4: '--请选择--',
    yjzzkfz4: ''
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
     console.log(wx.getStorageSync('cyyjzzkfgl'))
  },
  bindShowMsg1() {
    this.setData({
        select1:!this.data.select1
    })
},
bindShowMsg2() {
  this.setData({
      select2:!this.data.select2
  })
},
bindShowMsg3() {
  this.setData({
      select3:!this.data.select3
  })
},
bindShowMsg4() {
  this.setData({
      select4:!this.data.select4
  })
},
mySelect1(e) {
   var name = e.currentTarget.dataset.name;
   var value = e.currentTarget.dataset.value
   this.setData({
       yjzzkf1: name,
       yjzzkfz1: value,
       select1: false
   })
   console.log(e)
},
mySelect2(e) {
  var name = e.currentTarget.dataset.name;
  var value = e.currentTarget.dataset.value
  this.setData({
      yjzzkf2: name,
      yjzzkfz2: value,
      select2: false
  })
  console.log(e)
},
mySelect3(e) {
  var name = e.currentTarget.dataset.name;
  var value = e.currentTarget.dataset.value
  this.setData({
      yjzzkf3: name,
      yjzzkfz3: value,
      select3: false
  })
  console.log(e)
},
mySelect4(e) {
  var name = e.currentTarget.dataset.name;
  var value = e.currentTarget.dataset.value
  this.setData({
      yjzzkf4: name,
      yjzzkfz4: value,
      select4: false
  })
  console.log(e)
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
    if(this.data.yjzzkfz1=='' || this.data.yjzzkfz1==null){
      wx.showToast({
        title: "请选择与国内外研究开发机构开展多种形式产学研合作证明材料", 
        icon: "none",
        duration: 3000,
    });
    return false;
   }else{
     wx.setStorageSync('yjzzkfz1', this.data.yjzzkfz1)
   }
   if(this.data.yjzzkfz2=='' || this.data.yjzzkfz2==null){
    wx.showToast({
      title: "请选择科技成果转化的组织实施与激励奖励制度实施情况", 
      icon: "none",
      duration: 3000,
  });
  return false;
}else{
  wx.setStorageSync('yjzzkfz2', this.data.yjzzkfz2)
}
 if(this.data.yjzzkfz3=='' || this.data.yjzzkfz3==null){
  wx.showToast({
    title: "请选择开放式的创新创业平台建设情况", 
    icon: "none",
    duration: 3000,
});
return false;
}else{
  wx.setStorageSync('yjzzkfz3', this.data.yjzzkfz3)
}
if(this.data.yjzzkfz4=='' || this.data.yjzzkfz4==null){
  wx.showToast({
    title: "请选择科技人员的培养进修、职工技能培训、优秀人才引进，以及人才绩效评价奖励制度制定情况", 
    icon: "none",
    duration: 3000,
});
return false;
}else{
  wx.setStorageSync('yjzzkfz4', this.data.yjzzkfz4)
}
   
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/yjzzkfgl2/yjzzkfgl2'
  });

  },
  PrevTamp:function(e){
    console.log(e)
    wx.redirectTo({
      url: '/pages/yjzzkfgl/yjzzkfgl'
    })
  }
})