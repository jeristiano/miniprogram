import { Base } from "../utils/base.js";
class Theme extends Base{
  constructor(){
    super();
  }

  //获得商品主题列表
  getProductsData(id,callback) {
    var params = {
      url: "theme/"+id,
      sCallBack: function (res) {
        callback && callback(res);
      }
    };
    this.request(params)
  }
  
}
export {Theme}
