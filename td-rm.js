const questions = [
  {
    question: "L'entrelacement a comme intérêt:",
    answers: [
      {
        text: "d'avoir une meilleure performance de correction pour des erreurs en blocs ",
        correct: "false",
      },
      {
        text: "d'avoir un plus faible délai de transmission",
        correct: "true",
      },
      { text: "de corriger toutes les erreurs d'un paquet", correct: "false" },
      { text: "d'améliorer la sécurité de la transmission", correct: "false" },
    ],
  },
  {
    question:
      "Un opérateur dispose de 2 * 3,15 MHz dans la bande de fréquences 450 MHz. Il déploie un système TDMA/FDD où les porteuses (simplex) sont espacées de 35 kHz et où il y a 3 intervalles de temps par trame TDMA. L’opérateur a au total:",
    answers: [
      { text: "12 porteuses duplex", correct: "false" },
      { text: "90 porteuses duplex", correct: "true" },
      { text: "30 porteuses duplex", correct: "false" },
      { text: "180 porteuses duplexEPA", correct: "false" },
      { text: "60 porteuses duplexEPA", correct: "false" },
    ],
  },
  {
    question:
      "L’algorithme de chiffrement de GSM utilise une séquence binaire C calculée à partir d’une clé de chiffrement. Plus précisément, le principe est de",
    answers: [
      {
        text: "insérer les bits de la séquence C à des emplacements aléatoires à l’intérieur de la séquence transmise",
        correct: "false",
      },
      {
        text: "multiplier les bits de la séquence transmise par la séquence C (multiplication bit à bit)",
        correct: "false",
      },
      {
        text: "faire un ou exclusif entre la séquence transmise et la séquence C (ou exclusif bit à bit)",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Il existe un mode TDD dans quels systèmes (deux réponses possibles)",
    answers: [
      { text: "AMPS", correct: "false" },
      { text: "LTE", correct: "true" },
      { text: "GSM", correct: "false" },
      { text: "UMTS", correct: "true" },
    ],
  },
  {
    question: "Dans le cas de la portabilité concernant les réseaux mobiles:",
    answers: [
      { text: "aucun identifiant n'est modifié. ", correct: "false" },
      { text: "l'identifiant MSISDN reste inchangé.", correct: "false" },
      { text: "l'IMEI est modifié. ", correct: "false" },
      { text: "l'identifiant MSISDN est modifié.", correct: "false" },
      { text: "l'identifiant IMSI est modifié.", correct: "true" },
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
        text: "contient le profil et la localisation grossière de chaque abonné ",
        correct: "true",
      },
      {
        text: "contient seulement le profil de chaque abonné",
        correct: "false",
      },
    ],
  },
  {
    question:
      " On considère un appel d’un abonné mobile vers un abonné d’un réseau fixe d’un autre pays (appel international)",
    answers: [
      {
        text: "le MSC/VLR demande au mobile d’indiquer son profil d’abonnement pour vérifier qu’il a le droit d’appeler l’international",
        correct: "false",
      },
      {
        text: "le MSC/VLR consulte le HLR pour vérifier que le mobile a le droit d’appeler l’international",
        correct: "true",
      },
      {
        text: "le MSC/VLR vérifie dans sa base de données que le mobile a le droit d’appeler l’international ",
        correct: "false",
      },
      {
        text: "le BSC vérifie dans sa base de données que le mobile a le droit d’appeler l’international",
        correct: "false",
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
      "Pour qu'un mobile puisse connaître les fréquences des stations de base voisines, il peut : (deux réponses possibles)",
    answers: [
      {
        text: "scanner toutes les fréquences périodiquement",
        correct: "false",
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
        correct: "true",
      },
    ],
  },
  {
    question:
      "Un terminal en veille effectue les opérations suivantes (deux réponses possibles) :",
    answers: [
      {
        text: "mesurer la puissance reçue sur la voie balise courante",
        correct: "false",
      },
      {
        text: "ne rien mesurer (mode veille profonde) afin de préserver sa batterie",
        correct: "false",
      },
      {
        text: "envoie périodiquement des messages sur le canal logique RACH afin de garder son association au réseau",
        correct: "true",
      },
      {
        text: "mesurer la puissance reçue sur les voies balises des cellules voisines",
        correct: "true",
      },
      {
        text: "envoie périodiquement des messages sur le canal SACCH afin de savoir s'il y a des SMS pour lui",
        correct: "false",
      },
    ],
  },
  {
    question:
      " Les indications de déclenchement d'un handover, ainsi que les échanges des paramètres, sont envoyé via le canal rapide associé de contrôle (FACCH) :",
    answers: [
      {
        text: "oui, car les données sont trop volumineuses pour être transportées dans le canal SACCH",
        correct: "false",
      },
      {
        text: "oui, car il est important de faire parvenir les informations le plus rapidement possible",
        correct: "true",
      },
      {
        text: "non, elles sont envoyées dans le canal SACCH comme tout autre traffic de signalisation ",
        correct: "false",
      },
      {
        text: "non, le mobile envoie la requête de handover via le canal RACH",
        correct: "false",
      },
    ],
  },
  {
    question: "Quelle est la durée de hypertrame GSM ?",
    answers: [
      { text: "120 ms", correct: "false" },
      { text: "235 ms", correct: "true" },
      { text: "3H 28mn 53s", correct: "false" },
      { text: "6120 ms", correct: "false" },
    ],
  },
  {
    question: "Quel est le nombre de trames dans la supertrame GSM ?",
    answers: [
      { text: "1326", correct: "false" },
      { text: "2594", correct: "false" },
      { text: "6120", correct: "false" },
      { text: "51", correct: "true" },
      { text: "26", correct: "false" },
    ],
  },
  {
    question: " Je peux recevoir des SMS en mode veille. Ces SMS sont transmis",
    answers: [
      { text: "sur le canal TCH", correct: "false" },
      { text: "sur le canal FACCH", correct: "false" },
      { text: "sur le canal SDCCH", correct: "false" },
      { text: "sur le canal SACCH", correct: "true" },
    ],
  },
  {
    question:
      " Le mécanisme de Time Advance est utilisé pour : (deux réponses possibles)",
    answers: [
      {
        text: "changer l'heure des mobiles automatiquement (e.g. lors de changement du temps en printemps ou dans les déplacements) ",
        correct: "false",
      },
      { text: "envoyer le numéro de la trame actuelle", correct: "false" },
      {
        text: "compenser le délai de propagation entre le mobile et la station de base ",
        correct: "true",
      },
      {
        text: "avoir une meilleure utilisation des ressources radio ",
        correct: "true",
      },
      { text: "accélérer les échanges protocolaires", correct: "false" },
    ],
  },
  {
    question:
      "Le fait d'utiliser des triplets de sécurité (2 réponses attendues)",
    answers: [
      {
        text: "rend le système vulnérable à l'écoute du canal radio.",
        correct: "true",
      },
      {
        text: "permet à n'importe quel équipement du réseau d'authentifier un mobile sans dévoiler sa clef secrète",
        correct: "false",
      },
      {
        text: "permet à un réseau étranger d'authentifier et ensuite de chiffrer. Par contre, cela nécessite de dévoiler la clef au HLR du réseau visité. ",
        correct: "false",
      },
      {
        text: "réduit la charge du HLR qui en envoyant plusieurs vecteurs en même temps limite le nombre de requêtes qui lui seront envoyées. ",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Par quelles entités est exécuté l’algorithme de chiffrement des données surla voie radio ? (deux réponses attendues)",
    answers: [
      { text: "par la carte SIM ", correct: "true" },
      { text: "par le terminal (UE)", correct: "true" },
      { text: "par la BTS", correct: "false" },
      { text: "par le MSC", correct: "false" },
      { text: "par le HLR", correct: "false" },
      {
        text: "un centre de sécurité commun à tous les opérateurs 2G ",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Lors du cryptage de l’interface radio pour déchiffrer la séquence, le récepteur",
    answers: [
      {
        text: "fait un XOR (Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement ",
        correct: "true",
      },
      {
        text: "fait un XOR bar (Non Ou exclusif) bit à bit entre la séquence reçue et la séquence de chiffrement",
        correct: "false",
      },
      {
        text: "soustrait la séquence de chiffrement en hexadécimal à la séquence reçue hexadécimal (en complément à 2) ",
        correct: "false",
      },
      {
        text: "additionne la séquence de chiffrement à la séquence reçue",
        correct: "false",
      },
    ],
  },
  {
    question: "Le TMSI (Temporary Mobile Subscriber Identity) est fourni par",
    answers: [
      { text: "la BTS", correct: "false" },
      { text: "le HLR", correct: "false" },
      { text: "le VLR", correct: "true" },
      { text: "le BSC", correct: "false" },
      { text: "le SGSN", correct: "false" },
    ],
  },
  {
    question: "L’identité Temporaire TMSI est alloué ",
    answers: [
      {
        text: "avant l’authentification et l’activation du chiffrement",
        correct: "false",
      },
      {
        text: "après l’authentification et l’activation du chiffrement",
        correct: "false",
      },
      {
        text: "après l’authentification mais avant l’activation du chiffrement",
        correct: "true",
      },
    ],
  },
  {
    question: "L'IMSI est stocké en permanence dans (2 réponses attendues)",
    answers: [
      { text: "la carte SIM", correct: "true" },
      { text: "la BTS", correct: "false" },
      { text: "le HLR/AUC", correct: "true" },
      { text: "le MSC/VLR", correct: "false" },
      { text: "le SGSN", correct: "false" },
      { text: "le GGSN", correct: "false" },
    ],
  },
  {
    question: " Le HLR (2 réponses attendues)",
    answers: [
      { text: "contient la liste des abonnés du réseau", correct: "true" },
      {
        text: "est consulté par le VLR, le GMSC, le SGSN pour rapatrier le profil d’abonné et accéder ainsi les mécanismes de contrôle d’accès ",
        correct: "false",
      },
      {
        text: "est consulté par le VLR pour que ce dernier dispose du profil des abonnés présents dans la zone que ce VLR gère",
        correct: "true",
      },
      {
        text: "contient l’état précis de chaque terminal (au repos, actif, engagé dans un transfert) à tout instant",
        correct: "false",
      },
    ],
  },
  {
    question: "Dans un réseau cellulaire, plus une cellule est petite",
    answers: [
      {
        text: "plus la capacité en Mbit/s par kilomètre carré est faible.",
        correct: "false",
      },
      {
        text: "plus la capacité en Mbit/s par kilomètre carré est grande",
        correct: "true",
      },
      { text: "plus la liaison est de mauvaise qualité.", correct: "false" },
    ],
  },
  {
    question: "Dans le contexte des réseaux mobile , HLR signifie",
    answers: [
      { text: "Holistic Localisation System ", correct: "false" },
      { text: "Home Location Register", correct: "true" },
      { text: "Her Localisation Register ", correct: "false" },
      { text: "Homo sapiens Local Region", correct: "false" },
    ],
  },
  {
    question:
      'La procédure de "paging" est nécessaire pour les cas suivants (deux réponses possibles)',
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
        text: "un abonné du réseau mobile appelle un abonné du réseau téléphonique RTC",
        correct: "false",
      },
      {
        text: "un abonné du réseau mobile en cours de communication qui change de cellule ",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Dans un réseau radio-mobile, on découpe le territoire en cellules pour (deux réponses possibles)",
    answers: [
      {
        text: "permettre à chaque station de base de disposer d’une liaison satellite avec le réseau.",
        correct: "false",
      },
      {
        text: "faire en sorte qu’un terminal soit toujours sous la portée d’une station de base.",
        correct: "true",
      },
      {
        text: "emprisonner les ondes dans un espace limité.",
        correct: "false",
      },
      { text: "augmenter la capacité du réseau. ", correct: "true" },
    ],
  },
  {
    question:
      "On considère une transmission à la fréquence de 2 700 MHz. Quelle est la longueur d’onde de ce signal ? ",
    answers: [
      { text: "1/300 mètres, soit 0,33c m", correct: "false" },
      { text: "1/9 mètres, soit 11,1 cm. ", correct: "true" },
      { text: "1/27 mètres, soit 3,7 cm ", correct: "false" },
      { text: "1/3 mètres, soit 33,3 cm", correct: "false" },
    ],
  },
  {
    question:
      "D’après le schéma qui suit, quelles sont les procédures représentées sur ce schéma (deux réponses possibles)?",
    answers: [
      { text: "Identification", correct: "true" },
      { text: "Authentification", correct: "true" },
      { text: "Différentiation", correct: "false" },
      { text: "Chiffrement", correct: "false" },
    ],
  },
  {
    question: "La technologie UMTS (3G) repose sur",
    answers: [
      { text: "la transmission analogique ", correct: "false" },
      { text: "le multiplexage en fréquence (FDMA)", correct: "false" },
      { text: "le multiplexage par les codes (CDMA)", correct: "true" },
      { text: "le multiplexage en temps (TDMA)", correct: "false" },
    ],
  },
  {
    question:
      "La communication entre un mobile GSM et le réseau téléphonique traverse les équipements dans l'ordre suivant (MSCs signifie qu'on peut avoir une chaine de plusieurs MSC.)",
    answers: [
      {
        text: "mobile - BTS - BSC - MSCs - HLR - réseau téléphonique",
        correct: "false",
      },
      {
        text: "mobile - BTS - BSC - MSCs - réseau téléphonique ",
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
        text: "mobile - MSCs - BTS - BSC - réseau téléphonique",
        correct: "false",
      },
    ],
  },
  {
    question: "SGSN signifie :",
    answers: [
      { text: "Serving GPRS Support Node", correct: "true" },
      { text: "Service GPRS Support Node", correct: "false" },
      { text: "Serving GPRS Service Node", correct: "false" },
      { text: "Serving GPRS Support Network", correct: "false" },
      { text: "Serving GSM Support Node ", correct: "false" },
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
    question: "Si ma carte SIM est bloquée. Quel est le code de déblocage ?",
    answers: [
      { text: "SIM", correct: "false" },
      { text: "PIN", correct: "false" },
      { text: "KPI ", correct: "false" },
      { text: "PUK", correct: "true" },
      { text: "SRES", correct: "false" },
    ],
  },
  {
    question:
      " Lors d’un partage passif d’infrastructure deux opérateurs ne se partagent pas :",
    answers: [
      { text: "Site", correct: "false" },
      { text: "Pylônes", correct: "false" },
      { text: "Energie", correct: "true" },
      { text: "Equipment radio de la BTS", correct: "false" },
      { text: "Chambre technique (Shelter)", correct: "true" },
    ],
  },
  {
    question:
      "Quelle est la fréquence uplink du canal correspondant au ARFCN = 608",
    answers: [
      { text: "1831,6 MHz", correct: "false" },
      { text: "1729,2 MHz", correct: "false" },
      { text: "1860,4 MHz", correct: "false" },
      { text: "1810,4 MHz", correct: "true" },
    ],
  },
  {
    question:
      " Le nombre croissant d'utilisateurs des réseaux mobiles augmentant considérablement, quelle solution peut être mise en place par un opérateur pour écouler le trafic généré ?",
    answers: [
      { text: "diminuer la taille des cellules", correct: "false" },
      { text: "regrouper des cellules", correct: "false" },
      { text: "augmenter la taille des cellules", correct: "true" },
      { text: "réduire la bande de fréquences utilisée", correct: "false" },
    ],
  },
  {
    question:
      " L'accès aux services mobiles via d'autres réseaux mobiles à l'étranger correspond au :",
    answers: [
      { text: "Roaming.", correct: "true" },
      { text: "Hand Over.", correct: "false" },
      { text: "Load Balancing.", correct: "false" },
      { text: "au multiplexage radio.", correct: "false" },
    ],
  },
  {
    question: "Dans le cas de la portabilité concernant les réseaux mobiles :",
    answers: [
      { text: "aucun identifiant n'est modifié. ", correct: "false" },
      { text: "l'identifiant MSISDN reste inchangé", correct: "false" },
      { text: "l'IMEI est modifié.", correct: "false" },
      { text: "l'identifiant MSISDN est modifié.", correct: "true" },
    ],
  },
  {
    question:
      "La procédure de handover est nécessaire dans les cas suivants : (plusieurs réponses possibles)",
    answers: [
      {
        text: "un mobile en cours de communication change de cellule, mais reste sous le même BSC",
        correct: "false",
      },
      {
        text: "un mobile en cours de communication change de cellule et de zone de localisation",
        correct: "true",
      },
      {
        text: "un mobile en veille change de cellule, mais reste sous le même BSC",
        correct: "false",
      },
      {
        text: "un mobile en veille change de cellule et de zone de localisation",
        correct: "false",
      },
      {
        text: "un mobile en veille effectue une itinérance internationale",
        correct: "true",
      },
    ],
  },
  {
    question: "Comment s’appelle le résultat de l’authentification",
    answers: [
      { text: "KC ", correct: "false" },
      { text: "RAND", correct: "false" },
      { text: "SRES ", correct: "false" },
      { text: "Triplet de sécurité", correct: "true" },
    ],
  },
  {
    question:
      " Un appel arrivée (i.e. vers un terminal mobile GSM) commence sur l’interface radio par",
    answers: [
      {
        text: "la transmission par le réseau d’un message de paging",
        correct: "true",
      },
      {
        text: "la transmission par le terminal d’un message d’accès",
        correct: "false",
      },
      {
        text: "la transmission par le réseau d’un message d’allocation de canal",
        correct: "false",
      },
      {
        text: "la transmission par le terminal d’un message de signalisation",
        correct: "false",
      },
    ],
  },
  {
    question: "Un mobile ne capte aucune voie balise. Cela signifie que :",
    answers: [
      {
        text: "l'utilisateur ne peut passer que des appels d'urgence",
        correct: "false",
      },
      {
        text: "aucun réseau cellulaire ne couvre la zone où se trouve l'utilisateur",
        correct: "true",
      },
      { text: "l'utilisateur n'a pas payé sa facture", correct: "false" },
      {
        text: "le mobile n'a pas assez de batterie pour joindre la station de base",
        correct: "false",
      },
    ],
  },
  {
    question: "La voie balise est utilisée pour (2 réponses attendues)",
    answers: [
      {
        text: "permettre au mobile d'estimer la puissance du signal en provenance de la station de base",
        correct: "true",
      },
      {
        text: "estimer la puissance du signal du mobile vers la station de base",
        correct: "false",
      },
      {
        text: "diffuser des informations, telles que l'identité de l'opérateur",
        correct: "true",
      },
      {
        text: "dans les zones non couvertes par un opérateur, indiquer la direction vers laquelle il faut aller pour être couvert",
        correct: "false",
      },
      { text: "faire peur aux opérateurs concurrents ", correct: "false" },
    ],
  },
  {
    question: "Un réseau coeur GPRS peut transporter tout type de paquet",
    answers: [
      { text: "Vrai", correct: "true" },
      { text: "Faux", correct: "false" },
    ],
  },
  {
    question:
      "Le débit en EDGE-GPRS est typiquement de quelques dizaines de kbits/s",
    answers: [
      { text: "Vrai", correct: "false" },
      { text: "Faux", correct: "true" },
    ],
  },
  {
    question:
      "Pour mettre en oeuvre GPRS, les opérateurs ont dû installer un nouveau réseau cœur",
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
