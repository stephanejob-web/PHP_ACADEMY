# 💪 10 Exercices POO Complets - Tous les 6 Cours (avec solutions)

## 📋 Instructions

- Ces exercices couvrent **TOUS les concepts** des 6 cours de POO
- Essaie de faire **chaque exercice toi-même** avant de regarder la solution
- Teste ton code dans un fichier PHP
- La difficulté augmente progressivement du cours 01 au cours 06

**Concepts couverts :**
- ✅ Cours 01 & 02 : Classes, Objets, Propriétés
- ✅ Cours 03 : Méthodes, $this
- ✅ Cours 04 : Constructeur __construct
- ✅ Cours 05 : Héritage, extends, parent::
- ✅ Cours 06 : Encapsulation, private, getters/setters

---

## 🎯 Exercice 1 : Classes et Objets de base

**Concepts utilisés :** Cours 01 & 02 - Classes, Propriétés, Objets

### Consigne :
1. Crée une classe `Livre` avec les propriétés : `$titre`, `$auteur`, `$prix`, `$stock`
2. Crée 2 livres différents
3. Affiche leurs informations

### Résultat attendu :
```
Livre : "1984" par George Orwell - 15€ (Stock: 10)
Livre : "Le Petit Prince" par Antoine de Saint-Exupéry - 12€ (Stock: 25)
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Livre {
    public $titre;
    public $auteur;
    public $prix;
    public $stock;
}

$livre1 = new Livre();
$livre1->titre = "1984";
$livre1->auteur = "George Orwell";
$livre1->prix = 15;
$livre1->stock = 10;

$livre2 = new Livre();
$livre2->titre = "Le Petit Prince";
$livre2->auteur = "Antoine de Saint-Exupéry";
$livre2->prix = 12;
$livre2->stock = 25;

echo 'Livre : "' . $livre1->titre . '" par ' . $livre1->auteur . ' - ' . $livre1->prix . '€ (Stock: ' . $livre1->stock . ')<br>';
echo 'Livre : "' . $livre2->titre . '" par ' . $livre2->auteur . ' - ' . $livre2->prix . '€ (Stock: ' . $livre2->stock . ')';
?>
```

**Concepts du cours 01 & 02 :**
- ✅ Création d'une classe avec `class`
- ✅ Définition des propriétés avec `public`
- ✅ Instanciation avec `new`
- ✅ Accès aux propriétés avec `->`

</details>

---

## 🎯 Exercice 2 : Méthodes simples

**Concepts utilisés :** Cours 03 - Méthodes, $this

### Consigne :
1. Reprends la classe `Livre` de l'exercice 1
2. Ajoute une méthode `vendre($quantite)` qui retire du stock et affiche un message
3. Ajoute une méthode `reapprovisionner($quantite)` qui ajoute au stock
4. Ajoute une méthode `afficherInfo()` qui affiche toutes les infos
5. Teste ces méthodes sur un livre

### Résultat attendu :
```
Livre : "1984" - Stock: 10
10 exemplaire(s) vendu(s)
Stock restant : 0
20 exemplaire(s) ajouté(s)
Stock actuel : 20
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Livre {
    public $titre;
    public $auteur;
    public $prix;
    public $stock;
    
    public function vendre($quantite) {
        $this->stock -= $quantite;
        echo $quantite . " exemplaire(s) vendu(s)<br>";
    }
    
    public function reapprovisionner($quantite) {
        $this->stock += $quantite;
        echo $quantite . " exemplaire(s) ajouté(s)<br>";
    }
    
    public function afficherInfo() {
        echo 'Livre : "' . $this->titre . '" - Stock: ' . $this->stock . "<br>";
    }
}

$livre = new Livre();
$livre->titre = "1984";
$livre->auteur = "George Orwell";
$livre->prix = 15;
$livre->stock = 10;

$livre->afficherInfo();
$livre->vendre(10);
echo "Stock restant : " . $livre->stock . "<br>";
$livre->reapprovisionner(20);
echo "Stock actuel : " . $livre->stock;
?>
```

