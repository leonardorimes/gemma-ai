import Image from "next/image";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  DatabaseZap,
  Instagram,
  Menu,
  MessageCircle,
  Network,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5522992724146?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Gemma%20e%20quero%20automatizar%20meu%20neg%C3%B3cio.";

const services = [
  {
    icon: Bot,
    number: "01",
    title: "Agentes de IA",
    description:
      "Assistentes inteligentes treinados para atender, vender, qualificar e operar 24 horas por dia.",
    items: ["Atendimento autônomo", "Qualificação de leads"],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Automações",
    description:
      "Fluxos que eliminam tarefas repetitivas e conectam as ferramentas que sua empresa já utiliza.",
    items: ["Processos sem retrabalho", "Integração entre sistemas"],
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Chatbots inteligentes",
    description:
      "Conversas naturais no WhatsApp, Instagram e site, com contexto e foco em conversão.",
    items: ["Respostas instantâneas", "Atendimento omnichannel"],
  },
  {
    icon: DatabaseZap,
    number: "04",
    title: "Integrações sob medida",
    description:
      "Soluções personalizadas para conectar CRMs, ERPs, APIs e bancos de dados ao seu fluxo.",
    items: ["Dados centralizados", "Operação conectada"],
  },
  {
    icon: BrainCircuit,
    number: "05",
    title: "IA para vendas",
    description:
      "Tecnologia que identifica oportunidades, nutre contatos e ajuda seu time a fechar mais.",
    items: ["Follow-up automático", "Mais oportunidades"],
  },
  {
    icon: Code2,
    number: "06",
    title: "Sistemas inteligentes",
    description:
      "Aplicações e dashboards desenvolvidos para resolver os desafios específicos do seu negócio.",
    items: ["Projetos personalizados", "Visão em tempo real"],
  },
];

