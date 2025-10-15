# 🧱 Mini-projet PHP – Les Tableaux Associatifs et la Boucle `foreach` (version chantier) 👷‍♂️💻

---

## 👋 Introduction

Tu te souviens des **tableaux associatifs** ?  
Tu t’étais sûrement dit :
> “Chef, j’vois des crochets, des flèches et des guillemets partout… on construit un mur ou on code un labyrinthe ? 😅”

Pas de panique !  
Aujourd’hui, on va **voir à quoi tout ça sert dans un vrai mini-projet PHP**.  
Et tu vas comprendre pourquoi **les tableaux associatifs sont partout**,  
même dans les sites de grands magasins comme **Point P** ou **Castorama** 🧱🏗️

---

## 🪣 Étape 1 – Le stock du chantier (les données)

On va créer un tableau qui représente ton stock de matériaux.  
C’est un peu comme ton entrepôt de chantier : chaque produit a une étiquette avec un nom, une catégorie, un prix et le stock restant.

```php
<?php
$materiaux = [
    [
        "nom" => "Brique rouge",
        "categorie" => "Maçonnerie",
        "prix" => 1.20,
        "stock" => 320
    ],
    [
        "nom" => "Ciment (25kg)",
        "categorie" => "Liant",
        "prix" => 8.50,
        "stock" => 42
    ],
    [
        "nom" => "Sable (sac)",
        "categorie" => "Granulat",
        "prix" => 6.00,
        "stock" => 68
    ],
    [
        "nom" => "Niveau à bulle",
        "categorie" => "Mesure",
        "prix" => 14.90,
        "stock" => 12
    ]
];
?>
```

💬 Chaque **produit** du tableau est comme une **fiche Point P** :  
tu y retrouves le **nom du produit**, sa **catégorie**, son **prix** et son **stock**.  

Tu viens de créer une mini base de données !  
Sauf qu’ici, les données sont écrites **en dur** (directement dans le code).  
Mais plus tard, elles viendront d’un vrai **magasin en ligne** ou d’une **base de données**, comme le fait **Castorama** 🛠️

---

## 💻 Étape 2 – Afficher tout ça sur la page

Et maintenant, on va afficher ces produits sur une page web.  
Pour ça, on mélange un peu de **PHP** avec du **HTML**.  
Et là… oui, c’est vrai… **la syntaxe est un peu moche** 😅  
Mais t’inquiète pas, **c’est normal !**

```php
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Catalogue de Chantier</title>
</head>
<body>
  <h1>🧱 Catalogue de Chantier</h1>
  <p>Voici la liste de tes matériaux :</p>

  <ul>
    <?php foreach ($materiaux as $item): ?>
      <li>
        Nom : <?php echo $item["nom"]; ?> |
        Catégorie : <?php echo $item["categorie"]; ?> |
        Prix : <?php echo $item["prix"]; ?> € |
        Stock : <?php echo $item["stock"]; ?>
      </li>
    <?php endforeach; ?>
  </ul>

</body>
</html>
```

---

## 🤯 Oui, la syntaxe est bizarre (et c’est ok !)

Tu vois ce mélange de `<li>` et de `<?php echo ... ?>` ?  
On dirait une recette de cuisine écrite en français **et en chinois en même temps** 😆  
C’est parce que PHP et HTML sont deux langages différents :
- Le **HTML** sert à **afficher la structure de la page**.
- Le **PHP** sert à **dire quoi afficher et d’où viennent les données**.

C’est comme si sur ton chantier, tu parlais parfois à ton apprenti (PHP) et parfois à ton architecte (HTML).  
Tu changes de langue selon à qui tu t’adresses 👷‍♂️📋

---

### 💬 Ce que PHP lit dans ta page :

1️⃣ “Ouvre le HTML.”  
2️⃣ “Ah tiens, une balise PHP : `<?php ... ?>`, ok je passe en mode code.”  
3️⃣ “Ah, c’est fini, je reviens en mode HTML.”  
4️⃣ “Ah mince, encore du PHP 😅”  
5️⃣ “Bon… on continue.”

Bref, oui c’est un peu chaotique au début…  
Mais comme un maçon qui apprend à bien doser le mortier, **à force de le refaire**, ça devient **naturel**.  
Un jour tu l’écriras les yeux fermés 😎

C’est comme l’orthographe en français :  
au début tu fais des fautes, après tu dis “ah ouais, je connais, ça s’écrit comme ça”.  
💡 Le code, c’est pareil !

---

## 🧱 Étape 3 – Rajoute ton propre produit

Tu veux t’entraîner ?  
Rajoute un **nouveau produit** à la fin du tableau.

Voici un exemple tout prêt que tu peux copier :

```php
[
    "nom" => "Casque de chantier",
    "categorie" => "Sécurité",
    "prix" => 19.90,
    "stock" => 10
]
```

➡️ Mets-le **avant le dernier crochet** `];` et **n’oublie pas la virgule** `,` avant lui.  
Tu verras, dès que tu rafraîchis la page, ton **nouveau produit s’affiche tout seul !**

---

## 🔧 Ce qu’il faut retenir

| Élément | Signification |
|----------|----------------|
| `foreach` | Répète une action pour chaque produit |
| `$item["nom"]` | Lit la valeur de la clé “nom” |
| `echo` | Affiche le texte à l’écran |
| HTML + PHP | C’est un duo un peu bizarre, mais puissant |
| Données “en dur” | Écrites directement dans le code (comme un petit catalogue local) |

---

## 🏗️ Pour plus tard…

Aujourd’hui, ton tableau est “en dur” (dans ton fichier).  
Mais dans les vrais sites comme **Point P** ou **Castorama**, les produits viennent d’une **base de données**.  
PHP va **chercher les infos dans la base**, puis **affiche tout avec une boucle `foreach`**, exactement comme tu viens de le faire.

👉 Tu viens de comprendre le **principe de base** de tous les sites de commerce !  
Un jour, tu pourras créer ton propre mini site de vente de matériel de chantier 💪🧱
