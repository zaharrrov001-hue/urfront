"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Shield, Clock, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
});

type FormValues = z.infer<typeof formSchema>;

const benefits = [
  { icon: CheckCircle, text: "Бесплатная консультация" },
  { icon: Clock, text: "Ответ в течение 30 минут" },
  { icon: Shield, text: "Конфиденциальность" },
];

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Заявка отправлена!",
        description: "Наш специалист свяжется с вами в ближайшее время",
      });
      reset();
    } catch {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#d4a853] font-semibold text-xs uppercase tracking-widest">
              Заявка
            </span>
            <h2 className="mt-3 text-[#1a2a4a]">
              Оставьте заявку
            </h2>
            <p className="mt-4 text-slate-600">
              Укажите ваши контактные данные, и мы свяжемся с вами
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Benefits sidebar - Order changed for mobile */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="space-y-4">
                {/* Benefits list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white rounded-sm border border-slate-200"
                      >
                        <div className="flex-shrink-0 h-10 w-10 rounded-sm bg-[#1a2a4a] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#d4a853]" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Phone CTA */}
                <div className="p-6 bg-[#1a2a4a] rounded-sm text-white">
                  <h3 className="text-white mb-2">
                    Нужна срочная помощь?
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Позвоните нам прямо сейчас
                  </p>
                  <a
                    href="tel:+78001234567"
                    className="inline-flex items-center gap-2 text-[#d4a853] font-semibold hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    8 (800) 123-45-67
                  </a>
                </div>
              </div>
            </div>

            {/* Form - First on mobile */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <Card className="border-slate-200 shadow-lg rounded-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-[#1a2a4a]">Форма заявки</CardTitle>
                  <CardDescription>
                    Укажите имя и номер телефона для связи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                      >
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Иван Иванов"
                        className={`h-12 rounded-sm text-base ${errors.name ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-slate-700"
                      >
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+7 (999) 123-45-67"
                        className={`h-12 rounded-sm text-base ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#d4a853] hover:bg-[#c49843] text-[#1a2a4a] font-semibold h-14 text-base rounded-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-[#1a2a4a] border-t-transparent" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Отправить заявку
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="#" className="text-[#1a2a4a] hover:underline">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
