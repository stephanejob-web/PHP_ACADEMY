// Application principale pour PHP Hero Academy
class PHPHeroApp {
    constructor() {
        this.currentTheme = null;
        this.currentLesson = null;
        this.lastLesson = null; // Dernière leçon visitée
        this.completedLessons = new Set();
        this.lastVisit = null; // Date de dernière visite
        this.parser = new MarkdownParser();
        this.init();
    }

    init() {
        console.log('🚀 Initialisation de PHPHeroApp');

        // Charger les données depuis localStorage
        this.loadProgress();
        console.log('📦 Thème chargé depuis localStorage:', this.currentTheme);

        // Event listeners
        this.setupEventListeners();

        // Vérifier que coursesData est chargé
        if (typeof coursesData === 'undefined') {
            console.error('❌ coursesData non défini');
            this.showError('Les données des cours ne sont pas chargées. Veuillez recharger la page.');
            return;
        }
        console.log('✅ coursesData chargé:', Object.keys(coursesData));

        // Vérifier s'il y a des paramètres dans l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme');
        const forceWelcome = urlParams.get('welcome') === 'true';

        console.log('🔗 Paramètres URL - theme:', urlTheme, 'forceWelcome:', forceWelcome);

        // Si le paramètre welcome=true est présent, forcer l'écran de bienvenue
        if (forceWelcome) {
            console.log('👋 Affichage forcé de l\'écran de bienvenue');
            this.showWelcomeScreen();
            return;
        }

        // Priorité à l'URL, sinon localStorage, sinon écran de bienvenue
        if (urlTheme && coursesData[urlTheme]) {
            console.log('📖 Chargement depuis URL:', urlTheme);
            this.loadFromURL();
        } else if (this.currentTheme && coursesData[this.currentTheme]) {
            console.log('💾 Chargement du thème sauvegardé:', this.currentTheme);
            this.loadTheme(this.currentTheme);
        } else {
            console.log('👋 Aucun thème - Affichage écran de bienvenue');
            this.showWelcomeScreen();
        }
    }

