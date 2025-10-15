# 🌿 Leçon 03 : Tester deux versions en parallèle (branches)

## Salut chef créatif ! 🧙‍♂️🏗️

Dans la leçon 02, t'as appris à **inspecter tes versions** avec Git.  
Maintenant, on va apprendre un truc DE MALADE...

**Imagine :**

Tu as ta recette de sauce tomate qui fonctionne bien. 🍅  
Mais tu veux tester **deux variantes différentes** :
- Variante 1 : Avec du basilic frais
- Variante 2 : Avec de l'origan

**Le problème ?**

Si tu modifies ta recette de base avec le basilic... et que tu veux tester l'origan après... 😱  
Tu dois DÉFAIRE le basilic, tester l'origan, tout re-modifier... C'est la galère !

**La solution ?**

Tu crées **deux versions parallèles** :
- Version A : Tu testes le basilic
- Version B : Tu testes l'origan

Tu goûtes les deux. Tu choisis la meilleure. **Et tu jettes l'autre !**

**Avec Git, c'est exactement ça : les BRANCHES ! 🌿**

---

## 🤔 C'est quoi une branche ?

Une branche, c'est une **version parallèle de ta recette** où tu peux expérimenter sans risque.

**Analogie cuisine :**

Tu as ta **recette principale** (celle qui fonctionne).  
Tu veux tester une nouvelle idée ? Tu crées une **version parallèle**.

- ✅ Si ta variante marche → Tu l'adoptes comme nouvelle recette principale
- ❌ Si ta variante marche pas → Tu supprimes cette version et tu oublies

**Résultat ?**  
Ta recette principale reste **toujours intacte** pendant tes tests ! 💪

---

## 🎯 Pourquoi les branches, c'est GÉNIAL ?

### 1️⃣ Tu peux expérimenter sans risque 🧪

Tu veux tester une nouvelle épice ?  
Tu crées une branche. Tu testes. Si c'est immangeable, tu supprimes la branche.  
**Ta recette principale reste parfaite !**

### 2️⃣ Tu peux tester plusieurs variantes en même temps 👥

Imagine que tu veux tester 3 épices différentes :
- **Branche "basilic"** → Tu testes avec du basilic
- **Branche "origan"** → Tu testes avec de l'origan
- **Branche "thym"** → Tu testes avec du thym

Tu peux passer d'une version à l'autre instantanément.  
Tu goûtes tout. Tu choisis la meilleure !

### 3️⃣ C'est comme ça que bossent TOUS les pros 💼

Dans les restaurants étoilés, PERSONNE ne modifie la recette principale directement.  
Tout le monde crée des branches pour tester :
- Branche "test-basilic-frais"
- Branche "amelioration-cuisson"
- Branche "nouvelle-presentation"

**C'est LA manière professionnelle de travailler !**

---

## 🏗️ Comprendre les branches avec un dessin

Imagine que tu développes une sauce tomate :

```
        🍅 Recette principale (main)
        |
        | Version 1 : Base tomate
        |
        | Version 2 : Ajout ail
        |
        | Version 3 : Ajout sel/poivre
```

Maintenant, tu veux tester le basilic :

```
        🍅 Recette principale (main)
        |
        | Version 1 : Base tomate
        |
        | Version 2 : Ajout ail
        |
        | Version 3 : Ajout sel/poivre
        |\
        | \_____ 🌿 Test basilic (test-basilic)
        |        |
        |        | Version 4 : Ajout basilic frais
        |        |
        |        | Version 5 : Ajustement quantité
```

**Tu vois ?**  
La recette principale continue normalement.  
Le test basilic est totalement indépendant !

Si le basilic te plaît, tu l'intègres dans la recette principale.  
Si le basilic est raté, tu supprimes cette branche. **Simple !**

---

## 🚀 Les commandes de base pour les branches

### 1️⃣ Voir toutes tes branches

```bash
git branch
```

**En français :** "Montre-moi toutes mes versions parallèles"

**Résultat :**

```
* main
  test-basilic
```

L'étoile `*` indique sur quelle version tu travailles actuellement.

**Analogie cuisine :** C'est comme avoir une liste de toutes tes variantes en cours.

---

### 2️⃣ Créer une nouvelle branche

```bash
git branch nom-de-la-branche
```

**Exemple :**

```bash
git branch test-basilic
```

**En français :** "Crée une nouvelle version parallèle qui s'appelle `test-basilic`"

**Analogie cuisine :** Tu dupliques ta recette actuelle pour tester une variante.

---

### 3️⃣ Aller sur une branche

```bash
git checkout nom-de-la-branche
```

Ou la version plus moderne :

```bash
git switch nom-de-la-branche
```

**Exemple :**

```bash
git switch test-basilic
```

**En français :** "Je vais travailler sur la version `test-basilic`"

**Analogie cuisine :** Tu ouvres ton livre à la page de cette variante.

---

### 4️⃣ Créer ET aller sur une branche en une seule commande

```bash
git checkout -b nom-de-la-branche
```

Ou la version moderne :

```bash
git switch -c nom-de-la-branche
```

**Exemple :**

```bash
git switch -c test-basilic
```

**En français :** "Crée une nouvelle version `test-basilic` et vas-y direct"

**Analogie cuisine :** Tu dupliques ta recette et tu commences tout de suite à tester.

**C'est la commande que tu vas utiliser 90% du temps !** 🔥

---

## 🧪 Exemple pratique complet

Allez, on fait un vrai exemple avec ton projet `mon-site`.

### Étape 1 : Vérifie sur quelle version tu es

```bash
git branch
```

**Résultat :**

```
* main
```

