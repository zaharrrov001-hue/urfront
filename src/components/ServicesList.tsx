import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "payments",
    title: "Выплаты и компенсации",
    description: "Проверка оснований, подготовка заявлений, сопровождение с ведомствами",
    items: [
      "Единовременные выплаты",
      "Ежемесячные компенсации",
      "Региональные выплаты",
      "Обжалование отказов",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="6" y="12" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M6 20H42" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 28H16M32 28H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "statuses",
    title: "Статусы и документы",
    description: "Оформление статусов, получение справок и подтверждающих документов",
    items: [
      "Статус члена семьи",
      "Подтверждение участия в СВО",
      "Справки и выписки",
      "Согласование данных",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M12 6H30L36 12V42H12V6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M30 6V12H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 20H30M18 26H30M18 32H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="36" r="8" fill="currentColor" opacity="0.2"/>
        <path d="M29 36L31 38L35 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "social",
    title: "Социальная поддержка",
    description: "Оформление льгот, пособий и других мер социальной поддержки",
    items: [
      "Федеральные льготы",
      "Региональные пособия",
      "Ежемесячные начисления",
      "Сложные случаи",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 42C24 42 6 32 6 20C6 14 10 10 16 10C20 10 23 12 24 15C25 12 28 10 32 10C38 10 42 14 42 20C42 32 24 42 24 42Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 30V22M24 22L20 26M24 22L28 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "loss",
    title: "Утрата или ранение",
    description: "Помощь в сложных ситуациях, связанных с утратой или ранением",
    items: [
      "ЕДВ и компенсации",
      "Оформление инвалидности",
      "Подтверждение факта",
      "Сопровождение дел",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 6L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: "conflicts",
    title: "Споры и конфликты",
    description: "Решение конфликтов и защита прав в спорных ситуациях",
    items: [
      "Несоответствие документов",
      "Обжалование решений",
      "Судебная защита",
      "Досудебное урегулирование",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 8V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 14L10 22V28C10 30 12 32 14 32H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 14L38 22V28C38 30 36 32 34 32H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <ellipse cx="15" cy="28" rx="6" ry="3" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="33" cy="28" rx="6" ry="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14V40M20 40H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function ServicesList() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-8 md:mb-12">
          <span className="text-[#d4a853] font-semibold text-xs uppercase tracking-widest">
            Услуги
          </span>
          <h2 className="mt-3 text-[#1a2a4a]">
            Чем мы помогаем
          </h2>
          <p className="mt-4 text-slate-600">
            Комплексная юридическая поддержка по всем вопросам
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="h-full border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-sm"
            >
              <CardHeader className="pb-4">
                <div className="hidden sm:block mb-4 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2.5 md:p-3 lg:p-3.5 rounded-sm bg-[#1a2a4a] group-hover:bg-[#d4a853] transition-colors duration-300 text-[#d4a853] group-hover:text-[#1a2a4a]">
                  {service.icon}
                </div>
                <CardTitle className="text-[#1a2a4a]">{service.title}</CardTitle>
                <p className="text-slate-600 mt-2">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <span className="mr-3 h-2 w-2 rounded-full bg-[#d4a853] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group/btn hover:bg-slate-50 text-[#1a2a4a] hover:text-[#d4a853] text-sm"
                >
                  <Link href={`/services#${service.id}`}>
                    <span>Подробнее</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
