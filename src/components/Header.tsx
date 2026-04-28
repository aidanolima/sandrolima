"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import perfilImg from "../../public/images/perfil.png";

const navLinks = [
  { name: "Serviços", href: "#services" },
  { name: "Captação", href: "#captacao" },
  { name: "Processo", href: "#roadmap" },
  { name: "Resultados", href: "#results" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0c0e12]/85 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border-2 border-neon/50 overflow-hidden transition-transform group-hover:scale-110 group-hover:border-neon shadow-[0_0_10px_rgba(204,255,0,0.2)]">
            <Image 
              src={perfilImg} 
              alt="Sandro Lima" 
              fill
              className="object-cover"
            />
          </div>
          <span className="font-grotesk text-xl font-black text-neon tracking-[0.08em] uppercase italic">
            SANDRO LIMA
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-grotesk text-[0.8rem] font-semibold uppercase tracking-widest text-foreground/60 hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link 
            href="https://api.whatsapp.com/send?phone=558183126809" 
            target="_blank"
            className="bg-neon text-[#1a2000] font-grotesk text-[0.75rem] font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:scale-105 hover:shadow-[0_0_18px_rgba(204,255,0,0.35)] transition-all"
          >
            Diagnóstico Grátis
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0e12] border-t border-white/5 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="flex flex-direction-column py-4 px-6 gap-4 flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-grotesk text-sm font-semibold uppercase tracking-widest text-foreground/70 py-3 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://api.whatsapp.com/send?phone=558183126809"
              target="_blank"
              className="text-neon font-grotesk text-sm font-bold uppercase tracking-widest py-3"
              onClick={() => setIsOpen(false)}
            >
              → Diagnóstico Grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
