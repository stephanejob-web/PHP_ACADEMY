
⚠️ Leçon 05 : Gérer les conflits (quand deux joueurs se marchent dessus)
Salut arbitre ! 🧙‍♂️⚖️

Dans la leçon 04, t'as appris à fusionner des parties avec Git. Mais parfois... ça se passe pas comme prévu...

**Le problème :**

Marc joue et équipe un casque BLEU. 🔵
Sophie joue et équipe le MÊME casque en ROUGE. 🔴

Quand tu veux fusionner les deux saves...

💥 **CONFLIT !**

Git te dit : *"Hé chef ! Marc veut du bleu, Sophie veut du rouge... Tu veux quoi TOI ?"*

Aujourd'hui, tu vas apprendre à résoudre ces conflits comme un **PRO !** 🔥

---

## 🤔 C'est quoi un conflit ?

Un conflit, c'est quand **deux joueurs modifient la même chose** en même temps.

**Analogie jeu :**

Tu as deux joueurs :

- 🧑 **Marc** joue sur la save A et customise le casque en bleu
- 👩 **Sophie** joue sur la save B et customise le MÊME casque en rouge

Quand tu veux fusionner les deux saves...

Git te dit : *"Attends chef ! Y'a un problème ! Marc veut du bleu, Sophie veut du rouge... C'est QUOI la bonne couleur ?!"*

Git ne peut pas décider tout seul. C'est **TOI** qui dois trancher ! ⚖️

---

## 🎯 Pourquoi ça arrive ?

Les conflits arrivent dans **UNE SEULE situation** :

**Deux personnes modifient la MÊME ligne dans le MÊME fichier.**

### ✅ Pas de conflit dans ces cas :

- Marc modifie `index.html`, Sophie modifie `style.css` → **Pas de conflit** ✅
- Marc modifie la ligne 5, Sophie modifie la ligne 50 → **Pas de conflit** ✅
- Marc ajoute un fichier, Sophie en supprime un autre → **Pas de conflit** ✅

### ⚠️ Conflit dans ce cas :

- Marc modifie la ligne 10 de `index.html` → "Bonjour"
- Sophie modifie la ligne 10 de `index.html` → "Hello"
- **CONFLIT !** ⚠️

Git ne sait pas laquelle garder ! Il te demande de choisir.

---

## 🧪 Créer un conflit (pour comprendre)

On va volontairement créer un conflit pour apprendre à le résoudre.

### Étape 1 : Prépare ton projet

Va dans ton projet `mon-site` et assure-toi d'être sur `main` :

```bash
git switch main
```

**🖱️ MÉTHODE FACILE pour créer le fichier :**

1. Va dans ton dossier `mon-site`
2. Clic droit → Nouveau → Document texte
3. Renomme-le en `message.txt`
4. Ouvre-le avec le Bloc-notes
5. Écris dedans :
   ```
   Bienvenue sur mon site !
   ```
6. Sauvegarde (Ctrl+S)

**Dans le terminal :**

```bash
git add message.txt
git commit -m "Ajout du message de bienvenue"
```

---

### Étape 2 : Crée une branche et modifie le fichier

```bash
git switch -c version-marc
```

**Modifie `message.txt` :**

1. Ouvre `message.txt` avec le Bloc-notes
2. Change en :
   ```
   Bonjour sur mon site !
   ```
3. Sauvegarde (Ctrl+S)

**Dans le terminal :**

```bash
git add message.txt
git commit -m "Marc change Bienvenue en Bonjour"
```

---

### Étape 3 : Retourne sur main et modifie la MÊME ligne

```bash
git switch main
```

**Modifie `message.txt` (la MÊME ligne) :**

1. Ouvre `message.txt` avec le Bloc-notes
2. Change en :
   ```
   Hello sur mon site !
   ```
3. Sauvegarde (Ctrl+S)

**Dans le terminal :**

```bash
git add message.txt
git commit -m "Version main avec Hello"
```

---

### Étape 4 : Essaye de fusionner

```bash
git merge version-marc
```

💥 **BOOM ! CONFLIT !**

**Résultat :**

