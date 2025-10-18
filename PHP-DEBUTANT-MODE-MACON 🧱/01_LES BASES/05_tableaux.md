# 🧱 Cours PHP pour Débutant – Les Tableaux (Arrays) 👷‍♂️

---

## 👋 Introduction

Sur un chantier, tu as **plusieurs outils** : une truelle, un niveau, un mètre.  
Tu pourrais créer une variable pour chaque outil :

```php
$outil1 = "truelle";
$outil2 = "niveau";
$outil3 = "mètre";
$outil4 = "marteau";
$outil5 = "scie";
$outil6 = "pelle";
// ... et si tu as 50 outils ??? 😱
```

Mais si tu as 10 outils, ou 100 ?  
Ce serait **trop long et fatigant** !

👉 C`est pour ça qu`en PHP, on utilise les **tableaux** (appelés *arrays* en anglais).  

## 🪣 C`est quoi un tableau ?

Un **tableau**, c`est comme une **grande caisse à outils** où tu ranges **plusieurs choses à la fois**.

Au lieu d`avoir 10 variables différentes, tu as **UNE SEULE caisse** qui contient tout !

```php
$outils = ["truelle", "niveau", "mètre", "marteau", "scie"];
```

💬 Tu peux lire ça comme :
> "J`ai une caisse qui s`appelle `$outils` avec 5 outils dedans."

---

## 🪣 1️⃣ Créer un tableau

Pour créer un tableau, on utilise les **crochets** `[ ]` :

```php
$outils = ["truelle", "niveau", "mètre"];
```

🧠 **À retenir :**
- Les crochets `[ ]` = "C`est une caisse"
- Les virgules `,` = "Séparent les objets dans la caisse"
- Les guillemets `" "` = "Pour du texte"

### Autre exemple avec des nombres :

```php
$prix = [15, 25, 30, 12];
```

💬 "J`ai une caisse de prix qui contient 4 montants."

---

## 🔢 2️⃣ Comprendre les crochets [ ] et les numéros (INDEX)

### 🚨 C`EST LA PARTIE LA PLUS IMPORTANTE !

C`est souvent la partie la plus difficile au début, alors on va prendre notre temps.

Quand tu crées un tableau, PHP range automatiquement les éléments dans des **cases numérotées**.

Imagine une **étagère avec des cases** :

```
┌─────────┬─────────┬─────────┐
│ Case 0  │ Case 1  │ Case 2  │
├─────────┼─────────┼─────────┤
│ truelle │ niveau  │ mètre   │
└─────────┴─────────┴─────────┘
```

| Numéro (index) | Outil |
|----------------|--------|
| **0** | truelle |
| **1** | niveau |
| **2** | mètre |

💡 Ces numéros sont appelés des **index** (ou indices en français).

---

## 🤔 3️⃣ Pourquoi ça commence à ZÉRO ???

### 🚨 QUESTION QUE TOUT LE MONDE SE POSE !

Tu te demandes sûrement :  
> "Pourquoi la première case, c`est **0** et pas **1** ?"

C`est parce que **les ordinateurs comptent à partir de zéro**.  
C`est une vieille habitude des langages de programmation.

### 🪜 Imagine une échelle de chantier :

**Dans la vraie vie :**
- 1er barreau
- 2ème barreau  
- 3ème barreau

**En programmation :**
- 0 = premier barreau (le plus bas)
- 1 = deuxième barreau
- 2 = troisième barreau

C`est juste une **autre façon de compter**, mais on s`y habitue vite !

### 📊 Tableau comparatif :

| Position réelle | Index PHP | Contenu |
|-----------------|-----------|---------|
| 1er élément | 0 | truelle |
| 2ème élément | 1 | niveau |
| 3ème élément | 2 | mètre |

🧠 **Phrase à retenir :**
> "Le premier, c`est ZÉRO. Le deuxième, c`est UN. Le troisième, c`est DEUX."

---

## 👀 4️⃣ Accéder à un seul élément (lire une case)

Tu veux voir ce qu`il y a dans une case précise de la caisse.

Pour ça, tu utilises les **crochets avec un numéro** :

```php
$outils = ["truelle", "niveau", "mètre"];

echo $outils[0]; // Affiche "truelle"
```

💬 Les crochets `[0]` veulent dire :
> "Va chercher ce qu`il y a **dans la case numéro 0**."

### Autres exemples :

```php
echo $outils[0]; // truelle (le 1er)
echo $outils[1]; // niveau (le 2ème)
echo $outils[2]; // mètre (le 3ème)
```

### 🎯 Exemple complet :

```php
$outils = ["truelle", "niveau", "mètre"];

echo "Le premier outil est : " . $outils[0] . "<br>";
echo "Le deuxième outil est : " . $outils[1] . "<br>";
echo "Le troisième outil est : " . $outils[2] . "<br>";
```

