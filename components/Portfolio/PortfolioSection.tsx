import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCategory, PortfolioItem } from '../../types';
import CafeDemo from './CafeDemo';
import GymDemo from './GymDemo';
import LawDemo from './LawDemo';
import { Coffee, Dumbbell, Scale } from 'lucide-react';

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'cafe',
    title: 'Cafe Delight',
    subtitle: '감성 카페 홈페이지',
    description: '베이지 톤의 따뜻한 디자인과 "오늘의 원두 추천" 기능을 통해 방문자의 체류 시간을 늘립니다.',
    themeColor: 'bg-orange-500',
  },
  {
    id: 'gym',
    title: 'Iron Gym',
    subtitle: '피트니스 센터',
    description: '강렬한 다크 모드 디자인과 실시간 "BMI 계산기" 기능으로 전문적인 PT샵 이미지를 구축합니다.',
    themeColor: 'bg-lime-500',
  },
  {
    id: 'law',
    title: 'Trust Law',
    subtitle: '법률 사무소',
    description: '신뢰감을 주는 네이비/골드 테마와 "유효성 검사가 포함된 상담 폼"으로 악성 스팸을 차단합니다.',
    themeColor: 'bg-slate-700',
  },
];

const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('cafe');

  return (
    <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Interactive <span className="text-indigo-600">Mockups</span>
          </h2>
          <p className="text-lg text-slate-600">
            단순한 이미지가 아닙니다. <br className="md:hidden" />
            직접 눌러보고 작동하는 기능을 확인하세요.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeTab === item.id
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {item.id === 'cafe' && <Coffee size={18} />}
              {item.id === 'gym' && <Dumbbell size={18} />}
              {item.id === 'law' && <Scale size={18} />}
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          {/* Description Panel */}
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col justify-center relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full ${PORTFOLIO_ITEMS.find(i => i.id === activeTab)?.themeColor}`}></div>

                <div className={`w-12 h-12 rounded-lg ${PORTFOLIO_ITEMS.find(i => i.id === activeTab)?.themeColor} text-white flex items-center justify-center mb-6 shadow-md`}>
                   {activeTab === 'cafe' && <Coffee size={24} />}
                   {activeTab === 'gym' && <Dumbbell size={24} />}
                   {activeTab === 'law' && <Scale size={24} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {PORTFOLIO_ITEMS.find(i => i.id === activeTab)?.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {PORTFOLIO_ITEMS.find(i => i.id === activeTab)?.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {PORTFOLIO_ITEMS.find(i => i.id === activeTab)?.description}
                </p>
                
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Included Features</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      반응형 디자인 (Mobile/PC)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {activeTab === 'cafe' && '랜덤 추천 알고리즘 (JS Logic)'}
                      {activeTab === 'gym' && '실시간 수치 계산 (React State)'}
                      {activeTab === 'law' && '유효성 검사 (Form Validation)'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      SEO 최적화 마크업
                    </li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Demo Panel (Phone Frame) */}
          <div className="lg:col-span-3 order-1 lg:order-2 flex justify-center py-4 px-2">
            <div className="relative w-full max-w-[360px] md:max-w-[380px] h-[600px] md:h-[650px] bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl p-2 md:p-3 border-4 border-slate-800 ring-4 ring-slate-200 transform md:hover:rotate-1 transition-transform duration-500">
               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
               
               {/* Power Button */}
               <div className="absolute -right-2 top-24 w-1 h-10 bg-slate-800 rounded-r-md"></div>
               {/* Volume Buttons */}
               <div className="absolute -left-2 top-24 w-1 h-14 bg-slate-800 rounded-l-md"></div>

               {/* Screen */}
               <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.25rem] overflow-hidden relative">
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      {activeTab === 'cafe' && <CafeDemo />}
                      {activeTab === 'gym' && <GymDemo />}
                      {activeTab === 'law' && <LawDemo />}
                    </motion.div>
                 </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;