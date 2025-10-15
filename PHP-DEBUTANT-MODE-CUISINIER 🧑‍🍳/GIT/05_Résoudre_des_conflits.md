# ⚠️ Leçon 05 : Gérer les conflits (quand deux chefs se marchent dessus)

## Salut médiateur culinaire ! 🧙‍♂️⚖️

Dans la leçon 04, t'as appris à **fusionner des versions** avec Git.  
Mais parfois... ça se passe pas comme prévu...

**Le problème :**

**Marc** teste une recette et ajoute du BASILIC. 🌿  
**Sophie** teste la MÊME recette et ajoute de l'ORIGAN. 🌿

**Quand tu veux fusionner les deux versions...**

💥 **CONFLIT !**

Git te dit : *"Hé chef ! Marc veut du basilic, Sophie veut de l'origan... Tu veux quoi TOI ?"*

**Aujourd'hui, tu vas apprendre à résoudre ces conflits comme un PRO ! 🔥**

---

## 🤔 C'est quoi un conflit ?

Un conflit, c'est quand **deux personnes modifient la même chose** en même temps.

**Analogie cuisine :**

Tu as deux chefs :
- 🧑 **Marc** teste une version et ajoute du basilic
- 👩 **Sophie** teste une autre version et ajoute de l'origan à la MÊME ligne de la recette

**Quand tu veux fusionner les deux versions...**

Git te dit :  
*"Attends chef ! Y'a un problème ! Marc a ajouté du basilic, Sophie de l'origan... C'est QUOI la bonne épice ?!"*

**Git ne peut pas décider tout seul. C'est TOI qui dois trancher ! ⚖️**

---

## 🎯 Pourquoi ça arrive ?

Les conflits arrivent dans **UNE SEULE situation** :

**Deux personnes modifient la MÊME ligne dans le MÊME fichier.**

### ✅ Pas de conflit dans ces cas :

- Marc modifie `recette-sauce.txt`, Sophie modifie `recette-dessert.txt` → **Pas de conflit** ✅
- Marc modifie la ligne 5, Sophie modifie la ligne 50 → **Pas de conflit** ✅
- Marc ajoute un ingrédient, Sophie en supprime un autre → **Pas de conflit** ✅

### ⚠️ Conflit dans ce cas :

- Marc modifie la ligne 10 de `recette-sauce.txt` → "Ajouter basilic"
- Sophie modifie la ligne 10 de `recette-sauce.txt` → "Ajouter origan"
- **CONFLIT !** ⚠️

**Git ne sait pas laquelle garder ! Il te demande de choisir.**

---

## 🧪 Créer un conflit (pour comprendre)

On va **volontairement créer un conflit** pour apprendre à le résoudre.

### Étape 1 : Prépare ton projet

Va dans ton projet `mon-site` et assure-toi d'être sur `main` :

```bash
git switch main
```

Crée un fichier `recette.txt` avec ce texte :

```
Sauce tomate de base
```

Sauvegarde :

```bash
git add recette.txt
git commit -m "Ajout recette de base"
```

---

### Étape 2 : Crée une branche et modifie le fichier

```bash
git switch -c test-marc
```

Modifie `recette.txt` :

```
Sauce tomate avec basilic frais
```

Sauvegarde :

```bash
git add recette.txt
git commit -m "Marc teste avec basilic"
```

---

### Étape 3 : Retourne sur main et modifie la MÊME ligne

```bash
git switch main
```

Modifie `recette.txt` (la MÊME ligne) :

```
Sauce tomate avec origan
```

Sauvegarde :

```bash
git add recette.txt
git commit -m "Version main avec origan"
```

---

### Étape 4 : Essaye de fusionner

```bash
git merge test-marc
```

💥 **BOOM ! CONFLIT !**

**Résultat :**

