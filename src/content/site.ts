/**
 * Dados gerais da clínica (FICTÍCIOS — troque pelos dados reais do cliente).
 * Tudo que aparece em mais de uma página fica aqui.
 */

export const SITE = {
  name: 'Arcada Odontologia',
  shortName: 'Arcada',
  tagline: 'Odontologia sem pressa, do check-up ao sorriso novo.',
  description:
    'Clínica odontológica com clínica geral, ortodontia, implantes, clareamento e lentes de contato dental. Agende sua avaliação.',
  responsible: 'Responsável técnica: Dra. Helena Duarte · CRO-SP 00000',
  phone: '(11) 3000-0000',
  whatsapp: '(11) 99999-0000',
  whatsappNumber: '5511999990000',
  email: 'contato@exemplo.com.br',
  instagram: '@arcada.odonto',
  address: {
    street: 'Rua Exemplo, 123 — sala 45',
    district: 'Vila Mariana',
    city: 'São Paulo — SP',
    zip: '00000-000',
    /** Usado no mapa incorporado da página de contato. */
    mapQuery: 'Vila Mariana, São Paulo - SP',
  },
  hours: [
    ['Segunda a sexta', '8h às 20h'],
    ['Sábado', '8h às 13h'],
    ['Urgências', 'pelo WhatsApp, todos os dias'],
  ],
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE = 'Site demonstrativo. Empresa, profissionais, depoimentos e contatos são fictícios.'
export const DEV_CREDIT = {
  name: 'Runa Web',
  text: 'Desenvolvido por',
  /** Site da empresa que assina o projeto (link do rodapé). */
  url: 'https://runaweb.com.br',
} as const

export const INSURANCES = [
  'Amil Dental',
  'Bradesco Dental',
  'OdontoPrev',
  'SulAmérica Odonto',
  'Porto Seguro Odonto',
  'Particular',
]

export const HOME_FAQ: [string, string][] = [
  [
    'Quanto custa a primeira consulta?',
    'A avaliação inicial custa R$ 120 e inclui exame clínico, fotos intraorais e um plano de tratamento por escrito. Se você fechar o tratamento, o valor é abatido.',
  ],
  [
    'Vocês atendem convênio?',
    'Sim. Atendemos os principais convênios odontológicos para consultas, limpeza, restaurações e extrações. Tratamentos estéticos e implantes são particulares, com parcelamento.',
  ],
  [
    'Dá para parcelar o tratamento?',
    'Sim. Parcelamos em até 12x sem juros no cartão de crédito e oferecemos desconto para pagamento à vista no Pix.',
  ],
  [
    'Tenho medo de dentista. Como vocês lidam com isso?',
    'Explicamos cada etapa antes de começar, combinamos um sinal para pausar e usamos anestesia com aplicador eletrônico, que reduz o desconforto da picada. A primeira consulta é só conversa e exame.',
  ],
  [
    'Atendem crianças?',
    'Sim. A Dra. Beatriz atende crianças a partir de 1 ano, com consultas mais curtas e uma sala preparada para elas.',
  ],
]
