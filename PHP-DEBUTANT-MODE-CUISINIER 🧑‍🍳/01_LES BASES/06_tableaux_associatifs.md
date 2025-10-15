# 🍳 Cours PHP pour Débutant – Les Tableaux Associatifs (Clés / Valeurs) 👨‍🍳

## 🧂 Pourquoi les tableaux sont très importants

Avant de cuisiner, il faut tout préparer 👩‍🍳  
Ce que tu vas apprendre ici, c’est un des **ingrédients de base** de la programmation :  
➡️ Les **tableaux**, c’est comme ton **plan de travail en cuisine**.

C’est grâce à eux que tu peux :
- ranger tes ingrédients,  
- les retrouver facilement,  
- et préparer ta recette sans tout mélanger.

Sans tableaux, tu devrais créer une variable pour chaque ingrédient 😩  
```php
$ingredient1 = "œufs";
$ingredient2 = "farine";
$ingredient3 = "lait";
```

Mais avec un tableau :
```php
$ingredients = ["œufs", "farine", "lait"];
```

💬 En résumé :
> Les tableaux, c’est ta **mise en place**.  
> Bien rangés, ta recette (ton code) devient simple, rapide et délicieuse !

---

## 👩‍🍳 1️⃣ Rappel : les tableaux simples

```php
$ingredients = ["œufs", "farine", "lait"];
```

| Numéro (index) | Ingrédient |
|----------------|-------------|
| 0 | œufs |
| 1 | farine |
| 2 | lait |

Pour afficher le deuxième ingrédient :
```php
echo $ingredients[1];
```
➡️ Résultat : `farine`

Mais tu vois le souci ?  
Tu dois **te souvenir du numéro**.  
Et en cuisine, se rappeler que la farine est en “case 1”, c’est pas pratique 😅  

---

## 🍲 2️⃣ Les tableaux associatifs

Dans ta cuisine, tu ne dis pas :
> “Passe-moi l’ingrédient numéro 2.”

Tu dis :
> “Passe-moi la farine.”  
> “Donne-moi le sucre.”

C’est exactement ce qu’on appelle un **tableau associatif**.  
➡️ Au lieu d’un numéro, chaque case a un **nom clair (clé)**.

---

## 🧺 3️⃣ Créer un tableau associatif

```php
$ingredients = [
    "base" => "pâte",
    "sucre" => "cassonade",
    "liquide" => "lait"
];
```

| Catégorie (clé) | Contenu (valeur) |
|------------------|------------------|
| base | pâte |
| sucre | cassonade |
| liquide | lait |

💬 Lis-le comme une phrase :
> “Dans la catégorie **base**, j’ai de la **pâte**.”

---

## 🧂 4️⃣ Accéder à une valeur avec les crochets `[]`

Tu veux savoir ce qu’il y a dans une catégorie ?  
Tu ouvres le bon tiroir 👇

```php
echo $ingredients["sucre"];
```
➡️ Résultat : `cassonade`

💬 PHP comprend :
> “Va dans la case appelée **sucre**, et donne-moi ce qu’il y a dedans.”

---

## 🧁 5️⃣ Modifier ou ajouter des ingrédients

Changer une valeur :
```php
$ingredients["sucre"] = "sucre glace";
```

Ajouter un nouveau tiroir :
```php
$ingredients["fruit"] = "fraise";
```

👏 Tu viens d’ajouter un nouveau tiroir à ton plan de travail !

---

## 🍳 6️⃣ Voir tout ton plan de travail

```php
print_r($ingredients);
```

Résultat :
```
Array
(
    [base] => pâte
    [sucre] => sucre glace
    [liquide] => lait
    [fruit] => fraise
)
```

---

### 🤯 “Mais c’est quoi ce bazar ? J’ai la tête comme un fouet !”

😂 Respire !  
C’est **normal** de se mélanger les fouets au début.  
Mais comme une recette, il faut juste **suivre les étapes**.  
Et à force, tu verras : les tableaux deviendront ton **livre de cuisine préféré**.

---

# 🔁 7️⃣ La boucle `foreach` – Parcourir toutes les cases

Tu pourrais ouvrir les tiroirs un par un...  
Mais ce serait long, non ?  

Heureusement, `foreach` fait le **tour de la cuisine** pour toi 🍴

---

## 👨‍🍳 A) Version simple : juste les valeurs

```php
$ingredients = ["œufs", "farine", "lait"];

foreach ($ingredients as $ingredient) {
    echo "J’ajoute $ingredient<br>";
}
```

💬 Ça veut dire :
> “Pour chaque ingrédient dans la liste, fais quelque chose avec.”

PHP fait ça dans sa tête :

| Étape | `$ingredient` | Ce que PHP affiche |
|--------|----------------|-------------------|
| 1️⃣ | œufs | J’ajoute œufs |
| 2️⃣ | farine | J’ajoute farine |
| 3️⃣ | lait | J’ajoute lait |

---

## 🍽️ B) Version complète : les clés + les valeurs

Maintenant, on veut aussi savoir **la catégorie** de chaque ingrédient 👇

