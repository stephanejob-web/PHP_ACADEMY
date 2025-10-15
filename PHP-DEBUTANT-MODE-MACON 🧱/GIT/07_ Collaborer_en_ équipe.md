# 🤝 Leçon 07 : Collaborer en équipe (Pull Request & Workflow pro)

## Salut chef d'équipe ! 🧙‍♂️👥

Félicitations ! Tu as fait **6 leçons** et tu maîtrises Git !  
Mais maintenant... le niveau ultime...

**Travailler en ÉQUIPE ! 👥**

Imagine : vous êtes 5 développeurs sur le même projet.  
Comment vous faites pour pas tout casser ?  
Comment vous validez le travail de chacun ?  
Comment les pros bossent dans les entreprises ?

**Aujourd'hui, tu vas apprendre le workflow des VRAIS développeurs ! 🚀**

---

## 🤔 Le problème du travail en équipe

**Situation :**

Tu travailles sur un projet avec Marc et Sophie.

- 🧑 **Marc** pousse son code direct sur `main` → Ça marche
- 👩 **Sophie** pousse son code direct sur `main` → Ça marche
- 👨 **Toi** tu pousses ton code direct sur `main` → 💥 **TOUT CASSE !**

**Pourquoi ?**  
Parce que personne n'a vérifié ton code avant !

**Analogie chantier :**

Imagine un chantier où chaque ouvrier fait ce qu'il veut sans demander l'avis du chef.  
- Marc installe l'électricité
- Sophie peint les murs
- Toi tu détruis un mur porteur... 💥

**Résultat : La maison s'écroule ! 😱**

**La solution des pros ?**  
Personne ne pousse directement sur `main`.  
Tout le monde crée des branches et demande l'autorisation avant d'intégrer.  

**C'est ça, la Pull Request ! 🔥**

---

## 🎯 C'est quoi une Pull Request (PR) ?

Une Pull Request, c'est une **demande de fusion**.

**En français :**  
*"Hé chef, j'ai fini mon travail sur ma branche. Tu peux vérifier et l'intégrer à `main` si c'est OK ?"*

**Analogie chantier :**

Tu as construit un garage sur un terrain à part.  
Avant de l'intégrer à la maison principale, tu appelles le chef :

*"Chef ! J'ai fini le garage. Viens voir si c'est bon avant qu'on l'intègre !"*

Le chef vient, inspecte, et dit :
- ✅ *"Nickel ! On intègre !"*
- ❌ *"Non, refais la peinture d'abord"*

**Avec Git, c'est exactement pareil !**

---

## 🏗️ Le workflow professionnel (Fork & Pull Request)

Voici comment les pros travaillent **dans 99% des entreprises** :

### Étape 1 : Créer une branche

Personne ne travaille directement sur `main`.

```bash
git switch -c ajout-formulaire-contact
```

**Traduction :** *"J'ouvre un chantier parallèle pour le formulaire"*

---

### Étape 2 : Travailler sur la branche

Tu codes ta fonctionnalité normalement.

```bash
# Tu codes...
git add .
git commit -m "Ajout du formulaire de contact"
```

---

### Étape 3 : Pousser la branche sur GitHub

```bash
git push origin ajout-formulaire-contact
```

**Traduction :** *"J'envoie mon chantier parallèle sur GitHub"*

**Résultat :**  
Ta branche est maintenant sur GitHub, mais PAS encore sur `main`.

---

### Étape 4 : Créer une Pull Request sur GitHub

1. Va sur **GitHub** (le site web)
2. Tu verras un message : *"Compare & pull request"*
3. Clique dessus
4. Écris un message : *"Ajout du formulaire de contact avec validation"*
5. Clique sur **Create pull request**

**Traduction :** *"Chef, j'ai fini ! Tu peux vérifier mon travail ?"*

---

### Étape 5 : Review (Revue de code)

Le chef (ou un collègue) va :
- 👀 Regarder ton code
- 💬 Laisser des commentaires : *"Change cette couleur"*, *"Ajoute un message d'erreur"*
- ✅ Approuver si c'est bon
- ❌ Demander des modifications si besoin

**Analogie chantier :**  
L'inspecteur vérifie que tout est aux normes avant d'intégrer le garage.

---

### Étape 6 : Merge (Fusion)

