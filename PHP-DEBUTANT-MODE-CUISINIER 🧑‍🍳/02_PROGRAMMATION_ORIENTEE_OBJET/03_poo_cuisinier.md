# 👨‍🍳 POO pour Cuisiniers - Cours 03 : Les méthodes (ta recette devient INTELLIGENTE !)

## 🍳 Salut le chef !

Dans les cours précédents, tu as appris à :
- Créer une **fiche recette** (classe)
- Préparer des **plats** (objets)
- Leur donner des **informations** (propriétés)

Mais jusqu'ici, ta recette, elle fait quoi ? **Elle reste là comme un bout de papier !** 😄

Aujourd'hui, on va lui apprendre à **FAIRE DES CHOSES** !

---

## 🤔 Les méthodes, c'est quoi exactement ?

Jusqu'à maintenant, tu as appris les **PROPRIÉTÉS**.

**Les PROPRIÉTÉS** = Ce que la recette **EST**

Exemple : une recette **A** un nom, **A** un temps de cuisson, **A** une température...

---

Maintenant, on va voir les **MÉTHODES**.

**Les MÉTHODES** = Ce que la recette **FAIT**

Exemple : une recette **CALCULE** ses calories, **AJUSTE** ses portions, **AFFICHE** sa fiche...

---

### Comparaison simple :

**Dans une cuisine :**

- **Propriété :** "Cette recette a 8 portions" → **C'EST une caractéristique**
- **Méthode :** "Calcule combien de calories dans cette recette" → **C'EST une action**

---

**Une recette avec des méthodes, c'est une recette qui peut TRAVAILLER TOUTE SEULE !**

Plus besoin de calculer les calories toi-même : la recette le fait !  
Plus besoin d'ajuster les portions à la main : la recette s'ajuste toute seule !

**Ta recette devient comme un robot de cuisine autonome !** 💪

---

## 🔨 Exemple 1 : La recette calcule ses calories

Dans une cuisine, pour calculer les calories d'une recette, tu fais comment ?

**nombre d'ingrédients × calories par ingrédient = calories totales**

Maintenant, on va apprendre à la recette à **faire ce calcul ELLE-MÊME** !

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $calories_par_portion;

    // MÉTHODE : calculer les calories totales
    public function calculerCaloriesTotales() {
        return $this->portions * $this->calories_par_portion;
    }
}

$gateau_chocolat = new Recette();
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;
$gateau_chocolat->calories_par_portion = 350;

// Je demande à la recette de calculer ses calories
$calories_totales = $gateau_chocolat->calculerCaloriesTotales();

echo "Calories totales du " . $gateau_chocolat->nom . " : " . $calories_totales . " kcal";
?>
```

---

### 📺 Résultat dans le navigateur :

```
Calories totales du Gâteau au chocolat : 2800 kcal
```

**LA RECETTE A CALCULÉ TOUTE SEULE !** 💥

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la méthode :

```php
public function calculerCaloriesTotales() {
```

**`public`** → La méthode est **visible par tout le monde** (comme les propriétés `public`)

**`function`** → Le mot magique pour dire **"je crée une action"**

**`calculerCaloriesTotales`** → Le **nom** de l'action  
*Tu peux l'appeler comme tu veux : `calculer()`, `getCalories()`, `calories()`...*  
*Mais choisis un nom qui décrit bien ce que fait la méthode !*

**`()`** → Les **parenthèses** sont obligatoires après le nom  
*Pour l'instant, on met rien dedans. On verra pourquoi plus tard.*

**`{`** → L'accolade ouvrante : le **début** de la méthode

---

### Le code à l'intérieur :

```php
    return $this->portions * $this->calories_par_portion;
```

**`return`** → Je **RENVOIE** le résultat du calcul

**`$this`** → **MOT SUPER IMPORTANT !**  
Ça veut dire **"MOI-MÊME"** (la recette qui exécute la méthode)

**`$this->portions`** → **MES** portions (celles de cette recette-ci, pas d'une autre recette)

**`$this->calories_par_portion`** → **MES** calories par portion (celles de cette recette-ci)

**`*`** → L'opérateur de multiplication (tu connais déjà)

---

### La fin de la méthode :

```php
}
```

**`}`** → L'accolade fermante : la **fin** de la méthode

---

## 🧠 Comprendre `$this` (TRÈS IMPORTANT !)

**`$this`** = **"MOI-MÊME"**

C'est le mot que la recette utilise pour parler d'elle-même.

---

### Exemple concret :

Imagine que tu as **3 recettes** dans ta cuisine :

1. Le gâteau au chocolat (8 portions)
2. La tarte aux pommes (6 portions)
3. Les cookies (20 portions)

Quand tu demandes au **gâteau au chocolat** de calculer SES calories :
- Il va utiliser **SES** portions (8)
- Pas les portions des cookies (20) !

**`$this->portions`** permet à la recette de dire : *"MES portions à moi"*

---

### Analogie :

C'est comme si tu disais :
- **"Ma recette"** → la recette que **TU** utilises
- **"Ta recette"** → la recette d'un autre

**`$this`** c'est comme dire **"MA"** ou **"MON"**.

---

## 🎯 Appeler une méthode

Pour **utiliser** une méthode, c'est simple :

```php
$calories_totales = $gateau_chocolat->calculerCaloriesTotales();
```

**`$gateau_chocolat`** → La recette sur laquelle tu veux agir

**`->`** → La flèche (tu connais déjà !)

**`calculerCaloriesTotales()`** → Le nom de la méthode + les parenthèses `()`

---

**Traduction en français :**

*"Hé, recette du gâteau au chocolat, calcule tes calories totales !"*

La recette fait le calcul et **renvoie** le résultat.

---

## 🎨 Exemple 2 : Ajuster les portions

Une recette peut s'adapter au nombre d'invités, non ?

Créons une méthode pour ça !

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $calories_par_portion;

    public function calculerCaloriesTotales() {
        return $this->portions * $this->calories_par_portion;
    }

    // MÉTHODE : ajuster les portions
    public function ajusterPortions($nouvelles_portions) {
        $anciennes_portions = $this->portions;
        $this->portions = $nouvelles_portions;
        echo "Portions ajustées de " . $anciennes_portions . " à " . $nouvelles_portions . " personnes !<br>";
    }
}

$gateau_chocolat = new Recette();
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;
$gateau_chocolat->calories_par_portion = 350;

echo "Portions actuelles : " . $gateau_chocolat->portions . "<br>";

// J'ajuste pour 12 personnes
$gateau_chocolat->ajusterPortions(12);

echo "Nouvelles portions : " . $gateau_chocolat->portions . "<br>";
?>
```

