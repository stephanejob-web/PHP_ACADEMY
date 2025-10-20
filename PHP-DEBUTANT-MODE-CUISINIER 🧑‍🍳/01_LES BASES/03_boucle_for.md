# 🤯 La boucle for – Ce sortilège qui fait tourner les têtes (et le service) 😅

---
💬 "Pourquoi les débutants ont peur de la boucle for ?"
Parce qu`elle tourne en rond, et eux aussi ! 😂

## 🍳 Pourquoi une boucle ?

Imagine que tu dois **servir 10 assiettes** une par une 🍽️

Tu pourrais écrire :
```php
echo "Je sers l`assiette numéro 1<br>";
echo "Je sers l`assiette numéro 2<br>";
echo "Je sers l`assiette numéro 3<br>";
echo "Je sers l`assiette numéro 4<br>";
echo "Je sers l`assiette numéro 5<br>";
echo "Je sers l`assiette numéro 6<br>";
echo "Je sers l`assiette numéro 7<br>";
echo "Je sers l`assiette numéro 8<br>";
echo "Je sers l`assiette numéro 9<br>";
echo "Je sers l`assiette numéro 10<br>";
```

Mais là, soyons honnêtes…
👉 Au bout de 10 lignes, t`en as marre.
👉 Au bout de 100, t`as envie de jeter ton ordinateur dans la marmite 💻🍲

Heureusement, PHP a une solution magique pour **répéter une action sans se fatiguer** :
c`est la **boucle** !

---

## 💡 C`est quoi une boucle ?

Une **boucle**, c`est comme un **commis bien dressé** 😄
Tu lui dis :
> "Sers une assiette, avance d`un pas, et recommence… jusqu`à ce que tout le monde soit servi !"

Et lui, il obéit sans broncher 👨‍🍳

💬 En PHP, on écrit ça avec la fameuse formule magique :

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je sers l`assiette numéro $i<br>";
}
```

**Résultat :**
```
Je sers l`assiette numéro 1
Je sers l`assiette numéro 2
Je sers l`assiette numéro 3
Je sers l`assiette numéro 4
Je sers l`assiette numéro 5
Je sers l`assiette numéro 6
Je sers l`assiette numéro 7
Je sers l`assiette numéro 8
Je sers l`assiette numéro 9
Je sers l`assiette numéro 10
```

---

## 🧩 Le sortilège du `for` 🪄 — Décortiqué comme jamais !

Regarde bien cette ligne :
```php
for ($i = 1; $i <= 10; $i++)
```

C`est comme une **phrase magique en trois étapes** ✨

### 📦 La structure complète

```php
for (ÉTAPE 1 ; ÉTAPE 2 ; ÉTAPE 3) {
    // Ce qu`on fait à chaque tour
}
```

Ou en vrai PHP :

```php
for ($i = 1 ; $i <= 10 ; $i++) {
    echo "Je sers l`assiette numéro $i<br>";
}
```

---

### 🔍 Zoom sur chaque partie

| Partie | Nom technique | Explication simple |
|--------|---------------|-------------------|
| **`$i = 1`** | **Initialisation** | Je **commence** à l`assiette numéro **1** 🍽️ |
| **`$i <= 10`** | **Condition** | Je **continue** tant que je n`ai **pas dépassé 10 assiettes** 🔟 |
| **`$i++`** | **Incrémentation** | J`**avance d`une assiette** à chaque fois 👣 |

---

## 🎬 Comment ça marche vraiment ? (étape par étape)

Imaginons cette boucle :
```php
for ($i = 1; $i <= 3; $i++) {
    echo "Assiette $i<br>";
}
```

### 🎯 Tour par tour

#### 🔵 **AVANT de commencer**
PHP lit : `$i = 1`
→ Il crée une variable `$i` et met dedans le nombre **1**

---

#### 🟢 **TOUR 1**

1. **PHP vérifie la condition** : `$i <= 3` ?
   → `$i` vaut **1**, et 1 ≤ 3 → **OUI** ✅
   → Donc on **entre dans la boucle**

2. **PHP exécute le code** :
   ```php
   echo "Assiette $i<br>";
   ```
   → Affiche : `Assiette 1`

3. **PHP fait l`incrémentation** : `$i++`
   → `$i` passe de **1** à **2**

---

