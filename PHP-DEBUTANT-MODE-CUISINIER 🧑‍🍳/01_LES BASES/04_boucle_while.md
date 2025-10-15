# 🍳 Cours PHP pour Débutant – La Boucle `while` 🥐🧠

---

## 🧱 Pourquoi une autre boucle ?

Tu connais déjà la **boucle `for`** : elle sert quand tu sais **combien de fois** tu veux répéter une action.  
👉 Exemple :  
> “Je veux remplir **10 assiettes**, pas une de plus, pas une de moins.” 🍽️

Mais parfois, en cuisine, tu **ne sais pas encore combien de temps** une action va durer 😅  

Exemples :
- Tu fouettes **tant que la crème n’est pas ferme** 🥣  
- Tu cuis **tant que le four n’a pas atteint la bonne température** 🔥  
- Tu sales **tant que ce n’est pas assez assaisonné** 🧂  

💬 Et c’est là que la **boucle `while`** entre en jeu !  
Elle veut dire :  
> “**Tant que** quelque chose est vrai, continue.” 🔁

---

## 🧠 1️⃣ Comprendre “Tant que…”

Imagine cette phrase :  
> “**Tant que** la crème n’est pas ferme, je continue à fouetter.” 🍰

Tu ne sais pas combien de coups de fouet il faudra donner,  
mais tu sais **que tu t’arrêteras quand elle sera parfaite** 😋  

C’est exactement ce que fait la boucle `while`.

---

## 🔧 2️⃣ Exemple simple

```php
$i = 1;

while ($i <= 5) {
    echo "Je remplis l’assiette numéro $i<br>";
    $i++;
}
```

Résultat :
```
Je remplis l’assiette numéro 1
Je remplis l’assiette numéro 2
Je remplis l’assiette numéro 3
Je remplis l’assiette numéro 4
Je remplis l’assiette numéro 5
```

💬 Le chef continue **tant qu’il n’a pas dressé les 5 assiettes** 🍽️

---

## 🔍 Décortiquons ligne par ligne

| Ligne | Ce que ça veut dire dans la cuisine |
|-------|--------------------------------------|
| `$i = 1;` | Tu commences à **la première assiette** 🍽️ |
| `while ($i <= 5)` | **Tant qu’il reste des assiettes à servir**, tu continues 👨‍🍳 |
| `$i++;` | Après chaque plat dressé, tu passes au suivant 🧑‍🍳 |

---

### ⚠️ Attention au piège !

Si tu oublies `$i++`…  
Tu vas **dresser la même assiette à l’infini !** 😱  
C’est ce qu’on appelle une **boucle infinie** 🔄  
Ton service ne s’arrêtera jamais, et tout brûlera dans la cuisine ! 🔥

---

## 🧪 3️⃣ Exemple concret : Cuisson des gâteaux

```php
$gateaux = 0;

while ($gateaux < 3) {
    echo "Je cuis le gâteau numéro " . ($gateaux + 1) . "<br>";
    $gateaux++;
}
```

Résultat :
```
Je cuis le gâteau numéro 1
Je cuis le gâteau numéro 2
Je cuis le gâteau numéro 3
```

💬 Le chef continue **tant qu’il reste des gâteaux à cuire** 🧁

---

## ⚖️ 4️⃣ Différence entre `for` et `while`

🥊 **Comparons-les dans la cuisine :**

| Situation | Utilise `for` | Utilise `while` |
|------------|----------------|----------------|
| Tu sais **combien d’assiettes** faire | ✅ Oui | ❌ Non |
| Tu continues **jusqu’à une condition** (cuisson, texture) | ❌ Non | ✅ Oui |
| Exemple concret | “Je remplis **10 assiettes**.” | “Je fouette **tant que** la crème n’est pas ferme.” |
| Mot clé à retenir | “**Pour X fois**” | “**Tant que c’est vrai**” |
| Type de chef | Organisé 👨‍🍳 | Instinctif 👩‍🍳 |

