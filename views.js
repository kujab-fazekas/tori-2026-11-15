/* ===== NÉZETEK ===== */
const ZONES=[
 {id:'years',n:`Évszám-gyakorló`,d:`Sorrend, párosítás, beírás. Minden évszám a jegyzetedből és a ppt-ből.`,gen:()=>ZONEGEN.years(15)},
 {id:'names',n:`Név- és helyesírás-gyakorló`,d:`Személyek, művek, helyek és szakszavak pontos írása. Az ékezetet is számon kérem.`,gen:()=>ZONEGEN.names(15)},
 {id:'terms',n:`Fogalomtár`,d:`Mit jelent a fogalom, melyik fogalomra igaz a meghatározás.`,gen:()=>ZONEGEN.terms(15)},
 {id:'define',n:`Definiáló`,d:`Saját szavaiddal írod le a fogalmat, én megmutatom, mely kulcsszavak hiányoznak.`,custom:true},
 {id:'examples',n:`Államforma-példák`,d:`Sorold be az országokat, és írj 2-2 példát minden államformára.`,gen:()=>ZONEGEN.examples(10)}
];
const PASS_LESSON=80,PASS_ZONE=70,PASS_EXAM=85;
const lessonOpen=i=>DEV||i===0||(S.tests[LESSONS[i-1].id]||0)>=PASS_LESSON;
const allLessonsDone=()=>LESSONS.every(l=>(S.tests[l.id]||0)>=PASS_LESSON);
const zonesOpen=()=>DEV||allLessonsDone();
const allZonesDone=()=>ZONES.every(z=>(S.zones[z.id]||0)>=PASS_ZONE);
const examOpen=()=>DEV||(allLessonsDone()&&allZonesDone());
const examPassed=()=>S.exam&&S.exam.best>=PASS_EXAM;
const poolOf=L=>{const o=[];L.steps.forEach(s=>{(s.checks||[]).forEach(q=>o.push(q));(s.extra||[]).forEach(q=>o.push(q))});return o};
const stepsDone=L=>L.steps.filter(s=>S.steps[s.id]).length;

function go(p){if(location.hash==='#'+p)render();else location.hash=p}
function crumb(parts){const d=h('div','crumb');parts.forEach((p,i)=>{if(i)d.append(document.createTextNode('›'));const a=h(p[1]?'a':'span','',esc(p[0]));if(p[1])a.onclick=()=>go(p[1]);d.append(a)});return d}
function mount(...els){const v=view();v.innerHTML='';els.forEach(e=>v.append(e));window.scrollTo(0,0)}

