"use strict";!function(){function e(){m.value="",u.value="",g.value="",u.style.border="2px solid transparent",g.style.border="2px solid transparent",m.style.border="2px solid transparent"}function t(){var e=u.value;return!!/^[a-zA-Zа-яА-Я'\s-]+$/.test(e)&&(""==!e||void 0)}function n(){var e=g.value;return!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&(""==!e||void 0)}function s(){return""==!m.value}function l(){y[b].className="slides__slide",b=(b+1)%y.length,y[b].className="slides__slide slides__showing"}var d=document.getElementById("burger-button");d.addEventListener("click",function(e){e.preventDefault(),document.body.classList.toggle("open"),d.classList.toggle("open")});for(var o=document.getElementsByClassName("burger__menu__item"),r=0;r<o.length;r++)o[r].addEventListener("click",function(e){document.body.classList.toggle("open"),d.classList.toggle("open")});var i=document.getElementById("sign"),a=document.getElementById("button"),c=document.getElementById("exit-button"),u=document.getElementById("name"),g=document.getElementById("email"),m=document.getElementById("message"),v=document.getElementById("go-button");a.addEventListener("click",function(e){i.classList.toggle("active")}),c.addEventListener("click",function(t){i.classList.toggle("active"),e()}),v.addEventListener("click",function(l){t()&&n()&&s()&&(i.classList.toggle("active"),e())}),u.addEventListener("blur",function(e){t()?u.style.border="2px solid green":u.style.border="2px solid red"}),g.addEventListener("blur",function(e){n()?g.style.border="2px solid green":g.style.border="2px solid red"}),m.addEventListener("blur",function(e){s()?m.style.border="2px solid green":m.style.border="2px solid red"});var y=document.querySelectorAll(".slides .slides__slide"),b=0;setInterval(l,5e3)}();