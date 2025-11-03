// Application principale pour PHP Hero Academy
class PHPHeroApp {
    constructor() {
        this.currentTheme = null;
        this.currentLesson = null;
        this.lastLesson = null; // Dernière leçon visitée
        this.completedLessons = new Set();
        this.bookmarkedLessons = []; // Leçons bookmarkées (avec timestamp)
        this.lastVisit = null; // Date de dernière visite
        this.parser = new MarkdownParser();
        this.init();
    }

    init() {
        console.log('🚀 Initialisation de PHPHeroApp');

        // Charger les données depuis localStorage
        this.loadProgress();
        this.loadSidebarState();
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

        // Gestion du toggle sidebar (masquer/afficher)
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Bouton flottant pour réafficher la sidebar
        document.getElementById('floatingCoursesBtn')?.addEventListener('click', () => {
            this.toggleSidebar();
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

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const isCollapsed = sidebar.classList.toggle('collapsed');

        // Sauvegarder l'état dans localStorage
        localStorage.setItem('sidebarCollapsed', isCollapsed);

        console.log('Sidebar:', isCollapsed ? 'Masquée' : 'Affichée');
    }

    loadSidebarState() {
        // Charger l'état de la sidebar depuis localStorage
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (isCollapsed) {
            document.getElementById('sidebar')?.classList.add('collapsed');
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('phpHeroProgress');
            if (saved) {
                const data = JSON.parse(saved);
                this.currentTheme = data.currentTheme || null;
                this.completedLessons = new Set(data.completedLessons || []);
                this.bookmarkedLessons = data.bookmarkedLessons || [];
                this.lastLesson = data.lastLesson || null;
                this.lastVisit = data.lastVisit || null;

                console.log('📊 Progression chargée:', {
                    theme: this.currentTheme,
                    lessonsCompleted: this.completedLessons.size,
                    bookmarksCount: this.bookmarkedLessons.length,
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
                bookmarkedLessons: this.bookmarkedLessons,
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

        // Réappliquer le thème de couleur sauvegardé (Winter is Coming, Dracula, etc.)
        const savedColorTheme = localStorage.getItem('theme');
        if (savedColorTheme && window.changeTheme) {
            setTimeout(() => {
                window.changeTheme(savedColorTheme);
            }, 50); // Petit délai pour s'assurer que le DOM est à jour
        }
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

        // Section Favoris
        if (this.bookmarkedLessons.length > 0) {
            const bookmarksSection = document.createElement('div');
            bookmarksSection.className = 'bookmarks-section';

            const recentBookmarks = this.getRecentBookmarks(3);
            const hasMore = this.bookmarkedLessons.length > 3;

            bookmarksSection.innerHTML = `
                <div class="bookmarks-header">
                    <div class="bookmarks-title">
                        <span class="bookmarks-icon">📌</span>
                        <span>Mes Favoris</span>
                        <span class="bookmarks-count">(${this.bookmarkedLessons.length})</span>
                    </div>
                    ${hasMore ? `<button class="bookmarks-view-all" onclick="app.openBookmarksPanel()" title="Voir tous les favoris">↗</button>` : ''}
                </div>
                <div class="bookmarks-list">
                    ${recentBookmarks.map(bookmark => `
                        <div class="bookmark-quick-item" onclick="app.loadBookmarkedLesson('${bookmark.themeId}', '${bookmark.moduleId}', '${bookmark.lessonId}')">
                            <span class="bookmark-quick-icon">⭐</span>
                            <span class="bookmark-quick-title">${bookmark.lessonTitle}</span>
                        </div>
                    `).join('')}
                    ${hasMore ? `
                        <div class="bookmarks-see-more" onclick="app.openBookmarksPanel()">
                            • • • Voir tous (${this.bookmarkedLessons.length})
                        </div>
                    ` : ''}
                </div>
            `;

            container.appendChild(bookmarksSection);
        }

        theme.modules.forEach((module, moduleIndex) => {
            const moduleEl = document.createElement('div');
            const isComingSoon = module.comingSoon === true;

            // Vérifier si ce module contient la leçon active
            const hasActiveLesson = this.currentLesson &&
                module.lessons.some(lesson => lesson.id === this.currentLesson.id);

            // Par défaut, tous les modules sont fermés sauf celui qui contient la leçon active
            const isCollapsed = !hasActiveLesson;

            moduleEl.className = `module module-${module.id}${isComingSoon ? ' coming-soon' : ''}${isCollapsed ? ' collapsed' : ''}`;

            const onclickAttr = `onclick="app.toggleModule(${moduleIndex})"`;
            const comingSoonBadge = isComingSoon ? '<span class="coming-soon-badge">Bientôt</span>' : '';

            moduleEl.innerHTML = `
                <div class="module-header" ${onclickAttr}>
                    <div class="module-title">
                        <span class="module-icon">${module.icon}</span>
                        <span>${module.title}</span>
                    </div>
                    ${comingSoonBadge}
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
        this.updateFloatingBookmarksButton();
    }

    generateLessonItem(module, lesson) {
        const lessonKey = `${this.currentTheme}-${module.id}-${lesson.id}`;
        const isCompleted = this.completedLessons.has(lessonKey);
        const isActive = this.currentLesson?.id === lesson.id;
        const isImportant = lesson.id === 'lis-moi';
        const isBookmarked = this.isBookmarked(this.currentTheme, module.id, lesson.id);

        return `
            <div class="lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isImportant ? 'important' : ''}"
                 data-lesson-id="${lesson.id}">
                <div class="lesson-info" onclick="app.loadLessonByIds('${module.id}', '${lesson.id}')">
                    <div class="lesson-item-title">${lesson.title}</div>
                    <div class="lesson-item-duration">${lesson.duration}</div>
                </div>
                <button class="lesson-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}"
                        onclick="event.stopPropagation(); app.toggleBookmark('${this.currentTheme}', '${module.id}', '${lesson.id}', '${lesson.title.replace(/'/g, "\\'")}', '${module.title.replace(/'/g, "\\'")}')"
                        title="${isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </button>
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

        // Mettre à jour le bouton "Bookmark"
        this.updateBookmarkButton();

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

    // ========== GESTION DES BOOKMARKS ==========

    toggleBookmark(themeId, moduleId, lessonId, lessonTitle, moduleTitle) {
        const bookmarkKey = `${themeId}-${moduleId}-${lessonId}`;
        const existingIndex = this.bookmarkedLessons.findIndex(b => b.key === bookmarkKey);

        if (existingIndex !== -1) {
            // Retirer le bookmark
            this.bookmarkedLessons.splice(existingIndex, 1);
            this.showToast('🗑️ Retiré des favoris', 'info');
            console.log('📌 Bookmark retiré:', bookmarkKey);
        } else {
            // Ajouter le bookmark (max 15)
            if (this.bookmarkedLessons.length >= 15) {
                this.showToast('⚠️ Maximum 15 favoris atteint', 'warning');
                return;
            }

            this.bookmarkedLessons.unshift({
                key: bookmarkKey,
                themeId,
                moduleId,
                lessonId,
                lessonTitle,
                moduleTitle,
                timestamp: new Date().toISOString()
            });

            this.showToast('⭐ Ajouté aux favoris', 'success');
            console.log('📌 Bookmark ajouté:', bookmarkKey);
        }

        this.saveProgress();
        this.updateSidebar();
        this.updateBookmarksPanel();
        this.updateBookmarkButton();
        this.updateFloatingBookmarksButton();
    }

    isBookmarked(themeId, moduleId, lessonId) {
        const bookmarkKey = `${themeId}-${moduleId}-${lessonId}`;
        return this.bookmarkedLessons.some(b => b.key === bookmarkKey);
    }

    getRecentBookmarks(count = 3) {
        return this.bookmarkedLessons.slice(0, count);
    }

    updateBookmarkButton() {
        if (!this.currentLesson) return;

        const btn = document.getElementById('btnBookmark');
        if (!btn) return;

        const isBookmarked = this.isBookmarked(
            this.currentTheme,
            this.currentLesson.moduleId,
            this.currentLesson.id
        );

        if (isBookmarked) {
            btn.classList.add('bookmarked');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Favori
            `;
        } else {
            btn.classList.remove('bookmarked');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Ajouter aux favoris
            `;
        }
    }

    openBookmarksPanel() {
        const panel = document.getElementById('bookmarksPanel');
        if (panel) {
            panel.classList.add('open');
            this.updateBookmarksPanel();
        }
    }

    closeBookmarksPanel() {
        const panel = document.getElementById('bookmarksPanel');
        if (panel) {
            panel.classList.remove('open');
        }
    }

    updateBookmarksPanel() {
        const container = document.getElementById('bookmarksPanelContent');
        if (!container) return;

        if (this.bookmarkedLessons.length === 0) {
            container.innerHTML = `
                <div class="empty-bookmarks">
                    <div class="empty-icon">⭐</div>
                    <p>Aucun favori pour le moment</p>
                    <p class="empty-hint">Cliquez sur ⭐ pour ajouter une leçon à vos favoris</p>
                </div>
            `;
            return;
        }

        // Grouper par module
        const groupedBookmarks = {};
        this.bookmarkedLessons.forEach(bookmark => {
            if (!groupedBookmarks[bookmark.moduleTitle]) {
                groupedBookmarks[bookmark.moduleTitle] = [];
            }
            groupedBookmarks[bookmark.moduleTitle].push(bookmark);
        });

        let html = '';
        Object.entries(groupedBookmarks).forEach(([moduleTitle, bookmarks]) => {
            html += `
                <div class="bookmarks-group">
                    <div class="bookmarks-group-title">${moduleTitle}</div>
                    ${bookmarks.map(bookmark => this.generateBookmarkItem(bookmark)).join('')}
                </div>
            `;
        });

        container.innerHTML = html;
    }

    generateBookmarkItem(bookmark) {
        // Calculer si c'est récent (<24h)
        const isRecent = (new Date() - new Date(bookmark.timestamp)) < 24 * 60 * 60 * 1000;
        const recentBadge = isRecent ? '<span class="recent-badge">🔥 Récent</span>' : '';

        return `
            <div class="bookmark-item" onclick="app.loadBookmarkedLesson('${bookmark.themeId}', '${bookmark.moduleId}', '${bookmark.lessonId}')">
                <div class="bookmark-info">
                    <div class="bookmark-title">⭐ ${bookmark.lessonTitle}</div>
                    ${recentBadge}
                </div>
                <button class="bookmark-remove" onclick="event.stopPropagation(); app.removeBookmark('${bookmark.key}')" title="Retirer des favoris">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;
    }

    removeBookmark(bookmarkKey) {
        const index = this.bookmarkedLessons.findIndex(b => b.key === bookmarkKey);
        if (index !== -1) {
            this.bookmarkedLessons.splice(index, 1);
            this.saveProgress();
            this.updateSidebar();
            this.updateBookmarksPanel();
            this.updateBookmarkButton();
            this.updateFloatingBookmarksButton();
            this.showToast('🗑️ Retiré des favoris', 'info');
        }
    }

    loadBookmarkedLesson(themeId, moduleId, lessonId) {
        // Charger le thème si nécessaire
        if (this.currentTheme !== themeId) {
            this.loadTheme(themeId);
        }

        // Charger la leçon
        const theme = coursesData[themeId];
        const module = theme.modules.find(m => m.id === moduleId);
        const lesson = module?.lessons.find(l => l.id === lessonId);

        if (module && lesson) {
            this.loadLesson(module, lesson);
            this.closeBookmarksPanel();
        }
    }

    clearAllBookmarks() {
        if (this.bookmarkedLessons.length === 0) {
            this.showToast('ℹ️ Aucun favori à supprimer', 'info');
            return;
        }

        // Demander confirmation
        const count = this.bookmarkedLessons.length;
        const confirmation = confirm(`Voulez-vous vraiment supprimer tous vos favoris (${count}) ?\n\nCette action est irréversible.`);

        if (confirmation) {
            this.bookmarkedLessons = [];
            this.saveProgress();
            this.updateSidebar();
            this.updateBookmarksPanel();
            this.updateBookmarkButton();
            this.updateFloatingBookmarksButton();
            this.showToast(`🗑️ ${count} favori${count > 1 ? 's supprimés' : ' supprimé'}`, 'info');
            console.log('🗑️ Tous les bookmarks ont été supprimés');
        }
    }

    showToast(message, type = 'info') {
        // Créer le toast s'il n'existe pas
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        // Définir le type et le message
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.classList.add('show');

        // Retirer après 3 secondes
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    updateFloatingBookmarksButton() {
        const btn = document.getElementById('floatingBookmarksBtn');
        const count = document.getElementById('floatingBookmarksCount');

        if (!btn || !count) return;

        if (this.bookmarkedLessons.length > 0) {
            btn.style.display = 'flex';
            count.textContent = this.bookmarkedLessons.length;
        } else {
            btn.style.display = 'none';
        }
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

function changeMode(themeId) {
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
