import { createFileRoute } from '@tanstack/react-router'
import { AppointmentForm } from '~/components/AppointmentForm'
import { SITE } from '~/content/site'
import { TREATMENTS } from '~/content/treatments'
import { whatsappLink } from '~/lib/whatsapp'

export const Route = createFileRoute('/contato')({
  // ?tratamento=... vem do botão "Agendar" da página de tratamentos e só é aceito se existir.
  validateSearch: (search: Record<string, unknown>): { tratamento?: string } => {
    const t = typeof search.tratamento === 'string' ? search.tratamento : undefined
    return t && TREATMENTS.some((x) => x.name === t) ? { tratamento: t } : {}
  },
  head: () => ({
    meta: [
      { title: `Contato e agendamento · ${SITE.name}` },
      {
        name: 'description',
        content: `Agende sua avaliação pelo WhatsApp. ${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city}.`,
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const { tratamento } = Route.useSearch()
  const map = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Agende sua avaliação</h1>
          <p className="lead">
            Preencha os campos e a mensagem abre pronta no seu WhatsApp. Se preferir, ligue para {SITE.phone}.
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap contact-grid">
          <div className="form-card" id="agendar">
            <h2>Pedido de agendamento</h2>
            <AppointmentForm key={tratamento ?? ''} defaultTreatment={tratamento ?? ''} />
          </div>
          <aside className="contact-info">
            <div>
              <h2>Endereço</h2>
              <p>
                {SITE.address.street}
                <br />
                {SITE.address.district}, {SITE.address.city}
                <br />
                CEP {SITE.address.zip}
              </p>
            </div>
            <div>
              <h2>Fale com a gente</h2>
              <p>
                <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.whatsapp}
                </a>
                <br />
                <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
                <br />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
            <div>
              <h2>Horários</h2>
              <dl className="hours">
                {SITE.hours.map(([d, h]) => (
                  <div key={d}>
                    <dt>{d}</dt>
                    <dd>{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
        <div className="wrap">
          <iframe
            className="map"
            title={`Mapa: ${SITE.address.mapQuery}`}
            src={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
