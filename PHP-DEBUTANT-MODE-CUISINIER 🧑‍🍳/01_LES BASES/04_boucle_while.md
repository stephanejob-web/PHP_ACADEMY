# 🔄 La boucle while – Le chef qui travaille "tant que..." 🍳

---
💬 "Quelle différence entre `for` et `while` ?"
`for` c'est quand tu sais combien d'assiettes tu dois servir.
`while` c'est quand tu sers des assiettes "tant que le service n'est pas fini" ! 😅

---

## 🍳 Pourquoi une boucle while ?

Avec la boucle `for`, tu sais **exactement combien de fois** tu vas répéter une action :
```php
for ($i = 1; $i <= 10; $i++) {
    // Je vais servir exactement 10 assiettes
}
```

Mais parfois en cuisine, tu ne sais **pas à l'avance** combien de temps tu vas travailler !

Par exemple :
- 🥣 "Fouette la crème **tant qu'elle n'est pas ferme**"
- 🍳 "Cuis les crêpes **tant que la pâte n'est pas terminée**"
- 💶 "Achète des ingrédients **tant que ton budget n'est pas épuisé**"

👉 Dans ces cas, tu utilises la boucle **`while`** !

---

## 💡 C'est quoi une boucle while ?

Une boucle **`while`** veut dire **"tant que"** en anglais.

Tu dis à ton commis :
> "Continue à servir des assiettes **TANT QUE** le service n'est pas fini !"

Et lui, il vérifie **avant chaque assiette** :
- ❓ "Le service est fini ?"
- ❌ "Non ? Alors je sers une assiette !"
- ❓ "Le service est fini maintenant ?"
- ✅ "Oui ! J'arrête !"

---

## 🧩 La structure du while

```php
while (CONDITION) {
    // Code à répéter TANT QUE la condition est vraie
}
```

### Exemple concret :

```php
$assiettes_servies = 0;

while ($assiettes_servies < 5) {
    $assiettes_servies++;
    echo "Je sers l'assiette numéro $assiettes_servies<br>";
}

echo "Le service est terminé !";
```

**Résultat :**
```
Je sers l'assiette numéro 1
Je sers l'assiette numéro 2
Je sers l'assiette numéro 3
Je sers l'assiette numéro 4
Je sers l'assiette numéro 5
Le service est terminé !
```

---

## 🎬 Comment ça marche vraiment ? (étape par étape)

Reprenons notre exemple :
```php
$assiettes_servies = 0;

while ($assiettes_servies < 5) {
    $assiettes_servies++;
    echo "Je sers l'assiette numéro $assiettes_servies<br>";
}
```

### 🎯 Tour par tour

#### 🔵 **AVANT de commencer**
On crée la variable : `$assiettes_servies = 0`

---

#### 🟢 **TOUR 1**

1. **PHP vérifie la condition** : `$assiettes_servies < 5` ?
   → `$assiettes_servies` vaut **0**, et 0 < 5 → **OUI** ✅
   → Donc on **entre dans la boucle**

2. **PHP exécute le code** :
   - `$assiettes_servies++` → la variable passe de 0 à **1**
   - `echo "Je sers l'assiette numéro 1"`

3. **PHP retourne vérifier la condition** (il remonte en haut du while)

---

#### 🟢 **TOUR 2**

1. **PHP vérifie la condition** : `$assiettes_servies < 5` ?
   → `$assiettes_servies` vaut **1**, et 1 < 5 → **OUI** ✅
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :
   - `$assiettes_servies++` → la variable passe de 1 à **2**
   - `echo "Je sers l'assiette numéro 2"`

3. **PHP retourne vérifier la condition**

---

#### 🟢 **TOURS 3, 4, 5...**

Le même processus continue jusqu'à ce que `$assiettes_servies` atteigne **5**.

---

#### 🔴 **Après le TOUR 5**

1. **PHP vérifie la condition** : `$assiettes_servies < 5` ?
   → `$assiettes_servies` vaut **5**, et 5 < 5 → **NON** ❌
   → Donc on **SORT de la boucle**

2. **C'est fini !** Le code continue après le while.

---

### 📊 Tableau récapitulatif

