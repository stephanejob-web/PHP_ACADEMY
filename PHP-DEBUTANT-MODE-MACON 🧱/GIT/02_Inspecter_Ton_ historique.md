# 🕰️ Leçon 02 : Inspecter ton chantier (status, log, diff)

## Salut inspecteur ! 🧙‍♂️🔍

Dans la leçon 01, t'as appris à **prendre des photos de ton chantier** avec Git.  
Cool ! Mais maintenant tu te demandes sûrement :

🤔 "Euh... j'ai pris une photo de QUOI exactement ?"  
🤔 "Comment je vois toutes mes photos du chantier ?"  
🤔 "Comment je sais ce que j'ai changé depuis la dernière fois ?"

**Aujourd'hui, tu vas apprendre à :**
- Vérifier l'état actuel de ton chantier
- Consulter toutes les photos de ton carnet
- Comparer ce que t'as changé depuis la dernière photo

C'est parti ! 🚀

---

## 🧱 Retour sur le chantier

Imagine : t'es chef de chantier.

**Tu arrives le matin et tu veux savoir :**

1. **Où on en est ?** → Qu'est-ce qui a changé depuis hier ? → `git status`
2. **Voir l'historique complet** → Feuilleter le carnet avec toutes les photos → `git log`
3. **Comparer avant/après** → Voir exactement ce qui a changé entre deux photos → `git diff`

Voilà les 3 commandes d'inspection qu'on va apprendre ! 💪

---

## 🔍 Commande 1 : `git status` (L'état du chantier)

C'est LA commande que tu vas utiliser **1000 fois par jour**.

```bash
git status
```

**En français :** "Git, dis-moi où j'en suis sur mon chantier !"

**Analogie chantier :** C'est comme arriver le matin et faire le tour du chantier :
- "Ah tiens, y'a des briques qui ont été posées hier"
- "Oh, ce mur a été modifié"
- "Y'a du nouveau matériel qui vient d'arriver"

---

### 🎯 À quoi ça sert ?

Ça te dit :
- ✅ Quels fichiers tu as **modifiés** depuis la dernière photo
- ✅ Quels fichiers sont **prêts à être photographiés** (après un `git add`)
- ✅ Quels fichiers sont **nouveaux** sur le chantier (pas encore suivis par Git)

---

### 🧪 Exemple pratique

Reprends ton projet `mon-site` de la leçon 01.

**Étape 1 :** Modifie ton fichier `index.html`

Ouvre-le et change le texte :

```html
<h1>Bienvenue sur mon site !</h1>
<p>Je m'appelle Kévin et je construis des sites comme un chef !</p>
```

**Étape 2 :** Inspecte ton chantier

```bash
git status
```

**Résultat :** Git te dit quelque chose comme ça :

```
On branch main
Changes not staged for commit:
  modified:   index.html
```

**Traduction en langage chantier :**  
"Hé chef ! Le fichier `index.html` a été modifié, mais t'as pas encore pris de photo pour le carnet."

---

### 💡 Les 3 états possibles sur ton chantier

Quand tu fais `git status`, tes fichiers peuvent être dans **3 états** :

| État | Ça veut dire quoi ? | Analogie chantier | Couleur |
|------|---------------------|-------------------|---------|
| 🔴 **Modifié** (pas ajouté) | Tu as travaillé dessus mais pas encore préparé la photo | Du nouveau matériel sur le chantier, pas encore rangé | Rouge |
| 🟢 **Prêt à être photographié** | Tu as fait `git add`, il attend le `git commit` | Matériel rangé, prêt pour la photo | Vert |
| ⚪ **Non suivi** | C'est un nouveau fichier que Git ne connaît pas | Nouvelle livraison de briques, pas encore inventoriées | Rouge |

**Astuce pro de chef de chantier :**  
Tape `git status` AVANT chaque `git commit` pour être sûr de ce que tu vas photographier !

---

## 📜 Commande 2 : `git log` (Le carnet de chantier complet)

Maintenant, tu veux consulter **toutes** les photos de ton carnet.

```bash
git log
```

**En français :** "Montre-moi toutes les photos qu'on a prises sur ce chantier"

**Analogie chantier :** C'est comme feuilleter ton carnet de chantier du début à aujourd'hui.

---

### 🧪 Exemple pratique

Dans ton projet `mon-site`, tape :

```bash
git log
```

