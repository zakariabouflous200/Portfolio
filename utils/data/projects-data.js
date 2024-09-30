import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Bz-Stream',
        description: "Le projet de Plateforme de Streaming Vidéo a pour objectif de créer une application web permettant aux utilisateurs de: 1- Explorer des vidéos populaires sur la page d'accueil, 2- Parcourir des vidéos par genre sur une page dédiée, 3- Accéder à un profil utilisateur pour consulter l'historique de visionnage, 4- Profiter de la lecture en streaming avec des commandes avancées (pause, avance, retour en arrière), 5- Noter les vidéos qu'ils regardent, 6- Intégrer l'API YouTube pour une vaste sélection de contenus vidéo, 7- Gérer les utilisateurs avec Firebase pour une authentification sans backend. .",
        tools: ['JavaScript', 'FireBase', 'Youtube API', 'Canvas', 'HTML', 'CSS', 'Bootstrap', 'Git'],
        role: 'développeur Full Stack',
        code: '',
        demo: '',
        image: crefin,
        visitLink:"https://zakariabouflous200.github.io/Bz_stream/" 
    },
    {
        id: 2,
        name: 'Bz-Crypto',
        description: 'Le projet Cryptomonnaies a pour objectif de développer une application web permettant aux utilisateurs de visualiser les valeurs actuelles des cryptomonnaies, d effectuer des transactions et de suivre l historique de leurs transactions. Cette application utilisera des fonctionnalités graphiques avancées en utilisant HTML5 Canvas pour offrir une expérience utilisateur immersive..',
        tools: ['HTML5 Canvas', 'JavaScript', 'CSS', 'API CoinGecko', 'localStorage', 'TypeScript', 'Git'],
        code: '',
        role: 'développeur Full Stack',
        demo: '',
        image: realEstate,
        visitLink: "https://zakariabouflous200.github.io/Bz_crypto/"
    },
    {
        id: 3,
        name: 'Bouflous-Cinema',
        description: 'Bouflous-Cinema est une application web qui permet aux utilisateurs d explorer des films, de gérer des listes de visionnage personnelles, et de voir des détails sur les cinémas et leurs séances. Le backend est construit avec Node.js et Express, avec MongoDB comme base de données. Les films peuvent être importés à partir d un fichier Excel et les interactions des utilisateurs sont gérées via une API sécurisée',
        tools: ['Node.js', 'Express', 'MongoDB', 'Node-fetch', 'localStorage', 'JWT', 'Chokidar', 'React.js', 'Leaflet', 'Axios', 'tailwind css'],
        code: '',
        role: 'développeur Full Stack',
        demo: '',
        image: realEstate,
        visitLink: "https://cinematheque-francaise.vercel.app/"
    },
    {
        id: 4,
        name: 'Real-madrid-app',
        description: "L'application Real Madrid est une application Flutter qui permet aux fans d'accéder à des informations détaillées sur l'équipe, y compris les statistiques des joueurs et les actualités, via des APIs. Elle sert de hub pour les supporters afin de rester informés et connectés avec leur club favori.",
        tools: ['Flutter', 'Dart', 'HTTP API'],
        code: '',
        role: 'développeur Full Stack',
        demo: '',
        image: realEstate,
        visitLink: "https://github.com/zakariabouflous200/madrid/tree/main"
    },
    
];


