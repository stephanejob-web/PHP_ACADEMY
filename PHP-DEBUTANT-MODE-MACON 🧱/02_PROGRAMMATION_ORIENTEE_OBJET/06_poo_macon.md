# 🧱 POO pour Maçons - Cours 06 : Public, Private, Protected (protéger ses secrets !)

## 👷 Salut le bâtisseur !

Jusqu'à maintenant, toutes tes propriétés étaient **`public`**.

Ça veut dire que **N'IMPORTE QUI** peut les modifier :

```php
$mur->hauteur = 2.5;
$mur->hauteur = -10; // PROBLÈME ! Une hauteur négative ?!
```

**C'est dangereux !** 😱

Aujourd'hui, tu vas apprendre à **PROTÉGER** tes propriétés pour éviter que n'importe qui fasse n'importe quoi !

C'est ce qu'on appelle **l'encapsulation**. 🔒

---

## 🤔 C'est quoi le problème avec `public` ?

Regarde ce code :

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
}

$mur = new Mur(2.5, 4, "brique");

// Quelqu'un peut faire des BÊTISES !
$mur->hauteur = -5; // Une hauteur négative ?!
$mur->largeur = 0; // Une largeur nulle ?!
$mur->materiaux = "banane"; // Un mur en banane ?!

echo "Hauteur : " . $mur->hauteur . "m<br>";
?>
```

---

### 📺 Résultat :

```
Hauteur : -5m
```

**UN MUR DE -5 MÈTRES ?!** 🤯

Ça n'a **AUCUN SENS** !

**Le problème** : Avec `public`, n'importe qui peut mettre n'importe quoi !

---

## 🔒 Les 3 niveaux de protection

En POO, tu as **3 mots-clés** pour protéger tes propriétés et méthodes :

| Mot-clé | Visibilité | Qui peut y accéder ? |
|---------|------------|----------------------|
| **`public`** | 🌍 Partout | Tout le monde |
| **`private`** | 🔒 Privé | Seulement la classe elle-même |
| **`protected`** | 👨‍👦 Protégé | La classe + les enfants |

---

### 🌍 `public` - Accessible partout

```php
class Mur {
    public $hauteur; // Tout le monde peut lire et modifier
}

$mur = new Mur();
$mur->hauteur = 2.5; // ✅ OK
```

**Utilise `public` pour :** Les choses qui peuvent être librement modifiées sans danger.

---

### 🔒 `private` - Accessible SEULEMENT dans la classe

```php
class Mur {
    private $hauteur; // Personne ne peut y accéder de l'extérieur
}

$mur = new Mur();
$mur->hauteur = 2.5; // ❌ ERREUR ! PHP va râler
```

**Utilise `private` pour :** Les données sensibles qu'on doit protéger.

---

### 👨‍👦 `protected` - Accessible dans la classe + les enfants

```php
class Mur {
    protected $hauteur; // La classe + les classes enfants peuvent y accéder
}

class MurPorteur extends Mur {
    public function afficherHauteur() {
        echo $this->hauteur; // ✅ OK, je suis un enfant
    }
}

$mur = new MurPorteur();
$mur->hauteur = 2.5; // ❌ ERREUR ! Pas accessible de l'extérieur
```

**Utilise `protected` pour :** Les données partagées avec les classes enfants, mais pas avec l'extérieur.

---

## 🛡️ Exemple avec `private`

```php
<?php
class Mur {
    private $hauteur;
    private $largeur;
    private $materiaux;

    public function __construct($h, $l, $m) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
    }

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }
}

$mur = new Mur(2.5, 4, "brique");

echo $mur->calculerSurface(); // ✅ OK : 10

echo $mur->hauteur; // ❌ ERREUR ! hauteur est private
?>
```

**Maintenant, personne ne peut modifier directement la hauteur !**

Mais... **comment on fait pour lire ou modifier les propriétés alors ?** 🤔

---

## 🔑 Les GETTERS et SETTERS (les gardiens)

Les **getters** et **setters** sont des **méthodes** qui permettent de :
- **LIRE** (get) une propriété privée
- **MODIFIER** (set) une propriété privée **avec des contrôles**

---

### Exemple complet avec getters et setters

```php
<?php
class Mur {
    private $hauteur;
    private $largeur;
    private $materiaux;

    public function __construct($h, $l, $m) {
        $this->setHauteur($h); // J'utilise le setter pour contrôler
        $this->setLargeur($l);
        $this->setMateriaux($m);
    }

    // GETTER : lire la hauteur
    public function getHauteur() {
        return $this->hauteur;
    }

    // SETTER : modifier la hauteur (avec CONTRÔLE !)
    public function setHauteur($h) {
        if ($h <= 0) {
            echo "⚠️ ERREUR : La hauteur doit être positive !<br>";
            return;
        }
        $this->hauteur = $h;
    }

    // GETTER : lire la largeur
    public function getLargeur() {
        return $this->largeur;
    }

