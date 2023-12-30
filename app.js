!function(e){var t={};
function n(r){if(t[r])return t[r].exports;
    var o=t[r]={i:r,l:!1,exports:{}};
    return e[r].call(o.exports,o,o.exports,n),
    o.l=!0,o.exports}
    n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||
        Object.defineProperty(e,t,{enumerable:!0,get:r})},
        n.r=function(e)
        {"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),
        Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;
            if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),
            Object.defineProperty(r,"default",{enumerable:!0,value:e}),
            2&t&&"string"!=typeof e)
            for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},
            n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};
            return n.d(t,"a",t),t},
            n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
            n.p="",n(n.s=0)}([function(e,t){var n=document.querySelector(".main-div"),
            r=document.querySelector(".output-div"),o=document.querySelector(".detail-div"),
            a=(document.querySelector(".detail-output-div"),
            document.querySelector(".back-btn")),
            l=document.querySelector("#region"),s=document.querySelector("#search"),
            i=document.querySelector(".mode-btn"),u=(document.querySelector(".header"),
            document.querySelector(".section"));function d(e){var t={};
            for(c of m)e===c.name&&(t=c);o.style.display="block",n.style.display="none";
            var r="";for(currency of t.currencies)r+=currency.name+", ";var l="";
            for(lang of t.languages)l+=lang.name+", ";
            var s=document.querySelector(".detail-img");
            s.src=t.flag,s.alt="Flag of "+t.name,document.querySelector(".detail-content-heading-name")
            .textContent=t.name,document.querySelector(".detail-content-details-1")
            .innerHTML=`<p><span>Native Name:</span> ${t.nativeName}</p>\n                                    
            <p><span>Population:</span> ${t.population}</p>\n                                    
            <p><span>Region:</span> ${t.region}</p>\n                                    
            <p><span>Sub Region:</span> ${t.subregion}</p>\n                                    
            <p><span>Capital:</span> ${t.capital}</p>`,
            document.querySelector(".detail-content-details-2").innerHTML=`<p><span>Top Level Domain:</span> ${t.topLevelDomain}</p>\n                                    
            <p><span>Currencies:</span> ${r.slice(0,-2)}</p>\n                                    
            <p><span>Languages:</span> ${l.slice(0,-2)}</p>`;
            var i=document.querySelector(".detail-content-border-btns"),
            u=[];for(border of t.borders)for(c of m)border===c.alpha3Code&&u.push(c.name);
            if(0===u.length)i.innerHTML="No border country",i.style.marginBottom="0.5rem";
            else{for(border of(i.innerHTML="",u)){var p=document.createElement("button");
            p.classList.add("text-color","element-color","borderBtn"),p.innerText=border,
            i.append(p)}for(btn of i.querySelectorAll(".borderBtn"))btn.addEventListener("click",(function(e){d(e.target.innerText)}))}
            a.focus()}function p(e){for(country of(r.innerHTML="",e)){var t=document.createElement("div");
            t.classList.add("cards","text-color","element-color"),t.dataset.name=country.name;
            var n=`<img src="${country.flag}" loading="lazy" class="cards-img" alt="Flag of ${country.name}" />\n                
            <div class="cards-content">\n                  
            <h3>${country.name}</h3>\n                  
            <p><span>Population:</span> ${country.population}</p>\n                  
            <p><span>Region:</span> ${country.region}</p>\n                  
            <p><span>Capital:</span> ${country.capital} </p>\n                
            </div>`;t.innerHTML=n,r.append(t),t.addEventListener("click",(function(e){d(e.currentTarget.dataset.name)}))}}
            var m=[],f=[];
            document.addEventListener("DOMContentLoaded",(function(){(function(){var e=localStorage.getItem("countryData");
            if(null!==e){var t=JSON.parse(e);return new Promise((function(e){e(t)}))}return fetch("https://restcountries.com/v2/all",
            {method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=JSON.stringify(e);
                return localStorage.setItem("countryData",t),e})).catch((function(e){alert("Network Error!!!\nPlease try again")}))})().then((function(e){p(e),
                    f=JSON.parse(JSON.stringify(e)),m=JSON.parse(JSON.stringify(e))}))})),
                    l.addEventListener("change",(function(){r.innerHTML="",s.value="";
                    var e=l.options[l.selectedIndex].value;if("all"===e)p(m),f=JSON.parse(JSON.stringify(m));else{var t=[];
                        for(country of m)e===country.region.toLowerCase()&&t.push(country);p(t),
                        f=JSON.parse(JSON.stringify(t))}})),
                        a.addEventListener("click",(function(){o.style.display="none",
                        n.style.display="flex"})),s.addEventListener("click",(function(e){e.target.value="",p(f)})),
                        s.addEventListener("input",(function(){var e=s.value.toLowerCase();if(""!==e){var t=[];
                            for(country of f)country.name.toLowerCase().includes(e)&&t.push(country);
                            0!==t.length?p(t):r.innerHTML='<h2 class="text-color">No country found !</h2>'}else p(f)}));var y="light";i.addEventListener("click",
                            (function(){"dark"===y?(i.innerText="Dark Mode",i.classList.remove("dark-mode-btn"),
                            i.classList.add("white-mode-btn"),
                            s.classList.remove("black-search"),s.classList.add("white-search"),
                            l.classList.remove("black-region"),l.classList.add("white-region"),
                            a.classList.remove("back-btn-light"),a.classList.add("back-btn-dark"),
                            document.documentElement.style.setProperty("--text-color","#000"),
                            document.documentElement.style.setProperty("--bg-color","#fafafa"),
                            document.documentElement.style.setProperty("--element-color","#fff"),
                            document.documentElement.style.setProperty("--shadow-color","rgba(0, 0, 0, 0.2)"),
                            y="light"):"light"===y&&(i.innerText="Light Mode",
                            i.classList.remove("white-mode-btn"),i.classList.add("dark-mode-btn"),
                            s.classList.remove("white-search"),s.classList.add("black-search"),
                            l.classList.remove("white-region"),l.classList.add("black-region"),
                            a.classList.remove("back-btn-dark"),a.classList.add("back-btn-light"),
                            document.documentElement.style.setProperty("--text-color","#fff"),
                            document.documentElement.style.setProperty("--bg-color","#253646"),
                            document.documentElement.style.setProperty("--element-color","#162531"),
                            document.documentElement.style.setProperty("--shadow-color","rgba(20, 20, 20, 0.3)"),
                            y="dark")}));var v=document.querySelector(".top-scroller");u.addEventListener("scroll",
                            (function(e){e.target.scrollTop>100?v.style.display="block":v.style.display="none"})),
                            v.addEventListener("click",(function(){u.scrollTop=0}))}]);
