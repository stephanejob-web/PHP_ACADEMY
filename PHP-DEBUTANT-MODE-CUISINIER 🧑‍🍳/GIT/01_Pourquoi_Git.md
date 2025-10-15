# 🍳 Leçon 01 : Ta première recette (ou pourquoi Git va te sauver la vie)

## Salut à toi, futur chef étoilé du code ! 🧙‍♂️👨‍🍳

Bon, soyons honnêtes...

**T'as déjà raté une recette importante ?**  
Genre... tu cuisines pendant 3 heures, tu rajoutes trop de sel, et POUF 💥  
Tout est immangeable.

Ou pire encore...

**T'as déjà eu 50 versions d'une même recette ?**  
```
ma-recette.txt
ma-recette-v2.txt
ma-recette-v2-amelioree.txt
ma-recette-v2-amelioree-VRAIMENT-FINALE.txt
ma-recette-v2-amelioree-VRAIMENT-FINALE-grand-chef-approuve.txt
```

😭 **Ça suffit !**

Aujourd'hui, je vais t'apprendre à utiliser **Git**.  
Et crois-moi, après ça, tu ne perdras plus JAMAIS tes recettes.

## 🧑‍🤝‍🧑 Bonus : Qui a cuisiné quoi dans la cuisine ?

Quand tu fais un commit, Git enregistre automatiquement :

| Info | Exemple | Pourquoi c'est utile |
|------|---------|----------------------|
| 👤 **Ton nom** | Chef Kevin | Pour savoir qui a préparé le plat |
| 📧 **Ton email** | kevin@cuisine.com | Pour pouvoir te contacter si besoin |
| 📅 **La date et l'heure** | 12 oct 2025, 10h30 | Pour savoir quand c'était frais |
| 💬 **Ton message** | "Sauce béchamel préparée" | Pour savoir quelle étape de la recette |

**Exemple concret :**

Dans une vraie cuisine professionnelle, si le chef demande :  
*"Qui a préparé la sauce ? C'était quand ?"*

Le second ouvre le livre de recettes et lit :  
*"Sauce béchamel préparée par Marc le 5 octobre à 14h00"*

**Avec Git, c'est pareil !**

Si ton collègue demande :  
*"Qui a ajouté le formulaire de contact ? C'était quand ?"*

On tape `git log` et on voit :  
*"Ajout du formulaire - par Sophie le 10 octobre à 9h15"*

**Résultat ?**  
✅ Tout le monde sait qui a cuisiné quoi  
✅ On peut demander la recette exacte si besoin  
✅ On peut suivre l'évolution du menu  
✅ Si un plat est raté, on sait d'où ça vient

---

## 🤔 Mais attends... c'est quoi Git exactement ?

**Réponse rapide :**  
Git, c'est comme un **livre de recettes d'un chef cuisinier** 🍳

Tu sais quand un chef développe une recette ?  
Il note chaque version dans son livre :
- Version 1 : Sauce tomate avec basilic séché ✅
- Version 2 : Sauce tomate avec basilic frais ✅
- Version 3 : Sauce tomate avec basilic frais + ail confit ✅

**Pourquoi il fait ça ?**

Parce que si un critique culinaire dit "Hé, la version 2 était meilleure", le chef peut :
- Retrouver exactement les ingrédients de la version 2
- Voir qui a préparé cette version
- Refaire la recette exactement comme avant

**Eh bien avec Git, c'est EXACTEMENT pareil avec ton code ! 🚀**

---

## ⚠️ STOP ! Git ≠ Ctrl+S

**Attention, écoute bien ça :**

Beaucoup de débutants pensent :  
❌ "Bah Git c'est juste pour sauvegarder mon code, je peux faire Ctrl+S non ?"  
❌ "Ou copier ma recette sur une clé USB ?"

## 🔥 NON ! Git c'est BEAUCOUP plus puissant que ça !

Laisse-moi t'expliquer avec une histoire vraie...

---

## 📖 L'histoire du chef Kevin qui a tout raté (et qui s'en est sorti grâce à Git)

