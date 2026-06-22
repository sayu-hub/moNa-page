import React, { useEffect } from 'react';
import { ArrowLeft, Keyboard, Zap, HelpCircle } from 'lucide-react';

export default function KeymapEditor({ onBack }) {
  // ページが開かれたときに一番上にスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
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
          <div className="w-20"></div> {/* レイアウト調整用ダミー */}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Keymap Editor</h1>
          <p className="text-slate-500 font-medium">Webブラウザから直接キーボードの設定を変更できます</p>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[2rem] flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
            <Keyboard className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">キーボードを接続してください</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed font-medium">
            設定を変更するには、WebHID APIを使用してキーボードと通信します。<br/>下のボタンを押して、リストからお使いのキーボードを選択してください。
          </p>
          
          <button className="bg-slate-900 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-slate-900/20 hover:shadow-emerald-500/30 flex items-center gap-2 hover:-translate-y-1">
            <Zap className="w-5 h-5 text-emerald-400" />
            Connect Keyboard
          </button>
          
          <div className="mt-12 p-6 bg-amber-50/50 border border-amber-100 rounded-2xl max-w-lg text-left flex gap-4">
             <HelpCircle className="w-6 h-6 text-amber-500 shrink-0" />
             <div>
               <h4 className="font-bold text-slate-800 mb-1 text-sm">接続できない場合は？</h4>
               <p className="text-slate-600 text-xs leading-relaxed font-medium">
                 Chrome、EdgeなどのWebHID対応ブラウザをご利用ください。また、USBケーブルがデータ通信対応か確認してください。
               </p>
             </div>
          </div>
        </div>
      </main>
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}