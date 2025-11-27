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
    if (val < 18.5) return { label: '저체중', color: 'text-blue-400', range: 'low' };
    if (val < 23) return { label: '정상', color: 'text-lime-400', range: 'normal' };
    if (val < 25) return { label: '과체중', color: 'text-yellow-400', range: 'over' };
    return { label: '비만', color: 'text-red-500', range: 'obese' };
  };

  const getIndicatorPosition = (val: number) => {
    // Map BMI 15~35 to 0%~100% relative position
    const min = 15;
    const max = 35;
    const pos = ((val - min) / (max - min)) * 100;
    return Math.min(Math.max(pos, 0), 100);
  };

  return (
    <div className="w-full h-full flex flex-col bg-neutral-900 text-white font-sans rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
      {/* Header */}
      <div className="p-5 flex justify-between items-center border-b border-neutral-800 bg-neutral-950">
        <h3 className="text-xl font-black italic tracking-tighter text-lime-400 uppercase flex items-center gap-2">
          <Dumbbell size={20} className="fill-current" /> Iron Gym
        </h3>
        <button className="bg-lime-400 text-black px-3 py-1 rounded text-xs font-bold hover:bg-lime-300 transition-colors">
          JOIN
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 uppercase leading-none">
          Body <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Analysis</span>
        </h2>
        <p className="text-neutral-500 text-xs mb-8">
          데이터 기반 맞춤형 트레이닝을 시작하세요.
        </p>

        {/* Calculator Widget */}
        <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="text-lime-400" size={18} />
              <h4 className="font-bold text-base">BMI Calculator</h4>
            </div>
            {bmi && (
              <button onClick={reset} className="text-neutral-500 hover:text-white transition-colors">
                <RotateCcw size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1.5">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="0"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-right font-mono text-lg"
              />
            </div>
            <div className="relative">
              <label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1.5">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-lime-400 focus:outline-none transition-colors text-right font-mono text-lg"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-neutral-700 hover:bg-lime-500 hover:text-black text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
          >
            Calculate <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Result Display */}
          {bmi && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-neutral-700"
            >
              <div className="flex justify-between items-end mb-2">
                <span className="text-neutral-400 text-xs">Your Score</span>
                <span className={`text-2xl font-black ${getBmiCategory(bmi).color}`}>
                  {bmi}
                </span>
              </div>
              
              {/* Gauge Bar */}
              <div className="relative h-2 bg-neutral-900 rounded-full overflow-hidden mb-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-lime-500 via-yellow-500 to-red-500 opacity-80"></div>
              </div>
              
              {/* Indicator Arrow */}
              <div className="relative w-full h-2 mb-2">
                 <motion.div 
                   initial={{ left: '0%' }}
                   animate={{ left: `${getIndicatorPosition(bmi)}%` }}
                   transition={{ type: 'spring', stiffness: 100 }}
                   className="absolute top-0 -translate-x-1/2"
                 >
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
                 </motion.div>
              </div>

              <div className={`text-center font-bold text-sm py-1 px-3 rounded bg-neutral-900 inline-block w-full ${getBmiCategory(bmi).color}`}>
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