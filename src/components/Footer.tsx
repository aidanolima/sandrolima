import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-lowest border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full border-2 border-neon/50 overflow-hidden transition-transform group-hover:scale-110 group-hover:border-neon shadow-[0_0_10px_rgba(204,255,0,0.1)]">
                <Image 
                  src="/images/perfil.png" 
                  alt="Sandro Lima" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-grotesk text-xl font-black text-neon tracking-[0.08em] uppercase italic">
                SANDRO LIMA
              </span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-[280px]">
              Especialistas em tráfego pago, gestão de campanhas de redes sociais e captação de leads de alta performance. Transformamos dados em crescimento escalável.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: "https://instagram.com" },
                { icon: <Facebook size={18} />, href: "https://facebook.com" },
                { icon: <MessageCircle size={18} />, href: "https://api.whatsapp.com/send?phone=558183126809" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-foreground/50 hover:border-neon hover:text-neon transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-grotesk text-[0.75rem] font-bold uppercase tracking-widest text-white mb-6">Serviços</h5>
            <ul className="space-y-3">
              {["Google Ads", "Facebook & Instagram Ads", "Remarketing", "Captação de Leads", "Automação WhatsApp", "Mentoria Individual"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-foreground/50 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-grotesk text-[0.75rem] font-bold uppercase tracking-widest text-white mb-6">Empresa</h5>
            <ul className="space-y-3">
              {["Por que nós", "Resultados", "Nosso Processo", "FAQ", "Diagnóstico Grátis"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-foreground/50 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-grotesk text-[0.75rem] font-bold uppercase tracking-widest text-white mb-6">Contato</h5>
            <div className="space-y-4">
              <Link href="tel:+558183126809" className="flex items-center gap-3 text-foreground/50 text-sm hover:text-neon transition-colors">
                <Phone size={16} /> +55 81 8312-6809
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=558183126809" target="_blank" className="flex items-center gap-3 text-foreground/50 text-sm hover:text-neon transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </Link>
              <Link href="mailto:sandrodelay@gmail.com" className="flex items-center gap-3 text-foreground/50 text-sm hover:text-neon transition-colors">
                <Mail size={16} /> sandrodelay@gmail.com
              </Link>
              <div className="flex items-center gap-3 text-foreground/50 text-sm">
                <MapPin size={16} /> Brasil
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 text-neon font-grotesk text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                  <CheckCircle2 size={12} /> ✓ LGPD Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="font-grotesk text-[0.72rem] tracking-wider text-white/20 uppercase">
            © 2024 SANDRO LIMA — High-Performance Traffic Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso", "Cookies"].map((legal) => (
              <Link key={legal} href="#" className="font-grotesk text-[0.72rem] tracking-wider text-white/20 uppercase hover:text-white/40 transition-colors">
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
