const questions = [
  {
    question: "Les réseaux UMTS utilise :",
    answers: [
      { text: "les fréquences entre 900 et 1800 Mhz.", correct: "false" },
      { text: "les fréquences 800 et 2100 Mhz.", correct: "false" },
      { text: "les fréquences entre 1900 et 2200 Mhz.", correct: "true" },
      { text: "les mêmes fréquences qu'en GSM.", correct: "false" },
    ],
  },
  {
    question: "Dans GSM, la voie balise est transmise",
    answers: [
      { text: "à des instants aléatoires", correct: "false" },
      { text: "sur le slot 0 de la trame TDMA", correct: "true" },
      { text: "sur un slot quelconque de la trame TDMA", correct: "false" },
    ],
  },
  {
    question: "Le HLR",
    answers: [
      {
        text: "mémorise la localisation précise de chaque abonné",
        correct: "false",
      },
      {
        text: "contient la liste des appels effectués par un abonné mobile",
        correct: "false",
      },
      {
        text: "contient seulement le profil de chaque abonné",
        correct: "false",
      },
      {
        text: "contient le profil et la localisation grossière de chaque abonné",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Un appel arrivée (i.e. vers un terminal mobile GSM) commence sur l’interface radio par",
    answers: [
      {
        text: "la transmission par le réseau d’un message d’allocation de canal dédié",
        correct: "false",
      },
      {
        text: "la transmission par le réseau d’un message de paging",
        correct: "true",
      },
      {
        text: "la transmission par le terminal d’un message d’accès",
        correct: "false",
      },
    ],
  },
  {
    question:
      " Pour qu'un mobile puisse connaître les fréquences des stations de base voisines, il peut : (deux réponses possibles)",
    answers: [
      {
        text: "scanner toutes les fréquences périodiquement",
        correct: "true",
      },
      {
        text: "utiliser l'information envoyée dans le canal BCCH",
        correct: "true",
      },
      {
        text: "utiliser sa position GPS et consulter une base de données nationale (gérée par l'ARTP par exemple)",
        correct: "false",
      },
      {
        text: "utiliser l'information envoyée dans le canal SDCCH",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Les indications de déclenchement d'un handover, ainsi que les échanges des paramètres, sont envoyé via le canal rapide associé de contrôle (FACCH) :",
    answers: [
      {
        text: "oui, car il est important de faire parvenir les informations le plus rapidement possible",
        correct: "true",
      },
      {
        text: "oui, car les données sont trop volumineuses pour être transportées dans le canal SACCH",
        correct: "false",
      },
      {
        text: "non, elles sont envoyées dans le canal SACCH comme tout autre traffic de signalisation",
        correct: "false",
      },
      {
        text: "non, le mobile envoie la requête de handover via le canal RACH",
        correct: "false",
      },
    ],
  },
  {
    question: "Le handover c'est l'opération de :",
    answers: [
      {
        text: "changement de cellule en cours de communication",
        correct: "true",
      },
      { text: "changement de cellule en mode veille", correct: "false" },
      {
        text: "changement de la zone de localisation en mode veille",
        correct: "false",
      },
      {
        text: "changement de la fréquence périodique entre la voie montante et la voie descendante",
        correct: "false",
      },
      {
        text: "changement de la main qui tient le mobile en cours de communication",
        correct: "false",
      },
    ],
  },
  {
    question:
      ". Je peux recevoir des SMS en cours de communication. Ces SMS sont transmis",
    answers: [
      { text: "sur le canal TCH", correct: "false" },
      { text: "sur le canal FACCH", correct: "false" },
      { text: "sur le canal SACCH", correct: "true" },
      { text: "sur le canal SDCCH", correct: "false" },
    ],
  },
  {
    question:
      "On considère un système de communications cellulaires qui utilise deux fréquences pour chaque communication - la totalité d'une fréquence pour la voie descendante et la totalité d'une fréquence pour la voie montante (e.g. un mobile différent va utiliser une autre fréquence). Ce système fonctionne alors en mode (plusieurs réponses possibles) :",
    answers: [
      { text: "TDMA", correct: "false" },
      { text: "FDD", correct: "true" },
      { text: "TDD", correct: "false" },
      { text: "FDMA", correct: "true" },
    ],
  },
  {
    question: " Le mécanisme de Time Advance est utilisé pour :",
    answers: [
      {
        text: "changer l'heure des mobiles automatiquement (e.g. lors de changement du temps en printemps ou dans les déplacements)",
        correct: "false",
      },
      { text: "envoyer le numéro de la trame actuelle", correct: "false" },
      {
        text: "compenser le délai de propagation entre le mobile et la station de base",
        correct: "true",
      },
      {
        text: "avoir une meilleure utilisation des ressources radio",
        correct: "false",
      },
      { text: "accélérer les échanges protocolaires", correct: "false" },
    ],
  },

  {
    question:
      "Par quelle(s) entité(s) est exécuté l’algorithme de chiffrement des données sur la voie radio ? (deux réponses attendues)",
    answers: [
      { text: "par la carte SIM", correct: "false" },
      { text: "par le terminal (UE)", correct: "true" },
      { text: "par le HLR", correct: "false" },
      { text: "par le MSC", correct: "false" },
      { text: "par la BTS", correct: "true" },
      {
        text: "un centre de sécurité commun à tous les opérateurs 2G",
        correct: "false",
      },
    ],
  },
  {
    question:
      " Lors du cryptage de l’interface radio pour déchiffrer la séquence, le récepteur",
    answers: [
      {
        text: "additionne la séquence de chiffrement à la séquence reçue",
        correct: "false",
      },
      {
        text: "soustrait la séquence de chiffrement en hexadécimal à la séquence reçue hexadécimal (en complément à 2)",
        correct: "false",
      },
      {
        text: "fait un XOR (Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement",
        correct: "true",
      },
      {
        text: "fait un XOR bar (Non Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement",
        correct: "false",
      },
    ],
  },

  {
    question: "Le TMSI (Temporary Mobile Subscriber Identity)",
    answers: [
      {
        text: "est attribué temporairement à un abonné lorsqu’il vient de souscrire son abonnement dans l’attente qu’il ait l’IMSI définitif",
        correct: "false",
      },
      {
        text: "est renouvelé systématiquement à chaque changement de cellule",
        correct: "false",
      },
      {
        text: "est renouvelé systématiquement toutes les heures",
        correct: "false",
      },
      {
        text: "est renouvelé suivant la politique propre de l’opérateur notamment lors d’un changement MSC/VLR",
        correct: "true",
      },
    ],
  },
  {
    question:
      "En GSM un abonné mobile est identifié de manière unique et constante dans tous les réseaux du monde par",
    answers: [
      { text: "son MSISDN", correct: "true" },
      { text: "son adresse IP", correct: "false" },
      { text: "son MSRN", correct: "false" },
      { text: "son TMSI", correct: "false" },
      { text: "son IMSI", correct: "false" },
    ],
  },
  {
    question:
      "On considère un abonné GSM qui est en communication vocale. Indiquez, dans la liste ci-dessous, les équipements par lesquels passent les échanges entre le terminal mobile et la sortie du réseau (quatre réponses attendues)",
    answers: [
      { text: "La BTS", correct: "true" },
      { text: "HLR", correct: "false" },
      { text: "SGSN", correct: "false" },
      { text: "VLR", correct: "false" },
      { text: "GMSC", correct: "true" },
      { text: "MSC", correct: "true" },
      { text: "BSC", correct: "true" },
    ],
  },
  {
    question: "Dans le contexte des réseaux mobile , HLR signifie",
    answers: [
      { text: "Holistic Localisation System", correct: "false" },
      { text: "Her Localisation Register", correct: "false" },
      { text: "Homo sapiens Local Region", correct: "false" },
      { text: "Home Location Register", correct: "true" },
    ],
  },
  {
    question:
      "Dans les réseaux mobiles de 1ère Génération, un canal physique duplex est :",
    answers: [
      {
        text: "Une fréquence particulière utilisée pour transmettre les signaux de contrôle",
        correct: "false",
      },
      {
        text: "Une fréquence sur la voie montante et une fréquence sur la voie descendante",
        correct: "true",
      },
      {
        text: "Un intervalle de temps donnée dans les trames TDMA successives sur les voies",
        correct: "false",
      },
    ],
  },
  {
    question:
      "On considère une transmission à la fréquence de 2 700 MHz. Quelle est la longueur d’onde de ce signal ?",
    answers: [
      {
        text: "1/300 mètres, soit 0,33c m 1/27 mètres, soit 3,7 cm ",
        correct: "false",
      },
      {
        text: "1/9 mètres, soit 11,1 cm",
        correct: "true",
      },
      { text: "1/27 mètres, soit 3,7 cm ", correct: "false" },
      { text: "1/3 mètres, soit 33,3 cm", correct: "false" },
    ],
  },
  {
    question: "Comment s’appelle l’algorithme de cryptage",
    answers: [
      { text: "A8", correct: "false" },
      { text: "A5", correct: "true" },
      { text: "SRES", correct: "false" },
      { text: "A3", correct: "false" },
      { text: "Kc", correct: "false" },
    ],
  },
  {
    question: "Identifier deux réseaux de 3ème génération ?",
    answers: [
      { text: "EDGE", correct: "false" },
      { text: "GPRS", correct: "false" },
      { text: "GSM", correct: "false" },
      { text: "UMTS", correct: "true" },
      { text: "LTE", correct: "false" },
      { text: "AMPS", correct: "false" },
      { text: "HSPDA", correct: "true" },
      { text: "TACS", correct: "false" },
    ],
  },
  {
    question: " SGSN signifie :",
    answers: [
      { text: "Serving GPRS Support Node", correct: "true" },
      { text: "Service GPRS Support Node", correct: "false" },
      { text: "Serving GPRS Service Node", correct: "false" },
      { text: "Serving GPRS Support Network", correct: "false" },
      { text: "Serving GSM Support Node", correct: "false" },
    ],
  },
  {
    question:
      ". Quelle est la fréquence downlink du canal correspondant au ARFCN = 22",
    answers: [
      { text: "1034,4 MHz", correct: "false" },
      { text: "894,2 MHz", correct: "false" },
      { text: "984,4 MHz", correct: "false" },
      { text: "939,4 MHz", correct: "true" },
    ],
  },
  {
    question:
      "Le nombre croissant d'utilisateurs des réseaux mobiles augmentant considérablement, quelle solution peut être mise en place par un opérateur pour écouler le trafic généré ?",
    answers: [
      { text: "diminuer la taille des cellules", correct: "true" },
      { text: "regrouper des cellules", correct: "false" },
      { text: "augmenter la taille des cellules", correct: "false" },
      { text: "réduire la bande de fréquences utilisée", correct: "false" },
    ],
  },
  {
    question: "Si ma carte SIM est bloquée. Quel est le code de déblocage ",
    answers: [
      { text: "SIM", correct: "false" },
      { text: "PIN", correct: "false" },
      { text: "KPI", correct: "false" },
      { text: "PUK", correct: "true" },
      { text: "SRES", correct: "false" },
    ],
  },
  {
    question: "HSUPA signifie :",
    answers: [
      { text: "High Speed Universal Packet Acces", correct: "false" },
      { text: "High Speed Uplink Packet Acces", correct: "true" },
      { text: "High Speed Universal PDN Acces", correct: "false" },
      { text: "High Slow Uplink Packet Acces", correct: "false" },
      { text: "High Slow Uplink Packet Associated", correct: "false" },
    ],
  },
  {
    question:
      "On considère un réseau cellulaire en service avec une certaine densité de stations de base et par conséquence une taille de cellule donnée. Les zones de localisation comportent 10 cellules. L’opérateur passe à des zones de localisation à 100 cellules. Le nombre de mise à jour de localisation dans le réseau",
    answers: [
      { text: "est diminué", correct: "true" },
      { text: "ne change pas", correct: "false" },
      { text: "est augmenté", correct: "false" },
    ],
  },
  {
    question:
      "On rappelle les codes pays suivants dans le plan E.164, Sénégal=221, Togo=228, Gabon=241. Par quel chiffre commence le MSRN (Mobile Station Roaming Number) lorsqu'un abonné fixe du Togo appelle un abonné mobile du Sénégal se trouvant au Gabon?",
    answers: [
      { text: "221", correct: "false" },
      { text: "228", correct: "false" },
      { text: "241", correct: "true" },
    ],
  },
  {
    question: "Le dé-entrelacement consiste",
    answers: [
      {
        text: "à insérer des bits de contrôle entre les bits de données",
        correct: "false",
      },
      {
        text: 'à faire un "ou exclusif" de la séquence à transmettre',
        correct: "false",
      },
      {
        text: "à modifier l'ordre des bits avant le décodage correcteur",
        correct: "true",
      },
      {
        text: "à modifier l'ordre des bits après le décodage correcteur",
        correct: "false",
      },
      {
        text: "à insérer un bit de parité portant sur n bits juste après ces n bits",
        correct: "false",
      },
    ],
  },
  {
    question: "Dans le cas de la portabilité concernant les réseaux mobiles:",
    answers: [
      { text: "aucun identifiant n'est modifié.", correct: "false" },
      { text: "l'identifiant MSISDN reste inchangé.", correct: "true" },
      { text: "l'IMEI est modifié.", correct: "false" },
      { text: "l'identifiant MSISDN est modifié.", correct: "false" },
      { text: "l'identifiant IMSI est modifié.", correct: "false" },
    ],
  },
  {
    question:
      ' La procédure de "paging" est nécessaire pour les cas suivants (deux réponses possibles)',
    answers: [
      {
        text: "un abonné du réseau téléphonique RTC appelle un abonné mobile",
        correct: "true",
      },
      {
        text: "un abonné du réseau mobile appelle un autre abonné mobile",
        correct: "true",
      },
      {
        text: "un abonné du réseau mobile appelle un abonné du réseau téléphonique RTC",
        correct: "false",
      },
      {
        text: "un abonné du réseau mobile en cours de communication qui change de cellule",
        correct: "false",
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestiomIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestiomIndex = 0;
  score = 0;
  nextButton.innerHTML = "Suivant";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestiomIndex];
  let questionNo = currentQuestiomIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Score : ${score}/${
    questions.length
  }.<br/>Votre note est de ${((score * 20) / currentQuestiomIndex).toFixed(
    2
  )}/20`;
  nextButton.innerHTML = "Recommencer";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestiomIndex++;
  if (currentQuestiomIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestiomIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
