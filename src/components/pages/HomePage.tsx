import { Link } from '@tanstack/react-router'
import { HOME_FAQ, INSURANCES } from '~/content/site'
import { TEAM, TESTIMONIALS } from '~/content/team'
import { TREATMENTS } from '~/content/treatments'
import { Faq } from '../Faq'
import { Photo } from '../Photo'

const FIRST_VISIT = [
  ['Conversa', 'Você conta o que incomoda e o que espera do tratamento. Sem cadeira, sem pressa.'],
  ['Exame e fotos', 'Exame clínico, fotos intraorais e radiografia digital, se for preciso.'],
  ['Plano por escrito', 'Você sai com as opções de tratamento, prazos e valores no papel.'],
  ['Você decide', 'Começamos quando você quiser, no convênio ou particular em até 12x.'],
] as const

const FACTS = [
  'Esterilização em autoclave classe B, com registro de cada ciclo',
  'Radiografia digital e escaneamento intraoral, sem moldagem com massa',
  'Anestesia com aplicador eletrônico, para uma picada mais suave',
  'Sala de atendimento infantil e acesso para cadeira de rodas',
] as const

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Clínica odontológica na Vila Mariana</p>
            <h1>Cuidar do sorriso sem pressa e sem susto.</h1>
            <p className="lead">
              Da limpeza semestral ao implante, cada tratamento começa com uma conversa e um plano por
              escrito. Você sabe o que vai ser feito, quanto custa e quanto tempo leva antes de sentar na
              cadeira.
            </p>
            <div className="ctas">
              <Link to="/contato" hash="agendar" className="btn btn--primary btn--lg">
                Agendar avaliação
              </Link>
              <Link to="/tratamentos" className="btn btn--ghost btn--lg">
                Ver tratamentos
              </Link>
            </div>
            <ul className="hero-points">
              <li>Convênios e particular</li>
              <li>Até 12x sem juros</li>
              <li>Urgência pelo WhatsApp</li>
            </ul>
          </div>
          <div className="hero-art">
            <div className="arch arch--hero">
              <Photo k="hero" eager />
            </div>
            <div className="hero-note">
              <strong>Avaliação completa</strong>
              <span>Exame, fotos e plano de tratamento por R$ 120, abatido se você fechar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Tratamentos</h2>
            <p className="lead">Seis áreas atendidas pela mesma equipe, no mesmo endereço.</p>
          </div>
          <ul className="treat-grid">
            {TREATMENTS.map((t) => (
              <li key={t.slug}>
                <Link to="/tratamentos" hash={t.slug} className="treat">
                  <div className="arch arch--card">
                    <Photo k={t.image} />
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.summary}</p>
                  {t.insurance && <span className="tag">Atende convênio</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Como é a primeira consulta</h2>
            <p className="lead">
              Uma hora reservada só para você, sem procedimento no primeiro dia se você não quiser.
            </p>
          </div>
          <ol className="steps">
            {FIRST_VISIT.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="mosaic">
            <div className="mosaic-a">
              <Photo k="consultorio" />
            </div>
            <div className="mosaic-b">
              <Photo k="instrumentos" />
            </div>
            <div className="mosaic-c">
              <Photo k="recepcao" />
            </div>
          </div>
          <div>
            <h2 className="h2">Uma clínica pequena, com equipamento de clínica grande</h2>
            <p className="lead">
              Somos três dentistas e quatro consultórios. Isso nos deixa conhecer cada paciente pelo nome e
              manter a agenda sem atrasos.
            </p>
            <ul className="checks">
              {FACTS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/clinica" className="link">
              Conheça a clínica e a equipe
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Quem vai cuidar de você</h2>
          </div>
          <ul className="team">
            {TEAM.map((m) => (
              <li key={m.name}>
                <div className="arch arch--portrait">
                  <Photo k={m.image} />
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                <small>{m.cro}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--petrol">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">O que os pacientes dizem</h2>
            <p className="lead">Depoimentos ilustrativos para este site demonstrativo.</p>
          </div>
          <div className="quotes">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name}>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <b>{t.name}</b> {t.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap insurances">
          <h2>Convênios aceitos</h2>
          <ul>
            {INSURANCES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-wrap">
          <div>
            <h2 className="h2">Perguntas frequentes</h2>
            <p className="lead">Não achou sua dúvida? Mande uma mensagem pelo WhatsApp.</p>
          </div>
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2 className="h2">Faz tempo que você não vai ao dentista?</h2>
              <p>Comece pela avaliação. Você sai com o diagnóstico e o plano no papel, sem compromisso.</p>
            </div>
            <Link to="/contato" hash="agendar" className="btn btn--sun btn--lg">
              Agendar avaliação
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
