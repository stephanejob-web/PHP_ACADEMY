# 🕰️ Leçon 02 : Inspecter tes recettes (status, log, diff)

## Salut chef inspecteur ! 🧙‍♂️🔍

Dans la leçon 01, t'as appris à **noter des versions de tes recettes** avec Git.  
Cool ! Mais maintenant tu te demandes sûrement :

🤔 "Euh... j'ai noté une version de QUOI exactement ?"  
🤔 "Comment je vois toutes les versions de mon livre ?"  
🤔 "Comment je sais ce que j'ai changé entre deux versions ?"

**Aujourd'hui, tu vas apprendre à :**
- Vérifier où tu en es dans tes tests
- Consulter toutes les versions de ton livre
- Comparer exactement ce qui a changé entre deux versions

C'est parti ! 🚀

---

## 🍳 Retour dans la cuisine

Imagine : t'es chef de cuisine.

**Tu arrives le matin et tu veux savoir :**

1. **Où on en est ?** → Qu'est-ce qui a changé depuis la dernière version ? → `git status`
2. **Voir toutes les versions** → Feuilleter le livre avec tous les tests → `git log`
3. **Comparer avant/après** → Voir exactement quels ingrédients ont changé → `git diff`

Voilà les 3 commandes d'inspection qu'on va apprendre ! 💪

---

## 🔍 Commande 1 : `git status` (L'état de ta cuisine)

C'est LA commande que tu vas utiliser **1000 fois par jour**.

```bash
git status
```

**En français :** "Git, dis-moi où j'en suis dans mes tests de recette !"

**Analogie cuisine :** C'est comme arriver le matin et vérifier ta cuisine :
- "Ah tiens, j'ai testé le basilic frais hier"
- "Oh, j'ai modifié l'assaisonnement"
- "Y'a de nouveaux ingrédients sur le plan de travail"

---

### 🎯 À quoi ça sert ?

Ça te dit :
- ✅ Quels fichiers tu as **modifiés** depuis la dernière version notée
- ✅ Quels fichiers sont **prêts à être notés** (après un `git add`)
- ✅ Quels fichiers sont **nouveaux** (pas encore suivis par Git)

---

### 🧪 Exemple pratique

Reprends ton projet `mon-site` de la leçon 01.

**Étape 1 :** Modifie ton fichier `index.html`

Ouvre-le et change le texte :

```html
<h1>Bienvenue dans ma cuisine !</h1>
<p>Je m'appelle Kévin et je cuisine des sites comme un chef !</p>
```

**Étape 2 :** Inspecte ta cuisine

```bash
git status
```

**Résultat :** Git te dit quelque chose comme ça :

```
On branch main
Changes not staged for commit:
  modified:   index.html
```

**Traduction en langage cuisine :**  
"Hé chef ! Le fichier `index.html` a été modifié, mais t'as pas encore noté cette nouvelle version dans le livre."

---

### 💡 Les 3 états possibles dans ta cuisine

Quand tu fais `git status`, tes fichiers peuvent être dans **3 états** :

| État | Ça veut dire quoi ? | Analogie cuisine | Couleur |
|------|---------------------|------------------|---------|
| 🔴 **Modifié** (pas ajouté) | Tu as testé des trucs mais pas encore préparé la note | Ingrédients testés, pas encore notés | Rouge |
| 🟢 **Prêt à être noté** | Tu as fait `git add`, il attend le `git commit` | Recette prête, livre ouvert | Vert |
| ⚪ **Non suivi** | C'est un nouveau fichier que Git ne connaît pas | Nouveaux ingrédients, pas encore dans ton inventaire | Rouge |

**Astuce pro de chef cuisinier :**  
Tape `git status` AVANT chaque `git commit` pour être sûr de ce que tu vas noter !

---

## 📜 Commande 2 : `git log` (Le livre de recettes complet)

Maintenant, tu veux consulter **toutes** les versions de ton livre.

```bash
git log
```

**En français :** "Montre-moi toutes les versions qu'on a notées dans ce livre"

**Analogie cuisine :** C'est comme feuilleter ton livre de recettes du début à aujourd'hui pour voir l'évolution.

---

### 🧪 Exemple pratique

Dans ton projet `mon-site`, tape :

```bash
git log
```

