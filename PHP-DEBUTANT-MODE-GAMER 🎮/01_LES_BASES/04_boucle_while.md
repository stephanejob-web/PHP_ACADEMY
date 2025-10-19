# 🔄 La boucle while – Le gamer qui grind "tant que..." 🎮

---
💬 "Quelle différence entre `for` et `while` ?"
`for` c'est quand tu sais combien de mobs tu dois tuer.
`while` c'est quand tu farm "tant que tu n'es pas level 10" ! 😅

---

## 🎯 Pourquoi une boucle while ?

Avec la boucle `for`, tu sais **exactement combien de fois** tu vas répéter une action :
```php
for ($i = 1; $i <= 10; $i++) {
    // Je vais tuer exactement 10 mobs
}
```

Mais parfois dans un jeu, tu ne sais **pas à l'avance** combien de temps tu vas jouer !

Par exemple :
- 🎮 "Farm des mobs **tant que tu n'es pas level 10**"
- 💰 "Achète des potions **tant que tu as du gold**"
- 🧪 "Utilise des potions **tant que tes HP ne sont pas à 100**"

👉 Dans ces cas, tu utilises la boucle **`while`** !

---

## 💡 C'est quoi une boucle while ?

Une boucle **`while`** veut dire **"tant que"** en anglais.

Tu dis à ton perso :
> "Continue à farmer des mobs **TANT QUE** tu n'es pas level 10 !"

Et lui, il vérifie **avant chaque mob** :
- ❓ "Je suis level 10 ?"
- ❌ "Non ? Alors je tue un mob !"
- ❓ "Je suis level 10 maintenant ?"
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
$mobs_tues = 0;

while ($mobs_tues < 5) {
    $mobs_tues++;
    echo "Je tue le mob numéro $mobs_tues<br>";
}

echo "Mission accomplie !";
```

**Résultat :**
```
Je tue le mob numéro 1
Je tue le mob numéro 2
Je tue le mob numéro 3
Je tue le mob numéro 4
Je tue le mob numéro 5
Mission accomplie !
```

---

## 🎬 Comment ça marche vraiment ? (étape par étape)

Reprenons notre exemple :
```php
$mobs_tues = 0;

while ($mobs_tues < 5) {
    $mobs_tues++;
    echo "Je tue le mob numéro $mobs_tues<br>";
}
```

### 🎯 Tour par tour

#### 🔵 **AVANT de commencer**
On crée la variable : `$mobs_tues = 0`

---

#### 🟢 **TOUR 1**

1. **PHP vérifie la condition** : `$mobs_tues < 5` ?
   → `$mobs_tues` vaut **0**, et 0 < 5 → **OUI** ✅
   → Donc on **entre dans la boucle**

2. **PHP exécute le code** :
   - `$mobs_tues++` → la variable passe de 0 à **1**
   - `echo "Je tue le mob numéro 1"`

3. **PHP retourne vérifier la condition** (il remonte en haut du while)

---

#### 🟢 **TOUR 2**

1. **PHP vérifie la condition** : `$mobs_tues < 5` ?
   → `$mobs_tues` vaut **1**, et 1 < 5 → **OUI** ✅
   → Donc on **entre dans la boucle** encore

2. **PHP exécute le code** :
   - `$mobs_tues++` → la variable passe de 1 à **2**
   - `echo "Je tue le mob numéro 2"`

3. **PHP retourne vérifier la condition**

---

#### 🟢 **TOURS 3, 4, 5...**

Le même processus continue jusqu'à ce que `$mobs_tues` atteigne **5**.

---

#### 🔴 **Après le TOUR 5**

1. **PHP vérifie la condition** : `$mobs_tues < 5` ?
   → `$mobs_tues` vaut **5**, et 5 < 5 → **NON** ❌
   → Donc on **SORT de la boucle**

2. **C'est fini !** Le code continue après le while.

---

### 📊 Tableau récapitulatif

| Tour | Valeur de $mobs_tues | Condition < 5 ? | Action | Après ++ |
|------|----------------------|-----------------|--------|----------|
| 1 | 0 | ✅ OUI | Tue mob 1 | devient 1 |
| 2 | 1 | ✅ OUI | Tue mob 2 | devient 2 |
| 3 | 2 | ✅ OUI | Tue mob 3 | devient 3 |
| 4 | 3 | ✅ OUI | Tue mob 4 | devient 4 |
| 5 | 4 | ✅ OUI | Tue mob 5 | devient 5 |
| 6 | 5 | ❌ NON | Sortie | - |

---

## 🔍 Différence entre for et while

### 🔹 Boucle FOR
Tu utilises `for` quand tu **sais à l'avance** combien de tours tu vas faire.

```php
// Je sais que je vais tuer EXACTEMENT 10 mobs
for ($i = 1; $i <= 10; $i++) {
    echo "Je tue le mob $i<br>";
}
```

💬 **En langage gamer :**
> "Tue-moi 10 mobs. Ni plus, ni moins."

---

### 🔹 Boucle WHILE
Tu utilises `while` quand tu ne sais **pas à l'avance** combien de tours tu vas faire.

```php
// Je ne sais pas combien de potions il faut, j'achète TANT QUE j'ai du gold
$potions_achetees = 0;
$gold = 150;
$prix_potion = 20;

