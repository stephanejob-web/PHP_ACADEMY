# 🍳 Cours PHP pour Débutant – Les Tableaux (Arrays) 🥐🧠

## 👋 Introduction

Dans ta cuisine, tu as **plein d'ingrédients sur ton plan de travail** : des œufs, du sucre, de la farine 🥚🍬🌾  
Tu pourrais créer une variable pour chaque ingrédient :

```php
$ingredient1 = "œufs";
$ingredient2 = "sucre";
$ingredient3 = "farine";
```

Mais si tu fais un gâteau avec **20 ingrédients** ? 😱  
Ce serait beaucoup trop long !

👉 C’est pour ça qu’en PHP, on utilise les **tableaux** (*arrays*).  
Un **tableau**, c’est comme ton **plan de travail** 🍽️ : tu peux y ranger **plusieurs ingrédients à la fois**.

---

## 🧺 1️⃣ Créer un tableau

```php
$plan_de_travail = ["œufs", "sucre", "farine"];
```

💬 Tu peux lire ça comme :  
> “Mon plan de travail contient trois ingrédients.”

---

## 🔢 2️⃣ Les crochets [ ] et les numéros

Chaque ingrédient du tableau a un **numéro d’emplacement (index)**.

| Emplacement (index) | Ingrédient |
|----------------|-------------|
| 0 | œufs |
| 1 | sucre |
| 2 | farine |

💡 En PHP, les cases commencent à **zéro**.  
Donc la première case, c’est **[0]**.

---

## 👀 3️⃣ Afficher un ingrédient précis

Tu veux voir ce qu’il y a dans une case ?

```php
echo $ingredients[0];
```
Résultat :
```
œufs
```

Autres exemples :
```php
echo $ingredients[1]; // sucre
echo $ingredients[2]; // farine
```

💬 Les crochets `[0]` signifient :  
> “Regarde dans la case numéro 0 de ton plan de travail.”

---

## 🔁 4️⃣ Parcourir tous les ingrédients avec `foreach`

Tu veux voir **tous tes ingrédients** ?  
Utilise une boucle `foreach` :

```php
$ingredients = ["œufs", "sucre", "farine"];

foreach ($ingredients as $element) {
    echo "J’ajoute $element à ma recette<br>";
}
```

Résultat :
```
J’ajoute œufs à ma recette  
J’ajoute sucre à ma recette  
J’ajoute farine à ma recette
```

💬 Tu peux lire ça comme :  
> “Pour chaque ingrédient de mon plan de travail, affiche son nom.”

---

## ➕ 5️⃣ Ajouter un nouvel ingrédient

Tu veux ajouter du **beurre** à ta recette :
```php
$ingredients[] = "beurre";
```
💬 Les crochets vides `[]` signifient :  
> “Ajoute l’ingrédient **à la fin du tableau**.” 🧈

---

## 🔄 6️⃣ Modifier un ingrédient

Tu veux remplacer “sucre” par “sucre roux” :
```php
$ingredients[1] = "sucre roux";
```
💬 Cela veut dire :  
> “Dans la case numéro 1, remplace ce qu’il y a.”

---

## 📊 7️⃣ Compter le nombre d’ingrédients avec `count()`

Tu veux savoir **combien d’ingrédients** tu as :
```php
echo count($ingredients);
```

Résultat :
```
3
```

💬 `count()` signifie :  
> “Compte combien d’éléments il y a sur mon plan de travail.”

---

## ⚙️ 8️⃣ Exemple complet

```php
$ingredients = ["œufs", "sucre", "farine"];

$ingredients[] = "beurre";
$ingredients[1] = "sucre roux";

foreach ($ingredients as $element) {
    echo "Ingrédient : $element<br>";
}

echo "Nombre total d’ingrédients : " . count($ingredients);
```

Résultat :
```
Ingrédient : œufs  
Ingrédient : sucre roux  
Ingrédient : farine  
Ingrédient : beurre  
Nombre total d’ingrédients : 4
```

---

## 🧩 9️⃣ Résumé version cuisine

