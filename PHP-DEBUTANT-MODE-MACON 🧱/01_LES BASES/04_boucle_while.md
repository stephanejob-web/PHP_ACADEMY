# 🔄 La boucle while – Le maçon qui travaille "tant que..." 🧱

---
💬 "Quelle différence entre `for` et `while` ?"
`for` c`est quand tu sais combien de briques tu dois poser.  
`while` c`est quand tu poses des briques "tant que le mur n`est pas fini" ! 😅

---

## 🚧 Pourquoi une boucle while ?

Avec la boucle `for`, tu sais **exactement combien de fois** tu vas répéter une action :
```php
for ($i = 1; $i <= 10; $i++) {
    // Je vais poser exactement 10 briques
}
```

Mais parfois sur un chantier, tu ne sais **pas à l`avance** combien de temps tu vas travailler !

Par exemple :
- 🪣 "Remplis des seaux **tant qu`il reste du ciment**"
- 🧱 "Pose des briques **tant que le mur n`est pas à 2 mètres**"
- 💶 "Achète du matériel **tant que ton budget n`est pas épuisé**"

👉 Dans ces cas, tu utilises la boucle **`while`** !

---

## 💡 C`est quoi une boucle while ?

Une boucle **`while`** veut dire **"tant que"** en anglais.

Tu dis à ton apprenti :
> "Continue à poser des briques **TANT QUE** le mur n`est pas fini !"

Et lui, il vérifie **avant chaque brique** :
- ❓ "Le mur est fini ?"
- ❌ "Non ? Alors je pose une brique !"
- ❓ "Le mur est fini maintenant ?"
- ✅ "Oui ! J`arrête !"

---

## 🧩 La structure du while

```php
while (CONDITION) {
    // Code à répéter TANT QUE la condition est vraie
}
```

### Exemple concret :

```php
$briques_posees = 0;

while ($briques_posees < 5) {
    $briques_posees++;
    echo "Je pose la brique numéro $briques_posees<br>";
}

echo "Le mur est terminé !";
```

**Résultat :**
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
Le mur est terminé !
```

---

## 🎬 Comment ça marche vraiment ? (étape par étape)

Reprenons notre exemple :
```php
$briques_posees = 0;

while ($briques_posees < 5) {
    $briques_posees++;
    echo "Je pose la brique numéro $briques_posees<br>";
}
```

### 🎯 Tour par tour

#### 🔵 **AVANT de commencer**
On crée la variable : `$briques_posees = 0`

---

#### 🟢 **TOUR 1**

1. **PHP vérifie la condition** : `$briques_posees < 5` ?  
   → `$briques_posees` vaut **0**, et 0 < 5 → **OUI** ✅  
   → Donc on **entre dans la boucle**

2. **PHP exécute le code** :
   - `$briques_posees++` → la variable passe de 0 à **1**
   - `echo "Je pose la brique numéro 1"`

3. **PHP retourne vérifier la condition** (il remonte en haut du while)

---

#### 🟢 **TOUR 2**

1. **PHP vérifie la condition** : `$briques_posees < 5` ?  
   → `$briques_posees` vaut **1**, et 1 < 5 → **OUI** ✅  
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :
   - `$briques_posees++` → la variable passe de 1 à **2**
   - `echo "Je pose la brique numéro 2"`

3. **PHP retourne vérifier la condition**

---

#### 🟢 **TOURS 3, 4, 5...**

Le même processus continue jusqu`à ce que `$briques_posees` atteigne **5**.

---

#### 🔴 **Après le TOUR 5**

1. **PHP vérifie la condition** : `$briques_posees < 5` ?  
   → `$briques_posees` vaut **5**, et 5 < 5 → **NON** ❌  
   → Donc on **SORT de la boucle**

2. **C`est fini !** Le code continue après le while.

---

### 📊 Tableau récapitulatif

| Tour | Valeur de $briques_posees | Condition < 5 ? | Action | Après ++ |
|------|---------------------------|-----------------|--------|----------|
| 1 | 0 | ✅ OUI | Pose brique 1 | devient 1 |
| 2 | 1 | ✅ OUI | Pose brique 2 | devient 2 |
| 3 | 2 | ✅ OUI | Pose brique 3 | devient 3 |
| 4 | 3 | ✅ OUI | Pose brique 4 | devient 4 |
| 5 | 4 | ✅ OUI | Pose brique 5 | devient 5 |
| 6 | 5 | ❌ NON | Sortie | - |

---

## 🔍 Différence entre for et while

### 🔹 Boucle FOR
Tu utilises `for` quand tu **sais à l`avance** combien de tours tu vas faire.

```php
// Je sais que je vais poser EXACTEMENT 10 briques
for ($i = 1; $i <= 10; $i++) {
    echo "Je pose la brique $i<br>";
}
```