while ($gold >= $prix_potion) {
    $gold -= $prix_potion;
    $potions_achetees++;
    echo "Potion $potions_achetees achetée (reste $gold gold)<br>";
}
```

💬 **En langage gamer :**
> "Achète des potions **tant que** tu as du gold."

---

## 📋 Comparaison visuelle

| Critère | `for` | `while` |
|---------|-------|---------|
| **Quand l'utiliser** | Nombre de tours connu | Nombre de tours inconnu |
| **Exemple** | "Tue 10 mobs" | "Farm tant que tu n'es pas level 10" |
| **Structure** | `for ($i=1; $i<=10; $i++)` | `while ($condition)` |
| **Compteur** | Géré automatiquement | Tu dois le gérer toi-même |

---

## ⚠️ ATTENTION : Le piège de la boucle infinie !

### 🚨 Le danger mortel du while

Si tu oublies de **modifier la condition** dans la boucle, elle ne s'arrêtera **JAMAIS** !

#### ❌ **MAUVAIS EXEMPLE (boucle infinie) :**
```php
$mobs = 0;

while ($mobs < 5) {
    echo "Je tue un mob<br>";
    // ERREUR : On n'augmente JAMAIS $mobs !
}
// Cette boucle va tourner à l'infini ! 💥
```

💬 **Ce qui se passe :**
- Tour 1 : `$mobs` vaut 0, condition vraie → on entre
- Tour 2 : `$mobs` vaut TOUJOURS 0, condition vraie → on entre
- Tour 3 : `$mobs` vaut TOUJOURS 0, condition vraie → on entre
- ... **À L'INFINI** 😱

Ton jeu va **freeze** !

---

#### ✅ **BON EXEMPLE :**
```php
$mobs = 0;

while ($mobs < 5) {
    $mobs++; // ✅ ON MODIFIE LA VARIABLE !
    echo "Je tue le mob $mobs<br>";
}
```

💬 **Ce qui se passe :**
- `$mobs` augmente à chaque tour
- Un moment, `$mobs` vaut 5
- La condition devient fausse
- La boucle **s'arrête** ✅

---

### 🧠 Règle d'or du while

> **À l'intérieur du while, tu DOIS modifier la variable de la condition !**
> Sinon, c'est la boucle infinie assurée ! 💥

---

## 🧮 Exemples concrets

### Exemple 1 : Remplir son inventaire de potions

```php
$potions = 0;
$inventaire_max = 8;

echo "Je remplis mon inventaire :<br>";

while ($potions < $inventaire_max) {
    $potions++;
    echo "Potion $potions ajoutée<br>";
}

echo "Inventaire plein ! 🎒";
```

**Résultat :**
```
Je remplis mon inventaire :
Potion 1 ajoutée
Potion 2 ajoutée
Potion 3 ajoutée
Potion 4 ajoutée
Potion 5 ajoutée
Potion 6 ajoutée
Potion 7 ajoutée
Potion 8 ajoutée
Inventaire plein ! 🎒
```

---

### Exemple 2 : Dépenser son gold

```php
$gold = 100; // gold disponible
$prix_objet = 15;
$objets_achetes = 0;

echo "J'ai $gold gold pour acheter des objets :<br>";

while ($gold >= $prix_objet) {
    $gold -= $prix_objet;
    $objets_achetes++;
    echo "Objet $objets_achetes acheté (reste $gold gold)<br>";
}

echo "Je ne peux plus acheter d'objets ! Il me reste $gold gold.";
```

**Résultat :**
```
J'ai 100 gold pour acheter des objets :
Objet 1 acheté (reste 85 gold)
Objet 2 acheté (reste 70 gold)
Objet 3 acheté (reste 55 gold)
Objet 4 acheté (reste 40 gold)
Objet 5 acheté (reste 25 gold)
Objet 6 acheté (reste 10 gold)
Je ne peux plus acheter d'objets ! Il me reste 10 gold.
```

---

### Exemple 3 : Monter de level

```php
$level = 1;
$level_max = 5;

echo "Je farm pour monter de level :<br>";

while ($level < $level_max) {
    $level++;
    echo "LEVEL UP ! Je suis maintenant level $level<br>";
}

