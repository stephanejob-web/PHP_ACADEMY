# 🍳 Cours PHP pour Débutant – Les Tableaux Associatifs (Clés / Valeurs) 👨‍🍳

---

## 🚨 Pourquoi les tableaux sont très importants

Avant tout, arrêtons-nous un instant 👋
Ce que tu vas apprendre ici, c`est l`un des concepts les plus importants de tout le PHP (et même de la programmation en général).

Les **tableaux**, c`est le **cœur du code** :
➡️ c`est la façon de **ranger, organiser et retrouver les informations**.

---

### 🍳 Exemple de cuisine

Dans ta cuisine, tu ranges tes ingrédients dans des tiroirs :

- un tiroir pour les épices,
- un autre pour les farines,
- un autre pour les sucres.

En PHP, c`est pareil :
> Un **tableau**, c`est comme un **plan de travail organisé** pour tes données.

Sans tableaux, tu devrais créer une variable pour chaque chose 😩
```php
$ingredient1 = "farine";
$ingredient2 = "sucre";
$ingredient3 = "sel";
```

Mais avec un tableau, tu peux **tout ranger au même endroit** :
```php
$ingredients = ["farine", "sucre", "sel"];
```

💬 En résumé :
> Savoir utiliser les tableaux, c`est comme bien organiser ta cuisine.
> Si tes tiroirs sont en ordre, ton service devient plus simple et plus rapide !

---

## 👨‍🍳 1️⃣ Rappel : les tableaux simples (avec numéros)

Dans le cours précédent, tu as appris à faire ça :

```php
$ingredients = ["farine", "sucre", "sel"];
```

| Numéro (index) | Ingrédient |
|----------------|------------|
| 0 | farine |
| 1 | sucre |
| 2 | sel |

Pour afficher le deuxième ingrédient :
```php
echo $ingredients[1]; // sucre
```

**Le problème ?**
Tu dois **te souvenir du numéro (1)**.
Pas pratique quand on a la tête pleine de recettes 😅

Si tu as 50 ingrédients, comment tu te rappelles que la farine c`est le numéro 0, le sel le numéro 12, etc. ?

---

## 🍳 2️⃣ Les tableaux associatifs – La solution !

### 🤔 Le problème des numéros

En cuisine, tu ne dis JAMAIS :
> "Apporte-moi l`ingrédient numéro 2 !"

Tu dis :
> "Apporte-moi **la farine** !"
> "Passe-moi **le sucre** !"

Tu utilises un **NOM**, pas un **NUMÉRO** !

### ✨ C`est ça, un tableau associatif !

> Chaque case a un **nom (clé)** au lieu d`un **numéro**.

Au lieu de dire "donne-moi la case 0", tu dis "donne-moi la case **épices**" !

---

## 🧺 3️⃣ Créer un tableau associatif

### La syntaxe :

```php
$ingredients = [
    "base"    => "farine",
    "sucre"   => "cassonade",
    "liquide" => "lait"
];
```

### 🔍 Décortiquons cette écriture :

```
"base" => "farine"
  ↑          ↑
LA CLÉ   LA VALEUR
(le nom)  (le contenu)
```

**La flèche `=>`** veut dire **"contient"** ou **"égale"**.

💬 Tu peux lire ça comme une phrase :
> "Le tiroir **base** contient de la **farine**."
> "Le tiroir **sucre** contient de la **cassonade**."

---

### 📦 Schéma visuel :

```
┌─────────────┬────────────────────┐
│ Nom (CLÉ)   │ Contenu (VALEUR)   │
├─────────────┼────────────────────┤
│ base        │ farine             │
│ sucre       │ cassonade          │
│ liquide     │ lait               │
└─────────────┴────────────────────┘
```

C`est comme un **annuaire** :
- Le **nom** (clé) te permet de trouver
- Le **contenu** (valeur)

---