**Résultat :** Tu vas voir un truc comme ça :

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Chef Kevin <kevin@cuisine.com>
Date:   Mon Oct 12 10:30:00 2025 +0200

    Version 2 - test avec basilic frais

commit z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0
Author: Chef Sophie <sophie@cuisine.com>
Date:   Mon Oct 12 09:15:00 2025 +0200

    Version 1 - sauce tomate de base
```

**Traduction en langage cuisine :**

Chaque bloc = **1 version dans le livre** (1 commit)

📖 **Version 2 :**
- **Référence unique** : `a1b2c3d4...` (comme un numéro de page)
- **Qui a testé ?** Chef Kevin
- **Son contact :** kevin@cuisine.com
- **Quand ?** Le 12 octobre 2025 à 10h30
- **Qu'est-ce qui a été testé ?** "Version 2 - test avec basilic frais"

📖 **Version 1 :**
- **Qui ?** Chef Sophie
- **Quand ?** Le 12 octobre 2025 à 9h15
- **Quoi ?** "Version 1 - sauce tomate de base"

**Pourquoi c'est génial ?**

Imagine qu'il y a un problème avec la version actuelle.  
Tu regardes le livre et tu vois : *"C'est Kevin qui a testé le basilic frais le 12 octobre à 10h30"*  
Tu peux l'appeler et lui demander : *"Hé Kevin, tu peux m'expliquer pourquoi t'as changé le basilic ?"*

---

### 🎨 Rendre `git log` plus lisible

Le `git log` de base, c'est comme un livre mal organisé. Voici une version plus claire :

```bash
git log --oneline
```

**Résultat :**

```
a1b2c3d Kevin - Version 2 - test avec basilic frais
z9y8x7w Sophie - Version 1 - sauce tomate de base
```

**Beaucoup plus facile à lire, non ?** 😎

C'est comme si tu ne gardais que l'essentiel dans ton livre :
- La référence de la version
- Le nom du chef
- Ce qui a été testé

---

### 🎯 Autres variantes utiles

```bash
git log --oneline --graph
```

**Ça affiche un petit dessin** pour voir les différentes versions parallèles (les branches - on verra ça plus tard).

```bash
git log --oneline -5
```

**Ça affiche seulement les 5 dernières versions** (pratique si t'en as 500 dans le livre).

```bash
git log --author="Kevin"
```

**Ça affiche seulement les versions testées par Kevin** (pour voir tout son travail).

---

## 🔀 Commande 3 : `git diff` (Comparer avant/après)

Tu as testé des trucs, mais tu te souviens plus exactement **quoi**.

```bash
git diff
```

**En français :** "Montre-moi ce qui a changé depuis la dernière version notée"

**Analogie cuisine :** C'est comme comparer deux versions d'une recette :
- Version 1 : Sauce avec 2 gousses d'ail
- Version 2 : Sauce avec 3 gousses d'ail
- **Différence** : On a ajouté 1 gousse d'ail ! 🧄

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
 <h1>Bienvenue dans ma cuisine !</h1>
+<p>Je m'appelle Kévin et je cuisine des sites comme un chef !</p>
```

**Traduction en langage cuisine :**

- Les lignes avec un **`-`** (en rouge) = Ce que tu as **retiré** de la recette
- Les lignes avec un **`+`** (en vert) = Ce que tu as **ajouté** à la recette

Ici, tu as **ajouté** la ligne `<p>Je m'appelle Kévin...</p>`

C'est comme si tu comparais :
- 📖 **Version 1** : Sauce avec basilic séché
- 📖 **Version 2** : Sauce avec basilic séché + basilic frais
- **Différence** : +basilic frais ajouté ! 🌿

---

### 💡 Variantes utiles de `git diff`

```bash
git diff --staged
```

**Ça montre les changements** que tu as déjà préparés avec `git add` (ceux qui sont prêts à être notés).

**Analogie cuisine :** "Montre-moi ce qui est prêt pour la prochaine version du livre"

```bash
git diff HEAD
```

**Ça montre TOUS les changements** depuis la dernière version notée (même ceux pas encore préparés).

**Analogie cuisine :** "Montre-moi tout ce qui a changé dans la recette depuis la dernière version"

---

## 🎮 Exercice : À toi de jouer !

