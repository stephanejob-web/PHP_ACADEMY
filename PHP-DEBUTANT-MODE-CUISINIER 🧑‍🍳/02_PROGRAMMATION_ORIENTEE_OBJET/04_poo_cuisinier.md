# 👨‍🍳 POO pour Cuisiniers - Cours 04 : Le constructeur (la méthode du CHEF RAPIDE !)

## 🍳 Salut le chef !

Jusqu'à maintenant, pour créer une recette, tu faisais comment ?

```php
$gateau = new Recette();
$gateau->nom = "Gâteau au chocolat";
$gateau->temps_cuisson = 35;
$gateau->temperature = 180;
$gateau->portions = 8;
$gateau->calories_par_portion = 350;
```

**6 lignes** pour créer UNE SEULE recette ! 😤

Et si tu dois créer 10 recettes ? **60 lignes !**

C'est **LOURD**, non ?

Aujourd'hui, on va voir comment faire **TOUT ÇA en UNE SEULE LIGNE** ! 🔥

---

## 🤔 Le constructeur, c'est quoi ?

Le **constructeur**, c'est une méthode **spéciale** qui s'exécute **AUTOMATIQUEMENT** quand tu crées une recette.

**Imagine :**

❌ **Avant (méthode longue)** :
- "Hé chef, je prépare un gâteau."
- "OK, il s'appelle comment ?"
- "Gâteau au chocolat."
- "Temps de cuisson ?"
- "35 minutes."
- "Température ?"
- "180°C."
- "Portions ?"
- "8 personnes."

**UNE CONVERSATION INTERMINABLE !** 😴

---

✅ **Avec le constructeur (méthode rapide)** :
- "Hé chef, je prépare un gâteau au chocolat : 35 min, 180°C, 8 portions."
- "OK, c'est noté !"

**TOUT EN UNE FOIS !** 💪

---

## 🔨 Code SANS constructeur (la galère)

Rappel de ce que tu faisais avant :

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}

// Je crée la recette
$gateau_chocolat = new Recette();

// Je DOIS remplir les infos une par une
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;

echo "Recette : " . $gateau_chocolat->nom;
?>
```

**5 lignes** juste pour créer une recette ! 😫

Et si tu oublies une ligne ? **Ta recette est incomplète !**

---

## ✅ Code AVEC constructeur (la classe !)

Regarde maintenant :

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;

    // LE CONSTRUCTEUR
    public function __construct($n, $t, $temp, $p) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
    }
}

// Je crée la recette EN UNE LIGNE !
$gateau_chocolat = new Recette("Gâteau au chocolat", 35, 180, 8);

echo "Recette : " . $gateau_chocolat->nom;
?>
```

**UNE SEULE LIGNE** pour créer la recette avec TOUTES ses infos ! 🎉

---

## 🔍 Décortiquons le constructeur (ligne par ligne)

### La déclaration du constructeur :

```php
public function __construct($n, $t, $temp, $p) {
```

