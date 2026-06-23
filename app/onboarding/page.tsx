import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Onboarding | Gemma Automations",
  description: "Formulário de onboarding para clientes da Gemma Automations.",
};

export default function Onboarding() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="brand" aria-label="Gemma Automations">
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

          <a className="button button-small" href="/">
            Voltar ao site <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section
        className="section"
        style={{ minHeight: "80vh", paddingTop: "140px", paddingBottom: "60px" }}
      >
        <div className="container">
          <div
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <span className="section-kicker">Bem-vindo(a)</span>
            <h2>Onboarding de Cliente</h2>
            <p>
              Preencha o formulário abaixo para darmos início ao seu projeto e
              entendermos melhor suas necessidades.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/MozDssPC5Owy29fR1X9M"
              style={{ border: "none", width: "100%", minHeight: "800px" }}
              scrolling="no"
              id="MozDssPC5Owy29fR1X9M"
              title="survey"
            ></iframe>
            <Script src="https://link.msgsndr.com/js/form_embed.js" />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <a href="/" className="brand">
            <span className="brand-mark">
              <Image
                src="/generated-1781476266729.png"
                alt=""
                width={54}
                height={54}
              />
            </span>
            <span className="brand-copy">
              <strong>GEMMA</strong>
              <small>AUTOMATIONS</small>
            </span>
          </a>
          <p>Inteligência artificial aplicada para transformar negócios.</p>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Gemma Automations.</span>
          <span>Inteligência que transforma.</span>
        </div>
      </footer>
    </main>
  );
}
