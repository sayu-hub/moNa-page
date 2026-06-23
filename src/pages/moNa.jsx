import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowLeft, ShoppingCart, ChevronRight, Zap, Shield, 
  Settings2, LayoutGrid, Package, Cable, Wrench, FileText,
  PlayCircle, MousePointerClick
} from 'lucide-react';

export default function Mona({ onBack }) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = 4;

  // 修正部分①：画面を開いた最初の1回だけ一番上にスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 修正部分②：カルーセルの制御（画像切り替え時にも一番上に戻らないように分離）
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.clientWidth);
        setActiveIndex(index);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      
      // 自動再生ロジック
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % totalImages;
          if (carouselRef.current) {
            carouselRef.current.scrollTo({
              left: nextIndex * carouselRef.current.clientWidth,
              behavior: 'smooth'
            });
          }
          return nextIndex;
        });
      }, 4000);

      return () => {
        carousel.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
      };
    }
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      title: "堅牢なアクリル積層ボディ",
      description: "マット加工を施した厚みのあるアクリルを幾重にも重ねることで、見た目の美しさと確かな重量感を両立。デスクの上で抜群の安定感を発揮し、タイピング時の微細なズレすら許しません。",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "計算し尽くされた打鍵感",
      description: "内部の空洞を極限まで減らし、打鍵時の不快な反響音を抑える緻密なアコースティック設計。耳に心地よい「コトコト」というフィードバックだけが、あなたの指先に残ります。",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "無限のカスタマイズ性",
      description: "QMK Firmwareを搭載し、VIAおよびRemapに完全対応。専用ソフトをインストールすることなく、ブラウザ上から直感的にキーマップを変更でき、あなただけの最適な配列を構築できます。",
      image: "https://images.unsplash.com/photo-1629236715183-20516fcde321?auto=format&fit=crop&q=80&w=800",
      icon: <Settings2 className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "空間に調和する60%レイアウト",
      description: "必要最小限のキーに絞り込んだコンパクトなフォームファクタ。マウスの可動域を劇的に広げ、不要なものを削ぎ落としたクリーンで洗練されたデスクセットアップを実現します。",
      image: "https://images.unsplash.com/photo-1600456899121-68eda5705257?auto=format&fit=crop&q=80&w=800",
      icon: <LayoutGrid className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32 scroll-smooth">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Home
          </button>
          <div className="font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="text-xl">🐼</span> moNa Project
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 animate-fade-in">
        {/* 商品トップ */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-900/5 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5">
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory h-full w-full"
              >
                <div className="snap-start shrink-0 w-full h-full">
                  <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800" alt="moNa Main" className="w-full h-full object-cover"/>
                </div>
                <div className="snap-start shrink-0 w-full h-full relative">
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">White</span>
                  <img src="https://images.unsplash.com/photo-1515865261546-f94d0e82c5a0?auto=format&fit=crop&q=80&w=800" alt="moNa White" className="w-full h-full object-cover"/>
                </div>
                <div className="snap-start shrink-0 w-full h-full relative">
                  <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">Black</span>
                  <img src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800" alt="moNa Black" className="w-full h-full object-cover"/>
                </div>
                <div className="snap-start shrink-0 w-full h-full relative">
                  <span className="absolute top-4 left-4 bg-slate-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">Gray</span>
                  <img src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800" alt="moNa Gray" className="w-full h-full object-cover"/>
                </div>
              </div>
              
              {/* インジケータードット */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-slate-900/40 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
                {[...Array(totalImages)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors ${activeIndex === i ? 'bg-white' : 'bg-white/50'}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-center mt-3 text-xs font-bold text-slate-400 flex items-center justify-center gap-1">
              <PlayCircle className="w-3.5 h-3.5" /> 自動再生中（スワイプ操作も可能）
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Product 01</span>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">60% Layout</span>
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">Acrylic</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">moNa</h1>
            
            <p className="text-lg text-slate-600 leading-loose mb-6 font-medium">
              原点となる60%レイアウト。アクリルの積層が織りなす透明感と、打鍵音の響きを計算し尽くしたエントリーモデル。
            </p>

            {/* カラーバリエーション選択 */}
            <div className="mb-6 p-4 bg-slate-100/60 rounded-2xl border border-slate-200/60">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <MousePointerClick className="w-3.5 h-3.5" /> Color Variations (選択して画像を確認)
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'ホワイト', color: 'bg-white', border: 'border-slate-300' },
                  { name: 'ブラック', color: 'bg-slate-900', border: 'border-slate-800' },
                  { name: 'グレー', color: 'bg-slate-400', border: 'border-slate-300' }
                ].map((c, i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToIndex(i + 1)}
                    className={`group flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all focus:outline-none ring-offset-slate-50 ring-offset-2 ${activeIndex === i + 1 ? 'ring-2 ring-emerald-500 bg-slate-100' : 'hover:bg-slate-200'}`}
                  >
                    <span className={`w-5 h-5 rounded-full ${c.color} ${c.border} border shadow-sm inline-block transition-transform group-hover:scale-110`}></span>
                    <span className="text-sm font-bold text-slate-700 pr-1">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border-2 border-slate-100 shadow-sm">
              <div className="flex-1">
                <p className="text-sm text-slate-400 font-bold mb-1">Price</p>
                <p className="text-3xl font-black text-slate-800 font-mono">¥40,000<span className="text-sm text-slate-500 font-normal"> (税込)</span></p>
              </div>
              <button className="flex-1 bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center py-4 rounded-2xl font-bold transition-colors shadow-lg shadow-emerald-600/20 group">
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                購入する
              </button>
            </div>
          </div>
        </div>

        {/* Features セクション (Lofree風) */}
        <div className="mb-32 mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">Features</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">細部までこだわり抜いた、moNaならではの設計と機能。</p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {features.map((feature, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
                <div className="w-full md:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                  <img src={feature.image} alt={feature.title} className="w-full aspect-[4/3] md:aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{feature.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 商品内容 セクション */}
        <div className="mb-24 mt-32 border-t border-slate-200 pt-24">
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">商品内容</h2>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-slate-600 mb-6 font-medium">製品パッケージには以下の内容が含まれています。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Package />, title: "moNa キーボード本体", desc: "組み立て済みアクリル積層ボディ（ホワイト／ブラック／グレー）" },
                { icon: <Cable />, title: "USB Type-C ケーブル", desc: "編み込み高耐久仕様（1.5m）" },
                { icon: <Wrench />, title: "キーキャッププラー", desc: "キートップの取り外し・交換用工具" },
                { icon: <FileText />, title: "クイックスタートガイド", desc: "キーマップ変更（VIA/Remap）の手順・保証書付属" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <div className="text-emerald-500 shrink-0 mt-0.5">
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications セクション */}
        <div>
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">Specifications</h2>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {[
                { label: 'Layout', value: '60%レイアウト' },
                { label: 'Colors', value: 'ホワイト / ブラック / グレー' },
                { label: 'Switches', value: 'Cherry MX 互換スイッチ対応 (ホットスワップ非対応)' },
                { label: 'Connection', value: 'USB Type-C 有線接続' },
                { label: 'Firmware', value: 'QMK Firmware / VIA, Remap対応' },
                { label: 'Weight', value: '約 650g (完成時)' },
              ].map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 px-8 hover:bg-slate-50 transition-colors">
                  <dt className="w-48 text-sm font-bold text-slate-400 mb-1 sm:mb-0 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="flex-1 text-slate-800 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* フローティングボトムバー */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-6 z-50">
        <div className="bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-full shadow-2xl flex items-center justify-between border border-slate-700/50">
          <div className="pl-4 font-bold tracking-wide">
            moNa <span className="text-slate-400 font-normal text-xs ml-1">¥40,000</span>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-full font-bold transition-colors text-sm flex items-center">
            Buy Now
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}