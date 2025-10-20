# 🤯 La boucle for – Ce sortilège qui fait tourner les têtes (et le code) 😅

---
💬 "Pourquoi les débutants ont peur de la boucle for ?"
Parce qu`elle tourne en rond, et eux aussi ! 😂

## 🚧 Pourquoi une boucle ?

Imagine que tu dois **poser 10 briques** une par une 🧱

Tu pourrais écrire :
```php
echo "Je pose la brique numéro 1<br>";
echo "Je pose la brique numéro 2<br>";
echo "Je pose la brique numéro 3<br>";
echo "Je pose la brique numéro 4<br>";
echo "Je pose la brique numéro 5<br>";
echo "Je pose la brique numéro 6<br>";
echo "Je pose la brique numéro 7<br>";
echo "Je pose la brique numéro 8<br>";
echo "Je pose la brique numéro 9<br>";
echo "Je pose la brique numéro 10<br>";
```

Mais là, soyons honnêtes…  
👉 Au bout de 10 lignes, t`en as marre.  
👉 Au bout de 100, t`as envie de jeter ton ordinateur dans la bétonnière 💻🪣

Heureusement, PHP a une solution magique pour **répéter une action sans se fatiguer** :  
c`est la **boucle** !

---

## 💡 C`est quoi une boucle ?

Une **boucle**, c`est comme un **apprenti bien dressé** 😄  
Tu lui dis :  
> "Pose une brique, avance d`un pas, et recommence… jusqu`à la fin du mur !"  

Et lui, il obéit sans broncher 👷‍♂️  

💬 En PHP, on écrit ça avec la fameuse formule magique :  

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je pose la brique numéro $i<br>";
}
```

**Résultat :**
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
Je pose la brique numéro 6
Je pose la brique numéro 7
Je pose la brique numéro 8
Je pose la brique numéro 9
Je pose la brique numéro 10
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
    echo "Je pose la brique numéro $i<br>";
}
```

---

### 🔍 Zoom sur chaque partie

| Partie | Nom technique | Explication simple |
|--------|---------------|-------------------|
| **`$i = 1`** | **Initialisation** | Je **commence** à la brique numéro **1** 🧱 |
| **`$i <= 10`** | **Condition** | Je **continue** tant que je n`ai **pas dépassé 10 briques** 🔟 |
| **`$i++`** | **Incrémentation** | J`**avance d`une brique** à chaque fois 👣 |

---

## 🎬 Comment ça marche vraiment ? (étape par étape)

Imaginons cette boucle :
```php
for ($i = 1; $i <= 3; $i++) {
    echo "Brique $i<br>";
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
   echo "Brique $i<br>";
   ```
   → Affiche : `Brique 1`

3. **PHP fait l`incrémentation** : `$i++`  
   → `$i` passe de **1** à **2**

---

#### 🟢 **TOUR 2**

1. **PHP vérifie la condition** : `$i <= 3` ?  
   → `$i` vaut **2**, et 2 ≤ 3 → **OUI** ✅  
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :  
   ```php
   echo "Brique $i<br>";
   ```
   → Affiche : `Brique 2`

3. **PHP fait l`incrémentation** : `$i++`  
   → `$i` passe de **2** à **3**

---

#### 🟢 **TOUR 3**

1. **PHP vérifie la condition** : `$i <= 3` ?  
   → `$i` vaut **3**, et 3 ≤ 3 → **OUI** ✅  
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :  
   ```php
   echo "Brique $i<br>";
   ```
   → Affiche : `Brique 3`

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
| 1 | 1 | ✅ OUI | Brique 1 | $i devient 2 |
| 2 | 2 | ✅ OUI | Brique 2 | $i devient 3 |
| 3 | 3 | ✅ OUI | Brique 3 | $i devient 4 |
| 4 | 4 | ❌ NON | rien (sortie) | - |

---

## 🔎 Zoom sur `$i` — le compteur du chantier 🧰

> 💬 `$i` n`est **pas un mot magique** de PHP.  
> C`est simplement **une variable** qu`on utilise pour **compter** les tours de boucle.

Les programmeurs utilisent souvent `$i` car ça vient du mot anglais *"iteration"* (tour de boucle).  
Mais tu peux l`appeler comme tu veux ! 😄

Par exemple :

```php
for ($brique = 1; $brique <= 10; $brique++) {
    echo "Je pose la brique numéro $brique<br>";
}
```

