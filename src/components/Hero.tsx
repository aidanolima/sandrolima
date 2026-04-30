import Link from "next/link";
import { Rocket } from "lucide-react";

const stats = [
  { value: "R$50M+", label: "Investimento Gerenciado" },
  { value: "2.8x", label: "ROAS Médio" },
  { value: "350%", label: "Crescimento Lead-to-Sale" },
  { value: "30+", label: "Clientes Escalados" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[60%] h-[50%] bg-secondary/10 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-[10%] left-0 w-[50%] h-[60%] bg-neon/5 blur-[120px] rounded-full -z-10 -translate-x-1/4" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon font-grotesk text-[0.7rem] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              Performance & Growth
            </div>
            
            <h1 className="font-grotesk text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Escalando Negócios com <span className="text-neon">Tráfego Pago</span> de Alta Performance
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Transformamos dados brutos em lucro escalável através de mentorias estratégicas e gestão de tráfego com precisão algorítmica. Facebook Ads, Google Ads e muito mais.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://api.whatsapp.com/send?phone=558183126809&text=Ol%C3%A1%2C%20venho%20do%20portal%20Sandro%20Lima%2C%20e%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20gerais%20sobre%20os%20seus%20servi%C3%A7os..." target="_blank" className="btn-primary">
                <Rocket size={18} />
                Solicitar Diagnóstico Grátis
              </Link>
              <Link href="#services" className="btn-ghost">
                Ver Serviços
              </Link>
            </div>
          </div>

          <div className="bg-surface-low border border-foreground/5 rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-neon/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-surface-container border border-foreground/5 rounded-lg p-5">
                  <div className="font-grotesk text-3xl font-bold text-neon">{stat.value}</div>
                  <div className="font-grotesk text-[0.65rem] font-semibold uppercase tracking-widest text-foreground/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface-container rounded-lg p-6 border border-foreground/5 h-32 flex items-end gap-2">
              {[30, 45, 38, 60, 52, 95].map((height, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-gradient-to-t from-[#86bb00] to-neon shadow-[0_-8px_20px_rgba(204,255,0,0.3)]' : 'bg-gradient-to-t from-secondary-container to-secondary'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