**Résultat :**
```
Le premier outil est : truelle
Le deuxième outil est : niveau
Le troisième outil est : mètre
```

---

## ⚠️ ERREUR FRÉQUENTE À ÉVITER

### ❌ MAUVAIS :
```php
$outils = ["truelle", "niveau", "mètre"];
echo $outils[3]; // ERREUR ! Il n`y a que 3 éléments (0, 1, 2)
```

💬 **Pourquoi c`est une erreur ?**  
Ton tableau a 3 éléments :
- Case 0 = truelle
- Case 1 = niveau
- Case 2 = mètre

Il n`y a **pas de case 3** ! PHP va afficher un message d`erreur.

🧠 **Règle d`or :**
> Si tu as **N éléments**, les index vont de **0 à N-1**.  
> 3 éléments → index de 0 à 2  
> 10 éléments → index de 0 à 9

---

## 🔁 5️⃣ Afficher tout le tableau avec `foreach`

Tu veux voir **tous les outils**, un par un, sans te fatiguer.

Au lieu de faire plein de `echo`, on utilise une **boucle foreach** :

```php
$outils = ["truelle", "niveau", "mètre"];

foreach ($outils as $outil) {
    echo "J`utilise un $outil<br>";
}
```

### 🔍 Décortiquons cette ligne :

```php
foreach ($outils as $outil)
```

| Partie | Signification |
|--------|---------------|
| `foreach` | "Pour chaque" |
| `$outils` | "Dans ma caisse d`outils" |
| `as` | "En tant que" |
| `$outil` | "Appelle chaque objet : un outil" |

💬 Tu peux lire ça comme :
> "**Pour chaque** élément **dans** `$outils`, appelle-le `$outil` et fais quelque chose avec."

**Résultat :**
```
J`utilise une truelle
J`utilise un niveau
J`utilise un mètre
```

### 🎯 Ce qui se passe en coulisses :

**Tour 1 :** `$outil` = "truelle" → affiche "J`utilise un truelle"  
**Tour 2 :** `$outil` = "niveau" → affiche "J`utilise un niveau"  
**Tour 3 :** `$outil` = "mètre" → affiche "J`utilise un mètre"  

C`est **automatique** ! 🎉

---

## 🧰 6️⃣ Ajouter un élément à la fin

Tu veux ajouter un nouvel outil dans la caisse :

```php
$outils = ["truelle", "niveau", "mètre"];
$outils[] = "marteau";
```

💬 Les crochets vides `[]` signifient :
> "Mets le nouvel élément **à la fin du tableau**."

Maintenant ton tableau contient :
```
[0] => truelle
[1] => niveau
[2] => mètre
[3] => marteau
```

### Exemple complet :

```php
$outils = ["truelle", "niveau", "mètre"];
echo "J`ai " . count($outils) . " outils<br>";

$outils[] = "marteau";
echo "J`ai maintenant " . count($outils) . " outils<br>";

foreach ($outils as $outil) {
    echo "- $outil<br>";
}
```

**Résultat :**
```
J`ai 3 outils
J`ai maintenant 4 outils
- truelle
- niveau
- mètre
- marteau
```

---

## 🔄 7️⃣ Modifier un élément

Tu veux remplacer "mètre" par "règle" :

```php
$outils = ["truelle", "niveau", "mètre"];
$outils[2] = "règle";
```

💬 Les crochets `[2]` indiquent :
> "Va dans la **case numéro 2** et remplace ce qu`il y a dedans."

Maintenant ton tableau contient :
```
[0] => truelle
[1] => niveau
[2] => règle (changé !)
```

### Exemple avec affichage :

```php
$outils = ["truelle", "niveau", "mètre"];

echo "Avant : " . $outils[2] . "<br>";

$outils[2] = "règle";

echo "Après : " . $outils[2] . "<br>";
```

**Résultat :**
```
Avant : mètre
Après : règle
```

---

## 🧮 8️⃣ Compter les éléments avec `count()`

Tu veux savoir **combien d`outils** tu as dans ta caisse :

```php
$outils = ["truelle", "niveau", "mètre"];
echo count($outils);
```

**Résultat :**
```
3
```

💬 `count()` veut dire :
> "Compte combien d`éléments il y a dans le tableau."

### Exemple pratique :

```php
$outils = ["truelle", "niveau", "mètre"];
$nombre = count($outils);

echo "J`ai $nombre outils dans ma caisse.<br>";

$outils[] = "marteau";
$outils[] = "scie";

$nombre = count($outils);
echo "Maintenant j`ai $nombre outils !<br>";
```

**Résultat :**
```
J`ai 3 outils dans ma caisse.
Maintenant j`ai 5 outils !
```

---

## 📋 9️⃣ Tableaux avec des numéros

Les tableaux peuvent contenir **des nombres** au lieu de texte :

```php
$prix = [15, 25, 30, 12];

