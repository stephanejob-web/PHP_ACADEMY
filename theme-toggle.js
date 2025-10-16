// Gestionnaire de thème clair/sombre
(function() {
    'use strict';

    // Récupérer le thème sauvegardé ou utiliser 'light' par défaut
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = themeToggleBtn?.querySelector('.theme-icon');

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.textContent = '☀️';
            }
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) {
                themeIcon.textContent = '🌙';
            }
        }
    }

    // Fonction pour basculer le thème
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        // Animation de rotation
        if (themeIcon) {
            themeIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeIcon.style.transform = '';
            }, 300);
        }
    }

    // Appliquer le thème sauvegardé au chargement
    applyTheme(savedTheme);

    // Écouter le clic sur le bouton
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Détecter la préférence système (optionnel)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Si aucun thème n'est sauvegardé, utiliser la préférence système
    if (!localStorage.getItem('theme')) {
        applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
})();