**Concepts du cours 03 :**
- ✅ Création de méthodes avec `public function`
- ✅ Utilisation de `$this->` pour accéder aux propriétés
- ✅ Modification des propriétés dans les méthodes
- ✅ Paramètres de méthodes

</details>

---

## 🎯 Exercice 3 : Constructeur

**Concepts utilisés :** Cours 04 - Constructeur __construct

### Consigne :
1. Crée une classe `Produit` avec : `$nom`, `$prix`, `$tva`, `$prixTTC`
2. Ajoute un constructeur qui prend `$nom`, `$prix`, `$tva`
3. Le constructeur calcule automatiquement `$prixTTC` (prix × (1 + tva/100))
4. Ajoute une méthode `afficherPrix()` qui affiche prix HT et TTC
5. Crée 2 produits en une seule ligne chacun

### Résultat attendu :
```
Produit : Ordinateur - Prix HT : 1000€ - Prix TTC : 1200€
Produit : Souris - Prix HT : 25€ - Prix TTC : 30€
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Produit {
    public $nom;
    public $prix;
    public $tva;
    public $prixTTC;
    
    public function __construct($nom, $prix, $tva) {
        $this->nom = $nom;
        $this->prix = $prix;
        $this->tva = $tva;
        $this->prixTTC = $prix * (1 + $tva / 100);
    }
    
    public function afficherPrix() {
        echo "Produit : " . $this->nom . " - Prix HT : " . $this->prix . "€ - Prix TTC : " . $this->prixTTC . "€<br>";
    }
}

$produit1 = new Produit("Ordinateur", 1000, 20);
$produit2 = new Produit("Souris", 25, 20);

$produit1->afficherPrix();
$produit2->afficherPrix();
?>
```

**Concepts du cours 04 :**
- ✅ Constructeur avec `__construct` (2 underscores)
- ✅ Initialisation automatique des propriétés
- ✅ Calculs dans le constructeur
- ✅ Création d'objets en une seule ligne

</details>

---

## 🎯 Exercice 4 : Héritage simple

**Concepts utilisés :** Cours 05 - Héritage, extends, parent::

### Consigne :
1. Crée une classe `Animal` avec : `$nom`, `$age`, constructeur, méthode `sePresenter()`
2. Crée une classe `Chien` qui hérite de `Animal` avec :
   - Propriété supplémentaire : `$race`
   - Constructeur qui appelle `parent::__construct()`
   - Méthode `aboyer()` qui affiche "Woof! Woof!"
3. Crée un chien et teste les méthodes

### Résultat attendu :
```
Je suis Rex, j'ai 5 ans
Race : Berger Allemand
Woof! Woof!
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Animal {
    public $nom;
    public $age;
    
    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }
    
    public function sePresenter() {
        echo "Je suis " . $this->nom . ", j'ai " . $this->age . " ans<br>";
    }
}

class Chien extends Animal {
    public $race;
    
    public function __construct($nom, $age, $race) {
        parent::__construct($nom, $age);
        $this->race = $race;
    }
    
    public function aboyer() {
        echo "Woof! Woof!<br>";
    }
}

$chien = new Chien("Rex", 5, "Berger Allemand");
$chien->sePresenter();
echo "Race : " . $chien->race . "<br>";
$chien->aboyer();
?>
```

**Concepts du cours 05 :**
- ✅ Héritage avec `extends`
- ✅ Appel du constructeur parent avec `parent::__construct()`
- ✅ La classe enfant hérite des méthodes du parent
- ✅ Ajout de propriétés et méthodes dans l'enfant

</details>

---

## 🎯 Exercice 5 : Encapsulation avec getters/setters

**Concepts utilisés :** Cours 06 - Private, Getters, Setters

### Consigne :
1. Crée une classe `CompteBancaire` avec une propriété **privée** `$solde`
2. Ajoute un constructeur, `getSolde()`, `setSolde()`
3. Ajoute `deposer($montant)` qui vérifie montant > 0
4. Ajoute `retirer($montant)` qui vérifie le solde suffisant
5. Teste avec protections

