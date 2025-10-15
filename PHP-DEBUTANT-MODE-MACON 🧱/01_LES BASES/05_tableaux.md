# 🧱 Cours PHP pour Débutant – Les Tableaux (Arrays) 👷‍♂️

## 👋 Introduction

Sur un chantier, tu as **plusieurs outils** : une truelle, un niveau, un mètre.  
Tu pourrais créer une variable pour chaque outil :

```php
$outil1 = "truelle";
$outil2 = "niveau";
$outil3 = "mètre";
```

Mais si tu as 10 outils, ou 100 ?  
Ce serait **trop long et fatigant** !

👉 C’est pour ça qu’en PHP, on utilise les **tableaux** (appelés *arrays* en anglais).  
Un **tableau**, c’est comme une **grande caisse** où tu ranges **plusieurs choses à la fois**.

---

## 🪣 1️⃣ Créer un tableau

```php
$outils = ["truelle", "niveau", "mètre"];
```

💬 Tu peux lire ça comme :
> “J’ai une caisse avec trois outils dedans.”

---

## 🔢 2️⃣ Comprendre les crochets [ ] et les numéros

C’est souvent la partie la plus difficile au début, alors on va prendre notre temps.

Quand tu crées un tableau, PHP range les éléments dans des **cases numérotées**.

| Numéro (index) | Outil |
|----------------|--------|
| 0 | truelle |
| 1 | niveau |
| 2 | mètre |

💡 Ces numéros sont appelés des **index**.

Tu peux imaginer une **étagère avec trois cases** :
- La **première case (0)** contient la **truelle**  
- La **deuxième case (1)** contient le **niveau**  
- La **troisième case (2)** contient le **mètre**

---

## 🤔 3️⃣ Pourquoi ça commence à zéro ?

Tu te demandes sûrement :  
> “Pourquoi la première case, c’est 0 et pas 1 ?”

C’est parce que **les ordinateurs comptent à partir de zéro**.  
C’est une vieille habitude des langages de programmation.

🧱 Imagine une échelle :
- Le premier barreau (le plus bas) → numéro **0**
- Le deuxième barreau → numéro **1**
- Le troisième barreau → numéro **2**

C’est juste une autre façon de compter, mais on s’y habitue vite !

---

## 👀 4️⃣ Afficher un seul élément

Tu veux voir ce qu’il y a dans une case précise de la caisse :

```php
echo $outils[0];
```

Résultat :
```
truelle
```

💬 Les crochets `[0]` veulent dire :
> “Va chercher ce qu’il y a **dans la case numéro 0**.”

Autres exemples :
```php
echo $outils[1]; // niveau
echo $outils[2]; // mètre
```

---

## 🔁 5️⃣ Afficher tout le tableau avec `foreach`

Tu veux voir **tous les outils**, un par un.

Au lieu de faire 3 `echo`, on utilise une **boucle foreach** :

```php
$outils = ["truelle", "niveau", "mètre"];

foreach ($outils as $outil) {
    echo "J’utilise un $outil<br>";
}
```

💬 Tu peux lire ça comme :
> “Pour chaque outil dans ma caisse, affiche son nom.”

Résultat :
```
J’utilise un truelle  
J’utilise un niveau  
J’utilise un mètre
```

---

## 🧰 6️⃣ Ajouter un élément

Tu veux ajouter un nouvel outil dans la caisse :
```php
$outils[] = "marteau";
```

💬 Les crochets vides `[]` signifient :
> “Mets le nouvel élément **à la fin du tableau**.”

---

## 🔄 7️⃣ Modifier un élément

Tu veux remplacer “mètre” par “règle” :
```php
$outils[2] = "règle";
```

💬 Les crochets ici indiquent :
> “Va dans la case numéro 2 et remplace ce qu’il y a dedans.”

---

## 🧮 8️⃣ Compter les éléments avec `count()`

Tu veux savoir **combien d’outils** tu as :
```php
echo count($outils);
```

Résultat :
```
3
```

💬 `count()` veut dire :
> “Compte combien d’éléments il y a dans le tableau.”

---

## 👷‍♂️ 9️⃣ Exemple complet

