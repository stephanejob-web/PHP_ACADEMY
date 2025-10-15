# 🧱 Leçon 01 : Ton premier chantier (ou pourquoi Git va te sauver la vie)

## Salut à toi, futur architecte du code ! 🧙‍♂️👷‍♂️

Bon, soyons honnêtes...

**T'as déjà perdu un fichier important ?**  
Genre... tu travailles 3 heures sur un projet, tu fais une mauvaise manip, et POUF 💥  
Tout disparaît.

Ou pire encore...

**T'as déjà eu 50 versions d'un même fichier ?**  
```
mon-site.html
mon-site-v2.html
mon-site-v2-final.html
mon-site-v2-final-VRAIMENT-FINAL.html
mon-site-v2-final-VRAIMENT-FINAL-cette-fois-cest-la-bonne.html
```

😭 **Ça suffit !**

Aujourd'hui, je vais t'apprendre à utiliser **Git**.  
Et crois-moi, après ça, tu ne perdras plus JAMAIS ton travail.

## 🧑‍🤝‍🧑 Bonus : Qui a fait quoi sur le chantier ?

Quand tu fais un commit, Git enregistre automatiquement :

| Info | Exemple | Pourquoi c'est utile |
|------|---------|----------------------|
| 👤 **Ton nom** | Kevin Dupont | Pour savoir qui a fait le travail |
| 📧 **Ton email** | kevin@mail.com | Pour pouvoir te contacter si besoin |
| 📅 **La date et l'heure** | 12 oct 2025, 10h30 | Pour savoir quand ça a été fait |
| 💬 **Ton message** | "Fondations coulées" | Pour savoir ce qui a été fait |

**Exemple concret :**

Sur un vrai chantier, si un inspecteur arrive et demande :  
*"Qui a coulé les fondations ? C'était quand ?"*

Le chef ouvre le carnet et lit :  
*"Fondations coulées par Marc le 5 octobre à 14h00"*

**Avec Git, c'est pareil !**

Si ton collègue demande :  
*"Qui a ajouté le formulaire de contact ? C'était quand ?"*

On tape `git log` et on voit :  
*"Ajout du formulaire - par Sophie le 10 octobre à 9h15"*

**Résultat ?**  
✅ Tout le monde sait qui a fait quoi  
✅ On peut demander des explications si besoin  
✅ On peut suivre l'évolution du projet  
✅ Si y'a un bug, on sait d'où ça vient

---

## 🤔 Mais attends... c'est quoi Git exactement ?

**Réponse rapide :**  
Git, c'est comme un **carnet de chantier d'un maçon** 🧱

Tu sais quand un maçon construit une maison ?  
Il prend des photos à chaque étape :
- Photo 1 : Fondations coulées ✅
- Photo 2 : Murs du rez-de-chaussée montés ✅
- Photo 3 : Toit posé ✅

**Pourquoi il fait ça ?**

Parce que si un inspecteur vient et dit "Hé, y'a un problème avec les fondations", le maçon peut :
- Retrouver exactement ce qui a été fait
- Voir qui a fait quoi
- Revenir en arrière si besoin

**Eh bien avec Git, c'est EXACTEMENT pareil avec ton code ! 🚀**

---

## ⚠️ STOP ! Git ≠ Ctrl+S

**Attention, écoute bien ça :**

Beaucoup de débutants pensent :  
❌ "Bah Git c'est juste pour sauvegarder mon code, je peux faire Ctrl+S non ?"  
❌ "Ou copier mon dossier sur une clé USB ?"

## 🔥 NON ! Git c'est BEAUCOUP plus puissant que ça !

Laisse-moi t'expliquer avec une histoire vraie...

---

## 📖 L'histoire du maçon Kevin qui a tout cassé (et qui s'en est sorti grâce à Git)

**Lundi matin - 9h00**  
Kevin construit son site web. Tout marche nickel.  
Il prend une photo de son chantier (un commit Git) :  
✅ *"Fondations posées - formulaire de contact OK"*