## 🔑 4️⃣ La CLÉ et la VALEUR – Explications simples

### 🔹 La CLÉ (Key en anglais)

C`est le **nom** que tu donnes à un tiroir.
C`est **TOI** qui choisis ce nom.

Exemples de clés :
- `"base"`
- `"chef"`
- `"prix"`
- `"nom"`

🧠 **Retiens :**
> La clé, c`est l`**étiquette** sur le tiroir.

---

### 🔹 La VALEUR (Value en anglais)

C`est le **contenu** du tiroir.
C`est ce que tu ranges dedans.

Exemples de valeurs :
- `"farine"` (du texte)
- `40` (un nombre)
- `"Dupont"` (un nom)

🧠 **Retiens :**
> La valeur, c`est ce qu`il y a **dans** le tiroir.

---

### 📋 Tableau récapitulatif :

| Terme | C`est quoi ? | Exemple |
|-------|--------------|---------|
| **CLÉ** | Le nom du tiroir | `"base"` |
| **VALEUR** | Le contenu du tiroir | `"farine"` |
| **=>** | La flèche qui relie les deux | `"base" => "farine"` |

---

## 🥄 5️⃣ Accéder à une valeur avec les crochets `[]`

Pour ouvrir un tiroir, tu donnes son **nom** (la clé) entre crochets :

```php
$ingredients = [
    "base"   => "farine",
    "sucre"  => "cassonade"
];

echo $ingredients["base"];
```

**Résultat :**
```
farine
```

### 🔍 Ce qui se passe :

1. PHP lit : `$ingredients["base"]`
2. Il cherche la clé `"base"` dans le tableau
3. Il trouve : `"base" => "farine"`
4. Il retourne la valeur : `"farine"`

---

### Autre exemple :

```php
echo $ingredients["sucre"];
```

**Résultat :**
```
cassonade
```

💬 PHP comprend :
> "Va dans le tiroir appelé **sucre**, et dis-moi ce qu`il y a dedans."

---

### ⚠️ ATTENTION : Les guillemets sont OBLIGATOIRES !

#### ❌ MAUVAIS :
```php
echo $ingredients[base]; // ERREUR !
```

#### ✅ BON :
```php
echo $ingredients["base"]; // OK !
```

🧠 **Retiens :**
> Quand la clé est du texte, il FAUT des guillemets : `["base"]`

---

## 🔧 6️⃣ Modifier ou ajouter des éléments

### 🔄 Modifier une valeur existante :

```php
$ingredients = [
    "base"    => "farine",
    "liquide" => "lait"
];

$ingredients["liquide"] = "crème";
```

💬 Maintenant, le tiroir "liquide" contient "crème" au lieu de "lait".

---

### ➕ Ajouter un nouveau tiroir :

```php
$ingredients["épice"] = "cannelle";
```

💬 Tu viens d`ajouter un **nouveau tiroir** appelé "épice" avec de la "cannelle" dedans !

---

### Exemple complet :

```php
$ingredients = [
    "base"  => "farine",
    "sucre" => "cassonade"
];

echo "Avant : ";
print_r($ingredients);

// Modifier
$ingredients["sucre"] = "sucre glace";

// Ajouter
$ingredients["fruit"] = "fraise";

echo "Après : ";
print_r($ingredients);
```

**Résultat :**
```
Avant : Array ( [base] => farine [sucre] => cassonade )
Après : Array ( [base] => farine [sucre] => sucre glace [fruit] => fraise )
```

---

## 🧾 7️⃣ Voir tout le tableau avec print_r()

Pour voir **TOUT** ce qu`il y a dans ton tableau :

```php
$ingredients = [
    "base"    => "farine",
    "sucre"   => "cassonade",
    "liquide" => "lait"
];

print_r($ingredients);
```

**Résultat :**
```
Array
(
    [base] => farine
    [sucre] => cassonade
    [liquide] => lait
)
```

