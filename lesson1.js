/* ===== 1. PÁLYA: A FELVILÁGOSODÁS ===== */
LESSONS.push({
id:'felv', no:1, title:`A felvilágosodás`, sub:`Eszmék, gondolkodók, vallás, Enciklopédia`, color:`#f5b82e`, color2:`#ff7a59`,
intro:`Itt jön az egész eszmei háttér: honnan indult a felvilágosodás, mit gondoltak a nagy filozófusok, és miből lett az alkotmányos gondolkodás.`,
steps:[

{id:'l1s1', title:`A nagy kép: hol vagyunk a történelemben?`, src:`jegyzet 1. és 11. old.`,
simple:`A felvilágosodás gondolataiból előbb Amerikában, aztán Franciaországban lett valóság. Ebből nőtt ki a liberalizmus.`,
html:`<ul class="pts">
<li><mark class="y">Felvilágosodás → Amerika → francia forradalom</mark> – ez a lánc a jegyzetedben sárgával kiemelt.</li>
<li>Az eszmék: <mark class="y"><b class="must">liberalizmus</b></mark> – az egyéni szabadságot, a jogegyenlőséget és a korlátozott, alkotmányos hatalmat hirdető gondolkodás.</li>
<li><b class="must">1789</b> – francia forradalom. Innen számítjuk a <b>hosszú 19. századot</b> (általában 1914-ig). „Hosszú”, mert a történelmi korszak nem egyezik a naptári századdal.</li>
<li><b class="must">1815</b> – Waterloo: <b>Napóleon utolsó veresége</b>. (Kik – kiket? A <b>britek és a poroszok</b> győzték le Napóleont.)</li>
<li><b class="must">1848/49</b> – „<b>a népek tavasza</b>”: forradalmak sorozata Európában, a liberális és nemzeti eszmék kitörése.</li>
</ul>
<div class="note"><b>Nem töri:</b> a jegyzeted 11. oldalán van egy másik tantárgyas sor is (Belgium → cukoripar, fehérítés, 10000 m²/g fajlagos felület). Ez nem a töri dolgozat anyaga, csak azért említem, hogy ne vesszen el.</div>
<div class="note"><b>A dolgozat három témája</b> (a jegyzetedből): <b>felvilágosodás</b>, <b>kormányforma</b>, <b>USA</b>. Pontosan ez a három pálya van itt.</div>`,
checks:[
 od(`Kattints az eseményekre időrendi sorrendben!`,[`Felvilágosodás eszméi`,`Amerikai függetlenség (1776)`,`Francia forradalom (1789)`,`Waterloo (1815)`,`A népek tavasza (1848/49)`],`Az eszmék előzik meg az amerikai és a francia változásokat; Waterloo Napóleon bukása, 1848/49 már a következő hullám.`),
 fl(`Melyik évvel kezdődik a „hosszú 19. század”?`,`1789`,`A francia forradalom éve (1789) a kezdőpont.`),
 mc(`Kik győzték le Napóleont Waterloonál (1815)?`,`A britek és a poroszok`,[`Az oroszok és az osztrákok`,`A spanyolok és a hollandok`,`A svédek és a lengyelek`],`Waterloo: brit és porosz csapatok – Napóleon utolsó veresége.`),
 mc(`Melyik eszme nőtt ki a felvilágosodásból és a forradalmakból?`,`liberalizmus`,[`abszolutizmus`,`feudalizmus`,`rabszolgatartás`],`A jegyzet szerint a felvilágosodás → Amerika → francia forradalom láncolat eszméje a liberalizmus.`)
]},

{id:'l1s2', title:`Hol indult? Anglia, Locke és a természeti jogok`, src:`jegyzet 1–2. old. · ppt 1/2. dia`,
simple:`A felvilágosodás Angliában indult a 17. században, onnan jutott át Franciaországba. John Locke szerint az embernek születésétől vannak jogai, és az állam a társadalmi szerződésből születik.`,
html:`<ul class="pts">
<li><mark class="p"><b>Felvilágosodás</b></mark> – elindulása: <b>17. század, Anglia</b> → innen Franciaországba.</li>
<li>A korszakot „<b>sötét középkornak</b>” nevezték el – a felvilágosodás hívei így gondoltak a korábbi időkre (hit és tekintély uralkodott, nem az ész). A saját századuk (a 18.) a „<b>fény százada</b>”.</li>
<li><mark class="b"><b class="must">John Locke</b></mark> (<b>1700 körül</b>), angol filozófus. A jegyzetedben: „bill of rights” = jogok.</li>
<li><b>Természeti jogok</b> (minden embert születésétől megilletnek): <b class="must">élethez, szabadsághoz, tulajdonhoz</b>.</li>
<li>Az egyén <b>lemond</b> a jogai egy részéről → <b>társadalmi szerződés</b> → az <b>állam biztosítja a többit</b>.</li>
<li>Az <b>állam</b> tehát a társadalmi szerződés nyomán születik meg. Az <b>államhatalom</b> a szabályok betartására van.</li>
</ul>
<div class="tip"><b>Fogódzó:</b> Locke hármasa = <b>É-Sz-T</b> (Élet, Szabadság, Tulajdon).</div>`,
checks:[
 mu(`Mik Locke természeti jogai? (jelöld mindet)`,[`élethez`,`szabadsághoz`,`tulajdonhoz`],[`hatalomhoz`,`egyházhoz`,`rangjoghoz`],`Élet, szabadság, tulajdon.`),
 cz(`Egészítsd ki!`,`Az egyén lemond a jogai egy részéről, ezt hívjuk {{társadalmi szerződés}}nek. Az állam így jön létre, és a többi jogot {{biztosítja}}.`,`Locke: társadalmi szerződés – az állam védi a megmaradt jogokat.`),
 fl(`Ki az angol filozófus, aki a természeti jogokat (élet, szabadság, tulajdon) hangsúlyozta? (csak a vezetéknév)`,`Locke`,`John Locke (1700 körül).`,{spell:true}),
 tf(`A felvilágosodás Franciaországban indult, onnan jutott el Angliába.`,false,`Fordítva: 17. századi Anglia → Franciaország.`)
]},

{id:'l1s3', title:`Mi a felvilágosodás? „A fény százada”`, src:`jegyzet 2. old. · ppt 2. dia`,
simple:`A felvilágosodás szerint nem a régi tekintélyek mondják meg az igazat, hanem az emberi ész és a tapasztalat. Ezért a társadalmat is meg lehet változtatni és jobbá lehet tenni.`,
html:`<ul class="pts">
<li><b>18. század = „a fény százada”</b>. Mi a felvilágosodás? Szellemi mozgalom, amely az <b>észre és a tapasztalatra</b> épít.</li>
<li>Szemben áll az <b>ó- és középkori tekintélyekkel</b> (<b>nincs vallási alap</b>).</li>
<li><b>Kritikus szem</b>, <b>tapasztalati tények</b> (a természettudomány törvényei, <b>Newton</b>) → <b>racionalizmus</b> → a <b>társadalom és az állam alakítható, jobbá tehető</b>.</li>
<li>Társadalmi szerződés → <b class="must">a hatalom nem Istentől van</b>.</li>
<li><b>Nem egységes eszmerendszer</b>: a gondolkodók sok mindenben vitatkoztak egymással (később látod: Montesquieu és Rousseau).</li>
<li>Fontos érték a <b class="must">tolerancia</b> = <b>egymás tisztelete</b>, mások hitének és véleményének elfogadása.</li>
</ul>
<div class="note"><b>Newton</b> (Isaac Newton) angol fizikus: bebizonyította, hogy a természetet törvények irányítják, és ezek kísérlettel megismerhetők. Ezt a gondolkodásmódot vitték át a társadalomra is.</div>`,
checks:[
 mc(`Minek hívják a 18. századot a felvilágosodás szerint?`,`a fény százada`,[`a sötétség százada`,`a hit százada`,`a vasút százada`],`A „fény” az ész és a tudás fénye.`),
 mc(`Mit jelent a tolerancia?`,`egymás tiszteletet, mások hitének és véleményének elfogadását`,[`a király parancsainak követését`,`az egyház feltétlen támogatását`,`a tulajdon korlátozását`],`Tolerancia = egymás tisztelete.`),
 tf(`A felvilágosodás szerint a társadalom és az állam alakítható, jobbá tehető.`,true,`Ez a felvilágosodás egyik alapgondolata.`),
 tf(`A felvilágosodás egységes, mindenben egyetértő eszmerendszer volt.`,false,`Nem egységes: a gondolkodók vitatkoztak (pl. Montesquieu és Rousseau).`)
]},

{id:'l1s4', title:`Középkor kontra felvilágosodás`, src:`jegyzet 2. old.`,
simple:`A középkorban az uralkodót Isten küldi, ezért nem lehet megkérdőjelezni. A felvilágosodás szerint a népé a döntés joga, és az állami rend alakítható.`,
html:`<p>Kattints a takart mezőkre, és fedd fel mindet. Ezt a táblázatot a jegyzetedben kiemelted (kék).</p>`,
reveal:{head:[`Szempont`,`Középkor`,`Felvilágosodás`],rows:[
 [`Honnan a hatalom?`,`Isten küldi az uralkodót`,`a nép választja`],
 [`Lehet vitatni?`,`megkérdőjelezhetetlen`,`az állami rend befolyásolható`],
 [`Milyen az ember?`,`alapvetően jó (jegyzet)`,`<i>homo homini lupus</i> – az ember embernek farkasa, alapból rossz (jegyzet)`]
]},
after:`<div class="note"><b>Magyarázat:</b> a <i>homo homini lupus</i> (latin) azt jelenti: „az ember embernek farkasa”. Thomas Hobbes mondása; szerinte erős államra azért van szükség, mert az emberek ellenségeskednének egymással. Rousseau ezzel szemben úgy gondolta, hogy az ember természeténél fogva jó (nemes vadember) – ez is mutatja, hogy a felvilágosodás <b>nem egységes</b>.</div>`,
checks:[
 mt(`Párosítsd a korszak szempontját a jegyzeted szerinti válasszal!`,[[`Középkor: honnan a hatalom?`,`Isten küldi az uralkodót`],[`Felvilágosodás: honnan a hatalom?`,`a nép választja`],[`Középkor: milyen az ember?`,`alapvetően jó`],[`Felvilágosodás: milyen az ember?`,`homo homini lupus`]],`Középkor: Isten küldi az uralkodót, az ember alapvetően jó. Felvilágosodás: a nép választja, homo homini lupus.`),
 mc(`Mit jelent a „homo homini lupus”?`,`az ember embernek farkasa`,[`minden ember egyenlő`,`az ember szabadnak született`,`a nép a hatalom forrása`],`Latin mondás: az ember alapból rossz, ellenséges.`),
 mc(`A jegyzet szerint melyik korszak szerint rossz alapból az ember (homo homini lupus)?`,`Felvilágosodás`,[`Középkor`,`Ókor`,`Őskor`],`Jegyzet: középkor – az ember alapvetően jó; felvilágosodás – homo homini lupus.`)
]},

{id:'l1s5', title:`Racionalizmus és empirizmus`, src:`jegyzet 2. és 5. old.`,
simple:`Két módja van a tudásszerzésnek: az ésszel gondolkodás (racionalizmus) és a kipróbálás, tapasztalás (empirizmus).`,
html:`<table class="t"><tr><th>Irányzat</th><th>Mire épít?</th><th>Tudás =</th></tr>
<tr><td><b class="must">racionalizmus</b></td><td>józan ész, logika, <b>dedukció</b> (általános elvekből logikával jutunk a következtetésre)</td><td><b>józan ész</b></td></tr>
<tr><td><b class="must">empirizmus</b></td><td>kísérlet, tapasztalat</td><td><b>tapasztalat</b></td></tr></table>
<ul class="pts">
<li>Racionális érv a jegyzetedből: <i>nem jó, ha a király lop</i> – ezt nem kell kipróbálni, ésszel belátható.</li>
<li>A két irányzat a jegyzet szerint egymással szemben áll (↕), de a felvilágosodásban mindkettő benne van.</li>
<li><b>Általános elvek</b> (jegyzet 5. old., zöld): társadalmi szerződés · elszakad a tekintélyektől · racionalizmus ↔ empirizmus · jogok hangsúlyozása · vallás elutasítása · tolerancia.</li>
</ul>
<div class="tip"><b>Fogódzó:</b> <b>R</b>acionalizmus = <b>R</b>ess (ész, gondolkodás). <b>E</b>mpirizmus = <b>E</b>xperiment (kísérlet).</div>`,
checks:[
 mt(`Párosítsd!`,[[`racionalizmus`,`a tudás forrása a józan ész, a logika`],[`empirizmus`,`a tudás forrása a kísérlet, a tapasztalat`]],`Racionalizmus = ész, empirizmus = tapasztalat.`),
 fl(`Hogyan nevezik azt a gondolkodást, amely a kísérletre és a tapasztalatra épít? (egy szó)`,`empirizmus`,`Empirizmus. Figyelj a helyesírásra: e-m-p-i-r-i-z-m-u-s.`,{spell:true}),
 fl(`Mi a neve annak a gondolkodásnak, amelynél a tudás forrása a józan ész és a logika? (egy szó)`,`racionalizmus`,`Racionalizmus.`,{spell:true}),
 mc(`Mi a dedukció (deduktivitás)?`,`általános elvekből logikával jutni a következtetésre`,[`kísérletezés és mérés`,`a királyi parancs követése`,`egy könyv lemásolása`],`Dedukció = általánosból az egyedire következtetés. A racionalizmushoz tartozik.`)
]},

{id:'l1s6', title:`Francia nyelv, szalon, kávéház és a terjedés`, src:`jegyzet 2–3. old. · ppt 3–4. dia`,
simple:`A 18. században Párizs lett a felvilágosodás központja, a francia a művelt emberek közös nyelve, innen terjedtek tovább az eszmék.`,
html:`<ul class="pts">
<li>18. század: <b>Franciaország</b> → egész Európában <b>divat</b> lesz.</li>
<li><b class="must">Francia</b> = a művelt rétegek <b>közös nyelve</b> (irodalmi <b>szalonok</b> és <b>kávéházak</b>: itt vitatkoztak, itt terjedtek az új eszmék).</li>
<li>A térkép (ppt és jegyzet): a felvilágosodás útja <b>London ↔ Párizs</b>, onnan tovább <b>Berlin, Bécs, Pétervár</b> (kelet felé), <b>Spanyolország → Latin-Amerika</b>, és <b>Észak-Amerika</b> felé.</li>
<li>A térképen külön jelölik a <b>felvilágosult abszolutizmus</b> területét (Habsburg Birodalom, Porosz Királyság, Orosz Birodalom, Spanyolország): az uralkodó átvesz felvilágosult reformokat, de a hatalma korlátlan marad.</li>
</ul>
<p>Fedezd fel az útvonalat: kattints a városokra és területekre!</p>`,
widget:'spread',
checks:[
 mc(`Melyik nyelv volt a 18. században a művelt rétegek közös nyelve?`,`francia`,[`latin`,`angol`,`német`],`Francia – a szalonok és kávéházak nyelve.`),
 mc(`Melyik város a felvilágosodás terjedésének középpontja a térképen?`,`Párizs`,[`Bécs`,`Pétervár`,`Madrid`],`Párizsból indulnak a legfontosabb nyilak.`),
 mc(`Mi a szalon?`,`művelt emberek társasági összejövetele, ahol vitatkoztak és terjedtek az eszmék`,[`királyi kincstár`,`katonai tábor`,`kolostori iskola`],`Szalonok és kávéházak: az eszmék terjedésének helyei.`)
]},

{id:'l1s7', title:`Charles Montesquieu: a hatalom ellenőrzése`, src:`jegyzet 3–5. old. · ppt 4. dia`,
simple:`Montesquieu szerint a hatalmat meg kell osztani három ág között (törvényhozó, végrehajtó, bírói), mert különben zsarnokság lesz. Ennek leghíresebb műve A törvények szelleme.`,
html:`<ul class="pts">
<li><mark class="g"><b class="must">Charles Montesquieu</b></mark> [monteszkjő] – <b>1750 körül</b>, francia <b>író és filozófus</b>.</li>
<li><b class="must">Fő (leghíresebb) műve: <i>A törvények szelleméről</i></b> (1748). „Leghíresebb művét tudni kell!” – írtad a jegyzetben.</li>
<li><b>A hatalmat ellenőrizni kell:</b> a nép <b>választott képviselők útján</b> (ez nem személyes, nem közvetlen – a közvetlenséget Rousseau akarta).</li>
<li><b class="must">Cenzus</b> = a választójog <b>korlátozása</b> bizonyos szempontok szerint. Híres cenzusok: <mark class="p">életkor</mark>, <mark class="p">nem</mark>, társadalmi helyzet, <mark class="p">vagyoni</mark>, <mark class="p">műveltségi</mark>, állampolgárság, időszakos gyámság alatt állás.</li>
<li><mark class="p"><b class="must">Zsarnokság elkerülése</b></mark> → <mark class="p"><b class="must">hatalmi ágak megosztása</b></mark>: <b>törvényhozói</b>, <b>végrehajtói</b>, <b>bírói</b>.</li>
<li><b>Földrajzi determinizmus</b>: a földrajzi környezet (éghajlat, természeti adottságok) meghatározza egy nép jellegét és azt, milyen törvények illenek hozzá.</li>
<li><b>Kozmopolitizmus</b>: világpolgár-szemlélet – az ember a világ polgára, nem köti szorosan egy országhoz.</li>
<li>Jó példa szerinte: az <b>angol alkotmányos monarchia</b>.</li>
<li>Hatása: <b>1776. júl. 4.</b> (amerikai Függetlenségi nyilatkozat) és <b>1789. aug. 26.</b> (Emberi és polgári jogok nyilatkozata) mögött is az ő gondolatai állnak.</li>
</ul>
<div class="quote"><b>A tankönyvi részlet lényege</b> (saját szavakkal): ha a törvényhozó és a végrehajtó hatalom ugyanannál van, ott nincs szabadság – mert zsarnoki törvényeket hozhatnak és zsarnoki módon hajthatják végre. Ha a bírói hatalom a törvényhozóhoz kapcsolódik, a bíró <i>önkényes</i> lenne az emberek élete és vagyona felett (mert egyben törvényhozó is). Ha a végrehajtóhoz kapcsolódik, a bíró <i>elnyomó</i> lenne. Ezért kell szétválasztani mindhármat. (Montesquieu: <i>A törvények szelleméről</i>, 1748)</div>
<div class="note"><b>Magyarországon ma</b> (jegyzet 5. old., sárgával): törvényhozó → <mark class="y">parlament</mark> · végrehajtó → <mark class="y">kormány</mark> (az USA-ban az elnök, jegyzet: Trump) · bírói → <mark class="y">legfelsőbb bíróság</mark> (nálunk a Kúria).</div>`,
checks:[
 mc(`Mi Montesquieu leghíresebb műve?`,`A törvények szelleme`,[`A társadalmi szerződés`,`Emil vagy a nevelésről`,`Candide`],`A törvények szelleméről (1748).`),
 mu(`Melyek a hatalmi ágak? (jelöld mindet)`,[`törvényhozó`,`végrehajtó`,`bírói`],[`egyházi`,`katonai`,`pénzügyi`],`Törvényhozó, végrehajtó, bírói.`),
 mc(`Mi a cenzus?`,`a választójog korlátozása bizonyos szempontok szerint`,[`a nép közvetlen szavazása`,`az uralkodó örökléséről szóló törvény`,`az egyház adója`],`Cenzus: pl. kor, nem, vagyon, műveltség.`),
 mc(`Mi a hatalmi ágak megosztásának célja?`,`a zsarnokság elkerülése`,[`a nép közvetlen uralma`,`az egyház erősítése`,`a gyarmatok megtartása`],`Ha nincs egy kézben a hatalom, nincs zsarnokság.`),
 mc(`Melyik államot tartotta jó példának Montesquieu?`,`az angol alkotmányos monarchiát`,[`az abszolút francia monarchiát`,`a közvetlen demokráciát`,`a Vatikánt`],`Az angol alkotmányos monarchiát (ppt).`),
 mt(`Párosítsd a fogalmat a jelentésével!`,[[`földrajzi determinizmus`,`a földrajzi környezet határozza meg a népek jellegét, a törvényeket`],[`kozmopolitizmus`,`világpolgár-szemlélet`],[`cenzus`,`a választójog korlátozása`]],`Ez mind Montesquieu jegyzetedbeli kulcsfogalma.`),
 mc(`Hogyan ellenőrzi a nép a hatalmat Montesquieu szerint?`,`választott képviselők útján`,[`személyesen, népgyűléseken`,`az uralkodó kinevezésével`,`az egyházon keresztül`],`A személyes (közvetlen) ellenőrzés Rousseau gondolata.`)
]},

{id:'l1s8', title:`Jean-Jacques Rousseau: a nép a hatalom forrása`, src:`jegyzet 6–7. old. · ppt 5. dia`,
simple:`Rousseau szerint a hatalom forrása a nép, és a népnek lehetőleg közvetlenül kell uralkodnia. Ezért nála nincs képviselet és nincs hatalommegosztás.`,
html:`<ul class="pts">
<li><mark class="o"><b class="must">Jean-Jacques Rousseau</b></mark> [russzó] – <b>1750 körül</b>, francia filozófus, író és zeneszerző.</li>
<li><b>Vissza a természethez!</b> <mark class="o"><b class="must">Az első bűn a tulajdon</b></mark> (ezért a magántulajdont korlátozni kell) → <b>nemes vadember</b>: az ember természeténél fogva jó, a civilizáció rontja el.</li>
<li><mark class="o"><b class="must">Népfelség (népszuverenitás) elve</b></mark>: <b>minden hatalom forrása a nép</b>.</li>
<li><b>Közvetlen népuralom</b> = <b>közvetlen demokrácia</b> → ehhez <b>kicsi állam</b> kell, népgyűlésekkel (kis terület).</li>
<li>Ezért: <b>nincs képviselet</b> és <b>nincsenek hatalmi ágak</b> (nincs mit ellenőrizni, mert a nép maga dönt).</li>
<li><b>Többségi akarat = közjó</b>. Társadalmi szerződés: az <b>egyén a közösséggel</b> köt szerződést.</li>
<li><b class="must">Nevelés fontossága</b> (<i>Emil</i>). A jegyzetedben: <b>5 gyereke volt</b> (érdekesség: mind az ötöt nevelőintézetbe adta, miközben a nevelésről írt).</li>
</ul>
<div class="quote"><mark class="o">„Aki nem hajlandó követni az általános akaratot, azt […] kényszeríteni kell, hogy szabad legyen.”</mark><br>„Az ember szabadnak született, de mindenütt láncokat visel.”</div>
<h4>Rousseau művei (a ppt-ben pirossal – tudni kell)</h4>
<ul class="pts"><li><i>Értekezés az emberek közti egyenlőtlenség eredetéről és alapjairól</i></li>
<li><i>Értekezés a társadalmi szerződésről</i></li>
<li><i>Levél d'Alembert-hez a színházakról</i></li>
<li><i>Új Héloïse</i></li>
<li><i>Emil vagy a nevelésről</i></li>
<li><i>Vallomások</i></li>
<li><i>Álmodozások</i></li></ul>
<p>Most vesd össze őt Montesquieu-vel. Kattints a takart mezőkre!</p>`,
reveal:{head:[`Szempont`,`Montesquieu`,`Rousseau`],rows:[
 [`A nép szerepe`,`választott képviselők útján ellenőrzi a hatalmat`,`maga uralkodik, közvetlenül`],
 [`Hatalmi ágak`,`szétválaszatandók (törvényhozó, végrehajtó, bírói)`,`nincsenek`],
 [`Választójog`,`cenzusos`,`(közvetlen népgyűlés, nincs képviselet)`],
 [`Ideális állam`,`angol alkotmányos monarchia`,`kis terület, közvetlen demokrácia`]
]},
checks:[
 mc(`Mit jelent a népfelség (népszuverenitás) elve?`,`minden hatalom forrása a nép`,[`a király hatalma Istentől való`,`a hatalmat három ág osztja meg`,`csak a vagyonosok szavazhatnak`],`Népfelség = a nép a hatalom forrása.`),
 mc(`Mi Rousseau szerint az első bűn?`,`a tulajdon`,[`a lopás`,`a vallás`,`a királyság`],`A magántulajdon – ezért korlátozandó.`),
 mc(`Melyik gondolkodónál nincsenek hatalmi ágak, mert a nép közvetlenül uralkodik?`,`Rousseau`,[`Montesquieu`,`Locke`,`Voltaire`],`Rousseau: közvetlen népuralom, nincs mit ellenőrizni.`),
 mc(`Melyik Rousseau nevelési regénye?`,`Emil vagy a nevelésről`,[`Candide`,`Új Héloïse`,`Vallomások`],`Az Emil a nevelésről szól.`),
 fl(`Kinek a mondata: „Az ember szabadnak született, de mindenütt láncokat visel.” (vezetéknév)`,`Rousseau`,`Rousseau.`,{spell:true}),
 mu(`Melyek Rousseau művei? (jelöld mindet)`,[`Emil vagy a nevelésről`,`Vallomások`,`Értekezés a társadalmi szerződésről`],[`Candide vagy az optimizmus`,`Filozófiai levelek`,`A törvények szelleme`],`Candide és a Filozófiai levelek Voltaire-é, A törvények szelleme Montesquieu-é.`),
 mc(`Hány gyereke volt Rousseau-nak (jegyzet)?`,`5`,[`2`,`3`,`7`],`5 gyereke volt.`)
]},

{id:'l1s9', title:`A Párizsi Panthéon`, src:`jegyzet 6. old.`,
simple:`A Panthéon Párizs nagy emlékhelye, ókori templomra emlékeztető épület. Itt nyugszik Voltaire és Rousseau.`,
html:`<ul class="pts">
<li><mark class="b"><b>Párizsi Panthéon</b></mark>: <b>ókori ihletésű</b>, <b>klasszicizmus</b> (az ókori görög-római építészet mintáit követő stílus: oszlopok, timpanon, kupola).</li>
<li>A jegyzetedben: <b>Voltaire, Rousseau és Foucault</b> [fukó] a kapcsolódó nevek. Voltaire és Rousseau sírja itt van.</li>
<li>Foucault neve a híres <b>inga</b> miatt maradt meg: a <b>Foucault-inga</b> bizonyítja, hogy <b>forog a Föld</b> (jegyzet: „inga → forog a föld”). Az ingát a Panthéon kupolája alatt mutatták be.</li>
</ul>
<div class="note"><b>Pontosítás:</b> Foucault, a fizikus (Léon Foucault) nem itt nyugszik; a Panthéon az ingakísérlet helyszíne volt. A jegyzetben ez egy sorban áll, ezért írtam ide mindhármat.</div>`,
checks:[
 mc(`Milyen stílusú a Panthéon?`,`klasszicizmus (ókori ihletésű)`,[`gótika`,`barokk`,`román stílus`],`Ókori ihletésű, klasszicizmus.`),
 mu(`Kik nyugszanak a Panthéonban? (jelöld)`,[`Voltaire`,`Rousseau`],[`Locke`,`Napóleon`],`Voltaire és Rousseau sírja a Panthéonban van.`),
 mc(`Mit bizonyít a Foucault-inga?`,`hogy forog a Föld`,[`hogy az ember szabadnak született`,`hogy a hatalmat meg kell osztani`,`hogy Isten létezik`],`Foucault-inga: forog a Föld.`)
]},

{id:'l1s10', title:`Vallás: Voltaire és a deizmus`, src:`jegyzet 9. old. · ppt 6. dia`,
simple:`Voltaire szerint Isten megteremtette a világot, de azóta nem avatkozik be (deizmus). A felvilágosodás támadta az egyházat.`,
html:`<ul class="pts">
<li><mark class="g"><b>Vallás</b></mark>: a felvilágosodás <b>támadta az egyházat</b>. <b>Franciaország katolikus</b> volt, ezért ez különösen éles összecsapás.</li>
<li><mark class="o"><b class="must">Voltaire</b></mark> (<b>François-Marie Arouet</b>, a ppt ékezet nélkül írja: „Francois Marie Arouet”) [volter] → <b class="must">deizmus</b>.</li>
<li><b>Deizmus</b>: Isten <b>megteremtette a világot, majd visszalépett</b> (nem avatkozik be).</li>
<li>„<b>Első mozgató</b>”: Isten adja az első lökést, utána a világ magától működik. <b>„A gép forog, az alkotó pihen.”</b></li>
<li>Voltaire szerint <b>Isten társadalmilag hasznos</b>: <i>„Ha Isten nem léteznék, ki kellene találni.”</i></li>
<li>Művei: <b><i>Candide vagy az optimizmus</i></b>, <b><i>Filozófiai levelek</i></b>.</li>
<li><b>Formálódó ateizmus</b> = Isten létének tagadása. <b>Hobbes-t és Diderot-t</b> vádolták ezzel.</li>
</ul>
<div class="tip"><b>Fogódzó:</b> <b>Dei</b>zmus ~ <b>Dei</b> (Isten): „Isten megteremtett és visszalépett”. <b>A</b>teizmus: az <b>a</b> = nincs (nincs Isten).</div>`,
checks:[
 mc(`Mi a deizmus?`,`Isten megteremtette a világot, de utána nem avatkozik bele`,[`Isten nem létezik`,`Isten naponta irányítja a világot`,`csak a pápa tudja, mit akar Isten`],`Deizmus: Isten teremtett és visszalépett.`),
 mc(`Mi az ateizmus?`,`Isten létének tagadása`,[`Isten hatalmának korlátozása`,`a vallási türelem`,`az egyház kritikája`],`Ateizmus: nincs Isten. Hobbes-t és Diderot-t vádolták vele.`),
 fl(`Ki mondta: „Ha Isten nem léteznék, ki kellene találni.”? (vezetéknév vagy írói név)`,[`Voltaire`],`Voltaire – Isten társadalmilag hasznos.`,{spell:true}),
 mt(`Párosítsd a művet a szerzővel!`,[[`Candide vagy az optimizmus`,`Voltaire`],[`Emil vagy a nevelésről`,`Rousseau`],[`A törvények szelleme`,`Montesquieu`]],`Candide: Voltaire; Emil: Rousseau; A törvények szelleme: Montesquieu.`),
 fl(`Mi Voltaire polgári neve? (Írd be, a ppt szerint is jó)`,[`François-Marie Arouet`,`Francois Marie Arouet`,`François Marie Arouet`,`Francois-Marie Arouet`],`François-Marie Arouet.`,{spell:true}),
 cz(`Egészítsd ki!`,`„A gép forog, az {{alkotó}} pihen.” – ez a {{deizmus}} lényege.`,`Voltaire deizmusa.`)
]},

{id:'l1s11', title:`Az Enciklopédia`, src:`jegyzet 9. old. · ppt 6. dia`,
simple:`Az Enciklopédia a kor tudásának hatalmas gyűjteménye volt, Diderot szerkesztette, a felvilágosodás szemszögéből.`,
html:`<ul class="pts">
<li><b class="must">Enciklopédia</b> (franciául <i>Encyclopédie</i>): <b>1751–1772</b> (<b>[–1780]</b>-ig a kiegészítések).</li>
<li>Szerkesztője: <b class="must">Denis Diderot</b> [didró].</li>
<li><b>28 + 7 kötet</b>: a <b>tudományok elméleti és gyakorlati eredményei a felvilágosodás nézőpontjából</b>.</li>
<li>Az Enciklopédia 1772. évi kiadásának címlapképe (a ppt első oldala): az <b>Értelem és a Filozófia lerántja a fátylat az Igazságról</b>.</li>
</ul>
<div class="tip"><b>Számok:</b> 28 + 7 = 35 kötet. Évek: 1751 → 1772 (→ 1780).</div>`,
checks:[
 mc(`Ki szerkesztette az Enciklopédiát?`,`Denis Diderot`,[`Voltaire`,`Montesquieu`,`John Locke`],`Denis Diderot.`),
 fl(`Mikor jelent meg az Enciklopédia? Add meg a kezdő évet!`,`1751`,`1751–1772 (–1780).`),
 fl(`Hány kötetes volt az Enciklopédia? (szám + szám, pl. 10+2)`,[`28+7`,`28 + 7`],`28 + 7 kötet.`),
 tf(`Az Enciklopédia a tudományok eredményeit a felvilágosodás nézőpontjából mutatta be.`,true,`Ez volt a lényege.`)
]},

{id:'l1s12', title:`Összegzés: a felvilágosodás hatása és az 1789-es nyilatkozat`, src:`jegyzet 9–10. old. · ppt 6. dia`,
simple:`A felvilágosodás szerint az abszolutizmus rossz, a hatalmat meg kell osztani, és alkotmányos rendet kell építeni. Az első nagy dokumentum, amely ezt kimondja: az Emberi és polgári jogok nyilatkozata (1789).`,
html:`<div class="flow"><span class="bad">abszolutizmus</span><i>→</i><b>a hatalmi ágak szétválasztása</b><i>→</i><b>alkotmányos berendezkedés</b></div>
<ul class="pts">
<li><b>Σ (összegzés)</b>: a felvilágosodás szerint a <b>politikai berendezkedést új alapokra kell helyezni</b>. <b class="must">Az abszolutizmus rossz.</b></li>
<li><b class="must">1789</b> – <b>alkotmány</b>, elvi alapvetése: az <b class="must">Emberi és polgári jogok nyilatkozata</b> (<b>EPJNy</b>), <b>1789. aug. 26.</b></li>
<li><mark class="p"><b>„Minden ember szabadnak és jogokban egyenlőnek születik és marad.”</b></mark> – a jegyzetedben rózsaszínnel kiemelt mondat, biztosan kell!</li>
</ul>
<h4>A felvilágosodás főbb elvei egy helyen</h4>
<div class="chips"><span>társadalmi szerződés</span><span>elszakadás a tekintélyektől</span><span>racionalizmus ↔ empirizmus</span><span>jogok hangsúlyozása</span><span>vallás elutasítása</span><span>tolerancia</span></div>
<h4>Kik mit mondtak?</h4>
<table class="t"><tr><th>Gondolkodó</th><th>Kulcsgondolat</th></tr>
<tr><td>John Locke</td><td>természeti jogok (élet, szabadság, tulajdon), társadalmi szerződés</td></tr>
<tr><td>Montesquieu</td><td>hatalmi ágak megosztása, képviselet (cenzus)</td></tr>
<tr><td>Rousseau</td><td>népfelség, közvetlen demokrácia, a tulajdon az első bűn</td></tr>
<tr><td>Voltaire</td><td>deizmus, az egyház kritikája, tolerancia</td></tr>
<tr><td>Diderot</td><td>Enciklopédia</td></tr></table>`,
checks:[
 cz(`Egészítsd ki a mondatot!`,`Az Emberi és polgári jogok nyilatkozata szerint minden ember {{szabadnak}} és jogokban {{egyenlőnek}} születik és marad.`,`A jegyzetben kiemelt mondat.`),
 mt(`Ki mit gondolt?`,[[`John Locke`,`élet, szabadság, tulajdon`],[`Montesquieu`,`hatalmi ágak megosztása`],[`Rousseau`,`népfelség, közvetlen demokrácia`],[`Voltaire`,`deizmus`]],`A négy fő gondolkodó négy kulcsgondolata.`),
 fl(`Mi a rövidítése az Emberi és polgári jogok nyilatkozatának (4 betű)?`,[`EPJNy`],`EPJNy.`),
 mc(`Mi lett a felvilágosodás szerint az abszolutizmus helyén?`,`hatalmi ágak szétválasztása, alkotmányos berendezkedés`,[`az egyház uralma`,`a közvetlen királyi hatalom`,`a rabszolgaság`],`Az abszolutizmus rossz; helyette alkotmányos rend.`)
],
extra:[
 mc(`Melyik két évszámot említi a ppt A törvények szelleme hatásaként?`,`1776. júl. 4. és 1789. aug. 26.`,[`1492 és 1583`,`1815 és 1848`,`1640 és 1688`],`Függetlenségi nyilatkozat és Emberi és polgári jogok nyilatkozata.`),
 mc(`Mi az Enciklopédia lényege?`,`a tudományok eredményei a felvilágosodás nézőpontjából`,[`az egyházi tanítások gyűjteménye`,`a királyi törvények tára`,`Rousseau regényei`],`Diderot Enciklopédiája.`),
 tf(`Locke szerint az állam a társadalmi szerződés nyomán születik meg.`,true,`Igen.`),
 mc(`Ki a „nemes vadember” eszméjének atyja?`,`Rousseau`,[`Voltaire`,`Montesquieu`,`Locke`],`Rousseau.`),
 mc(`Mit jelent a „fény százada”?`,`a 18. századot, az ész és a tudás korát`,[`a 17. századi tűzvészeket`,`a gyertyagyártás kezdetét`,`a középkort`],`A felvilágosodás százada.`),
 mc(`Melyik hatalmi ág a parlament?`,`törvényhozó`,[`végrehajtó`,`bírói`,`egyházi`],`Parlament = törvényhozó.`),
 mc(`Mit hirdet a liberalizmus?`,`az egyéni szabadságot, jogegyenlőséget, alkotmányos hatalmat`,[`az uralkodó korlátlan hatalmát`,`a vagyon közös tulajdonát`,`az egyház irányító szerepét`],`Liberalizmus.`)
]}

]});
