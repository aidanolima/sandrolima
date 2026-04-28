import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Why Section Placeholder */}
      <section id="why" className="py-24 bg-surface-lowest">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-12">
            Por que <span className="text-neon">SANDRO LIMA</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards would go here following the pattern in Hero */}
            <div className="p-8 bg-surface-low rounded-xl border border-white/5 h-64 flex items-center justify-center text-foreground/30 italic">
              Seção "Why" em desenvolvimento...
            </div>
            <div className="p-8 bg-surface-low rounded-xl border border-white/5 h-64 flex items-center justify-center text-foreground/30 italic">
              Seção "Why" em desenvolvimento...
            </div>
            <div className="p-8 bg-surface-low rounded-xl border border-white/5 h-64 flex items-center justify-center text-foreground/30 italic">
              Seção "Why" em desenvolvimento...
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <section id="services" className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-neon font-grotesk text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4">Serviços</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold">Gestão de <span className="text-neon">Tráfego Completa</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-surface-low rounded-xl border border-white/5 h-80 flex items-center justify-center text-foreground/30 italic">
              Cards de Serviços em desenvolvimento...
            </div>
            <div className="p-12 bg-surface-low rounded-xl border border-white/5 h-80 flex items-center justify-center text-foreground/30 italic">
              Cards de Serviços em desenvolvimento...
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section Placeholder */}
      <section id="roadmap" className="py-24 bg-surface-lowest">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-16">O Caminho para <span className="text-neon">a Escala</span></h2>
          <div className="max-w-4xl mx-auto p-12 bg-surface-low rounded-xl border border-white/5 h-96 flex items-center justify-center text-foreground/30 italic">
            Timeline de Roadmap em desenvolvimento...
          </div>
        </div>
      </section>

      {/* Results Section Placeholder */}
      <section id="results" className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="h-96 bg-surface-low rounded-xl border border-white/5 flex items-center justify-center text-foreground/30 italic">
              Estatísticas detalhadas em desenvolvimento...
            </div>
            <div className="h-96 bg-surface-low rounded-xl border border-white/5 flex items-center justify-center text-foreground/30 italic">
              Visualização de dados em desenvolvimento...
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 bg-gradient-to-br from-neon/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-neon rounded-[20px] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(204,255,0,0.2)]">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
            
            <p className="font-grotesk text-[0.7rem] font-bold uppercase tracking-widest text-[#1a2000]/50 mb-4">Mentoria Individual — Vagas Limitadas</p>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold text-[#1a2000] mb-8 uppercase tracking-tight">Pronto para Dominar Seu Mercado?</h2>
            <p className="text-[#1a2000]/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              As vagas para mentoria individual são limitadas para garantir a qualidade e atenção em cada projeto. Não perca a sua oportunidade.
            </p>
            
            <Link 
              href="https://api.whatsapp.com/send?phone=558183126809" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#0c0e12] text-white font-grotesk font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all"
            >
              🚀 Solicitar Diagnóstico Grátis
            </Link>
            
            <p className="mt-6 text-[0.8rem] text-[#1a2000]/50 font-grotesk">Sem compromisso · Resposta em até 24h</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <Link 
        href="https://api.whatsapp.com/send?phone=558183126809" 
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all"
      >
        <MessageCircle size={28} color="white" fill="white" />
      </Link>
    </main>
  );
}
