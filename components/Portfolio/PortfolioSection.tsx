
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCategory, PortfolioItem } from '../../types';
import ProfileDemo from './ProfileDemo';
import GymDemo from './GymDemo';
import LawDemo from './LawDemo';
import { User, Dumbbell, Scale, ExternalLink, Loader2, Monitor } from 'lucide-react';

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'profile',
    title: 'My Portfolio',
    subtitle: '개인 홍보용 웹페이지',
    description: '세련된 다크 모드와 인터랙티브한 탭 전환 효과로 개발자의 기술 스택을 효과적으로 보여주는 포트폴리오 사이트입니다.',
    themeColor: 'bg-indigo-600',
    liveUrl: 'https://my-portfolio-b4t5.vercel.app/#/',
    type: 'iframe',
  },
  {
    id: 'gym',
    title: 'Fitness Gym',
    subtitle: '피트니스 상담 웹페이지',
    description: '강렬한 네온 컬러 디자인과 실시간 "BMI 계산기" 기능으로 회원의 참여를 유도하고 상담 신청율을 높입니다.',
    themeColor: 'bg-lime-500',
    liveUrl: 'https://fitness-gym-kappa.vercel.app/',
    type: 'iframe',
  },
  {
    id: 'law',
    title: 'Trust Law',
    subtitle: '법률 사무소 (예시)',
    description: '신뢰감을 주는 네이비/골드 테마와 "유효성 검사가 포함된 상담 폼"으로 전문성을 강조한 법률 사무소 템플릿입니다.',
    themeColor: 'bg-slate-700',
    type: 'component',
  },
];

const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('profile');
  const [iframeLoading, setIframeLoading] = useState(true);

  const activeItem = PORTFOLIO_ITEMS.find(i => i.id === activeTab);

  // 탭 변경 시 로딩 상태 초기화
  React.useEffect(() => {
    setIframeLoading(true);
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Interactive <span className="text-indigo-600">Portfolios</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            실제 PC 환경에서의 작동 모습을 확인해보세요.<br />
            아래 모니터 화면을 통해 직접 조작하거나 실제 사이트로 이동할 수 있습니다.
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
              {item.id === 'profile' && <User size={18} />}
              {item.id === 'gym' && <Dumbbell size={18} />}
              {item.id === 'law' && <Scale size={18} />}
              {item.title}
            </button>
          ))}
        </div>

        {/* Description Panel (Top) */}
        <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto mb-10 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
            >
               <div className={`absolute top-0 left-0 w-2 h-full ${activeItem?.themeColor}`}></div>
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      {activeItem?.title}
                      <span className="text-sm font-normal text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                        {activeItem?.subtitle}
                      </span>
                    </h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">
                      {activeItem?.description}
                    </p>
                  </div>
                  
                  {activeItem?.liveUrl && (
                    <a 
                      href={activeItem.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20 group"
                    >
                      새 탭에서 열기 <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
               </div>
            </motion.div>
        </AnimatePresence>

        {/* Monitor Mockup Area */}
        <div className="flex justify-center px-4">
            <div className="relative w-full max-w-[1024px] group">
               {/* Monitor Frame */}
               <div className="bg-slate-800 rounded-t-2xl p-4 pb-0 border-4 border-slate-900 shadow-2xl relative z-10">
                  {/* Camera Dot */}
                  <div className="flex justify-center mb-3 space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                  </div>
                  
                  {/* Screen Container */}
                  <div className="bg-white rounded-t-lg overflow-hidden w-full aspect-[16/10] md:aspect-[16/9] relative shadow-inner border border-slate-300/10">
                     <AnimatePresence mode="wait">
                        <motion.div 
                          key={activeTab}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full bg-white relative"
                        >
                          {activeItem?.type === 'iframe' && activeItem.liveUrl ? (
                            <div className="w-full h-full relative group/iframe">
                              {/* 로딩 스피너 */}
                              {iframeLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20">
                                  <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-3" />
                                  <p className="text-slate-500 text-sm font-medium">사이트를 불러오는 중...</p>
                                </div>
                              )}
                              {/* Iframe */}
                              <iframe
                                src={activeItem.liveUrl}
                                className="w-full h-full border-0"
                                title={activeItem.title}
                                onLoad={() => setIframeLoading(false)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              />
                            </div>
                          ) : (
                            // Component 렌더링 (LawDemo 등)
                            <div className="w-full h-full overflow-y-auto custom-scrollbar">
                               {activeTab === 'law' ? <LawDemo /> : <ProfileDemo />}
                            </div>
                          )}
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </div>

               {/* Stand Neck */}
               <div className="mx-auto w-32 h-16 bg-gradient-to-b from-slate-800 to-slate-900 relative z-0"></div>
               {/* Stand Base */}
               <div className="mx-auto w-64 h-4 bg-slate-900 rounded-full shadow-2xl relative z-0 -mt-2"></div>
               
               {/* Reflection/Glow Effect */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
