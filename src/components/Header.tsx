import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { SITE } from '~/content/site'
import { Logo } from './Logo'

const NAV = [
  { to: '/', label: 'Início' },
  { to: '/tratamentos', label: 'Tratamentos' },
  { to: '/clinica', label: 'A clínica' },
  { to: '/contato', label: 'Contato' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>
            {SITE.address.district}, {SITE.address.city}
          </span>
          <span className="topbar-hours">Seg a sex, 8h às 20h · Sáb, 8h às 13h</span>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>{SITE.phone}</a>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-in">
          <Link to="/" aria-label={`${SITE.name}, página inicial`} onClick={close}>
            <Logo />
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Principal">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={close}
                activeOptions={{ exact: n.to === '/' }}
                activeProps={{ className: 'active', 'aria-current': 'page' }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contato" hash="agendar" className="btn btn--primary nav-cta-mobile" onClick={close}>
              Agendar avaliação
            </Link>
          </nav>
          <div className="header-actions">
            <Link to="/contato" hash="agendar" className="btn btn--primary header-cta">
              Agendar avaliação
            </Link>
            <button
              className="burger"
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-controls="nav"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
