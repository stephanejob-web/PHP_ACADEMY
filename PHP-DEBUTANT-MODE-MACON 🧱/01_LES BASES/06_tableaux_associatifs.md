# 🧱 Cours PHP pour Débutant – Les Tableaux Associatifs (Clés / Valeurs) 👷‍♂️

## 🚨 Pourquoi les tableaux sont très importants

Avant tout, arrêtons-nous un instant 👋  
Ce que tu vas apprendre ici, c’est l’un des concepts les plus importants de tout le PHP (et même de la programmation en général).

Les **tableaux**, c’est le **cœur du code** :  
➡️ c’est la façon de **ranger, organiser et retrouver les informations**.

---

### 🧰 Exemple de chantier

Sur un chantier, tu ranges ton matériel dans des boîtes :

- une boîte pour la maçonnerie,  
- une autre pour les outils de mesure,  
- une autre pour les produits (ciment, sable…).

En PHP, c’est pareil :  
> Un **tableau**, c’est comme une **caisse de rangement** pour tes données.

Sans tableaux, tu devrais créer une variable pour chaque chose 😩  
```php
$outil1 = "truelle";
$outil2 = "niveau";
$outil3 = "mètre";
```

Mais avec un tableau, tu peux **tout ranger au même endroit** :
```php
$outils = ["truelle", "niveau", "mètre"];
```

💬 En résumé :
> Savoir utiliser les tableaux, c’est comme bien ranger ton chantier.  
> Si tes caisses sont en ordre, ton travail devient plus simple et plus rapide !

---

## 👷‍♂️ 1️⃣ Rappel : les tableaux simples

```php
$outils = ["truelle", "niveau", "mètre"];
```

| Numéro (index) | Outil |
|----------------|-------|
| 0 | truelle |
| 1 | niveau |
| 2 | mètre |

Pour afficher le deuxième outil :
```php
echo $outils[1];
```

➡️ Résultat : `niveau`

Mais ici, tu dois **te souvenir du numéro (1)**.  
Pas pratique quand on a la tête pleine de ciment 😅  

---

## 🧱 2️⃣ Les tableaux associatifs

Sur un vrai chantier, tu ne dis pas :
> “Apporte-moi l’outil numéro 2.”

Tu dis :
> “Apporte-moi la truelle de maçon.”  
> “Passe-moi le niveau à bulle.”

C’est ça, un **tableau associatif** :
> chaque case a un **nom (clé)** au lieu d’un **numéro**.

---

## 🧰 3️⃣ Créer un tableau associatif

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle",
    "traçage"    => "cordeau"
];
```

| Nom de la boîte (clé) | Contenu (valeur) |
|------------------------|------------------|
| maçonnerie | truelle |
| mesure | niveau à bulle |
| traçage | cordeau |

💬 Lis-le comme une phrase :
> “Dans la boîte **maçonnerie**, j’ai une **truelle**.”

---

## 🪛 4️⃣ Accéder à une valeur avec les crochets `[]`

Pour ouvrir une boîte, tu donnes son nom :

```php
echo $outils["maçonnerie"];
```
➡️ Résultat : `truelle`

Autre exemple :
```php
echo $outils["mesure"];
```
➡️ Résultat : `niveau à bulle`

💬 PHP comprend :
> “Va dans la boîte appelée **mesure**, et dis-moi ce qu’il y a dedans.”

---

## 🔧 5️⃣ Modifier ou ajouter des éléments

Changer une valeur :
```php
$outils["traçage"] = "fil à plomb";
```

Ajouter une nouvelle boîte :
```php
$outils["peinture"] = "rouleau";
```

Tu viens d’ajouter une nouvelle boîte dans ton atelier 👏

---

## 🧾 6️⃣ Voir tout le tableau

```php
print_r($outils);
```

Résultat :
```
Array
(
    [maçonnerie] => truelle
    [mesure] => niveau à bulle
    [traçage] => fil à plomb
    [peinture] => rouleau
)
```

---

## 🧠 7️⃣ En résumé avant la boucle

| Action | Code | Résultat |
|--------|------|-----------|
| Lire une valeur | `$outils["maçonnerie"]` | truelle |
| Modifier une valeur | `$outils["traçage"] = "fil à plomb";` | met à jour la boîte |
| Ajouter une boîte | `$outils["peinture"] = "rouleau";` | ajoute une boîte |
| Voir tout le tableau | `print_r($outils);` | affiche tout |

---

### 🤯 *Petite pause humour :*

> “C’est quoi ce bazar ?! J’ai la tête qui chauffe, j’comprends plus rien à ces crochets et ces flèches !” 😵‍💫

C’est **normal** de penser ça la première fois.  
Tout le monde passe par là.  
Mais rassure-toi 👷‍♂️ :  
➡️ À force d’en faire, ton cerveau va s’y habituer.  
➡️ Et un jour, tu feras des tableaux sans même y penser — comme un pro qui monte un mur bien droit 🧱.

---

# 🔁 8️⃣ La boucle `foreach` – Parcourir tout le tableau

Maintenant que tu sais **ouvrir une boîte avec les crochets**,  
on va apprendre à **ouvrir toutes les boîtes d’un coup** avec une boucle.

---

## 🧰 A) Version simple : parcourir les valeurs

```php
$outils = ["truelle", "niveau", "mètre"];

