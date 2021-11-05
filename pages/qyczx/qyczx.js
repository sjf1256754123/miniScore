// pages/qyczx/qyczx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date1:'',
    xs1:'',
    xs2:'',
    xs3:'',
    xszzl:'',
    jzc1:'',
    jzc2:'',
    jzc3:'',
    jzczzl:''
  },
  xs1:function(e){
   var xs1 = e.detail.value;
   console.log(xs1)
   if(xs1==""){
    wx.showToast({
      title: (this.data.date1-3) +"销售收入不能为空", 
      icon: "none",
      duration: 3000,
    });
  }else{
    this.setData({
      xs1:xs1
    });
  }
  },
  xs2:function(e){
    var xs2 = e.detail.value;
    if(xs2==""){
      wx.showToast({
        title: (this.data.date1-2) +"销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }else{
      this.setData({
        xs2:xs2
      });
    }
   },
   xs3:function(e){
    var xs3 = e.detail.value;
    if(xs3==""){
      wx.showToast({
        title:  (this.data.date1-1)  + "销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }else{
      this.setData({
        xs3:xs3
      });
      this.xszzl();
    }
  
   },
   xszzl:function(){
    if(this.data.xs1==""){
      wx.showToast({
        title:  this.data.date1-3 + "销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.xs2==""){
      wx.showToast({
        title:  this.data.date1-2 + "销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.xs3==""){
      wx.showToast({
        title:  this.data.date1-1 + "销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.xs1 !='' && this.data.xs2 !='' && this.data.xs3 !=''){
      var xszzl = ((parseFloat(this.data.xs3)/parseFloat(this.data.xs2))+(parseFloat(this.data.xs2)/parseFloat(this.data.xs1)))*0.5-1;
      this.setData({
        xszzl:xszzl.toFixed(2)
      });
      wx.setStorageSync('xszzl', xszzl.toFixed(2))
      console.log(123)
    }
   },
   jzc1:function(e){
    var jzc1 = e.detail.value;
    console.log(jzc1)
    if(jzc1==""){
     wx.showToast({
       title: (this.data.date1-3) +"净资产不能为空", 
       icon: "none",
       duration: 3000,
     });
   }else{
     this.setData({
      jzc1:jzc1
     });
   }
   },
   jzc2:function(e){
    var jzc2 = e.detail.value;
    console.log(jzc2)
    if(jzc2==""){
     wx.showToast({
       title: (this.data.date1-2) +"净资产不能为空", 
       icon: "none",
       duration: 3000,
     });
   }else{
     this.setData({
      jzc2:jzc2
     });
   }
   },
   jzc3:function(e){
    var jzc3 = e.detail.value;
    if(jzc3==""){
      wx.showToast({
        title:  (this.data.date1-1) + "销售收入不能为空", 
        icon: "none",
        duration: 3000,
      });
    }else{
      this.setData({
        jzc3:jzc3
      });
      this.jzczzl();
    }
   },
   jzczzl:function(){
    if(this.data.jzc1==""){
      wx.showToast({
        title:  this.data.date1-3 + "净资产不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.jzc2==""){
      wx.showToast({
        title:  this.data.date1-2 + "净资产不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.jzc3==""){
      wx.showToast({
        title:  this.data.date1-1 + "净资产不能为空", 
        icon: "none",
        duration: 3000,
      });
    }
    if(this.data.jzc1 !='' && this.data.jzc2 !='' && this.data.jzc3 !=''){
      var jzczzl = ((parseFloat(this.data.jzc3)/parseFloat(this.data.jzc2))+(parseFloat(this.data.jzc2)/parseFloat(this.data.jzc1)))*0.5-1;
      this.setData({
        jzczzl:jzczzl.toFixed(2)
      });
      wx.setStorageSync('jzczzl', jzczzl.toFixed(2))
      console.log(123)
    }
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
    console.log("内部科学技术研究具备科研条件证明材料（多选）:"+wx.getStorageSync('nbkxjsyj'))
   
  },
  getYear:function(){
    var that = this
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y =date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
    // console.log(Y)
    that.setData({
      date1:Y
    });
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
    this.getYear();
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
   //条件都请填写开始请求自己的服务器
  //  Tosave(data);
   wx.redirectTo({
    url: '/pages/qyxx/qyxx'
  });

  },
    PrevTamp:function(e){
      console.log(e)
      wx.redirectTo({
        url: '/pages/yjzzkfgl2/yjzzkfgl2'
      })
    }
})