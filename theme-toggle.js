// Gestionnaire de thème avec menu déroulant
(function() {
    'use strict';

    // Configuration des thèmes
    const themeConfig = {
        light: { icon: '🌙', label: 'Clair' },
        dark: { icon: '🌙', label: 'Winter is Coming' },
        dracula: { icon: '🧛', label: 'Dracula' }
    };

    // Éléments DOM
    const themeDropdown = document.querySelector('.theme-dropdown');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeMenu = document.getElementById('themeMenu');
    const themeIcon = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    const themeOptions = document.querySelectorAll('.theme-option');

    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        // Valider le thème
        if (!themeConfig[theme]) {
            theme = 'light';
        }

        // Appliquer l'attribut data-theme
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }

        // Mettre à jour le bouton
        if (themeIcon && themeLabel) {
            themeIcon.textContent = themeConfig[theme].icon;
            themeLabel.textContent = themeConfig[theme].label;
        }

        // Mettre à jour les options actives dans le menu
        themeOptions.forEach(option => {
            if (option.dataset.theme === theme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Sauvegarder le thème
        localStorage.setItem('theme', theme);

        console.log(`🎨 Thème appliqué: ${themeConfig[theme].label}`);
    }

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu(e) {
        e.stopPropagation();
        themeDropdown.classList.toggle('active');
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        themeDropdown.classList.remove('active');
    }

    // Appliquer le thème sauvegardé au chargement
    applyTheme(savedTheme);

    // Écouter le clic sur le bouton pour ouvrir/fermer le menu
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleMenu);
    }

    // Écouter les clics sur les options du menu
    themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedTheme = option.dataset.theme;
            applyTheme(selectedTheme);
            closeMenu();
        });
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!themeDropdown.contains(e.target)) {
            closeMenu();
        }
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Détecter la préférence système (optionnel)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Si aucun thème n'est sauvegardé, utiliser la préférence système
    if (!localStorage.getItem('theme')) {
        applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Exposer la fonction pour permettre le changement manuel
    window.changeTheme = applyTheme;
})();
