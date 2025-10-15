# 🎮 POO pour Gamers - Cours 05 : L'héritage (le système de CLASSES !)

## 🕹️ Salut le gamer !

Aujourd'hui, on attaque un concept **SUPER PUISSANT** : **l'héritage** !

C'est exactement comme les **systèmes de classes** dans les RPG :
- Tu as une **classe de base** (Personnage)
- Tu as des **classes spécialisées** (Guerrier, Mage, Archer...)
- Chaque classe spécialisée **hérite** des stats de base + ajoute ses propres trucs !

En POO, c'est pareil ! 💪

---

## 🤔 L'héritage, c'est quoi ?

Imagine que tu as créé une classe `Personnage` qui marche super bien.

Maintenant, tu veux créer une classe `Guerrier` (un personnage spécialisé dans le combat rapproché).

Un guerrier, c'est quoi ? **C'est un personnage... MAIS EN MIEUX !**

Il a :
- ✅ Tout ce qu'un personnage normal a (nom, PV, force, arme...)
- ✅ **PLUS** des trucs en plus (rage, armure lourde, esquive...)

**Plutôt que de TOUT réécrire**, tu peux dire :

> *"Guerrier, tu hérites de Personnage, et tu ajoutes juste ce qui te manque !"*

**C'est ça l'héritage !** ✨

---

## 🎯 Exemple concret de RPG

### Classe de base : Personnage

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;

    public function __construct($n, $pv, $f, $arme) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
        $this->arme = $arme;
    }

    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque ! ⚔️ (" . $degats . " dégâts)<br>";
        return $degats;
    }

    public function afficherInfo() {
        echo $this->nom . " - PV: " . $this->pv . "/" . $this->pv_max . ", Force: " . $this->force . "<br>";
    }
}
?>
```

Bon, ça tu connais déjà ! C'est un personnage classique.

---

### Classe enfant : Guerrier (qui HÉRITE de Personnage)

```php
<?php
class Guerrier extends Personnage {
    public $rage;
    public $armure;

    public function __construct($n, $pv, $f, $arme, $rage, $armure) {
        // J'appelle le constructeur du parent
        parent::__construct($n, $pv, $f, $arme);
        
        // J'ajoute mes propres stats
        $this->rage = $rage;
        $this->armure = $armure;
    }

    // Nouvelle compétence spéciale du Guerrier
    public function coupPuissant() {
        $degats = $this->force * 2 + $this->rage;
        echo "💥 " . $this->nom . " utilise COUP PUISSANT ! (" . $degats . " dégâts)<br>";
        return $degats;
    }

    public function afficherFicheComplete() {
        echo "╔════════════════════╗<br>";
        echo "║ GUERRIER           ║<br>";
        echo "╠════════════════════╣<br>";
        echo "║ Nom    : " . $this->nom . "<br>";
        echo "║ PV     : " . $this->pv . "/" . $this->pv_max . "<br>";
        echo "║ Force  : " . $this->force . "<br>";
        echo "║ Arme   : " . $this->arme . "<br>";
        echo "║ Rage   : " . $this->rage . "<br>";
        echo "║ Armure : " . $this->armure . "<br>";
        echo "╚════════════════════╝<br><br>";
    }
}

// Utilisation
$perso_simple = new Personnage("Débutant", 100, 10, "Épée rouillée");
$perso_simple->afficherInfo();
$perso_simple->attaquer();

echo "<br>";

$guerrier = new Guerrier("Thorin", 150, 30, "Hache de guerre", 20, 50);
$guerrier->afficherFicheComplete();
$guerrier->attaquer(); // Méthode héritée
$guerrier->coupPuissant(); // Méthode propre au Guerrier
?>
```

---

### 📺 Résultat :

```
Débutant - PV: 100/100, Force: 10
Débutant attaque ! ⚔️ (10 dégâts)