/* ----- KEZDŐLAP ----- */
function viewHome(){
 setTheme();
 const root=h('div');
 const hero=h('div','hero',`<h1>Töri: felvilágosodás, kormányformák, USA</h1><p>Négy pálya, utána gyakorló zónák és záróvizsga. Nem lehet átlapozni: minden lépés után kérdések jönnek, és csak a megfelelő pontszám nyitja a következő pályát.</p>`);
 root.append(hero);
 const lg=h('div','legend',`<span><b class="must">Piros csillag</b> = a jegyzetedben piros vagy kiemelt, biztosan kell</span><span><mark class="y">kiemelő</mark> <mark class="g">színek</mark> = a jegyzeted kiemelései</span><span><b>(+)</b> = nem a jegyzetből vagy ppt-ből van, kiegészítés</span>`);
 root.append(lg);
 root.append(h('div','how',`<b>Hogyan működik?</b> Egy lépés = rövid összefoglaló, részletes tananyag, majd kérdések. A lépés akkor kész, ha végigmentél a kérdéseken (hibázhatsz, újra próbálhatod). Minden pálya végén teszt van: <b>${PASS_LESSON}%</b> kell a továbblépéshez. A négy pálya után jönnek a gyakorló zónák (<b>${PASS_ZONE}%</b>), végül a záróvizsga (<b>${PASS_EXAM}%</b>). A vaktérkép nincs benne, azt külön csinálod.`));
 root.append(h('h2','sec','Tanulópályák'));
 const path=h('div','path');
 LESSONS.forEach((L,i)=>{
  const open=lessonOpen(i),d=stepsDone(L),pct=S.tests[L.id]||0;
  const n=h('div','node '+(open?'open':'lock'));
  n.style.setProperty('--c1',L.color);n.style.setProperty('--c2',L.color2);
  const badge=pct>=PASS_LESSON?`<span class="badge done">teszt: ${pct}%</span>`:(d===L.steps.length?`<span class="badge new">teszt vár</span>`:'');
  n.innerHTML=`<div class="no">${open?L.no:'?'}</div><div class="tx"><h3>${esc(L.title)}${badge}</h3><p>${esc(L.sub)}</p><div class="dots">${L.steps.map(s=>`<i class="${S.steps[s.id]?'on':''}"></i>`).join('')}</div></div>`;
  if(open)n.onclick=()=>go(`/l/${L.id}`);
  else n.title=`Előbb teljesítsd az előző pálya tesztjét (${PASS_LESSON}%).`;
  path.append(n);
 });
 root.append(path);
 root.append(h('h2','sec','Gyakorló zónák'));
 if(!zonesOpen())root.append(h('div','gate',`A gyakorló zónák akkor nyílnak ki, ha mind a négy pálya tesztjét teljesítetted.`));
 const zs=h('div','zones');
 ZONES.forEach((z,i)=>{
  const open=zonesOpen(),pct=S.zones[z.id]||0;
  const n=h('div','node '+(open?'open':'lock'));
  n.innerHTML=`<div class="no">${open?i+1:'?'}</div><div class="tx"><h3>${esc(z.n)}${pct>=PASS_ZONE?`<span class="badge done">${pct}%</span>`:''}</h3><p>${esc(z.d)}</p></div>`;
  if(open)n.onclick=()=>go(`/z/${z.id}`);
  zs.append(n);
 });
 root.append(zs);
 root.append(h('h2','sec','Vizsga és segédeszközök'));
 const ex=h('div','zones');
 const eo=examOpen();
 const e1=h('div','node '+(eo?'open':'lock'));
 e1.innerHTML=`<div class="no">${eo?'V':'?'}</div><div class="tx"><h3>Záróvizsga${examPassed()?`<span class="badge done">${S.exam.best}%</span>`:''}</h3><p>Kb. 40 kérdés mindenből, egy próbálkozás kérdésenként. ${PASS_EXAM}% kell.${eo?'':' Előbb a pályák és a zónák.'}</p></div>`;
 if(eo)e1.onclick=()=>go('/exam');
 const wc=Object.keys(S.wrong).length;
 const e2=h('div','node '+(wc?'open':'lock'));
 e2.innerHTML=`<div class="no">${wc}</div><div class="tx"><h3>Hibasor</h3><p>${wc?`${wc} kérdés vár, amit elrontottál. Gyakorold át, és kikerül a sorból.`:'Üres, minden hibát kijavítottál.'}</p></div>`;
 if(wc)e2.onclick=()=>go('/mist');
 const pu=examPassed()||DEV;
 const e3=h('div','node '+(pu?'open':'lock'));
 e3.innerHTML=`<div class="no">P</div><div class="tx"><h3>Puska</h3><p>${pu?'Az egész anyag sűrítve, nyomtatható.':'A sikeres vizsga után nyílik ki.'}</p></div>`;
 if(pu)e3.onclick=()=>go('/puska');
 const e4=h('div','node '+(pu?'open':'lock'));
 e4.innerHTML=`<div class="no">O</div><div class="tx"><h3>Oklevél</h3><p>${pu?'Megérdemelted.':'A sikeres vizsga után.'}</p></div>`;
 if(pu)e4.onclick=()=>go('/cert');
 ex.append(e1,e2,e3,e4);root.append(ex);
 const rs=h('div','actions');rs.style.marginTop='30px';
 const rb=h('button','btn ghost sm','Haladás törlése');
 rb.onclick=()=>{if(confirm('Biztosan törlöd az összes haladást és pontot?')){S=defState();save();renderTop();render()}};
 rs.append(rb);root.append(rs);
 mount(root);
}