💬 **En langage maçon :**
> "Pose-moi 10 briques. Ni plus, ni moins."

---

### 🔹 Boucle WHILE
Tu utilises `while` quand tu ne sais **pas à l`avance** combien de tours tu vas faire.

```php
// Je ne sais pas combien de seaux il faut, je remplis TANT QUE le camion n`est pas plein
$seaux_remplis = 0;
$capacite_camion = 15;

while ($seaux_remplis < $capacite_camion) {
    $seaux_remplis++;
    echo "Je remplis le seau numéro $seaux_remplis<br>";
}
```

💬 **En langage maçon :**
> "Remplis des seaux **tant que** le camion n`est pas plein."

---

## 📋 Comparaison visuelle

| Critère | `for` | `while` |
|---------|-------|---------|
| **Quand l`utiliser** | Nombre de tours connu | Nombre de tours inconnu |
| **Exemple** | "Pose 10 briques" | "Pose des briques tant que le mur n`est pas fini" |
| **Structure** | `for ($i=1; $i<=10; $i++)` | `while ($condition)` |
| **Compteur** | Géré automatiquement | Tu dois le gérer toi-même |

---

## ⚠️ ATTENTION : Le piège de la boucle infinie !

### 🚨 Le danger mortel du while

Si tu oublies de **modifier la condition** dans la boucle, elle ne s`arrêtera **JAMAIS** !

#### ❌ **MAUVAIS EXEMPLE (boucle infinie) :**
```php
$briques = 0;

while ($briques < 5) {
    echo "Je pose une brique<br>";
    // ERREUR : On n`augmente JAMAIS $briques !
}
// Cette boucle va tourner à l`infini ! 💥
```

💬 **Ce qui se passe :**
- Tour 1 : `$briques` vaut 0, condition vraie → on entre
- Tour 2 : `$briques` vaut TOUJOURS 0, condition vraie → on entre
- Tour 3 : `$briques` vaut TOUJOURS 0, condition vraie → on entre
- ... **À L`INFINI** 😱

Ton ordinateur va **planter** !

---

#### ✅ **BON EXEMPLE :**
```php
$briques = 0;

while ($briques < 5) {
    $briques++; // ✅ ON MODIFIE LA VARIABLE !
    echo "Je pose la brique $briques<br>";
}
```

💬 **Ce qui se passe :**
- `$briques` augmente à chaque tour
- Un moment, `$briques` vaut 5
- La condition devient fausse
- La boucle **s`arrête** ✅

---

### 🧠 Règle d`or du while

> **À l`intérieur du while, tu DOIS modifier la variable de la condition !**  
> Sinon, c`est la boucle infinie assurée ! 💥

---

## 🧮 Exemples concrets

### Exemple 1 : Remplir un camion de seaux

```php
$seaux = 0;
$capacite_max = 8;

echo "Je commence à remplir le camion :<br>";

while ($seaux < $capacite_max) {
    $seaux++;
    echo "Seau $seaux chargé<br>";
}

echo "Le camion est plein ! 🚛";
```

**Résultat :**
```
Je commence à remplir le camion :
Seau 1 chargé
Seau 2 chargé
Seau 3 chargé
Seau 4 chargé
Seau 5 chargé
Seau 6 chargé
Seau 7 chargé
Seau 8 chargé
Le camion est plein ! 🚛
```

---

### Exemple 2 : Dépenser un budget

```php
$budget = 100; // euros
$prix_brique = 15;
$briques_achetees = 0;

echo "J`ai $budget euros pour acheter des briques :<br>";

while ($budget >= $prix_brique) {
    $budget -= $prix_brique;
    $briques_achetees++;
    echo "Brique $briques_achetees achetée (reste $budget euros)<br>";
}

echo "Je ne peux plus acheter de briques ! Il me reste $budget euros.";
```

**Résultat :**
```
J`ai 100 euros pour acheter des briques :
Brique 1 achetée (reste 85 euros)
Brique 2 achetée (reste 70 euros)
Brique 3 achetée (reste 55 euros)
Brique 4 achetée (reste 40 euros)
Brique 5 achetée (reste 25 euros)
Brique 6 achetée (reste 10 euros)
Je ne peux plus acheter de briques ! Il me reste 10 euros.
```

---

### Exemple 3 : Construire un mur jusqu`à une hauteur

```php
$hauteur = 0; // mètres
$hauteur_voulue = 3;

echo "Je construis le mur :<br>";

while ($hauteur < $hauteur_voulue) {
    $hauteur++;
    echo "Le mur fait maintenant $hauteur mètre(s) de haut<br>";
}

echo "Le mur est à la bonne hauteur ! 🧱";
```

