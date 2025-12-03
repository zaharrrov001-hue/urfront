import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании - ЮрФронт",
  description:
    "Юридическая поддержка родственникам военнослужащих. Работаем быстро, конфиденциально и строго в рамках правового поля",
};

const whoWeHelp = [
  "Родителям военнослужащих",
  "Супругам и детям",
  "Близким родственникам мобилизованных и добровольцев",
  "Семьям погибших и пропавших без вести",
  "Представителям военнослужащих по доверенности",
];

const values = [
  {
    icon: Shield,
    title: "Строго в рамках правового поля",
    description: "Работаем только законными методами, обеспечивая полную правовую защиту",
  },
  {
    icon: Users,
    title: "Конфиденциальность",
    description: "Гарантируем полную конфиденциальность всех обращений и данных",
  },
  {
    icon: FileText,
    title: "Профессионализм",
    description: "Опытные юристы с глубоким знанием военного и гражданского права",
  },
  {
    icon: CheckCircle2,
    title: "Результативность",
    description: "Добиваемся положительных результатов в большинстве случаев",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            О компании
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Наш сервис предоставляет гражданскую юридическую поддержку родственникам
            военнослужащих, мобилизованных и добровольцев
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Описание */}
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">О нашем сервисе</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600">
              <p>
                Мы помогаем решать вопросы, связанные с выплатами, статусами, социальными
                гарантиями и взаимодействием с государственными структурами. Работаем быстро,
                конфиденциально и строго в рамках правового поля.
              </p>
              <p>
                Наша команда состоит из опытных юристов, специализирующихся на вопросах,
                связанных с военной службой и социальной защитой военнослужащих и их семей.
              </p>
            </CardContent>
          </Card>

          {/* Кому помогаем */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Кому мы оказываем помощь</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {whoWeHelp.map((item, index) => (
                <Card key={index} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="flex items-center p-6">
                    <CheckCircle2 className="mr-4 h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ценности */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Наши принципы</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-slate-200 bg-white shadow-sm">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-slate-600">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

