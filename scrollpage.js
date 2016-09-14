var pageView = document.getElementById('page1');

var pageHeight = pageView.offsetHeight; //screen.availHeight


// 翻页事件：向上翻
function pageUp() {
  console.log(pageYOffset);
  window.scrollTo(0, pageYOffset - pageHeight);
  requestAnimationFrame(move);
};

// 翻页事件：向下翻
// function pageDown() {
//   window.scrollTo(0, pageYOffset + pageHeight);
// };




function  st(args){
        var  win = window;
        var  to = args;
        var  scrollTop = 0;
        var  step;

        //兼容所有的浏览器
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        if(document.documentElement&&document.documentElement.scrollTop){
                scrollTop=document.documentElement.scrollTop;
        }else  if(document.body){
                scrollTop=document.body.scrollTop;
        }

        step = (to-scrollTop)/20;

        function move(){
                scrollTop += step;
                window.scrollTo(0,scrollTop);
                if(step>0&&scrollTop<=to  ||  step<0&&scrollTop>to){
                      requestAnimationFrame(move);
                }
        }
        requestAnimationFrame(move);
}



