export type Language = 'DE' | 'PT' | 'EN';

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
      whatsappMsg: 'Hallo, ich interessiere mich für das Training: ',
      kids_overview: {
        title: 'Kinder Training Übersicht',
        subtitle: 'Spielerisch Koordination, Rhythmus und Gemeinschaft für Kinder ab 6 Jahren.',
        info: 'Capoeira fördert motorische Fähigkeiten, musikalische Erziehung und Disziplin. Unsere Kurse bieten einen sicheren Raum für Kinder, um sich auszupowern und neue Fähigkeiten zu lernen.'
      }
    },
    history: {
      title: 'Über uns & Geschichte',
      groupTitle: 'Meia Lua Inteira',
      groupDescription: 'Die Associação Meia Lua Inteira wurde 1990 von Mestre Birilo in Recife, Pernambuco, gegründet. Nur zwei Jahre später wurde der Verein Meia Lua Inteira in Wien ins Leben gerufen.',
      viennaHistory: '1997 kam Mestre Will nach Wien, um den Verein zu unterstützen. 1998 reiste Mestre Mula nach Wien und wurde bald von Mestre Régis unterstützt. 1999 folgte Mestre Carlinhos. Seither bietet der Verein Meia Lua Inteira Wien mehrmals wöchentlich Trainings für Anfänger*innen, Fortgeschrittene und Kinder an, die nunmehr von Mestre Carlinhos, Contramestre Marc und Graduados/Graduadas der Gruppe MLI Wien geleitet werden.',
      philosophy: 'Bei Meia Lua Inteira liegt der Fokus auf dem Stil Capoeira Contemporânea. Der Verein versteht die Capoeira als lebendige Sportart und integriert in das Training Erkenntnisse aus der Sport- und Trainingswissenschaft, sowie Elemente aus anderen Sportarten ohne die historischen Wurzeln zu vernachlässigen.',
      categories: [
        { id: 'origins', title: 'Ursprung', desc: 'Gegründet 1990 in Recife, Pernambuco von Mestre Birilo.' },
        { id: 'vienna', title: 'Wien', desc: 'Seit 1992 in Wien aktiv. 1997 kam Mestre Will, 1998 Mestre Mula und 1999 Mestre Carlinhos.' },
        { id: 'philosophy', title: 'Philosophie', desc: 'Capoeira Contemporânea als lebendige Sportart mit Fokus auf Trainingswissenschaft.' }
      ],
      exchange: {
        title: 'Regelmäßiger internationaler Austausch',
        content: 'Zusätzlich zum regelmäßigen Training veranstaltet der Verein Workshops, zu denen bekannte Lehrer*innen und Mestres/Mestras aus der ganzen Welt eingeladen werden. Bei den Workshops werden neben Capoeira auch andere Elemente der afrobrasilianischen Kultur wie Rhythmus und Tanz vermittelt. Traditionell finden als Auftakt zu den Workshops „Batizados“ (Verleihung des ersten Gürtels) und „Troca de Cordas“ (Wechsel auf einen höheren Gürtel) statt.'
      },
      worldwide: {
        title: 'MLI Weltweit',
        content: 'Unsere Gruppe Meia Lua Inteira, die 1990 in Recife (Brasilien) von Mestre Birilo gegründet wurde, existiert mittlerweile in vielen verschiedenen Städten. Unter den einzelnen Standorten existiert ein reger Austausch.',
        locations: [
          { city: 'Recife', info: 'Mestre Mula leitet seit vielen Jahren die Gruppe in Brasilien und gibt auch Online-Unterricht auf seinem Instagram Kanal.' },
          { city: 'Bologna', info: 'Mestre Cobra leitet die Gruppe Meia Lua Inteira in Bologna und bietet regelmäßige Trainings an.' },
          { city: 'Karlsruhe / Offenburg / Kehl', info: 'Mestre Tesourinha lebt seit 2001 in Karlsruhe und unterrichtet dort sowie in Offenburg und Kehl Capoeira. Als mehrmaliger Champion des Frevo-Tanzes ist er eine Gallionsfigur des brasilianischen Straßenkarnevals.' },
          { city: 'Freiburg', info: 'Professor Jens, der Mestre Tesourinha seit den ersten Stunden in Deutschland begleitet, leitet die Gruppe und die Trainings in Freiburg.' }
        ]
      }
    },
    team: {
      title: 'Unsere Trainer',
      members: [
        {
          name: 'Mestre Carlinhos',
          role: 'Mestre',
          bio: 'Stammt aus Recife, Brasilien. Durch einen Jugendfreund – Mestre Mula – kam er Mitte der 1980er-Jahre mit der Capoeira in Kontakt. Er besuchte zahlreiche Kurse der Capoeira Angola und Regional. 1990 wurde die Gruppe Meia Lua Inteira in Recife von ihm mitbegründet. Seit 1999 lebt Carlos in Wien und unterrichtet im Verein Meia Lua Inteira Wien und im Musischen Zentrum Wien.'
        },
        {
          name: 'Contra Mestre Marc',
          role: 'Contra Mestre',
          bio: 'Begann 1997 in Wien bei Mestre Will Capoeira zu trainieren. Er unterrichtet Capoeira im Verein Meia Lua Inteira Wien und seit 2005 am Universitätssportinstitut Wien. 2012 wurde ihm von Mestre Mula die Kordel des Professor verliehen, 2023 die des Contra Mestre.'
        },
        {
          name: 'Professor Matthieu',
          role: 'Professor',
          bio: 'Begann 2003 bei Meia Lua Inteira Wien Capoeira zu trainieren. Seit 2013 unterrichtet er Capoeira für Erwachsene und Kinder. 2025 wurde ihm die Kordel des Professors verliehen. Aktuell führt er die Kindertrainings für Meia Lua Inteira Wien durch.'
        },
        {
          name: 'Professor Algodão',
          role: 'Professor',
          bio: 'Stammt aus Recife, Brasilien, wo er 2006 mit Capoeira begann. Trainiert von Mestre Mula, sammelte er früh erste Unterrichtserfahrungen. 2015 kam er nach Österreich, wo er unter der Anleitung von Mestre Regis und Carlinhos seinen Unterricht weiterentwickelte. 2023 wurde ihm die Kordel des Professors verliehen.'
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
  EN: {
    nav: {
      home: 'Home',
      training: 'Schedule',
      news: 'News',
      shop: 'Shop',
      belts: 'Gradients',
      history: 'History',
      music: 'Music',
      locations: 'Locations',
      contact: 'Contact',
      admin: 'Admin'
    },
    hero: {
      badge: 'Rhythm • Dance • Fight',
      title: 'EXPERIENCE',
      subtitle: 'A dynamic fusion of acrobatics, music, games and culture. Become part of our community.',
      cta: 'Start Now'
    },
    stats: {
      years: 'Years in Vienna',
      locations: 'Locations',
      classes: 'Classes'
    },
    news: {
      title: 'News',
      summarize: 'Summarize',
      summarizing: 'Summarizing...'
    },
    training: {
      title: 'Training Schedule',
      overview: 'Overview',
      all: 'All',
      adults: 'Adults',
      kids: 'Kids',
      music: 'Music',
      register: 'Register via WhatsApp',
      whatsappMsg: 'Hi, I am interested in training: ',
      kids_overview: {
        title: 'Kids Training Overview',
        subtitle: 'Playful coordination, rhythm and community for children from 6 years.',
        info: 'Capoeira promotes motor skills, musical education and discipline. Our courses offer a safe space for children to let off steam and learn new skills.'
      }
    },
    history: {
      title: 'About us & History',
      groupTitle: 'Meia Lua Inteira',
      groupDescription: 'Associação Meia Lua Inteira was founded in 1990 by Mestre Birilo in Recife, Pernambuco. Only two years later, the Meia Lua Inteira association was founded in Vienna.',
      viennaHistory: 'In 1997, Mestre Will came to Vienna to support the association. In 1998, Mestre Mula traveled to Vienna and was soon supported by Mestre Régis. Mestre Carlinhos followed in 1999. Since then, the association Meia Lua Inteira Vienna has offered training several times a week for beginners, advanced and children, which are now led by Mestre Carlinhos, Contramestre Marc and Graduados/Graduadas of the MLI Vienna group.',
      philosophy: 'At Meia Lua Inteira, the focus is on the Capoeira Contemporânea style. The association understands Capoeira as a living sport and integrates findings from sports and training science into training, as well as elements from other sports without neglecting historical roots.',
      categories: [
        { id: 'origins', title: 'Origins', desc: 'Founded in 1990 in Recife, Pernambuco by Mestre Birilo.' },
        { id: 'vienna', title: 'Vienna', desc: 'Active in Vienna since 1992. Mestre Will arrived in 1997, Mestre Mula in 1998, and Mestre Carlinhos in 1999.' },
        { id: 'philosophy', title: 'Philosophy', desc: 'Capoeira Contemporânea as a living sport with a focus on training science.' }
      ],
      exchange: {
        title: 'Regular international exchange',
        content: 'In addition to regular training, the association organizes workshops to which well-known teachers and mestres/mestras from all over the world are invited. At the workshops, in addition to capoeira, other elements of afro-brazilian culture such as rhythm and dance are taught. Traditionally, "Batizados" (awarding of the first belt) and "Troca de Cordas" (change to a higher belt) take place as a prelude to the workshops.'
      },
      worldwide: {
        title: 'MLI Worldwide',
        content: 'Our group Meia Lua Inteira, founded in 1990 in Recife (Brazil) by Mestre Birilo, now exists in many different cities. There is a lively exchange between the individual locations.',
        locations: [
          { city: 'Recife', info: 'Mestre Mula has been leading the group in Brazil for many years and also offers online lessons on his Instagram channel.' },
          { city: 'Bologna', info: 'Mestre Cobra leads the Meia Lua Inteira group in Bologna and offers regular training.' },
          { city: 'Karlsruhe / Offenburg / Kehl', info: 'Mestre Tesourinha has lived in Karlsruhe since 2001 and teaches Capoeira there as well as in Offenburg and Kehl. As a multiple champion of the Frevo dance, he is a leading figure of the Brazilian street carnival.' },
          { city: 'Freiburg', info: 'Professor Jens, who has accompanied Mestre Tesourinha since his first hours in Germany, leads the group and training in Freiburg.' }
        ]
      }
    },
    team: {
      title: 'Our Coaches',
      members: [
        {
          name: 'Mestre Carlinhos',
          role: 'Mestre',
          bio: 'Originally from Recife, Brazil. Through a childhood friend - Mestre Mula - he came into contact with Capoeira in the mid-1980s. He attended numerous courses in Capoeira Angola and Regional. In 1990, he co-founded the group Meia Lua Inteira in Recife. Since 1999, Carlos has lived in Vienna and teaches in the Meia Lua Inteira Vienna association and in the Musisches Zentrum Wien.'
        },
        {
          name: 'Contra Mestre Marc',
          role: 'Contra Mestre',
          bio: 'Started training Capoeira in Vienna with Mestre Will in 1997. He teaches Capoeira in the Meia Lua Inteira Vienna association and since 2005 at the University Sports Institute Vienna. In 2012, he was awarded the cord of Professor by Mestre Mula, and in 2023 that of Contra Mestre.'
        },
        {
          name: 'Professor Matthieu',
          role: 'Professor',
          bio: 'Started training Capoeira with Meia Lua Inteira Vienna in 2003. Since 2013, he has been teaching Capoeira for adults and children. In 2025, he was awarded the cord of Professor. He currently runs the children\'s training for Meia Lua Inteira Vienna.'
        },
        {
          name: 'Professor Algodão',
          role: 'Professor',
          bio: 'Originally from Recife, Brazil, where he started Capoeira in 2006. Trained by Mestre Mula, he gained his first teaching experience early on. In 2015, he came to Austria, where he further developed his teaching under the guidance of Mestre Regis and Carlinhos. In 2023, he was awarded the cord of Professor.'
        }
      ]
    },
    music: {
      title: 'Music in Capoeira',
      categories: [
        { id: 'instruments', title: 'Instruments', desc: 'Berimbau, Pandeiro, Atabaque, Agogô and Reco-Reco form the bateria.' },
        { id: 'songs', title: 'Songs', desc: 'Ladainhas, Corridos and Louvações tell stories and guide the Roda.' },
        { id: 'rhythms', title: 'Rhythms', desc: 'Toques like Angola, São Bento Grande and Banguela determine the game.' }
      ]
    },
    belts: {
      title: 'Cord System',
      subtitle: 'The graduations of the Meia Lua Inteira group',
      description: 'In Capoeira, there is no uniform graduation system. Each school has its own colors and rules. Here is our group\'s system:',
      levels: [
        { color: 'Crua (Natural)', meaning: 'Beginner' },
        { color: 'Crua-Amarela', meaning: 'Transition' },
        { color: 'Amarela (Yellow)', meaning: 'Student' },
        { color: 'Amarela-Laranja', meaning: 'Transition' },
        { color: 'Laranja (Orange)', meaning: 'Advanced Student' },
        { color: 'Laranja-Azul', meaning: 'Monitor' },
        { color: 'Azul (Blue)', meaning: 'Graduado' },
        { color: 'Azul-Verde', meaning: 'Transition' },
        { color: 'Verde (Green)', meaning: 'Graduado' },
        { color: 'Verde-Roxa', meaning: 'Transition' },
        { color: 'Roxa (Purple)', meaning: 'Instrutor' },
        { color: 'Roxa-Marrom', meaning: 'Transition' },
        { color: 'Marrom (Brown)', meaning: 'Professor' },
        { color: 'Marrom-Vermelha', meaning: 'Transition' },
        { color: 'Vermelha (Red)', meaning: 'Mestre' }
      ]
    },
    promo: {
      urgent: 'URGENT'
    },
    shop: {
      title: 'Shop',
      order: 'WhatsApp Order',
      whatsappMsg: 'Hi, I would like to order the following product: ',
      tshirt: 'Berimbau T-Shirt',
      instruments: 'Instruments',
      price: 'Price',
      buy: 'Buy',
      checkout: 'Order Summary',
      upsellTitle: 'You might also like:',
      nameLabel: 'Your Name (Optional)',
      funnyNameBtn: 'Roll funny Capoeira Name',
      male: 'Male',
      female: 'Female',
      preview: 'Message Preview:',
      send: 'Order now via WhatsApp'
    },
    contact: {
      whatsappTitle: 'WhatsApp Contact',
      whatsappSubtitle: 'Choose a topic for your message',
      options: [
        { id: 'trial', label: 'Trial Training', text: 'Hi, I would like to arrange a trial training. When can I come by?' },
        { id: 'location', label: 'Locations', text: 'Hi, I have a question about your locations/training venues.' },
        { id: 'shop', label: 'Shop/Gear', text: 'Hi, I am interested in your gear/shop items.' },
        { id: 'other', label: 'General Inquiry', text: 'Hi, I have a general question about Capoeira Vienna.' }
      ],
      sendBtn: 'Send WhatsApp Message'
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
      whatsappMsg: 'Olá, estou interessado no treino: ',
      kids_overview: {
        title: 'Visão Geral do Treino Infantil',
        subtitle: 'Coordenação lúdica, ritmo e comunidade para crianças a partir dos 6 anos.',
        info: 'A capoeira promove habilidades motoras, educação musical e disciplina. Nossos cursos oferecem um espaço seguro para as crianças gastarem energia e aprenderem novas habilidades.'
      }
    },
    history: {
      title: 'Sobre nós & História',
      groupTitle: 'Meia Lua Inteira',
      groupDescription: 'A Associação Meia Lua Inteira foi fundada em 1990 pelo Mestre Birilo em Recife, Pernambuco. Apenas dois anos depois, a associação Meia Lua Inteira foi fundada em Viena.',
      viennaHistory: 'Em 1997, Mestre Will veio para Viena para apoiar a associação. Em 1998, Mestre Mula viajou para Viena e logo foi apoiado pelo Mestre Régis. Mestre Carlinhos seguiu em 1999. Desde então, a associação Meia Lua Inteira Viena oferece treinos várias vezes por semana para iniciantes, avançados e crianças, que agora são liderados pelo Mestre Carlinhos, Contramestre Marc e Graduados/Graduadas do grupo MLI Viena.',
      philosophy: 'Na Meia Lua Inteira, o foco está no estilo Capoeira Contemporânea. A associação entende a Capoeira como um esporte vivo e integra descobertas das ciências do esporte e do treinamento no treino, bem como elementos de outros esportes sem negligenciar as raízes históricas.',
      categories: [
        { id: 'origins', title: 'Origens', desc: 'Fundada em 1990 em Recife, Pernambuco pelo Mestre Birilo.' },
        { id: 'vienna', title: 'Viena', desc: 'Ativa em Viena desde 1992. Mestre Will chegou em 1997, Mestre Mula em 1998 e Mestre Carlinhos em 1999.' },
        { id: 'philosophy', title: 'Filosofia', desc: 'Capoeira Contemporânea como esporte vivo com foco na ciência do esporte.' }
      ],
      exchange: {
        title: 'Intercâmbio internacional regular',
        content: 'Além dos treinos regulares, a associação organiza workshops para os quais são convidados professores e mestres/mestras conhecidos de todo o mundo. Nos workshops, além da capoeira, são ensinados outros elementos da cultura afro-brasileira, como ritmo e dança. Tradicionalmente, os "Batizados" (entrega da primeira corda) e a "Troca de Cordas" ocorrem como prelúdio para os workshops.'
      },
      worldwide: {
        title: 'MLI em todo o mundo',
        content: 'Nosso grupo Meia Lua Inteira, fundado em 1990 em Recife (Brasil) pelo Mestre Birilo, existe hoje em muitas cidades diferentes. Existe um intercâmbio constante entre os locais individuais.',
        locations: [
          { city: 'Recife', info: 'Mestre Mula lidera o grupo no Brasil há muitos anos e também oferece aulas online em seu canal no Instagram.' },
          { city: 'Bolonha', info: 'Mestre Cobra lidera o grupo Meia Lua Inteira em Bolonha e oferece treinos regulares.' },
          { city: 'Karlsruhe / Offenburg / Kehl', info: 'Mestre Tesourinha mora em Karlsruhe desde 2001 e ensina Capoeira lá, bem como em Offenburg e Kehl. Como octacampeão de Frevo, ele é uma figura central do carnaval de rua brasileiro.' },
          { city: 'Freiburgo', info: 'O Professor Jens, que acompanha o Mestre Tesourinha desde suas primeiras horas na Alemanha, lidera o grupo e os treinos em Freiburgo.' }
        ]
      }
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
