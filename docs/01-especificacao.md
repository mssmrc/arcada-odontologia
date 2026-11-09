# Especificação — Arcada Odontologia (case)

## Objetivo

Mostrar a clientes da área da saúde como um site de clínica pode **gerar agendamentos**: deixar claro
o que a clínica faz, passar confiança (equipe, estrutura, biossegurança) e levar o visitante ao WhatsApp
com a mensagem pronta.

## Público do site

Adultos de 25 a 60 anos do bairro e região, muitos com medo de dentista ou há tempo sem consulta,
e pais procurando atendimento infantil.

## Páginas

| Página      | Conteúdo principal                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Início      | Proposta, tratamentos, como é a primeira consulta, estrutura, equipe, depoimentos, convênios, FAQ |
| Tratamentos | Seis tratamentos com descrição, indicações, duração, forma de pagamento e botão de agendar        |
| A clínica   | História, forma de trabalhar, equipe com CRO e biossegurança                                      |
| Contato     | Formulário de agendamento (abre o WhatsApp), endereço, horários e mapa                            |
| Privacidade | Modelo de política (LGPD)                                                                         |

## Funcionalidades

- **Agendamento pelo WhatsApp:** o formulário valida nome e telefone, monta a mensagem e abre `wa.me`.
  O botão "Agendar" de cada tratamento já preenche o campo de tratamento (`/contato?tratamento=...`).
- **Botão flutuante do WhatsApp** em todas as páginas.
- **Mapa do Google** incorporado na página de contato.
- **Fotos com reserva:** se uma foto não existir, aparece um espaço reservado com a descrição.

## Identidade visual

| Token         | Valor     | Uso                           |
| ------------- | --------- | ----------------------------- |
| `--porcelain` | `#f3f7f8` | Fundo                         |
| `--petrol`    | `#0f2e3a` | Texto, faixas escuras, rodapé |
| `--teal`      | `#0f7c86` | Botões e links                |
| `--ice`       | `#dceef0` | Seções de apoio, tags         |
| `--sun`       | `#f4c04e` | Destaques pontuais e foco     |

- **Tipografia:** Urbanist (títulos) e Albert Sans (texto).
- **Marca visual:** o **arco** (arcada dentária) no logo e no recorte das fotos principais.
- Tom de voz: calmo, direto, sem jargão; foco em explicar antes de vender.