💬 `print_r()` veut dire **"print readable"** (affiche de façon lisible).
C`est super utile pour **vérifier** ce qu`il y a dans ton tableau !

---

## 🧠 8️⃣ Résumé avant la boucle

| Action | Code | Résultat |
|--------|------|-----------|
| **Créer** | `$ingredients = ["base" => "farine"];` | Crée le tableau |
| **Lire** | `echo $ingredients["base"];` | Affiche "farine" |
| **Modifier** | `$ingredients["liquide"] = "crème";` | Change la valeur |
| **Ajouter** | `$ingredients["épice"] = "cannelle";` | Ajoute un tiroir |
| **Voir tout** | `print_r($ingredients);` | Affiche tout le tableau |

---

### 🤯 *Petite pause humour :*

> "C`est quoi ce bazar ?! J`ai la tête qui chauffe, j`comprends plus rien à ces crochets et ces flèches !" 😵‍💫

C`est **NORMAL** de penser ça la première fois.
**TOUT LE MONDE** passe par là.

Mais rassure-toi 👨‍🍳 :
➡️ À force d`en faire, ton cerveau va s`y habituer.
➡️ Et un jour, tu feras des tableaux sans même y penser — comme un chef qui fait une sauce sans mesurer 🍳.

💪 **Continue, tu es sur la bonne voie !**

---

# 🔁 9️⃣ La boucle `foreach` – Parcourir tout le tableau

Maintenant que tu sais **ouvrir un tiroir avec les crochets**,
on va apprendre à **ouvrir TOUS les tiroirs d`un coup** avec une boucle.

---

## 🧺 A) Version simple : parcourir seulement les VALEURS

Si tu veux juste voir **ce qu`il y a dans les tiroirs** (sans les noms) :

```php
$ingredients = ["farine", "sucre", "sel"];

foreach ($ingredients as $ingredient) {
    echo "J`utilise $ingredient<br>";
}
```

**Résultat :**
```
J`utilise farine
J`utilise sucre
J`utilise sel
```

---

### 🔍 Ce qui se passe :

💬 Lis la ligne comme une phrase :
> "Pour chaque élément **dans `$ingredients`**, appelle-le **`$ingredient`** et fais quelque chose avec."

| Tour | `$ingredient` contient | Affichage |
|------|------------------------|-----------|
| 1 | farine | J`utilise farine |
| 2 | sucre | J`utilise sucre |
| 3 | sel | J`utilise sel |

C`est comme si PHP sortait **un ingrédient à la fois** de ton tiroir, te le montrait, puis passait au suivant !

---

## 🍳 B) Version complète : les CLÉS + les VALEURS

### 🚨 C`EST LA PARTIE LA PLUS IMPORTANTE !

Quand ton tableau a des **noms de tiroirs** (clés), tu veux souvent voir **le nom ET le contenu** !

```php
$ingredients = [
    "base"    => "farine",
    "sucre"   => "cassonade",
    "liquide" => "lait"
];

foreach ($ingredients as $categorie => $ingredient) {
    echo "Dans la catégorie $categorie, j`utilise $ingredient.<br>";
}
```

**Résultat :**
```
Dans la catégorie base, j`utilise farine.
Dans la catégorie sucre, j`utilise cassonade.
Dans la catégorie liquide, j`utilise lait.
```

---

## 🧠 Comprendre `$ingredients as $categorie => $ingredient`

### 🚨 LA LIGNE QUI REND FOU ! 😵‍💫

Bon, là c`est **LA** fameuse ligne qui fait peur à tout le monde la première fois.
Mais t`inquiète, on va la **décortiquer tranquillement** 👇

```php
foreach ($ingredients as $categorie => $ingredient)
```

### 📖 Lis-le comme une phrase :