echo "J'ai atteint le level max ! 🏆";
```

**Résultat :**
```
Je farm pour monter de level :
LEVEL UP ! Je suis maintenant level 2
LEVEL UP ! Je suis maintenant level 3
LEVEL UP ! Je suis maintenant level 4
LEVEL UP ! Je suis maintenant level 5
J'ai atteint le level max ! 🏆
```

---

## 🔄 While avec décrémentation (compter à l'envers)

Tu peux aussi utiliser `while` pour compter à l'envers !

### Exemple : Utiliser ses potions

```php
$potions_restantes = 5;

echo "J'utilise mes potions :<br>";

while ($potions_restantes > 0) {
    echo "J'utilise la potion numéro $potions_restantes<br>";
    $potions_restantes--; // On descend
}

echo "Plus de potions !";
```

**Résultat :**
```
J'utilise mes potions :
J'utilise la potion numéro 5
J'utilise la potion numéro 4
J'utilise la potion numéro 3
J'utilise la potion numéro 2
J'utilise la potion numéro 1
Plus de potions !
```

---

## 🎯 Conditions multiples dans while

Tu peux avoir des conditions **plus complexes** :

### Exemple : Jouer avec deux limites

```php
$mobs = 0;
$mana = 50;
$cout_spell = 12;

echo "Je farm des mobs tant que j'ai de la mana ET moins de 10 kills :<br>";

while ($mobs < 10 && $mana >= $cout_spell) {
    $mobs++;
    $mana -= $cout_spell;
    echo "Mob $mobs tué (reste $mana mana)<br>";
}

if ($mobs < 10) {
    echo "Je m'arrête : plus de mana ! 💙";
} else {
    echo "Je m'arrête : j'ai tué 10 mobs ! 🎯";
}
```

**Résultat :**
```
Je farm des mobs tant que j'ai de la mana ET moins de 10 kills :
Mob 1 tué (reste 38 mana)
Mob 2 tué (reste 26 mana)
Mob 3 tué (reste 14 mana)
Mob 4 tué (reste 2 mana)
Je m'arrête : plus de mana ! 💙
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

> La boucle `while` c'est comme dire à ton perso :
> **"Continue ton grind TANT QUE je ne te dis pas d'arrêter !"** 🎮🤖

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

## 📝 Exercice 2 : Farmer des mobs
**Énoncé :**
Crée une variable `$mobs = 0`.
Utilise une boucle `while` pour farmer **7 mobs**.
Affiche : "Je tue le mob numéro X" pour chaque mob.

**Ce qu'on attend :**
- Une variable compteur qui commence à 0
- Une boucle qui tourne 7 fois
- Un message pour chaque mob tué

**Exemple de résultat attendu :**
```
Je tue le mob numéro 1
Je tue le mob numéro 2
Je tue le mob numéro 3
Je tue le mob numéro 4
Je tue le mob numéro 5
Je tue le mob numéro 6
Je tue le mob numéro 7
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$mobs = 0;

while ($mobs < 7) {
    $mobs++;
    echo "Je tue le mob numéro $mobs<br>";
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

## 📝 Exercice 4 : Remplir son inventaire
**Énoncé :**
Crée une variable `$potions = 0` et `$inventaire_max = 6`.
Utilise une boucle `while` pour remplir l'inventaire.
Affiche : "Potion X ajoutée" pour chaque potion.
Après la boucle, affiche : "Inventaire plein !"

**Ce qu'on attend :**
- Deux variables (compteur et limite)
- Une boucle qui s'arrête à la capacité max
- Un message final

**Exemple de résultat attendu :**
```
Potion 1 ajoutée
Potion 2 ajoutée
Potion 3 ajoutée
Potion 4 ajoutée
Potion 5 ajoutée
Potion 6 ajoutée
Inventaire plein !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$potions = 0;
$inventaire_max = 6;

while ($potions < $inventaire_max) {
    $potions++;
    echo "Potion $potions ajoutée<br>";
}

echo "Inventaire plein !<br>";
?>
```
</details>

---

## 📝 Exercice 5 : Dépenser son gold
**Énoncé :**
Tu as `$gold = 80` gold. Chaque objet coûte `$prix = 20` gold.
Utilise une boucle `while` pour acheter des objets **tant que tu as assez de gold**.
Affiche : "Objet X acheté (reste Y gold)" pour chaque achat.

**Ce qu'on attend :**
- Une boucle qui vérifie le gold restant
- Soustraction du prix à chaque tour
- Affichage du gold restant

**Exemple de résultat attendu :**
```
Objet 1 acheté (reste 60 gold)
Objet 2 acheté (reste 40 gold)
Objet 3 acheté (reste 20 gold)
Objet 4 acheté (reste 0 gold)
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gold = 80;
$prix = 20;
$objets = 0;

