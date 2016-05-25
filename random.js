var seed = 1009;
var a = 19834931454567890;
var b = 31754705969870959;
var m = 13487650879804578;
setTimeout(function(){
  seed = (a*seed + b) % m;
  console.log(seed);
 },1000
);