#### 🟢 **TOUR 2**

1. **PHP vérifie la condition** : `$i <= 3` ?
   → `$i` vaut **2**, et 2 ≤ 3 → **OUI** ✅
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :
   ```php
   echo "Assiette $i<br>";
   ```
   → Affiche : `Assiette 2`

3. **PHP fait l`incrémentation** : `$i++`
   → `$i` passe de **2** à **3**

---

#### 🟢 **TOUR 3**

1. **PHP vérifie la condition** : `$i <= 3` ?
   → `$i` vaut **3**, et 3 ≤ 3 → **OUI** ✅
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :
   ```php
   echo "Assiette $i<br>";
   ```
   → Affiche : `Assiette 3`

3. **PHP fait l`incrémentation** : `$i++`
   → `$i` passe de **3** à **4**

---

#### 🔴 **TOUR 4 (qui n`existe pas)**

1. **PHP vérifie la condition** : `$i <= 3` ?
   → `$i` vaut **4**, et 4 ≤ 3 → **NON** ❌
   → Donc on **SORT de la boucle**

2. **C`est fini !** 🎉

---

### 📊 Résumé visuel

| Tour | Valeur de $i | Condition $i <= 3 ? | Affichage | Après $i++ |
|------|--------------|---------------------|-----------|------------|
| 1 | 1 | ✅ OUI | Assiette 1 | $i devient 2 |
| 2 | 2 | ✅ OUI | Assiette 2 | $i devient 3 |
| 3 | 3 | ✅ OUI | Assiette 3 | $i devient 4 |
| 4 | 4 | ❌ NON | rien (sortie) | - |

---

## 🔎 Zoom sur `$i` — le compteur de service 🧰

> 💬 `$i` n`est **pas un mot magique** de PHP.
> C`est simplement **une variable** qu`on utilise pour **compter** les tours de boucle.

Les programmeurs utilisent souvent `$i` car ça vient du mot anglais *"iteration"* (tour de boucle).
Mais tu peux l`appeler comme tu veux ! 😄

Par exemple :

```php
for ($assiette = 1; $assiette <= 10; $assiette++) {
    echo "Je sers l`assiette numéro $assiette<br>";
}
```

ou même :

```php
for ($service = 1; $service <= 10; $service++) {
    echo "Je sers l`assiette numéro $service<br>";
}
```

👉 PHP s`en fiche du nom, tant que c`est **le même dans les trois parties** du `for`.

🧠 Retiens ceci :
> `$i`, `$assiette`, ou `$service`, c`est juste une **étiquette** qui sert à se souvenir où on en est dans la boucle.

---

## 🔹 Les 3 parties expliquées en détail

### 🔹 1️⃣ `$i = 1` — Le départ (Initialisation)

Tu dis à ton commis :
> "Commence à la **première assiette**."

👉 `$i = 1` veut dire que ton compteur **commence à 1**.

**Exemples :**
- `$i = 1` → Je commence à 1
- `$i = 0` → Je commence à 0
- `$i = 5` → Je commence à 5
- `$i = 100` → Je commence à 100

```php
// Commencer à 5
for ($i = 5; $i <= 8; $i++) {
    echo "Plat $i<br>";
}
```

**Résultat :**
```
Plat 5
Plat 6
Plat 7
Plat 8
```

---

### 🔹 2️⃣ `$i <= 10` — La condition (Quand s`arrêter)

Tu lui dis :
> "Continue **tant que** tu n`as **pas fini les 10 assiettes**."

Quand `$i` devient 11 :
> "Chef ! J`ai fini le service !" 😅

Alors la boucle s`arrête **toute seule**.

**Les conditions possibles :**

| Condition | Signification |
|-----------|---------------|
| `$i <= 10` | Continue tant que `$i` est inférieur ou égal à 10 |
| `$i < 10` | Continue tant que `$i` est strictement inférieur à 10 |
| `$i >= 1` | Continue tant que `$i` est supérieur ou égal à 1 |
| `$i > 0` | Continue tant que `$i` est strictement supérieur à 0 |

**Exemple avec `<` au lieu de `<=` :**
```php
for ($i = 1; $i < 3; $i++) {
    echo "Assiette $i<br>";
}
```

**Résultat :**
```
Assiette 1
Assiette 2
```

💡 **Pourquoi pas 3 ?** Parce que `<` veut dire "strictement inférieur". Quand `$i` vaut 3, la condition `$i < 3` devient fausse.

---

### 🔹 3️⃣ `$i++` — Le pas en avant (Incrémentation)

C`est ton petit **pas de chef** 👣

