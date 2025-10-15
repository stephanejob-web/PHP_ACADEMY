# 🎮 Cours PHP pour Débutant – Les Tableaux Associatifs (Clés / Valeurs) 🗝️🎒

## 🚨 Pourquoi les tableaux sont vitaux pour un gamer

Les **tableaux** sont au code ce que l’**inventaire** est à un RPG :  
la manière d’**organiser, retrouver et utiliser** toutes tes ressources sans te perdre.

> Sans tableaux, tu aurais une variable par objet.  
> Avec un tableau, tu ranges **tout au même endroit** — propre et efficace.

Si tu maîtrises ça, tu pourras :  
- gérer **plein d’infos** (stats, loot, quêtes) d’un coup,  
- **organiser** tes données comme un inventaire trié,  
- **automatiser** des affichages/calculs sans copier-coller.

---

## 👋 Introduction

Tu connais les **tableaux simples** (indexés) : une **liste** numérotée 0, 1, 2…

```php
$inventaire = ["épée", "bouclier", "potion"];
```

| Slot (index) | Objet |
|--------------|-------|
| 0 | épée |
| 1 | bouclier |
| 2 | potion |

Pour afficher :
```php
echo $inventaire[1]; // bouclier
```

Mais se souvenir des **numéros** de slots, c’est pas toujours fun…

---

## ⚡ Passons au niveau supérieur : les **tableaux associatifs**

Dans un jeu, tu ne dis pas : “Donne-moi l’objet **slot 2**.”  
Tu dis : “Donne-moi ma **potion de soin**.”

Un **tableau associatif**, c’est un inventaire **par étiquettes** :  
chaque case a un **nom (clé)** au lieu d’un numéro.

---

## 🧰 1️⃣ Créer un tableau associatif

```php
$stuff = [
    "arme" => "épée légendaire",
    "defense" => "bouclier de fer",
    "soin" => "potion"
];
```

Lis-le comme :  
> “Dans la case **arme**, j’ai **épée légendaire**.”

| Clé (nom de case) | Valeur (contenu) |
|-------------------|------------------|
| arme | épée légendaire |
| defense | bouclier de fer |
| soin | potion |

---

## 🛠️ 2️⃣ Accéder aux valeurs avec les crochets `[]`

Tu veux savoir ce qu’il y a dans ton inventaire ?  
Tu ouvres la bonne case 👇

```php
echo $stuff["arme"];
```
➡️ Résultat : `épée légendaire`

💬 PHP comprend :
> “Va dans la case appelée **arme** et montre-moi ce qu’il y a dedans.”

Tu peux aussi modifier :  
```php
$stuff["soin"] = "méga potion";
```

Ou ajouter :  
```php
$stuff["anneau"] = "anneau magique";
```

---

## 🤯 “C’est quoi ce bazar ? Je m’y perds dans mes slots !”

Pas de panique 😅  
C’est **normal** au début.  
Mais à force de t’entraîner, tu vas voir que ça devient **aussi naturel que gérer ton inventaire dans Zelda** 🗡️.

---

# 🔁 3️⃣ La boucle `foreach` – Parcourir tout ton inventaire

Imagine que tu veux afficher **tout ton stuff** sans écrire 50 lignes.  
Tu veux que PHP fasse le tour pour toi 👇

```php
foreach ($stuff as $objet) {
    echo "J’utilise $objet<br>";
}
```

💬 Traduction :  
> “Pour chaque objet dans `$stuff`, fais quelque chose.”

PHP fait ça dans sa tête :

| Tour | `$objet` | Ce que PHP affiche |
|------|-----------|--------------------|
| 1️⃣ | épée légendaire | J’utilise épée légendaire |
| 2️⃣ | bouclier de fer | J’utilise bouclier de fer |
| 3️⃣ | potion | J’utilise potion |

---

## 🧩 4️⃣ Comprendre `$stuff as $slot => $objet`

Quand tu veux voir le **nom de la case (clé)** en plus, tu fais :

```php
foreach ($stuff as $slot => $objet) {
    echo "Dans $slot, j’utilise $objet.<br>";
}
```

💬 Lis-le comme une phrase :  
> “Pour chaque case dans `$stuff`,  
> mets le **nom de la case** dans `$slot`  
> et son **contenu** dans `$objet`.”

Exemple :  
```php
"arme" => "épée légendaire"
```
- `"arme"` est la **clé** (le slot)  
- `"épée légendaire"` est la **valeur** (le contenu)

PHP fait :

| Étape | `$slot` | `$objet` |
|--------|----------|----------|
| 1️⃣ | arme | épée légendaire |
| 2️⃣ | defense | bouclier de fer |
| 3️⃣ | soin | potion |

---

## 🧠 5️⃣ Pourquoi on écrit ça comme ça ?

Tu pourrais écrire :
```php
foreach ($stuff as $truc => $bidule)
```
et PHP comprendrait.  
Mais franchement… c’est pas clair 😅

