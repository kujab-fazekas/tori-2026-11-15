/* ===== ÁLLAPOT ===== */
const KEY='tori_2026_11_v1';
const DEV=/[?&]dev=1/.test(location.search);
const defState=()=>({xp:0,steps:{},tests:{},zones:{},wrong:{},exam:null,sound:false,streak:0});
let S=defState();
try{const r=localStorage.getItem(KEY);if(r)S=Object.assign(defState(),JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const LEVELS=[`Kezdő diák`,`Jegyzetelő`,`Szorgos tanuló`,`Kérdező`,`Vitatkozó`,`Okos fej`,`Szaktudós`,`Töri-bajnok`,`Felvilágosult elme`,`Töri-mester`];
const XPL=160;
const lvlOf=xp=>Math.min(LEVELS.length,Math.floor(xp/XPL)+1);

/* ===== UI SEGÉDEK ===== */
const h=(t,c,html)=>{const e=document.createElement(t);if(c)e.className=c;if(html!=null)e.innerHTML=html;return e};
const view=()=>$('#view');
function setTheme(c1,c2){const s=document.documentElement.style;s.setProperty('--c1',c1||'#6c4cff');s.setProperty('--c2',c2||'#ff7ab0')}
let toastT;
function toast(msg,cls=''){let t=$('#toast');if(!t){t=h('div','toast');t.id='toast';document.body.append(t)}t.className='toast '+cls;t.textContent=msg;void t.offsetWidth;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2200)}
/* konfetti */
let cv=null,cx=null,parts=[],raf=0;
function initConfetti(){try{cv=h('canvas');cv.id='confetti';document.body.append(cv);cx=cv.getContext&&cv.getContext('2d');const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs)}catch(e){cx=null}}
function confetti(n=70,x,y){if(!cx)return;x=x??innerWidth/2;y=y??innerHeight/3;const cols=['#ff5a8a','#ffc83d','#6c4cff','#2fb344','#3d8bfd','#ff922b'];for(let i=0;i<n;i++)parts.push({x,y,vx:(Math.random()-.5)*14,vy:Math.random()*-13-2,g:.4,s:6+Math.random()*7,c:cols[i%cols.length],r:Math.random()*6,vr:(Math.random()-.5)*.4,life:90+Math.random()*50});if(!raf)loop()}
function loop(){cx.clearRect(0,0,cv.width,cv.height);parts=parts.filter(p=>p.life>0);parts.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life--;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.globalAlpha=Math.min(1,p.life/30);cx.fillRect(-p.s/2,-p.s/3,p.s,p.s*.6);cx.restore()});raf=parts.length?requestAnimationFrame(loop):0}
/* hang (alapból ki) */
let AC;
function beep(f,d,ty='sine',v=.08,delay=0){if(!S.sound)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.value=f;g.gain.value=v;o.connect(g);g.connect(AC.destination);const t0=AC.currentTime+delay;o.start(t0);g.gain.exponentialRampToValueAtTime(.0001,t0+d);o.stop(t0+d)}catch(e){}}
const sfx={ok:()=>{beep(660,.12);beep(880,.18,'sine',.08,.1)},no:()=>beep(180,.25,'sawtooth',.05),win:()=>[523,659,784,1047].forEach((f,i)=>beep(f,.2,'triangle',.08,i*.12))};

function renderTop(){
 const lv=lvlOf(S.xp),into=lv>=LEVELS.length?XPL:S.xp%XPL;
 $('#xpbar').style.width=Math.min(100,into/XPL*100)+'%';
 $('#lvlab').textContent=`Szint ${lv} · ${LEVELS[lv-1]}`;
 $('#xplab').textContent=`${S.xp} XP`;
 $('#sndbtn').textContent=S.sound?'Hang: be':'Hang: ki';
}
function award(n){
 const before=lvlOf(S.xp);S.xp+=n;save();renderTop();
 const after=lvlOf(S.xp);
 if(after>before){toast(`Szintet léptél: ${LEVELS[after-1]}!`,'xp');confetti(90);sfx.win()}
}
function combo(){
 let c=$('#combo');
 if(S.streak>=3){if(!c){c=h('div','combo');c.id='combo';document.body.append(c)}c.textContent=`${S.streak} egyvégtében`;c.style.animation='none';void c.offsetWidth;c.style.animation=''}
 else if(c)c.remove();
}

