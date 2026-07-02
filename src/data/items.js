export const navLinks = [
  { name: 'News', href: '#news', isPage: false },
  { name: 'Works', href: '#work', isPage: false },
  { name: 'Gallery', href: '#gallery', isPage: false },
  { name: 'Support&Guide', href: '#guide', isPage: false },
  { name: 'Keymap Editor', viewTarget: 'keymap', isPage: true },
  { name: 'Member', href: '#member', isPage: false },
];

export const mainWorks = [
  {
      id: '01',
      name: 'moNa',
      description: '原点でありプロジェクト始まりのキーボード。左手側にトラックボールを搭載。',
      tags: ['42Key', 'Split', 'Wireless', 'TrackBall(Left)'],
      image: 'src/assets/images/common/moNa.png',
      animClass: 'reveal-right',
      targetView: 'moNa'
  },
  {
      id: '02',
      name: 'moNa 2',
      description: 'より多くの人が使いやすい右手トラックボール。水平エンコーダも搭載しており一台でキーボードとマウス両方の役割を果たします。',
      tags: ['42Key', 'Split', 'Wireless', 'TrackBall(Right)'],
      image: 'src/assets/images/common/moNa2.png',
      animClass: 'reveal-left',
      targetView: 'moNa2'
  },
  {
      id: '03',
      name: 'moNa 2+',
      description: 'キー数とエンコーダの増えたmoNa2の拡張版。より幅広いキーマップの設定が可能に。',
      tags: ['48Key', 'Split', 'Wireless', 'TrackBall(Right)'],
      image: 'src/assets/images/common/moNa2plus.png',
      animClass: 'reveal-right',
      targetView: 'moNa2plus'
  },
];

export const accessories = [
  { name: 'Keycaps moNa標準キーキャップ', price: '¥4,500~', image: 'src/assets/images/home/Accessories/mona_keycaps.png' ,url:'https://sayuworks.stores.jp/items/692e4fb02200bb41580c08b6'},
  { name: 'Keycaps Kotori-Shimaenaga', price: '¥7,500~', image: 'src/assets/images/home/Accessories/kotori-shimaenaga.png', url:'https://kotori-kcp.booth.pm/items/7468940' },
  { name: 'Keycaps Kotiri-Blank', price: '¥4,500~', image: 'src/assets/images/home/Accessories/kotori-blank.png', url:'https://booth.pm/ja/items/6781056' },
  { name: 'Keycaps RidgeCap', price: '¥5,000~', image: 'src/assets/images/home/Accessories/ridgecap.png', url:'https://arailab.booth.pm/items/8159022' },
  { name: 'Keycaps NarrowCap 17', price: '¥5,500~', image: 'src/assets/images/home/Accessories/narrowcap17.png', url:'https://booth.pm/ja/items/7406191' },
  { name: 'Attachment COROPIT', price: '¥4,000~', image: 'src/assets/images/home/Accessories/coropit.png', url:'https://booth.pm/ja/items/6830658' },
  { name: 'Attachment 19mm変換キット', price: '¥5,000~', image: 'src/assets/images/home/Accessories/19mm-henkan.png', url:'https://sayuworks.stores.jp/items/68fb9bd112e4fd7301bcabab' }
];

// src/data/items.js の members 部分を以下のように修正します

export const members = [
  {
      name: '白湯_sayu',
      role: 'Develop',
      bio: '回路設計とコードを担当。見えない部分の美学を追求する。笹団子が好き。',
      id: 'sayu',
      // ▼ 追加: 画像URLとSNSリンクを設定
      image: 'src/assets/images/home/members/sayu_icon.png', 
      twitter: 'https://x.com/Pooh_pol0',
      note: 'https://note.com/pooh_polo' // ← instagram を note に変更
  },
  {
      name: 'Shakupan',
      role: 'Develop & Sell',
      bio: '筐体デザインと意匠を担当。手に触れる素材感にこだわる。パンダグッズ収集家。',
      id: 'shakupan',
      // ▼ 追加: 画像がない場合は空文字('')にしておくと、自動でパンダになります
      image: 'src/assets/images/home/members/shakupan_icon.png', 
      twitter: 'https://x.com/shakupan_',
      note: 'https://note.com/shakupan' // ← instagram を note に変更
  },
];

export const tweetUrls = [
  "https://x.com/shakupan_/status/2053339018939810298?s=20",
  "https://x.com/shakupan_/status/1979856517454348427?s=20",
  "https://x.com/Pooh_pol0/status/2018878320671387878?s=20",
  "https://x.com/Pooh_pol0/status/1992143194306589016?s=20",
  "https://x.com/puriko69x/status/2071538360267812958?s=20",
  "https://x.com/black_trooper/status/2012839726655705595?s=20",
  "https://x.com/saMe_no_tweet/status/1999026734575005868?s=20",
  "https://x.com/entasis777/status/2016071924624064604?s=20",
  "https://x.com/mozumasu/status/2040025651936473174?s=20",
  "https://x.com/ruitomowoyobu/status/2040762189842350314?s=20",
];