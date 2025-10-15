# 🌿 Leçon 03 : Les chantiers parallèles (branches)

## Salut architecte ! 🧙‍♂️🏗️

Dans la leçon 02, t'as appris à **inspecter ton chantier** avec Git.  
Maintenant, on va apprendre un truc DE MALADE...

**Imagine :**

Tu construis une maison. Tout marche bien. 🏠  
Mais tu veux tester **deux couleurs de peinture différentes** :
- Couleur 1 : Bleu ciel
- Couleur 2 : Rouge brique

**Le problème ?**

Si tu peins direct en bleu... et que ça te plaît pas... 😱  
Tu dois TOUT repeindre ! Des heures de boulot perdues !

**La solution ?**

Tu crées **deux chantiers parallèles** :
- Chantier A : Tu testes le bleu
- Chantier B : Tu testes le rouge

Tu compares. Tu choisis le meilleur. **Et tu jettes l'autre !**

**Avec Git, c'est exactement ça : les BRANCHES ! 🌿**

---

## 🤔 C'est quoi une branche ?

Une branche, c'est un **chantier parallèle** où tu peux expérimenter sans risque.

**Analogie chantier :**

Tu as ton **chantier principal** (la maison qui fonctionne).  
Tu veux tester une nouvelle idée ? Tu ouvres un **chantier parallèle**.

- ✅ Si ton idée marche → Tu l'intègres au chantier principal
- ❌ Si ton idée marche pas → Tu fermes le chantier parallèle et tu jettes tout

**Résultat ?**  
Ton chantier principal reste **toujours intact** ! 💪

---

## 🎯 Pourquoi les branches, c'est GÉNIAL ?

### 1️⃣ Tu peux expérimenter sans risque 🧪

Tu veux tester une nouvelle fonctionnalité ?  
Tu crées une branche. Tu testes. Si ça casse tout, tu supprimes la branche.  
**Ton code principal reste intact !**

### 2️⃣ Tu peux travailler en équipe sans te marcher dessus 👥

Imagine un vrai chantier avec 5 ouvriers :
- **Marc** travaille sur les fondations → Branche "fondations"
- **Sophie** travaille sur le toit → Branche "toit"
- **Alex** travaille sur l'électricité → Branche "electricite"

Chacun bosse sur son chantier parallèle.  
**Personne ne gêne personne !**

À la fin, on assemble tout. 🎉

### 3️⃣ C'est comme ça que bossent TOUS les pros 💼

Dans les entreprises, PERSONNE ne code directement sur le chantier principal.  
Tout le monde crée des branches :
- Branche "nouvelle-feature"
- Branche "correction-bug"
- Branche "test-design"

**C'est LA manière professionnelle de travailler !**

---

## 🏗️ Comprendre les branches avec un dessin

Imagine que tu construis une maison :

```
        🏠 Chantier principal (main)
        |
        | Photo 1 : Fondations
        |
        | Photo 2 : Murs
        |
        | Photo 3 : Toit
```

Maintenant, tu veux tester une extension :

```
        🏠 Chantier principal (main)
        |
        | Photo 1 : Fondations
        |
        | Photo 2 : Murs
        |
        | Photo 3 : Toit
        |\
        | \_____ 🧪 Chantier test (extension)
        |        |
        |        | Photo 4 : Ajout d'un garage
        |        |
        |        | Photo 5 : Peinture du garage
```

**Tu vois ?**  
Le chantier principal continue normalement.  
Le chantier test est totalement indépendant !

Si le garage te plaît, tu le ramènes dans le chantier principal.  
Si le garage est moche, tu le détruis. **Simple !**

---

## 🚀 Les commandes de base pour les branches

### 1️⃣ Voir toutes tes branches

```bash
git branch
```

**En français :** "Montre-moi tous mes chantiers"

**Résultat :**

```
* main
  test-extension
```

L'étoile `*` indique sur quel chantier tu es actuellement.

**Analogie chantier :** C'est comme avoir une liste de tous tes chantiers en cours.

---

### 2️⃣ Créer une nouvelle branche

```bash
git branch nom-de-la-branche
```

**Exemple :**

```bash
git branch test-garage
```

**En français :** "Ouvre un nouveau chantier parallèle qui s'appelle `test-garage`"

**Analogie chantier :** Tu ouvres un nouveau terrain à côté pour expérimenter.

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
git switch test-garage
```

**En français :** "Je vais bosser sur le chantier `test-garage`"

**Analogie chantier :** Tu quittes le chantier principal et tu vas sur le chantier parallèle.

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
git switch -c test-garage
```

**En français :** "Ouvre un nouveau chantier `test-garage` et vas-y direct"

**Analogie chantier :** Tu ouvres un nouveau terrain et tu t'y téléportes instantanément.

**C'est la commande que tu vas utiliser 90% du temps !** 🔥

---

## 🧪 Exemple pratique complet

Allez, on fait un vrai exemple avec ton projet `mon-site`.

### Étape 1 : Vérifie sur quelle branche tu es

```bash
git branch
```

**Résultat :**

```
* main
```

Tu es sur le chantier principal. 🏠

---

### Étape 2 : Crée une nouvelle branche pour tester quelque chose

```bash
git switch -c ajout-formulaire
```

**Traduction :** "Ouvre un chantier parallèle pour tester l'ajout d'un formulaire"

**Résultat :**

```
Switched to a new branch 'ajout-formulaire'
```

---

