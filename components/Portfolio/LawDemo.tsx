import React, { useState } from 'react';
import { Scale, ShieldCheck, AlertCircle, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const LawDemo: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', desc: '', agreed: false });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = '성함을 입력해주세요.';
    if (!formData.phone) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식이 아닙니다.';
    }
    if (formData.desc.length < 10) newErrors.desc = '상담 내용은 최소 10자 이상 적어주세요.';
    if (!formData.agreed) newErrors.agreed = '개인정보 수집 및 이용에 동의해야 합니다.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', desc: '', agreed: false });
      }, 3000);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 text-slate-200 font-sans rounded-xl overflow-hidden shadow-2xl border border-slate-700">
      {/* Header */}
      <div className="bg-slate-800 p-6 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-lg text-white shadow-lg shadow-amber-600/20">
            <Scale size={20} />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">TRUST LAW</h3>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Legal Service</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
        {!submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="font-serif text-xl text-white mb-2">무료 법률 상담 신청</h2>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              의뢰인의 비밀을 철저히 보장합니다.<br/>
              양식을 작성해주시면 담당 변호사가 연락드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] text-amber-500 font-bold mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600`}
                  placeholder="홍길동"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
              </div>

              <div>
                <label className="block text-[10px] text-amber-500 font-bold mb-1.5 uppercase tracking-wider">Contact</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-slate-800 border ${errors.phone ? 'border-red-500' : 'border-slate-600'} rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600`}
                  placeholder="010-1234-5678"
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[10px] text-amber-500 font-bold mb-1.5 uppercase tracking-wider">Case Detail</label>
                <textarea
                  rows={3}
                  value={formData.desc}
                  onChange={e => setFormData({ ...formData, desc: e.target.value })}
                  className={`w-full bg-slate-800 border ${errors.desc ? 'border-red-500' : 'border-slate-600'} rounded p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-slate-600`}
                  placeholder="사건 내용을 간략히 적어주세요."
                />
                {errors.desc && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.desc}</p>}
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.agreed ? 'bg-amber-600 border-amber-600' : 'border-slate-500 group-hover:border-slate-400'}`}>
                    {formData.agreed && <Check size={12} className="text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.agreed} 
                    onChange={e => setFormData({...formData, agreed: e.target.checked})} 
                  />
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-300">개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                {errors.agreed && <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.agreed}</p>}
              </div>

              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm mt-2 shadow-lg shadow-amber-900/20 active:scale-[0.98]">
                상담 신청하기 <Send size={14} />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="h-full flex flex-col items-center justify-center text-center pb-12"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 ring-1 ring-green-500/30">
              <ShieldCheck className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">접수 완료</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              상담 신청이 정상적으로 접수되었습니다.<br/>
              담당자가 곧 연락드리겠습니다.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LawDemo;