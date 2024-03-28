const playlists = {
  'liked-songs': [],
  'j-pop': ['怪獣の花唄', 'しわあわせ', 'そんなbitterな話', '花占い', 'chainsaw-blood', '恋風邪にのせて', 'まぶた', '美電球', '忘れ物', '黒子', '裸の勇者', 'odoriko', '世界の秘密', 'napori', '不可幸力', 'tokyo-flash', 'sleepwalk', 'overdose', 'フライデー・ナイト', '猿芝居', 'エウレカ', 'cult.', '金木犀', 'ターミナル', 'きらり', 'hana', '満ちてゆく', '谺する', 'まちがいさがし', 'ラストシーン', '虹', 'ロングホープ・フィリア', '星を仰ぐ', 'ユアーズ', '勿忘草', 'たけてん', 'アカリ', 'ひらり', 'ハロー カゲロウ', 'lemonade', 'ジュブナイル', '味方', '栞', '愛唄', '道', '遥か', '愛し君へ', 'ビリーヴ', '刹那', 'pride', 'green-boys', '蕾', 'ボクたちの電光石火', '涙空', 'インフェルノ', 'ダンスホール', 'rendez-vous', 'pink', '水平線', '冬と春', 'アイラブユー', 'ベルベットの詩', 'happy-birthday', 'クリスマスソング', '勝手にオリンピック', '黄色', 'エメラルド', '怪盗', '高嶺の花子さん', 'ベテルギウス', '夏音', '飛行船', 'ドライフラワー', 'シャッター', 'ビリミリオン', 'ただ君に晴れ', 'だから僕は音楽を辞めた', 'ブルーベリー・ナイツ', '怪物', 'ハルジオン', 'ハルカ', '夜に駆ける', 'あの夢をなぞって', 'アンコール', '勇者', 'heart-beat', 'ラブレター', '優しい彗星', 'たぶん', 'もしも命が描けたら', 'セブンティーン', 'もう少しだけ', '三原色', '祝福', 'ミスター', 'アドベンチャー', 'romance', '好きだ', 'アイドル', 'night-dancer', 'ヒロイン', 'nagisa', 'odoriko-dazbee-cover', 'ひまわりの約束', '栄光の架橋', '白日', 'カメレオン', '一途', 'boy', '青のすみか', '残機', '打上花火', 'ピースサイン', '最高到達点', 'habit', '阿修羅ちゃん', 'うっせえわ', 'tomorrow-never-knows',],
  'siglikore': ['youre-too-slow', 'hyptonic-data'],
  'phonk': ['metamorphosis', 'rapture', 'close-eyes', 'lovely-bastards', 'memory-reboot', 'devil-eyes', 'sahara', 'rave', 'aircraft', 'rainstorm', 'shadow', 'psycho-cruise', 'midnight', 'baixo', 'classical-phonk', 'ghost!', 'gigachad-theme', 'eggstreme-duck-phonk', 'brazilian-phonk-mano', 'brazilian-danca-phonk', 'unholy', 'murder-in-my-mind', 'a-million-ways-to-murder', 'scopin', 'live-another-day', 'murder-plot', 'tokyo-drift', 'avoid-me', 'neon-blade', 'montagem-celestial-de-atenas'],
  'gaming-tracks': ['metamorphosis', 'close-eyes', 'close-eyes-sped-up', 'rave', 'an-enigmatic-encounter', 'chug-jug-with-you', 'live-another-day', 'murder-plot', 'tokyo-drift'],
  'hits-de-internet': ['moment', 'the-perfect-girl-the-motion-retrowave-remix', 'space-song', 'past-lives', 'after-dark', 'my-ordinary-life', 'kerosene', 'gigachad-theme', 'night-dancer', 'lovely-bastards', 'all-my-fellas'],
  'meme-songs': ['last-rizzmas-i-gave-you-my-gyatt', 'indian-sleigh-ride-remix', 'indian-last-christmas-remix', 'king-on-a-budget-bk', 'whopper', 'nom-nom-nom-nom-nom-nom-nom', 'peppa-pig', 'loud-indian-music', 'careless-whisper', 'soviet-anthem', 'shimmy-shimmy-ay'],
  'slowed-and-reverbed': ['close-eyes-slowed-reverb', 'metamorphosis-slowed-reverb', 'living-life-in-the-night-slowed', 'lovely-bastards-slowed', 'memory-reboot-slowed'],
  'lofi-jazz': ['from-the-start', 'cupid', 'circus', 'that-kyoto-vibe', 'brazilian-beach-rumba', 'kyoto-nights', 'cactus-cafe', 'coffee-moments', 'jazz-in-my-coffee', 'sushi'],
  'holiday-party': ['last-rizzmas-i-gave-you-my-gyatt', 'indian-sleigh-ride-remix', 'indian-last-christmas-remix', 'mariahcarey', 'snowman', 'carol-of-the-bells', 'christmas-eve-==-sarajevo'],
  'mix': ['paint-the-town-red', 'somebody-that-i-used-to-know', 'somebodys-watching-me', 'ballin', 'bad-habit', 'luxury', 'everybody-wants-to-rule-the-world', 'the-box', 'the-perfect-girl'],
  'rap-mix': ['blueberry-faygo', 'lovin-on-me', 'all-girls-are-the-same', 'the-box', 'ballin', 'fkumean', 'no-role-modelz', 'solo', 'bad', 'what-are-you-so-afraid-of', 'chain-gang', 'wet-dreamz', 'passionfruit', 'teenage-fever', 'i-hate-police', 'great-gatsby', 'butterfly-effect', 'space-cadet', 'zeze', 'not-fair', '223s', 'look-back-at-it', 'humble', 'like-this', 'overtime', 'rockstar', 'swervin', 'got-it-on-me', 'wat-u-want-2', 'frick-love'],
  'pop-mix': ['paint-the-town-red', 'somebody-that-i-used-to-know', 'somebodys-watching-me', 'ballin', 'bad-habit', 'sleepwalker', 'luxury', 'everybody-wants-to-rule-the-world', 'the-box', 'the-perfect-girl'],
  'classical': ['la-campanella', 'violin-concerto-in-e-minor', 'adagio-albinoni', 'trio-no-2-in-e-minor', 'moonlight-sonata'],
  'national-anthems': ['soviet-anthem', 'heil-dir-im-siegerkranz', 'horst-wessel-lied', 'deutschlandlied', 'la-marseillaise'],
  'todays-top-hits': ['greedy', 'it-girl', 'ecstasy', 'moonlight', 'only-in-my-mind', 'strangers', 'smooth-operator-(tiktok-remix)'],
  'chill-chill': ['passionfruit', 'bad-habit', 'snowman', 'moonlight', 'only-in-my-mind', 'smooth-operator-(tiktok-remix)', 'cupid', 'from-the-start'],
  '80s-hits': ['never-gonna-give-you-up', 'kyrie', 'careless-whisper', 'eye-in-the-sky', 'rebel-yell', 'everlasting-love', 'overkill', 'down-under', 'who-can-it-be-now', 'everywhere', 'africa', 'material-girl', 'morning-train', 'smooth-criminal', 'take-on-me', 'dont-stop-believin', 'dont-you-want-me', 'maneater', '空も飛べるはず', '踊り子', '初恋'],
  'modern-rock': ['little-dark-age'],
  'hip-hop-mix': ['blueberry-faygo', 'love-you-better', 'back-to-you', 'living-life-in-the-night-slowed', 'mathematical-disrespect', 'sea-of-thieves', 'i-see-london-i-see-france', 'spicy', 'thousand', 'RO7-3ALATOL', 'buster', 'hollywood-perfect', 'holiday', 'barking', 'outside', 'easier', 'slidin', 'mercedes', 'forever-never', 'curry', 'billie-eilish', 'dunkin-donuts', 'hope', 'sad!', 'bad', 'frick-love', 'passionfruit', 'teenage-fever', 'idgaf-(frick)'],
  'rock-mix': ['rebel-yell', 'scentless-apprentice', 'serve-the-slaves', 'i-hate-myself', 'moist-viagra', 'sappy', 'dumb', 'reap-me', 'heart-shaped-box', 'been-a-son', 'poisons-gone', 'and-i-love-her', 'aberdeen', 'you-cant-change-me', 'rehash', 'clean-up-before-she-comes', 'burn-the-rain', 'what-more-can-i-say', 'the-yodel-song', 'do-re-mi-medley']
}