foreach ($outils as $outil) {
    echo "J’utilise un $outil<br>";
}
```

💬 Ce que ça veut dire :
> “Pour chaque élément dans `$outils`,  
> je le range temporairement dans `$outil` et je fais quelque chose avec.”

---

### 🧩 PHP fait ça dans sa tête :

| Tour | Ce que contient `$outil` | Ce que PHP affiche |
|------|---------------------------|--------------------|
| 1️⃣ | truelle | J’utilise un truelle |
| 2️⃣ | niveau | J’utilise un niveau |
| 3️⃣ | mètre | J’utilise un mètre |

---

## 🔎 Pourquoi on écrit `$outils as $outil`

Lis-le comme une phrase :
> “Pour chaque élément **de `$outils`**, appelle-le **`$outil`**.”

- `$outils` = la **caisse complète**  
- `$outil` = **l’outil que PHP sort de la caisse à chaque tour**

C’est comme si PHP disait :
> “Je fouille dans ta caisse, je sors un outil, je te le montre, et je passe au suivant.”

---

## 🧱 B) Version complète : les clés + les valeurs

Quand ton tableau a des **noms de boîtes**, tu veux souvent les voir aussi.

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle",
    "traçage"    => "cordeau"
];

foreach ($outils as $categorie => $outil) {
    echo "Dans la catégorie $categorie, j’utilise un $outil.<br>";
}
```

---

## 🧠 Comprendre `$outils as $categorie => $outil`

Bon, là c’est la fameuse ligne qui rend tout le monde fou la première fois 😵‍💫  
Mais t’inquiète, on va la décortiquer tranquillement 👇

On peut la lire comme une phrase :

> “Pour **chaque boîte** dans `$outils`,  
> mets le **nom de la boîte** dans `$categorie`,  
> et ce qu’il y a **dedans** dans `$outil`.”

Dans notre tableau :
```php
"maçonnerie" => "truelle"
```
- `"maçonnerie"` est la **clé** (le nom de la boîte)
- `"truelle"` est la **valeur** (le contenu de la boîte)

PHP fait ça automatiquement :

| Tour | `$categorie` | `$outil` |
|------|---------------|----------|
| 1️⃣ | maçonnerie | truelle |
| 2️⃣ | mesure | niveau à bulle |
| 3️⃣ | traçage | cordeau |

---

### 💬 Pourquoi on choisit ces noms de variables ?

Tu pourrais écrire :
```php
foreach ($outils as $toto => $truc)
```
PHP le comprendrait très bien.  
Mais… c’est moche et incompréhensible 😅

Le code, c’est comme un chantier :  
si tu ne mets pas d’étiquettes, plus personne ne s’y retrouve.

