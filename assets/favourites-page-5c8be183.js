import"./loader-5611809e.js";document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("timerValue"),r=document.getElementById("startTimerListItem");document.querySelector(".favor-dailynorm-icon");let o,i=!1;function c(l,s){if(i)return;i=!0,s.style.display="block",r.setAttribute("data-active","true");let a=l,t,e;s.textContent="110:00",o=setInterval(function(){t=parseInt(a/60,10),e=parseInt(a%60,10),t=t<10?"0"+t:t,e=e<10?"0"+e:e,n.textContent=t+":"+e,--a<0&&(clearInterval(o),n.textContent="00:00",i=!1,r.setAttribute("data-active","false"))},1e3)}r.addEventListener("click",function(){c(6600,n)})});
