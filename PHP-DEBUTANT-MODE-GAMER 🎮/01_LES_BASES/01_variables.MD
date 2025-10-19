# 🎮 Cours PHP pour Gamers – Les Variables 🕹️

---

## 🚨 Pourquoi une variable ? Comprendre avec ton inventaire 🎒

Imagine que tu joues à un RPG.  
Tu as devant toi ton **inventaire**, bien organisé avec tous tes slots.  
Dedans, tu stockes tout ce dont tu as besoin pour ta quête :  
⚔️ des épées, 🛡️ des armures, 🧪 des potions, 💰 ton gold, ⭐ ton XP.

Mais pour ne pas te perdre, tu **mets un nom sur chaque slot** :  
> "Épée", "Armure", "Potions", "Gold", "XP"...

Ainsi, quand tu veux quelque chose, tu n'as pas besoin de chercher :  
tu regardes le nom du slot et tu trouves **directement** ce que tu veux.

💬 En PHP, c'est pareil :  
- Chaque **nom de slot** correspond à un **nom de variable**.  
- Chaque **objet dans le slot** correspond à une **valeur**.

Exemple :
```php
$epees = 3;
$potions = 12;
$gold = 500;
```

| Slot (nom) | Contenu (valeur) |
|------------|------------------|
| epees | 3 |
| potions | 12 |
| gold | 500 |

🧠 Ton ordinateur a un "inventaire mémoire".  
Chaque fois que tu crées une variable, il place la valeur dans un slot et lui donne un nom pour la retrouver plus tard.

---

## 💡 Pourquoi c'est utile

Si tu veux calculer ton score total, tu n'as pas besoin de tout retenir.  
Tu peux **réutiliser les slots** autant que tu veux :

```php
$kills = 15;
$assists = 8;
$score = $kills + $assists;

echo "Ton score total est $score.";
```

Résultat :
```
Ton score total est 23.
```

💬 Tu viens de dire à ton ordinateur :
> "Regarde les deux valeurs dans l'inventaire (kills et assists), additionne-les, et mets le résultat dans un nouveau slot appelé score."

---

## 🎒 1️⃣ Créer une variable

Chaque variable commence **toujours** par `$` en PHP.  
C'est comme si tu créais un slot dans ton inventaire.

```php
$pseudo = "DragonSlayer";
$niveau = 42;
$hp = 100;
```

💬 Tu viens de créer trois slots :
| Slot | Valeur |
|------|--------|
| pseudo | "DragonSlayer" |
| niveau | 42 |
| hp | 100 |

---

## 🎯 2️⃣ Utiliser une variable

Tu veux voir ce qu'il y a dans un slot ?  
Tu appelles simplement son nom :
```php
echo $pseudo;
```

Résultat :
```
DragonSlayer
```

💬 Ton ordinateur regarde dans son inventaire, trouve le slot "pseudo" et lit ce qu'il contient.

---

## 🔄 3️⃣ Changer la valeur d'une variable

Tu veux changer ton pseudo ?  
Pas besoin de recréer le slot — tu **remplaces juste la valeur** :

```php
$pseudo = "ShadowHunter";
```

💬 Le slot reste le même, mais ce qu'il contient change.

---

## 🎮 4️⃣ Pourquoi "variable" ?

Parce que son **contenu peut varier**.  
Tu peux **changer ce qu'il y a dedans** sans changer le nom.

C'est comme si tu avais un slot "arme" dans ton inventaire :  
parfois tu y mets une épée, parfois un arc.  
Mais le slot, lui, reste "arme".

---

## ⚙️ 5️⃣ Exemple concret

Tu veux calculer tes dégâts totaux :
```php
$degats_arme = 50;
$bonus_critique = 25;
$multiplicateur = 2;

$degats_base = $degats_arme + $bonus_critique;
$degats_total = $degats_base * $multiplicateur;

echo "Tu infligés $degats_total points de dégâts !";
```

Résultat :
```
Tu infligés 150 points de dégâts !
```

💬 Tu as créé plusieurs slots (`degats_arme`, `bonus_critique`, `multiplicateur`, etc.)  
et PHP fait le calcul pour toi.

---

## 🧩 6️⃣ En résumé simple

| Ce que tu fais | Dans un jeu | En PHP |
|----------------|-------------|--------|
| Tu ranges un objet dans ton inventaire | Tu stockes une donnée | Tu crées une variable |
| Tu nommes le slot | Tu donnes un nom | Tu écris `$nom = valeur;` |
| Tu regardes ce qu'il y a dans le slot | Tu veux savoir ce que c'est | Tu fais `echo $nom;` |
| Tu remplaces l'objet | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c'est comme un **slot dans ton inventaire de jeu**.  
> Tu peux y mettre n'importe quelle valeur, la changer quand tu veux,  
> et ton ordinateur s'en souviendra jusqu'à la fin de la partie.

---

# 🔧 Les Opérateurs en PHP

## 🧮 Les Opérateurs Arithmétiques (pour calculer)

Dans un jeu, tu dois souvent **calculer** des choses : additionner des ressources, multiplier des dégâts, etc.  
En PHP, tu utilises des **opérateurs** pour faire ces calculs.

### ➕ Addition : `+`
Pour **ajouter** deux valeurs ensemble.

```php
$kills_matin = 15;
$kills_aprem = 8;
$total_kills = $kills_matin + $kills_aprem;
echo $total_kills; // Affiche 23
```

💬 **En langage gamer :** Tu avais 15 kills ce matin, tu en fais 8 cet après-midi → tu as 23 kills au total.

---

### ➖ Soustraction : `-`
Pour **enlever** une valeur d'une autre.

```php
$hp_max = 100;
$degats_recus = 35;
$hp_restants = $hp_max - $degats_recus;
echo $hp_restants; // Affiche 65
```

💬 **En langage gamer :** Tu avais 100 HP, tu prends 35 de dégâts → il te reste 65 HP.

---

### ✖️ Multiplication : `*`
Pour **multiplier** deux valeurs.

```php
$xp_par_mob = 50;
$mobs_tues = 10;
$xp_total = $xp_par_mob * $mobs_tues;
echo $xp_total; // Affiche 500
```

💬 **En langage gamer :** Chaque mob donne 50 XP, tu en tues 10 → tu gagnes 500 XP.

---

### ➗ Division : `/`
Pour **diviser** une valeur par une autre.

```php
$gold_total = 1000;
$nb_joueurs = 4;
$gold_par_joueur = $gold_total / $nb_joueurs;
echo $gold_par_joueur; // Affiche 250
```

💬 **En langage gamer :** Tu as 1000 gold à partager entre 4 joueurs → chacun reçoit 250 gold.

---

## 🎯 Les Opérateurs d'Incrémentation (++, --)

### 📊 Imagine ta barre de level-up