Chaque fois que tu sers une assiette, tu avances d`une place.

🧠 Astuce :
Le `++` veut dire **"ajoute 1"** à ta variable.
Ton compteur `$i` passe donc de 1 à 2, puis 3, puis 4… automatiquement.

Et si tu te demandes :
> "Mais c`est quoi ce bordel de deux + à la suite ?! 🤨"

Pas de panique, c`est juste la façon de PHP de dire :
> "Eh ! Ajoute 1 et continue ton service, chef !" 😆

**Autres façons de faire avancer le compteur :**

| Écriture | Signification |
|----------|---------------|
| `$i++` | Ajoute 1 à chaque tour |
| `$i--` | Enlève 1 à chaque tour (compte à l`envers) |
| `$i += 2` | Ajoute 2 à chaque tour |
| `$i += 5` | Ajoute 5 à chaque tour |
| `$i -= 1` | Enlève 1 à chaque tour (pareil que `$i--`) |

---

## 🔙 SUPER IMPORTANT : Compter à l`envers (10, 9, 8, 7...)

### 🚨 C`EST ICI QU`IL FAUT VRAIMENT ÊTRE ATTENTIF ! 🚨

Pour compter **à l`envers**, il faut **changer LES TROIS PARTIES** de la boucle :

```php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
```

### 🔍 Décomposons ça pas à pas :

#### 1️⃣ **On commence à 10** (et non à 1)
```php
$i = 10
```
💬 "Je commence avec la dixième portion, en haut de la pile"

#### 2️⃣ **On continue tant qu`on n`est pas en dessous de 1**
```php
$i >= 1
```
💬 "Je continue de descendre tant que je suis à la portion 1 ou plus"
⚠️ **ATTENTION** : On utilise `>=` (supérieur ou égal) et non `<=`

#### 3️⃣ **On descend d`une portion à chaque tour**
```php
$i--
```
💬 "À chaque tour, je descends d`une portion" (j`enlève 1)

---

### 🎯 Exemple complet avec décompte

```php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
echo "Service terminé ! 🍽️";
```

**Résultat :**
```
10
9
8
7
6
5
4
3
2
1
Service terminé ! 🍽️
```

---

### 📊 Tableau de ce qui se passe

| Tour | Valeur de $i | Condition $i >= 1 ? | Affichage | Après $i-- |
|------|--------------|---------------------|-----------|------------|
| 1 | 10 | ✅ OUI (10 >= 1) | 10 | $i devient 9 |
| 2 | 9 | ✅ OUI (9 >= 1) | 9 | $i devient 8 |
| 3 | 8 | ✅ OUI (8 >= 1) | 8 | $i devient 7 |
| ... | ... | ... | ... | ... |
| 10 | 1 | ✅ OUI (1 >= 1) | 1 | $i devient 0 |
| 11 | 0 | ❌ NON (0 >= 1 est faux) | rien | sortie |

---

### 🚨 Les erreurs classiques à éviter

#### ❌ **ERREUR 1 : Oublier de changer la condition**
```php
// MAUVAIS !
for ($i = 10; $i <= 1; $i--) {
    echo "$i<br>";
}
```
💬 **Pourquoi c`est mauvais ?**
La condition `$i <= 1` est DÉJÀ fausse dès le départ (10 n`est pas <= 1).
La boucle ne s`exécutera **jamais** !

---

#### ❌ **ERREUR 2 : Oublier de mettre `--` à la place de `++`**
```php
// MAUVAIS !
for ($i = 10; $i >= 1; $i++) {
    echo "$i<br>";
}
```
💬 **Pourquoi c`est mauvais ?**
Ici, `$i` va AUGMENTER au lieu de diminuer !
10 devient 11, puis 12, puis 13...
La condition `$i >= 1` sera TOUJOURS vraie → **BOUCLE INFINIE** 💥

---

#### ❌ **ERREUR 3 : Commencer à 1 au lieu de 10**
```php
// MAUVAIS !
for ($i = 1; $i >= 1; $i--) {
    echo "$i<br>";
}
```
💬 **Pourquoi c`est limité ?**
Ça va afficher juste `1` puis `0` et s`arrêter.
Ce n`est pas un vrai décompte de 10 à 1.

---

### ✅ LA BONNE FORMULE pour compter à l`envers

```php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
```

🧠 **Retiens cette phrase :**
> Pour compter à l`envers :
> - Je **commence GRAND** (ex: 10)
> - Je **continue tant que je suis AU DESSUS de la limite** (>= 1)
> - Je **descends** à chaque tour (--)

---

## 🧮 Exemples concrets avec le décompte

### Exemple 1 : Compte à rebours du minuteur
```php
echo "Cuisson terminée dans :<br>";
for ($i = 10; $i >= 1; $i--) {
    echo "$i secondes...<br>";
}
echo "⏰ C`EST PRÊT !";
```

---

### Exemple 2 : Descente des portions
```php
echo "Je sers les dernières portions :<br>";
for ($portion = 5; $portion >= 0; $portion--) {
    echo "Portion $portion<br>";
}
echo "Toutes les portions sont servies !";
```

**Résultat :**
```
Je sers les dernières portions :
Portion 5
Portion 4
Portion 3
Portion 2
Portion 1
Portion 0
Toutes les portions sont servies !
```

---

### Exemple 3 : Œufs qui diminuent
```php
$oeufs = 8;
for ($i = $oeufs; $i >= 1; $i--) {
    echo "Il reste $i œufs<br>";
}
echo "Plus d`œufs !";
```

**Résultat :**
```
Il reste 8 œufs
Il reste 7 œufs
Il reste 6 œufs
Il reste 5 œufs
Il reste 4 œufs
Il reste 3 œufs
Il reste 2 œufs
Il reste 1 œufs
Plus d`œufs !
```

---

## 🍳 Autres exemples utiles

### Exemple 1 : Compter de 2 en 2
```php
for ($i = 0; $i <= 10; $i += 2) {
    echo "$i<br>";
}
```

**Résultat :**
```
0
2
4
6
8
10
```

---

### Exemple 2 : Table de multiplication
```php
for ($i = 1; $i <= 10; $i++) {
    $resultat = 5 * $i;
    echo "5 x $i = $resultat<br>";
}
```

**Résultat :**
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

---

## 🧩 En résumé

### 📋 Structure de base (compter en montant)
```php
for ($i = 1; $i <= 10; $i++) {
    // Code à répéter
}
```

### 📋 Structure pour compter à l`envers
```php
for ($i = 10; $i >= 1; $i--) {
    // Code à répéter
}
```

| Élément | Rôle en cuisine |
|----------|----------------------|
| `$i = 1` | Tu **commences** à la première assiette 🍽️ |
| `$i <= 10` | Tu **sers** jusqu`à la 10e assiette 🔟 |
| `$i++` | Tu **avances d`un pas** 👣 |
| `$i = 10` | Tu **commences** à l`assiette 10 (en haut) 🍽️ |
| `$i >= 1` | Tu **continues** jusqu`à l`assiette 1 🔟 |
| `$i--` | Tu **recules d`un pas** (tu descends) 👣 |
| `for` | Tu **répètes le travail** sans râler 😅 |
| `$i` | C`est ton **compteur de service** 🧰 |

---

## 💬 Phrases à retenir

> La boucle `for`, c`est comme ton **commis préféré** :
> tu lui dis **quand commencer**, **quand s`arrêter**, et il bosse tout seul ! 🍽️🤖

> Pour compter à l`envers, il faut **TOUT inverser** :
> Commence GRAND, vérifie qu`on est AU DESSUS, et DESCENDS ! 🔽

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Afficher de 1 à 10
**Énoncé :**
Crée une boucle `for` qui affiche les nombres de **1 à 10**.

**Ce qu`on attend :**
- Une boucle for qui commence à 1
- Qui s`arrête à 10
- Qui affiche chaque nombre

**Exemple de résultat attendu :**
```
1
2
3
4
5
6
7
8
9
10
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 10; $i++) {
    echo "$i<br>";
}
?>
```
</details>

---

## 📝 Exercice 2 : Servir 5 assiettes
**Énoncé :**
Crée une boucle qui affiche :
> "Je sers l`assiette numéro X"

pour X allant de **1 à 5**.

**Ce qu`on attend :**
- Une boucle for de 1 à 5
- Un message pour chaque assiette

**Exemple de résultat attendu :**
```
Je sers l`assiette numéro 1
Je sers l`assiette numéro 2
Je sers l`assiette numéro 3
Je sers l`assiette numéro 4
Je sers l`assiette numéro 5
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Je sers l`assiette numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 3 : Casser les œufs
**Énoncé :**
Crée une boucle qui affiche :
> "Je casse l`œuf numéro X"

pour X allant de **1 à 3**.

**Ce qu`on attend :**
- Une boucle for de 1 à 3
- Un message pour chaque œuf

**Exemple de résultat attendu :**
```
Je casse l`œuf numéro 1
Je casse l`œuf numéro 2
Je casse l`œuf numéro 3
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 3; $i++) {
    echo "Je casse l`œuf numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 4 : Goûter les sauces
**Énoncé :**
Crée une boucle qui affiche :
> "Je goûte la sauce numéro X"

pour X allant de **1 à 4**.

**Ce qu`on attend :**
- Une boucle for de 1 à 4
- Un message de dégustation pour chaque sauce

**Exemple de résultat attendu :**
```
Je goûte la sauce numéro 1
Je goûte la sauce numéro 2
Je goûte la sauce numéro 3
Je goûte la sauce numéro 4
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 4; $i++) {
    echo "Je goûte la sauce numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Dresser les desserts
**Énoncé :**
Crée une boucle qui affiche :
> "Je dresse le dessert numéro X dans l`assiette."

pour X allant de **1 à 6**.

**Ce qu`on attend :**
- Une boucle for de 1 à 6
- Un message pour chaque dessert dressé

**Exemple de résultat attendu :**
```
Je dresse le dessert numéro 1 dans l`assiette.
Je dresse le dessert numéro 2 dans l`assiette.
Je dresse le dessert numéro 3 dans l`assiette.
Je dresse le dessert numéro 4 dans l`assiette.
Je dresse le dessert numéro 5 dans l`assiette.
Je dresse le dessert numéro 6 dans l`assiette.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 6; $i++) {
    echo "Je dresse le dessert numéro $i dans l`assiette.<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Compter à l`envers de 10 à 1
**Énoncé :**
Crée une boucle qui affiche les nombres de **10 à 1** en comptant à l`envers (comme un décompte de minuteur).

**Ce qu`on attend :**
- Une boucle for qui commence à 10
- Qui descend jusqu`à 1
- Qui utilise `$i--`

**Exemple de résultat attendu :**
```
10
9
8
7
6
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
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
?>
```
</details>

---

## 📝 Exercice 7 : Fin de cuisson
**Énoncé :**
Crée un décompte de minuteur qui affiche :
- Les nombres de 10 à 1
- Puis affiche "⏰ C`EST PRÊT !"

**Ce qu`on attend :**
- Une boucle à l`envers de 10 à 1
- Un message final après la boucle

**Exemple de résultat attendu :**
```
10
9
8
7
6
5
4
3
2
1
⏰ C`EST PRÊT !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
echo "⏰ C`EST PRÊT !<br>";
?>
```
</details>

---

## 📝 Exercice 8 : Les portions doubles
**Énoncé :**
Crée une boucle qui affiche tous les nombres **pairs** entre **2 et 10**.

**Ce qu`on attend :**
- Une boucle qui avance de 2 en 2
- Affichage de : 2, 4, 6, 8, 10

**Exemple de résultat attendu :**
```
2
4
6
8
10
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 2; $i <= 10; $i += 2) {
    echo "$i<br>";
}
?>
```
</details>

---

## 📝 Exercice 9 : Table de multiplication par 5
**Énoncé :**
Crée une boucle qui affiche la table de multiplication de **5**, de 1 à 10.
Format : "5 x 1 = 5", "5 x 2 = 10", etc.

**Ce qu`on attend :**
- Une boucle de 1 à 10
- Un calcul : 5 × i
- Un affichage formaté

**Exemple de résultat attendu :**
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 10; $i++) {
    $resultat = 5 * $i;
    echo "5 x $i = $resultat<br>";
}
?>
```
</details>

---

## 📝 Exercice 10 : Les plats du service
**Énoncé :**
Crée une boucle qui affiche :
> "Je prépare le plat numéro X"

pour X allant de **1 à 3**.
Puis, après la boucle, affiche :
> "Tous les plats sont servis !"

**Ce qu`on attend :**
- Une boucle de 1 à 3
- Un message pour chaque plat
- Un message final après la boucle

**Exemple de résultat attendu :**
```
Je prépare le plat numéro 1
Je prépare le plat numéro 2
Je prépare le plat numéro 3
Tous les plats sont servis !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 3; $i++) {
    echo "Je prépare le plat numéro $i<br>";
}
echo "Tous les plats sont servis !<br>";
?>
```
</details>

---

## 📝 Exercice 11 : Afficher ton nom de chef 5 fois
**Énoncé :**
Crée une boucle qui affiche ton nom de chef **5 fois**.

**Ce qu`on attend :**
- Une boucle de 1 à 5
- Ton nom affiché à chaque tour