╔════════════════════╗
║ GUERRIER           ║
╠════════════════════╣
║ Nom    : Thorin
║ PV     : 150/150
║ Force  : 30
║ Arme   : Hache de guerre
║ Rage   : 20
║ Armure : 50
╚════════════════════╝

Thorin attaque ! ⚔️ (30 dégâts)
💥 Thorin utilise COUP PUISSANT ! (80 dégâts)
```

**Regarde !** Le `Guerrier` peut utiliser `attaquer()` alors qu'on ne l'a **PAS** réécrit !

**Il l'a hérité de son parent `Personnage` !** 🎉

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la classe enfant :

```php
class Guerrier extends Personnage {
```

**`class Guerrier`** → Je crée une nouvelle classe qui s'appelle `Guerrier`

**`extends`** → **LE MOT MAGIQUE !** Ça veut dire **"hérite de"**

**`Personnage`** → Le nom de la classe **parent** (celle dont on hérite)

**Traduction :** *"La classe Guerrier hérite de la classe Personnage"*

---

### Les nouvelles stats :

```php
    public $rage;
    public $armure;
```

Ce sont des stats **EN PLUS** de celles héritées.

`Guerrier` a maintenant :
- ✅ `$nom` (hérité)
- ✅ `$pv` (hérité)
- ✅ `$pv_max` (hérité)
- ✅ `$force` (hérité)
- ✅ `$arme` (hérité)
- ✅ `$rage` (nouveau !)
- ✅ `$armure` (nouveau !)

---

### Le constructeur de l'enfant :

```php
    public function __construct($n, $pv, $f, $arme, $rage, $armure) {
        parent::__construct($n, $pv, $f, $arme);
        
        $this->rage = $rage;
        $this->armure = $armure;
    }
```

**`parent::__construct($n, $pv, $f, $arme);`** → **SUPER IMPORTANT !**

**`parent::`** veut dire : *"Appelle le constructeur de mon PARENT"*

Ça permet de remplir les stats héritées (nom, pv, force, arme).

Ensuite, on remplit nos **propres** stats (rage, armure).

---

## 🧠 Schéma de l'héritage

```
        Personnage (classe PARENT)
         |
         | hérite avec "extends"
         |
         v
    Guerrier (classe ENFANT)
```

**Guerrier** a :
- Tout ce que `Personnage` a
- PLUS ses propres trucs

---

## 💪 Ce que l'enfant peut faire

### 1️⃣ Utiliser les méthodes du parent

```php
$guerrier = new Guerrier("Thorin", 150, 30, "Hache", 20, 50);

// attaquer() vient du parent !
$guerrier->attaquer(); // ✅ Marche parfaitement
```

**Même si on n'a PAS écrit `attaquer()` dans `Guerrier`, ça marche !**

Parce qu'il l'a **hérité** ! ✨

---

### 2️⃣ Ajouter ses propres compétences

```php
class Guerrier extends Personnage {
    // ... stats et constructeur ...