**Lundi matin - 9h00**  
Kevin prépare sa sauce tomate. Elle est parfaite.  
Il note sa recette dans son livre (un commit Git) :  
✅ *"Sauce tomate avec basilic séché - parfaite"*

**Lundi après-midi - 14h00**  
Kevin décide de tester avec du basilic frais (une nouvelle fonctionnalité).  
Il note une autre version :  
✅ *"Sauce tomate avec basilic frais - testé et approuvé"*

**Mardi matin - 10h00**  
Kevin veut améliorer encore (modifier les épices). Il bidouille pendant 2 heures...  
Il rajoute du cumin, du paprika, de l'origan, du piment...

**Mardi midi - 12h00**  
💥 **CATASTROPHE !**  
Kevin a tellement ajouté d'épices qu'il sait plus ce qu'il a fait.  
La sauce est immangeable. Plus rien ne marche. RIEN.

### 😱 Sans Git, Kevin est MORT

Il devrait :
- Se rappeler de TOUS les ingrédients qu'il a ajoutés (impossible)
- Tout refaire à la main (des heures de travail)
- Pleurer dans un coin 😭

### 😎 Avec Git, Kevin est TRANQUILLE

Il ouvre son livre de recettes :
```bash
git log --oneline
```

Il voit :
```
a1b2c3d Sauce tomate avec basilic frais - testé
z9y8x7w Sauce tomate avec basilic séché - parfaite
```

Il revient à la version avec basilic frais :
```bash
git checkout a1b2c3d
```

**BOOM ! 💥**  
Il est de retour à lundi après-midi, quand tout était parfait !

---

## 🎯 Donc Git, c'est quoi VRAIMENT ?

Git c'est :

### 1️⃣ Un livre de recettes avec chaque version notée 📸
Tu peux revenir à **n'importe quelle version** de ta recette.

### 2️⃣ Un historique complet de tes améliorations 📜
Tu sais **qui** a testé **quel ingrédient**, **quand**, et **pourquoi**.

### 3️⃣ Un moyen de tester sans risque 🧪
Tu veux tester deux ingrédients différents ? Tu crées deux versions parallèles (des "branches").  
Tu goûtes ce qui rend le mieux → tu gardes le meilleur.  
**Ta recette principale reste intacte !**

### 4️⃣ Un outil pour cuisiner en équipe 👥
Imagine une vraie brigade de cuisine avec plusieurs chefs :
- **Marc** teste la sauce → Il note : *"Marc - Sauce avec basilic frais testée"*
- **Sophie** teste les légumes → Elle note : *"Sophie - Légumes rôtis au four"*
- **Alex** teste l'assaisonnement → Il note : *"Alex - Mélange d'épices créé"*

**Résultat ?**  
Le chef exécutif peut consulter le livre et voir **qui** a testé **quoi** et **quand** !

Si y'a un problème avec la sauce, il sait direct que c'est Marc qu'il faut appeler.  
Si les légumes ont un souci, c'est Sophie.

**Avec Git, c'est EXACTEMENT pareil !**  
Chaque développeur signe son travail. Si y'a un bug, on sait qui a ajouté quoi !

---

## 🍳 L'analogie de la cuisine (pour bien comprendre)

Imagine que tu développes une recette de bolognaise :

