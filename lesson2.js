/* ===== 2. PÁLYA: KORMÁNYFORMÁK ÉS ÁLLAMELMÉLETI FOGALMAK ===== */
const FORMS=[
 {id:'mon',num:'',name:`Monarchia`,grp:`root`,
  simple:`Az államfő (az uralkodó) hatalma örökölhető, és általában élete végéig tart.`,
  def:`<b>Államforma.</b> Az államfő hatalma <b>öröklődik</b> (uralkodó: király, császár, emír…).`,ex:[],ex2:[]},
 {id:'kt',num:'',name:`Köztársaság`,grp:`root`,
  simple:`Az államfőt megválasztják, és meghatározott időre kapja a hatalmat.`,
  def:`<b>Államforma.</b> Az államfő <b>választott</b>, nem örökli a tisztséget.`,ex:[],ex2:[]},
 {id:'alk',num:'①',name:`Alkotmányos (parlamentáris) monarchia`,grp:`mon`,
  simple:`Van uralkodó, de a hatalmát az alkotmány korlátozza; a valódi irányítás a parlamentnél és a parlamentnek felelős kormánynál van.`,
  def:`<b>Alkotmányos / parlamentáris monarchia.</b> Az uralkodó hatalmát az <b>alkotmány korlátozza</b>; a törvényhozás a <b>parlamenté</b>, a kormány a parlamentnek felelős.`,
  ex:[`Egyesült Királyság`,`Spanyolország`,`Svédország`,`Dánia`,`Luxemburg`,`Marokkó`,`Belgium`,`Hollandia`,`Liechtenstein`,`Monaco`],ex2:[`Egyesült Királyság`,`Spanyolország`]},
 {id:'abs',num:'②',name:`Abszolút monarchia`,grp:`mon`,
  simple:`Az uralkodó hatalma korlátlan: ő dönt a törvényekről és a végrehajtásról is.`,
  def:`<b>Abszolút monarchia.</b> Az uralkodó hatalma <b>korlátlan</b>, nincs valódi hatalommegosztás.`,
  ex:[`Katar`,`Vatikán`,`Szaúd-Arábia`,`Egyesült Arab Emírségek`,`Bhután`],ex2:[`Katar`,`Szaúd-Arábia`]},
 {id:'prez',num:'③',name:`Prezidenciális köztársaság`,grp:`kt`,
  simple:`Az elnök egyszerre államfő és a végrehajtó hatalom feje; erős elnök, szétválasztott hatalmi ágak.`,
  def:`<b>Prezidenciális köztársaság.</b> Az <b>elnök</b> az államfő és egyben a <b>végrehajtó hatalom feje</b>, a nép (közvetve vagy közvetlenül) választja.`,
  ex:[`USA`,`Brazília`,`Mexikó`,`Argentína`],ex2:[`USA`,`Brazília`],extra:[`Brazília`,`Mexikó`,`Argentína`]},
 {id:'parl',num:'④',name:`Parlamentáris köztársaság`,grp:`kt`,
  simple:`A parlament a hatalom központja; a kormány a parlamenttől függ, a köztársasági elnök főleg képviseleti szerepet tölt be.`,
  def:`<b>Parlamentáris köztársaság.</b> A <b>parlament</b> a hatalom központja, a kormány a parlamentnek felelős, az elnök szerepe főleg <b>képviseleti</b>.`,
  ex:[`Magyarország`,`Olaszország`,`Csehország`,`Németország`],ex2:[`Magyarország`,`Olaszország`],extra:[`Olaszország`,`Csehország`,`Németország`]},
 {id:'nep',num:'⑤',name:`Népköztársaság`,grp:`kt`,
  simple:`Formálisan köztársaság, valójában egyetlen párt (a kommunista párt) irányít a nép nevében.`,
  def:`<b>Népköztársaság.</b> Egypártrendszerű, <b>kommunista/szocialista</b> köztársaság: a nép nevében a párt irányít.`,
  ex:[`Kína`,`Észak-Korea`,`Laosz`],ex2:[`Kína`,`Észak-Korea`]},
 {id:'szov',num:'+1',name:`Szövetségi köztársaság`,grp:`szov`,
  simple:`Az ország önálló jogú tagállamokból (tartományokból) áll, és ezek együtt alkotják a szövetségi államot.`,
  def:`<b>Szövetségi köztársaság (föderáció).</b> Az ország <b>tagállamokból / tartományokból</b> áll, amelyeknek saját jogköre van, együtt alkotják az országot.`,
  ex:[`USA`,`Ausztria`,`Németország`,`Svájc`,`Tanzánia`,`Venezuela`],ex2:[`USA`,`Ausztria`]}
];
const FORM_BY=Object.fromEntries(FORMS.map(f=>[f.id,f]));