/* ===== KÉRDÉSEK ===== */
const qidOf=q=>q._id||(q._id=q.id||hash([q.t,q.q,q.ok||'',JSON.stringify(q.a||q.text||q.items||q.pairs||q.cats||'')].join('|')));
function evalFl(q,val){
 const acc=q.a,strict=acc.map(norm),lo=acc.map(loose);
 const parts=(q.n&&q.n>1)?val.split(/[,;]| és /).map(s=>s.trim()).filter(Boolean):[val.trim()];
 const hits=new Set();let almost=false;
 parts.forEach(p=>{
  if(!p)return;
  let idx=strict.indexOf(norm(p));
  const li=lo.indexOf(loose(p));
  if(idx<0&&li>=0){if(q.spell)almost=true;else idx=li}
  if(idx>=0)hits.add(idx);
 });
 const need=q.n||1;
 return{ok:hits.size>=need,almost:hits.size<need&&almost};
}
function wrongSave(q,first){
 const id=qidOf(q);
 if(first){if(S.wrong[id]){delete S.wrong[id];save()}}
 else{S.wrong[id]=JSON.parse(JSON.stringify(q));save()}
}

function mountQ(host,q,o={}){
 const mode=o.mode||'learn';
 host.innerHTML='';
 const wrap=h('div','qwrap');
 wrap.append(h('div','qhead',`<span>${esc(o.label||'Kérdés')}</span><span>${({mc:`egy jó válasz`,tf:`igaz vagy hamis`,mu:`több jó válasz`,fl:`írd be`,od:`sorrend`,mt:`párosítás`,st:`csoportosítás`,cz:`kiegészítés`})[q.t]||''}</span>`));
 if(q.q)wrap.append(h('div','qtext',esc(q.q)));
 const body=h('div'),fb=h('div'),actions=h('div','actions');
 wrap.append(body,fb,actions);host.append(wrap);
 let tries=0,fin=false,fails=0;
 const c={
  get done(){return fin},
  onReveal:null,
  button(label,fn,cls='btn'){const b=h('button',cls,label);b.onclick=fn;actions.append(b);return b},
  msg(kind,html){fb.className='fb '+kind;fb.innerHTML=html},
  attempt(correct,extra){
   if(fin)return;
   tries++;
   if(correct){finish(tries===1);return true}
   fails++;
   wrap.style.animation='none';void wrap.offsetWidth;wrap.style.animation='shake .4s';
   if(mode==='test'){if(c.onReveal)c.onReveal();finish(false);return false}
   c.msg('no',`<b>Nem egészen.</b>${extra||'Próbáld újra!'}`);
   if(fails>=2&&!$('.giveup',actions)){const g=c.button('Feladom, mutasd a választ',()=>{if(c.onReveal)c.onReveal();finish(false)},'btn ghost sm giveup')}
   return false;
  }
 };
 function finish(first){
  fin=true;
  $$('button.giveup,button.chk',actions).forEach(b=>b.remove());
  if(first){S.streak++;sfx.ok()}else{S.streak=0;sfx.no()}
  combo();
  if(!o.noxp){if(first)award(10+Math.min(S.streak,6));else if(mode==='learn')award(2)}
  wrongSave(q,first);
  const ans=answerText(q);
  c.msg(first?'ok':'no',`<b>${first?'Helyes!':(mode==='test'?'Nem talált.':'Megoldva – de nézd át:')}</b>${ans?`<div>Helyes válasz: <b style="display:inline">${esc(ans)}</b></div>`:''}${q.e?`<div>${q.e}</div>`:''}`);
  $$('input,textarea',wrap).forEach(i=>i.disabled=true);
  $$('.opt,.chip,.cat',body).forEach(b=>{if(b.tagName==='BUTTON')b.disabled=true});
  const nb=c.button(o.last?'Befejezés':'Tovább',()=>o.onDone&&o.onDone({ok:first}),'btn good');
  setTimeout(()=>{try{nb.focus({preventScroll:true})}catch(e){}},50);
 }
 (R[q.t]||R.mc)(body,q,c);
 return c;
}
function answerText(q){
 if(q.t==='mc')return q.ok;
 if(q.t==='tf')return q.a?'Igaz':'Hamis';
 if(q.t==='mu')return q.ok.join(', ');
 if(q.t==='fl')return q.a.slice(0,q.n?4:2).join(q.n?', ':'  /  ');
 if(q.t==='od')return q.items.map((s,i)=>`${i+1}. ${s}`).join(' → ');
 if(q.t==='mt')return q.pairs.map(p=>`${p[0]} = ${p[1]}`).join(' · ');
 if(q.t==='st')return q.cats.map((cn,ci)=>`${cn}: ${q.items.filter(x=>x[1]===ci).map(x=>x[0]).join(', ')}`).join(' | ');
 if(q.t==='cz')return q.text.replace(/\{\{(.+?)\}\}/g,(m,a)=>a.split('|')[0]);
 return '';
}

