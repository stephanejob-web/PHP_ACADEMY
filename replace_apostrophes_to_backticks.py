#!/usr/bin/env python3
"""
Script pour remplacer les apostrophes par des backticks dans les fichiers markdown.
"""

import re
import sys
from pathlib import Path

def replace_apostrophes_to_backticks(content):
    """
    Remplace les apostrophes utilisées dans le texte français par des backticks.
    Préserve les apostrophes dans les blocs de code.
    """

    lines = content.split('\n')
    fixed_lines = []
    in_code_block = False

    for line in lines:
        # Détecter les blocs de code (triple backticks)
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            fixed_lines.append(line)
            continue

        # Ne pas modifier les lignes dans un bloc de code
        if in_code_block:
            fixed_lines.append(line)
            continue

        # Pour les lignes normales, remplacer les apostrophes françaises
        fixed_line = line

        # Patterns français communs : remplace ' par `
        patterns = [
            (r"([lL])'", r"\1`"),      # l'ordinateur -> l`ordinateur
            (r"([dD])'", r"\1`"),      # d'un -> d`un
            (r"([qQ]u)'", r"\1`"),     # qu'il -> qu`il
            (r"([cC])'", r"\1`"),      # c'est -> c`est
            (r"([jJ])'", r"\1`"),      # j'ai -> j`ai
            (r"([mM])'", r"\1`"),      # m'a -> m`a
            (r"([sS])'", r"\1`"),      # s'il -> s`il
            (r"([nN])'", r"\1`"),      # n'est -> n`est
            (r"([tT])'", r"\1`"),      # t'es -> t`es
        ]

        for pattern, replacement in patterns:
            fixed_line = re.sub(pattern, replacement, fixed_line)

        fixed_lines.append(fixed_line)

    return '\n'.join(fixed_lines)


def fix_file(file_path):
    """Corrige un fichier markdown."""
    try:
        # Lire le contenu
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Appliquer les corrections
        fixed_content = replace_apostrophes_to_backticks(content)

        # Écrire le résultat seulement si des modifications ont été faites
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        return False

    except Exception as e:
        print(f"Erreur lors du traitement de {file_path}: {e}", file=sys.stderr)
        return False


def main():
    """Fonction principale."""
    # Trouver tous les fichiers markdown
    project_root = Path(__file__).parent
    md_files = list(project_root.glob('**/*.md')) + list(project_root.glob('**/*.MD'))

    print(f"Nombre de fichiers markdown trouvés: {len(md_files)}")

    fixed_count = 0
    for md_file in md_files:
        if fix_file(md_file):
            print(f"✓ Corrigé: {md_file.relative_to(project_root)}")
            fixed_count += 1

    print(f"\n✓ {fixed_count} fichier(s) corrigé(s)")
    print(f"✓ {len(md_files) - fixed_count} fichier(s) inchangé(s)")


if __name__ == "__main__":
    main()