```
Auto-merging message.txt
CONFLICT (content): Merge conflict in message.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Traduction :** *"Hé chef ! J'ai un problème avec `message.txt`. Marc et toi avez modifié la même chose. Dis-moi quoi garder !"*

**Bravo ! Tu viens de créer ton premier conflit !** 🎉

---

## 🔍 Comprendre le conflit

**Ouvre le fichier `message.txt`**. Tu vas voir un truc bizarre :

```
<<<<<<< HEAD
Hello sur mon site !
=======
Bonjour sur mon site !
>>>>>>> version-marc
```

### Décryptage :

| Symbole | Signification |
|---------|--------------|
| `<<<<<<< HEAD` | Début de TA version (celle de `main`) |
| `=======` | Séparateur entre les deux versions |
| `>>>>>>> version-marc` | Fin de la version de Marc |

**En français :**

```
<<<<<<< HEAD
[TA VERSION]
=======
[VERSION DE MARC]
>>>>>>> version-marc
```

Git te dit : *"Voilà les deux versions. C'est à TOI de décider laquelle garder !"*

**Analogie jeu :**

C'est comme si tu avais un casque avec deux skins :
- **Haut du casque :** Skin rouge (ta version)
- **Bas du casque :** Skin bleu (version de Marc)

Tu dois choisir : rouge, bleu, ou un mix des deux ! 🎨

---

## 🛠️ Résoudre le conflit (3 options)

Tu as **3 choix** pour résoudre le conflit :

### Option 1 : Garder TA version

Tu supprimes tout et tu gardes seulement ta version :

```
Hello sur mon site !
```

**Traduction :** "Désolé Marc, c'est MA version qui gagne."

---

### Option 2 : Garder la version de Marc

Tu supprimes tout et tu gardes seulement la version de Marc :

```
Bonjour sur mon site !
```

**Traduction :** "OK Marc, ta version est mieux."

---

### Option 3 : Garder les DEUX (ou un mix)

Tu combines intelligemment les deux versions :

```
Hello et Bonjour sur mon site !
```

**Traduction :** "On prend le meilleur des deux !"

---

## ✅ Étapes pour résoudre un conflit

Voici la procédure **EXACTE** à suivre :

### Étape 1 : Ouvre le fichier en conflit

**🖱️ MÉTHODE FACILE :**
1. Va dans ton dossier `mon-site`
2. Ouvre `message.txt` avec le Bloc-notes

### Étape 2 : Repère les marqueurs de conflit

Cherche ces symboles :
- `<<<<<<< HEAD`
- `=======`
- `>>>>>>> nom-de-la-branche`

### Étape 3 : Décide quoi garder

Supprime les marqueurs (`<<<<<<<`, `=======`, `>>>>>>>`) et garde ce que tu veux.

**Exemple : Je garde ma version "Hello"**

**Avant :**

```
<<<<<<< HEAD
Hello sur mon site !
=======
Bonjour sur mon site !
>>>>>>> version-marc
```

**Après :**

```
Hello sur mon site !
```

⚠️ **IMPORTANT :** Supprime **TOUS** les marqueurs ! Git veut un fichier propre.

### Étape 4 : Sauvegarde le fichier

Sauvegarde ton fichier dans le Bloc-notes (Ctrl+S).

### Étape 5 : Dis à Git que t'as résolu le conflit

**Dans le terminal :**

```bash
git add message.txt
```

**Traduction :** "Git, j'ai résolu le conflit, voilà la version finale !"

### Étape 6 : Termine le merge

```bash
git commit
```

**Note :** Pas besoin de `-m "message"` ici. Git va ouvrir un éditeur avec un message automatique :

```
Merge branch 'version-marc'

# Conflicts:
#   message.txt
```

Sauvegarde et ferme l'éditeur.

**C'est bon ! Le conflit est résolu !** 🎉

---

## 🎯 Vérifier que tout est OK

```bash
git log --oneline --graph
```

**Résultat :**

```
*   a1b2c3d (HEAD -> main) Merge branch 'version-marc'
|\  
| * z9y8x7w (version-marc) Marc change Bienvenue en Bonjour
* | y8x7w6v Version main avec Hello
|/  
* w6v5u4t Ajout du message de bienvenue
```

**Traduction :** Tu vois bien les deux branches qui se sont fusionnées !

---

## 🔑 Les outils pour t'aider

### 1️⃣ Voir quels fichiers sont en conflit

```bash
git status
```

**Résultat :**

```
Unmerged paths:
  both modified:   message.txt
