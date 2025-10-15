⚔️ Leçon 01 : Ta première partie (ou pourquoi Git va te sauver la vie)
Salut à toi, futur maître du jeu ! 🧙‍♂️🎮

Bon, soyons honnêtes...

T'as déjà perdu ta sauvegarde dans un jeu ?
Genre... tu joues 3 heures d'affilée, tu fais une mauvaise manip, et POUF 💥
Game Over. Tout est perdu.

Ou pire encore...

T'as déjà eu 50 versions d'un même fichier ?

```
mon-site.html
mon-site-v2.html
mon-site-v2-final.html
mon-site-v2-final-VRAIMENT-FINAL.html
mon-site-v2-final-VRAIMENT-FINAL-cette-fois-cest-la-bonne.html
```

😭 Ça suffit !

Aujourd'hui, je vais t'apprendre à utiliser Git.
Et crois-moi, après ça, tu ne perdras plus JAMAIS ton travail.

---

## 🧑‍🤝‍🧑 Bonus : Qui a fait quoi dans la partie ?

Quand tu fais un commit, Git enregistre automatiquement :

| Info | Exemple | Pourquoi c'est utile |
|------|---------|---------------------|
| 👤 Ton pseudo | xXKevinXx | Pour savoir qui a joué |
| 📧 Ton email | kevin@mail.com | Pour pouvoir te contacter si besoin |
| 📅 La date et l'heure | 12 oct 2025, 10h30 | Pour savoir quand la partie a été sauvegardée |
| 💬 Ton message | "Niveau 1 terminé" | Pour savoir ce qui a été fait |

**Exemple concret :**

Sur un vrai MMO, si le chef de guilde demande :
*"Qui a vaincu le boss final ? C'était quand ?"*

On ouvre le journal de guilde et on lit :
*"Boss vaincu par Marc le 5 octobre à 14h00"*

**Avec Git, c'est pareil !**

Si ton coéquipier demande :
*"Qui a ajouté le système de combat ? C'était quand ?"*

On tape `git log` et on voit :
*"Ajout du système de combat - par Sophie le 10 octobre à 9h15"*

**Résultat ?**
✅ Tout le monde sait qui a fait quoi
✅ On peut demander des explications si besoin
✅ On peut suivre l'évolution du projet
✅ Si y'a un bug, on sait d'où ça vient

---

## 🤔 Mais attends... c'est quoi Git exactement ?

**Réponse rapide :**
Git, c'est comme un système de **sauvegarde automatique** dans un RPG ⚔️

Tu sais quand tu joues à un RPG et que tu sauvegardes à chaque étape importante ?

- **Save 1** : Niveau 1 terminé ✅
- **Save 2** : Boss du château vaincu ✅
- **Save 3** : Épée légendaire obtenue ✅

**Pourquoi tu fais ça ?**

Parce que si tu meurs contre le boss final, tu peux :

1. Retrouver exactement où tu étais
2. Voir ce que tu avais dans ton inventaire
3. Revenir en arrière et choisir une autre stratégie

Eh bien avec Git, c'est **EXACTEMENT pareil** avec ton code ! 🚀

---

## ⚠️ STOP ! Git ≠ Ctrl+S

Attention, écoute bien ça :

Beaucoup de débutants pensent :
❌ "Bah Git c'est juste pour sauvegarder mon code, je peux faire Ctrl+S non ?"
❌ "Ou copier mon dossier sur une clé USB ?"

🔥 **NON ! Git c'est BEAUCOUP plus puissant que ça !**

Laisse-moi t'expliquer avec une histoire vraie...

---

## 📖 L'histoire du gamer Kevin qui a tout perdu (et qui s'en est sorti grâce à Git)

**Lundi matin - 9h00**
Kevin code son jeu vidéo. Tout marche nickel.
Il sauvegarde sa partie (un commit Git) :
✅ **"Niveau 1 terminé - le héros peut marcher et sauter"**

