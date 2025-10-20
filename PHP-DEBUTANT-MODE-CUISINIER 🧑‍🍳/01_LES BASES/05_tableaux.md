# 🍳 Cours PHP pour Débutant – Les Tableaux (Arrays) 👨‍🍳

---

## 👋 Introduction

Dans ta cuisine, tu as **plusieurs ingrédients** : des œufs, du sucre, de la farine.
Tu pourrais créer une variable pour chaque ingrédient :

```php
$ingredient1 = "œufs";
$ingredient2 = "sucre";
$ingredient3 = "farine";
$ingredient4 = "beurre";
$ingredient5 = "sel";
$ingredient6 = "levure";
// ... et si tu as 50 ingrédients ??? 😱
```

Mais si tu as 10 ingrédients, ou 100 ?
Ce serait **trop long et fatigant** !

👉 C`est pour ça qu`en PHP, on utilise les **tableaux** (appelés *arrays* en anglais).

## 🧺 C`est quoi un tableau ?

Un **tableau**, c`est comme un **grand plateau d`ingrédients** où tu ranges **plusieurs choses à la fois**.

Au lieu d`avoir 10 variables différentes, tu as **UN SEUL plateau** qui contient tout !

```php
$ingredients = ["œufs", "sucre", "farine", "beurre", "sel"];
```

💬 Tu peux lire ça comme :
> "J`ai un plateau qui s`appelle `$ingredients` avec 5 ingrédients dedans."

---

## 🧺 1️⃣ Créer un tableau

Pour créer un tableau, on utilise les **crochets** `[ ]` :

```php
$ingredients = ["œufs", "sucre", "farine"];
```

🧠 **À retenir :**
- Les crochets `[ ]` = "C`est un plateau"
- Les virgules `,` = "Séparent les ingrédients sur le plateau"
- Les guillemets `" "` = "Pour du texte"

### Autre exemple avec des nombres :

```php
$portions = [15, 25, 30, 12];
```

💬 "J`ai un plateau de portions qui contient 4 quantités."

---

## 🔢 2️⃣ Comprendre les crochets [ ] et les numéros (INDEX)

### 🚨 C`EST LA PARTIE LA PLUS IMPORTANTE !

C`est souvent la partie la plus difficile au début, alors on va prendre notre temps.

Quand tu crées un tableau, PHP range automatiquement les éléments dans des **cases numérotées**.

Imagine un **plan de travail avec des bols** :

```
┌─────────┬─────────┬─────────┐
│  Bol 0  │  Bol 1  │  Bol 2  │
├─────────┼─────────┼─────────┤
│  œufs   │  sucre  │  farine │
└─────────┴─────────┴─────────┘
```

| Numéro (index) | Ingrédient |
|----------------|------------|
| **0** | œufs |
| **1** | sucre |
| **2** | farine |

💡 Ces numéros sont appelés des **index** (ou indices en français).

---

## 🤔 3️⃣ Pourquoi ça commence à ZÉRO ???

### 🚨 QUESTION QUE TOUT LE MONDE SE POSE !

Tu te demandes sûrement :
> "Pourquoi le premier bol, c`est **0** et pas **1** ?"

C`est parce que **les ordinateurs comptent à partir de zéro**.
C`est une vieille habitude des langages de programmation.

### 🥞 Imagine une pile d`assiettes :

**Dans la vraie vie :**
- 1ère assiette
- 2ème assiette
- 3ème assiette

**En programmation :**
- 0 = première assiette (celle du bas)
- 1 = deuxième assiette
- 2 = troisième assiette

C`est juste une **autre façon de compter**, mais on s`y habitue vite !

### 📊 Tableau comparatif :

| Position réelle | Index PHP | Contenu |
|-----------------|-----------|---------|
| 1er élément | 0 | œufs |
| 2ème élément | 1 | sucre |
| 3ème élément | 2 | farine |

🧠 **Phrase à retenir :**
> "Le premier, c`est ZÉRO. Le deuxième, c`est UN. Le troisième, c`est DEUX."

---

## 👀 4️⃣ Accéder à un seul élément (lire un bol)