Tu es en train de grind et tu comptes tes **levels**.  
Chaque level représente un **numéro** : 1, 2, 3, 4, 5...

**L'opérateur `++`** = **Monter d'un level** 🔼  
**L'opérateur `--`** = **Descendre d'un level** 🔽

---

### 📈 L'opérateur `++` (Incrémenter = Ajouter 1)

Imagine que tu comptes tes **kills** dans une partie.  
Tu en as **5**, puis tu élimines **1 ennemi de plus**.

**Méthode longue :**
```php
$kills = 5;
$kills = $kills + 1; // Tu ajoutes 1
echo $kills; // Affiche 6
```

**Méthode courte avec `++` :**
```php
$kills = 5;
$kills++; // Pareil que $kills = $kills + 1
echo $kills; // Affiche 6
```

💬 **En langage gamer :**  
> "J'avais 5 kills, j'en fais 1 de plus → `$kills++` → j'ai maintenant 6 kills."

🧠 **À retenir :** `$kills++` veut dire "ajoute 1 à `$kills`".

---

### 📉 L'opérateur `--` (Décrémenter = Enlever 1)

Maintenant, tu **utilises** une potion. Tu passes de **4 potions à 3 potions**.

**Méthode longue :**
```php
$potions = 4;
$potions = $potions - 1; // Tu enlèves 1
echo $potions; // Affiche 3
```

**Méthode courte avec `--` :**
```php
$potions = 4;
$potions--; // Pareil que $potions = $potions - 1
echo $potions; // Affiche 3
```

💬 **En langage gamer :**  
> "J'avais 4 potions, j'en utilise 1 → `$potions--` → il m'en reste 3."

🧠 **À retenir :** `$potions--` veut dire "enlève 1 à `$potions`".

---

### 🎬 Exemple concret : Compter les ennemis éliminés

Tu élimines des **ennemis** dans un FPS.  
Chaque fois que tu fais un kill, tu veux **compter** combien tu en as faits.

```php
$kills = 0; // Au début, tu n'as fait aucun kill

// Tu fais un kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 1

// Tu fais un autre kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 2

// Tu fais encore un kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 3
```

💬 **Ce qui se passe :**
- Au début : `$kills = 0`
- Après `$kills++` : `$kills = 1`
- Après `$kills++` : `$kills = 2`
- Après `$kills++` : `$kills = 3`

🧠 **C'est comme si tu montais dans le leaderboard score par score !**

---

### 🔄 Exemple avec `--` : Compter les munitions restantes

Tu as **30 balles** dans ton chargeur.  
Chaque fois que tu tires, tu **décrémentes** le compteur.

```php
$munitions = 30; // Au début, tu as 30 balles

// Tu tires une balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 29

// Tu tires une autre balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 28

// Tu tires encore une balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 27
```

💬 **Ce qui se passe :**
- Au début : `$munitions = 30`
- Après `$munitions--` : `$munitions = 29`
- Après `$munitions--` : `$munitions = 28`
- Après `$munitions--` : `$munitions = 27`

🧠 **C'est comme si tu vidais ton chargeur balle par balle !**

---

### 📊 Tableau récapitulatif

| Opérateur | Signification | Exemple | Résultat |
|-----------|---------------|---------|----------|
| `++` | Ajoute 1 (level up) | `$x = 5; $x++;` | `$x` vaut maintenant **6** |
| `--` | Enlève 1 (utilise un objet) | `$x = 5; $x--;` | `$x` vaut maintenant **4** |

---

### ⚠️ Attention : Avant ou Après ?

Il y a **deux façons** d'utiliser `++` et `--` :

#### 🔵 Après la variable : `$x++` ou `$x--`
Le changement se fait **après** avoir utilisé la variable.

```php
$niveau = 10;
echo $niveau++; // Affiche 10 (puis ajoute 1 après)
echo $niveau;   // Affiche 11
```

💬 **En langage gamer :**  
> "Affiche mon niveau actuel (10), **puis** level-up."

---

#### 🔴 Avant la variable : `++$x` ou `--$x`
Le changement se fait **avant** d'utiliser la variable.

```php
$niveau = 10;
echo ++$niveau; // Level-up d'abord, puis affiche 11
echo $niveau;   // Affiche 11
```

💬 **En langage gamer :**  
> "Level-up **d'abord**, puis affiche mon nouveau niveau (11)."

---

### 🧠 Astuce pour retenir

🎮 **Imagine ton compteur de kills :**
- `$kills++` → "J'affiche mon score actuel (10), **puis** j'ajoute le kill (11)"
- `++$kills` → "J'ajoute le kill **d'abord** (11), puis j'affiche le nouveau score"

👉 **Dans 95% des cas, tu utiliseras `$kills++` ou `$potions--`** (après la variable).

---

## 🔗 Les Opérateurs d'Affectation Combinés

### 🎒 Les raccourcis pour les calculs

Parfois, tu veux **modifier une variable** en y ajoutant, multipliant, etc.

#### ➕ `+=` : Ajouter à la variable

**Méthode longue :**
```php
$gold = 500;
$gold = $gold + 300;
echo $gold; // Affiche 800
```

**Méthode courte :**
```php
$gold = 500;
$gold += 300; // Pareil que $gold = $gold + 300
echo $gold; // Affiche 800
```

💬 **En langage gamer :** "J'avais 500 gold, je loot 300 gold → `$gold += 300` → j'ai 800 gold maintenant."

---

#### ➖ `-=` : Enlever à la variable

```php
$hp = 100;
$hp -= 40; // Pareil que $hp = $hp - 40
echo $hp; // Affiche 60
```

💬 **En langage gamer :** "J'avais 100 HP, je prends 40 de dégâts → il me reste 60 HP."

---

#### ✖️ `*=` : Multiplier la variable

```php
$xp = 100;
$xp *= 2; // Pareil que $xp = $xp * 2
echo $xp; // Affiche 200
```

💬 **En langage gamer :** "J'avais 100 XP, j'active un bonus x2 → j'ai 200 XP."

---

#### ➗ `/=` : Diviser la variable

```php
$cooldown = 60;
$cooldown /= 2; // Pareil que $cooldown = $cooldown / 2
echo $cooldown; // Affiche 30
```

💬 **En langage gamer :** "Mon cooldown était 60s, j'ai un buff -50% → il est maintenant à 30s."

---

## 📋 Tableau récapitulatif complet

