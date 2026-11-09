import { Link } from '@tanstack/react-router'
import { DEMO_NOTICE, DEV_CREDIT, SITE } from '~/content/site'
import { TREATMENTS } from '~/content/treatments'
import { whatsappLink } from '~/lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{SITE.tagline}</p>
          <p className="footer-small">{SITE.responsible}</p>
        </div>
        <nav aria-label="Tratamentos">
          <h2>Tratamentos</h2>
          {TREATMENTS.map((t) => (
            <Link key={t.slug} to="/tratamentos" hash={t.slug}>
              {t.name}
            </Link>
          ))}
        </nav>
        <div>
          <h2>Contato</h2>
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <p className="footer-small">
            {SITE.address.street}
            <br />
            {SITE.address.district}, {SITE.address.city}
          </p>
        </div>
        <div>
          <h2>Horários</h2>
          <dl className="footer-hours">
            {SITE.hours.map(([d, h]) => (
              <div key={d}>
                <dt>{d}</dt>
                <dd>{h}</dd>
              </div>
            ))}
          </dl>
          <Link to="/privacidade">Política de privacidade</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text}{' '}
          <a href={DEV_CREDIT.url} target="_blank" rel="noopener noreferrer">
            <strong>{DEV_CREDIT.name}</strong>
          </a>
        </p>
      </div>
    </footer>
  )
}
