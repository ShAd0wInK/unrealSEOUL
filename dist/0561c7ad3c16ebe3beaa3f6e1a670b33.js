require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({14:[function(require,module,exports) {

},{}],6:[function(require,module,exports) {
"use strict";require("flexboxgrid"),require("./styles/styles.scss"),window.addEventListener("scroll",function(){var e=document.querySelector(".header"),t=window.pageYOffset/e.dataset.speed,r="0% "+(t=+t)+"px";e.style.backgroundPosition=r});var e=document.querySelector(".header_menu_burger"),t=document.querySelector(".header_menu_overlay"),r=document.querySelector(".header_menu_burger_firstLine"),a=document.querySelector(".header_menu_burger_lastLine"),s=document.querySelector(".header_menu_burger_firstLine_before"),o=document.querySelector(".header_menu_burger_lastLine_after"),n=document.querySelectorAll(".header_menu_overlay_items");e.addEventListener("click",function(){t.classList.toggle("header_menu_overlay-active"),r.classList.toggle("header_menu_burger_firstLine-anim"),s.classList.toggle("header_menu_burger_firstLine-befafter"),a.classList.toggle("header_menu_burger_lastLine-anim"),o.classList.toggle("header_menu_burger_firstLine-befafter")});for(var c=0;c<n.length;c++)n[c].addEventListener("click",function(){t.classList.toggle("header_menu_overlay-active")});var d=document.querySelector(".header_typewriter"),l=document.querySelector(".header_typewriter_items"),i=document.querySelectorAll(".header_typewriter_item"),u=100,g=[i[0],i[1],i[2],i[3],i[4],i[5]],h=document.querySelector(".right"),m=0,L=function e(){if(l.classList.add("transition"),++m>g.length-1){var t=(i=document.querySelectorAll(".header_typewriter_item"))[i.length-1];l.insertBefore(t,l.childNodes[0]),m=0,l.classList.remove("transition"),l.style.transform="translateY(-"+m*u+"px)",setTimeout(function(){e()},1)}else l.style.transform="translateY(-"+m*u+"px)"};h.addEventListener("click",function(){L()});var _=window.setInterval(L,2500),v=document.querySelector(".header_button"),b=document.querySelector(".header_button_input"),f=document.querySelector(".header_button_search");v.addEventListener("click",function(){b.removeAttribute("disabled"),b.removeAttribute("value"),b.setAttribute("placeholder"," : enter what you want to visit"),b.classList.add("header_button_input-anim"),f.classList.add("is-active")});var y=document.getElementById("audio"),k=document.querySelector(".header_music"),C=document.querySelector(".header_music_before"),q=document.querySelector(".header_music_after");y.volume=.05,k.addEventListener("click",function(){!1===y.muted?y.muted=!0:y.muted=!1,C.classList.toggle("header_music_before-pulse"),q.classList.toggle("header_music_after-pulse")});var w=document.querySelector(".header_language_en"),S=document.querySelector(".header_language_kr"),p=document.querySelector(".header_language-change");w.addEventListener("click",function(){p.classList.toggle("header_language-change-toLeft"),p.classList.toggle("header_language-change-toRight")}),S.addEventListener("click",function(){p.classList.toggle("header_language-change-toLeft"),p.classList.toggle("header_language-change-toRight")});var E=document.querySelector("#colorToChange");window.addEventListener("scroll",function(){window.scrollY<document.querySelector(".header").offsetHeight-50?(r.classList.add("backgroundChange"),a.classList.add("backgroundChange"),s.classList.add("backgroundChange"),o.classList.add("backgroundChange"),E.setAttribute("stop-color","#fff")):window.scrollY<document.querySelector(".header").offsetHeight+600?(r.classList.remove("backgroundChange"),a.classList.remove("backgroundChange"),s.classList.remove("backgroundChange"),o.classList.remove("backgroundChange"),E.setAttribute("stop-color","#8B83FF")):window.scrollY<document.querySelector(".header").offsetHeight+1850?(r.classList.add("backgroundChange"),a.classList.add("backgroundChange"),s.classList.add("backgroundChange"),o.classList.add("backgroundChange"),E.setAttribute("stop-color","#fff")):(r.classList.remove("backgroundChange"),a.classList.remove("backgroundChange"),s.classList.remove("backgroundChange"),o.classList.remove("backgroundChange"),E.setAttribute("stop-color","#8B83FF"))}),window.addEventListener("scroll",function(){window.scrollY<50?(k.classList.add("backgroundChange"),C.classList.add("backgroundChange"),q.classList.add("backgroundChange"),w.classList.add("colorChange"),S.classList.add("colorChange"),p.classList.add("gradientBackgroundChange")):window.scrollY<document.querySelector(".header").offsetHeight-35?(k.classList.remove("backgroundChange"),C.classList.remove("backgroundChange"),q.classList.remove("backgroundChange"),w.classList.remove("colorChange"),S.classList.remove("colorChange"),p.classList.remove("gradientBackgroundChange")):window.scrollY<document.querySelector(".header").offsetHeight+1225?(k.classList.add("backgroundChange"),C.classList.add("backgroundChange"),q.classList.add("backgroundChange"),w.classList.add("colorChange"),S.classList.add("colorChange"),p.classList.add("gradientBackgroundChange")):(k.classList.remove("backgroundChange"),C.classList.remove("backgroundChange"),q.classList.remove("backgroundChange"),w.classList.remove("colorChange"),S.classList.remove("colorChange"),p.classList.remove("gradientBackgroundChange"))});var A=document.querySelector(".header_menu_overlay_item-1");A.addEventListener("click",function(){document.querySelector("#method").scrollIntoView({behavior:"smooth"})});var Y=document.querySelector(".loading");window.addEventListener("load",function(){Y.classList.remove("is-active")});
},{"flexboxgrid":14,"./styles/styles.scss":14}]},{},[6])