const songToArtistMap = {

  '怪物': 'yoasobi',
  'ハルジオン': 'yoasobi',
  'ハルカ': 'yoasobi',
  '夜に駆ける': 'yoasobi',
  'あの夢をなぞって': 'yoasobi',
  '三原色': 'yoasobi',
  '祝福': 'yoasobi',
  'セブンティーン': 'yoasobi',
  'もう少しだけ': 'yoasobi',
  'もしも命が描けたら': 'yoasobi',
  'ミスター': 'yoasobi',
  '優しい彗星': 'yoasobi',
  'アドベンチャー': 'yoasobi',
  'ラブレター': 'yoasobi',
  'アンコール': 'yoasobi',
  '勇者': 'yoasobi',
  'romance': 'yoasobi',
  'アイドル': 'yoasobi',
  'たぶん': 'yoasobi',
  '好きだ': 'yoasobi',
  'heart-beat': 'yoasobi',
  'うっせえわ': 'ado',
  '阿修羅ちゃん': 'ado',
  'night-dancer': 'imase',
  'nagisa': 'imase',
  'ヒロイン': 'imase',
  '道': 'GReeeen',
  '蕾': 'GReeeen',
  '愛唄': 'GReeeen',
  'たけてん': 'GReeeen',
  'アカリ': 'GReeeen',
  '遥か': 'GReeeen',
  '愛し君へ': 'GReeeen',
  'ビリーヴ': 'GReeeen',
  'ひらり': 'GReeeen',
  '涙空': 'GReeeen',
  'lemonade': 'GReeeen',
  '勿忘草': 'GReeeen',
  '味方': 'GReeeen',
  '栞': 'GReeeen',
  'green-boys': 'GReeeen',
  'ジュブナイル': 'GReeeen',
  'ボクたちの電光石火': 'GReeeen',
  '刹那': 'GReeeen',
  'pride': 'GReeeen',
  'ハロー カゲロウ': 'GReeeen',
  'odoriko': 'vaundy',
  '世界の秘密': 'vaundy',
  '怪獣の花唄': 'vaundy',
  'しわあわせ': 'vaundy',
  '不可幸力': 'vaundy',
  'napori': 'vaundy',
  '黒子': 'vaundy',
  'chainsaw-blood': 'vaundy',
  'そんなbitterな話': 'vaundy',
  'tokyo-flash': 'vaundy',
  '恋風邪にのせて': 'vaundy',
  '裸の勇者': 'vaundy',
  '忘れ物': 'vaundy',
  '美電球': 'vaundy',
  '花占い': 'vaundy',
  'まぶた': 'vaundy',
  '栄光の架橋': 'yuzu',
  '白日': 'king gnu',
  '一途': 'king gnu',
  'カメレオン': 'king gnu',
  'sleepwalk': 'natori',
  'フライデー・ナイト': 'natori',
  '猿芝居': 'natori',
  'overdose': 'natori',
  'エウレカ': 'natori',
  'cult.': 'natori',
  '金木犀': 'natori',
  'ターミナル': 'natori',
  'boy': 'king gnu',
  'odoriko-dazbee-cover': 'dazbee, vaundy',
  '最高到達点': 'sekai no owari',
  'habit': 'sekai no owari',
  '打上花火': 'daoko, kenshi yonezu',
  'ピースサイン': 'kenshi yonezu',
  '青のすみか': 'tatsuya kitani',
  'きらり': 'fujii kaze',
  'hana': 'fujii kaze',
  '満ちてゆく': 'fujii kaze',
  'インフェルノ': 'mrs. green apple',
  'ダンスホール': 'mrs. green apple',
  '残機': 'zutomayo',
  '夏音': 'yuuri',
  'ドライフラワー': 'yuuri',
  'ベテルギウス': 'yuuri',
  'シャッター': 'yuuri',
  'ビリミリオン': 'yuuri',
  '飛行船': 'yuuri',
  'rendez-vous': 'shy taupe',
  'pink': 'shy taupe',
  '水平線': 'back number',
  '怪盗': 'back number',
  '冬と春': 'back number',
  'アイラブユー': 'back number',
  '勝手にオリンピック': 'back number',
  'happy-birthday': 'back number',
  'エメラルド': 'back number',
  'ベルベットの詩': 'back number',
  '黄色': 'back number',
  'クリスマスソング': 'back number',
  '高嶺の花子さん': 'back number',
  'ただ君に晴れ': 'yorushika',
  'だから僕は音楽を辞めた': 'yorushika',
  'ブルーベリー・ナイツ': 'macaroni empitsu',
  'ひまわりの約束': 'motohiro hata',
  '谺する': 'suda masaki',
  'まちがいさがし': 'suda masaki',
  '星を仰ぐ': 'suda masaki',
  'ユアーズ': 'suda masaki',
  'ラストシーン': 'suda masaki',
  'ロングホープ・フィリア': 'suda masaki',
  '虹': 'suda masaki',
  'tomorrow-never-knows': 'mr. children',

  'metamorphosis': 'INTERWORLD',
  'rapture': 'INTERWORLD',
  'close-eyes': 'DVRST',
  'close-eyes-sped-up': 'DVRST',
  'lovely-bastards': 'ZWE1HVNDXR, yatashigang',
  'memory-reboot': 'VOJ, narvent',
  'devil-eyes': 'zodvic',
  'rave': 'dxrk',
  'aircraft': 'dxrk',
  'rainstorm': 'dxrk',
  'sahara': 'hensonn',
  'shadow': 'ONIMXRU, SMITHMANE',
  'psycho-cruise': 'ONIMXRU, STRAWANGLE',
  'midnight': 'PLAYAMANE X NATEKI',
  'baixo': 'xxanteria',
  'ghost!': 'phonk.me',
  'classical-phonk': 'BEETHOVEN HIMSELF!!!!!!',
  'eggstreme-duck-phonk': 'sma$her',
  'gigachad-phonk-theme': 'g3ox_em',
  'brazilian-phonk-mano': 'slow-boy',
  'brazilian-danca-phonk': '6YNTHMANE',
  'unholy': 'kordhell, dxrk',
  'murder-in-my-mind': 'kordhell',
  'scopin': 'kordhell',
  'murder-plot': 'kordhell',
  'live-another-day': 'kordhell',
  'a-million-ways-to-murder': 'kordhell',
  'tokyo-drift': 'PRXSXNT FXTURE',
  'hyptonic-data': 'odetari',
  'avoid-me': 'KUTE',
  'neon-blade': 'moondeity',

  'from-the-start': 'laufey',

  'close-eyes-slowed-reverb': 'DVRST',
  'metamorphosis-slowed-reverb': 'INTERWORLD',
  'lovely-bastards-slowed': 'ZWE1HVNDXR, yatashigang',
  'memory-reboot-slowed': 'VOJ, narvent',

  'youre-too-slow': 'odetari',
  'montagem-celestial-de-atena': 'dj orbital',

  'indian-sleigh-ride-remix': 'vindaloo singh',
  'indian-last-christmas-remix': 'vindaloo singh',
  'careless-whisper': 'george michael',
  'shimmy-shimmy-ay': 'shimmy ah',

  'my-ordinary-life': 'the living tombstone',
  'after-dark': 'mr. kitty',
  'chug-jug-with-you': 'leviathanJPTV',
  'kerosene': 'crystal castles',
  'past-lives': 'sapientdream',
  'moment': 'vierre cloud',
  'the-perfect-girl-the-motion-retrowave-remix': 'mareux, the motion',
  'space-song': 'beach house',

  'all-girls-are-the-same': 'juice wrld',
  'what-are-you-so-afraid-of': 'xxxtentacion',
  'frick-love': 'xxxtentacion',
  'hope': 'xxxtentacion',
  'got-it-on-me': 'pop smoke',
  'wat-u-want-2': 'yeat',
  'the-box': 'roddy ricch',
  'ballin': 'roddy ricch, mustard',
  'fkumean': 'gunna',
  'no-role-modelz': 'j. cole',
  'wet-dreamz': 'j. cole',
  'chain-gang': 'anti da menace',
  'i-hate-police': 'N.W.A',
  'lovin-on-me': 'jack harlow',
  'sad!': 'xxxtentacion',
  'zeze': 'kodak black',
  'butterfly-effect': 'travis scott',
  'great-gatsby': 'rod wave',
  'space-cadet': 'metro boomin',
  'not-fair': 'the kid laroi',
  'bad': 'xxxtentacion',
  '223s': 'YNW melly',
  'look-back-at-it': 'a boogie wit da hoodie',
  'swervin': 'a boogie wit da hoodie',
  'rockstar': 'da baby',
  'humble': 'kendrick lamar',
  'overtime': 'ken carson',
  'like-this': 'ken carson',

  'paint-the-town-red': '✨💅doja cat!1!💅✨',
  'somebody-that-i-used-to-know': 'gotye (official aussie)',
  'somebodys-watching-me': '👀 rockwell',
  'bad-habit': 'steve lacy',
  'luxury': 'azealia banks',
  'everybody-wants-to-rule-the-world': 'tears for fears',
  'the-perfect-girl': 'mareux',
  'sleepwalker': 'akiaura, LONOWN, STM',

  'mariahcarey': 'all i want for christmas is youuuuu 🎄',
  'snowman': 'sia',
  'last-rizzmas-i-gave-you-my-gyatt': 'every fortnite kid',

  'greedy': 'tate mcrae',
  'it-girl': "aliyah's interlude",
  'ecstasy': 'su1c1de idol',
  'moonlight': 'kali uchis',
  'only-in-my-mind': 'kenya grace',
  'strangers': 'kenya grace',
  'smooth-operator-(tiktok-remix)': 'sade',

  'soviet-anthem': 'soviet union',
  'heil-dir-im-siegerkranz': 'heinrich harrie',
  'horst-wessel-lied': 'horst wessel',
  'deutschlandlied': 'joseph haydn',
  'la-marseillaise': 'claude joseph rouget de lisle',

  'la-campanella': 'rousseau',
  'violin-concerto-in-e-minor': 'felix mendelsshon',
  'adagio-albinoni': 'tomaso albinoni',
  'trio-no-2-in-e-minor': 'franz schubert',
  'moonlight-sonata': 'beethoven',

  'passionfruit': 'drake',
  'teenage-fever': 'drake',
  'idgaf-(frick)': 'drake',

  'reap-me': 'nirvana',
  'heart-shaped-box': 'nirvana',
  'dumb': 'nirvana',
  'sappy': 'nirvana',
  'moist-viagra': 'nirvana',
  'i-hate-myself': 'nirvana',
  'serve-the-slaves': 'GET BACK 2 WORK (nirvana)',
  'scentless-apprentice': 'nirvana',

  'poisons-gone': 'kurt cobain',
  'and-i-love-her': 'kurt cobain',
  'aberdeen': 'kurt cobain',
  'you-cant-change-me': 'kurt cobain',
  'rehash': 'kurt cobain',
  'clean-up-before-she-comes': 'kurt cobain',
  'burn-the-rain': 'kurt cobain',
  'what-more-can-i-say': 'kurt cobain',
  'been-a-son': 'nirvana',
  'the-yodel-song': 'kurt cobain',
  'do-re-mi-medley': 'kurt cobain',

  'never-gonna-give-you-up': 'rick astley',
  '踊り子': 'kozo murashita',
  '初恋': 'kozo murashita',
  'neglect': 'mr. kitty',
  'kyrie': 'mr. mister',
  'eye-in-the-sky': 'the alan parsons project',
  'everlasting-love': 'howard jones',
  'overkill': 'men at work',
  'down-under': 'men at work',
  'who-can-it-be-now': 'men at work',
  'everywhere': 'fleetwood mac',
  'africa': 'toto',
  'material-girl': 'madonna',
  'morning-train': 'sheena easton',
  'smooth-criminal': 'michael jackson',
  'take-on-me': 'a-ha',
  'dont-stop-believin': 'journey',
  'dont-you-want-me': 'the human league',
  'maneater': 'daryl hall and john oates',
  '空も飛べるはず': 'spitz',

  'little-dark-age': 'mgmt',

  'all-my-fellas': 'frizk',

  'blueberry-faygo': 'lil mosey',
  'kamikaze': 'lil mosey',
  'curry': 'vic sage',
  'billie-eilish': 'armani white',
  'dunkin-donuts': 'jakes birthday',

  'carol-of-the-bells': 'lindsey stirling',
  'christmas-eve-==-sarajevo': 'trans-siberian orchestra',

  'rebel-yell': 'billy idol',
  'freebird': 'lynyrd skynyrd',

};

export { playlists, songToArtistMap };