Une fois approuvé, le chef clique sur **Merge pull request**.

💥 **Boom ! Ton code est intégré dans `main` ! 🎉**

**Traduction :** *"Parfait ! On intègre ton garage à la maison !"*

---

## 🧪 Exemple pratique complet

On va faire une vraie Pull Request !

### Situation

Tu travailles sur le projet `mon-site` avec ton équipe.

---

### Étape 1 : Crée une branche

```bash
git switch -c ajout-footer
```

**Traduction :** *"J'ouvre un chantier pour ajouter un footer"*

---

### Étape 2 : Travaille sur la branche

Modifie `index.html` et ajoute un footer :

```html
<footer>
  <p>© 2025 Mon Site - Tous droits réservés</p>
</footer>
```

Sauvegarde :

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

1. Va sur **https://github.com/ton-nom/mon-site**
2. GitHub va afficher : *"ajout-footer had recent pushes - Compare & pull request"*
3. Clique sur **Compare & pull request**
4. Écris un titre : *"Ajout du footer avec copyright"*
5. Écris une description :
   ```
   ## Description
   Ajout d'un footer en bas de page avec :
   - Texte de copyright
   - Année 2025
   
   ## Screenshots
   (Tu peux ajouter une capture d'écran)
   ```
6. Clique sur **Create pull request**

**C'est fait ! Ta PR est créée ! 🎉**

---

### Étape 5 : Attendre la review

Maintenant, tu attends que quelqu'un (ton chef, un collègue) :
- 👀 Regarde ton code
- 💬 Laisse des commentaires
- ✅ Approuve

**Dans un vrai projet, tu peux :**
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

**Choisis "Merge commit"** pour commencer.

**C'est bon ! Ton footer est maintenant dans `main` ! 🎉**

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

**Traduction :** *"Je reviens sur `main`, je récupère la dernière version, et je supprime ma branche locale"*

**Cycle complet terminé ! 🔁**

---

## 👥 Contribuer à un projet existant (Fork)

Imagine : tu veux contribuer à un projet open source (comme React, WordPress, etc.).

**Problème :**  
Tu n'as pas les droits d'écriture sur le projet.

**Solution : Le FORK ! 🍴**

### C'est quoi un Fork ?

Un fork, c'est une **copie** d'un projet dans ton compte GitHub.

**Analogie chantier :**  
C'est comme si tu copiais les plans d'une maison, tu les modifies, et tu proposes tes modifications à l'architecte original.

---

### Comment ça marche ?

**Étape 1 : Forker le projet**

1. Va sur le projet GitHub (exemple : `https://github.com/facebook/react`)
2. Clique sur **Fork** en haut à droite
3. GitHub crée une copie dans TON compte : `https://github.com/ton-nom/react`

---

**Étape 2 : Clone TON fork**

```bash
git clone https://github.com/ton-nom/react.git
```

**Traduction :** *"Je télécharge MA copie du projet"*

---

**Étape 3 : Crée une branche et travaille**

```bash
git switch -c correction-bug-menu
# Tu codes...
git add .
git commit -m "Correction du bug dans le menu"
```

---

**Étape 4 : Pousse sur TON fork**

```bash
git push origin correction-bug-menu
```

---

**Étape 5 : Crée une Pull Request vers le projet ORIGINAL**

1. Va sur **TON fork** sur GitHub
2. Clique sur **Compare & pull request**
3. GitHub va automatiquement proposer de créer une PR vers le projet original
4. Écris une description claire
5. Clique sur **Create pull request**

**Résultat :**  
Les mainteneurs du projet original vont voir ta PR et décider de l'accepter ou non ! 🎉

**C'est comme ça qu'on contribue à Linux, WordPress, React, etc. ! 🌍**

---

## ✅ Les règles d'or du travail en équipe

### Règle 1 : Jamais push direct sur `main` 🚫

Dans les entreprises, la branche `main` est **protégée**.  
Personne ne peut push directement dessus.  
**Tout passe par des Pull Requests.**

**Pourquoi ?**  
Pour éviter de casser le code en production !

---

### Règle 2 : Des PR petites et focalisées 🎯

**Mauvaise PR :**  
*"Ajout de 50 fonctionnalités + correction de 20 bugs + refonte du design"*