### Résultat attendu :
```
Solde initial : 1000€
✅ Dépôt de 500€
Nouveau solde : 1500€
✅ Retrait de 200€
Nouveau solde : 1300€
⚠️ ERREUR : Solde insuffisant
Solde final : 1300€
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class CompteBancaire {
    private $solde;
    
    public function __construct($soldeInitial) {
        $this->solde = $soldeInitial;
    }
    
    public function getSolde() {
        return $this->solde;
    }
    
    public function setSolde($montant) {
        if ($montant < 0) {
            echo "⚠️ ERREUR : Le solde ne peut pas être négatif<br>";
            return;
        }
        $this->solde = $montant;
    }
    
    public function deposer($montant) {
        if ($montant <= 0) {
            echo "⚠️ ERREUR : Montant invalide<br>";
            return;
        }
        $this->solde += $montant;
        echo "✅ Dépôt de " . $montant . "€<br>";
    }
    
    public function retirer($montant) {
        if ($montant > $this->solde) {
            echo "⚠️ ERREUR : Solde insuffisant<br>";
            return;
        }
        $this->solde -= $montant;
        echo "✅ Retrait de " . $montant . "€<br>";
    }
}

$compte = new CompteBancaire(1000);
echo "Solde initial : " . $compte->getSolde() . "€<br>";
$compte->deposer(500);
echo "Nouveau solde : " . $compte->getSolde() . "€<br>";
$compte->retirer(200);
echo "Nouveau solde : " . $compte->getSolde() . "€<br>";
$compte->retirer(2000);
echo "Solde final : " . $compte->getSolde() . "€";
?>
```

**Concepts du cours 06 :**
- ✅ Propriété `private` pour protection
- ✅ Getters pour lire les valeurs
- ✅ Setters pour modifier avec contrôle
- ✅ Validation dans les méthodes

</details>

---

## 🎯 Exercice 6 : Personnage de jeu avec méthodes

**Concepts utilisés :** Cours 02, 03, 04 - Tout combiné

### Consigne :
1. Crée une classe `Personnage` avec : `$nom`, `$pv`, `$pvMax`, `$force`
2. Constructeur avec tous les paramètres
3. Méthodes : `attaquer()`, `recevoirDegats($degats)`, `sesoigner($montant)`, `estVivant()`, `afficherStatut()`
4. Simule un combat entre 2 personnages

### Résultat attendu :
```
Guerrier attaque pour 30 dégâts !
Mage : 50/80 PV restants
Mage attaque pour 25 dégâts !
Guerrier : 95/120 PV restants
Guerrier se soigne de 20 PV
Guerrier : 115/120 PV
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pvMax;
    public $force;
    
    public function __construct($nom, $pvMax, $force) {
        $this->nom = $nom;
        $this->pv = $pvMax;
        $this->pvMax = $pvMax;
        $this->force = $force;
    }
    
    public function attaquer() {
        echo $this->nom . " attaque pour " . $this->force . " dégâts !<br>";
        return $this->force;
    }
    
    public function recevoirDegats($degats) {
        $this->pv -= $degats;
        if ($this->pv < 0) $this->pv = 0;
        echo $this->nom . " : " . $this->pv . "/" . $this->pvMax . " PV restants<br>";
    }
    
    public function sesoigner($montant) {
        $this->pv += $montant;
        if ($this->pv > $this->pvMax) $this->pv = $this->pvMax;
        echo $this->nom . " se soigne de " . $montant . " PV<br>";
        echo $this->nom . " : " . $this->pv . "/" . $this->pvMax . " PV<br>";
    }
    
    public function estVivant() {
        return $this->pv > 0;
    }
    
    public function afficherStatut() {
        echo "=== " . $this->nom . " ===<br>";
        echo "PV : " . $this->pv . "/" . $this->pvMax . "<br>";
        echo "Force : " . $this->force . "<br>";
    }
}

$guerrier = new Personnage("Guerrier", 120, 30);
$mage = new Personnage("Mage", 80, 25);

$degats = $guerrier->attaquer();
$mage->recevoirDegats($degats);

$degats = $mage->attaquer();
$guerrier->recevoirDegats($degats);

$guerrier->sesoigner(20);
?>
```

