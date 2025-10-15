# 👨‍🍳 POO pour Cuisiniers - Cours 05 : L'héritage (l'apprenti hérite du chef !)

## 🍳 Salut le chef !

Aujourd'hui, on attaque un concept **SUPER PUISSANT** : **l'héritage** !

C'est un peu comme dans une vraie cuisine :
- Un **apprenti** hérite des compétences de son **chef**
- Mais il peut aussi apprendre **ses propres spécialités** en plus !

En POO, c'est pareil ! 💪

---

## 🤔 L'héritage, c'est quoi ?

Imagine que tu as créé une classe `Recette` qui marche super bien.

Maintenant, tu veux créer une classe `Dessert` (une recette spécialisée pour les desserts).

Un dessert, c'est quoi ? **C'est une recette... MAIS EN MIEUX !**

Il a :
- ✅ Tout ce qu'une recette normale a (nom, temps, température, portions...)
- ✅ **PLUS** des trucs en plus (quantité de sucre, type de garniture...)

**Plutôt que de TOUT réécrire**, tu peux dire :

> *"Dessert, tu hérites de Recette, et tu ajoutes juste ce qui te manque !"*

**C'est ça l'héritage !** ✨

---

## 🍽️ Exemple concret en cuisine

### Classe de base : Recette

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;

    public function __construct($n, $t, $temp, $p) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
    }

    public function calculerTempsTotal() {
        return $this->temps_cuisson;
    }

    public function afficherInfo() {
        echo "Recette : " . $this->nom . " (" . $this->temps_cuisson . " min, ";
        echo $this->temperature . "°C, " . $this->portions . " portions)<br>";
    }
}
?>
```

Bon, ça tu connais déjà ! C'est une recette classique.

---

### Classe enfant : Dessert (qui HÉRITE de Recette)

```php
<?php
class Dessert extends Recette {
    public $sucre_grammes;
    public $type_garniture;

    public function __construct($n, $t, $temp, $p, $sucre, $garn) {
        // J'appelle le constructeur du parent
        parent::__construct($n, $t, $temp, $p);
        
        // J'ajoute mes propres propriétés
        $this->sucre_grammes = $sucre;
        $this->type_garniture = $garn;
    }

    public function afficherFicheComplete() {
        echo "=== FICHE DESSERT ===<br>";
        echo "Nom : " . $this->nom . "<br>";
        echo "Temps : " . $this->temps_cuisson . " minutes<br>";
        echo "Température : " . $this->temperature . "°C<br>";
        echo "Portions : " . $this->portions . " personnes<br>";
        echo "Sucre : " . $this->sucre_grammes . "g<br>";
        echo "Garniture : " . $this->type_garniture . "<br>";
        echo "=====================<br><br>";
    }
}

// Utilisation
$recette_simple = new Recette("Omelette", 5, 0, 2);
$recette_simple->afficherInfo();

$mon_dessert = new Dessert("Gâteau au chocolat", 35, 180, 8, 200, "ganache chocolat");
$mon_dessert->afficherFicheComplete();
?>
```

---

### 📺 Résultat :

```
Recette : Omelette (5 min, 0°C, 2 portions)
=== FICHE DESSERT ===
Nom : Gâteau au chocolat
Temps : 35 minutes
Température : 180°C
Portions : 8 personnes
Sucre : 200g
Garniture : ganache chocolat
=====================
```

**Regarde !** Le `Dessert` peut utiliser `calculerTempsTotal()` alors qu'on ne l'a **PAS** réécrit !

**Il l'a hérité de son parent `Recette` !** 🎉

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la classe enfant :

```php
class Dessert extends Recette {
```

**`class Dessert`** → Je crée une nouvelle classe qui s'appelle `Dessert`

**`extends`** → **LE MOT MAGIQUE !** Ça veut dire **"hérite de"**

**`Recette`** → Le nom de la classe **parent** (celle dont on hérite)

**Traduction :** *"La classe Dessert hérite de la classe Recette"*

---

### Les nouvelles propriétés :

```php
    public $sucre_grammes;
    public $type_garniture;
```

Ce sont des propriétés **EN PLUS** de celles héritées.

`Dessert` a maintenant :
- ✅ `$nom` (hérité)
- ✅ `$temps_cuisson` (hérité)
- ✅ `$temperature` (hérité)
- ✅ `$portions` (hérité)
- ✅ `$sucre_grammes` (nouveau !)
- ✅ `$type_garniture` (nouveau !)

---

### Le constructeur de l'enfant :

```php
    public function __construct($n, $t, $temp, $p, $sucre, $garn) {
        parent::__construct($n, $t, $temp, $p);
        
        $this->sucre_grammes = $sucre;
        $this->type_garniture = $garn;
    }
```

**`parent::__construct($n, $t, $temp, $p);`** → **SUPER IMPORTANT !**

**`parent::`** veut dire : *"Appelle le constructeur de mon PARENT"*

Ça permet de remplir les propriétés héritées (nom, temps, température, portions).

Ensuite, on remplit nos **propres** propriétés (sucre, garniture).

---

## 🧠 Schéma de l'héritage

```
        Recette (classe PARENT)
         |
         | hérite avec "extends"
         |
         v
    Dessert (classe ENFANT)
```

**Dessert** a :
- Tout ce que `Recette` a
- PLUS ses propres trucs

---

## 💪 Ce que l'enfant peut faire

### 1️⃣ Utiliser les méthodes du parent

```php
$mon_dessert = new Dessert("Tarte aux pommes", 40, 190, 6, 150, "crème chantilly");

// calculerTempsTotal() vient du parent !
echo $mon_dessert->calculerTempsTotal(); // 40
```

**Même si on n'a PAS écrit `calculerTempsTotal()` dans `Dessert`, ça marche !**

Parce qu'il l'a **hérité** ! ✨

---

### 2️⃣ Ajouter ses propres méthodes

```php
class Dessert extends Recette {
    // ... propriétés et constructeur ...

