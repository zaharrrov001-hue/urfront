import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Услуги - ЮрФронт",
  description:
    "Выплаты и компенсации, статусы и документы, социальные меры поддержки, помощь при утрате или ранении, решение конфликтных ситуаций",
};

const services = [
  {
    id: "payments",
    title: "Выплаты и компенсации для родственников",
    description:
      "Помощь в получении всех положенных выплат и компенсаций для родственников военнослужащих",
    details: [
      "Проверка оснований для получения выплат",
      "Подготовка заявлений и документов",
      "Сопровождение взаимодействия с ведомствами",
      "Обжалование отказов в выплатах",
      "Консультации по порядку получения компенсаций",
    ],
  },
  {
    id: "statuses",
    title: "Статусы и подтверждающие документы",
    description:
      "Оформление статусов и получение всех необходимых подтверждающих документов",
    details: [
      "Присвоение статуса члена семьи военнослужащего",
      "Подтверждение участия в СВО",
      "Получение извещений, справок, запросов",
      "Согласование данных с ведомствами",
      "Восстановление утерянных документов",
    ],
  },
  {
    id: "social",
    title: "Социальные меры поддержки",
    description: "Оформление всех видов социальной поддержки и льгот",
    details: [
      "Оформление льгот различного характера",
      "Получение пособий и выплат",
      "Ежемесячные начисления",
      "Решение сложных случаев",
      "Консультации по социальным гарантиям",
    ],
  },
  {
    id: "loss",
    title: "Утрата или ранение",
    description:
      "Помощь в сложных ситуациях, связанных с утратой или ранением военнослужащего",
    details: [
      "Подтверждение факта гибели или пропажи без вести",
      "Оформление ЕДВ и региональных компенсаций",
      "Оформление инвалидности",
      "Сопровождение сложных ситуаций",
      "Правовая поддержка в вопросах наследования",
    ],
  },
  {
    id: "conflicts",
    title: "Конфликтные ситуации",
    description: "Решение конфликтов и защита прав в спорных ситуациях",
    details: [
      "Разрешение несоответствий в документах",
      "Устранение задержек в предоставлении информации",
      "Обжалование решений ведомств",
      "Судебная защита интересов",
      "Медиация и досудебное урегулирование",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Наши услуги
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Комплексная юридическая поддержка по всем вопросам, связанным с военной службой
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {String(index + 1).padStart(2, "0")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="my-4" />
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Что мы делаем:
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-slate-600">
                        <span className="mr-3 mt-1 text-blue-600">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