**Concepts utilisés :**
- ✅ Constructeur pour initialisation
- ✅ Méthodes qui interagissent
- ✅ Gestion d'état (PV)
- ✅ Retour de valeurs

</details>

---

## 🎯 Exercice 7 : Système de classes RPG avec héritage

**Concepts utilisés :** Cours 03, 04, 05 - Héritage avancé

### Consigne :
1. Crée une classe `Personnage` (comme exercice 6)
2. Crée `Guerrier` qui hérite avec : `$rage`, méthode `coupPuissant()` (force × 2 + rage)
3. Crée `Mage` qui hérite avec : `$mana`, méthode `lancerSort()` (force × 3, coûte 20 mana)
4. Fais combattre un guerrier vs un mage

### Résultat attendu :
```
Guerrier utilise Coup Puissant : 80 dégâts !
Mage : 0/80 PV - KO !
Guerrier gagne !
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pvMax;
    public $force;
    
    public function __construct($nom, $pvMax, $force) {
        $this->nom = $nom;
        $this->pv = $pvMax;
        $this->pvMax = $pvMax;
        $this->force = $force;
    }
    
    public function attaquer() {
        return $this->force;
    }
    
    public function recevoirDegats($degats) {
        $this->pv -= $degats;
        if ($this->pv < 0) $this->pv = 0;
        echo $this->nom . " : " . $this->pv . "/" . $this->pvMax . " PV";
        if ($this->pv <= 0) echo " - KO !<br>";
        else echo "<br>";
    }
    
    public function estVivant() {
        return $this->pv > 0;
    }
}

class Guerrier extends Personnage {
    public $rage;
    
    public function __construct($nom, $pvMax, $force, $rage) {
        parent::__construct($nom, $pvMax, $force);
        $this->rage = $rage;
    }
    
    public function coupPuissant() {
        $degats = $this->force * 2 + $this->rage;
        echo $this->nom . " utilise Coup Puissant : " . $degats . " dégâts !<br>";
        return $degats;
    }
}

class Mage extends Personnage {
    public $mana;
    
    public function __construct($nom, $pvMax, $force, $mana) {
        parent::__construct($nom, $pvMax, $force);
        $this->mana = $mana;
    }
    
    public function lancerSort() {
        if ($this->mana < 20) {
            return $this->force;
        }
        $this->mana -= 20;
        $degats = $this->force * 3;
        echo $this->nom . " lance un sort : " . $degats . " dégâts !<br>";
        return $degats;
    }
}

$guerrier = new Guerrier("Thorin", 120, 30, 20);
$mage = new Mage("Gandalf", 80, 15, 100);

$degats = $guerrier->coupPuissant();
$mage->recevoirDegats($degats);

if (!$mage->estVivant()) {
    echo $guerrier->nom . " gagne !";
}
?>
```

**Concepts utilisés :**
- ✅ Héritage avec `extends`
- ✅ `parent::__construct()`
- ✅ Méthodes spécifiques aux enfants
- ✅ Polymorphisme

</details>

---

## 🎯 Exercice 8 : Gestion de stock e-commerce avec encapsulation

**Concepts utilisés :** Cours 04, 06 - Constructeur + Encapsulation

### Consigne :
1. Crée `Produit` avec propriétés **privées** : `$nom`, `$prix`, `$stock`
2. Constructeur et getters
3. Méthode `acheter($quantite)` : vérifie stock, calcule total, maj stock
4. Méthode `reapprovisionner($quantite)`
5. Teste

