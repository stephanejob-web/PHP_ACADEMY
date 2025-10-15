# 🤝 Leçon 07 : Collaborer en équipe (Pull Request & Workflow pro)

## Salut chef de brigade ! 🧙‍♂️👥

Félicitations ! Tu as fait **6 leçons** et tu maîtrises Git !  
Mais maintenant... le niveau ultime...

**Travailler en BRIGADE ! 👥**

Imagine : vous êtes 5 chefs sur le même livre de recettes.  
Comment vous faites pour pas tout gâcher ?  
Comment vous validez les recettes de chacun ?  
Comment les pros bossent dans les grandes cuisines ?

**Aujourd'hui, tu vas apprendre le workflow des VRAIS chefs ! 🚀**

---

## 🤔 Le problème du travail en brigade

**Situation :**

Tu travailles sur un livre de recettes avec Marc et Sophie.

- 🧑 **Marc** ajoute ses recettes direct dans le livre principal → Ça marche
- 👩 **Sophie** ajoute ses recettes direct dans le livre principal → Ça marche
- 👨 **Toi** tu ajoutes tes recettes direct dans le livre principal → 💥 **TOUT EST GÂCHÉ !**

**Pourquoi ?**  
Parce que personne n'a goûté tes recettes avant !

**Analogie cuisine :**

Imagine une brigade où chaque chef fait ce qu'il veut sans demander l'avis du chef exécutif.  
- Marc prépare une sauce
- Sophie fait cuire la viande
- Toi tu ajoutes du piment fort dans TOUT... 💥

**Résultat : Le service est raté ! 😱**

**La solution des pros ?**  
Personne ne modifie directement le livre principal.  
Tout le monde teste ses recettes à part et demande l'autorisation avant d'intégrer.  

**C'est ça, la Pull Request ! 🔥**

---

## 🎯 C'est quoi une Pull Request (PR) ?

Une Pull Request, c'est une **demande de validation**.

**En français :**  
*"Hé chef, j'ai fini de tester ma recette. Tu peux goûter et l'ajouter au livre si c'est OK ?"*

**Analogie cuisine :**

Tu as testé une nouvelle sauce dans ton coin.  
Avant de l'ajouter au menu principal, tu appelles le chef exécutif :

*"Chef ! J'ai fini ma sauce. Goûte-la pour voir si c'est bon avant qu'on l'intègre au menu !"*

Le chef goûte, et dit :
- ✅ *"Délicieux ! On l'ajoute au menu !"*
- ❌ *"Non, réduis le sel d'abord"*

**Avec Git, c'est exactement pareil !**

---

## 🏗️ Le workflow professionnel (Fork & Pull Request)

Voici comment les pros travaillent **dans 99% des grandes cuisines** :

### Étape 1 : Créer une branche

Personne ne travaille directement sur le livre principal.

```bash
git switch -c test-sauce-basilic
```

**Traduction :** *"Je teste une nouvelle sauce au basilic à part"*

---

### Étape 2 : Travailler sur la branche

Tu testes ta recette normalement.

```bash
# Tu cuisines...
git add .
git commit -m "Test sauce basilic avec ail confit"
```

---

### Étape 3 : Pousser la branche sur GitHub

```bash
git push origin test-sauce-basilic
```

**Traduction :** *"J'envoie ma recette test sur le cloud"*

**Résultat :**  
Ta version test est maintenant sur GitHub, mais PAS encore dans le livre principal.

---

### Étape 4 : Créer une Pull Request sur GitHub

1. Va sur **GitHub** (le site web)
2. Tu verras un message : *"Compare & pull request"*
3. Clique dessus
4. Écris un message : *"Nouvelle sauce basilic avec ail confit"*
5. Clique sur **Create pull request**

**Traduction :** *"Chef, j'ai fini ! Tu peux goûter ma recette ?"*

---

### Étape 5 : Review (Dégustation)

Le chef (ou un collègue) va :
- 👅 Goûter ta recette
- 💬 Laisser des commentaires : *"Réduis le sel"*, *"Ajoute du poivre"*
- ✅ Approuver si c'est bon
- ❌ Demander des modifications si besoin

**Analogie cuisine :**  
Le chef exécutif vérifie que la recette est parfaite avant de l'ajouter au menu.

---

### Étape 6 : Merge (Adoption)

Une fois approuvée, le chef clique sur **Merge pull request**.

💥 **Boom ! Ta recette est ajoutée au livre principal ! 🎉**

**Traduction :** *"Parfait ! On adopte ta sauce au menu !"*

---

## 🧪 Exemple pratique complet

On va faire une vraie Pull Request !

### Situation

Tu travailles sur le livre `mes-recettes` avec ton équipe.

---

### Étape 1 : Crée une branche

```bash
git switch -c test-dessert-tiramisu
```

**Traduction :** *"Je teste une nouvelle recette de tiramisu"*