echo "Le premier prix est : " . $prix[0] . " euros<br>";
echo "Le dernier prix est : " . $prix[3] . " euros<br>";
```

**Résultat :**
```
Le premier prix est : 15 euros
Le dernier prix est : 12 euros
```

### Calculs avec un tableau de nombres :

```php
$sacs = [10, 5, 8];
$total = $sacs[0] + $sacs[1] + $sacs[2];

echo "Total de sacs : $total";
```

**Résultat :**
```
Total de sacs : 23
```

---

## 👷‍♂️ 🔟 Exemple complet - Le chantier

```php
// Création du tableau
$outils = ["truelle", "niveau", "mètre"];

echo "=== Au début du chantier ===<br>";
echo "J`ai " . count($outils) . " outils<br><br>";

// Ajout d`outils
$outils[] = "marteau";
$outils[] = "scie";

echo "=== Après avoir reçu du matériel ===<br>";
echo "J`ai maintenant " . count($outils) . " outils<br><br>";

// Modification
$outils[2] = "règle";
echo "=== J`ai remplacé le mètre par une règle ===<br><br>";

// Affichage de tous les outils
echo "=== Liste complète de mes outils ===<br>";
foreach ($outils as $outil) {
    echo "- $outil<br>";
}
```

**Résultat :**
```
=== Au début du chantier ===
J`ai 3 outils

=== Après avoir reçu du matériel ===
J`ai maintenant 5 outils

=== J`ai remplacé le mètre par une règle ===

=== Liste complète de mes outils ===
- truelle
- niveau
- règle
- marteau
- scie
```

---

## 🧱 Résumé du chef

| Code | Signification | Exemple |
|------|----------------|----------|
| `[]` | Crée un tableau | `$outils = ["truelle", "niveau"];` |
| `[0]` | Première case (1er élément) | `$outils[0]` affiche "truelle" |
| `[1]` | Deuxième case (2ème élément) | `$outils[1]` affiche "niveau" |
| `[2]` | Troisième case (3ème élément) | `$outils[2]` affiche "mètre" |
| `[] =` | Ajoute à la fin | `$outils[] = "marteau";` |
| `[n] =` | Modifie un élément | `$outils[2] = "règle";` |
| `count()` | Compte les éléments | `count($outils)` retourne 3 |
| `foreach` | Parcourt tout le tableau | `foreach ($outils as $outil)` |

---

## 💬 Phrases à retenir

> Un tableau, c`est comme une **caisse à outils** :  
> Tu ranges tout dedans, et chaque objet a un **numéro de case** ! 🪣

> Les crochets `[ ]` = "regarde dans une case"  
> Le nombre à l`intérieur = "le numéro de la case"  
> Et **on commence toujours à zéro** !

> `foreach` = "pour chaque élément, fais quelque chose"  
> C`est la boucle magique des tableaux ! 🔄

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Créer ton premier tableau
**Énoncé :**  
Crée un tableau `$outils` qui contient :  
"truelle", "niveau", "mètre"

Affiche ensuite chaque outil avec `echo` en utilisant les index [0], [1], [2].

**Ce qu`on attend :**  
- Un tableau avec 3 éléments
- 3 affichages séparés utilisant les crochets

**Exemple de résultat attendu :**
```
truelle
niveau
mètre
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = ["truelle", "niveau", "mètre"];

echo $outils[0] . "<br>";
echo $outils[1] . "<br>";
echo $outils[2] . "<br>";
?>
```
</details>

---

## 📝 Exercice 2 : Accéder au deuxième élément
**Énoncé :**  
Crée un tableau `$outils = ["truelle", "niveau", "mètre"]`.  
Affiche **seulement le deuxième outil** (niveau).

**Ce qu`on attend :**  
- Un tableau créé
- Affichage de l`index [1] uniquement

**Exemple de résultat attendu :**
```
niveau
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = ["truelle", "niveau", "mètre"];
echo $outils[1];
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser foreach
**Énoncé :**  
Crée un tableau `$outils = ["truelle", "niveau", "mètre"]`.  
Ajoute "marteau" à la fin du tableau.  
Affiche tous les outils avec une boucle `foreach`.

**Ce qu`on attend :**  
- Un tableau de 3 éléments
- Ajout d`un 4ème élément
- Boucle foreach pour afficher tout

**Exemple de résultat attendu :**
```
truelle
niveau
mètre
marteau
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = ["truelle", "niveau", "mètre"];
$outils[] = "marteau";