### Résultat attendu :
```
Laptop - 999€ - Stock: 10
✅ Achat de 2 unités - Total: 1998€
Stock: 8
⚠️ Stock insuffisant
✅ Réappro de 15 unités
Stock: 23
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Produit {
    private $nom;
    private $prix;
    private $stock;
    
    public function __construct($nom, $prix, $stock) {
        $this->nom = $nom;
        $this->prix = $prix;
        $this->stock = $stock;
    }
    
    public function getNom() {
        return $this->nom;
    }
    
    public function getPrix() {
        return $this->prix;
    }
    
    public function getStock() {
        return $this->stock;
    }
    
    public function acheter($quantite) {
        if ($quantite > $this->stock) {
            echo "⚠️ Stock insuffisant<br>";
            return false;
        }
        $total = $this->prix * $quantite;
        $this->stock -= $quantite;
        echo "✅ Achat de " . $quantite . " unités - Total: " . $total . "€<br>";
        return true;
    }
    
    public function reapprovisionner($quantite) {
        $this->stock += $quantite;
        echo "✅ Réappro de " . $quantite . " unités<br>";
    }
}

$produit = new Produit("Laptop", 999, 10);
echo $produit->getNom() . " - " . $produit->getPrix() . "€ - Stock: " . $produit->getStock() . "<br>";
$produit->acheter(2);
echo "Stock: " . $produit->getStock() . "<br>";
$produit->acheter(10);
$produit->reapprovisionner(15);
echo "Stock: " . $produit->getStock();
?>
```

**Concepts utilisés :**
- ✅ Propriétés privées
- ✅ Getters
- ✅ Logique métier protégée
- ✅ Validation

</details>

---

## 🎯 Exercice 9 : Véhicules avec protected

**Concepts utilisés :** Cours 05, 06 - Héritage + protected

### Consigne :
1. `Vehicule` avec **protected** `$marque`, `$vitesseMax` et **private** `$vitesseActuelle`
2. Méthodes: `accelerer()`, `freiner()`, `getVitesse()`
3. `Voiture` hérite avec `$nbPortes`, `klaxonner()`
4. `Moto` hérite avec `$typeMoteur`, `faireCavalier()`
5. Teste

### Résultat attendu :
```
Renault accélère à 50 km/h
⚠️ Vitesse max: 120 km/h
Renault klaxonne : BEEP!

Yamaha accélère à 100 km/h
Yamaha fait un cavalier ! 🏍️
```

<details>
<summary>📝 Voir la solution</summary>

```php
<?php
class Vehicule {
    protected $marque;
    protected $vitesseMax;
    private $vitesseActuelle;
    
    public function __construct($marque, $vitesseMax) {
        $this->marque = $marque;
        $this->vitesseMax = $vitesseMax;
        $this->vitesseActuelle = 0;
    }
    
    public function accelerer($vitesse) {
        $this->vitesseActuelle += $vitesse;
        if ($this->vitesseActuelle > $this->vitesseMax) {
            $this->vitesseActuelle = $this->vitesseMax;
            echo "⚠️ Vitesse max: " . $this->vitesseMax . " km/h<br>";
        } else {
            echo $this->marque . " accélère à " . $this->vitesseActuelle . " km/h<br>";
        }
    }
    
    public function freiner() {
        $this->vitesseActuelle = 0;
    }
    
    public function getVitesse() {
        return $this->vitesseActuelle;
    }
}

class Voiture extends Vehicule {
    public $nbPortes;
    
    public function __construct($marque, $vitesseMax, $nbPortes) {
        parent::__construct($marque, $vitesseMax);
        $this->nbPortes = $nbPortes;
    }
    
    public function klaxonner() {
        echo $this->marque . " klaxonne : BEEP!<br>";
    }
}

class Moto extends Vehicule {
    public $typeMoteur;
    
    public function __construct($marque, $vitesseMax, $typeMoteur) {
        parent::__construct($marque, $vitesseMax);
        $this->typeMoteur = $typeMoteur;
    }
    
    public function faireCavalier() {
        echo $this->marque . " fait un cavalier ! 🏍️<br>";
    }
}

$voiture = new Voiture("Renault", 120, 5);
$voiture->accelerer(50);
$voiture->accelerer(80);
$voiture->klaxonner();

echo "<br>";

$moto = new Moto("Yamaha", 280, "4 cylindres");
$moto->accelerer(100);
$moto->faireCavalier();
?>
```