---

### Étape 2 : Travaille sur la branche

Crée `tiramisu.txt` et ajoute ta recette :

```
Tiramisu traditionnel
- 250g mascarpone
- 3 œufs
- Café fort
- Cacao
```

Sauvegarde :

```bash
git add tiramisu.txt
git commit -m "Test recette tiramisu traditionnel"
```

---

### Étape 3 : Pousse la branche sur GitHub

```bash
git push origin test-dessert-tiramisu
```

**Résultat :**  
Ta version test `test-dessert-tiramisu` est maintenant sur GitHub ! 🚀

---

### Étape 4 : Crée la Pull Request sur GitHub

1. Va sur **https://github.com/ton-nom/mes-recettes**
2. GitHub va afficher : *"test-dessert-tiramisu had recent pushes - Compare & pull request"*
3. Clique sur **Compare & pull request**
4. Écris un titre : *"Nouvelle recette : Tiramisu traditionnel"*
5. Écris une description :
   ```
   ## Description
   Nouvelle recette de tiramisu avec :
   - Mascarpone de qualité
   - Café italien fort
   - Cacao pur
   
   ## Photos
   (Tu peux ajouter une photo du dessert)
   ```
6. Clique sur **Create pull request**

**C'est fait ! Ta PR est créée ! 🎉**

---

### Étape 5 : Attendre la dégustation

Maintenant, tu attends que quelqu'un (ton chef, un collègue) :
- 👅 Goûte ta recette
- 💬 Laisse des commentaires
- ✅ Approuve