**Exemple de résultat attendu :**
```
Chef Laurent
Chef Laurent
Chef Laurent
Chef Laurent
Chef Laurent
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Chef Laurent<br>";
}
?>
```
</details>

---

## 📝 Exercice 12 : Descendre les portions
**Énoncé :**
Tu as **5 portions** sur l`étagère et tu les descends jusqu`à 0.
Affiche :
> "Portion X"

pour X allant de **5 à 0** (en comptant à l`envers).
Puis affiche : "Toutes les portions sont servies !"

**Ce qu`on attend :**
- Une boucle à l`envers de 5 à 0
- Un message pour chaque portion
- Un message final

**Exemple de résultat attendu :**
```
Portion 5
Portion 4
Portion 3
Portion 2
Portion 1
Portion 0
Toutes les portions sont servies !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($portion = 5; $portion >= 0; $portion--) {
    echo "Portion $portion<br>";
}
echo "Toutes les portions sont servies !<br>";
?>
```
</details>

---

## 📝 Exercice 13 : Compter les œufs qui diminuent
**Énoncé :**
Tu as **8 œufs** au début.
Crée une boucle qui affiche :
> "Il reste X œufs"

pour X allant de **8 à 1** (en comptant à l`envers).
Puis affiche : "Plus d`œufs !"

