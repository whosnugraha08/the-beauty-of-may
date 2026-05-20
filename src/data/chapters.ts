export interface BookPage {
  id: number;
  chapterId: number;
  type: 'cover' | 'chapter-title' | 'narrative' | 'quote' | 'lyrics' | 'closing' | 'blank-left';
  title?: string;
  chapterNumber?: string;
  content?: string;
  quoteText?: string;
  quoteAuthor?: string;
  lyrics?: string[];
  decorationType: 'none' | 'flowers' | 'clock' | 'stars' | 'paths' | 'door' | 'journal' | 'music-notes' | 'single-flower' | 'dual-stars';
  accentColor: string;
  isJournal?: boolean;
}

export const pages: BookPage[] = [
  // ===== COVER =====
  {
    id: 0,
    chapterId: 0,
    type: 'blank-left',
    decorationType: 'none',
    accentColor: '#C4A0A0',
  },
  {
    id: 1,
    chapterId: 0,
    type: 'cover',
    title: 'The beauty of May',
    content: 'for meiy.',
    decorationType: 'flowers',
    accentColor: '#C4A0A0',
  },

  // ===== CHAPTER 1: "dari awal" =====
  {
    id: 2,
    chapterId: 1,
    type: 'chapter-title',
    chapterNumber: 'chapter one',
    title: 'dari awal',
    decorationType: 'flowers',
    accentColor: '#A8B5A0',
  },
  {
    id: 3,
    chapterId: 1,
    type: 'narrative',
    content: `<p>Semuanya mulai dari tempat yang paling gak diduga — Roblox. Indo Voice, tepatnya. Tempat yang isinya orang-orang random ngobrol, main, kadang berantem sendiri. Gak ada yang spesial dari awal kita kenal. Cuma kebetulan sering ketemu di server yang sama, terus lama-lama jadi sering main bareng.</p>

<p>Kita belum pernah ketemu langsung. Semua lewat layar. Tapi anehnya, dari situ aja udah cukup buat bikin sesuatu mulai tumbuh tanpa aku sadarin.</p>`,
    decorationType: 'flowers',
    accentColor: '#A8B5A0',
  },
  {
    id: 4,
    chapterId: 1,
    type: 'narrative',
    content: `<p>Komunikasinya on-off. Ada minggu-minggu di mana kita ngobrol tiap hari, ada juga minggu-minggu di mana gak ada kabar sama sekali. Gak ada yang maksa, gak ada yang nuntut. Jalan aja gitu.</p>

<p>Tapi momen-momen kecil itu yang ternyata numpuk. Cara dia ngomong, cara dia ketawa di voice chat, hal-hal yang dia ceritain. Aku gak ada rencana buat suka. Tapi perasaan itu datang sendiri, pelan-pelan, tanpa ijin.</p>`,
    quoteText: '"dari awal pas kenal dia awal-awal tu aku gak ada ngarah kesana. tapi aku akhirnya jatuh juga karna sering sama dia."',
    decorationType: 'flowers',
    accentColor: '#A8B5A0',
  },

  // ===== CHAPTER 2: "ada rasa, tapi aku tahan" =====
  {
    id: 5,
    chapterId: 2,
    type: 'chapter-title',
    chapterNumber: 'chapter two',
    title: 'ada rasa, tapi aku tahan',
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },
  {
    id: 6,
    chapterId: 2,
    type: 'narrative',
    content: `<p>Perasaan itu udah ada. Aku sadar. Tiap kali main bareng, tiap kali ngobrol, aku tahu ini lebih dari sekedar teman biasa di game. Tapi aku tahan.</p>

<p>Bukan karena gak serius. Justru karena terlalu serius. Waktu itu aku masih punya sisa dari yang sebelumnya. Masih ada yang belum beres di dalam. Dan aku takut kalau aku bawa semua itu ke sesuatu yang baru, yang rusak bukan cuma aku — tapi dia juga.</p>`,
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },
  {
    id: 7,
    chapterId: 2,
    type: 'narrative',
    content: `<p>Jadi aku putuskan buat nunggu dulu. Sembuh dulu. Beresin urusan di dalam dulu, baru berani ngajak orang lain masuk.</p>

<p>Di luar, semuanya tetap jalan biasa. Kita tetap main Roblox bareng, tetap ngobrol kayak biasa. Gak ada yang tahu apa yang lagi aku simpan. Gak ada yang tahu kalau tiap selesai main, aku diam dan mikir — kapan aku bisa bilang.</p>`,
    quoteText: '"aku disitu mikir kayak aku masih baru dan takut relapse. jadinya disitu aku ke meiy kaya ada rasa tapi aku gak jadiiin dulu nunggu aku sembuh."',
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },
  {
    id: 8,
    chapterId: 2,
    type: 'narrative',
    content: `<p>Dan yang penting — ini bukan pengalihan. Bukan cari yang baru biar lupa yang lama. Perasaan ini tumbuh sendiri dari waktu yang kita habiskan bareng, dari hal-hal kecil yang gak bisa aku kontrol.</p>

<p>Cuma waktunya aja yang salah. Aku datang dengan kondisi yang belum siap ke seseorang yang harusnya dapat yang terbaik.</p>`,
    quoteText: '"emang gak ada niatan buat pengalihan doang. emang aku beneran suka. cuman waktunya aja yang salah."',
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },

  // ===== CHAPTER 3: "satu keputusan yang buru-buru" =====
  {
    id: 9,
    chapterId: 3,
    type: 'chapter-title',
    chapterNumber: 'chapter three',
    title: 'satu keputusan yang buru-buru',
    decorationType: 'stars',
    accentColor: '#D4B896',
  },
  {
    id: 10,
    chapterId: 3,
    type: 'narrative',
    content: `<p>Semua rencana sabar itu buyar di satu momen.</p>

<p>Ada orang lain yang mulai deketin Meiy. Dan aku yang harusnya lagi fokus beresin diri sendiri, tiba-tiba panik. Pikiran cuma satu: kalau aku gak bilang sekarang, nanti keburu diambil orang.</p>

<p>Ego jalan lebih cepat dari logika. Semua rencana "tunggu sampai siap" langsung hilang.</p>`,
    decorationType: 'stars',
    accentColor: '#D4B896',
  },
  {
    id: 11,
    chapterId: 3,
    type: 'narrative',
    content: `<p>Aku langsung gas. Padahal belum waktunya.</p>

<p>Keputusan itu bukan keberanian. Itu cemburu. Takut kehilangan sebelum sempat ngomong apapun. Dan di momen itu, aku cuma mikir soal aku sendiri — soal aku yang gak mau kalah duluan. Itu egois. Dan aku sadar itu sekarang.</p>`,
    quoteText: '"aku ketrigger sama temennya dia yang kayak suka ama dia, jadi aku takut, aku telat/keburu didapetin orang itu."',
    decorationType: 'stars',
    accentColor: '#D4B896',
  },
  {
    id: 12,
    chapterId: 3,
    type: 'quote',
    quoteText: '"itu disitu egoku keburu kena gak mikir karna rasa cemburu itu."',
    decorationType: 'stars',
    accentColor: '#D4B896',
    content: `<p>Kalau bisa balik, aku mau bilang ke diri sendiri waktu itu: sabar. Kamu belum siap. Dan dia layak dapat kamu yang udah siap, bukan kamu yang setengah jadi.</p>

<p>Tapi waktu gak bisa diulang. Yang bisa dilakuin cuma jujur soal apa yang terjadi.</p>`,
  },

  // ===== CHAPTER 4: "niatnya bukan itu" =====
  {
    id: 13,
    chapterId: 4,
    type: 'chapter-title',
    chapterNumber: 'chapter four',
    title: 'niatnya bukan itu',
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },
  {
    id: 14,
    chapterId: 4,
    type: 'narrative',
    content: `<p>Ini bagian yang paling susah buat dijelasin.</p>

<p>Waktu aku mutusin buat "lepas dulu" — itu bukan niat buat ninggalin. Bukan buang. Itu keputusan yang aku ambil karena aku pikir itu yang paling bener: jangan libatin seseorang dalam proses yang belum selesai.</p>

<p>Niatnya: sembuh dulu, beres dulu, baru balik. Biar waktu balik, aku datang dengan kondisi yang layak.</p>`,
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },
  {
    id: 15,
    chapterId: 4,
    type: 'narrative',
    content: `<p>Tapi niat baik gak selalu berarti hasilnya baik.</p>

<p>Yang aku gak sadar waktu itu — dari sisi orang yang ada di seberang, yang mereka rasain bukan "dia lagi proses." Yang mereka rasain itu: ditinggal. Digantung. Dan aku gak bisa bilang mereka salah, karena dari luar memang itu yang keliatan.</p>`,
    quoteText: '"niatnya aku emang gak mau ngelibatin dia, for kesembuhan dari orang lama itu. cuman caranya mungkin salah. bukan mungkin sih. emang salah."',
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },
  {
    id: 16,
    chapterId: 4,
    type: 'narrative',
    content: `<p>Ada beda yang tipis tapi penting antara niat dan dampak. Niat bisa baik, tapi dampaknya bisa nyakitin. Dan dua-duanya sama-sama nyata.</p>

<p>Aku gak di sini buat membela diri. Aku cuma mau ngakuin — apapun niatnya, yang sampai ke dia adalah rasa sakit. Dan itu tanggung jawab aku.</p>`,
    quoteText: '"jatohnya itu... jatohnya aku mempermainkan. padahal gak ada samsek niat kesitu."',
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },

  // ===== CHAPTER 5: "aku udah sembuh. tapi telat." =====
  {
    id: 17,
    chapterId: 5,
    type: 'chapter-title',
    chapterNumber: 'chapter five',
    title: 'aku udah sembuh. tapi telat.',
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },
  {
    id: 18,
    chapterId: 5,
    type: 'narrative',
    content: `<p>Aku sembuh. Beneran sembuh. Bukan yang pura-pura, bukan yang setengah-setengah. Ini yang udah fix selesai.</p>

<p>Prosesnya panjang. Berbulan-bulan. Tapi akhirnya sampai juga di titik di mana aku bisa bilang dengan yakin: aku udah bisa.</p>

<p>Tapi begitu aku balik, pintunya udah tertutup.</p>`,
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },
  {
    id: 19,
    chapterId: 5,
    type: 'narrative',
    content: `<p>Meiy bilang — dan ini yang sampe sekarang masih nempel: dia gak punya keharusan buat tetap punya hubungan sama aku. Mau balikan, mau sekedar temenan, dia gak punya kewajiban itu.</p>

<p>Dan dia bener. Seratus persen bener. Dia gak berhutang apapun ke aku. Semua yang terjadi adalah konsekuensi dari keputusan yang aku ambil sendiri.</p>

<p>Tapi ngerti bukan berarti gak sakit.</p>`,
    quoteText: '"aku udah benar-benar sembuh dari yang lama itu. ini bener-bener yang udah fix sembuh, gak kya dulu. cuman aku telat."',
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },
  {
    id: 20,
    chapterId: 5,
    type: 'narrative',
    content: `<p>Komunikasi pelan-pelan berhenti. Bukan dengan pertengkaran besar. Lebih kayak volume yang dikecilkan pelan-pelan sampai akhirnya hening.</p>

<p>Dulu aku yang proses move on dari yang lama. Sekarang justru aku yang gak bisa move on dari Meiy. Terlalu banyak rasa bersalah, terlalu banyak penyesalan.</p>`,
    quoteText: '"pada akhirnya sekarang aku yang gak bisa sembuh dari meiy. too much perasaan rasa bersalah. dan juga penyesalan."',
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },

  // ===== CHAPTER 6: "dari sudut pandang yang lain" =====
  {
    id: 21,
    chapterId: 6,
    type: 'chapter-title',
    chapterNumber: 'chapter six',
    title: 'dari sudut pandang yang lain',
    decorationType: 'journal',
    accentColor: '#D4B896',
    isJournal: true,
  },
  {
    id: 22,
    chapterId: 6,
    type: 'narrative',
    content: `<p><em>[ catatan dari seorang teman ]</em></p>

<p>Aku kenal mereka berdua. Aku liat dari luar apa yang terjadi — dan ada hal-hal yang gak keliatan dari dalam.</p>

<p>Aku gak bela siapa-siapa. Tapi satu hal yang perlu dibilang: kalau emang kamu ngerasa gak okay sama perasaan kamu ketika lagi komitmen sama seseorang, kasih kepastian. Jangan digantung.</p>

<p>Karena digantung tanpa sadar itu yang paling nyakitin. Lebih dari ditolak langsung.</p>`,
    decorationType: 'journal',
    accentColor: '#D4B896',
    isJournal: true,
  },
  {
    id: 23,
    chapterId: 6,
    type: 'narrative',
    content: `<p>Perasaan Meiy itu nyata. Lukanya perlu dihormati. Dan kalau emang mau, tunjukkin — bukan dengan kata-kata, tapi dengan konsistensi.</p>

<p>Dia tuh yang sampe nanya — <em>"mereka tuh deket banget ya?"</em> — aku gak tau maksudnya apa. Tapi aku takut kalau semisal dia mau buka hati lagi, tapi kamu gak nunjukkin perubahan, dia malah mundur lagi.</p>`,
    quoteText: '"aku ga dukung siapa siapa dan ga ada bias untuk ngebela kalian berdua. as a friend aku berharap km lebih liatin kesungguh-sungguhan km ke dia."',
    decorationType: 'journal',
    accentColor: '#D4B896',
    isJournal: true,
  },

  // ===== CHAPTER 7: "somebody new" =====
  {
    id: 24,
    chapterId: 7,
    type: 'chapter-title',
    chapterNumber: 'chapter seven',
    title: 'somebody new',
    decorationType: 'dual-stars',
    accentColor: '#3D4A5C',
  },
  {
    id: 25,
    chapterId: 7,
    type: 'narrative',
    content: `<p>Ada satu pertanyaan yang gak bisa berhenti muter di kepala.</p>

<p>Apakah kamu udah punya somebody new?</p>

<p>Tiap kali buka HP dan liat story, otak langsung kerja. Repost-repost kecil — "just friend," "mr. just friend" — yang mungkin buat kamu gak berarti apa-apa, tapi di kepala aku jadi tanda tanya yang gak ada jawabannya.</p>`,
    decorationType: 'dual-stars',
    accentColor: '#3D4A5C',
  },
  {
    id: 26,
    chapterId: 7,
    type: 'narrative',
    content: `<p>Mungkin itu bukan apa-apa. Mungkin itu sesuatu. Dan gak tahu itu yang justru paling susah — karena kalau tahu, setidaknya bisa mulai proses. Tapi selama masih gak tahu, stuck aja di antara harapan dan kenyataan.</p>

<p>Dari situ sebuah lagu lahir. Bukan sebagai tuduhan atau amarah. Tapi sebagai pertanyaan yang gak tahu harus ditujukan ke siapa — jadi dialihkan ke sebuah lagu.</p>`,
    quoteText: '"jujur aku gak tau lagi jikalau kamu bener-bener sudah menyukai orang lain. aku bingung."',
    decorationType: 'dual-stars',
    accentColor: '#3D4A5C',
  },

  // ===== CHAPTER 8: "lagu yang tidak pernah rilis: somebody new" =====
  {
    id: 27,
    chapterId: 8,
    type: 'chapter-title',
    chapterNumber: 'chapter eight',
    title: 'lagu yang tidak pernah rilis',
    decorationType: 'music-notes',
    accentColor: '#B8B0CC',
  },
  {
    id: 28,
    chapterId: 8,
    type: 'narrative',
    content: `<p>This song was actually supposed to drop on your birth month. But there were just one or two things that came up, so it ended up not happening. I guess it's gonna stay unreleased forever now. But honestly, it's still my favorite song. I listen to it all the time, just like how I'm always here waiting for you every single day.</p>

<p>Sometimes I just stare at my phone, typing out long messages that I end up deleting because I'm too scared of annoying you.</p>`,
    decorationType: 'music-notes',
    accentColor: '#B8B0CC',
  },
  {
    id: 29,
    chapterId: 8,
    type: 'narrative',
    content: `<p>Thank you for forgetting me every day. Thank you for never replying to me. And even if it sounds crazy — thank you for being the only reason I still stay motivated.</p>

<p>Ini lagunya. Baca pelan-pelan.</p>`,
    decorationType: 'music-notes',
    accentColor: '#B8B0CC',
  },
  {
    id: 30,
    chapterId: 8,
    type: 'lyrics',
    title: 'Somebody New',
    lyrics: [
      'I tried to fix everything, but you stay silent.',
      'on me, on me.',
      'I told you come find me, but you never even see me.',
      '',
      'My friends are tired of me hearing you in every story.',
      'They say just let you be, but it\'s not that easy for me.',
      '',
      'Everything for you.',
      'Nothing I won\'t do.',
      'A thousand songs about you.',
      'I don\'t know what to do.',
      'My mind is stuck on you.',
      '',
      'If there\'s somebody new, just tell me it\'s true.',
      'I thought these words could make you stay,',
      'but silence took you away.',
      '',
      'I made a place for you,',
      'everywhere was about you,',
      'I hope you feel it too.',
      'I don\'t know how to move,',
      'still stuck in the loop.',
      'Don\'t know what I should do.',
      '',
      'I hope you find me.',
      'I hope you come back to me.',
      'I hope, I hope, I hope.',
      '',
      'They say just let you be,',
      'but it\'s not that easy for me.',
      '',
      'Everything for you.',
      'Nothing I won\'t do.',
      'A thousand songs just for you.',
    ],
    decorationType: 'music-notes',
    accentColor: '#B8B0CC',
  },

  // ===== CHAPTER 9: "kalau beneran ditanya" =====
  {
    id: 31,
    chapterId: 9,
    type: 'chapter-title',
    chapterNumber: 'chapter nine',
    title: 'kalau beneran ditanya',
    decorationType: 'single-flower',
    accentColor: '#C4A0A0',
  },
  {
    id: 32,
    chapterId: 9,
    type: 'narrative',
    content: `<p>Ini bukan resolusi. Bukan happy ending, bukan juga tragic ending. Cuma kejujuran yang tersisa.</p>

<p>Setelah semua yang terjadi — semua kesalahan, semua waktu yang salah, semua keputusan yang terburu-buru — kalau ditanya beneran, aku sayang. Beneran sayang.</p>

<p>Bukan sayang yang cuma di mulut. Yang tumbuh dari hal-hal kecil dan bertahan meskipun gak ada balasan.</p>`,
    decorationType: 'single-flower',
    accentColor: '#C4A0A0',
  },
  {
    id: 33,
    chapterId: 9,
    type: 'narrative',
    content: `<p>Dulu memang ada masalahnya. Ada luka lama yang belum sembuh, ada yang masih dibawa-bawa. Dan itu bikin aku gak bisa kasih yang terbaik.</p>

<p>Tapi sekarang yang bisa aku lakuin cuma terus coba jadi lebih baik. Bukan karena ada jaminan apapun di ujung sana. Tapi karena itu satu-satunya hal yang masih bisa aku lakuin.</p>`,
    quoteText: '"i just kept trying harder, fixing my own flaws, and doing better next time."',
    decorationType: 'single-flower',
    accentColor: '#C4A0A0',
  },

  // ===== PENUTUP =====
  {
    id: 34,
    chapterId: 10,
    type: 'closing',
    content: 'kamu gak harus membalas apapun.\naku cuma mau kamu tahu.',
    quoteAuthor: '— Al',
    decorationType: 'none',
    accentColor: '#C4A0A0',
  },
  {
    id: 35,
    chapterId: 10,
    type: 'blank-left',
    decorationType: 'none',
    accentColor: '#C4A0A0',
  },
];

export const chapterNames: Record<number, string> = {
  0: 'Cover',
  1: 'dari awal',
  2: 'ada rasa, tapi aku tahan',
  3: 'satu keputusan yang buru-buru',
  4: 'niatnya bukan itu',
  5: 'aku udah sembuh. tapi telat.',
  6: 'dari sudut pandang yang lain',
  7: 'somebody new',
  8: 'lagu yang tidak pernah rilis',
  9: 'kalau beneran ditanya',
  10: 'Penutup',
};
