/* ===== GYAKORLÓ ADATBÁZISOK: ÉVSZÁMOK, NEVEK, FOGALMAK ===== */

/* --- ÉVSZÁMOK: [kulcs(rendezéshez), felirat, esemény, elfogadott válaszok, forrás] --- */
const YEARS=[
 [1492,`1492`,`Amerika felfedezése (Kolumbusz)`,[`1492`],`jegyzet`],
 [1584,`1584`,`Virginia – az első angol gyarmatosítási kísérlet`,[`1584`],`jegyzet`],
 [1640,`1640–1688/89`,`az angol forradalom időszaka`,[`1640–1688/89`,`1640-1688/89`,`1640–1689`,`1640-1689`,`1640–1688`,`1640-1688`],`ppt`],
 [1700,`1700 körül`,`John Locke működése`,[`1700`,`1700 körül`,`1700k`],`ppt`],
 [1748,`1748`,`Montesquieu: A törvények szelleméről`,[`1748`],`jegyzet`],
 [1750,`1750 körül`,`Montesquieu és Rousseau működése`,[`1750`,`1750 körül`,`1750k`],`jegyzet`],
 [1751,`1751–1772`,`az Enciklopédia megjelenése (kiegészítések 1780-ig)`,[`1751–1772`,`1751-1772`,`1751–1780`,`1751-1780`,`1751`],`ppt`],
 [1773,`1773`,`bostoni teadélután`,[`1773`],`jegyzet`],
 [1774,`1774`,`philadelphiai kongresszus`,[`1774`],`jegyzet`],
 [1775,`1775–1783`,`függetlenségi háború (britek ellen)`,[`1775–1783`,`1775-1783`,`1775–83`,`1775-83`],`jegyzet`],
 [1776,`1776. júl. 4.`,`Függetlenségi nyilatkozat`,[`1776. júl. 4.`,`1776. július 4.`,`1776 július 4`,`1776 júl 4`,`1776. júl. 4`,`1776`],`jegyzet`],
 [1783,`1783`,`párizsi béke`,[`1783`],`jegyzet`],
 [1787,`1787`,`az USA alkotmánya (Philadelphia)`,[`1787`],`jegyzet`],
 [1789,`1789`,`a francia forradalom; a hosszú 19. század kezdete`,[`1789`],`jegyzet`],
 [1812,`1812`,`Napóleon elfoglalja Moszkvát, de nem tudja megtartani`,[`1812`],`jegyzet (térkép)`],
 [1789.5,`1789. aug. 26.`,`Emberi és polgári jogok nyilatkozata`,[`1789. aug. 26.`,`1789. augusztus 26.`,`1789 augusztus 26`,`1789 aug 26`,`1789. aug. 26`],`ppt`],
 [1815,`1815`,`Waterloo – Napóleon utolsó veresége`,[`1815`],`jegyzet`],
 [1830,`1830`,`Görögország kiterjedése (térképlap)`,[`1830`],`jegyzet (térkép)`],
 [1848,`1848/49`,`a népek tavasza`,[`1848/49`,`1848-49`,`1848–49`,`1848/1849`,`1848`],`jegyzet`],
 [1903,`1903`,`Munkáspárt (Nagy-Britannia, a ppt szerint)`,[`1903`],`ppt`]
];
YEARS.sort((a,b)=>a[0]-b[0]);
const CENTURIES=[
 [`17. század`,`a felvilágosodás elindulása (Anglia)`,[`17. század`,`17. sz.`,`17`,`17.`]],
 [`18. század`,`„a fény százada”`,[`18. század`,`18. sz.`,`18`,`18.`]]
];

