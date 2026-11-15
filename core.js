/* ===== MAG: segédek és kérdésgyártók ===== */
const $=(s,el=document)=>el.querySelector(s);
const $$=(s,el=document)=>[...el.querySelectorAll(s)];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const strip=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ő/g,'o').replace(/ű/g,'u');
const norm=s=>String(s).toLowerCase().replace(/[–—−]/g,'-').replace(/\s+/g,' ').replace(/[\s.]+$/,'').trim();
const loose=s=>strip(norm(s)).replace(/[^a-z0-9]/g,'');
const hash=s=>{let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return 'q'+(h>>>0).toString(36)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* kérdéstípusok */
const mc=(q,ok,bad,e)=>({t:'mc',q,ok,bad,e});
const mu=(q,ok,bad,e)=>({t:'mu',q,ok,bad,e});
const tf=(q,a,e)=>({t:'tf',q,a,e});
const fl=(q,a,e,o={})=>({t:'fl',q,a:[].concat(a),e,...o});
const od=(q,items,e)=>({t:'od',q,items,e});
const mt=(q,pairs,e)=>({t:'mt',q,pairs,e});
const st=(q,cats,items,e)=>({t:'st',q,cats,items,e});
const cz=(q,text,e)=>({t:'cz',q,text,e});

const LESSONS=[];
