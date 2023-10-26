import{a as T,A as N,s as p,c as I,n as be,b as te,h as ne,d as ve,N as $,g as G}from"./loader-386c333b.js";const{BASE_URL:Le,QUOTE_ENDPOINT:xe}=N;async function ke(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await T.get(`${Le}${xe}`)).data;if(i&&i.quote&&i.author){const r={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(r));const c=document.querySelector(".quote"),a=document.querySelector(".author");c.textContent=i.quote,a.textContent=i.author}else J()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{J()}}function J(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){ke()});const Q=document.querySelector(".sidebar-infotext");window.addEventListener("load",ie);window.addEventListener("resize",ie);function ie(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=Q.textContent;t.length>e&&(Q.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function r(c,a){if(i)return;i=!0,a.style.display="block",n.setAttribute("data-active","true");let l=c,d,u;a.textContent="110:00",s=setInterval(function(){d=parseInt(l/60,10),u=parseInt(l%60,10),d=d<10?"0"+d:d,u=u<10?"0"+u:u,e.textContent=d+":"+u,--l<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){r(6600,e)})});const{BASE_URL:we,FILTERS_ENDPOINT:Ee}=N;let Se=window.innerWidth<768?9:12;async function j(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:Se,page:t}),s=`${we}${Ee}?${n}`;return(await T.get(s)).data}const{BASE_URL:se,EXERCISE_ENDPOINT:ae}=N;let Te=window.innerWidth<768?8:10;async function re(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:Te,page:n}),i=`${se}${ae}?${s}`;return(await T.get(i)).data}async function qe(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),r=`${se}${ae}?${i}`;return(await T.get(r)).data.results}function U(e){return`${e.map(Be).join("")}`}function Be({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:r}){return`<li class="exercises-item" data-exercise-id="${r}">
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
		</li>`}function R(e){return`${e.map(Ie).join("")}`}function Ie({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var oe="Expected a function",Y=0/0,$e="[object Symbol]",De=/^\s+|\s+$/g,Ce=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Pe=parseInt,He=typeof I=="object"&&I&&I.Object===Object&&I,Ae=typeof self=="object"&&self&&self.Object===Object&&self,Oe=He||Ae||Function("return this")(),_e=Object.prototype,je=_e.toString,Ue=Math.max,Re=Math.min,_=function(){return Oe.Date.now()};function Fe(e,t,n){var s,i,r,c,a,l,d=0,u=!1,v=!1,H=!0;if(typeof e!="function")throw new TypeError(oe);t=ee(t)||0,C(n)&&(u=!!n.leading,v="maxWait"in n,r=v?Ue(ee(n.maxWait)||0,t):r,H="trailing"in n?!!n.trailing:H);function A(o){var m=s,L=i;return s=i=void 0,d=o,c=e.apply(L,m),c}function fe(o){return d=o,a=setTimeout(B,t),u?A(o):c}function ge(o){var m=o-l,L=o-d,Z=t-m;return v?Re(Z,r-L):Z}function V(o){var m=o-l,L=o-d;return l===void 0||m>=t||m<0||v&&L>=r}function B(){var o=_();if(V(o))return X(o);a=setTimeout(B,ge(o))}function X(o){return a=void 0,H&&s?A(o):(s=i=void 0,c)}function pe(){a!==void 0&&clearTimeout(a),d=0,s=l=i=a=void 0}function ye(){return a===void 0?c:X(_())}function O(){var o=_(),m=V(o);if(s=arguments,i=this,l=o,m){if(a===void 0)return fe(l);if(v)return a=setTimeout(B,t),A(l)}return a===void 0&&(a=setTimeout(B,t)),c}return O.cancel=pe,O.flush=ye,O}function We(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(oe);return C(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),Fe(e,t,{leading:s,maxWait:t,trailing:i})}function C(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ze(e){return!!e&&typeof e=="object"}function Ke(e){return typeof e=="symbol"||ze(e)&&je.call(e)==$e}function ee(e){if(typeof e=="number")return e;if(Ke(e))return Y;if(C(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=C(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(De,"");var n=Me.test(e);return n||Ne.test(e)?Pe(e.slice(2),n?2:8):Ce.test(e)?Y:+e}var Ve=We;async function F(e="Body parts",t,n,s){const i=document.querySelector(".categories-list"),r=document.querySelector('button[data-page="middle"]'),c=document.querySelector('button[data-page="next"]');t===1?(r.disabled=!0,c.disabled=!0):t===2?c.disabled=!0:(r.disabled=!1,c.disabled=!1),s.forEach(a=>{a.classList.remove("active")}),[...s].forEach(a=>{a.innerHTML.trim()===String(n).trim()&&a.classList.add("active")});try{const a=await j(e,n);i.innerHTML=R(a.results)}catch{}}async function ce(e,t,n,s,i){const r=document.querySelector(".exercises-list"),c=document.querySelector('button[data-exer="middle"]'),a=document.querySelector('button[data-exer="next"]');n===1?(c.disabled=!0,a.disabled=!0):n===2?a.disabled=!0:(c.disabled=!1,a.disabled=!1),i.forEach(l=>{l.classList.remove("active")}),[...i].forEach(l=>{l.innerHTML.trim()===String(s).trim()&&l.classList.add("active")});try{const l=await re(e,t,s);r.innerHTML=U(l.results)}catch{}}const Xe={catsList:document.querySelector(".categories-list"),exercisesList:document.querySelector(".exercises-list"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exerPaginationList:document.querySelector(".exer-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:w,exercisesList:E,catFilterList:Ze,catPaginationList:P,exerPaginationList:q,exercisesTitleSpan:le,catFilterInput:S}=Xe,x=P.querySelectorAll("button[data-page]"),D=q.querySelectorAll("button[data-exer]");let h="Body parts",f="bodypart",g="",de=[],b=1,k=1,y=1,M=1;w.addEventListener("click",Je);Ze.addEventListener("click",Ge);E.addEventListener("click",tt);S.addEventListener("input",Ve(Ye,300));P.addEventListener("click",Qe);q.addEventListener("click",et);q.classList.add("is-hidden");j().then(e=>{b=e.totalPages,w.insertAdjacentHTML("beforeend",R(e.results)),F(h,b,y,x)}).catch(e=>{console.error(e),be.Notify.failure(e)});async function Ge(e){if(e.target.nodeName!=="BUTTON")return;switch(te(),h=e.target.dataset.name,w.classList.remove("is-hidden","d-none"),P.classList.remove("is-hidden","d-none"),E.classList.add("is-hidden","d-none"),q.classList.add("is-hidden","d-none"),S.value="",document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),h){case"Muscles":f="muscles";break;case"Equipment":f="equipment";break;case"Body parts":f="bodypart";break}try{const n=await j(h,y);b=n.totalPages,y=1;const s=n.results.filter(({filter:i})=>i===h);le.innerHTML="",S.hidden=!0,w.innerHTML=R(s),F(h,b,y,x)}catch{}finally{ne()}}async function Je(e){te();try{g=e.target.closest(".categories-item").dataset.bodyPart;const t=await re(f,g);E.innerHTML=U(t.results),le.innerHTML=`<span class="exercises-title-span-page">/</span> ${g}`;const n=t.perPage;k=t.totalPages,M=1,ce(f,g,k,M,D),w.classList.add("is-hidden","d-none"),P.classList.add("is-hidden","d-none"),E.classList.remove("is-hidden","d-none"),q.classList.remove("is-hidden","d-none"),S.hidden=!1,de=await qe(f,g,n,k)}catch{}finally{ne()}}function Qe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;y=t.innerHTML,t.dataset.page==="next"&&t.innerHTML<b?x.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.page==="prev"&&t.innerHTML>1?x.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),F(h,b,y,x)}function Ye(e){let t=S.value.toLowerCase().trim("");const n=de.filter(({name:i})=>i.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";E.innerHTML=n.length===0?s:U(n)}function et(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;M=t.innerHTML,t.dataset.exer==="next"&&t.innerHTML<k?D.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.exer==="prev"&&t.innerHTML>1?D.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),ce(f,g,k,M,D)}function tt(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;ve(e,n)}}const{BASE_URL:nt,SUBSCR_EDPOINT:it}=N;function st(e){return T.post(`${nt}${it}`,e,{})}const ue=document.querySelector(".js-footer-form");ue.addEventListener("submit",at);function at(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!rt(n))return $.Notify.failure("Invalid email address was entered.");st({email:n}).then(i=>{const r=i.data.message;$.Notify.success(r)}).catch(i=>{const r=i.response.data.message;i.response.status===409&&$.Notify.warning("Subscription already exists"),i.response.status===400&&$.Notify.warning(r)}),ue.reset()}function rt(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}const ot={root:null,rootMargin:"0px",threshold:0},me=document.querySelector(".footer_logo_icon"),ct=document.querySelector(".footer_title_span"),lt=new IntersectionObserver(dt,ot);lt.observe(me);function dt(e,t){e.forEach(n=>{n.isIntersecting&&(G.to(me,{duration:2,opacity:1,x:0,rotationX:360}),G.to(ct,{duration:2,opacity:1}))})}function ut(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
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
`}).join("")}const mt=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],ht=document.querySelector(".team-btn-open"),ft=document.querySelector(".team-btn-close"),W=document.querySelector(".team-list"),z=document.querySelector(".team-backdrop");ht.addEventListener("click",pt);ft.addEventListener("click",K);W.addEventListener("click",vt);z.addEventListener("click",bt);W.insertAdjacentHTML("beforeend",ut(mt));const gt=[...W.children];function pt(){z.classList.remove("is-hidden"),window.addEventListener("keydown",he),document.body.style.overflow="hidden"}function K(){z.classList.add("is-hidden"),window.removeEventListener("keydown",he),document.body.style.overflow="auto",yt()}function yt(){gt.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function he(e){const t="Escape";e.code===t&&K()}function bt(e){e.currentTarget===e.target&&K()}function vt(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
