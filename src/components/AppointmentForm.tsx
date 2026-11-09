import { useState, type FormEvent } from 'react'
import { SITE } from '~/content/site'
import { TREATMENTS } from '~/content/treatments'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'

const PERIODS = ['Manhã (8h às 12h)', 'Tarde (12h às 18h)', 'Noite (18h às 20h)', 'Sábado de manhã']

/**
 * Formulário de agendamento. Não envia nada para servidor: monta a mensagem e abre o
 * WhatsApp do visitante com o texto pronto para a clínica.
 */
export function AppointmentForm({ defaultTreatment = '' }: { defaultTreatment?: string }) {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Preencha seu nome e um telefone com DDD para a clínica retornar.')
      return
    }
    setError('')
    const message = buildMessage(`Olá! Gostaria de agendar uma avaliação na ${SITE.name}.`, [
      ['Nome', get('nome')],
      ['Telefone', get('telefone')],
      ['Tratamento', get('tratamento')],
      ['Melhor período', get('periodo')],
      ['Convênio', get('convenio')],
      ['Observações', get('mensagem')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          Nome completo
          <input name="nome" autoComplete="name" required />
        </label>
        <label>
          WhatsApp com DDD
          <input
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Tratamento
          <select name="tratamento" defaultValue={defaultTreatment}>
            <option value="">Ainda não sei, quero uma avaliação</option>
            {TREATMENTS.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Melhor período
          <select name="periodo" defaultValue="">
            <option value="">Qualquer horário</option>
            {PERIODS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Convênio (opcional)
        <input name="convenio" placeholder="Ex.: Amil Dental ou particular" />
      </label>
      <label>
        Conte o que está sentindo (opcional)
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Ex.: dor ao mastigar do lado esquerdo há uma semana"
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-ok" role="status">
          Abrimos o WhatsApp com sua mensagem. É só tocar em enviar.
        </p>
      )}
      <button className="btn btn--primary btn--lg" type="submit">
        Enviar pelo WhatsApp
      </button>
      <p className="form-note">Respondemos em até 1 hora no horário de atendimento.</p>
    </form>
  )
}
