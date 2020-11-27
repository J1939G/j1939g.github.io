var quotes = `{"quotes":[
        {"author":"Karel Čapek",      "src":"Krakatit",                             "content":"Člověk nemá být šťastný; to ho změkčuje, víte? Pak se mu zdá všechno ostátní zbytečné, malé... a nesmyslné.\\nNejvíc... nejvíc udělá člověk ze zoufalství. Ze stesku, ze samoty, z ohlušování. Protože mu nic nestačí.\\nJá jsem pracoval jako blázen. Ale tady, tady jsem začal být šťastný. Tady jsem poznal, že je snad... něco lepšího než myslet."},
        {"author":"Leonardo Da'Vinci","src":"",                                     "content":"Simplicity is the ultimate sohpistication"},
        {"author":"Karel Čapek",      "src":"Továrna na absolutno, 213",            "content":"Neboť jediné jest horší než bolest ponížení: muka nenávistí. Vidíš, zrovna tak to je, když sebou mladý člověk hází, všechno se s ním splaší. A ono není potřeba dělat velké kousky. Seď a dávej pozor na cestu, taky dojedeš."},
        {"author":"Karel Čapek",      "src":"Továrna na absolutno, 279",            "content": "Nastalo na světě neomezená hojnost všeho, čeho je lidem třeba. Všeho je lidem třeba, jenom ne neomezená hojnost."},
        {"author":"George Orwell",    "src":"Down and under in Paris & London, 5",  "content":"Poverty frees them from ordinary standards of behaviour, just as money frees people from work."},
        {"author":"George Orwell",    "src":"Down and under in Paris & London, 21", "content":"You discover boredom and mean complications and the beginning of hunger, but you also discover the great redeeming property of poverty: that it anhihilates the..."},
        {"author":"Michael Ende",     "src":"Momo",                                 "content":"... že on, takový, jaký je, existuje mezi lidmi jenom jednou jedinkrát, a to že je důvod, proč je právě svým vlastním způsobem pro svět důležitý. Ano, tak dovedla Momo druhému naslouchat!"},
        {"author":"Michael Ende",     "src":"Momo, 51",                             "content":"Vždyť čas je Život, a Život přebýva v srdci."},
        {"author":"Michael Ende",     "src":"Momo, 60",                             "content":"Zmocnilo se ho něco jako posedlost. Pan Fusi neslyšel a neviděl. A když si někdy s hrůzou uvědomil, jak rychleji a rychleji myjejí dny jeho života, šetřil časem o to zavileji."},
        {"author":"Michael Ende",     "src":"Momo, 62",                             "content":"A ze všeho nejméně snášeli tyto lidé ticho. V tichu je přepadala úzkost, protože tušili, co se ve skutečnosti stálo s jejich životem."},
        {"author":"Michael Ende",     "src":"Momo, 79",                             "content":"„To jediné,“ pokračoval muž jako stroj, „na čem v životě záleží, je, aby to člověk někam přivedl, aby se něčím stal a aby něco měl. Kdo to přivede dal než ti druzí, kdo je něčím víc a kdo má víc peněz než oni, tomu spadne všechno ostatní samo do klína.“"},
        {"author":"Michael Ende",     "src":"Momo",                                 "content":"„Ale kdo tedy jsou?“„Ve skutečnosti nejsou nic.“„A odkud se berou?“„Vzníkají, protože jim lidí umožnují, aby vznikli. Možnost už stačí k tomu, aby se to dělo. A teď jim lidé poskytují novou možnost, totiž možnost, aby všechny lidí ovládli...“"},
        {"author":"Michael Ende",     "src":"Momo, 129",                            "content":"Vždyť [hodiny] jsou jen velmi nedokonalé napodobeniny něčeho, co má každý člověk ukryto v hrudi. Neboť tak jako mají lidé oči, aby viděli světlo, a uši, aby slyšeli zvuky, tak mají také srdce, aby vnímalo čas. A všechen čas, který neproživá srdce, je stejně ztracený jako pro slepec barvy duchy, nebo jako pro hluchého ptačí píseň. Jen škoda, že jsou mezi lidmi slepá a hluchá srdce, která tlučou, a přece nic nevnímají."},
        {"author":"Michael Ende",     "src":"Momo, 184",                            "content":"Jsi uplně sama, nebohé dítě! Tví přátele jsou pro tebe nedostupní. Nemáš nikoho, s kým bys mohla sdílet svůj čas. O to jsme se přičinili my. Teď vidíš, co všechno můžeme. Klást odpor je marné. K čemu je ti nyní tolik hodin samoty. Jsou pro tebe kletbou, která tě mučí, břemenem, které tě hrozí udusit, mořem, které tě pohlcuje, a tryzní, která tě stravuje. To my jsme tě vyloučili ze společenství lidí."},
        {"author":"Janča",            "src":"Tábor 2020",                           "content": "EHM EHM. Mějte se rádi. Jinak vás nebude mít rád nikdo."},
        {"author":"Adri",             "src":"Tábor 2020?",                          "content": "Jak málo štěstí stačí ke štěstí."},
        {"author":"Carl G. Jung",     "src":"",                                     "content": "... Žít ze dne na den, dívat se před sebe, ať je smrti jakkoli blízko.\\nTen, kdo jedná jinak, a nemá důvěru v život, protože má jednou skončit, a dívá se proto jen zpátky, ten ustrne a umírá už za života."},
        {"author":"Anthony Stevens",  "src":"",                                     "content": "Tam, kde končí logika, končí věda, ale nikoli příroda. Ta prosperuje i na půdě dosud nezdupané teoriemi."},
        {"author":"Paulo Coelho",     "src":"El alquimista",                        "content": "Las cosas sencillas son las mas extraordinarias. Solo los sabios consiguen verlas."},
        {"author":"Paulo Coelho",     "src":"El alquimista, 34",                    "content": "„A jaká je největší lež na světě?“ vyzvídal překvapeně pastýř. „Tahleta: že v určité chvíle své existence ztrátíme vládu nad svým životem, a ten pak podléha osudu.“"},
        {"author":"Paulo Coelho",     "src":"El alquimista, 35",                    "content": "Lidé si navymýšlejí – pomyslel si pastýř. Někdy je lepší být s ovcemi, ty aspoň nic neříkají a starají se jen o potravu a vodu. Anebo ještě lepší jsou knížky, ve kterých se vyprávějí neuvěřitelné příběhy, ale jen když o to člověk stojí. Když ale mluvíme s lidmi, navykládají nám někdy věcí, že nevíme, co na to říct."},
        {"author":"Paulo Coelho",     "src":"El alquimista, 37",                    "content": "... ať jsi kdokoli, a děláš cokoli, když něco doopravdy chceš, je to proto, že se toto přání zrodilo v duši Vesmíru. Je to tvé poslání na Zemi."},
        {"author":"Paulo Coelho",     "src":"El alquimista, 38",                    "content": "Prostě to, co si lidé myslí o pouličních prodavačích a o pastýřích, se pro ně stálo důležitější než Osobní příběh."},
        {"author":"Paulo Coelho",     "src":"El alquimista, 39",                    "content": "„Lidé poznají velice brzy, proč mají žit,“ řekl stařec trochu hořce. „Možná právě proto se velice brzy vzdávají. Ale tak už to bývá.“"},
        {"author":"Klára Mayerová",   "src":"A pak ho spolknul eskalátor... 143",   "content": "... Plod, který je jediný skutečně nebezpečný pro všechno co na světě je, roste, dýchá a žije. Plod je totiž ztělesněným průměru. Obyčejnosti. Šedi.\\nTen, kdo jej sní, přijde o všechno co jej dosud činilo jím samým, co ho odlišovalo od ostátních jedinců jeho druhu. Ztrátí talent, schopnosti, jedinečný vzhled, vlastní originální myšlenky, cokoli, díky čemu si muže říkat tím jedinečným slůvkem: „Já“"},
        {"author":"Klára Mayerová",   "src":"A pak ho spolknul eskalátor... 145",   "content": "Pravá krása tkví v jedinečnosti."},
        {"author":"Klára Mayerová",   "src":"A pak ho spolknul eskalátor... 150",   "content": "„Já jím chybím,“ uvědomil si Damián. „Mají mě rádi, chybím jim všem takový, jaký jsem!\\nOčividně je to jenom můj vlastní blbý problém, že se musím furt s někým srovnávat!“"},
        {"author":"Martin Selner",    "src":"Autismus & Chardonnay",                "content": "Nemyslím si, že by byl autismus nějak nakažlivý, spíš jde o přírozený důsledek toho, že vám na někom záleží. Najednou si ho nesete v sobě."},
        {"author":"Martin Selner",    "src":"Autismus & Chardonnay, 32",            "content": "Pokud jste někdy trpěli jakýmkoli znevyhodněním, často se k vám okolí začalo chovat jinak. Lidé kolem vás si mysleli, že vám pomůžou, když budou dělat co nejvíce věcí za vás. Například vám uvaří. Ale tak vás ochudí o průběžné ujídání, které já osobně i mé dětí tolik milujeme. Méně péče a více podpory."},
        {"author":"Ray Bradbury",     "src":"Fahrenheit 451, 65",                   "content": "Nejsou všichni zrození svobodní a sobě rovní, jak říká ústava, ale dá se dosáhnout toho že jsou všichni srovnání. Jeden každý je věrným obrazem všech ostatních; pak jsou vichni šťastní, protože tu nejsou žádní velikáni, před kterými by se člověk citil bezvýznamný nebo podle nichž by se mohl měřit."},
        {"author":"Keith Johnston",   "src":"",                                     "content": "Those who say 'yes' are rewarded by the adventures they have. Those who say 'no' are rewarded by the safety they attain."},
        {"author":"Ray Bradbury",     "src":"Fahrenheit 451, 157",                  "content": "Rozdíl mezi člověkem, který jenom seče trávníky, a zahradníkem je ve stopě kterou po sobě zanechají.\\nSekáč trávy jako by tam nikdy nebyl, zahradník zůstane celý věk."},
        {"author":"J. R. R. Tolkien", "src":"Fellowship of the ring",               "content": "All that is gold does not glitter,\\nNot all those who wander are lost,\\nthe old that is strong does not wither,\\nDeep roots are not reached by the frost.\\n\\nFrom the ashes a fire shall be woken,\\nA light from the shadow shal spring,\\nRenewed shall be blade that was broken,\\nThe crownless again shall be king."},
        {"author":"Martin Selner",    "src":"Autismus & Chardonnay",                "content": "Ačkoli limity patří k přírozeným lidským potřebám, protože nás zbabují té nekonečné tíhy odpovědnosti, mnoho děti s postíženým s nimi bojuje."},
        {"author":"Martin Selner",    "src":"Autismus & Chardonnay",                "content": "Nejlepší pečovatelé jsou lidé, kteří sami měli život dost na hovno, a díky tomu dokážou hovna rozpoznat u druhých."},
        {"author":"Martin Wood",      "src":"Stargate 14",                          "content": "You are all but primitive. What you do not know in your head you fill in with your heart."},
        {"author":"Martin Wood",      "src":"Stargate 14",                          "content": "The very young do not always do as they're told."}
    ]}`;
var parsedQuotes = JSON.parse(quotes).quotes;

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function genElement(type, className, content) {
    var elem = document.createElement(type);
    if (className)
        elem.className = className
    elem.appendChild(document.createTextNode(content));
    return elem;
}

function addLineBreaks(dst, className, string = '') {
    var pieces = string.split('\n');
    for (sentence in pieces) {
        dst.appendChild(genElement('p', className, pieces[sentence]));
        dst.appendChild(document.createElement('br'));
    }
}

shuffleArray(parsedQuotes);

for (const quote in parsedQuotes) {
    const currQuote = parsedQuotes[quote];

    // Create container
    var container = document.createElement("div");
    container.className = 'quote';
    // append chilren nodes with line breaks
    addLineBreaks(container, 'content text', currQuote.content);
    container.appendChild(genElement('p', currQuote.src ? 'dissappear author note' : 'author note', currQuote.author));
    if (currQuote.src)
        container.appendChild(genElement('h2', 'source text note', currQuote.src, true));
    // append to container and add container to wrapper
    document.getElementById("wrapper").appendChild(container);
}
