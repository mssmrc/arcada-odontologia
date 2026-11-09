import { Link, createFileRoute } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { SITE } from '~/content/site'
import { TREATMENTS } from '~/content/treatments'

export const Route = createFileRoute('/tratamentos')({
  head: () => ({
    meta: [
      { title: `Tratamentos · ${SITE.name}` },
      {
        name: 'description',
        content:
          'Limpeza, restaurações, ortodontia, implantes, clareamento e lentes de contato dental. Veja como funciona cada tratamento.',
      },
    ],
  }),
  component: TreatmentsPage,
})

function TreatmentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Tratamentos</h1>
          <p className="lead">
            O que fazemos, para quem é indicado e quanto tempo leva. Os valores dependem da avaliação, porque
            cada boca é diferente.
          </p>
          <nav className="chips" aria-label="Ir para o tratamento">
            {TREATMENTS.map((t) => (
              <a key={t.slug} href={`#${t.slug}`}>
                {t.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap treat-list">
          {TREATMENTS.map((t) => (
            <article key={t.slug} id={t.slug} className="treat-row">
              <div className="arch arch--row">
                <Photo k={t.image} />
              </div>
              <div className="treat-row-body">
                <h2 className="h2">{t.name}</h2>
                <p>{t.description}</p>
                <h3>Indicado para</h3>
                <ul className="checks checks--2col">
                  {t.indications.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <dl className="treat-meta">
                  <div>
                    <dt>Duração</dt>
                    <dd>{t.duration}</dd>
                  </div>
                  <div>
                    <dt>Pagamento</dt>
                    <dd>{t.insurance ? 'Convênio ou particular' : 'Particular, até 12x sem juros'}</dd>
                  </div>
                </dl>
                <Link
                  to="/contato"
                  search={{ tratamento: t.name }}
                  hash="agendar"
                  className="btn btn--primary"
                >
                  Agendar avaliação para {t.name.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
