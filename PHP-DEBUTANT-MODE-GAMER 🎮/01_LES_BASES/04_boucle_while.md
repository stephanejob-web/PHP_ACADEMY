# 🎮 Cours PHP pour Débutant – La Boucle `while` ⚔️🧠

---

## 🚧 Pourquoi une autre boucle ?

Tu connais déjà la **boucle `for`** : elle sert quand tu sais **combien de fois** tu veux répéter une action.  
👉 Exemple :  
> “Je veux battre **10 ennemis**, pas un de plus, pas un de moins.” 👾

Mais parfois dans ton jeu, tu **ne sais pas encore combien de tours** il faudra jouer 😅  

Exemples :
- Tu combats **tant que le boss n’est pas mort** 💀  
- Tu récupères des potions **tant qu’il t’en reste** 💊  
- Tu explores une zone **tant qu’il y a des ennemis** 🧟‍♂️  

💬 Et c’est là que la **boucle `while`** entre en jeu !  
Elle veut dire :  
> “**Tant que** quelque chose est vrai, continue.” 🔁

---

## 🧠 1️⃣ Comprendre “Tant que…”

Imagine cette phrase :  
> “**Tant que** le boss est vivant, je continue à l’attaquer.” ⚔️

Tu ne sais pas combien de coups il faudra donner,  
mais tu sais **que tu t’arrêteras quand il sera KO** 💤  

C’est exactement ce que fait la boucle `while`.

---

## 🔧 2️⃣ Exemple simple

```php
$i = 1;

while ($i <= 5) {
    echo "Je combats l’ennemi numéro $i<br>";
    $i++;
}
```

Résultat :
```
Je combats l’ennemi numéro 1
Je combats l’ennemi numéro 2
Je combats l’ennemi numéro 3
Je combats l’ennemi numéro 4
Je combats l’ennemi numéro 5
```

💬 Ton héros combat **tant que** `$i` est inférieur ou égal à 5.

---

## 🔍 Décortiquons ligne par ligne

| Ligne | Ce que ça veut dire dans le jeu |
|-------|----------------------------------|
| `$i = 1;` | Le joueur affronte le **premier ennemi** 👾 |
| `while ($i <= 5)` | **Tant qu’il reste des ennemis**, on continue le combat ⚔️ |
| `$i++;` | Après chaque victoire, on passe au suivant 🏃‍♂️ |

---

### ⚠️ Attention au piège !

Si tu oublies `$i++`…  
Ton joueur va **combattre le même monstre à l’infini !** 😱  

C’est ce qu’on appelle une **boucle infinie** 🌀  
Ton jeu plantera comme un vieux PC qui surchauffe 🔥💻

---

## 🧪 3️⃣ Exemple concret : récupérer des potions

```php
$potions = 0;

while ($potions < 3) {
    echo "Je ramasse la potion numéro " . ($potions + 1) . "<br>";
    $potions++;
}
```

Résultat :
```
Je ramasse la potion numéro 1
Je ramasse la potion numéro 2
Je ramasse la potion numéro 3
```

💬 Le joueur continue **tant qu’il n’a pas 3 potions dans son inventaire** 🧴

---

## ⚖️ 4️⃣ Différence entre `for` et `while`

🥊 **Comparons-les dans le monde du jeu :**

| Situation | Utilise `for` | Utilise `while` |
|------------|----------------|----------------|
| Tu sais **combien de tours** il faut faire | ✅ Oui | ❌ Non |
| Tu continues **jusqu’à ce qu’une condition soit vraie** | ❌ Non | ✅ Oui |
| Exemple concret | “Je veux battre **10 ennemis**.” | “Je combats **tant que** le boss est vivant.” |
| Mot clé à retenir | “**Pour X fois**” | “**Tant que c’est vrai**” |
| Type de joueur | Stratège 🎯 | Survivant 🧟‍♂️ |

💬 En résumé :
- `for` = “Je sais combien d’ennemis il y a.”  
- `while` = “Je continue tant qu’ils ne sont pas tous morts.”  

---

## ☕ 5️⃣ Exemple fun : boire des potions

```php
$potions = 3;

while ($potions > 0) {
    echo "Je bois une potion... glou glou 💊<br>";
    $potions--;
}

echo "Plus de potions ! Il faut en trouver d’autres ! 😱";
```

Résultat :
```
Je bois une potion... glou glou 💊
Je bois une potion... glou glou 💊
Je bois une potion... glou glou 💊
Plus de potions ! Il faut en trouver d’autres ! 😱
```

---

## 💬 Phrase à retenir

> La boucle `while`, c’est comme une **quête sans limite** 🎮  
> Tu continues **tant que la condition est vraie**,  
> et tu t’arrêtes **quand elle devient fausse** 💀

---

# 🧪 Exercices (niveau gamer)

### 🕹️ Exercice 1  
Affiche les niveaux de 1 à 5 avec une boucle `while`.

### ⚔️ Exercice 2  
Affiche :  
> “Je combats l’ennemi numéro X”  
pour X allant de 1 à 4.

### 💊 Exercice 3  
Affiche :  
> “Je ramasse la potion numéro X”  
pour X allant de 1 à 3.

### 🧰 Exercice 4  
Affiche :  
> “J’équipe l’objet numéro X”  
pour X de 1 à 5.

### ⏳ Exercice 5  
Affiche les niveaux de 10 à 1 (compte à rebours).

### 💀 Exercice 6  
Fais une boucle `while` qui affiche :  
> “Je tape le boss...”  
jusqu’à ce que `$vie_boss` tombe à 0.

### 🧮 Exercice 7  
Affiche la table de 3 (3 x 1, 3 x 2, etc.) jusqu’à 10.

### 📦 Exercice 8  
Affiche :  
> “J’ouvre le coffre numéro X”  
jusqu’à 7.

### 🧩 Exercice 9  
Affiche seulement les **nombres pairs** entre 0 et 20.

### 🧑‍🚀 Exercice 10  
Affiche ton pseudo 5 fois avec une boucle `while`.

---

# ✅ Solutions

```php
// 1
$i = 1;
while ($i <= 5) {
    echo "Niveau $i<br>";
    $i++;
}

// 2
$i = 1;
while ($i <= 4) {
    echo "Je combats l’ennemi numéro $i<br>";
    $i++;
}

// 3
$potion = 1;
while ($potion <= 3) {
    echo "Je ramasse la potion numéro $potion<br>";
    $potion++;
}

// 4
$item = 1;
while ($item <= 5) {
    echo "J’équipe l’objet numéro $item<br>";
    $item++;
}

// 5
$i = 10;
while ($i >= 1) {
    echo "$i<br>";
    $i--;
}

// 6
$vie_boss = 3;
while ($vie_boss > 0) {
    echo "Je tape le boss... il lui reste $vie_boss PV !<br>";
    $vie_boss--;
}
echo "Boss vaincu ! 🏆<br>";

// 7
$i = 1;
while ($i <= 10) {
    echo "3 x $i = " . (3 * $i) . " XP gagnés<br>";
    $i++;
}

// 8
$x = 1;
while ($x <= 7) {
    echo "J’ouvre le coffre numéro $x<br>";
    $x++;
}

// 9
$i = 0;
while ($i <= 20) {
    if ($i % 2 == 0) {
        echo "$i<br>";
    }
    $i++;
}

// 10
$i = 1;
while ($i <= 5) {
    echo "LaurentGamer<br>";
    $i++;
}
```