parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.querySelector(".menu-ham"),n=document.querySelector("ul"),t=document.querySelectorAll(".menu-ham span");e.addEventListener("click",function(){n.classList.toggle("show"),t.forEach(function(e){e.classList.toggle("animation")})});var a=document.querySelectorAll(".box-clip-path");a.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("active")})});var r=moment();r.tz("Asia/Bangkok"),document.getElementById("hora-bangkok").innerHTML=r.format("LT");var l=document.getElementById("form"),o=document.getElementById("name"),m=document.getElementById("email"),c=document.getElementById("message"),i=document.getElementById("warning-name"),u=document.getElementById("warning-email"),d=document.getElementById("warning-message");l.addEventListener("submit",function(e){e.preventDefault();var n="",t="",a="",r=!1;i.innerHTML="",u.innerHTML="",d.innerHTML="",(o.value.length<=2||o.value.length>=40)&&(n+="El nombre debe tener entre 2 y 40 caracteres.",r=!0),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(m.value)||(t+="El formato de email que se ha introducido es incorrecto.",r=!0),(c.value.length<=5||c.value.length>=250)&&(a+="El mensaje debe tener entre 5 y 250 caracteres.",r=!0),r&&(i.innerHTML=n,u.innerHTML=t,d.innerHTML=a)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/anaisuoc-pec1.f5ba9d56.js.map