Tu veux voir ce qu`il y a dans un bol précis sur ton plan de travail.

Pour ça, tu utilises les **crochets avec un numéro** :

```php
$ingredients = ["œufs", "sucre", "farine"];

echo $ingredients[0]; // Affiche "œufs"
```

💬 Les crochets `[0]` veulent dire :
> "Va chercher ce qu`il y a **dans le bol numéro 0**."

### Autres exemples :

```php
echo $ingredients[0]; // œufs (le 1er)
echo $ingredients[1]; // sucre (le 2ème)
echo $ingredients[2]; // farine (le 3ème)
```

### 🎯 Exemple complet :

```php
$ingredients = ["œufs", "sucre", "farine"];

echo "Le premier ingrédient est : " . $ingredients[0] . "<br>";
echo "Le deuxième ingrédient est : " . $ingredients[1] . "<br>";
echo "Le troisième ingrédient est : " . $ingredients[2] . "<br>";
```

**Résultat :**
```
Le premier ingrédient est : œufs
Le deuxième ingrédient est : sucre
Le troisième ingrédient est : farine
```

---

## ⚠️ ERREUR FRÉQUENTE À ÉVITER

### ❌ MAUVAIS :
```php
$ingredients = ["œufs", "sucre", "farine"];
echo $ingredients[3]; // ERREUR ! Il n'y a que 3 éléments (0, 1, 2)
```

💬 **Pourquoi c`est une erreur ?**
Ton tableau a 3 éléments :
- Bol 0 = œufs
- Bol 1 = sucre
- Bol 2 = farine

Il n`y a **pas de bol 3** ! PHP va afficher un message d`erreur.

🧠 **Règle d`or :**
> Si tu as **N éléments**, les index vont de **0 à N-1**.
> 3 éléments → index de 0 à 2
> 10 éléments → index de 0 à 9

---

## 🔁 5️⃣ Afficher tout le tableau avec `foreach`

Tu veux voir **tous les ingrédients**, un par un, sans te fatiguer.

Au lieu de faire plein de `echo`, on utilise une **boucle foreach** :

```php
$ingredients = ["œufs", "sucre", "farine"];

foreach ($ingredients as $ingredient) {
    echo "J'ajoute $ingredient à ma recette<br>";
}
```

### 🔍 Décortiquons cette ligne :

```php
foreach ($ingredients as $ingredient)
```

| Partie | Signification |
|--------|---------------|
| `foreach` | "Pour chaque" |
| `$ingredients` | "Dans mon plateau d`ingrédients" |
| `as` | "En tant que" |
| `$ingredient` | "Appelle chaque élément : un ingrédient" |

💬 Tu peux lire ça comme :
> "**Pour chaque** élément **dans** `$ingredients`, appelle-le `$ingredient` et fais quelque chose avec."

**Résultat :**
```
J'ajoute œufs à ma recette
J'ajoute sucre à ma recette
J'ajoute farine à ma recette
```

### 🎯 Ce qui se passe en coulisses :

**Tour 1 :** `$ingredient` = "œufs" → affiche "J`ajoute œufs à ma recette"
**Tour 2 :** `$ingredient` = "sucre" → affiche "J`ajoute sucre à ma recette"
**Tour 3 :** `$ingredient` = "farine" → affiche "J`ajoute farine à ma recette"

C`est **automatique** ! 🎉

---

## 🧺 6️⃣ Ajouter un élément à la fin

Tu veux ajouter un nouvel ingrédient sur ton plateau :

```php
$ingredients = ["œufs", "sucre", "farine"];
$ingredients[] = "beurre";
```

💬 Les crochets vides `[]` signifient :
> "Mets le nouvel élément **à la fin du tableau**."

Maintenant ton tableau contient :
```
[0] => œufs
[1] => sucre
[2] => farine
[3] => beurre
```

### Exemple complet :

```php
$ingredients = ["œufs", "sucre", "farine"];
echo "J'ai " . count($ingredients) . " ingrédients<br>";

$ingredients[] = "beurre";
echo "J'ai maintenant " . count($ingredients) . " ingrédients<br>";

