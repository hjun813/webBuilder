
import React, { useState } from 'react';
import { User, Code2, FolderGit2, Github, ExternalLink, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind", level: 95 },
];

const PROJECTS = [
  { name: "E-Commerce", desc: "쇼핑몰 플랫폼", color: "bg-blue-500" },
  { name: "Chat App", desc: "실시간 채팅", color: "bg-green-500" },
  { name: "Admin Dashboard", desc: "관리자 페이지", color: "bg-purple-500" },
];

const ProfileDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'projects'>('skills');
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`w-full h-full flex flex-col transition-colors duration-300 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} font-sans rounded-xl overflow-hidden shadow-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
      {/* Header / Nav */}
      <div className={`p-5 flex justify-between items-center border-b ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white/50'} backdrop-blur-md sticky top-0 z-10`}>
        <div className="flex items-center gap-2 font-bold text-sm tracking-tight">
          <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white">
            <span className="text-[10px]">P</span>
          </div>
          Portfolio
        </div>
        <button 
          onClick={toggleTheme}
          className={`p-1.5 rounded-full transition-colors ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
        >
          {isDark ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-slate-600" />}
        </button>
      </div>

      {/* Hero Profile */}
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
            <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
               <User size={32} className="text-slate-400" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-slate-900 rounded-full"></div>
        </div>
        <h2 className="text-xl font-bold mb-1">Kim Developer</h2>
        <p className={`text-xs mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Full-Stack Web Developer</p>
        
        <div className="flex gap-2">
           <button className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
             <Github size={16} />
           </button>
           <button className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white border border-slate-200 hover:bg-slate-50'}`}>
             Contact Me
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-slate-700/50">
        <button 
          onClick={() => setActiveTab('skills')}
          className={`flex-1 pb-3 text-xs font-bold transition-colors relative ${activeTab === 'skills' ? 'text-indigo-500' : 'text-slate-500'}`}
        >
          Skills
          {activeTab === 'skills' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />}
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex-1 pb-3 text-xs font-bold transition-colors relative ${activeTab === 'projects' ? 'text-indigo-500' : 'text-slate-500'}`}
        >
          Projects
          {activeTab === 'projects' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'skills' ? (
            <motion.div 
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Tech Stack</h3>
              {SKILLS.map((skill, idx) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                      className="h-full bg-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Recent Works</h3>
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-3 rounded-lg border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} hover:border-indigo-500 transition-colors group cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-md ${project.color} flex items-center justify-center text-white`}>
                      <FolderGit2 size={14} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold">{project.name}</h4>
                      <p className="text-[10px] text-slate-500">{project.desc}</p>
                    </div>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileDemo;