/* --- NEVEK: [helyes, leírás, elfogadott extra, rossz változatok, kategória] --- */
const NAMES=[
 [`John Locke`,`az angol filozófus, aki az élet, a szabadság és a tulajdon jogát hirdette`,[],[`John Lock`,`Jhon Locke`,`John Loke`],`személy`],
 [`Isaac Newton`,`angol fizikus, a tapasztalati természettudomány jelképe`,[],[`Isac Newton`,`Isaak Newton`,`Isaac Neuton`],`személy`],
 [`Charles Montesquieu`,`A törvények szelleméről szerzője`,[`Montesquieu`],[`Charles Montesqieu`,`Charles Montesquiue`,`Charles Monteskieu`],`személy`],
 [`Jean-Jacques Rousseau`,`a népfelség elvének hirdetője, a „nemes vadember” atyja`,[`Rousseau`],[`Jean-Jaques Rousseau`,`Jean-Jacques Rousau`,`Jean-Jacques Russeau`],`személy`],
 [`Voltaire`,`a deizmus képviselője („Ha Isten nem léteznék, ki kellene találni.”)`,[],[`Voltair`,`Volteire`,`Woltaire`],`személy`],
 [`François-Marie Arouet`,`Voltaire polgári neve`,[`Francois Marie Arouet`,`Francois-Marie Arouet`,`François Marie Arouet`],[`François-Marie Arouett`,`François-Marie Aruet`,`François-Marie Arouer`],`személy`],
 [`Denis Diderot`,`az Enciklopédia szerkesztője`,[`Diderot`],[`Denis Diderott`,`Dennis Diderot`,`Denis Didérot`],`személy`],
 [`Thomas Hobbes`,`angol filozófus; „homo homini lupus”, ateizmussal vádolták`,[`Hobbes`],[`Thomas Hobbs`,`Tomas Hobbes`,`Thomas Hobes`],`személy`],
 [`Napóleon`,`akit Waterloonál győztek le 1815-ben`,[],[`Napoleon`,`Napoleón`,`Nápoleon`],`személy`],
 [`Foucault`,`a híres inga felfedezőjének neve (forog a Föld)`,[],[`Foucalt`,`Foucaut`,`Fouchault`],`személy`],
 [`A törvények szelleme`,`Montesquieu leghíresebb műve`,[`A törvények szelleméről`],[`A törvények szelleme `,`A törvények szeleme`,`A törvények szelléme`],`mű`],
 [`Értekezés a társadalmi szerződésről`,`Rousseau egyik értekezése`,[],[`Értekezés a társadalmi szerződésrőll`,`Értekezés a társadalmi szerződésről `,`Értekezés a társadalmi szerződés`],`mű`],
 [`Emil vagy a nevelésről`,`Rousseau nevelési regénye`,[],[`Emil vagy a nevelésről `,`Emil vagy a neveléssről`,`Emil vagy a nevelésröl`],`mű`],
 [`Új Héloïse`,`Rousseau regénye (egyik műve)`,[`Új Héloise`],[`Új Heloíse`,`Új Éloise`,`Új Héloisse`],`mű`],
 [`Vallomások`,`Rousseau önéletrajzi műve`,[],[`Valomások`,`Vallomások `,`Vallomásók`],`mű`],
 [`Álmodozások`,`Rousseau utolsó műve`,[],[`Almodozások`,`Álmodozások `,`Álmodozásók`],`mű`],
 [`Candide vagy az optimizmus`,`Voltaire híres műve`,[],[`Candid vagy az optimizmus`,`Candide vagy az optimizmuz`,`Candide vagy az oprimizmus`],`mű`],
 [`Filozófiai levelek`,`Voltaire műve`,[],[`Filozófiai levelek `,`Filozófiai levélek`,`Filozófia levelek`],`mű`],
 [`Enciklopédia`,`Diderot szerkesztette, 28+7 kötetes mű`,[`Encyclopédie`],[`Enciklopedia`,`Enciklopédia `,`Encikopédia`],`mű`],
 [`Levél d'Alembert-hez a színházakról`,`Rousseau levele a színházakról`,[`Levél d’Alembert-hez a színházakról`,`Levél d'Alembert-hez a színházakról`],[`Levél d'Alambert-hez a színházakról`,`Levél Dalembert-hez a színházakról`,`Levél d'Alembert-hez a színházakról `],`mű`],
 [`Philadelphia`,`itt volt a kongresszus 1774-ben és az alkotmányozás 1787-ben (a ppt: philadelphiai)`,[`Filadelfia`],[`Philadelfia`,`Philadelpia`,`Phyladelphia`],`hely`],
 [`Nieuw Amsterdam`,`a holland telep, amely később New York lett`,[],[`Nieu Amsterdam`,`Nieuw Amsterdamm`,`New Amsterdam`],`hely`],
 [`Virginia`,`az első angol gyarmatosítási kísérlet helye (1584)`,[],[`Virgínia`,`Virginya`,`Wirginia`],`hely`],
 [`Kelet-Indiai Társaság`,`1773-ban monopóliumot kapott a tea kereskedelmére`,[],[`Keleti-Indiai Társaság`,`Kelet Indiai Társaság`,`Kelet-Indiai Társulat`],`hely`],
 [`Panthéon`,`a párizsi ókori ihletésű épület (Voltaire és Rousseau sírja)`,[],[`Pantheon`,`Pantéon`,`Panthéón`],`hely`],
 [`Waterloo`,`itt győzték le Napóleont 1815-ben`,[],[`Waterlo`,`Watterloo`,`Waterlóo`],`hely`],
 [`Liechtenstein`,`alkotmányos monarchia az Alpokban (a ppt „Lichtenstein”-nak írja)`,[],[`Lichtenstein`,`Liechenstein`,`Liechtensteyn`],`hely`],
 [`Szaúd-Arábia`,`abszolút monarchia a Közel-Keleten`,[],[`Szaúdi-Arábia`,`Szaúd Arábia`,`Szaud-Arábia`],`hely`],
 [`Egyesült Arab Emírségek`,`abszolút monarchia (ppt)`,[],[`Egyesült Arab Emirségek`,`Egyesült Arab Emírségek `,`Egyesült Arábiai Emírségek`],`hely`],
 [`Bhután`,`ppt szerint abszolút monarchia`,[],[`Bután`,`Bhutan`,`Bhután `],`hely`],
 [`Tanzánia`,`szövetségi köztársaság Afrikában (ppt)`,[],[`Tanzania`,`Tanzánnia`,`Tansánia`],`hely`],
 [`Venezuela`,`szövetségi köztársaság Dél-Amerikában (ppt)`,[],[`Venezuella`,`Venezüela`,`Venezuela `],`hely`],
 [`Észak-Korea`,`népköztársaság`,[],[`Észak Korea`,`Északkorea`,`Észak-Kórea`],`hely`],
 [`Marokkó`,`alkotmányos monarchia Afrikában`,[],[`Marokó`,`Maroko`,`Marókó`],`hely`],
 [`Luxemburg`,`alkotmányos monarchia (jegyzet és ppt)`,[],[`Luxenburg`,`Luxemburk`,`Luxembourg`],`hely`],
 [`Ausztria`,`szövetségi köztársaság`,[],[`Ausztia`,`Ausztrija`,`Ausztría`],`hely`],
 [`Egyesült Királyság`,`alkotmányos monarchia – Nagy-Britannia mai hivatalos neve`,[],[`Egyesült Királyság `,`Egyesült Királiság`,`Egyesült Kiralyság`],`hely`],
 [`racionalizmus`,`a józan észre épülő gondolkodás`,[],[`racionalizmus `,`racionálizmus`,`rationalizmus`],`szakszó`],
 [`empirizmus`,`a tapasztalatra, kísérletre épülő gondolkodás`,[],[`emperizmus`,`empirismus`,`empirizmus `],`szakszó`],
 [`deizmus`,`Isten megteremtette a világot, de nem avatkozik be`,[],[`deísmus`,`dezimus`,`deizmuz`],`szakszó`],
 [`ateizmus`,`Isten létének tagadása`,[],[`ateismus`,`ateizmuz`,`atheizmus`],`szakszó`],
 [`kozmopolitizmus`,`világpolgár-szemlélet`,[],[`kozmopolizmus`,`kozmopolitismus`,`kozmopolitizmuz`],`szakszó`],
 [`determinizmus`,`Montesquieu: a földrajzi környezet meghatározza a népek jellegét – földrajzi … (a második szó)`,[`földrajzi determinizmus`],[`determinismus`,`determinizmuz`,`determimizmus`],`szakszó`],
 [`tolerancia`,`egymás tisztelete, türelem`,[],[`tolerencia`,`tollerancia`,`toleracia`],`szakszó`],
 [`cenzus`,`a választójog korlátozása`,[],[`censzus`,`cenzuz`,`cénzus`],`szakszó`],
 [`népfelség`,`minden hatalom forrása a nép (népszuverenitás)`,[`népszuverenitás`],[`népfeség`,`népfelség `,`nép felség`],`szakszó`],
 [`liberalizmus`,`a szabadságot és jogegyenlőséget hirdető eszme`,[],[`liberálizmus`,`liberalismus`,`libaralizmus`],`szakszó`],
 [`prezidenciális`,`az elnöki köztársaság jelzője`,[],[`prezidenciális `,`prezidenciális`.replace('c','t'),`prezidenciális`.replace('nci','nsi')],`szakszó`],
 [`parlamentáris`,`a parlamenti köztársaság jelzője`,[],[`parlamentáris `.trim()+'',`parlamentaris`,`parlamenttáris`],`szakszó`],
 [`alkotmányos`,`korlátozott uralkodói hatalmat jelző szó`,[],[`alkotmányos `.trim()+'',`alkotmányos`.replace('y','j'),`alkotmányos`.replace('ány','áni')],`szakszó`],
 [`népköztársaság`,`kommunista egypártrendszerű köztársaság`,[],[`nép köztársaság`,`népköztársáság`,`népköztarsaság`],`szakszó`],
 [`monokultúra`,`egy terményt termesztenek nagy területen`,[],[`monokultura`,`monokúltúra`,`monokultúrra`],`szakszó`],
 [`bélyegtörvény`,`a gyarmatokra kivetett illeték`,[`bélyegtv.`],[`bélyegtörvény `.trim()+'',`bélyegtörveny`,`bélyegtörvényy`],`szakszó`],
 [`beszállásolás`,`katonák kötelező elszállásolása a házakban`,[],[`beszálásolás`,`beszállásolás `.trim()+'',`beszállasolás`],`szakszó`],
 [`bojkott`,`vásárlás megtagadása tiltakozásul`,[],[`boykott`,`bojkot`,`bojkottt`],`szakszó`],
 [`monopólium`,`kizárólagos jog egy tevékenységre`,[],[`monopólum`,`monopolium`,`monopólyum`],`szakszó`],
 [`egyensúlypolitika`,`a brit külpolitika célja Európában`,[],[`egyensúlipolitika`,`egyensúly-politika`,`egyenzúlypolitika`],`szakszó`],
 [`anglikán`,`az angol állami egyház hívei`,[],[`anglicán`,`anglikán `.trim()+'',`anglikán`.replace('kán','kan')],`szakszó`]
].filter(n=>{n[3]=n[3].filter(w=>w!==n[0]&&w.trim()===w);return n[3].length>=2});