/* ----- KVÍZ FUTTATÓ ----- */
function runQuiz(host,qs,o){
 host.innerHTML='';
 let i=0,okc=0;const wrongList=[];
 const top=h('div','qprog');const bar=h('div','bar');const bi=h('i');bar.append(bi);const lab=h('b');top.append(lab,bar);
 const qh=h('div');host.append(top,qh);
 const next=()=>{
  if(i>=qs.length){o.onFinish({ok:okc,total:qs.length,wrong:wrongList});return}
  bi.style.width=(i/qs.length*100)+'%';lab.textContent=`${i+1} / ${qs.length}`;
  const q=qs[i];
  mountQ(qh,q,{mode:o.mode||'learn',label:o.label||'Kérdés',last:i===qs.length-1,noxp:o.noxp,onDone:r=>{if(r.ok)okc++;else wrongList.push(q);i++;next();window.scrollTo({top:Math.max(0,top.getBoundingClientRect().top+scrollY-70),behavior:'smooth'})}});
 };
 next();
}
function resultCard(r,need,opts={}){
 const pct=Math.round(r.ok/r.total*100),pass=pct>=need;
 const d=h('div','score');
 d.innerHTML=`<div class="big">${pct}%</div><h2>${pass?(opts.passMsg||'Átmentél!'):'Még nem elég'}</h2><p>${r.ok} jó válasz ${r.total} kérdésből. A továbblépéshez ${need}% kell.</p>`;
 if(r.wrong.length){
  const ul=h('ul','mist');
  r.wrong.forEach(q=>ul.append(h('li','',`<b>${esc(q.q||'Kérdés')}</b><br>Helyes: ${esc(answerText(q))}`)));
  d.append(h('h4','',`Ezeket nézd át (${r.wrong.length}), bekerültek a hibasorba:`),ul);
 }
 return{card:d,pct,pass};
}

/* ----- PÁLYA ----- */
function viewLesson(L){
 setTheme(L.color,L.color2);
 const i=LESSONS.indexOf(L);
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`${L.no}. pálya`]]));
 const hd=h('div','stephead',`<small>${L.no}. pálya</small><h2>${esc(L.title)}</h2><div>${esc(L.sub)}</div>`);
 root.append(hd,h('p','',esc(L.intro)));
 const list=h('div','steplist');
 let firstOpen=-1;
 L.steps.forEach((s,k)=>{
  const done=!!S.steps[s.id],open=DEV||k===0||!!S.steps[L.steps[k-1].id];
  if(open&&!done&&firstOpen<0)firstOpen=k;
  const it=h('div','stepitem '+(done?'done':(k===firstOpen?'cur':''))+(open?'':' lock'));
  it.innerHTML=`<div class="n">${done?'✓':k+1}</div><div style="flex:1"><b>${esc(s.title)}</b><div class="src">${esc(s.src||'')}</div></div>`;
  if(open)it.onclick=()=>go(`/l/${L.id}/s/${k}`);
  list.append(it);
 });
 root.append(list);
 const all=stepsDone(L)===L.steps.length||DEV;
 const pct=S.tests[L.id]||0;
 const t=h('div','node '+(all?'open':'lock'));
 t.innerHTML=`<div class="no">T</div><div class="tx"><h3>Pályateszt${pct?`<span class="badge ${pct>=PASS_LESSON?'done':''}">legjobb: ${pct}%</span>`:''}</h3><p>${all?`Egy próbálkozás kérdésenként, ${PASS_LESSON}% kell a továbblépéshez.`:'Előbb végezz az összes lépéssel.'}</p></div>`;
 if(all)t.onclick=()=>go(`/l/${L.id}/test`);
 root.append(t);
 mount(root);
}