    setupEventListeners() {
        // Bouton sélecteur de thème
        document.getElementById('themeSelectorBtn')?.addEventListener('click', () => {
            this.openThemeModal();
        });

        // Gestion du responsive sidebar
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Gestion de la navigation avec les touches clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey) {
                this.navigatePrev();
            } else if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey) {
                this.navigateNext();
            }
        });
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('phpHeroProgress');
            if (saved) {
                const data = JSON.parse(saved);
                this.currentTheme = data.currentTheme || null;
                this.completedLessons = new Set(data.completedLessons || []);
                this.lastLesson = data.lastLesson || null;
                this.lastVisit = data.lastVisit || null;

                console.log('📊 Progression chargée:', {
                    theme: this.currentTheme,
                    lessonsCompleted: this.completedLessons.size,
                    lastLesson: this.lastLesson,
                    lastVisit: this.lastVisit
                });
            }
        } catch (e) {
            console.error('Erreur lors du chargement de la progression:', e);
        }
    }

    saveProgress() {
        try {
            const data = {
                currentTheme: this.currentTheme,
                completedLessons: Array.from(this.completedLessons),
                lastLesson: this.lastLesson,
                lastVisit: new Date().toISOString()
            };
            localStorage.setItem('phpHeroProgress', JSON.stringify(data));
            console.log('💾 Progression sauvegardée:', data);
        } catch (e) {
            console.error('Erreur lors de la sauvegarde de la progression:', e);
        }
    }

    loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        const theme = params.get('theme');
        const lesson = params.get('lesson');

        if (theme && coursesData[theme]) {
            this.currentTheme = theme;
            this.loadTheme(theme);

            if (lesson) {
                // Trouver la leçon
                const themeData = coursesData[theme];
                for (const module of themeData.modules) {
                    const lessonData = module.lessons.find(l => l.id === lesson);
                    if (lessonData) {
                        this.loadLesson(module, lessonData);
                        break;
                    }
                }
            }
        }
    }

    updateURL(lessonId) {
        if (this.currentTheme && lessonId) {
            const url = new URL(window.location);
            url.searchParams.set('theme', this.currentTheme);
            url.searchParams.set('lesson', lessonId);
            window.history.pushState({}, '', url);
        }
    }

    loadTheme(themeId) {
        this.currentTheme = themeId;
        const theme = coursesData[themeId];

        if (!theme) {
            this.showError('Thème introuvable');
            return;
        }

        // Mettre à jour l'interface
        this.updateThemeUI(theme);

        // Générer la sidebar
        this.generateSidebar(theme);

        // Sauvegarder
        this.saveProgress();

        // Cacher l'écran d'accueil
        document.getElementById('welcomeScreen').style.display = 'none';
    }

    updateThemeUI(theme) {
        // Header
        document.getElementById('currentThemeIcon').textContent = theme.emoji;
        document.getElementById('currentThemeName').textContent = theme.name;

        // Sidebar
        document.getElementById('sidebarThemeIcon').textContent = theme.emoji;
        document.getElementById('sidebarThemeTitle').textContent = theme.name;

        // Couleur d'accent
        document.documentElement.style.setProperty('--primary', theme.color);
    }

    generateSidebar(theme) {
        const container = document.getElementById('sidebarContent');
        container.innerHTML = '';

        theme.modules.forEach((module, moduleIndex) => {
            const moduleEl = document.createElement('div');
            const isComingSoon = module.comingSoon === true;
            moduleEl.className = `module module-${module.id}${isComingSoon ? ' coming-soon' : ''}`;

            const onclickAttr = isComingSoon ? '' : `onclick="app.toggleModule(${moduleIndex})"`;
            const comingSoonBadge = isComingSoon ? '<span class="coming-soon-badge">Bientôt</span>' : '';

            moduleEl.innerHTML = `
                <div class="module-header" ${onclickAttr}>
                    <div class="module-title">
                        <span class="module-icon">${module.icon}</span>
                        <span>${module.title}</span>
                    </div>
                    ${comingSoonBadge}
                    ${!isComingSoon ? `<svg class="module-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>` : ''}
                </div>
                <div class="module-lessons">
                    ${module.lessons.map(lesson => this.generateLessonItem(module, lesson)).join('')}
                </div>
            `;
            container.appendChild(moduleEl);
        });

        this.updateProgressBar();
    }

    generateLessonItem(module, lesson) {
        const lessonKey = `${this.currentTheme}-${module.id}-${lesson.id}`;
        const isCompleted = this.completedLessons.has(lessonKey);
        const isActive = this.currentLesson?.id === lesson.id;
        const isImportant = lesson.id === 'lis-moi';

        return `
            <div class="lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isImportant ? 'important' : ''}"
                 onclick="app.loadLessonByIds('${module.id}', '${lesson.id}')">
                <div class="lesson-info">
                    <div class="lesson-item-title">${lesson.title}</div>
                    <div class="lesson-item-duration">${lesson.duration}</div>
                </div>
            </div>
        `;
    }

    toggleModule(index) {
        const modules = document.querySelectorAll('.module');
        if (modules[index]) {
            modules[index].classList.toggle('collapsed');
        }
    }

    loadLessonByIds(moduleId, lessonId) {
        const theme = coursesData[this.currentTheme];
        const module = theme.modules.find(m => m.id === moduleId);
        const lesson = module?.lessons.find(l => l.id === lessonId);

        if (module && lesson) {
            this.loadLesson(module, lesson);
        }
    }

    async loadLesson(module, lesson) {
        this.currentLesson = { ...lesson, moduleId: module.id };

        // Sauvegarder la dernière leçon visitée
        this.lastLesson = {
            themeId: this.currentTheme,
            moduleId: module.id,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            moduleTitle: module.title
        };
        this.saveProgress();

        this.updateURL(lesson.id);

        // Afficher l'état de chargement
        this.showLoading();

        try {
            // Charger le fichier Markdown
            const path = getMarkdownPath(this.currentTheme, lesson.file);
            const markdown = await this.fetchMarkdown(path);

            // Parser et afficher
            const html = this.parser.parse(markdown);

            // Mettre à jour l'interface
            this.displayLesson(module, lesson, html);

            // Mettre à jour la sidebar
            this.updateSidebar();

            // Scroll to top
            window.scrollTo(0, 0);

        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            this.showError(`Impossible de charger le cours: ${error.message}`);
        }
    }

    async fetchMarkdown(path) {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Fichier introuvable: ${path}`);
        }
        return await response.text();
    }

    displayLesson(module, lesson, html) {
        // Cacher les autres états
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('errorState').style.display = 'none';

        // Afficher le contenu
        const content = document.getElementById('lessonContent');
        content.style.display = 'block';

        // Remplir les informations
        document.getElementById('lessonModule').textContent = module.title;
        document.getElementById('lessonDuration').textContent = lesson.duration;
        document.getElementById('lessonTitle').textContent = lesson.title;
        document.getElementById('lessonBody').innerHTML = html;

        // Mettre à jour les boutons de navigation
        this.updateNavigationButtons();

        // Mettre à jour le bouton "Marquer comme terminé"
        this.updateCompleteButton();

        // Mettre à jour la couleur de la barre de progression
        if (typeof window.updateScrollProgressColor === 'function') {
            window.updateScrollProgressColor();
        }

        // Déclencher un événement personnalisé pour notifier le changement de leçon
        window.dispatchEvent(new Event('lessonChanged'));
    }

    updateNavigationButtons() {
        const { prev, next } = this.getAdjacentLessons();

        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');

        if (prev) {
            btnPrev.disabled = false;
            btnPrev.onclick = () => this.navigatePrev();
        } else {
            btnPrev.disabled = true;
        }

        if (next) {
            btnNext.disabled = false;
            btnNext.onclick = () => this.navigateNext();
        } else {
            btnNext.disabled = true;
        }
    }

    getAdjacentLessons() {
        if (!this.currentLesson) return { prev: null, next: null };

        const theme = coursesData[this.currentTheme];
        const allLessons = [];

        // Construire une liste plate de toutes les leçons
        theme.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                allLessons.push({ module, lesson });
            });
        });

        // Trouver l'index actuel
        const currentIndex = allLessons.findIndex(
            item => item.lesson.id === this.currentLesson.id
        );

        return {
            prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
            next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
        };
    }

    navigatePrev() {
        const { prev } = this.getAdjacentLessons();
        if (prev) {
            this.loadLesson(prev.module, prev.lesson);
        }
    }

    navigateNext() {
        const { next } = this.getAdjacentLessons();
        if (next) {
            this.loadLesson(next.module, next.lesson);
        }
    }

    updateCompleteButton() {
        const lessonKey = `${this.currentTheme}-${this.currentLesson.moduleId}-${this.currentLesson.id}`;
        const isCompleted = this.completedLessons.has(lessonKey);

        const btn = document.getElementById('btnComplete');
        if (isCompleted) {
            btn.classList.add('completed');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Terminé
            `;
        } else {
            btn.classList.remove('completed');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Marquer comme terminé
            `;
        }
    }

    markComplete() {
        if (!this.currentLesson) return;

        const lessonKey = `${this.currentTheme}-${this.currentLesson.moduleId}-${this.currentLesson.id}`;

        if (this.completedLessons.has(lessonKey)) {
            this.completedLessons.delete(lessonKey);
        } else {
            this.completedLessons.add(lessonKey);
        }

        this.saveProgress();
        this.updateCompleteButton();
        this.updateSidebar();
        this.updateProgressBar();
    }

    updateSidebar() {
        // Régénérer la sidebar avec l'état actuel
        if (this.currentTheme) {
            this.generateSidebar(coursesData[this.currentTheme]);
        }
    }

    updateProgressBar() {
        if (!this.currentTheme) return;

        const theme = coursesData[this.currentTheme];
        let totalLessons = 0;
        let completedCount = 0;

        theme.modules.forEach(module => {
            totalLessons += module.lessons.length;
            module.lessons.forEach(lesson => {
                const lessonKey = `${this.currentTheme}-${module.id}-${lesson.id}`;
                if (this.completedLessons.has(lessonKey)) {
                    completedCount++;
                }
            });
        });

        const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

        document.getElementById('progressFillMini').style.width = `${percent}%`;
        document.getElementById('progressPercent').textContent = `${percent}%`;
    }

    showLoading() {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('lessonContent').style.display = 'none';
        document.getElementById('errorState').style.display = 'none';
        document.getElementById('loadingState').style.display = 'block';
    }

    showError(message) {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('lessonContent').style.display = 'none';
        document.getElementById('loadingState').style.display = 'none';

        const errorState = document.getElementById('errorState');
        errorState.style.display = 'block';
        document.getElementById('errorMessage').textContent = message;
    }

    showWelcomeScreen() {
        console.log('👋 showWelcomeScreen() appelé');

        // Afficher l'écran de sélection de thème
        const welcomeScreen = document.getElementById('welcomeScreen');
        const lessonContent = document.getElementById('lessonContent');
        const loadingState = document.getElementById('loadingState');
        const errorState = document.getElementById('errorState');

        if (welcomeScreen) {
            welcomeScreen.style.display = 'block';
            console.log('✅ welcomeScreen affiché');
        } else {
            console.error('❌ welcomeScreen non trouvé dans le DOM');
        }

        if (lessonContent) lessonContent.style.display = 'none';
        if (loadingState) loadingState.style.display = 'none';
        if (errorState) errorState.style.display = 'none';

        // Afficher le bouton "Continuer" si une progression existe
        this.updateContinueButton();

        console.log('📊 États des écrans:', {
            welcomeScreen: welcomeScreen?.style.display,
            lessonContent: lessonContent?.style.display,
            loadingState: loadingState?.style.display,
            errorState: errorState?.style.display
        });
    }

    updateContinueButton() {
        const continueSection = document.getElementById('continueSection');
        const lastLessonInfo = document.getElementById('lastLessonInfo');

        if (this.lastLesson && this.currentTheme && continueSection && lastLessonInfo) {
            // Calculer la progression
            const theme = coursesData[this.currentTheme];
            let totalLessons = 0;
            theme.modules.forEach(m => totalLessons += m.lessons.length);
            const completedCount = this.completedLessons.size;
            const progressPercent = Math.round((completedCount / totalLessons) * 100);

            // Afficher les informations
            const themeEmoji = theme.emoji;
            const lastVisitDate = this.lastVisit ? new Date(this.lastVisit).toLocaleDateString('fr-FR') : '';

            lastLessonInfo.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-primary);">
                    <div style="font-weight: 600;">
                        ${themeEmoji} ${theme.name} • ${this.lastLesson.moduleTitle}
                    </div>
                    <div style="color: var(--text-secondary);">
                        Dernière leçon : ${this.lastLesson.lessonTitle}
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 0.5rem;">
                        <span>Progression : ${completedCount}/${totalLessons} leçons (${progressPercent}%)</span>
                        ${lastVisitDate ? `<span>Dernière visite : ${lastVisitDate}</span>` : ''}
                    </div>
                </div>
            `;

            continueSection.style.display = 'block';
            console.log('✅ Bouton "Continuer" affiché');
        } else {
            if (continueSection) continueSection.style.display = 'none';
            console.log('ℹ️ Aucune progression à reprendre');
        }
    }

    openThemeModal() {
        document.getElementById('themeModal').style.display = 'flex';
    }

    closeThemeModal() {
        document.getElementById('themeModal').style.display = 'none';
    }

    changeTheme(themeId) {
        this.closeThemeModal();
        this.loadTheme(themeId);

        // Recharger la première leçon du thème
        const theme = coursesData[themeId];
        if (theme.modules.length > 0 && theme.modules[0].lessons.length > 0) {
            this.loadLesson(theme.modules[0], theme.modules[0].lessons[0]);
        }
    }
}

// Fonctions globales pour les événements onclick dans le HTML
function selectTheme(themeId) {
    app.loadTheme(themeId);

    // Charger la première leçon
    const theme = coursesData[themeId];
    if (theme.modules.length > 0 && theme.modules[0].lessons.length > 0) {
        app.loadLesson(theme.modules[0], theme.modules[0].lessons[0]);
    }
}

function changeTheme(themeId) {
    app.changeTheme(themeId);
}

function closeThemeModal() {
    app.closeThemeModal();
}

function navigatePrev() {
    app.navigatePrev();
}

function navigateNext() {
    app.navigateNext();
}

function markComplete() {
    app.markComplete();
}

// Fonction pour effacer le cache et réinitialiser
function clearCache() {
    if (confirm('Êtes-vous sûr de vouloir effacer toute votre progression ?')) {
        console.log('🗑️ Effacement du localStorage');
        localStorage.removeItem('phpHeroProgress');
        console.log('✅ Cache effacé, rechargement...');
        window.location.href = 'cours.html?welcome=true';
    }
}

// Fonction pour reprendre la dernière leçon
function continueLastLesson() {
    if (app && app.lastLesson) {
        console.log('▶️ Reprise de la dernière leçon:', app.lastLesson);

        // Charger le thème si ce n'est pas déjà fait
        if (!app.currentTheme || app.currentTheme !== app.lastLesson.themeId) {
            app.loadTheme(app.lastLesson.themeId);
        }

        // Charger la dernière leçon
        const theme = coursesData[app.lastLesson.themeId];
        const module = theme.modules.find(m => m.id === app.lastLesson.moduleId);
        const lesson = module?.lessons.find(l => l.id === app.lastLesson.lessonId);

        if (module && lesson) {
            app.loadLesson(module, lesson);
        } else {
            console.error('❌ Impossible de trouver la leçon à reprendre');
        }
    }
}

// Initialiser l'application après le chargement du DOM
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new PHPHeroApp();
    });
} else {
    // DOM déjà chargé
    app = new PHPHeroApp();
}
