import { SITE } from '~/content/site'

/** Logo provisório em SVG (arco = arcada dentária). Troque por /images/marca/logo.svg se quiser. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? ' logo--light' : ''}`}>
      <svg viewBox="0 0 40 40" aria-hidden="true" className="logo-mark">
        <path
          d="M6 34V20a14 14 0 0 1 28 0v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M14 34V21a6 6 0 0 1 12 0v13"
          fill="none"
          stroke="var(--sun)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo-text">
        <b>{SITE.shortName}</b>
        <small>odontologia</small>
      </span>
    </span>
  )
}