```
Auto-merging recette.txt
CONFLICT (content): Merge conflict in recette.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Traduction :**  
*"Hé chef ! J'ai un problème avec `recette.txt`. Marc et toi avez modifié la même ligne. Dis-moi quoi garder !"*

**Bravo ! Tu viens de créer ton premier conflit ! 🎉**

---

## 🔍 Comprendre le conflit

Ouvre le fichier `recette.txt`. Tu vas voir un truc bizarre :

```
<<<<<<< HEAD
Sauce tomate avec origan
=======
Sauce tomate avec basilic frais
>>>>>>> test-marc
```

**Décryptage :**

| Symbole | Signification |
|---------|---------------|
| `<<<<<<< HEAD` | Début de TA version (celle de `main`) |
| `=======` | Séparateur entre les deux versions |
| `>>>>>>> test-marc` | Fin de la version de Marc |

**En français :**

```
<<<<<<< HEAD
[TA VERSION avec origan]
=======
[VERSION DE MARC avec basilic]
>>>>>>> test-marc
```

**Git te dit :**  
*"Voilà les deux versions. C'est à TOI de décider laquelle garder !"*

**Analogie cuisine :**  
C'est comme si tu avais une recette avec deux variantes :
- Haut : Origan (ta version)
- Bas : Basilic (version de Marc)

Tu dois choisir : origan, basilic, ou les deux ! 🌿

---

## 🛠️ Résoudre le conflit (3 options)

Tu as **3 choix** pour résoudre le conflit :

### Option 1 : Garder TA version

Tu supprimes tout et tu gardes seulement ta version :

```
Sauce tomate avec origan
```

**Traduction :** *"Désolé Marc, c'est MA version qui gagne."*

---

### Option 2 : Garder la version de Marc

Tu supprimes tout et tu gardes seulement la version de Marc :

```
Sauce tomate avec basilic frais
```

**Traduction :** *"OK Marc, ta version est meilleure."*

---

### Option 3 : Garder les DEUX (ou un mix)

Tu combines intelligemment les deux versions :

```
Sauce tomate avec basilic frais et origan
```

**Traduction :** *"On prend le meilleur des deux ! Les deux épices !"*

---

## ✅ Étapes pour résoudre un conflit

Voici la procédure **EXACTE** à suivre :

### Étape 1 : Ouvre le fichier en conflit

```bash
code recette.txt
```

(Ou ouvre-le avec ton éditeur préféré)

---

### Étape 2 : Repère les marqueurs de conflit

Cherche ces symboles :
- `<<<<<<< HEAD`
- `=======`
- `>>>>>>> nom-de-la-branche`

---

### Étape 3 : Décide quoi garder

Supprime les marqueurs (`<<<<<<<`, `=======`, `>>>>>>>`) et garde ce que tu veux.

**Exemple : Je garde les deux épices**

Avant :
```
<<<<<<< HEAD
Sauce tomate avec origan
=======
Sauce tomate avec basilic frais
>>>>>>> test-marc
```

Après :
```
Sauce tomate avec basilic frais et origan
```

**IMPORTANT : Supprime TOUS les marqueurs ! Git veut un fichier propre.**

---

### Étape 4 : Sauvegarde le fichier

Sauvegarde ton fichier dans ton éditeur (Ctrl+S).

---

### Étape 5 : Dis à Git que t'as résolu le conflit

```bash
git add recette.txt
```

**Traduction :** *"Git, j'ai résolu le conflit, voilà la version finale de ma recette !"*

---

### Étape 6 : Termine le merge

```bash
git commit
```

**Note :** Pas besoin de `-m "message"` ici. Git va ouvrir un éditeur avec un message automatique :

```
Merge branch 'test-marc'

# Conflicts:
#   recette.txt
```

Sauvegarde et ferme l'éditeur.

**C'est bon ! Le conflit est résolu ! 🎉**

---

## 🎯 Vérifier que tout est OK

```bash
git log --oneline --graph
```

**Résultat :**

```
*   a1b2c3d (HEAD -> main) Merge branch 'test-marc'
|\  
| * z9y8x7w (test-marc) Marc teste avec basilic
* | y8x7w6v Version main avec origan
|/  
* w6v5u4t Ajout recette de base
```

**Traduction :**  
Tu vois bien les deux versions qui se sont fusionnées !

---

## 🔑 Les outils pour t'aider

### 1️⃣ Voir quels fichiers sont en conflit

```bash
git status
```

**Résultat :**

```
Unmerged paths:
  both modified:   recette.txt
```

**Traduction :** *"Le fichier `recette.txt` a été modifié par les deux. Résous-le !"*

---

### 2️⃣ Annuler le merge si t'es perdu

Si t'as peur, tu peux annuler le merge :

```bash
git merge --abort
```

**Traduction :** *"Annule tout ! Je veux revenir en arrière !"*

**Analogie cuisine :**  
C'est comme dire : *"Stop ! On recommence la recette demain."*

---

## ✅ Les règles d'or pour éviter les conflits

### Règle 1 : Communique avec ton équipe 💬

Avant de travailler sur une recette, préviens ton équipe :  
*"Hé, je vais modifier la sauce tomate, touchez-y pas pendant 1h !"*

**Analogie cuisine :**  
Dis aux autres chefs : *"Je travaille sur cette recette, testez autre chose !"*

---

### Règle 2 : Fais des petits tests 🌿

Ne garde pas une branche ouverte pendant 3 semaines.  
Fais des petits tests, merge vite, et recommence.

**Analogie cuisine :**  
Teste le basilic en 2 jours, adopte-le, et passe à l'origan.  
Ne teste pas 10 épices en même temps !

---

### Règle 3 : Merge souvent 🔄

Plus tu attends, plus y'aura de conflits.  
Merge régulièrement pour éviter les gros problèmes.

**Analogie cuisine :**  
Adopte le basilic dès que tu l'as goûté, attends pas d'avoir testé 50 épices !

---

## 🎮 Exercice : À toi de jouer !

**Mission : Crée et résous un conflit**

1. Va dans ton projet `mon-portfolio`
2. Assure-toi d'être sur `main`
3. Crée un fichier `titre.txt` avec écrit : "Mon Portfolio"
4. Sauvegarde avec `git add titre.txt` et `git commit -m "Ajout du titre"`
5. Crée une branche `version-a` avec `git switch -c version-a`
6. Modifie `titre.txt` : écris "Mon Super Portfolio"
7. Sauvegarde avec `git add titre.txt` et `git commit -m "Version A"`
8. Retourne sur `main` avec `git switch main`
9. Modifie `titre.txt` (la MÊME ligne) : écris "Mon Incroyable Portfolio"
10. Sauvegarde avec `git add titre.txt` et `git commit -m "Version main"`
11. Essaye de fusionner avec `git merge version-a` → **CONFLIT !** ⚠️
12. Ouvre `titre.txt` et choisis la version que tu préfères
13. Supprime tous les marqueurs (`<<<<<<<`, `=======`, `>>>>>>>`)
14. Sauvegarde le fichier
15. Dis à Git qu