| Opérateur | Signification | Exemple | Équivalent | Résultat |
|-----------|---------------|---------|------------|----------|
| `+` | Addition | `$x = 5 + 3` | - | `$x = 8` |
| `-` | Soustraction | `$x = 5 - 3` | - | `$x = 2` |
| `*` | Multiplication | `$x = 5 * 3` | - | `$x = 15` |
| `/` | Division | `$x = 10 / 2` | - | `$x = 5` |
| `++` | Incrémentation | `$x++` | `$x = $x + 1` | Ajoute 1 |
| `--` | Décrémentation | `$x--` | `$x = $x - 1` | Enlève 1 |
| `+=` | Addition combinée | `$x += 3` | `$x = $x + 3` | Ajoute 3 |
| `-=` | Soustraction combinée | `$x -= 3` | `$x = $x - 3` | Enlève 3 |
| `*=` | Multiplication combinée | `$x *= 3` | `$x = $x * 3` | Multiplie par 3 |
| `/=` | Division combinée | `$x /= 3` | `$x = $x / 3` | Divise par 3 |

---

## 💬 En résumé

| Action | Opérateur | Ce que ça fait |
|--------|-----------|----------------|
| Gagner 1 level (ajouter 1) | `$niveau++` | Tu passes du niveau 5 au niveau 6 |
| Perdre 1 vie (enlever 1) | `$vies--` | Tu passes de 3 vies à 2 vies |
| Gagner plusieurs levels | `$niveau += 3` | Tu passes du niveau 5 au niveau 8 |
| Perdre plusieurs HP | `$hp -= 25` | Tu passes de 100 HP à 75 HP |

🧠 **Phrase à retenir :**
> `++` et `--` sont comme **gagner ou perdre 1 point à la fois**.  
> C'est le moyen le plus rapide d'ajouter ou d'enlever 1 !

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Comprendre l'incrémentation
**Énoncé :**  
Tu commences ta partie avec `$kills = 0`.  
Utilise l'opérateur `++` pour incrémenter cette variable **5 fois** (comme si tu faisais 5 kills).  
Affiche le résultat final.

**Ce qu'on attend :**  
- Une variable initialisée à 0
- Utilisation de `++` cinq fois
- L'affichage du nombre final de kills

**Exemple de résultat attendu :**
```
J'ai fait 5 kills.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$kills = 0;
$kills++;
$kills++;
$kills++;
$kills++;
$kills++;
echo "J'ai fait $kills kills.";
?>
```
</details>

---

## 📝 Exercice 2 : Comprendre la décrémentation
**Énoncé :**  
Tu as `$potions = 10` au début de ta quête.  
Utilise l'opérateur `--` pour décrémenter cette variable **3 fois** (comme si tu utilisais 3 potions).  
Affiche combien de potions il te reste.

**Ce qu'on attend :**  
- Une variable initialisée à 10
- Utilisation de `--` trois fois
- L'affichage du nombre de potions restantes

**Exemple de résultat attendu :**
```
Il me reste 7 potions.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$potions = 10;
$potions--;
$potions--;
$potions--;
echo "Il me reste $potions potions.";
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser +=
**Énoncé :**  
Tu as `$gold = 500` gold dans ton inventaire.  
Tu lootes un coffre qui contient 350 gold. Utilise l'opérateur `+=` pour ajouter ce gold.  
Affiche le nouveau total.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `+=`
- L'affichage du total après le loot

**Exemple de résultat attendu :**
```
J'ai maintenant 850 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gold = 500;
$gold += 350;
echo "J'ai maintenant $gold gold.";
?>
```
</details>

---

## 📝 Exercice 4 : Utiliser -=
**Énoncé :**  
Tu as `$hp = 100` points de vie.  
Tu prends un coup critique de 45 dégâts. Utilise l'opérateur `-=` pour soustraire ces dégâts.  
Affiche tes HP restants.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `-=`
- L'affichage des HP après l'attaque

**Exemple de résultat attendu :**
```
HP restants : 55
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$hp = 100;
$hp -= 45;
echo "HP restants : $hp";
?>
```
</details>

---

## 📝 Exercice 5 : Ma première variable
**Énoncé :**  
Crée une variable appelée `$pseudo` qui contient ton pseudo de gamer, puis affiche-la avec `echo`.

**Ce qu'on attend :**  
- Une variable `$pseudo` correctement créée
- L'affichage de ton pseudo à l'écran

**Exemple de résultat attendu :**
```
xXDarkSniperXx
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$pseudo = "xXDarkSniperXx";
echo $pseudo;
?>
```
</details>

---

## 📝 Exercice 6 : Profil de joueur complet
**Énoncé :**  
Crée deux variables : `$pseudo` avec ton pseudo et `$niveau` avec ton niveau.  
Affiche ensuite une phrase complète : "Je suis [pseudo] niveau [niveau]."

**Ce qu'on attend :**  
- Deux variables correctement déclarées
- Une phrase complète qui utilise ces deux variables

**Exemple de résultat attendu :**
```
Je suis xXDarkSniperXx niveau 42.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$pseudo = "xXDarkSniperXx";
$niveau = 42;
echo "Je suis $pseudo niveau $niveau.";
?>
```
</details>

---

## 📝 Exercice 7 : Calculer des dégâts
**Énoncé :**  
Tu veux calculer tes dégâts totaux avec ton arme.  
Crée deux variables : `$degats_arme = 50` et `$bonus_critique = 25`.  
Calcule les dégâts totaux dans une nouvelle variable `$degats_total` et affiche le résultat.

**Ce qu'on attend :**  
- Trois variables : `$degats_arme`, `$bonus_critique` et `$degats_total`
- Le calcul correct de l'addition
- L'affichage des dégâts

**Exemple de résultat attendu :**
```
Dégâts totaux : 75
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$degats_arme = 50;
$bonus_critique = 25;
$degats_total = $degats_arme + $bonus_critique;
echo "Dégâts totaux : $degats_total";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer le coût d'un achat
**Énoncé :**  
Tu veux acheter 5 potions de soin. Chaque potion coûte 20 gold.  
Crée une variable `$prix_potion = 20` et une variable `$quantite = 5`.  
Calcule le prix total et affiche-le.

**Ce qu'on attend :**  
- Deux variables pour le prix unitaire et la quantité
- Une variable pour le total
- L'affichage du montant total

**Exemple de résultat attendu :**
```
Le prix total est de 100 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_potion = 20;
$quantite = 5;
$total = $prix_potion * $quantite;
echo "Le prix total est de $total gold.";
?>
```
</details>

---

## 📝 Exercice 9 : Modifier une variable
**Énoncé :**  
Crée une variable `$arme = "Épée"`.  
Affiche d'abord "Arme équipée : Épée".  
Ensuite, change la valeur de `$arme` en "Arc" et affiche "Arme équipée : Arc".

**Ce qu'on attend :**  
- Une variable créée puis modifiée
- Deux affichages différents montrant que la variable a changé

**Exemple de résultat attendu :**
```
Arme équipée : Épée
Arme équipée : Arc
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$arme = "Épée";
echo "Arme équipée : $arme<br>";
$arme = "Arc";
echo "Arme équipée : $arme";
?>
```
</details>

