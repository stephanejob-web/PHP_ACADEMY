# 🧱 Mini-Projet PHP – Créer un Calculateur de Devis de Chantier 👷‍♂️💰

---

## 👋 Introduction – C`est l`heure du VRAI chantier !

Bon, t`as vu les **variables**, les **conditions**, les **boucles**, les **tableaux**, les **fonctions**…
Maintenant tu te dis sûrement :
> "Chef, c`est bien beau tout ça, mais concrètement… on fait QUOI avec tout ce bazar ?" 🤔

Eh bien aujourd`hui, **on arrête de faire des exercices bidon**.
On va construire un **vrai outil de chantier** : un **calculateur de devis automatique** ! 💪

Et **rassure-toi** : je vais **tout t`expliquer pas à pas**, comme si j`étais à côté de toi sur le chantier.
Même le truc le plus bizarre que tu vas voir aujourd`hui : **le mélange HTML + PHP** (oui, ça fait mal à la tête au début 😅).

---

## 🎯 Ce qu`on va construire ensemble

Tu vas créer une **page web** qui permet de :
- ✅ Afficher un **catalogue de matériaux** (briques, ciment, sable…)
- ✅ Calculer **automatiquement le prix total** d`un chantier
- ✅ Appliquer des **réductions** si tu commandes beaucoup
- ✅ Afficher des **alertes** si le stock est bas
- ✅ Tout ça en **mélangeant HTML et PHP** (le bordel de ta vie, mais tu vas comprendre !)

---

## 🧰 Ce que tu vas réviser dans ce projet

| Concept appris | Comment on l`utilise |
|----------------|---------------------|
| **Variables** | Prix, quantités, totaux |
| **Conditions** | "Si stock < 10, alerte !" |
| **Boucle `foreach`** | Parcourir tous les matériaux |
| **Tableaux associatifs** | Détails de chaque matériau |
| **Fonctions** | Calculer, réduire, formater |
| **HTML + PHP** | Le grand mix (on va y aller doucement) |

💬 Bref, **TOUT ce que t`as appris** va servir ! C`est ton examen de passage, version chantier ! 🧱

---

## 🤯 Avant de commencer : le "bordel" HTML + PHP expliqué

Avant de coder, faut qu`on parle d`un truc qui fait **flipper tout le monde** au début :

> "Attends chef, je dois mélanger du HTML avec du PHP ?
> C`est quoi ce bazar ? On dirait un chantier où t`as mélangé le ciment avec la peinture !" 😱

**Respire.**
C`est **normal** que ça paraisse bizarre.
Voilà comment ça marche :

### 🧠 Le principe de base (simple comme bonjour)

Imagine que ton fichier `.php` c`est **un chantier**.

Sur ce chantier, il y a **deux équipes** :
1. **L`équipe HTML** 🧱 → Elle construit la structure de la page (les murs, les portes, les fenêtres)
2. **L`équipe PHP** ⚙️ → Elle fabrique les matériaux et fait les calculs

**Et devine quoi ?**
Ces deux équipes **travaillent en même temps sur le même chantier** !

Voici un exemple simple :

```php
<h1>Mon chantier</h1>

<?php
$nom = "Dupont";
echo "<p>Client : $nom</p>";
?>

<p>Merci de votre visite !</p>
```

**Ce qui se passe :**
1. HTML affiche le titre "Mon chantier"
2. **STOP !** PHP prend la main, calcule `$nom`, affiche le client
3. HTML reprend et affiche "Merci !"

💬 **En gros :**
- Quand tu vois `<?php`, **c`est PHP qui travaille**
- Quand tu vois du HTML normal, **c`est l`équipe structure qui bosse**
- Le `echo` de PHP **crache du HTML** pour que les deux équipes collaborent

**Alors oui, au début ça fait bizarre.**
On dirait qu`on change de langue toutes les 5 secondes 😅
Mais **c`est comme ça que PHP fonctionne** depuis toujours.
Et bonne nouvelle : **plus tu le fais, plus c`est naturel** ! 🧱

---

## 📋 Étape 1 – Créer le fichier HTML de base (SANS le CSS)

