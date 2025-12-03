const steps = [
  {
    number: 1,
    title: "Консультация",
    description: "Расскажите о вашей ситуации. Мы изучим её и определим необходимые действия.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="6" y="10" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M34 18L42 14V34L34 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="26" cy="22" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 28C14 28 18 32 21 32C24 32 28 28 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: "Анализ",
    description: "Проверим все документы и основания для получения выплат и льгот.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M29 29L42 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M14 20H26M20 14V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 3,
    title: "Подготовка",
    description: "Подготовим все необходимые документы и заявления в соответствии с требованиями.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M10 6H30L38 14V42H10V6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M30 6V14H38" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 22H32M16 28H32M16 34H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 16L22 18L26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 4,
    title: "Результат",
    description: "Сопроводим взаимодействие с ведомствами до получения положительного результата.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 6L28 18H42L31 26L35 38L24 30L13 38L17 26L6 18H20L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.2"/>
        <path d="M21 24L23 26L27 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function Steps() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-8 md:mb-12">
          <span className="text-[#d4a853] font-semibold text-xs uppercase tracking-widest">
            Процесс работы
          </span>
          <h2 className="mt-3 text-[#1a2a4a]">
            Как мы работаем
          </h2>
          <p className="mt-4 text-slate-600">
            Простой и понятный процесс получения юридической помощи
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[#1a2a4a]/20 -translate-y-1/2 z-0" />

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 text-center h-full group">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d4a853] text-[#1a2a4a] text-base font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mx-auto mb-4 mt-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-sm bg-[#1a2a4a] text-[#d4a853] group-hover:bg-[#d4a853] group-hover:text-[#1a2a4a] transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-[#1a2a4a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-20">
                    <svg
                      className="w-8 h-8 text-[#d4a853]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
