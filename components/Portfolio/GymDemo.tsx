
import React, { useState } from 'react';
import { Dumbbell, Activity, ChevronRight, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const GymDemo: React.FC = () => {
  const [height, setHeight] = useState<number | string>('');
  const [weight, setWeight] = useState<number | string>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = Number(height);
    const w = Number(weight);
    if (h > 0 && w > 0) {
      // BMI = kg / m^2
      const result = w / ((h / 100) ** 2);
      setBmi(Number(result.toFixed(1)));
    }
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
  };

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: '저체중', color: 'text-blue-400', bg: 'bg-blue-400/20' };
    if (val < 23) return { label: '정상', color: 'text-lime-400', bg: 'bg-lime-400/20' };
    if (val < 25) return { label: '과체중', color: 'text-yellow-400', bg: 'bg-yellow-400/20' };
    return { label: '비만', color: 'text-red-500', bg: 'bg-red-500/20' };
  };

  const getIndicatorPosition = (val: number) => {
    // Map BMI 15~35 to 0%~100% relative position
    const min = 15;
    const max = 35;
    const pos = ((val - min) / (max - min)) * 100;
    return Math.min(Math.max(pos, 0), 100);
  };

  return (
    <div className="w-full h-full flex flex-col bg-black text-white font-sans rounded-none overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-5 flex justify-between items-center border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <h3 className="text-xl font-black italic tracking-tighter text-lime-400 uppercase flex items-center gap-2">
          <Dumbbell size={20} className="fill-current" /> Fitness Gym
        </h3>
        <button className="bg-lime-500 hover:bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs font-bold transition-all transform active:scale-95">
          무료 상담
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col overflow-y-auto custom-scrollbar relative">
        {/* Background Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl font-bold mb-2 uppercase leading-none z-10">
          Body <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Analysis</span>
        </h2>
        <p className="text-neutral-500 text-sm mb-8 z-10">
          정확한 데이터로 시작하는 퍼스널 트레이닝.
        </p>

        {/* Calculator Widget */}
        <div className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-xl z-10 max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="text-lime-400" size={20} />
              <h4 className="font-bold text-lg">BMI Calculator</h4>
            </div>
            {bmi && (
              <button onClick={reset} className="text-neutral-500 hover:text-white transition-colors p-1 hover:bg-neutral-800 rounded">
                <RotateCcw size={18} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="relative group">
              <label className="block text-xs uppercase font-bold text-neutral-500 mb-2 group-focus-within:text-lime-400 transition-colors">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="0"
                className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 focus:outline-none transition-all text-right font-mono text-xl placeholder:text-neutral-800"
              />
            </div>
            <div className="relative group">
              <label className="block text-xs uppercase font-bold text-neutral-500 mb-2 group-focus-within:text-lime-400 transition-colors">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 focus:outline-none transition-all text-right font-mono text-xl placeholder:text-neutral-800"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group text-base uppercase tracking-wider shadow-lg shadow-lime-900/20 active:scale-[0.98]"
          >
            Calculate <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Result Display */}
          {bmi && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 pt-8 border-t border-neutral-800 overflow-hidden"
            >
              <div className="flex justify-between items-end mb-3">
                <span className="text-neutral-400 text-sm uppercase font-bold tracking-wider">Your Score</span>
                <span className={`text-4xl font-black ${getBmiCategory(bmi).color}`}>
                  {bmi}
                </span>
              </div>
              
              {/* Gauge Bar */}
              <div className="relative h-3 bg-neutral-800 rounded-full overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-lime-500 via-yellow-500 to-red-500 opacity-80"></div>
                {/* Tick marks */}
                <div className="absolute top-0 bottom-0 left-[17.5%] w-px bg-black/50"></div> {/* 18.5 */}
                <div className="absolute top-0 bottom-0 left-[40%] w-px bg-black/50"></div> {/* 23 */}
                <div className="absolute top-0 bottom-0 left-[50%] w-px bg-black/50"></div> {/* 25 */}
              </div>
              
              {/* Indicator Arrow */}
              <div className="relative w-full h-4 mb-4">
                 <motion.div 
                   initial={{ left: '0%' }}
                   animate={{ left: `${getIndicatorPosition(bmi)}%` }}
                   transition={{ type: 'spring', stiffness: 100 }}
                   className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                 >
                   <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white"></div>
                 </motion.div>
              </div>

              <div className={`text-center font-bold text-base py-4 px-4 rounded-lg w-full ${getBmiCategory(bmi).bg} ${getBmiCategory(bmi).color} uppercase tracking-widest border border-current/10`}>
                {getBmiCategory(bmi).label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GymDemo;