ou même :

```php
for ($tour = 1; $tour <= 10; $tour++) {
    echo "Je pose la brique numéro $tour<br>";
}
```

👉 PHP s`en fiche du nom, tant que c`est **le même dans les trois parties** du `for`.

🧠 Retiens ceci :  
> `$i`, `$brique`, ou `$tour`, c`est juste une **étiquette** qui sert à se souvenir où on en est dans la boucle.

---

## 🔹 Les 3 parties expliquées en détail

### 🔹 1️⃣ `$i = 1` — Le départ (Initialisation)

Tu dis à ton apprenti :
> "Commence à la **première brique**."

👉 `$i = 1` veut dire que ton compteur **commence à 1**.

**Exemples :**
- `$i = 1` → Je commence à 1
- `$i = 0` → Je commence à 0
- `$i = 5` → Je commence à 5
- `$i = 100` → Je commence à 100

```php
// Commencer à 5
for ($i = 5; $i <= 8; $i++) {
    echo "Étage $i<br>";
}
```

**Résultat :**
```
Étage 5
Étage 6
Étage 7
Étage 8
```

---

### 🔹 2️⃣ `$i <= 10` — La condition (Quand s`arrêter)

Tu lui dis :
> "Continue **tant que** tu n`as **pas fini les 10 briques**."

Quand `$i` devient 11 :
> "Chef ! J`ai fini le mur !" 😅

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
    echo "Brique $i<br>";
}
```

**Résultat :**
```
Brique 1
Brique 2
```

💡 **Pourquoi pas 3 ?** Parce que `<` veut dire "strictement inférieur". Quand `$i` vaut 3, la condition `$i < 3` devient fausse.

---

### 🔹 3️⃣ `$i++` — Le pas en avant (Incrémentation)

C`est ton petit **pas de maçon** 👣  

Chaque fois que tu poses une brique, tu avances d`une place.  

🧠 Astuce :  
Le `++` veut dire **"ajoute 1"** à ta variable.  
Ton compteur `$i` passe donc de 1 à 2, puis 3, puis 4… automatiquement.  

Et si tu te demandes :  
> "Mais c`est quoi ce bordel de deux + à la suite ?! 🤨"  

Pas de panique, c`est juste la façon de PHP de dire :  
> "Eh ! Ajoute 1 et continue ton boulot, chef !" 😆  

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
💬 "Je commence en haut de l`échelle, au barreau 10"

#### 2️⃣ **On continue tant qu`on n`est pas en dessous de 1**
```php
$i >= 1
```
💬 "Je continue de descendre tant que je suis au barreau 1 ou plus"  
⚠️ **ATTENTION** : On utilise `>=` (supérieur ou égal) et non `<=`