| En cuisine | Avec Git |
|------------|----------|
| 📸 **Noter une version de ta recette** | `git commit` |
| 📋 **Consulter toutes les versions** | `git log` |
| ⏪ **Revenir à une ancienne version** | `git checkout` |
| 🏗️ **Tester une variante** (avec d'autres ingrédients) | `git branch` |
| 🔀 **Fusionner deux versions** | `git merge` |

**Tu vois ? C'est exactement comme développer une vraie recette ! 🍳**

---

## 🚀 OK, passons à la pratique !

Maintenant que tu as compris **POURQUOI** Git est génial, on va apprendre à l'utiliser.

### 🎯 Les 3 gestes de base du chef

Pour noter une version de ta recette, tu fais **3 gestes** :

---

### 1️⃣ `git init` → Ouvrir ton livre de recettes

```bash
git init
```

**En français :** "Je commence une nouvelle recette, j'ouvre mon livre"

**Analogie cuisine :** C'est comme acheter un cahier neuf pour noter toutes les versions de ta recette.

Tu fais ça **UNE SEULE FOIS** au début de ton projet.

---

### 2️⃣ `git add` → Choisir les ingrédients à noter

```bash
git add index.html
```

Ou pour tout sélectionner d'un coup :

```bash
git add .
```

**En français :** "Je veux noter ces ingrédients-là dans ma recette"

**Analogie cuisine :** Tu ne notes pas TOUT le garde-manger à chaque fois. Tu choisis juste les ingrédients que tu viens de tester (le basilic frais au lieu du séché, par exemple).

---

### 3️⃣ `git commit` → Noter la version avec un titre

```bash
git commit -m "Sauce tomate - test avec basilic frais"
```

**En français :** "Je note cette version et j'écris : 'Sauce tomate - test avec basilic frais'"

**Analogie cuisine :** Tu écris la version dans ton cahier avec la date et une note : "Sauce avec basilic frais - testé le 12/10/2025"

Le `-m` veut dire **"message"**.  
C'est ton titre de version pour te souvenir de ce que tu as testé.

---

## 🎯 Exemple complet pas à pas

Imagine : tu veux créer un site web super simple.

**On y va étape par étape, comme développer une recette :**

---

### 📂 Étape 1 : Préparer ta cuisine

Ouvre ton terminal (oui, cette fenêtre qui fait peur au début).

Tape ça :

```bash
mkdir mon-site
```

**Traduction :** "Crée-moi une cuisine vide qui s'appelle `mon-site`"

Ensuite, entre dans ta cuisine :

```bash
cd mon-site
```

**Traduction :** "Je vais dans la cuisine `mon-site`"

💡 **Astuce :** `cd` = "Change Directory" = "Entre dans cette cuisine"

---

### 🏗️ Étape 2 : Ouvrir ton livre de recettes

Maintenant, tape :

```bash
git init
```

💬 **Ce qui se passe dans les coulisses :**

Git crée un dossier caché `.git` (tu ne le vois pas, mais il est là).  
C'est ton **livre de recettes invisible** qui va tout enregistrer.

**Analogie cuisine :** C'est ton cahier neuf où tu vas écrire toutes les versions de tes recettes.

🎉 **Félicitations ! Ta cuisine est maintenant équipée Git !**

---

### 🍳 Étape 3 : Préparer ta première version

On va créer une page HTML toute simple (c'est ta première version de recette).

Tape ça :

```bash
echo "<h1>Bienvenue dans ma cuisine !</h1>" > index.html
```

**Traduction :** "Crée un fichier `index.html` avec écrit `<h1>Bienvenue dans ma cuisine !</h1>` dedans"

💡 **Note :** Tu peux aussi créer le fichier à la main avec ton éditeur de code (VS Code, etc.)

---

### 📸 Étape 4 : Sélectionner ce que tu veux noter

Maintenant, tu vas dire à Git : "Hé, je veux noter cette version !"

Tape ça :

```bash
git add index.html
```

💬 **Ce qui se passe :**

Git prépare son stylo et se concentre sur `index.html`.

**Analogie cuisine :** Tu notes les ingrédients principaux de cette version.

---

### 📷 Étape 5 : Noter la version avec un titre

Maintenant, on note la version pour de vrai :

```bash
git commit -m "Version 1 - page d'accueil de base"
```

💬 **Ce qui se passe :**

Git écrit une **version** dans le livre :  
*"Version 1 - page d'accueil de base"*  
*"Par : Chef Kevin"*  
*"Le : 12 octobre 2025 à 10h30"*

**Analogie cuisine :** Tu écris dans ton cahier avec :
- 📝 Le titre : "Version 1 - recette de base"
- ✍️ Ton nom : "Chef Kevin"
- 📅 La date et l'heure : "12/10/2025 - 10h30"

**Pourquoi c'est important ?**

Imagine qu'il y a 5 cuisiniers dans la brigade.  
Si un plat est raté, le chef peut regarder le livre et voir : *"Ah ! C'est Marc qui a testé cette version le 10 octobre"*  
Il sait qui appeler pour comprendre !

**Avec Git, c'est pareil :**  
Si y'a un bug dans le code, on peut voir qui a écrit cette ligne et quand.  
Pas pour punir ! Mais pour demander : *"Hé Marc, tu peux m'expliquer pourquoi t'as ajouté ce piment ?"*

**C'est bon ! Ta première version est dans le livre ! 🎉**

---

## 🔄 Le cycle que tu vas répéter 1000 fois

Voilà le processus magique que tu vas faire **encore et encore** :

```
1. Tu testes de nouveaux ingrédients (tu codes des trucs)
        ↓
2. git add . (Tu sélectionnes ce que tu veux noter)
        ↓
3. git commit -m "Ce que tu as testé" (Tu notes la version + titre)
        ↓
4. Recommence ! 🔁
```

**C'est exactement comme développer une vraie recette :**  
Tu testes → Tu notes la version → Tu continues → Tu notes → etc.

---

## 📢 Les titres de version : les règles du bon chef

Quand tu fais un `git commit`, ton message doit être :

✅ **Court** : pas de roman  
✅ **Clair** : on comprend direct ce que t'as testé  
✅ **Professionnel** : comme dans un vrai livre de recettes

### ✅ Exemples de BONS messages :

```bash
git commit -m "Sauce tomate - test avec basilic frais"
git commit -m "Bolognaise - ajout de vin rouge"
git commit -m "Pâte à tarte - beurre remplacé par huile d'olive"
git commit -m "Assaisonnement - réduction du sel"
```

### ❌ Exemples de messages POURRIS :

```bash
git commit -m "cuisine"  ← Qu'est-ce que t'as testé ?! 😡
git commit -m "ça avance"  ← Super, mais t'as fait quoi ?
git commit -m "update"  ← Merci captain obvious 🙄
git commit -m "test"  ← Test de quoi ?!
```

**Règle d'or :** Imagine qu'un critique gastronomique vient dans 6 mois. Est-ce qu'il va comprendre quelle version tu as testée ?

**Pense à un vrai livre de recettes :**  
❌ "Préparation 1", "Préparation 2" → On sait rien  
✅ "Avec basilic frais", "Avec vin rouge", "Sans sel" → On comprend tout !

---

## 🎮 Exercice : À toi de jouer !

**Mission : Ouvre ton premier livre de recettes Git et note ta première version**

1. Crée une cuisine `mon-portfolio`
2. Entre dedans avec `cd mon-portfolio`
3. Ouvre ton livre avec `git init`
4. Prépare ta première version : crée un fichier `index.html` avec ton prénom dedans
5. Sélectionne-le avec `git add index.html`
6. Note la version avec `git commit -m "Version 1 - page d'accueil avec mon prénom"`

**Si t'as réussi, t'es un CHEF ÉTOILÉ ! 💪**

Tu viens de noter ta première version Git, comme un vrai pro ! 🚀

---

## 🔑 Antisèche : les outils du chef

| Commande | Ce qu'elle fait | Analogie cuisine |
|----------|-----------------|------------------|
| `git init` | Ouvre ton livre de recettes | Acheter un cahier neuf |
| `git add nom-fichier` | Sélectionne UN ingrédient | Noter un ingrédient spécifique |
| `git add .` | Sélectionne TOUT | Noter tous les ingrédients testés |
| `git commit -m "..."` | Noter la version + titre | Écrire la version dans le cahier avec la date |

---

## 💬 Citation du jour

> "Chaque commit est une version de ta recette.  
> Plus tu documentes bien tes tests, plus tu pourras retrouver la meilleure version."
> 
> — Le Chef Étoilé du Code 🍳

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 02**, tu vas apprendre à :

- 🕰️ Consulter toutes les versions de ton livre
- 🔍 Vérifier ce qui a changé entre deux versions
- ⏪ Revenir en arrière si t'as raté une version

**Prépare-toi, ça va être délicieux ! 😎**

---

## 📌 Note importante pour l'installation

> **Git n'est pas encore installé sur ton PC ?**  
> Pas de panique ! Demande à ton prof de t'aider à l'installer.  
> Une fois que c'est fait, reviens ici et régale-toi ! 🎯

---

**Maintenant, va cuisiner ! 🚀**