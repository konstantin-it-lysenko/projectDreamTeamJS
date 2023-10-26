import{a as q,A as N,s as p,c as M,b as P,h as H,n as be,d as ve,N as $,g as Q}from"./loader-5145ef20.js";const{BASE_URL:Le,QUOTE_ENDPOINT:xe}=N;async function ke(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await q.get(`${Le}${xe}`)).data;if(i&&i.quote&&i.author){const r={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(r));const c=document.querySelector(".quote"),a=document.querySelector(".author");c.textContent=i.quote,a.textContent=i.author}else Y()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{Y()}}function Y(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){ke()});const ee=document.querySelector(".sidebar-infotext");window.addEventListener("load",ie);window.addEventListener("resize",ie);function ie(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=ee.textContent;t.length>e&&(ee.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function r(c,a){if(i)return;i=!0,a.style.display="block",n.setAttribute("data-active","true");let l=c,d,u;a.textContent="110:00",s=setInterval(function(){d=parseInt(l/60,10),u=parseInt(l%60,10),d=d<10?"0"+d:d,u=u<10?"0"+u:u,e.textContent=d+":"+u,--l<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){r(6600,e)})});const{BASE_URL:we,FILTERS_ENDPOINT:Ee}=N;let Se=window.innerWidth<768?9:12;async function R(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:Se,page:t}),s=`${we}${Ee}?${n}`;return(await q.get(s)).data}const{BASE_URL:se,EXERCISE_ENDPOINT:ae}=N;let Te=window.innerWidth<768?8:10;async function re(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:Te,page:n}),i=`${se}${ae}?${s}`;return(await q.get(i)).data}async function qe(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),r=`${se}${ae}?${i}`;return(await q.get(r)).data.results}function F(e){return`${e.map(Be).join("")}`}function Be({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:r}){return`<li class="exercises-item" data-exercise-id="${r}">
			<div class="exercises-header">
				<div class="exercises-meta-container">
					<p class="exercises-meta">WORKOUT</p>
					<p class="exercises-rating">
						${e.toFixed(1)}
						<svg width="18" height="18" class="exercises-svg">
							<use href="${p}#icon-star"></use>
						</svg>
					</p>
				</div>
				<button type="button" class="exercises-btn" data-modal-exercise="open">
					Start
					<svg width="16" height="16" class="exercises-btn-svg">
						<use href="${p}#icon-arrow-up"></use>
					</svg>
				</button>
			</div>
			<div class="exercises-name-container">
				<span class="exercises-name-span">
				<svg width="20" height="20" class="exercises-name-svg">
					<use href="${p}#icon-running-stick"></use>
				</svg>
				</span>
				<h3 class="exercises-name">
					${t}
				</h3>
			</div>
			<div class="exercises-descr-container">
				<ul class="exercises-descr-list">
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Burned calories:</span>
						${n} / 3 min
					</li>
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Body part:</span>
						${s}
					</li>
					<li class="exercises-descr-item">
						<span class="exercises-descr-span">Target:</span>
						${i}
					</li>
				</ul>
			</div>
		</li>`}function W(e){return`${e.map(Ie).join("")}`}function Ie({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var oe="Expected a function",te=0/0,Me="[object Symbol]",$e=/^\s+|\s+$/g,De=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Pe=parseInt,He=typeof M=="object"&&M&&M.Object===Object&&M,Ae=typeof self=="object"&&self&&self.Object===Object&&self,Oe=He||Ae||Function("return this")(),_e=Object.prototype,je=_e.toString,Ue=Math.max,Re=Math.min,U=function(){return Oe.Date.now()};function Fe(e,t,n){var s,i,r,c,a,l,d=0,u=!1,L=!1,O=!0;if(typeof e!="function")throw new TypeError(oe);t=ne(t)||0,D(n)&&(u=!!n.leading,L="maxWait"in n,r=L?Ue(ne(n.maxWait)||0,t):r,O="trailing"in n?!!n.trailing:O);function _(o){var m=s,x=i;return s=i=void 0,d=o,c=e.apply(x,m),c}function he(o){return d=o,a=setTimeout(I,t),u?_(o):c}function ge(o){var m=o-l,x=o-d,J=t-m;return L?Re(J,r-x):J}function Z(o){var m=o-l,x=o-d;return l===void 0||m>=t||m<0||L&&x>=r}function I(){var o=U();if(Z(o))return G(o);a=setTimeout(I,ge(o))}function G(o){return a=void 0,O&&s?_(o):(s=i=void 0,c)}function pe(){a!==void 0&&clearTimeout(a),d=0,s=l=i=a=void 0}function ye(){return a===void 0?c:G(U())}function j(){var o=U(),m=Z(o);if(s=arguments,i=this,l=o,m){if(a===void 0)return he(l);if(L)return a=setTimeout(I,t),_(l)}return a===void 0&&(a=setTimeout(I,t)),c}return j.cancel=pe,j.flush=ye,j}function We(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(oe);return D(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),Fe(e,t,{leading:s,maxWait:t,trailing:i})}function D(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ze(e){return!!e&&typeof e=="object"}function Ke(e){return typeof e=="symbol"||ze(e)&&je.call(e)==Me}function ne(e){if(typeof e=="number")return e;if(Ke(e))return te;if(D(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=D(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace($e,"");var n=Ce.test(e);return n||Ne.test(e)?Pe(e.slice(2),n?2:8):De.test(e)?te:+e}var Ve=We;async function z(e="Body parts",t,n,s){P();const i=document.querySelector(".categories-list"),r=document.querySelector('button[data-page="middle"]'),c=document.querySelector('button[data-page="next"]');t===1?(r.disabled=!0,c.disabled=!0):t===2?c.disabled=!0:(r.disabled=!1,c.disabled=!1),s.forEach(a=>{a.classList.remove("active")}),[...s].forEach(a=>{a.innerHTML.trim()===String(n).trim()&&a.classList.add("active")});try{const a=await R(e,n);i.innerHTML=W(a.results)}catch{}finally{H()}}async function ce(e,t,n,s,i){P();const r=document.querySelector(".exercises-list"),c=document.querySelector('button[data-exer="middle"]'),a=document.querySelector('button[data-exer="next"]');n===1?(c.disabled=!0,a.disabled=!0):n===2?a.disabled=!0:(c.disabled=!1,a.disabled=!1),i.forEach(l=>{l.classList.remove("active")}),[...i].forEach(l=>{l.innerHTML.trim()===String(s).trim()&&l.classList.add("active")});try{const l=await re(e,t,s);r.innerHTML=F(l.results)}catch{}finally{H()}}const Xe={catsList:document.querySelector(".categories-list"),exercisesList:document.querySelector(".exercises-list"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exerPaginationList:document.querySelector(".exer-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:E,exercisesList:S,catFilterList:Ze,catPaginationList:A,exerPaginationList:B,exercisesTitleSpan:le,catFilterInput:T}=Xe,y=A.querySelectorAll("button[data-page]"),k=B.querySelectorAll("button[data-exer]");let f="Body parts",h="bodypart",g="",de=[],v=1,w=1,b=1,C=1;E.addEventListener("click",Je);Ze.addEventListener("click",Ge);S.addEventListener("click",tt);T.addEventListener("input",Ve(Ye,300));A.addEventListener("click",Qe);B.addEventListener("click",et);B.classList.add("is-hidden");R().then(e=>{v=e.totalPages,E.insertAdjacentHTML("beforeend",W(e.results)),z(f,v,b,y)}).catch(e=>{console.error(e),be.Notify.failure(e)});async function Ge(e){if(e.target.nodeName!=="BUTTON")return;switch(P(),f=e.target.dataset.name,E.classList.remove("is-hidden","d-none"),A.classList.remove("is-hidden","d-none"),S.classList.add("is-hidden","d-none"),B.classList.add("is-hidden","d-none"),T.value="",document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),f){case"Muscles":h="muscles";break;case"Equipment":h="equipment";break;case"Body parts":h="bodypart";break}try{const n=await R(f,b);v=n.totalPages,b=1;const s=n.results.filter(({filter:i})=>i===f);le.innerHTML="",T.hidden=!0,E.innerHTML=W(s),y.forEach((i,r)=>i.innerHTML=r+1),z(f,v,b,y)}catch{}finally{H()}}async function Je(e){P();try{g=e.target.closest(".categories-item").dataset.bodyPart;const t=await re(h,g);S.innerHTML=F(t.results),le.innerHTML=`<span class="exercises-title-span-page">/</span> ${g}`;const n=t.perPage;w=t.totalPages,C=1,k.forEach((s,i)=>s.innerHTML=i+1),ce(h,g,w,C,k),E.classList.add("is-hidden","d-none"),A.classList.add("is-hidden","d-none"),S.classList.remove("is-hidden","d-none"),B.classList.remove("is-hidden","d-none"),T.hidden=!1,de=await qe(h,g,n,w)}catch{}finally{H()}}function Qe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;b=t.innerHTML,t.dataset.page==="next"&&t.innerHTML<v?y.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.page==="prev"&&t.innerHTML>1?y.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),z(f,v,b,y)}function Ye(e){let t=T.value.toLowerCase().trim("");const n=de.filter(({name:i})=>i.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";S.innerHTML=n.length===0?s:F(n)}function et(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;C=t.innerHTML,t.dataset.exer==="next"&&t.innerHTML<w?k.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.exer==="prev"&&t.innerHTML>1?k.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),ce(h,g,w,C,k)}function tt(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;ve(e,n)}}const{BASE_URL:nt,SUBSCR_EDPOINT:it}=N;function st(e){return q.post(`${nt}${it}`,e,{})}const ue=document.querySelector(".js-footer-form");ue.addEventListener("submit",at);function at(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!rt(n))return $.Notify.failure("Invalid email address was entered.");st({email:n}).then(i=>{const r=i.data.message;$.Notify.success(r)}).catch(i=>{const r=i.response.data.message;i.response.status===409&&$.Notify.warning("Subscription already exists"),i.response.status===400&&$.Notify.warning(r)}),ue.reset()}function rt(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}const ot={root:null,rootMargin:"0px",threshold:0},me=document.querySelector(".footer_logo_icon"),ct=document.querySelector(".footer_title_span"),lt=new IntersectionObserver(dt,ot);lt.observe(me);function dt(e,t){e.forEach(n=>{n.isIntersecting&&(Q.to(me,{duration:2,opacity:1,x:0,rotationX:360}),Q.to(ct,{duration:2,opacity:1}))})}function ut(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${p}#icon-more"></use>
          </svg>
          <h3 class="team-name">${n}</h3>
          <div class="hidden-content">
            <ul class="team-soc-list">
              <li class="team-soc-item">
                <a
                  href="${s}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${p}#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${i}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${p}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}const mt=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],ft=document.querySelector(".team-btn-open"),ht=document.querySelector(".team-btn-close"),K=document.querySelector(".team-list"),V=document.querySelector(".team-backdrop");ft.addEventListener("click",pt);ht.addEventListener("click",X);K.addEventListener("click",vt);V.addEventListener("click",bt);K.insertAdjacentHTML("beforeend",ut(mt));const gt=[...K.children];function pt(){V.classList.remove("is-hidden"),window.addEventListener("keydown",fe),document.body.style.overflow="hidden"}function X(){V.classList.add("is-hidden"),window.removeEventListener("keydown",fe),document.body.style.overflow="auto",yt()}function yt(){gt.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function fe(e){const t="Escape";e.code===t&&X()}function bt(e){e.currentTarget===e.target&&X()}function vt(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
