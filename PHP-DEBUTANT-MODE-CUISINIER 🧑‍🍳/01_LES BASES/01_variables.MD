# 🍳 Cours PHP pour Débutant – Les Variables 👨‍🍳

---

## 🚨 Pourquoi une variable ? Comprendre avec un plan de travail 🔪

Imagine que tu es dans ta cuisine.
Tu as devant toi un **grand plan de travail**, bien propre et bien rangé.
Dessus, tu poses tout ce dont tu as besoin pour ta recette :
🥚 des œufs, 🧈 du beurre, 📏 ta balance, 📋 ta fiche recette, 💶 le coût par portion.

Mais pour ne pas te perdre, tu **mets une étiquette devant chaque chose** :
> "Œufs", "Beurre", "Recette", "Coût par portion"…

Ainsi, quand tu veux quelque chose, tu n`as pas besoin de réfléchir :
tu regardes l`étiquette et tu trouves **directement** ce que tu veux.

💬 En PHP, c`est pareil :
- Chaque **étiquette** correspond à un **nom de variable**.
- Chaque **ingrédient sur le plan de travail** correspond à une **valeur**.

Exemple :
```php
$oeufs = 8;
$beurre = 6;
$cout_portion = 4;
```

| Étiquette (nom) | Contenu (valeur) |
|-----------------|------------------|
| oeufs | 8 |
| beurre | 6 |
| cout_portion | 4 |

🧠 Ton ordinateur a une "table de mémoire".
Chaque fois que tu crées une variable, il pose la valeur sur sa table et colle une étiquette dessus pour la reconnaître plus tard.

---

## 💡 Pourquoi c`est utile

Si tu veux calculer le coût d`une recette, tu n`as pas besoin de tout retenir dans ta tête.
Tu peux **réutiliser les étiquettes** autant que tu veux :

```php
$oeufs = 8;
$beurre = 6;
$total = $oeufs + $beurre;

echo "Le total d`ingrédients est $total.";
```

Résultat :
```
Le total d`ingrédients est 14.
```

💬 Tu viens de dire à ton ordinateur :
> "Regarde les deux valeurs sur le plan de travail (œufs et beurre), additionne-les, et mets le résultat dans une nouvelle étiquette appelée total."

---

## 🧰 1️⃣ Créer une variable

Chaque variable commence **toujours** par `$` en PHP.
C`est comme si tu mettais une étiquette sur ton plan de travail.

```php
$client = "Dubois";
$portions = 25;
$cout_portion = 4;
```

💬 Tu viens de coller trois étiquettes :
| Étiquette | Valeur |
|------------|--------|
| client | "Dubois" |
| portions | 25 |
| cout_portion | 4 |

---

## 🧮 2️⃣ Utiliser une variable

Tu veux lire ce qu`il y a sur une étiquette ?
Tu appelles simplement son nom :
```php
echo $client;
```

Résultat :
```
Dubois
```

💬 Ton ordinateur regarde sur sa table, trouve l`étiquette "client" et lit ce qu`il y a devant.

---

## 🔁 3️⃣ Changer la valeur d`une variable

Tu veux remplacer le nom du client ?
Pas besoin de refaire la table — tu **remplaces juste la valeur** :

```php
$client = "Martin";
```

💬 L`étiquette reste la même, mais ce qu`il y a devant change.

---

## 🍳 4️⃣ Pourquoi "variable" ?

Parce que son **contenu peut varier**.
Tu peux **changer ce qu`il y a dessus** sans changer le nom.

C`est comme si tu avais une étiquette "bol" sur ton plan de travail :
parfois tu y mets de la farine, parfois du sucre.
Mais l`étiquette, elle, reste "bol".

---

## ⚙️ 5️⃣ Exemple concret

Tu veux calculer le coût d`un plat pour un événement :
```php
$portions = 5;
$personnes_par_table = 2;
$cout_portion = 4;

$total_portions = $portions * $personnes_par_table;
$cout_total = $total_portions * $cout_portion;

echo "Le plat coûte $cout_total euros.";
```

Résultat :
```
Le plat coûte 40 euros.
```

💬 Tu as créé plusieurs étiquettes (`portions`, `personnes_par_table`, `cout_portion`, etc.)
et PHP fait le calcul pour toi.