/* ----- LÉPÉS ----- */
function viewStep(L,k){
 setTheme(L.color,L.color2);
 const st=L.steps[k],done=!!S.steps[st.id];
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`${L.no}. pálya`,`/l/${L.id}`],[`${k+1}. lépés`]]));
 root.append(h('div','stephead',`<small>${esc(L.title)} · ${k+1}. lépés / ${L.steps.length}</small><h2>${esc(st.title)}</h2>`));
 if(st.src)root.append(h('div','src',`Forrás: ${esc(st.src)}`));
 root.append(h('div','simple',st.simple));
 const content=h('div','content',st.html);
 root.append(content);
 const wHost=h('div'),rHost=h('div'),afterEl=h('div',done?'':'hide',st.after||'');
 root.append(wHost,rHost,afterEl);
 const checks=h('div');root.append(checks);
 let need=(st.widget?1:0)+(st.reveal?1:0);
 if(done)need=0;
 let got=0,started=false;
 const gate=h('div','gate',need?`Előbb ${st.widget?'próbáld ki az ábrát':'fedd fel a takart mezőket'} – utána jönnek a kérdések.`:'');
 if(need)checks.append(gate);
 const unlock=()=>{got++;if(got>=need&&!started)startChecks()};
 if(st.widget)WIDGETS[st.widget](wHost,unlock);
 if(st.reveal)buildReveal(rHost,st.reveal,done,()=>{afterEl.classList.remove('hide');unlock()});
 if(!st.reveal&&st.after)afterEl.classList.remove('hide');
 const nextBtns=()=>{
  const a=h('div','actions');
  if(k<L.steps.length-1)a.append(mkBtn('Következő lépés',()=>go(`/l/${L.id}/s/${k+1}`),'btn good'));
  else a.append(mkBtn('Irány a pályateszt',()=>go(`/l/${L.id}/test`),'btn good'));
  a.append(mkBtn('Vissza a pályához',()=>go(`/l/${L.id}`),'btn ghost'));
  return a;
 };
 function startChecks(){
  started=true;checks.innerHTML='';
  const qs=st.checks||[];
  if(done){
   const a=h('div','actions');
   a.append(mkBtn('Kérdések újra, gyakorlásnak',()=>{a.remove();const qh=h('div');checks.append(qh);runQuiz(qh,qs,{mode:'learn',noxp:true,label:'Gyakorló kérdés',onFinish:()=>{qh.innerHTML='';qh.append(h('div','fb ok','<b>Kész.</b> Ezúttal nem jár pont.'))}})}));
   checks.append(a,nextBtns());return;
  }
  const qh=h('div');checks.append(qh);
  checks.append(h('div','prog','A lépés a kérdések végigcsinálása után számít késznek.'));
  runQuiz(qh,qs,{mode:'learn',label:'Ellenőrző kérdés',onFinish:r=>{
   S.steps[st.id]=true;save();award(25);confetti(80);sfx.win();
   const box=h('div','score');
   box.innerHTML=`<h2>Lépés kész</h2><p>${r.ok} / ${r.total} kérdés elsőre sikerült. +25 XP.</p>`;
   qh.innerHTML='';qh.append(box);qh.append(nextBtns());
  }});
 }
 if(!need)startChecks();
 mount(root);
}
function mkBtn(t,fn,cls='btn'){const b=h('button',cls,t);b.onclick=fn;return b}

/* ----- PÁLYATESZT ----- */
function viewLessonTest(L){
 setTheme(L.color,L.color2);
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`${L.no}. pálya`,`/l/${L.id}`],[`Teszt`]]));
 root.append(h('div','stephead',`<small>${esc(L.title)}</small><h2>Pályateszt</h2>`));
 const intro=h('div','how',`Kérdésenként egy próbálkozás, nincs javítás. A továbblépéshez <b>${PASS_LESSON}%</b> kell. Ha nem megy, a hibasorból gyakorolhatsz, aztán újra próbálhatod.`);
 const host=h('div');root.append(intro,host);
 intro.append(h('div','actions',''));
 const sb=mkBtn('Teszt indítása',()=>{intro.remove();const qs=shuffle(poolOf(L)).slice(0,18);runQuiz(host,qs,{mode:'test',label:'Tesztkérdés',onFinish:r=>{
  const rc=resultCard(r,PASS_LESSON,{passMsg:'Pálya teljesítve!'});
  S.tests[L.id]=Math.max(S.tests[L.id]||0,rc.pct);save();
  if(rc.pass){confetti(140);sfx.win();award(60)}else sfx.no();
  host.innerHTML='';host.append(rc.card);
  const a=h('div','actions');
  const idx=LESSONS.indexOf(L);
  if(rc.pass){
   if(idx<LESSONS.length-1)a.append(mkBtn('Következő pálya',()=>go(`/l/${LESSONS[idx+1].id}`),'btn good'));
   else a.append(mkBtn('Irány a gyakorló zónák',()=>go('/'),'btn good'));
  }else a.append(mkBtn('Újra',()=>viewLessonTest(L),'btn good'));
  a.append(mkBtn('Pálya áttekintése',()=>go(`/l/${L.id}`),'btn ghost'));
  host.append(a);window.scrollTo(0,0);
 }})},'btn cta');
 intro.append(sb);
 mount(root);
}

