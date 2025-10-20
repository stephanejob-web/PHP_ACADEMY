# Guide de Démarrage Rapide

## Tester localement en 3 étapes

### Option 1 : Avec les scripts fournis

#### Sur Mac/Linux
```bash
./start-server.sh
```

#### Sur Windows
Double-cliquez sur `start-server.bat`

### Option 2 : Manuellement

```bash
# Dans le dossier du projet
python3 -m http.server 8000

# Ou avec PHP
php -S localhost:8000
```

### Option 3 : Avec un serveur local existant

Si vous utilisez XAMPP, WAMP, MAMP, etc. :
- Placez le dossier dans `htdocs` ou `www`
- Accédez à http://localhost/PHP_-DEBUTANT-/cours.html

## Première utilisation

1. Ouvrez http://localhost:8000/cours.html
2. Sélectionnez votre thème préféré (Maçon, Cuisinier ou Gamer)
3. Commencez à apprendre!

## Navigation

- **Souris** : Cliquez sur les leçons dans la sidebar
- **Clavier** :
  - `←` Leçon précédente
  - `→` Leçon suivante
- **Mobile** : Utilisez le menu hamburger

## Fonctionnalités clés

### Copier le code
Survolez un bloc de code et cliquez sur "Copier"

### Suivre votre progression
Cliquez sur "Marquer comme terminé" en bas de chaque leçon

### Changer de thème
Cliquez sur le bouton thème en haut à droite

## Problèmes courants

### "Fichier introuvable"
➜ Vous devez utiliser un serveur web, pas ouvrir le fichier directement

### Les styles ne s`affichent pas
➜ Videz le cache : Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)

### La progression n`est pas sauvegardée
➜ Vérifiez que le localStorage est activé dans votre navigateur

## Structure des fichiers

```
📁 Votre projet/
├── 📄 index.html          ← Page d'accueil
├── 📄 cours.html          ← Plateforme de cours
├── 📄 courses.js          ← Données des cours
├── 📄 markdown-parser.js  ← Parser Markdown
├── 📄 cours-app.js        ← Logique de l'app
├── 📄 cours-style.css     ← Styles
│
├── 📁 PHP-DEBUTANT-MODE-MACON 🧱/
│   ├── 📄 00-👉-LIS-MOI-DABORD.md
│   ├── 📁 01_LES BASES/
│   ├── 📁 02_PROGRAMMATION_ORIENTEE_OBJET/
│   ├── 📁 03_BASE_DE_DONNEES/
│   └── 📁 GIT/
│
├── 📁 PHP-DEBUTANT-MODE-CUISINIER 🧑‍🍳/
└── 📁 PHP-DEBUTANT-MODE-GAMER 🎮/
```

## URLs utiles

- **Page d`accueil** : http://localhost:8000/index.html
- **Plateforme de cours** : http://localhost:8000/cours.html
- **Cours spécifique** : http://localhost:8000/cours.html?theme=gamer&lesson=variables

## Déploiement

### GitHub Pages (gratuit)
```bash
git add .
git commit -m "Ajout de la plateforme de cours"
git push
```
Activez GitHub Pages dans les paramètres du repo

### Netlify (gratuit)
- Glissez-déposez le dossier sur netlify.com/drop
- Ou connectez votre repo GitHub

### Vercel (gratuit)
```bash
npm i -g vercel
vercel
```

## Support

Pour plus de détails, consultez :
- `INSTALLATION.md` - Documentation complète
- `README.md` - Présentation du projet

---

Bon cours! 🚀