```

**Traduction :** "Le fichier `message.txt` a été modifié par les deux. Résous-le !"

---

### 2️⃣ Annuler le merge si t'es perdu

Si t'as peur, tu peux annuler le merge :

```bash
git merge --abort
```

**Traduction :** "Annule tout ! Je veux revenir en arrière !"

**Analogie jeu :** C'est comme dire : "Ragequit ! On recommence demain."

---

## ✅ Les règles d'or pour éviter les conflits

### Règle 1 : Communique avec ton équipe 💬

Avant de travailler sur un fichier, préviens ton équipe :
*"Hé, je vais modifier `index.html`, touchez-y pas pendant 1h !"*

**Analogie jeu :** Dis aux autres joueurs : *"Je farm ce boss, attendez votre tour !"*

---

### Règle 2 : Fais des petites branches 🌿

Ne garde pas une branche ouverte pendant 3 semaines. Fais des petites fonctionnalités, merge vite, et recommence.

**Analogie jeu :** Termine une quête en 2 jours, sauvegarde, et passe à la suivante. Ne fais pas 10 quêtes en même temps !

---

### Règle 3 : Merge souvent 🔄

Plus tu attends, plus y'aura de conflits. Merge régulièrement pour éviter les gros problèmes.

**Analogie jeu :** Sauvegarde ta progression régulièrement, attends pas d'avoir 50h de jeu non sauvegardées !

---

## 🎮 Exercice : À toi de jouer !

**Mission :** Crée et résous un conflit

### 📝 Étapes détaillées (pour débutants) :

**1️⃣ Va dans ton projet `mon-portfolio`**
   - Ouvre le dossier
   - Clique dans la barre d'adresse → tape `cmd` → Entrée

**2️⃣ Assure-toi d'être sur `main`**
   - Tape : `git branch`

**3️⃣ Crée un fichier `titre.txt`**
   - Clic droit → Nouveau → Document texte
   - Renomme en `titre.txt`
   - Ouvre avec Bloc-notes
   - Écris : "Mon Portfolio"
   - Sauvegarde (Ctrl+S)

**4️⃣ Sauvegarde dans Git**
   - Tape : `git add titre.txt`
   - Tape : `git commit -m "Ajout du titre"`

**5️⃣ Crée une branche**
   - Tape : `git switch -c version-a`

**6️⃣ Modifie `titre.txt`**
   - Ouvre `titre.txt`
   - Change en : "Mon Super Portfolio"
   - Sauvegarde (Ctrl+S)

**7️⃣ Sauvegarde dans Git**
   - Tape : `git add titre.txt`
   - Tape : `git commit -m "Version A"`

**8️⃣ Retourne sur `main`**
   - Tape : `git switch main`

**9️⃣ Modifie `titre.txt` (la MÊME ligne)**
   - Ouvre `titre.txt`
   - Change en : "Mon Incroyable Portfolio"
   - Sauvegarde (Ctrl+S)

**🔟 Sauvegarde dans Git**
   - Tape : `git add titre.txt`
   - Tape : `git commit -m "Version main"`

**1️⃣1️⃣ Essaye de fusionner**
   - Tape : `git merge version-a`
   - **CONFLIT !** ⚠️

**1️⃣2️⃣ Ouvre `titre.txt`**
   - Tu vas voir les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`

**1️⃣3️⃣ Choisis la version que tu préfères**
   - Supprime tous les marqueurs
   - Garde seulement le texte que tu veux

**1️⃣4️⃣ Sauvegarde le fichier** (Ctrl+S)

**1️⃣5️⃣ Dis à Git que c'est résolu**
   - Tape : `git add titre.txt`

**1️⃣6️⃣ Termine le merge**
   - Tape : `git commit`

**🎉 Si t'as réussi, t'es un MAÎTRE DE LA RÉSOLUTION DE CONFLITS !** 💪

---

## 🔑 Antisèche : Gérer les conflits

| Commande | Ce qu'elle fait | Quand l'utiliser |
|----------|----------------|------------------|
| `git status` | Voir les fichiers en conflit | Pendant un conflit |
| `git add fichier` | Marquer un conflit comme résolu | Après avoir édité le fichier |
| `git commit` | Terminer le merge | Après avoir résolu tous les conflits |
| `git merge --abort` | Annuler le merge | Si tu veux recommencer |

---

## 🧠 Récapitulatif : Résoudre un conflit

```
1. git merge branche → CONFLIT ! ⚠️
        ↓
2. git status → Voir les fichiers en conflit
        ↓
3. Ouvrir le fichier et choisir quoi garder
        ↓
4. Supprimer TOUS les marqueurs (<<<<<<<, =======, >>>>>>>)
        ↓
5. git add fichier → Marquer comme résolu
        ↓
6. git commit → Terminer le merge
        ↓
7. C'est fini ! 🎉
```

**C'est aussi simple que ça !**

---

## 💬 Citation du jour

> "Un bon gamer ne ragequit jamais face à un conflit. 
> Il écoute Marc, écoute Sophie, et choisit le meilleur build."
>
> — Le Maître du Jeu 🎮

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 06**, tu vas apprendre à travailler avec **GitHub** :

- 🌐 Mettre ton jeu sur Internet
- 👥 Partager ton code avec le monde entier
- 🔄 Synchroniser ta save locale avec la save en ligne

Prépare-toi à devenir un dev connecté ! 🔥

**Maintenant, va résoudre des conflits !** 🚀