👉 C’est pour ça qu’on donne des noms **logiques** :
- `$outils` → le tableau complet (ta caisse)
- `$categorie` → le nom de la boîte (la clé)
- `$outil` → ce qu’il y a dedans (la valeur)

💬 Plus tu choisis des noms clairs,  
plus ton code est facile à lire et à comprendre — même plus tard !

---

### 🤯 “Pfff… ça me rend fou tout ça !”

C’est normal 😅  
Tous les débutants passent par là.

Mais accroche-toi 👷‍♂️ :  
> À force de pratiquer, tu vas voir que ça devient logique.  
> Et un jour, tu écriras `foreach` les yeux fermés,  
> comme un maçon qui trace droit sans son niveau 🧱💪

---

# 🧪 Exercices pratiques

## Exercice 1
Crée un tableau `$materiaux` avec :
- ciment → 8  
- sable → 6  
- gravier → 10  
et affiche le prix du ciment.

### ✅ Solution :
```php
$materiaux = ["ciment" => 8, "sable" => 6, "gravier" => 10];
echo $materiaux["ciment"];
```

## Exercice 2
Ajoute `"brique" => 12` au tableau `$materiaux`.
```php
$materiaux["brique"] = 12;
```

## Exercice 3
Change le prix du sable à 7 et affiche à nouveau le tableau.
```php
$materiaux["sable"] = 7;
print_r($materiaux);
```

## Exercice 4
Crée un tableau `$clients` :
- Dupont → "devis signé"
- Martin → "en attente"
- Durand → "terminé"
et affiche chaque client et son état.
```php
$clients = ["Dupont" => "devis signé", "Martin" => "en attente", "Durand" => "terminé"];
foreach ($clients as $nom => $etat) {
    echo "Client $nom : $etat<br>";
}
```

## Exercice 5
Ajoute un client `"Bernard" => "nouveau"` au tableau `$clients`.
```php
$clients["Bernard"] = "nouveau";
```

## Exercice 6
Crée un tableau `$outils` :
- truelle → "maçonnerie"
- scie → "béton cellulaire"
- cordeau → "traçage"
et affiche :  
"L’outil [nom] sert pour la [catégorie]."
```php
$outils = ["truelle" => "maçonnerie", "scie" => "béton cellulaire", "cordeau" => "traçage"];
foreach ($outils as $outil => $categorie) {
    echo "L’outil $outil sert pour la $categorie.<br>";
}
```

## Exercice 7
Compte combien d’éléments contient ton tableau `$outils`.
```php
echo "Nombre d’outils : " . count($outils);
```

## Exercice 8
Crée un tableau `$prix` :
- ciment → 8
- sable → 6
- gravier → 10  
et calcule la somme totale des prix.
```php
$prix = ["ciment" => 8, "sable" => 6, "gravier" => 10];
$total = 0;
foreach ($prix as $valeur) {
    $total += $valeur;
}
echo "Total : $total euros";
```

## Exercice 9
Crée un tableau `$stock` :
- briques → 120
- sacs de ciment → 15
- seaux → 8  
et affiche : "J’ai [nombre] [objet]."
```php
$stock = ["briques" => 120, "sacs de ciment" => 15, "seaux" => 8];
foreach ($stock as $objet => $quantite) {
    echo "J’ai $quantite $objet.<br>";
}
```

## Exercice 10
Crée un tableau `$chantier` :
- client → "Dupont"
- surface → 80
- prix_m2 → 40  
et affiche : "Le devis pour Dupont est de 3200 euros."
```php
$chantier = ["client" => "Dupont", "surface" => 80, "prix_m2" => 40];
$total = $chantier["surface"] * $chantier["prix_m2"];
echo "Le devis pour " . $chantier["client"] . " est de $total euros.";
```

---

## 🧱 Phrase à retenir

> Un **tableau associatif**, c’est comme une **caisse de chantier** :  
> chaque **boîte a un nom (clé)** et un **contenu (valeur)**.  
> Et grâce à **`foreach`**, tu peux **ouvrir toutes les boîtes** sans t’y perdre.