| Tour | Valeur de $assiettes_servies | Condition < 5 ? | Action | Après ++ |
|------|------------------------------|-----------------|--------|----------|
| 1 | 0 | ✅ OUI | Sers assiette 1 | devient 1 |
| 2 | 1 | ✅ OUI | Sers assiette 2 | devient 2 |
| 3 | 2 | ✅ OUI | Sers assiette 3 | devient 3 |
| 4 | 3 | ✅ OUI | Sers assiette 4 | devient 4 |
| 5 | 4 | ✅ OUI | Sers assiette 5 | devient 5 |
| 6 | 5 | ❌ NON | Sortie | - |

---

## 🔍 Différence entre for et while

### 🔹 Boucle FOR
Tu utilises `for` quand tu **sais à l'avance** combien de tours tu vas faire.

```php
// Je sais que je vais servir EXACTEMENT 10 assiettes
for ($i = 1; $i <= 10; $i++) {
    echo "Je sers l'assiette $i<br>";
}
```

💬 **En langage cuisinier :**
> "Sers-moi 10 assiettes. Ni plus, ni moins."

---

### 🔹 Boucle WHILE
Tu utilises `while` quand tu ne sais **pas à l'avance** combien de tours tu vas faire.

```php
// Je ne sais pas combien de portions il faut, je sers TANT QU'il y a des clients
$portions_servies = 0;
$clients_en_attente = 15;

while ($portions_servies < $clients_en_attente) {
    $portions_servies++;
    echo "Je sers la portion numéro $portions_servies<br>";
}
```

💬 **En langage cuisinier :**
> "Sers des portions **tant que** tous les clients ne sont pas servis."

---

## 📋 Comparaison visuelle

| Critère | `for` | `while` |
|---------|-------|---------|
| **Quand l'utiliser** | Nombre de tours connu | Nombre de tours inconnu |
| **Exemple** | "Sers 10 assiettes" | "Sers des assiettes tant que le service n'est pas fini" |
| **Structure** | `for ($i=1; $i<=10; $i++)` | `while ($condition)` |
| **Compteur** | Géré automatiquement | Tu dois le gérer toi-même |

---

## ⚠️ ATTENTION : Le piège de la boucle infinie !

### 🚨 Le danger mortel du while

Si tu oublies de **modifier la condition** dans la boucle, elle ne s'arrêtera **JAMAIS** !

#### ❌ **MAUVAIS EXEMPLE (boucle infinie) :**
```php
$assiettes = 0;

while ($assiettes < 5) {
    echo "Je sers une assiette<br>";
    // ERREUR : On n'augmente JAMAIS $assiettes !
}
// Cette boucle va tourner à l'infini ! 💥
```

💬 **Ce qui se passe :**
- Tour 1 : `$assiettes` vaut 0, condition vraie → on entre
- Tour 2 : `$assiettes` vaut TOUJOURS 0, condition vraie → on entre
- Tour 3 : `$assiettes` vaut TOUJOURS 0, condition vraie → on entre
- ... **À L'INFINI** 😱

Ton ordinateur va **planter** !

---

#### ✅ **BON EXEMPLE :**
```php
$assiettes = 0;

while ($assiettes < 5) {
    $assiettes++; // ✅ ON MODIFIE LA VARIABLE !
    echo "Je sers l'assiette $assiettes<br>";
}
```

💬 **Ce qui se passe :**
- `$assiettes` augmente à chaque tour
- Un moment, `$assiettes` vaut 5
- La condition devient fausse
- La boucle **s'arrête** ✅

---

### 🧠 Règle d'or du while

> **À l'intérieur du while, tu DOIS modifier la variable de la condition !**
> Sinon, c'est la boucle infinie assurée ! 💥

---

## 🧮 Exemples concrets

### Exemple 1 : Remplir un plateau de portions

```php
$portions = 0;
$capacite_max = 8;

echo "Je commence à remplir le plateau :<br>";

while ($portions < $capacite_max) {
    $portions++;
    echo "Portion $portions servie<br>";
}

echo "Le plateau est plein ! 🍽️";
```

**Résultat :**
```
Je commence à remplir le plateau :
Portion 1 servie
Portion 2 servie
Portion 3 servie
Portion 4 servie
Portion 5 servie
Portion 6 servie
Portion 7 servie
Portion 8 servie
Le plateau est plein ! 🍽️
```

---

### Exemple 2 : Dépenser un budget

