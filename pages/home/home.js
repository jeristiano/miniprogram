// pages/home/home.js
import {Home} from "home-model.js"
var home=new Home();
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
  _loadData:function(){
    var id=1;
    var data=home.getBannerData(id,this.callBack);
  },
//定义回调函数接收异步消息
  callBack:function(res){
  console.log(res)
  },

})