foreach ($ingredients as $ingredient) {
    echo "- $ingredient<br>";
}
```

**Résultat :**
```
J'ai 3 ingrédients
J'ai maintenant 4 ingrédients
- œufs
- sucre
- farine
- beurre
```

---

## 🔄 7️⃣ Modifier un élément

Tu veux remplacer "farine" par "farine complète" :

```php
$ingredients = ["œufs", "sucre", "farine"];
$ingredients[2] = "farine complète";
```

💬 Les crochets `[2]` indiquent :
> "Va dans le **bol numéro 2** et remplace ce qu`il y a dedans."

Maintenant ton tableau contient :
```
[0] => œufs
[1] => sucre
[2] => farine complète (changé !)
```

### Exemple avec affichage :

```php
$ingredients = ["œufs", "sucre", "farine"];

echo "Avant : " . $ingredients[2] . "<br>";

$ingredients[2] = "farine complète";

echo "Après : " . $ingredients[2] . "<br>";
```

**Résultat :**
```
Avant : farine
Après : farine complète
```

---

## 🧮 8️⃣ Compter les éléments avec `count()`

Tu veux savoir **combien d`ingrédients** tu as sur ton plateau :

```php
$ingredients = ["œufs", "sucre", "farine"];
echo count($ingredients);
```

**Résultat :**
```
3
```

💬 `count()` veut dire :
> "Compte combien d`éléments il y a dans le tableau."

### Exemple pratique :

```php
$ingredients = ["œufs", "sucre", "farine"];
$nombre = count($ingredients);

echo "J'ai $nombre ingrédients sur mon plateau.<br>";

$ingredients[] = "beurre";
$ingredients[] = "sel";

$nombre = count($ingredients);
echo "Maintenant j'ai $nombre ingrédients !<br>";
```

**Résultat :**
```
J'ai 3 ingrédients sur mon plateau.
Maintenant j'ai 5 ingrédients !
```

---

## 📋 9️⃣ Tableaux avec des numéros

Les tableaux peuvent contenir **des nombres** au lieu de texte :

```php
$portions = [15, 25, 30, 12];

echo "La première portion est : " . $portions[0] . " parts<br>";
echo "La dernière portion est : " . $portions[3] . " parts<br>";
```

**Résultat :**
```
La première portion est : 15 parts
La dernière portion est : 12 parts
```

### Calculs avec un tableau de nombres :

```php
$oeufs = [10, 5, 8];
$total = $oeufs[0] + $oeufs[1] + $oeufs[2];

echo "Total d'œufs : $total";
```

**Résultat :**
```
Total d'œufs : 23
```

---

## 👨‍🍳 🔟 Exemple complet - La cuisine

```php
// Création du tableau
$ingredients = ["œufs", "sucre", "farine"];

echo "=== Au début du service ===<br>";
echo "J'ai " . count($ingredients) . " ingrédients<br><br>";

// Ajout d'ingrédients
$ingredients[] = "beurre";
$ingredients[] = "sel";

echo "=== Après avoir sorti plus d'ingrédients ===<br>";
echo "J'ai maintenant " . count($ingredients) . " ingrédients<br><br>";

// Modification
$ingredients[2] = "farine complète";
echo "=== J'ai remplacé la farine par de la farine complète ===<br><br>";

// Affichage de tous les ingrédients
echo "=== Liste complète de mes ingrédients ===<br>";
foreach ($ingredients as $ingredient) {
    echo "- $ingredient<br>";
}
```

**Résultat :**
```
=== Au début du service ===
J'ai 3 ingrédients

=== Après avoir sorti plus d'ingrédients ===
J'ai maintenant 5 ingrédients

=== J'ai remplacé la farine par de la farine complète ===

=== Liste complète de mes ingrédients ===
- œufs
- sucre
- farine complète
- beurre
- sel
```

---

## 🍳 Résumé du chef

