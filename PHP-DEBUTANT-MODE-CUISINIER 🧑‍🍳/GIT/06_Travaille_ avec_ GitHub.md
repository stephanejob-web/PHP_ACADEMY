# 🌐 Leçon 06 : Mettre tes recettes sur Internet (GitHub)

## Salut chef connecté ! 🧙‍♂️☁️

Jusqu'ici, tu as travaillé sur ton **livre de recettes local** (ton ordinateur).  
Mais imagine...

😱 **Ton PC plante. Toutes tes recettes sont perdues.**  
😱 **Tu veux cuisiner depuis un autre ordinateur ? Impossible.**  
😱 **Tu veux montrer tes recettes à un recruteur ? Tu dois envoyer un gros fichier ZIP.**

**La solution ?**

Mettre ton livre de recettes **sur Internet** avec **GitHub** ! 🚀

Comme ça :
- ✅ Tes recettes sont sauvegardées dans le cloud (si ton PC explose, tout est safe)
- ✅ Tu peux cuisiner depuis n'importe quel ordinateur
- ✅ Tu peux partager tes recettes avec le monde entier
- ✅ Les recruteurs peuvent voir ton talent (ton portfolio de chef !)

**Aujourd'hui, tu vas apprendre à connecter ton livre local avec GitHub !**

---

## 🤔 C'est quoi GitHub ?

**GitHub, c'est comme un stockage cloud pour tes recettes.**

**Analogie cuisine :**

Imagine que tu développes des recettes. 📖

- **Livre local** = Ton cahier physique (ton PC)
- **GitHub** = Une copie de ton livre stockée sur Internet

**À chaque fois que tu notes une nouvelle version...**  
Tu synchronises ton livre avec GitHub.

**Résultat ?**  
N'importe qui peut voir tes recettes depuis n'importe où dans le monde ! 🌍

---

## 🎯 Git vs GitHub : Quelle différence ?

Beaucoup de débutants confondent. Voici la différence :

| Git | GitHub |
|-----|--------|
| 🖥️ **Logiciel local** sur ton PC | ☁️ **Site web** sur Internet |
| 📖 Note tes versions de recettes | 🌐 Stocke ces versions en ligne |
| ⚙️ Fonctionne sans Internet | 🌍 Nécessite Internet |
| 🆓 Gratuit et open source | 🆓 Gratuit (avec options payantes) |

**En résumé :**  
- **Git** = L'outil pour gérer tes recettes localement
- **GitHub** = Le site pour stocker tes recettes en ligne

**Autres alternatives à GitHub :**  
GitLab, Bitbucket... Mais GitHub est le plus populaire (utilisé par Microsoft, Google, etc.) 🌟

---

## 🏗️ Les 4 concepts clés

Pour travailler avec GitHub, tu dois comprendre **4 concepts** :

### 1️⃣ Le repository (repo)

**C'est quoi ?** Un livre de recettes sur GitHub.

**Analogie cuisine :** C'est ton livre de recettes en ligne avec toutes les versions.

**Exemple :** `https://github.com/ton-nom/mes-recettes`

---

### 2️⃣ Remote (distant)

**C'est quoi ?** Le lien entre ton livre local et ton livre GitHub.

**Analogie cuisine :** C'est l'adresse de ton livre en ligne.

**Commande :**
```bash
git remote add origin https://github.com/ton-nom/mes-recettes.git
```

**Traduction :** *"Git, voici l'adresse de mon livre en ligne. Appelle-le 'origin'."*

---

### 3️⃣ Push (pousser)

**C'est quoi ?** Envoyer tes nouvelles versions vers GitHub.

**Analogie cuisine :** Synchroniser tes nouvelles recettes vers le cloud.

**Commande :**
```bash
git push
```

**Traduction :** *"Envoie toutes mes nouvelles versions sur GitHub !"*

---

### 4️⃣ Pull (tirer)

**C'est quoi ?** Récupérer les versions de GitHub vers ton PC.

**Analogie cuisine :** Télécharger les nouvelles recettes du cloud vers ton livre local.

**Commande :**
```bash
git pull
```

**Traduction :** *"Télécharge toutes les nouvelles versions depuis GitHub !"*

---

## 🚀 Créer ton compte GitHub