> "Pour **chaque paire** dans `$ingredients`,
> mets le **nom du tiroir** dans `$categorie`,
> et ce qu`il y a **dedans** dans `$ingredient`."

---

### 🔍 Décomposition mot par mot :

| Mot | Signification |
|-----|---------------|
| `foreach` | "Pour chaque" |
| `$ingredients` | Mon tableau complet |
| `as` | "En tant que" / "Appelle ça" |
| `$categorie` | Le **nom du tiroir** (la CLÉ) |
| `=>` | "et" |
| `$ingredient` | Le **contenu** (la VALEUR) |

---

### 🎯 Ce qui se passe à chaque tour :

Dans notre tableau :
```php
"base" => "farine"
```

PHP sépare automatiquement :
- `"base"` → va dans `$categorie` (la CLÉ)
- `"farine"` → va dans `$ingredient` (la VALEUR)

| Tour | `$categorie` (CLÉ) | `$ingredient` (VALEUR) |
|------|--------------------|------------------------|
| 1️⃣ | base | farine |
| 2️⃣ | sucre | cassonade |
| 3️⃣ | liquide | lait |

---

### 💬 Pourquoi on choisit ces noms de variables ?

Tu pourrais écrire :
```php
foreach ($ingredients as $toto => $truc) {
    echo "$toto : $truc<br>";
}
```

PHP le comprendrait **très bien**.
Mais… c`est **moche** et **incompréhensible** 😅

Le code, c`est comme une recette :
**Si tu ne mets pas d`étiquettes claires, plus personne ne s`y retrouve.**

👉 C`est pour ça qu`on donne des noms **logiques** :
- `$ingredients` → le tableau complet (ton plan de travail)
- `$categorie` → le nom du tiroir (la CLÉ)
- `$ingredient` → ce qu`il y a dedans (la VALEUR)

🧠 **Retiens :**
> Plus tu choisis des noms clairs, plus ton code est facile à lire !

---

### 🎯 Exemple avec d`autres noms :

```php
$chefs = [
    "Laurent" => "pâtissier",
    "Julie"   => "saucier",
    "Marc"    => "rôtisseur"
];

foreach ($chefs as $nom => $specialite) {
    echo "Chef $nom : $specialite<br>";
}
```

**Résultat :**
```
Chef Laurent : pâtissier
Chef Julie : saucier
Chef Marc : rôtisseur
```

Ici :
- `$nom` = la CLÉ (le nom du chef)
- `$specialite` = la VALEUR (son métier)

---

### 🤯 "Pfff… ça me rend fou tout ça !"

C`est **NORMAL** 😅
**Tous les débutants** passent par là.

Voici la vérité :
- La **première fois**, tu ne comprends rien
- La **deuxième fois**, tu commences à voir
- La **dixième fois**, ça devient naturel
- Après 50 fois, tu le fais **les yeux fermés** 💪

👨‍🍳 Accroche-toi :
> À force de pratiquer, tu vas voir que ça devient logique.
> Et un jour, tu écriras `foreach` automatiquement,
> comme un chef qui fouette une crème sans regarder 🍳

---

## 🔟 Compter les éléments avec count()

Comme pour les tableaux simples, tu peux compter combien de paires tu as :

```php
$ingredients = [
    "base"    => "farine",
    "sucre"   => "cassonade",
    "liquide" => "lait"
];