```php
$ingredients = [
    "base" => "pâte",
    "sucre" => "cassonade",
    "liquide" => "lait"
];

foreach ($ingredients as $categorie => $ingredient) {
    echo "Dans la catégorie $categorie, j’ai $ingredient.<br>";
}
```

Résultat :
```
Dans la catégorie base, j’ai pâte  
Dans la catégorie sucre, j’ai cassonade  
Dans la catégorie liquide, j’ai lait
```

---

## 🍴 Comprendre `$ingredients as $categorie => $ingredient`

Bon, on y est 😅  
C’est la ligne qui fait mal à la tête au début, mais c’est super simple une fois qu’on comprend.

On peut la lire comme une phrase :
> “Pour chaque tiroir dans `$ingredients`,  
> mets le **nom du tiroir** dans `$categorie`,  
> et ce qu’il contient dans `$ingredient`.”

### Exemple :
```php
"sucre" => "cassonade"
```
- `"sucre"` = la **clé** (le tiroir)
- `"cassonade"` = la **valeur** (ce qu’il y a dedans)

| Étape | `$categorie` | `$ingredient` |
|--------|----------------|----------------|
| 1️⃣ | base | pâte |
| 2️⃣ | sucre | cassonade |
| 3️⃣ | liquide | lait |

---

### 🍓 Pourquoi on choisit ces noms-là ?

Tu pourrais écrire :
```php
foreach ($ingredients as $toto => $truc)
```
PHP comprendrait.  
Mais bon… imagine une recette écrite comme ça 😅  
> “Mets le $truc du $toto dans la poêle.”

C’est pas très clair, hein ?

En programmation comme en cuisine :
> Si tu nommes bien tes ingrédients, tu ne te trompes pas de casserole 🍲

Donc ici :
- `$ingredients` → la cuisine entière (le tableau)
- `$categorie` → le tiroir (clé)
- `$ingredient` → ce qu’il y a dedans (valeur)

---

### 🤯 “Mais chef, j’en peux plus !”

😂 C’est normal !  
La première fois qu’on apprend ça, on veut tout balancer par la fenêtre.  
Mais courage 👏  
> Comme une pâte à crêpes, ça demande un peu de pratique au début,  
> et après, ça devient naturel !

---

## 🧁 Résumé

| Avant | Maintenant |
|--------|-------------|
| `$ingredients = ["œufs", "farine"];` | `$ingredients = ["sucre" => "cassonade", "base" => "pâte"];` |
| `foreach ($ingredients as $ingredient)` | `foreach ($ingredients as $categorie => $ingredient)` |
| Juste la valeur | Nom + valeur |
| Lecture : “œufs” | Lecture : “Dans la catégorie sucre, j’ai cassonade” |

---

## 🧠 Phrase à retenir

> Un **tableau associatif**, c’est comme une **cuisine bien rangée** :  
> chaque **tiroir a un nom (clé)** et **un contenu (valeur)**.  
> Et la boucle **`foreach`** te permet de **tout parcourir sans perdre le fil** 👨‍🍳

---

# 🧪 Exercices (mode cuisine 🍰)

## Exercice 1
Crée un tableau `$ingredients` :
- sucre → 500  
- farine → 1000  
- œufs → 6  
et affiche la quantité de sucre.

### ✅ Solution :
```php
$ingredients = ["sucre" => 500, "farine" => 1000, "œufs" => 6];
echo $ingredients["sucre"];
```

## Exercice 2
Ajoute `"beurre" => 250` au tableau `$ingredients`.

## Exercice 3
Change la quantité de farine à 800.

## Exercice 4
Crée un tableau `$recettes` :
- gâteau → "en préparation"
- crêpes → "terminé"
- tarte → "en attente"  
et affiche chaque recette et son état avec `foreach`.

## Exercice 5
Crée un tableau `$ustensiles` :
- fouet → "mélange"
- spatule → "cuisson"
- couteau → "découpe"  
et affiche :  
“L’ustensile [nom] sert pour la [catégorie].”

## Exercice 6
Compte combien d’ustensiles contient ton tableau `$ustensiles`.

## Exercice 7
Crée un tableau `$prix` :
- farine → 2
- œufs → 3
- lait → 1  
et calcule le total.

## Exercice 8
Crée un tableau `$stock` :
- beurre → 2  
- sucre → 5  
- farine → 3  
et affiche : “J’ai [nombre] paquets de [aliment].”

## Exercice 9
Crée un tableau `$recette` :
- nom → "Crêpes"
- nb_portions → 4
- temps → 20  
et affiche :  
“La recette Crêpes sert 4 personnes en 20 minutes.”

## Exercice 10
Crée un tableau `$menu` :
- entrée → "salade"
- plat → "poulet rôti"
- dessert → "tarte aux pommes"  
et affiche tout avec `foreach`.

---

## 👨‍🍳 En conclusion

> Les tableaux associatifs, c’est comme une cuisine bien organisée.  
> Tu sais **où est chaque chose**, tu peux **retrouver un ingrédient** facilement,  
> et préparer une **recette (ton programme)** sans te tromper d’ingrédient !