💬 En résumé :  
- `for` = “Je sais combien de plats faire.”  
- `while` = “Je continue tant que ce n’est pas prêt.”

---

## ☕ 5️⃣ Exemple fun : Goûter la soupe 🍲

```php
$sel = 0;

while ($sel < 3) {
    echo "Je goûte la soupe... encore un peu fade 🧂<br>";
    $sel++;
}

echo "Parfait ! La soupe est délicieuse 😋";
```

Résultat :
```
Je goûte la soupe... encore un peu fade 🧂
Je goûte la soupe... encore un peu fade 🧂
Je goûte la soupe... encore un peu fade 🧂
Parfait ! La soupe est délicieuse 😋
```

---

## 💬 Phrase à retenir

> La boucle `while`, c’est ton **instinct de chef** 👨‍🍳  
> Tu continues **tant que la recette n’est pas parfaite**,  
> et tu t’arrêtes **quand tout est prêt à servir** 🍽️

---

# 🧪 Exercices (niveau cuisine)

### 🍳 Exercice 1  
Affiche les plats servis de 1 à 5 avec une boucle `while`.

### 🥧 Exercice 2  
Affiche :  
> “Je cuis le gâteau numéro X”  
pour X allant de 1 à 4.

### 🧂 Exercice 3  
Affiche :  
> “Je goûte la soupe numéro X”  
pour X allant de 1 à 3.

### 🍝 Exercice 4  
Affiche :  
> “Je sers le plat numéro X”  
pour X de 1 à 5.

### ⏳ Exercice 5  
Affiche un compte à rebours de cuisson (10 à 1).

### 🍰 Exercice 6  
Fais une boucle `while` qui affiche :  
> “Le gâteau cuit encore...”  
jusqu’à ce que `$temps_cuisson` atteigne 0.

### 🍗 Exercice 7  
Affiche la table de 3 façon cuisine :  
> “3 portions x X = Y grammes de pâte.”

### 🥪 Exercice 8  
Affiche :  
> “Je prépare le sandwich numéro X”  
jusqu’à 7.

### 🧮 Exercice 9  
Affiche seulement les **nombres pairs** de portions entre 0 et 20.

### ☕ Exercice 10  
Affiche ton nom de chef 5 fois avec une boucle `while`.

---

# ✅ Solutions

```php
// 1
$i = 1;
while ($i <= 5) {
    echo "Plat servi numéro $i<br>";
    $i++;
}

// 2
$i = 1;
while ($i <= 4) {
    echo "Je cuis le gâteau numéro $i<br>";
    $i++;
}

// 3
$soupe = 1;
while ($soupe <= 3) {
    echo "Je goûte la soupe numéro $soupe<br>";
    $soupe++;
}

// 4
$plat = 1;
while ($plat <= 5) {
    echo "Je sers le plat numéro $plat<br>";
    $plat++;
}

// 5
$i = 10;
while ($i >= 1) {
    echo "Temps restant : $i minutes<br>";
    $i--;
}

// 6
$temps_cuisson = 3;
while ($temps_cuisson > 0) {
    echo "Le gâteau cuit encore... ($temps_cuisson minutes restantes)<br>";
    $temps_cuisson--;
}
echo "Gâteau prêt ! 🍰<br>";

// 7
$i = 1;
while ($i <= 10) {
    echo "3 portions x $i = " . (3 * $i) . " grammes de pâte<br>";
    $i++;
}

// 8
$x = 1;
while ($x <= 7) {
    echo "Je prépare le sandwich numéro $x<br>";
    $x++;
}

echo "Tous les sandwichs sont prêts !<br>";

// 9
$i = 0;
while ($i <= 20) {
    if ($i % 2 == 0) {
        echo "$i cuillères servies<br>";
    }
    $i++;
}

// 10
$i = 1;
while ($i <= 5) {
    echo "Chef Laurent<br>";
    $i++;
}
```