Tu es sur la recette principale. 🍅

---

### Étape 2 : Crée une nouvelle branche pour tester quelque chose

```bash
git switch -c test-formulaire
```

**Traduction :** "Crée une version parallèle pour tester l'ajout d'un formulaire"

**Résultat :**

```
Switched to a new branch 'test-formulaire'
```

---

### Étape 3 : Travaille sur cette branche

Modifie ton fichier `index.html` :

```html
<h1>Bienvenue dans ma cuisine !</h1>
<p>Je m'appelle Kévin et je cuisine des sites comme un chef !</p>

<form>
  <input type="text" placeholder="Ton nom">
  <button>Envoyer</button>
</form>
```

Sauvegarde ton travail :

```bash
git add index.html
git commit -m "Version test - ajout formulaire de contact"
```

**Ce qui se passe :**  
Tu viens de noter une version dans la variante `test-formulaire`.  
**Ta recette principale (`main`) n'a PAS bougé !**

---

### Étape 4 : Retourne sur la recette principale

```bash
git switch main
```

**Maintenant, ouvre ton fichier `index.html`...**

💥 **MAGIE !**  
Le formulaire a disparu ! Tu es revenu sur la recette principale où il n'y a pas de formulaire !

---

### Étape 5 : Reviens sur ta version test

```bash
git switch test-formulaire
```

**Ouvre à nouveau `index.html`...**

🎉 **Le formulaire est de retour !**

**Tu vois le pouvoir des branches ?**  
Tu peux passer d'une version à l'autre **instantanément** ! ⚡

---

## 🎯 Les règles d'or des branches

### ✅ Règle 1 : Une branche = Un test

Ne mets pas 50 tests différents dans une seule branche.

**Exemples de bonnes branches :**
- `test-basilic-frais`
- `test-reduction-sel`
- `amelioration-cuisson`

**Exemples de mauvaises branches :**
- `mes-tests` ❌ (Trop vague)
- `test` ❌ (On sait pas ce que tu testes)
- `branche1` ❌ (Aucun sens)

**Pense à la cuisine :**  
Une branche = Un ingrédient ou une technique à tester, pas "faire des trucs"

---

### ✅ Règle 2 : Donne des noms clairs

Utilise des noms descriptifs :
- En minuscules
- Avec des tirets `-` pour séparer les mots
- En français ou en anglais (choisis et reste cohérent)

**Bons exemples :**
```
test-basilic-frais
amelioration-sauce
reduction-cuisson
```

---

### ✅ Règle 3 : Sauvegarde avant de changer de branche

**ATTENTION !**

Avant de faire `git switch`, assure-toi d'avoir fait un `git commit` !

**Pourquoi ?**

Imagine : tu es sur une version, tu testes du basilic...  
Si tu changes de branche AVANT de noter ta version...  
Ton basilic va suivre avec toi ! 😱

**La bonne pratique :**

```bash
git add .
git commit -m "Version test en cours"
git switch autre-branche
```

Toujours noter avant de changer de version ! 📖

---

## 🔑 Antisèche : Les commandes des versions parallèles

| Commande | Ce qu'elle fait | Analogie cuisine |
|----------|-----------------|------------------|
| `git branch` | Voir toutes les versions | Liste de toutes tes variantes |
| `git branch nom` | Créer une nouvelle version | Dupliquer ta recette pour tester |
| `git switch nom` | Aller sur une version | Ouvrir le livre à cette variante |
| `git switch -c nom` | Créer ET aller sur une version | Dupliquer et commencer à tester direct |
| `git branch -d nom` | Supprimer une version | Jeter une variante ratée (on verra ça plus tard) |

---

## 🎮 Exercice : À toi de jouer !

**Mission : Crée et utilise ta première branche**

1. Va dans ton projet `mon-portfolio`
2. Vérifie sur quelle version tu es avec `git branch`
3. Crée une nouvelle branche `test-description` avec `git switch -c test-description`
4. Modifie `index.html` : ajoute une description de toi (2-3 lignes)
5. Sauvegarde avec `git add .` puis `git commit -m "Version test - ajout description"`
6. Retourne sur la version principale avec `git switch main`
7. Ouvre `index.html` → Ta description a disparu ! (normal)
8. Retourne sur ta version test avec `git switch test-description`
9. Ouvre `index.html` → Ta description est revenue ! 🎉

**Si t'as réussi, t'es un CHEF MULTI-VERSIONS ! 💪**

---

## 🧠 Récapitulatif : Pourquoi les branches ?

**Sans les branches :**
- 😱 Tu testes direct sur la recette principale
- 😱 Si tu rates, tout le monde est bloqué
- 😱 Tu peux pas tester tranquillement plusieurs variantes

**Avec les branches :**
- 😎 Tu crées une version parallèle pour tester
- 😎 Si ça marche pas, tu supprimes et c'est fini
- 😎 Ta recette principale reste toujours parfaite
- 😎 Tu peux tester plusieurs ingrédients en parallèle

**Les branches, c'est la liberté totale ! 🚀**

---

## 💬 Citation du jour

> "Un bon chef ne teste jamais un nouvel ingrédient sur la recette principale.  
> Il crée une version parallèle, teste, et décide après."
> 
> — Le Chef Étoilé du Code 🍳

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 04**, tu vas apprendre le truc le plus important :

- 🔀 **Fusionner** deux versions (merge)
- 🎯 Adopter ta meilleure variante comme nouvelle recette principale
- 🤯 Gérer les situations où deux chefs ont modifié la même recette

**Prépare-toi, ça va être délicieux ! 🔥**

---

**Maintenant, va créer des versions parallèles ! 🚀**