#### 3️⃣ **On descend d`un barreau à chaque tour**
```php
$i--
```
💬 "À chaque tour, je descends d`un barreau" (j`enlève 1)

---

### 🎯 Exemple complet avec décompte

```php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
echo "Décollage ! 🚀";
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
Décollage ! 🚀
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

### Exemple 1 : Compte à rebours de fusée
```php
echo "Lancement de la fusée dans :<br>";
for ($i = 10; $i >= 1; $i--) {
    echo "$i...<br>";
}
echo "🚀 DÉCOLLAGE !";
```

---

### Exemple 2 : Descente d`étages
```php
echo "Je descends les étages :<br>";
for ($etage = 5; $etage >= 0; $etage--) {
    echo "Étage $etage<br>";
}
echo "Rez-de-chaussée atteint !";
```

**Résultat :**
```
Je descends les étages :
Étage 5
Étage 4
Étage 3
Étage 2
Étage 1
Étage 0
Rez-de-chaussée atteint !
```

---

### Exemple 3 : Sacs de ciment qui diminuent
```php
$sacs = 8;
for ($i = $sacs; $i >= 1; $i--) {
    echo "Il reste $i sacs de ciment<br>";
}
echo "Plus de sacs !";
```

**Résultat :**
```
Il reste 8 sacs de ciment
Il reste 7 sacs de ciment
Il reste 6 sacs de ciment
Il reste 5 sacs de ciment
Il reste 4 sacs de ciment
Il reste 3 sacs de ciment
Il reste 2 sacs de ciment
Il reste 1 sacs de ciment
Plus de sacs !
```

---

## 🧱 Autres exemples utiles

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

| Élément | Rôle sur le chantier |
|----------|----------------------|
| `$i = 1` | Tu **commences** à la première brique 🧱 |
| `$i <= 10` | Tu **poses** jusqu`à la 10e brique 🔟 |
| `$i++` | Tu **avances d`un pas** 👣 |
| `$i = 10` | Tu **commences** à la brique 10 (en haut) 🧱 |
| `$i >= 1` | Tu **continues** jusqu`à la brique 1 🔟 |
| `$i--` | Tu **recules d`un pas** (tu descends) 👣 |
| `for` | Tu **répètes le travail** sans râler 😅 |
| `$i` | C`est ton **compteur de chantier** 🧰 |

---

## 💬 Phrases à retenir

> La boucle `for`, c`est comme ton **apprenti préféré** :  
> tu lui dis **quand commencer**, **quand s`arrêter**, et il bosse tout seul ! 🧱🤖

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

## 📝 Exercice 2 : Poser 5 briques
**Énoncé :**  
Crée une boucle qui affiche :  
> "Je pose la brique numéro X"  

pour X allant de **1 à 5**.

**Ce qu`on attend :**  
- Une boucle for de 1 à 5
- Un message pour chaque brique

**Exemple de résultat attendu :**
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Je pose la brique numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 3 : Remplir les seaux
**Énoncé :**  
Crée une boucle qui affiche :  
> "Je remplis le seau numéro X"  

pour X allant de **1 à 3**.

**Ce qu`on attend :**  
- Une boucle for de 1 à 3
- Un message pour chaque seau

**Exemple de résultat attendu :**
```
Je remplis le seau numéro 1
Je remplis le seau numéro 2
Je remplis le seau numéro 3
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 3; $i++) {
    echo "Je remplis le seau numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 4 : Vérifier les murs
**Énoncé :**  
Crée une boucle qui affiche :  
> "Je vérifie le niveau du mur numéro X"  

pour X allant de **1 à 4**.

**Ce qu`on attend :**  
- Une boucle for de 1 à 4
- Un message de vérification pour chaque mur

**Exemple de résultat attendu :**
```
Je vérifie le niveau du mur numéro 1
Je vérifie le niveau du mur numéro 2
Je vérifie le niveau du mur numéro 3
Je vérifie le niveau du mur numéro 4
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 4; $i++) {
    echo "Je vérifie le niveau du mur numéro $i<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Ranger les outils
**Énoncé :**  
Crée une boucle qui affiche :  
> "Je range l`outil numéro X dans la caisse."  

pour X allant de **1 à 6**.

**Ce qu`on attend :**  
- Une boucle for de 1 à 6
- Un message pour chaque outil rangé

**Exemple de résultat attendu :**
```
Je range l`outil numéro 1 dans la caisse.
Je range l`outil numéro 2 dans la caisse.
Je range l`outil numéro 3 dans la caisse.
Je range l`outil numéro 4 dans la caisse.
Je range l`outil numéro 5 dans la caisse.
Je range l`outil numéro 6 dans la caisse.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 6; $i++) {
    echo "Je range l`outil numéro $i dans la caisse.<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Compter à l`envers de 10 à 1
**Énoncé :**  
Crée une boucle qui affiche les nombres de **10 à 1** en comptant à l`envers (comme un décompte de fusée).

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

## 📝 Exercice 7 : Décollage de fusée
**Énoncé :**  
Crée un décompte de fusée qui affiche :
- Les nombres de 10 à 1
- Puis affiche "🚀 DÉCOLLAGE !"

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
🚀 DÉCOLLAGE !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}
echo "🚀 DÉCOLLAGE !<br>";
?>
```
</details>

---

## 📝 Exercice 8 : Les nombres pairs
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

## 📝 Exercice 10 : Les étages d`un immeuble
**Énoncé :**  
Crée une boucle qui affiche :  
> "Je fais le mur étage X"  

pour X allant de **1 à 3**.  
Puis, après la boucle, affiche :  
> "Tous les étages sont terminés !"

**Ce qu`on attend :**  
- Une boucle de 1 à 3
- Un message pour chaque étage
- Un message final après la boucle

**Exemple de résultat attendu :**
```
Je fais le mur étage 1
Je fais le mur étage 2
Je fais le mur étage 3
Tous les étages sont terminés !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 3; $i++) {
    echo "Je fais le mur étage $i<br>";
}
echo "Tous les étages sont terminés !<br>";
?>
```
</details>

---

## 📝 Exercice 11 : Afficher ton prénom 5 fois
**Énoncé :**  
Crée une boucle qui affiche ton prénom **5 fois**.

**Ce qu`on attend :**  
- Une boucle de 1 à 5
- Ton prénom affiché à chaque tour