const R={};
R.mc=(body,q,c)=>{
 const box=h('div','opts');body.append(box);
 shuffle([q.ok,...q.bad]).forEach(t=>{
  const b=h('button','opt');b.textContent=t;
  b.onclick=()=>{if(c.done)return;const ok=t===q.ok;if(ok)b.classList.add('ok');else{b.classList.add('no');b.disabled=true}c.attempt(ok)};
  box.append(b);
 });
 c.onReveal=()=>$$('.opt',box).forEach(b=>{if(b.textContent===q.ok)b.classList.add('ok')});
};
R.tf=(body,q,c)=>{
 const box=h('div','tfrow');body.append(box);
 [[true,`Igaz`],[false,`Hamis`]].forEach(([v,l])=>{
  const b=h('button','opt',l);b.style.textAlign='center';
  b.onclick=()=>{if(c.done)return;const ok=v===q.a;if(ok)b.classList.add('ok');else{b.classList.add('no');b.disabled=true}c.attempt(ok)};
  box.append(b);
 });
 c.onReveal=()=>$$('.opt',box).forEach(b=>{if((b.textContent==='Igaz')===q.a)b.classList.add('ok')});
};
R.mu=(body,q,c)=>{
 const box=h('div','opts');body.append(box);
 const sel=new Set();
 shuffle([...q.ok,...q.bad]).forEach(t=>{
  const b=h('button','opt');b.textContent=t;
  b.onclick=()=>{if(c.done)return;b.classList.remove('no');if(sel.has(t)){sel.delete(t);b.classList.remove('sel')}else{sel.add(t);b.classList.add('sel')}};
  box.append(b);
 });
 c.button('Ellenőrzés',()=>{
  const okAll=q.ok.every(x=>sel.has(x))&&[...sel].every(x=>q.ok.includes(x));
  const good=[...sel].filter(x=>q.ok.includes(x)).length;
  if(!okAll)$$('.opt',box).forEach(b=>{if(sel.has(b.textContent)&&!q.ok.includes(b.textContent)){b.classList.remove('sel');b.classList.add('no')}});
  c.attempt(okAll,`A jelöléseidből ${good} jó, ${sel.size-good} hibás; összesen ${q.ok.length} jó válasz van.`);
 },'btn chk');
 c.onReveal=()=>$$('.opt',box).forEach(b=>{b.classList.remove('sel','no');if(q.ok.includes(b.textContent))b.classList.add('ok')});
};
R.fl=(body,q,c)=>{
 const inp=h('input','txt');inp.type='text';inp.placeholder=q.ph||'Írd ide a választ';inp.autocomplete='off';inp.spellcheck=false;
 body.append(inp);
 const go=()=>{
  if(c.done||!inp.value.trim())return;
  const r=evalFl(q,inp.value);
  inp.classList.remove('ok','no','almost');
  if(r.almost){inp.classList.add('almost');c.msg('hint',`<b>Majdnem!</b>Figyelj az ékezetekre, a kötőjelre és a pontos írásmódra.`);return}
  inp.classList.add(r.ok?'ok':'no');
  c.attempt(r.ok,q.n?`Legalább ${q.n} különböző jó választ kérek, vesszővel elválasztva.`:'');
 };
 inp.addEventListener('keydown',e=>{if(e.key==='Enter')go()});
 c.button('Ellenőrzés',go,'btn chk');
 c.onReveal=()=>{inp.value=q.a.slice(0,q.n||1).join(q.n?', ':'');inp.classList.remove('no');inp.classList.add('ok')};
 setTimeout(()=>{try{inp.focus({preventScroll:true})}catch(e){}},60);
};
R.cz=(body,q,c)=>{
 const d=h('div','cloze');body.append(d);
 const ans=[];let html='',last=0;
 q.text.replace(/\{\{(.+?)\}\}/g,(m,a,idx)=>{html+=esc(q.text.slice(last,idx));html+=`<input class="txt" type="text" data-i="${ans.length}" autocomplete="off" spellcheck="false">`;ans.push(a.split('|'));last=idx+m.length});
 html+=esc(q.text.slice(last));d.innerHTML=html;
 const ins=$$('input',d);
 c.button('Ellenőrzés',()=>{
  let all=true;
  ins.forEach((i,k)=>{const ok=ans[k].some(a=>loose(a)===loose(i.value));i.classList.remove('ok','no');i.classList.add(ok?'ok':'no');if(!ok)all=false});
  c.attempt(all);
 },'btn chk');
 c.onReveal=()=>ins.forEach((i,k)=>{i.value=ans[k][0];i.classList.remove('no');i.classList.add('ok')});
};
R.od=(body,q,c)=>{
 const items=shuffle(q.items.map((t,i)=>({t,i})));let seq=[],mark=null;
 const list=h('div','ordlist');body.append(list);
 body.insertAdjacentHTML('afterbegin',`<div class="prog">Kattints az elemekre abban a sorrendben, ahogy időben követik egymást. Újra rákattintva visszavonhatod.</div>`);
 const draw=()=>{
  list.innerHTML='';
  items.forEach(it=>{
   const pos=seq.indexOf(it.i);const b=h('button','opt'+(pos>=0?' sel':'')+(mark?(mark[it.i]?' ok':' no'):''));
   b.innerHTML=`<span class="num">${pos>=0?pos+1:''}</span><span>${esc(it.t)}</span>`;
   b.disabled=c.done;
   b.onclick=()=>{if(c.done||mark)return;if(pos>=0)seq=seq.filter(x=>x!==it.i);else seq.push(it.i);draw();btn.disabled=seq.length!==items.length};
   list.append(b);
  });
 };
 const btn=c.button('Ellenőrzés',()=>{
  const ok=seq.every((v,k)=>v===k);
  if(ok){c.attempt(true);draw();return}
  mark={};seq.forEach((v,k)=>mark[v]=v===k);draw();
  const res=c.attempt(false,'A zöld elemek jó helyen vannak.');
  if(!c.done)setTimeout(()=>{mark=null;seq=[];draw();btn.disabled=true},1400);
 },'btn chk');
 btn.disabled=true;draw();
 c.onReveal=()=>{seq=q.items.map((_,i)=>i);mark=null;draw()};
};
R.mt=(body,q,c)=>{
 const L=q.pairs.map(p=>p[0]),Rt=shuffle(q.pairs.map(p=>p[1]));
 let sel=null;const map={};let mark=null;
 const grid=h('div','mtgrid');body.append(grid);
 body.insertAdjacentHTML('afterbegin',`<div class="prog">Kattints a bal oldali elemre, aztán a hozzá tartozó jobb oldalira. Újrakattintással szétkapcsolhatod.</div>`);
 const used=()=>new Set(Object.values(map));
 const draw=()=>{
  grid.innerHTML='';
  const lc=h('div','opts'),rc=h('div','opts');
  L.forEach((t,i)=>{
   const b=h('button','opt'+(map[i]!==undefined?' p'+i:'')+(sel===i?' cur':'')+(mark&&map[i]!==undefined?(mark[i]?' ok':' no'):''));b.textContent=t;b.disabled=c.done;
   b.onclick=()=>{if(c.done||mark)return;if(map[i]!==undefined){delete map[i];sel=i}else sel=(sel===i?null:i);draw();btn.disabled=Object.keys(map).length!==L.length};lc.append(b)});
  Rt.forEach((t,j)=>{
   const owner=Object.keys(map).find(k=>map[k]===j);
   const b=h('button','opt'+(owner!==undefined?' p'+owner:'')+(mark&&owner!==undefined?(mark[owner]?' ok':' no'):''));b.textContent=t;b.disabled=c.done;
   b.onclick=()=>{if(c.done||mark)return;
    if(owner!==undefined){delete map[owner];sel=+owner}
    else if(sel!==null){map[sel]=j;sel=null}
    draw();btn.disabled=Object.keys(map).length!==L.length};rc.append(b)});
  grid.append(lc,rc);
 };
 const btn=c.button('Ellenőrzés',()=>{
  mark={};L.forEach((t,i)=>mark[i]=Rt[map[i]]===q.pairs[i][1]);
  const ok=L.every((t,i)=>mark[i]);
  draw();c.attempt(ok,'A zöld párok jók, a pirosak nem.');
  if(!ok&&!c.done)setTimeout(()=>{L.forEach((t,i)=>{if(!mark[i])delete map[i]});mark=null;sel=null;draw();btn.disabled=Object.keys(map).length!==L.length},1500);
 },'btn chk');
 btn.disabled=true;draw();
 c.onReveal=()=>{L.forEach((t,i)=>{map[i]=Rt.findIndex((r,j)=>r===q.pairs[i][1]&&!Object.values(map).includes(j))});mark=null;draw()};
};
R.st=(body,q,c)=>{
 const items=q.items.map((x,i)=>({t:x[0],cat:x[1],i}));
 let bank=shuffle(items.map(x=>x.i));const placed=q.cats.map(()=>[]);let sel=null,locked=new Set(),mark=null;
 body.insertAdjacentHTML('afterbegin',`<div class="prog">Kattints egy elemre, aztán arra a csoportra, ahová tartozik. A már betett elemre kattintva visszaveheted.</div>`);
 const bankEl=h('div','bank'),catsEl=h('div','cats');body.append(bankEl,catsEl);
 const chip=(i,where)=>{const b=h('button','chip'+(sel===i?' sel':'')+(mark&&mark[i]===true?' ok':'')+(mark&&mark[i]===false?' no':''));b.textContent=items[i].t;b.disabled=c.done;
  b.onclick=e=>{if(c.done||locked.has(i))return;e.stopPropagation();if(where==='bank'){sel=sel===i?null:i}else{const cc=placed.findIndex(a=>a.includes(i));placed[cc]=placed[cc].filter(x=>x!==i);bank.push(i);sel=null}draw()};return b};
 const draw=()=>{
  bankEl.innerHTML='';catsEl.innerHTML='';
  bank.forEach(i=>bankEl.append(chip(i,'bank')));
  if(!bank.length)bankEl.innerHTML='<span class="prog">Minden elemet elhelyeztél – nyomd meg az Ellenőrzést.</span>';
  q.cats.forEach((n,ci)=>{
   const d=h('div','cat');d.append(h('h5','',esc(n)));
   const z=h('div','zone');placed[ci].forEach(i=>z.append(chip(i,'cat')));d.append(z);
   d.onclick=()=>{if(c.done||sel===null)return;bank=bank.filter(x=>x!==sel);placed[ci].push(sel);sel=null;draw()};
   catsEl.append(d);
  });
  btn.disabled=bank.length>0;
 };
 const btn=c.button('Ellenőrzés',()=>{
  mark={};let all=true;
  placed.forEach((arr,ci)=>arr.forEach(i=>{const ok=items[i].cat===ci;mark[i]=ok;if(!ok)all=false}));
  draw();
  c.attempt(all,'A zöld elemek jó helyen vannak, a pirosak visszakerülnek.');
  if(!all&&!c.done)setTimeout(()=>{placed.forEach((arr,ci)=>{placed[ci]=arr.filter(i=>{if(mark[i])return true;bank.push(i);return false})});placed.forEach(a=>a.forEach(i=>locked.add(i)));mark=null;sel=null;draw()},1500);
 },'btn chk');
 btn.disabled=true;draw();
 c.onReveal=()=>{bank=[];placed.forEach((a,i)=>placed[i]=[]);items.forEach(it=>placed[it.cat].push(it.i));mark=null;sel=null;draw()};
};

