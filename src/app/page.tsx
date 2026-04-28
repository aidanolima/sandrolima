import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import Link from "next/link"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111317] text-[#e2e2e8] font-sans">
      <Header />
      <Hero />
      
      {/* WHY SECTION */}
      <section id="why" className="py-24 bg-[#0c0e12]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 translate-y-8 animate-[fadeUp_0.6s_ease_forwards]">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">
              Por que SANDRO LIMA?
            </span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-4">
              Resultados que <span className="text-[#ccff00]">Falam por Si</span>
            </h2>
            <p className="text-[#c4c9ac] text-lg max-w-2xl mx-auto leading-relaxed">
              Não entregamos apenas cliques — entregamos crescimento previsível e escalável com estratégia e dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#ccff00]/10 flex items-center justify-center text-2xl mb-5">📈</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Maximização de ROI</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">Cada real investido é rastreado. Acompanhamos seu retorno em tempo real e ajustamos as campanhas para performance máxima.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#3131c0]/20 flex items-center justify-center text-2xl mb-5">🎯</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Segmentação Cirúrgica</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">Encontramos seu cliente ideal — onde ele está, no momento exato de compra. Sem desperdício de verba, só resultado.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#6900b3]/20 flex items-center justify-center text-2xl mb-5">🔍</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Monitoramento 24/7</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">Acesso a alertas e especialistas disponíveis para suas campanhas digitais em tempo real, todos os dias.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#ccff00]/10 flex items-center justify-center text-2xl mb-5">⚡</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Maior Alcance</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">O tráfego pago coloca sua marca na frente de quem ainda não te conhece. Expanda além da sua audiência atual.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#3131c0]/20 flex items-center justify-center text-2xl mb-5">🔁</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Remarketing Inteligente</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">Recuperamos visitantes que não converteram com anúncios personalizados e estratégias de retargeting avançadas.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/20 hover:shadow-[0_0_30px_rgba(204,255,0,0.06)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#6900b3]/20 flex items-center justify-center text-2xl mb-5">📊</div>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Análise de Dados</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed">Tomamos decisões baseadas em dados concretos — não em achismos. Relatórios claros, transparentes e acionáveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#111317]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#ccff00] font-grotesk text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-4">Serviços</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold">Gestão de <span className="text-[#ccff00]">Tráfego Completa</span></h2>
            <p className="text-[#c4c9ac] mt-4 max-w-2xl">Do diagnóstico à escala, gerenciamos todo o seu ecossistema de anúncios pagos.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Serviço 1 - Destaque */}
            <div className="bg-[#1a1c20] border border-[#ccff00]/25 shadow-[0_0_30px_rgba(204,255,0,0.08)] rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-5 right-5 bg-[#ccff00] text-[#1a2000] font-grotesk text-[0.6rem] font-bold tracking-widest px-3 py-1 rounded-full">DESTAQUE</div>
              <div className="text-[#ccff00] font-grotesk text-[0.7rem] font-bold tracking-widest uppercase mb-4">Google Ads</div>
              <h3 className="font-grotesk text-xl font-bold text-white mb-2">Gestão de Google Ads</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed mb-6">Capturamos a intenção de compra no exato momento em que o usuário pesquisa. Seus anúncios aparecem no topo para quem já quer comprar.</p>
              <ul className="flex flex-col gap-3">
                {['Pesquisa, Display, Shopping e YouTube Ads', 'Palavras-chave de alta conversão selecionadas cirurgicamente', 'Lances automáticos com Machine Learning', 'Relatórios mensais detalhados de performance'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#c4c9ac] text-sm"><span className="text-[#ccff00]">↗</span> {item}</li>
                ))}
              </ul>
            </div>

            {/* Serviço 2 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/15 hover:shadow-[0_0_24px_rgba(204,255,0,0.05)] transition-all">
              <div className="text-[#ccff00] font-grotesk text-[0.7rem] font-bold tracking-widest uppercase mb-4">Meta Ads</div>
              <h3 className="font-grotesk text-xl font-bold text-white mb-2">Facebook & Instagram Ads</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed mb-6">Engajamos usuários no Instagram e Facebook com criativos persuasivos e segmentação de público avançada para escalar suas conversões.</p>
              <ul className="flex flex-col gap-3">
                {['Campanhas de consciência, consideração e conversão', 'Lookalike Audiences e públicos personalizados', 'Testes A/B contínuos de criativos e copies', 'Pixel configurado e eventos rastreados corretamente'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#c4c9ac] text-sm"><span className="text-[#ccff00]">↗</span> {item}</li>
                ))}
              </ul>
            </div>

            {/* Serviço 3 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/15 hover:shadow-[0_0_24px_rgba(204,255,0,0.05)] transition-all">
              <div className="text-[#ccff00] font-grotesk text-[0.7rem] font-bold tracking-widest uppercase mb-4">Remarketing</div>
              <h3 className="font-grotesk text-xl font-bold text-white mb-2">Estratégias de Remarketing</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed mb-6">Recuperamos carrinhos abandonados, reengajamos visitantes e fidelizamos clientes com campanhas de retargeting ultra-personalizadas.</p>
              <ul className="flex flex-col gap-3">
                {['Sequências de anúncios baseadas em comportamento', 'Recuperação de carrinhos com ofertas estratégicas', 'Segmentação por estágio do funil', 'Retargeting cross-platform (Google + Meta)'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#c4c9ac] text-sm"><span className="text-[#ccff00]">↗</span> {item}</li>
                ))}
              </ul>
            </div>

            {/* Serviço 4 */}
            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 hover:border-[#ccff00]/15 hover:shadow-[0_0_24px_rgba(204,255,0,0.05)] transition-all">
              <div className="text-[#ccff00] font-grotesk text-[0.7rem] font-bold tracking-widest uppercase mb-4">Mentoria</div>
              <h3 className="font-grotesk text-xl font-bold text-white mb-2">Mentoria Estratégica Individual</h3>
              <p className="text-[#c4c9ac] text-sm leading-relaxed mb-6">100% personalizada para o seu modelo de negócio. Chamadas semanais, revisão de contas e implementação de táticas exclusivas de escala.</p>
              <ul className="flex flex-col gap-3">
                {['Análise comportamental do seu público-alvo', 'Processos customizados para seu nicho', 'Otimização contínua da taxa de conversão', 'Acesso direto via WhatsApp para dúvidas'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#c4c9ac] text-sm"><span className="text-[#ccff00]">↗</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAPTAÇÃO SECTION */}
      <section id="captacao" className="py-24 bg-[#0c0e12]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Captação de Leads</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-4">Soluções Completas de <span className="text-[#ccff00]">Captação</span></h2>
            <p className="text-[#c4c9ac] text-lg max-w-2xl mx-auto">Construímos sua base de clientes com captação qualificada, público-alvo preciso e comunicação direta via WhatsApp.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              {[
                { icon: "📋", title: "Perfis Personalizados", desc: "Criamos perfis de clientes-alvo com base em características, interesses e comportamentos específicos do seu negócio." },
                { icon: "🔬", title: "Segmentação Avançada", desc: "Identificamos os segmentos mais valiosos para sua empresa através de análises detalhadas de dados e comportamento." },
                { icon: "📱", title: "Extração de Contatos", desc: "Capturamos leads ativos em grupos do WhatsApp, bases online e redes sociais relevantes ao seu nicho — em conformidade com a LGPD." },
                { icon: "⚙️", title: "Enriquecimento de Dados", desc: "Complementamos os dados com informações relevantes para qualificação e segmentação mais assertiva." }
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1c20] border border-white/5 border-l-[3px] border-l-[#ccff00] rounded-r-lg p-6">
                  <h4 className="font-grotesk font-semibold text-white mb-2">{item.icon} {item.title}</h4>
                  <p className="text-[#c4c9ac] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 lg:p-10">
              <h3 className="font-grotesk text-2xl font-bold text-white mb-8">Mentoria de <span className="text-[#ccff00]">Captação</span></h3>
              <div className="flex flex-col">
                {[
                  { num: "01", title: "Diagnóstico", desc: "Analisamos seu processo atual de captação e identificamos oportunidades de crescimento imediato." },
                  { num: "02", title: "Estratégia", desc: "Desenvolvemos um plano personalizado para aumentar a geração e qualificação de leads." },
                  { num: "03", title: "Implementação", desc: "Acompanhamos cada passo da implementação com orientação técnica especializada." },
                  { num: "04", title: "Otimização Contínua", desc: "Monitoramos e ajustamos continuamente a estratégia para maximizar conversões." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 py-6 border-b border-white/5 last:border-0 last:pb-0 first:pt-0">
                    <div className="w-10 h-10 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] font-grotesk font-bold text-sm flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h5 className="font-grotesk font-semibold text-white mb-1">{step.title}</h5>
                      <p className="text-[#c4c9ac] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMAÇÃO WHATSAPP */}
      <section id="automacao" className="py-24 bg-[#111317]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Automação WhatsApp</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-4">Comunicação Direta via <span className="text-[#ccff00]">WhatsApp</span></h2>
            <p className="text-[#c4c9ac] text-lg max-w-2xl mx-auto">Automatize o atendimento, qualifique leads 24h por dia e aumente drasticamente sua taxa de conversão.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Atendimento 24/7", desc: "Resposta imediata a todos os contatos, mesmo fora do horário comercial. Nenhum lead perdido." },
              { num: "02", title: "Triagem Eficiente", desc: "Classificação automática de leads com base em suas perguntas, interesses e estágio de compra." },
              { num: "03", title: "Experiência Personalizada", desc: "Mensagens adaptadas ao perfil e necessidades de cada cliente potencial — não mensagens genéricas." },
              { num: "04", title: "Otimização Contínua", desc: "Monitoramos e ajustamos as respostas automáticas para melhorar continuamente a taxa de conversão." }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1c20] border border-white/5 rounded-xl p-8 text-center hover:border-[#c0c1ff]/20 hover:-translate-y-1 transition-all">
                <div className="font-grotesk text-4xl font-bold text-[#c0c1ff] mb-4">{card.num}</div>
                <h4 className="font-grotesk font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-[#c4c9ac] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 bg-[#0c0e12] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Roadmap da Mentoria</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-4">O Caminho para <span className="text-[#ccff00]">a Escala</span></h2>
            <p className="text-[#c4c9ac] text-lg max-w-2xl mx-auto">Um processo estruturado e comprovado para levar seu negócio do diagnóstico à dominância de mercado.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Linha Central */}
            <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ccff00]/30 to-transparent md:-translate-x-1/2" />

            {[
              { num: "01 — Diagnóstico", title: "Análise Profunda", desc: "Análise profunda da estrutura atual, contas de anúncio, KPIs e histórico de conversão. Identificamos os gaps e oportunidades de crescimento imediato." },
              { num: "02 — Estratégia", title: "Plano de Ataque", desc: "Criamos o plano de guerrilha criativa: audiências, criativos e fluxo de conversão desenhados especificamente para o seu mercado e orçamento." },
              { num: "03 — Implementação", title: "Execução Cirúrgica", desc: "Setup técnico completo e lançamento das campanhas. Acompanhamos cada etapa para garantir performance desde o primeiro dia." },
              { num: "04 — Escala", title: "Dominância de Mercado", desc: "Ajuste fino de lances, expansão de orçamento e clonagem das campanhas vencedoras para dominar o mercado e escalar sem limite." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-0 mb-12 items-start relative pl-[4.5rem] md:pl-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-[calc(50%-2rem)] bg-[#1a1c20] border border-white/5 rounded-xl p-7 relative ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="font-grotesk text-[0.7rem] font-bold tracking-widest uppercase text-[#ccff00] mb-2">{item.num}</div>
                  <h3 className="font-grotesk font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#c4c9ac] text-sm leading-relaxed">{item.desc}</p>
                </div>
                {/* Dot */}
                <div className="absolute left-[1.5rem] top-6 md:left-1/2 w-4 h-4 rounded-full bg-[#ccff00] shadow-[0_0_16px_rgba(204,255,0,0.6)] z-10 -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 bg-[#111317]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Nossos Números</span>
              <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-6">Resultados que <span className="text-[#ccff00]">Provam</span> Tudo</h2>
              <p className="text-[#c4c9ac] leading-relaxed mb-10">
                Não entregamos apenas cliques. Entregamos crescimento previsível. No último trimestre, nossos clientes e mentorados atingiram uma média de 4.8x de ROAS.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { num: "R$ 12M+", lbl: "Investimento Gerenciado" },
                  { num: "350%", lbl: "Crescimento Lead-to-Sale" },
                  { num: "4.8x", lbl: "ROAS Médio dos Clientes" },
                  { num: "30-60d", lbl: "Para Performance Máxima" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#ccff00] pl-5">
                    <div className="font-grotesk text-3xl font-bold text-white">{stat.num}</div>
                    <div className="font-grotesk text-[0.65rem] font-bold tracking-widest uppercase text-[#c4c9ac] mt-1">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#282a2e] border border-white/5 rounded-xl p-8 flex flex-col gap-4">
              <div className="font-grotesk text-[0.7rem] font-bold tracking-widest uppercase text-[#c4c9ac] mb-2">Crescimento de ROAS — Últimos 6 Meses</div>
              <div className="flex items-end gap-2 h-40">
                {[
                  { height: "28%", label: "JAN", highlight: false },
                  { height: "40%", label: "FEV", highlight: false },
                  { height: "38%", label: "MAR", highlight: false },
                  { height: "62%", label: "ABR", highlight: false },
                  { height: "75%", label: "MAI", highlight: false },
                  { height: "95%", label: "JUN", highlight: true, top: "+124%" }
                ].map((bar, i) => (
                  <div key={i} className={`flex-1 rounded-t-md relative ${bar.highlight ? 'bg-gradient-to-t from-[#86bb00] to-[#ccff00] shadow-[0_-8px_20px_rgba(204,255,0,0.3)]' : 'bg-gradient-to-t from-[#3131c0] to-[#c0c1ff]'}`} style={{ height: bar.height }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-grotesk text-[0.6rem] font-bold text-[#c4c9ac] whitespace-nowrap">{bar.label}</span>
                    {bar.top && <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#ccff00] text-[#1a2000] font-grotesk text-[0.6rem] font-bold px-2 py-1 rounded whitespace-nowrap">{bar.top}</span>}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex justify-between text-sm"><span className="text-[#c4c9ac]">Taxa de conversão média</span><span className="text-[#ccff00] font-grotesk font-bold">+87%</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#c4c9ac]">Custo por Lead reduzido</span><span className="text-[#ccff00] font-grotesk font-bold">-43%</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#c4c9ac]">Leads qualificados gerados</span><span className="text-[#ccff00] font-grotesk font-bold">+215%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-24 bg-[#0c0e12]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Ferramentas & Tecnologias</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold mb-4">Tecnologia de <span className="text-[#ccff00]">Ponta</span> a Seu Favor</h2>
            <p className="text-[#c4c9ac] text-lg max-w-2xl mx-auto">Usamos as melhores ferramentas do mercado para maximizar seus resultados.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🗃️", title: "CRM Avançado", desc: "Gestão centralizada de contatos, leads e oportunidades em um único painel." },
              { icon: "🤖", title: "Chatbots WhatsApp", desc: "Automação inteligente de respostas e atendimento para nunca perder um lead." },
              { icon: "📉", title: "Análise de Dados", desc: "Monitoramento e otimização contínua dos resultados com dashboards em tempo real." },
              { icon: "📧", title: "Email Marketing", desc: "Envio de campanhas de e-mail personalizadas integradas à sua estratégia de tráfego." }
            ].map((tool, i) => (
              <div key={i} className="bg-[#1a1c20] border border-white/5 rounded-xl p-6 text-center hover:border-[#c0c1ff]/20 transition-all">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h4 className="font-grotesk font-semibold text-white mb-2">{tool.title}</h4>
                <p className="text-[#c4c9ac] text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#111317]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-grotesk text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#ccff00] mb-4">Dúvidas Frequentes</span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold">Perguntas <span className="text-[#ccff00]">Frequentes</span></h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {[
              { q: "Preciso de um orçamento mínimo para começar?", a: "Recomendamos um investimento mínimo mensal para que os algoritmos tenham dados suficientes para otimizar. Durante a consultoria gratuita, avaliamos seu nicho e sugerimos o valor ideal para sua realidade e objetivos." },
              { q: "Como funciona a mentoria individual?", a: "A mentoria é 100% personalizada. Através de chamadas semanais, revisamos suas contas, corrigimos erros estratégicos e implementamos novas táticas de escala exclusivas para o seu modelo de negócio. Você também tem acesso direto via WhatsApp." },
              { q: "Em quanto tempo vejo os primeiros resultados?", a: "Enquanto as campanhas geram tráfego imediato, a estabilização e otimização real costumam levar de 30 a 60 dias para atingir a performance máxima de ROAS. Campanhas de tráfego pago geram resultados desde o primeiro dia de veiculação." },
              { q: "Vocês trabalham com quais plataformas?", a: "Trabalhamos com Google Ads (pesquisa, display, shopping, YouTube), Meta Ads (Facebook e Instagram), além de estratégias de captação via WhatsApp, email marketing e remarketing cross-platform." },
              { q: "A captação de contatos via WhatsApp é legal?", a: "Sim. Garantimos que todos os contatos sejam obtidos de forma ética e em conformidade com a LGPD (Lei Geral de Proteção de Dados). Trabalhamos apenas com metodologias permitidas e transparentes." }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#1a1c20] border border-white/5 rounded-xl overflow-hidden open:border-[#ccff00]/20 transition-all" open={i === 0}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-grotesk font-semibold text-white hover:bg-white/[0.02]">
                  {faq.q}
                  <span className="text-[#ccff00] text-2xl font-light group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-[#c4c9ac] text-sm leading-relaxed border-t border-white/5 mx-6 mt-0">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-28 bg-gradient-to-br from-[#ccff00]/5 to-[#3131c0]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#ccff00] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(204,255,0,0.2)]">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full pointer-events-none" />
            
            <p className="font-grotesk text-[0.7rem] font-bold uppercase tracking-widest text-[#1a2000]/60 mb-4">Mentoria Individual — Vagas Limitadas</p>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold text-[#1a2000] mb-6 uppercase tracking-tight">Pronto para Dominar Seu Mercado?</h2>
            <p className="text-[#1a2000]/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              As vagas para mentoria individual são limitadas para garantir a qualidade e atenção em cada projeto. Não perca a sua oportunidade.
            </p>
            
            <Link 
              href="https://api.whatsapp.com/send?phone=558183126809" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#0c0e12] text-white font-grotesk font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all"
            >
              🚀 Solicitar Diagnóstico Grátis
            </Link>
            
            <p className="mt-6 text-[0.8rem] text-[#1a2000]/60 font-grotesk">Sem compromisso · Resposta em até 24h</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <Link 
        href="https://api.whatsapp.com/send?phone=558183126809" 
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all"
        aria-label="Fale no WhatsApp"
      >
        <MessageCircle size={28} color="white" fill="white" />
      </Link>
    </main>
  );
}