---

## 🧩 6️⃣ En résumé simple

| Ce que tu fais | Dans la vraie vie | En PHP |
|----------------|-------------------|--------|
| Tu poses un ingrédient sur ton plan de travail | Tu ranges une donnée | Tu crées une variable |
| Tu mets une étiquette dessus | Tu donnes un nom | Tu écris `$nom = valeur;` |
| Tu lis l`étiquette | Tu veux savoir ce que c`est | Tu fais `echo $nom;` |
| Tu remplaces le contenu | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c`est comme une **étiquette sur ton plan de travail**.
> Tu peux y poser n`importe quelle valeur, la changer quand tu veux,
> et ton ordinateur s`en souviendra jusqu`à la fin du service.

---

# 🔧 Les Opérateurs en PHP

## 🧮 Les Opérateurs Arithmétiques (pour calculer)

Dans ta cuisine, tu dois souvent **calculer** des choses : additionner des ingrédients, multiplier des portions, etc.
En PHP, tu utilises des **opérateurs** pour faire ces calculs.

### ➕ Addition : `+`
Pour **ajouter** deux valeurs ensemble.

```php
$bols_matin = 5;
$bols_aprem = 3;
$total = $bols_matin + $bols_aprem;
echo $total; // Affiche 8
```

💬 **Dans la vraie vie :** Tu avais 5 bols le matin, tu en sors 3 l`après-midi → tu as 8 bols au total.

---

### ➖ Soustraction : `-`
Pour **enlever** une valeur d`une autre.

```php
$bols_debut = 10;
$bols_utilises = 4;
$bols_restants = $bols_debut - $bols_utilises;
echo $bols_restants; // Affiche 6
```

💬 **Dans la vraie vie :** Tu avais 10 bols, tu en utilises 4 → il t`en reste 6.

---

### ✖️ Multiplication : `*`
Pour **multiplier** deux valeurs.

```php
$prix_portion = 15;
$quantite = 6;
$total = $prix_portion * $quantite;
echo $total; // Affiche 90
```

💬 **Dans la vraie vie :** Une portion coûte 15€, tu en prépares 6 → ça fait 90€.

---

### ➗ Division : `/`
Pour **diviser** une valeur par une autre.

```php
$budget_total = 1000;
$nb_jours = 5;
$budget_par_jour = $budget_total / $nb_jours;
echo $budget_par_jour; // Affiche 200
```

💬 **Dans la vraie vie :** Tu as 1000€ pour 5 jours de service → tu peux dépenser 200€ par jour.

---

## 🎯 Les Opérateurs d`Incrémentation (++, --)

### 🧂 Imagine une étagère à épices dans ta cuisine

Tu es devant une **étagère à épices** avec des niveaux numérotés.
Chaque niveau représente un **numéro** : 1, 2, 3, 4, 5...

**L`opérateur `++`** = **Monter d`un niveau** 🔼
**L`opérateur `--`** = **Descendre d`un niveau** 🔽

---

### 📈 L`opérateur `++` (Incrémenter = Ajouter 1)

Imagine que tu comptes tes **bols** en cuisine.
Tu en as **3**, puis ton commis t`en apporte **1 de plus**.

**Méthode longue :**
```php
$bols = 3;
$bols = $bols + 1; // Tu ajoutes 1
echo $bols; // Affiche 4
```

**Méthode courte avec `++` :**
```php
$bols = 3;
$bols++; // Pareil que $bols = $bols + 1
echo $bols; // Affiche 4
```

💬 **En langage cuisinier :**
> "J`avais 3 bols, j`en reçois 1 → `$bols++` → j`ai maintenant 4 bols."

🧠 **À retenir :** `$bols++` veut dire "ajoute 1 à `$bols`".

---

### 📉 L`opérateur `--` (Décrémenter = Enlever 1)

Maintenant, tu **utilises** un bol. Tu passes de **4 bols à 3 bols**.

**Méthode longue :**
```php
$bols = 4;
$bols = $bols - 1; // Tu enlèves 1
echo $bols; // Affiche 3
```

