import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты - ЮрФронт",
  description: "Свяжитесь с нами любым удобным способом. Работаем дистанционно по всей России",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    content: "8 (800) 123-45-67",
    description: "Бесплатный звонок по России",
    link: "tel:+78001234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@yurfront.ru",
    description: "Ответим в течение рабочего дня",
    link: "mailto:info@yurfront.ru",
  },
  {
    icon: MapPin,
    title: "Работаем дистанционно",
    content: "По всей России",
    description: "Не требуется личное присутствие",
    link: null,
  },
  {
    icon: Clock,
    title: "Режим работы",
    content: "Пн-Пт: 9:00 - 18:00",
    description: "МСК",
    link: null,
  },
];

export default function ContactsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Контакты
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Свяжитесь с нами любым удобным способом. Мы работаем дистанционно по всей России
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <Card key={contact.title} className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-2 text-base text-slate-600">
                    {contact.description}
                  </CardDescription>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-slate-900">{contact.content}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Подать заявку</CardTitle>
              <CardDescription>
                Заполните форму заявки, и наш специалист свяжется с вами в течение рабочего дня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/apply">Перейти к форме заявки</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

