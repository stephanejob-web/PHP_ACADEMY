/**
 * Scroll Progress Bar
 * Affiche une barre de progression en haut de la page qui change de couleur selon le module
 */

(function() {
    'use strict';

    // Éléments DOM
    const progressBar = document.getElementById('scrollProgressBar');

    if (!progressBar) {
        console.warn('Scroll progress bar element not found');
        return;
    }

    /**
     * Met à jour la largeur de la barre de progression
     */
    function updateProgressBar() {
        // Calculer le pourcentage de scroll
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Calculer le pourcentage (de 0 à 100)
        const scrollableHeight = documentHeight - windowHeight;
        const scrollPercentage = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

        // Appliquer la largeur à la barre
        progressBar.style.width = scrollPercentage + '%';
    }

    /**
     * Détermine la classe de module à partir de l'ID du module actuel
     */
    function getModuleClass(moduleId) {
        const moduleMap = {
            'html': 'cours-html',
            'css': 'cours-css',
            'bases': 'cours-bases',
            'poo': 'cours-poo',
            'database': 'cours-database',
            'git': 'cours-git',
            'intro': 'cours-intro'
        };

        return moduleMap[moduleId] || 'cours-php'; // Par défaut PHP
    }

    /**
     * Met à jour la couleur de la barre selon le module actuel
     */
    function updateProgressBarColor() {
        // Récupérer les informations du cours actuel depuis localStorage
        const savedState = localStorage.getItem('courseProgress');

        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                const currentLessonId = state.currentLesson;

                if (currentLessonId && window.coursesData) {
                    // Trouver le module du cours actuel
                    const currentTheme = state.currentTheme;
                    const themeData = window.coursesData[currentTheme];

                    if (themeData && themeData.modules) {
                        // Parcourir les modules pour trouver celui qui contient la leçon actuelle
                        for (const module of themeData.modules) {
                            if (module.lessons) {
                                const lessonExists = module.lessons.some(lesson =>
                                    currentLessonId.includes(lesson.id)
                                );

                                if (lessonExists) {
                                    // Retirer toutes les anciennes classes de cours
                                    document.body.classList.remove(
                                        'cours-html', 'cours-css', 'cours-php',
                                        'cours-bases', 'cours-poo', 'cours-database',
                                        'cours-git', 'cours-intro'
                                    );

                                    // Ajouter la nouvelle classe
                                    const moduleClass = getModuleClass(module.id);
                                    document.body.classList.add(moduleClass);
                                    break;
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                console.error('Erreur lors de la mise à jour de la couleur:', e);
            }
        }
    }

    /**
     * Initialisation
     */
    function init() {
        // Mettre à jour au chargement
        updateProgressBar();
        updateProgressBarColor();

        // Mettre à jour pendant le scroll avec throttling pour les performances
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateProgressBar();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Mettre à jour au redimensionnement
        window.addEventListener('resize', updateProgressBar, { passive: true });

        // Écouter les changements de leçon (si l'app émet cet événement)
        window.addEventListener('lessonChanged', updateProgressBarColor);

        // Observer les changements dans localStorage (pour détecter les changements de leçon)
        window.addEventListener('storage', function(e) {
            if (e.key === 'courseProgress') {
                updateProgressBarColor();
            }
        });
    }

    // Attendre que coursesData soit disponible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Petit délai pour s'assurer que coursesData est chargé
            setTimeout(init, 100);
        });
    } else {
        setTimeout(init, 100);
    }

    // Exposer une fonction publique pour forcer la mise à jour
    window.updateScrollProgressColor = updateProgressBarColor;

})();
