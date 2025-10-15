

🌿 Leçon 03 : Les parties parallèles (branches)
Salut champion ! 🧙‍♂️🎮

Dans la leçon 02, t'as appris à vérifier tes stats avec Git.
Maintenant, on va apprendre un truc DE MALADE...

Imagine :

Tu joues à un RPG. Ton perso est niveau 50. Tout marche bien. ⚔️
Mais tu veux tester deux builds différents :

- **Build 1 :** Full attaque (force + épée)
- **Build 2 :** Full magie (intelligence + sorts)

**Le problème ?**

Si tu réinitialises tes stats pour tester le build attaque... et que ça te plaît pas... 😱
Tu dois TOUT recommencer ! Des heures de farm perdues !

**La solution ?**

Tu crées deux sauvegardes parallèles :

- **Save A :** Tu testes le build attaque
- **Save B :** Tu testes le build magie

Tu compares. Tu choisis le meilleur. Et tu supprimes l'autre !

**Avec Git, c'est exactement ça : les BRANCHES !** 🌿

---

## 🤔 C'est quoi une branche ?

Une branche, c'est une **partie parallèle** où tu peux expérimenter sans risque.

**Analogie jeu :**

Tu as ta partie principale (ton perso qui fonctionne).
Tu veux tester une nouvelle stratégie ? Tu crées une save parallèle.

- ✅ **Si ton idée marche** → Tu l'intègres à ta partie principale
- ❌ **Si ton idée marche pas** → Tu supprimes la save parallèle et tu oublies tout

**Résultat ?**
Ta partie principale reste toujours intacte ! 💪

---

## 🎯 Pourquoi les branches, c'est GÉNIAL ?

### 1️⃣ Tu peux expérimenter sans risque 🧪

Tu veux tester un nouveau système de jeu ?
Tu crées une branche. Tu testes. Si ça casse tout, tu supprimes la branche.
Ton code principal reste intact !

### 2️⃣ Tu peux jouer en équipe sans se marcher dessus 👥

Imagine un raid MMO avec 5 joueurs qui codent le même jeu :

- **Marc** travaille sur le système de combat → Branche "combat"
- **Sophie** travaille sur l'inventaire → Branche "inventaire"
- **Alex** travaille sur la map → Branche "map"

Chacun joue sur sa save parallèle.
Personne ne gêne personne !

À la fin, on fusionne tout. 🎉

### 3️⃣ C'est comme ça que bossent TOUS les pros 💼

Dans les studios de jeux, PERSONNE ne code directement sur la version principale.
Tout le monde crée des branches :

- Branche "nouveau-boss"
- Branche "correction-bug"
- Branche "test-level-design"

C'est LA manière professionnelle de travailler !

---

## 🎮 Comprendre les branches avec un dessin

Imagine que tu développes un jeu :

```
        🎮 Partie principale (main)
        |
        | Save 1 : Système de base
        |
        | Save 2 : Premier niveau
        |
        | Save 3 : Boss ajouté
```

Maintenant, tu veux tester une nouvelle fonctionnalité :

```
        🎮 Partie principale (main)
        |
        | Save 1 : Système de base
        |
        | Save 2 : Premier niveau
        |
        | Save 3 : Boss ajouté
        |\
        | \_____ 🧪 Partie test (nouveau-systeme)
        |        |
        |        | Save 4 : Système de magie ajouté
        |        |
        |        | Save 5 : Sorts testés
```

**Tu vois ?**
La partie principale continue normalement.
La partie test est totalement indépendante !

Si le système de magie te plaît, tu le ramènes dans la partie principale.
Si c'est nul, tu supprimes la save test. Simple !

---

## 🚀 Les commandes de base pour les branches

### 1️⃣ Voir toutes tes saves parallèles

```bash
git branch
```

**En français :** "Montre-moi toutes mes parties sauvegardées"

**Résultat :**

