// pages/category/category.js
import { Category } from "./category-model.js";
var category = new Category();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMenuIndex: 0
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
      category.getProductsByCategory(id, (data) => {
        var dataObj = {
          products: data,
          topImgUrl: imgUrl,
          title: title
        };
        this.setData({
          categoryProducts: dataObj
        })
      })
    });
  },
  //点击一级分类
  OnCategoryTap: function (event) {
    var id = category.getDataSet(event, 'id');
    var index = category.getDataSet(event, 'index');
    this.setData({
      currentMenuIndex: index
    });

    category.getProductsByCategory(id,(data=>{
     var iii= this.getDataObjForBind(index, data);
     console.log(iii)
      this.setData(
       this.getDataObjForBind(index, data)
      );
    }))
  },

//返回对象
  getDataObjForBind:function(index,data){
    var obj = {},
      arr = [0, 1, 2, 3, 4, 5],
    baseData = this.data.categoryTypeArr[index];
    for (var item in arr){
      if(item == arr[index]){
        obj['categoryProducts'] = {
          products: data,
          topImgUrl: baseData.img.url,
          title: baseData.name
        };
        return obj;
      }
    }
  }



})