**Lundi après-midi - 14h00**
Kevin ajoute un nouveau niveau (une nouvelle fonctionnalité).
Il sauvegarde encore :
✅ **"Niveau 2 ajouté - boss du château"**

**Mardi matin - 10h00**
Kevin veut ajouter des power-ups (modifier le système de jeu). Il bidouille pendant 2 heures...

**Mardi midi - 12h00**
💥 **CATASTROPHE !**
Kevin a tellement cassé le code que plus rien ne marche.
Le jeu crash au démarrage. GAME OVER.

### 😱 Sans Git, Kevin est MORT

Il devrait :

1. Se rappeler de TOUT ce qu'il a modifié (impossible)
2. Tout recoder à la main (des heures de travail)
3. Pleurer devant son écran 😭

### 😎 Avec Git, Kevin est TRANQUILLE

Il ouvre son journal de sauvegardes :

```bash
git log --oneline
```

Il voit :

```
a1b2c3d Niveau 2 ajouté - boss du château
z9y8x7w Niveau 1 terminé - le héros peut marcher et sauter
```

Il charge sa sauvegarde du niveau 1 :

```bash
git checkout z9y8x7w
```

**BOOM !** 💥
Il est de retour à lundi matin, quand tout marchait nickel !

---

## 🎯 Donc Git, c'est quoi VRAIMENT ?

**Git c'est :**

### 1️⃣ Un système de sauvegarde multiples 💾

Tu peux revenir à n'importe quelle sauvegarde de ta partie.

### 2️⃣ Un journal de bord complet 📜

Tu sais qui a fait quoi, quand, et pourquoi.

### 3️⃣ Un moyen de tester sans risque 🧪

Tu veux tester deux builds différents ? Tu crées deux sauvegardes parallèles (des "branches").
Tu regardes ce qui marche le mieux → tu gardes le meilleur.
Ta sauvegarde principale reste intacte !

### 4️⃣ Un outil pour jouer en équipe 👥

Imagine un raid en MMO avec plusieurs joueurs :

- **Marc** fait le tank → Il sauvegarde : "Marc - Défense du groupe améliorée"
- **Sophie** joue healer → Elle sauvegarde : "Sophie - Sorts de soin ajoutés"
- **Alex** est DPS → Il sauvegarde : "Alex - Système d'attaque critique ajouté"

**Résultat ?**
Le chef de raid peut consulter le journal et voir qui a fait quoi et quand !

Si y'a un problème avec les soins, il sait direct que c'est Sophie qu'il faut appeler.
Si les attaques bug, c'est Alex.

**Avec Git, c'est EXACTEMENT pareil !**
Chaque développeur signe son travail. Si y'a un bug, on sait qui a ajouté quoi !

---

## 🎮 L'analogie du jeu vidéo (pour bien comprendre)

Imagine que tu développes un jeu :

| Dans le jeu | Avec Git |
|-------------|----------|
| 💾 Sauvegarder ta partie | `git commit` |
| 📋 Consulter tes sauvegardes | `git log` |
| ⏪ Charger une ancienne sauvegarde | `git checkout` |
| 🎲 Créer une partie parallèle (pour tester) | `git branch` |
| 🔀 Fusionner deux parties | `git merge` |

Tu vois ? C'est exactement comme dans un RPG ! ⚔️

---

## 🚀 OK, passons à la pratique !

Maintenant que tu as compris POURQUOI Git est génial, on va apprendre à l'utiliser.

## 🎯 Les 3 commandes de base du gamer

Pour sauvegarder ta partie, tu fais 3 actions :

### 1️⃣ `git init` → Créer ton fichier de sauvegarde

```bash
git init
```

**En français :** "Je commence une nouvelle partie, je crée mon fichier de sauvegarde"

**Analogie jeu :** C'est comme créer un nouveau profil de joueur dans un RPG.

Tu fais ça **UNE SEULE FOIS** au début de ton projet.