```php
$budget = 100; // euros
$prix_ingredient = 15;
$ingredients_achetes = 0;

echo "J'ai $budget euros pour acheter des ingrédients :<br>";

while ($budget >= $prix_ingredient) {
    $budget -= $prix_ingredient;
    $ingredients_achetes++;
    echo "Ingrédient $ingredients_achetes acheté (reste $budget euros)<br>";
}

echo "Je ne peux plus acheter d'ingrédients ! Il me reste $budget euros.";
```

**Résultat :**
```
J'ai 100 euros pour acheter des ingrédients :
Ingrédient 1 acheté (reste 85 euros)
Ingrédient 2 acheté (reste 70 euros)
Ingrédient 3 acheté (reste 55 euros)
Ingrédient 4 acheté (reste 40 euros)
Ingrédient 5 acheté (reste 25 euros)
Ingrédient 6 acheté (reste 10 euros)
Je ne peux plus acheter d'ingrédients ! Il me reste 10 euros.
```

---

### Exemple 3 : Cuire des gâteaux jusqu'à une quantité

```php
$gateaux_cuits = 0; // nombre
$quantite_voulue = 3;

echo "Je cuis les gâteaux :<br>";

while ($gateaux_cuits < $quantite_voulue) {
    $gateaux_cuits++;
    echo "J'ai cuit $gateaux_cuits gâteau(x)<br>";
}

echo "Tous les gâteaux sont cuits ! 🎂";
```

**Résultat :**
```
Je cuis les gâteaux :
J'ai cuit 1 gâteau(x)
J'ai cuit 2 gâteaux
J'ai cuit 3 gâteaux
Tous les gâteaux sont cuits ! 🎂
```

---

## 🔄 While avec décrémentation (compter à l'envers)

Tu peux aussi utiliser `while` pour compter à l'envers !

### Exemple : Vider des bols de préparation

```php
$bols_restants = 5;

echo "Je vide les bols de préparation :<br>";

while ($bols_restants > 0) {
    echo "Je vide le bol numéro $bols_restants<br>";
    $bols_restants--; // On descend
}

echo "Tous les bols sont vides !";
```

**Résultat :**
```
Je vide les bols de préparation :
Je vide le bol numéro 5
Je vide le bol numéro 4
Je vide le bol numéro 3
Je vide le bol numéro 2
Je vide le bol numéro 1
Tous les bols sont vides !
```

---

## 🎯 Conditions multiples dans while

Tu peux avoir des conditions **plus complexes** :

### Exemple : Cuisiner avec deux limites

```php
$plats = 0;
$budget = 50;
$cout_plat = 12;

echo "Je prépare des plats tant que j'ai du budget ET moins de 10 plats :<br>";

while ($plats < 10 && $budget >= $cout_plat) {
    $plats++;
    $budget -= $cout_plat;
    echo "Plat $plats préparé (reste $budget euros)<br>";
}

if ($plats < 10) {
    echo "Je m'arrête : plus de budget ! 💸";
} else {
    echo "Je m'arrête : j'ai préparé 10 plats ! 🍽️";
}
```

**Résultat :**
```
Je prépare des plats tant que j'ai du budget ET moins de 10 plats :
Plat 1 préparé (reste 38 euros)
Plat 2 préparé (reste 26 euros)
Plat 3 préparé (reste 14 euros)
Plat 4 préparé (reste 2 euros)
Je m'arrête : plus de budget ! 💸
```

---

## 🧩 En résumé

### 📋 Structure de base

```php
while (CONDITION) {
    // Code à répéter
    // ⚠️ ATTENTION : Modifier la variable de la condition !
}
```

### 📋 Exemple type

```php
$compteur = 0;

while ($compteur < 5) {
    $compteur++; // ✅ IMPORTANT : modifier le compteur !
    echo "Service numéro $compteur<br>";
}
```

---

## 💬 Phrases à retenir

> La boucle `while` c'est comme dire à ton commis :
> **"Continue ton service TANT QUE je ne te dis pas d'arrêter !"** 🍳🤖

> **Règle d'or :** Dans un `while`, tu DOIS modifier la variable de la condition,
> sinon c'est la boucle infinie ! 💥

> `for` = "Fais-le 10 fois"
> `while` = "Fais-le tant que ce n'est pas fini"

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Premier while simple
**Énoncé :**
Crée une variable `$nombre = 1`.
Utilise une boucle `while` pour afficher les nombres de **1 à 5**.

**Ce qu'on attend :**
- Une variable initialisée à 1
- Une boucle while avec condition < ou <= 5
- Incrémentation de la variable dans la boucle

