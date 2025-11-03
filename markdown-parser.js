// Parseur Markdown simple avec coloration syntaxique pour PHP
class MarkdownParser {
    constructor() {
        this.rules = [
            // Headers (ordre important : du plus long au plus court)
            { pattern: /^###### (.*$)/gim, replacement: '<h6>$1</h6>' },
            { pattern: /^##### (.*$)/gim, replacement: '<h5>$1</h5>' },
            { pattern: /^#### (.*$)/gim, replacement: '<h4>$1</h4>' },
            { pattern: /^### (.*$)/gim, replacement: '<h3>$1</h3>' },
            { pattern: /^## (.*$)/gim, replacement: '<h2>$1</h2>' },
            { pattern: /^# (.*$)/gim, replacement: '<h1>$1</h1>' },

            // Bold et Italic (ordre important)
            { pattern: /\*\*\*(.*?)\*\*\*/g, replacement: '<strong><em>$1</em></strong>' },
            { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
            { pattern: /\*(.*?)\*/g, replacement: '<em>$1</em>' },

            // Code inline
            { pattern: /`([^`]+)`/g, replacement: '<code class="inline-code">$1</code>' },

            // Links
            { pattern: /\[([^\]]+)\]\(([^)]+)\)/g, replacement: '<a href="$2" target="_blank" rel="noopener">$1</a>' },

            // Images
            { pattern: /!\[([^\]]*)\]\(([^)]+)\)/g, replacement: '<img src="$2" alt="$1" loading="lazy" />' },

            // Horizontal rule
            { pattern: /^---$/gim, replacement: '<hr />' },

            // Blockquotes
            { pattern: /^> (.*)$/gim, replacement: '<blockquote>$1</blockquote>' },
        ];
    }

    parse(markdown) {
        if (!markdown) return '';

        let html = markdown;

        // Extraire et transformer les exercices avec solutions (balises <details>)
        const exercises = [];
        html = html.replace(/<details>\s*<summary>(.*?)<\/summary>([\s\S]*?)<\/details>/gi, (match, summaryText, content) => {
            const placeholder = `__EXERCISE_${exercises.length}__`;
            exercises.push({ summaryText, content });
            return placeholder;
        });

        // Extraire et sauvegarder les blocs de code
        const codeBlocks = [];
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
            // Détecter si c'est un schéma ASCII (contient des caractères de dessin)
            const isAsciiArt = /[┌┐└┘├┤┬┴┼─│╔╗╚╝╠╣╦╩╬═║▲▼◄►→←↑↓⬆⬇⬅➡]/.test(code);
            codeBlocks.push({
                lang: lang || (isAsciiArt ? 'ascii' : 'php'),
                code: code.trim(),
                isAsciiArt: isAsciiArt
            });
            return placeholder;
        });

        // Extraire les tableaux
        const tables = [];
        html = html.replace(/^\|(.+)\|$/gim, (match) => {
            const placeholder = `__TABLE_ROW_${tables.length}__`;
            tables.push(match);
            return placeholder;
        });

        // Appliquer les règles de base
        this.rules.forEach(rule => {
            html = html.replace(rule.pattern, rule.replacement);
        });

        // Gérer les listes
        html = this.parseLists(html);

        // Gérer les paragraphes
        html = this.parseParagraphs(html);

        // Restaurer les tableaux
        tables.forEach((tableRow, index) => {
            html = html.replace(`__TABLE_ROW_${index}__`, tableRow);
        });
        html = this.parseTables(html);

        // Restaurer les blocs de code avec coloration
        codeBlocks.forEach((block, index) => {
            let codeHtml;
            if (block.isAsciiArt) {
                // Pour les schémas ASCII, pas de coloration ni de numérotation
                const escapedCode = this.escapeHtml(block.code);
                codeHtml = `<div class="code-block ascii-art-block"><div class="code-header"><span class="code-lang">Schéma</span><button class="copy-btn" onclick="copyCode(this)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Copier</button></div><pre><code class="ascii-art">${escapedCode}</code></pre></div>`;
            } else {
                // Code normal avec coloration
                const highlighted = this.highlightCode(block.code, block.lang);
                codeHtml = `<div class="code-block"><div class="code-header"><span class="code-lang">${block.lang}</span><button class="copy-btn" onclick="copyCode(this)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Copier</button></div><pre><code class="language-${block.lang}">${highlighted}</code></pre></div>`;
            }
            const placeholder = `__CODE_BLOCK_${index}__`;
            html = html.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), codeHtml);
        });

        // Restaurer les exercices avec le nouveau design
        exercises.forEach((exercise, index) => {
            const exerciseHtml = this.createExerciseHtml(exercise);
            const placeholder = `__EXERCISE_${index}__`;
            html = html.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), exerciseHtml);
        });

        return html;
    }

