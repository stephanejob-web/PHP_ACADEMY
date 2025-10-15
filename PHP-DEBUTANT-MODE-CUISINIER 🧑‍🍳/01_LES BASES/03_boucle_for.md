# 🍳 Cours PHP pour Débutant – La Boucle `for` 😅👨‍🍳

---

💬 “Pourquoi les débutants ont peur de la boucle `for` ?”  
Parce qu’elle **tourne en rond**, et leur sauce aussi ! 😂

---

## 🍽️ Pourquoi une boucle ?

Imagine que tu dois **remplir 10 assiettes** une par une 🍝

Tu pourrais écrire :
```php
echo "Je remplis l’assiette numéro 1<br>";
echo "Je remplis l’assiette numéro 2<br>";
echo "Je remplis l’assiette numéro 3<br>";
// ...
```

Mais là, soyons honnêtes…  
👉 Au bout de 10 lignes, t’as les mains pleines de sauce.  
👉 Au bout de 100, t’as cramé le rôti et perdu patience 😅  

Heureusement, PHP a un outil magique pour **répéter une action sans se fatiguer** :  
c’est la **boucle** !

---

## 💡 C’est quoi une boucle ?

Une **boucle**, c’est comme un **commis de cuisine bien formé** 👨‍🍳  
Tu lui dis :  
> “Remplis une assiette, passe à la suivante, et continue jusqu’à ce que tout soit servi.”  

Et lui, il obéit sans broncher 🧂  

💬 En PHP, on écrit ça comme ceci :

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je remplis l’assiette numéro $i<br>";
}
```

---

## 🧩 Le secret du `for` 🍰

Regarde bien cette ligne :
```php
for ($i = 1; $i <= 10; $i++)
```

C’est comme une **recette en trois étapes** 🍳

| Étape | Explication simple |
|--------|--------------------|
| `$i = 1` | Je **commence** à la **première assiette** 🍽️ |
| `$i <= 10` | Je **continue** tant que je n’ai **pas servi 10 assiettes** 👨‍🍳 |
| `$i++` | Je **passe à l’assiette suivante** ➡️ |

---

### 🔎 Zoom sur `$i` — le compteur de cuisine 🧮

> 💬 `$i` n’est **pas un ingrédient secret** de PHP.  
> C’est simplement **une variable** qu’on utilise pour **compter** les tours de boucle.

Les programmeurs utilisent souvent `$i` car ça vient du mot anglais *“iteration”* (tour de boucle).  
Mais tu peux l’appeler comme tu veux ! 😄

Par exemple :

```php
for ($assiette = 1; $assiette <= 10; $assiette++) {
    echo "Je remplis l’assiette numéro $assiette<br>";
}
```

ou encore :

```php
for ($service = 1; $service <= 10; $service++) {
    echo "Je remplis l’assiette numéro $service<br>";
}
```

👉 PHP s’en fiche du nom, tant que c’est **le même dans les trois parties** du `for`.

🧠 Retient ceci :  
> `$i`, `$assiette`, ou `$service`, c’est juste **le compteur de ton service**.

---

### 🔹 1️⃣ `$i = 1` — Le début du service

Tu dis à ton commis :
> “Commence à **la première assiette**.”

👉 `$i = 1` veut dire que ton compteur **débute à 1**.

---

### 🔹 2️⃣ `$i <= 10` — La condition du chef

Tu lui dis :
> “Continue tant que tu n’as pas **rempli 10 assiettes**.”

Quand `$i` devient 11 :
> “Chef ! Service terminé ! 🍽️”

La boucle s’arrête **toute seule**, comme un bon service bien rodé.

---

### 🔹 3️⃣ `$i++` — Le passage à l’assiette suivante

C’est ton petit **geste de chef** 👨‍🍳  
Tu remplis, tu dresses, et hop : **assiette suivante !**

🧠 Astuce :  
Le `++` veut dire **“ajoute 1”** à ta variable.  
Ton compteur `$i` passe de 1 à 2, puis 3, puis 4… sans que tu lèves le petit doigt 🍴

Et si tu te demandes :  
> “Mais pourquoi deux + à la suite ? 🤨”  

C’est juste la façon de PHP de dire :  
> “Ajoute une assiette et continue le service, Chef ! 😆”

---

## 💬 Ce que fait la boucle

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je remplis l’assiette numéro $i<br>";
}
```

