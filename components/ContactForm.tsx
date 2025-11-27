import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    // =========================================================================
    // [중요] EmailJS 설정 (https://www.emailjs.com/)
    // 아래의 YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY를 
    // 본인의 EmailJS 대시보드에서 확인한 값으로 변경해주세요.
    // =========================================================================
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
      }, (error) => {
          console.error(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              프로젝트 시작하기
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              고민은 제작만 늦출 뿐입니다. <br/>
              지금 바로 무료 견적 상담을 받아보세요. <br/>
              개발자가 직접 친절하게 상담해 드립니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email</div>
                  <div className="font-semibold">contact@codecraft.studio</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-700 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Phone</div>
                  <div className="font-semibold">010-XXXX-XXXX</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-700 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Location</div>
                  <div className="font-semibold">Seoul, Republic of Korea</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 ring-4 ring-green-50">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">문의가 접수되었습니다!</h3>
                <p className="text-slate-600">
                  빠른 시일 내에 기재해주신 연락처로 <br/>
                  답변 드리도록 하겠습니다. 감사합니다.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-600 font-medium hover:underline"
                >
                  새로운 문의 보내기
                </button>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-1">성함 / 업체명</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400"
                    placeholder="홍길동 / 맛있는카페"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-slate-700 mb-1">관심 서비스</label>
                  <select 
                    name="service_type"
                    id="service_type" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white text-slate-700"
                  >
                    <option value="Light">Light (1페이지/개인용)</option>
                    <option value="Business">Business (5페이지/소상공인)</option>
                    <option value="Custom">Custom (특수기능 개발)</option>
                    <option value="Other">기타 문의</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">문의 내용</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="원하시는 기능이나 디자인 컨셉을 자유롭게 적어주세요."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>전송에 실패했습니다. 관리자에게 직접 연락해주세요.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> 전송 중...
                    </>
                  ) : (
                    <>
                      무료 견적 요청하기 <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;