**Méthode courte avec `--` :**
```php
$bols = 4;
$bols--; // Pareil que $bols = $bols - 1
echo $bols; // Affiche 3
```

💬 **En langage cuisinier :**
> "J`avais 4 bols, j`en utilise 1 → `$bols--` → il m`en reste 3."

🧠 **À retenir :** `$bols--` veut dire "enlève 1 à `$bols`".

---

### 🎬 Exemple concret : Compter les œufs cassés

Tu casses des **œufs** pour faire une omelette.
Chaque fois que tu casses un œuf, tu veux **compter** combien tu en as cassés.

```php
$oeufs_casses = 0; // Au début, tu n`as cassé aucun œuf

// Tu casses un œuf
$oeufs_casses++;
echo "Œufs cassés : $oeufs_casses<br>"; // Affiche 1

// Tu casses un autre œuf
$oeufs_casses++;
echo "Œufs cassés : $oeufs_casses<br>"; // Affiche 2

// Tu casses encore un œuf
$oeufs_casses++;
echo "Œufs cassés : $oeufs_casses<br>"; // Affiche 3
```

💬 **Ce qui se passe :**
- Au début : `$oeufs_casses = 0`
- Après `$oeufs_casses++` : `$oeufs_casses = 1`
- Après `$oeufs_casses++` : `$oeufs_casses = 2`
- Après `$oeufs_casses++` : `$oeufs_casses = 3`

🧠 **C`est comme si tu montais l`étagère niveau par niveau !**

---

### 🔄 Exemple avec `--` : Compter les portions restantes

Tu as **10 portions** prêtes.
Chaque fois que tu sers une portion, tu **décrémente** le compteur.

```php
$portions_restantes = 10; // Au début, tu as 10 portions

// Tu sers une portion
$portions_restantes--;
echo "Portions restantes : $portions_restantes<br>"; // Affiche 9

// Tu sers une autre portion
$portions_restantes--;
echo "Portions restantes : $portions_restantes<br>"; // Affiche 8

