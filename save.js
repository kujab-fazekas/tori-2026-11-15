/* ===== HALADÁS MENTÉSE / BETÖLTÉSE (sima JSON, titkosítás nélkül) ===== */
(function(){
 function open(){
  if(document.getElementById('savepanel'))return;
  const ov=document.createElement('div');ov.id='savepanel';
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px';
  const bx=document.createElement('div');
  bx.style.cssText='background:#fff;border-radius:18px;padding:18px;max-width:560px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.3)';
  bx.innerHTML='<h3 style="margin:0 0 8px">Haladás mentése / betöltése</h3>'
  +'<p style="margin:0 0 8px;font-size:14px">Mentés: másold ki az alábbi szöveget, és küldd el magadnak. Betöltés: másold be ide a mentett szöveget, és nyomj a Betöltés gombra. A betöltés felülírja a mostani haladást ezen az eszközön.</p>'
  +'<textarea id="savetxt" style="width:100%;height:170px;font-family:monospace;font-size:12px;border:2px solid #BAD6DA;border-radius:10px;padding:8px;box-sizing:border-box"></textarea>'
  +'<div id="savemsg" style="min-height:20px;font-size:14px;margin:6px 0"></div>'
  +'<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="savecopy">Másolás</button><button class="btn good" id="saveload">Betöltés</button><button class="btn ghost" id="saveclose">Bezár</button></div>';
  ov.append(bx);document.body.append(ov);
  const ta=bx.querySelector('#savetxt'),msg=bx.querySelector('#savemsg');
  ta.value=JSON.stringify(S,null,1);
  const close=()=>ov.remove();
  ov.onclick=e=>{if(e.target===ov)close()};
  bx.querySelector('#saveclose').onclick=close;
  bx.querySelector('#savecopy').onclick=()=>{ta.value=JSON.stringify(S,null,1);ta.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}
   try{if(navigator.clipboard)navigator.clipboard.writeText(ta.value)}catch(e){}
   msg.textContent=ok?'Kimásolva.':'Ha nem másolódott, jelöld ki a szöveget és másold ki kézzel.'};
  bx.querySelector('#saveload').onclick=()=>{
   let d;try{d=JSON.parse(ta.value)}catch(e){msg.textContent='Ez nem érvényes mentés (hibás szöveg).';return}
   if(!d||typeof d!=='object'||Array.isArray(d)||typeof d.xp!=='number'){msg.textContent='Ez nem a haladás-mentésed.';return}
   S=Object.assign(defState(),d);save();renderTop();
   try{render()}catch(e){}
   msg.textContent='Betöltve.';setTimeout(close,700)};
 }
 function init(){
  const snd=document.getElementById('sndbtn');if(!snd||document.getElementById('savebtn'))return;
  const b=document.createElement('button');b.className='iconbtn';b.id='savebtn';b.textContent='Mentés';b.style.marginRight='6px';
  b.onclick=open;snd.parentNode.insertBefore(b,snd);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
