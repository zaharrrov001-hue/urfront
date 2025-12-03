import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a2a4a]" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4a853]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d4a853]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white">
            Получите бесплатную консультацию
          </h2>
          <p className="mt-6 text-slate-300">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
            для обсуждения вашей ситуации
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-[#d4a853] text-[#1a2a4a] hover:bg-[#c49843] font-semibold text-base px-8 py-6 rounded-sm shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/apply">
                <MessageCircle className="mr-2 h-5 w-5" />
                Оставить заявку
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 rounded-sm border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="tel:+78001234567">
                <Phone className="mr-2 h-5 w-5" />
                8 (800) 123-45-67
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Бесплатный звонок по всей России • Работаем ежедневно
          </p>
        </div>
      </div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
    </section>
  );
}
