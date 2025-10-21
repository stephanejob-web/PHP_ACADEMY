// Structure des cours pour PHP Hero Academy - Version Professionnelle
const coursesData = {
    macon: {
        id: 'macon',
        name: 'Mode Maçon',
        emoji: '👷‍♂️',
        icon: '🧱',
        color: '#f59e0b',
        description: 'Construisez votre code comme un artisan bâtit un mur',
        modules: [
            {
                id: 'prerequisites',
                number: '01',
                title: 'Prérequis & Introduction',
                icon: '📚',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '30 min',
                prerequisites: [],
                description: 'Commence ici ! Installation et découverte de la programmation',
                lessons: [
                    { id: 'lis-moi', title: 'Lis-moi d\'abord', file: '00-👉-LIS-MOI-DABORD.md', duration: '5 min' },
                    { id: 'installation', title: 'Installer son environnement', file: '01_LES BASES/00_installation_environnement.md', duration: '10 min' },
                    { id: 'introduction', title: 'Introduction à la programmation', file: '01_LES BASES/001_introduction-programmation.md', duration: '15 min' }
                ]
            },
            {
                id: 'html',
                number: '02',
                title: 'HTML',
                icon: '🌐',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['01'],
                description: 'Structure et contenu des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'css',
                number: '03',
                title: 'CSS',
                icon: '🎨',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['02'],
                description: 'Mise en forme et design des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'javascript-debutant',
                number: '04',
                title: 'JavaScript Débutant',
                icon: '⚡',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '5h',
                prerequisites: ['02', '03'],
                description: 'Rends tes pages web interactives avec JavaScript',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'javascript-intermediaire',
                number: '05',
                title: 'JavaScript Intermédiaire',
                icon: '💡',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '6h',
                prerequisites: ['04'],
                description: 'Asynchrone, APIs et concepts avancés de JavaScript',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'php-debutant',
                number: '06',
                title: 'PHP Débutant',
                icon: '🔰',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['01'],
                description: 'Les fondamentaux de PHP : variables, conditions, boucles et fonctions',
                lessons: [
                    { id: 'variables', title: 'Les Variables', file: '01_LES BASES/01_variables.md', duration: '15 min' },
                    { id: 'conditions', title: 'Les Conditions', file: '01_LES BASES/02_conditions.md', duration: '20 min' },
                    { id: 'boucle-for', title: 'La Boucle For', file: '01_LES BASES/03_boucle_for.md', duration: '20 min' },
                    { id: 'boucle-while', title: 'La Boucle While', file: '01_LES BASES/04_boucle_while.md', duration: '15 min' },
                    { id: 'tableaux', title: 'Les Tableaux', file: '01_LES BASES/05_tableaux.md', duration: '25 min' },
                    { id: 'tableaux-associatifs', title: 'Tableaux Associatifs', file: '01_LES BASES/06_tableaux_associatifs.md', duration: '20 min' },
                    { id: 'fonctions', title: 'Les Fonctions', file: '01_LES BASES/07_function.md', duration: '30 min' },
                    { id: 'projet-devis', title: '🏆 Projet Final : Calculateur de Devis', file: '01_LES BASES/08_projet_calculateur_devis_chantier.md', duration: '60 min' }
                ]
            },
            {
                id: 'php-intermediaire',
                number: '07',
                title: 'PHP Intermédiaire',
                icon: '⚙️',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Maîtrise la Programmation Orientée Objet (POO)',
                lessons: [
                    { id: 'poo-1', title: 'Introduction POO', file: '02_PROGRAMMATION_ORIENTEE_OBJET/01_poo_macon.md', duration: '30 min' },
                    { id: 'poo-2', title: 'Classes et Objets', file: '02_PROGRAMMATION_ORIENTEE_OBJET/02_poo_macon.md', duration: '35 min' },
                    { id: 'poo-3', title: 'Héritage', file: '02_PROGRAMMATION_ORIENTEE_OBJET/03_poo_macon.md', duration: '40 min' },
                    { id: 'poo-4', title: 'Encapsulation', file: '02_PROGRAMMATION_ORIENTEE_OBJET/04_poo_macon.md', duration: '35 min' },
                    { id: 'poo-5', title: 'Polymorphisme', file: '02_PROGRAMMATION_ORIENTEE_OBJET/05_poo_macon.md', duration: '40 min' },
                    { id: 'poo-6', title: 'Concepts Avancés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/06_poo_macon.md', duration: '45 min' },
                    { id: 'exercices-poo', title: '🏆 Exercices POO Corrigés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/Exercices_POO_Corriges.md', duration: '60 min' }
                ]
            },
            {
                id: 'database',
                number: '08',
                title: 'Base de Données SQL',
                icon: '💾',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Stocke et manipule tes données avec SQL',
                lessons: [
                    { id: 'bdd-intro', title: 'C\'est quoi une BDD?', file: '03_BASE_DE_DONNEES/01_apprendre_sql_debutant_c_est_quoi_une_base_de_donnees.md', duration: '20 min' },
                    { id: 'bdd-ajouter', title: 'Ajouter des données', file: '03_BASE_DE_DONNEES/02_apprendre_sql_debutant_ajouter_des_données.md', duration: '25 min' },
                    { id: 'bdd-modifier', title: 'Modifier des données', file: '03_BASE_DE_DONNEES/03_apprendre_sql_debutant_Modifier_des_données.md', duration: '25 min' },
                    { id: 'bdd-supprimer', title: 'Supprimer des données', file: '03_BASE_DE_DONNEES/04_apprendre_sql_debutant_Supprimer_des_données.md', duration: '25 min' },
                    { id: 'bdd-lire', title: 'Lire avec précision', file: '03_BASE_DE_DONNEES/05_apprendre_sql_debutant_Lire_avec_precision.md', duration: '30 min' },
                    { id: 'bdd-trier', title: 'Trier et limiter', file: '03_BASE_DE_DONNEES/06_apprendre_sql_debutant_Trier_et_limiter.md', duration: '25 min' },
                    { id: 'bdd-relations', title: 'Relations entre tables', file: '03_BASE_DE_DONNEES/07_apprendre_sql_debutant_Relations_entre_tables.md', duration: '30 min' },
                    { id: 'bdd-join', title: 'Connecter avec JOIN', file: '03_BASE_DE_DONNEES/08_apprendre_sql_debutant_Connecter_avec_JOIN.md', duration: '35 min' },
                    { id: 'bdd-projet', title: '🏆 Projet Final : Gestion Chantier', file: '03_BASE_DE_DONNEES/09_apprendre_sql_debutant_Projet_Gestion_Chantier.md', duration: '90 min' }
                ]
            },
            {
                id: 'git',
                number: '09',
                title: 'Git & GitHub',
                icon: '🔧',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['06'],
                description: 'Gère ton code comme un pro avec Git',
                lessons: [
                    { id: 'git-intro', title: 'Pourquoi Git?', file: 'GIT/01_Pourquoi_Git.md', duration: '15 min' },
                    { id: 'git-historique', title: 'Inspecter l\'historique', file: 'GIT/02_Inspecter_Ton_ historique.md', duration: '20 min' },
                    { id: 'git-branches', title: 'Créer des branches', file: 'GIT/03_Créer_Des branches.md', duration: '25 min' },
                    { id: 'git-fusionner', title: 'Fusionner des branches', file: 'GIT/04_Fusionner_des_ branches.md', duration: '25 min' },
                    { id: 'git-conflits', title: 'Résoudre des conflits', file: 'GIT/05_Résoudre_des_conflits.md', duration: '30 min' },
                    { id: 'git-github', title: 'Travailler avec GitHub', file: 'GIT/06_Travaille_ avec_ GitHub.md', duration: '30 min' },
                    { id: 'git-equipe', title: 'Collaborer en équipe', file: 'GIT/07_ Collaborer_en_ équipe.md', duration: '35 min' }
                ]
            }
        ]
    },
    cuisinier: {
        id: 'cuisinier',
        name: 'Mode Cuisinier',
        emoji: '👨‍🍳',
        icon: '🍳',
        color: '#ef4444',
        description: 'Cuisinez du code comme un chef prépare un plat',
        modules: [
            {
                id: 'prerequisites',
                number: '01',
                title: 'Prérequis & Introduction',
                icon: '📚',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '30 min',
                prerequisites: [],
                description: 'Commence ici ! Installation et découverte de la programmation',
                lessons: [
                    { id: 'lis-moi', title: 'Lis-moi d\'abord', file: '00-👉-LIS-MOI-DABORD.md', duration: '5 min' },
                    { id: 'installation', title: 'Installer son environnement', file: '01_LES BASES/00_installation_environnement.md', duration: '10 min' },
                    { id: 'introduction', title: 'Introduction à la programmation', file: '01_LES BASES/001_introduction-programmation.md', duration: '15 min' }
                ]
            },
            {
                id: 'html',
                number: '02',
                title: 'HTML',
                icon: '🌐',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['01'],
                description: 'Structure et contenu des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'css',
                number: '03',
                title: 'CSS',
                icon: '🎨',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['02'],
                description: 'Mise en forme et design des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'php-debutant',
                number: '04',
                title: 'PHP Débutant',
                icon: '🔰',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['01'],
                description: 'Les fondamentaux de PHP : variables, conditions, boucles et fonctions',
                lessons: [
                    { id: 'variables', title: 'Les Variables', file: '01_LES BASES/01_variables.MD', duration: '15 min' },
                    { id: 'conditions', title: 'Les Conditions', file: '01_LES BASES/02_conditions.MD', duration: '20 min' },
                    { id: 'boucle-for', title: 'La Boucle For', file: '01_LES BASES/03_boucle_for.md', duration: '20 min' },
                    { id: 'boucle-while', title: 'La Boucle While', file: '01_LES BASES/04_boucle_while.md', duration: '15 min' },
                    { id: 'tableaux', title: 'Les Tableaux', file: '01_LES BASES/05_tableaux.md', duration: '25 min' },
                    { id: 'tableaux-associatifs', title: 'Tableaux Associatifs', file: '01_LES BASES/06_tableaux_associatifs.md', duration: '20 min' },
                    { id: 'fonctions', title: 'Les Fonctions', file: '01_LES BASES/07_function.md', duration: '30 min' },
                    { id: 'projet-recettes', title: '🏆 Projet Final : Coût de Recettes', file: '01_LES BASES/08_projet_calculateur_cout_recettes.md', duration: '60 min' }
                ]
            },
            {
                id: 'php-intermediaire',
                number: '07',
                title: 'PHP Intermédiaire',
                icon: '⚙️',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Maîtrise la Programmation Orientée Objet (POO)',
                lessons: [
                    { id: 'poo-1', title: 'Introduction POO', file: '02_PROGRAMMATION_ORIENTEE_OBJET/01_poo_cuisinier.md', duration: '30 min' },
                    { id: 'poo-2', title: 'Classes et Objets', file: '02_PROGRAMMATION_ORIENTEE_OBJET/02_poo_cuisinier.md', duration: '35 min' },
                    { id: 'poo-3', title: 'Héritage', file: '02_PROGRAMMATION_ORIENTEE_OBJET/03_poo_cuisinier.md', duration: '40 min' },
                    { id: 'poo-4', title: 'Encapsulation', file: '02_PROGRAMMATION_ORIENTEE_OBJET/04_poo_cuisinier.md', duration: '35 min' },
                    { id: 'poo-5', title: 'Polymorphisme', file: '02_PROGRAMMATION_ORIENTEE_OBJET/05_poo_cuisinier.md', duration: '40 min' },
                    { id: 'poo-6', title: 'Concepts Avancés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/06_poo_cuisinier.md', duration: '45 min' },
                    { id: 'exercices-poo', title: '🏆 Exercices POO Corrigés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/Exercices_POO_Corriges.md', duration: '60 min' }
                ]
            },
            {
                id: 'database',
                number: '08',
                title: 'Base de Données SQL',
                icon: '💾',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Stocke et manipule tes données avec SQL',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'git',
                number: '07',
                title: 'Git & GitHub',
                icon: '🔪',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['04'],
                description: 'Gère ton code comme un pro avec Git',
                lessons: [
                    { id: 'git-intro', title: 'Pourquoi Git?', file: 'GIT/01_Pourquoi_Git.md', duration: '15 min' },
                    { id: 'git-historique', title: 'Inspecter l\'historique', file: 'GIT/02_Inspecter_Ton_ historique.md', duration: '20 min' },
                    { id: 'git-branches', title: 'Créer des branches', file: 'GIT/03_Créer_Des branches.md', duration: '25 min' },
                    { id: 'git-fusionner', title: 'Fusionner des branches', file: 'GIT/04_Fusionner_des_ branches.md', duration: '25 min' },
                    { id: 'git-conflits', title: 'Résoudre des conflits', file: 'GIT/05_Résoudre_des_conflits.md', duration: '30 min' },
                    { id: 'git-github', title: 'Travailler avec GitHub', file: 'GIT/06_Travaille_ avec_ GitHub.md', duration: '30 min' },
                    { id: 'git-equipe', title: 'Collaborer en équipe', file: 'GIT/07_ Collaborer_en_ équipe.md', duration: '35 min' }
                ]
            }
        ]
    },
    gamer: {
        id: 'gamer',
        name: 'Mode Gamer',
        emoji: '🎮',
        icon: '⚔️',
        color: '#8b5cf6',
        description: 'Gérez votre code comme un inventaire RPG',
        modules: [
            {
                id: 'prerequisites',
                number: '01',
                title: 'Prérequis & Introduction',
                icon: '📚',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '30 min',
                prerequisites: [],
                description: 'Commence ici ! Installation et découverte de la programmation',
                lessons: [
                    { id: 'lis-moi', title: 'Lis-moi d\'abord', file: '00-👉-LIS-MOI-DABORD.md', duration: '5 min' },
                    { id: 'installation', title: 'Installer son environnement', file: '01_LES_BASES/00_installation_environnement.md', duration: '10 min' },
                    { id: 'introduction', title: 'Introduction à la programmation', file: '01_LES_BASES/001_introduction_programmation.md', duration: '15 min' }
                ]
            },
            {
                id: 'html',
                number: '02',
                title: 'HTML',
                icon: '🌐',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['01'],
                description: 'Structure et contenu des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'css',
                number: '03',
                title: 'CSS',
                icon: '🎨',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['02'],
                description: 'Mise en forme et design des pages web',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'php-debutant',
                number: '04',
                title: 'PHP Débutant',
                icon: '🔰',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '4h',
                prerequisites: ['01'],
                description: 'Les fondamentaux de PHP : variables, conditions, boucles et fonctions',
                lessons: [
                    { id: 'variables', title: 'Les Variables', file: '01_LES_BASES/01_variables.MD', duration: '15 min' },
                    { id: 'conditions', title: 'Les Conditions', file: '01_LES_BASES/02_conditions.MD', duration: '20 min' },
                    { id: 'boucle-for', title: 'La Boucle For', file: '01_LES_BASES/03_boucle_for.md', duration: '20 min' },
                    { id: 'boucle-while', title: 'La Boucle While', file: '01_LES_BASES/04_boucle_while.md', duration: '15 min' },
                    { id: 'tableaux', title: 'Les Tableaux', file: '01_LES_BASES/05_tableaux.md', duration: '25 min' },
                    { id: 'tableaux-associatifs', title: 'Tableaux Associatifs', file: '01_LES_BASES/06_tableaux_associatifs.md', duration: '20 min' },
                    { id: 'fonctions', title: 'Les Fonctions', file: '01_LES_BASES/07_function.md', duration: '30 min' },
                    { id: 'premier-projet', title: '🏆 Projet Final : Inventaire RPG', file: '01_LES_BASES/08_premier_projet_tableaux_associatifs.md', duration: '45 min' }
                ]
            },
            {
                id: 'php-intermediaire',
                number: '07',
                title: 'PHP Intermédiaire',
                icon: '⚙️',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Maîtrise la Programmation Orientée Objet (POO)',
                lessons: [
                    { id: 'poo-1', title: 'Introduction POO', file: '02_PROGRAMMATION_ORIENTEE_OBJET/01_poo_gamer.md', duration: '30 min' },
                    { id: 'poo-2', title: 'Classes et Objets', file: '02_PROGRAMMATION_ORIENTEE_OBJET/02_poo_gamer.md', duration: '35 min' },
                    { id: 'poo-3', title: 'Héritage', file: '02_PROGRAMMATION_ORIENTEE_OBJET/03_poo_gamer.md', duration: '40 min' },
                    { id: 'poo-4', title: 'Encapsulation', file: '02_PROGRAMMATION_ORIENTEE_OBJET/04_poo_gamer.md', duration: '35 min' },
                    { id: 'poo-5', title: 'Polymorphisme', file: '02_PROGRAMMATION_ORIENTEE_OBJET/05_poo_gamer.md', duration: '40 min' },
                    { id: 'poo-6', title: 'Concepts Avancés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/06_poo_gamer.md', duration: '45 min' },
                    { id: 'exercices-poo', title: '🏆 Exercices POO Corrigés', file: '02_PROGRAMMATION_ORIENTEE_OBJET/Exercices_POO_Corriges.md', duration: '60 min' }
                ]
            },
            {
                id: 'database',
                number: '08',
                title: 'Base de Données SQL',
                icon: '💾',
                level: 'intermédiaire',
                levelBadge: '🟡 INTERMÉDIAIRE',
                estimatedTime: '5h',
                prerequisites: ['06'],
                description: 'Stocke et manipule tes données avec SQL',
                comingSoon: true,
                lessons: []
            },
            {
                id: 'git',
                number: '07',
                title: 'Git & GitHub',
                icon: '🗡️',
                level: 'débutant',
                levelBadge: '🟢 DÉBUTANT',
                estimatedTime: '3h',
                prerequisites: ['04'],
                description: 'Gère ton code comme un pro avec Git',
                lessons: [
                    { id: 'git-intro', title: 'Pourquoi Git?', file: 'GIT/01_Pourquoi_Git.md', duration: '15 min' },
                    { id: 'git-historique', title: 'Inspecter l\'historique', file: 'GIT/02_Inspecter_Ton_ historique.md', duration: '20 min' },
                    { id: 'git-branches', title: 'Créer des branches', file: 'GIT/03_Créer_Des branches.md', duration: '25 min' },
                    { id: 'git-fusionner', title: 'Fusionner des branches', file: 'GIT/04_Fusionner_des_ branches.md', duration: '25 min' },
                    { id: 'git-conflits', title: 'Résoudre des conflits', file: 'GIT/05_Résoudre_des_conflits.md', duration: '30 min' },
                    { id: 'git-github', title: 'Travailler avec GitHub', file: 'GIT/06_Travaille_ avec_ GitHub.md', duration: '30 min' },
                    { id: 'git-equipe', title: 'Collaborer en équipe', file: 'GIT/07_ Collaborer_en_ équipe.md', duration: '35 min' }
                ]
            }
        ]
    }
};

// Fonction pour obtenir le chemin du fichier markdown
function getMarkdownPath(theme, file) {
    const themeNames = {
        'macon': 'PHP-DEBUTANT-MODE-MACON 🧱',
        'cuisinier': 'PHP-DEBUTANT-MODE-CUISINIER 🧑‍🍳',
        'gamer': 'PHP-DEBUTANT-MODE-GAMER 🎮'
    };
    return `${themeNames[theme]}/${file}`;
}

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { coursesData, getMarkdownPath };
}