---

## 📝 Exercice 10 : Additionner des ressources
**Énoncé :**  
Dans ton jeu de survie, tu as `$bois = 25` et `$pierre = 18`.  
Calcule le nombre total de ressources dans une variable `$total_ressources` et affiche le résultat.

**Ce qu'on attend :**  
- Trois variables au total
- Une addition correcte
- Un message clair avec le résultat

**Exemple de résultat attendu :**
```
J'ai un total de 43 ressources.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$bois = 25;
$pierre = 18;
$total_ressources = $bois + $pierre;
echo "J'ai un total de $total_ressources ressources.";
?>
```
</details>

---

## 📝 Exercice 11 : Calculer l'XP nécessaire pour level-up
**Énoncé :**  
Tu veux savoir combien d'XP il te manque pour passer au niveau suivant.  
Crée les variables suivantes :
- `$xp_actuel = 750`
- `$xp_prochain_niveau = 1000`

Calcule l'XP manquant et affiche le résultat.

**Ce qu'on attend :**  
- Calcul de la différence (XP manquant = XP prochain niveau - XP actuel)
- Affichage du résultat

**Exemple de résultat attendu :**
```
Il te manque 250 XP pour passer au niveau suivant.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$xp_actuel = 750;
$xp_prochain_niveau = 1000;
$xp_manquant = $xp_prochain_niveau - $xp_actuel;
echo "Il te manque $xp_manquant XP pour passer au niveau suivant.";
?>
```
</details>

---

## 📝 Exercice 12 : Calculer ton K/D ratio
**Énoncé :**  
Dans un FPS, tu veux calculer ton ratio kills/deaths (K/D).  
Crée les variables suivantes :
- `$kills = 45`
- `$deaths = 15`

Calcule ton K/D ratio dans une variable `$kd_ratio` et affiche-le.

**Ce qu'on attend :**  
- Division des kills par les deaths
- Affichage du ratio

**Exemple de résultat attendu :**
```
Ton K/D ratio est de 3
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$kills = 45;
$deaths = 15;
$kd_ratio = $kills / $deaths;
echo "Ton K/D ratio est de $kd_ratio";
?>
```
</details>

---

## 📝 Exercice 13 : Informations de guilde
**Énoncé :**  
Crée trois variables :
- `$nom_guilde = "Shadow Warriors"`
- `$serveur = "EU-West"`
- `$membres = 42`

Affiche ensuite un message complet : "Guilde [nom] sur [serveur] - [membres] membres"

**Ce qu'on attend :**  
- Trois variables de type texte et nombre
- Un message formaté qui utilise toutes les variables

**Exemple de résultat attendu :**
```
Guilde Shadow Warriors sur EU-West - 42 membres
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$nom_guilde = "Shadow Warriors";
$serveur = "EU-West";
$membres = 42;
echo "Guilde $nom_guilde sur $serveur - $membres membres";
?>
```
</details>

---

## 📝 Exercice 14 : Calculer le score d'une partie complète
**Énoncé :**  
Tu veux calculer ton score total dans une partie. Tu as besoin de :
- `$kills = 12` (chaque kill vaut 100 points)
- `$assists = 8` (chaque assist vaut 50 points)
- `$objectifs = 3` (chaque objectif vaut 200 points)

Calcule d'abord les points de kills (`$points_kills`), les points d'assists (`$points_assists`), et les points d'objectifs (`$points_objectifs`).  
Ensuite, calcule le score total (`$score_total`) qui est la somme de tous ces points.  
Affiche tous les détails.

**Ce qu'on attend :**  
- Plusieurs calculs intermédiaires
- L'utilisation de toutes les variables créées
- Un affichage détaillé du score

**Exemple de résultat attendu :**
```
Kills : 12 x 100 = 1200 points
Assists : 8 x 50 = 400 points
Objectifs : 3 x 200 = 600 points
Score total : 2200 points
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$kills = 12;
$assists = 8;
$objectifs = 3;

$points_kills = $kills * 100;
$points_assists = $assists * 50;
$points_objectifs = $objectifs * 200;
$score_total = $points_kills + $points_assists + $points_objectifs;

echo "Kills : $kills x 100 = $points_kills points<br>";
echo "Assists : $assists x 50 = $points_assists points<br>";
echo "Objectifs : $objectifs x 200 = $points_objectifs points<br>";
echo "Score total : $score_total points";
?>
```
</details>

---

## 📝 Exercice 15 : Gestion de munitions avec décrémentation
**Énoncé :**  
Tu commences une partie avec `$munitions = 30` dans ton chargeur.  
Tu tires 7 balles pendant un combat. Utilise l'opérateur `-=` pour retirer ces munitions.  
Affiche combien de munitions il te reste.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `-=`
- Affichage des munitions restantes

**Exemple de résultat attendu :**
```
Munitions restantes : 23
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$munitions = 30;
$munitions -= 7;
echo "Munitions restantes : $munitions";
?>
```
</details>

---

## 📝 Exercice 16 : Bonus XP multiplié
**Énoncé :**  
Tu gagnes `$xp = 150` XP en tuant un boss.  
Tu as un buff "Double XP" actif. Utilise l'opérateur `*=` pour doubler ton XP.  
Affiche ton XP final.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `*=`
- Affichage de l'XP après le buff

**Exemple de résultat attendu :**
```
XP gagnés avec le buff : 300
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$xp = 150;
$xp *= 2;
echo "XP gagnés avec le buff : $xp";
?>
```
</details>

---

## 📝 Exercice 17 : Partage de loot entre joueurs
**Énoncé :**  
Ton équipe a looté `$gold_total = 800` gold.  
Il y a `$nb_joueurs = 4` joueurs dans l'équipe. Le loot doit être partagé équitablement.  
Calcule combien de gold chaque joueur reçoit dans une variable `$gold_par_joueur` et affiche le résultat.

**Ce qu'on attend :**  
- Division du gold total par le nombre de joueurs
- Affichage du gold par joueur

**Exemple de résultat attendu :**
```
Chaque joueur reçoit 200 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gold_total = 800;
$nb_joueurs = 4;
$gold_par_joueur = $gold_total / $nb_joueurs;
echo "Chaque joueur reçoit $gold_par_joueur gold.";
?>
```
</details>

---

## 📝 Exercice 18 : Système de combo
**Énoncé :**  
Tu as un système de combo dans ton jeu de combat.  
Tu commences avec `$combo = 0`.  
Tu réussis 3 attaques consécutives. Utilise l'opérateur `++` trois fois pour augmenter ton combo.  
Ensuite, tu te fais toucher et ton combo se réinitialise à 0.  
Affiche le combo maximum atteint, puis le combo après réinitialisation.