```
* main
  test-nouveau-systeme
```

L'étoile `*` indique sur quelle partie tu joues actuellement.

**Analogie jeu :** C'est comme avoir une liste de tous tes slots de sauvegarde.

---

### 2️⃣ Créer une nouvelle branche

```bash
git branch nom-de-la-branche
```

**Exemple :**

```bash
git branch test-magie
```

**En français :** "Crée une nouvelle save parallèle qui s'appelle test-magie"

**Analogie jeu :** Tu crées un nouveau slot de sauvegarde pour expérimenter.

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
git switch test-magie
```

**En français :** "Je vais jouer sur la save test-magie"

**Analogie jeu :** Tu quittes ta partie principale et tu charges la save parallèle.

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
git switch -c test-magie
```

**En français :** "Crée une nouvelle save test-magie et charge-la direct"

**Analogie jeu :** Tu crées un nouveau slot de save et tu commences à jouer dessus immédiatement.

**C'est la commande que tu vas utiliser 90% du temps !** 🔥

---

## 🧪 Exemple pratique complet

Allez, on fait un vrai exemple avec ton projet `mon-site`.

### Étape 1 : Vérifie sur quelle partie tu es

**Dans le terminal :**

```bash
git branch
```

**Résultat :**

```
* main
```

Tu es sur la partie principale. 🎮

---

### Étape 2 : Crée une nouvelle branche pour tester quelque chose

```bash
git switch -c ajout-formulaire
```

**Traduction :** "Crée une save parallèle pour tester l'ajout d'un formulaire"

**Résultat :**

```
Switched to a new branch 'ajout-formulaire'
```

---

### Étape 3 : Travaille sur cette branche

**🖱️ MÉTHODE FACILE :**

1. Va dans ton dossier `mon-site`
2. Ouvre `index.html` avec le Bloc-notes
3. Modifie le contenu :

```html
<h1>Bienvenue sur mon site !</h1>
<p>Je m'appelle Kevin et je code comme un pro gamer !</p>

<form>
  <input type="text" placeholder="Ton nom">
  <button>Envoyer</button>
</form>
```

4. Sauvegarde (Ctrl+S)

**Dans le terminal :**

```bash
git add index.html
git commit -m "Ajout du formulaire de contact"
```

**Ce qui se passe :**
Tu viens de sauvegarder sur la partie parallèle `ajout-formulaire`.
Ta partie principale (`main`) n'a PAS bougé !

---

### Étape 4 : Retourne sur la partie principale

```bash
git switch main
```

**Maintenant, ouvre ton fichier index.html...**

💥 **MAGIE !**
Le formulaire a disparu ! Tu es revenu sur la partie principale où il n'y a pas de formulaire !

---

### Étape 5 : Reviens sur la partie parallèle

```bash
git switch ajout-formulaire
```

**Ouvre à nouveau index.html...**

🎉 **Le formulaire est de retour !**

**Tu vois le pouvoir des branches ?**
Tu peux passer d'une partie à l'autre instantanément ! ⚡

---

## 🎯 Les règles d'or des branches

### ✅ Règle 1 : Une branche = Une fonctionnalité

Ne mets pas 50 trucs différents dans une seule branche.

**Exemples de bonnes branches :**

- `ajout-systeme-combat`
- `correction-bug-inventaire`
- `amelioration-graphismes`

**Exemples de mauvaises branches :**

- `mes-modifs` ❌ (Trop vague)
- `test` ❌ (On sait pas ce que tu testes)
- `branche1` ❌ (Aucun sens)

**Pense au jeu :**
Une save = Un build précis (attaque pure), pas "faire des trucs"

---

### ✅ Règle 2 : Donne des noms clairs

Utilise des noms descriptifs :

- En minuscules
- Avec des tirets `-` pour séparer les mots
- En français ou en anglais (choisis et reste cohérent)

**Bons exemples :**