**Résultat :**
```
Je construis le mur :
Le mur fait maintenant 1 mètre(s) de haut
Le mur fait maintenant 2 mètre(s) de haut
Le mur fait maintenant 3 mètre(s) de haut
Le mur est à la bonne hauteur ! 🧱
```

---

## 🔄 While avec décrémentation (compter à l`envers)

Tu peux aussi utiliser `while` pour compter à l`envers !

### Exemple : Vider des sacs de ciment

```php
$sacs_restants = 5;

echo "Je vide les sacs de ciment :<br>";

while ($sacs_restants > 0) {
    echo "Je vide le sac numéro $sacs_restants<br>";
    $sacs_restants--; // On descend
}

echo "Tous les sacs sont vides !";
```

**Résultat :**
```
Je vide les sacs de ciment :
Je vide le sac numéro 5
Je vide le sac numéro 4
Je vide le sac numéro 3
Je vide le sac numéro 2
Je vide le sac numéro 1
Tous les sacs sont vides !
```

---

## 🎯 Conditions multiples dans while

Tu peux avoir des conditions **plus complexes** :

### Exemple : Travailler avec deux limites

```php
$briques = 0;
$budget = 50;
$prix_brique = 12;

echo "Je pose des briques tant que j`ai du budget ET moins de 10 briques :<br>";

while ($briques < 10 && $budget >= $prix_brique) {
    $briques++;
    $budget -= $prix_brique;
    echo "Brique $briques posée (reste $budget euros)<br>";
}

if ($briques < 10) {
    echo "Je m`arrête : plus de budget ! 💸";
} else {
    echo "Je m`arrête : j`ai posé 10 briques ! 🧱";
}
```

**Résultat :**
```
Je pose des briques tant que j`ai du budget ET moins de 10 briques :
Brique 1 posée (reste 38 euros)
Brique 2 posée (reste 26 euros)
Brique 3 posée (reste 14 euros)
Brique 4 posée (reste 2 euros)
Je m`arrête : plus de budget ! 💸
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
    echo "Tour numéro $compteur<br>";
}
```

---

## 💬 Phrases à retenir

> La boucle `while` c`est comme dire à ton apprenti :  
> **"Continue ton boulot TANT QUE je ne te dis pas d`arrêter !"** 🧱🤖

> **Règle d`or :** Dans un `while`, tu DOIS modifier la variable de la condition,  
> sinon c`est la boucle infinie ! 💥

> `for` = "Fais-le 10 fois"  
> `while` = "Fais-le tant que ce n`est pas fini"

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Premier while simple
**Énoncé :**  
Crée une variable `$nombre = 1`.  
Utilise une boucle `while` pour afficher les nombres de **1 à 5**.

**Ce qu`on attend :**  
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

## 📝 Exercice 2 : Poser des briques
**Énoncé :**  
Crée une variable `$briques = 0`.  
Utilise une boucle `while` pour poser **7 briques**.  
Affiche : "Je pose la brique numéro X" pour chaque brique.

**Ce qu`on attend :**  
- Une variable compteur qui commence à 0
- Une boucle qui tourne 7 fois
- Un message pour chaque brique posée

**Exemple de résultat attendu :**
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
Je pose la brique numéro 6
Je pose la brique numéro 7
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$briques = 0;

while ($briques < 7) {
    $briques++;
    echo "Je pose la brique numéro $briques<br>";
}
?>
```
</details>

---

## 📝 Exercice 3 : Compter à l`envers
**Énoncé :**  
Crée une variable `$compte = 5`.  
Utilise une boucle `while` pour afficher un décompte de **5 à 1**.

**Ce qu`on attend :**  
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

## 📝 Exercice 4 : Remplir un camion
**Énoncé :**  
Crée une variable `$seaux = 0` et `$capacite = 6`.  
Utilise une boucle `while` pour remplir le camion.  
Affiche : "Seau X chargé" pour chaque seau.  
Après la boucle, affiche : "Le camion est plein !"

**Ce qu`on attend :**  
- Deux variables (compteur et limite)
- Une boucle qui s`arrête à la capacité
- Un message final

**Exemple de résultat attendu :**
```
Seau 1 chargé
Seau 2 chargé
Seau 3 chargé
Seau 4 chargé
Seau 5 chargé
Seau 6 chargé
Le camion est plein !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$seaux = 0;
$capacite = 6;

while ($seaux < $capacite) {
    $seaux++;
    echo "Seau $seaux chargé<br>";
}

echo "Le camion est plein !<br>";
?>
```
</details>

---

## 📝 Exercice 5 : Dépenser un budget
**Énoncé :**  
Tu as `$budget = 80` euros. Chaque sac de ciment coûte `$prix = 20` euros.  
Utilise une boucle `while` pour acheter des sacs **tant que tu as assez d`argent**.  
Affiche : "Sac X acheté (reste Y euros)" pour chaque achat.