**Exemple de résultat attendu :**
```
1
2
3
4
5
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$nombre = 1;

while ($nombre <= 5) {
    echo "$nombre<br>";
    $nombre++;
}
?>
```
</details>

---

## 📝 Exercice 2 : Servir des assiettes
**Énoncé :**
Crée une variable `$assiettes = 0`.
Utilise une boucle `while` pour servir **7 assiettes**.
Affiche : "Je sers l'assiette numéro X" pour chaque assiette.

**Ce qu'on attend :**
- Une variable compteur qui commence à 0
- Une boucle qui tourne 7 fois
- Un message pour chaque assiette servie

**Exemple de résultat attendu :**
```
Je sers l'assiette numéro 1
Je sers l'assiette numéro 2
Je sers l'assiette numéro 3
Je sers l'assiette numéro 4
Je sers l'assiette numéro 5
Je sers l'assiette numéro 6
Je sers l'assiette numéro 7
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$assiettes = 0;

while ($assiettes < 7) {
    $assiettes++;
    echo "Je sers l'assiette numéro $assiettes<br>";
}
?>
```
</details>

---

## 📝 Exercice 3 : Compter à l'envers
**Énoncé :**
Crée une variable `$compte = 5`.
Utilise une boucle `while` pour afficher un décompte de **5 à 1**.

**Ce qu'on attend :**
- Une variable qui commence à 5
- Une boucle avec condition > 0
- Décrémentation dans la boucle

**Exemple de résultat attendu :**
```
5
4
3
2
1
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$compte = 5;

while ($compte > 0) {
    echo "$compte<br>";
    $compte--;
}
?>
```
</details>

---

## 📝 Exercice 4 : Remplir un plateau
**Énoncé :**
Crée une variable `$portions = 0` et `$capacite = 6`.
Utilise une boucle `while` pour remplir le plateau.
Affiche : "Portion X servie" pour chaque portion.
Après la boucle, affiche : "Le plateau est plein !"

**Ce qu'on attend :**
- Deux variables (compteur et limite)
- Une boucle qui s'arrête à la capacité
- Un message final

**Exemple de résultat attendu :**
```
Portion 1 servie
Portion 2 servie
Portion 3 servie
Portion 4 servie
Portion 5 servie
Portion 6 servie
Le plateau est plein !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$portions = 0;
$capacite = 6;

while ($portions < $capacite) {
    $portions++;
    echo "Portion $portions servie<br>";
}

echo "Le plateau est plein !<br>";
?>
```
</details>

---

## 📝 Exercice 5 : Dépenser un budget
**Énoncé :**
Tu as `$budget = 80` euros. Chaque ingrédient coûte `$prix = 20` euros.
Utilise une boucle `while` pour acheter des ingrédients **tant que tu as assez d'argent**.
Affiche : "Ingrédient X acheté (reste Y euros)" pour chaque achat.

**Ce qu'on attend :**
- Une boucle qui vérifie le budget restant
- Soustraction du prix à chaque tour
- Affichage du budget restant

**Exemple de résultat attendu :**
```
Ingrédient 1 acheté (reste 60 euros)
Ingrédient 2 acheté (reste 40 euros)
Ingrédient 3 acheté (reste 20 euros)
Ingrédient 4 acheté (reste 0 euros)
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 80;
$prix = 20;
$ingredients = 0;

while ($budget >= $prix) {
    $ingredients++;
    $budget -= $prix;
    echo "Ingrédient $ingredients acheté (reste $budget euros)<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Cuire des gâteaux
**Énoncé :**
Crée `$gateaux_cuits = 0` et `$quantite_voulue = 4`.
Utilise une boucle `while` pour cuire les gâteaux un par un.
Affiche : "J'ai cuit X gâteau(x)".
Après la boucle : "Tous les gâteaux sont cuits !"

**Ce qu'on attend :**
- Une boucle qui s'arrête à la quantité voulue
- Un message à chaque gâteau cuit
- Un message final

**Exemple de résultat attendu :**
```
J'ai cuit 1 gâteau(x)
J'ai cuit 2 gâteaux
J'ai cuit 3 gâteaux
J'ai cuit 4 gâteaux
Tous les gâteaux sont cuits !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gateaux_cuits = 0;
$quantite_voulue = 4;

