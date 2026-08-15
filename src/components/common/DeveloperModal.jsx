import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award, 
  ExternalLink, 
  Github, 
  Globe, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal,
  Database,
  Sparkles,
  Server
} from 'lucide-react';
import { useShop } from '../../context/ShopContext.jsx';
import { DEVELOPER_INFO } from '../../data/developer.js';

export const DeveloperModal = () => {
  const { isDevModalOpen, setIsDevModalOpen } = useShop();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'skills' | 'projects' | 'architecture'

  if (!isDevModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shrink-0">
          <button
            id="close-dev-modal-btn"
            onClick={() => setIsDevModalOpen(false)}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 p-0.5 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white text-2xl font-bold font-['Outfit']">
              BP
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                  {DEVELOPER_INFO.name}
                </h3>
                <span className="bg-indigo-500/30 text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-indigo-400/30">
                  {DEVELOPER_INFO.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{DEVELOPER_INFO.location}</span>
                <span className="text-slate-500">•</span>
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{DEVELOPER_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 border-t border-slate-800 pt-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'overview' ? 'bg-indigo-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Profile Overview
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'skills' ? 'bg-indigo-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Technical Skills & Certs
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'projects' ? 'bg-indigo-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Projects & Experience
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'architecture' ? 'bg-indigo-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              E-Commerce Architecture
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-700 text-sm space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] mb-2">Professional Summary</h4>
                <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {DEVELOPER_INFO.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  <span>Education</span>
                </h4>
                <div className="space-y-3">
                  {DEVELOPER_INFO.education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{edu.degree}</h5>
                        <p className="text-xs text-slate-500 mt-0.5">{edu.institution}</p>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <span className="inline-block bg-indigo-50 text-indigo-700 font-bold text-xs px-2.5 py-1 rounded-lg">
                          {edu.score}
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={DEVELOPER_INFO.links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Portfolio Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={DEVELOPER_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={DEVELOPER_INFO.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
                >
                  <Award className="w-4 h-4" />
                  <span>LeetCode Profile (100+ Solved)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" /> Programming Languages
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {DEVELOPER_INFO.skills.programming.map((skill) => (
                      <span key={skill} className="bg-white border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" /> Frontend Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {DEVELOPER_INFO.skills.frontend.map((skill) => (
                      <span key={skill} className="bg-white border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                    <Database className="w-4 h-4" /> Backend & Database
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {DEVELOPER_INFO.skills.backendAndDatabase.map((skill) => (
                      <span key={skill} className="bg-white border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> Core Computer Science
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {DEVELOPER_INFO.skills.coreCS.map((skill) => (
                      <span key={skill} className="bg-white border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Key Achievements & Certifications</span>
                </h4>
                <div className="space-y-2">
                  {DEVELOPER_INFO.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Experience */}
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <span>Professional Work Experience</span>
                </h4>
                {DEVELOPER_INFO.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h5 className="font-bold text-slate-900 text-sm">
                        {exp.role} <span className="text-indigo-600 font-normal">@ {exp.company}</span>
                      </h5>
                      <span className="text-xs text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-bold text-slate-900 text-base font-['Outfit'] mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-indigo-600" />
                  <span>Featured Project Portfolio</span>
                </h4>
                <div className="space-y-3">
                  {DEVELOPER_INFO.projects.map((proj, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h5 className="font-bold text-slate-900 text-sm">{proj.name}</h5>
                        <div className="flex flex-wrap gap-1">
                          {proj.tech.map((t) => (
                            <span key={t} className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ARCHITECTURE & WHAT I LEARNED */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                <h5 className="font-bold text-indigo-950 text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>What I Learned Building ShopSphere</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-indigo-900 list-disc list-inside">
                  <li><strong>Pure JavaScript Logic (80%+):</strong> Implemented multi-attribute filtering, debounced search, custom sorting algorithms, dynamic pricing calculation, and form validations.</li>
                  <li><strong>Component Architecture:</strong> Built modular React components with clean separation of state and presentation.</li>
                  <li><strong>State & Persistence:</strong> Leveraged React Context API synchronized seamlessly with browser LocalStorage.</li>
                  <li><strong>Modern UI/UX:</strong> Designed an intuitive, mobile-first responsive layout with accessible interactive states and smooth feedback.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white">
                <h5 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-400" />
                  <span>Future Full-Stack Upgrade Roadmap</span>
                </h5>
                <div className="font-mono text-xs text-indigo-300 bg-slate-950 p-4 rounded-xl space-y-1">
                  <p>React + JavaScript (Frontend UI)</p>
                  <p className="text-slate-500 pl-4">&darr;</p>
                  <p>Node.js + Express.js (REST API Server)</p>
                  <p className="text-slate-500 pl-4">&darr;</p>
                  <p>PostgreSQL / MongoDB (Persistent Database)</p>
                  <p className="text-slate-500 pl-4">&darr;</p>
                  <p>JWT & Firebase (Secure Authentication)</p>
                  <p className="text-slate-500 pl-4">&darr;</p>
                  <p>Razorpay / Stripe (Live Payment Gateway Integration)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500">
            Open to Frontend Web Developer opportunities
          </p>
          <button
            onClick={() => setIsDevModalOpen(false)}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
