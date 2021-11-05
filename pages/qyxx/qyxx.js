// pages/qyxx/qyxx.js
//获取应用实例
const app = getApp();
var url = app.globalData.ceshiUrl + 'api/index/';
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  // 登录
    //  wx.login({
    //   success: res => {
    //     // console.log(res)
    //     wx.request({
    //         // 自行补上自己的 APPID 和 SECRET
    //         url: app.globalData.ceshiUrl+'api/index/getkey',
    //         method: 'get',
    //         dataType: 'json',
    //         data:{code:res.code},
    //         header: {
    //           'Content-Type': 'application/json'
    //         },
    //         success: res => {
    //             // 获取到用户的 openid
    //             // console.log("用户的openid:" + res.data.openid);
    //             wx.setStorageSync('openid', res.data.openid);
    //         }
    //     });
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // console.log("技术先进程度:"+wx.getStorageSync('jsxjx'))
    // console.log("主要产品（服务）在技术上发挥核心支持作用:"+wx.getStorageSync('zycphxzy'))
    // console.log("Ⅰ类知识产权-自主研发:"+wx.getStorageSync('zzyf1'))
    // console.log("Ⅱ类知识产权-自主研发:"+wx.getStorageSync('zzyf2'))
    // console.log("Ⅰ类知识产权-转让、受让、并购:"+wx.getStorageSync('zhuanrang1'))
    // console.log("Ⅱ类知识产权-转让、受让、并购:"+wx.getStorageSync('zhuanrang2'))
    // console.log("企业参与编制国家标准:"+wx.getStorageSync('cygjbz'))
    // console.log("科技成果转化能力:"+wx.getStorageSync('kjcgzhnl'))
    // console.log("企业是否制定了企业研究开发的组织管理制度，建立了研发投入核算体系，编制了研发费用辅助账（多选）:"+wx.getStorageSync('cyyjzzkfgl'))
    // console.log("与国内外研究开发机构开展多种形式产学研合作证明材料: "+wx.getStorageSync('yjzzkfz1'))
    // console.log("科技成果转化的组织实施与激励奖励制度实施情况: "+wx.getStorageSync('yjzzkfz2'))
    // console.log(" 开放式的创新创业平台建设情况:"+wx.getStorageSync('yjzzkfz3'))
    // console.log("科技人员的培养进修、职工技能培训、优秀人才引进，以及人才绩效评价奖励制度制定情况:"+wx.getStorageSync('yjzzkfz4'))
    // console.log("内部科学技术研究具备科研条件证明材料（多选）:"+wx.getStorageSync('nbkxjsyj'))
    // console.log("销售增长率:"+wx.getStorageSync('xszzl'))
    // console.log("净资产增长率:"+wx.getStorageSync('jzczzl'))
    // console.log("公司名称:"+wx.getStorageSync('gsmc'))
    // console.log("联系电话:"+wx.getStorageSync('lxdh'))
  },
  gsmc: function (e) {
    var gsmc = e.detail.value;
    if (gsmc == "") {
      wx.showToast({
        title: "公司名称不能为空",
        icon: "none",
        duration: 3000,
      });
    } else {
      wx.setStorageSync('gsmc', gsmc)
      // this.setData({
      //   gsmc:gsmc
      // });
    }
  },
  lxdh: function (e) {
    var lxdh = e.detail.value;
    if (lxdh == "") {
      wx.showToast({
        title: "联系电话不能为空",
        icon: "none",
        duration: 3000,
      });
    } else {
      wx.setStorageSync('lxdh', lxdh)
    }
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
    var gsmc = e.detail.value.gsmc; 
    if (gsmc == "") {
      wx.showToast({
        title: "公司名称不能为空",
        icon: "none",
        duration: 3000,
      });
      return false
    } else {
      wx.setStorageSync('gsmc', gsmc)
    }
    var lxdh = e.detail.value.lxdh;
    if (lxdh == "") {
      wx.showToast({
        title: "联系电话不能为空",
        icon: "none",
        duration: 3000,
      });
      return false
    } else {
      wx.setStorageSync('lxdh', lxdh)
    }
    console.log("技术先进程度:" + wx.getStorageSync('jsxjx'))
    console.log("主要产品（服务）在技术上发挥核心支持作用:" + wx.getStorageSync('zycphxzy'))
    console.log("Ⅰ类知识产权-自主研发:" + wx.getStorageSync('zzyf1'))
    console.log("Ⅱ类知识产权-自主研发:" + wx.getStorageSync('zzyf2'))
    console.log("Ⅰ类知识产权-转让、受让、并购:" + wx.getStorageSync('zhuanrang1'))
    console.log("Ⅱ类知识产权-转让、受让、并购:" + wx.getStorageSync('zhuanrang2'))
    console.log("企业参与编制国家标准:" + wx.getStorageSync('cygjbz'))
    console.log("科技成果转化能力:" + wx.getStorageSync('kjcgzhnl'))
    console.log("企业是否制定了企业研究开发的组织管理制度，建立了研发投入核算体系，编制了研发费用辅助账（多选）:" + wx.getStorageSync('cyyjzzkfgl'))
    console.log("与国内外研究开发机构开展多种形式产学研合作证明材料: " + wx.getStorageSync('yjzzkfz1'))
    console.log("科技成果转化的组织实施与激励奖励制度实施情况: " + wx.getStorageSync('yjzzkfz2'))
    console.log(" 开放式的创新创业平台建设情况:" + wx.getStorageSync('yjzzkfz3'))
    console.log("科技人员的培养进修、职工技能培训、优秀人才引进，以及人才绩效评价奖励制度制定情况:" + wx.getStorageSync('yjzzkfz4'))
    console.log("内部科学技术研究具备科研条件证明材料（多选）:" + wx.getStorageSync('nbkxjsyj'))
    console.log("销售增长率:" + wx.getStorageSync('xszzl'))
    console.log("净资产增长率:" + wx.getStorageSync('jzczzl'))
    console.log("公司名称:" + wx.getStorageSync('gsmc'))
    console.log("联系电话:" + wx.getStorageSync('lxdh'))
    //条件都请填写开始请求自己的服务器
    this.Tosave(gsmc,lxdh);
  },
  Tosave: function (gsmc,lxdh) {
    // console.log(url)
    var that = this
    //创建一个dialog提示
    wx.showToast({
      title: '正在测评...',
      icon: 'loading',
      duration: 5000
    });
    
    /* 
      公司名称  --  gsmc
      联系电话  --  lxdh
      知识产权  --  knowledgeScore
      科技成果转化能力 -- resultScore
      研究开发组织管理水平 -- manageScore
      企业成长性 -- growUpScore
      总分 -- totalScore
    */

    /* 
      todo   把需要存入数据库的分数计算出来
    */









    // 数据库字段 companyName,phone,manageScore,resultScore,totalScore,growUpScore,knowledgeScore

    // let openId = wx.getStorageSync('sercetUserInfo').openid
    // let time = util.formatTime(new Date());

    // 保存数据到数据库     --- 静态数据示例
    // const db = wx.cloud.database()
    // db.collection('score').add({
    //     data: {
    //       "companyName": gsmc,
    //       "phone": lxdh,
    //       "knowledgeScore": "7",
    //       "manageScore": "2",
    //       "resultScore": "4",
    //       "growUpScore": "6",
    //       "totalScore": "5",
    //       "time":time
    //     }
    //   })
    //   .then(res => {
    //     console.log(res)
    //     if(res._id){
    //       wx.hideToast()
    //       wx.redirectTo({
    //         url: '/pages/detail/detail?id='+res.data,
    //       })
    //     }
    //   })





    //  ---------------------------------------------------
    /* 

        以前代码

    */

    // wx.request({
    //   url: url + 'tosave',
    //   method: 'post',
    //   dataType: 'json',
    //   data: {
    //     jsxjx:wx.getStorageSync('jsxjx'),
    //     zycphxzy:wx.getStorageSync('zycphxzy'),
    //     zzyf1:wx.getStorageSync('zzyf1'),
    //     zzyf2:wx.getStorageSync('zzyf2'),
    //     zhuanrang1:wx.getStorageSync('zhuanrang1'),
    //     zhuanrang2:wx.getStorageSync('zhuanrang2'),
    //     cygjbz:wx.getStorageSync('cygjbz'),
    //     kjcgzhnl:wx.getStorageSync('kjcgzhnl'),
    //     cyyjzzkfgl:wx.getStorageSync('cyyjzzkfgl'),
    //     yjzzkfz1:wx.getStorageSync('yjzzkfz1'),
    //     yjzzkfz2:wx.getStorageSync('yjzzkfz2'),
    //     yjzzkfz3:wx.getStorageSync('yjzzkfz3'),
    //     yjzzkfz4:wx.getStorageSync('yjzzkfz4'),
    //     nbkxjsyj:wx.getStorageSync('nbkxjsyj'),
    //     xszzl:wx.getStorageSync('xszzl'),
    //     jzczzl:wx.getStorageSync('jzczzl'),
    //     gsmc:wx.getStorageSync('gsmc'),
    //     lxdh:wx.getStorageSync('lxdh'),
    //     openid:wx.getStorageSync('openid')
    //   },
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function(res) {
    //     wx.hideToast()
    //     wx.clearStorageSync();
    //     wx.redirectTo({
    //       url: '/pages/detail/detail?id='+res.data,
    //     })
    //   },
    //   complete: function() {

    //   }
    // })

  }


})