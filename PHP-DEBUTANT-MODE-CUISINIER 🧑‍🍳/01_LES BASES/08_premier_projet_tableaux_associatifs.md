# 🍳 Mini-Projet PHP – Les Tableaux Associatifs et la Boucle `foreach` (Version Cuisine Débutant) 🥐🧠

---

## 👋 Introduction

Bienvenue jeune chef du code ! 👨‍🍳  
Aujourd’hui, tu vas apprendre à créer ton **premier mini-projet PHP façon cuisine** 🍰  

On va gérer un **plan de travail d’ingrédients** comme dans une vraie pâtisserie :  
des œufs, de la farine, du sucre, du chocolat, et même des fruits rouges 🍓🍫🥚  

Tu vas découvrir comment **afficher tous tes ingrédients automatiquement** grâce à la **boucle `foreach`**.

---

## 🧺 Étape 1 – Le plan de travail du chef (les données)

Dans une cuisine, ton chef a un plan de travail rempli d’ingrédients.  
Chaque ingrédient a des infos : un nom, une catégorie, une quantité, un prix, etc.  

En PHP, on crée tout ça avec un **tableau associatif** :  
Chaque ingrédient du tableau représente **un élément de ta recette**.

```php
<?php
$ingredients = [
    [
        "nom" => "Farine",
        "categorie" => "Sec",
        "quantite" => 500,
        "unite" => "g",
        "prix" => 1.20,
        "origine" => "France"
    ],
    [
        "nom" => "Sucre",
        "categorie" => "Sec",
        "quantite" => 200,
        "unite" => "g",
        "prix" => 0.80,
        "origine" => "Guadeloupe"
    ],
    [
        "nom" => "Oeufs",
        "categorie" => "Frais",
        "quantite" => 4,
        "unite" => "pièces",
        "prix" => 1.00,
        "origine" => "Ferme locale"
    ],
    [
        "nom" => "Chocolat noir",
        "categorie" => "Garniture",
        "quantite" => 150,
        "unite" => "g",
        "prix" => 2.50,
        "origine" => "Belgique"
    ]
];
?>
```

💬 Chaque bloc `[...]` est un **ingrédient** avec plusieurs **caractéristiques** :  
un nom, une catégorie, une quantité, etc.

---

## 💻 Étape 2 – Afficher ton plan de travail

Maintenant qu’on a nos ingrédients, affichons-les sur une page web avec **PHP + HTML**.  
On va utiliser la boucle `foreach` pour **parcourir tous les ingrédients** du tableau et les afficher.

```php
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Plan de travail du Chef</title>
</head>
<body>
<h1>🍰 Ingrédients de la Recette</h1>

<ul>
<?php foreach ($ingredients as $item): ?>

<li>
Nom : <?php echo $item["nom"]; ?><br>
Catégorie : <?php echo $item["categorie"]; ?><br>
Quantité : <?php echo $item["quantite"] . ' ' . $item["unite"]; ?><br>
Prix : <?php echo $item["prix"]; ?> €<br>
Origine : <?php echo $item["origine"]; ?><br><br>
</li>

<?php endforeach; ?>
</ul>

</body>
</html>
```

💡 PHP lit chaque ingrédient un par un grâce à la boucle `foreach`, et affiche les infos à l’intérieur des balises HTML.

---

## 🍫 Étape 3 – Ajouter un nouvel ingrédient

Tu veux ajouter un ingrédient à ton plan de travail ? Facile !  
Ajoute un nouvel élément **avant la fin du tableau**, juste avant `];`.

Exemple :

```php
[
  "nom" => "Fraises",
  "categorie" => "Fruit",
  "quantite" => 100,
  "unite" => "g",
  "prix" => 1.50,
  "origine" => "France"
]
```

💬 N’oublie pas la **virgule** `,` avant d’ajouter ton ingrédient.  
Quand tu relances la page, ton **nouvel aliment** s’affichera tout seul 🪄

---

## 📘 Étape 4 – Ce que fait `foreach`

| Élément PHP | Signification | Exemple |
|--------------|----------------|----------|
| `foreach` | Répète une action pour chaque élément du tableau | Affiche chaque ingrédient |
| `$item` | Représente un ingrédient pendant la boucle | `$item["nom"]` = nom de l’ingrédient actuel |
| `echo` | Affiche une information à l’écran | `echo $item["nom"];` |
| Les crochets `[ ]` | Permettent d’accéder à une donnée précise | `$item["categorie"]` |
| HTML + PHP | Travaille ensemble pour afficher des infos | PHP gère les données, HTML affiche |

---

## 🧠 Étape 5 – Pour plus tard...

Dans ce projet, les ingrédients sont écrits **en dur** dans ton fichier.  
Mais plus tard, dans un vrai site de cuisine :  
- Les ingrédients seront **stockés dans une base de données** (comme MySQL).  
- PHP ira chercher les données **automatiquement**.  
- Tu pourras ajouter, supprimer ou modifier les ingrédients **en temps réel**.  

💬 Tu viens de poser les bases de **l’affichage dynamique** :  
> “Je récupère une liste d’ingrédients, et je les affiche grâce à `foreach`.”

---

## 🏆 Défis bonus

1️⃣ Ajoute un ingrédient de type **“épice”** avec une propriété spéciale (ex : “force” ou “saveur”).  
2️⃣ Change la **quantité** d’un ingrédient.  
3️⃣ Ajoute un **nouveau champ** à tous les ingrédients, par exemple “bio” ou “non-bio”.  
4️⃣ Ajoute un **compteur d’ingrédients** avec `count($ingredients)` et affiche :  
   > “Le chef utilise X ingrédients pour cette recette.”  
5️⃣ Crée une **nouvelle recette** (ex : “Tarte au citron”) avec son propre tableau d’ingrédients.

---

## 🎯 Résumé du chef

> Tu viens de créer ton **premier vrai plan de travail dynamique en PHP** !  
> Grâce aux **tableaux associatifs** et à la **boucle `foreach`**,  
> tu affiches plusieurs ingrédients automatiquement, sans tout écrire à la main 💪  
>  
> C’est la **même logique** utilisée dans les vrais sites de recettes pour afficher les ingrédients, les étapes et les ustensiles 🧑‍🍳🥣🍰