**Ce qu`on attend :**
- Une boucle à l`envers de 8 à 1
- Un message pour chaque nombre d`œufs
- Un message final

**Exemple de résultat attendu :**
```
Il reste 8 œufs
Il reste 7 œufs
Il reste 6 œufs
Il reste 5 œufs
Il reste 4 œufs
Il reste 3 œufs
Il reste 2 œufs
Il reste 1 œufs
Plus d`œufs !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($oeufs = 8; $oeufs >= 1; $oeufs--) {
    echo "Il reste $oeufs œufs<br>";
}
echo "Plus d`œufs !<br>";
?>
```
</details>

---

## 📝 Exercice 14 : Les multiples de 3
**Énoncé :**
Crée une boucle qui affiche tous les **multiples de 3** entre **3 et 30**.
(3, 6, 9, 12, 15, 18, 21, 24, 27, 30)

**Ce qu`on attend :**
- Une boucle qui avance de 3 en 3
- Commence à 3, termine à 30

**Exemple de résultat attendu :**
```
3
6
9
12
15
18
21
24
27
30
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 3; $i <= 30; $i += 3) {
    echo "$i<br>";
}
?>
```
</details>

---

## 📝 Exercice 15 : Compter de 5 en 5
**Énoncé :**
Crée une boucle qui affiche les nombres de **0 à 50** en comptant de **5 en 5**.
(0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50)

