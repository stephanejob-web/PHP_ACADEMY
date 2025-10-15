🕰️ Leçon 02 : Vérifier tes stats (status, log, diff)
Salut joueur ! 🧙‍♂️🎮

Dans la leçon 01, t'as appris à sauvegarder ta partie avec Git.
Cool ! Mais maintenant tu te demandes sûrement :

🤔 "Euh... j'ai sauvegardé QUOI exactement ?"
🤔 "Comment je vois toutes mes sauvegardes ?"
🤔 "Comment je sais ce que j'ai changé depuis la dernière fois ?"

Aujourd'hui, tu vas apprendre à :

- Vérifier l'état actuel de ta partie
- Consulter toutes tes sauvegardes
- Comparer ce que t'as changé depuis la dernière sauvegarde

C'est parti ! 🚀

---

## 🎮 Retour dans le jeu

Imagine : t'es en plein milieu d'un RPG.

Tu veux savoir :

- **Où j'en suis ?** → Qu'est-ce qui a changé depuis ma dernière sauvegarde ? → `git status`
- **Voir mes sauvegardes** → Consulter mon journal de jeu complet → `git log`
- **Comparer avant/après** → Voir exactement ce qui a changé entre deux saves → `git diff`

Voilà les 3 commandes d'inspection qu'on va apprendre ! 💪

---

## 🔍 Commande 1 : git status (Vérifier tes stats)

C'est LA commande que tu vas utiliser 1000 fois par jour.

```bash
git status
```

**En français :** "Git, dis-moi où j'en suis dans ma partie !"

**Analogie jeu :** C'est comme ouvrir ton menu de stats dans un RPG :

- "Ah tiens, j'ai gagné de nouveaux items depuis hier"
- "Oh, ma barre de vie a changé"
- "Y'a une nouvelle quête qui vient d'apparaître"

### 🎯 À quoi ça sert ?

Ça te dit :

- ✅ Quels fichiers tu as modifiés depuis la dernière sauvegarde
- ✅ Quels fichiers sont prêts à être sauvegardés (après un `git add`)
- ✅ Quels fichiers sont nouveaux dans ton projet (pas encore suivis par Git)

### 🧪 Exemple pratique

Reprends ton projet `mon-site` de la leçon 01.

**Étape 1 : Modifie ton fichier index.html**

**🖱️ MÉTHODE FACILE :**
1. Va dans ton dossier `mon-site`
2. Ouvre `index.html` avec le Bloc-notes
3. Change le texte en :
   ```html
   <h1>Bienvenue sur mon site !</h1>
   <p>Je m'appelle Kevin et je code comme un pro gamer !</p>
   ```
4. Sauvegarde (Ctrl+S)

**Étape 2 : Vérifie tes stats**