/* ----- GYAKORLÓ ZÓNA ----- */
function viewZone(z){
 setTheme('#2fb344','#3d8bfd');
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[z.n]]));
 root.append(h('div','stephead',`<small>Gyakorló zóna</small><h2>${esc(z.n)}</h2>`));
 root.append(h('div','how',esc(z.d)+` Hibázhatsz, újra próbálhatod. ${PASS_ZONE}% a teljesítéshez. Ha többször nekifutsz, mindig más kérdéseket kapsz.`));
 const host=h('div');root.append(host);
 const fin=r=>{
  const rc=resultCard(r,PASS_ZONE,{passMsg:'Zóna teljesítve!'});
  S.zones[z.id]=Math.max(S.zones[z.id]||0,rc.pct);save();
  if(rc.pass){confetti(100);sfx.win();award(40)}
  host.innerHTML='';host.append(rc.card);
  const a=h('div','actions');a.append(mkBtn('Még egy kör',()=>viewZone(z),'btn good'),mkBtn('Kezdőlap',()=>go('/'),'btn ghost'));host.append(a);window.scrollTo(0,0);
 };
 if(z.custom)runDefine(host,fin);
 else runQuiz(host,z.gen(),{mode:'learn',label:z.n,onFinish:r=>fin({ok:r.ok,total:r.total,wrong:r.wrong})});
 mount(root);
}
function runDefine(host,fin){
 const items=shuffle(TERMS).slice(0,10);let i=0,good=0;
 const next=()=>{
  if(i>=items.length){fin({ok:good,total:items.length,wrong:[]});return}
  const t=items[i];host.innerHTML='';
  const w=h('div','qwrap');
  w.append(h('div','qhead',`<span>Definiáló ${i+1}/${items.length}</span><span>saját szavaiddal</span>`));
  w.append(h('div','qtext',`Mi az: ${esc(t[1])}?`));
  const ta=h('textarea','txt');ta.placeholder='Írd le saját szavaiddal, pár mondatban';w.append(ta);
  const fb=h('div'),ac=h('div','actions');w.append(fb,ac);
  const chk=mkBtn('Megnézem a meghatározást',()=>{
   const txt=strip(ta.value).toLowerCase();
   const keys=t[3].map(g=>({lab:g[0],hit:g.some(a=>txt.includes(a))}));
   ta.disabled=true;chk.remove();
   const hits=keys.filter(k=>k.hit).length;
   fb.innerHTML=`<div class="fb hint"><b>Kulcsszavak: ${hits} / ${keys.length}</b><div class="keys">${keys.map(k=>`<span class="${k.hit?'y':'n'}">${k.hit?'megvan':'hiányzik'}</span>`).join('')}</div><div class="deftxt"><b>${esc(t[1])}:</b> ${esc(t[2])}</div><p>Őszintén: tudtad ezt?</p></div>`;
   ac.append(mkBtn('Tudtam',()=>{good++;S.streak++;combo();award(10);sfx.ok();i++;next()},'btn good'),mkBtn('Nem tudtam',()=>{S.streak=0;combo();award(2);sfx.no();i++;next()},'btn ghost'));
  },'btn chk');
  ac.append(chk);host.append(w);
  setTimeout(()=>{try{ta.focus({preventScroll:true})}catch(e){}},60);
 };
 next();
}

