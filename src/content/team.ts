import type { ImageKey } from './images'

/** Equipe FICTÍCIA. Troque nomes, CRO e fotos pelos dados reais. */
export const TEAM: { name: string; role: string; cro: string; bio: string; image: ImageKey }[] = [
  {
    name: 'Dra. Helena Duarte',
    role: 'Clínica geral e estética',
    cro: 'CRO-SP 00000',
    bio: 'Fundadora da Arcada, atende há 18 anos. Especialista em dentística, cuida de restaurações, clareamento e lentes de contato.',
    image: 'equipe-1',
  },
  {
    name: 'Dr. Rafael Moura',
    role: 'Implantodontia e prótese',
    cro: 'CRO-SP 00001',
    bio: 'Mestre em implantodontia. Planeja cada cirurgia com tomografia e guia digital, de um dente à arcada completa.',
    image: 'equipe-2',
  },
  {
    name: 'Dra. Beatriz Lins',
    role: 'Ortodontia e odontopediatria',
    cro: 'CRO-SP 00002',
    bio: 'Atende crianças a partir de 1 ano e adultos que querem alinhar os dentes com aparelho ou alinhadores.',
    image: 'equipe-3',
  },
]

/** Depoimentos ILUSTRATIVOS para o case. Substitua por avaliações reais (com autorização). */
export const TESTIMONIALS: { text: string; name: string; detail: string }[] = [
  {
    text: 'Fiquei dez anos sem ir ao dentista por medo. A Dra. Helena explicou tudo antes e combinou comigo um sinal para pausar. Hoje vou às revisões sem ansiedade.',
    name: 'Mariana S.',
    detail: 'Clínica geral',
  },
  {
    text: 'Coloquei dois implantes com o Dr. Rafael. A cirurgia foi rápida, e eu já sabia o resultado porque vi o planejamento na tela antes.',
    name: 'Carlos E.',
    detail: 'Implantes',
  },
  {
    text: 'Meu filho de 6 anos pede para voltar. A sala das crianças e a paciência da Dra. Beatriz fazem toda a diferença.',
    name: 'Juliana P.',
    detail: 'Odontopediatria',
  },
]