```
ajout-niveau-boss
correction-bug-collision
test-nouveau-personnage
```

---

### ✅ Règle 3 : Sauvegarde avant de changer de branche

⚠️ **ATTENTION !**

Avant de faire `git switch`, assure-toi d'avoir fait un `git commit` !

**Pourquoi ?**

Imagine : tu es en train de coder un boss...
Si tu changes de branche AVANT de sauvegarder...
Ton code va suivre avec toi ! 😱

**La bonne pratique :**

```bash
git add .
git commit -m "Travail en cours sur le boss"
git switch autre-branche
```

**Toujours sauvegarder avant de changer de partie !** 💾

---

## 🔑 Antisèche : Les commandes des parties parallèles

| Commande | Ce qu'elle fait | Analogie jeu |
|----------|----------------|--------------|
| `git branch` | Voir toutes les parties | Liste de tous tes slots de save |
| `git branch nom` | Créer une nouvelle partie | Créer un nouveau slot de save |
| `git switch nom` | Charger une partie | Charger un slot de save |
| `git switch -c nom` | Créer ET charger une partie | Créer un slot et jouer dessus direct |
| `git branch -d nom` | Supprimer une partie | Effacer un slot de save (on verra ça plus tard) |

---

## 🎮 Exercice : À toi de jouer !

**Mission :** Crée et utilise ta première branche

### 📝 Étapes détaillées (pour débutants) :

**1️⃣ Va dans ton projet `mon-portfolio`**
   - Ouvre le dossier
   - Clique dans la barre d'adresse → tape `cmd` → Entrée

**2️⃣ Vérifie sur quelle branche tu es**
   - Tape : `git branch`
   - Tu dois voir `* main`

**3️⃣ Crée une nouvelle branche**
   - Tape : `git switch -c ajout-description`
   - Message : "Switched to a new branch 'ajout-description'"

**4️⃣ Modifie index.html**
   - Ouvre `index.html` avec le Bloc-notes
   - Ajoute 2-3 lignes de description sur toi
   - Exemple : `<p>Je suis développeur junior et j'apprends Git comme un gamer !</p>`
   - Sauvegarde (Ctrl+S)

**5️⃣ Sauvegarde dans Git**
   - Tape : `git add .`
   - Tape : `git commit -m "Ajout de ma description"`

**6️⃣ Retourne sur la branche principale**
   - Tape : `git switch main`
   - Ouvre `index.html` → **Ta description a disparu !** (normal)

**7️⃣ Retourne sur ta branche**
   - Tape : `git switch ajout-description`
   - Ouvre `index.html` → **Ta description est revenue !** 🎉

**🎉 Si t'as réussi, t'es un MAÎTRE DES SAUVEGARDES PARALLÈLES !** 💪

---

## 🧠 Récapitulatif : Pourquoi les branches ?

### Sans les branches :

- 😱 Tu codes direct sur la version principale
- 😱 Si tu casses quelque chose, tout le monde est bloqué
- 😱 Tu peux pas tester tranquillement

### Avec les branches :

- 😎 Tu crées une save parallèle pour tester
- 😎 Si ça marche pas, tu supprimes et c'est fini
- 😎 Ta version principale reste toujours fonctionnelle
- 😎 Tu peux bosser en équipe sans conflit

**Les branches, c'est la liberté totale !** 🚀

---

## 💬 Citation du jour

> "Un bon gamer ne teste jamais un nouveau build sur sa save principale.
> Il crée une save parallèle, teste, et décide après."
>
> — Le Maître du Jeu 🎮

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 04**, tu vas apprendre le truc le plus important :

- 🔀 Fusionner deux parties (merge)
- 🎯 Ramener ton travail de la save parallèle vers la save principale
- 🤯 Gérer les situations où deux joueurs ont modifié la même chose

Prépare-toi, ça va être épique ! 🔥

**Maintenant, va créer des parties parallèles !** 🚀
