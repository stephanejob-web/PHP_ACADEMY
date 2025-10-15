// Parseur Markdown simple avec coloration syntaxique pour PHP
class MarkdownParser {
    constructor() {
        this.rules = [
            // Headers
            { pattern: /^### (.*$)/gim, replacement: '<h3>$1</h3>' },
            { pattern: /^## (.*$)/gim, replacement: '<h2>$1</h2>' },
            { pattern: /^# (.*$)/gim, replacement: '<h1>$1</h1>' },

            // Bold et Italic
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

        // Extraire et sauvegarder les blocs de code
        const codeBlocks = [];
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
            codeBlocks.push({ lang: lang || 'php', code: code.trim() });
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
            const highlighted = this.highlightCode(block.code, block.lang);
            const codeHtml = `
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">${block.lang}</span>
                        <button class="copy-btn" onclick="copyCode(this)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copier
                        </button>
                    </div>
                    <pre><code class="language-${block.lang}">${highlighted}</code></pre>
                </div>
            `;
            html = html.replace(`__CODE_BLOCK_${index}__`, codeHtml);
        });

        return html;
    }

    highlightCode(code, lang) {
        if (lang !== 'php') {
            return this.escapeHtml(code);
        }

        let highlighted = this.escapeHtml(code);

        // Mots-clés PHP
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

        // Variables PHP
        highlighted = highlighted.replace(/(\$\w+)/g, '<span class="variable">$1</span>');

        // Strings
        highlighted = highlighted.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="string">$1</span>');
        highlighted = highlighted.replace(/('(?:[^'\\]|\\.)*')/g, '<span class="string">$1</span>');

        // Commentaires
        highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
        highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
        highlighted = highlighted.replace(/(#.*$)/gm, '<span class="comment">$1</span>');

        // Fonctions
        highlighted = highlighted.replace(/\b(\w+)(?=\()/g, '<span class="function">$1</span>');

        // Nombres
        highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

        // Tags PHP
        highlighted = highlighted.replace(/(&lt;\?php|\?&gt;)/g, '<span class="tag">$1</span>');

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
                const row = cells.map(cell => `<${tag}>${cell}</${tag}>`).join('');

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
    const code = codeBlock.querySelector('code').textContent;

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

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarkdownParser;
}