**Concepts utilisés :**
- ✅ `protected` pour héritage
- ✅ `private` pour encapsulation
- ✅ Hiérarchie de classes
- ✅ Spécialisation

</details>

---

## 🎯 Exercice 10 : Système complet RPG (CHALLENGE FINAL !)

**Concepts utilisés :** TOUS LES 6 COURS !

### Consigne :
Crée un RPG complet avec :

1. Classe `Personnage` : propriétés privées/protected, constructeur, méthodes combat
2. Classes `Guerrier` et `Mage` : héritent, compétences spéciales
3. Classe `Combat` : gère le combat entre 2 personnages
4. Simule un combat complet

### Résultat attendu :
```
=== COMBAT ===
Guerrier (100 PV) VS Mage (80 PV)

Tour 1:
Guerrier : Coup Puissant (50 dégâts)
Mage : 30/80 PV
Mage : Boule de Feu (45 dégâts)
Guerrier : 55/100 PV

Tour 2:
Guerrier attaque (25 dégâts)
Mage : 5/80 PV
Mage : Boule de Feu (45 dégâts)
Guerrier : 10/100 PV

Tour 3:
Guerrier attaque (25 dégâts)
Mage : 0/80 PV - KO !

🏆 Guerrier gagne !
```

<details>
<summary>📝 Voir la solution complète</summary>

```php
<?php
// Classe de base
class Personnage {
    protected $nom;
    private $pv;
    private $pvMax;
    protected $force;
    
    public function __construct($nom, $pvMax, $force) {
        $this->nom = $nom;
        $this->pv = $pvMax;
        $this->pvMax = $pvMax;
        $this->force = $force;
    }
    
    public function getNom() {
        return $this->nom;
    }
    
    public function getPV() {
        return $this->pv;
    }
    
    public function getPVMax() {
        return $this->pvMax;
    }
    
    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque (" . $degats . " dégâts)<br>";
        return $degats;
    }
    
    public function recevoirDegats($degats) {
        $this->pv -= $degats;
        if ($this->pv < 0) $this->pv = 0;
        echo $this->nom . " : " . $this->pv . "/" . $this->pvMax . " PV";
        if ($this->pv <= 0) echo " - KO !<br>";
        else echo "<br>";
    }
    
    public function estVivant() {
        return $this->pv > 0;
    }
}

// Guerrier
class Guerrier extends Personnage {
    private $rage;
    
    public function __construct($nom, $pvMax, $force, $rage) {
        parent::__construct($nom, $pvMax, $force);
        $this->rage = $rage;
    }
    
    public function coupPuissant() {
        $degats = $this->force * 2 + $this->rage;
        echo $this->nom . " : Coup Puissant (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

// Mage
class Mage extends Personnage {
    private $mana;
    
    public function __construct($nom, $pvMax, $force, $mana) {
        parent::__construct($nom, $pvMax, $force);
        $this->mana = $mana;
    }
    
    public function bouleDeFeu() {
        if ($this->mana < 20) {
            return $this->attaquer();
        }
        $this->mana -= 20;
        $degats = $this->force * 3;
        echo $this->nom . " : Boule de Feu (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

// Classe Combat
class Combat {
    private $combattant1;
    private $combattant2;
    private $tour;
    
    public function __construct($c1, $c2) {
        $this->combattant1 = $c1;
        $this->combattant2 = $c2;
        $this->tour = 1;
    }
    
    public function demarrer() {
        echo "=== COMBAT ===<br>";
        echo $this->combattant1->getNom() . " (" . $this->combattant1->getPV() . " PV) VS ";
        echo $this->combattant2->getNom() . " (" . $this->combattant2->getPV() . " PV)<br><br>";
        
        while ($this->combattant1->estVivant() && $this->combattant2->estVivant()) {
            echo "Tour " . $this->tour . ":<br>";
            
            // Tour du combattant 1
            if ($this->combattant1 instanceof Guerrier) {
                $degats = $this->combattant1->coupPuissant();
            } else {
                $degats = $this->combattant1->bouleDeFeu();
            }
            $this->combattant2->recevoirDegats($degats);
            
            if (!$this->combattant2->estVivant()) {
                break;
            }
            
            // Tour du combattant 2
            if ($this->combattant2 instanceof Guerrier) {
                $degats = $this->combattant2->coupPuissant();
            } else {
                $degats = $this->combattant2->bouleDeFeu();
            }
            $this->combattant1->recevoirDegats($degats);
            
            echo "<br>";
            $this->tour++;
            
            // Limite de tours pour éviter boucle infinie
            if ($this->tour > 10) {
                echo "Combat trop long ! Match nul.<br>";
                return;
            }
        }
        
        echo "<br>🏆 ";
        if ($this->combattant1->estVivant()) {
            echo $this->combattant1->getNom() . " gagne !<br>";
        } else {
            echo $this->combattant2->getNom() . " gagne !<br>";
        }
    }
}

// Simulation du combat
$guerrier = new Guerrier("Thorin", 100, 25, 20);
$mage = new Mage("Gandalf", 80, 15, 100);

$combat = new Combat($guerrier, $mage);
$combat->demarrer();
?>
```

