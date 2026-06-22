// src/data/news.jsx
import React from 'react'; // JSXを使うためにこの1行が必須です！

export const newsData = [
  {
    id: '1',
    date: '2024.05.20',
    title: 'moNa 2+ の販売を開始しました',
    category: 'Product',
    content: (
      <div className="space-y-4">
        <p>大変お待たせいたしました。</p>
        <p>フラッグシップモデル「moNa 2+」の販売を公式ストアにて開始いたしました。</p>
        <p>真鍮ウェイトによる極上の打鍵感と、ワイヤレスの快適さをぜひご体感ください。</p>
        <p>初回生産分は数量限定となりますので、お早めにご確認をお願いいたします。</p>
      </div>
    )
  },
  {
    id: '2',
    date: '2024.04.15',
    title: '技術書典16 に出展します',
    category: 'Event',
    content: (
      <div className="space-y-4">
        <p>5月26日(日)に開催される「技術書典16」にmoNa Projectとして出展いたします。</p>
        <p>当日は実機に触れられる展示スペースもご用意しております。</p>
        <p>
          ブース番号等は追って
          {/* ↓ リンク（aタグ）を使った例 ↓ */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-emerald-600 font-bold hover:underline">
            公式Twitter
          </a>
          にて告知いたしますので、ぜひ遊びに来てください！
        </p>
      </div>
    )
  },
  {
    id: '3',
    date: '2024.03.01',
    title: 'Webサイトをリニューアルしました',
    category: 'Info',
    content: (
      <div className="space-y-4">
        <p>moNa Projectの公式Webサイトを全面リニューアルいたしました。</p>
        <p>より見やすく、各プロダクトの魅力が伝わるデザインへと刷新しています。</p>
        <p>合わせてUser GuideやKeymap Editorなどのサポート機能もアップデートしておりますので、ぜひご活用ください。</p>
      </div>
    )
  },
  {
    id: '4',
    date: '2024.05.26',
    title: 'イベントの写真',
    category: 'Event',
    content: (
      <div>
        <p>当日の様子です！</p>
        {/* ② src={ } の中に、画像リンクを入れる*/}
        <img src={'../assets/images/news/event-photo.png'} alt="イベントの様子" className="rounded-2xl w-full" />
      </div>
    )
  },
  {
    id: '5',
    date: '2024.04.15',
    title: '技術書典16 に出展します',
    category: 'Event',
    content: (
      <div className="space-y-4">
        <p>5月26日(日)に開催される「技術書典16」にmoNa Projectとして出展いたします。</p>
        <p>当日は実機に触れられる展示スペースもご用意しております。</p>
        <p>ブース番号等は追って公式Twitterにて告知いたしますので、ぜひ遊びに来てください！</p>
      </div>
    )
  },
];