**Bonne PR :**  
*"Ajout du formulaire de contact"*

**Analogie chantier :**  
Construis le garage, fais-le valider, puis passe à autre chose.  
Ne construis pas garage + piscine + extension en même temps !

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
Ajout d'un formulaire de contact avec validation côté client.

## Pourquoi ?
Les utilisateurs demandaient un moyen de nous contacter.

## Ce qui a été fait
- Ajout du formulaire HTML
- Validation avec JavaScript
- Style CSS responsive

## Screenshots
![Screenshot du formulaire](lien-vers-image.png)

## Checklist
- [x] Code testé
- [x] Responsive mobile
- [x] Validation OK
```

---

### Règle 4 : Review le code des autres 👀

Quand quelqu'un crée une PR, prends le temps de :
- 👀 Lire son code
- 💬 Laisser des commentaires constructifs
- ✅ Approuver si c'est bon

**Ne sois pas méchant !**  
Sois constructif : *"Peut-être qu'on pourrait améliorer cette fonction comme ça..."*

---

## 🎮 Exercice : À toi de jouer !

**Mission : Fais ta première Pull Request**

1. Va dans ton projet `mon-portfolio` sur GitHub
2. Clique sur **Settings** → **Branches** → **Add rule**
3. Coche **Require a pull request before merging** (protège `main`)
4. Sur ton PC, crée une branche `ajout-projets` avec `git switch -c ajout-projets`
5. Modifie `index.html` : ajoute une section "Mes Projets"
6. Sauvegarde avec `git add .` et `git commit -m "Ajout section projets"`
7. Pousse avec `git push origin ajout-projets`
8. Va sur GitHub et crée une Pull Request
9. Écris une belle description
10. Merge ta PR (simule que c'est ton chef qui valide)
11. Supprime la branche sur GitHub
12. Sur ton PC : `git switch main` puis `git pull` puis `git branch -d ajout-projets`

**Si t'as réussi, t'es un DEV PRO NIVEAU ENTREPRISE ! 💪🔥**

---

## 🔑 Antisèche : Le workflow complet

| Étape | Commande | Où | Ce que ça fait |
|-------|----------|-----|----------------|
| 1 | `git switch -c ma-branche` | PC | Créer une branche |
| 2 | Code + `git commit` | PC | Travailler |
| 3 | `git push origin ma-branche` | PC | Envoyer sur GitHub |
| 4 | Create Pull Request | GitHub | Demander la fusion |
| 5 | Review & Comments | GitHub | Vérification par l'équipe |
| 6 | Merge PR | GitHub | Intégrer dans `main` |
| 7 | `git pull` sur `main` | PC | Récupérer la version à jour |

---

## 💬 Citation du jour

> "Un bon chef de chantier ne laisse jamais un ouvrier modifier la maison principale sans vérification.  
> Tout passe par une inspection avant intégration."
> 
> — Le Chef de Chantier du Code 🧱

---

## 🎉 FÉLICITATIONS ! Tu as terminé le cours Git !

Tu maîtrises maintenant :

✅ **Leçon 01** : Sauvegarder ton code (init, add, commit)  
✅ **Leçon 02** : Inspecter ton historique (status, log, diff)  
✅ **Leçon 03** : Créer des branches (branch, switch)  
✅ **Leçon 04** : Fusionner des branches (merge)  
✅ **Leçon 05** : Résoudre des conflits  
✅ **Leçon 06** : Travailler avec GitHub (push, pull, clone)  
✅ **Leçon 07** : Collaborer en équipe (Pull Request, Fork)

**Tu es maintenant un développeur qui bosse comme les PROS ! 🚀**

---

## 🚀 Et maintenant ?

### 📚 Continue à pratiquer

- Crée des projets persos et mets-les sur GitHub
- Contribue à des projets open source
- Travaille en équipe sur des vrais projets

### 🌟 Montre ton travail

- Utilise GitHub comme ton **portfolio**
- Les recruteurs regardent ton profil GitHub !
- Plus tu as de projets, mieux c'est

### 🔥 Concepts avancés (quand tu seras prêt)

- `git rebase` : Réécrire l'historique
- `git cherry-pick` : Récupérer un commit précis
- `git stash` : Mettre de côté du travail en cours
- GitHub Acti