**Ce qu`on attend :**  
- Une boucle qui vérifie le budget restant
- Soustraction du prix à chaque tour
- Affichage du budget restant

**Exemple de résultat attendu :**
```
Sac 1 acheté (reste 60 euros)
Sac 2 acheté (reste 40 euros)
Sac 3 acheté (reste 20 euros)
Sac 4 acheté (reste 0 euros)
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 80;
$prix = 20;
$sacs = 0;

while ($budget >= $prix) {
    $sacs++;
    $budget -= $prix;
    echo "Sac $sacs acheté (reste $budget euros)<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Monter un mur
**Énoncé :**  
Crée `$hauteur = 0` et `$hauteur_voulue = 4`.  
Utilise une boucle `while` pour construire le mur mètre par mètre.  
Affiche : "Le mur fait maintenant X mètre(s)".  
Après la boucle : "Le mur est terminé !"

**Ce qu`on attend :**  
- Une boucle qui s`arrête à la hauteur voulue
- Un message à chaque mètre ajouté
- Un message final

**Exemple de résultat attendu :**
```
Le mur fait maintenant 1 mètre(s)
Le mur fait maintenant 2 mètre(s)
Le mur fait maintenant 3 mètre(s)
Le mur fait maintenant 4 mètre(s)
Le mur est terminé !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$hauteur = 0;
$hauteur_voulue = 4;

while ($hauteur < $hauteur_voulue) {
    $hauteur++;
    echo "Le mur fait maintenant $hauteur mètre(s)<br>";
}

echo "Le mur est terminé !<br>";
?>
```
</details>

---

## 📝 Exercice 7 : Vider des sacs
**Énoncé :**  
Tu as `$sacs = 8` sacs pleins.  
Utilise une boucle `while` pour les vider un par un (en comptant à l`envers).  
Affiche : "Je vide le sac numéro X".  
Après : "Tous les sacs sont vides !"

**Ce qu`on attend :**  
- Une boucle qui décrémente
- Affichage du numéro de sac
- Message final

**Exemple de résultat attendu :**
```
Je vide le sac numéro 8
Je vide le sac numéro 7
Je vide le sac numéro 6
Je vide le sac numéro 5
Je vide le sac numéro 4
Je vide le sac numéro 3
Je vide le sac numéro 2
Je vide le sac numéro 1
Tous les sacs sont vides !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$sacs = 8;

while ($sacs > 0) {
    echo "Je vide le sac numéro $sacs<br>";
    $sacs--;
}

echo "Tous les sacs sont vides !<br>";
?>
```
</details>

---

## 📝 Exercice 8 : Somme des nombres
**Énoncé :**  
Crée `$nombre = 1` et `$somme = 0`.  
Utilise une boucle `while` pour additionner tous les nombres de **1 à 10**.  
Affiche la somme totale à la fin.

**Ce qu`on attend :**  
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

**Ce qu`on attend :**  
- Une boucle qui s`arrête à 20
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
Tu as `$budget = 100` euros et tu veux acheter **maximum 10 briques**.  
Chaque brique coûte `$prix = 15` euros.  
Utilise une boucle `while` qui s`arrête quand :
- Tu n`as plus assez d`argent OU
- Tu as acheté 10 briques

Affiche : "Brique X achetée (reste Y euros)".  
À la fin, affiche combien de briques tu as acheté et combien d`argent il reste.

**Ce qu`on attend :**  
- Une boucle avec deux conditions (&&)
- Gestion du budget et du compteur
- Message final récapitulatif

**Exemple de résultat attendu :**
```
Brique 1 achetée (reste 85 euros)
Brique 2 achetée (reste 70 euros)
Brique 3 achetée (reste 55 euros)
Brique 4 achetée (reste 40 euros)
Brique 5 achetée (reste 25 euros)
Brique 6 achetée (reste 10 euros)
J`ai acheté 6 briques. Il me reste 10 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 100;
$prix = 15;
$briques = 0;
$max_briques = 10;

while ($briques < $max_briques && $budget >= $prix) {
    $briques++;
    $budget -= $prix;
    echo "Brique $briques achetée (reste $budget euros)<br>";
}

echo "J`ai acheté $briques briques. Il me reste $budget euros.<br>";
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant la boucle `while` en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une boucle `while` avec une condition
- ✅ Faire une boucle qui compte en montant
- ✅ Faire une boucle qui compte à l`envers
- ✅ Éviter les boucles infinies (en modifiant la variable)
- ✅ Utiliser des conditions complexes
- ✅ Gérer un budget ou une limite dans une boucle
- ✅ Comprendre la différence entre `for` et `while`

**Prochaine étape :** Les tableaux et la boucle `foreach` ! 🚀