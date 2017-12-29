import { Base } from "../utils/base.js";
class Category extends Base {
  constructor() {
    super();
  }

  //获得所有分类的数据
  getCategoryType(callback) {
    var param = {
      url: 'category/all',
      sCallBack: function (data) {
        callback && callback(data)
      }
    };
    this.request(param);
  }

  //获得分类下商品
  getProductsByCategory(id, callback) {
    var param = {
      url: 'product/cate_id?id=' + id,
      sCallBack: function (data) {
        callback && callback(data)
      }
    };
    this.request(param)
  }
}

export { Category}