**Mission : Utilise les 3 commandes d'inspection qu'on vient de voir**

1. Reprends ton projet `mon-portfolio` de la leçon 01
2. Modifie le fichier `index.html` (ajoute ton âge, par exemple)
3. Tape `git status` pour voir que le fichier est modifié (rouge)
4. Tape `git diff` pour voir exactement ce que tu as changé (les lignes en vert)
5. Ajoute le fichier avec `git add index.html`
6. Tape `git status` à nouveau (le fichier est maintenant en vert !)
7. Sauvegarde avec `git commit -m "Version 2 - ajout de mon âge"`
8. Tape `git log --oneline` pour voir ton historique de versions avec ton nom !

**Si t'as réussi, t'es un CHEF INSPECTEUR PRO ! 💪**

---

## 🔑 Antisèche : Les outils d'inspection du chef cuisinier

| Commande | Ce qu'elle fait | Analogie cuisine | Quand tu l'utilises |
|----------|-----------------|------------------|---------------------|
| `git status` | Voir l'état actuel de ta cuisine | Vérifier ce qui a changé ce matin | **Tout le temps** (avant chaque commit) |
| `git log` | Voir toutes les versions du livre | Feuilleter le livre de A à Z | Quand tu veux voir l'historique |
| `git log --oneline` | Version compacte du livre | Index rapide du livre | Pareil, mais plus lisible |
| `git log --author="Kevin"` | Voir le travail d'un chef | Filtrer par chef | Pour voir ce qu'une personne a testé |
| `git diff` | Voir ce qui a changé | Comparer version 1 vs version 2 | Avant de faire `git add` |
| `git diff --staged` | Voir ce qui est prêt | Voir ce qui est prêt à noter | Après `git add`, avant `git commit` |

---

## 🧠 Le workflow complet du chef cuisinier

Voici le **cycle complet** que tu vas faire maintenant :

```
1. Tu testes de nouveaux ingrédients (tu codes)
        ↓
2. git status (pour voir où t'en es)
        ↓
3. git diff (pour voir exactement ce que t'as changé)
        ↓
4. git add . (tu prépares tout pour noter)
        ↓
5. git status (pour vérifier que tout est bien prêt - en vert)
        ↓
6. git commit -m "..." (tu notes la version et tu signes)
        ↓
7. git log --oneline (pour admirer ton livre de versions)
        ↓
8. Recommence ! 🔁
```

**T'as compris le truc ?**  
Un bon chef cuisinier inspecte tout le temps ses versions ! 🔍

---

## 👨‍🍳 Pourquoi c'est important de tout tracer ?

**Histoire vraie :**

Dans une cuisine, un client est empoisonné. 💥  
Il veut savoir quelle version de la recette a été servie.

**Sans livre de versions :**  
😱 Personne se souvient. C'était quelle version ? Avec quels ingrédients ?  
Impossible de savoir. Le restaurant paye les pots cassés.

**Avec un livre de versions (Git) :**  
😎 Le chef ouvre le livre et voit :  
*"Version 3 - sauce préparée par Marc le 5 octobre à 14h - champignons frais ajoutés"*

Il appelle Marc :  
*"Hé Marc, tu peux me confirmer que t'as utilisé des champignons frais ?"*  
Marc répond :  
*"Oui, c'est ce qu'il y avait en stock ce jour-là"*

**Résultat :**  
✅ On sait exactement quelle version a été servie  
✅ On peut identifier le problème  
✅ On évite de refaire la même erreur

**Avec Git, c'est pareil !**  
Si y'a un bug, tu peux remonter jusqu'à la version qui a introduit le problème et comprendre pourquoi. 🔍

---

## 💬 Citation du jour

> "Un bon chef cuisinier goûte et note chaque version de sa recette.  
> Un bon développeur tape `git status` 100 fois par jour."
> 
> — Le Chef Étoilé du Code 🍳

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 03**, tu vas apprendre un truc DE MALADE :

- 🌿 Tester **deux versions en parallèle** (les branches)
- 🎮 Travailler sur deux variantes de ta recette **en même temps**
- 🤯 Comprendre pourquoi les pros font TOUJOURS ça

**Prépare-toi, ça va être délicieux ! 🔥**

---

**Maintenant, va inspecter ! 🚀**