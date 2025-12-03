"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav className="container mx-auto flex h-18 items-center justify-between px-4 py-3">
        <Logo variant="light" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1a2a4a] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4a853] after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link 
            href="tel:+78001234567" 
            className="flex items-center gap-2 text-sm text-[#1a2a4a] hover:text-[#d4a853] transition-colors font-medium"
          >
            <Phone className="h-4 w-4" />
            <span>8 (800) 123-45-67</span>
          </Link>
          <Button asChild className="bg-[#1a2a4a] hover:bg-[#2d3e5f] text-white rounded-sm px-6">
            <Link href="/apply">Подать заявку</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#1a2a4a]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <SheetHeader>
              <SheetTitle className="text-[#1a2a4a]">Меню</SheetTitle>
              <SheetDescription>Навигация по сайту</SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-slate-700 transition-colors hover:text-[#1a2a4a] py-2 border-b border-slate-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="tel:+78001234567" 
                className="flex items-center gap-2 text-[#1a2a4a] py-2 font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>8 (800) 123-45-67</span>
              </Link>
              <Button asChild className="mt-4 bg-[#1a2a4a] hover:bg-[#2d3e5f] rounded-sm">
                <Link href="/apply" onClick={() => setOpen(false)}>
                  Подать заявку
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