**`public`** → Visible par tout le monde (comme d'habitude)

**`function`** → C'est une méthode (tu connais)

**`__construct`** → **LE NOM MAGIQUE !**  
⚠️ **ATTENTION** : Ce nom est **OBLIGATOIRE** et ne change JAMAIS !  
C'est **TOUJOURS** `__construct` (avec **2 underscores** au début !)

**`($n, $t, $temp, $p)`** → Les **paramètres** que tu vas donner lors de la création
- `$n` = nom
- `$t` = temps de cuisson
- `$temp` = température
- `$p` = portions

*Tu peux les nommer comme tu veux : `$nom`, `$temps`, `$temperature`... Mais des noms courts, c'est plus rapide à écrire !*

**`{`** → Le début du constructeur

---

### Le code à l'intérieur :

```php
    $this->nom = $n;
    $this->temps_cuisson = $t;
    $this->temperature = $temp;
    $this->portions = $p;
```

**`$this->nom = $n;`** → Je mets la valeur reçue (`$n`) dans MA propriété `nom`

**`$this->temps_cuisson = $t;`** → Je mets la valeur reçue (`$t`) dans MA propriété `temps_cuisson`

**`$this->temperature = $temp;`** → Je mets la valeur reçue (`$temp`) dans MA propriété `temperature`

**`$this->portions = $p;`** → Je mets la valeur reçue (`$p`) dans MA propriété `portions`

**En gros :** Je **transfère** les valeurs reçues dans les propriétés de la recette.

---

### La fin du constructeur :

```php
}
```

**`}`** → La fin du constructeur

---

## 🎯 Comment ça marche quand tu crées la recette ?

```php
$gateau_chocolat = new Recette("Gâteau au chocolat", 35, 180, 8);
```

**Voici ce qui se passe dans l'ordre :**

1. PHP crée une nouvelle recette `Recette`
2. PHP voit que tu as donné 4 valeurs : `"Gâteau au chocolat"`, `35`, `180`, `8`
3. PHP appelle **AUTOMATIQUEMENT** le constructeur
4. Le constructeur reçoit les valeurs :
   - `$n` = "Gâteau au chocolat"
   - `$t` = 35
   - `$temp` = 180
   - `$p` = 8
5. Le constructeur remplit les propriétés :
   - `$this->nom` = "Gâteau au chocolat"
   - `$this->temps_cuisson` = 35
   - `$this->temperature` = 180
   - `$this->portions` = 8
6. La recette est créée **COMPLÈTEMENT REMPLIE** !

**MAGIE !** ✨

---

## 🔥 Comparaison AVANT / APRÈS

### ❌ AVANT (sans constructeur) :

```php
$recette1 = new Recette();
$recette1->nom = "Gâteau au chocolat";
$recette1->temps_cuisson = 35;
$recette1->temperature = 180;
$recette1->portions = 8;

$recette2 = new Recette();
$recette2->nom = "Tarte aux pommes";
$recette2->temps_cuisson = 40;
$recette2->temperature = 190;
$recette2->portions = 6;

$recette3 = new Recette();
$recette3->nom = "Cookies";
$recette3->temps_cuisson = 12;
$recette3->temperature = 175;
$recette3->portions = 20;
```

**15 lignes** pour créer 3 recettes ! 😱

---

### ✅ APRÈS (avec constructeur) :

```php
$recette1 = new Recette("Gâteau au chocolat", 35, 180, 8);
$recette2 = new Recette("Tarte aux pommes", 40, 190, 6);
$recette3 = new Recette("Cookies", 12, 175, 20);
```

**3 lignes** pour créer 3 recettes ! 🎉

**C'est 5 fois plus court !**

---

## 💡 Exemple complet avec méthodes

On peut combiner le constructeur avec les méthodes qu'on a vues au cours 03 !

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $calories_par_portion;

    // CONSTRUCTEUR
    public function __construct($n, $t, $temp, $p, $cal) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
        $this->calories_par_portion = $cal;
    }

    // MÉTHODE
    public function calculerCaloriesTotales() {
        return $this->portions * $this->calories_par_portion;
    }

    // MÉTHODE
    public function afficherFiche() {
        echo "===== FICHE RECETTE =====<br>";
        echo "Nom : " . $this->nom . "<br>";
        echo "Temps : " . $this->temps_cuisson . " minutes<br>";
        echo "Température : " . $this->temperature . "°C<br>";
        echo "Portions : " . $this->portions . " personnes<br>";
        echo "Calories/portion : " . $this->calories_par_portion . " kcal<br>";
        echo "Calories totales : " . $this->calculerCaloriesTotales() . " kcal<br>";
        echo "=========================<br><br>";
    }
}

// Je crée 3 recettes en 3 lignes !
$gateau = new Recette("Gâteau au chocolat", 35, 180, 8, 350);
$tarte = new Recette("Tarte aux pommes", 40, 190, 6, 280);
$cookies = new Recette("Cookies", 12, 175, 20, 120);

// J'affiche les fiches
$gateau->afficherFiche();
$tarte->afficherFiche();
$cookies->afficherFiche();
?>
```

---

### 📺 Résultat :

```
===== FICHE RECETTE =====
Nom : Gâteau au chocolat
Temps : 35 minutes
Température : 180°C
Portions : 8 personnes
Calories/portion : 350 kcal
Calories totales : 2800 kcal
=========================

===== FICHE RECETTE =====
Nom : Tarte aux pommes
Temps : 40 minutes
Température : 190°C
Portions : 6 personnes
Calories/portion : 280 kcal
Calories totales : 1680 kcal
=========================

===== FICHE RECETTE =====
Nom : Cookies
Temps : 12 minutes
Température : 175°C
Portions : 20 personnes
Calories/portion : 120 kcal
Calories totales : 2400 kcal
=========================
```

**Regarde comme c'est propre et rapide !** 😎

---

## 🎨 Paramètres avec valeurs par DÉFAUT

Tu peux aussi donner des **valeurs par défaut** aux paramètres !

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
    public $difficulte;

    // Constructeur avec valeur par défaut
    public function __construct($n, $t, $temp, $p, $diff = "facile") {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
        $this->difficulte = $diff;
    }

    public function afficherInfo() {
        echo $this->nom . " (" . $this->difficulte . ") : ";
        echo $this->temps_cuisson . " min à " . $this->temperature . "°C<br>";
    }
}

// Avec difficulté spécifique
$recette1 = new Recette("Soufflé au fromage", 45, 200, 4, "difficile");

// Sans difficulté = facile par défaut
$recette2 = new Recette("Omelette", 5, 0, 2);

$recette1->afficherInfo();
$recette2->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Soufflé au fromage (difficile) : 45 min à 200°C
Omelette (facile) : 5 min à 0°C
```

**`$diff = "facile"`** dans les paramètres veut dire :  
*"Si je ne donne pas de difficulté, mets facile par défaut."*

---

## ⚠️ ERREURS FRÉQUENTES

### Erreur 1 : Oublier les 2 underscores

