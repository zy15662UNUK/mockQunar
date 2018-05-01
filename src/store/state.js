var defaultCity = "北京";
try{ //使用try是为了防止localStorage在隐身模式下不可用而导致所有代码都不能用
  if(localStorage.city){
    defaultCity = localStorage.city;
  }
}catch(e){}

export default {
  city: defaultCity,// state默认值依次是localS，如果是空则默认北京
}
