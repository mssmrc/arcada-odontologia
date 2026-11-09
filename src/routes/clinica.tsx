import { Link, createFileRoute } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { SITE } from '~/content/site'
import { TEAM } from '~/content/team'

export const Route = createFileRoute('/clinica')({
  head: () => ({
    meta: [
      { title: `A clínica e a equipe · ${SITE.name}` },
      {
        name: 'description',
        content: 'Conheça a equipe, a estrutura e os protocolos de biossegurança da Arcada Odontologia.',
      },
    ],
  }),
  component: ClinicPage,
})

const VALUES = [
  [
    'Explicar antes de fazer',
    'Mostramos fotos, radiografias e a simulação do tratamento. Nada começa sem você entender e aprovar.',
  ],
  [
    'Agenda que se cumpre',
    'Reservamos tempo de sobra entre os pacientes. O atraso médio na nossa sala de espera é de 5 minutos.',
  ],
  ['Tratar o necessário', 'Indicamos só o que você precisa agora e deixamos claro o que pode esperar.'],
] as const

const SAFETY = [
  'Autoclave classe B com teste biológico semanal',
  'Instrumentos embalados e abertos na sua frente',
  'Barreiras descartáveis trocadas a cada paciente',
  'Purificador de ar com filtro HEPA nos consultórios',
] as const

function ClinicPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split split--hero">
          <div>
            <h1 className="h1">Uma clínica do bairro, desde 2008</h1>
            <p className="lead">
              A Dra. Helena abriu a Arcada com um consultório e uma ideia simples: atender cada paciente como
              gostaria de ser atendida. Hoje somos três dentistas, quatro consultórios e mais de 4 mil
              pacientes acompanhados.
            </p>
          </div>
          <div className="arch arch--wide">
            <Photo k="atendimento" eager />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Como trabalhamos</h2>
          </div>
          <div className="values">
            {VALUES.map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Equipe</h2>
            <p className="lead">
              Todos os dentistas são inscritos no Conselho Regional de Odontologia de São Paulo.
            </p>
          </div>
          <ul className="team team--bio">
            {TEAM.map((m) => (
              <li key={m.name}>
                <div className="arch arch--portrait">
                  <Photo k={m.image} />
                </div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <small>{m.cro}</small>
                <p>{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="h2">Biossegurança</h2>
            <p className="lead">
              Seguimos as normas da Anvisa e do CRO, e registramos cada ciclo de esterilização.
            </p>
            <ul className="checks">
              {SAFETY.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="gallery">
            <Photo k="instrumentos" />
            <Photo k="consultorio" />
            <Photo k="recepcao" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2 className="h2">Venha conhecer pessoalmente</h2>
              <p>
                {SITE.address.street}, {SITE.address.district}. Estacionamento conveniado a 50 metros.
              </p>
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