**Résultat :** Tu vas voir un truc comme ça :

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Kevin Dupont <kevin@mail.com>
Date:   Mon Oct 12 10:30:00 2025 +0200

    Première brique posée - page d'accueil

commit z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0
Author: Sophie Martin <sophie@mail.com>
Date:   Mon Oct 12 09:15:00 2025 +0200

    Fondations coulées
```

**Traduction en langage chantier :**

Chaque bloc = **1 photo dans le carnet** (1 commit)

📸 **Photo 1 :**
- **Référence unique** : `a1b2c3d4...` (comme un numéro de page)
- **Qui a fait le travail ?** Kevin Dupont
- **Son contact :** kevin@mail.com
- **Quand ?** Le 12 octobre 2025 à 10h30
- **Qu'est-ce qui a été fait ?** "Première brique posée - page d'accueil"

📸 **Photo 2 :**
- **Qui ?** Sophie Martin
- **Quand ?** Le 12 octobre 2025 à 9h15
- **Quoi ?** "Fondations coulées"

**Pourquoi c'est génial ?**

Imagine qu'il y a un problème avec la page d'accueil.  
Tu regardes le carnet et tu vois : *"C'est Kevin qui l'a faite le 12 octobre à 10h30"*  
Tu peux l'appeler et lui demander : *"Hé Kevin, tu peux m'expliquer ce que t'as fait ?"*

---

### 🎨 Rendre `git log` plus lisible

Le `git log` de base, c'est comme un carnet mal organisé. Voici une version plus claire :

```bash
git log --oneline
```

**Résultat :**

```
a1b2c3d Kevin - Première brique posée - page d'accueil
z9y8x7w Sophie - Fondations coulées
```

**Beaucoup plus facile à lire, non ?** 😎

C'est comme si tu ne gardais que l'essentiel dans ton carnet :
- La référence de la photo
- Le nom de l'ouvrier
- Ce qui a été fait

---

### 🎯 Autres variantes utiles

```bash
git log --oneline --graph
```

**Ça affiche un petit dessin** pour voir les différents chantiers parallèles (les branches - on verra ça plus tard).

```bash
git log --oneline -5
```

**Ça affiche seulement les 5 dernières photos** (pratique si t'en as 500 dans le carnet).

```bash
git log --author="Kevin"
```

**Ça affiche seulement les photos prises par Kevin** (pour voir tout son travail).

---

## 🔀 Commande 3 : `git diff` (Comparer avant/après)

Tu as travaillé sur le chantier, mais tu te souviens plus exactement **quoi**.

```bash
git diff
```

**En français :** "Montre-moi ce qui a changé depuis la dernière photo"

**Analogie chantier :** C'est comme comparer deux photos :
- Photo d'hier : Le mur fait 2 mètres
- Photo d'aujourd'hui : Le mur fait 3 mètres
- **Différence** : On a ajouté 1 mètre de mur ! 🧱

---

### 🧪 Exemple pratique

Tu as modifié `index.html` tout à l'heure. Tape :

```bash
git diff
```

**Résultat :**

```diff
diff --git a/index.html b/index.html
index a1b2c3d..z9y8x7w 100644
--- a/index.html
+++ b/index.html
@@ -1 +1,2 @@
 <h1>Bienvenue sur mon site !</h1>
+<p>Je m'appelle Kévin et je construis des sites comme un chef !</p>
```

**Traduction en langage chantier :**

- Les lignes avec un **`-`** (en rouge) = Ce que tu as **démoli/supprimé**
- Les lignes avec un **`+`** (en vert) = Ce que tu as **construit/ajouté**

Ici, tu as **ajouté** la ligne `<p>Je m'appelle Kévin...</p>`

C'est comme si tu comparais :
- 📸 **Photo d'hier** : Un mur avec 10 briques
- 📸 **Photo d'aujourd'hui** : Un mur avec 12 briques
- **Différence** : +2 briques ajoutées ! 🧱

---

### 💡 Variantes utiles de `git diff`

```bash
git diff --staged
```

**Ça montre les changements** que tu as déjà préparés avec `git add` (ceux qui sont rangés et prêts pour la photo).

**Analogie chantier :** "Montre-moi ce qui est prêt pour la prochaine photo du carnet"

```bash
git diff HEAD
```

**Ça montre TOUS les changements** depuis la dernière photo (même ceux pas encore préparés).