**Lundi après-midi - 14h00**  
Kevin ajoute un étage (une nouvelle fonctionnalité).  
Il prend une autre photo :  
✅ *"Premier étage monté - galerie photos ajoutée"*

**Mardi matin - 10h00**  
Kevin veut repeindre les murs (modifier le CSS). Il bidouille pendant 2 heures...

**Mardi midi - 12h00**  
💥 **CATASTROPHE !**  
Kevin a tellement démoli de murs qu'il sait plus ce qu'il a fait.  
Le site est tout cassé. Plus rien ne marche. RIEN.

### 😱 Sans Git, Kevin est MORT

Il devrait :
- Se rappeler de TOUT ce qu'il a démoli (impossible)
- Tout reconstruire à la main (des heures de travail)
- Pleurer dans un coin 😭

### 😎 Avec Git, Kevin est TRANQUILLE

Il ouvre son carnet de chantier :
```bash
git log --oneline
```

Il voit :
```
a1b2c3d Premier étage monté - galerie photos ajoutée
z9y8x7w Fondations posées - formulaire de contact OK
```

Il revient aux fondations solides :
```bash
git checkout z9y8x7w
```

**BOOM ! 💥**  
Il est de retour à lundi matin, quand tout était nickel !

---

## 🎯 Donc Git, c'est quoi VRAIMENT ?

Git c'est :

### 1️⃣ Un carnet de chantier avec photos à chaque étape 📸
Tu peux revenir à **n'importe quelle étape** de la construction.

### 2️⃣ Un historique complet de ton chantier 📜
Tu sais **qui** a posé **quelle brique**, **quand**, et **pourquoi**.

### 3️⃣ Un moyen de tester sans risque 🧪
Tu veux tester deux types de peinture ? Tu crées deux chantiers parallèles (des "branches").  
Tu regardes ce qui rend le mieux → tu gardes le meilleur.  
**Ta maison principale reste intacte !**

### 4️⃣ Un outil pour bosser en équipe 👥
Imagine un vrai chantier avec plusieurs ouvriers :
- **Marc** pose les fondations → Il prend une photo et signe : *"Marc - Fondations coulées"*
- **Sophie** monte les murs → Elle prend une photo et signe : *"Sophie - Murs du RDC montés"*
- **Alex** installe l'électricité → Il prend une photo et signe : *"Alex - Câblage électrique fait"*

**Résultat ?**  
Le chef de chantier peut consulter le carnet et voir **qui** a fait **quoi** et **quand** !

Si y'a un problème avec l'électricité, il sait direct que c'est Alex qu'il faut appeler.  
Si les murs ont un souci, c'est Sophie.

**Avec Git, c'est EXACTEMENT pareil !**  
Chaque développeur signe son travail. Si y'a un bug, on sait qui a ajouté quoi !

---

## 🧱 L'analogie du chantier (pour bien comprendre)

Imagine que tu construis une maison :

| Sur le chantier | Avec Git |
|-----------------|----------|
| 📸 **Prendre une photo du chantier** | `git commit` |
| 📋 **Consulter toutes les photos** | `git log` |
| ⏪ **Revenir à une ancienne étape** | `git checkout` |
| 🏗️ **Ouvrir un chantier parallèle** (pour tester) | `git branch` |
| 🔀 **Fusionner deux chantiers** | `git merge` |

**Tu vois ? C'est exactement comme un vrai chantier ! 🧱**

---

## 🚀 OK, passons à la pratique !

Maintenant que tu as compris **POURQUOI** Git est génial, on va apprendre à l'utiliser.

### 🎯 Les 3 gestes de base du maçon

Pour prendre une photo de ton chantier, tu fais **3 gestes** :

---

### 1️⃣ `git init` → Ouvrir ton carnet de chantier

```bash
git init
```

**En français :** "Je commence un nouveau chantier, j'ouvre mon carnet"

**Analogie chantier :** C'est comme acheter un carnet neuf pour noter toutes les étapes.

Tu fais ça **UNE SEULE FOIS** au début de ton projet.

---

