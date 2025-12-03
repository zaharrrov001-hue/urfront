"use client";

import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Правовая защита",
    description: "Работаем строго в рамках законодательства, обеспечивая полную правовую защиту ваших интересов",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4L6 12V22C6 34 14 42 24 44C34 42 42 34 42 22V12L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Быстрые результаты",
    description: "Оперативная обработка заявок и своевременное предоставление квалифицированной помощи",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Точные документы",
    description: "Подготовка всех документов с соблюдением требований законодательства и ведомственных стандартов",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M10 6H30L38 14V42H10V6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M30 6V14H38" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 22H32M16 28H32M16 34H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="36" r="8" fill="currentColor" opacity="0.2"/>
        <path d="M31 36L33 38L37 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Прозрачность",
    description: "Чёткая структура процесса, полная информация о ходе работы на каждом этапе",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="18" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="30" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M6 42C6 34 11 28 18 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M42 42C42 34 37 28 30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M22 36L24 38L27 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-8 md:mb-12">
          <span className="text-[#d4a853] font-semibold text-xs uppercase tracking-widest">
            Преимущества
          </span>
          <h2 className="mt-3 text-[#1a2a4a]">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-slate-600">
            Профессиональный подход, технически корректные документы, чёткая структура работы
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative">
              <div className="relative bg-white rounded-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-slate-200">
                {/* Icon */}
                <div className="mb-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2 sm:p-2.5 md:p-3 lg:p-3.5 rounded-sm bg-[#1a2a4a] group-hover:bg-[#d4a853] transition-colors duration-300 text-[#d4a853] group-hover:text-[#1a2a4a]">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-[#1a2a4a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>

                {/* Decorative number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 text-slate-600">
          {[
            "Дистанционная работа",
            "Без предоплаты",
            "Гарантия результата",
            "Персональный юрист",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#d4a853]" />
              <span className="text-xs sm:text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