Résultat :
```
Je remplis l’assiette numéro 1
Je remplis l’assiette numéro 2
Je remplis l’assiette numéro 3
...
Je remplis l’assiette numéro 10
```

Quand il arrive à 11 :  
> “Chef ! Tout le monde est servi ! 🍽️✅”

---

## 🧁 Exemple 2 – Les gâteaux au four 🎂

```php
for ($gateau = 1; $gateau <= 5; $gateau++) {
    echo "Je cuis le gâteau numéro $gateau<br>";
}
```

Résultat :
```
Je cuis le gâteau numéro 1
Je cuis le gâteau numéro 2
Je cuis le gâteau numéro 3
Je cuis le gâteau numéro 4
Je cuis le gâteau numéro 5
```

💬 Et voilà ! Tous tes gâteaux sont sortis du four, **sans rien rater** 😋

---

## 👨‍🍳 En résumé

| Élément | Rôle en cuisine |
|----------|----------------|
| `$i = 1` | Tu **commences** au premier plat 🍽️ |
| `$i <= 10` | Tu **sers** jusqu’à la dixième assiette 🍝 |
| `$i++` | Tu **passes à la suivante** 🍰 |
| `for` | Tu **répètes le geste** sans te tromper 😅 |
| `$i` | C’est ton **compteur de service** 🧮 |

---

## 💬 Phrase à retenir
> La boucle `for`, c’est comme ton **commis préféré** :  
> tu lui dis **quand commencer**, **quand s’arrêter**,  
> et il travaille sans jamais se plaindre 🍳🤖

---

# 🧪 Exercices (niveau cuistot)

### Exercice 1  
Affiche les nombres de 1 à 10 avec une boucle `for`. 🔢

### Exercice 2  
Affiche :  
> “Je remplis l’assiette numéro X”  
pour X allant de 1 à 5. 🍽️

### Exercice 3  
Affiche :  
> “Je casse l’œuf numéro X”  
pour X allant de 1 à 3. 🥚

### Exercice 4  
Affiche :  
> “Je goûte la sauce numéro X”  
pour X allant de 1 à 4. 🍲

### Exercice 5  
Affiche :  
> “Je dresse le dessert numéro X.”  
de 1 à 6. 🍰

### Exercice 6  
Affiche tous les **nombres pairs** entre 2 et 10 (les plats servis en duo 👨‍🍳).

### Exercice 7  
Affiche tous les nombres de 10 à 1 (compte à rebours avant la fin du service ⏳).

### Exercice 8  
Affiche la **table de multiplication de 5**, façon recettes de sucre :  
“5 x 1 = 5 g”, “5 x 2 = 10 g”, etc. 🧁

### Exercice 9  
Affiche :  
> “Je prépare le plat numéro X”  
pour X de 1 à 3, puis affiche :  
> “Tous les plats sont servis !” 🍛

### Exercice 10  
Affiche ton **nom de chef** 5 fois 😄

---

# ✅ Solutions

```php
// 1
for ($i = 1; $i <= 10; $i++) {
    echo "$i<br>";
}

// 2
for ($i = 1; $i <= 5; $i++) {
    echo "Je remplis l’assiette numéro $i<br>";
}

// 3
for ($i = 1; $i <= 3; $i++) {
    echo "Je casse l’œuf numéro $i<br>";
}

// 4
for ($i = 1; $i <= 4; $i++) {
    echo "Je goûte la sauce numéro $i<br>";
}

// 5
for ($i = 1; $i <= 6; $i++) {
    echo "Je dresse le dessert numéro $i<br>";
}

// 6
for ($i = 2; $i <= 10; $i += 2) {
    echo "$i<br>";
}

// 7
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}

// 8
for ($i = 1; $i <= 10; $i++) {
    $resultat = 5 * $i;
    echo "5 x $i = $resultat grammes de sucre<br>";
}

// 9
for ($i = 1; $i <= 3; $i++) {
    echo "Je prépare le plat numéro $i<br>";
}
echo "Tous les plats sont servis !<br>";

// 10
for ($i = 1; $i <= 5; $i++) {
    echo "Chef Laurent<br>";
}
```