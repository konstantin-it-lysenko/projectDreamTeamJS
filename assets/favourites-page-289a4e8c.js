import{n as f,a as p,A as w,h as b}from"./loader-a1e16e77.js";function E(e){return e.map(({_id:t,name:s,burnedCalories:r,bodyPart:o,target:n})=>`<li><div class="favor-exercises-card" data-id="${t}">
      <div class="favor-exercises-head">
        <div class="favor-exercises-wrap">
          <div class="favor-workout"><p>Workout</p></div>
          <button class="favor-exercises-delbtn" type="button">
            <svg width="16" height="16">
              <use href="./img/sport-sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="favor-exercises-startbtn" data-modal-exercise="open" type="button">Start<svg width="16" height="16">
            <use href="./img/sport-sprite.svg#icon-arrow-up"></use>
          </svg></button>
      </div>
      <div class="favor-exercises-name">
        <div class="favor-exercises-icon">
          <svg width="18" height="20">
            <use href="./img/sport-sprite.svg#icon-running-stick"></use>
          </svg>
        </div>
        <h3>${s}</h3>
      </div>
      <ul class="favor-exercises-info">
        <li class="favor-exercises-item favor-exercises-calories">
          Burned calories:<span>${r} / 3 min</span>
        </li>
        <li class="favor-exercises-item favor-exercises-body">Body part:<span class="favor-exercises-span">${o}</span></li>
        <li class="favor-exercises-item favor-exercises-target">Target:<span class="favor-exercises-span">${n}</span></li>
      </ul>
    </div></li>`).join("")}function l(e){let t="";if(e===1)t="";else for(let s=1;s<=e;s+=1)t=t+`<li class="pag-page">
          <button class="pag-btn" type="button" data-id="${s-1}" id="p-${s}">${s}</button>
        </li>`;return t}const{BASE_URL:S,QUOTE_ENDPOINT:$}=w;async function B(){return(await p(`${S}${$}`)).data}const g=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){f.Notify.failure("Save data error: ",s.message)}},v=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){f.Notify.failure("Load data error: ",t.message)}};async function L(){return(await p("https://your-energy.b.goit.study/api/exercises?page=1&limit=12")).data}const a={quote:document.querySelector(".favor-quote-wrap p"),quoteAuthor:document.querySelector(".favor-quote-wrap h4"),exercises:document.querySelector(".favor-exercises-list"),noExercises:document.querySelector(".favor-exercises"),pagination:document.querySelector(".pag-list")};let i,d=1,c=0,u;window.addEventListener("load",x);window.addEventListener("resize",x);function x(){i=8,window.innerWidth>=768&&window.innerWidth<1440?i=10:window.innerWidth>=1440&&(i=0),P()}async function A(){try{const e=v("quote-current-day"),t=new Date().toDateString();if(e&&t===e.quoteDate)a.quote.textContent=e.quote,a.quoteAuthor.textContent=e.author;else{const s=await B();s.quoteDate=t,a.quote.textContent=s.quote,a.quoteAuthor.textContent=s.author,g("quote-current-day",s)}}catch(e){console.log("Favourites page",e)}}function P(){try{const e=v("favor-exercises");if(e){a.noExercises.classList.remove("favor-exercises-noitems");const t=e.length;i===0||t<=i?(u=e,a.pagination.innerHTML=l("")):(d=Math.ceil(t/i),a.pagination.innerHTML=l(d),document.querySelectorAll(".pag-btn").forEach(r=>{r.addEventListener("click",o=>{const n=Number(o.currentTarget.closest(".pag-btn").dataset.id);k(n,e)})}),m(e),h(c)),y(u)}else a.noExercises.classList.add("favor-exercises-noitems")}catch{}}function h(e){c=e,document.querySelectorAll(".pag-btn").forEach(r=>{r.classList.remove("pag-btn-active")}),document.getElementById(`p-${e+1}`).classList.add("pag-btn-active")}function m(e){u=e.slice(0+c*i,i*(1+c)),y(u)}function y(e){a.exercises.innerHTML=E(e),document.querySelectorAll('[data-modal-exercise="open"]').forEach(s=>{s.addEventListener("click",r=>{const o=r.currentTarget.closest(".favor-exercises-card").dataset.id;b(r,o)})})}function k(e,t){h(e),m(t)}A();async function C(){const{results:e}=await L(),t=e.map(({_id:s,name:r,burnedCalories:o,bodyPart:n,target:q})=>({_id:`${s}`,name:`${r}`,burnedCalories:`${o}`,bodyPart:`${n}`,target:`${q}`}));g("favor-exercises",t)}C();
