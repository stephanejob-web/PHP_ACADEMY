# Installation et Utilisation - PHP Hero Academy

## Aperçu

Vous avez maintenant un système complet pour afficher vos cours Markdown directement sur votre site web, avec une interface professionnelle de lecture.

## Fichiers créés

1. **cours.html** - Page principale des cours avec interface de lecture
2. **cours-style.css** - Styles professionnels pour l'interface
3. **cours-app.js** - Logique de l'application (navigation, progression, etc.)
4. **courses.js** - Structure et données des cours
5. **markdown-parser.js** - Parseur Markdown avec coloration syntaxique PHP

## Fonctionnalités

### Pour l'utilisateur
- Sélection du thème d'apprentissage (Maçon, Cuisinier, Gamer)
- Navigation par modules et leçons
- Barre latérale avec progression visuelle
- Coloration syntaxique pour le code PHP
- Bouton "Copier" pour les blocs de code
- Système de progression sauvegardé localement
- Navigation au clavier (←→)
- Interface responsive (mobile/tablette/desktop)
- Changement de thème à tout moment

### Pour vous (développeur)
- Système modulaire facile à maintenir
- Markdown converti automatiquement en HTML
- Pas besoin de base de données
- Tout fonctionne côté client
- Sauvegarde de la progression dans localStorage

## Comment utiliser

### Option 1 : Serveur local simple (recommandé pour tester)

```bash
# Naviguez vers votre dossier
cd /Users/darksh3ll/Downloads/PHP_-DEBUTANT-

# Lancez un serveur web local avec Python
python3 -m http.server 8000

# Ou avec PHP si vous préférez
php -S localhost:8000
```

Puis ouvrez votre navigateur sur : http://localhost:8000/cours.html

### Option 2 : Déploiement sur un serveur web

1. Uploadez tous les fichiers sur votre serveur web
2. Assurez-vous que tous les fichiers Markdown sont accessibles
3. Accédez à `cours.html` depuis votre navigateur

### Option 3 : GitHub Pages

```bash
# Depuis votre dossier git
git add .
git commit -m "Ajout de la plateforme de cours en ligne"
git push origin main

# Activez GitHub Pages dans les paramètres du repo
# Choisissez la branche 'main' et le dossier '/ (root)'
```

Votre site sera accessible sur : `https://votre-username.github.io/PHP_-DEBUTANT/cours.html`

## Structure des fichiers attendue

```
PHP_-DEBUTANT-/
├── index.html                    # Page d'accueil
├── cours.html                    # Interface de cours
├── cours-style.css              # Styles
├── cours-app.js                 # Application
├── courses.js                   # Données des cours
├── markdown-parser.js           # Parser Markdown
├── logo.PNG                     # Logo
├── README.md                    # Documentation générale
│
├── PHP-DEBUTANT-MODE-MACON 🧱/
│   ├── 00-👉-LIS-MOI-DABORD.md
│   ├── 01_LES BASES/
│   │   ├── 01_variables.md
│   │   ├── 02_conditions.md
│   │   └── ...
│   ├── 02_PROGRAMMATION_ORIENTEE_OBJET/
│   ├── 03_BASE_DE_DONNEES/
│   └── GIT/
│
├── PHP-DEBUTANT-MODE-CUISINIER 🧑‍🍳/
│   └── (même structure)
│
└── PHP-DEBUTANT-MODE-GAMER 🎮/
    └── (même structure)
```

## Personnalisation

### Ajouter un nouveau cours

1. Ajoutez votre fichier `.md` dans le bon dossier
2. Mettez à jour `courses.js` pour référencer le nouveau cours :

```javascript
{
    id: 'mon-cours',
    title: 'Mon Nouveau Cours',
    file: '01_LES BASES/09_mon_cours.md',
    duration: '30 min'
}
```

### Modifier les thèmes

Dans `courses.js`, modifiez l'objet `coursesData` :

```javascript
macon: {
    id: 'macon',
    name: 'Mode Maçon',
    emoji: '👷‍♂️',
    color: '#f59e0b',  // Changez la couleur ici
    // ...
}
```

### Personnaliser les styles

Éditez `cours-style.css` et modifiez les variables CSS :

```css
:root {
    --primary: #2563eb;      /* Couleur principale */
    --secondary: #7c3aed;    /* Couleur secondaire */
    --accent: #f59e0b;       /* Couleur d'accent */
    /* ... */
}
```

## Fonctionnalités avancées

### Système de progression

La progression est automatiquement sauvegardée dans le `localStorage` du navigateur :

```javascript
// Données sauvegardées
{
    currentTheme: 'gamer',
    completedLessons: ['gamer-bases-boucle-for', 'gamer-bases-boucle-while', ...]
}
```

### Navigation par URL

Vous pouvez créer des liens directs vers des cours spécifiques :

```html
cours.html?theme=macon&lesson=variables
cours.html?theme=gamer&lesson=poo-1
```

### Code PHP avec coloration syntaxique

Le parseur Markdown détecte automatiquement les blocs de code PHP :

````markdown
```php
<?php
class Hero {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }
}
```
````

## Dépannage

### Les fichiers Markdown ne se chargent pas

**Problème** : Erreur "Fichier introuvable"

**Solutions** :
1. Vérifiez que vous utilisez un serveur web (pas `file://`)
2. Vérifiez les chemins dans `courses.js`
3. Vérifiez que les noms de fichiers correspondent exactement (attention aux espaces et emojis)

### Les styles ne s'appliquent pas

**Solution** : Videz le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)

### La progression n'est pas sauvegardée

**Solution** : Vérifiez que le localStorage n'est pas désactivé dans votre navigateur

## Performance

Le système est optimisé pour :
- Chargement rapide (pas de framework lourd)
- Fonctionnement offline possible (après premier chargement)
- Faible consommation de bande passante
- Compatible avec tous les navigateurs modernes

## Compatibilité navigateurs

- Chrome/Edge : ✅ Complet
- Firefox : ✅ Complet
- Safari : ✅ Complet
- Opera : ✅ Complet
- IE11 : ⚠️ Non supporté

## Support

Pour toute question ou problème :
1. Vérifiez la console du navigateur (F12)
2. Consultez ce fichier INSTALLATION.md
3. Ouvrez une issue sur GitHub

## Améliorations futures possibles

- Export PDF des cours
- Mode sombre
- Recherche full-text
- Notes et annotations personnelles
- Synchronisation cloud de la progression
- Système de badges et achievements
- Quiz interactifs
- Exercices avec correction automatique

---

Créé avec ❤️ pour PHP Hero Academy