foreach ($outils as $outil) {
    echo "$outil<br>";
}
?>
```
</details>

---

## 📝 Exercice 4 : Modifier un élément
**Énoncé :**  
Crée un tableau `$outils = ["truelle", "niveau", "mètre"]`.  
Remplace "mètre" par "règle".  
Affiche le tableau avec foreach.

**Ce qu`on attend :**  
- Modification de l`index [2]
- Affichage du tableau modifié

**Exemple de résultat attendu :**
```
truelle
niveau
règle
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = ["truelle", "niveau", "mètre"];
$outils[2] = "règle";

foreach ($outils as $outil) {
    echo "$outil<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Compter les éléments
**Énoncé :**  
Crée un tableau `$outils = ["truelle", "niveau", "mètre"]`.  
Affiche combien d`outils tu as dans ta caisse en utilisant `count()`.

**Ce qu`on attend :**  
- Utilisation de count()
- Message clair avec le résultat

**Exemple de résultat attendu :**
```
J`ai 3 outils dans ma caisse.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = ["truelle", "niveau", "mètre"];
$nombre = count($outils);
echo "J`ai $nombre outils dans ma caisse.";
?>
```
</details>

---

## 📝 Exercice 6 : Tableau de clients
**Énoncé :**  
Crée un tableau `$clients = ["Dupont", "Martin", "Durand"]`.  
Utilise foreach pour afficher :  
"J`appelle le client [nom]." pour chaque client.

**Ce qu`on attend :**  
- Un tableau de 3 noms
- Boucle foreach avec message personnalisé

**Exemple de résultat attendu :**
```
J`appelle le client Dupont.
J`appelle le client Martin.
J`appelle le client Durand.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$clients = ["Dupont", "Martin", "Durand"];

foreach ($clients as $client) {
    echo "J`appelle le client $client.<br>";
}
?>
```
</details>

---

## 📝 Exercice 7 : Tableau de matériaux
**Énoncé :**  
Crée un tableau `$materiaux = ["briques", "ciment", "sable"]`.  
Affiche chaque matériau avec foreach en utilisant ce format :  
"Matériau : [nom]"

**Ce qu`on attend :**  
- Un tableau de 3 matériaux
- Affichage formaté avec foreach

**Exemple de résultat attendu :**
```
Matériau : briques
Matériau : ciment
Matériau : sable
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$materiaux = ["briques", "ciment", "sable"];

foreach ($materiaux as $m) {
    echo "Matériau : $m<br>";
}
?>
```
</details>

---

## 📝 Exercice 8 : Modifier et ajouter
**Énoncé :**  
Crée un tableau `$materiaux = ["briques", "ciment", "sable"]`.  
1. Change "sable" par "sable fin"
2. Ajoute "eau" à la fin
3. Affiche tout avec foreach

**Ce qu`on attend :**  
- Modification d`un élément existant
- Ajout d`un nouvel élément
- Affichage du résultat

**Exemple de résultat attendu :**
```
briques
ciment
sable fin
eau
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$materiaux = ["briques", "ciment", "sable"];
$materiaux[2] = "sable fin";
$materiaux[] = "eau";

foreach ($materiaux as $m) {
    echo "$m<br>";
}
?>
```
</details>

---

## 📝 Exercice 9 : Calculer un total
**Énoncé :**  
Crée un tableau `$sacs = [10, 5, 8]`.  
Chaque nombre représente un stock de sacs.  
Calcule et affiche le total de sacs.

💡 Indice : additionne `$sacs[0] + $sacs[1] + $sacs[2]`.

**Ce qu`on attend :**  
- Un tableau de nombres
- Addition des 3 valeurs
- Affichage du total

**Exemple de résultat attendu :**
```
Il y a 23 sacs au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$sacs = [10, 5, 8];
$total = $sacs[0] + $sacs[1] + $sacs[2];
echo "Il y a $total sacs au total.";
?>
```
</details>

---

## 📝 Exercice 10 : Numéroter les tâches
**Énoncé :**  
Crée un tableau `$taches = ["Préparer le ciment", "Monter le mur", "Nettoyer le chantier"]`.  
Affiche chaque tâche avec son numéro :
```
Tâche 1 : Préparer le ciment  
Tâche 2 : Monter le mur  
Tâche 3 : Nettoyer le chantier
```

💡 Astuce : avant la boucle, crée `$numero = 1;` et fais `$numero++` à chaque tour.

**Ce qu`on attend :**  
- Un tableau de 3 tâches
- Un compteur qui commence à 1
- Affichage numéroté

**Exemple de résultat attendu :**
```
Tâche 1 : Préparer le ciment
Tâche 2 : Monter le mur
Tâche 3 : Nettoyer le chantier
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$taches = ["Préparer le ciment", "Monter le mur", "Nettoyer le chantier"];
$numero = 1;

foreach ($taches as $tache) {
    echo "Tâche $numero : $tache<br>";
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