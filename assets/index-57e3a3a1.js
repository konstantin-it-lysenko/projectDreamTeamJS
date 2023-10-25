import{a as w,A as B,s as f,c as S,h as le,N as L,g as U}from"./loader-ad3a5d9d.js";const{BASE_URL:de,QUOTE_ENDPOINT:ue}=B;async function me(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await w.get(`${de}${ue}`)).data;if(i&&i.quote&&i.author){const a={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(a));const c=document.querySelector(".quote"),o=document.querySelector(".author");c.textContent=i.quote,o.textContent=i.author}else F()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{F()}}function F(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){me()});const W=document.querySelector(".sidebar-infotext");window.addEventListener("load",V);window.addEventListener("resize",V);function V(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=W.textContent;t.length>e&&(W.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function a(c,o){if(i)return;i=!0,o.style.display="block",n.setAttribute("data-active","true");let d=c,l,u;o.textContent="110:00",s=setInterval(function(){l=parseInt(d/60,10),u=parseInt(d%60,10),l=l<10?"0"+l:l,u=u<10?"0"+u:u,e.textContent=l+":"+u,--d<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){a(6600,e)})});const{BASE_URL:he,FILTERS_ENDPOINT:fe}=B;let ge=window.innerWidth<768?9:12;async function P(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:ge,page:t}),s=`${he}${fe}?${n}`;return(await w.get(s)).data}const{BASE_URL:X,EXERCISE_ENDPOINT:Z}=B;let pe=window.innerWidth<768?8:10;async function ye(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:pe,page:n}),i=`${X}${Z}?${s}`;return(await w.get(i)).data}async function be(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),a=`${X}${Z}?${i}`;return(await w.get(a)).data.results}function G(e){return`<ul class="exercises-list">${e.map(ve).join("")}</ul>
	<ul class="exer-pagination-list"></ul>`}function ve({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:a}){return`<li class="exercises-item" data-exercise-id="${a}">
			<div class="exercises-header">
				<div class="exercises-meta-container">
					<p class="exercises-meta">WORKOUT</p>
					<p class="exercises-rating">
						${e.toFixed(1)}
						<svg width="18" height="18" class="exercises-svg">
							<use href="${f}#icon-star"></use>
						</svg>
					</p>
				</div>
				<button type="button" class="exercises-btn" data-modal-exercise="open">
					Start
					<svg width="16" height="16" class="exercises-btn-svg">
						<use href="${f}#icon-arrow-up"></use>
					</svg>
				</button>
			</div>
			<div class="exercises-name-container">
				<span class="exercises-name-span">
				<svg width="20" height="20" class="exercises-name-svg">
					<use href="${f}#icon-running-stick"></use>
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
		</li>`}function N(e){return`<ul class="categories-list">${e.map(ke).join("")}</ul>`}function ke({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var J="Expected a function",z=0/0,xe="[object Symbol]",we=/^\s+|\s+$/g,Ee=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Le=/^0o[0-7]+$/i,Te=parseInt,Be=typeof S=="object"&&S&&S.Object===Object&&S,Ie=typeof self=="object"&&self&&self.Object===Object&&self,qe=Be||Ie||Function("return this")(),De=Object.prototype,$e=De.toString,Ce=Math.max,Pe=Math.min,$=function(){return qe.Date.now()};function Ne(e,t,n){var s,i,a,c,o,d,l=0,u=!1,y=!1,I=!0;if(typeof e!="function")throw new TypeError(J);t=K(t)||0,T(n)&&(u=!!n.leading,y="maxWait"in n,a=y?Ce(K(n.maxWait)||0,t):a,I="trailing"in n?!!n.trailing:I);function q(r){var m=s,b=i;return s=i=void 0,l=r,c=e.apply(b,m),c}function ae(r){return l=r,o=setTimeout(E,t),u?q(r):c}function re(r){var m=r-d,b=r-l,R=t-m;return y?Pe(R,a-b):R}function H(r){var m=r-d,b=r-l;return d===void 0||m>=t||m<0||y&&b>=a}function E(){var r=$();if(H(r))return j(r);o=setTimeout(E,re(r))}function j(r){return o=void 0,I&&s?q(r):(s=i=void 0,c)}function oe(){o!==void 0&&clearTimeout(o),l=0,s=d=i=o=void 0}function ce(){return o===void 0?c:j($())}function D(){var r=$(),m=H(r);if(s=arguments,i=this,d=r,m){if(o===void 0)return ae(d);if(y)return o=setTimeout(E,t),q(d)}return o===void 0&&(o=setTimeout(E,t)),c}return D.cancel=oe,D.flush=ce,D}function Ae(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(J);return T(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),Ne(e,t,{leading:s,maxWait:t,trailing:i})}function T(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Oe(e){return!!e&&typeof e=="object"}function Me(e){return typeof e=="symbol"||Oe(e)&&$e.call(e)==xe}function K(e){if(typeof e=="number")return e;if(Me(e))return z;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(we,"");var n=Se.test(e);return n||Le.test(e)?Te(e.slice(2),n?2:8):Ee.test(e)?z:+e}var _e=Ae;async function A(e="Body parts",t,n){const s=document.querySelector(".categories-wrapper"),i=document.querySelector('button[data-page="middle"]'),a=document.querySelector('button[data-page="next"]');t===1?(i.disabled=!0,a.disabled=!0):t===2?a.disabled=!0:(i.disabled=!1,a.disabled=!1);try{const c=await P(e,n);s.innerHTML=N(c.results)}catch{}}const He={catsList:document.querySelector(".categories-wrapper"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:k,catFilterList:je,catPaginationList:Q,exercisesTitleSpan:Y,catFilterInput:g}=He,C=Q.querySelectorAll("button[data-page]");let h="Body parts",v="bodypart",ee=[],p=1,x=1;je.addEventListener("click",Re);g.addEventListener("input",_e(We,300));Q.addEventListener("click",Ue);P().then(e=>{p=e.totalPages,k.insertAdjacentHTML("beforeend",N(e.results)),k.addEventListener("click",Fe),A(h,p,x)}).catch(e=>console.log(e));async function Re(e){if(e.target.nodeName!=="BUTTON")return;switch(g.value="",h=e.target.dataset.name,document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),h){case"Muscles":v="muscles";break;case"Equipment":v="equipment";break;case"Body parts":v="bodypart";break}try{const n=await P(h);p=n.totalPages,x=n.page;const s=n.results.filter(({filter:a})=>a===h);let i=1;C.forEach(a=>{a.innerText=i,i+=1}),Y.innerHTML="",g.hidden=!0,k.innerHTML=N(s),A(h,p,x)}catch{}}function Ue(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;x=t.innerHTML,t.dataset.page==="next"&&t.innerText<p?C.forEach(n=>{const s=Number(n.innerText);n.innerText=s+1}):t.dataset.page==="prev"&&t.innerText>1&&C.forEach(n=>{const s=Number(n.innerText);n.innerText=s-1}),A(h,p,x)}async function Fe(e){try{g.hidden=!1;const t=e.target.closest(".categories-item").dataset.bodyPart,n=await ye(v,t),s=n.perPage,i=n.totalPages;k.innerHTML=G(n.results),document.querySelector(".exercises-list").addEventListener("click",te),Y.innerHTML=t,ee=await be(v,t,s,i),g.hidden=!1}catch{}}function We(e){let t=g.value.toLowerCase().trim("");const n=ee.filter(({name:a})=>a.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";k.innerHTML=n.length===0?s:G(n),document.querySelector(".exercises-list").addEventListener("click",te)}function te(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;console.log("💖 ~ exericesModalBtnsHandler ~ exerciseId:",n),le(e,n)}}const{BASE_URL:ze,SUBSCR_EDPOINT:Ke}=B;function Ve(e){return w.post(`${ze}${Ke}`,e,{})}const ne=document.querySelector(".js-footer-form");ne.addEventListener("submit",Xe);function Xe(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!Ze(n))return L.Notify.failure("Invalid email address was entered.");Ve({email:n}).then(i=>{const a=i.data.message;L.Notify.success(a)}).catch(i=>{const a=i.response.data.message;i.response.status===409&&L.Notify.warning("Subscription already exists"),i.response.status===400&&L.Notify.warning(a)}),ne.reset()}function Ze(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}const Ge={root:null,rootMargin:"0px",threshold:0},ie=document.querySelector(".footer_logo_icon"),Je=document.querySelector(".footer_title_span"),Qe=new IntersectionObserver(Ye,Ge);Qe.observe(ie);function Ye(e,t){e.forEach(n=>{n.isIntersecting&&(U.to(ie,{duration:2,opacity:1,x:0,rotationX:360}),U.to(Je,{duration:2,opacity:1}))})}function et(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${f}#icon-more"></use>
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
                    <use href="${f}#icon-linkedin"></use>
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
                    <use href="${f}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}const tt=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],nt=document.querySelector(".team-btn-open"),it=document.querySelector(".team-btn-close"),O=document.querySelector(".team-list"),M=document.querySelector(".team-backdrop");nt.addEventListener("click",at);it.addEventListener("click",_);O.addEventListener("click",ct);M.addEventListener("click",ot);O.insertAdjacentHTML("beforeend",et(tt));const st=[...O.children];function at(){M.classList.remove("is-hidden"),window.addEventListener("keydown",se),document.body.style.overflow="hidden"}function _(){M.classList.add("is-hidden"),window.removeEventListener("keydown",se),document.body.style.overflow="auto",rt()}function rt(){st.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function se(e){const t="Escape";e.code===t&&_()}function ot(e){e.currentTarget===e.target&&_()}function ct(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