/* ===== WIDGETEK ===== */
const WIDGETS={};
WIDGETS.tree=(host,done)=>{
 const seen=new Set(),total=8;
 host.innerHTML=`<div class="wgt"><div class="tree">
 <button class="tb root" data-f="root">Államforma</button>
 <div class="cols">
  <div class="col"><button class="tb" data-f="mon">Monarchia</button><div class="kids"><button class="tb" data-f="alk">① Alkotmányos</button><button class="tb" data-f="abs">② Abszolút</button></div></div>
  <div class="col"><button class="tb" data-f="kt">Köztársaság</button><div class="kids"><button class="tb" data-f="prez">③ Prezidenciális</button><button class="tb" data-f="parl">④ Parlamentáris</button><button class="tb" data-f="nep">⑤ Népköztársaság</button></div></div>
 </div>
 <button class="tb" data-f="szov">+1 Szövetségi köztársaság</button>
 <div class="info"><h4>Kattints egy körre!</h4><div>A fa gyökere az <b>államforma</b>, két ággal: monarchia és köztársaság. A számok ①–⑤ a jegyzetedből valók.</div></div>
 <div class="prog" id="tprog">0 / ${total} megnézve</div></div></div>`;
 const info=$('.info',host);
 $$('.tb',host).forEach(b=>{
  b.onclick=()=>{
   const id=b.dataset.f;$$('.tb',host).forEach(x=>x.classList.remove('cur'));b.classList.add('cur');
   if(id==='root'){info.innerHTML=`<h4>Államforma</h4><div>Egy ország irányításának szervezeti felépítése, azaz honnan ered az államfő hatalma. <b>Két alaptípusa van: monarchia és köztársaság.</b> A jelzőjük a kormányformára utal.</div>`;return}
   const f=FORM_BY[id];seen.add(id);b.classList.add('seen');
   const exs=f.ex.length?`<div class="exs">${f.ex.map(x=>`<span class="${f.ex2.includes(x)?'m':''}">${esc(x)}</span>`).join('')}</div><div class="prog">A sárgák a megtanulandó 2 példa.</div>`:'';
   info.innerHTML=`<h4>${f.num?f.num+' ':''}${esc(f.name)}</h4><div><b>Röviden:</b> ${f.simple}</div><div style="margin-top:6px">${f.def}</div>${exs}`;
   $('#tprog',host).textContent=`${seen.size} / ${total} megnézve`;
   if(seen.size>=total)done();
  };
 });
};
WIDGETS.powers=(host,done)=>{
 const data={
  hu:{n:`Magyarország`,t:[`parlament`,`az Országgyűlés – a törvényhozó hatalom (jegyzet: parlament)`],v:[`kormány`,`a végrehajtó hatalom (az USA-ban az elnök, jegyzet: Trump)`],b:[`legfelsőbb bíróság`,`a bírói hatalom (nálunk a Kúria)`]},
  uk:{n:`Nagy-Britannia (alkotmányos monarchia)`,t:[`parlament`,`cenzusos választójog – csak a lakosság 1–2%-a szavazhat`],v:[`a parlamentnek felelős kormány`,`a parlament többségéből áll`],b:[`független bírói hatalom`,`a bírák függetlenek`]}
 };
 const seen=new Set();
 host.innerHTML=`<div class="wgt"><div class="tabs"><button class="tab on" data-k="hu">Magyarország</button><button class="tab" data-k="uk">Nagy-Britannia</button></div><div id="pw"></div><div class="prog" id="pprog">0 / 2 ország megnézve</div></div>`;
 const show=k=>{
  const d=data[k];seen.add(k);
  $$('.tab',host).forEach(t=>t.classList.toggle('on',t.dataset.k===k));
  $('#pw',host).innerHTML=`<div class="pw"><div><h5>Törvényhozó</h5><b>${d.t[0]}</b><div>${d.t[1]}</div></div><div><h5>Végrehajtó</h5><b>${d.v[0]}</b><div>${d.v[1]}</div></div><div><h5>Bírói</h5><b>${d.b[0]}</b><div>${d.b[1]}</div></div></div>`;
  $('#pprog',host).textContent=`${seen.size} / 2 ország megnézve`;
  if(seen.size>=2)done();
 };
 $$('.tab',host).forEach(t=>t.onclick=()=>show(t.dataset.k));show('hu');
};
WIDGETS.spread=(host,done)=>{
 const N={
  lon:{x:200,y:105,n:`London`,i:`Anglia központja – innen indul a felvilágosodás (17. sz.), innen megy Észak-Amerikába és Párizsba.`},
  par:{x:300,y:190,n:`Párizs`,i:`A felvilágosodás középpontja: szalonok, kávéházak, Enciklopédia. Innen terjed tovább Európában és Amerikában.`},
  ber:{x:420,y:110,n:`Berlin`,i:`Porosz Királyság: felvilágosult abszolutizmus. Innen megy tovább kelet felé (Pétervár).`},
  bec:{x:450,y:215,n:`Bécs`,i:`Habsburg Birodalom: felvilágosult abszolutizmus.`},
  pet:{x:570,y:55,n:`Pétervár`,i:`Orosz Birodalom: ide érkezik meg legkésőbb a felvilágosodás.`},
  esp:{x:190,y:290,n:`Spanyolország`,i:`Spanyol Királyság – innen megy tovább Latin-Amerikába.`},
  na:{x:60,y:140,n:`Észak-Amerika`,i:`Az angol gyarmatokra London és Párizs felől is eljut – itt lesz államalapítás (USA).`},
  la:{x:55,y:320,n:`Latin-Amerika`,i:`A spanyol (és portugál) gyarmatokra Spanyolország felől érkeznek az eszmék.`}
 };
 const E=[[`lon`,`par`],[`par`,`ber`],[`par`,`bec`],[`par`,`esp`],[`esp`,`la`],[`lon`,`na`],[`par`,`na`],[`ber`,`pet`]];
 const seen=new Set();
 const arrows=E.map(([a,b])=>{const A=N[a],B=N[b];const dx=B.x-A.x,dy=B.y-A.y,l=Math.hypot(dx,dy);const r=30;return `<path class="ar" d="M${A.x+dx/l*r} ${A.y+dy/l*r} L${B.x-dx/l*(r+4)} ${B.y-dy/l*(r+4)}"/>`}).join('');
 const nodes=Object.entries(N).map(([k,n])=>`<g class="nd" data-k="${k}"><circle cx="${n.x}" cy="${n.y}" r="20"/><text x="${n.x}" y="${n.y+40}">${n.n}</text></g>`).join('');
 host.innerHTML=`<div class="wgt"><svg class="map" viewBox="0 0 640 360"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#9a8cff"/></marker></defs>${arrows}${nodes}</svg><div class="mapinfo" id="mi"><b>Kattints a körökre!</b> A nyilak azt mutatják, merre terjedt a felvilágosodás.</div><div class="prog" id="mprog">0 / ${Object.keys(N).length} megnézve</div></div>`;
 $$('.nd',host).forEach(g=>g.onclick=()=>{
  const n=N[g.dataset.k];seen.add(g.dataset.k);$$('.nd',host).forEach(x=>x.classList.remove('cur'));g.classList.add('seen','cur');
  $('#mi',host).innerHTML=`<b>${n.n}</b> – ${n.i}`;$('#mprog',host).textContent=`${seen.size} / ${Object.keys(N).length} megnézve`;
  if(seen.size>=Object.keys(N).length)done();
 });
};
function buildReveal(host,rv,startOpen,done){
 const t=h('table','rv');
 let html='<tr>'+rv.head.map(x=>`<th>${x}</th>`).join('')+'</tr>';
 rv.rows.forEach(r=>{html+='<tr>'+r.map((x,i)=>`<td class="${i===0?'k':(startOpen?'shown':'hid')}">${x}</td>`).join('')+'</tr>'});
 t.innerHTML=html;host.append(t);
 const prog=h('div','prog');host.append(prog);
 const upd=()=>{const left=$$('td.hid',t).length;prog.textContent=left?`Még ${left} takart mező van.`:'Mindent felfedtél.';if(!left)done()};
 $$('td.hid',t).forEach(td=>td.onclick=()=>{td.classList.remove('hid');td.classList.add('shown');upd()});
 upd();
}
