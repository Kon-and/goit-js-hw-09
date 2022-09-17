const t=document.querySelector("[data-start]");document.querySelector("[data-stop]").disabled=!0;let e=0;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(t){t.target.disabled=!0,e=setInterval(o,1e3)}));
//# sourceMappingURL=01-color-switcher.257b3acf.js.map