/* --- FOGALMAK: [csoport, fogalom, meghatározás, kulcsok(ékezet nélkül), gépelős?] --- */
const TERMS=[
 [`felv`,`felvilágosodás`,`a 17–18. századi szellemi mozgalom: az észre és a tapasztalatra épít, vitatja a régi tekintélyeket, a társadalmat jobbá tehetőnek tartja`,[[`esz`,`racio`,`tapasztal`],[`tekintely`,`kozepkor`,`egyhaz`,`kritik`],[`jobba`,`alakithato`,`valtoztat`]]],
 [`felv`,`a fény százada`,`a 18. század neve, utalva az ész és a tudás „fényére”`,[[`18`,`xviii`],[`esz`,`tudas`,`felvilagosod`]]],
 [`felv`,`racionalizmus`,`ész-elvűség: a tudás forrása a józan ész és a logika`,[[`esz`,`logika`],[`tudas`,`forras`]],1],
 [`felv`,`empirizmus`,`tapasztalat-elvűség: a tudás forrása a kísérlet és a tapasztalat`,[[`tapasztal`,`kiserlet`]],1],
 [`felv`,`dedukció`,`általános elvekből logikával jutunk következtetésre`,[[`altalanos`,`elv`],[`logik`,`kovetkezt`]]],
 [`felv`,`tolerancia`,`türelem, egymás tisztelete: mások hitének és véleményének elfogadása`,[[`turelem`,`tisztelet`,`elfogad`]],1],
 [`felv`,`természeti jogok`,`Locke szerint a születésétől minden embert megillető jogok: élet, szabadság, tulajdon`,[[`elet`],[`szabadsag`],[`tulajdon`]]],
 [`felv`,`társadalmi szerződés`,`az emberek megállapodása: jogaik egy részéről lemondanak, cserébe az állam védi a többit; így jön létre az állam`,[[`lemond`,`megallapod`,`egyezs`],[`allam`],[`vedi`,`biztosit`,`jog`]]],
 [`felv`,`hatalommegosztás`,`a hatalmat külön ágakra (törvényhozó, végrehajtó, bírói) osztják, hogy ne legyen zsarnokság`,[[`torvenyhozo`],[`vegrehajto`],[`biro`],[`zsarnok`,`egy kez`]]],
 [`felv`,`törvényhozó hatalom`,`a törvényeket hozó hatalmi ág: a parlament`,[[`torveny`],[`parlament`]]],
 [`felv`,`végrehajtó hatalom`,`a törvényeket végrehajtó hatalmi ág: a kormány (az USA-ban az elnök)`,[[`vegrehajt`,`torveny`],[`kormany`,`elnok`]]],
 [`felv`,`bírói hatalom`,`a vitákat és bűnügyeket elbíráló hatalom: a bíróságok`,[[`biro`,`birosag`,`elbiral`,`itel`]]],
 [`felv`,`cenzus`,`a választójog korlátozása bizonyos szempontok szerint (pl. vagyon, kor, nem, műveltség)`,[[`valasztojog`,`szavaz`],[`korlat`],[`vagyon`,`kor`,`nem`,`mu`]],1],
 [`felv`,`zsarnokság`,`egy kézben lévő, korlátlan, önkényes hatalom`,[[`korlatlan`,`onkeny`,`elnyom`,`egy kez`]]],
 [`felv`,`földrajzi determinizmus`,`Montesquieu gondolata: a földrajzi környezet (éghajlat) meghatározza a népek jellegét és a törvényeket`,[[`foldrajz`,`eghajlat`,`kornyezet`],[`hataroz`,`befolyas`]]],
 [`felv`,`kozmopolitizmus`,`világpolgár-szemlélet: az ember a világ polgára, nem köti szorosan egy hazához`,[[`vilag`],[`polgar`,`szemlelet`]],1],
 [`felv`,`népfelség`,`minden hatalom forrása a nép (népszuverenitás), Rousseau elve`,[[`hatalom`],[`forras`],[`nep`]],1],
 [`felv`,`közvetlen demokrácia`,`a nép maga dönt népgyűléseken, képviselők nélkül; kis területen működik`,[[`nep`],[`kozvetlen`,`maga`,`kepviselo`]]],
 [`felv`,`nemes vadember`,`Rousseau: az ember természeténél fogva jó, a civilizáció (a tulajdon) rontja el`,[[`jo`,`termeszet`],[`tulajdon`,`civilizacio`,`ront`]]],
 [`felv`,`deizmus`,`Isten megteremtette a világot, de utána nem avatkozik bele (Voltaire)`,[[`teremt`,`alkot`],[`nem avatkoz`,`visszalep`,`pihen`]],1],
 [`felv`,`ateizmus`,`Isten létének tagadása`,[[`isten`],[`tagad`,`nincs`,`nem letezik`]],1],
 [`felv`,`Enciklopédia`,`Diderot szerkesztette, 28+7 kötetes mű: a tudományok eredményei a felvilágosodás szemszögéből (1751–1772)`,[[`diderot`],[`tudomany`,`tudas`],[`felvilagosod`]]],
 [`felv`,`klasszicizmus`,`az ókori (görög-római) mintákat követő stílus, pl. a Párizsi Panthéon`,[[`okor`,`gorog`,`romai`],[`stilus`,`minta`,`epiteszet`]],1],
 [`felv`,`liberalizmus`,`az egyéni szabadságot, jogegyenlőséget és alkotmányos hatalmat hirdető eszme`,[[`szabadsag`],[`jog`,`alkotmany`,`egyen`]],1],
 [`felv`,`Emberi és polgári jogok nyilatkozata`,`1789-es francia alapokmány: minden ember szabadnak és jogokban egyenlőnek születik és marad`,[[`francia`,`1789`],[`szabad`],[`egyenlo`,`jog`]]],
 [`felv`,`hosszú 19. század`,`az 1789-es francia forradalomtól kb. 1914-ig tartó korszak`,[[`1789`,`forradalom`]]],
 [`felv`,`népek tavasza`,`az 1848/49-es forradalmak hulláma Európában`,[[`1848`],[`forradalom`]]],
 [`felv`,`felvilágosult abszolutizmus`,`az uralkodó átveszi a felvilágosodás reformjait, de a hatalma korlátlan marad`,[[`felvilagosod`,`reform`],[`korlatlan`,`abszolut`,`hatalom`]]],
 [`felv`,`homo homini lupus`,`latin: az ember embernek farkasa; az ember alapból rossz, ellenséges (Hobbes)`,[[`farkas`],[`ember`]]],
 [`felv`,`szalon`,`művelt emberek társasági összejövetele a 18. századi Franciaországban, ahol az új eszmék terjedtek`,[[`muvelt`,`tarsasag`,`osszejovetel`,`vita`],[`eszme`,`vitat`]],1],
 [`forma`,`alkotmány`,`alaptörvény, az állami berendezkedés legfontosabb normáinak összefoglalása`,[[`alaptorveny`],[`norma`,`szabaly`,`berendezkedes`]],1],
 [`forma`,`államforma`,`az ország irányításának szervezeti felépítése, azaz honnan ered az államfő hatalma`,[[`iranyit`,`felepit`,`szervezet`],[`allamfo`,`hatalom`]]],
 [`forma`,`kormányforma`,`a hatalmi ágak szerkezete és egymáshoz való viszonya`,[[`hatalmi ag`],[`viszony`,`szerkezet`]]],
 [`forma`,`monarchia`,`államforma: az államfő (uralkodó) hatalma öröklődik`,[[`orokl`,`uralkodo`,`kiraly`]],1],
 [`forma`,`köztársaság`,`államforma: az államfőt megválasztják, nem örökli a tisztséget`,[[`valaszt`]],1],
 [`forma`,`alkotmányos monarchia`,`az uralkodó hatalmát az alkotmány korlátozza, a parlament törvényt hoz, a kormány a parlamentnek felelős`,[[`korlat`],[`parlament`],[`kormany`,`felelos`]]],
 [`forma`,`abszolút monarchia`,`az uralkodó hatalma korlátlan`,[[`korlatlan`]]],
 [`forma`,`prezidenciális köztársaság`,`az elnök az államfő és a végrehajtó hatalom feje (pl. USA)`,[[`elnok`],[`vegrehajt`,`allamfo`]]],
 [`forma`,`parlamentáris köztársaság`,`a parlament a hatalom központja, a kormány a parlamentnek felelős (pl. Magyarország)`,[[`parlament`],[`kormany`,`felelos`]]],
 [`forma`,`népköztársaság`,`kommunista, egypártrendszerű köztársaság (pl. Kína, Észak-Korea)`,[[`part`,`egypart`],[`kommunista`,`szocialista`,`nep`]]],
 [`forma`,`szövetségi köztársaság`,`tagállamokból (tartományokból) álló köztársaság (pl. USA, Ausztria)`,[[`tagallam`,`tartomany`,`allambol`,`szovetseg`]]],
 [`ang`,`angol forradalom`,`1640–1688/89: a király és a parlament harca, amelynek eredménye az alkotmányos monarchia`,[[`kiraly`],[`parlament`],[`alkotmanyos`,`monarchi`]]],
 [`ang`,`tory`,`konzervatív angol párt: vidéki földbirtokosok, következetes anglikánok`,[[`konzervativ`,`foldbirtok`,`anglikan`]],1],
 [`ang`,`whig`,`liberális angol párt: városi polgárok, iparosok, mérsékelt anglikánok`,[[`liberalis`,`varosi`,`iparos`,`polgar`]],1],
 [`ang`,`kétpárti rendszer`,`politikai váltógazdaság: két nagy párt váltja egymást a kormányzásban`,[[`ket`],[`valt`]]],
 [`ang`,`egyensúlypolitika`,`Nagy-Britannia nem engedi, hogy egyetlen hatalom túl erős legyen Európában`,[[`egyensuly`,`kiegyensuly`],[`ero`,`hatalom`]],1],
 [`ang`,`anglikán egyház`,`az angol állami protestáns egyház`,[[`angol`],[`protestans`,`allami`,`egyhaz`]]],
 [`usa`,`gyarmat`,`egy másik állam uralma alatt álló, függő terület; nyersanyagforrás az anyaország számára`,[[`masik`,`kulfoldi`,`anya`],[`fugg`,`uralom`,`nyersanyag`]],1],
 [`usa`,`telepes`,`aki új vidékre költözik letelepedni (nem katona)`,[[`letelep`,`koltoz`,`uj`]],1],
 [`usa`,`farmergazdálkodás`,`a gazda földműves és mesterember egy személyben (északi gyarmatok)`,[[`foldmuves`],[`mesterember`,`egy szemely`]]],
 [`usa`,`ültetvényes gazdálkodás`,`nagy birtokon, rabszolgákkal, eladásra termelés (déli gyarmatok)`,[[`rabszolga`],[`nagy`,`birtok`,`export`,`europ`,`elad`]]],
 [`usa`,`monokultúra`,`egy vagy kevés terményt termesztenek nagy területen (rizs, gyapot, dohány, indigó)`,[[`egy`,`keves`,`termeny`]],1],
 [`usa`,`üdvös elhanyagolás`,`London kezdetben alig avatkozott a gyarmatok ügyeibe`,[[`london`,`anglia`,`alig`,`nem avatkoz`,`laza`]]],
 [`usa`,`bélyegtörvény`,`a gyarmatokra kivetett illeték (adó) a hivatalos iratokra, nyomtatványokra`,[[`ado`,`illetek`],[`irat`,`nyomtatvany`,`okmany`]]],
 [`usa`,`beszállásolás`,`katonák kötelező elszállásolása a polgárok házaiban`,[[`katona`],[`haz`,`szallas`]],1],
 [`usa`,`bojkott`,`tiltakozásul megtagadják a vásárlást vagy az együttműködést`,[[`tiltakoz`,`megtagad`,`nem vasarol`]],1],
 [`usa`,`képviselet nélkül nincs adózás`,`a gyarmatok jelszava: nincs képviselőjük a londoni parlamentben, ezért nem fizetnek adót`,[[`kepviselo`,`kepviselet`],[`ado`]]],
 [`usa`,`monopólium`,`kizárólagos jog valamely tevékenységre (1773: a tea kereskedelmére a Kelet-Indiai Társaságé)`,[[`kizar`,`egyedul`,`csak`],[`kereskedel`,`tea`]],1],
 [`usa`,`Kelet-Indiai Társaság`,`brit kereskedőtársaság, amely 1773-ban monopóliumot kapott a tea kereskedelmére`,[[`tea`],[`monopol`],[`brit`,`angol`,`kereskedo`]]],
 [`usa`,`bostoni teadélután`,`1773: a telepesek a bostoni kikötőben a tengerbe dobták a teaszállítmányt`,[[`tenger`,`kikoto`,`boston`],[`tea`]]],
 [`usa`,`philadelphiai kongresszus`,`1774: a 13 gyarmat képviselőinek gyűlése, közös célokkal`,[[`13`,`gyarmat`],[`kozos`,`cel`]]],
 [`usa`,`függetlenségi háború`,`1775–1783: a 13 gyarmat háborúja a britek ellen`,[[`brit`,`angol`],[`hab`]]],
 [`usa`,`Függetlenségi nyilatkozat`,`1776. júl. 4.: a 13 gyarmat kimondja, hogy független Nagy-Britanniától`,[[`fuggetlen`]]],
 [`usa`,`párizsi béke`,`1783: a függetlenségi háborút lezáró béke`,[[`hab`],[`bek`]]],
 [`usa`,`az USA alkotmánya`,`1787-ben, Philadelphiában született alaptörvény, ma 27 módosítással`,[[`1787`,`philadelphia`],[`27`,`modosit`]]]
];