/* ----- HIBASOR ----- */
function viewMist(){
 setTheme('#e5484d','#ff922b');
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`Hibasor`]]));
 root.append(h('div','stephead',`<small>Hibasor</small><h2>Amit elrontottál</h2>`));
 const host=h('div');root.append(host);
 const qs=shuffle(Object.values(S.wrong)).slice(0,20);
 if(!qs.length)host.append(h('div','gate','A hibasor üres.'));
 else runQuiz(host,qs,{mode:'learn',label:'Hibasor',onFinish:r=>{
  host.innerHTML='';
  const rest=Object.keys(S.wrong).length;
  host.append(h('div','score',`<div class="big">${r.ok}/${r.total}</div><h2>Kész</h2><p>Elsőre jól megoldott kérdések kikerültek a sorból. Még ${rest} várakozik.</p>`));
  const a=h('div','actions');if(rest)a.append(mkBtn('Újabb kör',()=>viewMist(),'btn good'));a.append(mkBtn('Kezdőlap',()=>go('/'),'btn ghost'));host.append(a);
 }});
 mount(root);
}

/* ----- ZÁRÓVIZSGA ----- */
function viewExam(){
 setTheme('#6c4cff','#ff5a8a');
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`Záróvizsga`]]));
 root.append(h('div','stephead',`<small>Záróvizsga</small><h2>Az egész anyag</h2>`));
 const intro=h('div','how',`Kb. 40 kérdés a négy pályából, évszámokból, nevekből, fogalmakból és példákból. Kérdésenként egy próbálkozás. <b>${PASS_EXAM}%</b> kell.`);
 const host=h('div');root.append(intro,host);
 intro.append(mkBtn('Vizsga indítása',()=>{
  intro.remove();
  let qs=[];
  LESSONS.forEach(L=>qs.push(...shuffle(poolOf(L)).slice(0,7)));
  qs.push(...ZONEGEN.years(4),...ZONEGEN.names(3),...ZONEGEN.terms(3),...ZONEGEN.examples(2));
  qs=shuffle(qs).slice(0,42);
  runQuiz(host,qs,{mode:'test',label:'Vizsgakérdés',onFinish:r=>{
   const rc=resultCard(r,PASS_EXAM,{passMsg:'Vizsga sikeres!'});
   S.exam={best:Math.max(S.exam?S.exam.best:0,rc.pct)};save();
   if(rc.pass){confetti(220);sfx.win();award(150)}else sfx.no();
   host.innerHTML='';host.append(rc.card);
   const a=h('div','actions');
   if(rc.pass)a.append(mkBtn('Oklevél',()=>go('/cert'),'btn good'),mkBtn('Puska',()=>go('/puska'),'btn good'));
   else a.append(mkBtn('Újra',()=>viewExam(),'btn good'));
   a.append(mkBtn('Kezdőlap',()=>go('/'),'btn ghost'));host.append(a);window.scrollTo(0,0);
  }});
 },'btn cta'));
 mount(root);
}

/* ----- PUSKA ----- */
function viewPuska(){
 setTheme('#ffb400','#ff5a8a');
 const root=h('div','cheat');
 root.append(crumb([[`Kezdőlap`,'/'],[`Puska`]]));
 root.append(h('div','stephead',`<small>Az egész anyag sűrítve</small><h2>Puska</h2>`));
 const pb=mkBtn('Nyomtatás',()=>window.print(),'btn ghost sm');root.append(pb);
 LESSONS.forEach(L=>{
  root.append(h('h2','',`${L.no}. ${esc(L.title)}`));
  L.steps.forEach(s=>{
   const b=h('div','content');
   b.append(h('h3','',esc(s.title)));b.append(h('div','simple',s.simple));
   if(s.reveal){const t=h('table','t');t.innerHTML='<tr>'+s.reveal.head.map(x=>`<th>${x}</th>`).join('')+'</tr>'+s.reveal.rows.map(r=>'<tr>'+r.map(x=>`<td>${x}</td>`).join('')+'</tr>').join('');b.append(t)}
   root.append(b);
  });
 });
 root.append(h('h2','','Államformák és példák'));
 const ft=h('table','t');
 ft.innerHTML='<tr><th>Típus</th><th>Röviden</th><th>Példák</th></tr>'+FORMS.map(f=>`<tr><td><b>${f.num?f.num+' ':''}${esc(f.name)}</b></td><td>${f.simple}</td><td>${f.ex.map(esc).join(', ')}</td></tr>`).join('');
 root.append(ft);
 root.append(h('h2','','Évszámok'));
 const tl=h('div','timeline');
 YEARS.forEach(y=>tl.append(h('div','ev',`<b>${esc(y[1])}</b>${esc(y[2])}`)));
 root.append(tl);
 root.append(h('h2','','Fogalomtár'));
 const gt=h('table','t');
 gt.innerHTML='<tr><th>Fogalom</th><th>Jelentés</th></tr>'+TERMS.map(t=>`<tr><td><b>${esc(t[1])}</b></td><td>${esc(t[2])}</td></tr>`).join('');
 root.append(gt);
 mount(root);
}

