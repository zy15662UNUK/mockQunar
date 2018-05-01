export default {
  cityChange(state, city) {
    state.city = city;
    try{
      localStorage.city = city;// 使用html自带的localStorage，类似于cookie可以记录访问的记录
      //同时保证页面刷新后当前所在城市依旧是上一次存储的城市
    }catch(e){}
  }
}
