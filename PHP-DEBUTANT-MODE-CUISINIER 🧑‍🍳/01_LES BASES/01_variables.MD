# 🍳 Cours PHP pour Débutant – Les Variables 🍔

---

## 🥒 Pourquoi une variable ? Comprendre avec ta cuisine 🍳

Imagine que tu es dans ta cuisine.  
Tu prépares une recette et tu as plein d'ingrédients autour de toi : ἴ5 tomates, 🥞 farine, 🍲 sauce, 🥩 fromage...

Mais pour t'y retrouver, tu dois **donner un nom à chaque ingrédient** :  
> "tomates", "farine", "sauce", "fromage"...

Ainsi, quand tu veux préparer ton plat, tu sais **quel ingrédient prendre et en quelle quantité**.

💬 En PHP, c’est pareil :  
- Chaque **nom** correspond à une **variable**.  
- Chaque **ingrédient** correspond à une **valeur**.

Exemple :
```php
$tomates = 3;
$farine = 500; // grammes
$fromage = "mozzarella";
```

| Nom (variable) | Contenu (valeur) |
|----------------|------------------|
| tomates | 3 |
| farine | 500 |
| fromage | "mozzarella" |

🧠 Ton ordinateur, c’est comme un **chef cuisinier** avec son plan de travail.  
Chaque fois que tu crées une variable, il range ton ingrédient dans un bol avec une **étiquette** pour s’en souvenir.

---

## ⚙️ Pourquoi c’est utile

Quand tu cuisines, tu veux souvent **faire des calculs ou des ajustements**.  
Tu peux utiliser tes variables pour cela.

```php
$farine = 500; // grammes
$eau = 250; // ml
$total_pate = $farine + $eau;

echo "Tu as $total_pate grammes de pâte.";
```

Résultat :
```
Tu as 750 grammes de pâte.
```

💬 Tu viens de dire à PHP :  
> “Additionne la farine et l’eau, et stocke le résultat dans une nouvelle variable appelée $total_pate.”

---

## 🧱 1️⃣ Créer une variable

Chaque variable en PHP commence **toujours** par `$`.  
C’est comme si tu posais un nouveau bol sur ton plan de travail.

```php
$chef = "Laurent";
$recette = "Pizza Margherita";
temps_cuisson = 15; // minutes
```

💬 Tu viens de préparer trois étiquettes :
| Nom | Valeur |
|------|--------|
| chef | "Laurent" |
| recette | "Pizza Margherita" |
| temps_cuisson | 15 |

---

## 🎩 2️⃣ Utiliser une variable

Tu veux afficher le nom de la recette ?  
Tu appelles simplement ta variable :
```php
echo $recette;
```

Résultat :
```
Pizza Margherita
```

💬 PHP regarde dans ton plan de travail et trouve la case "recette" avec son contenu.

---

## 🔄 3️⃣ Modifier une variable

Tu veux augmenter ton temps de cuisson ? Pas besoin de tout refaire !  
Tu changes juste la valeur :

```php
$temps_cuisson = 20;
```

💬 Le bol est le même, mais tu y mets une nouvelle quantité.  
Tu viens d’ajuster ta recette ! 👨‍🍳

---

## 🥐 4️⃣ Pourquoi “variable” ?

Parce que son **contenu peut varier** (changer).  
Tu peux mettre un autre ingrédient ou une autre quantité dans le même bol.

C’est comme un saladier :  
parfois tu y mets de la pâte, parfois de la salade, mais il garde le même nom `$bol`.

---

## 🍳 5️⃣ Exemple concret

Tu veux calculer le nombre total d’ingrédients pour une pizza :
```php
$tomates = 3;
$fromage = 1;
$pate = 1;

$total = $tomates + $fromage + $pate;

echo "Tu utilises $total ingrédients pour ta pizza.";
```

Résultat :
```
Tu utilises 5 ingrédients pour ta pizza.
```

💬 Tu as créé plusieurs variables (`tomates`, `fromage`, `pate`) et PHP fait le calcul pour toi, comme un vrai chef ! 👨‍🍳

---

## 🤖 6️⃣ En résumé simple

| Ce que tu fais | En cuisine | En PHP |
|----------------|---------------|--------|
| Tu prépares un ingrédient | Tu stockes une donnée | Tu crées une variable |
| Tu mets une étiquette sur un bol | Tu reconnais ton ingrédient | Tu écris `$nom = valeur;` |
| Tu lis la recette | Tu vérifies ce que tu as | Tu fais `echo $nom;` |
| Tu ajustes la dose | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c’est comme un **bol dans ta cuisine** 🥣.  
> Tu peux y ranger ce que tu veux, le modifier,  
> et ton programme s’en souviendra tant que la recette n’est pas terminée ! 🍕

---

# 🧪 Exercices (niveau cuisinier)

### 🥣 Exercice 1
Crée une variable `$chef` avec ton prénom et affiche :  
> “Chef [ton prénom], prêt à cuisiner !”

### 🍅 Exercice 2
Crée une variable `$recette` et affiche :  
> “Aujourd’hui, nous préparons [nom de la recette].”

### 🧂 Exercice 3
Crée `$sel = 5` et `$poivre = 3`,  
puis calcule `$total_epices` et affiche le résultat.

### 🍕 Exercice 4
Crée `$pates = 200` et `$sauce = 150`, puis affiche la somme totale en grammes.

### 🔥 Exercice 5
Crée `$cuisson_terminee = false`  
et affiche un message selon que la cuisson est terminée ou non.

### 🍳 Exercice 6
Crée `$ingredient = "fromage"`  
et affiche :  
> “Ajout de [ingredient] dans la préparation.”

### 🥖 Exercice 7
Crée `$baguettes = 4`, enlève-en 1, et affiche combien il en reste.

### 🧁 Exercice 8
Crée `$prix_gateau = 12`, `$quantite = 3`, puis calcule le coût total.

### 🔁 Exercice 9
Crée `$chef = "Paul"`, change-le en `$chef = "Marie"` et affiche le nouveau.

### 🍰 Exercice 10
Crée `$oeufs = 4` et `$farine = 200`, puis affiche la somme totale des ingrédients.

---

# ✅ Solutions

```php
// Exercice 1
$chef = "Laurent";
echo "Chef $chef, prêt à cuisiner !";

// Exercice 2
$recette = "Crêpes";
echo "Aujourd’hui, nous préparons $recette.";

// Exercice 3
$sel = 5;
$poivre = 3;
$total_epices = $sel + $poivre;
echo "Tu utilises $total_epices grammes d’épices.";

// Exercice 4
$pates = 200;
$sauce = 150;
$total = $pates + $sauce;
echo "Ta recette pèse $total grammes.";

// Exercice 5
$cuisson_terminee = false;
if ($cuisson_terminee) {
    echo "C’est prêt ! 🍽️";
} else {
    echo "Encore un peu de cuisson... ⏲️";
}

// Exercice 6
$ingredient = "fromage";
echo "Ajout de $ingredient dans la préparation.";

// Exercice 7
$baguettes = 4;
$baguettes = $baguettes - 1;
echo "Il reste $baguettes baguettes.";

// Exercice 8
$prix_gateau = 12;
$quantite = 3;
$total = $prix_gateau * $quantite;
echo "Le coût total est de $total euros.";

// Exercice 9
$chef = "Paul";
$chef = "Marie";
echo "Le nouveau chef est $chef.";

// Exercice 10
$oeufs = 4;
$farine = 200;
$total = $oeufs + $farine;
echo "Tu utilises $total ingrédients au total.";
```
