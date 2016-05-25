var seed = 1009;
var a = 198349314545;
var b = 31754705969;
var m = 13487650879;
setTimeout(
  function(){ 
    seed = (a*seed + b) % m;
    console.log(seed);
    console.log("Random");
  }
, 3000); 