| Code | Signification | Exemple |
|------|----------------|----------|
| `[]` | Crée un tableau | `$ingredients = ["œufs", "sucre"];` |
| `[0]` | Premier bol (1er élément) | `$ingredients[0]` affiche "œufs" |
| `[1]` | Deuxième bol (2ème élément) | `$ingredients[1]` affiche "sucre" |
| `[2]` | Troisième bol (3ème élément) | `$ingredients[2]` affiche "farine" |
| `[] =` | Ajoute à la fin | `$ingredients[] = "beurre";` |
| `[n] =` | Modifie un élément | `$ingredients[2] = "farine complète";` |
| `count()` | Compte les éléments | `count($ingredients)` retourne 3 |
| `foreach` | Parcourt tout le tableau | `foreach ($ingredients as $ingredient)` |

---

## 💬 Phrases à retenir

> Un tableau, c`est comme un **plateau d`ingrédients** :
> Tu ranges tout dedans, et chaque ingrédient a un **numéro de bol** ! 🧺

> Les crochets `[ ]` = "regarde dans un bol"
> Le nombre à l`intérieur = "le numéro du bol"
> Et **on commence toujours à zéro** !

> `foreach` = "pour chaque élément, fais quelque chose"
> C`est la boucle magique des tableaux ! 🔄

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Créer ton premier tableau
**Énoncé :**
Crée un tableau `$ingredients` qui contient :
"œufs", "sucre", "farine"

Affiche ensuite chaque ingrédient avec `echo` en utilisant les index [0], [1], [2].

**Ce qu`on attend :**
- Un tableau avec 3 éléments
- 3 affichages séparés utilisant les crochets

**Exemple de résultat attendu :**
```
œufs
sucre
farine
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = ["œufs", "sucre", "farine"];

echo $ingredients[0] . "<br>";
echo $ingredients[1] . "<br>";
echo $ingredients[2] . "<br>";
?>
```
</details>

---

## 📝 Exercice 2 : Accéder au deuxième élément
**Énoncé :**
Crée un tableau `$ingredients = ["œufs", "sucre", "farine"]`.
Affiche **seulement le deuxième ingrédient** (sucre).

**Ce qu`on attend :**
- Un tableau créé
- Affichage de l`index [1] uniquement

**Exemple de résultat attendu :**
```
sucre
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = ["œufs", "sucre", "farine"];
echo $ingredients[1];
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser foreach
**Énoncé :**
Crée un tableau `$ingredients = ["œufs", "sucre", "farine"]`.
Ajoute "beurre" à la fin du tableau.
Affiche tous les ingrédients avec une boucle `foreach`.

**Ce qu`on attend :**
- Un tableau de 3 éléments
- Ajout d`un 4ème élément
- Boucle foreach pour afficher tout

**Exemple de résultat attendu :**
```
œufs
sucre
farine
beurre
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = ["œufs", "sucre", "farine"];
$ingredients[] = "beurre";

foreach ($ingredients as $ingredient) {
    echo "$ingredient<br>";
}
?>
```
</details>

---

## 📝 Exercice 4 : Modifier un élément
**Énoncé :**
Crée un tableau `$ingredients = ["œufs", "sucre", "farine"]`.
Remplace "farine" par "farine complète".
Affiche le tableau avec foreach.

**Ce qu`on attend :**
- Modification de l`index [2]
- Affichage du tableau modifié

**Exemple de résultat attendu :**
```
œufs
sucre
farine complète
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = ["œufs", "sucre", "farine"];
$ingredients[2] = "farine complète";

foreach ($ingredients as $ingredient) {
    echo "$ingredient<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Compter les éléments
**Énoncé :**
Crée un tableau `$ingredients = ["œufs", "sucre", "farine"]`.
Affiche combien d`ingrédients tu as sur ton plateau en utilisant `count()`.

**Ce qu`on attend :**
- Utilisation de count()
- Message clair avec le résultat

**Exemple de résultat attendu :**
```
J'ai 3 ingrédients sur mon plateau.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = ["œufs", "sucre", "farine"];
$nombre = count($ingredients);
echo "J'ai $nombre ingrédients sur mon plateau.";
?>
```
</details>

---

## 📝 Exercice 6 : Tableau de chefs
**Énoncé :**
Crée un tableau `$chefs = ["Laurent", "Julie", "Marc"]`.
Utilise foreach pour afficher :
"Le chef [nom] entre en cuisine." pour chaque chef.

**Ce qu`on attend :**
- Un tableau de 3 noms
- Boucle foreach avec message personnalisé