// Tu sers encore une portion
$portions_restantes--;
echo "Portions restantes : $portions_restantes<br>"; // Affiche 7
```

💬 **Ce qui se passe :**
- Au début : `$portions_restantes = 10`
- Après `$portions_restantes--` : `$portions_restantes = 9`
- Après `$portions_restantes--` : `$portions_restantes = 8`
- Après `$portions_restantes--` : `$portions_restantes = 7`

🧠 **C`est comme si tu descendais l`étagère niveau par niveau !**

---

### 📊 Tableau récapitulatif

| Opérateur | Signification | Exemple | Résultat |
|-----------|---------------|---------|----------|
| `++` | Ajoute 1 (monte d`un niveau) | `$x = 5; $x++;` | `$x` vaut maintenant **6** |
| `--` | Enlève 1 (descend d`un niveau) | `$x = 5; $x--;` | `$x` vaut maintenant **4** |

---

### ⚠️ Attention : Avant ou Après ?

Il y a **deux façons** d`utiliser `++` et `--` :

#### 🔵 Après la variable : `$x++` ou `$x--`
Le changement se fait **après** avoir utilisé la variable.

```php
$bols = 5;
echo $bols++; // Affiche 5 (puis ajoute 1 après)
echo $bols;   // Affiche 6
```

💬 **En langage cuisinier :**
> "Regarde combien j`ai de bols (5), **puis** ajoute-en 1."

---

#### 🔴 Avant la variable : `++$x` ou `--$x`
Le changement se fait **avant** d`utiliser la variable.

```php
$bols = 5;
echo ++$bols; // Ajoute 1 d`abord, puis affiche 6
echo $bols;   // Affiche 6
```

💬 **En langage cuisinier :**
> "Ajoute-en 1 **d`abord**, puis regarde combien j`en ai (6)."

---

### 🧠 Astuce pour retenir

🧂 **Imagine ton étagère à épices :**
- `$bols++` → "Je compte d`abord où je suis (5), **puis** je monte d`un niveau (6)"
- `++$bols` → "Je monte d`un niveau **d`abord** (6), puis je regarde où je suis"

👉 **Dans 95% des cas, tu utiliseras `$bols++` ou `$bols--`** (après la variable).

---

## 🔗 Les Opérateurs d`Affectation Combinés

### 🧰 Les raccourcis pour les calculs

Parfois, tu veux **modifier une variable** en y ajoutant, multipliant, etc.

#### ➕ `+=` : Ajouter à la variable

**Méthode longue :**
```php
$bols = 5;
$bols = $bols + 3;
echo $bols; // Affiche 8
```

**Méthode courte :**
```php
$bols = 5;
$bols += 3; // Pareil que $bols = $bols + 3
echo $bols; // Affiche 8
```

💬 **En langage cuisinier :** "J`avais 5 bols, on m`en livre 3 → `$bols += 3` → j`en ai 8 maintenant."

---

#### ➖ `-=` : Enlever à la variable

```php
$oeufs = 100;
$oeufs -= 20; // Pareil que $oeufs = $oeufs - 20
echo $oeufs; // Affiche 80
```

💬 **En langage cuisinier :** "J`avais 100 œufs, j`en utilise 20 → il m`en reste 80."

---

#### ✖️ `*=` : Multiplier la variable

```php
$prix = 50;
$prix *= 2; // Pareil que $prix = $prix * 2
echo $prix; // Affiche 100
```

💬 **En langage cuisinier :** "Le prix était 50€, il double → ça fait 100€."

---

#### ➗ `/=` : Diviser la variable

```php
$budget = 1000;
$budget /= 2; // Pareil que $budget = $budget / 2
echo $budget; // Affiche 500
```

💬 **En langage cuisinier :** "J`avais 1000€, je le partage en 2 → j`ai 500€ de chaque côté."

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
| Monter d`un niveau (ajouter 1) | `$bols++` | Tu passes de 5 à 6 bols |
| Descendre d`un niveau (enlever 1) | `$bols--` | Tu passes de 5 à 4 bols |
| Ajouter plusieurs niveaux | `$bols += 3` | Tu passes de 5 à 8 bols |
| Enlever plusieurs niveaux | `$bols -= 2` | Tu passes de 5 à 3 bols |

🧠 **Phrase à retenir :**
> `++` et `--` sont comme **monter ou descendre une étagère, un niveau à la fois**.
> C`est le moyen le plus rapide d`ajouter ou d`enlever 1 !

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Comprendre l`incrémentation
**Énoncé :**
Tu commences ta journée avec `$oeufs_casses = 0`.
Utilise l`opérateur `++` pour incrémenter cette variable **5 fois** (comme si tu cassais 5 œufs).
Affiche le résultat final.

**Ce qu`on attend :**
- Une variable initialisée à 0
- Utilisation de `++` cinq fois
- L`affichage du nombre final d`œufs cassés

**Exemple de résultat attendu :**
```
J`ai cassé 5 œufs.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$oeufs_casses = 0;
$oeufs_casses++;
$oeufs_casses++;
$oeufs_casses++;
$oeufs_casses++;
$oeufs_casses++;
echo "J`ai cassé $oeufs_casses œufs.";
?>
```
</details>

---

## 📝 Exercice 2 : Comprendre la décrémentation
**Énoncé :**
Tu as `$portions_restantes = 10` au début du service.
Utilise l`opérateur `--` pour décrémenter cette variable **3 fois** (comme si tu servais 3 portions).
Affiche combien de portions il te reste.

**Ce qu`on attend :**
- Une variable initialisée à 10
- Utilisation de `--` trois fois
- L`affichage du nombre de portions restantes

**Exemple de résultat attendu :**
```
Il me reste 7 portions.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$portions_restantes = 10;
$portions_restantes--;
$portions_restantes--;
$portions_restantes--;
echo "Il me reste $portions_restantes portions.";
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser +=
**Énoncé :**
Tu as `$oeufs = 50` œufs dans ta cuisine.
Un fournisseur t`en livre 30 de plus. Utilise l`opérateur `+=` pour ajouter ces œufs.
Affiche le nouveau total.

**Ce qu`on attend :**
- Utilisation de l`opérateur `+=`
- L`affichage du total après livraison

**Exemple de résultat attendu :**
```
J`ai maintenant 80 œufs.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$oeufs = 50;
$oeufs += 30;
echo "J`ai maintenant $oeufs œufs.";
?>
```
</details>

---

## 📝 Exercice 4 : Utiliser -=
**Énoncé :**
Tu as `$budget = 500` euros.
Tu achètes des ingrédients pour 150 euros. Utilise l`opérateur `-=` pour soustraire cette dépense.
Affiche le budget restant.

**Ce qu`on attend :**
- Utilisation de l`opérateur `-=`
- L`affichage du budget après achat

**Exemple de résultat attendu :**
```
Budget restant : 350 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 500;
$budget -= 150;
echo "Budget restant : $budget euros.";
?>
```
</details>

---

## 📝 Exercice 5 : Ma première variable
**Énoncé :**
Crée une variable appelée `$prenom` qui contient ton prénom, puis affiche-la avec `echo`.

**Ce qu`on attend :**
- Une variable `$prenom` correctement créée
- L`affichage de ton prénom à l`écran

**Exemple de résultat attendu :**
```
Laurent
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prenom = "Laurent";
echo $prenom;
?>
```
</details>

---

## 📝 Exercice 6 : Présentation complète
**Énoncé :**
Crée deux variables : `$prenom` avec ton prénom et `$age` avec ton âge.
Affiche ensuite une phrase complète : "Je m`appelle [prénom] et j`ai [âge] ans."

**Ce qu`on attend :**
- Deux variables correctement déclarées
- Une phrase complète qui utilise ces deux variables

**Exemple de résultat attendu :**
```
Je m`appelle Laurent et j`ai 45 ans.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prenom = "Laurent";
$age = 45;
echo "Je m`appelle $prenom et j`ai $age ans.";
?>
```
</details>

---

## 📝 Exercice 7 : Calculer une quantité de plat
**Énoncé :**
Tu dois calculer la quantité totale de plats à préparer.
Crée deux variables : `$portions = 5` et `$tables = 3`.
Calcule le total dans une nouvelle variable `$total_plats` et affiche le résultat.

**Ce qu`on attend :**
- Trois variables : `$portions`, `$tables` et `$total_plats`
- Le calcul correct de la multiplication
- L`affichage du total

**Exemple de résultat attendu :**
```
Je dois préparer 15 plats au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$portions = 5;
$tables = 3;
$total_plats = $portions * $tables;
echo "Je dois préparer $total_plats plats au total.";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer un coût total
**Énoncé :**
Tu achètes 8 paquets de farine. Chaque paquet coûte 12 euros.
Crée une variable `$prix_paquet = 12` et une variable `$quantite = 8`.
Calcule le prix total et affiche-le.

**Ce qu`on attend :**
- Deux variables pour le prix unitaire et la quantité
- Une variable pour le total
- L`affichage du montant total

**Exemple de résultat attendu :**
```
Le prix total est de 96 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_paquet = 12;
$quantite = 8;
$total = $prix_paquet * $quantite;
echo "Le prix total est de $total euros.";
?>
```
</details>

---

## 📝 Exercice 9 : Modifier une variable
**Énoncé :**
Crée une variable `$client = "Dubois"`.
Affiche d`abord "Bonjour Dubois".
Ensuite, change la valeur de `$client` en "Martin" et affiche "Bonjour Martin".

**Ce qu`on attend :**
- Une variable créée puis modifiée
- Deux affichages différents montrant que la variable a changé

**Exemple de résultat attendu :**
```
Bonjour Dubois
Bonjour Martin
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$client = "Dubois";
echo "Bonjour $client<br>";
$client = "Martin";
echo "Bonjour $client";
?>
```
</details>

---

## 📝 Exercice 10 : Additionner des ingrédients
**Énoncé :**
Dans ta cuisine, tu as `$paquets_farine = 5` et `$paquets_sucre = 7`.
Calcule le nombre total de paquets dans une variable `$total_paquets` et affiche le résultat.

**Ce qu`on attend :**
- Trois variables au total
- Une addition correcte
- Un message clair avec le résultat

**Exemple de résultat attendu :**
```
J`ai un total de 12 paquets en stock.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$paquets_farine = 5;
$paquets_sucre = 7;
$total_paquets = $paquets_farine + $paquets_sucre;
echo "J`ai un total de $total_paquets paquets en stock.";
?>
```
</details>

---

## 📝 Exercice 11 : Calculer le coût d`un menu complet
**Énoncé :**
Tu dois calculer le coût d`un menu pour un événement.
Crée les variables suivantes :
- `$nb_entrees = 4`
- `$nb_plats = 5`
- `$cout_portion = 35`

Calcule d`abord le nombre total de portions, puis le prix total du menu, et affiche les deux résultats.

**Ce qu`on attend :**
- Calcul du nombre total de portions (entrées + plats)
- Calcul du prix total (portions × coût par portion)
- Affichage des deux informations

**Exemple de résultat attendu :**
```
Nombre de portions : 9
Prix total du menu : 315 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$nb_entrees = 4;
$nb_plats = 5;
$cout_portion = 35;

$total_portions = $nb_entrees + $nb_plats;
$prix_total = $total_portions * $cout_portion;

echo "Nombre de portions : $total_portions<br>";
echo "Prix total du menu : $prix_total euros";
?>
```
</details>

---

## 📝 Exercice 12 : Incrémenter une variable
**Énoncé :**
Tu commences le service avec `$bols = 3` dans ta cuisine.
Un collègue t`en apporte 4 de plus. Modifie la variable `$bols` en lui ajoutant 4, puis affiche le nouveau nombre de bols.

**Ce qu`on attend :**
- Une variable initialisée à 3
- Une modification qui ajoute 4 à cette variable
- L`affichage du résultat final

**Exemple de résultat attendu :**
```
Tu as maintenant 7 bols.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$bols = 3;
$bols = $bols + 4;
echo "Tu as maintenant $bols bols.";
?>
```
</details>

---

## 📝 Exercice 13 : Variables de texte
**Énoncé :**
Crée trois variables :
- `$restaurant = "Le Gourmet"`
- `$ville = "Lyon"`
- `$telephone = "04 78 12 34 56"`

Affiche ensuite un message complet : "Le restaurant [restaurant] situé à [ville] - Tél : [telephone]"

**Ce qu`on attend :**
- Trois variables de type texte (string)
- Un message formaté qui utilise toutes les variables

**Exemple de résultat attendu :**
```
Le restaurant Le Gourmet situé à Lyon - Tél : 04 78 12 34 56
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$restaurant = "Le Gourmet";
$ville = "Lyon";
$telephone = "04 78 12 34 56";
echo "Le restaurant $restaurant situé à $ville - Tél : $telephone";
?>
```
</details>

---

## 📝 Exercice 14 : Calcul complexe avec plusieurs variables
**Énoncé :**
Tu dois calculer le coût total d`un service. Tu as besoin de :
- `$heures_travail = 16` (nombre d`heures travaillées)
- `$taux_horaire = 25` (euros par heure)
- `$ingredients = 150` (coût des ingrédients en euros)

Calcule d`abord le coût de la main d`œuvre (`$cout_main_oeuvre`), puis le coût total du service (`$cout_total`) qui est la somme de la main d`œuvre et des ingrédients. Affiche tous les détails.

**Ce qu`on attend :**
- Plusieurs calculs intermédiaires
- L`utilisation de toutes les variables créées
- Un affichage détaillé du coût

**Exemple de résultat attendu :**
```
Heures de travail : 16h à 25€/h = 400€
Ingrédients : 150€
Coût total du service : 550€
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$heures_travail = 16;
$taux_horaire = 25;
$ingredients = 150;

$cout_main_oeuvre = $heures_travail * $taux_horaire;
$cout_total = $cout_main_oeuvre + $ingredients;

echo "Heures de travail : {$heures_travail}h à {$taux_horaire}€/h = {$cout_main_oeuvre}€<br>";
echo "Ingrédients : {$ingredients}€<br>";
echo "Coût total du service : {$cout_total}€";
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant les bases des variables en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une variable avec le symbole `$`
- ✅ Stocker différents types de valeurs (nombres, texte)
- ✅ Afficher le contenu d`une variable
- ✅ Modifier la valeur d`une variable
- ✅ Faire des calculs avec plusieurs variables
- ✅ Combiner des variables dans des messages

**Prochaine étape :** Les conditions (if/else) pour rendre ton code plus intelligent ! 🚀
