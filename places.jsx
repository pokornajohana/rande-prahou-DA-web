const places = [
  {
    id: 1,
    name: 'THE POPUP!',
    address: 'Dvorecké nám. 406/5, 147 00 Praha 4-Podolí',
    coordinates: '50.0464865,14.4141612,18z',
    opening_hours:
      'ÚT / ČT Individuálně dle dohody  PO / ST / PÁ 14:00 - 20:00 SO / NE 10:00 - 18:30 ',
    url: 'https://www.thepopup.cz/',
    img: './img/The Pop Up!',
  },
  {
    id: 2,
    name: 'Neviditelná večeře',
    address:
      'Novoměstská radnice 2. patro Karlovo nám. 1/23 - vstup z Vodičkovy ulice 120 00 Praha 2',
    coordinates: '50.078158,14.42119,14z',
    opening_hours:
      'Po - Pá: 12:00 - 20:00 (Poslední návštěvníci v 19:00) So - Ne a svátky: 10:00 - 20:00 (Poslední návštěvníci v 19:00)',
    url: 'https://neviditelna.cz/neviditelna-vecere',
    img: './img/Neviditelna vecere',
  },
  {
    id: 3,
    name: 'Laser game',
    address: 'Bohnická 320/40, 181 00 Praha',
    coordinates: '50.1330323,14.412751,17z',
    opening_hours:
      'Po 14:00 - 22:00 Út 14:00 - 22:00 St 14:00 - 22:00 Čt 14:00 - 22:00 Pá 14:00 - 23:00 So 10:00 - 23:00 Ne 10:00 - 22:00',
    url: 'https://www.lasergamegalaxy.cz/',
    img: './img/laserGame',
  },
  {
    id: 4,
    name: 'Prague Boats - vyhlídková plavba',
    address: 'Dvořákovo nábř., 110 00 Josefov, Česko',
    coordinates: '50.091838,14.416337,15z',
    opening_hours:
      'kancelář na nástupišti číslo 3 je otevřena denně od 9.00 do 22.00',
    url: 'https://www.prague-boats.cz/cs/plavby-po-vltave',
    img: './img/pragueBoats',
  },

  {
    id: 5,
    name: 'Půjčovna lodiček a šlapadel Slovanka',
    address: 'Slovanský ostrov, Praha 1, 110 00',
    coordinates: '50.0793101,14.4121909,15z',
    opening_hours: 'OTEVŘENO každý den od 11:00-22:50 za pěkného počasí.',
    url: 'https://www.slovanka.net/index.php',
    img: './img/Šlapadla',
  },
  {
    id: 6,
    name: 'Motokáry Radotín',
    address: 'Výpadová 1335, Praha 5 Radotín',
    coordinates: '49.9869742,14.3711757,17z',
    opening_hours: 'Pondělí až neděle, 11:00 - 24:00',
    url: 'https://www.kart-centrum.cz/',
    img: './img/Motokáry',
  },
  {
    id: 7,
    name: 'Letní kino Sunset cinema',
    address:
      'Střecha obchodního centra Arkády Pankrác, Na Pankráci 86, 140 00 Praha 4-Nusle',
    coordinates: '50.0509039,14.4360898,17z',
    opening_hours: '',
    url: 'http://sunsetcinema.cz/cz',
    img: './img/Letní kino',
  },
  {
    id: 8,
    name: 'Ladronka - in-line',
    address: 'Tomanova 1028/1, 169 00 Praha 6-Břevnov',
    coordinates: '50.0787136,14.3541518,17z',
    opening_hours: '',
    url: 'https://www.prague.eu/cs/objekt/mista/3357/ladronka',
    img: './img/Ladronka',
  },
  {
    id: 9,
    name: 'JumpArena',
    address: 'Ringhofferova 1,155 00 Zličín,Praha 5',
    coordinates: '50.055025,14.293349,16z',
    opening_hours:
      'Pondělí - pátek 10:00 - 20:00,Sobota a neděle 09:00 - 20:00',
    url: 'https://zlicin.jumppark.cz/',
    img: './img/Jump Arena',
  },
  {
    id: 10,
    name: 'Úniková hra',
    address: 'Mánesova 1613, 120 00 Vinohrady',
    coordinates: '50.0775832,14.4400191,17z',
    opening_hours: 'po-ne: 10.00-22.00',
    url: 'https://questerland.cz/',
    img: './img/UnikovaHra',
  },
];

