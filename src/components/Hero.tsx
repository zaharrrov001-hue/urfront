"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Phone } from "lucide-react";

const stats = [
  { value: "500+", label: "Успешных дел" },
  { value: "98%", label: "Положительных решений" },
  { value: "10+", label: "Лет опыта" },
];

const whoWeHelp = [
  "Родителям военнослужащих",
  "Супругам и детям",
  "Родственникам мобилизованных",
  "Семьям добровольцев",
  "Семьям погибших и пропавших без вести",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a]/95 via-[#1a2a4a]/90 to-[#2d3e5f]/85" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-[#d4a853]/20 border border-[#d4a853]/40 px-4 py-2 text-xs font-medium text-[#d4a853]">
              <Shield className="h-4 w-4" />
              <span>Профессиональная правовая защита</span>
            </div>

            {/* Main heading */}
            <h1 className="text-white leading-tight">
              Юридическая помощь{" "}
              <span className="text-[#d4a853]">родственникам</span>{" "}
              <span className="block mt-2">военнослужащих</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-slate-300 max-w-xl mx-auto lg:mx-0">
              Комплексная правовая поддержка по вопросам выплат, статусов 
              и социальных гарантий. Работаем конфиденциально, в рамках 
              закона, с гарантией результата.
            </p>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-300">
              {[
                "Бесплатная консультация",
                "Без предоплаты",
                "Конфиденциально",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#d4a853]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-[#d4a853] hover:bg-[#c49843] text-[#1a2a4a] font-semibold text-base px-8 py-6 rounded-sm shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/apply">
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-sm border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="tel:+78001234567" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  8 (800) 123-45-67
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d4a853]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Info card (desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
              <h3 className="text-white mb-6">Кому мы помогаем:</h3>
              <ul className="space-y-4">
                {whoWeHelp.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-2 h-2 bg-[#d4a853] rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-sm">
                <p className="text-sm text-slate-300">
                  <span className="text-[#d4a853] font-semibold">Важно:</span> Все консультации 
                  проводятся конфиденциально. Работаем строго в рамках правового поля.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Who we help */}
        <div className="lg:hidden mt-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
            <h3 className="text-white mb-4">Кому мы помогаем:</h3>
            <div className="grid grid-cols-1 gap-3">
              {whoWeHelp.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 bg-[#d4a853] rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
    </section>
  );
}
