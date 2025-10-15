# 🎮 Cours PHP pour Débutant – Les Variables ⚔️

---

## 💾 Pourquoi une variable ? Comprendre avec ton inventaire 🧰

Imagine que tu es dans ton jeu préféré.  
Tu ouvres ton **inventaire** 🧳 : tu y vois ton épée légendaire 🗡️, tes potions 💊, tes pièces d’or 💰 et ta carte 🗺️.  

Mais si tu veux t’y retrouver, tu dois **donner un nom à chaque objet** :  
> “épée”, “potion”, “or”, “carte”…

Ainsi, quand tu veux utiliser quelque chose, tu regardes le nom et tu le retrouves **directement**.

💬 En PHP, c’est pareil :  
- Chaque **nom** correspond à une **variable**.  
- Chaque **objet de ton inventaire** correspond à une **valeur**.

Exemple :
```php
$epee = "Excalibur";
$potion = 3;
$or = 150;
```

| Nom (variable) | Contenu (valeur) |
|----------------|------------------|
| epee | "Excalibur" |
| potion | 3 |
| or | 150 |

🧠 Ton ordinateur, c’est comme un joueur avec un énorme sac à dos de données.  
Chaque fois que tu crées une variable, il range l’objet dans son inventaire avec une **étiquette** pour s’en souvenir.

---

## ⚙️ Pourquoi c’est utile

Si tu veux calculer ton total d’or ou le nombre de potions restantes, tu n’as pas besoin de tout retenir :  
tu **utilises tes variables** comme des raccourcis.

```php
$or = 150;
$bonus = 50;
$total = $or + $bonus;

echo "Tu as maintenant $total pièces d’or.";
```

Résultat :
```
Tu as maintenant 200 pièces d’or.
```

💬 Tu viens de dire à ton ordi :
> “Additionne mes pièces d’or et mon bonus, et stocke le résultat dans une nouvelle variable appelée total.”

---

## 🧱 1️⃣ Créer une variable

Chaque variable en PHP commence **toujours** par `$`.  
C’est comme si tu mettais un nouveau slot dans ton inventaire.

```php
$joueur = "Link";
$niveau = 5;
$vie = 100;
```

💬 Tu viens de créer trois emplacements :
| Nom | Valeur |
|------|--------|
| joueur | "Link" |
| niveau | 5 |
| vie | 100 |

---

## 🎯 2️⃣ Utiliser une variable

Tu veux afficher ton pseudo ?  
Tu appelles simplement ta variable :
```php
echo $joueur;
```

Résultat :
```
Link
```

💬 PHP fouille dans l’inventaire, trouve la case “joueur” et lit ce qu’il y a dedans.

---

## 🔁 3️⃣ Modifier une variable

Tu gagnes un niveau ?  
Pas besoin de tout recommencer — tu **mets simplement à jour la valeur** :

```php
$niveau = 6;
```

💬 Le slot reste le même, mais la valeur change.  
Tu viens de “level up” ta variable 🎉

---

## 🧩 4️⃣ Pourquoi “variable” ?

Parce que son **contenu peut varier** (changer).  
Tu peux **mettre autre chose dedans** sans changer son nom.

C’est comme un slot d’inventaire vide :  
parfois il contient une potion, parfois une clé magique — mais il garde le même nom “slot_1”.

---

## ⚔️ 5️⃣ Exemple concret

Tu veux calculer les points d’attaque d’un personnage :
```php
$force = 10;
$arme = 25;
$bonus = 5;

$attaque = $force + $arme + $bonus;

echo "Tes points d’attaque sont $attaque.";
```

Résultat :
```
Tes points d’attaque sont 40.
```

💬 Tu as créé plusieurs variables (`force`, `arme`, `bonus`) et PHP calcule ton total automatiquement, comme un jeu qui additionne tes stats.

---

## 🧠 6️⃣ En résumé simple

| Ce que tu fais | Dans ton jeu | En PHP |
|----------------|---------------|--------|
| Tu ramasses un objet | Tu stockes une donnée | Tu crées une variable |
| Tu donnes un nom à ton objet | Tu le reconnais plus tard | Tu écris `$nom = valeur;` |
| Tu ouvres ton inventaire | Tu veux savoir ce que tu as | Tu fais `echo $nom;` |
| Tu améliores ton stuff | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c’est comme un **slot dans ton inventaire** 🎒.  
> Tu peux y ranger n’importe quelle donnée, la remplacer,  
> et ton programme s’en souviendra tant que la partie est en cours.

---

# 🧪 Exercices (niveau gamer)

### 🎮 Exercice 1
Crée une variable `$pseudo` avec ton pseudo de jeu et affiche-le.

### ⚔️ Exercice 2
Crée une variable `$niveau` et affiche :  
> “Je suis niveau [ton niveau].”

### 💊 Exercice 3
Crée deux variables `$vie = 80` et `$soin = 20`,  
puis calcule `$total_vie` et affiche-la.

### 💰 Exercice 4
Crée `$or = 200` et `$bonus = 150`, puis affiche ton total d’or.

### 🕹️ Exercice 5
Crée `$game_over = false`  
et affiche un message selon que la partie est terminée ou non.

### 🧙‍♂️ Exercice 6
Crée `$joueur = "Zelda"`  
et affiche :  
> “Bienvenue Zelda, ta quête commence maintenant.”

### 🧱 Exercice 7
Crée `$potions = 5`, bois-en 2, affiche combien il t’en reste.

### 🧾 Exercice 8
Crée `$prix_epee = 100`, `$quantite = 3`, puis calcule le coût total.

### 🔁 Exercice 9
Crée `$pseudo = "NoobMaster"`, change-le en `"ProGamer"` et affiche le nouveau.

### 🧩 Exercice 10
Crée `$force = 12` et `$arme = 18`, puis affiche la somme totale.

---

# ✅ Solutions

```php
// Exercice 1
$pseudo = "LaurentGamer";
echo $pseudo;

// Exercice 2
$niveau = 10;
echo "Je suis niveau $niveau.";

// Exercice 3
$vie = 80;
$soin = 20;
$total_vie = $vie + $soin;
echo "Tu as maintenant $total_vie points de vie.";

// Exercice 4
$or = 200;
$bonus = 150;
$total = $or + $bonus;
echo "Tu as $total pièces d’or.";

// Exercice 5
$game_over = false;
if ($game_over) {
    echo "Game Over... 😢";
} else {
    echo "La partie continue ! 💪";
}

// Exercice 6
$joueur = "Zelda";
echo "Bienvenue $joueur, ta quête commence maintenant.";

// Exercice 7
$potions = 5;
$potions = $potions - 2;
echo "Il te reste $potions potions.";

// Exercice 8
$prix_epee = 100;
$quantite = 3;
$total = $prix_epee * $quantite;
echo "Le coût total est de $total pièces d’or.";

// Exercice 9
$pseudo = "NoobMaster";
$pseudo = "ProGamer";
echo "Ton nouveau pseudo est $pseudo.";

// Exercice 10
$force = 12;
$arme = 18;
$total = $force + $arme;
echo "Ta puissance totale est $total.";
```