/* ===== 4. PÁLYA: AZ USA LÉTREJÖTTE ===== */
LESSONS.push({
id:'usa', no:4, title:`Az USA létrejötte`, sub:`13 gyarmat → függetlenség → alkotmány`, color:`#e8483f`, color2:`#2563c9`,
intro:`A dolgozat harmadik témája. A tanári anyagból a bostoni teadélutánig tartó rész, plusz a jegyzeted összes évszáma és megjegyzése.`,
steps:[

{id:'l4s1', title:`Előzmények: hogyan jött létre a 13 gyarmat?`, src:`jegyzet 11–12. old. · ppt 2/2. dia`,
simple:`Kolumbusz után Észak-Amerikába franciák, hollandok és angolok is érkeztek. Az angolok telepei nőttek 13 gyarmattá.`,
html:`<ul class="pts">
<li><b class="must">1492</b> – Amerika felfedezése (Kolumbusz).</li>
<li>Észak-Amerikába érkeznek: <b>franciák</b>, <b>hollandok</b> (<b>Nieuw Amsterdam → New York</b>) és <b>angolok</b>.</li>
<li>Angolok: <b class="must">1584, Virginia</b> – az első angol gyarmatosítási kísérlet helye (nevét I. Erzsébet „szűz” királynőről kapta).</li>
<li><b class="must">1640–89</b> → sok menekült érkezik Angliából (lásd az angol forradalmat).</li>
<li>Az <b>Atlanti-óceán nyugati partvidékén</b> (TK 74/9., 13.) telepednek le.</li>
<li><b>Telepesek, nem katonák</b>. <b>Önigazgatás</b>, <b>önálló törvényhozás</b>.</li>
<li>Viszony az <b>indiánokkal</b>: ellenségeskedés, az indiánok <b>kiszorulnak</b>.</li>
<li><mark class="g"><b class="must">18. század végére: 13 gyarmat</b></mark>. Ez az <b>Egyesült Államok északkeleti része</b>.</li>
</ul>
<div class="note"><b>Magyarázat:</b> <b>telepes</b> = aki új vidéken letelepedni és megélni érkezik, nem hadjáratra jön. <b>Gyarmat</b> = egy másik állam (itt Anglia) uralma alatt álló, függő terület.</div>`,
checks:[
 od(`Kattints az évszámokra időrendben!`,[`1492 – Amerika felfedezése`,`1584 – Virginia`,`1640–89 – menekültek Angliából`,`18. sz. vége – 13 gyarmat`],`1492 → 1584 → 1640–89 → 18. sz. vége.`),
 fl(`Melyik évhez kötődik Virginia, az első angol gyarmatosítási kísérlet? (jegyzet szerint)`,`1584`,`1584, Virginia.`),
 mc(`Melyik hollandok telepe lett később New York?`,`Nieuw Amsterdam`,[`Virginia`,`Boston`,`Philadelphia`],`Nieuw Amsterdam → New York.`),
 mc(`Hány gyarmata volt Angliának a 18. század végére Észak-Amerikában?`,`13`,[`7`,`10`,`50`],`13 gyarmat.`),
 mc(`Kik voltak az angol gyarmatosítók?`,`telepesek, nem katonák`,[`katonák és a pápa küldöttei`,`kolostori szerzetesek`,`indiai kereskedők`],`Telepesek (nem katonák), önigazgatással és önálló törvényhozással.`),
 tf(`Az indiánok jól megfértek a telepesekkel, ezért nem szorultak ki.`,false,`Ellentét, az indiánok kiszorulnak.`)
]},

{id:'l4s2', title:`Északiak és déliek`, src:`jegyzet 12. old. · ppt 2/2. dia`,
simple:`Északon farmerek és hajósok éltek, délen rabszolgákkal dolgozó ültetvényesek.`,
html:`<p>Kattints a takart mezőkre, és fedd fel az északi és déli gyarmatok különbségét!</p>`,
reveal:{head:[`Szempont`,`Északiak`,`Déliek`],rows:[
 [`Gazdálkodás`,`<b>farmergazdálkodás</b> (földműves és mesterember egy személyben)`,`<b>ültetvényes gazdálkodás</b>, <b>rabszolgatartás</b>`],
 [`Mit termelnek?`,`ipar: <b>hajóépítés, textil</b>`,`<b>monokultúrák</b>: <b>rizs, gyapot, dohány, indigó</b>`],
 [`Kereskedelem`,`<b>tengeri kereskedelem</b> (rum, rabszolga); hajóik vannak, a déliek felé is értékesítenek`,`a termékeket <b>Európába</b> szállítják`]
]},
after:`<div class="note"><b>Magyarázat:</b> <b>monokultúra</b> = egyetlen (vagy néhány) terményt termesztenek nagy területen, eladásra. <b>Ültetvény</b> = nagy birtok, rabszolgák dolgoznak rajta. <b>Indigó</b> = kék színezőanyag (textilfesték) növénye.</div>`,
checks:[
 st(`Északi vagy déli jellemző?`,[`Északiak`,`Déliek`],[[`farmergazdálkodás`,0],[`ültetvényes gazdálkodás`,1],[`hajóépítés`,0],[`gyapot`,1],[`rizs`,1],[`dohány`,1],[`textilipar`,0],[`tengeri kereskedelem`,0],[`rabszolgatartás`,1],[`indigó`,1]],`Északon: farmergazdálkodás, hajóépítés, textil, tengeri kereskedelem. Délen: ültetvény, rabszolgák, rizs, gyapot, dohány, indigó.`),
 mc(`Mi a monokultúra?`,`egyetlen vagy kevés terményt termesztenek nagy területen`,[`sokféle növényt kis kertben`,`állattenyésztés`,`kézműves műhely`],`Monokultúra = egy fő termény.`),
 mc(`Mit jelent a farmergazdálkodás?`,`a gazda földműves és mesterember egy személyben`,[`rabszolgák dolgoznak a földeken`,`az állam irányítja a termelést`,`csak halászat folyik`],`Farmer = földműves + mesterember egy személyben.`),
 mu(`Mit termeltek a déli ültetvényeken? (jelöld mindet)`,[`rizs`,`gyapot`,`dohány`,`indigó`],[`tea`,`kávé`,`olíva`],`Rizs, gyapot, dohány, indigó.`),
 mc(`Mivel kereskedtek az északiak a tengeren (ppt)?`,`rummal és rabszolgával`,[`gyapjúval és sóval`,`aranyat és ezüsttel`,`teával és fűszerrel`],`Tengeri kereskedelem – rum, rabszolga.`)
]},

{id:'l4s3', title:`A gyarmatok és Anglia viszonya: az „üdvös elhanyagolás” vége`, src:`jegyzet 12. old. · ppt 2/3. dia`,
simple:`Eleinte London alig törődött a gyarmatokkal. A Kanadáért vívott háború után viszont szigorúbb lett, mert pénzre volt szüksége.`,
html:`<ul class="pts">
<li>A gyarmat <b>nyersanyagforrás</b> Anglia számára.</li>
<li><b>Kezdetben</b> a gyarmatok csak <b>lazán függenek</b> Angliától. London: <mark class="o"><b class="must">„üdvös elhanyagolás”</b></mark> (alig törődik velük, ez nekik jó).</li>
<li>Fordulat: <b>Nagy-Britannia harca Kanadáért</b> → <b>szigorúbb gyarmatpolitika</b>. Miért?
 <ul><li><b>nincs pénz</b> (a háború sokba került)</li>
 <li><b>ne erősödjenek meg túlságosan</b>, ne legyenek Nagy-Britannia riválisai</li>
 <li><b>új adók</b> → feszültség</li></ul></li>
</ul>`,
checks:[
 mc(`Mit jelent az „üdvös elhanyagolás”?`,`London kezdetben alig avatkozott bele a gyarmatok ügyeibe`,[`London minden ügyet irányított`,`a gyarmatok elhanyagolták Londont`,`a telepesek éheztek`],`A gyarmatok lazán függtek Angliától.`),
 mu(`Miért lett szigorúbb a gyarmatpolitika? (jelöld mindet)`,[`nincs pénz`,`ne erősödjenek meg túlságosan`,`új adókat akartak`],[`a gyarmatok kérték`,`megszűnt a teakereskedelem`],`A háború után pénz kellett, és nem akarták, hogy a gyarmatok rivális hatalommá váljanak.`),
 mc(`Miért harcolt Nagy-Britannia a háborúban?`,`Kanadáért`,[`Indiáért`,`Virginiáért`,`Spanyolországért`],`A harc Kanadáért vezetett szigorúbb gyarmatpolitikához.`)
]},

{id:'l4s4', title:`Adók, bojkott és a bostoni teadélután (1773)`, src:`jegyzet 12–13. old. · ppt 2/3–4. dia`,
simple:`London új adókat vetett ki, a telepesek bojkottal válaszoltak, 1773-ban pedig a teaszállítmányt a tengerbe szórták.`,
html:`<ul class="pts">
<li><b>Új adók</b>: London <b>mindenre illetéket vet ki</b>, pl. a <b class="must">bélyegtörvény</b>; <b class="must">katonák kötelező beszállásolása</b> (a telepesek házaiba).</li>
<li><b class="must">Bojkott</b> (a vásárlás megtagadása tiltakozásul) – jelszó: <b>„képviselet nélkül nincs adózás”</b> (a gyarmatoknak nem volt képviselőjük a londoni parlamentben).</li>
<li>London nem enged, sőt <b class="must">1773-ban</b> a <b>tea kereskedelmére monopóliumot kap a Kelet-Indiai Társaság</b>.</li>
<li>→ <b class="must">1773: bostoni teadélután</b>: a bostoni kikötőben a felháborodott telepesek (indiánnak öltözve) a hajókról a tengerbe dobálták a teaszállítmányt.</li>
<li>Jelmondat: <i>„Olyan teát főzünk György királynak, hogy abba belefullad!”</i></li>
</ul>
<div class="note"><b>Magyarázat:</b> <b>illeték</b> = adó fajta (hivatalos iratokra, termékekre). <b>Monopólium</b> = kizárólagos jog: csak a Kelet-Indiai Társaság árulhatta a teát. <b>Beszállásolás</b> = a katonák a polgárok házában kapnak szállást.</div>`,
checks:[
 od(`Kattints időrendben a gyarmati események láncolatára!`,[`üdvös elhanyagolás`,`harc Kanadáért`,`új adók`,`bojkott`,`monopólium a teára`,`bostoni teadélután`],`Üdvös elhanyagolás → harc Kanadáért → új adók → bojkott → tea monopóliuma → teadélután.`),
 fl(`Melyik évben volt a bostoni teadélután?`,`1773`,`1773.`),
 mc(`Mit jelent a „képviselet nélkül nincs adózás”?`,`a gyarmatoknak nem volt képviselőjük a londoni parlamentben, ezért nem akartak adót fizetni`,[`a király nem fizet adót`,`a parlament adót emel`,`csak a gazdagok fizetnek adót`],`Jelszó a bojkott idején.`),
 mu(`Melyek az új adók és szabályok példái a ppt-ben? (jelöld)`,[`bélyegtörvény`,`katonák kötelező beszállásolása`],[`a tea behozatalának tilalma`,`a rabszolgák felszabadítása`],`Bélyegtörvény, beszállásolás.`),
 mc(`Kinek volt monopóliuma a tea kereskedelmére 1773-ban?`,`a Kelet-Indiai Társaságnak`,[`a hollandoknak`,`Virginia telepeseinek`,`az indiánoknak`],`Kelet-Indiai Társaság.`),
 cz(`Egészítsd ki!`,`A telepesek {{bojkot}}tal tiltakoztak, a jelszavuk: „képviselet nélkül nincs {{adózás}}”.`,`Bojkott = vásárlás megtagadása.`)
]},

{id:'l4s5', title:`Az évszámok útja 1773-tól 1787-ig`, src:`jegyzet 11. és 13. old.`,
simple:`Itt van egy helyen az USA létrejöttének minden évszáma a jegyzetedből. Először próbáld felidézni, mi történt, csak utána kattints.`,
html:`<p>Gondold végig, mi történt abban az évben, aztán fedd fel!</p>`,
reveal:{head:[`Év`,`Esemény`],rows:[
 [`1773`,`bostoni teadélután`],
 [`1774`,`philadelphiai kongresszus: a 13 gyarmat közös célokat fogalmaz meg`],
 [`1775–1783`,`függetlenségi háború a britek ellen`],
 [`1776. júl. 4.`,`Függetlenségi nyilatkozat`],
 [`1783`,`párizsi béke`],
 [`1787`,`az USA alkotmánya megszületik (Philadelphia); azóta 27 módosítás`]
]},
after:`<div class="tip"><b>Rend:</b> <b>1773</b> tea → <b>1774</b> kongresszus → <b>1775–83</b> háború (közben <b>1776</b> nyilatkozat) → <b>1783</b> béke → <b>1787</b> alkotmány.</div>`,
checks:[
 mt(`Párosítsd az évszámot az eseménnyel!`,[[`1773`,`bostoni teadélután`],[`1774`,`philadelphiai kongresszus`],[`1776. júl. 4.`,`Függetlenségi nyilatkozat`],[`1783`,`párizsi béke`],[`1787`,`az alkotmány megszületése`]],`A jegyzeted évszámai.`),
 fl(`Mettől meddig tartott a függetlenségi háború? (pl. 1000–2000)`,[`1775–1783`,`1775-1783`,`1775–83`,`1775-83`],`1775–1783.`),
 fl(`Melyik évben fogadták el az USA alkotmányát?`,`1787`,`1787, Philadelphia.`),
 fl(`Hány módosítása van az USA alkotmányának? (szám)`,`27`,`27 módosítás.`),
 mc(`Hol született meg az USA alkotmánya?`,`Philadelphiában`,[`Bostonban`,`New Yorkban`,`Washingtonban`],`Philadelphia, 1787.`),
 od(`Rakd időrendbe!`,[`1773 – bostoni teadélután`,`1774 – philadelphiai kongresszus`,`1776 – Függetlenségi nyilatkozat`,`1783 – párizsi béke`,`1787 – alkotmány`],`Ez a láncolat a jegyzetben.`)
]},

{id:'l4s6', title:`Milyen állam lett az USA?`, src:`jegyzet 10–11. old.`,
simple:`Az USA: a 13 gyarmatból Nagy-Britannia ellen kivívott függetlenségből lett prezidenciális és szövetségi köztársaság.`,
html:`<ul class="pts">
<li>A <b>13 tartomány</b> (gyarmat) a <b>britek ellen</b> harcolt függetlenségi háborút: <b>1775–83</b>.</li>
<li>A jegyzeted szerint: <b>③ USA = prezidenciális köztársaság</b>; <b>+1 szövetségi köztársaság → USA</b>.</li>
<li>A <b>végrehajtó hatalom</b> feje az <b>elnök</b> (a jegyzetben: Trump).</li>
<li>Az <b>alkotmány</b> (1787, Philadelphia) – ma <b>27 módosítással</b> él.</li>
</ul>
<div class="flow"><b>Felvilágosodás</b><i>→</i><b>Amerika (1776)</b><i>→</i><b>francia forradalom (1789)</b></div>
<div class="note">Az USA volt az első példa arra, hogy a felvilágosodás gondolatai (Montesquieu, Locke) államot hoztak létre. Ez a jegyzeted 1. oldalán sárgával kiemelt lánc első fele.</div>`,
checks:[
 mc(`Milyen államforma/kormányforma az USA a jegyzeted szerint?`,`prezidenciális és szövetségi köztársaság`,[`alkotmányos monarchia`,`népköztársaság`,`abszolút monarchia`],`③ USA és +1 szövetségi köztársaság.`),
 mc(`Ki a végrehajtó hatalom feje az USA-ban?`,`az elnök`,[`a király`,`a parlament`,`a legfelsőbb bíróság`],`Az elnök.`),
 mc(`Kik ellen harcolt a 13 gyarmat?`,`a britek ellen`,[`a franciák ellen`,`az indiánok ellen`,`a spanyolok ellen`],`Britek ellen.`)
],
extra:[
 mc(`Mi az Egyesült Államok északkeleti része (jegyzet)?`,`a 13 gyarmat`,[`Kanada`,`Mexikó`,`Florida`],`A 13 gyarmat az USA északkeleti részén volt.`),
 mc(`Melyik városban volt a kongresszus 1774-ben?`,`Philadelphia`,[`Boston`,`New York`,`Virginia`],`Philadelphiai kongresszus.`),
 mc(`Melyik gyarmat nevéhez köthető az első angol telepítés 1584-ben?`,`Virginia`,[`Boston`,`Pennsylvania`,`Georgia`],`Virginia.`),
 tf(`1773-ban a Kelet-Indiai Társaság kapott monopóliumot a tea kereskedelmére.`,true,`Ez vezetett a bostoni teadélutánhoz.`),
 mc(`Mi vezetett a szigorúbb gyarmatpolitikához?`,`a Kanadáért vívott háború`,[`Virginia alapítása`,`Rousseau könyve`,`a Bastille ostroma`],`Háború → pénzhiány → adók.`)
]}

]});
