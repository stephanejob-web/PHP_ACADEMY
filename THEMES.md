# 🎨 Thèmes disponibles - PHP Hero Academy

## 📋 Vue d'ensemble

Le site propose **3 thèmes** au choix, chacun avec son ambiance unique. Vous pouvez basculer entre les thèmes en cliquant sur l'icône en haut à droite (🌙/🧛/☀️).

---

## 🌞 Thème Clair (Light)

**Icône :** 🌙
**Par défaut :** Oui
**Description :** Thème clair et moderne avec un fond blanc et des couleurs vives.

### Palette de couleurs :

| Élément | Couleur | Code |
|---------|---------|------|
| Fond principal | Blanc | `#ffffff` |
| Fond secondaire | Gris très clair | `#f8fafc` |
| Texte principal | Gris très foncé | `#0f172a` |
| Texte secondaire | Gris moyen | `#64748b` |

### Couleurs des modules :

- **Introduction** : Bleu `#2563eb`
- **HTML** : Orange `#e97528`
- **CSS** : Bleu clair `#2965f1`
- **Les Bases PHP** : Cyan `#0891b2`
- **POO** : Violet `#7c3aed`
- **Base de Données** : Vert `#059669`
- **Git** : Rouge `#dc2626`

---

## 🌙 Thème Sombre - Winter is Coming

**Icône :** 🧛
**Description :** Thème sombre inspiré du célèbre thème VSCode "Winter is Coming". Tons bleus apaisants.

### Palette de couleurs :

| Élément | Couleur | Code |
|---------|---------|------|
| Fond principal | Bleu nuit profond | `#011627` |
| Fond secondaire | Bleu sombre | `#0b2942` |
| Texte principal | Bleu clair | `#d6deeb` |
| Texte secondaire | Cyan doux | `#7fdbca` |

### Couleurs des modules :

- **Introduction** : Bleu clair `#82aaff`
- **HTML** : Orange corail `#f78c6c`
- **CSS** : Bleu clair `#82aaff`
- **Les Bases PHP** : Cyan menthe `#7fdbca`
- **POO** : Violet doux `#c792ea`
- **Base de Données** : Vert menthe `#addb67`
- **Git** : Orange corail `#f78c6c`

### Coloration syntaxique :

- **Mots-clés** : Violet `#c792ea`
- **Strings** : Vert `#addb67`
- **Fonctions** : Bleu `#82aaff`
- **Variables** : Cyan `#7fdbca`
- **Commentaires** : Gris-vert `#637777`
- **Nombres** : Orange `#f78c6c`

---

## 🧛 Thème Dracula

**Icône :** ☀️
**Description :** Le thème iconique Dracula ! Fond gris-violet foncé avec des couleurs néon éclatantes.

### Palette de couleurs :

| Élément | Couleur | Code |
|---------|---------|------|
| Fond principal | Gris foncé | `#282a36` |
| Fond secondaire | Gris très foncé | `#21222c` |
| Texte principal | Blanc cassé | `#f8f8f2` |
| Texte secondaire | Bleu gris | `#6272a4` |

### Couleurs des modules :

- **Introduction** : Violet `#bd93f9`
- **HTML** : Orange `#ffb86c`
- **CSS** : Cyan `#8be9fd`
- **Les Bases PHP** : Cyan `#8be9fd`
- **POO** : Rose `#ff79c6`
- **Base de Données** : Vert `#50fa7b`
- **Git** : Rouge `#ff5555`

### Coloration syntaxique :

- **Mots-clés** : Rose `#ff79c6`
- **Strings** : Jaune `#f1fa8c`
- **Fonctions** : Vert `#50fa7b`
- **Variables** : Cyan `#8be9fd`
- **Commentaires** : Bleu gris `#6272a4`
- **Nombres** : Violet `#bd93f9`

---

## 🔄 Comment changer de thème ?

### Méthode 1 : Bouton dans l'interface

1. Cliquez sur l'icône en haut à droite de la page
2. Le thème change selon le cycle : **Clair** → **Sombre** → **Dracula** → **Clair** (etc.)
3. L'icône change pour indiquer le prochain thème :
   - 🌙 = Actuellement en mode Clair (clic → Sombre)
   - 🧛 = Actuellement en mode Sombre (clic → Dracula)
   - ☀️ = Actuellement en mode Dracula (clic → Clair)

### Méthode 2 : Via la console JavaScript

Ouvrez la console du navigateur (F12) et tapez :

```javascript
// Passer en mode clair
window.changeTheme('light');

// Passer en mode sombre
window.changeTheme('dark');

// Passer en mode Dracula
window.changeTheme('dracula');
```

---

## 💾 Sauvegarde automatique

Le thème choisi est **automatiquement sauvegardé** dans le `localStorage` de votre navigateur. Vous retrouverez votre thème préféré à chaque visite !

---

## 🎯 Barre de progression

La **barre de progression** en haut de la page s'adapte automatiquement au module et au thème :

### Exemple avec le module POO :

- **Thème Clair** : Barre violette `#7c3aed`
- **Thème Sombre** : Barre violet doux `#c792ea`
- **Thème Dracula** : Barre rose néon `#ff79c6`

---

## 🛠️ Personnalisation avancée

Les thèmes utilisent des **variables CSS** pour faciliter la personnalisation. Vous pouvez les trouver dans `cours-style.css` :

```css
/* Variables du thème Dracula */
[data-theme="dracula"] {
    --bg-primary: #282a36;
    --text-primary: #f8f8f2;
    --module-poo: #ff79c6;
    /* ... etc */
}
```

---

## 📊 Comparaison des thèmes

| Critère | Clair | Sombre | Dracula |
|---------|-------|--------|---------|
| Fatigue oculaire | ⚠️ Peut fatiguer le soir | ✅ Reposant | ✅ Reposant |
| Lisibilité lumière du jour | ✅ Excellente | ⚠️ Moyenne | ⚠️ Moyenne |
| Ambiance | 🌞 Professionnelle | 🌙 Apaisante | 🧛 Fun & Rétro |
| Contraste | Moyen | Élevé | Très élevé |
| Couleurs | Vives | Douces | Néon |

---

## 🎨 Quel thème choisir ?

- **Clair** : Idéal si vous travaillez dans un environnement lumineux ou préférez un look classique
- **Sombre (Winter is Coming)** : Parfait pour les sessions de nuit ou si vous aimez les tons bleus apaisants
- **Dracula** : Pour les fans du thème iconique, les nostalgiques des années 80, ou si vous voulez un style unique et fun

**Notre conseil** : Testez les 3 et choisissez celui qui vous convient le mieux ! 🚀

---

Créé avec 🧛 pour PHP Hero Academy
