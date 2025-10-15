# 🎮 POO pour Gamers - Cours 06 : Public, Private, Protected (anti-cheat !)

## 🕹️ Salut le gamer !

Jusqu'à maintenant, toutes tes stats étaient **`public`**.

Ça veut dire que **N'IMPORTE QUI** peut les modifier :

```php
$guerrier->pv = 120;
$guerrier->pv = 99999; // PROBLÈME ! Un tricheur peut modifier les PV !
```

**C'est dangereux !** 😱

Aujourd'hui, tu vas apprendre à **PROTÉGER** tes stats pour éviter que n'importe qui triche avec ton jeu !

C'est ce qu'on appelle **l'encapsulation**. 🔒

---

## 🤔 C'est quoi le problème avec `public` ?

Regarde ce code :

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;

    public function __construct($n, $pv, $f) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
    }
}

$guerrier = new Personnage("Thorin", 120, 30);

// Un tricheur peut faire des BÊTISES !
$guerrier->pv = 99999; // Des PV infinis ?!
$guerrier->force = -50; // Une force négative ?!
$guerrier->pv_max = 0; // PV max à zéro ?!

echo "PV : " . $guerrier->pv . "<br>";
?>
```

---

### 📺 Résultat :

```
PV : 99999
```

**DES PV À 99999 ?!** 🤯

Ça n'a **AUCUN SENS** !

**Le problème** : Avec `public`, n'importe qui peut mettre n'importe quoi, même tricher !

---

## 🔒 Les 3 niveaux de protection

En POO, tu as **3 mots-clés** pour protéger tes stats et méthodes :

| Mot-clé | Visibilité | Qui peut y accéder ? |
|---------|------------|----------------------|
| **`public`** | 🌍 Partout | Tout le monde |
| **`private`** | 🔒 Privé | Seulement la classe elle-même |
| **`protected`** | 🛡️ Protégé | La classe + les classes enfants |

---

### 🌍 `public` - Accessible partout

```php
class Personnage {
    public $nom; // Tout le monde peut lire et modifier
}

$perso = new Personnage();
$perso->nom = "Thorin"; // ✅ OK
```

**Utilise `public` pour :** Les choses qui peuvent être librement modifiées sans danger.

---

### 🔒 `private` - Accessible SEULEMENT dans la classe

```php
class Personnage {
    private $pv; // Personne ne peut y accéder de l'extérieur
}

$perso = new Personnage();
$perso->pv = 120; // ❌ ERREUR ! PHP va râler
```

**Utilise `private` pour :** Les stats sensibles qu'on doit protéger (comme les PV).

---

### 🛡️ `protected` - Accessible dans la classe + les enfants

```php
class Personnage {
    protected $pv; // La classe + les classes enfants peuvent y accéder
}

class Guerrier extends Personnage {
    public function afficherPV() {
        echo $this->pv; // ✅ OK, je suis un enfant
    }
}

$perso = new Guerrier();
$perso->pv = 120; // ❌ ERREUR ! Pas accessible de l'extérieur
```

**Utilise `protected` pour :** Les stats partagées avec les classes enfants, mais pas avec l'extérieur.

---

## 🛡️ Exemple avec `private`

```php
<?php
class Personnage {
    private $nom;
    private $pv;
    private $pv_max;
    private $force;