Allez, on commence **simple**.
On va créer une page HTML **toute bête**, sans fioritures.

**Pourquoi pas de CSS (de style) ?**
Parce qu`on veut que tu te concentres sur **le code PHP**, pas sur les couleurs et les jolis boutons.
Ton cerveau a déjà assez de boulot comme ça ! 😅

Crée un fichier appelé **`devis-chantier.php`** et tape ce code dedans :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Calculateur de Devis - Chantier Pro</title>
</head>
<body>

    <h1>🧱 Calculateur de Devis de Chantier</h1>
    <p>Ton assistant pour calculer le prix de tes matériaux !</p>

    <hr>

    <?php
    // 👉 C`est ici qu`on va mettre notre code PHP !
    ?>

</body>
</html>
```

### 💬 Ce que tu viens de faire :

✅ Tu as créé une **page HTML de base**
✅ Pas de CSS, pas de couleurs → **on se concentre sur le PHP**
✅ Tu as mis un bloc `<?php ?>` → c`est là qu`on va bosser

🧠 **Note importante :**
Le fichier s`appelle `.php` (pas `.html`).
Pourquoi ? Parce que ton serveur doit **exécuter le PHP avant d`afficher la page**.

---

## 🪣 Étape 2 – Créer le stock de matériaux (tableaux associatifs)

💡 **Petit rappel du Cours 06** : Les tableaux associatifs, c`est comme des fiches produits.
Si c`est un peu flou, va relire le **Cours 06 - Tableaux Associatifs** ! 😉

Maintenant, on va créer notre **catalogue de matériaux**.
C`est comme ton dépôt de chantier : chaque matériau a un nom, un prix, un stock…

**Remplace le commentaire PHP `// 👉` par ce code :**

```php
<?php

// 🧱 Notre stock de matériaux du dépôt
$materiaux = [
    [
        "nom" => "Brique rouge",
        "prix_unitaire" => 1.20,
        "stock" => 320,
        "quantite_commandee" => 150
    ],
    [
        "nom" => "Sac de ciment 25kg",
        "prix_unitaire" => 8.50,
        "stock" => 42,
        "quantite_commandee" => 30
    ],
    [
        "nom" => "Sac de sable",
        "prix_unitaire" => 6.00,
        "stock" => 68,
        "quantite_commandee" => 40
    ],
    [
        "nom" => "Parpaing 20x20x50",
        "prix_unitaire" => 1.80,
        "stock" => 8,  // ⚠️ Stock faible !
        "quantite_commandee" => 10
    ],
    [
        "nom" => "Niveau à bulle pro",
        "prix_unitaire" => 24.90,
        "stock" => 15,
        "quantite_commandee" => 2
    ]
];

?>
```

### 💬 Qu`est-ce qu`on vient de faire ?

On a créé un **tableau de tableaux associatifs** !
Chaque matériau a :
- 🏷️ Un **nom** → une variable de type texte (**Cours 01**, tu te souviens ?)
- 💶 Un **prix unitaire** → un nombre décimal (**Cours 01** aussi !)
- 📦 Un **stock disponible** → un nombre entier
- 🛒 Une **quantité commandée** → encore un nombre

C`est exactement comme dans un vrai **catalogue Point P** ! 🏗️

**Note :** Si tu regardes ce code et que tu te dis "Hein ? C`est quoi ces `=>` partout ?", va relire le **Cours 06 - Tableaux Associatifs**. Sérieusement, prends 5 minutes. Ça va tout éclairer ! 💡

---

## 🔧 Étape 3 – Créer les fonctions de calcul

💡 **Rappel du Cours 07** : Les fonctions, c`est comme tes outils de chantier.
Tu les crées **une fois**, et tu les réutilises **partout** ! 🔨

Maintenant, on va créer des **fonctions** pour faire les calculs.
Pourquoi ? Parce qu`on va calculer le prix de **5 matériaux différents**.
Plutôt que de réécrire 5 fois la même formule, on crée une fonction réutilisable ! 💪