    // SETTER : modifier la largeur (avec CONTRÔLE !)
    public function setLargeur($l) {
        if ($l <= 0) {
            echo "⚠️ ERREUR : La largeur doit être positive !<br>";
            return;
        }
        $this->largeur = $l;
    }

    // GETTER : lire le matériau
    public function getMateriaux() {
        return $this->materiaux;
    }

    // SETTER : modifier le matériau (avec CONTRÔLE !)
    public function setMateriaux($m) {
        $materiaux_autorises = ["brique", "parpaing", "béton", "placo"];
        if (!in_array($m, $materiaux_autorises)) {
            echo "⚠️ ERREUR : Matériau non autorisé !<br>";
            return;
        }
        $this->materiaux = $m;
    }

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    public function afficherInfo() {
        echo "Mur : " . $this->hauteur . "m × " . $this->largeur . "m en " . $this->materiaux . "<br>";
    }
}

// Utilisation
$mur = new Mur(2.5, 4, "brique");
$mur->afficherInfo();

echo "Hauteur : " . $mur->getHauteur() . "m<br>";

// Essayons de mettre des valeurs incorrectes
$mur->setHauteur(-5); // ⚠️ Bloqué !
$mur->setMateriaux("banane"); // ⚠️ Bloqué !

// Valeur correcte
$mur->setHauteur(3); // ✅ OK
$mur->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Mur : 2.5m × 4m en brique
Hauteur : 2.5m
⚠️ ERREUR : La hauteur doit être positive !
⚠️ ERREUR : Matériau non autorisé !
Mur : 3m × 4m en brique
```

**Maintenant, les données sont PROTÉGÉES !** 🛡️

---

## 🔍 Décortiquons les getters et setters

### Structure d'un GETTER

```php
public function getHauteur() {
    return $this->hauteur;
}
```

**`public`** → Accessible de partout (c'est une porte d'accès)

**`function getHauteur()`** → Nom : **get** + **Nom de la propriété** (convention)

**`return $this->hauteur;`** → Je **renvoie** la valeur de la propriété privée

**Traduction :** *"Donne-moi la hauteur"*

---

### Structure d'un SETTER

```php
public function setHauteur($h) {
    if ($h <= 0) {
        echo "⚠️ ERREUR : La hauteur doit être positive !<br>";
        return;
    }
    $this->hauteur = $h;
}
```

**`public`** → Accessible de partout

**`function setHauteur($h)`** → Nom : **set** + **Nom de la propriété** + **paramètre**

**`if ($h <= 0) { ... }`** → **CONTRÔLE** de la valeur avant de l'accepter

**`$this->hauteur = $h;`** → Si c'est bon, je modifie la propriété

**Traduction :** *"Change la hauteur, mais seulement si la valeur est correcte"*

---

## 💡 Pourquoi c'est GÉNIAL

### ✅ Avantage 1 : Sécurité

Tu empêches les valeurs **absurdes** :
- Hauteur négative
- Largeur nulle
- Matériau inexistant

---

### ✅ Avantage 2 : Contrôle

Tu peux ajouter des **règles métier** :

```php
public function setHauteur($h) {
    if ($h > 6) {
        echo "⚠️ Attention : Hauteur inhabituelle pour un mur !<br>";
    }
    $this->hauteur = $h;
}
```

---

### ✅ Avantage 3 : Évolution

Si tu changes la structure interne, le code extérieur ne casse pas :

```php
// Avant
private $hauteur; // en mètres

// Après (tu veux stocker en cm)
private $hauteur_cm;

public function getHauteur() {
    return $this->hauteur_cm / 100; // Conversion automatique
}
```

Le code qui utilise `getHauteur()` continue de fonctionner sans modification !

---

## 👨‍👦 `protected` : pour les enfants

Quand tu veux qu'une propriété soit **accessible aux classes enfants** mais **pas à l'extérieur** :

```php
<?php
class Mur {
    protected $hauteur; // Les enfants peuvent y accéder
    protected $largeur;

    public function __construct($h, $l) {
        $this->hauteur = $h;
        $this->largeur = $l;
    }
}

class MurPorteur extends Mur {
    private $charge_max;

    public function __construct($h, $l, $ch) {
        parent::__construct($h, $l);
        $this->charge_max = $ch;
    }

    public function afficherInfo() {
        // ✅ Je peux accéder à hauteur et largeur car ils sont protected
        echo "Mur porteur : " . $this->hauteur . "m × " . $this->largeur . "m<br>";
        echo "Charge max : " . $this->charge_max . " tonnes<br>";
    }
}

$mur = new MurPorteur(3, 5, 50);
$mur->afficherInfo();

