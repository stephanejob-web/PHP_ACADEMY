// Menu hamburger pour mobile
class MobileMenu {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.overlay = null;
        this.init();
    }

    init() {
        // Créer l'overlay
        this.createOverlay();

        // Écouter le clic sur le bouton hamburger dans la sidebar
        if (this.sidebarToggle) {
            this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Écouter le clic sur le bouton hamburger dans le header
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleSidebar());
        }

        // Écouter le clic sur le bouton flottant
        const floatingBtn = document.getElementById('floatingCoursesBtn');
        if (floatingBtn) {
            floatingBtn.addEventListener('click', () => this.openSidebar());
        }

        // Fermer au clic sur l'overlay
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeSidebar());
        }

        // Fermer au clic sur un lien de cours (pour mobile)
        this.setupLessonLinks();

        // Gérer le redimensionnement de la fenêtre
        window.addEventListener('resize', () => this.handleResize());

        // Vérifier si on est sur mobile au chargement
        this.handleResize();
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'sidebar-overlay';
        document.body.appendChild(this.overlay);
    }

    toggleSidebar() {
        if (this.sidebar.classList.contains('sidebar-open')) {
            this.closeSidebar();
        } else {
            this.openSidebar();
        }
    }

    openSidebar() {
        this.sidebar.classList.add('sidebar-open');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
    }

    closeSidebar() {
        this.sidebar.classList.remove('sidebar-open');
        this.overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurer le scroll
    }

    setupLessonLinks() {
        // Sur mobile, fermer la sidebar quand on clique sur une leçon
        document.addEventListener('click', (e) => {
            if (e.target.closest('.lesson-item') && window.innerWidth <= 768) {
                setTimeout(() => this.closeSidebar(), 300); // Délai pour voir l'animation
            }
        });
    }

    handleResize() {
        // Si on passe en desktop, fermer la sidebar mobile
        if (window.innerWidth > 768) {
            this.closeSidebar();
        }
    }
}

// Initialiser le menu mobile quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MobileMenu();
    });
} else {
    new MobileMenu();
}
