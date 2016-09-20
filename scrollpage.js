var pageView = document.getElementById('page1');

var fullpage = document.getElementById('fullpage')

var pageHeight = pageView.offsetHeight; //screen.availHeight

var fullpageHeight =fullpage.offsetHeight; 
var a = 0;

// 翻页事件：向上翻
function pageUp() {
  console.log(pageYOffset);
  // window.scrollTo(0, pageYOffset - pageHeight);
  if(1){
    a = pageHeight + a ;
    fullpage.style.webkitTransform = "translate3d(0px,"+a+"px,0px)";
    fullpage.style.transition = "all 700ms ease";  
  }
};

//翻页事件：向下翻
function pageDown() {
  // window.scrollTo(0, pageYOffset + pageHeight);
  if(1){
    a = a - pageHeight;
    console.log("pageYOffset="+pageYOffset);
    console.log("pageHeight="+pageHeight);
    console.log("a="+a);
    fullpage.style.webkitTransform = "translate3d(0px,"+a+"px,0px)";
    fullpage.style.transition = "all 700ms ease";
    console.log("fullpageHeight=" + fullpageHeight); 
  }
};




// function  st(args){
//         var  win = window;
//         var  to = args;
//         var  scrollTop = 0;
//         var  step;

//         //兼容所有的浏览器
//         window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
//                                         window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

//         if(document.documentElement&&document.documentElement.scrollTop){
//                 scrollTop=document.documentElement.scrollTop;
//         }else  if(document.body){
//                 scrollTop=document.body.scrollTop;
//         }

//         step = (to-scrollTop)/20;

//         function move(){
//                 scrollTop += step;
//                 window.scrollTo(0,scrollTop);
//                 if(step>0&&scrollTop<=to  ||  step<0&&scrollTop>to){
//                       requestAnimationFrame(move);
//                 }
//         }
//         requestAnimationFrame(move);
// }