**Ce qu`on attend :**
- Une boucle qui commence à 0
- Qui avance de 5 en 5
- Qui s`arrête à 50

**Exemple de résultat attendu :**
```
0
5
10
15
20
25
30
35
40
45
50
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 0; $i <= 50; $i += 5) {
    echo "$i<br>";
}
?>
```
</details>

---

## 📝 Exercice 16 : Table de multiplication par 7
**Énoncé :**
Crée une boucle qui affiche la table de multiplication de **7**, de 1 à 10.
Format : "7 x 1 = 7", "7 x 2 = 14", etc.

**Ce qu`on attend :**
- Une boucle de 1 à 10
- Un calcul : 7 × i
- Un affichage formaté

**Exemple de résultat attendu :**
```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 10; $i++) {
    $resultat = 7 * $i;
    echo "7 x $i = $resultat<br>";
}
?>
```
</details>

---

## 📝 Exercice 17 : Assiettes servies avec total
**Énoncé :**
Crée une variable `$total_assiettes = 0`.
Fais une boucle de **1 à 5** qui :
1. Affiche "Je sers l`assiette numéro X"
2. Ajoute 1 à `$total_assiettes` à chaque tour (utilise `$total_assiettes++`)
3. Après la boucle, affiche "J`ai servi X assiettes au total."