const nature = [
  {
    name: 'Petřínské sady',
    address: 'Petřínské sady 118 00, 118 00 Praha 1-Malá Strana',
    coordinates: '50.0822666,14.4004938,17z',
    opening_hours: 'Otevřeno 24 hodin',
    url: 'https://www.prague.eu/cs/objekt/mista/504/petrinske-sady',
    img: './img/petrin-park',
  },
  {
    name: 'Grébovka',
    address: 'Havlíčkovy sady, 120 00 Praha 2-Vinohrady',
    coordinates: '50.0694696,14.4359799,16z',
    opening_hours: 'Otevřeno ⋅ Zavírá v 22',
    url: 'https://www.prague.eu/cs/objekt/mista/464/grebovka-havlickovy-sady',
    img: './img/Grébovka',
  },
  {
    name: 'Ďablický háj',
    address: 'K lomu 985/4, 182 00 Ďáblice',
    coordinates: '50.1368511,14.44869,15z',
    opening_hours: 'Otevřeno 24 hodin',
    url: 'https://www.kudyznudy.cz/aktivity/dablicky-haj-s-tajemnym-vrchem-ladvi',
    img: './img/Ďáblický-háj',
  },
  {
    name: 'Vrch Třešňovka',
    address: '',
    coordinates: '50°5'47.101"N 14°30'3.811"E',
    opening_hours: '',
    url: 'https://prazskevyhledy.cz/vrch-tresnovka/',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
  {
    name: 'Laser game',
    address: '',
    coordinates: '',
    opening_hours: '',
    url: '',
    img: '',
  },
];

const restaurant = [
  {
    name: 'Brambory na Pankráci',
    address: 'Na Pankráci 1724/129, Praha 4',
    coordinates: '50.0508484, 14.4408838',
    opening_hours:
      'pondělí–středa 11:00–23:00, čtvrtek–pátek 11:00–00:00, sobota 11:30–23:00, neděle 11:30–22:00',
    url: 'https://www.bramborynapankraci.cz/',
    img: '',
  },
  {
    name: 'Bufet Karlín',
    address: 'U nádražní lávky 81/2, 18600 Praha 8 - Karlín',
    coordinates: '50.0508484, 14.4408838',
    opening_hours: 'Otevíráme v 11:00 a zavíráme po vyprodání',
    url: 'https://www.bufetkarlin.cz/',
    img: '',
  },
  {
    name: 'Diego pivní bar',
    address: 'Sokolovská 467/114, Praha 8',
    coordinates: '50.0946785, 14.4553500',
    opening_hours: 'Po-PÁ 11:00-00:00, So 16:30 - 0:00, Ne 16:30-22:00',
    url: 'http://www.diegopivnibar.cz/cz/',
    img: '',
  },
  {
    name: 'Big Smokers',
    address: 'Dělnická 40, Praha 7 - Holešovice, 170 00',
    coordinates: '50.0946785, 14.4553500',
    opening_hours: 'ÚT - SO 11:00 - 22:00, NE 11:00 - 18:00',
    url: 'https://bigsmokers.cz/',
    img: '',
  },
  {
    name: 'Automat Matuška',
    address: 'Dejvická 4, Praha 6, 160 00',
    coordinates: '50.0946785, 14.4553500',
    opening_hours:
      'Pondělí–Pátek 11.00–00.00, Sobota 12.00–00.00, Neděle 12.00–22.00',
    url: 'https://automatmatuska.cz/',
    img: '',
  },
  {
    name: 'Vinohradský pivovar',
    address: 'Korunní 2506/106, 101 00 Praha 10',
    coordinates: '50.0946785, 14.4553500',
    opening_hours: 'pondělí–sobota 11–24, neděle 11–22',
    url: 'https://www.vinohradskypivovar.cz/',
    img: '',
  },
  {
    name: 'Knedlín',
    address: 'Národní 24, Praha 1',
    coordinates: 'po-čt 9:00-21:00, pá 9:00-22:00, so-ne 10:00-22:00',
    opening_hours: '50.0946785, 14.4553500',
    url: 'https://knedlin.cz/',
    img: '',
  },
  {
    name: 'Meat Vandals',
    address: 'Myslíkova 172/29, 11000 Praha 1',
    coordinates: '50.0782736, 14.4186861',
    opening_hours: 'PO - NE 11:00 - 22:00',
    url: 'https://www.meatvandals.cz/',
    img: '',
  },
  {
    name: 'Grosseto Vinohrady',
    address: 'Francouzská 2, Praha 2',
    coordinates: '50.0747202, 14.4352239',
    opening_hours: 'PO - NE 11:30 - 23:00',
    url: 'https://www.grosseto.cz/vinohrady',
    img: '',
  },
  {
    name: 'Dish',
    address: 'Belgická 335/26, Praha 2, Vinohrady',
    coordinates: '50.0730522, 14.4361752',
    opening_hours: '¨PO - SO 11:00 - 23:00, NE 12:00 - 22:00',
    url: 'https://www.dishbelgicka.cz/',
    img: '',
  },
];

const cafe = [
  {
    name: 'Ô-MAI',
    address: 'Sokolovská 444/118, Praha, 18600 Karlín',
    coordinates: '50.0730522, 14.4361752',
    opening_hours:
      'Uterý – Pátek: 08:30 – 17:00, Sobota – Neděle: 9:00 – 15:00, Pondělí: Odpočíváme',
    url: 'https://omai.cz/',
    img: '',
  },
  {
    name: 'Etapa',
    address: 'Urxova 479/6, 18600 Praha',
    coordinates: '50.0945747,14.4578129',
    opening_hours: 'po-pá 9:00 - 18:00, so-ne 9:00 - 17:00',
    url: 'https://www.etapa.cz/',
    img: '',
  },
  {
    name: 'Café Záhorský',
    address: 'Eliášova 1, Praha 6, Dejvice 160 00',
    coordinates: '50.0945747, 14.4578129',
    opening_hours: 'Po - Pá 08:00 - 22:00, So - Ne 09:00 - 20:00',
    url: 'https://www.cafezahorsky.cz/',
    img: '',
  },
  {
    name: 'Mezi srnky Vinohrady',
    address: 'Sázavská 720/19, 120 00 Praha 2',
    coordinates: '50.0763421, 14.4223900',
    opening_hours: 'pondělí až pátek: 7:30 až 17, víkend a svátky: 9 až 16',
    url: 'https://www.mezisrnky.cz/vinohrady',
    img: '',
  },
  {
    name: 'BISTRO PROTI PROUDU',
    address: 'Březinova 22 / 471, Praha 8 – Karlín, 186 00',
    coordinates: '50.0945706, 14.4561232',
    opening_hours: 'Po-Pá: 8:30 – 22:00 hodin, So: 9:00 – 18:00 hodin',
    url: 'https://bistroprotiproudu.cz/',
    img: '',
  },
  {
    name: 'Šodó',
    address: 'Wuchterlova 1, 16000 Praha',
    coordinates: '19.873400, 5.2498013',
    opening_hours: 'Po–Pá: 08.00–17.00, So–Ne: 09.00–17:00',
    url: 'https://pridejsisodo.cz/',
    img: '',
  },
  {
    name: 'Choco Café',
    address: 'Liliová 250/4, 11000 Praha 1 - Staré Město',
    coordinates: '50.0845713, 14.4165841',
    opening_hours: 'Po-Ne 11-20',
    url: 'https://www.choco-cafe.cz/',
    img: '',
  },
  {
    name: 'SmetanaQ',
    address: 'Smetanovo nábřeží 334/4, Praha 1, 110 00',
    coordinates: '50,082046 14,413262',
    opening_hours: 'PO - NE 09:00 - 19:30',
    url: 'https://smetanaq.cz/',
    img: '',
  },
  {
    name: 'Skautský institut',
    address: 'Staroměstské náměstí 4/1, 11000 Praha 1 - Staré Město',
    coordinates: '50.0866698, 14.4199369',
    opening_hours: 'PO - PÁ 10:00 - 00:00, SO 11:00 - 23:OO, NE 12:00 - 18:00',
    url: 'https://www.skautskyinstitut.cz/',
    img: '',
  },
  {
    name: 'Anežka',
    address: 'Anežská 812/12, 110 00',
    coordinates: '50.0920396, 14.4239316',
    opening_hours: 'ÚT - NE 10–22',
    url: 'https://anezkapraha.cz/',
    img: '',
  },
];