### 2️⃣ `git add` → Choisir ce que tu veux sauvegarder

```bash
git add index.html
```

Ou pour tout sauvegarder d'un coup :

```bash
git add .
```

**En français :** "Je veux sauvegarder ces éléments-là de ma partie"

**Analogie jeu :** Tu ne sauvegardes pas TOUT à chaque fois. Tu sélectionnes ce qui a changé (ton niveau, ton inventaire, tes stats).

### 3️⃣ `git commit` → Sauvegarder avec un nom

```bash
git commit -m "Niveau 1 terminé"
```

**En français :** "Je sauvegarde ma partie et je l'appelle : 'Niveau 1 terminé'"

**Analogie jeu :** Tu enregistres ta sauvegarde avec :
- 📝 Un nom : "Niveau 1 terminé"
- ✍️ Ton pseudo : "xXKevinXx"
- 📅 La date et l'heure : "12/10/2025 - 10h30"

Le `-m` veut dire "message".
C'est le nom de ta sauvegarde pour te souvenir de ce que tu as fait.

---

## 🎯 Exemple complet pas à pas

Imagine : tu veux créer un site web super simple.

On y va étape par étape, comme dans un tutoriel de jeu :

### 📂 Étape 1 : Créer ton dossier de jeu

**🖱️ MÉTHODE FACILE (avec la souris) :**