/* ----- OKLEVÉL ----- */
function viewCert(){
 setTheme('#ffb400','#ff5a8a');
 const root=h('div');
 root.append(crumb([[`Kezdőlap`,'/'],[`Oklevél`]]));
 const d=new Date();
 const c=h('div','certificate');
 c.innerHTML=`<h2>Töri-oklevél</h2><p>Ez igazolja, hogy</p><p><input class="txt" id="nm" style="max-width:340px;text-align:center;font-size:22px" placeholder="írd be a neved" value="${esc(S.name||'')}"></p><p>végigcsinálta a felvilágosodás, a kormányformák és az USA létrejötte anyagot,<br>és a záróvizsgát <b>${S.exam?S.exam.best:0}%</b>-ra teljesítette.</p><p>${d.getFullYear()}. ${d.getMonth()+1}. ${d.getDate()}. · Szint: ${LEVELS[lvlOf(S.xp)-1]} · ${S.xp} XP</p>`;
 root.append(c);
 const a=h('div','actions');a.append(mkBtn('Nyomtatás',()=>window.print(),'btn good'),mkBtn('Kezdőlap',()=>go('/'),'btn ghost'));root.append(a);
 mount(root);
 $('#nm').oninput=e=>{S.name=e.target.value;save()};
}

/* ===== ROUTER ===== */
function render(){
 const p=(location.hash||'#/').slice(1);
 const seg=p.split('/').filter(Boolean);
 try{
  if(!seg.length)return viewHome();
  if(seg[0]==='l'){
   const L=LESSONS.find(x=>x.id===seg[1]);if(!L)return go('/');
   const i=LESSONS.indexOf(L);if(!lessonOpen(i))return go('/');
   if(seg[2]==='s'){
    const k=+seg[3];if(!(k>=0&&k<L.steps.length))return go(`/l/${L.id}`);
    if(!DEV&&k>0&&!S.steps[L.steps[k-1].id])return go(`/l/${L.id}`);
    return viewStep(L,k);
   }
   if(seg[2]==='test'){if(!DEV&&stepsDone(L)<L.steps.length)return go(`/l/${L.id}`);return viewLessonTest(L)}
   return viewLesson(L);
  }
  if(seg[0]==='z'){const z=ZONES.find(x=>x.id===seg[1]);if(!z||!zonesOpen())return go('/');return viewZone(z)}
  if(seg[0]==='mist')return viewMist();
  if(seg[0]==='exam'){if(!examOpen())return go('/');return viewExam()}
  if(seg[0]==='puska'){if(!(examPassed()||DEV))return go('/');return viewPuska()}
  if(seg[0]==='cert'){if(!(examPassed()||DEV))return go('/');return viewCert()}
  go('/');
 }catch(e){
  view().innerHTML=`<div class="warn note"><b>Hiba történt.</b> Kattints a logóra a kezdőlaphoz. (${esc(String(e&&e.message||e))})</div>`;
  if(window.console)console.error(e);
 }
}

/* ===== INDÍTÁS ===== */
function boot(){
 initConfetti();renderTop();
 $('#logo').onclick=()=>go('/');
 $('#sndbtn').onclick=()=>{S.sound=!S.sound;save();renderTop();if(S.sound)sfx.ok()};
 addEventListener('hashchange',render);
 render();
}
document.addEventListener('DOMContentLoaded',boot);