**Ce qu'on attend :**  
- Incrémentation du combo 3 fois
- Affichage du combo maximum
- Réinitialisation du combo
- Affichage du combo après réinitialisation

**Exemple de résultat attendu :**
```
Combo maximum : 3
Combo après reset : 0
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$combo = 0;
$combo++;
$combo++;
$combo++;
echo "Combo maximum : $combo<br>";
$combo = 0;
echo "Combo après reset : $combo";
?>
```
</details>

---

## 📝 Exercice 19 : Calculer le temps de respawn
**Énoncé :**  
Quand tu meurs, tu as un temps de respawn de `$respawn_base = 20` secondes.  
Tu as une rune qui réduit le temps de respawn de 30%. Calcule la réduction en secondes (`$reduction`), puis le temps de respawn final (`$respawn_final`).  
Affiche les deux valeurs.

**Ce qu'on attend :**  
- Calcul de la réduction (30% de 20 secondes)
- Calcul du temps final (temps de base - réduction)
- Affichage des deux valeurs

**Exemple de résultat attendu :**
```
Réduction : 6 secondes
Temps de respawn final : 14 secondes
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$respawn_base = 20;
$reduction = $respawn_base * 0.30;
$respawn_final = $respawn_base - $reduction;
echo "Réduction : $reduction secondes<br>";
echo "Temps de respawn final : $respawn_final secondes";
?>
```
</details>

---

## 📝 Exercice 20 : Inventaire complet d'un joueur
**Énoncé :**  
Crée un inventaire complet pour ton personnage avec les variables suivantes :
- `$pseudo = "DragonSlayer"`
- `$niveau = 25`
- `$hp = 85`
- `$hp_max = 100`
- `$mana = 120`
- `$gold = 3500`
- `$potions = 7`

Affiche toutes ces informations dans un format lisible, ligne par ligne.

**Ce qu'on attend :**  
- Toutes les variables correctement déclarées
- Un affichage organisé de toutes les informations

**Exemple de résultat attendu :**
```
=== Profil de DragonSlayer ===
Niveau : 25
HP : 85/100
Mana : 120
Gold : 3500
Potions : 7
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$pseudo = "DragonSlayer";
$niveau = 25;
$hp = 85;
$hp_max = 100;
$mana = 120;
$gold = 3500;
$potions = 7;

echo "=== Profil de $pseudo ===<br>";
echo "Niveau : $niveau<br>";
echo "HP : $hp/$hp_max<br>";
echo "Mana : $mana<br>";
echo "Gold : $gold<br>";
echo "Potions : $potions";
?>
```
</details>

---

## 🎯 GG WP ! 🏆

Si tu as réussi tous ces exercices, tu maîtrises maintenant les bases des variables en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une variable avec le symbole `# 🎮 Cours PHP pour Gamers – Les Variables 🕹️

---

## 🚨 Pourquoi une variable ? Comprendre avec ton inventaire 🎒

Imagine que tu joues à un RPG.  
Tu as devant toi ton **inventaire**, bien organisé avec tous tes slots.  
Dedans, tu stockes tout ce dont tu as besoin pour ta quête :  
⚔️ des épées, 🛡️ des armures, 🧪 des potions, 💰 ton gold, ⭐ ton XP.

Mais pour ne pas te perdre, tu **mets un nom sur chaque slot** :  
> "Épée", "Armure", "Potions", "Gold", "XP"...

Ainsi, quand tu veux quelque chose, tu n'as pas besoin de chercher :  
tu regardes le nom du slot et tu trouves **directement** ce que tu veux.

💬 En PHP, c'est pareil :  
- Chaque **nom de slot** correspond à un **nom de variable**.  
- Chaque **objet dans le slot** correspond à une **valeur**.

Exemple :
```php
$epees = 3;
$potions = 12;
$gold = 500;
```

| Slot (nom) | Contenu (valeur) |
|------------|------------------|
| epees | 3 |
| potions | 12 |
| gold | 500 |

🧠 Ton ordinateur a un "inventaire mémoire".  
Chaque fois que tu crées une variable, il place la valeur dans un slot et lui donne un nom pour la retrouver plus tard.

---

## 💡 Pourquoi c'est utile

Si tu veux calculer ton score total, tu n'as pas besoin de tout retenir.  
Tu peux **réutiliser les slots** autant que tu veux :

```php
$kills = 15;
$assists = 8;
$score = $kills + $assists;

echo "Ton score total est $score.";
```

Résultat :
```
Ton score total est 23.
```

💬 Tu viens de dire à ton ordinateur :
> "Regarde les deux valeurs dans l'inventaire (kills et assists), additionne-les, et mets le résultat dans un nouveau slot appelé score."

---

## 🎒 1️⃣ Créer une variable

Chaque variable commence **toujours** par `$` en PHP.  
C'est comme si tu créais un slot dans ton inventaire.

```php
$pseudo = "DragonSlayer";
$niveau = 42;
$hp = 100;
```

💬 Tu viens de créer trois slots :
| Slot | Valeur |
|------|--------|
| pseudo | "DragonSlayer" |
| niveau | 42 |
| hp | 100 |

---

## 🎯 2️⃣ Utiliser une variable

Tu veux voir ce qu'il y a dans un slot ?  
Tu appelles simplement son nom :
```php
echo $pseudo;
```

Résultat :
```
DragonSlayer
```

💬 Ton ordinateur regarde dans son inventaire, trouve le slot "pseudo" et lit ce qu'il contient.

---

## 🔄 3️⃣ Changer la valeur d'une variable

Tu veux changer ton pseudo ?  
Pas besoin de recréer le slot — tu **remplaces juste la valeur** :

```php
$pseudo = "ShadowHunter";
```

💬 Le slot reste le même, mais ce qu'il contient change.

---

## 🎮 4️⃣ Pourquoi "variable" ?

Parce que son **contenu peut varier**.  
Tu peux **changer ce qu'il y a dedans** sans changer le nom.

C'est comme si tu avais un slot "arme" dans ton inventaire :  
parfois tu y mets une épée, parfois un arc.  
Mais le slot, lui, reste "arme".

---

## ⚙️ 5️⃣ Exemple concret

Tu veux calculer tes dégâts totaux :
```php
$degats_arme = 50;
$bonus_critique = 25;
$multiplicateur = 2;

$degats_base = $degats_arme + $bonus_critique;
$degats_total = $degats_base * $multiplicateur;