❌ **FAUX :**
```php
public function construct($n, $t, $temp, $p) {
```

✅ **JUSTE :**
```php
public function __construct($n, $t, $temp, $p) {
```

**Il faut TOUJOURS 2 underscores : `__construct`**

---

### Erreur 2 : Oublier de donner les paramètres

Si ton constructeur attend 4 paramètres, tu DOIS en donner 4 !

❌ **FAUX :**
```php
$gateau = new Recette(); // PHP va râler !
```

✅ **JUSTE :**
```php
$gateau = new Recette("Gâteau au chocolat", 35, 180, 8);
```

---

### Erreur 3 : Se tromper dans l'ordre

Les paramètres sont dans un **ordre précis** !

```php
public function __construct($nom, $temps, $temperature, $portions) {
```

❌ **FAUX :**
```php
$gateau = new Recette(35, "Gâteau", 8, 180); // Ordre incorrect !
```

✅ **JUSTE :**
```php
$gateau = new Recette("Gâteau", 35, 180, 8); // Bon ordre !
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_constructeur.php` et fais ceci :

### Instructions :

1. Crée une classe `Plat` avec :
   - Propriétés : `nom`, `type` (entrée/plat/dessert), `prix`, `temps_preparation`
   - Constructeur qui prend ces 4 valeurs
   - Méthode `calculerMarge()` qui retourne le prix × 0.3 (marge de 30%)
   - Méthode `afficherInfo()` qui affiche toutes les infos + la marge

2. Crée 3 plats :
   - Salade César : entrée, 8€, 15 min
   - Bœuf bourguignon : plat, 18€, 180 min
   - Tiramisu : dessert, 7€, 20 min

3. Affiche les infos des 3 plats

---

### Résultat attendu :

```
Plat : Salade César (entrée), prix 8€, préparation 15 min, marge 2.4€
Plat : Bœuf bourguignon (plat), prix 18€, préparation 180 min, marge 5.4€
Plat : Tiramisu (dessert), prix 7€, préparation 20 min, marge 2.1€
```

---

**Essaie de le faire toi-même avant de regarder la solution !**

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Plat {
    public $nom;
    public $type;
    public $prix;
    public $temps_preparation;

    public function __construct($n, $t, $p, $temps) {
        $this->nom = $n;
        $this->type = $t;
        $this->prix = $p;
        $this->temps_preparation = $temps;
    }

    public function calculerMarge() {
        return $this->prix * 0.3;
    }

    public function afficherInfo() {
        echo "Plat : " . $this->nom . " (" . $this->type . "), ";
        echo "prix " . $this->prix . "€, ";
        echo "préparation " . $this->temps_preparation . " min, ";
        echo "marge " . $this->calculerMarge() . "€<br>";
    }
}

$plat1 = new Plat("Salade César", "entrée", 8, 15);
$plat2 = new Plat("Bœuf bourguignon", "plat", 18, 180);
$plat3 = new Plat("Tiramisu", "dessert", 7, 20);

$plat1->afficherInfo();
$plat2->afficherInfo();
$plat3->afficherInfo();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Le constructeur s'appelle TOUJOURS `__construct`** (avec 2 underscores !)

✅ **Il s'exécute AUTOMATIQUEMENT** quand tu crées une recette

✅ **Il permet de créer une recette en 1 ligne** au lieu de 6

✅ **Tu donnes les valeurs directement** : `new Recette("Gâteau", 35, 180, 8)`

✅ **Tu peux mettre des valeurs par défaut** : `__construct($n, $t, $temp, $p, $diff = "facile")`

✅ **L'ordre des paramètres est important !**

---

## 📊 Récapitulatif

| Sans constructeur | Avec constructeur |
|-------------------|-------------------|
| `$recette = new Recette();` | `$recette = new Recette("Gâteau", 35, 180, 8);` |
| `$recette->nom = "Gâteau";` | ✨ Tout est déjà rempli ! |
| `$recette->temps_cuisson = 35;` | |
| `$recette->temperature = 180;` | |
| `$recette->portions = 8;` | |
| **= 5 lignes** | **= 1 ligne** |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **L'HÉRITAGE** !

**C'est quoi ?**

Créer des classes qui **héritent** d'autres classes !

**Exemple :**
- Tu as une classe `Recette`
- Tu crées une classe `Dessert` qui hérite de `Recette`
- `Dessert` a **TOUT** ce que `Recette` a, **PLUS** des trucs en plus !

C'est comme un apprenti cuisinier qui hérite des compétences de son chef, et qui ajoute ses propres spécialités ! 👨‍🍳👨‍🍳

**Tu vas adorer !** 🚀

---

Mais pour l'instant, **FAIS L'EXERCICE** !

Le constructeur est **SUPER IMPORTANT**. Tu vas l'utiliser **TOUT LE TEMPS** en POO.

---

**👨‍🍳 Bravo, tu progresses vraiment bien !**

*PS : Si tu as réussi l'exercice, tu mérites une pause. Va boire un café, tu l'as mérité ! ☕*