Avant de commencer, tu dois créer un compte GitHub (c'est gratuit !).

**Étapes :**

1. Va sur **https://github.com**
2. Clique sur **Sign up** (S'inscrire)
3. Choisis un nom d'utilisateur (ton pseudo de chef !)
4. Entre ton email
5. Crée un mot de passe
6. Valide ton compte

**Conseil pro :** Choisis un nom pro (ex: `kevin-dev`, `sophie-coder`), pas `dark-killer-666` 😅

**C'est bon ? Tu as ton compte ? On continue !**

---

## 📦 Créer ton premier repository sur GitHub

Maintenant, tu vas créer ton livre en ligne sur GitHub.

### Étape 1 : Sur le site GitHub

1. Connecte-toi sur **https://github.com**
2. Clique sur le **+** en haut à droite
3. Clique sur **New repository**
4. Donne un nom : `mon-site`
5. Laisse tout par défaut
6. Clique sur **Create repository**

**C'est fait ! Tu as créé ton livre de recettes en ligne ! 🎉**

---

### Étape 2 : Connecter ton livre local à GitHub

GitHub va t'afficher des instructions. Tu vas utiliser celles-ci :

**Si tu as DÉJÀ un projet local** (c'est ton cas) :

```bash
git remote add origin https://github.com/ton-nom/mon-site.git
git branch -M main
git push -u origin main
```

**Décryptage :**

| Commande | Ce qu'elle fait |
|----------|-----------------|
| `git remote add origin URL` | Connecte ton livre local à GitHub |
| `git branch -M main` | Renomme ta version principale en "main" (standard actuel) |
| `git push -u origin main` | Envoie toutes tes versions vers GitHub pour la première fois |

**Analogie cuisine :**  
Tu donnes l'adresse de ton livre en ligne à Git et tu synchronises toutes tes recettes !

---

## 🧪 Exemple pratique complet

On va prendre ton projet `mon-site` et le mettre sur GitHub.

### Étape 1 : Vérifie que tout est sauvegardé localement

```bash
git status
```

**Résultat :**
```
nothing to commit, working tree clean
```

Parfait ! ✅

---

### Étape 2 : Connecte ton projet à GitHub

Va dans ton projet :
```bash
cd mon-site
```

Connecte-le à GitHub (remplace `ton-nom` par TON nom d'utilisateur GitHub) :

```bash
git remote add origin https://github.com/ton-nom/mon-site.git
```

**Traduction :** *"Git, voici l'adresse de mon livre en ligne !"*

---

### Étape 3 : Vérifie que la connexion est faite

```bash
git remote -v
```

**Résultat :**
```
origin  https://github.com/ton-nom/mon-site.git (fetch)
origin  https://github.com/ton-nom/mon-site.git (push)
```

**Traduction :** *"OK chef ! Je suis connecté à GitHub !"*

---

### Étape 4 : Envoie tout sur GitHub

```bash
git push -u origin main
```

**Ce qui se passe :**  
Git envoie TOUTES tes versions sur GitHub ! 🚀

**Résultat :**
```
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Writing objects: 100% (6/6), 512 bytes | 512.00 KiB/s, done.
To https://github.com/ton-nom/mon-site.git
 * [new branch]      main -> main
```

**Traduction :** *"J'ai envoyé 6 versions sur GitHub ! Tout est en ligne !"*

---

### Étape 5 : Vérifie sur le site GitHub

Va sur **https://github.com/ton-nom/mon-site**

🎉 **Tu vois tes recettes en ligne !** 🎉

Tu peux voir :
- Tous tes fichiers
- Toutes tes versions
- L'historique complet

**Bravo ! Ton livre de recettes est maintenant sur Internet ! 🌍**

---

## 🔄 Le workflow quotidien avec GitHub

Maintenant que ton projet est sur GitHub, voici le **cycle quotidien** :

```
1. Tu travailles sur ton PC (tu testes des recettes)
        ↓
2. git add . (tu prépares)
        ↓
3. git commit -m "..." (tu notes la version localement)
        ↓
4. git push (tu synchronises avec GitHub) 🚀
        ↓
5. Recommence ! 🔁
```

**Analogie cuisine :**  
Tu testes → Tu notes la version → Tu la synchronises dans le cloud → Tu continues !

---

## 📥 Cloner un projet (récupérer un livre de recettes)

Imagine : ton PC a planté. 💥  
Ou tu veux cuisiner depuis un autre ordinateur.

**Pas de panique ! Tes recettes sont sur GitHub !**

### La commande magique : `git clone`

```bash
git clone https://github.com/ton-nom/mon-site.git
```

**Traduction :** *"Télécharge tout le livre depuis GitHub vers mon PC !"*

**Analogie cuisine :**  
Tu récupères toutes tes recettes du cloud et tu reconstruis ton livre sur ton nouveau PC.

**Résultat :**  
Tu as un dossier `mon-site` avec TOUT ton code et TOUT l'historique ! 🎉

---

## 🔄 Synchroniser avec `git pull`

Imagine : tu cuisines depuis deux ordinateurs.

- 💻 **PC 1** : Tu ajoutes une recette et tu push sur GitHub
- 🖥️ **PC 2** : Comment récupérer cette nouvelle recette ?

**Réponse :** `git pull`

```bash
git pull
```

**Traduction :** *"Télécharge toutes les nouvelles versions depuis GitHub !"*

**Analogie cuisine :**  
Un collègue a ajouté une recette de dessert dans le livre en ligne. Tu télécharges les nouvelles pages pour voir le dessert.

---

## 🎯 Les commandes essentielles avec GitHub

| Commande | Ce qu'elle fait | Analogie cuisine | Quand l'utiliser |
|----------|-----------------|------------------|------------------|
| `git remote add origin URL` | Connecte ton projet à GitHub | Donner l'adresse du livre en ligne | **1 fois** au début |
| `git push` | Envoie tes commits vers GitHub | Synchroniser les recettes dans le cloud | **Tout le temps** après un commit |
| `git pull` | Récupère les commits depuis GitHub | Télécharger les nouvelles recettes | Avant de commencer à cuisiner |
| `git clone URL` | Télécharge un projet depuis GitHub | Récupérer tout un livre de recettes | Pour récupérer un projet |

---

## ✅ Les règles d'or avec GitHub

### Règle 1 : Push régulièrement 📤

Ne garde pas tes recettes que sur ton PC pendant des semaines.  
Push tous les jours (ou plusieurs fois par jour).

**Pourquoi ?**  
Si ton PC crashe, tu perds tout ! ☠️

**Analogie cuisine :**  
Synchronise ton livre dans le cloud tous les jours, pas une fois par mois !

---

### Règle 2 : Pull avant de travailler 📥

Si tu cuisines en équipe ou depuis plusieurs PC, fais TOUJOURS `git pull` avant de commencer.

**Pourquoi ?**  
Pour avoir la dernière version des recettes !

**Analogie cuisine :**  
Télécharge les dernières recettes avant de commencer à cuisiner.

---

### Règle 3 : Commit AVANT de push 💾

Tu ne peux pas push si tu n'as pas fait de commit avant.

**Cycle correct :**
```bash
git add .
git commit -m "..."
git push
```

**Analogie cuisine :**  
Tu notes une version AVANT de la synchroniser dans le cloud (logique !).

---

## 🎮 Exercice : À toi de jouer !

**Mission : Mets ton projet sur GitHub**

1. Crée un compte sur **https://github.com** (si pas encore fait)
2. Crée un nouveau repository appelé `mon-portfolio`
3. Va dans ton projet local `mon-portfolio` sur ton PC
4. Connecte-le à GitHub avec `git remote add origin URL` (remplace URL par l'adresse de ton repo)
5. Vérifie la connexion avec `git remote -v`
6. Envoie tout sur GitHub avec `git push -u origin main`
7. Va sur GitHub et admire tes recettes en ligne ! 🎉
8. Modifie `index.html` localement (ajoute quelque chose)
9. Sauvegarde avec `git add .` et `git commit -m "Nouvelle version"`
10. Envoie sur GitHub avec `git push`
11. Rafraîchis la page GitHub → Ta nouvelle version est là ! 🚀

**Si t'as réussi, t'es un CHEF CONNECTÉ AU CLOUD ! 💪**

---

## 🔑 Antisèche : GitHub en un coup d'œil

| Action | Commande | Explication rapide |
|--------|----------|-------------------|
| **Première fois** | `git remote add origin URL` | Connecte ton livre à GitHub |
| **Envoyer** | `git push` | Envoie tes versions vers GitHub |
| **Récupérer** | `git pull` | Télécharge les nouvelles versions depuis GitHub |
| **Cloner** | `git clone URL` | Télécharge un livre complet |
| **Vérifier** | `git remote -v` | Voir l'URL de ton GitHub |

---

## 💬 Citation du jour

> "Un bon chef ne garde jamais toutes ses recettes dans un seul cahier.  
> Il les met dans le cloud. Toujours."
> 
> — Le Chef Étoilé du Code 🍳

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 07** (la dernière !), tu vas apprendre à **collaborer en équipe** :

- 👥 Cuisiner à plusieurs sur le même livre
- 🔀 Les Pull Requests (demander à intégrer tes recettes)
- 🤝 Le workflow professionnel des grandes cuisines
- ⭐ Comment contribuer à des livres de recettes open source

**Prépare-toi pour le niveau PRO ! 🔥**

---

**Maintenant, va mettre tes recettes en ligne ! 🚀**