**Si t`as oublié comment marche une fonction, relis vite le Cours 07 !** Sinon tu vas être perdu. 😅

**Ajoute ce code juste après ton tableau `$materiaux` :**

```php
// 💰 Fonction pour calculer le prix d un matériau
function calculerPrix($prix_unitaire, $quantite) {
    return $prix_unitaire * $quantite;
}

// 🎁 Fonction pour calculer une réduction
function appliquerReduction($prix_total, $quantite) {
    // Si tu commandes plus de 100 unités, tu as 10% de réduction
    if ($quantite >= 100) {
        return $prix_total * 0.10; // 10% de réduction
    }
    return 0; // Pas de réduction
}

// 💶 Fonction pour formater un prix (afficher avec le symbole euro)
function formaterPrix($montant) {
    return number_format($montant, 2, `,`, ` `) . " €";
}
```

### 💬 Explication :

1️⃣ **`calculerPrix()`** → Multiplie prix × quantité (opération simple du **Cours 01** !)

2️⃣ **`appliquerReduction()`** → Utilise une condition `if` (**Cours 02**, ça te dit quelque chose ?) pour donner -10% si quantité ≥ 100

3️⃣ **`formaterPrix()`** → Transforme `42.5` en `42,50 €` (plus joli à lire)

💬 **Si le `if` te fait bugger le cerveau**, retourne vite au **Cours 02 - Les Conditions**. Promis, ça prend 5 minutes et tout sera clair ! 😊

---

## 🤯 Étape 4 – Le moment critique : afficher avec HTML + PHP

**OK, c`est ici que ça va faire mal à la tête. 😅**

On va afficher tous les matériaux sur la page.
Et pour ça, on va **mélanger du PHP avec du HTML**.

**Prends ton temps, lis chaque ligne, et respire. On y va.**

**Ajoute ce code après tes fonctions :**

```php
// 🧱 Variable pour stocker le total général
$total_general = 0;

// 🔁 On parcourt tous les matériaux avec une boucle foreach
foreach ($materiaux as $materiau) {

    // ========== PARTIE PHP : ON CALCULE ==========

    // Calcul du prix pour ce matériau
    $prix = calculerPrix($materiau["prix_unitaire"], $materiau["quantite_commandee"]);

    // Calcul de la réduction éventuelle
    $reduction = appliquerReduction($prix, $materiau["quantite_commandee"]);

    // Prix final après réduction
    $prix_final = $prix - $reduction;

    // On ajoute au total général
    $total_general += $prix_final;


    // ========== PARTIE HTML : ON AFFICHE ==========

    // 👉 Attention : maintenant on va "cracher" du HTML avec PHP
    // On utilise "echo" pour dire à PHP : "affiche ça sur la page"

    echo `<h3>🧱 ` . $materiau["nom"] . `</h3>`;
    echo `<p><strong>Prix unitaire :</strong> ` . formaterPrix($materiau["prix_unitaire"]) . `</p>`;
    echo `<p><strong>Quantité commandée :</strong> ` . $materiau["quantite_commandee"] . `</p>`;
    echo `<p><strong>Stock disponible :</strong> ` . $materiau["stock"] . `</p>`;


    // ========== CONDITION : Alerte stock faible ==========

    // Si le stock est en dessous de 10, on affiche un message rouge
    if ($materiau["stock"] < 10) {
        echo `<p style="color: red;"><strong>⚠️ ATTENTION : Stock faible !</strong></p>`;
    }


    // ========== CONDITION : Afficher la réduction ==========

    // Si il y a une réduction, on affiche en vert
    if ($reduction > 0) {
        echo `<p style="color: green;"><strong>🎁 Réduction de -10% : -` . formaterPrix($reduction) . `</strong></p>`;
    }


    // Prix final de ce matériau
    echo "<p><strong>Prix total :</strong> " . formaterPrix($prix_final) . "</p>";

    // Petite ligne de séparation pour que ce soit plus clair
    echo "<hr>";
}
```

### 🤯 OK, on respire. Qu`est-ce qui vient de se passer ?