    // Nouvelle compétence spécifique au Guerrier
    public function coupPuissant() {
        $degats = $this->force * 2 + $this->rage;
        echo "💥 " . $this->nom . " utilise COUP PUISSANT ! (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

$guerrier = new Guerrier("Thorin", 150, 30, "Hache", 20, 50);
$guerrier->coupPuissant(); // 💥 Coup puissant !
```

---

### 3️⃣ Modifier (surcharger) une méthode du parent

Tu peux **RÉÉCRIRE** une méthode du parent pour l'adapter.

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;

    public function __construct($n, $pv, $f) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->force = $f;
    }

    public function attaquer() {
        echo $this->nom . " attaque ! ⚔️<br>";
        return $this->force;
    }
}

class Guerrier extends Personnage {
    public $rage;

    public function __construct($n, $pv, $f, $rage) {
        parent::__construct($n, $pv, $f);
        $this->rage = $rage;
    }

    // Je RÉÉCRIS la méthode attaquer()
    public function attaquer() {
        $degats = $this->force + $this->rage;
        echo "💢 " . $this->nom . " attaque avec RAGE ! (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

$perso = new Personnage("Débutant", 100, 10);
$perso->attaquer();

$guerrier = new Guerrier("Thorin", 150, 30, 20);
$guerrier->attaquer();
?>
```

---

### 📺 Résultat :

```
Débutant attaque ! ⚔️
💢 Thorin attaque avec RAGE ! (50 dégâts)
```

**Même nom de méthode, mais comportement différent !**

C'est ce qu'on appelle la **surcharge** (ou **override** en anglais).

---

## 🔥 Exemple complet avec plusieurs classes

Tu peux même avoir des **systèmes de classes complètes** !

```php
<?php
// Classe de base
class Personnage {
    public $nom;
    public $pv;
    public $force;

    public function __construct($n, $pv, $f) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->force = $f;
    }

    public function attaquer() {
        echo $this->nom . " attaque ! ⚔️<br>";
        return $this->force;
    }
}

// Classe Guerrier
class Guerrier extends Personnage {
    public $rage;

    public function __construct($n, $pv, $f, $rage) {
        parent::__construct($n, $pv, $f);
        $this->rage = $rage;
    }

    public function coupPuissant() {
        $degats = $this->force * 2;
        echo "💥 " . $this->nom . " : COUP PUISSANT ! (" . $degats . " dégâts)<br>";
        return $degats;
    }
}

// Classe Mage
class Mage extends Personnage {
    public $mana;

    public function __construct($n, $pv, $f, $mana) {
        parent::__construct($n, $pv, $f);
        $this->mana = $mana;
    }

    public function lancerSort() {
        if ($this->mana >= 20) {
            $this->mana -= 20;
            $degats = $this->force * 3;
            echo "🔮 " . $this->nom . " : BOULE DE FEU ! (" . $degats . " dégâts, mana: " . $this->mana . ")<br>";
            return $degats;
        } else {
            echo "⚠️ " . $this->nom . " : Pas assez de mana !<br>";
            return 0;
        }
    }
}

// Classe Archer
class Archer extends Personnage {
    public $precision;

    public function __construct($n, $pv, $f, $prec) {
        parent::__construct($n, $pv, $f);
        $this->precision = $prec;
    }

    public function tirPrecis() {
        $chance = rand(1, 100);
        if ($chance <= $this->precision) {
            $degats = $this->force * 2;
            echo "🎯 " . $this->nom . " : TIR CRITIQUE ! (" . $degats . " dégâts)<br>";
            return $degats;
        } else {
            echo "❌ " . $this->nom . " : Tir raté !<br>";
            return 0;
        }
    }
}

// Création des personnages
$guerrier = new Guerrier("Thorin", 150, 30, 20);
$mage = new Mage("Gandalf", 80, 15, 100);
$archer = new Archer("Legolas", 100, 25, 80);

// Combat !
$guerrier->attaquer();
$guerrier->coupPuissant();

$mage->attaquer();
$mage->lancerSort();

$archer->attaquer();
$archer->tirPrecis();
?>
```

---

### 📺 Résultat :

```
Thorin attaque ! ⚔️
💥 Thorin : COUP PUISSANT ! (60 dégâts)
Gandalf attaque ! ⚔️
🔮 Gandalf : BOULE DE FEU ! (45 dégâts, mana: 80)
Legolas attaque ! ⚔️
🎯 Legolas : TIR CRITIQUE ! (50 dégâts)
```

**Trois classes différentes héritent de `Personnage` !**

C'est comme un vrai système de classes RPG ! 🎮

---

## ⚠️ Ce qu'il faut retenir sur `parent::`

**`parent::`** permet d'appeler une méthode du parent.

### Utilisation la plus fréquente : dans le constructeur

```php
public function __construct($n, $pv, $f, $rage, $armure) {
    parent::__construct($n, $pv, $f); // J'appelle le constructeur du parent
    $this->rage = $rage;
    $this->armure = $armure;
}
```

**Pourquoi c'est important ?**

Le parent a déjà du code pour initialiser `nom`, `pv`, `force`.  
**Plutôt que de TOUT réécrire**, tu appelles le parent et tu complètes !

---

### Autre utilisation : appeler une méthode du parent

```php
class Guerrier extends Personnage {
    public function attaquer() {
        parent::attaquer(); // J'appelle l'attaque du parent
        echo "Et en plus, il grogne ! GRRRR !<br>";
    }
}
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_heritage.php` et fais ceci :

### Instructions :

1. Crée une classe `Arme` avec :
   - Propriétés : `nom`, `degats`, `type`
   - Constructeur
   - Méthode `afficherInfo()` qui affiche nom, dégâts et type

2. Crée une classe `ArmeSpeciale` qui hérite de `Arme` avec :
   - Propriété supplémentaire : `pouvoir_special`
   - Constructeur qui utilise `parent::`
   - Méthode `utiliserPouvoir()` qui affiche le pouvoir spécial

3. Crée une arme spéciale : Excalibur, 50 dégâts, type "Épée", pouvoir "Frappe divine"

4. Affiche ses infos et utilise son pouvoir

---

### Résultat attendu :

```
Arme : Excalibur
Type : Épée
Dégâts : 50
Pouvoir spécial : Frappe divine
⚡ Excalibur active : Frappe divine !
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Arme {
    public $nom;
    public $degats;
    public $type;

    public function __construct($n, $deg, $t) {
        $this->nom = $n;
        $this->degats = $deg;
        $this->type = $t;
    }

    public function afficherInfo() {
        echo "Arme : " . $this->nom . "<br>";
        echo "Type : " . $this->type . "<br>";
        echo "Dégâts : " . $this->degats . "<br>";
    }
}

class ArmeSpeciale extends Arme {
    public $pouvoir_special;

    public function __construct($n, $deg, $t, $pouv) {
        parent::__construct($n, $deg, $t);
        $this->pouvoir_special = $pouv;
    }

    public function utiliserPouvoir() {
        echo "Pouvoir spécial : " . $this->pouvoir_special . "<br>";
        echo "⚡ " . $this->nom . " active : " . $this->pouvoir_special . " !<br>";
    }
}

$excalibur = new ArmeSpeciale("Excalibur", 50, "Épée", "Frappe divine");
$excalibur->afficherInfo();
$excalibur->utiliserPouvoir();
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
Personnage
├── nom
├── pv
├── force
├── arme
├── __construct()
├── attaquer()
└── afficherInfo()

Guerrier (extends Personnage)
├── nom (hérité)
├── pv (hérité)
├── force (hérité)
├── arme (hérité)
├── rage (nouveau)
├── armure (nouveau)
├── __construct() (surchargé)
├── attaquer() (hérité ou surchargé)
└── coupPuissant() (nouveau)
```

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **PUBLIC, PRIVATE, PROTECTED** !

**C'est quoi ?**

Comment **PROTÉGER** les stats de tes personnages !

Parfois, tu ne veux PAS que n'importe qui puisse modifier directement une stat.

Par exemple :
- Un personnage ne peut PAS avoir des PV négatifs !
- On doit **contrôler** ce qu'on met dedans !

Tu vas apprendre les **GETTERS** et **SETTERS** pour contrôler l'accès aux stats ! 🔒

---

Mais pour l'instant, **FAIS L'EXERCICE** !

L'héritage est un concept **fondamental** en POO. Tu vas l'utiliser **tout le temps** !

---

**🎮 Bravo, tu maîtrises de mieux en mieux la POO !**

*PS : L'héritage, c'est comme un arbre de compétences : tu débloques des compétences de base, puis des compétences avancées ! 🌳*