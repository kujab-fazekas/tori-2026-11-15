/* ===== 3. PÁLYA: NAGY-BRITANNIA, AZ ALKOTMÁNYOS MONARCHIA MINTÁJA ===== */
LESSONS.push({
id:'anglia', no:3, title:`Nagy-Britannia`, sub:`Az alkotmányos monarchia hazája`, color:`#8a6bff`, color2:`#e84a9b`,
intro:`Nagy-Britannia az a példa, amit a felvilágosodás gondolkodói követendőnek tartottak: itt már alkotmányos monarchia működött.`,
steps:[

{id:'l3s1', title:`1640–1688/89: az angol forradalom`, src:`ppt 8. dia`,
simple:`Angliában a 17. században a király és a parlament évtizedekig harcolt a hatalomért. A parlament győzött: ebből lett az alkotmányos monarchia.`,
html:`<ul class="pts">
<li><b class="must">1640–1688/89</b> – az <b>angol forradalom</b> időszaka: a király és a parlament harca a hatalomért.</li>
<li>Eredménye: <b>alkotmányos monarchia</b> – az uralkodó hatalmát törvények korlátozzák, a parlament erős.</li>
<li>Ezért itt indult a felvilágosodás (Locke) és ezt tartotta jónak Montesquieu is.</li>
<li><b>Kapcsolat az USA-val:</b> <b>1640–89 → sok menekült érkezik Angliából</b> Észak-Amerikába (ppt 2. rész).</li>
</ul>
<div class="note"><b>+ Kiegészítés</b> (nincs a ppt-ben, de segít): a forradalom végén, <b>1688–89-ben</b> (dicsőséges forradalom) a parlament a <b>Jognyilatkozatot</b> (Bill of Rights) fogadta el: a király a parlament beleegyezése nélkül nem hozhat törvényt és nem vethet ki adót.</div>`,
checks:[
 fl(`Mettől meddig tartott az angol forradalom időszaka? (pl. 1000–2000)`,[`1640–1688/89`,`1640-1688/89`,`1640–1689`,`1640-1689`,`1640–1688`,`1640-1688`],`1640–1688/89.`),
 mc(`Mi lett az angol forradalom eredménye?`,`alkotmányos monarchia`,[`abszolút monarchia`,`népköztársaság`,`szövetségi köztársaság`],`A parlament győzött: alkotmányos monarchia.`),
 mc(`Mi történt 1640–89 között Észak-Amerika szempontjából?`,`sok menekült érkezett Angliából`,[`kitört a függetlenségi háború`,`megalakult az Enciklopédia`,`Kolumbusz partra szállt`],`A forradalmi korszakban sokan elmenekültek Angliából az amerikai gyarmatokra.`)
]},

{id:'l3s2', title:`Hogyan működik az alkotmányos monarchia?`, src:`ppt 8. dia (TK 73/7.)`,
simple:`Kevesen szavazhatnak, ők választják a parlamentet. A kormány a parlamentből jön és annak felel, a bíróság független.`,
html:`<p>A ppt szerint az alkotmányos monarchia <b>három ágon</b> áll. Fedd fel őket!</p>`,
reveal:{head:[`Hatalmi ág`,`Hogyan működik Angliában?`],rows:[
 [`törvényhozó`,`<b>parlament</b>; <b>cenzusos választójog</b> – a lakosság csak <b>1–2%</b>-a szavazhat`],
 [`végrehajtó`,`a <b>parlamentnek felelős kormány</b> (a parlament többségéből áll)`],
 [`bírói`,`<b>független bírói hatalom</b>`]
]},
after:`<div class="tip"><b>Fogódzó:</b> <b>1–2%</b> szavazhat · a kormány <b>a parlament többségéből</b> van · a bíróság <b>független</b>.</div>`,
checks:[
 mt(`Párosítsd a hatalmi ágat az angol működéssel!`,[[`törvényhozó`,`parlament`],[`végrehajtó`,`a parlamentnek felelős kormány`],[`bírói`,`független bírói hatalom`]],`Ahogy a ppt-ben.`),
 fl(`A lakosság hány százaléka szavazhat a cenzusos angol választójog szerint? (pl. 5–6)`,[`1–2`,`1-2`,`1–2%`,`1-2%`],`1–2%.`),
 mc(`Honnan kerül ki az angol kormány?`,`a parlament többségéből`,[`a király kinevezettjeiből`,`az egyház vezetőiből`,`a nép közvetlen szavazásából`],`A parlament többségéből, és a parlamentnek felelős.`),
 mc(`Mit jelent a „cenzusos választójog”?`,`csak bizonyos feltételeknek megfelelők szavazhatnak`,[`mindenki szavazhat`,`csak a király szavaz`,`a szavazás kötelező`],`Cenzus: korlátozás (pl. vagyon, kor, nem).`)
]},

{id:'l3s3', title:`Kétpárti rendszer: tory és whig`, src:`ppt 8. dia`,
simple:`Angliában két nagy párt váltotta egymást a kormányzásban: a konzervatív tory és a liberális whig.`,
html:`<ul class="pts"><li><b class="must">Kétpárti rendszer</b> = <b>politikai váltógazdaság</b>: két nagy párt, és a kormányzásban váltják egymást.</li></ul>
<table class="t"><tr><th></th><th><b class="must">tory</b></th><th><b class="must">whig</b></th></tr>
<tr><td>Név eredete</td><td><b>katolikus ír rabló</b></td><td><b>skót marhahajcsár</b></td></tr>
<tr><td>Vallás</td><td><b>következetes anglikán</b></td><td><b>mérsékelt anglikán</b></td></tr>
<tr><td>Kik?</td><td><b>vidéki földbirtokos</b>, hagyományok</td><td><b>városi polgár, iparos</b></td></tr>
<tr><td>Irány</td><td><b>konzervatív</b></td><td><b>liberális</b></td></tr></table>
<ul class="pts"><li><b class="must">1903</b> – <b>Munkáspárt</b> (a ppt szerint).</li></ul>
<div class="note"><b>Magyarázat:</b> <b>anglikán</b> = az angol állami protestáns egyház (az angol király a feje). <b>Konzervatív</b> = a hagyományokat őrzi. <b>Liberális</b> = a szabadságot és a változtatást hangsúlyozza.<br><b>Figyelem:</b> a ppt 1903-at írja a Munkáspárthoz; más források ettől eltérnek (1900: a mozgalom indulása, 1906: a Labour Party név). A dolgozatra a tanár évszáma számít.</div>`,
checks:[
 st(`Melyik párthoz tartozik a leírás?`,[`tory`,`whig`],[[`katolikus ír rabló (a név eredete)`,0],[`skót marhahajcsár (a név eredete)`,1],[`következetes anglikán`,0],[`mérsékelt anglikán`,1],[`vidéki földbirtokos`,0],[`városi polgár, iparos`,1],[`konzervatív`,0],[`liberális`,1]],`Tory: ír rabló, következetes anglikán, vidéki földbirtokos, konzervatív. Whig: skót marhahajcsár, mérsékelt anglikán, városi polgár/iparos, liberális.`),
 mc(`Mit jelent a politikai váltógazdaság?`,`két nagy párt váltja egymást a kormányzásban`,[`egyetlen párt uralkodik`,`a király és a parlament felváltva dönt`,`évente új alkotmányt írnak`],`Kétpárti rendszer.`),
 fl(`Melyik évben alakult a Munkáspárt a ppt szerint?`,`1903`,`1903 (a tanári anyag szerint).`),
 mc(`Melyik párt a konzervatív?`,`tory`,[`whig`,`Munkáspárt`,`jakobita`],`Tory = konzervatív, whig = liberális.`)
]},

{id:'l3s4', title:`Tengeri fölény és egyensúlypolitika`, src:`ppt 8. dia`,
simple:`Nagy-Britannia hatalma a tengeren alapult: ezért gyarmatokat szerzett. Európában azt akarta, hogy egyetlen állam se legyen túl erős.`,
html:`<ul class="pts">
<li><b class="must">Tengeri fölény</b> → <b>gyarmatosít</b> (a flotta révén birodalmat épít).</li>
<li>Európában a <b class="must">cél az egyensúly-politika fenntartása</b>.</li>
</ul>
<div class="note"><b>Magyarázat:</b> <b>egyensúlypolitika</b> = Nagy-Britannia nem engedi, hogy a kontinensen egyetlen hatalom túl erőssé váljon. Ha valaki túl erős lenne, a gyengébbek mellé áll, hogy a hatalmi erők kiegyensúlyozottak maradjanak.</div>
<div class="tip"><b>Összefüggés a következő pályával:</b> az amerikai gyarmatok ennek a gyarmatbirodalomnak a részei – itt kezdődik az USA története.</div>`,
checks:[
 mc(`Mire épült Nagy-Britannia hatalma?`,`tengeri fölényre`,[`szárazföldi hadseregre`,`a pápa támogatására`,`a rabszolgatartó hűbérurakra`],`Tengeri fölény → gyarmatosítás.`),
 mc(`Mi a célja az egyensúlypolitikának Európában?`,`hogy egyetlen hatalom se legyen túl erős`,[`hogy Nagy-Britannia legyen a legerősebb szárazföldi állam`,`hogy minden ország monarchia legyen`,`hogy Európában ne legyen háború`],`Egyensúlypolitika: egyensúly a nagyhatalmak között.`),
 cz(`Egészítsd ki!`,`Nagy-Britannia {{tengeri}} fölénye lehetővé tette a {{gyarmatosítást}}.`,`Tengeri fölény → gyarmatosít.`)
],
extra:[
 mc(`Mit mond ki a Jognyilatkozat (1689)?`,`a király nem hozhat törvényt és nem vethet ki adót a parlament nélkül`,[`a nép közvetlenül uralkodik`,`az egyház vezeti az országot`,`megszűnik a parlament`],`Kiegészítő tananyag.`),
 mc(`Melyik párt tagja a vidéki földbirtokos?`,`tory`,[`whig`,`Munkáspárt`,`egyik sem`],`Tory.`),
 tf(`Angliában a lakosság nagy része szavazhatott a 18. században.`,false,`Cenzusos választójog: 1–2%.`),
 mc(`Kitől függ az angol kormány?`,`a parlamenttől`,[`a királytól`,`az egyháztól`,`a bíróságtól`],`A parlamentnek felelős.`)
]}

]});
