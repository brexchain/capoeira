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
      title: 'Geschichte der Capoeira',
      groupTitle: 'Meia Lua Inteira',
      groupDescription: 'Die Associação Meia Lua Inteira wurde 1990 von Mestre Birilo in Recife, Pernambuco, gegründet. Nur zwei Jahre später wurde der Verein Meia Lua Inteira in Wien ins Leben gerufen.',
      categories: [
        { id: 'origins', title: 'Ursprung', desc: 'Gegründet 1990 in Recife, Pernambuco von Mestre Birilo.' },
        { id: 'vienna', title: 'Wien', desc: 'Seit 1992 in Wien aktiv. 1997 kam Mestre Will, 1998 Mestre Mula und 1999 Mestre Carlinhos.' },
        { id: 'philosophy', title: 'Philosophie', desc: 'Capoeira Contemporânea als lebendige Sportart mit Fokus auf Trainingswissenschaft.' }
      ],
      timeline: [
        { year: '1990', event: 'Gründung in Recife durch Mestre Birilo' },
        { year: '1992', event: 'Verein Meia Lua Inteira in Wien ins Leben gerufen' },
        { year: '1997', event: 'Mestre Will kommt nach Wien zur Unterstützung' },
        { year: '1998', event: 'Mestre Mula reist nach Wien, unterstützt von Mestre Régis' },
        { year: '1999', event: 'Mestre Carlinhos folgt nach Wien' }
      ],
      focus: 'Seither bietet der Verein Wien mehrmals wöchentlich Trainings für Anfänger*innen, Fortgeschrittene und Kinder an, geleitet von Mestre Carlinhos, Contramestre Marc und Graduados.'
    },
    team: {
      title: 'Unsere Trainer',
      members: [
        {
          name: 'Mestre Carlinhos',
          role: 'Mestre / Gründer Wien',
          bio: 'Stammt aus Recife, Brasilien. 1990 wurde die Gruppe Meia Lua Inteira in Recife von ihm mitbegründet. Seit 1999 lebt Carlos in Wien und unterrichtet im Verein Meia Lua Inteira Wien.'
        },
        {
          name: 'Contra Mestre Marc',
          role: 'Contra Mestre',
          bio: 'Begann 1997 in Wien bei Mestre Will. 2012 wurde ihm von Mestre Mula die Kordel des Professor verliehen, 2023 die des Contra Mestre.'
        },
        {
          name: 'Professor Matthieu',
          role: 'Professor',
          bio: 'Begann 2003 bei Meia Lua Inteira Wien. Seit 2013 unterrichtet er Erwachsene und Kinder. 2025 wurde ihm die Kordel des Professors verliehen.'
        },
        {
          name: 'Professor Algodão',
          role: 'Professor',
          bio: 'Stammt aus Recife, begann 2006 mit Capoeira. 2015 kam er nach Österreich. 2023 wurde ihm die Kordel des Professors verliehen.'
        }
      ]
    },
    music: {
      title: 'Musik in der Capoeira',
      categories: [
        { id: 'instruments', title: 'Instrumente', desc: 'Berimbau, Pandeiro, Atabaque, Agogô und Reco-Reco bilden die Bateria.' },
        { id: 'songs', title: 'Gesang', desc: 'Ladainhas, Corridos und Louvações erzählen Geschichten und leiten die Roda.' },
        { id: 'rhythms', title: 'Rhythmen', desc: 'Toques wie Angola, São Bento Grande und Banguela bestimmen das Spiel.' }
      ]
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
      title: 'História da Capoeira',
      groupTitle: 'Meia Lua Inteira',
      groupDescription: 'A Associação Meia Lua Inteira foi fundada em 1990 pelo Mestre Birilo em Recife, Pernambuco. Apenas dois anos depois, a associação Meia Lua Inteira foi fundada em Viena.',
      categories: [
        { id: 'origins', title: 'Origens', desc: 'Fundada em 1990 em Recife, Pernambuco pelo Mestre Birilo.' },
        { id: 'vienna', title: 'Viena', desc: 'Ativa em Viena desde 1992. Em 1997 chegou Mestre Will, em 1998 Mestre Mula e em 1999 Mestre Carlinhos.' },
        { id: 'philosophy', title: 'Filosofia', desc: 'Capoeira Contemporânea como esporte vivo com foco na ciência do esporte.' }
      ],
      timeline: [
        { year: '1990', event: 'Fundação em Recife pelo Mestre Birilo' },
        { year: '1992', event: 'Associação Meia Lua Inteira fundada em Viena' },
        { year: '1997', event: 'Mestre Will chega a Viena para apoiar' },
        { year: '1998', event: 'Mestre Mula viaja para Viena, apoiado pelo Mestre Régis' },
        { year: '1999', event: 'Mestre Carlinhos segue para Viena' }
      ],
      focus: 'Desde então, a associação de Viena oferece treinos várias vezes por semana para iniciantes, avançados e crianças, liderados pelo Mestre Carlinhos, Contramestre Marc e Graduados.'
    },
    team: {
      title: 'Nossos Treinadores',
      members: [
        {
          name: 'Mestre Carlinhos',
          role: 'Mestre / Fundador Viena',
          bio: 'Natural de Recife, Brasil. Em 1990, o grupo Meia Lua Inteira em Recife foi co-fundado por ele. Desde 1999, Carlos vive em Viena e leciona na associação Meia Lua Inteira Wien.'
        },
        {
          name: 'Contra Mestre Marc',
          role: 'Contra Mestre',
          bio: 'Começou em 1997 em Viena com Mestre Will. Em 2012, recebeu a corda de Professor do Mestre Mula, em 2023 a de Contra Mestre.'
        },
        {
          name: 'Professor Matthieu',
          role: 'Professor',
          bio: 'Começou em 2003 na Meia Lua Inteira Wien. Desde 2013 leciona para adultos e crianças. Em 2025, recebeu a corda de Professor.'
        },
        {
          name: 'Professor Algodão',
          role: 'Professor',
          bio: 'Natural de Recife, começou a capoeira em 2006. Em 2015 veio para a Áustria. Em 2023, recebeu a corda de Professor.'
        }
      ]
    },
    music: {
      title: 'Música na Capoeira',
      categories: [
        { id: 'instruments', title: 'Instrumentos', desc: 'Berimbau, Pandeiro, Atabaque, Agogô e Reco-Reco formam a bateria.' },
        { id: 'songs', title: 'Cânticos', desc: 'Ladainhas, Corridos e Louvações contam histórias e guiam a roda.' },
        { id: 'rhythms', title: 'Ritmos', desc: 'Toques como Angola, São Bento Grande e Banguela determinam o jogo.' }
      ]
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
