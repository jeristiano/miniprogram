// pages/product/product.js
import { Product } from "product-model.js";
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    countsArray:[1,2,3,4,5,6,7,8,9,10],
    productCount:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },

  _loadData: function () {
    product.getDetailInfo(this.data.id, this.callbackDetail);
  },

 //定义回调函数接收异步消息
  callbackDetail: function (res) {
    console.log(res)
    this.setData({
      product: res
    });
  },
  //选择器绑定事件
  bindPickerChange:function(event){
    var index=event.detail.value;
    var selectCount =this.data.countsArray[index];
    this.setData({
      productCount: selectCount
    });
  },
  bindTabItem:function(event){
    var id = product.getDataSet(event, 'id');
    this.setData({
      currentTabIndex: id
    });
  }

})
