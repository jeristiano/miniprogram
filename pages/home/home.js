// pages/home/home.js
import { Home } from "home-model.js"
var home = new Home();
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
    this._loadData();
  },

  //定义私有方法
  _loadData: function () {
    var id = 1;
    home.getBannerData(id, this.callbackBanner);
    home.getThemeData(this.callbackTheme)
    home.getProductsData((data)=>{
      this.setData({
        'productsData': data
      });
    });
  },
  //定义回调函数接收异步消息
  callbackBanner: function (res) {
    this.setData({
      'bannerData': res
    });
  },
  callbackTheme: function (res) {
    this.setData({
      'themeData': res
    });
  },

  //商品绑定事件
  onProductsItemTap:function(event){
    var id = home.getDataSet(event,'id');
    wx.navigateTo({
      url:'../product/product?id='+id,
    });
  },

  onThemesItemTap:function(event){
    var id=home.getDataSet(event,'id');
    var name=home.getDataSet(event,'name');
    wx.navigateTo({
      url: '../theme/theme?id='+id+'&name='+name,
    })

  },
})