echo "J`ai " . count($ingredients) . " types d`ingrédients.";
```

**Résultat :**
```
J`ai 3 types d`ingrédients.
```

---

## 📋 Récapitulatif complet

### Créer un tableau associatif :
```php
$ingredients = [
    "base"  => "farine",
    "sucre" => "cassonade"
];
```

### Accéder à un élément :
```php
echo $ingredients["base"]; // farine
```

### Modifier :
```php
$ingredients["sucre"] = "sucre glace";
```

### Ajouter :
```php
$ingredients["épice"] = "cannelle";
```

### Parcourir (CLÉ + VALEUR) :
```php
foreach ($ingredients as $categorie => $ingredient) {
    echo "$categorie : $ingredient<br>";
}
```

### Compter :
```php
echo count($ingredients);
```

---

## 🍳 Phrase à retenir

> Un **tableau associatif**, c`est comme un **plan de travail organisé** :
> chaque **tiroir a un nom (CLÉ)** et un **contenu (VALEUR)**.
> La **flèche `=>`** relie les deux.
> Et grâce à **`foreach`**, tu peux **ouvrir tous les tiroirs** sans t`y perdre ! 🧺

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Créer ton premier tableau associatif
**Énoncé :**
Crée un tableau `$ingredients` avec :
- clé : `"farine"` → valeur : `500`
- clé : `"sucre"` → valeur : `250`
- clé : `"œufs"` → valeur : `6`

Affiche la quantité de farine en utilisant les crochets.

**Ce qu`on attend :**
- Un tableau associatif avec 3 paires
- Affichage d`une valeur avec sa clé

**Exemple de résultat attendu :**
```
500
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = [
    "farine" => 500,
    "sucre" => 250,
    "œufs" => 6
];

echo $ingredients["farine"];
?>
```
</details>

---

## 📝 Exercice 2 : Ajouter un élément
**Énoncé :**
Reprends le tableau `$ingredients` de l`exercice 1.
Ajoute une nouvelle paire : `"beurre" => 200`.
Affiche tout le tableau avec `print_r()`.

**Ce qu`on attend :**
- Ajout d`une nouvelle clé-valeur
- Affichage du tableau complet

**Exemple de résultat attendu :**
```
Array ( [farine] => 500 [sucre] => 250 [œufs] => 6 [beurre] => 200 )
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = [
    "farine" => 500,
    "sucre" => 250,
    "œufs" => 6
];

$ingredients["beurre"] = 200;

print_r($ingredients);
?>
```
</details>

---

## 📝 Exercice 3 : Modifier une valeur
**Énoncé :**
Reprends le tableau `$ingredients`.
Change la quantité de sucre de 250 à 300.
Affiche la nouvelle quantité de sucre.

**Ce qu`on attend :**
- Modification d`une valeur existante
- Affichage de la nouvelle valeur

**Exemple de résultat attendu :**
```
300
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ingredients = [
    "farine" => 500,
    "sucre" => 250,
    "œufs" => 6
];

$ingredients["sucre"] = 300;

echo $ingredients["sucre"];
?>
```
</details>

---

## 📝 Exercice 4 : Premier foreach avec clé et valeur
**Énoncé :**
Crée un tableau `$chefs` avec :
- `"Laurent"` => `"pâtissier"`
- `"Julie"` => `"saucier"`
- `"Marc"` => `"rôtisseur"`

Utilise foreach pour afficher :
"Chef [nom] : [spécialité]" pour chaque chef.

**Ce qu`on attend :**
- Un tableau associatif de 3 chefs
- Boucle foreach qui affiche clé et valeur

**Exemple de résultat attendu :**
```
Chef Laurent : pâtissier
Chef Julie : saucier
Chef Marc : rôtisseur
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$chefs = [
    "Laurent" => "pâtissier",
    "Julie" => "saucier",
    "Marc" => "rôtisseur"
];