### 2️⃣ `git add` → Choisir ce que tu veux prendre en photo

```bash
git add index.html
```

Ou pour tout sélectionner d'un coup :

```bash
git add .
```

**En français :** "Je veux photographier ces éléments-là du chantier"

**Analogie chantier :** Tu ne prends pas TOUT le chantier en photo à chaque fois. Tu cadres sur ce que tu viens de finir (le mur, la fenêtre, etc.).

---

### 3️⃣ `git commit` → Prendre la photo avec une légende

```bash
git commit -m "Fondations coulées"
```

**En français :** "Je prends la photo et j'écris dans mon carnet : 'Fondations coulées'"

**Analogie chantier :** Tu colles la photo dans ton carnet avec la date et une note : "Fondations - béton coulé le 12/10/2025"

Le `-m` veut dire **"message"**.  
C'est ta légende pour te souvenir de ce que tu as fait.

---

## 🎯 Exemple complet pas à pas

Imagine : tu veux construire un site web super simple.

**On y va étape par étape, comme un vrai chantier :**

---

### 📂 Étape 1 : Créer ton terrain de construction

Ouvre ton terminal (oui, cette fenêtre qui fait peur au début).

Tape ça :

```bash
mkdir mon-site
```

**Traduction :** "Crée-moi un terrain vide qui s'appelle `mon-site`"

Ensuite, va sur le terrain :

```bash
cd mon-site
```

**Traduction :** "Je vais sur le terrain `mon-site`"

💡 **Astuce :** `cd` = "Change Directory" = "Va sur ce terrain"

---

### 🏗️ Étape 2 : Ouvrir ton carnet de chantier

Maintenant, tape :

```bash
git init
```

💬 **Ce qui se passe dans les coulisses :**

Git crée un dossier caché `.git` (tu ne le vois pas, mais il est là).  
C'est ton **carnet de chantier invisible** qui va tout enregistrer.

**Analogie chantier :** C'est ton carnet neuf où tu vas coller toutes les photos.

🎉 **Félicitations ! Ton terrain est maintenant un chantier Git !**

---

### 🧱 Étape 3 : Poser ta première brique

