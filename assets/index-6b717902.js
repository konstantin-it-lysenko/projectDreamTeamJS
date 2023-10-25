import{a as T,A as C,s as g,c as I,h as pe,N as D,g as G}from"./loader-461709c3.js";const{BASE_URL:ye,QUOTE_ENDPOINT:be}=C;async function ve(){try{const t=new Date().toDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(!n||t!==n.quoteDate){const i=(await T.get(`${ye}${be}`)).data;if(i&&i.quote&&i.author){const a={quote:i.quote,author:i.author,quoteDate:t};localStorage.setItem("quoteData",JSON.stringify(a));const c=document.querySelector(".quote"),o=document.querySelector(".author");c.textContent=i.quote,o.textContent=i.author}else J()}else{const s=document.querySelector(".quote"),i=document.querySelector(".author");s.textContent=n.quote,i.textContent=n.author}}catch{J()}}function J(){const e=document.getElementById("app"),t=document.getElementById("sidebar-error");e.style.display="none",t.style.display="block"}document.addEventListener("DOMContentLoaded",function(){ve()});const Q=document.querySelector(".sidebar-infotext");window.addEventListener("load",te);window.addEventListener("resize",te);function te(){let e;window.innerWidth>=1440?e=560:window.innerWidth>=768&&window.innerWidth<1440?e=260:window.innerWidth>=375&&window.innerWidth<768?e=216:e=170;const t=Q.textContent;t.length>e&&(Q.textContent=t.slice(0,e)+"...")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("timerValue"),t=document.getElementById("startTimerListItem"),n=document.querySelector(".sidebar-timerstart");let s,i=!1;function a(c,o){if(i)return;i=!0,o.style.display="block",n.setAttribute("data-active","true");let d=c,l,u;o.textContent="110:00",s=setInterval(function(){l=parseInt(d/60,10),u=parseInt(d%60,10),l=l<10?"0"+l:l,u=u<10?"0"+u:u,e.textContent=l+":"+u,--d<0&&(clearInterval(s),e.textContent="00:00",i=!1,n.setAttribute("data-active","false"))},1e3)}t.addEventListener("click",function(){a(6600,e)})});const{BASE_URL:xe,FILTERS_ENDPOINT:Le}=C;let ke=window.innerWidth<768?9:12;async function j(e="Body parts",t=1){const n=new URLSearchParams({filter:e,limit:ke,page:t}),s=`${xe}${Le}?${n}`;return(await T.get(s)).data}const{BASE_URL:ne,EXERCISE_ENDPOINT:ie}=C;let we=window.innerWidth<768?8:10;async function se(e,t,n=1){const s=new URLSearchParams({[e]:t,limit:we,page:n}),i=`${ne}${ie}?${s}`;return(await T.get(i)).data}async function Ee(e,t,n,s){const i=new URLSearchParams({[e]:t,limit:n*s}),a=`${ne}${ie}?${i}`;return(await T.get(a)).data.results}function U(e){return`<ul class="exercises-list">${e.map(Se).join("")}</ul>`}function Se({rating:e,name:t,burnedCalories:n,bodyPart:s,target:i,_id:a}){return`<li class="exercises-item" data-exercise-id="${a}">
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
		</li>`}function R(e){return`<ul class="categories-list">${e.map(Te).join("")}</ul>`}function Te({filter:e,name:t,imgURL:n}){return`<li class="categories-item" data-body-part='${t}'>
			<button type="button" class="categories-btn categories-img"  alt="${t}" style='background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n}), lightgray -69.24px -3px / 129.788% 103.306% no-repeat;
background-size: cover;
	background-position: center;'
				
				<div class="categories-info">
					<h3 class="category-title">${t}</h3>
					<p class="category-descr">${e}</p>
				</div>
			</button>
		</li>`}var ae="Expected a function",Y=0/0,Be="[object Symbol]",qe=/^\s+|\s+$/g,Ie=/^[-+]0x[0-9a-f]+$/i,De=/^0b[01]+$/i,Pe=/^0o[0-7]+$/i,$e=parseInt,Ce=typeof I=="object"&&I&&I.Object===Object&&I,Me=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Ce||Me||Function("return this")(),He=Object.prototype,Ae=He.toString,Oe=Math.max,_e=Math.min,_=function(){return Ne.Date.now()};function je(e,t,n){var s,i,a,c,o,d,l=0,u=!1,v=!1,H=!0;if(typeof e!="function")throw new TypeError(ae);t=ee(t)||0,P(n)&&(u=!!n.leading,v="maxWait"in n,a=v?Oe(ee(n.maxWait)||0,t):a,H="trailing"in n?!!n.trailing:H);function A(r){var m=s,x=i;return s=i=void 0,l=r,c=e.apply(x,m),c}function me(r){return l=r,o=setTimeout(q,t),u?A(r):c}function fe(r){var m=r-d,x=r-l,Z=t-m;return v?_e(Z,a-x):Z}function V(r){var m=r-d,x=r-l;return d===void 0||m>=t||m<0||v&&x>=a}function q(){var r=_();if(V(r))return X(r);o=setTimeout(q,fe(r))}function X(r){return o=void 0,H&&s?A(r):(s=i=void 0,c)}function he(){o!==void 0&&clearTimeout(o),l=0,s=d=i=o=void 0}function ge(){return o===void 0?c:X(_())}function O(){var r=_(),m=V(r);if(s=arguments,i=this,d=r,m){if(o===void 0)return me(d);if(v)return o=setTimeout(q,t),A(d)}return o===void 0&&(o=setTimeout(q,t)),c}return O.cancel=he,O.flush=ge,O}function Ue(e,t,n){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(ae);return P(n)&&(s="leading"in n?!!n.leading:s,i="trailing"in n?!!n.trailing:i),je(e,t,{leading:s,maxWait:t,trailing:i})}function P(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Re(e){return!!e&&typeof e=="object"}function Fe(e){return typeof e=="symbol"||Re(e)&&Ae.call(e)==Be}function ee(e){if(typeof e=="number")return e;if(Fe(e))return Y;if(P(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=P(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(qe,"");var n=De.test(e);return n||Pe.test(e)?$e(e.slice(2),n?2:8):Ie.test(e)?Y:+e}var We=Ue;async function F(e="Body parts",t,n){const s=document.querySelector(".categories-wrapper"),i=document.querySelector('button[data-page="middle"]'),a=document.querySelector('button[data-page="next"]');t===1?(i.disabled=!0,a.disabled=!0):t===2?a.disabled=!0:(i.disabled=!1,a.disabled=!1);try{const c=await j(e,n);s.innerHTML=R(c.results)}catch{}}async function ze(e,t,n,s){const i=document.querySelector(".categories-wrapper"),a=document.querySelector('button[data-exer="middle"]'),c=document.querySelector('button[data-exer="next"]');n===1?(a.disabled=!0,c.disabled=!0):n===2?c.disabled=!0:(a.disabled=!1,c.disabled=!1);try{const o=await se(e,t,s);i.innerHTML=U(o.results)}catch{}}function M(e,t){e.forEach(n=>{n.classList.remove("active")}),[...e].forEach(n=>{n.innerHTML===t&&n.classList.add("active")})}const Ke={catsList:document.querySelector(".categories-wrapper"),catFilterList:document.querySelector(".cat-filter-list"),catPaginationList:document.querySelector(".cat-pagination-list"),exerPaginationList:document.querySelector(".exer-pagination-list"),exercisesTitleSpan:document.querySelector(".exercises-title-span"),catFilterInput:document.querySelector(".cat-filter-input")},{catsList:E,catFilterList:Ve,catPaginationList:N,exerPaginationList:B,exercisesTitleSpan:re,catFilterInput:S}=Ke,k=N.querySelectorAll("button[data-page]"),w=B.querySelectorAll("button[data-exer]");let f="Body parts",p="bodypart",L="",oe=[],b=1,$=1,h=1,y=1;Ve.addEventListener("click",Xe);S.addEventListener("input",We(Je,300));N.addEventListener("click",Ge);B.addEventListener("click",Qe);B.classList.add("is-hidden");j().then(e=>{b=e.totalPages,E.insertAdjacentHTML("beforeend",R(e.results)),E.addEventListener("click",Ze),F(f,b,h)}).catch(e=>console.log(e));async function Xe(e){if(e.target.nodeName!=="BUTTON")return;switch(f=e.target.dataset.name,N.classList.remove("is-hidden"),B.classList.add("is-hidden"),S.value="",document.querySelectorAll(".cat-filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),f){case"Muscles":p="muscles";break;case"Equipment":p="equipment";break;case"Body parts":p="bodypart";break}try{const n=await j(f);b=n.totalPages,h=n.page;const s=n.results.filter(({filter:a})=>a===f);let i=1;k.forEach(a=>{a.innerHTML=i,i+=1}),re.innerHTML="",S.hidden=!0,E.innerHTML=R(s),M(k,h),F(f,b,h)}catch{}}async function Ze(e){try{L=e.target.closest(".categories-item").dataset.bodyPart;const t=await se(p,L);E.innerHTML=U(t.results),re.innerHTML=`<span class="exercises-title-span-page">/</span> ${L}`;const n=t.perPage,s=document.querySelector(".exercises-list");$=t.totalPages,y=t.page,console.log("currentExercisesPage",y),s.addEventListener("click",ce),N.classList.add("is-hidden"),B.classList.remove("is-hidden"),S.hidden=!1,M(w,y),w[0].classList.add("active"),oe=await Ee(p,L,n,$)}catch{}}function Ge(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;h=t.innerHTML,t.dataset.page==="next"&&t.innerHTML<b?k.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.page==="prev"&&t.innerHTML>1?k.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),M(k,h),F(f,b,h)}function Je(e){let t=S.value.toLowerCase().trim("");const n=oe.filter(({name:a})=>a.includes(t)),s="<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>";E.innerHTML=n.length===0?s:U(n),document.querySelector(".exercises-list").addEventListener("click",ce)}function Qe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target;y=t.innerHTML,t.dataset.exer==="next"&&t.innerHTML<$?w.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s+1}):t.dataset.exer==="prev"&&t.innerHTML>1?w.forEach(n=>{const s=Number(n.innerHTML);n.innerHTML=s-1}):t.classList.add("active"),M(w,y),ze(p,L,$,y)}function ce(e){const t=e.target.nodeName;if(t==="BUTTON"||t==="svg"||t==="use"){const n=e.target.closest(".exercises-item").dataset.exerciseId;pe(e,n)}}const{BASE_URL:Ye,SUBSCR_EDPOINT:et}=C;function tt(e){return T.post(`${Ye}${et}`,e,{})}const le=document.querySelector(".js-footer-form");le.addEventListener("submit",nt);function nt(e){e.preventDefault();const n=document.querySelector('input[type="email"]').value;if(!it(n))return D.Notify.failure("Invalid email address was entered.");tt({email:n}).then(i=>{const a=i.data.message;D.Notify.success(a)}).catch(i=>{const a=i.response.data.message;i.response.status===409&&D.Notify.warning("Subscription already exists"),i.response.status===400&&D.Notify.warning(a)}),le.reset()}function it(e){return/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e)}const st={root:null,rootMargin:"0px",threshold:0},de=document.querySelector(".footer_logo_icon"),at=document.querySelector(".footer_title_span"),rt=new IntersectionObserver(ot,st);rt.observe(de);function ot(e,t){e.forEach(n=>{n.isIntersecting&&(G.to(de,{duration:2,opacity:1,x:0,rotationX:360}),G.to(at,{duration:2,opacity:1}))})}function ct(e){return e.map(t=>{const{name:n,linkedin:s,github:i}=t;return` <li class="team-item">
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
`}).join("")}const lt=[{name:"Constantine Lysenko",linkedin:"https://www.linkedin.com/in/constantine-it-lysenko/",github:"https://github.com/konstantin-it-lysenko"},{name:"Anastasiia Motsukh",linkedin:"https://www.linkedin.com/in/anastasiia-motsukh-a5859b283/",github:"https://github.com/Elostay"},{name:"Denys Nalyvaiko",linkedin:"https://www.linkedin.com/in/denys-nalyvaiko-1ba8ab283",github:"https://github.com/Denys-Nalyvaiko"},{name:"Dmytro Podorvan",linkedin:"https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%B2%D0%B0%D0%BD-7898b0283/",github:"https://github.com/DmytroPod"},{name:"Iryna Slavinska",linkedin:"https://www.linkedin.com/in/iryna-slavinska-7038b9283/",github:"https://github.com/IrynaSlavinska"},{name:"Ihor Pozhematkin",linkedin:"https://www.linkedin.com/in/ihor-pozhematkin-921678297",github:"https://github.com/IhorPozhematkin"},{name:"Nadiia Paliichuk",linkedin:"http://www.linkedin.com/in/nadiia-paliichuk-94497a285",github:"https://github.com/Nadin2611"},{name:"Serhii Havryliuk",linkedin:"https://www.linkedin.com/in/serhii-havryliuk-b46650294/",github:"https://github.com/Serhii-Ruhtik"},{name:"Dmytro Chubenko",linkedin:"https://www.linkedin.com/in/demon-demon-03b119297/",github:"https://github.com/Dimch93"},{name:"Anatolii Artiukhov",linkedin:"https://www.linkedin.com/in/anatolii-artiukhov-261364297",github:"https://github.com/ArtanFS"},{name:"Oleh Mahutsii",linkedin:"https://www.linkedin.com/in/oleg-mahutsii-315b87296/?trk=contact-info",github:"https://github.com/ProstoOleh"},{name:"Artem Zelenin",linkedin:"https://www.linkedin.com/in/artem-zelenin-84a216226/",github:"https://github.com/azelenin057"}],dt=document.querySelector(".team-btn-open"),ut=document.querySelector(".team-btn-close"),W=document.querySelector(".team-list"),z=document.querySelector(".team-backdrop");dt.addEventListener("click",ft);ut.addEventListener("click",K);W.addEventListener("click",pt);z.addEventListener("click",gt);W.insertAdjacentHTML("beforeend",ct(lt));const mt=[...W.children];function ft(){z.classList.remove("is-hidden"),window.addEventListener("keydown",ue),document.body.style.overflow="hidden"}function K(){z.classList.add("is-hidden"),window.removeEventListener("keydown",ue),document.body.style.overflow="auto",ht()}function ht(){mt.forEach(e=>{e.lastElementChild.classList.remove("active-devel"),e.firstElementChild.classList.remove("arrow-up")})}function ue(e){const t="Escape";e.code===t&&K()}function gt(e){e.currentTarget===e.target&&K()}function pt(e){const t=e.target.closest(".team-item");if(!t)return;const n=t.lastElementChild,s=t.querySelector(".more-icon"),i=document.querySelector(".active-devel");console.log(t.firstElementChild),i&&i.classList.remove("active-devel"),s.classList.add("arrow-up"),t.classList.add("active-devel"),n.style.maxHeight?(n.style.maxHeight=null,t.firstElementChild.classList.remove("arrow-up")):(n.style.maxHeight=n.scrollHeight+"px",s.classList.add("arrow-up"))}