// ❌ Mais de l'extérieur, on ne peut pas y accéder
// echo $mur->hauteur; // ERREUR !
?>
```

---

### 📺 Résultat :

```
Mur porteur : 3m × 5m
Charge max : 50 tonnes
```

**`protected` = accès familial (parent + enfants) mais pas public !**

---

## 📊 Tableau récapitulatif

| Visibilité | Classe elle-même | Classes enfants | Extérieur |
|------------|------------------|-----------------|-----------|
| **`public`** | ✅ Oui | ✅ Oui | ✅ Oui |
| **`protected`** | ✅ Oui | ✅ Oui | ❌ Non |
| **`private`** | ✅ Oui | ❌ Non | ❌ Non |

---

## ✍️ EXERCICE PRATIQUE (le dernier !)

Crée un fichier `exercice_encapsulation.php` et fais ceci :

### Instructions :

1. Crée une classe `CompteBancaire` avec :
   - Propriété **privée** : `$solde`
   - Constructeur qui initialise le solde
   - Méthode `getSolde()` pour lire le solde
   - Méthode `deposer($montant)` qui ajoute de l'argent (seulement si montant > 0)
   - Méthode `retirer($montant)` qui retire de l'argent (seulement si assez d'argent)
   - Méthode `afficherSolde()` qui affiche le solde

2. Crée un compte avec 1000€

3. Teste :
   - Déposer 500€
   - Retirer 200€
   - Essayer de retirer 2000€ (ça doit être refusé)
   - Essayer de déposer -100€ (ça doit être refusé)

---

### Résultat attendu :

```
Solde actuel : 1000€
✅ Dépôt de 500€ effectué
Solde actuel : 1500€
✅ Retrait de 200€ effectué
Solde actuel : 1300€
⚠️ ERREUR : Solde insuffisant !
Solde actuel : 1300€
⚠️ ERREUR : Le montant doit être positif !
Solde actuel : 1300€
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class CompteBancaire {
    private $solde;

    public function __construct($solde_initial) {
        $this->solde = $solde_initial;
    }

    public function getSolde() {
        return $this->solde;
    }

    public function deposer($montant) {
        if ($montant <= 0) {
            echo "⚠️ ERREUR : Le montant doit être positif !<br>";
            return;
        }
        $this->solde += $montant;
        echo "✅ Dépôt de " . $montant . "€ effectué<br>";
    }

    public function retirer($montant) {
        if ($montant > $this->solde) {
            echo "⚠️ ERREUR : Solde insuffisant !<br>";
            return;
        }
        $this->solde -= $montant;
        echo "✅ Retrait de " . $montant . "€ effectué<br>";
    }

    public function afficherSolde() {
        echo "Solde actuel : " . $this->solde . "€<br>";
    }
}

$compte = new CompteBancaire(1000);
$compte->afficherSolde();

$compte->deposer(500);
$compte->afficherSolde();

$compte->retirer(200);
$compte->afficherSolde();

$compte->retirer(2000);
$compte->afficherSolde();

$compte->deposer(-100);
$compte->afficherSolde();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`public`** = Accessible partout (utilise avec prudence)

✅ **`private`** = Accessible seulement dans la classe (protection maximale)

✅ **`protected`** = Accessible dans la classe + les enfants (héritage)

✅ **GETTER** = Méthode pour **LIRE** une propriété privée (`getHauteur()`)

✅ **SETTER** = Méthode pour **MODIFIER** une propriété privée avec contrôle (`setHauteur($h)`)

✅ **L'encapsulation protège les données et évite les erreurs**

---

## 🎓 Récapitulatif de TOUTE la formation POO

**Cours 01** : Comprendre classe vs objet → Plan vs construction  
**Cours 02** : Créer ses premiers objets → `new`, propriétés, `->`  
**Cours 03** : Ajouter des actions → Méthodes, `$this`  
**Cours 04** : Simplifier la création → Constructeur `__construct`  
**Cours 05** : Réutiliser du code → Héritage `extends`, `parent::`  
**Cours 06** : Protéger ses données → `private`, getters/setters  

**TU AS MAINTENANT LES BASES SOLIDES DE LA POO !** 🎉

---

## 🚀 Et maintenant ?

Tu peux maintenant :

✅ Créer tes propres classes  
✅ Organiser ton code proprement  
✅ Réutiliser du code avec l'héritage  
✅ Protéger tes données  
✅ Lire et comprendre du code orienté objet  

**Prochaines étapes possibles :**
- Créer un mini-projet (gestion de chantier, gestion de stock...)
- Apprendre les concepts avancés (interfaces, traits, namespaces...)
- Découvrir les frameworks PHP (Laravel, Symfony...) qui utilisent MASSIVEMENT la POO

---

## 💪 Conseil final

La POO, c'est comme le métier de maçon :

**Au début**, ça semble compliqué et abstrait.  
**Avec la pratique**, ça devient naturel et logique.  
**Avec l'expérience**, tu te demandes comment tu faisais avant !

**Continue à pratiquer, crée des projets, fais des erreurs, corrige-les !**

C'est en **CODANT** qu'on devient développeur, pas en lisant ! 💻

---

**👷 BRAVO pour avoir terminé cette formation !**

**Tu es maintenant un maçon du code qui sait construire des applications solides et bien organisées !** 🏆

*PS : Garde ces cours comme référence. Relis-les quand tu as un doute. Et surtout... CODE, CODE, CODE ! 🔥*