| Code | Signification | Exemple |
|------|----------------|----------|
| `[]` | Crée ton plan de travail | `$ingredients = ["œufs", "sucre"];` |
| `[0]` | Premier ingrédient | `$ingredients[0]` |
| `[1]` | Deuxième ingrédient | `$ingredients[1]` |
| `[] =` | Ajoute un ingrédient à la fin | `$ingredients[] = "beurre";` |
| `[n] =` | Modifie un ingrédient | `$ingredients[1] = "sucre roux";` |
| `count()` | Compte les ingrédients | `count($ingredients)` |
| `foreach` | Parcourt la recette | `foreach ($ingredients as $element)` |

💬 Retiens bien :  
> Les crochets `[ ]` = “regarde dans la case”,  
> Le nombre = “l’emplacement”,  
> Et **on commence à 0** (comme les bols sur le plan de travail). 👨‍🍳

---

# 🧪 Exercices pratiques (niveau cuisine)

### Exercice 1
Crée un tableau `$ingredients` avec :  
`œufs`, `sucre`, `farine`.  
Affiche chaque ingrédient avec `echo`.

---

### Exercice 2
Affiche seulement le **deuxième** ingrédient (`sucre`).

---

### Exercice 3
Ajoute `beurre` à ton tableau `$ingredients`  
et affiche tous les ingrédients avec `foreach`.

---

### Exercice 4
Remplace `sucre` par `sucre roux`.

---

### Exercice 5
Affiche combien d’ingrédients tu as sur ton plan de travail avec `count()`.

---

### Exercice 6
Crée un tableau `$chefs = ["Laurent", "Julie", "Marc"];`  
et affiche :  
> “Le chef [nom] entre en cuisine.”  
pour chacun.

---

### Exercice 7
Crée un tableau `$ustensiles = ["Couteau", "Fouet", "Spatule"];`  
et affiche chaque ustensile avec `foreach`.

---

### Exercice 8
Change `Spatule` par `Maryse`  
puis ajoute `Cuillère en bois` à la fin.

---

### Exercice 9
Crée un tableau `$quantites = [2, 5, 3];`  
Chaque valeur représente un nombre de cuillères à soupe.  
Affiche le total :  
> “J’ai utilisé X cuillères à soupe au total.”

💡 Indice : additionne `$quantites[0] + $quantites[1] + $quantites[2]`.

---

### Exercice 10
Crée un tableau `$etapes = ["Préparer la pâte", "Faire cuire", "Dresser le dessert"];`  
et affiche :
```
Étape 1 : Préparer la pâte  
Étape 2 : Faire cuire  
Étape 3 : Dresser le dessert
```

💡 Astuce : avant la boucle, crée `$i = 1;` et fais `$i++` à chaque tour.

---

## ✅ Solutions

```php
// 1
$ingredients = ["œufs", "sucre", "farine"];
echo $ingredients[0] . "<br>" . $ingredients[1] . "<br>" . $ingredients[2];

// 2
echo $ingredients[1];

// 3
$ingredients[] = "beurre";
foreach ($ingredients as $element) { echo "$element<br>"; }

// 4
$ingredients[1] = "sucre roux";

// 5
echo "J’ai " . count($ingredients) . " ingrédients sur mon plan de travail.";

// 6
$chefs = ["Laurent", "Julie", "Marc"];
foreach ($chefs as $chef) { echo "Le chef $chef entre en cuisine.<br>"; }

// 7
$ustensiles = ["Couteau", "Fouet", "Spatule"];
foreach ($ustensiles as $u) { echo "Ustensile : $u<br>"; }

// 8
$ustensiles[2] = "Maryse";
$ustensiles[] = "Cuillère en bois";
foreach ($ustensiles as $u) { echo "$u<br>"; }

// 9
$quantites = [2, 5, 3];
echo "J’ai utilisé " . ($quantites[0] + $quantites[1] + $quantites[2]) . " cuillères à soupe au total.";

// 10
$etapes = ["Préparer la pâte", "Faire cuire", "Dresser le dessert"];
$i = 1;
foreach ($etapes as $etape) {
    echo "Étape $i : $etape<br>";
    $i++;
}
```