while ($gateaux_cuits < $quantite_voulue) {
    $gateaux_cuits++;
    echo "J'ai cuit $gateaux_cuits gâteau(x)<br>";
}

echo "Tous les gâteaux sont cuits !<br>";
?>
```
</details>

---

## 📝 Exercice 7 : Vider des bols
**Énoncé :**
Tu as `$bols = 8` bols pleins.
Utilise une boucle `while` pour les vider un par un (en comptant à l'envers).
Affiche : "Je vide le bol numéro X".
Après : "Tous les bols sont vides !"

**Ce qu'on attend :**
- Une boucle qui décrémente
- Affichage du numéro de bol
- Message final

**Exemple de résultat attendu :**
```
Je vide le bol numéro 8
Je vide le bol numéro 7
Je vide le bol numéro 6
Je vide le bol numéro 5
Je vide le bol numéro 4
Je vide le bol numéro 3
Je vide le bol numéro 2
Je vide le bol numéro 1
Tous les bols sont vides !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$bols = 8;

while ($bols > 0) {
    echo "Je vide le bol numéro $bols<br>";
    $bols--;
}

echo "Tous les bols sont vides !<br>";
?>
```
</details>

---

## 📝 Exercice 8 : Somme des nombres
**Énoncé :**
Crée `$nombre = 1` et `$somme = 0`.
Utilise une boucle `while` pour additionner tous les nombres de **1 à 10**.
Affiche la somme totale à la fin.

**Ce qu'on attend :**
- Une boucle de 1 à 10
- Addition de chaque nombre à la somme
- Affichage du résultat final (devrait être 55)

**Exemple de résultat attendu :**
```
La somme de 1 à 10 est : 55
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$nombre = 1;
$somme = 0;

while ($nombre <= 10) {
    $somme += $nombre;
    $nombre++;
}

echo "La somme de 1 à 10 est : $somme<br>";
?>
```
</details>

---

## 📝 Exercice 9 : Compter de 2 en 2
**Énoncé :**
Crée `$nombre = 0`.
Utilise une boucle `while` pour afficher tous les nombres **pairs** de 0 à 20.
(Astuce : augmente de 2 à chaque tour)

**Ce qu'on attend :**
- Une boucle qui s'arrête à 20
- Incrémentation de 2 en 2
- Affichage des nombres pairs

**Exemple de résultat attendu :**
```
0
2
4
6
8
10
12
14
16
18
20
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$nombre = 0;

while ($nombre <= 20) {
    echo "$nombre<br>";
    $nombre += 2;
}
?>
```
</details>

---

## 📝 Exercice 10 : Défi - Budget limité avec deux conditions
**Énoncé :**
Tu as `$budget = 100` euros et tu veux préparer **maximum 10 plats**.
Chaque plat coûte `$cout = 15` euros.
Utilise une boucle `while` qui s'arrête quand :
- Tu n'as plus assez d'argent OU
- Tu as préparé 10 plats

Affiche : "Plat X préparé (reste Y euros)".
À la fin, affiche combien de plats tu as préparé et combien d'argent il reste.

**Ce qu'on attend :**
- Une boucle avec deux conditions (&&)
- Gestion du budget et du compteur
- Message final récapitulatif

**Exemple de résultat attendu :**
```
Plat 1 préparé (reste 85 euros)
Plat 2 préparé (reste 70 euros)
Plat 3 préparé (reste 55 euros)
Plat 4 préparé (reste 40 euros)
Plat 5 préparé (reste 25 euros)
Plat 6 préparé (reste 10 euros)
J'ai préparé 6 plats. Il me reste 10 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 100;
$cout = 15;
$plats = 0;
$max_plats = 10;

while ($plats < $max_plats && $budget >= $cout) {
    $plats++;
    $budget -= $cout;
    echo "Plat $plats préparé (reste $budget euros)<br>";
}

echo "J'ai préparé $plats plats. Il me reste $budget euros.<br>";
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant la boucle `while` en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une boucle `while` avec une condition
- ✅ Faire une boucle qui compte en montant
- ✅ Faire une boucle qui compte à l'envers
- ✅ Éviter les boucles infinies (en modifiant la variable)
- ✅ Utiliser des conditions complexes
- ✅ Gérer un budget ou une limite dans une boucle
- ✅ Comprendre la différence entre `for` et `while`

**Prochaine étape :** Les tableaux et la boucle `foreach` ! 🚀