**🎓 Concepts de TOUS les cours utilisés :**

**Cours 01 & 02 :**
- ✅ Classes et objets
- ✅ Propriétés et accès avec `->`

**Cours 03 :**
- ✅ Méthodes avec `$this`
- ✅ Méthodes qui interagissent
- ✅ Retour de valeurs

**Cours 04 :**
- ✅ Constructeurs `__construct`
- ✅ Initialisation automatique

**Cours 05 :**
- ✅ Héritage avec `extends`
- ✅ `parent::__construct()`
- ✅ Polymorphisme (instanceof)
- ✅ Méthodes spécialisées

**Cours 06 :**
- ✅ Propriétés `private` et `protected`
- ✅ Getters pour accéder aux données
- ✅ Encapsulation complète

</details>

---

## 🎓 Récapitulatif Final

### Tu as maintenant maîtrisé :

**📚 Cours 01 & 02 :**
- ✅ Créer des classes avec `class`
- ✅ Définir des propriétés
- ✅ Créer des objets avec `new`
- ✅ Accéder aux propriétés avec `->`

**📚 Cours 03 :**
- ✅ Créer des méthodes
- ✅ Utiliser `$this->` pour accéder aux propriétés
- ✅ Passer des paramètres
- ✅ Retourner des valeurs avec `return`

**📚 Cours 04 :**
- ✅ Utiliser le constructeur `__construct`
- ✅ Initialiser automatiquement les objets
- ✅ Créer des objets en une ligne

**📚 Cours 05 :**
- ✅ Créer des hiérarchies avec `extends`
- ✅ Utiliser `parent::` pour appeler le parent
- ✅ Ajouter des fonctionnalités aux classes enfants
- ✅ Surcharger des méthodes

**📚 Cours 06 :**
- ✅ Protéger avec `private`
- ✅ Partager avec `protected`
- ✅ Créer des getters et setters
- ✅ Valider les données

---

## 🚀 Prochaines étapes

Tu maîtrises maintenant les **bases solides de la POO** !

**Tu peux maintenant :**
- 🎮 Créer des systèmes de jeu
- 🛒 Développer des sites e-commerce
- 📱 Construire des applications web
- 🏗️ Organiser proprement ton code

**Pour aller plus loin :**
- Apprends les **interfaces** et **traits**
- Découvre les **design patterns**
- Explore les **frameworks PHP** (Laravel, Symfony)

---

## 💪 Conseil final

**La POO, c'est comme un sport :**
- Au début, c'est difficile
- Avec la pratique, ça devient naturel
- Avec l'expérience, tu te demandes comment tu faisais avant !

**Continue à coder, crée des projets, fais des erreurs, apprends !** 🔥

---

**🎉 BRAVO pour avoir terminé ces 10 exercices !**

**Tu es maintenant capable de créer des applications PHP orientées objet solides et bien structurées !** 🏆