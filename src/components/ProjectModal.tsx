import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Send, CheckCircle2, Star, Tag, Code2 } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleOrderSimilar = () => {
    const text = `سلام آقای ضیائی!👋%0Aمن در سایت 0003 پروژه "${project.title}" را دیدم و علاقمند به سفارش یک پروژه مشابه هستم.%0Aلطفاً راهنمایی بفرمایید.`;
    window.open(`https://t.me/${PERSONAL_INFO.telegram}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl my-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-2xl overflow-hidden z-10"
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-slate-950/80 border border-purple-500/30 text-slate-300 hover:text-white hover:bg-purple-900 transition-colors"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-6 right-6 left-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-purple-600/80 border border-purple-400/40 text-white text-xs font-semibold mb-2">
                {project.categoryName}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Overview & Client */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
              {project.clientName && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">سفارش دهنده:</span>
                  <span className="text-sm font-bold text-purple-300">{project.clientName}</span>
                </div>
              )}

              {project.rating && (
                <div className="flex items-center gap-1 bg-purple-950 px-3 py-1 rounded-full border border-purple-500/30">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-white font-english">{project.rating}.0</span>
                </div>
              )}
            </div>

            {/* Full Details */}
            <div>
              <h4 className="text-base font-bold text-white mb-2">توضیحات کامل پروژه:</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDetails}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-base font-bold text-white mb-3">ویژگی‌ها و قابلیت‌های اجرا شده:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>تکنولوژی‌های استفاده شده:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-purple-500/30 text-purple-200 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-purple-500/20 flex flex-wrap gap-3">
              <button
                onClick={handleOrderSimilar}
                id="modal-order-similar-btn"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all"
              >
                <Send className="w-4 h-4 rotate-[-20deg]" />
                <span>سفارش پروژه مشابه این</span>
              </button>

              <button
                onClick={onClose}
                className="py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors"
              >
                بستن پنجره
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
