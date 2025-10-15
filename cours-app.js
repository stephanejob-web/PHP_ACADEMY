// Application principale pour PHP Hero Academy
class PHPHeroApp {
    constructor() {
        this.currentTheme = null;
        this.currentLesson = null;
        this.completedLessons = new Set();
        this.parser = new MarkdownParser();
        this.init();
    }

    init() {
        // Charger les données depuis localStorage
        this.loadProgress();

        // Vérifier si un thème est déjà sélectionné
        if (this.currentTheme) {
            this.loadTheme(this.currentTheme);
        }

        // Event listeners
        this.setupEventListeners();

        // Charger la leçon depuis l'URL si présente
        this.loadFromURL();
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
            }
        } catch (e) {
            console.error('Erreur lors du chargement de la progression:', e);
        }
    }

    saveProgress() {
        try {
            const data = {
                currentTheme: this.currentTheme,
                completedLessons: Array.from(this.completedLessons)
            };
            localStorage.setItem('phpHeroProgress', JSON.stringify(data));
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
            moduleEl.className = 'module';
            moduleEl.innerHTML = `
                <div class="module-header" onclick="app.toggleModule(${moduleIndex})">
                    <div class="module-title">
                        <span class="module-icon">${module.icon}</span>
                        <span>${module.title}</span>
                    </div>
                    <svg class="module-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
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

        return `
            <div class="lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}"
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
    }

    updateNavigationButtons() {
        const theme = coursesData[this.currentTheme];
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

// Initialiser l'application
const app = new PHPHeroApp();