    public function __construct($n, $pv, $f) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
    }

    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque ! (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

$guerrier = new Personnage("Thorin", 120, 30);

$guerrier->attaquer(); // ✅ OK

echo $guerrier->pv; // ❌ ERREUR ! pv est private
?>
```

**Maintenant, personne ne peut modifier directement les PV !**

Mais... **comment on fait pour lire ou modifier les stats alors ?** 🤔

---

## 🔑 Les GETTERS et SETTERS (les contrôleurs anti-triche)

Les **getters** et **setters** sont des **méthodes** qui permettent de :
- **LIRE** (get) une stat privée
- **MODIFIER** (set) une stat privée **avec des contrôles anti-triche**

---

### Exemple complet avec getters et setters

```php
<?php
class Personnage {
    private $nom;
    private $pv;
    private $pv_max;
    private $force;

    public function __construct($n, $pv, $f) {
        $this->setNom($n); // J'utilise le setter pour contrôler
        $this->setPV($pv);
        $this->setForce($f);
    }

    // GETTER : lire le nom
    public function getNom() {
        return $this->nom;
    }

    // SETTER : modifier le nom (avec CONTRÔLE !)
    public function setNom($n) {
        if (empty($n)) {
            echo "⚠️ ERREUR : Le nom ne peut pas être vide !<br>";
            return;
        }
        $this->nom = $n;
    }

    // GETTER : lire les PV
    public function getPV() {
        return $this->pv;
    }

    // SETTER : modifier les PV (avec CONTRÔLE ANTI-TRICHE !)
    public function setPV($pv) {
        if ($pv < 0) {
            echo "⚠️ ANTI-TRICHE : Les PV ne peuvent pas être négatifs !<br>";
            $this->pv = 0;
            return;
        }
        if ($pv > $this->pv_max) {
            echo "⚠️ ANTI-TRICHE : Les PV ne peuvent pas dépasser le max !<br>";
            $this->pv = $this->pv_max;
            return;
        }
        $this->pv = $pv;
    }

    // GETTER : lire la force
    public function getForce() {
        return $this->force;
    }

    // SETTER : modifier la force (avec CONTRÔLE !)
    public function setForce($f) {
        if ($f < 0) {
            echo "⚠️ ANTI-TRICHE : La force ne peut pas être négative !<br>";
            return;
        }
        if ($f > 100) {
            echo "⚠️ ANTI-TRICHE : La force ne peut pas dépasser 100 !<br>";
            return;
        }
        $this->force = $f;
    }

    public function recevoirDegats($degats) {
        $this->pv -= $degats;
        if ($this->pv < 0) {
            $this->pv = 0;
        }
        echo $this->nom . " reçoit " . $degats . " dégâts ! (PV: " . $this->pv . "/" . $this->pv_max . ")<br>";
    }

    public function afficherInfo() {
        echo $this->nom . " - PV: " . $this->pv . "/" . $this->pv_max . ", Force: " . $this->force . "<br>";
    }
}

// Utilisation
$guerrier = new Personnage("Thorin", 120, 30);
$guerrier->afficherInfo();

echo "PV actuels : " . $guerrier->getPV() . "<br>";

// Essayons de tricher !
$guerrier->setPV(99999); // ⚠️ Bloqué par l'anti-triche !
$guerrier->setPV(-50); // ⚠️ Bloqué !
$guerrier->setForce(500); // ⚠️ Bloqué !

// Utilisation normale
$guerrier->recevoirDegats(30);
$guerrier->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Thorin - PV: 120/120, Force: 30
PV actuels : 120
⚠️ ANTI-TRICHE : Les PV ne peuvent pas dépasser le max !
⚠️ ANTI-TRICHE : Les PV ne peuvent pas être négatifs !
⚠️ ANTI-TRICHE : La force ne peut pas dépasser 100 !
Thorin reçoit 30 dégâts ! (PV: 90/120)
Thorin - PV: 90/120, Force: 30
```

**Maintenant, les stats sont PROTÉGÉES contre la triche !** 🛡️

---

## 🔍 Décortiquons les getters et setters

### Structure d'un GETTER

```php
public function getPV() {
    return $this->pv;
}
```

**`public`** → Accessible de partout (c'est une porte d'accès)

**`function getPV()`** → Nom : **get** + **Nom de la stat** (convention)

**`return $this->pv;`** → Je **renvoie** la valeur de la stat privée

**Traduction :** *"Donne-moi les PV du personnage"*

---

### Structure d'un SETTER

```php
public function setPV($pv) {
    if ($pv < 0) {
        echo "⚠️ ANTI-TRICHE : Les PV ne peuvent pas être négatifs !<br>";
        $this->pv = 0;
        return;
    }
    if ($pv > $this->pv_max) {
        echo "⚠️ ANTI-TRICHE : Les PV ne peuvent pas dépasser le max !<br>";
        $this->pv = $this->pv_max;
        return;
    }
    $this->pv = $pv;
}
```

**`public`** → Accessible de partout

**`function setPV($pv)`** → Nom : **set** + **Nom de la stat** + **paramètre**

**`if ($pv < 0) { ... }`** → **CONTRÔLE ANTI-TRICHE** avant d'accepter

**`$this->pv = $pv;`** → Si c'est bon, je modifie la stat

**Traduction :** *"Change les PV, mais seulement si c'est pas de la triche"*

---

## 💡 Pourquoi c'est GÉNIAL

### ✅ Avantage 1 : Anti-triche

Tu empêches les valeurs **impossibles** :
- PV négatifs ou infinis
- Force négative
- Stats qui dépassent les limites

---

### ✅ Avantage 2 : Contrôle

Tu peux ajouter des **règles de jeu** :

```php
public function setPV($pv) {
    if ($pv > $this->pv_max) {
        echo "🩹 Les PV sont limités au maximum !<br>";
        $this->pv = $this->pv_max;
        return;
    }
    $this->pv = $pv;
}
```

---

### ✅ Avantage 3 : Évolution

Si tu changes la structure interne, le code extérieur ne casse pas :

```php
// Avant
private $pv; // stockés normalement

// Après (tu veux stocker en pourcentage)
private $pv_pourcentage;

public function getPV() {
    return ($this->pv_pourcentage / 100) * $this->pv_max; // Conversion automatique
}
```

Le code qui utilise `getPV()` continue de fonctionner sans modification !

---

## 🛡️ `protected` : pour les classes enfants

Quand tu veux qu'une stat soit **accessible aux classes enfants** mais **pas à l'extérieur** :

```php
<?php
class Personnage {
    protected $nom;
    protected $pv;

    public function __construct($n, $pv) {
        $this->nom = $n;
        $this->pv = $pv;
    }
}

class Guerrier extends Personnage {
    private $rage;

    public function __construct($n, $pv, $rage) {
        parent::__construct($n, $pv);
        $this->rage = $rage;
    }

    public function afficherInfo() {
        // ✅ Je peux accéder à nom et pv car ils sont protected
        echo "Guerrier : " . $this->nom . " (PV: " . $this->pv . ", Rage: " . $this->rage . ")<br>";
    }
}

$guerrier = new Guerrier("Thorin", 150, 20);
$guerrier->afficherInfo();

// ❌ Mais de l'extérieur, on ne peut pas y accéder
// echo $guerrier->pv; // ERREUR !
?>
```

---

### 📺 Résultat :

```
Guerrier : Thorin (PV: 150, Rage: 20)
```

**`protected` = accès familial (parent + enfants) mais pas public !**

C'est comme les stats cachées dans un jeu : seul le système de jeu y a accès ! 🎮

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

1. Crée une classe `Inventaire` avec :
   - Propriété **privée** : `$or` (l'argent du joueur)
   - Constructeur qui initialise l'or
   - Méthode `getOr()` pour lire l'or
   - Méthode `ajouterOr($montant)` qui ajoute de l'or (seulement si montant > 0)
   - Méthode `retirerOr($montant)` qui retire de l'or (seulement si assez d'or)
   - Méthode `afficherInventaire()` qui affiche l'or

2. Crée un inventaire avec 100 pièces d'or

3. Teste :
   - Ajouter 50 pièces
   - Retirer 30 pièces
   - Essayer de retirer 200 pièces (ça doit être refusé)
   - Essayer d'ajouter -50 pièces (ça doit être refusé)

---

### Résultat attendu :

```
💰 Inventaire : 100 pièces d'or
✅ +50 pièces d'or gagnées !
💰 Inventaire : 150 pièces d'or
✅ -30 pièces d'or dépensées !
💰 Inventaire : 120 pièces d'or
⚠️ ERREUR : Pas assez d'or !
💰 Inventaire : 120 pièces d'or
⚠️ ERREUR : Le montant doit être positif !
💰 Inventaire : 120 pièces d'or
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Inventaire {
    private $or;

    public function __construct($or_initial) {
        $this->or = $or_initial;
    }

    public function getOr() {
        return $this->or;
    }

    public function ajouterOr($montant) {
        if ($montant <= 0) {
            echo "⚠️ ERREUR : Le montant doit être positif !<br>";
            return;
        }
        $this->or += $montant;
        echo "✅ +" . $montant . " pièces d'or gagnées !<br>";
    }

    public function retirerOr($montant) {
        if ($montant > $this->or) {
            echo "⚠️ ERREUR : Pas assez d'or !<br>";
            return;
        }
        $this->or -= $montant;
        echo "✅ -" . $montant . " pièces d'or dépensées !<br>";
    }

    public function afficherInventaire() {
        echo "💰 Inventaire : " . $this->or . " pièces d'or<br>";
    }
}

$inventaire = new Inventaire(100);
$inventaire->afficherInventaire();

$inventaire->ajouterOr(50);
$inventaire->afficherInventaire();

$inventaire->retirerOr(30);
$inventaire->afficherInventaire();

$inventaire->retirerOr(200);
$inventaire->afficherInventaire();

$inventaire->ajouterOr(-50);
$inventaire->afficherInventaire();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`public`** = Accessible partout (utilise avec prudence)

✅ **`private`** = Accessible seulement dans la classe (protection maximale)

✅ **`protected`** = Accessible dans la classe + les enfants (pour l'héritage)

✅ **GETTER** = Méthode pour **LIRE** une stat privée (`getPV()`)

✅ **SETTER** = Méthode pour **MODIFIER** une stat privée avec contrôle (`setPV($pv)`)

✅ **L'encapsulation protège contre la triche et les erreurs**

---

## 🎓 Récapitulatif de TOUTE la formation POO

**Cours 01** : Comprendre classe vs objet → Template vs personnage spawné  
**Cours 02** : Créer ses premiers personnages → `new`, propriétés, `->`  
**Cours 03** : Ajouter des actions → Méthodes, `$this`, attaquer, se soigner  
**Cours 04** : Simplifier le spawn → Constructeur `__construct`  
**Cours 05** : Systèmes de classes → Héritage `extends`, Guerrier/Mage/Archer  
**Cours 06** : Anti-triche → `private`, getters/setters, contrôles  

**TU AS MAINTENANT LES BASES SOLIDES DE LA POO !** 🎉

---

## 🚀 Et maintenant ?

Tu peux maintenant :

✅ Créer tes propres systèmes de personnages  
✅ Organiser ton code de jeu proprement  
✅ Réutiliser du code avec l'héritage  
✅ Protéger contre la triche  
✅ Lire et comprendre du code orienté objet  

**Prochaines étapes possibles :**
- Créer un mini-jeu RPG complet (système de combat, inventaire, quêtes...)
- Apprendre les concepts avancés (interfaces, traits, namespaces...)
- Découvrir les frameworks PHP (Laravel, Symfony...) qui utilisent MASSIVEMENT la POO

---

## 💪 Conseil final

La POO, c'est comme un jeu vidéo :

**Au début**, ça semble compliqué avec plein de règles.  
**Avec la pratique**, ça devient naturel et amusant.  
**Avec l'expérience**, tu te demandes comment tu codais avant !

**Continue à pratiquer, crée des projets, fais des erreurs, corrige-les !**

C'est en **CODANT** qu'on devient développeur, pas en lisant ! 💻

---

**🎮 GG WP pour avoir terminé cette formation !**

**Tu es maintenant un dev capable de créer des systèmes de jeu solides et bien organisés !** 🏆

*PS : Garde ces cours comme référence. Relis-les quand tu as un doute. Et surtout... CODE, CODE, CODE ! 🔥*

*PPS : N'oublie pas : les meilleurs jeux sont ceux qu'on partage. Partage ton code, aide les autres gamers, et continue d'apprendre ! 🎮*