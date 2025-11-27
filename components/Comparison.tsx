import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Rocket, Wallet, Settings } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section id="service" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            왜 <span className="text-indigo-600">개발자</span>에게 맡겨야 할까요?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            쉽게 만드는 툴은 한계가 명확합니다. <br/>
            비즈니스의 성장에 맞춰 확장 가능한 진짜 웹사이트가 필요합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
              <span>서비스 비교</span>
              <span className="text-sm font-normal text-slate-500">*일반적인 웹 빌더 기준</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-4 font-medium text-slate-500 w-1/3">구분</th>
                    <th className="py-4 font-medium text-slate-500 w-1/3">웹 빌더(Wix/Imweb)</th>
                    <th className="py-4 font-bold text-indigo-600 w-1/3">CodeCraft Studio</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-100/50 transition-colors">
                      <td className="py-4 font-medium text-slate-800">{item.feature}</td>
                      <td className="py-4 text-slate-600">{item.builder}</td>
                      <td className="py-4 font-bold text-indigo-600">{item.codecraft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4 p-6 bg-indigo-50/50 rounded-xl border border-indigo-100"
            >
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                <Settings size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">원하는 기능 무엇이든 구현</h4>
                <p className="text-slate-600">
                  단순 정보 나열이 아닙니다. 예약 시스템, 커스텀 계산기, 맞춤형 폼 등 
                  비즈니스에 꼭 필요한 로직을 JavaScript로 직접 구현합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-cyan-50/50 rounded-xl border border-cyan-100"
            >
              <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">로딩 속도 200% 향상</h4>
                <p className="text-slate-600">
                  무거운 빌더 엔진 없이, 꼭 필요한 코드만 작성합니다. 
                  빠른 로딩 속도는 고객 이탈을 막고 검색엔진 상위 노출(SEO)을 돕습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4 p-6 bg-emerald-50/50 rounded-xl border border-emerald-100"
            >
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                <Wallet size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">고정 지출 0원</h4>
                <p className="text-slate-600">
                  Vercel 등 최신 클라우드 플랫폼의 무료 티어를 활용하여 배포합니다. 
                  매달 나가는 관리비 없이 도메인 비용(연 2만원)만 내시면 됩니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;