echo "Tu infligés $degats_total points de dégâts !";
```

Résultat :
```
Tu infligés 150 points de dégâts !
```

💬 Tu as créé plusieurs slots (`degats_arme`, `bonus_critique`, `multiplicateur`, etc.)  
et PHP fait le calcul pour toi.

---

## 🧩 6️⃣ En résumé simple

| Ce que tu fais | Dans un jeu | En PHP |
|----------------|-------------|--------|
| Tu ranges un objet dans ton inventaire | Tu stockes une donnée | Tu crées une variable |
| Tu nommes le slot | Tu donnes un nom | Tu écris `$nom = valeur;` |
| Tu regardes ce qu'il y a dans le slot | Tu veux savoir ce que c'est | Tu fais `echo $nom;` |
| Tu remplaces l'objet | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c'est comme un **slot dans ton inventaire de jeu**.  
> Tu peux y mettre n'importe quelle valeur, la changer quand tu veux,  
> et ton ordinateur s'en souviendra jusqu'à la fin de la partie.

---

# 🔧 Les Opérateurs en PHP

## 🧮 Les Opérateurs Arithmétiques (pour calculer)

Dans un jeu, tu dois souvent **calculer** des choses : additionner des ressources, multiplier des dégâts, etc.  
En PHP, tu utilises des **opérateurs** pour faire ces calculs.

### ➕ Addition : `+`
Pour **ajouter** deux valeurs ensemble.

```php
$kills_matin = 15;
$kills_aprem = 8;
$total_kills = $kills_matin + $kills_aprem;
echo $total_kills; // Affiche 23
```

💬 **En langage gamer :** Tu avais 15 kills ce matin, tu en fais 8 cet après-midi → tu as 23 kills au total.

---

### ➖ Soustraction : `-`
Pour **enlever** une valeur d'une autre.

```php
$hp_max = 100;
$degats_recus = 35;
$hp_restants = $hp_max - $degats_recus;
echo $hp_restants; // Affiche 65
```

💬 **En langage gamer :** Tu avais 100 HP, tu prends 35 de dégâts → il te reste 65 HP.

---

### ✖️ Multiplication : `*`
Pour **multiplier** deux valeurs.

```php
$xp_par_mob = 50;
$mobs_tues = 10;
$xp_total = $xp_par_mob * $mobs_tues;
echo $xp_total; // Affiche 500
```

💬 **En langage gamer :** Chaque mob donne 50 XP, tu en tues 10 → tu gagnes 500 XP.

---

### ➗ Division : `/`
Pour **diviser** une valeur par une autre.

```php
$gold_total = 1000;
$nb_joueurs = 4;
$gold_par_joueur = $gold_total / $nb_joueurs;
echo $gold_par_joueur; // Affiche 250
```

💬 **En langage gamer :** Tu as 1000 gold à partager entre 4 joueurs → chacun reçoit 250 gold.

---

## 🎯 Les Opérateurs d'Incrémentation (++, --)

### 📊 Imagine ta barre de level-up

Tu es en train de grind et tu comptes tes **levels**.  
Chaque level représente un **numéro** : 1, 2, 3, 4, 5...

**L'opérateur `++`** = **Monter d'un level** 🔼  
**L'opérateur `--`** = **Descendre d'un level** 🔽

---

### 📈 L'opérateur `++` (Incrémenter = Ajouter 1)

Imagine que tu comptes tes **kills** dans une partie.  
Tu en as **5**, puis tu élimines **1 ennemi de plus**.

**Méthode longue :**
```php
$kills = 5;
$kills = $kills + 1; // Tu ajoutes 1
echo $kills; // Affiche 6
```

**Méthode courte avec `++` :**
```php
$kills = 5;
$kills++; // Pareil que $kills = $kills + 1
echo $kills; // Affiche 6
```

💬 **En langage gamer :**  
> "J'avais 5 kills, j'en fais 1 de plus → `$kills++` → j'ai maintenant 6 kills."

🧠 **À retenir :** `$kills++` veut dire "ajoute 1 à `$kills`".

---

### 📉 L'opérateur `--` (Décrémenter = Enlever 1)

Maintenant, tu **utilises** une potion. Tu passes de **4 potions à 3 potions**.

**Méthode longue :**
```php
$potions = 4;
$potions = $potions - 1; // Tu enlèves 1
echo $potions; // Affiche 3
```

**Méthode courte avec `--` :**
```php
$potions = 4;
$potions--; // Pareil que $potions = $potions - 1
echo $potions; // Affiche 3
```

💬 **En langage gamer :**  
> "J'avais 4 potions, j'en utilise 1 → `$potions--` → il m'en reste 3."

🧠 **À retenir :** `$potions--` veut dire "enlève 1 à `$potions`".

---

### 🎬 Exemple concret : Compter les ennemis éliminés

Tu élimines des **ennemis** dans un FPS.  
Chaque fois que tu fais un kill, tu veux **compter** combien tu en as faits.

```php
$kills = 0; // Au début, tu n'as fait aucun kill

// Tu fais un kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 1

// Tu fais un autre kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 2

// Tu fais encore un kill
$kills++;
echo "Kills : $kills<br>"; // Affiche 3
```

💬 **Ce qui se passe :**
- Au début : `$kills = 0`
- Après `$kills++` : `$kills = 1`
- Après `$kills++` : `$kills = 2`
- Après `$kills++` : `$kills = 3`

🧠 **C'est comme si tu montais dans le leaderboard score par score !**

---

### 🔄 Exemple avec `--` : Compter les munitions restantes

Tu as **30 balles** dans ton chargeur.  
Chaque fois que tu tires, tu **décrémentes** le compteur.

```php
$munitions = 30; // Au début, tu as 30 balles

// Tu tires une balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 29

// Tu tires une autre balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 28

