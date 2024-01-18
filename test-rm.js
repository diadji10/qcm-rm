const questions = [
  {
    question:
      "Pourquoi les conversations en cours ne sont (en général) pas coupées pendant qu'on se déplace ?",
    answers: [
      {
        text: "une cellule peut couvrir jusqu'à la taille d'une région entière et souvent couvre une ville. Ainsi, il est peu probable de sortir d'une cellule pendant ses déplacements, et donc - il y a rarement des coupures. ",
        correct: "false",
      },
      {
        text: "les cellules représentent juste un découpage logique. Il n'y a pas de découpage physique.",
        correct: "false",
      },
      {
        text: "dans les déplacements de tous les jours on change souvent les cellules. Cependant, les protocoles de téléphonie mobile sont conçus pour cacher ce découpage et pour rendre le transfert de communication de cellule en cellule transparent pour l'utilisateur.",
        correct: "true",
      },
      {
        text: "toutes les stations de base fonctionnent sur les mêmes fréquences. Ainsi, les signaux d'un mobile sont reçus par la station de base la plus proche et donc on a la mobilité \"gratuitement\" (e.g. sans besoin de s'en occuper explicitement).",
        correct: "false",
      },
    ],
  },
  {
    question: "La voie balise est utilisée pour",
    answers: [
      {
        text: "permettre au mobile d'estimer la force du signal en provenance de la station de base ",
        correct: "false",
      },
      {
        text: "estimer la force du signal du mobile vers la station de base ",
        correct: "false",
      },
      {
        text: "diffuser des informations, telles que l'identité de l'opérateur ",
        correct: "true",
      },
      {
        text: "dans les zones non couvertes par un opérateur, indiquer la direction vers laquelle il faut aller pour être couvert ",
        correct: "false",
      },
    ],
  },
  {
    question: "Un mobile ne capte aucune voie balise. Cela signifie que :",
    answers: [
      {
        text: "l'utilisateur peut passer que des appels d'urgence",
        correct: "false",
      },
      { text: "l'utilisateur n'a pas payé sa facture ", correct: "false" },
      {
        text: "le réseau cellulaire ne couvre pas la zone où se trouve l'utilisateur",
        correct: "true",
      },
      {
        text: "le mobile n'a pas assez de batterie pour joindre la station de base",
        correct: "false",
      },
    ],
  },
  {
    question: 'La procédure de "paging" dans GSM...',
    answers: [
      {
        text: "est nécessaire car le réseau ne connaît pas la localisation d'un mobile à la cellule près",
        correct: "false",
      },
      {
        text: "est nécessaire pour éviter la surcharge du HLR",
        correct: "false",
      },
      {
        text: "est un compromis entre une localisation trop précise et aucune localisation",
        correct: "false",
      },
      {
        text: "n'est pas nécessaire car le réseau connaît la localisation à la cellule près ",
        correct: "true",
      },
    ],
  },
  {
    question: 'La procédure de "paging" est nécessaire pour les cas suivants',
    answers: [
      {
        text: "un abonné du réseau téléphonique appelle un abonné mobile",
        correct: "false",
      },
      {
        text: "un abonné du réseau mobile appelle un autre abonné mobile",
        correct: "true",
      },
      {
        text: "un abonné du réseau mobile appelle un abonné du réseau téléphonique",
        correct: "false",
      },
      {
        text: "un abonné du réseau mobile en cours de communication qui change la cellule dans",
        correct: "true",
      },
    ],
  },
  {
    question:
      "La communication entre un mobile GSM et le réseau téléphonique traverse les équipements dans l'ordre suivant",
    answers: [
      {
        text: "mobile - BTS - BSC - MSCs - HLR - réseau téléphonique",
        correct: "false",
      },
      {
        text: "mobile - BTS - BSC - MSCs - réseau téléphonique",
        correct: "true",
      },
      {
        text: "mobile - MSCs - BSC - BTS - réseau téléphonique ",
        correct: "false",
      },
      {
        text: "mobile - BSC - BTS - MSCs - réseau téléphonique",
        correct: "false",
      },
      {
        text: "mobile - MSCs - BTS - BSC - réseau téléphonique ",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Le protocole ISUP est utilisé pour établir les communications entre",
    answers: [
      { text: "HLR et MSC/VLR", correct: "true" },
      { text: "mobile et BSC", correct: "false" },
      { text: "BSC et MSC/VLR", correct: "true" },
      { text: "des MSC/VLR", correct: "false" },
    ],
  },
  {
    question: "Le protocole MAP (Mobile Application Part) est utilisé pour",
    answers: [
      {
        text: "les échanges de signalisation entre HLR et MSC/VLR",
        correct: "true",
      },
      {
        text: "les échanges de signalisation entre mobile et BSC ",
        correct: "false",
      },
      { text: "les communications entre BSC et MSC/VLR", correct: "false" },
      {
        text: "les communications entre MSC/VLR et le réseau téléphonique",
        correct: "false",
      },
      {
        text: "les communications entre MSC/VLR et commutateurs du réseau téléphonique",
        correct: "false",
      },
    ],
  },
  {
    question: "Chaque abonné possède un IMSI qui est :",
    answers: [
      { text: "unique au monde", correct: "true" },
      { text: "unique au sein de l'opérateur.", correct: "true" },
      { text: "unique dans un pays.", correct: "false" },
      {
        text: "n'est pas unique, mais qui en plus du numéro MSISDN permet d'identifier l'utilisateur.",
        correct: "false",
      },
    ],
  },
  {
    question:
      "On peut facilement attribuer deux numéros MSISDN à une même carte SIM ",
    answers: [
      {
        text: "non, le numéro MSISDN doit identifier l'abonné d'une manière unique.",
        correct: "true",
      },
      {
        text: "non, le numéro MSISDN doit identifier l'abonné d'une manière unique.",
        correct: "false",
      },
      { text: "non, il faut changer la carte SIM.", correct: "false" },
      {
        text: "oui, il suffit de rajouter la correspondance au niveau du serveur HLR entre les deux MSISDN et l'unique IMSI de l'abonné. ",
        correct: "false",
      },
      {
        text: "oui, mais sous condition d'avoir des numéros MSISDN consécutifs.",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Etant donné que la clef Kc est ensuite utilisée par un algorithme de chiffrement symétrique, si on l'utilise fréquemment sans aucun élément variable, elle sera très rapidement dévoilée. Laquelle des solutions suivantes vous semble la plus pratique à réaliser :",
    answers: [
      {
        text: "générer une nouvelle clef Kc à chaque échange de données",
        correct: "false",
      },
      {
        text: "utiliser plusieurs valeurs de clefs Kc1, Kc2, …, Kcn et alterner entre elles",
        correct: "true",
      },
      {
        text: "rajouter à la clé Kc une donnée aléatoire et la communiquer en clair dans la trame concernée.",
        correct: "false",
      },
      {
        text: "insérer des faux messages afin de ralentir les attaquants.",
        correct: "false",
      },
      {
        text: "utiliser un compteur partagé entre le terminal et la BTS (e.g. trames échangés) pour enrichir la clef Kc. ",
        correct: "false",
      },
    ],
  },
  {
    question: "Un terminal est authentifié par le réseau cellulaire :",
    answers: [
      {
        text: "uniquement pendant la première activation de la carte SIM.",
        correct: "true",
      },
      {
        text: "uniquement au redémarrage du mobile (au moment de s'attacher au réseau)",
        correct: "false",
      },
      { text: "à chaque appel.", correct: "false" },
      { text: "à chaque message de paging.", correct: "false" },
    ],
  },
  {
    question:
      "Il est possible pour un attaquant de connaître la correspondance IMSI-TMSI d'un abonné s'il est en mesure d'écouter le canal radio au moment de l'attribution du TMSI :",
    answers: [
      {
        text: "oui, car l'IMSI et le TMSI sont toujours envoyés en clair",
        correct: "false",
      },
      {
        text: "oui, mais seulement s'il a pu capter l'IMSI dans un message précédent",
        correct: "false",
      },
      {
        text: "oui, mais uniquement dans le cas de paging d'un utilisateur qui n'a pas encore été attribué un TMSI.",
        correct: "false",
      },
      {
        text: "non, le TMSI est envoyé après l'authentification, et donc avec le chiffrement activé.",
        correct: "true",
      },
      {
        text: "non, le TMSI est généré à l'aide de l'algorithme A8",
        correct: "false",
      },
      { text: "non, le TMSI est stocké dans la carte SIM. ", correct: "false" },
    ],
  },
  {
    question:
      "Si un opérateur choisit de ne pas s'interconnecter avec le réseau SS7 international :",
    answers: [
      {
        text: "Cela ne change rien pour les utilisateurs qui ne quittent jamais le pays.",
        correct: "true",
      },
      {
        text: "Les abonnés de cet opérateur seront dans l'impossibilité d'utiliser leurs mobiles à l'étranger.",
        correct: "false",
      },
      { text: "Il n'y a aucune incidence sur les abonnés. ", correct: "false" },
      {
        text: "Le réseau ne peut pas fonctionner sans être interconnecté avec le réseau SS7 international",
        correct: "false",
      },
      {
        text: 'La notion du réseau "SS7 international" est purement abstraite. Dans la réalité, il suffit d\'utiliser le protocole SCCP.',
        correct: "false",
      },
    ],
  },

  {
    question: "Le protocole ISUP est utilisé pour :",
    answers: [
      {
        text: "la réservation des circuits 64 kbit/s pour la voix",
        correct: "true",
      },
      {
        text: "la libération des circuits à la fin d'un appel téléphonique",
        correct: "false",
      },
      {
        text: "la fiabilisation des échanges entre deux commutateurs. ",
        correct: "false",
      },
      {
        text: "la fiabilisation des échanges entre deux commutateurs. ",
        correct: "false",
      },
    ],
  },
  {
    question: "Le réseau GSM fournit les fonctions de sécurité :",
    answers: [
      { text: "authentification du terminal par le réseau", correct: "true" },
      { text: "authentification du réseau par le terminal", correct: "false" },
      {
        text: "chiffrement des données et de la signalisation",
        correct: "true",
      },
      {
        text: "vérification d'intégrité des messages de signalisation ",
        correct: "false",
      },
      { text: "confidentialité de l'identité ", correct: "false" },
    ],
  },
  {
    question: "Le fait d'utiliser des triplets de sécurité :",
    answers: [
      {
        text: "Le fait d'utiliser des triplets de sécurité :",
        correct: "false",
      },
      {
        text: "permet à n'importe quel équipement du réseau cellulaire auquel on fournit un triplet d'authentifierun mobile sans dévoiler la clef secrète.",
        correct: "false",
      },
      {
        text: "permet à un réseau étranger d'authentifier et ensuite de chiffrer les communications avec un mobile. Par contre, cela nécessite de dévoiler la clef Ki à l'AuC (Authentication Center) du réseau visité",
        correct: "false",
      },
      {
        text: "réduit la charge de l'AuC qui en envoyant plusieurs triplets en même temps limite le nombre de requêtes qui lui seront envoyées. ",
        correct: "true",
      },
    ],
  },
  {
    question:
      "La carte SIM doit contenir son propre microcontrôleur, espace de stockage d'information et mémoire vive pour :",
    answers: [
      {
        text: "garantir la confidentialité de la clef secrète",
        correct: "true",
      },
      {
        text: "accélérer le traitement des demandes d'authentification",
        correct: "false",
      },
      {
        text: "rendre impossible l'utilisation des téléphones volés.",
        correct: "false",
      },
      {
        text: "aider les anciens téléphones dans le traitement des données.",
        correct: "false",
      },
      {
        text: "permettre l'exécution de l'algorithme d'authentification dans un matériel maîtrisé par l'opérateur",
        correct: "false",
      },
    ],
  },
  {
    question: "Lors de la première mise sous tension du terminal :",
    answers: [
      {
        text: "Le terminal transmet tout son profil au réseau",
        correct: "true",
      },
      {
        text: "Le HLR transmet le profil au VLR où le terminal se trouve",
        correct: "false",
      },
      {
        text: "Le profil de l'abonné est transmis à tous les VLR du réseau",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Je vis en Syldavie. J'ai souscrit un abonnement chez l'opérateur Syldavie Télécom. Je vais en Bordurie sur le réseau de Bordurie Télécom. Mon terminal fait une mise à jour de localisation.Le HLR de Bordurie Télécom est impliqué dans l'échange de signalisation pour cette mise à jour de localisatio",
    answers: [
      { text: "Vrai", correct: "true" },
      { text: "Faux", correct: "false" },
    ],
  },
  {
    question:
      "Le HLR de Syldavie Télécom est impliqué dans l'échange de signalisation pour cette mise à jour de localisation",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "Alice a un téléphone GSM. Elle appelle Bob sur son poste fixe.Le premier message envoyé par le terminal d'Alice (MMCM_Service_Request) contient son TMSI",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question: "Le HLR est consulté pour vérifier la localisation d'Alice",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "Entre les MSC/VLR, seul le protocole ISUP d'établissement des appels téléphoniques est nécessaire.",
    answers: [
      { text: "Vrai", correct: "true" },
      { text: "Faux", correct: "false" },
    ],
  },
  {
    question: "La communication transite par le HLR.",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "Si je me déplace dans le réseau, le GGSN dont je dépends change au cours de mes déplacements",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "Si je me déplace dans le réseau, le SGSN dont je dépends change au cours de mes déplacements",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "On peut utiliser n'importe quel protocole réseau (couche 3) entre le SGSN et le GGSN",
    answers: [
      { text: "Vrai", correct: "true" },
      { text: "Faux", correct: "false" },
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
