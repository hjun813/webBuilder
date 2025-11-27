import React, { useState } from 'react';
import { Coffee, RefreshCw, List, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BEANS = [
  { name: "Ethiopia Yirgacheffe", note: "꽃향기, 밝은 산미, 레몬", color: "bg-orange-100 text-orange-800" },
  { name: "Guatemala Antigua", note: "스모키, 초콜릿, 중후한 바디감", color: "bg-stone-100 text-stone-800" },
  { name: "Kenya AA", note: "자몽의 산미, 와인 같은 향미", color: "bg-red-100 text-red-800" },
  { name: "Colombia Supremo", note: "마일드, 호두, 부드러운 단맛", color: "bg-amber-100 text-amber-800" },
];

const MENU_ITEMS = [
  { name: "Americano", price: "4.5", tag: "Best" },
  { name: "Cafe Latte", price: "5.0", tag: null },
  { name: "Vanilla Bean", price: "5.5", tag: "Sweet" },
  { name: "Einspanner", price: "6.0", tag: "Sig" },
];

const CafeDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recommend' | 'menu'>('recommend');
  const [todaysBean, setTodaysBean] = useState(BEANS[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const recommendBean = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const random = BEANS[Math.floor(Math.random() * BEANS.length)];
      setTodaysBean(random);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF7F2] font-serif text-[#4A3B32] rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-[#E8DFD5] flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h3 className="text-xl font-bold tracking-wider italic flex items-center gap-2">
          <Coffee size={18} /> Cafe Delight
        </h3>
        <div className="flex bg-[#E8DFD5] rounded-full p-1">
          <button 
            onClick={() => setActiveTab('recommend')}
            className={`px-3 py-1 rounded-full text-[10px] font-sans font-bold transition-all ${activeTab === 'recommend' ? 'bg-white shadow-sm' : 'opacity-50'}`}
          >
            추천
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`px-3 py-1 rounded-full text-[10px] font-sans font-bold transition-all ${activeTab === 'menu' ? 'bg-white shadow-sm' : 'opacity-50'}`}
          >
            메뉴
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative">
        <AnimatePresence mode="wait">
          {activeTab === 'recommend' ? (
            <motion.div 
              key="recommend"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="p-8 flex flex-col items-center justify-center min-h-full text-center relative"
            >
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#D4C3B5] rounded-full blur-3xl opacity-20"></div>
              
              <h2 className="text-2xl font-bold mb-2">Today's Pick</h2>
              <p className="text-xs opacity-60 mb-8 max-w-xs mx-auto font-sans">
                당신의 취향을 위한 오늘의 원두 추천
              </p>

              <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg border border-[#E8DFD5]">
                <div className="min-h-[140px] flex flex-col items-center justify-center">
                   {isAnimating ? (
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                     >
                       <RefreshCw className="text-[#A68A78]" size={32} />
                     </motion.div>
                   ) : (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       key={todaysBean.name}
                       className="text-center"
                     >
                       <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-4 font-sans tracking-wide uppercase ${todaysBean.color}`}>
                         Barista's Choice
                       </span>
                       <h4 className="text-xl font-bold mb-2">{todaysBean.name}</h4>
                       <p className="text-sm text-gray-500 font-sans">{todaysBean.note}</p>
                     </motion.div>
                   )}
                </div>
                
                <button 
                  onClick={recommendBean}
                  disabled={isAnimating}
                  className="w-full mt-6 bg-[#4A3B32] text-[#FAF7F2] py-3 rounded-xl hover:bg-[#362b24] transition-colors flex items-center justify-center gap-2 font-sans font-medium text-xs tracking-widest uppercase active:scale-95 transform duration-100"
                >
                  <RefreshCw size={14} />
                  다른 원두 찾기
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <List size={20} /> Espresso Bar
              </h2>
              <div className="space-y-3">
                {MENU_ITEMS.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-[#E8DFD5]"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{item.name}</span>
                        {item.tag && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded text-white font-sans font-bold uppercase ${item.tag === 'Best' ? 'bg-orange-400' : item.tag === 'Sig' ? 'bg-[#4A3B32]' : 'bg-pink-400'}`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 font-sans">Hot / Iced</span>
                    </div>
                    <span className="font-serif font-bold italic">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-[#E8DFD5]/30 rounded-lg text-center">
                <p className="text-xs font-sans text-gray-500">
                  * 탭 전환 기능이 구현된 데모 페이지입니다.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CafeDemo;