    // Nouvelle méthode spécifique aux desserts
    public function estSucre() {
        if ($this->sucre_grammes > 150) {
            echo "⚠️ Attention : Dessert très sucré !<br>";
        } else {
            echo "✅ Dessert modérément sucré.<br>";
        }
    }
}

$dessert = new Dessert("Mousse au chocolat", 0, 4, 6, 180, "copeaux chocolat");
$dessert->estSucre(); // ⚠️ Attention : Dessert très sucré !
```

---

### 3️⃣ Modifier (surcharger) une méthode du parent

Tu peux **RÉÉCRIRE** une méthode du parent pour l'adapter.

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;

    public function __construct($n, $t, $temp, $p) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
    }

    public function afficherInfo() {
        echo "Recette simple : " . $this->nom . "<br>";
    }
}

class Dessert extends Recette {
    public $sucre_grammes;
    public $type_garniture;

    public function __construct($n, $t, $temp, $p, $sucre, $garn) {
        parent::__construct($n, $t, $temp, $p);
        $this->sucre_grammes = $sucre;
        $this->type_garniture = $garn;
    }

    // Je RÉÉCRIS la méthode afficherInfo()
    public function afficherInfo() {
        echo "DESSERT : " . $this->nom . " avec " . $this->type_garniture;
        echo " (" . $this->sucre_grammes . "g de sucre)<br>";
    }
}

$recette1 = new Recette("Omelette", 5, 0, 2);
$recette1->afficherInfo();

$recette2 = new Dessert("Tarte citron", 35, 180, 8, 120, "meringue");
$recette2->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Recette simple : Omelette
DESSERT : Tarte citron avec meringue (120g de sucre)
```

**Même nom de méthode, mais comportement différent !**

C'est ce qu'on appelle la **surcharge** (ou **override** en anglais).

---

## 🔥 Exemple complet avec plusieurs types de recettes

Tu peux même avoir des **héritages multiples** !

```php
<?php
// Niveau 1 : Classe de base
class Recette {
    public $nom;
    public $temps_cuisson;
    public $portions;

    public function __construct($n, $t, $p) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->portions = $p;
    }

    public function afficherResume() {
        echo $this->nom . " (" . $this->portions . " portions)<br>";
    }
}

// Niveau 2 : Dessert hérite de Recette
class Dessert extends Recette {
    public $sucre_grammes;

    public function __construct($n, $t, $p, $sucre) {
        parent::__construct($n, $t, $p);
        $this->sucre_grammes = $sucre;
    }
}

// Niveau 2 : PlatPrincipal hérite aussi de Recette
class PlatPrincipal extends Recette {
    public $type_viande;
    public $accompagnement;

    public function __construct($n, $t, $p, $viande, $acc) {
        parent::__construct($n, $t, $p);
        $this->type_viande = $viande;
        $this->accompagnement = $acc;
    }

    public function afficherMenu() {
        echo "Plat : " . $this->nom . " - Viande : " . $this->type_viande;
        echo ", Accompagnement : " . $this->accompagnement . "<br>";
    }
}

$dessert = new Dessert("Tiramisu", 20, 6, 100);
$dessert->afficherResume();

$plat = new PlatPrincipal("Poulet rôti", 90, 4, "poulet", "légumes grillés");
$plat->afficherMenu();
?>
```

---

### 📺 Résultat :

```
Tiramisu (6 portions)
Plat : Poulet rôti - Viande : poulet, Accompagnement : légumes grillés
```

**Deux classes différentes héritent de `Recette` !**

C'est comme une famille : le chef → le pâtissier ET le rôtisseur ! 👨‍🍳👨‍🍳

---

## ⚠️ Ce qu'il faut retenir sur `parent::`

**`parent::`** permet d'appeler une méthode du parent.

### Utilisation la plus fréquente : dans le constructeur

```php
public function __construct($n, $t, $temp, $p, $sucre, $garn) {
    parent::__construct($n, $t, $temp, $p); // J'appelle le constructeur du parent
    $this->sucre_grammes = $sucre;
    $this->type_garniture = $garn;
}
```

**Pourquoi c'est important ?**

Le parent a déjà du code pour initialiser `nom`, `temps_cuisson`, `temperature`, `portions`.  
**Plutôt que de TOUT réécrire**, tu appelles le parent et tu complètes !

---

### Autre utilisation : appeler une méthode du parent

```php
class Dessert extends Recette {
    public function afficherInfo() {
        parent::afficherInfo(); // J'appelle la méthode du parent
        echo "Et en plus, " . $this->sucre_grammes . "g de sucre !<br>";
    }
}
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_heritage.php` et fais ceci :

### Instructions :

1. Crée une classe `Boisson` avec :
   - Propriétés : `nom`, `volume_ml`, `prix`
   - Constructeur
   - Méthode `afficherInfo()` qui affiche nom, volume et prix

2. Crée une classe `BoissonChaude` qui hérite de `Boisson` avec :
   - Propriété supplémentaire : `temperature_ideale` (en °C)
   - Constructeur qui utilise `parent::`
   - Méthode `afficherInfoComplete()` qui affiche tout

3. Crée une boisson chaude : Cappuccino, 250ml, 4.50€, température idéale 75°C

4. Affiche ses infos complètes

---

### Résultat attendu :

```
Boisson : Cappuccino
Volume : 250ml
Prix : 4.5€
Température idéale : 75°C
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Boisson {
    public $nom;
    public $volume_ml;
    public $prix;

    public function __construct($n, $v, $p) {
        $this->nom = $n;
        $this->volume_ml = $v;
        $this->prix = $p;
    }

    public function afficherInfo() {
        echo "Boisson : " . $this->nom . "<br>";
        echo "Volume : " . $this->volume_ml . "ml<br>";
        echo "Prix : " . $this->prix . "€<br>";
    }
}

class BoissonChaude extends Boisson {
    public $temperature_ideale;

    public function __construct($n, $v, $p, $temp) {
        parent::__construct($n, $v, $p);
        $this->temperature_ideale = $temp;
    }

    public function afficherInfoComplete() {
        $this->afficherInfo();
        echo "Température idéale : " . $this->temperature_ideale . "°C<br>";
    }
}

$cappuccino = new BoissonChaude("Cappuccino", 250, 4.50, 75);
$cappuccino->afficherInfoComplete();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`extends`** → Mot magique pour hériter d'une classe

✅ **La classe enfant a TOUT ce que le parent a + ses propres trucs**

✅ **`parent::`** → Appeler une méthode du parent

✅ **`parent::__construct()`** → Utiliser le constructeur du parent

✅ **Tu peux réécrire (surcharger) une méthode du parent**

✅ **L'héritage évite de dupliquer du code**

---

## 📊 Schéma récapitulatif

```
Recette
├── nom
├── temps_cuisson
├── temperature
├── portions
├── __construct()
├── calculerTempsTotal()
└── afficherInfo()

Dessert (extends Recette)
├── nom (hérité)
├── temps_cuisson (hérité)
├── temperature (hérité)
├── portions (hérité)
├── sucre_grammes (nouveau)
├── type_garniture (nouveau)
├── __construct() (surchargé)
├── calculerTempsTotal() (hérité)
├── afficherInfo() (peut être surchargé)
└── estSucre() (nouveau)
```

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **PUBLIC, PRIVATE, PROTECTED** !

**C'est quoi ?**

Comment **PROTÉGER** les propriétés de tes classes !

Parfois, tu ne veux PAS que tout le monde puisse modifier directement une propriété.

Par exemple :
- Une recette ne peut PAS avoir un temps de cuisson négatif !
- On doit **contrôler** ce qu'on met dedans !

Tu vas apprendre les **GETTERS** et **SETTERS** pour contrôler l'accès aux propriétés ! 🔒

---

Mais pour l'instant, **FAIS L'EXERCICE** !

L'héritage est un concept **fondamental** en POO. Tu vas l'utiliser **tout le temps** !

---

**👨‍🍳 Bravo, tu maîtrises de mieux en mieux la POO !**

*PS : L'héritage, c'est comme les recettes de famille : on garde le meilleur des anciens et on ajoute sa touche personnelle ! 🍽️*