/* ===== kérdésgenerálás ===== */
const ZONEGEN={};

ZONEGEN.years=function(n=15){
 const out=[];
 const items=YEARS.map((y,i)=>({i,y}));
 const ords=()=>{
  const pool=pick(items.filter(o=>![1700,1750,1789.5,1848].includes(o.y[0])),5);
  const sorted=[...pool].sort((a,b)=>a.y[0]-b.y[0]);
  for(let i=1;i<sorted.length;i++) if(sorted[i].y[0]===sorted[i-1].y[0]) return null;
  return od(`Kattints az eseményekre időrendi sorrendben!`,sorted.map(o=>`${o.y[1]} – ${o.y[2]}`),`Helyes sorrend: ${sorted.map(o=>o.y[1]).join(' → ')}.`);
 };
 const mkFl=o=>fl(`Melyik évben (vagy időszakban) történt: ${o.y[2]}?`,o.y[3],`${o.y[1]} – ${o.y[2]}.`,{id:`g:years:${o.i}:fl`,ph:`pl. 1500 vagy 1500–1510`});
 const mkMc=o=>{
  const wrong=pick(items.filter(x=>x.y[1]!==o.y[1]&&x.y[0]!==o.y[0]),3).map(x=>x.y[2]);
  return mc(`Mi történt ekkor: ${o.y[1]}?`,o.y[2],wrong,`${o.y[1]} – ${o.y[2]}.`);
 };
 const mkMt=()=>{
  const pool=pick(items.filter(o=>![1700,1750,1789,1848].includes(o.y[0])&&o.y[1].length<14),4);
  return mt(`Párosítsd az évszámot az eseménnyel!`,pool.map(o=>[o.y[1],o.y[2]]),`Ezek a jegyzet és a ppt évszámai.`);
 };
 const mkCent=()=>{const c=pick(CENTURIES,1)[0];return fl(`Melyik században ${c[1]===`„a fény százada”`?`volt „a fény százada”`:`indult el a felvilágosodás Angliában`}?`,c[2],`${c[0]}.`)};
 const order=shuffle(items);
 for(let k=0;k<6;k++) out.push(mkFl(order[k]));
 for(let k=6;k<10;k++) out.push(mkMc(order[k]));
 for(let k=0;k<2;k++){const o=ords();if(o)out.push(o)}
 out.push(mkMt());
 out.push(mkCent());
 for(let k=10;out.length<n&&k<order.length;k++) out.push(Math.random()<.5?mkFl(order[k]):mkMc(order[k]));
 return shuffle(out).slice(0,n);
};

