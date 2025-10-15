# 🧱 POO pour Maçons - Cours 05 : L'héritage (le fils hérite du père !)

## 👷 Salut le bâtisseur !

Aujourd'hui, on attaque un concept **SUPER PUISSANT** : **l'héritage** !

C'est un peu comme dans la vraie vie :
- Un **fils** hérite des compétences de son **père**
- Mais il peut aussi apprendre **ses propres compétences** en plus !

En POO, c'est pareil ! 💪

---

## 🤔 L'héritage, c'est quoi ?

Imagine que tu as créé une classe `Mur` qui marche super bien.

Maintenant, tu veux créer une classe `MurPorteur` (un mur qui supporte le poids de la maison).

Un mur porteur, c'est quoi ? **C'est un mur... MAIS EN MIEUX !**

Il a :
- ✅ Tout ce qu'un mur normal a (hauteur, largeur, matériau...)
- ✅ **PLUS** des trucs en plus (épaisseur, charge supportée...)

**Plutôt que de TOUT réécrire**, tu peux dire :

> *"MurPorteur, tu hérites de Mur, et tu ajoutes juste ce qui te manque !"*

**C'est ça l'héritage !** ✨

---

## 🏗️ Exemple concret sur un chantier

### Classe de base : Mur

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;

    public function __construct($h, $l, $m) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
    }

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    public function afficherInfo() {
        echo "Mur : " . $this->hauteur . "m × " . $this->largeur . "m en " . $this->materiaux . "<br>";
    }
}
?>
```

Bon, ça tu connais déjà ! C'est un mur classique.

---

### Classe enfant : MurPorteur (qui HÉRITE de Mur)

```php
<?php
class MurPorteur extends Mur {
    public $epaisseur;
    public $charge_max;

    public function __construct($h, $l, $m, $ep, $ch) {
        // J'appelle le constructeur du parent
        parent::__construct($h, $l, $m);
        
        // J'ajoute mes propres propriétés
        $this->epaisseur = $ep;
        $this->charge_max = $ch;
    }

    public function afficherInfoComplete() {
        echo "=== MUR PORTEUR ===<br>";
        echo "Dimensions : " . $this->hauteur . "m × " . $this->largeur . "m<br>";
        echo "Matériau : " . $this->materiaux . "<br>";
        echo "Épaisseur : " . $this->epaisseur . "m<br>";
        echo "Charge max : " . $this->charge_max . " tonnes<br>";
        echo "Surface : " . $this->calculerSurface() . " m²<br>";
        echo "===================<br><br>";
    }
}

// Utilisation
$mur_normal = new Mur(2.5, 4, "brique");
$mur_normal->afficherInfo();

$mur_porteur = new MurPorteur(3, 5, "béton armé", 0.3, 50);
$mur_porteur->afficherInfoComplete();
?>
```

---

### 📺 Résultat :

```
Mur : 2.5m × 4m en brique
=== MUR PORTEUR ===
Dimensions : 3m × 5m
Matériau : béton armé
Épaisseur : 0.3m
Charge max : 50 tonnes
Surface : 15 m²
===================
```

**Regarde !** Le `MurPorteur` peut utiliser `calculerSurface()` alors qu'on ne l'a **PAS** réécrit !

**Il l'a hérité de son parent `Mur` !** 🎉

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la classe enfant :

```php
class MurPorteur extends Mur {
```

**`class MurPorteur`** → Je crée une nouvelle classe qui s'appelle `MurPorteur`

**`extends`** → **LE MOT MAGIQUE !** Ça veut dire **"hérite de"**

**`Mur`** → Le nom de la classe **parent** (celle dont on hérite)

**Traduction :** *"La classe MurPorteur hérite de la classe Mur"*

---

### Les nouvelles propriétés :

```php
    public $epaisseur;
    public $charge_max;
```

Ce sont des propriétés **EN PLUS** de celles héritées.

`MurPorteur` a maintenant :
- ✅ `$hauteur` (hérité)
- ✅ `$largeur` (hérité)
- ✅ `$materiaux` (hérité)
- ✅ `$epaisseur` (nouveau !)
- ✅ `$charge_max` (nouveau !)

---

### Le constructeur de l'enfant :

```php
    public function __construct($h, $l, $m, $ep, $ch) {
        parent::__construct($h, $l, $m);
        
        $this->epaisseur = $ep;
        $this->charge_max = $ch;
    }
```

**`parent::__construct($h, $l, $m);`** → **SUPER IMPORTANT !**

**`parent::`** veut dire : *"Appelle le constructeur de mon PARENT"*

Ça permet de remplir les propriétés héritées (hauteur, largeur, matériau).

Ensuite, on remplit nos **propres** propriétés (épaisseur, charge_max).

---

## 🧠 Schéma de l'héritage

```
        Mur (classe PARENT)
         |
         | hérite avec "extends"
         |
         v
    MurPorteur (classe ENFANT)
```

**MurPorteur** a :
- Tout ce que `Mur` a
- PLUS ses propres trucs

---

## 💪 Ce que l'enfant peut faire

### 1️⃣ Utiliser les méthodes du parent

```php
$mur_porteur = new MurPorteur(3, 5, "béton", 0.3, 50);

// calculerSurface() vient du parent !
echo $mur_porteur->calculerSurface(); // 15
```

**Même si on n'a PAS écrit `calculerSurface()` dans `MurPorteur`, ça marche !**

Parce qu'il l'a **hérité** ! ✨

---

### 2️⃣ Ajouter ses propres méthodes

```php
class MurPorteur extends Mur {
    // ... propriétés et constructeur ...