    createExerciseHtml(exercise) {
        // Parser le contenu de la solution (qui peut contenir du markdown)
        const contentHtml = this.parseExerciseContent(exercise.content);

        return `
<div class="exercise-container" data-exercise-id="${Math.random().toString(36).substr(2, 9)}">
    <div class="exercise-challenge">
        <div class="challenge-badge">💪 DÉFI</div>
        <h4>Essaye par toi-même !</h4>
        <p>Prends quelques minutes pour résoudre cet exercice avant de regarder la solution.</p>

        <button class="btn-solution-big" onclick="showSolution(this)">
            <span class="icon">💡</span>
            <span class="text">Voir la Solution</span>
            <span class="arrow">→</span>
        </button>
    </div>

    <div class="solution-panel" style="display: none;">
        <div class="solution-header">
            <span class="solution-badge">✅ Solution</span>
            <button class="close-solution" onclick="hideSolution(this)" title="Masquer la solution">✕</button>
        </div>
        <div class="solution-content">
            ${contentHtml}
        </div>
    </div>
</div>`;
    }

    parseExerciseContent(content) {
        // Parser le contenu qui peut contenir des blocs de code
        let parsed = content.trim();

        // Extraire les blocs de code
        const codeBlocks = [];
        parsed = parsed.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const placeholder = `__SOLUTION_CODE_${codeBlocks.length}__`;
            codeBlocks.push({ lang: lang || 'php', code: code.trim() });
            return placeholder;
        });

        // Parser le texte restant
        parsed = this.parseInlineMarkdown(parsed);
        parsed = parsed.replace(/\n/g, '<br>');

        // Restaurer les blocs de code
        codeBlocks.forEach((block, index) => {
            const highlighted = this.highlightCode(block.code, block.lang);
            const codeHtml = `<div class="code-block"><div class="code-header"><span class="code-lang">${block.lang}</span><button class="copy-btn" onclick="copyCode(this)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Copier</button></div><pre><code class="language-${block.lang}">${highlighted}</code></pre></div>`;
            parsed = parsed.replace(`__SOLUTION_CODE_${index}__`, codeHtml);
        });

        return parsed;
    }

    highlightCode(code, lang) {
        if (lang !== 'php') {
            const lines = this.escapeHtml(code).split('\n');
            return lines.map(line => `<span class="line">${line || ' '}</span>`).join('\n');
        }

        let highlighted = this.escapeHtml(code);

        // Ordre important: commencer par les éléments les plus spécifiques

        // 1. Commentaires en premier (pour qu'ils ne soient pas affectés par d'autres règles)
        highlighted = highlighted.replace(/(\/\/.*$)/gm, '___COMMENT_START___$1___COMMENT_END___');
        highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '___COMMENT_START___$1___COMMENT_END___');
        highlighted = highlighted.replace(/(#.*$)/gm, '___COMMENT_START___$1___COMMENT_END___');

        // 2. Strings (pour qu'elles ne soient pas affectées par d'autres règles)
        highlighted = highlighted.replace(/("(?:[^"\\]|\\.)*")/g, '___STRING_START___$1___STRING_END___');
        highlighted = highlighted.replace(/('(?:[^'\\]|\\.)*')/g, '___STRING_START___$1___STRING_END___');

        // 3. Mots-clés PHP
        const keywords = [
            'class', 'function', 'public', 'private', 'protected', 'static',
            'new', 'return', 'if', 'else', 'elseif', 'for', 'foreach',
            'while', 'do', 'switch', 'case', 'break', 'continue',
            'extends', 'implements', 'interface', 'namespace', 'use',
            'try', 'catch', 'throw', 'final', 'abstract', 'const',
            'echo', 'print', 'var', 'array', 'true', 'false', 'null'
        ];

        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            highlighted = highlighted.replace(regex, '<span class="keyword">$1</span>');
        });

        // 5. Variables PHP (éviter les doublons dans les commentaires/strings)
        highlighted = highlighted.replace(/(\$[a-zA-Z_]\w*)/g, '<span class="variable">$1</span>');

        // 6. Fonctions (avant les nombres pour éviter les conflits)
        highlighted = highlighted.replace(/\b([a-zA-Z_]\w*)(?=\()/g, '<span class="function">$1</span>');

        // 7. Nombres
        highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

        // Restaurer les commentaires et strings avec leurs styles
        highlighted = highlighted.replace(/___COMMENT_START___(.*?)___COMMENT_END___/g, '<span class="comment">$1</span>');
        highlighted = highlighted.replace(/___STRING_START___(.*?)___STRING_END___/g, '<span class="string">$1</span>');

        // Envelopper chaque ligne dans un span avec la classe "line" pour les numéros de ligne
        const lines = highlighted.split('\n');
        highlighted = lines.map(line => `<span class="line">${line || ' '}</span>`).join('\n');

        return highlighted;
    }

    parseLists(html) {
        // Listes non ordonnées
        html = html.replace(/^\s*[\-\*\+]\s+(.*)$/gim, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // Listes ordonnées
        html = html.replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>');

        return html;
    }

    parseParagraphs(html) {
        // Séparer par double saut de ligne
        const lines = html.split('\n\n');
        const processed = lines.map(line => {
            line = line.trim();
            if (!line) return '';
            if (line.startsWith('<')) return line; // Déjà du HTML
            if (line.includes('__CODE_BLOCK_') || line.includes('__TABLE_ROW_')) return line;
            return `<p>${line.replace(/\n/g, '<br>')}</p>`;
        });

        return processed.join('\n');
    }

    parseTables(html) {
        const lines = html.split('\n');
        let inTable = false;
        let tableHtml = '';
        const result = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.startsWith('|') && line.endsWith('|')) {
                if (!inTable) {
                    inTable = true;
                    tableHtml = '<table class="markdown-table">';
                }

                const cells = line.split('|').slice(1, -1).map(cell => cell.trim());

                // Vérifier si c'est une ligne de séparation
                if (cells.every(cell => /^[\-:]+$/.test(cell))) {
                    continue;
                }

                // Première ligne = header
                const tag = (inTable && !tableHtml.includes('<tbody>')) ? 'th' : 'td';
                // Parser le Markdown dans chaque cellule
                const row = cells.map(cell => {
                    const parsedCell = this.parseInlineMarkdown(cell);
                    return `<${tag}>${parsedCell}</${tag}>`;
                }).join('');

                if (tag === 'th') {
                    tableHtml += `<thead><tr>${row}</tr></thead><tbody>`;
                } else {
                    tableHtml += `<tr>${row}</tr>`;
                }
            } else {
                if (inTable) {
                    tableHtml += '</tbody></table>';
                    result.push(tableHtml);
                    inTable = false;
                    tableHtml = '';
                }
                result.push(line);
            }
        }

        if (inTable) {
            tableHtml += '</tbody></table>';
            result.push(tableHtml);
        }

        return result.join('\n');
    }

    // Nouvelle méthode pour parser uniquement le Markdown inline (gras, italique, code)
    parseInlineMarkdown(text) {
        let parsed = text;

        // Code inline en premier
        parsed = parsed.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

        // Gras et italique (ordre important)
        parsed = parsed.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        parsed = parsed.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Links
        parsed = parsed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

        return parsed;
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Fonction utilitaire pour copier le code
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const codeElement = codeBlock.querySelector('code');

    // Extraire le texte
    let code;
    if (codeElement.classList.contains('ascii-art')) {
        // Pour les schémas ASCII, copier directement le contenu texte
        code = codeElement.textContent;
    } else {
        // Pour le code normal, extraire le texte des lignes sans les numéros
        const lines = codeElement.querySelectorAll('.line');
        code = Array.from(lines).map(line => line.textContent).join('\n');
    }

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copié !
        `;
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}

// Fonction pour afficher la solution d'un exercice
function showSolution(button) {
    const container = button.closest('.exercise-container');
    const panel = container.querySelector('.solution-panel');
    const challengeDiv = container.querySelector('.exercise-challenge');

    // Afficher le panneau solution
    panel.style.display = 'block';

    // Optionnel : masquer le challenge pour gagner de la place
    // challengeDiv.style.display = 'none';

    // Scroll smooth vers la solution
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Animation d'apparition
    panel.style.animation = 'slideDown 0.3s ease';
}

// Fonction pour masquer la solution
function hideSolution(button) {
    const container = button.closest('.exercise-container');
    const panel = container.querySelector('.solution-panel');
    const challengeDiv = container.querySelector('.exercise-challenge');

    // Masquer le panneau
    panel.style.display = 'none';

    // Réafficher le challenge si masqué
    challengeDiv.style.display = 'block';

    // Scroll vers le début de l'exercice
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Fonction pour scroller vers l'exercice (bouton "Je tente")
function scrollToExercise(button) {
    const container = button.closest('.exercise-container');

    // Trouver le prochain élément après l'exercice (généralement le code ou énoncé)
    const nextElement = container.nextElementSibling;

    if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Si pas d'élément suivant, on scroll juste après le container
        container.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // Feedback visuel
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarkdownParser;
}