---

### 📺 Résultat :

```
Portions actuelles : 8
Portions ajustées de 8 à 12 personnes !
Nouvelles portions : 12
```

**La recette s'est ajustée toute seule !** 🎨

---

## 🔍 Nouvelle notion : les PARAMÈTRES

Regarde bien cette ligne :

```php
public function ajusterPortions($nouvelles_portions) {
```

**Tu vois le `$nouvelles_portions` entre les parenthèses ?**

Ça s'appelle un **PARAMÈTRE**.

---

### C'est quoi un paramètre ?

Un paramètre, c'est une **information que tu DOIS donner** à la méthode pour qu'elle fonctionne.

**Exemple :**

Pour ajuster une recette, tu DOIS dire **pour combien de personnes**, non ?

Tu peux pas juste dire *"Ajuste la recette"* sans préciser le nombre !

---

### Comment ça marche ?

```php
public function ajusterPortions($nouvelles_portions) {
    $anciennes_portions = $this->portions;
    $this->portions = $nouvelles_portions;
    echo "Portions ajustées de " . $anciennes_portions . " à " . $nouvelles_portions . " personnes !<br>";
}
```

**`$nouvelles_portions`** → C'est une variable qui **reçoit** l'info que tu donnes

**`$this->portions = $nouvelles_portions;`** → Je change **MES** portions avec les nouvelles portions reçues

---

### Quand tu appelles la méthode :

```php
$gateau_chocolat->ajusterPortions(12);
```

**`12`** → C'est la valeur que tu **passes** au paramètre `$nouvelles_portions`

La méthode reçoit `12` et l'utilise pour ajuster les portions.

---

## 📋 Exemple 3 : Afficher la fiche complète

On peut aussi créer une méthode qui **affiche toutes les infos** de la recette d'un coup !

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $calories_par_portion;

    public function calculerCaloriesTotales() {
        return $this->portions * $this->calories_par_portion;
    }

    public function ajusterPortions($nouvelles_portions) {
        $this->portions = $nouvelles_portions;
        echo "Portions ajustées à " . $nouvelles_portions . " personnes !<br>";
    }

    // MÉTHODE : afficher la fiche complète
    public function afficherFiche() {
        echo "===== FICHE RECETTE =====<br>";
        echo "Nom : " . $this->nom . "<br>";
        echo "Temps de cuisson : " . $this->temps_cuisson . " minutes<br>";
        echo "Température : " . $this->temperature . "°C<br>";
        echo "Portions : " . $this->portions . " personnes<br>";
        echo "Calories par portion : " . $this->calories_par_portion . " kcal<br>";
        echo "Calories totales : " . $this->calculerCaloriesTotales() . " kcal<br>";
        echo "=========================<br>";
    }
}

$gateau_chocolat = new Recette();
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;
$gateau_chocolat->calories_par_portion = 350;