    // Nouvelle méthode spécifique au mur porteur
    public function verifierSolidite($poids) {
        if ($poids > $this->charge_max) {
            echo "⚠️ DANGER ! Le mur ne peut pas supporter " . $poids . " tonnes !<br>";
        } else {
            echo "✅ OK, le mur peut supporter " . $poids . " tonnes.<br>";
        }
    }
}

$mur_porteur = new MurPorteur(3, 5, "béton", 0.3, 50);
$mur_porteur->verifierSolidite(45); // ✅ OK
$mur_porteur->verifierSolidite(60); // ⚠️ DANGER
```

---

### 3️⃣ Modifier (surcharger) une méthode du parent

Tu peux **RÉÉCRIRE** une méthode du parent pour l'adapter.

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;

    public function __construct($h, $l, $m) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
    }

    public function afficherInfo() {
        echo "Mur simple : " . $this->hauteur . "m × " . $this->largeur . "m<br>";
    }
}

class MurPorteur extends Mur {
    public $epaisseur;
    public $charge_max;

    public function __construct($h, $l, $m, $ep, $ch) {
        parent::__construct($h, $l, $m);
        $this->epaisseur = $ep;
        $this->charge_max = $ch;
    }

    // Je RÉÉCRIS la méthode afficherInfo()
    public function afficherInfo() {
        echo "Mur PORTEUR : " . $this->hauteur . "m × " . $this->largeur . "m, ";
        echo "épaisseur " . $this->epaisseur . "m, charge " . $this->charge_max . "t<br>";
    }
}

$mur1 = new Mur(2.5, 4, "brique");
$mur1->afficherInfo();

$mur2 = new MurPorteur(3, 5, "béton", 0.3, 50);
$mur2->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Mur simple : 2.5m × 4m
Mur PORTEUR : 3m × 5m, épaisseur 0.3m, charge 50t
```

**Même nom de méthode, mais comportement différent !**

C'est ce qu'on appelle la **surcharge** (ou **override** en anglais).

---

## 🔥 Exemple complet avec plusieurs niveaux

Tu peux même avoir des **héritages en chaîne** !

```php
<?php
// Niveau 1 : Classe de base
class Mur {
    public $hauteur;
    public $largeur;

    public function __construct($h, $l) {
        $this->hauteur = $h;
        $this->largeur = $l;
    }

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }
}

// Niveau 2 : MurPorteur hérite de Mur
class MurPorteur extends Mur {
    public $charge_max;

    public function __construct($h, $l, $ch) {
        parent::__construct($h, $l);
        $this->charge_max = $ch;
    }
}

// Niveau 3 : MurRenforce hérite de MurPorteur
class MurRenforce extends MurPorteur {
    public $materiau_renfort;

    public function __construct($h, $l, $ch, $renf) {
        parent::__construct($h, $l, $ch);
        $this->materiau_renfort = $renf;
    }

    public function afficherInfo() {
        echo "Mur renforcé : " . $this->hauteur . "m × " . $this->largeur . "m, ";
        echo "charge " . $this->charge_max . "t, ";
        echo "renforcé avec " . $this->materiau_renfort . "<br>";
    }
}

$mur = new MurRenforce(3, 5, 100, "fibres de carbone");
$mur->afficherInfo();
echo "Surface : " . $mur->calculerSurface() . " m²<br>";
?>
```

---

### 📺 Résultat :

```
Mur renforcé : 3m × 5m, charge 100t, renforcé avec fibres de carbone
Surface : 15 m²
```

**`MurRenforce` hérite de `MurPorteur` qui hérite de `Mur` !**

C'est comme une famille : grand-père → père → fils ! 👴👨👦

---

## ⚠️ Ce qu'il faut retenir sur `parent::`

**`parent::`** permet d'appeler une méthode du parent.

### Utilisation la plus fréquente : dans le constructeur

```php
public function __construct($h, $l, $m, $ep, $ch) {
    parent::__construct($h, $l, $m); // J'appelle le constructeur du parent
    $this->epaisseur = $ep;
    $this->charge_max = $ch;
}
```

**Pourquoi c'est important ?**

Le parent a déjà du code pour initialiser `hauteur`, `largeur`, `materiaux`.  
**Plutôt que de TOUT réécrire**, tu appelles le parent et tu complètes !

---

### Autre utilisation : appeler une méthode du parent

```php
class MurPorteur extends Mur {
    public function afficherInfo() {
        parent::afficherInfo(); // J'appelle la méthode du parent
        echo "Et en plus, charge max : " . $this->charge_max . "t<br>";
    }
}
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_heritage.php` et fais ceci :

### Instructions :

1. Crée une classe `Vehicule` avec :
   - Propriétés : `marque`, `modele`, `annee`
   - Constructeur
   - Méthode `afficherInfo()` qui affiche marque, modèle et année

2. Crée une classe `Camion` qui hérite de `Vehicule` avec :
   - Propriété supplémentaire : `capacite_charge` (en tonnes)
   - Constructeur qui utilise `parent::`
   - Méthode `afficherInfoComplete()` qui affiche tout

3. Crée un camion : Renault Master, 2020, capacité 3.5 tonnes

4. Affiche ses infos complètes

---

### Résultat attendu :

```
Véhicule : Renault Master (2020)
Capacité de charge : 3.5 tonnes
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Vehicule {
    public $marque;
    public $modele;
    public $annee;

    public function __construct($marq, $mod, $an) {
        $this->marque = $marq;
        $this->modele = $mod;
        $this->annee = $an;
    }

    public function afficherInfo() {
        echo "Véhicule : " . $this->marque . " " . $this->modele . " (" . $this->annee . ")<br>";
    }
}

class Camion extends Vehicule {
    public $capacite_charge;

    public function __construct($marq, $mod, $an, $cap) {
        parent::__construct($marq, $mod, $an);
        $this->capacite_charge = $cap;
    }

    public function afficherInfoComplete() {
        $this->afficherInfo();
        echo "Capacité de charge : " . $this->capacite_charge . " tonnes<br>";
    }
}

$camion = new Camion("Renault", "Master", 2020, 3.5);
$camion->afficherInfoComplete();
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
Mur
├── hauteur
├── largeur
├── materiaux
├── __construct()
├── calculerSurface()
└── afficherInfo()

MurPorteur (extends Mur)
├── hauteur (hérité)
├── largeur (hérité)
├── materiaux (hérité)
├── epaisseur (nouveau)
├── charge_max (nouveau)
├── __construct() (surchargé)
├── calculerSurface() (hérité)
├── afficherInfo() (peut être surchargé)
└── verifierSolidite() (nouveau)
```

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **PUBLIC, PRIVATE, PROTECTED** !

**C'est quoi ?**

Comment **PROTÉGER** les propriétés de tes classes !

Parfois, tu ne veux PAS que tout le monde puisse modifier directement une propriété.

Par exemple :
- Un mur porteur ne peut PAS avoir une charge_max négative !
- On doit **contrôler** ce qu'on met dedans !

Tu vas apprendre les **GETTERS** et **SETTERS** pour contrôler l'accès aux propriétés ! 🔒

---

Mais pour l'instant, **FAIS L'EXERCICE** !

L'héritage est un concept **fondamental** en POO. Tu vas l'utiliser **tout le temps** !

---

**👷 Bravo, tu maîtrises de mieux en mieux la POO !**

*PS : L'héritage, c'est comme les outils : plus tu t'en sers, plus tu comprends son utilité ! 🔧*