// Tu tires encore une balle
$munitions--;
echo "Munitions restantes : $munitions<br>"; // Affiche 27
```

💬 **Ce qui se passe :**
- Au début : `$munitions = 30`
- Après `$munitions--` : `$munitions = 29`
- Après `$munitions--` : `$munitions = 28`
- Après `$munitions--` : `$munitions = 27`

🧠 **C'est comme si tu vidais ton chargeur balle par balle !**

---

### 📊 Tableau récapitulatif

| Opérateur | Signification | Exemple | Résultat |
|-----------|---------------|---------|----------|
| `++` | Ajoute 1 (level up) | `$x = 5; $x++;` | `$x` vaut maintenant **6** |
| `--` | Enlève 1 (utilise un objet) | `$x = 5; $x--;` | `$x` vaut maintenant **4** |

---

### ⚠️ Attention : Avant ou Après ?

Il y a **deux façons** d'utiliser `++` et `--` :

#### 🔵 Après la variable : `$x++` ou `$x--`
Le changement se fait **après** avoir utilisé la variable.

```php
$niveau = 10;
echo $niveau++; // Affiche 10 (puis ajoute 1 après)
echo $niveau;   // Affiche 11
```

💬 **En langage gamer :**  
> "Affiche mon niveau actuel (10), **puis** level-up."

---

#### 🔴 Avant la variable : `++$x` ou `--$x`
Le changement se fait **avant** d'utiliser la variable.

```php
$niveau = 10;
echo ++$niveau; // Level-up d'abord, puis affiche 11
echo $niveau;   // Affiche 11
```

💬 **En langage gamer :**  
> "Level-up **d'abord**, puis affiche mon nouveau niveau (11)."

---

### 🧠 Astuce pour retenir

🎮 **Imagine ton compteur de kills :**
- `$kills++` → "J'affiche mon score actuel (10), **puis** j'ajoute le kill (11)"
- `++$kills` → "J'ajoute le kill **d'abord** (11), puis j'affiche le nouveau score"

👉 **Dans 95% des cas, tu utiliseras `$kills++` ou `$potions--`** (après la variable).

---

## 🔗 Les Opérateurs d'Affectation Combinés

### 🎒 Les raccourcis pour les calculs

Parfois, tu veux **modifier une variable** en y ajoutant, multipliant, etc.

#### ➕ `+=` : Ajouter à la variable

**Méthode longue :**
```php
$gold = 500;
$gold = $gold + 300;
echo $gold; // Affiche 800
```

**Méthode courte :**
```php
$gold = 500;
$gold += 300; // Pareil que $gold = $gold + 300
echo $gold; // Affiche 800
```

💬 **En langage gamer :** "J'avais 500 gold, je loot 300 gold → `$gold += 300` → j'ai 800 gold maintenant."

---

#### ➖ `-=` : Enlever à la variable

```php
$hp = 100;
$hp -= 40; // Pareil que $hp = $hp - 40
echo $hp; // Affiche 60
```

💬 **En langage gamer :** "J'avais 100 HP, je prends 40 de dégâts → il me reste 60 HP."

---

#### ✖️ `*=` : Multiplier la variable

```php
$xp = 100;
$xp *= 2; // Pareil que $xp = $xp * 2
echo $xp; // Affiche 200
```

💬 **En langage gamer :** "J'avais 100 XP, j'active un bonus x2 → j'ai 200 XP."

---

#### ➗ `/=` : Diviser la variable

```php
$cooldown = 60;
$cooldown /= 2; // Pareil que $cooldown = $cooldown / 2
echo $cooldown; // Affiche 30
```

💬 **En langage gamer :** "Mon cooldown était 60s, j'ai un buff -50% → il est maintenant à 30s."

---

## 📋 Tableau récapitulatif complet

| Opérateur | Signification | Exemple | Équivalent | Résultat |
|-----------|---------------|---------|------------|----------|
| `+` | Addition | `$x = 5 + 3` | - | `$x = 8` |
| `-` | Soustraction | `$x = 5 - 3` | - | `$x = 2` |
| `*` | Multiplication | `$x = 5 * 3` | - | `$x = 15` |
| `/` | Division | `$x = 10 / 2` | - | `$x = 5` |
| `++` | Incrémentation | `$x++` | `$x = $x + 1` | Ajoute 1 |
| `--` | Décrémentation | `$x--` | `$x = $x - 1` | Enlève 1 |
| `+=` | Addition combinée | `$x += 3` | `$x = $x + 3` | Ajoute 3 |
| `-=` | Soustraction combinée | `$x -= 3` | `$x = $x - 3` | Enlève 3 |
| `*=` | Multiplication combinée | `$x *= 3` | `$x = $x * 3` | Multiplie par 3 |
| `/=` | Division combinée | `$x /= 3` | `$x = $x / 3` | Divise par 3 |

---

## 💬 En résumé

| Action | Opérateur | Ce que ça fait |
|--------|-----------|----------------|
| Gagner 1 level (ajouter 1) | `$niveau++` | Tu passes du niveau 5 au niveau 6 |
| Perdre 1 vie (enlever 1) | `$vies--` | Tu passes de 3 vies à 2 vies |
| Gagner plusieurs levels | `$niveau += 3` | Tu passes du niveau 5 au niveau 8 |
| Perdre plusieurs HP | `$hp -= 25` | Tu passes de 100 HP à 75 HP |

🧠 **Phrase à retenir :**
> `++` et `--` sont comme **gagner ou perdre 1 point à la fois**.  
> C'est le moyen le plus rapide d'ajouter ou d'enlever 1 !

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Comprendre l'incrémentation
**Énoncé :**  
Tu commences ta partie avec `$kills = 0`.  
Utilise l'opérateur `++` pour incrémenter cette variable **5 fois** (comme si tu faisais 5 kills).  
Affiche le résultat final.

**Ce qu'on attend :**  
- Une variable initialisée à 0
- Utilisation de `++` cinq fois
- L'affichage du nombre final de kills

**Exemple de résultat attendu :**
```
J'ai fait 5 kills.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$kills = 0;
$kills++;
$kills++;
$kills++;
$kills++;
$kills++;
echo "J'ai fait $kills kills.";
?>
```
</details>

---

## 📝 Exercice 2 : Comprendre la décrémentation
**Énoncé :**  
Tu as `$potions = 10` au début de ta quête.  
Utilise l'opérateur `--` pour décrémenter cette variable **3 fois** (comme si tu utilisais 3 potions).  
Affiche combien de potions il te reste.

**Ce qu'on attend :**  
- Une variable initialisée à 10
- Utilisation de `--` trois fois
- L'affichage du nombre de potions restantes

**Exemple de résultat attendu :**
```
Il me reste 7 potions.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$potions = 10;
$potions--;
$potions--;
$potions--;
echo "Il me reste $potions potions.";
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser +=
**Énoncé :**  
Tu as `$gold = 500` gold dans ton inventaire.  
Tu lootes un coffre qui contient 350 gold. Utilise l'opérateur `+=` pour ajouter ce gold.  
Affiche le nouveau total.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `+=`
- L'affichage du total après le loot

**Exemple de résultat attendu :**
```
J'ai maintenant 850 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gold = 500;
$gold += 350;
echo "J'ai maintenant $gold gold.";
?>
```
</details>

---

## 📝 Exercice 4 : Utiliser -=
**Énoncé :**  
Tu as `$hp = 100` points de vie.  
Tu prends un coup critique de 45 dégâts. Utilise l'opérateur `-=` pour soustraire ces dégâts.  
Affiche tes HP restants.

**Ce qu'on attend :**  
- Utilisation de l'opérateur `-=`
- L'affichage des HP après l'attaque

**Exemple de résultat attendu :**
```
HP restants : 55
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$hp = 100;
$hp -= 45;
echo "HP restants : $hp";
?>
```
</details>

---

## 📝 Exercice 5 : Ma première variable
**Énoncé :**  
Crée une variable appelée `$pseudo` qui contient ton pseudo de gamer, puis affiche-la avec `echo`.

**Ce qu'on attend :**  
- Une variable `$pseudo` correctement créée
- L'affichage de ton pseudo à l'écran

