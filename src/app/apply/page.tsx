import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Подать заявку - ЮрФронт",
  description:
    "Заполните форму заявки, и наш специалист свяжется с вами в течение рабочего дня",
};

const benefits = [
  "Бесплатная консультация",
  "Быстрый ответ в течение рабочего дня",
  "Конфиденциальность гарантирована",
  "Работаем дистанционно по всей России",
];

export default function ApplyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Подать заявку
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Заполните форму, и наш специалист свяжется с вами в течение рабочего дня
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Преимущества</CardTitle>
                  <CardDescription>Что вы получите, обратившись к нам</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

