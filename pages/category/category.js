// pages/category/category.js
import { Category } from "./category-model.js";
var category = new Category();
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

  _loadData: function () {
    category.getCategoryType((categoryData) => {
      this.setData({
        categoryTypeArr: categoryData
      });
      //一定在回调里在进行分类获取,才能保证到可以接收到分类数据
      var id = categoryData[0].id;
      var imgUrl = categoryData[0].img.url; 
      var title = categoryData[0].name;
      category.getProductsByCategory(id,(data)=>{
        console.log(data)
        var dataObj = {
          products: data,
          topImgUrl:imgUrl,
          title:title
        };
        this.setData({
          categoryProducts: dataObj
        })
      })
    });
  }
})