**Exemple de résultat attendu :**
```
Laurent
Laurent
Laurent
Laurent
Laurent
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Laurent<br>";
}
?>
```
</details>

---

## 📝 Exercice 12 : Descendre des étages
**Énoncé :**  
Tu es au 5ème étage et tu descends jusqu`au rez-de-chaussée (étage 0).  
Affiche :  
> "Étage X"  

pour X allant de **5 à 0** (en comptant à l`envers).  
Puis affiche : "Rez-de-chaussée atteint !"

**Ce qu`on attend :**  
- Une boucle à l`envers de 5 à 0
- Un message pour chaque étage
- Un message final

**Exemple de résultat attendu :**
```
Étage 5
Étage 4
Étage 3
Étage 2
Étage 1
Étage 0
Rez-de-chaussée atteint !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($etage = 5; $etage >= 0; $etage--) {
    echo "Étage $etage<br>";
}
echo "Rez-de-chaussée atteint !<br>";
?>
```
</details>

---

## 📝 Exercice 13 : Compter les sacs qui diminuent
**Énoncé :**  
Tu as **8 sacs de ciment** au début.  
Crée une boucle qui affiche :  
> "Il reste X sacs de ciment"  

pour X allant de **8 à 1** (en comptant à l`envers).  
Puis affiche : "Plus de sacs !"

**Ce qu`on attend :**  
- Une boucle à l`envers de 8 à 1
- Un message pour chaque nombre de sacs
- Un message final

**Exemple de résultat attendu :**
```
Il reste 8 sacs de ciment
Il reste 7 sacs de ciment
Il reste 6 sacs de ciment
Il reste 5 sacs de ciment
Il reste 4 sacs de ciment
Il reste 3 sacs de ciment
Il reste 2 sacs de ciment
Il reste 1 sacs de ciment
Plus de sacs !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
for ($sacs = 8; $sacs >= 1; $sacs--) {
    echo "Il reste $sacs sacs de ciment<br>";
}
echo "Plus de sacs !<br>";
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

## 📝 Exercice 17 : Briques posées avec total
**Énoncé :**  
Crée une variable `$total_briques = 0`.  
Fais une boucle de **1 à 5** qui :
1. Affiche "Je pose la brique numéro X"
2. Ajoute 1 à `$total_briques` à chaque tour (utilise `$total_briques++`)
3. Après la boucle, affiche "J`ai posé X briques au total."

**Ce qu`on attend :**  
- Une variable qui compte le total
- Une boucle qui l`incrémente
- Un message final avec le total

**Exemple de résultat attendu :**
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
J`ai posé 5 briques au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$total_briques = 0;
for ($i = 1; $i <= 5; $i++) {
    echo "Je pose la brique numéro $i<br>";
    $total_briques++;
}
echo "J`ai posé $total_briques briques au total.<br>";
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

## 📝 Exercice 19 : Prix total du chantier
**Énoncé :**  
Tu poses **10 briques**. Chaque brique coûte **3 euros**.  
Crée une boucle de 1 à 10 qui :
1. Calcule le prix de chaque brique
2. Affiche "Brique X : 3 euros"
3. Après la boucle, affiche le prix total

**Ce qu`on attend :**  
- Une variable pour le prix total
- Une boucle qui calcule et additionne
- L`affichage du total (devrait être 30 euros)

**Exemple de résultat attendu :**
```
Brique 1 : 3 euros
Brique 2 : 3 euros
Brique 3 : 3 euros
Brique 4 : 3 euros
Brique 5 : 3 euros
Brique 6 : 3 euros
Brique 7 : 3 euros
Brique 8 : 3 euros
Brique 9 : 3 euros
Brique 10 : 3 euros
Prix total : 30 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_brique = 3;
$prix_total = 0;

for ($i = 1; $i <= 10; $i++) {
    echo "Brique $i : $prix_brique euros<br>";
    $prix_total += $prix_brique;
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