**Ce qu`on attend :**
- Une variable qui compte le total
- Une boucle qui l`incrémente
- Un message final avec le total

**Exemple de résultat attendu :**
```
Je sers l`assiette numéro 1
Je sers l`assiette numéro 2
Je sers l`assiette numéro 3
Je sers l`assiette numéro 4
Je sers l`assiette numéro 5
J`ai servi 5 assiettes au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$total_assiettes = 0;
for ($i = 1; $i <= 5; $i++) {
    echo "Je sers l`assiette numéro $i<br>";
    $total_assiettes++;
}
echo "J`ai servi $total_assiettes assiettes au total.<br>";
?>
```
</details>

---

## 📝 Exercice 18 : Somme des nombres
**Énoncé :**
Crée une variable `$somme = 0`.
Fais une boucle de **1 à 10** qui ajoute chaque nombre à `$somme`.
Après la boucle, affiche : "La somme de 1 à 10 est : X"

**Ce qu`on attend :**
- Une variable pour stocker la somme
- Une boucle qui additionne tous les nombres
- Le résultat final (devrait être 55)

**Exemple de résultat attendu :**
```
La somme de 1 à 10 est : 55
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$somme = 0;
for ($i = 1; $i <= 10; $i++) {
    $somme += $i;
}
echo "La somme de 1 à 10 est : $somme<br>";
?>
```
</details>

---

## 📝 Exercice 19 : Prix total des portions
**Énoncé :**
Tu prépares **10 portions**. Chaque portion coûte **3 euros**.
Crée une boucle de 1 à 10 qui :
1. Calcule le prix de chaque portion
2. Affiche "Portion X : 3 euros"
3. Après la boucle, affiche le prix total

**Ce qu`on attend :**
- Une variable pour le prix total
- Une boucle qui calcule et additionne
- L`affichage du total (devrait être 30 euros)

**Exemple de résultat attendu :**
```
Portion 1 : 3 euros
Portion 2 : 3 euros
Portion 3 : 3 euros
Portion 4 : 3 euros
Portion 5 : 3 euros
Portion 6 : 3 euros
Portion 7 : 3 euros
Portion 8 : 3 euros
Portion 9 : 3 euros
Portion 10 : 3 euros
Prix total : 30 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_portion = 3;
$prix_total = 0;

for ($i = 1; $i <= 10; $i++) {
    echo "Portion $i : $prix_portion euros<br>";
    $prix_total += $prix_portion;
}
echo "Prix total : $prix_total euros<br>";
?>
```
</details>

---

## 📝 Exercice 20 : Défi final - Carré de nombres
**Énoncé :**
Crée une boucle de **1 à 5** qui affiche :
- Le nombre
- Son carré (nombre × nombre)

Format : "1 au carré = 1", "2 au carré = 4", etc.

**Ce qu`on attend :**
- Une boucle de 1 à 5
- Un calcul du carré pour chaque nombre
- Un affichage formaté

**Exemple de résultat attendu :**
```
1 au carré = 1
2 au carré = 4
3 au carré = 9
4 au carré = 16
5 au carré = 25
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    $carre = $i * $i;
    echo "$i au carré = $carre<br>";
}
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant la boucle `for` en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une boucle `for` qui compte en montant
- ✅ Créer une boucle `for` qui compte à l`envers
- ✅ Modifier le pas d`incrémentation (de 2 en 2, de 5 en 5, etc.)
- ✅ Utiliser la boucle pour faire des calculs
- ✅ Combiner la boucle avec des variables
- ✅ Comprendre les trois parties du `for` : initialisation, condition, incrémentation

**Prochaine étape :** Les boucles `while` et `foreach` pour encore plus de puissance ! 🚀