// J'affiche la fiche
$gateau_chocolat->afficherFiche();
?>
```

---

### 📺 Résultat :

```
===== FICHE RECETTE =====
Nom : Gâteau au chocolat
Temps de cuisson : 35 minutes
Température : 180°C
Portions : 8 personnes
Calories par portion : 350 kcal
Calories totales : 2800 kcal
=========================
```

---

## 💡 Chose importante à remarquer :

Regarde cette ligne dans la méthode `afficherFiche()` :

```php
echo "Calories totales : " . $this->calculerCaloriesTotales() . " kcal<br>";
```

**Tu vois ?** Une méthode peut **appeler une autre méthode** !

Ici, `afficherFiche()` appelle `calculerCaloriesTotales()` pour récupérer les calories.

**C'est puissant !** Les méthodes peuvent travailler ensemble ! 💪

---

## 🔥 Méthode AVEC paramètre VS SANS paramètre

### Méthode SANS paramètre :

```php
public function calculerCaloriesTotales() {
    return $this->portions * $this->calories_par_portion;
}
```

**Appel :**
```php
$calories = $recette->calculerCaloriesTotales(); // Pas besoin de donner d'info
```

---

### Méthode AVEC paramètre :

```php
public function ajusterPortions($nouvelles_portions) {
    $this->portions = $nouvelles_portions;
}
```

**Appel :**
```php
$recette->ajusterPortions(12); // Je DOIS donner le nombre de portions
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_methodes.php` et fais ceci :

### Instructions :

1. Reprends ta classe `Recette` avec les propriétés : `nom`, `temps_cuisson`, `temperature`, `portions`
2. Ajoute une propriété `prix_par_portion` (le coût en euros par portion)
3. Ajoute une méthode `calculerPrixTotal()` qui calcule le prix total de la recette
   - Le prix total = **portions × prix_par_portion**
   - Retourne le prix total
4. Ajoute une méthode `afficherResume()` qui affiche :
   - Le nom
   - Le nombre de portions
   - Le prix total (utilise `calculerPrixTotal()`)
5. Crée une recette de **lasagnes** :
   - 6 portions
   - 3.50€ par portion
6. Affiche son résumé

---

### Résultat attendu :

```
Résumé : Lasagnes pour 6 personnes, prix total = 21€
```

---

**Aide :**

Pour calculer le prix :
```php
public function calculerPrixTotal() {
    return $this->portions * $this->prix_par_portion;
}
```

**Essaie de le faire toi-même avant de regarder la solution !**

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $prix_par_portion;

    public function calculerPrixTotal() {
        return $this->portions * $this->prix_par_portion;
    }

    public function afficherResume() {
        echo "Résumé : " . $this->nom . " pour " . $this->portions . " personnes, ";
        echo "prix total = " . $this->calculerPrixTotal() . "€<br>";
    }
}

$lasagnes = new Recette();
$lasagnes->nom = "Lasagnes";
$lasagnes->portions = 6;
$lasagnes->prix_par_portion = 3.50;

$lasagnes->afficherResume();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Propriété** = Ce que la recette **EST** (nom, temps, température...)

✅ **Méthode** = Ce que la recette **FAIT** (calculer, ajuster, afficher...)

✅ **`$this`** = **"MOI-MÊME"** (la recette qui parle d'elle)

✅ **Méthode sans paramètre** : `calculerCaloriesTotales()`

✅ **Méthode avec paramètre** : `ajusterPortions($nb)`

✅ **Une méthode peut appeler une autre méthode**

✅ **`return`** renvoie un résultat, **`echo`** affiche directement

---

## 📊 Tableau récapitulatif

| Type | Exemple | Utilisation |
|------|---------|-------------|
| **Propriété** | `$recette->nom` | Stocker une info |
| **Méthode sans paramètre** | `$recette->calculerCaloriesTotales()` | Action simple |
| **Méthode avec paramètre** | `$recette->ajusterPortions(12)` | Action avec info |
| **`$this`** | `$this->portions` | Parler de soi |
| **`return`** | `return $resultat;` | Renvoyer une valeur |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre le **CONSTRUCTEUR** !

**C'est quoi ?**

Une recette qui se crée **directement avec toutes ses infos** !

Plus besoin d'écrire 10 lignes pour créer une recette... tout se fait **en une seule ligne** ! 🚀

**Exemple de ce que tu pourras faire :**

```php
$gateau = new Recette("Gâteau chocolat", 35, 180, 8); // BOOM, recette créée !
```

Au lieu de :

```php
$gateau = new Recette();
$gateau->nom = "Gâteau chocolat";
$gateau->temps_cuisson = 35;
$gateau->temperature = 180;
$gateau->portions = 8;
```

**Ça va te changer la vie !** 😎

---

Mais pour l'instant, **FAIS L'EXERCICE !**

C'est en **pratiquant** qu'on devient bon. Pas en lisant. 💪

---

**👨‍🍳 Continue comme ça, tu deviens un vrai chef du code !**

*PS : Si tu galères sur l'exercice, relis le cours. La réponse est dedans ! 😊*