**Exemple de résultat attendu :**
```
xXDarkSniperXx
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$pseudo = "xXDarkSniperXx";
echo $pseudo;
?>
```
</details>

---

## 📝 Exercice 6 : Profil de joueur complet
**Énoncé :**  
Crée deux variables : `$pseudo` avec ton pseudo et `$niveau` avec ton niveau.  
Affiche ensuite une phrase complète : "Je suis [pseudo] niveau [niveau]."

**Ce qu'on attend :**  
- Deux variables correctement déclarées
- Une phrase complète qui utilise ces deux variables

**Exemple de résultat attendu :**
```
Je suis xXDarkSniperXx niveau 42.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$pseudo = "xXDarkSniperXx";
$niveau = 42;
echo "Je suis $pseudo niveau $niveau.";
?>
```
</details>

---

## 📝 Exercice 7 : Calculer des dégâts
**Énoncé :**  
Tu veux calculer tes dégâts totaux avec ton arme.  
Crée deux variables : `$degats_arme = 50` et `$bonus_critique = 25`.  
Calcule les dégâts totaux dans une nouvelle variable `$degats_total` et affiche le résultat.

**Ce qu'on attend :**  
- Trois variables : `$degats_arme`, `$bonus_critique` et `$degats_total`
- Le calcul correct de l'addition
- L'affichage des dégâts

**Exemple de résultat attendu :**
```
Dégâts totaux : 75
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$degats_arme = 50;
$bonus_critique = 25;
$degats_total = $degats_arme + $bonus_critique;
echo "Dégâts totaux : $degats_total";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer le coût d'un achat
**Énoncé :**  
Tu veux acheter 5 potions de soin. Chaque potion coûte 20 gold.  
Crée une variable `$prix_potion = 20` et une variable `$quantite = 5`.  
Calcule le prix total et affiche-le.

**Ce qu'on attend :**  
- Deux variables pour le prix unitaire et la quantité
- Une variable pour le total
- L'affichage du montant total

**Exemple de résultat attendu :**
```
Le prix total est de 100 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_potion = 20;
$quantite = 5;
$total = $prix_potion * $quantite;
echo "Le prix total est de $total gold.";
?>
```
</details>

---

## 📝 Exercice 9 : Modifier une variable
**Énoncé :**  
Crée une variable `$arme = "Épée"`.  
Affiche d'abord "Arme équipée : Épée".  
Ensuite, change la valeur de `$arme` en "Arc" et affiche "Arme équipée : Arc".

**Ce qu'on attend :**  
- Une variable créée puis modifiée
- Deux affichages différents montrant que la variable a changé

**Exemple de résultat attendu :**
```
Arme équipée : Épée
Arme équipée : Arc
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$arme = "Épée";
echo "Arme équipée : $arme<br>";
$arme = "Arc";
echo "Arme équipée : $arme";
?>
```
</details>

---

## 📝 Exercice 10 : Additionner des ressources
**Énoncé :**  
Dans ton jeu de survie, tu as `$bois = 25` et `$pierre = 18`.  
Calcule le nombre total de ressources dans une variable `$total_ressources` et affiche le résultat.

**Ce qu'on attend :**  
- Trois variables au total
- Une addition correcte
- Un message clair avec le résultat

**Exemple de résultat attendu :**
```
J'ai un total de 43 ressources.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$bois = 25;
$pierre = 18;
$total_ressources = $bois + $pierre;
echo "J'ai un total de $total_ressources ressources.";
?>
```
</details>

---

## 📝 Exercice 11 : Calculer l'XP nécessaire pour level-up
**Énoncé :**  
Tu veux savoir combien d'XP il te manque pour passer au niveau suivant.  
Crée les variables suivantes :
- `$xp_actuel = 750`
- `$xp_prochain_niveau = 1000`

Calcule l'XP manquant et affiche le résultat.

**Ce qu'on attend :**  
- Calcul de la différence (XP manquant = XP prochain niveau - XP actuel)
- Affichage du résultat

**Exemple de résultat attendu :**
```
Il te manque 250 XP pour passer au niveau suivant.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$xp_actuel = 750;
$xp_prochain_niveau = 1000;
$xp_manquant = $xp_prochain_niveau - $xp_actuel;
echo "Il te manque $xp_manquant XP pour passer au niveau suivant.";
?>
```
</details>

---

## 📝 Exercice 12 : Calculer ton K/D ratio
**Énoncé :**  
Dans un FPS, tu veux calculer ton ratio kills/deaths (K/D).  
Crée les variables suivantes :
- `$kills = 45`
- `$deaths = 15`

Calcule ton K/D ratio dans une variable `$kd_ratio` et affiche-le.

**Ce qu'on attend :**  
- Division des kills par les deaths
- Affichage du ratio

**Exemple de résultat attendu :**
```
Ton K/D ratio est de 3
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php

- ✅ Stocker différents types de valeurs (nombres, texte)
- ✅ Afficher le contenu d'une variable
- ✅ Modifier la valeur d'une variable
- ✅ Faire des calculs avec plusieurs variables
- ✅ Utiliser les opérateurs d'incrémentation (`++`, `--`)
- ✅ Utiliser les opérateurs combinés (`+=`, `-=`, `*=`, `/=`)
- ✅ Combiner des variables dans des messages

**Prochaine étape :** Les conditions (if/else) pour créer des systèmes de jeu plus intelligents ! 🚀

---

## 🎮 Bonus : Mini-projet final

**Crée un système de combat simplifié !**

Utilise tout ce que tu as appris pour créer un petit système où :
1. Ton personnage a des HP, des dégâts d'arme, et un bonus critique
2. Un ennemi a aussi des HP
3. Tu attaques l'ennemi et tu calcules ses HP restants
4. Affiche le résultat du combat

Exemple de code pour t'inspirer :
```php
<?php
// Ton personnage
$pseudo = "xXDarkKnightXx";
$hp_joueur = 100;
$degats_arme = 30;
$bonus_critique = 15;

// L'ennemi
$nom_ennemi = "Goblin";
$hp_ennemi = 80;

// Combat
echo "=== COMBAT ===<br>";
echo "$pseudo VS $nom_ennemi<br><br>";

$degats_total = $degats_arme + $bonus_critique;
$hp_ennemi -= $degats_total;

echo "Tu infliges $degats_total points de dégâts !<br>";
echo "HP du $nom_ennemi : $hp_ennemi<br>";

if($hp_ennemi <= 0) {
    echo "🏆 VICTOIRE ! Le $nom_ennemi est vaincu !";
} else {
    echo "⚔️ Le combat continue...";
}
?>
```

**À toi de jouer ! Modifie les valeurs, ajoute des variables, expérimente ! 🎯**

**Prochaine étape :** Les conditions (if/else) pour rendre ton code plus intelligent ! 🚀