On va créer une page HTML toute simple (c'est ta première brique).

Tape ça :

```bash
echo "<h1>Bienvenue sur mon site !</h1>" > index.html
```

**Traduction :** "Crée un fichier `index.html` avec écrit `<h1>Bienvenue sur mon site !</h1>` dedans"

💡 **Note :** Tu peux aussi créer le fichier à la main avec ton éditeur de code (VS Code, etc.)

---

### 📸 Étape 4 : Cadrer ce que tu veux photographier

Maintenant, tu vas dire à Git : "Hé, je veux photographier ce fichier !"

Tape ça :

```bash
git add index.html
```

💬 **Ce qui se passe :**

Git prépare ton appareil photo et cadre sur `index.html`.

**Analogie chantier :** Tu pointes ton appareil sur le mur que tu viens de monter.

---

### 📷 Étape 5 : Prendre la photo et écrire la légende

Maintenant, on prend la photo pour de vrai :

```bash
git commit -m "Première brique posée - page d'accueil"
```

💬 **Ce qui se passe :**

Git prend une **photo** de ton fichier et écrit dans le carnet :  
*"Première brique posée - page d'accueil"*  
*"Par : Kevin"*  
*"Le : 12 octobre 2025 à 10h30"*

**Analogie chantier :** Tu colles la photo dans ton carnet avec :
- 📝 La légende : "Première brique posée"
- ✍️ Ton nom : "Kevin"
- 📅 La date et l'heure : "12/10/2025 - 10h30"

**Pourquoi c'est important ?**

Imagine qu'il y a 5 ouvriers sur le chantier.  
Si un mur s'écroule, le chef peut regarder le carnet et voir : *"Ah ! C'est Marc qui a monté ce mur le 10 octobre"*  
Il sait qui appeler pour réparer !

**Avec Git, c'est pareil :**  
Si y'a un bug dans le code, on peut voir qui a écrit cette ligne et quand.  
Pas pour punir ! Mais pour demander : *"Hé Marc, tu peux m'expliquer pourquoi t'as fait ça ?"*

**C'est bon ! Ta première photo de chantier est dans le carnet ! 🎉**

---

## 🔄 Le cycle que tu vas répéter 1000 fois

Voilà le processus magique que tu vas faire **encore et encore** :

```
1. Tu poses des briques (tu codes des trucs)
        ↓
2. git add . (Tu cadres ton appareil photo)
        ↓
3. git commit -m "Ce que tu as fait" (Tu prends la photo + légende)
        ↓
4. Recommence ! 🔁
```

**C'est exactement comme un vrai chantier :**  
Tu construis → Tu prends une photo → Tu continues → Tu prends une photo → etc.

---

## 📢 Les messages de commit : les règles du bon maçon

Quand tu fais un `git commit`, ton message doit être :

✅ **Court** : pas de roman  
✅ **Clair** : on comprend direct ce que t'as fait  
✅ **Professionnel** : comme dans un vrai carnet de chantier

### ✅ Exemples de BONS messages :

```bash
git commit -m "Fondations coulées"
git commit -m "Murs du rez-de-chaussée montés"
git commit -m "Fenêtres posées"
git commit -m "Toiture installée"
```

### ❌ Exemples de messages POURRIS :

```bash
git commit -m "travaux"  ← Quels travaux ?! 😡
git commit -m "ça avance"  ← Super, mais t'as fait quoi ?
git commit -m "update"  ← Merci captain obvious 🙄
git commit -m "test"  ← Test de quoi ?!
```

**Règle d'or :** Imagine qu'un inspecteur vient dans 6 mois. Est-ce qu'il va comprendre ce que t'as fait ?

**Pense à un vrai carnet de chantier :**  
❌ "Travaux 1", "Travaux 2" → On sait rien  
✅ "Fondations", "Murs", "Toit" → On comprend tout !

---

## 🎮 Exercice : À toi de jouer !

**Mission : Ouvre ton premier chantier Git et prends ta première photo**

1. Crée un terrain `mon-portfolio`
2. Va dessus avec `cd mon-portfolio`
3. Ouvre ton carnet avec `git init`
4. Pose ta première brique : crée un fichier `index.html` avec ton prénom dedans
5. Cadre ton appareil avec `git add index.html`
6. Prends la photo avec `git commit -m "Première brique posée - page d'accueil avec mon prénom"`

**Si t'as réussi, t'es un CHEF DE CHANTIER ! 💪**

Tu viens de prendre ta première photo de chantier Git, comme un vrai pro ! 🚀

---

## 🔑 Antisèche : les outils du maçon

| Commande | Ce qu'elle fait | Analogie chantier |
|----------|-----------------|-------------------|
| `git init` | Ouvre ton carnet de chantier | Acheter un carnet neuf |
| `git add nom-fichier` | Cadre sur UN élément | Pointer l'appareil sur le mur |
| `git add .` | Cadre sur TOUT | Prendre une photo large du chantier |
| `git commit -m "..."` | Prendre la photo + légende | Coller la photo dans le carnet avec la date |

---

## 💬 Citation du jour

> "Chaque commit est une brique de ton projet.  
> Plus tu documentes bien ton chantier, plus tu pourras le reconstruire si besoin."
> 
> — Le Chef de Chantier du Code 🧱

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 02**, tu vas apprendre à :

- 🕰️ Consulter toutes les photos de ton carnet de chantier
- 🔍 Vérifier ce qui a changé depuis la dernière photo
- ⏪ Revenir en arrière si t'as démoli le mauvais mur

**Prépare-toi, ça va être du lourd ! 😎**

---

## 📌 Note importante pour l'installation

> **Git n'est pas encore installé sur ton PC ?**  
> Pas de panique ! Demande à ton prof de t'aider à l'installer.  
> Une fois que c'est fait, reviens ici et éclate-toi ! 🎯

---

**Maintenant, va construire ! 🚀**