```php
$outils = ["truelle", "niveau", "mètre"];

$outils[] = "marteau";
$outils[2] = "règle";

foreach ($outils as $outil) {
    echo "Outil : $outil<br>";
}

echo "Nombre total : " . count($outils);
```

Résultat :
```
Outil : truelle  
Outil : niveau  
Outil : règle  
Outil : marteau  
Nombre total : 4
```

---

## 🧱 🔟 Résumé du chef

| Code | Signification | Exemple |
|------|----------------|----------|
| `[]` | Crée un tableau | `$outils = ["truelle", "niveau"];` |
| `[0]` | Première case | `$outils[0]` |
| `[1]` | Deuxième case | `$outils[1]` |
| `[] =` | Ajoute à la fin | `$outils[] = "marteau";` |
| `[n] =` | Modifie un élément | `$outils[2] = "règle";` |
| `count()` | Compte les éléments | `count($outils)` |
| `foreach` | Parcourt tout le tableau | `foreach ($outils as $outil)` |

💬 Retiens bien :
> - Les crochets `[ ]` = “regarde dans une case”  
> - Le nombre à l’intérieur = “le numéro de la case”  
> - Et **on commence à zéro**

---

# 🧪 Exercices pratiques (niveau débutant)

### Exercice 1
Crée un tableau `$outils` avec :  
`truelle`, `niveau`, `mètre`.  
Affiche chaque outil avec `echo`.

---

### Exercice 2
Affiche seulement le **deuxième** outil (`niveau`).

---

### Exercice 3
Ajoute `"marteau"` à ton tableau `$outils`  
et affiche tous les outils avec `foreach`.

---

### Exercice 4
Remplace `"mètre"` par `"règle"`.

---

### Exercice 5
Affiche combien d’outils tu as dans ta caisse  
en utilisant `count()`.

---

### Exercice 6
Crée un tableau `$clients = ["Dupont", "Martin", "Durand"];`  
et affiche :  
> “J’appelle le client [nom].”  
pour chacun.

---

### Exercice 7
Crée un tableau `$materiaux = ["briques", "ciment", "sable"];`  
et affiche chaque matériau avec `foreach`.

---

### Exercice 8
Change `"sable"` par `"sable fin"`  
puis ajoute `"eau"` à la fin.

---

### Exercice 9
Crée un tableau `$sacs = [10, 5, 8];`  
Chaque nombre représente un stock de sacs.  
Affiche le total :  
> “Il y a X sacs au total.”

💡 Indice : additionne `$sacs[0] + $sacs[1] + $sacs[2]`.

---

### Exercice 10
Crée un tableau `$taches = ["Préparer le ciment", "Monter le mur", "Nettoyer le chantier"];`  
et affiche :
```
Tâche 1 : Préparer le ciment  
Tâche 2 : Monter le mur  
Tâche 3 : Nettoyer le chantier
```

💡 Astuce : avant la boucle, crée `$i = 1;` et fais `$i++` à chaque tour.

---

## ✅ Solutions

```php
// 1
$outils = ["truelle", "niveau", "mètre"];
echo $outils[0] . "<br>" . $outils[1] . "<br>" . $outils[2];

// 2
echo $outils[1];

// 3
$outils[] = "marteau";
foreach ($outils as $outil) { echo "$outil<br>"; }

// 4
$outils[2] = "règle";

// 5
echo "J’ai " . count($outils) . " outils dans ma caisse.";

// 6
$clients = ["Dupont", "Martin", "Durand"];
foreach ($clients as $client) { echo "J’appelle le client $client<br>"; }

// 7
$materiaux = ["briques", "ciment", "sable"];
foreach ($materiaux as $m) { echo "Matériau : $m<br>"; }

// 8
$materiaux[2] = "sable fin";
$materiaux[] = "eau";
foreach ($materiaux as $m) { echo "$m<br>"; }

// 9
$sacs = [10, 5, 8];
echo "Il y a " . ($sacs[0] + $sacs[1] + $sacs[2]) . " sacs au total.";

// 10
$taches = ["Préparer le ciment", "Monter le mur", "Nettoyer le chantier"];
$i = 1;
foreach ($taches as $tache) {
    echo "Tâche $i : $tache<br>";
    $i++;
}
```
