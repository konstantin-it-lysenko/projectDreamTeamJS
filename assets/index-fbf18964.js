import{a as B,A as P,s as p,c as M,b as H,h as A,n as Le,d as xe,N as $,g as Y}from"./loader-5145ef20.js";const{BASE_URL:ke,QUOTE_ENDPOINT:we}=P;async function Ee(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await B.get(`${ke}${we}`)).data;if(i&&i.quote&&i.author){const r={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(r));const c=document.querySelector(".quote"),a=document.querySelector(".author");c.textContent=i.quote,a.textContent=i.author}else ee()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{ee()}}function ee(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){Ee()});const te=document.querySelector(".sidebar-infotext");window.addEventListener("load",se);window.addEventListener("resize",se);function se(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=te.textContent;t.length>e&&(te.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function r(c,a){if(i)return;i=!0,a.style.display="block",n.setAttribute("data-active","true");let l=c,d,u;a.textContent="110:00",s=setInterval(function(){d=parseInt(l/60,10),u=parseInt(l%60,10),d=d<10?"0"+d:d,u=u<10?"0"+u:u,e.textContent=d+":"+u,--l<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){r(6600,e)})});const{BASE_URL:Se,FILTERS_ENDPOINT:Te}=P;let qe=window.innerWidth<768?9:12;async function F(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:qe,page:t}),s=`${Se}${Te}?${n}`;return(await B.get(s)).data}const{BASE_URL:ae,EXERCISE_ENDPOINT:re}=P;let Be=window.innerWidth<768?8:10;async function oe(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:Be,page:n}),i=`${ae}${re}?${s}`;return(await B.get(i)).data}async function Ie(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),r=`${ae}${re}?${i}`;return(await B.get(r)).data.results}function W(e){return`${e.map(Ce).join("")}`}function Ce({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:r}){return`<li class="exercises-item" data-exercise-id="${r}">
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
		</li>`}function z(e){return`${e.map(Me).join("")}`}function Me({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var ce="Expected a function",ne=0/0,$e="[object Symbol]",De=/^\s+|\s+$/g,Ne=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,He=/^0o[0-7]+$/i,Ae=parseInt,Oe=typeof M=="object"&&M&&M.Object===Object&&M,_e=typeof self=="object"&&self&&self.Object===Object&&self,je=Oe||_e||Function("return this")(),Ue=Object.prototype,Re=Ue.toString,Fe=Math.max,We=Math.min,R=function(){return je.Date.now()};function ze(e,t,n){var s,i,r,c,a,l,d=0,u=!1,L=!1,_=!0;if(typeof e!="function")throw new TypeError(ce);t=ie(t)||0,D(n)&&(u=!!n.leading,L="maxWait"in n,r=L?Fe(ie(n.maxWait)||0,t):r,_="trailing"in n?!!n.trailing:_);function j(o){var m=s,x=i;return s=i=void 0,d=o,c=e.apply(x,m),c}function pe(o){return d=o,a=setTimeout(C,t),u?j(o):c}function ye(o){var m=o-l,x=o-d,Q=t-m;return L?We(Q,r-x):Q}function G(o){var m=o-l,x=o-d;return l===void 0||m>=t||m<0||L&&x>=r}function C(){var o=R();if(G(o))return J(o);a=setTimeout(C,ye(o))}function J(o){return a=void 0,_&&s?j(o):(s=i=void 0,c)}function be(){a!==void 0&&clearTimeout(a),d=0,s=l=i=a=void 0}function ve(){return a===void 0?c:J(R())}function U(){var o=R(),m=G(o);if(s=arguments,i=this,l=o,m){if(a===void 0)return pe(l);if(L)return a=setTimeout(C,t),j(l)}return a===void 0&&(a=setTimeout(C,t)),c}return U.cancel=be,U.flush=ve,U}function Ke(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(ce);return D(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),ze(e,t,{leading:s,maxWait:t,trailing:i})}function D(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ve(e){return!!e&&typeof e=="object"}function Xe(e){return typeof e=="symbol"||Ve(e)&&Re.call(e)==$e}function ie(e){if(typeof e=="number")return e;if(Xe(e))return ne;if(D(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=D(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(De,"");var n=Pe.test(e);return n||He.test(e)?Ae(e.slice(2),n?2:8):Ne.test(e)?ne:+e}var Ze=Ke;async function K(e="Body parts",t,n,s){H();const i=document.querySelector(".categories-list"),r=document.querySelector('button[data-page="middle"]'),c=document.querySelector('button[data-page="next"]');t===1?(r.disabled=!0,c.disabled=!0):t===2?c.disabled=!0:(r.disabled=!1,c.disabled=!1),s.forEach(a=>{a.classList.remove("active")}),[...s].forEach(a=>{a.innerHTML.trim()===String(n).trim()&&a.classList.add("active")});try{const a=await F(e,n);i.innerHTML=z(a.results)}catch{}finally{A()}}async function le(e,t,n,s,i){H();const r=document.querySelector(".exercises-list"),c=document.querySelector('button[data-exer="middle"]'),a=document.querySelector('button[data-exer="next"]');n===1?(c.disabled=!0,a.disabled=!0):n===2?a.disabled=!0:(c.disabled=!1,a.disabled=!1),i.forEach(l=>{l.classList.remove("active")}),[...i].forEach(l=>{l.innerHTML.trim()===String(s).trim()&&l.classList.add("active")});try{const l=await oe(e,t,s);r.innerHTML=W(l.results)}catch{}finally{A()}}const Ge={catsList:document.querySelector(".categories-list"),exercisesList:document.querySelector(".exercises-list"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exerPaginationList:document.querySelector(".exer-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:S,exercisesList:T,catFilterList:Je,catPaginationList:O,exerPaginationList:I,exercisesTitleSpan:de,catFilterInput:q}=Ge,y=O.querySelectorAll("button[data-page]"),w=I.querySelectorAll("button[data-exer]");let f="Body parts",h="bodypart",g="",ue=[],v=1,E=1,b=1,N=1;S.addEventListener("click",Ye);Je.addEventListener("click",Qe);T.addEventListener("click",it);q.addEventListener("input",Ze(tt,300));O.addEventListener("click",et);I.addEventListener("click",nt);I.classList.add("is-hidden");F().then(e=>{v=e.totalPages,S.insertAdjacentHTML("beforeend",z(e.results)),K(f,v,b,y)}).catch(e=>{console.error(e),Le.Notify.failure(e)});async function Qe(e){if(e.target.nodeName!=="BUTTON")return;switch(H(),f=e.target.dataset.name,S.classList.remove("is-hidden","d-none"),O.classList.remove("is-hidden","d-none"),T.classList.add("is-hidden","d-none"),I.classList.add("is-hidden","d-none"),q.value="",document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),f){case"Muscles":h="muscles";break;case"Equipment":h="equipment";break;case"Body parts":h="bodypart";break}try{const n=await F(f,b);v=n.totalPages,b=1;const s=n.results.filter(({filter:i})=>i===f);de.innerHTML="",q.hidden=!0,S.innerHTML=z(s),y.forEach((i,r)=>i.innerHTML=r+1),K(f,v,b,y)}catch{}finally{A()}}async function Ye(e){H();try{g=e.target.closest(".categories-item").dataset.bodyPart;const t=await oe(h,g);T.innerHTML=W(t.results),de.innerHTML=`<span class="exercises-title-span-page">/</span> ${g}`;const n=t.perPage;E=t.totalPages,N=1,w.forEach((s,i)=>s.innerHTML=i+1),le(h,g,E,N,w),S.classList.add("is-hidden","d-none"),O.classList.add("is-hidden","d-none"),T.classList.remove("is-hidden","d-none"),I.classList.remove("is-hidden","d-none"),q.hidden=!1,ue=await Ie(h,g,n,E)}catch{}finally{A()}}function et(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;b=t.innerHTML,t.dataset.page==="next"&&t.innerHTML<v?y.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.page==="prev"&&t.innerHTML>1?y.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),K(f,v,b,y)}function tt(e){let t=q.value.toLowerCase().trim("");const n=ue.filter(({name:i})=>i.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";T.innerHTML=n.length===0?s:W(n)}function nt(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;N=t.innerHTML,t.dataset.exer==="next"&&t.innerHTML<E?w.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.exer==="prev"&&t.innerHTML>1?w.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),le(h,g,E,N,w)}function it(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;xe(e,n)}}const{BASE_URL:st,SUBSCR_EDPOINT:at}=P;function rt(e){return B.post(`${st}${at}`,e,{})}const me=document.querySelector(".js-footer-form"),k=document.querySelector(".footer_form_btn");me.addEventListener("submit",ot);function fe(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}k.disabled=!0;emailInput.addEventListener("input",()=>{const e=emailInput.value;fe(e)?(k.style.backgroundColor="#c6cdd1",k.disabled=!1):(k.style.backgroundColor="#f4f4f4",k.disabled=!0)});function ot(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!fe(n))return $.Notify.failure("Invalid email address was entered.");rt({email:n}).then(i=>{const r=i.data.message;$.Notify.success(r)}).catch(i=>{const r=i.response.data.message;i.response.status===409&&$.Notify.warning("Subscription already exists"),i.response.status===400&&$.Notify.warning(r)}),me.reset()}const ct={root:null,rootMargin:"0px",threshold:0},he=document.querySelector(".footer_logo_icon"),lt=document.querySelector(".footer_title_span"),dt=new IntersectionObserver(ut,ct);dt.observe(he);function ut(e,t){e.forEach(n=>{n.isIntersecting&&(Y.to(he,{duration:2,opacity:1,x:0,rotationX:360}),Y.to(lt,{duration:2,opacity:1}))})}function mt(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
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
`}).join("")}const ft=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],ht=document.querySelector(".team-btn-open"),gt=document.querySelector(".team-btn-close"),V=document.querySelector(".team-list"),X=document.querySelector(".team-backdrop");ht.addEventListener("click",yt);gt.addEventListener("click",Z);V.addEventListener("click",Lt);X.addEventListener("click",vt);V.insertAdjacentHTML("beforeend",mt(ft));const pt=[...V.children];function yt(){X.classList.remove("is-hidden"),window.addEventListener("keydown",ge),document.body.style.overflow="hidden"}function Z(){X.classList.add("is-hidden"),window.removeEventListener("keydown",ge),document.body.style.overflow="auto",bt()}function bt(){pt.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function ge(e){const t="Escape";e.code===t&&Z()}function vt(e){e.currentTarget===e.target&&Z()}function Lt(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