**Exemple de résultat attendu :**
```
Le chef Laurent entre en cuisine.
Le chef Julie entre en cuisine.
Le chef Marc entre en cuisine.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$chefs = ["Laurent", "Julie", "Marc"];

foreach ($chefs as $chef) {
    echo "Le chef $chef entre en cuisine.<br>";
}
?>
```
</details>

---

## 📝 Exercice 7 : Tableau d`ustensiles
**Énoncé :**
Crée un tableau `$ustensiles = ["Couteau", "Fouet", "Spatule"]`.
Affiche chaque ustensile avec foreach en utilisant ce format :
"Ustensile : [nom]"

**Ce qu`on attend :**
- Un tableau de 3 ustensiles
- Affichage formaté avec foreach

**Exemple de résultat attendu :**
```
Ustensile : Couteau
Ustensile : Fouet
Ustensile : Spatule
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ustensiles = ["Couteau", "Fouet", "Spatule"];

foreach ($ustensiles as $u) {
    echo "Ustensile : $u<br>";
}
?>
```
</details>

---

## 📝 Exercice 8 : Modifier et ajouter
**Énoncé :**
Crée un tableau `$ustensiles = ["Couteau", "Fouet", "Spatule"]`.
1. Change "Spatule" par "Maryse"
2. Ajoute "Cuillère en bois" à la fin
3. Affiche tout avec foreach

**Ce qu`on attend :**
- Modification d`un élément existant
- Ajout d`un nouvel élément
- Affichage du résultat

**Exemple de résultat attendu :**
```
Couteau
Fouet
Maryse
Cuillère en bois
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ustensiles = ["Couteau", "Fouet", "Spatule"];
$ustensiles[2] = "Maryse";
$ustensiles[] = "Cuillère en bois";

foreach ($ustensiles as $u) {
    echo "$u<br>";
}
?>
```
</details>

---

## 📝 Exercice 9 : Calculer un total
**Énoncé :**
Crée un tableau `$oeufs = [10, 5, 8]`.
Chaque nombre représente un stock d`œufs.
Calcule et affiche le total d`œufs.

💡 Indice : additionne `$oeufs[0] + $oeufs[1] + $oeufs[2]`.

**Ce qu`on attend :**
- Un tableau de nombres
- Addition des 3 valeurs
- Affichage du total

**Exemple de résultat attendu :**
```
Il y a 23 œufs au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$oeufs = [10, 5, 8];
$total = $oeufs[0] + $oeufs[1] + $oeufs[2];
echo "Il y a $total œufs au total.";
?>
```
</details>

---

## 📝 Exercice 10 : Numéroter les étapes
**Énoncé :**
Crée un tableau `$etapes = ["Préparer la pâte", "Faire cuire", "Dresser le dessert"]`.
Affiche chaque étape avec son numéro :
```
Étape 1 : Préparer la pâte
Étape 2 : Faire cuire
Étape 3 : Dresser le dessert
```

💡 Astuce : avant la boucle, crée `$numero = 1;` et fais `$numero++` à chaque tour.

**Ce qu`on attend :**
- Un tableau de 3 étapes
- Un compteur qui commence à 1
- Affichage numéroté

**Exemple de résultat attendu :**
```
Étape 1 : Préparer la pâte
Étape 2 : Faire cuire
Étape 3 : Dresser le dessert
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$etapes = ["Préparer la pâte", "Faire cuire", "Dresser le dessert"];
$numero = 1;

foreach ($etapes as $etape) {
    echo "Étape $numero : $etape<br>";
    $numero++;
}
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant les tableaux en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer un tableau avec `[ ]`
- ✅ Comprendre les index (qui commencent à 0)
- ✅ Accéder à un élément avec `[0]`, `[1]`, etc.
- ✅ Ajouter un élément avec `[]`
- ✅ Modifier un élément avec `[index]`
- ✅ Parcourir un tableau avec `foreach`
- ✅ Compter les éléments avec `count()`
- ✅ Faire des calculs avec des tableaux de nombres

**Prochaine étape :** Les tableaux associatifs (avec des clés texte) ! 🚀
