import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Выплаты и компенсации", href: "/services#payments" },
    { name: "Статусы и документы", href: "/services#statuses" },
    { name: "Социальные меры поддержки", href: "/services#social" },
    { name: "Утрата или ранение", href: "/services#loss" },
  ],
  company: [
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
    { name: "Подать заявку", href: "/apply" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1a2a4a] border-t border-[#2d3e5f]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d4a853] rounded-sm flex items-center justify-center">
                <svg 
                  viewBox="0 0 40 40" 
                  className="w-[70%] h-[70%] text-[#1a2a4a]"
                  fill="currentColor"
                >
                  <path d="M20 4L20 8M20 8L8 14M20 8L32 14M8 14L8 20C8 22 10 24 12 24C14 24 16 22 16 20L16 14M32 14L32 20C32 22 30 24 28 24C26 24 24 22 24 20L24 14M20 8L20 32M16 32L24 32" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <ellipse cx="12" cy="20" rx="5" ry="2" fill="currentColor" opacity="0.3"/>
                  <ellipse cx="28" cy="20" rx="5" ry="2" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">ЮрФронт</h3>
            </Link>
            <p className="text-sm text-slate-400">
              Юридическая поддержка родственникам военнослужащих, мобилизованных и добровольцев.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#d4a853] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#d4a853] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+78001234567" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-[#d4a853] transition-colors">
                  <Phone className="h-4 w-4 text-[#d4a853]" />
                  <span>8 (800) 123-45-67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@yurfront.ru" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-[#d4a853] transition-colors">
                  <Mail className="h-4 w-4 text-[#d4a853]" />
                  <span>info@yurfront.ru</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-[#d4a853]" />
                <span>Работаем дистанционно по всей России</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#2d3e5f] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ЮрФронт. Все права защищены.
          </p>
          <p className="text-xs text-slate-600">
            Работаем строго в рамках правового поля
          </p>
        </div>
      </div>
    </footer>
  );
}