C`est **LE GROS MORCEAU** du projet.
Alors on va décomposer **ligne par ligne**.

---

### 🔍 Décryptage du code (pour les débutants)

#### 1️⃣ La boucle `foreach`

```php
foreach ($materiaux as $materiau) {
```

💬 **Ça veut dire :**
> "Pour chaque matériau dans mon catalogue, exécute le code suivant."

On va répéter tout le code **5 fois** (une fois par matériau).

📚 **Tu as déjà vu les boucles** au **Cours 03** (boucle `for`) et au **Cours 04** (boucle `while`).
Le `foreach`, c`est juste une **boucle spéciale pour les tableaux**. Super pratique ! 🔁

---

#### 2️⃣ Les calculs PHP (ça, tu connais déjà !)

```php
$prix = calculerPrix($materiau["prix_unitaire"], $materiau["quantite_commandee"]);
$reduction = appliquerReduction($prix, $materiau["quantite_commandee"]);
$prix_final = $prix - $reduction;
$total_general += $prix_final;
```

💬 **Ce qu`on fait :**
- On appelle la fonction `calculerPrix()` → **Cours 07** !
- On appelle la fonction `appliquerReduction()` → **Cours 07** encore !
- On fait des calculs avec des variables → **Cours 01** !
- On utilise `+=` pour additionner → **Cours 01** aussi !

**Classique. Facile. Rien de nouveau.** ✅
Si tu bloques ici, **c`est que t`as pas bien compris les cours précédents**. Pas de panique, retourne les lire ! 💪

---

#### 3️⃣ Le `echo` – cracher du HTML depuis PHP

**Maintenant attention, c`est là que ça devient bizarre.**

```php
echo `<h3>🧱 ` . $materiau["nom"] . `</h3>`;
```

💬 **Ça veut dire quoi ?**

> "PHP, affiche sur la page un titre `<h3>` avec le nom du matériau dedans."

**Le truc à comprendre :**
- `echo` = affiche quelque chose sur la page
- ``<h3>…</h3>`` = du code HTML **écrit comme du texte**
- Le point `.` sert à **coller des morceaux ensemble**

**Donc ce code PHP :**
```php
echo `<h3>🧱 ` . $materiau["nom"] . `</h3>`;
```

**Va produire ce HTML :**
```html
<h3>🧱 Brique rouge</h3>
```

💬 **En gros :**
PHP **fabrique du HTML** et l`envoie au navigateur.
Le navigateur affiche le HTML.

**C`est chelou au début, mais c`est comme ça que PHP fonctionne depuis 30 ans.** 😅

---

#### 4️⃣ Les conditions pour afficher des alertes

```php
if ($materiau["stock"] < 10) {
    echo `<p style="color: red;"><strong>⚠️ ATTENTION : Stock faible !</strong></p>`;
}
```

💬 **Ça veut dire :**

> "Si le stock est en dessous de 10, affiche un message rouge."

📚 **Tiens, un `if` !** On a vu ça au **Cours 02 - Les Conditions**.
Tu te souviens ? `if` = **si c`est vrai, fais ça**. Sinon, ignore.

**Encore une fois :**
On **calcule en PHP**, et on **affiche en HTML** avec `echo`.

💬 **Petit rappel rigolo :** Si tu confonds encore `if`, `else` et `elseif`, retourne au Cours 02 et relis la partie "Le mur de chantier". Ça va tout clarifier ! 😅

---

## 💰 Étape 5 – Afficher le total final

Maintenant qu`on a calculé tous les prix, on affiche le **total général** !

**Ajoute ce code à la fin (toujours dans le bloc PHP) :**

```php
// 💰 Affichage du total final
echo "<hr>";
echo `<h2 style="color: orange;">💰 TOTAL DU DEVIS : ` . formaterPrix($total_general) . `</h2>`;

?>
```

💬 Simple, non ? On affiche juste le total qu`on a calculé dans la boucle ! 😎

---

## 🎉 Étape 6 – Tester ton projet !

**Sauvegarde ton fichier** `devis-chantier.php` et ouvre-le dans ton navigateur.

🔥 **Tu devrais voir :**
- Tous tes matériaux affichés les uns après les autres
- Les prix calculés automatiquement
- Des alertes rouges pour les stocks faibles
- Des réductions vertes pour les grosses commandes
- Un total orange en bas

**Si ça marche pas ?** Vérifie :
- Que ton fichier s`appelle bien `.php` (pas `.html` !)
- Que tu as un serveur PHP qui tourne (XAMPP, MAMP, ou `php -S localhost:8000`)
- Qu`il n`y a pas de fautes de frappe

---

## 🧠 Récapitulatif – Ce que t`as appris (et où tu l`as vu)

### ✅ Variables → **Cours 01**
Tu as stocké des prix, des quantités, des totaux.
Tu te rappelles de la "table de chantier" ? C`est exactement ça ! 🧰

### ✅ Conditions (`if`) → **Cours 02**
Tu as affiché des alertes **si** le stock était faible.
Le fameux "S`il pleut, je reste à la maison" ! 🌧️

### ✅ Boucles (`for`, `while`, `foreach`) → **Cours 03 et 04**
Tu as parcouru tous les matériaux avec une boucle.
Tu te souviens des 50 briques à monter ? Bah là c`est pareil ! 🔁

### ✅ Tableaux associatifs → **Cours 06**
Chaque matériau avait plusieurs infos (nom, prix, stock…).
C`est comme les fiches produits de Point P ! 📋

### ✅ Fonctions → **Cours 07**
Tu as créé des fonctions réutilisables.
Tes outils de chantier que tu utilises encore et encore ! 🔨

### ✅ HTML + PHP (le fameux "bordel")
**C`est LE truc important d`aujourd`hui.**

Tu as appris à :
- Mettre du PHP dans un fichier HTML (`<?php ?>`)
- Utiliser `echo` pour afficher du HTML depuis PHP
- Mélanger les deux langages

**Et oui, au début c`est perturbant.**
Mais **plus tu le fais, plus c`est naturel** ! 🧱

---

💬 **Note importante :** Si tu sens que t`es un peu largué sur un concept, **retourne relire le cours correspondant**. Franchement. Prends 10 minutes. Ça va tout débloquer ! 💡

---

## 📝 Le code final complet

Si jamais tu veux vérifier ton code, voici **le fichier complet** :

<details><summary>📂 Clique ici pour voir le code final complet</summary>

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Calculateur de Devis - Chantier Pro</title>
</head>
<body>

    <h1>🧱 Calculateur de Devis de Chantier</h1>
    <p>Ton assistant pour calculer le prix de tes matériaux !</p>

    <hr>

    <?php

    // 🧱 Notre stock de matériaux du dépôt
    $materiaux = [
        [
            "nom" => "Brique rouge",
            "prix_unitaire" => 1.20,
            "stock" => 320,
            "quantite_commandee" => 150
        ],
        [
            "nom" => "Sac de ciment 25kg",
            "prix_unitaire" => 8.50,
            "stock" => 42,
            "quantite_commandee" => 30
        ],
        [
            "nom" => "Sac de sable",
            "prix_unitaire" => 6.00,
            "stock" => 68,
            "quantite_commandee" => 40
        ],
        [
            "nom" => "Parpaing 20x20x50",
            "prix_unitaire" => 1.80,
            "stock" => 8,
            "quantite_commandee" => 10
        ],
        [
            "nom" => "Niveau à bulle pro",
            "prix_unitaire" => 24.90,
            "stock" => 15,
            "quantite_commandee" => 2
        ]
    ];

    // 💰 Fonction pour calculer le prix d'un matériau
    function calculerPrix(float $prix_unitaire, int $quantite): float {
        return $prix_unitaire * $quantite;
    }

    // 🎁 Fonction pour calculer une réduction
    // Retourne le montant de la réduction (positif)
    function appliquerReduction(float $prix_total, int $quantite): float {
        if ($quantite >= 100) {
            return $prix_total * 0.10; // 10% de réduction
        }
        return 0.0;
    }

    // 💶 Fonction pour formater un prix (ex: 1 234,56 €)
    function formaterPrix(float $montant): string {
        return number_format($montant, 2, ',', ' ') . " €";
    }

    // 🧱 Variable pour stocker le total général
    $total_general = 0.0;

    // 🔁 On parcourt tous les matériaux
    foreach ($materiaux as $materiau) {

        // Récupération en variables locales pour lisibilité
        $nom = $materiau["nom"];
        $prix_unitaire = (float) $materiau["prix_unitaire"];
        $stock = (int) $materiau["stock"];
        $quantite = (int) $materiau["quantite_commandee"];

        // Calculs
        $prix = calculerPrix($prix_unitaire, $quantite);
        $reduction = appliquerReduction($prix, $quantite);
        $prix_final = $prix - $reduction;
        $total_general += $prix_final;

        // Affichage (avec htmlspecialchars pour sécurité)
        echo '<h3>🧱 ' . htmlspecialchars($nom, ENT_QUOTES, 'UTF-8') . '</h3>';
        echo '<p><strong>Prix unitaire :</strong> ' . formaterPrix($prix_unitaire) . '</p>';
        echo '<p><strong>Quantité commandée :</strong> ' . $quantite . '</p>';
        echo '<p><strong>Stock disponible :</strong> ' . $stock . '</p>';

        // Alerte si commande > stock
        if ($quantite > $stock) {
            echo '<p style="color: red;"><strong>⚠️ ATTENTION : Quantité commandée (' . $quantite . ') supérieure au stock disponible (' . $stock . ') !</strong></p>';
        }

        // Alerte stock faible
        if ($stock < 10) {
            echo '<p style="color: orange;"><strong>⚠️ ATTENTION : Stock faible !</strong></p>';
        }

        // Afficher la réduction si applicable
        if ($reduction > 0.0) {
            echo '<p style="color: green;"><strong>🎁 Réduction de -10% : -' . formaterPrix($reduction) . '</strong></p>';
        }

        echo '<p><strong>Prix total :</strong> ' . formaterPrix($prix_final) . '</p>';
        echo "<hr>";
    }

    // Total final
    echo '<h2 style="color: orange;">💰 TOTAL DU DEVIS : ' . formaterPrix($total_general) . '</h2>';

    ?>

</body>
</html>


</body>
</html>
```

</details>

---

## 💬 Le mot du formateur

Bravo champion ! 🎉
Tu viens de créer ton **premier vrai projet PHP** !

**Le truc le plus important que t`as appris aujourd`hui ?**
**Le mélange HTML + PHP.**

Oui, c`est perturbant au début.
Oui, on dirait qu`on mélange du français avec du chinois.
Oui, ça fait mal à la tête. 😅

**Mais devine quoi ?**
C`est comme ça que **TOUS les sites web dynamiques fonctionnent** depuis 30 ans.
WordPress, Facebook, Amazon… **tous font ça**.

Alors **relis ce cours 2 ou 3 fois**, tape le code toi-même, teste des variantes…
Et un jour, tu verras, tu le feras **les yeux fermés** ! 😎

---

## 🚀 Pour aller plus loin (bonus)

### 🔥 Défi 1 – Ajoute un nouveau matériau
Rajoute un produit dans le tableau `$materiaux` :
```php
[
    "nom" => "Truelle professionnelle",
    "prix_unitaire" => 15.50,
    "stock" => 25,
    "quantite_commandee" => 3
]
```

### 🔥 Défi 2 – Change la réduction
Modifie la fonction pour donner **15% de réduction** à partir de **50 unités**.

### 🔥 Défi 3 – Ajoute une alerte "rupture de stock"
Si le stock est à **0**, affiche un message rouge :
> "❌ RUPTURE DE STOCK"

---

## 🎬 Prochaine étape

Maintenant que t`as compris comment créer un projet complet, tu es **prêt pour la POO** (Programmation Orientée Objet) !
Là-bas, tu vas apprendre à **organiser ton code encore mieux** ! 🏗️

Allez, à la prochaine champion ! 🧱🔥

---

**👷‍♂️ Tu es maintenant un apprenti maçon du code PHP !**
