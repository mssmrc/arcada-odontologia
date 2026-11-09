import type { ImageKey } from './images'

export type Treatment = {
  slug: string
  name: string
  /** Frase curta usada nos cartões da página inicial. */
  summary: string
  description: string
  indications: string[]
  duration: string
  image: ImageKey
  insurance: boolean
}

export const TREATMENTS: Treatment[] = [
  {
    slug: 'limpeza',
    name: 'Limpeza e prevenção',
    summary: 'Remoção de tártaro, polimento e flúor a cada seis meses.',
    description:
      'A limpeza profissional remove a placa e o tártaro que a escova não alcança, previne gengivite e permite encontrar cáries ainda pequenas. Na mesma consulta fazemos o exame clínico completo.',
    indications: ['Check-up semestral', 'Sangramento na gengiva', 'Mau hálito', 'Manchas de café ou cigarro'],
    duration: '40 minutos',
    image: 'limpeza',
    insurance: true,
  },
  {
    slug: 'restauracao',
    name: 'Clínica geral e restaurações',
    summary: 'Tratamento de cáries, canal e extrações com anestesia sem dor.',
    description:
      'Restaurações em resina na cor do dente, tratamento de canal e extrações simples. Usamos anestesia com aplicador eletrônico e radiografia digital, com menos radiação e resultado na hora.',
    indications: ['Cáries', 'Dente quebrado ou lascado', 'Sensibilidade ao frio', 'Dor de dente'],
    duration: '30 a 90 minutos',
    image: 'restauracao',
    insurance: true,
  },
  {
    slug: 'ortodontia',
    name: 'Ortodontia e alinhadores',
    summary: 'Aparelho fixo, autoligado ou alinhadores transparentes.',
    description:
      'Corrigimos dentes tortos, espaçados e problemas de mordida em crianças e adultos. Com o escaneamento digital, você vê uma simulação do resultado antes de começar.',
    indications: [
      'Dentes tortos ou apinhados',
      'Espaços entre os dentes',
      'Mordida cruzada ou aberta',
      'Recidiva de aparelho antigo',
    ],
    duration: '6 a 24 meses',
    image: 'ortodontia',
    insurance: false,
  },
  {
    slug: 'implantes',
    name: 'Implantes dentários',
    summary: 'Reposição de um ou vários dentes com planejamento digital.',
    description:
      'O implante substitui a raiz do dente perdido e recebe uma coroa de porcelana. Planejamos a cirurgia com tomografia e guia digital, o que deixa o procedimento mais rápido e previsível.',
    indications: [
      'Dente perdido ou extraído',
      'Prótese móvel que incomoda',
      'Ponte fixa antiga',
      'Protocolo para arcada inteira',
    ],
    duration: '3 a 6 meses (do implante à coroa)',
    image: 'implantes',
    insurance: false,
  },
  {
    slug: 'clareamento',
    name: 'Clareamento dental',
    summary: 'Dentes até oito tons mais claros, em consultório ou em casa.',
    description:
      'Fazemos clareamento em consultório, caseiro com moldeira sob medida ou a combinação dos dois. Antes, avaliamos a sensibilidade e tratamos o que for preciso para o resultado durar.',
    indications: [
      'Dentes amarelados',
      'Manchas de café, vinho ou chá',
      'Antes de um evento',
      'Manutenção de clareamento antigo',
    ],
    duration: '2 a 3 sessões',
    image: 'clareamento',
    insurance: false,
  },
  {
    slug: 'lentes',
    name: 'Lentes de contato e facetas',
    summary: 'Porcelana fina para mudar forma, cor e tamanho dos dentes.',
    description:
      'Lâminas de porcelana com 0,3 mm a 0,5 mm, coladas na frente dos dentes. Começamos com o desenho digital do sorriso e um ensaio na boca, para você aprovar o resultado antes da porcelana.',
    indications: [
      'Dentes pequenos ou desgastados',
      'Formato irregular',
      'Manchas que não saem com clareamento',
      'Espaços pequenos',
    ],
    duration: '3 a 4 consultas',
    image: 'lentes',
    insurance: false,
  },
]