ZONEGEN.names=function(n=15){
 const out=[];
 shuffle(NAMES).slice(0,n).forEach((nm,i)=>{
  const acc=[nm[0],...nm[2]];
  if(i%2===0) out.push(fl(`Írd le helyesen: ${nm[1]}.`,acc,`Helyesen: ${nm[0]}.`,{spell:true,ph:`a helyes írásmód`}));
  else out.push(mc(`Melyik a helyes írásmód? (${nm[1]})`,nm[0],pick(nm[3],3),`Helyesen: ${nm[0]}.`));
 });
 return out;
};

const termsOf=g=>TERMS.filter(t=>t[0]===g);
ZONEGEN.terms=function(n=15){
 const out=[];
 shuffle(TERMS).slice(0,n).forEach((t,i)=>{
  const same=TERMS.filter(x=>x[1]!==t[1]&&x[0]===t[0]);
  const others=same.length>=3?same:TERMS.filter(x=>x[1]!==t[1]);
  if(i%3===0) out.push(mc(`Mit jelent: ${t[1]}?`,t[2],pick(others,3).map(x=>x[2]),`${t[1]}: ${t[2]}.`));
  else if(i%3===1||!t[4]) out.push(mc(`Melyik fogalomra igaz: „${t[2]}”?`,t[1],pick(others,3).map(x=>x[1]),`${t[1]}: ${t[2]}.`));
  else out.push(fl(`Melyik fogalom ez? „${t[2]}” (egy-két szó)`,[t[1]],`${t[1]}.`,{spell:true,ph:`a fogalom`}));
 });
 return out;
};

