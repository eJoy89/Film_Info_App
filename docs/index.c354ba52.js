class e{constructor(e={}){const{tagName:t="div",props:s={},state:n={}}=e;this.el=document.createElement(t),this.props=s,this.state=n,this.render()}render(){}}function t(e){location.hash||history.replaceState(null,"","/#/");const t=document.querySelector("router-view"),[s,n=""]=location.hash.split("?"),a=n.split("&").reduce(((e,t)=>{const[s,n]=t.split("=");return e[s]=n,e}),{});history.replaceState(a,"");const i=e.find((e=>new RegExp(`${e.path}/?$`).test(s)));t.innerHTML="",t.append((new i.component).el),window.scrollTo(0,0)}class s{constructor(e){this.state={},this.observers={};for(const t in e)Object.defineProperty(this.state,t,{get:()=>e[t],set:s=>{e[t]=s,Array.isArray(this.observers[t])&&this.observers[t].forEach((e=>e(s)))}})}subscribe(e,t){Array.isArray(this.observers[e])?this.observers[e].push(t):this.observers[e]=[t]}}var n=new s({photo:"https://i.ibb.co/h8v2tqN/4778bcbcf6e221e9005dd50904276ccf-sticker.png",name:"Cho / Yunjae Cho",email:"cho89@live.co.kr",github:"https://github.com/eJoy89?tab=repositories",notion:"https://ripe-dogsled-628.notion.site/Programme-27541e9ed6754a96932ab8cc378d8401"});class a extends e{constructor(){super({tagName:"header",state:{menus:[{name:"Search",href:"#/"},{name:"Flim",href:"#/film?id=tt4520988"},{name:"About",href:"#/about"}]}}),window.addEventListener("popstate",(()=>{this.render()}))}render(){const{photo:e}=n.state;this.el.innerHTML=`\n            <a \n                href='#/' class="logo">\n                <span>OMDbAPI</span>    \n                .COM\n            </a>\n\n            <nav>\n                <ul>\n                    ${this.state.menus.map((e=>{const t=e.href.split("?")[0]===location.hash.split("?")[0];return`\n                            <li>\n                                <a \n                                href="${e.href}"\n                                class="${t?"active":""}"\n                                >\n                                    ${e.name}\n                                </a>\n                            </li>\n                        `})).join("")}\n                </ul>\n            </nav>\n            <a href="#/about" class="main_logo">\n                <img src="${e}" alt="main_logo">\n            </a>\n        `}}class i extends e{constructor(){super({tagName:"footer"})}render(){const{github:e,notion:t}=n.state;this.el.innerHTML=`\n            <div>\n                <a href="${e}">\n                    Github Repository\n                </a>\n            </div>\n            <div>\n                <a href="${t}">\n                    ${(new Date).getFullYear()}\n                    Cho\n                </a>\n            </div>\n        `}}class r extends e{render(){this.el.classList.add("headline"),this.el.innerHTML="\n            <h1>\n                <span>OMDb API</span><br>\n                THE OPEN<br>\n                Film DATABASE\n            </h1>    \n    \n            <p>\n            The OMDb API is a RESTful web service to obtain film information,\n            all content and images on the site are contributed and maintained by our users.<br>\n            If you find this service useful, please consider making a one-time donation or become a patron.\n            </p>\n        "}}const o=new s({searchText:"",page:1,pageMax:1,films:[],film:{},loader:!1,message:"Search for the film title!"});var l=o;const c=e=>(o.state.loader=!0,o.state.page=e,1===e&&(o.state.films=[],o.state.message=""),fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${o.state.searchText}&page=${e}`).then((e=>e.json())).then((({Search:e,totalResults:t,Response:s,Error:n})=>{"True"===s?(o.state.films=[...o.state.films,...e],o.state.pageMax=Math.ceil(Number(t)/10)):o.state.message="Film not Found!"})).catch((e=>console.log("searchFilm eror",e))).finally((()=>o.state.loader=!1)));class d extends e{render(){this.el.classList.add("search"),this.el.innerHTML=`\n          <input value="${l.state.searchText}" placeholder="Enter the film title to search!" />\n          <button class="btn btn-primary">\n            Search!\n          </button>\n        `;const e=this.el.querySelector("input");e.addEventListener("input",(()=>{l.state.searchText=e.value})),e.addEventListener("keydown",(e=>{"Enter"===e.key&&l.state.searchText.trim()&&c(1).then((()=>console.log("keydown Check!")))}));this.el.querySelector(".btn").addEventListener("click",(()=>{l.state.searchText.trim()&&c(1).then((()=>console.log("click Check!")))}))}}class h extends e{constructor(e){super({props:e,tagName:"a"})}render(){const{film:e}=this.props;this.el.setAttribute("href",`#/film?id=${e.imdbID}`),this.el.classList.add("film"),this.el.style.backgroundImage=`url(${e.Poster})`,this.el.innerHTML=`\n            <div class="info">\n                <div class="year">\n                    ${e.Year}\n                </div>\n                <div class="title">\n                    ${e.Title}\n                </div>\n            </div>\n        `}}class p extends e{constructor(){super(),l.subscribe("films",(()=>{this.render()})),l.subscribe("loader",(()=>{this.render()})),l.subscribe("message",(()=>{this.render()}))}render(){this.el.classList.add("film-list"),this.el.innerHTML=`\n            ${l.state.message?`<div class="message">${l.state.message}</div>`:'<div class="films"></div>'}\n            <div class="loading hide"></div>\n        `;const e=this.el.querySelector(".films");e?.append(...l.state.films.map((e=>new h({film:e}).el)));const t=this.el.querySelector(".loading");l.state.loader?t.classList.remove("hide"):t.classList.add("hide")}}class m extends e{constructor(){super({tagName:"button"}),l.subscribe("pageMax",(()=>{const{page:e,pageMax:t}=l.state;t>e?this.el.classList.remove("hide"):this.el.classList.add("hide")}))}render(){this.el.classList.add("btn","view-more","hide"),this.el.textContent="View more...",this.el.addEventListener("click",(async()=>{this.el.classList.add("hide"),await c(l.state.page+1)}))}}var u,v=(u=[{path:"#/",component:class extends e{render(){const e=(new r).el,t=(new d).el,s=(new p).el,n=(new m).el;this.el.classList.add("container"),this.el.append(e,t,s,n)}}},{path:"#/film",component:class extends e{async render(){this.el.classList.add("container","the_film"),this.el.innerHTML='\n            <div class="poster skeleton"></div>\n            <div class="specs">\n                <div class="title skeleton"></div>\n                <div class="labels skeleton"></div>\n                <div class="plot skeleton"></div>\n            </div>\n        ',await(async e=>{try{const t=await fetch(`https://omdbapi.com?apikey=7035c60c&i=${e}&plot=full`);o.state.film=await t.json()}catch(e){console.log("searchFilm eror",e)}})(history.state.id),console.log(l.state.film);const{film:e}=l.state,t=e.Poster.replace("SX300","SX700");this.el.innerHTML=`\n            <div style="background-image: url(${t})" class='poster'></div>\n            <div class="specs">\n                <div class='title'>\n                    ${e.Title}\n                </div>\n                <div class="labels">\n                    <span>${e.Released}</span>\n                    &nbsp;/&nbsp;\n                    <span>${e.Runtime}</span>\n                    &nbsp;/&nbsp;\n                    <span>${e.Country}</span>\n                </div>\n                <div class="plot">\n                    ${e.Plot}\n                </div>\n                <div>\n                    <h3>Ratings</h3>\n                    ${e.Ratings.map((e=>`<p>${e.Source} - ${e.Value}</p>`)).join("")}\n                </div>\n                <div>\n                    <h3>Actors</h3>\n                    <p>${e.Actors}</p>\n                </div>\n                <div>\n                    <h3>Director</h3>\n                    <p>${e.Director}</p>\n                </div>\n                <div>\n                    <h3>Production</h3>\n                    <p>${e.Production}</p>\n                </div>\n                <div>\n                    <h3>Genre</h3>\n                    <p>${e.Genre}</p>\n                </div>\n            </div>\n        `}}},{path:"#/about",component:class extends e{render(){const{photo:e,name:t,email:s,github:a,notion:i}=n.state;this.el.classList.add("container","about"),this.el.innerHTML=`\n            <div style="background-image: url(${e})" class="photo"></div>\n            <p class="name">${t}</p>\n            <p>\n                <a \n                    href="https://mail.google.com/mail/?view=cm&fs=1&to=${s}" \n                    target="_blank">${s}\n                </a>\n            </p>\n            <p>\n                <a href="${a}" target="_blank">Github</a>\n            </p>\n            <p>\n                <a href="${i}" target="_blank">Notion</a>\n            </p>\n        `}}},{path:".*",component:class extends e{render(){this.el.classList.add("container","not_found"),this.el.innerHTML="\n            <h1>\n                Sorry...<br>\n                Page Not Found\n            </h1>\n        "}}}],function(){window.addEventListener("popstate",(()=>{t(u)})),t(u)});document.querySelector("#root").append((new class extends e{render(){const e=(new a).el,t=(new i).el,s=document.createElement("router-view");this.el.append(e,s,t)}}).el),v();
//# sourceMappingURL=index.c354ba52.js.map
