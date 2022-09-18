const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=0;function n(){document.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}btnStart.addEventListener("click",(()=>{a=setInterval(n,1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.023f1c1c.js.map