const process = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Entendemos sua operação, objetivos e onde a IA pode gerar mais impacto.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Desenhamos a solução ideal e um plano claro de implementação.",
  },
  {
    number: "03",
    title: "Construção",
    text: "Desenvolvemos, integramos e testamos cada etapa do projeto.",
  },
  {
    number: "04",
    title: "Evolução",
    text: "Acompanhamos os resultados e aprimoramos a solução continuamente.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Gemma Automations">
            <span className="brand-mark">
              <Image
                src="/generated-1781476266729.png"
                alt=""
                width={54}
                height={54}
                priority
              />
            </span>
            <span className="brand-copy">
              <strong>GEMMA</strong>
              <small>AUTOMATIONS</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">Soluções</a>
            <a href="#resultados">Por que a Gemma</a>
            <a href="#processo">Como funciona</a>
          </nav>

          <a
            className="button button-small"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Fale com a Gemma <ArrowRight size={16} />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <Menu className="menu-open" />
              <X className="menu-close" />
            </summary>
            <nav>
              <a href="#servicos">Soluções</a>
              <a href="#resultados">Por que a Gemma</a>
              <a href="#processo">Como funciona</a>
              <a href={whatsappUrl}>Falar no WhatsApp</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="grid-lines" />
        <div className="container hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Inteligência artificial aplicada ao seu negócio
          </div>

          <h1>
            Menos tarefas.
            <br />
            Mais <span>inteligência.</span>
          </h1>

          <p className="hero-description">
            Criamos automações e agentes de IA que trabalham pelo seu negócio,
            reduzem custos e transformam processos em resultados.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Quero automatizar meu negócio <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#servicos">
              Conheça as soluções <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <Zap size={17} />
              <span>
                <strong>24/7</strong> Operação sem pausas
              </span>
            </div>
            <div>
              <TrendingUp size={17} />
              <span>
                <strong>Escalável</strong> Cresce com você
              </span>
            </div>
            <div>
              <Sparkles size={17} />
              <span>
                <strong>Sob medida</strong> Feito para seu negócio
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core">
            <Image
              src="/generated-1781476266729.png"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 70vw, 560px"
            />
          </div>
          <div className="data-pill pill-one">
            <span><Network size={15} /></span>
            Sistemas conectados
          </div>
          <div className="data-pill pill-two">
            <span><Clock3 size={15} /></span>
            Ativo 24 horas
          </div>
          <div className="data-pill pill-three">
            <span><Sparkles size={15} /></span>
            IA personalizada
          </div>
        </div>

        <a href="#servicos" className="scroll-cue" aria-label="Ver soluções">
          <span />
          Explore
        </a>
      </section>

      <section className="marquee" aria-label="Especialidades">
        <div>
          <span>AGENTES DE IA</span><i />
          <span>AUTOMAÇÕES</span><i />
          <span>CHATBOTS</span><i />
          <span>INTEGRAÇÕES</span><i />
          <span>INTELIGÊNCIA DE DADOS</span><i />
          <span>AGENTES DE IA</span><i />
          <span>AUTOMAÇÕES</span><i />
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">O que criamos</span>
              <h2>Tecnologia que trabalha<br />por você.</h2>
            </div>
            <p>
              Do atendimento à gestão, desenvolvemos soluções inteligentes para
              sua empresa operar melhor, vender mais e crescer sem aumentar a
              complexidade.
            </p>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, ...service }) => (
              <article className="service-card" key={service.title}>
                <div className="card-top">
                  <span className="service-icon"><Icon size={24} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}><Check size={14} /> {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section results" id="resultados">
        <div className="container results-grid">
          <div className="results-visual">
            <div className="metric-card metric-main">
              <span>Eficiência operacional</span>
              <strong>+ tempo</strong>
              <div className="chart">
                {[28, 38, 33, 51, 58, 70, 88].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="metric-card metric-small">
              <span className="metric-icon"><TrendingUp size={18} /></span>
              <div><strong>Escala</strong><small>sem perder qualidade</small></div>
            </div>
            <div className="visual-ring"><div><BrainCircuit size={40} /></div></div>
          </div>

          <div className="results-copy">
            <span className="section-kicker">Por que escolher a Gemma</span>
            <h2>IA não é o futuro.<br /><span>É a sua vantagem agora.</span></h2>
            <p>
              Não entregamos tecnologia pela tecnologia. Entendemos o seu
              negócio para construir soluções que geram impacto real, desde o
              primeiro dia.
            </p>
            <div className="benefit-list">
              <div>
                <span><Clock3 size={19} /></span>
                <div><strong>Ganhe tempo</strong><p>Automatize o operacional e foque nas decisões.</p></div>
              </div>
              <div>
                <span><TrendingUp size={19} /></span>
                <div><strong>Aumente resultados</strong><p>Converta mais oportunidades com processos inteligentes.</p></div>
              </div>
              <div>
                <span><Network size={19} /></span>
                <div><strong>Conecte sua operação</strong><p>Dados, sistemas e pessoas trabalhando em sintonia.</p></div>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link bright">
              Descobrir minha oportunidade <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="container">
          <div className="section-heading process-heading">
            <div>
              <span className="section-kicker">Como funciona</span>
              <h2>Do desafio à solução.</h2>
            </div>
            <p>Um processo claro, colaborativo e focado em colocar inteligência para trabalhar o quanto antes.</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <article key={item.number}>
                <div className="process-number">{item.number}</div>
                {index < process.length - 1 && <div className="process-line" />}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-glow" />
        <div className="container cta-content">
          <span className="section-kicker">Vamos começar?</span>
          <h2>Seu negócio pode<br />trabalhar de forma <span>mais inteligente.</span></h2>
          <p>Conte o seu desafio. A Gemma transforma em solução.</p>
          <a
            className="button button-primary button-large"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} /> Conversar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <a href="#inicio" className="brand">
            <span className="brand-mark">
              <Image
                src="/generated-1781476266729.png"
                alt=""
                width={54}
                height={54}
              />
            </span>
            <span className="brand-copy"><strong>GEMMA</strong><small>AUTOMATIONS</small></span>
          </a>
          <p>Inteligência artificial aplicada para transformar negócios.</p>
          <div className="footer-links">
            <a href="#servicos">Soluções</a>
            <a href="#resultados">Sobre</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Contato</a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Gemma Automations.</span>
          <span>Inteligência que transforma.</span>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a Gemma pelo WhatsApp"
      >
        <MessageCircle size={25} />
        <span>Fale com a Gemma</span>
      </a>
    </main>
  );
}