ZONEGEN.examples=function(n=10){
 const out=[];
 const catIds=[`alk`,`abs`,`prez`,`parl`,`nep`];
 const sortq=(ids,per)=>{
  const items=[];
  ids.forEach((id,ci)=>{
   const pool=FORM_BY[id].ex.filter(c=>c!==`Bhután`&&!(id===`parl`&&c===`Németország`));
   pick(pool,per).forEach(c=>items.push([c,ci]));
  });
  return st(`Sorold be az országokat a megfelelő típusba!`,ids.map(i=>FORM_BY[i].name),shuffle(items),`Alkotmányos: ${FORM_BY.alk.ex.slice(0,4).join(', ')}… Abszolút: Katar, Vatikán, Szaúd-Arábia… Prezidenciális: USA, Brazília… Parlamentáris: Magyarország, Olaszország… Népköztársaság: Kína, Észak-Korea, Laosz.`);
 };
 out.push(sortq(pick(catIds,3),2));
 out.push(sortq(pick(catIds,3),2));
 out.push(sortq(catIds,1));
 shuffle([`alk`,`abs`,`prez`,`parl`,`nep`,`szov`]).slice(0,4).forEach(id=>{
  const f=FORM_BY[id];
  out.push(fl(`Írj két példát erre: ${f.name}! (vesszővel elválasztva)`,f.ex,`Pl.: ${f.ex.slice(0,4).join(', ')}.`,{n:2,ph:`ország1, ország2`}));
 });
 const countries=[[`Egyesült Királyság`,`alk`],[`Katar`,`abs`],[`USA`,`prez`],[`Magyarország`,`parl`],[`Kína`,`nep`],[`Szaúd-Arábia`,`abs`],[`Brazília`,`prez`],[`Svédország`,`alk`],[`Észak-Korea`,`nep`]];
 pick(countries,3).forEach(c=>{
  const bad=pick(catIds.filter(i=>i!==c[1]),3).map(i=>FORM_BY[i].name);
  out.push(mc(`Melyik típushoz tartozik: ${c[0]}?`,FORM_BY[c[1]].name,bad,`${c[0]}: ${FORM_BY[c[1]].name}.`));
 });
 return shuffle(out).slice(0,n);
};
