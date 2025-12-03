"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Заявка принята</div>
              <div className="text-sm text-slate-500">Выплаты и компенсации</div>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-700">Документы проверены</div>
                <div className="w-full h-1.5 bg-green-100 rounded-full mt-1">
                  <div className="w-full h-full bg-green-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-700">Заявление подано</div>
                <div className="w-full h-1.5 bg-green-100 rounded-full mt-1">
                  <div className="w-full h-full bg-green-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.div 
                className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
              </motion.div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-700">Рассмотрение</div>
                <div className="w-full h-1.5 bg-blue-100 rounded-full mt-1">
                  <motion.div 
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-50">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-300 rounded-full" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-500">Выплата</div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1" />
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-sm text-slate-600">Ожидаемая выплата</div>
            <div className="text-2xl font-bold text-blue-600">₽ 195 000</div>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
        >
          ✓ Одобрено
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl" />
        <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl" />
      </motion.div>
    </div>
  );
}