foreach ($chefs as $nom => $specialite) {
    echo "Chef $nom : $specialite<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Ajouter un chef
**Énoncé :**
Reprends le tableau `$chefs` de l`exercice 4.
Ajoute un nouveau chef : `"Sophie"` => `"poissonnier"`.
Affiche tous les chefs avec foreach.

**Ce qu`on attend :**
- Ajout d`une paire clé-valeur
- Affichage de tous les chefs

**Exemple de résultat attendu :**
```
Chef Laurent : pâtissier
Chef Julie : saucier
Chef Marc : rôtisseur
Chef Sophie : poissonnier
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$chefs = [
    "Laurent" => "pâtissier",
    "Julie" => "saucier",
    "Marc" => "rôtisseur"
];

$chefs["Sophie"] = "poissonnier";

foreach ($chefs as $nom => $specialite) {
    echo "Chef $nom : $specialite<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Ustensiles et catégories
**Énoncé :**
Crée un tableau `$ustensiles` avec :
- `"fouet"` => `"mélange"`
- `"spatule"` => `"cuisson"`
- `"couteau"` => `"découpe"`

Affiche pour chaque ustensile :
"L`ustensile [nom] sert pour [catégorie]."

**Ce qu`on attend :**
- Tableau associatif de 3 ustensiles
- Phrase personnalisée avec foreach

**Exemple de résultat attendu :**
```
L`ustensile fouet sert pour mélange.
L`ustensile spatule sert pour cuisson.
L`ustensile couteau sert pour découpe.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ustensiles = [
    "fouet" => "mélange",
    "spatule" => "cuisson",
    "couteau" => "découpe"
];

foreach ($ustensiles as $ustensile => $categorie) {
    echo "L`ustensile $ustensile sert pour $categorie.<br>";
}
?>
```
</details>

---

## 📝 Exercice 7 : Compter les éléments
**Énoncé :**
Reprends le tableau `$ustensiles` de l`exercice 6.
Compte combien d`ustensiles tu as et affiche :
"J`ai X ustensiles différents."

**Ce qu`on attend :**
- Utilisation de count()
- Message avec le résultat

**Exemple de résultat attendu :**
```
J`ai 3 ustensiles différents.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$ustensiles = [
    "fouet" => "mélange",
    "spatule" => "cuisson",
    "couteau" => "découpe"
];

$nombre = count($ustensiles);
echo "J`ai $nombre ustensiles différents.";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer un total
**Énoncé :**
Crée un tableau `$prix` avec :
- `"farine"` => `2`
- `"sucre"` => `3`
- `"œufs"` => `4`

Calcule la somme totale des prix avec foreach.
Affiche : "Total : X euros"

💡 Astuce : Crée une variable `$total = 0` avant la boucle, et ajoute chaque prix dedans.

**Ce qu`on attend :**
- Une variable pour stocker le total
- Une boucle qui additionne les valeurs
- Affichage du résultat final

**Exemple de résultat attendu :**
```
Total : 9 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix = [
    "farine" => 2,
    "sucre" => 3,
    "œufs" => 4
];

$total = 0;

foreach ($prix as $valeur) {
    $total += $valeur;
}

echo "Total : $total euros";
?>
```
</details>

---

## 📝 Exercice 9 : Afficher le stock
**Énoncé :**
Crée un tableau `$stock` avec :
- `"œufs"` => `24`
- `"paquets de farine"` => `5`
- `"bols"` => `12`

Affiche pour chaque élément :
"J`ai [quantité] [objet]."

**Ce qu`on attend :**
- Tableau avec quantités
- Boucle foreach qui affiche clé et valeur

**Exemple de résultat attendu :**
```
J`ai 24 œufs.
J`ai 5 paquets de farine.
J`ai 12 bols.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$stock = [
    "œufs" => 24,
    "paquets de farine" => 5,
    "bols" => 12
];

foreach ($stock as $objet => $quantite) {
    echo "J`ai $quantite $objet.<br>";
}
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant les tableaux associatifs en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer un tableau associatif avec `"clé" => "valeur"`
- ✅ Comprendre la différence entre CLÉ et VALEUR
- ✅ Accéder à un élément avec `["clé"]`
- ✅ Ajouter un élément avec `["nouvelle_clé"] = "valeur"`
- ✅ Modifier un élément existant
- ✅ Parcourir un tableau avec `foreach ($tableau as $clé => $valeur)`
- ✅ Compter les éléments avec `count()`
- ✅ Afficher tout le tableau avec `print_r()`

**Prochaine étape :** Les fonctions ! 🚀
