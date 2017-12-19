import { Config } from "../utils/config.js"
class Base {
  constructor() {
    this.baseRequestUrl = Config.baseRequestUrl;//配置静态化加载
  }
  //http请求基类方法
  request(params) {
    var url = this.baseRequestUrl + params.url;
    if (!params.type) {
      params.type = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageInfoSync('token'),//token存储在缓存
      },
      method: params.type,
      success: function (res) {
        // if(params.sCallBack){
        //   params.sCallBack(res);
        // }
        params.sCallBack && params.sCallBack(res.data);//请求成功回调执行函数
      },
      fail: function (err) {
        console.log(err)
      },
    })
  }

  //绑定事件获得绑定数据
  getDataSet(event,key){
    return event.currentTarget.dataset[key];

  }


}
export { Base }