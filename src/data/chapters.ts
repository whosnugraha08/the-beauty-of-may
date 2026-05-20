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
    content: `<p>Gak ada yang spesial dari cara kita kenal. Serius. Gak ada momen dramatis, gak ada "mata ketemu mata terus dunia berhenti berputar" — enggak. Semuanya biasa aja.</p>

<p>Sering ketemu. Kadang ngobrol, kadang nggak. Kadang cuma senyum lewat, kadang malah pura-pura gak liat. Hubungannya on-off banget — bukan dalam artian pacaran, tapi dalam artian... ada hari-hari di mana kita ngobrol seru, terus ada minggu-minggu di mana kita kayak orang asing lagi.</p>

<p>Tapi di balik semua yang "biasa" itu, ada sesuatu yang diam-diam menumpuk. Kayak tumpukan buku di meja yang awalnya satu-dua, terus tiba-tiba udah setinggi kepala. Gak sadar kapan mulainya.</p>`,
    decorationType: 'flowers',
    accentColor: '#A8B5A0',
  },
  {
    id: 4,
    chapterId: 1,
    type: 'narrative',
    content: `<p>Momen-momen kecil itu yang ternyata bahaya. Bukan yang besar-besar. Bukan grand gesture. Tapi hal-hal kayak — cara dia ketawa, cara dia cerita sesuatu yang dia suka, cara dia diam tapi tetap ada.</p>

<p>Dan aku? Aku gak punya rencana buat jatuh. Sama sekali nggak. Tapi perasaan itu datang sendiri. Pelan-pelan. Tanpa ijin. Tanpa pemberitahuan. Kayak hujan yang dateng pas gak bawa payung — mau gimana lagi.</p>`,
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
    content: `<p>Perasaan itu udah ada. Jelas ada. Aku gak bisa bohong soal itu. Setiap kali ketemu, setiap kali ngobrol, setiap kali dia cerita apapun — aku tahu aku suka. Bukan suka yang ringan. Suka yang berat. Yang bikin mikir malem-malem.</p>

<p>Tapi aku tahan.</p>

<p>Bukan karena gak serius. Justru sebaliknya — karena terlalu serius. Aku tahu kondisi aku waktu itu. Aku masih bawa luka dari yang sebelumnya. Masih ada sisa-sisa yang belum beres. Dan aku takut. Takut banget. Takut kalau aku masuk ke sesuatu yang baru dengan membawa semua bagasi lama itu, yang rusak bukan cuma aku — tapi dia juga.</p>`,
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },
  {
    id: 7,
    chapterId: 2,
    type: 'narrative',
    content: `<p>Jadi aku bikin keputusan: nunggu dulu. Sembuh dulu. Beres-beres dulu di dalam, baru berani ngajak orang lain masuk.</p>

<p>Dan di luar? Semuanya tetap jalan biasa. Kita tetap teman. Kadang main, kadang ngobrol, kadang ketemu di satu tempat yang sama. Gak ada yang tahu apa yang sedang aku simpan di dalam. Gak ada yang tahu kalau setiap kali pulang dari ketemu dia, aku duduk diam dan mikir — <em>"kapan ya aku bisa bilang?"</em></p>

<p>Hidupnya paralel. Di luar, aku normal. Di dalam, ada perang kecil yang gak pernah kelar.</p>`,
    quoteText: '"aku disitu mikir kayak aku masih baru dan takut relapse. jadinya disitu aku ke meiy kaya ada rasa tapi aku gak jadiiin dulu nunggu aku sembuh."',
    decorationType: 'clock',
    accentColor: '#B8B0CC',
  },
  {
    id: 8,
    chapterId: 2,
    type: 'narrative',
    content: `<p>Dan yang paling penting — ini bukan soal pengalihan. Bukan distraksi. Bukan "cari yang baru biar lupa yang lama." Enggak. Perasaan ini genuine. Nyata. Tumbuh sendiri dari momen-momen kecil yang gak bisa aku kontrol.</p>

<p>Cuma... waktunya aja yang salah. Aku datang dengan hati yang belum utuh ke seseorang yang layak dapat yang utuh.</p>`,
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

<p>Ada seseorang yang kayaknya mulai deketin Meiy. Dan aku — yang harusnya lagi fokus buat beresin diri sendiri — tiba-tiba panik. Bukan panik yang logis. Panik yang irasional. Yang bikin pikiran cuma satu: <em>"kalau aku gak gerak sekarang, aku bakal kehilangan dia sebelum sempat bilang apapun."</em></p>

<p>Dan ego itu... ego itu bicara duluan. Lebih cepat dari logika, lebih cepat dari rencana, lebih cepat dari semua janji ke diri sendiri soal "tunggu sampai siap."</p>`,
    decorationType: 'stars',
    accentColor: '#D4B896',
  },
  {
    id: 11,
    chapterId: 3,
    type: 'narrative',
    content: `<p>Gas. Langsung. Padahal belum waktunya.</p>

<p>Aku gak mau bohong di sini. Keputusan itu bukan keberanian. Itu cemburu. Murni cemburu. Rasa takut "kalah duluan" yang ngalahin semua pertimbangan matang yang udah aku bangun berbulan-bulan.</p>

<p>Dan di momen itu, aku gak mikir soal dia. Aku cuma mikir soal aku. Soal aku yang gak mau kehilangan. Itu egois. Dan aku tahu itu sekarang.</p>`,
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
    content: `<p>Kalau aja aku bisa balik dan bilang ke diriku sendiri waktu itu: <em>"sabar. kamu belum siap. dan dia layak dapat kamu yang udah siap, bukan kamu yang setengah jadi."</em></p>

<p>Tapi waktu gak bisa diputar balik. Yang bisa dilakukan cuma jujur soal apa yang terjadi. Dan ini yang terjadi — satu keputusan impulsif yang mengubah segalanya.</p>`,
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
    content: `<p>Ini chapter yang paling susah buat ditulis. Karena di sini aku harus menjelaskan sesuatu yang bahkan aku sendiri butuh waktu lama untuk bisa lihat dengan jelas.</p>

<p>Waktu aku memutuskan untuk "lepas dulu" — itu bukan menghilang. Bukan membuang. Bukan lupa. Itu adalah keputusan yang aku ambil karena aku pikir itu yang paling benar pada saat itu — tidak melibatkan seseorang dalam proses yang belum selesai.</p>

<p>Niatnya sederhana: aku mau sembuh dulu, beres dulu, baru balik. Biar waktu aku balik, aku datang dengan keadaan yang utuh. Yang layak. Yang gak setengah-setengah.</p>`,
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },
  {
    id: 15,
    chapterId: 4,
    type: 'narrative',
    content: `<p>Tapi niat baik gak selalu berarti eksekusi yang baik.</p>

<p>Yang aku gak sadar waktu itu — atau mungkin gak mau sadar — adalah bahwa dari sudut pandang orang yang ada di sisi seberang, yang mereka rasakan bukan "oh dia lagi proses, sabar ya." Yang mereka rasakan adalah: ditinggal. Digantung. Dipermainkan.</p>

<p>Dan aku gak bisa bilang mereka salah. Karena memang... dari luar, itu yang keliatan. Dari luar, itu yang terasa.</p>`,
    quoteText: '"niatnya aku emang gak mau ngelibatin dia, for kesembuhan dari orang lama itu. cuman caranya mungkin salah. bukan mungkin sih. emang salah."',
    decorationType: 'paths',
    accentColor: '#A8B5A0',
  },
  {
    id: 16,
    chapterId: 4,
    type: 'narrative',
    content: `<p>Ada perbedaan yang sangat tipis tapi sangat penting antara "niat" dan "dampak." Niat bisa baik. Tapi dampaknya bisa menghancurkan. Dan keduanya sama-sama nyata. Keduanya sama-sama valid.</p>

<p>Aku gak di sini untuk membela diri. Aku di sini untuk mengakui — bahwa apapun niatku, yang sampai ke dia adalah rasa sakit. Dan itu tanggung jawabku.</p>`,
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
    content: `<p>Ini momen yang paling menyesakkan dalam seluruh cerita ini.</p>

<p>Aku sembuh. Beneran sembuh. Bukan yang pura-pura, bukan yang "udah gak mikirin lagi padahal masih stalking." Bukan. Ini yang fix. Yang beres. Yang udah ditutup rapat-rapat dan dikunci.</p>

<p>Proses itu panjang. Berbulan-bulan. Ada hari-hari yang berat banget, ada malam-malam yang gak selesai-selesai. Tapi akhirnya sampai juga. Aku sampai di titik di mana aku bisa bilang, dengan jujur, dengan yakin: <em>"aku udah bisa."</em></p>

<p>Tapi begitu aku balik... pintunya udah tertutup.</p>`,
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },
  {
    id: 19,
    chapterId: 5,
    type: 'narrative',
    content: `<p>Meiy bilang — dan ini kata-kata yang sampe sekarang masih nempel di kepala: <em>"dia gak punya keharusan buat tetap punya hubungan sama aku, either balikan atau sekedar temenan."</em></p>

<p>Dan aku kayak... anjir.</p>

<p>Bukan marah. Bukan kesel. Lebih ke — shock. Karena aku ngerti dia bener. Seratus persen bener. Dia gak punya keharusan. Dia gak berhutang apapun ke aku. Semua yang terjadi adalah konsekuensi dari keputusan-keputusan yang aku ambil sendiri.</p>

<p>Tapi ngerti gak berarti gak sakit.</p>`,
    quoteText: '"aku udah benar-benar sembuh dari yang lama itu. ini bener-bener yang udah fix sembuh, gak kya dulu. cuman aku telat."',
    decorationType: 'door',
    accentColor: '#C4A0A0',
  },
  {
    id: 20,
    chapterId: 5,
    type: 'narrative',
    content: `<p>Dan kemudian komunikasi berhenti. Pelan-pelan. Bukan dengan pertengkaran besar atau goodbye yang dramatis. Lebih kayak volume yang di-kecilkan pelan-pelan sampai akhirnya... hening.</p>

<p>Ironinya? Dulu aku yang proses move on dari yang lama. Sekarang justru aku yang gak bisa move on dari Meiy. Terlalu banyak perasaan. Terlalu banyak rasa bersalah. Dan terlalu banyak penyesalan.</p>

<p>Waktu yang salah. Keputusan yang salah. Dan sekarang aku yang harus hidup sama semua konsekuensinya.</p>`,
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

<p>Aku kenal mereka berdua. Aku lihat dari luar apa yang terjadi — dan ada hal-hal yang gak keliatan dari dalam. Hal-hal yang cuma bisa dilihat kalau kamu berdiri di pinggir dan memperhatikan.</p>

<p>Aku gak bela siapa-siapa. Gak ada bias. Tapi ada satu hal yang perlu dibilang: kalau memang kamu ngerasa gak okay sama perasaan kamu ketika lagi komitmen sama seseorang — kasih kepastian. Jangan digantung.</p>

<p>Karena menggantung tanpa sadar itu yang paling menyakitkan. Lebih dari ditolak, lebih dari diputusin terang-terangan. Ketidakpastian itu yang bikin orang rusak pelan-pelan.</p>`,
    decorationType: 'journal',
    accentColor: '#D4B896',
    isJournal: true,
  },
  {
    id: 23,
    chapterId: 6,
    type: 'narrative',
    content: `<p>Perasaan Meiy itu nyata. Lukanya perlu dihormati. Dan kalau memang mau, tunjukkanlah — bukan dengan kata-kata, tapi dengan konsistensi. Bukan dengan janji besar, tapi dengan hal-hal kecil yang gak berhenti.</p>

<p>Dia tuh yang sampai nanya — <em>"mereka tuh deket banget ya?"</em> — aku gatau maksudnya apa. Tapi aku takut. Takut kalau semisal dia mau buka hati lagi, tapi kamu gak nunjukkin perubahan, dia malah mundur lagi. Dan kali ini... mungkin untuk selamanya.</p>`,
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

<p><em>Apakah kamu sudah punya somebody new?</em></p>

<p>Bukan pertanyaan yang mudah untuk diakui — bahwa aku masih mikirin ini. Bahwa setiap kali buka HP dan lihat story, otak langsung bekerja. Menarik kesimpulan, bikin skenario, overthinking sampai gak selesai-selesai.</p>

<p>Repost-repost kecil yang mungkin buat kamu gak berarti apa-apa — "just friend," "mr. just friend" — tapi di kepala aku, semua itu jadi tanda tanya besar yang gak ada jawabannya.</p>`,
    decorationType: 'dual-stars',
    accentColor: '#3D4A5C',
  },
  {
    id: 26,
    chapterId: 7,
    type: 'narrative',
    content: `<p>Mungkin itu bukan apa-apa. Mungkin itu sesuatu. Dan ketidaktahuan itu — ironinya — justru yang paling menyiksa. Karena kalau aku tahu, setidaknya aku bisa mulai proses. Tapi selama masih gak tahu, aku stuck. Di antara harapan dan kenyataan yang gak jelas bentuknya.</p>

<p>Dari kebingungan itulah sebuah lagu lahir. Bukan sebagai tuduhan. Bukan sebagai amarah. Bukan sebagai usaha buat bikin kamu ngerasa bersalah. Tapi sebagai pertanyaan. Pertanyaan yang gak tahu harus dialamatkan ke siapa — jadi dialihkan ke sebuah lagu.</p>`,
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

<p>Sometimes I just stare at my phone, typing out long messages that I end up deleting because I'm too scared of annoying you. Too scared of pushing you further away than you already are.</p>

<p>It's funny — I wrote a whole song about how I feel, but I can't even send you a simple text.</p>`,
    decorationType: 'music-notes',
    accentColor: '#B8B0CC',
  },
  {
    id: 29,
    chapterId: 8,
    type: 'narrative',
    content: `<p>Thank you for forgetting me every day. Thank you for never replying to me. And even if it sounds crazy — thank you for being the only reason I still stay motivated.</p>

<p>Karena entah kenapa, bahkan di hari-hari di mana kamu gak ada kabar, gak ada reply, gak ada tanda-tanda bahwa aku masih exist di dunia kamu — aku tetap bangun pagi dan coba jadi lebih baik. Buat siapa? Aku gak tahu lagi. Mungkin buat kamu. Mungkin buat diriku sendiri. Mungkin buat kemungkinan yang aku tahu makin kecil setiap harinya.</p>

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
    content: `<p>Ini bukan resolusi. Bukan happy ending. Bukan juga tragic ending. Ini cuma... kejujuran yang tersisa.</p>

<p>Setelah semua yang terjadi — semua kesalahan, semua waktu yang salah, semua keputusan yang terburu-buru, semua kata-kata yang gak terkirim — kalau ditanya beneran...</p>

<p>Aku sayang banget. Beneran sayang. Bukan sayang yang performatif, bukan sayang yang cuma di mulut, bukan sayang yang datang pas butuh doang. Sayang yang genuine. Yang tumbuh dari hal-hal kecil. Yang bertahan meskipun gak ada balasan.</p>`,
    decorationType: 'single-flower',
    accentColor: '#C4A0A0',
  },
  {
    id: 33,
    chapterId: 9,
    type: 'narrative',
    content: `<p>Dulu memang ada penyakitnya. Ada luka lama yang belum sembuh, ada bagasi yang masih dibawa-bawa. Dan semua itu bikin aku gak bisa kasih yang terbaik ke orang yang layak dapatkan yang terbaik.</p>

<p>Tapi sekarang? Sekarang aku cuma bisa terus mencoba. Memperbaiki diri. Fixing my own flaws. Doing better next time. Bukan karena ada jaminan apapun di ujung sana. Tapi karena itu satu-satunya hal yang masih bisa aku lakukan.</p>

<p>Dan kalau suatu hari nanti jalannya ketemu lagi — aku mau datang dengan keadaan yang layak. Bukan yang setengah jadi. Bukan yang masih bawa sisa-sisa kemarin.</p>`,
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