while ($gold >= $prix) {
    $objets++;
    $gold -= $prix;
    echo "Objet $objets acheté (reste $gold gold)<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Monter de level
**Énoncé :**
Crée `$level = 1` et `$level_max = 4`.
Utilise une boucle `while` pour monter de level.
Affiche : "LEVEL UP ! Je suis level X".
Après la boucle : "Level max atteint !"

**Ce qu'on attend :**
- Une boucle qui s'arrête au level max
- Un message à chaque level gagné
- Un message final

**Exemple de résultat attendu :**
```
LEVEL UP ! Je suis level 2
LEVEL UP ! Je suis level 3
LEVEL UP ! Je suis level 4
Level max atteint !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$level = 1;
$level_max = 4;

while ($level < $level_max) {
    $level++;
    echo "LEVEL UP ! Je suis level $level<br>";
}

echo "Level max atteint !<br>";
?>
```
</details>

---

## 📝 Exercice 7 : Utiliser ses potions
**Énoncé :**
Tu as `$potions = 8` potions.
Utilise une boucle `while` pour les utiliser une par une (en comptant à l'envers).
Affiche : "J'utilise la potion numéro X".
Après : "Plus de potions !"

**Ce qu'on attend :**
- Une boucle qui décrémente
- Affichage du numéro de potion
- Message final

**Exemple de résultat attendu :**
```
J'utilise la potion numéro 8
J'utilise la potion numéro 7
J'utilise la potion numéro 6
J'utilise la potion numéro 5
J'utilise la potion numéro 4
J'utilise la potion numéro 3
J'utilise la potion numéro 2
J'utilise la potion numéro 1
Plus de potions !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$potions = 8;

while ($potions > 0) {
    echo "J'utilise la potion numéro $potions<br>";
    $potions--;
}

echo "Plus de potions !<br>";
?>
```
</details>

---

## 📝 Exercice 8 : Somme de l'XP
**Énoncé :**
Crée `$mob = 1` et `$xp_total = 0`.
Utilise une boucle `while` pour tuer des mobs de **1 à 10**.
Chaque mob donne 50 XP. Additionne l'XP à chaque mob.
Affiche l'XP total à la fin.

**Ce qu'on attend :**
- Une boucle de 1 à 10
- Addition de 50 XP à chaque tour
- Affichage du résultat final (devrait être 500)

**Exemple de résultat attendu :**
```
XP total gagné : 500
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$mob = 1;
$xp_total = 0;

while ($mob <= 10) {
    $xp_total += 50;
    $mob++;
}

echo "XP total gagné : $xp_total<br>";
?>
```
</details>

---

## 📝 Exercice 9 : Farm de 2 en 2
**Énoncé :**
Crée `$niveau = 0`.
Utilise une boucle `while` pour afficher tous les niveaux **pairs** de 0 à 20.
(Astuce : augmente de 2 à chaque tour)

**Ce qu'on attend :**
- Une boucle qui s'arrête à 20
- Incrémentation de 2 en 2
- Affichage des niveaux pairs

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
$niveau = 0;

while ($niveau <= 20) {
    echo "$niveau<br>";
    $niveau += 2;
}
?>
```
</details>

---

## 📝 Exercice 10 : Défi - Gold limité avec deux conditions
**Énoncé :**
Tu as `$gold = 100` gold et tu veux acheter **maximum 10 objets**.
Chaque objet coûte `$prix = 15` gold.
Utilise une boucle `while` qui s'arrête quand :
- Tu n'as plus assez de gold OU
- Tu as acheté 10 objets

Affiche : "Objet X acheté (reste Y gold)".
À la fin, affiche combien d'objets tu as acheté et combien de gold il reste.

**Ce qu'on attend :**
- Une boucle avec deux conditions (&&)
- Gestion du gold et du compteur
- Message final récapitulatif

**Exemple de résultat attendu :**
```
Objet 1 acheté (reste 85 gold)
Objet 2 acheté (reste 70 gold)
Objet 3 acheté (reste 55 gold)
Objet 4 acheté (reste 40 gold)
Objet 5 acheté (reste 25 gold)
Objet 6 acheté (reste 10 gold)
J'ai acheté 6 objets. Il me reste 10 gold.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$gold = 100;
$prix = 15;
$objets = 0;
$max_objets = 10;

while ($objets < $max_objets && $gold >= $prix) {
    $objets++;
    $gold -= $prix;
    echo "Objet $objets acheté (reste $gold gold)<br>";
}

echo "J'ai acheté $objets objets. Il me reste $gold gold.<br>";
?>
```
</details>

---

## 🎯 GG WP ! 🏆

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
