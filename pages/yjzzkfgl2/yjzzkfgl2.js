// pages/yjzzkfgl2/yjzzkfgl2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: '1', name:'内部科学技术研究开发机构组织架构图及机构场地照片',checked: 'true'},
      {value: '2', name:'内部科学技术研究开发机构研发人员名单'},
      {value: '3', name:'内部科学技术研究开发机构研发设备清单及照片'},
      {value: '4', name:'内部科学技术研究开发机构研发设备购置合同及发票'},
      {value: '0', name: '没有证明材料'}
    ],
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("技术先进程度:"+wx.getStorageSync('jsxjx'))
    console.log("主要产品（服务）在技术上发挥核心支持作用:"+wx.getStorageSync('zycphxzy'))
    console.log("Ⅰ类知识产权-自主研发:"+wx.getStorageSync('zzyf1'))
    console.log("Ⅱ类知识产权-自主研发:"+wx.getStorageSync('zzyf2'))
    console.log("Ⅰ类知识产权-转让、受让、并购:"+wx.getStorageSync('zhuanrang1'))
    console.log("Ⅱ类知识产权-转让、受让、并购:"+wx.getStorageSync('zhuanrang2'))
    console.log("企业参与编制国家标准:"+wx.getStorageSync('cygjbz'))
    console.log("科技成果转化能力:"+wx.getStorageSync('kjcgzhnl'))
    console.log("企业是否制定了企业研究开发的组织管理制度，建立了研发投入核算体系，编制了研发费用辅助账（多选）:"+wx.getStorageSync('cyyjzzkfgl'))
    console.log("与国内外研究开发机构开展多种形式产学研合作证明材料: "+wx.getStorageSync('yjzzkfz1'))
    console.log("科技成果转化的组织实施与激励奖励制度实施情况: "+wx.getStorageSync('yjzzkfz2'))
    console.log(" 开放式的创新创业平台建设情况:"+wx.getStorageSync('yjzzkfz3'))
    console.log("科技人员的培养进修、职工技能培训、优秀人才引进，以及人才绩效评价奖励制度制定情况:"+wx.getStorageSync('yjzzkfz4'))
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
    if(e.detail.value.nbkxjsyj=="" || e.detail.value.nbkxjsyj==null){
      wx.showToast({
        title: "内部科学技术研究具备科研条件证明材料（多选）不能为空", 
        icon: "none",
        duration: 3000,
    });
    return false;
   }else{
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var msg=e.detail.value.nbkxjsyj;
    const sum = msg.reduce((a=0, i) =>
    Number(a)  + Number(i)
    )
    wx.setStorageSync('nbkxjsyj', sum)
    //  console.log(sum)
   }
   
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/qyczx/qyczx'
  });

  },
    PrevTamp:function(e){
      console.log(e)
      wx.redirectTo({
        url: '/pages/yjzzkfgl1/yjzzkfgl1'
      })
    }
})