**Dans une vraie brigade, tu peux :**
- Répondre aux commentaires
- Ajuster la recette si demandé
- Pousser de nouvelles versions sur ta branche (elles s'ajoutent automatiquement à la PR)

---

### Étape 6 : Merger la PR

Une fois approuvée, quelqu'un (souvent toi ou ton chef) clique sur **Merge pull request**.

**Choix possibles :**
- **Merge commit** : Garde l'historique complet (recommandé pour débuter)
- **Squash and merge** : Combine toutes les versions en une seule
- **Rebase and merge** : Réécrit l'historique (avancé)

**Choisis "Merge commit"** pour commencer.

**C'est bon ! Ton tiramisu est maintenant dans le livre principal ! 🎉**

---

### Étape 7 : Nettoyer

Après le merge, supprime ta branche :

**Sur GitHub :**  
GitHub propose un bouton **Delete branch**. Clique dessus.

**Sur ton PC :**
```bash
git switch main
git pull
git branch -d test-dessert-tiramisu
```

**Traduction :** *"Je reviens sur le livre principal, je récupère la dernière version, et je supprime ma branche de test"*

**Cycle complet terminé ! 🔁**

---

## 👥 Contribuer à un livre existant (Fork)

Imagine : tu veux contribuer à un livre de recettes célèbre (comme celui de Bocuse, Ducasse, etc.).

**Problème :**  
Tu n'as pas les droits d'écriture sur leur livre.

**Solution : Le FORK ! 🍴**

### C'est quoi un Fork ?

Un fork, c'est une **copie** d'un livre de recettes dans ton compte GitHub.

**Analogie cuisine :**  
C'est comme si tu copiais un livre de recettes célèbre, tu testes tes propres variantes, et tu proposes tes améliorations au chef original.

---

### Comment ça marche ?

**Étape 1 : Forker le livre**

1. Va sur le livre GitHub (exemple : `https://github.com/bocuse/recettes-classiques`)
2. Clique sur **Fork** en haut à droite
3. GitHub crée une copie dans TON compte : `https://github.com/ton-nom/recettes-classiques`

---

**Étape 2 : Clone TON fork**

```bash
git clone https://github.com/ton-nom/recettes-classiques.git
```

**Traduction :** *"Je télécharge MA copie du livre"*

---

**Étape 3 : Crée une branche et teste**

```bash
git switch -c amelioration-sauce-tomate
# Tu cuisines...
git add .
git commit -m "Amélioration sauce tomate avec basilic frais"
```

---

**Étape 4 : Pousse sur TON fork**

```bash
git push origin amelioration-sauce-tomate
```

---

**Étape 5 : Crée une Pull Request vers le livre ORIGINAL**

1. Va sur **TON fork** sur GitHub
2. Clique sur **Compare & pull request**
3. GitHub va automatiquement proposer de créer une PR vers le livre original
4. Écris une description claire
5. Clique sur **Create pull request**

**Résultat :**  
Les chefs du livre original vont voir ta PR et décider de l'accepter ou non ! 🎉

**C'est comme ça qu'on contribue aux grands livres de recettes du monde ! 🌍**

---

## ✅ Les règles d'or du travail en brigade

### Règle 1 : Jamais modifier direct le livre principal 🚫

Dans les grandes cuisines, le livre principal est **protégé**.  
Personne ne peut le modifier directement.  
**Tout passe par des Pull Requests.**

**Pourquoi ?**  
Pour éviter de gâcher le service !

---

### Règle 2 : Des PR petites et focalisées 🎯

**Mauvaise PR :**  
*"Ajout de 50 recettes + correction de 20 bugs + refonte du menu"*

**Bonne PR :**  
*"Nouvelle sauce basilic"*

**Analogie cuisine :**  
Teste la sauce, fais-la valider, puis passe au dessert.  
Ne teste pas sauce + dessert + entrée en même temps !

---

### Règle 3 : Décris bien tes PR 📝

Une bonne description de PR contient :
- 📋 Ce que tu as testé
- 🎯 Pourquoi tu l'as fait
- 🖼️ Des photos si c'est visuel
- ✅ Une checklist si besoin

**Exemple :**

```markdown
## Description
Nouvelle sauce tomate avec basilic frais et ail confit.

## Pourquoi ?
Les clients demandaient une sauce plus parfumée.

## Ce qui a été fait
- Test avec basilic frais au lieu de séché
- Ajout d'ail confit
- Réduction du sel

## Photos
![Photo de la sauce](lien-vers-image.png)

## Checklist
- [x] Recette testée
- [x] Approuvée par le sous-chef
- [x] Portions calculées
```

---

### Règle 4 : Goûte les recettes des autres 👅

Quand quelqu'un crée une PR, prends le temps de :
- 👅 Goûter sa recette
- 💬 Laisser des commentaires constructifs
- ✅ Approuver si c'est bon

**Ne sois pas méchant !**  
Sois constructif : *"Peut-être qu'on pourrait réduire le sel..."*

---

## 🎮 Exercice : À toi de jouer !

**Mission : Fais ta première Pull Request**

1. Va dans ton projet `mon-portfolio` sur GitHub
2. Clique sur **Settings** → **Branches** → **Add rule**
3. Coche **Require a pull request before merging** (protège `main`)
4. Sur ton PC, crée une branche `test-nouvelle-recette` avec `git switch -c test-nouvelle-recette`
5. Modifie `index.html` : ajoute une section "Mes Recettes"
6. Sauvegarde avec `git add .` et `git commit -m "Test nouvelle section recettes"`
7. Pousse avec `git push origin test-nouvelle-recette`
8. Va sur GitHub et crée une Pull Request
9. Écris une belle description
10. Merge ta PR (simule que c'est ton chef qui valide)
11. Supprime la branche sur GitHub
12. Sur ton PC : `git switch main` puis `git pull` puis `git branch -d test-nouvelle-recette`

**Si t'as réussi, t'es un CHEF PRO NIVEAU RESTAURANT ÉTOILÉ ! 💪🔥**

---

## 🔑 Antisèche : Le workflow complet

| Étape | Commande | Où | Ce que ça fait |
|-------|----------|-----|----------------|
| 1 | `git switch -c ma-branche` | PC | Créer une version test |
| 2 | Code + `git commit` | PC | Tester la recette |
| 3 | `git push origin ma-branche` | PC | Envoyer sur GitHub |
| 4 | Create Pull Request | GitHub | Demander la dégustation |
| 5 | Review & Comments | GitHub | Dégustation par l'équipe |
| 6 | Merge PR | GitHub | Adopter dans le livre principal |
| 7 | `git pull` sur `main` | PC | Récupérer la version à jour |

---

## 💬 Citation du jour

> "Un bon chef de brigade ne laisse jamais un cuisinier modifier le menu principal sans dégustation.  
> Tout passe par une validation avant adoption."
> 
> — Le Chef Étoilé du Code 🍳

---

## 🎉 FÉLICITATIONS ! Tu as terminé le cours Git !

Tu maîtrises maintenant :

✅ **Leçon 01** : Noter tes recettes (init, add, commit)  
✅ **Leçon 02** : Inspecter ton livre (status, log, diff)  
✅ **Leçon 03** : Tester des variantes (branch, switch)  
✅ **Leçon 04** : Adopter les meilleures versions (merge)  
✅ **Leçon 05** : Résoudre les conflits  
✅ **Leçon 06** : Mettre ton livre en ligne (push, pull, clone)  
✅ **Leçon 07** : Collaborer en brigade (Pull Request, Fork)

**Tu es maintenant un chef qui bosse comme les PROS ! 🚀**

---

## 🚀 Et maintenant ?

### 📚 Continue à pratiquer

- Crée des livres de recettes perso et mets-les sur GitHub
- Contribue à des livres de recettes open source
- Travaille en brigade sur de vrais projets

### 🌟 Montre ton travail

- Utilise GitHub comme ton **portfolio culinaire**
- Les recruteurs regardent ton profil GitHub !
- Plus tu as de recettes, mieux c'est

### 🔥 Concepts avancés (quand tu seras prêt)

- `git rebase