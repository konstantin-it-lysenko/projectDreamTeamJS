import{a as w,A as I,s as g,c as L,h as de,N as S,g as W}from"./loader-bcb9049c.js";const{BASE_URL:ue,QUOTE_ENDPOINT:me}=I;async function he(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await w.get(`${ue}${me}`)).data;if(i&&i.quote&&i.author){const a={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(a));const c=document.querySelector(".quote"),o=document.querySelector(".author");c.textContent=i.quote,o.textContent=i.author}else z()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{z()}}function z(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){he()});const K=document.querySelector(".sidebar-infotext");window.addEventListener("load",Z);window.addEventListener("resize",Z);function Z(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=K.textContent;t.length>e&&(K.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function a(c,o){if(i)return;i=!0,o.style.display="block",n.setAttribute("data-active","true");let d=c,l,u;o.textContent="110:00",s=setInterval(function(){l=parseInt(d/60,10),u=parseInt(d%60,10),l=l<10?"0"+l:l,u=u<10?"0"+u:u,e.textContent=l+":"+u,--d<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){a(6600,e)})});const{BASE_URL:ge,FILTERS_ENDPOINT:fe}=I;let pe=window.innerWidth<768?9:12;async function N(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:pe,page:t}),s=`${ge}${fe}?${n}`;return(await w.get(s)).data}const{BASE_URL:G,EXERCISE_ENDPOINT:J}=I;let ye=window.innerWidth<768?8:10;async function be(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:ye,page:n}),i=`${G}${J}?${s}`;return(await w.get(i)).data}async function ve(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),a=`${G}${J}?${i}`;return(await w.get(a)).data.results}function Q(e){return`<ul class="exercises-list">${e.map(ke).join("")}</ul>
	<ul class="exer-pagination-list"></ul>`}function ke({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:a}){return`<li class="exercises-item" data-exercise-id="${a}">
			<div class="exercises-header">
				<div class="exercises-meta-container">
					<p class="exercises-meta">WORKOUT</p>
					<p class="exercises-rating">
						${e.toFixed(1)}
						<svg width="18" height="18" class="exercises-svg">
							<use href="${g}#icon-star"></use>
						</svg>
					</p>
				</div>
				<button type="button" class="exercises-btn" data-modal-exercise="open">
					Start
					<svg width="16" height="16" class="exercises-btn-svg">
						<use href="${g}#icon-arrow-up"></use>
					</svg>
				</button>
			</div>
			<div class="exercises-name-container">
				<span class="exercises-name-span">
				<svg width="20" height="20" class="exercises-name-svg">
					<use href="${g}#icon-running-stick"></use>
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
		</li>`}function A(e){return`<ul class="categories-list">${e.map(xe).join("")}</ul>`}function xe({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var Y="Expected a function",V=0/0,we="[object Symbol]",Ee=/^\s+|\s+$/g,Le=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Te=/^0o[0-7]+$/i,Be=parseInt,Ie=typeof L=="object"&&L&&L.Object===Object&&L,qe=typeof self=="object"&&self&&self.Object===Object&&self,De=Ie||qe||Function("return this")(),$e=Object.prototype,Ce=$e.toString,Pe=Math.max,Ne=Math.min,P=function(){return De.Date.now()};function Ae(e,t,n){var s,i,a,c,o,d,l=0,u=!1,y=!1,D=!0;if(typeof e!="function")throw new TypeError(Y);t=X(t)||0,B(n)&&(u=!!n.leading,y="maxWait"in n,a=y?Pe(X(n.maxWait)||0,t):a,D="trailing"in n?!!n.trailing:D);function $(r){var m=s,b=i;return s=i=void 0,l=r,c=e.apply(b,m),c}function re(r){return l=r,o=setTimeout(E,t),u?$(r):c}function oe(r){var m=r-d,b=r-l,F=t-m;return y?Ne(F,a-b):F}function R(r){var m=r-d,b=r-l;return d===void 0||m>=t||m<0||y&&b>=a}function E(){var r=P();if(R(r))return U(r);o=setTimeout(E,oe(r))}function U(r){return o=void 0,D&&s?$(r):(s=i=void 0,c)}function ce(){o!==void 0&&clearTimeout(o),l=0,s=d=i=o=void 0}function le(){return o===void 0?c:U(P())}function C(){var r=P(),m=R(r);if(s=arguments,i=this,d=r,m){if(o===void 0)return re(d);if(y)return o=setTimeout(E,t),$(d)}return o===void 0&&(o=setTimeout(E,t)),c}return C.cancel=ce,C.flush=le,C}function Oe(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(Y);return B(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),Ae(e,t,{leading:s,maxWait:t,trailing:i})}function B(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Me(e){return!!e&&typeof e=="object"}function _e(e){return typeof e=="symbol"||Me(e)&&Ce.call(e)==we}function X(e){if(typeof e=="number")return e;if(_e(e))return V;if(B(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=B(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ee,"");var n=Se.test(e);return n||Te.test(e)?Be(e.slice(2),n?2:8):Le.test(e)?V:+e}var je=Oe;async function O(e="Body parts",t,n){const s=document.querySelector(".categories-wrapper"),i=document.querySelector('button[data-page="middle"]'),a=document.querySelector('button[data-page="next"]');t===1?(i.disabled=!0,a.disabled=!0):t===2?a.disabled=!0:(i.disabled=!1,a.disabled=!1);try{const c=await N(e,n);s.innerHTML=A(c.results)}catch{}}const He={catsList:document.querySelector(".categories-wrapper"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exerPaginationList:document.querySelector(".exer-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:k,catFilterList:Re,catPaginationList:q,exerPaginationList:M,exercisesTitleSpan:ee,catFilterInput:x}=He,T=q.querySelectorAll("button[data-page]");let h="Body parts",v="bodypart",te=[],p=1,f=1;Re.addEventListener("click",Ue);x.addEventListener("input",je(ze,300));q.addEventListener("click",Fe);M.classList.add("is-hidden");N().then(e=>{p=e.totalPages,k.insertAdjacentHTML("beforeend",A(e.results)),k.addEventListener("click",We),O(h,p,f)}).catch(e=>console.log(e));async function Ue(e){if(e.target.nodeName!=="BUTTON")return;switch(h=e.target.dataset.name,q.classList.remove("is-hidden"),M.classList.add("is-hidden"),x.value="",document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),h){case"Muscles":v="muscles";break;case"Equipment":v="equipment";break;case"Body parts":v="bodypart";break}try{const n=await N(h);p=n.totalPages,f=n.page;const s=n.results.filter(({filter:a})=>a===h);let i=1;T.forEach(a=>{a.innerText=i,i+=1}),ee.innerHTML="",x.hidden=!0,k.innerHTML=A(s),O(h,p,f)}catch{}}function Fe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;f=t.innerHTML,T.forEach(n=>{n.classList.remove("active")}),t.dataset.page==="next"&&t.innerText<p?T.forEach(n=>{const s=Number(n.innerText);n.innerText=s+1}):t.dataset.page==="prev"&&t.innerText>1?T.forEach(n=>{const s=Number(n.innerText);n.innerText=s-1}):t.classList.add("active"),console.log("Btn Text",t.innerText),console.log("Page",f),O(h,p,f)}async function We(e){try{const t=e.target.closest(".categories-item").dataset.bodyPart,n=await be(v,t),s=n.perPage,i=n.totalPages;k.innerHTML=Q(n.results),q.classList.add("is-hidden"),M.classList.remove("is-hidden"),x.hidden=!1,ee.innerHTML=t,document.querySelector(".exercises-list").addEventListener("click",ne),te=await ve(v,t,s,i)}catch{}}function ze(e){let t=x.value.toLowerCase().trim("");const n=te.filter(({name:a})=>a.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";k.innerHTML=n.length===0?s:Q(n),document.querySelector(".exercises-list").addEventListener("click",ne)}function ne(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;de(e,n)}}const{BASE_URL:Ke,SUBSCR_EDPOINT:Ve}=I;function Xe(e){return w.post(`${Ke}${Ve}`,e,{})}const ie=document.querySelector(".js-footer-form");ie.addEventListener("submit",Ze);function Ze(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!Ge(n))return S.Notify.failure("Invalid email address was entered.");Xe({email:n}).then(i=>{const a=i.data.message;S.Notify.success(a)}).catch(i=>{const a=i.response.data.message;i.response.status===409&&S.Notify.warning("Subscription already exists"),i.response.status===400&&S.Notify.warning(a)}),ie.reset()}function Ge(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}const Je={root:null,rootMargin:"0px",threshold:0},se=document.querySelector(".footer_logo_icon"),Qe=document.querySelector(".footer_title_span"),Ye=new IntersectionObserver(et,Je);Ye.observe(se);function et(e,t){e.forEach(n=>{n.isIntersecting&&(W.to(se,{duration:2,opacity:1,x:0,rotationX:360}),W.to(Qe,{duration:2,opacity:1}))})}function tt(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${g}#icon-more"></use>
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
                    <use href="${g}#icon-linkedin"></use>
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
                    <use href="${g}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}const nt=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],it=document.querySelector(".team-btn-open"),st=document.querySelector(".team-btn-close"),_=document.querySelector(".team-list"),j=document.querySelector(".team-backdrop");it.addEventListener("click",rt);st.addEventListener("click",H);_.addEventListener("click",lt);j.addEventListener("click",ct);_.insertAdjacentHTML("beforeend",tt(nt));const at=[..._.children];function rt(){j.classList.remove("is-hidden"),window.addEventListener("keydown",ae),document.body.style.overflow="hidden"}function H(){j.classList.add("is-hidden"),window.removeEventListener("keydown",ae),document.body.style.overflow="auto",ot()}function ot(){at.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function ae(e){const t="Escape";e.code===t&&H()}function ct(e){e.currentTarget===e.target&&H()}function lt(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