1. **Ouvre ton explorateur de fichiers** (comme d'habitude sur Windows)
   - 💡 C'est l'icône de dossier jaune en bas de ton écran
   
2. **Va où tu veux créer ton projet**
   - Par exemple : `Documents` ou `Bureau`
   
3. **Clic droit** → **Nouveau** → **Dossier**

4. **Nomme le dossier :** `mon-site`

5. **Entre dans ce dossier** (double-clic dessus)

6. **Ouvre le terminal ICI** :
   - Clique dans la barre d'adresse en haut
   - Tape : `cmd` puis appuie sur **Entrée**
   
**TA-DA !** 🎉 Une fenêtre noire s'ouvre, c'est le terminal !
Tu es déjà DANS ton dossier `mon-site` !

---

**⌨️ MÉTHODE POUR LES PROS (avec le clavier) :**

Si tu veux quand même utiliser le terminal comme un hacker 😎 :

```bash
mkdir mon-site
```
**Traduction :** "Crée-moi un dossier vide qui s'appelle mon-site"

```bash
cd mon-site
```
**Traduction :** "Je vais dans le dossier mon-site"

💡 **Astuce :** `cd` = "Change Directory" = "Va dans ce dossier"

---

**🎯 CONSEIL :** Commence par la méthode facile avec la souris ! Une fois que tu es à l'aise, tu pourras essayer les commandes comme un pro ⚔️

### 🎮 Étape 2 : Créer ton fichier de sauvegarde

Maintenant, tape :

```bash
git init
```

💬 **Ce qui se passe dans les coulisses :**

Git crée un dossier caché `.git` (tu ne le vois pas, mais il est là).
C'est ton fichier de sauvegarde invisible qui va tout enregistrer.

**Analogie jeu :** C'est ton profil de joueur où toutes tes sauvegardes seront stockées.

🎉 **Félicitations ! Ton dossier est maintenant un projet Git !**

### ⚔️ Étape 3 : Commencer ta première quête

On va créer une page HTML toute simple (c'est ton premier niveau).

**🖱️ MÉTHODE FACILE (avec la souris) :**

1. **Clique droit dans ton dossier** `mon-site`
2. **Nouveau** → **Document texte**
3. **Renomme-le en :** `index.html`
   - ⚠️ **IMPORTANT :** Assure-toi que l'extension est bien `.html` et pas `.txt` !
   - Si tu ne vois pas les extensions, demande à ton prof de t'aider
4. **Ouvre le fichier** avec un éditeur de texte (Bloc-notes ou mieux : VS Code)
5. **Écris dedans :**
   ```html
   <h1>Bienvenue dans mon jeu !</h1>
   ```
6. **Sauvegarde** (Ctrl+S)

**TA-DA !** 🎉 Tu as créé ton premier fichier de code !

---

**⌨️ MÉTHODE POUR LES PROS (avec le terminal) :**

Dans ton terminal, tape :

```bash
echo "<h1>Bienvenue dans mon jeu !</h1>" > index.html
```

**Traduction :** "Crée un fichier index.html avec écrit `<h1>Bienvenue dans mon jeu !</h1>` dedans"

---

**🎯 CONSEIL :** Commence par la méthode avec la souris ! C'est plus rassurant quand on débute 😊

### 💾 Étape 4 : Sélectionner ce que tu veux sauvegarder

Maintenant, tu vas dire à Git : "Hé, je veux sauvegarder ce fichier !"

Tape ça :

```bash
git add index.html
```

💬 **Ce qui se passe :**

Git prépare la sauvegarde et sélectionne `index.html`.

**Analogie jeu :** Tu ouvres le menu de sauvegarde et tu coches ce que tu veux sauvegarder.

### 🎯 Étape 5 : Sauvegarder ta partie avec un nom

Maintenant, on sauvegarde pour de vrai :

```bash
git commit -m "Niveau 1 créé - page d'accueil"
```

💬 **Ce qui se passe :**

Git crée une sauvegarde de ton fichier et écrit dans le journal :
- "Niveau 1 créé - page d'accueil"
- "Par : xXKevinXx"
- "Le : 12 octobre 2025 à 10h30"

**Analogie jeu :** Tu sauvegardes ta partie avec :
- 📝 Le nom : "Niveau 1 créé"
- ✍️ Ton pseudo : "xXKevinXx"
- 📅 La date et l'heure : "12/10/2025 - 10h30"

**Pourquoi c'est important ?**

Imagine qu'il y a 5 joueurs dans ton équipe.
Si le jeu bug, le chef peut regarder le journal et voir : "Ah ! C'est Marc qui a codé ce système le 10 octobre"
Il sait qui appeler pour réparer !

Avec Git, c'est pareil :
Si y'a un bug dans le code, on peut voir qui a écrit cette ligne et quand.
Pas pour punir ! Mais pour demander : "Hé Marc, tu peux m'expliquer pourquoi t'as fait ça ?"

**C'est bon ! Ta première sauvegarde est dans le journal !** 🎉

---

## 🔄 Le cycle que tu vas répéter 1000 fois

Voilà le processus magique que tu vas faire encore et encore :

```
1. Tu codes des trucs (tu avances dans le jeu)
        ↓
2. git add . (Tu prépares la sauvegarde)
        ↓
3. git commit -m "Ce que tu as fait" (Tu sauvegardes avec un nom)
        ↓
4. Recommence ! 🔁
```

C'est exactement comme dans un RPG :
Tu joues → Tu sauvegardes → Tu continues → Tu sauvegardes → etc.

---

## 📢 Les messages de commit : les règles du bon gamer

Quand tu fais un `git commit`, ton message doit être :

✅ **Court** : pas de roman
✅ **Clair** : on comprend direct ce que t'as fait
✅ **Professionnel** : comme dans un journal de bord

### ✅ Exemples de BONS messages :

```bash
git commit -m "Niveau 1 terminé"
git commit -m "Boss du château vaincu"
git commit -m "Système de combat ajouté"
git commit -m "Épée légendaire obtenue"
```

### ❌ Exemples de messages POURRIS :

```bash
git commit -m "trucs"  ← Quels trucs ?! 😡
git commit -m "ça avance"  ← Super, mais t'as fait quoi ?
git commit -m "update"  ← Merci captain obvious 🙄
git commit -m "test"  ← Test de quoi ?!
```

**Règle d'or :** Imagine qu'un autre joueur regarde ton journal dans 6 mois. Est-ce qu'il va comprendre ce que t'as fait ?

Pense à un vrai journal de jeu :
❌ "Save 1", "Save 2" → On sait rien
✅ "Niveau 1", "Boss vaincu", "Épée obtenue" → On comprend tout !

---

## 🎮 Exercice : À toi de jouer !

**Mission :** Crée ton premier projet Git et fais ta première sauvegarde

### 📝 Méthode pas à pas (pour débutants) :

**1️⃣ Crée un dossier `mon-portfolio`**
   - Ouvre ton explorateur de fichiers (icône de dossier)
   - Va dans `Documents`
   - Clic droit → Nouveau → Dossier
   - Nomme-le : `mon-portfolio`
   - Double-clic pour entrer dedans

**2️⃣ Ouvre le terminal dans ce dossier**
   - Clique dans la barre d'adresse en haut
   - Tape : `cmd` puis Entrée
   - Une fenêtre noire s'ouvre (c'est le terminal !)

**3️⃣ Initialise Git**
   - Dans le terminal noir, tape : `git init`
   - Appuie sur Entrée
   - ✅ Ton projet Git est créé !

**4️⃣ Crée ton premier fichier**
   - Dans ton dossier `mon-portfolio`, crée un fichier texte
   - Renomme-le en : `index.html`
   - Ouvre-le avec le Bloc-notes
   - Écris dedans : `<h1>Je m'appelle [ton prénom]</h1>`
   - Sauvegarde (Ctrl+S)

**5️⃣ Prépare la sauvegarde Git**
   - Retourne dans le terminal noir
   - Tape : `git add index.html`
   - Appuie sur Entrée

**6️⃣ Sauvegarde ta partie**
   - Tape : `git commit -m "Niveau 1 créé - page d'accueil avec mon prénom"`
   - Appuie sur Entrée

**🎉 BRAVO ! Tu viens de faire ta première sauvegarde Git !**

---

### ⚡ Version rapide (pour ceux qui ont compris) :

```bash
# 1. Crée et entre dans le dossier
mkdir mon-portfolio
cd mon-portfolio

# 2. Initialise Git
git init

# 3. Crée le fichier
echo "<h1>Je m'appelle Kevin</h1>" > index.html

# 4. Prépare et sauvegarde
git add index.html
git commit -m "Niveau 1 créé - page d'accueil avec mon prénom"
```

---

**Si t'as réussi, t'es un CHAMPION !** 💪

Tu viens de faire ta première sauvegarde Git, comme un vrai pro ! 🚀

---

## 🔑 Antisèche : les commandes du gamer

| Commande | Ce qu'elle fait | Analogie jeu |
|----------|----------------|--------------|
| `git init` | Crée ton fichier de sauvegarde | Créer un nouveau profil |
| `git add nom-fichier` | Sélectionne UN élément | Cocher un élément dans le menu |
| `git add .` | Sélectionne TOUT | Tout cocher d'un coup |
| `git commit -m "..."` | Sauvegarder avec un nom | Enregistrer ta partie avec un nom |

---

## 💬 Citation du jour

> "Chaque commit est un checkpoint de ton jeu.
> Plus tu sauvegardes souvent, moins tu perdras de progression si ça crashe."
>
> — Le Maître du Jeu 🎮

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 02**, tu vas apprendre à :

- 🕰️ Consulter toutes tes sauvegardes
- 🔍 Vérifier ce qui a changé depuis la dernière sauvegarde
- ⏪ Charger une ancienne sauvegarde si t'as tout cassé

Prépare-toi, ça va être épique ! 😎

---

## 📌 Note importante pour l'installation

👉 **Git n'est pas encore installé sur ton PC ?**
Pas de panique ! Demande à ton prof de t'aider à l'installer.
Une fois que c'est fait, reviens ici et éclate-toi ! 🎯

**Maintenant, va coder !** 🚀