Ouvre le terminal dans ton dossier (clique dans la barre d'adresse → tape `cmd` → Entrée)

```bash
git status
```

**Résultat :** Git te dit quelque chose comme ça :

```
On branch main
Changes not staged for commit:
  modified:   index.html
```

**Traduction en langage gamer :**
*"Hé joueur ! Le fichier index.html a été modifié, mais t'as pas encore sauvegardé ça dans ton journal."*

---

## 💡 Les 3 états possibles dans ton inventaire

Quand tu fais `git status`, tes fichiers peuvent être dans 3 états :

| État | Ça veut dire quoi ? | Analogie jeu | Couleur |
|------|---------------------|--------------|---------|
| 🔴 **Modifié (pas ajouté)** | Tu as joué mais pas encore préparé la sauvegarde | Nouveaux items dans ton sac, pas encore équipés | Rouge |
| 🟢 **Prêt à être sauvegardé** | Tu as fait `git add`, il attend le `git commit` | Items équipés, prêts pour la sauvegarde | Vert |
| ⚪ **Non suivi** | C'est un nouveau fichier que Git ne connaît pas | Nouvel item trouvé, pas encore dans l'inventaire | Rouge |

**Astuce pro de gamer :**
Tape `git status` AVANT chaque `git commit` pour être sûr de ce que tu vas sauvegarder !

---

## 📜 Commande 2 : git log (Ton journal de bord)

Maintenant, tu veux consulter toutes tes sauvegardes.

```bash
git log
```

**En français :** "Montre-moi toutes les sauvegardes de ma partie"

**Analogie jeu :** C'est comme ouvrir ton journal de quêtes du début à aujourd'hui.

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

    Niveau 1 créé - page d'accueil

commit z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0
Author: Sophie Martin <sophie@mail.com>
Date:   Mon Oct 12 09:15:00 2025 +0200

    Système de combat ajouté
```

**Traduction en langage gamer :**

Chaque bloc = 1 sauvegarde dans ton journal (1 commit)

**💾 Save 1 :**
- **ID unique :** a1b2c3d4... (comme un numéro de sauvegarde)
- **Qui a joué ?** Kevin Dupont
- **Son contact :** kevin@mail.com
- **Quand ?** Le 12 octobre 2025 à 10h30
- **Qu'est-ce qui a été fait ?** "Niveau 1 créé - page d'accueil"

**💾 Save 2 :**
- **Qui ?** Sophie Martin
- **Quand ?** Le 12 octobre 2025 à 9h15
- **Quoi ?** "Système de combat ajouté"

**Pourquoi c'est génial ?**

Imagine qu'il y a un bug dans le système de combat.
Tu regardes le journal et tu vois : "C'est Sophie qui l'a codé le 12 octobre à 9h15"
Tu peux la contacter : "Hé Sophie, tu peux m'expliquer ce système ?"

---

## 🎨 Rendre git log plus lisible

Le `git log` de base, c'est comme un journal mal organisé. Voici une version plus claire :

```bash
git log --oneline
```

**Résultat :**

```
a1b2c3d Kevin - Niveau 1 créé - page d'accueil
z9y8x7w Sophie - Système de combat ajouté
```

Beaucoup plus facile à lire, non ? 😎

C'est comme si tu ne gardais que l'essentiel dans ton journal :
- L'ID de la save
- Le pseudo du joueur
- Ce qui a été fait

### 🎯 Autres variantes utiles

**Voir l'arbre des sauvegardes :**
```bash
git log --oneline --graph
```

Ça affiche un petit dessin pour voir les différentes versions parallèles (les branches - on verra ça plus tard).

**Voir seulement les 5 dernières saves :**
```bash
git log --oneline -5
```

Pratique si t'en as 500 dans le journal !

**Voir seulement les saves de Kevin :**
```bash
git log --author="Kevin"
```

Pour voir tout le travail d'un joueur spécifique.

---

## 🔀 Commande 3 : git diff (Comparer avant/après)

Tu as joué, mais tu te souviens plus exactement de ce que t'as fait.

```bash
git diff
```

**En français :** "Montre-moi ce qui a changé depuis ma dernière sauvegarde"

**Analogie jeu :** C'est comme comparer deux saves :

- **Save d'hier :** Niveau 5, 100 HP, 50 gold
- **Save d'aujourd'hui :** Niveau 6, 120 HP, 75 gold
- **Différence :** +1 niveau, +20 HP, +25 gold ! 🎮

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
+<p>Je m'appelle Kevin et je code comme un pro gamer !</p>
```

**Traduction en langage gamer :**

- Les lignes avec un **-** (en rouge) = Ce que tu as supprimé/retiré
- Les lignes avec un **+** (en vert) = Ce que tu as ajouté/créé

Ici, tu as ajouté la ligne `<p>Je m'appelle Kevin...</p>`

C'est comme si tu comparais :

- 💾 **Save d'hier :** Inventaire avec 10 items
- 💾 **Save d'aujourd'hui :** Inventaire avec 12 items
- **Différence :** +2 nouveaux items ! ⚔️

---

## 💡 Variantes utiles de git diff

**Voir ce qui est prêt à être sauvegardé :**
```bash
git diff --staged
```

Ça montre les changements que tu as déjà préparés avec `git add` (ceux qui sont équipés et prêts pour la sauvegarde).

**Analogie jeu :** "Montre-moi ce qui est équipé et prêt pour la prochaine sauvegarde"

**Voir TOUS les changements :**
```bash
git diff HEAD
```

Ça montre TOUS les changements depuis la dernière sauvegarde (même ceux pas encore préparés).

**Analogie jeu :** "Montre-moi tout ce qui a changé dans ma partie depuis la dernière save"

---

## 🎮 Exercice : À toi de jouer !

**Mission :** Utilise les 3 commandes d'inspection qu'on vient de voir

### 📝 Étapes détaillées (pour débutants) :

**1️⃣ Reprends ton projet `mon-portfolio`**
   - Ouvre le dossier
   - Clique dans la barre d'adresse → tape `cmd` → Entrée

**2️⃣ Modifie le fichier index.html**
   - Ouvre `index.html` avec le Bloc-notes
   - Ajoute ton âge, par exemple : `<p>J'ai 25 ans</p>`
   - Sauvegarde (Ctrl+S)

**3️⃣ Vérifie l'état**
   - Dans le terminal, tape : `git status`
   - Tu dois voir le fichier en rouge (modifié)

**4️⃣ Regarde ce qui a changé**
   - Tape : `git diff`
   - Tu vas voir la ligne que tu as ajoutée en vert avec un +

**5️⃣ Prépare la sauvegarde**
   - Tape : `git add index.html`
   - Tape : `git status` à nouveau
   - Le fichier est maintenant en vert (prêt !) ✅

**6️⃣ Sauvegarde**
   - Tape : `git commit -m "Ajout de mon âge dans la page"`

**7️⃣ Consulte ton journal**
   - Tape : `git log --oneline`
   - Tu vas voir ton nouvel historique avec ton nom !

**🎉 Si t'as réussi, t'es un PRO GAMER DE GIT !** 💪

---

## 🔑 Antisèche : Les commandes d'inspection du gamer

| Commande | Ce qu'elle fait | Analogie jeu | Quand tu l'utilises |
|----------|----------------|--------------|---------------------|
| `git status` | Voir l'état actuel de ta partie | Ouvrir ton menu de stats | Tout le temps (avant chaque commit) |
| `git log` | Voir toutes les sauvegardes | Consulter ton journal de jeu | Quand tu veux voir l'historique |
| `git log --oneline` | Version compacte du journal | Liste rapide des saves | Pareil, mais plus lisible |
| `git log --author="Kevin"` | Voir le travail d'un joueur | Filtrer par pseudo | Pour voir ce qu'une personne a fait |
| `git diff` | Voir ce qui a changé | Comparer save d'hier vs aujourd'hui | Avant de faire `git add` |
| `git diff --staged` | Voir ce qui est prêt | Voir ce qui est équipé pour la save | Après `git add`, avant `git commit` |

---

## 🧠 Le workflow complet du pro gamer

Voici le cycle complet que tu vas faire maintenant :

```
1. Tu joues (tu codes)
        ↓
2. git status (pour voir où t'en es)
        ↓
3. git diff (pour voir exactement ce que t'as changé)
        ↓
4. git add . (tu prépares tout pour la sauvegarde)
        ↓
5. git status (pour vérifier que tout est bien prêt - en vert)
        ↓
6. git commit -m "..." (tu sauvegardes et tu signes)
        ↓
7. git log --oneline (pour admirer ton journal de jeu)
        ↓
8. Recommence ! 🔁
```

**T'as compris le truc ?**
Un bon gamer vérifie ses stats tout le temps ! 🎮

---

## 🎯 Pourquoi c'est important de tout tracer ?

**Histoire vraie :**

Sur un MMO, un boss devient unkillable après une mise à jour. 💥
Les joueurs sont furieux. Le game designer veut savoir qui a fait ça.

**Sans journal de bord :**
😱 Personne se souvient. C'était qui ? Quand ? Pourquoi ?
Impossible de savoir. Le jeu reste bugué pendant des semaines.

**Avec un journal de bord (Git) :**
😎 Le lead dev ouvre le log et voit :
*"Stats du boss modifiées par Marc le 5 octobre à 14h - Défense x10"*

Il appelle Marc :
*"Hé Marc, pourquoi t'as multiplié sa défense par 10 ?"*
Marc répond :
*"J'ai fait une typo, je voulais mettre 1.0 pas 10 !"*

**Résultat :**
✅ On sait exactement ce qui s'est passé
✅ On peut corriger le bug en 2 minutes
✅ On évite de refaire la même erreur

**Avec Git, c'est pareil !**
Si y'a un bug, tu peux remonter jusqu'à la personne qui a écrit le code et lui demander pourquoi. 🔍

---

## 💬 Citation du jour

> "Un bon gamer sauvegarde sa partie régulièrement.
> Un bon développeur tape git status 100 fois par jour."
>
> — Le Maître du Jeu 🎮

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 03**, tu vas apprendre un truc DE MALADE :

- 🌿 Créer des parties parallèles (les branches)
- 🎮 Jouer sur deux versions de ton jeu en même temps
- 🤯 Comprendre pourquoi les pros font TOUJOURS ça

Prépare-toi, ça va déchirer ! 🔥

**Maintenant, va vérifier tes stats !** 🚀