LESSONS.push({
id:'forma', no:2, title:`Kormányformák`, sub:`Alkotmány, államforma, kormányforma, példák`, color:`#3ec8a4`, color2:`#2e86de`,
intro:`A dolgozat egyik fő témája. A ppt-ben egy hatalmas piros felkiáltójel áll ezen a részen – itt minden mondat számít, és mindenre kell példa (2-2-2-2).`,
steps:[

{id:'l2s1', title:`Alkotmány, államforma, kormányforma`, src:`jegyzet 10. old. · ppt 7. dia`,
simple:`Az alkotmány az ország alaptörvénye. Az államforma azt mondja meg, ki az államfő és honnan van a hatalma. A kormányforma azt, hogyan viszonyulnak egymáshoz a hatalmi ágak.`,
html:`<ul class="pts">
<li><mark class="g"><b class="must">Alkotmány</b></mark>: <b>alaptörvény</b>, az állami berendezkedés <b>legfontosabb normáinak összefoglalása</b> (az állampolgárok és az államigazgatás jogai és kötelességei).</li>
<li><b class="must">Államforma</b>: egy ország <b>irányításának szervezeti felépítése</b> / <b>honnan ered az államfő hatalma</b>.</li>
<li><b class="must">Az államforma két alaptípusa</b>: <b>monarchia</b> és <b>köztársaság</b>.</li>
<li>A jelzőjük (pl. alkotmányos, abszolút, prezidenciális…) a <b class="must">kormányformára</b> utal.</li>
<li><b class="must">Kormányforma</b>: a <b>hatalmi ágak szerkezete és egymáshoz való viszonya</b>.</li>
</ul>
<div class="tip"><b>Fogódzó:</b> az <b>államforma</b> az <i>államfőről</i> szól (örökli vagy választják), a <b>kormányforma</b> a <i>hatalmi ágak működéséről</i>.</div>`,
checks:[
 cz(`Egészítsd ki!`,`Az {{alkotmány}} az ország alaptörvénye, az állami berendezkedés legfontosabb {{normáinak}} összefoglalása.`,`Alkotmány = alaptörvény.`),
 mc(`Mit mutat meg az államforma?`,`honnan ered az államfő hatalma, hogyan épül fel az irányítás`,[`hány lakosa van az országnak`,`milyen a gazdaság`,`melyik a többségi vallás`],`Államforma: az irányítás szervezeti felépítése, az államfő hatalmának eredete.`),
 mc(`Mi a kormányforma?`,`a hatalmi ágak szerkezete és egymáshoz való viszonya`,[`az államfő neve`,`az ország területe`,`az alkotmány szövege`],`Kormányforma = hatalmi ágak szerkezete és viszonya.`),
 mc(`Mi az államforma két alaptípusa?`,`monarchia és köztársaság`,[`alkotmányos és abszolút`,`prezidenciális és parlamentáris`,`szövetségi és egységes`],`Monarchia és köztársaság. A jelzők (alkotmányos, prezidenciális…) már a kormányformára utalnak.`)
]},

{id:'l2s2', title:`Az államformák fája`, src:`jegyzet 10. old.`,
simple:`Két ág van: monarchia (2 fajta) és köztársaság (3 fajta). A jegyzetedben a számok ①–⑤ jelölik őket, és a szövetségi köztársaság a +1.`,
html:`<p>Kattints minden körre, és olvasd el, mit jelent! A következő lépés akkor nyílik meg, ha mind a nyolcat megnézted.</p>`,
widget:'tree',
checks:[
 mt(`Párosítsd a számot a típussal (ahogy a jegyzetedben van)!`,[[`①`,`alkotmányos monarchia`],[`②`,`abszolút monarchia`],[`③`,`prezidenciális köztársaság`],[`④`,`parlamentáris köztársaság`],[`⑤`,`népköztársaság`]],`① alkotmányos, ② abszolút, ③ prezidenciális, ④ parlamentáris, ⑤ népköztársaság.`),
 mu(`Melyek a köztársaság fajtái? (jelöld mindet)`,[`prezidenciális`,`parlamentáris`,`népköztársaság`],[`alkotmányos`,`abszolút`],`Az alkotmányos és az abszolút a monarchia fajtái.`),
 mu(`Melyek a monarchia fajtái? (jelöld mindet)`,[`alkotmányos (parlamentáris)`,`abszolút`],[`prezidenciális`,`népköztársaság`,`szövetségi`],`Alkotmányos és abszolút.`)
]},

{id:'l2s3', title:`Monarchiák: alkotmányos és abszolút`, src:`ppt 7. dia`,
simple:`Alkotmányos monarchiában korlátozott az uralkodó hatalma, abszolút monarchiában korlátlan.`,
html:`<table class="t"><tr><th>Típus</th><th>Lényeg</th><th>Példák (ppt, jegyzet)</th></tr>
<tr><td><b class="must">alkotmányos / parlamentáris monarchia</b></td><td>Az uralkodó hatalmát az alkotmány korlátozza; a parlament törvényt hoz, a kormány a parlamentnek felelős.</td><td>Egyesült Királyság, Belgium, Hollandia, Luxemburg, Svédország, Dánia, Liechtenstein, Monaco, Marokkó; a jegyzetedben még <b>Spanyolország</b></td></tr>
<tr><td><b class="must">abszolút monarchia</b></td><td>Az uralkodó hatalma korlátlan.</td><td>Vatikán, Egyesült Arab Emírségek, Katar, Szaúd-Arábia, Bhután</td></tr></table>
<div class="note"><b>Megjegyzés:</b> a ppt lista rövidítéseit feloldottam (Be. = Belgium, Ne. = Hollandia, Lux. = Luxemburg). A „Lichtenstein” helyesen <b>Liechtenstein</b>. A ppt Bhutánt is az abszolút monarchiák közé sorolja – ezt jegyezd meg a dolgozathoz, bár ma Bhután már alkotmányos monarchia (2008 óta), ezért a kvízben nem kérdezem.</div>
<div class="tip"><b>2 példa megtanulandó:</b> alkotmányos monarchia → <b>Egyesült Királyság, Spanyolország</b> · abszolút monarchia → <b>Katar, Szaúd-Arábia</b> (Vatikán is jegyzetben).</div>`,
checks:[
 mc(`Melyik az alkotmányos monarchia ismérve?`,`az uralkodó hatalmát az alkotmány korlátozza`,[`az uralkodó hatalma korlátlan`,`az elnököt a nép választja`,`egy párt irányít`],`Alkotmányos monarchia: korlátozott uralkodói hatalom.`),
 st(`Melyik típushoz tartozik az ország? Válaszd ki az országot, aztán kattints a típusra!`,[`alkotmányos monarchia`,`abszolút monarchia`],[[`Egyesült Királyság`,0],[`Svédország`,0],[`Spanyolország`,0],[`Katar`,1],[`Vatikán`,1],[`Szaúd-Arábia`,1]],`Alkotmányos: Egyesült Királyság, Svédország, Spanyolország. Abszolút: Katar, Vatikán, Szaúd-Arábia.`),
 fl(`Írj két alkotmányos monarchiát vesszővel elválasztva!`,FORM_BY.alk.ex,`Pl. Egyesült Királyság, Spanyolország, Svédország, Dánia, Luxemburg, Marokkó, Belgium, Hollandia, Liechtenstein, Monaco.`,{n:2,ph:`pl. ország1, ország2`}),
 fl(`Írj két abszolút monarchiát vesszővel elválasztva!`,[`Katar`,`Vatikán`,`Szaúd-Arábia`,`Egyesült Arab Emírségek`],`Katar, Vatikán, Szaúd-Arábia, Egyesült Arab Emírségek.`,{n:2,ph:`pl. ország1, ország2`}),
 mc(`Melyik ország abszolút monarchia a jegyzeted szerint?`,`Katar`,[`Dánia`,`Svédország`,`Luxemburg`],`Katar, Vatikán, Szaúd-Arábia.`)
]},

{id:'l2s4', title:`Köztársaságok: prezidenciális, parlamentáris, népköztársaság`, src:`jegyzet 10. old. · ppt 7. dia (piros !)`,
simple:`Három fajtája van: az elnök irányít (prezidenciális), a parlament irányít (parlamentáris), vagy egy párt irányít a nép nevében (népköztársaság).`,
html:`<table class="t"><tr><th>Típus</th><th>Ki az erős?</th><th>Példák</th></tr>
<tr><td><b class="must">prezidenciális köztársaság</b> ③</td><td>az <b>elnök</b> (államfő és végrehajtó hatalom feje)</td><td><b>USA</b> (jegyzet); +Brazília, Mexikó</td></tr>
<tr><td><b class="must">parlamentáris köztársaság</b> ④</td><td>a <b>parlament</b>; a kormány a parlamentnek felelős</td><td><b>Magyarország</b> (jegyzet); +Olaszország, Csehország</td></tr>
<tr><td><b class="must">népköztársaság</b> ⑤</td><td>egyetlen <b>párt</b> (kommunista) a nép nevében</td><td><b>Kína, Észak-Korea</b> (jegyzet), <b>Laosz</b> (ppt)</td></tr></table>
<div class="tip"><b>2 példa megtanulandó:</b> prezidenciális → <b>USA, Brazília</b> · parlamentáris → <b>Magyarország, Olaszország</b> · népköztársaság → <b>Kína, Észak-Korea</b>.<br><small>A „+” példák nincsenek a jegyzetedben, csak azért írtam, hogy mindenből legyen 2.</small></div>`,
checks:[
 mc(`Melyik köztársaságban erős az elnök, mert egyben ő a végrehajtó hatalom feje?`,`prezidenciális köztársaság`,[`parlamentáris köztársaság`,`népköztársaság`,`alkotmányos monarchia`],`Prezidenciális: elnöki rendszer (pl. USA).`),
 mc(`Mi Magyarország kormányformája?`,`parlamentáris köztársaság`,[`prezidenciális köztársaság`,`népköztársaság`,`alkotmányos monarchia`],`A jegyzeted: ④ Magyarország – parlamentáris köztársaság.`),
 mc(`Melyik ország prezidenciális köztársaság a jegyzeted szerint?`,`USA`,[`Magyarország`,`Kína`,`Svédország`],`③ USA.`),
 st(`Sorold a megfelelő köztársasági típusba!`,[`prezidenciális`,`parlamentáris`,`népköztársaság`],[[`USA`,0],[`Brazília`,0],[`Magyarország`,1],[`Olaszország`,1],[`Kína`,2],[`Észak-Korea`,2]],`Prezidenciális: USA, Brazília. Parlamentáris: Magyarország, Olaszország. Népköztársaság: Kína, Észak-Korea.`),
 fl(`Írj két népköztársaságot vesszővel elválasztva!`,FORM_BY.nep.ex,`Kína, Észak-Korea, Laosz.`,{n:2,ph:`pl. ország1, ország2`}),
 mc(`Mit jelent a népköztársaság?`,`egypártrendszerű köztársaság, ahol a párt irányít a nép nevében`,[`az uralkodó hatalma öröklődik`,`a parlament választja a királyt`,`az elnök nem irányít`],`Kína, Észak-Korea, Laosz.`)
]},

{id:'l2s5', title:`Szövetségi köztársaság (+1)`, src:`jegyzet 10. old. · ppt 7. dia`,
simple:`A szövetségi köztársaság tagállamokból áll, amelyeknek saját jogköre van. Ez nem külön államforma, hanem egy plusz tulajdonság (+1).`,
html:`<ul class="pts">
<li><b class="must">Szövetségi köztársaság (föderáció)</b>: az ország <b>önálló jogkörű tagállamokból / tartományokból</b> áll.</li>
<li>Jegyzet: <b>+1 szövetségi köztársaság → USA</b>. Vagyis az USA <b>prezidenciális</b> <i>és</i> <b>szövetségi</b> köztársaság.</li>
<li>Példák a ppt-ből: <b>USA, Ausztria, Németország, Svájc, Tanzánia, Venezuela</b> (a ppt „Au.”, „No.” rövidítését így oldottam fel).</li>
</ul>
<div class="tip"><b>2 példa megtanulandó:</b> <b>USA, Ausztria</b> (Svájc, Németország is).</div>`,
checks:[
 mc(`Mit jelent a szövetségi köztársaság?`,`az ország önálló jogkörű tagállamokból áll`,[`az elnök a végrehajtó hatalom feje`,`egy párt irányít`,`az uralkodó hatalma korlátlan`],`Szövetségi = tagállamokból álló ország.`),
 mu(`Melyek szövetségi köztársaságok? (jelöld mindet)`,[`USA`,`Ausztria`,`Svájc`],[`Egyesült Királyság`,`Magyarország`,`Dánia`],`USA, Ausztria, Svájc (és Németország, Tanzánia, Venezuela).`),
 tf(`Az USA egyszerre prezidenciális és szövetségi köztársaság.`,true,`③ USA és +1 szövetségi köztársaság → USA.`),
 fl(`Írj két szövetségi köztársaságot vesszővel elválasztva!`,FORM_BY.szov.ex,`USA, Ausztria, Németország, Svájc, Tanzánia, Venezuela.`,{n:2,ph:`pl. ország1, ország2`})
]},

{id:'l2s6', title:`A három hatalmi ág: hol mi van?`, src:`jegyzet 5. old. · ppt 8. dia`,
simple:`Mindhárom hatalmi ágnak megvan a saját intézménye: törvényhozó = parlament, végrehajtó = kormány, bírói = bíróságok.`,
html:`<p>Válts a két ország között, és nézd meg mindkettőt (Magyarország és Nagy-Britannia a 17–18. században).</p>`,
widget:'powers',
checks:[
 mt(`Párosítsd a hatalmi ágat az intézménnyel Magyarországon!`,[[`törvényhozó`,`parlament`],[`végrehajtó`,`kormány`],[`bírói`,`legfelsőbb bíróság`]],`Jegyzet 5. oldal: parlament · kormány · legfelsőbb bíróság.`),
 mc(`Ki a végrehajtó hatalom feje az USA-ban (jegyzet)?`,`az elnök`,[`a király`,`a parlament`,`a miniszterelnök`],`A jegyzetben: kormány (USA-ban Trump), vagyis az elnök.`),
 mc(`Melyik hatalmi ágat gyakorolja a parlament?`,`törvényhozó`,[`végrehajtó`,`bírói`,`vallási`],`Parlament = törvényhozó hatalom.`)
]},

{id:'l2s7', title:`Példatár: 2-2-2-2 mindenre`, src:`jegyzet 10. old. · ppt 7. dia`,
simple:`Itt van egy helyen minden példa. Először próbáld felidézni, aztán fedd fel.`,
html:`<p>Gondold végig, mi lehet a takart mezőben, aztán kattints. A dolgozaton legalább két példa kell mindenhez!</p>`,
reveal:{head:[`Típus`,`1. példa`,`2. példa`,`további`],rows:[
 [`① alkotmányos monarchia`,`Egyesült Királyság`,`Spanyolország`,`Svédország, Dánia, Luxemburg, Marokkó, Belgium, Hollandia, Liechtenstein, Monaco`],
 [`② abszolút monarchia`,`Katar`,`Szaúd-Arábia`,`Vatikán, Egyesült Arab Emírségek, Bhután`],
 [`③ prezidenciális köztársaság`,`USA`,`Brazília (+)`,`Mexikó (+), Argentína (+)`],
 [`④ parlamentáris köztársaság`,`Magyarország`,`Olaszország (+)`,`Csehország (+), Németország (+)`],
 [`⑤ népköztársaság`,`Kína`,`Észak-Korea`,`Laosz`],
 [`+1 szövetségi köztársaság`,`USA`,`Ausztria`,`Németország, Svájc, Tanzánia, Venezuela`]
]},
after:`<div class="note"><b>Jelmagyarázat:</b> a „(+)” példák nincsenek a jegyzetedben vagy a ppt-ben; azért írtam ki, hogy a prezidenciális és parlamentáris típushoz is legyen két példa.</div>`,
checks:[
 st(`Sorold be az országokat az öt fő típusba!`,[`alkotmányos monarchia`,`abszolút monarchia`,`prezidenciális köztársaság`,`parlamentáris köztársaság`,`népköztársaság`],[[`Dánia`,0],[`Marokkó`,0],[`Katar`,1],[`Szaúd-Arábia`,1],[`USA`,2],[`Brazília`,2],[`Magyarország`,3],[`Olaszország`,3],[`Kína`,4],[`Észak-Korea`,4]],`Dánia, Marokkó: alkotmányos; Katar, Szaúd-Arábia: abszolút; USA, Brazília: prezidenciális; Magyarország, Olaszország: parlamentáris; Kína, Észak-Korea: népköztársaság.`),
 fl(`Írj két prezidenciális köztársaságot vesszővel elválasztva!`,FORM_BY.prez.ex,`USA, Brazília, Mexikó, Argentína.`,{n:2,ph:`pl. ország1, ország2`}),
 fl(`Írj két parlamentáris köztársaságot vesszővel elválasztva!`,FORM_BY.parl.ex,`Magyarország, Olaszország, Csehország, Németország.`,{n:2,ph:`pl. ország1, ország2`})
],
extra:[
 mc(`Melyik NEM monarchia?`,`Magyarország`,[`Dánia`,`Katar`,`Spanyolország`],`Magyarország parlamentáris köztársaság.`),
 mc(`Melyik NEM köztársaság?`,`Svédország`,[`USA`,`Kína`,`Magyarország`],`Svédország alkotmányos monarchia.`),
 mc(`Melyik típus fajtája az alkotmányos monarchia?`,`monarchia`,[`köztársaság`,`népköztársaság`,`szövetségi köztársaság`],`Monarchia.`),
 mc(`A parlamentáris köztársaság kormánya kinek felelős?`,`a parlamentnek`,[`az uralkodónak`,`az egyháznak`,`a népgyűlésnek`],`A parlamentnek.`),
 mc(`Melyik ország népköztársaság?`,`Észak-Korea`,[`Svájc`,`Dánia`,`Brazília`],`Kína, Észak-Korea, Laosz.`),
 tf(`Az államforma jelzője a kormányformára utal.`,true,`Pl. alkotmányos, prezidenciális.`),
 mc(`Mit jelent a szövetségi köztársaság „+1”-e a jegyzetedben?`,`az USA szövetségi köztársaság is`,[`az USA monarchia`,`a Vatikán köztársaság`,`Kína szövetségi`],`+1 szövetségi köztársaság → USA.`)
]}

]});
