import { Base } from './utils.base.js';

class Cart extends Base {
  constructor() {
    super();
    this._storageKeyName = 'cart';
  }


  /*
  * 添加商品到购物车
  * 如果商品存在缓存中则更新商品数量
  * 如果商品不存在则添加商品到缓存中
  */
  add(item, counts) {
    var cartData = this.getCartDataFromLocal();
    var isHasInfo = this._isHasThatOne(item.id, cartData);
    if (isHasInfo.index==-1) {
      item.counts = counts;
      item.selectStatus = true;
      cartData.push(item);
    } else {
      cartData[isHasInfo.index].counts += counts;
    }
    wx.setStorageSync(this._storageKeyName, cartData);

  }

  getCartDataFromLocal() {
    var res = wx.getStorageInfoSync(this._storageKeyName);
    if (!res) {
      res = [];
    }
    return $res;
  }

  _isHasThatOne(id, arr) {
    var item;
    result = { index: -1 };
    for (let i = 0; i < arr.length; i++) {
      item=arr[i];
      if(item.id==id){
        result={
          index:i,
          data:item
        }
      };
      break;
    }
    return result;  
  }
}

export { Cart }
