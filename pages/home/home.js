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
     console.log(data)
      this.setData({
        'productsData': data
      });
    });
  },
  //定义回调函数接收异步消息
  callbackBanner: function (res) {
    //console.log(res);
    this.setData({
      'bannerData': res
    });
  },
  callbackTheme: function (res) {
    console.log(res);
    this.setData({
      'themeData': res
    });
  }
})