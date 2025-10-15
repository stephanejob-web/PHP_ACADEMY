
🤝 Leçon 07 : Jouer en équipe (Pull Request & Multiplayer pro)
Salut chef de guilde ! 🧙‍♂️👥

Félicitations ! Tu as fait 6 leçons et tu maîtrises Git !
Mais maintenant... le niveau ultime...

Jouer en **ÉQUIPE** ! 👥

Imagine : vous êtes 5 développeurs sur le même jeu.
Comment vous faites pour pas tout casser ?
Comment vous validez le travail de chacun ?
Comment les pros bossent dans les studios de jeux ?

Aujourd'hui, tu vas apprendre le workflow des **VRAIS développeurs** ! 🚀

---

## 🤔 Le problème du jeu en équipe

**Situation :**

Tu développes un jeu avec Marc et Sophie.

- 🧑 **Marc** push son code direct sur main → Ça marche
- 👩 **Sophie** push son code direct sur main → Ça marche
- 👨 **Toi** tu push ton code direct sur main → 💥 **TOUT CASSE !**

**Pourquoi ?**
Parce que personne n'a vérifié ton code avant !

**Analogie jeu :**

Imagine un raid MMO où chaque joueur fait ce qu'il veut sans stratégie.

- Marc attaque le boss
- Sophie heal l'équipe
- Toi tu aggro tous les adds... 💥

**Résultat : Wipe total !** 😱

**La solution des pros ?**
Personne ne push directement sur main.
Tout le monde crée des branches et demande l'autorisation avant d'intégrer.

**C'est ça, la Pull Request !** 🔥

---

## 🎯 C'est quoi une Pull Request (PR) ?

Une Pull Request, c'est une **demande de fusion**.

**En français :**
*"Hé chef, j'ai fini mon travail sur ma branche. Tu peux vérifier et l'intégrer à main si c'est OK ?"*

**Analogie jeu :**

Tu as créé un nouveau niveau sur une save test.
Avant de l'intégrer au jeu principal, tu appelles le lead designer :

*"Chef ! J'ai fini le niveau 5. Viens le tester avant qu'on l'intègre !"*

Le chef vient, teste, et dit :

- ✅ "Nickel ! On l'intègre au jeu !"
- ❌ "Non, refais le design du boss d'abord"

**Avec Git, c'est exactement pareil !**

---

## 🏗️ Le workflow professionnel (Fork & Pull Request)

Voici comment les pros travaillent dans 99% des studios :

### Étape 1 : Créer une branche

Personne ne travaille directement sur main.

```bash
git switch -c ajout-systeme-combat
```

**Traduction :** "Je crée une save test pour le système de combat"

---

### Étape 2 : Travailler sur la branche

Tu codes ta fonctionnalité normalement.

```bash
# Tu codes...
git add .
git commit -m "Ajout du système de combat avec combos"
```

---

### Étape 3 : Pousser la branche sur GitHub

```bash
git push origin ajout-systeme-combat
```

**Traduction :** "J'envoie ma save test sur le cloud"

**Résultat :**
Ta branche est maintenant sur GitHub, mais PAS encore sur main.

---

### Étape 4 : Créer une Pull Request sur GitHub

**🖱️ MÉTHODE FACILE :**

1. Va sur GitHub (le site web)
2. Tu verras un message : **"Compare & pull request"**
3. Clique dessus
4. Écris un message : "Ajout du système de combat avec combos"
5. Clique sur **Create pull request**

**Traduction :** *"Chef, j'ai fini ! Tu peux tester mon niveau ?"*

---

### Étape 5 : Review (Revue de code)

Le chef (ou un coéquipier) va :

- 👀 Tester ton code
- 💬 Laisser des commentaires : "Change les dégâts", "Ajoute un cooldown"
- ✅ Approuver si c'est bon
- ❌ Demander des modifications si besoin

**Analogie jeu :**
Le lead tester vérifie que le niveau est jouable avant de l'intégrer au jeu final.

---

### Étape 6 : Merge (Fusion)

Une fois approuvé, le chef clique sur **Merge pull request**.

💥 **Boom ! Ton code est intégré dans main !** 🎉

**Traduction :** *"Parfait ! On intègre ton niveau au jeu principal !"*

---

## 🧪 Exemple pratique complet

On va faire une vraie Pull Request !

### Situation

Tu développes le jeu `mon-site` avec ton équipe.

### Étape 1 : Crée une branche

```bash
git switch -c ajout-footer
```

**Traduction :** "Je crée une save test pour ajouter un footer"

---

### Étape 2 : Travaille sur la branche

**🖱️ MÉTHODE FACILE :**

1. Va dans ton dossier `mon-site`
2. Ouvre `index.html` avec le Bloc-notes
3. Ajoute à la fin :

```html
<footer>
  <p>© 2025 Mon Site - Tous droits réservés</p>
</footer>
```

4. Sauvegarde (Ctrl+S)

**Dans le terminal :**

```bash
git add index.html
git commit -m "Ajout du footer avec copyright"
```

---

### Étape 3 : Pousse la branche sur GitHub

