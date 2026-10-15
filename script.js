(function(){var d=document.getElementById('reader'),b=document.getElementById('rb');
function show(id){var a=document.getElementById('t-'+id);if(!a)return;b.innerHTML=a.innerHTML;
b.querySelectorAll('img[data-copy]').forEach(function(i){var s=document.querySelector(i.getAttribute('data-copy'));if(s)i.src=s.src});
if(!d.open)d.showModal();d.scrollTop=0;try{history.replaceState(null,'','#'+id)}catch(e){}}
document.addEventListener('click',function(e){var o=e.target.closest('[data-open]');if(o){e.preventDefault();show(o.getAttribute('data-open'))}else if(e.target.closest('[data-close]')){d.close()}});
d.addEventListener('close',function(){try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}});
if(location.hash.length>1)show(decodeURIComponent(location.hash.slice(1)));})();
