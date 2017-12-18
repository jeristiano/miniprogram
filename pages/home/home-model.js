
import { Base } from "../utils/base.js";
class Home extends Base {
  constructor() {
    super();
  }

  //根据id获得banner图片
  getBannerData(id, callBack) {
    var params = {
      url: "banner/" + id,
      sCallBack: function (res) {
        callBack && callBack(res.items);
      }
    };
    this.request(params);

  };

  //获得主题数据
  getThemeData(callback) {
    var params = {
      url: "theme?ids=1,2,3",
      sCallBack: function (res) {
        callback && callback(res);
      }
    };
    this.request(params);

  };
  //获得商品列表
  getProductsData(callback){
    var params = {
      url: "product/recent",
      sCallBack: function (res) {
        callback && callback(res);
      }
    };
    this.request(params)
  }
}
export { Home }