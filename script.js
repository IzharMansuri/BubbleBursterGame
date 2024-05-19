var score=0;
var TimeDefault=60;
var hitrn=0;
var timer=null;

window.addEventListener("resize", function() {
   makeBubble();
});

function makeBubble(){
   var bubblecount=getBubbleCount();
var clutter=" ";
 for(var i=1;i<=bubblecount;i++){
    var RandomNum=Math.floor(Math.random()*10);
     clutter+=`<div class="bubble">${RandomNum}</div>`
    }
    document.querySelector('.pbtm').innerHTML=clutter;
 }

 

 function getBubbleCount() {
   var screenWidth = window.innerWidth;
   if (screenWidth > 1200) {
       return 147; // Display 132 bubbles for larger screens
   } else if (screenWidth > 500) {
       return 96; // Display 100 bubbles for medium screens
   } else {
       return 48; // Display 80 bubbles for smaller screens
   }
}
 function increaseScore(){
   score+=10;
   document.querySelector('#scoreval').textContent=score;
}
function runTimer(){
   clearInterval(timer); // Clear any existing timer
    TimeDefault = 60; // Reset the time
    document.querySelector('#timer').textContent = TimeDefault;

  var timer= setInterval(function(){
      if(TimeDefault>0){
         TimeDefault--;
         document.querySelector('#timer').textContent=TimeDefault;
      }
      else{
         clearInterval(timer);
         document.querySelector('#hitval').textContent=0;
         document.querySelector('.pbtm').innerHTML=`<div id="resetContainer">
         <h1 style="color:red">Game Over</h1><br>
         <button id="reset">RESTART</button></div>`;
         document.querySelector('#reset').addEventListener("click",function(){
            try{
               getnewTarget();
               runTimer();
               console.log("izhar");
               makeBubble();
               document.querySelector('#scoreval').textContent=0;
            }
            catch(error){
               alert('Try after some time')
            }
         })
      }
   },1000)
}

function getnewTarget(){
hitrn=Math.floor(Math.random()*10);
document.querySelector('#hitval').textContent=hitrn;
}

document.querySelector('.pbtm').addEventListener("click",function(details){
  var clickedNum=(Number(details.target.textContent));
  if(clickedNum==hitrn){
   increaseScore();
   getnewTarget();
   makeBubble();
  }
})
 
getnewTarget();
 runTimer();
 makeBubble();

 