### Étape 3 : Travaille sur cette branche

Modifie ton fichier `index.html` :

```html
<h1>Bienvenue sur mon site !</h1>
<p>Je m'appelle Kévin et je construis des sites comme un chef !</p>

<form>
  <input type="text" placeholder="Ton nom">
  <button>Envoyer</button>
</form>
```

Sauvegarde ton travail :

```bash
git add index.html
git commit -m "Ajout du formulaire de contact"
```

**Ce qui se passe :**  
Tu viens de prendre une photo sur le chantier parallèle `ajout-formulaire`.  
**Ton chantier principal (`main`) n'a PAS bougé !**

---

### Étape 4 : Retourne sur le chantier principal

```bash
git switch main
```

**Maintenant, ouvre ton fichier `index.html`...**

💥 **MAGIE !**  
Le formulaire a disparu ! Tu es revenu sur le chantier principal où il n'y a pas de formulaire !

---

### Étape 5 : Reviens sur le chantier parallèle

```bash
git switch ajout-formulaire
```

**Ouvre à nouveau `index.html`...**

🎉 **Le formulaire est de retour !**

**Tu vois le pouvoir des branches ?**  
Tu peux passer d'un chantier à l'autre **instantanément** ! ⚡

---

## 🎯 Les règles d'or des branches

### ✅ Règle 1 : Une branche = Une fonctionnalité

Ne mets pas 50 trucs différents dans une seule branche.

**Exemples de bonnes branches :**
- `ajout-formulaire-contact`
- `correction-bug-menu`
- `amelioration-design-footer`

**Exemples de mauvaises branches :**
- `mes-modifs` ❌ (Trop vague)
- `test` ❌ (On sait pas ce que tu testes)
- `branche1` ❌ (Aucun sens)

**Pense au chantier :**  
Un chantier = Un boulot précis (construire un garage, pas "faire des trucs")

---

### ✅ Règle 2 : Donne des noms clairs

Utilise des noms descriptifs :
- En minuscules
- Avec des tirets `-` pour séparer les mots
- En français ou en anglais (choisis et reste cohérent)

**Bons exemples :**
```
ajout-page-contact
correction-bug-connexion
test-nouveau-design
```

---

### ✅ Règle 3 : Sauvegarde avant de changer de branche

**ATTENTION !**

Avant de faire `git switch`, assure-toi d'avoir fait un `git commit` !

**Pourquoi ?**

Imagine : tu es sur un chantier, tu poses des briques...  
Si tu changes de chantier AVANT de prendre une photo...  
Tes briques vont suivre avec toi ! 😱

**La bonne pratique :**

```bash
git add .
git commit -m "Travail en cours"
git switch autre-branche
```

Toujours sauvegarder avant de changer de chantier ! 📸

---

## 🔑 Antisèche : Les commandes des chantiers parallèles

| Commande | Ce qu'elle fait | Analogie chantier |
|----------|-----------------|-------------------|
| `git branch` | Voir tous les chantiers | Liste de tous tes terrains |
| `git branch nom` | Créer un nouveau chantier | Acheter un nouveau terrain |
| `git switch nom` | Aller sur un chantier | Te téléporter sur un terrain |
| `git switch -c nom` | Créer ET aller sur un chantier | Acheter un terrain et y aller direct |
| `git branch -d nom` | Supprimer un chantier | Fermer un terrain (on verra ça plus tard) |

---

## 🎮 Exercice : À toi de jouer !

**Mission : Crée et utilise ta première branche**

1. Va dans ton projet `mon-portfolio`
2. Vérifie sur quelle branche tu es avec `git branch`
3. Crée une nouvelle branche `ajout-description` avec `git switch -c ajout-description`
4. Modifie `index.html` : ajoute une description de toi (2-3 lignes)
5. Sauvegarde avec `git add .` puis `git commit -m "Ajout de ma description"`
6. Retourne sur la branche principale avec `git switch main`
7. Ouvre `index.html` → Ta description a disparu ! (normal)
8. Retourne sur ta branche avec `git switch ajout-description`
9. Ouvre `index.html` → Ta description est revenue ! 🎉

**Si t'as réussi, t'es un CHEF DE CHANTIER MULTI-TERRAINS ! 💪**

---

## 🧠 Récapitulatif : Pourquoi les branches ?

**Sans les branches :**
- 😱 Tu codes direct sur le chantier principal
- 😱 Si tu casses quelque chose, tout le monde est bloqué
- 😱 Tu peux pas tester tranquillement

**Avec les branches :**
- 😎 Tu crées un chantier parallèle pour tester
- 😎 Si ça marche pas, tu supprimes et c'est fini
- 😎 Ton chantier principal reste toujours fonctionnel
- 😎 Tu peux travailler en équipe sans conflit

**Les branches, c'est la liberté totale ! 🚀**

---

## 💬 Citation du jour

> "Un bon maçon ne teste jamais une nouvelle technique sur le chantier principal.  
> Il ouvre un chantier parallèle, teste, et décide après."
> 
> — Le Chef de Chantier du Code 🧱

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 04**, tu vas apprendre le truc le plus important :

- 🔀 **Fusionner** deux chantiers (merge)
- 🎯 Ramener ton travail du chantier parallèle vers le chantier principal
- 🤯 Gérer les situations où deux ouvriers ont modifié la même chose

**Prépare-toi, ça va être épique ! 🔥**

---

**Maintenant, va créer des chantiers parallèles ! 🚀**