import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),l=e.querySelector('input[name="email"]'),s=e.querySelector('textarea[name="message"]'),o="feedback-form-state";if(localStorage.getItem(o)){const t=JSON.parse(localStorage.getItem(o));l.value=t.email,s.value=t.message}e.addEventListener("input",t=>{const a={email:l.value,message:s.value};localStorage.setItem(o,JSON.stringify(a))}),e.addEventListener("submit",t=>{t.preventDefault();const a={email:l.value,message:s.value};a.email===""||a.message===""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem(o),e.reset())})});
//# sourceMappingURL=commonHelpers2.js.map