**Analogie chantier :** "Montre-moi tout ce qui a changé sur le chantier depuis la dernière photo"

---

## 🎮 Exercice : À toi de jouer !

**Mission : Utilise les 3 commandes d'inspection qu'on vient de voir**

1. Reprends ton projet `mon-portfolio` de la leçon 01
2. Modifie le fichier `index.html` (ajoute ton âge, par exemple)
3. Tape `git status` pour voir que le fichier est modifié (rouge)
4. Tape `git diff` pour voir exactement ce que tu as changé (les lignes en vert)
5. Ajoute le fichier avec `git add index.html`
6. Tape `git status` à nouveau (le fichier est maintenant en vert !)
7. Sauvegarde avec `git commit -m "Ajout de mon âge dans la page"`
8. Tape `git log --oneline` pour voir ton nouvel historique avec ton nom !

**Si t'as réussi, t'es un INSPECTEUR DE CHANTIER PRO ! 💪**

---

## 🔑 Antisèche : Les outils d'inspection du chef de chantier

| Commande | Ce qu'elle fait | Analogie chantier | Quand tu l'utilises |
|----------|-----------------|-------------------|---------------------|
| `git status` | Voir l'état actuel du chantier | Faire le tour du chantier le matin | **Tout le temps** (avant chaque commit) |
| `git log` | Voir toutes les photos du carnet | Feuilleter le carnet de A à Z | Quand tu veux voir l'historique |
| `git log --oneline` | Version compacte du carnet | Index rapide du carnet | Pareil, mais plus lisible |
| `git log --author="Kevin"` | Voir le travail d'un ouvrier | Filtrer par ouvrier | Pour voir ce qu'une personne a fait |
| `git diff` | Voir ce qui a changé | Comparer photo d'hier vs aujourd'hui | Avant de faire `git add` |
| `git diff --staged` | Voir ce qui est prêt | Voir ce qui est rangé pour la photo | Après `git add`, avant `git commit` |

---

## 🧠 Le workflow complet du chef de chantier

Voici le **cycle complet** que tu vas faire maintenant :

```
1. Tu travailles sur ton chantier (tu codes)
        ↓
2. git status (pour voir où t'en es)
        ↓
3. git diff (pour voir exactement ce que t'as changé)
        ↓
4. git add . (tu prépares tout pour la photo)
        ↓
5. git status (pour vérifier que tout est bien prêt - en vert)
        ↓
6. git commit -m "..." (tu prends la photo et tu signes)
        ↓
7. git log --oneline (pour admirer ton carnet de chantier)
        ↓
8. Recommence ! 🔁
```

**T'as compris le truc ?**  
Un bon chef de chantier inspecte tout le temps ! 🔍

---

## 👷‍♂️ Pourquoi c'est important de tout tracer ?

**Histoire vraie :**

Sur un chantier, un mur s'écroule. 💥  
Le client est furieux. Il veut savoir qui a fait ça.

**Sans carnet de chantier :**  
😱 Personne se souvient. C'était qui ? Quand ? Comment ?  
Impossible de savoir. L'entreprise paye les pots cassés.

**Avec un carnet de chantier (Git) :**  
😎 Le chef ouvre le carnet et voit :  
*"Mur monté par Marc le 5 octobre à 14h - Ciment type A utilisé"*

Il appelle Marc :  
*"Hé Marc, pourquoi t'as utilisé du ciment type A ?"*  
Marc répond :  
*"Parce que c'est ce qu'il y avait en stock ce jour-là"*

**Résultat :**  
✅ On sait exactement ce qui s'est passé  
✅ On peut corriger le problème  
✅ On évite de refaire la même erreur

**Avec Git, c'est pareil !**  
Si y'a un bug, tu peux remonter jusqu'à la personne qui a écrit le code et lui demander pourquoi. 🔍

---

## 💬 Citation du jour

> "Un bon chef de chantier inspecte son travail tous les jours.  
> Un bon développeur tape `git status` 100 fois par jour."
> 
> — Le Chef de Chantier du Code 🧱

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 03**, tu vas apprendre un truc DE MALADE :

- 🌿 Ouvrir des **chantiers parallèles** (les branches)
- 🎮 Travailler sur deux versions de ton projet **en même temps**
- 🤯 Comprendre pourquoi les pros font TOUJOURS ça

**Prépare-toi, ça va déchirer ! 🔥**

---

**Maintenant, va inspecter ! 🚀**