```bash
git push origin ajout-footer
```

**Résultat :**
Ta branche `ajout-footer` est maintenant sur GitHub ! 🚀

---

### Étape 4 : Crée la Pull Request sur GitHub

1. Va sur `https://github.com/ton-nom/mon-site`
2. GitHub va afficher : **"ajout-footer had recent pushes - Compare & pull request"**
3. Clique sur **Compare & pull request**
4. Écris un titre : "Ajout du footer avec copyright"
5. Écris une description :

```markdown
## Description
Ajout d'un footer en bas de page avec :
- Texte de copyright
- Année 2025

## Screenshots
(Tu peux ajouter une capture d'écran)
```

6. Clique sur **Create pull request**

**C'est fait ! Ta PR est créée !** 🎉

---

### Étape 5 : Attendre la review

Maintenant, tu attends que quelqu'un (ton chef, un coéquipier) :

- 👀 Regarde ton code
- 💬 Laisse des commentaires
- ✅ Approuve

Dans un vrai projet, tu peux :

- Répondre aux commentaires
- Faire des modifications si demandé
- Pousser de nouveaux commits sur ta branche (ils s'ajoutent automatiquement à la PR)

---

### Étape 6 : Merger la PR

Une fois approuvée, quelqu'un (souvent toi ou ton chef) clique sur **Merge pull request**.

**Choix possibles :**

- **Merge commit** : Garde l'historique complet (recommandé pour débuter)
- **Squash and merge** : Combine tous les commits en un seul
- **Rebase and merge** : Réécrit l'historique (avancé)

Choisis **"Merge commit"** pour commencer.

**C'est bon ! Ton footer est maintenant dans main !** 🎉

---

### Étape 7 : Nettoyer

Après le merge, supprime ta branche :

**Sur GitHub :**
GitHub propose un bouton **Delete branch**. Clique dessus.

**Sur ton PC :**

```bash
git switch main
git pull
git branch -d ajout-footer
```

**Traduction :** "Je reviens sur main, je récupère la dernière version, et je supprime ma save test"

**Cycle complet terminé !** 🔁

---

## 👥 Contribuer à un projet existant (Fork)

Imagine : tu veux contribuer à un jeu open source (comme Godot, Unity Scripts, etc.).

**Problème :**
Tu n'as pas les droits d'écriture sur le projet.

**Solution : Le FORK !** 🍴

### C'est quoi un Fork ?

Un fork, c'est une **copie d'un projet** dans ton compte GitHub.

**Analogie jeu :**
C'est comme si tu copiais un mod de jeu, tu le modifies, et tu proposes tes améliorations à l'auteur original.

### Comment ça marche ?

#### Étape 1 : Forker le projet

1. Va sur le projet GitHub (exemple : `https://github.com/facebook/react`)
2. Clique sur **Fork** en haut à droite
3. GitHub crée une copie dans TON compte : `https://github.com/ton-nom/react`

---

#### Étape 2 : Clone TON fork

```bash
git clone https://github.com/ton-nom/react.git
```

**Traduction :** "Je télécharge MA copie du projet"

---

#### Étape 3 : Crée une branche et travaille

```bash
git switch -c correction-bug-menu
# Tu codes...
git add .
git commit -m "Correction du bug dans le menu"
```

---

#### Étape 4 : Pousse sur TON fork

```bash
git push origin correction-bug-menu
```

---

#### Étape 5 : Crée une Pull Request vers le projet ORIGINAL

1. Va sur TON fork sur GitHub
2. Clique sur **Compare & pull request**
3. GitHub va automatiquement proposer de créer une PR vers le projet original
4. Écris une description claire
5. Clique sur **Create pull request**

**Résultat :**
Les mainteneurs du projet original vont voir ta PR et décider de l'accepter ou non ! 🎉

**C'est comme ça qu'on contribue à Linux, WordPress, React, etc. !** 🌍

---

## ✅ Les règles d'or du jeu en équipe

### Règle 1 : Jamais push direct sur main 🚫

Dans les studios, la branche main est protégée.
Personne ne peut push directement dessus.
Tout passe par des Pull Requests.

**Pourquoi ?**
Pour éviter de casser le jeu en production !

---

### Règle 2 : Des PR petites et focalisées 🎯

**Mauvaise PR :**
"Ajout de 50 niveaux + correction de 20 bugs + refonte complète"

**Bonne PR :**
"Ajout du niveau 5 avec boss"

**Analogie jeu :**
Termine un niveau, fais-le valider, puis passe à autre chose.
Ne fais pas niveau + armes + ennemis en même temps !

---

### Règle 3 : Décris bien tes PR 📝

Une bonne description de PR contient :

- 📋 Ce que tu as fait
- 🎯 Pourquoi tu l'as fait
- 🖼️ Des screenshots si c'est visuel
- ✅ Une checklist si besoin

**Exemple :**

```markdown
## Description
Ajout du système de combat avec combos de 3 attaques.

## Pourquoi ?
Les joueurs demandaient plus de profondeur dans le gameplay.

## Ce qui a été fait
- Système de combos (3 attaques)
- Animation fluide
- Cooldown de 2 secondes
- Particules d'impact

## Screenshots
![Combat system](lien-vers-image.png)

## Checklist
- [x] Code testé
- [x] Balance OK
- [x] Pas de bugs trouvés
```

---

### Règle 4 : Review le code des autres 👀

Quand quelqu'un crée une PR, prends le temps de :

- 👀 Tester son code
- 💬 Laisser des commentaires constructifs
- ✅ Approuver si c'est bon

**Ne sois pas toxique !**
Sois constructif : *"GG ! Peut-être qu'on pourrait améliorer cette fonction comme ça..."*

---

## 🎮 Exercice : À toi de jouer !

**Mission :** Fais ta première Pull Request

### 📝 Étapes détaillées (pour débutants) :

**1️⃣ Protège la branche main**
   - Va sur GitHub → Ton repo `mon-portfolio`
   - Settings → Branches → Add rule
   - Branch name pattern : `main`
   - Coche "Require a pull request before merging"
   - Save changes

**2️⃣ Sur ton PC, crée une branche**
   - Ouvre ton dossier `mon-portfolio`
   - Terminal : `git switch -c ajout-projets`

**3️⃣ Modifie index.html**
   - Ouvre avec le Bloc-notes
   - Ajoute une section :
   ```html
   <h2>Mes Projets</h2>
   <ul>
     <li>Site portfolio</li>
     <li>Jeu en JavaScript</li>
   </ul>
   ```
   - Sauvegarde (Ctrl+S)

**4️⃣ Sauvegarde dans Git**
   - `git add .`
   - `git commit -m "Ajout section projets"`

**5️⃣ Pousse sur GitHub**
   - `git push origin ajout-projets`

**6️⃣ Crée la Pull Request**
   - Va sur GitHub
   - Clique "Compare & pull request"
   - Écris une belle description
   - Create pull request

**7️⃣ Merge ta PR**
   - Clique sur "Merge pull request"
   - Confirme

**8️⃣ Supprime la branche**
   - Sur GitHub : Delete branch

**9️⃣ Sur ton PC, nettoie**
   - `git switch main`
   - `git pull`
   - `git branch -d ajout-projets`

**🎉 Si t'as réussi, t'es un DEV PRO NIVEAU STUDIO !** 💪🔥

---

## 🔑 Antisèche : Le workflow complet

| Étape | Commande | Où | Ce que ça fait |
|-------|----------|-----|----------------|
| 1 | `git switch -c ma-branche` | PC | Créer une branche |
| 2 | Code + `git commit` | PC | Travailler |
| 3 | `git push origin ma-branche` | PC | Envoyer sur GitHub |
| 4 | Create Pull Request | GitHub | Demander la fusion |
| 5 | Review & Comments | GitHub | Vérification par l'équipe |
| 6 | Merge PR | GitHub | Intégrer dans main |
| 7 | `git pull` sur main | PC | Récupérer la version à jour |

---

## 💬 Citation du jour

> "Un bon chef de guilde ne laisse jamais un joueur modifier le build principal sans validation.
> Tout passe par une vérification avant intégration."
>
> — Le Maître du Jeu 🎮

---

## 🎉 FÉLICITATIONS ! Tu as terminé le cours Git !

Tu maîtrises maintenant :

- ✅ **Leçon 01** : Sauvegarder ton code (init, add, commit)
- ✅ **Leçon 02** : Vérifier tes stats (status, log, diff)
- ✅ **Leçon 03** : Créer des saves parallèles (branch, switch)
- ✅ **Leçon 04** : Fusionner des parties (merge)
- ✅ **Leçon 05** : Résoudre des conflits (PvP mode)
- ✅ **Leçon 06** : Jouer dans le cloud (push, pull, clone)
- ✅ **Leçon 07** : Jouer en équipe (Pull Request, Fork)

**Tu es maintenant un développeur qui bosse comme les PROS !** 🚀

---

## 🚀 Et maintenant ?

### 📚 Continue à pratiquer

- Crée des projets persos et mets-les sur GitHub
- Contribue à des projets open source
- Travaille en équipe sur des vrais projets

### 🌟 Montre ton travail

- Utilise GitHub comme ton portfolio
- Les recruteurs regardent ton profil GitHub !
- Plus tu as de projets, mieux c'est

### 🔥 Concepts avancés (quand tu seras prêt)

- `git rebase` : Réécrire l'historique
- `git cherry-pick` : Récupérer un commit précis
- `git stash` : Mettre de côté du travail en cours
- GitHub Actions : Automatiser les tests
- Git hooks : Automatiser des tâches

---

## 🏆 Achievement Unlocked : Git Master !

**Bravo champion !** Tu as débloqué tous les succès :

- 🥉 **Git Novice** : Premier commit
- 🥈 **Git Warrior** : Première branche
- 🥇 **Git Master** : Première Pull Request
- 👑 **Git Legend** : Cours complet terminé !

**Tu es maintenant prêt pour le monde professionnel !** 🚀

---

**Maintenant, va coder et partage tes projets avec le monde !** 🌍✨
