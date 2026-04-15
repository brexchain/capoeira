export type Language = 'DE' | 'PT';

export const translations = {
  DE: {
    nav: {
      home: 'Start',
      training: 'Training',
      news: 'Neuigkeiten',
      shop: 'Shop',
      belts: 'Kordelsystem',
      history: 'Geschichte',
      music: 'Musik',
      locations: 'Standorte',
      contact: 'Kontakt',
      admin: 'Admin'
    },
    hero: {
      badge: 'Rhythmus • Tanz • Kampf',
      title: 'ERLEBE',
      subtitle: 'Eine dynamische Fusion aus Akrobatik, Musik, Spiel und Kultur. Werde Teil unserer Gemeinschaft.',
      cta: 'Jetzt Starten'
    },
    stats: {
      years: 'Jahre Wien',
      locations: 'Standorte',
      classes: 'Klassen'
    },
    news: {
      title: 'Neuigkeiten',
      summarize: 'Zusammenfassen',
      summarizing: 'Wird zusammengefasst...'
    },
    training: {
      title: 'Trainingsplan',
      overview: 'Übersicht',
      all: 'Alle',
      adults: 'Erwachsene',
      kids: 'Kinder',
      music: 'Musik',
      register: 'Per WhatsApp anmelden',
      whatsappMsg: 'Hallo, ich interessiere mich für das Training: '
    },
    history: {
      title: 'Geschichte der Capoeira'
    },
    music: {
      title: 'Musik in der Capoeira'
    },
    belts: {
      title: 'Kordelsystem',
      subtitle: 'Die Graduierungen der Gruppe Meia Lua Inteira',
      description: 'In der Capoeira gibt es kein einheitliches Graduierungssystem. Jede Schule hat ihre eigenen Farben und Regeln. Hier ist das System unserer Gruppe:',
      levels: [
        { color: 'Crua (Rohweiß)', meaning: 'Anfänger' },
        { color: 'Crua-Amarela', meaning: 'Übergang' },
        { color: 'Amarela (Gelb)', meaning: 'Schüler' },
        { color: 'Amarela-Laranja', meaning: 'Übergang' },
        { color: 'Laranja (Orange)', meaning: 'Fortgeschrittener Schüler' },
        { color: 'Laranja-Azul', meaning: 'Monitor' },
        { color: 'Azul (Blau)', meaning: 'Graduado' },
        { color: 'Azul-Verde', meaning: 'Übergang' },
        { color: 'Verde (Grün)', meaning: 'Graduado' },
        { color: 'Verde-Roxa', meaning: 'Übergang' },
        { color: 'Roxa (Violett)', meaning: 'Instrutor' },
        { color: 'Roxa-Marrom', meaning: 'Übergang' },
        { color: 'Marrom (Braun)', meaning: 'Professor' },
        { color: 'Marrom-Vermelha', meaning: 'Übergang' },
        { color: 'Vermelha (Rot)', meaning: 'Mestre' }
      ]
    },
    promo: {
      urgent: 'WICHTIG'
    },
    shop: {
      title: 'Shop',
      order: 'WhatsApp Bestellung',
      whatsappMsg: 'Hallo, ich möchte folgendes Produkt bestellen: ',
      tshirt: 'Berimbau T-Shirt',
      instruments: 'Instrumente',
      price: 'Preis',
      buy: 'Kaufen',
      checkout: 'Bestellübersicht',
      upsellTitle: 'Das könnte dir auch gefallen:',
      nameLabel: 'Dein Name (Optional)',
      funnyNameBtn: 'Lustigen Capoeira-Namen würfeln',
      male: 'Männlich',
      female: 'Weiblich',
      preview: 'Nachrichtenvorschau:',
      send: 'Jetzt per WhatsApp bestellen'
    },
    contact: {
      whatsappTitle: 'WhatsApp Kontakt',
      whatsappSubtitle: 'Wähle ein Thema für deine Nachricht',
      options: [
        { id: 'trial', label: 'Probetraining', text: 'Hallo, ich würde gerne ein Probetraining vereinbaren. Wann kann ich vorbeikommen?' },
        { id: 'location', label: 'Standorte', text: 'Hallo, ich habe eine Frage zu euren Standorten/Trainingsorten.' },
        { id: 'shop', label: 'Shop/Ausrüstung', text: 'Hallo, ich interessiere mich für eure Ausrüstung/Shop-Artikel.' },
        { id: 'other', label: 'Allgemeine Anfrage', text: 'Hallo, ich habe eine allgemeine Frage zu Capoeira Wien.' }
      ],
      sendBtn: 'WhatsApp Nachricht senden'
    }
  },
  PT: {
    nav: {
      home: 'Início',
      training: 'Treino',
      news: 'Notícias',
      belts: 'Cordas',
      history: 'História',
      music: 'Música',
      locations: 'Locais',
      contact: 'Contato',
      admin: 'Admin',
      shop: 'Loja'
    },
    hero: {
      badge: 'Ritmo • Dança • Luta',
      title: 'VIVA A',
      subtitle: 'Uma fusão dinâmica de acrobacia, música, jogo e cultura. Faça parte da nossa comunidade.',
      cta: 'Começar Agora'
    },
    stats: {
      years: 'Anos em Viena',
      locations: 'Locais',
      classes: 'Aulas'
    },
    news: {
      title: 'Notícias',
      summarize: 'Resumir',
      summarizing: 'Resumindo...'
    },
    training: {
      title: 'Plano de Treino',
      overview: 'Visão Geral',
      all: 'Todos',
      adults: 'Adultos',
      kids: 'Crianças',
      music: 'Música',
      register: 'Inscrever via WhatsApp',
      whatsappMsg: 'Olá, estou interessado no treino: '
    },
    history: {
      title: 'História da Capoeira'
    },
    music: {
      title: 'Música na Capoeira'
    },
    belts: {
      title: 'Sistema de Cordas',
      subtitle: 'As graduações do grupo Meia Lua Inteira',
      description: 'Na Capoeira não existe um sistema de graduação único. Cada escola tem suas próprias cores e regras. Aqui está o sistema do nosso grupo:',
      levels: [
        { color: 'Crua (Branca)', meaning: 'Iniciante' },
        { color: 'Crua-Amarela', meaning: 'Transição' },
        { color: 'Amarela', meaning: 'Aluno' },
        { color: 'Amarela-Laranja', meaning: 'Transição' },
        { color: 'Laranja', meaning: 'Aluno Avançado' },
        { color: 'Laranja-Azul', meaning: 'Monitor' },
        { color: 'Azul', meaning: 'Graduado' },
        { color: 'Azul-Verde', meaning: 'Transição' },
        { color: 'Verde', meaning: 'Graduado' },
        { color: 'Verde-Roxa', meaning: 'Transição' },
        { color: 'Roxa', meaning: 'Instrutor' },
        { color: 'Roxa-Marrom', meaning: 'Transição' },
        { color: 'Marrom', meaning: 'Professor' },
        { color: 'Marrom-Vermelha', meaning: 'Transição' },
        { color: 'Vermelha', meaning: 'Mestre' }
      ]
    },
    promo: {
      urgent: 'URGENTE'
    },
    shop: {
      title: 'Loja',
      order: 'Pedido via WhatsApp',
      whatsappMsg: 'Olá, gostaria de encomendar o seguinte produto: ',
      tshirt: 'Camiseta Berimbau',
      instruments: 'Instrumentos',
      price: 'Preço',
      buy: 'Comprar',
      checkout: 'Resumo do Pedido',
      upsellTitle: 'Você também pode gostar:',
      nameLabel: 'Seu Nome (Opcional)',
      funnyNameBtn: 'Gerar nome engraçado de Capoeira',
      male: 'Masculino',
      female: 'Feminino',
      preview: 'Prévia da mensagem:',
      send: 'Pedir agora via WhatsApp'
    },
    contact: {
      whatsappTitle: 'Contato WhatsApp',
      whatsappSubtitle: 'Escolha um assunto para sua mensagem',
      options: [
        { id: 'trial', label: 'Treino Experimental', text: 'Olá, gostaria de agendar um treino experimental. Quando posso ir?' },
        { id: 'location', label: 'Locais', text: 'Olá, tenho uma pergunta sobre seus locais de treino.' },
        { id: 'shop', label: 'Loja/Equipamento', text: 'Olá, estou interessado em seus itens da loja/equipamentos.' },
        { id: 'other', label: 'Consulta Geral', text: 'Olá, tenho uma pergunta geral sobre a Capoeira Wien.' }
      ],
      sendBtn: 'Enviar mensagem via WhatsApp'
    }
  }
};
