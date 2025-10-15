# 🎮 Cours PHP pour Débutant – Les Tableaux (Arrays) 🧠⚔️

## 👋 Introduction

Dans un jeu vidéo, tu as **plein d’objets dans ton inventaire** : une épée, un bouclier, des potions 💊  
Tu pourrais créer une variable pour chaque objet :

```php
$objet1 = "épée";
$objet2 = "bouclier";
$objet3 = "potion";
```

Mais si tu as 100 objets ? 😱  
Ce serait beaucoup trop long !

👉 C’est pour ça qu’en PHP, on utilise les **tableaux** (*arrays*).  
Un **tableau**, c’est comme ton **inventaire** 🎒 : tu peux y ranger **plusieurs objets à la fois**.

---

## 🧳 1️⃣ Créer un tableau

```php
$inventaire = ["épée", "bouclier", "potion"];
```

💬 Tu peux lire ça comme :
> “Mon inventaire contient trois objets.”

---

## 🔢 2️⃣ Les crochets [ ] et les numéros

Chaque objet du tableau a un **numéro d’emplacement (index)**.

| Emplacement (index) | Objet |
|----------------|--------|
| 0 | épée |
| 1 | bouclier |
| 2 | potion |

💡 Les ordinateurs commencent à compter à **zéro**.  
Donc la première case de ton inventaire, c’est **[0]**.

---

## 👀 3️⃣ Afficher un objet précis

Tu veux voir ce qu’il y a dans une case ?

```php
echo $inventaire[0];
```
Résultat :
```
épée
```

Autres exemples :
```php
echo $inventaire[1]; // bouclier
echo $inventaire[2]; // potion
```

💬 Les crochets `[0]` signifient :
> “Regarde dans la case numéro 0 de l’inventaire.”

---

## 🔁 4️⃣ Parcourir tout l’inventaire avec `foreach`

Tu veux voir **tous tes objets** ?  
Utilise une boucle `foreach` :

```php
$inventaire = ["épée", "bouclier", "potion"];

foreach ($inventaire as $objet) {
    echo "J’utilise mon $objet<br>";
}
```

Résultat :
```
J’utilise mon épée  
J’utilise mon bouclier  
J’utilise ma potion
```

💬 Tu peux lire ça comme :
> “Pour chaque objet dans mon inventaire, affiche son nom.”

---

## ➕ 5️⃣ Ajouter un nouvel objet

Tu veux ajouter un **arc** à ton inventaire :
```php
$inventaire[] = "arc";
```
💬 Les crochets vides `[]` signifient :
> “Ajoute l’objet **à la fin du tableau**.” 🏹

---

## 🔄 6️⃣ Modifier un objet

Tu veux remplacer “potion” par “super potion” :
```php
$inventaire[2] = "super potion";
```
💬 Cela veut dire :
> “Dans la case numéro 2, remplace ce qu’il y a.”

---

## 📊 7️⃣ Compter le nombre d’objets avec `count()`

Tu veux savoir **combien d’objets** tu as :
```php
echo count($inventaire);
```

Résultat :
```
3
```

💬 `count()` signifie :
> “Compte combien d’éléments il y a dans mon inventaire.”

---

## ⚙️ 8️⃣ Exemple complet

```php
$inventaire = ["épée", "bouclier", "potion"];

$inventaire[] = "arc";
$inventaire[2] = "super potion";

foreach ($inventaire as $objet) {
    echo "Objet : $objet<br>";
}

echo "Nombre total d’objets : " . count($inventaire);
```

Résultat :
```
Objet : épée  
Objet : bouclier  
Objet : super potion  
Objet : arc  
Nombre total d’objets : 4
```

---

## 🧩 9️⃣ Résumé gamer

| Code | Signification | Exemple |
|------|----------------|----------|
| `[]` | Crée un inventaire | `$inventaire = ["épée", "bouclier"];` |
| `[0]` | Premier objet | `$inventaire[0]` |
| `[1]` | Deuxième objet | `$inventaire[1]` |
| `[] =` | Ajoute un objet à la fin | `$inventaire[] = "arc";` |
| `[n] =` | Modifie un objet | `$inventaire[2] = "super potion";` |
| `count()` | Compte les objets | `count($inventaire)` |
| `foreach` | Parcourt tout l’inventaire | `foreach ($inventaire as $objet)` |

💬 Retiens bien :
> Les crochets `[ ]` = “regarde dans la case”,  
> Le nombre = “l’emplacement”,  
> Et **on commence à 0** (comme les slots d’inventaire). 🎮

---

# 🧪 Exercices pratiques (niveau gamer)

### Exercice 1
Crée un tableau `$inventaire` avec :  
`épée`, `bouclier`, `potion`.  
Affiche chaque objet avec `echo`.

---

### Exercice 2
Affiche seulement le **deuxième** objet (`bouclier`).

---

### Exercice 3
Ajoute `"arc"` à ton tableau `$inventaire`  
et affiche tous les objets avec `foreach`.

---

### Exercice 4
Remplace `"potion"` par `"super potion"`.

---

### Exercice 5
Affiche combien d’objets tu as dans ton inventaire avec `count()`.

---

### Exercice 6
Crée un tableau `$joueurs = ["Link", "Zelda", "Ganon"];`  
et affiche :  
> “Le joueur [nom] entre dans l’arène.”  
pour chacun.

---

### Exercice 7
Crée un tableau `$ennemis = ["Gobelin", "Troll", "Dragon"];`  
et affiche chaque ennemi avec `foreach`.

---

### Exercice 8
Change `"Dragon"` par `"Boss final"`  
puis ajoute `"Sorcier"` à la fin.

---

### Exercice 9
Crée un tableau `$or = [50, 100, 25];`  
Chaque valeur représente une bourse d’or.  
Affiche le total :  
> “Tu possèdes X pièces d’or au total.”

💡 Indice : additionne `$or[0] + $or[1] + $or[2]`.

---

### Exercice 10
Crée un tableau `$quetes = ["Trouver l’épée", "Sauver la princesse", "Vaincre le boss"];`  
et affiche :
```
Quête 1 : Trouver l’épée  
Quête 2 : Sauver la princesse  
Quête 3 : Vaincre le boss
```

💡 Astuce : avant la boucle, crée `$i = 1;` et fais `$i++` à chaque tour.

---

## ✅ Solutions

```php
// 1
$inventaire = ["épée", "bouclier", "potion"];
echo $inventaire[0] . "<br>" . $inventaire[1] . "<br>" . $inventaire[2];

// 2
echo $inventaire[1];

// 3
$inventaire[] = "arc";
foreach ($inventaire as $objet) { echo "$objet<br>"; }

// 4
$inventaire[2] = "super potion";

// 5
echo "J’ai " . count($inventaire) . " objets dans mon inventaire.";

// 6
$joueurs = ["Link", "Zelda", "Ganon"];
foreach ($joueurs as $joueur) { echo "Le joueur $joueur entre dans l’arène.<br>"; }

// 7
$ennemis = ["Gobelin", "Troll", "Dragon"];
foreach ($ennemis as $e) { echo "Ennemi : $e<br>"; }

// 8
$ennemis[2] = "Boss final";
$ennemis[] = "Sorcier";
foreach ($ennemis as $e) { echo "$e<br>"; }

// 9
$or = [50, 100, 25];
echo "Tu possèdes " . ($or[0] + $or[1] + $or[2]) . " pièces d’or au total.";

// 10
$quetes = ["Trouver l’épée", "Sauver la princesse", "Vaincre le boss"];
$i = 1;
foreach ($quetes as $quete) {
    echo "Quête $i : $quete<br>";
    $i++;
}
```