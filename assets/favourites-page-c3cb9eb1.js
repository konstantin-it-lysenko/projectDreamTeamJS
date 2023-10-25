import{n as h,a as T,A,h as B}from"./loader-e71e231d.js";function I(e){return e.map(({_id:t,name:s,burnedCalories:r,bodyPart:a,target:o})=>`<li><div class="favor-exercises-card" data-id="${t}">
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
        <li class="favor-exercises-item favor-exercises-body">Body part:<span class="favor-exercises-span">${a}</span></li>
        <li class="favor-exercises-item favor-exercises-target">Target:<span class="favor-exercises-span">${o}</span></li>
      </ul>
    </div></li>`).join("")}function d(e){let t="";if(e>1)for(let s=1;s<=e;s+=1)t=t+`<li class="pag-page">
          <button class="pag-btn" type="button" data-id="${s-1}" id="p-${s}">${s}</button>
        </li>`;return t}function M(){return`<p class="favor-exercises-text">
    It appears that you haven't added any exercises to your favorites yet. To
    get started, you can add exercises that you like to your favorites for
    easier access in the future.
  </p>`}const{BASE_URL:O,QUOTE_ENDPOINT:$}=A;async function P(){return(await T(`${O}${$}`)).data}const y=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){h.Notify.failure("Save data error: ",s.message)}},E=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){h.Notify.failure("Load data error: ",t.message)}},N={quote:document.querySelector(".favor-quote-wrap p"),quoteAuthor:document.querySelector(".favor-quote-wrap h4"),exercises:document.querySelector(".favor-exercises-list"),noExercises:document.querySelector(".favor-exercises"),paginationMarkup:document.querySelector(".pag-list")},{quote:v,quoteAuthor:f,exercises:S,noExercises:p,paginationMarkup:g}=N,l="favorite-exercises-list",x="quoteData";let i,m=1,n=0,c;window.addEventListener("load",b);window.addEventListener("resize",b);function b(){i=8,window.innerWidth>=768&&window.innerWidth<1440?i=10:window.innerWidth>=1440&&(i=0),w()}async function C(){try{const e=E(x),t=new Date().toDateString();if(e&&t===e.quoteDate)v.textContent=e.quote,f.textContent=e.author;else{const s=await P();s.quoteDate=t,v.textContent=s.quote,f.textContent=s.author,y(x,s)}}catch{}}function w(){try{const e=E(l);if(e){p.classList.remove("favor-exercises-noitems");const t=e.length;i===0||t<=i?(c=e,g.innerHTML=d("")):(m=Math.ceil(t/i),g.innerHTML=d(m),document.querySelectorAll(".pag-btn").forEach(r=>{r.addEventListener("click",a=>{const o=Number(a.currentTarget.closest(".pag-btn").dataset.id);_(o,e)})}),k(e),q(n)),L(c,e)}else p.classList.add("favor-exercises-noitems"),S.innerHTML=M()}catch{}}function q(e){n=e,document.querySelectorAll(".pag-btn").forEach(r=>{r.classList.remove("pag-btn-active")}),document.getElementById(`p-${e+1}`).classList.add("pag-btn-active")}function k(e){c=e.slice(0+n*i,i*(1+n)),L(c,e)}function L(e,t){S.innerHTML=I(e);const s=document.querySelectorAll('[data-modal-exercise="open"]'),r=document.querySelectorAll(".favor-exercises-delbtn");s.forEach(a=>{a.addEventListener("click",o=>{const u=o.currentTarget.closest(".favor-exercises-card").dataset.id;B(o,u)})}),r.forEach(a=>{a.addEventListener("click",o=>{const u=o.currentTarget.closest(".favor-exercises-card").dataset.id;D(u,t),w()})})}function D(e,t){const s=t.find(a=>a._id===e),r=t.indexOf(s);t.splice(r,1),y(l,t),!t.length&&localStorage.removeItem(l)}function _(e,t){q(e),k(t)}C();