C’est comme dans un jeu :
> Si tu appelles ton épée “truc” et ton bouclier “machin”,  
> bon courage pour t’y retrouver dans ton inventaire 😆

🧩 Moralité :  
> Donne des **noms logiques** à tes variables : `$stuff`, `$slot`, `$objet`.  
> C’est plus propre, plus lisible, et tu passes pour un pro 🧙‍♂️

---

## 🕹️ 6️⃣ Exemple complet (mini RPG)

```php
$stuff = [
    "arme" => "épée légendaire",
    "defense" => "bouclier de fer",
    "soin" => "potion"
];

$stuff["anneau"] = "anneau magique";
$stuff["soin"] = "méga potion";

foreach ($stuff as $slot => $objet) {
    echo ucfirst($slot) . " : $objet<br>";
}

echo "Nombre d’objets : " . count($stuff);
```

Résultat :
```
Arme : épée légendaire
Defense : bouclier de fer
Soin : méga potion
Anneau : anneau magique
Nombre d’objets : 4
```

---

## 🧩 7️⃣ Résumé gamer

| Code | Signification | Exemple |
|------|----------------|----------|
| `["clé" => "valeur"]` | Case nommée | `["soin" => "potion"]` |
| `$tab["clé"]` | Accéder par nom | `$stuff["arme"]` |
| `$tab["clé"] = x` | Ajouter/Modifier | `$stuff["anneau"] = "magique"` |
| `foreach ($t as $k => $v)` | Parcourt clé + valeur | `slot + objet` |
| `count($t)` | Nombre de cases | `count($stuff)` |

> Un **tableau associatif**, c’est ton **inventaire de héros** :  
> chaque **slot a un nom (clé)** et **un objet (valeur)**.  
> Et avec **`foreach`**, tu explores ton sac magique sans galérer 🎒✨

---

# 🧪 Exercices (niveau gamer)

### Exercice 1
Crée `$stats = ["pv" => 100, "mana" => 50, "attaque" => 20];`  
Affiche les **PV**.

### Exercice 2
Ajoute `"defense" => 15` à `$stats`.

### Exercice 3
Augmente `"mana"` à `80` et réaffiche toutes les stats.

### Exercice 4
Crée `$quetes = ["prologue" => "Réveiller le héros", "acte1" => "Trouver l’épée", "acte2" => "Sauver la ville"];`  
Affiche chaque **chapitre** et sa **description**.

### Exercice 5
Ajoute `"acte3" => "Vaincre le boss"`.

### Exercice 6
Crée `$skills = ["feu" => "Boule de feu", "glace" => "Éclat de givre", "foudre" => "Éclair"];`  
Affiche :  
> “La compétence [clé] lance [valeur].”

### Exercice 7
Compte le nombre de compétences dans `$skills`.

### Exercice 8
Crée `$prix = ["potion" => 25, "ether" => 30, "elixir" => 100];`  
Calcule la **somme totale** avec `foreach`.

### Exercice 9
Crée `$inventaire = ["or" => 250, "gemmes" => 3, "clés" => 2];`  
Affiche :  
> “Tu possèdes [nombre] [objet].”

### Exercice 10
Crée `$perso = ["nom" => "Link", "niveau" => 12, "classe" => "Héros"];`  
Affiche :
> “Le héros Link (niveau 12) part à l’aventure.”

---

## ✅ Solutions

```php
// 1
$stats = ["pv" => 100, "mana" => 50, "attaque" => 20];
echo $stats["pv"];

// 2
$stats["defense"] = 15;

// 3
$stats["mana"] = 80;
foreach ($stats as $k => $v) {
    echo ucfirst($k) . " : $v<br>";
}

// 4
$quetes = ["prologue" => "Réveiller le héros", "acte1" => "Trouver l’épée", "acte2" => "Sauver la ville"];
foreach ($quetes as $chap => $desc) {
    echo "Chapitre $chap : $desc<br>";
}

// 5
$quetes["acte3"] = "Vaincre le boss";

// 6
$skills = ["feu" => "Boule de feu", "glace" => "Éclat de givre", "foudre" => "Éclair"];
foreach ($skills as $elem => $sort) {
    echo "La compétence $elem lance $sort.<br>";
}

// 7
echo "Nombre de compétences : " . count($skills);

// 8
$prix = ["potion" => 25, "ether" => 30, "elixir" => 100];
$total = 0;
foreach ($prix as $val) { $total += $val; }
echo "Total boutique : $total or";

// 9
$inventaire = ["or" => 250, "gemmes" => 3, "clés" => 2];
foreach ($inventaire as $objet => $nb) {
    echo "Tu possèdes $nb $objet.<br>";
}

// 10
$perso = ["nom" => "Link", "niveau" => 12, "classe" => "Héros"];
echo "Le héros " . $perso["nom"] . " (niveau " . $perso["niveau"] . ") part à l’aventure.";
```
