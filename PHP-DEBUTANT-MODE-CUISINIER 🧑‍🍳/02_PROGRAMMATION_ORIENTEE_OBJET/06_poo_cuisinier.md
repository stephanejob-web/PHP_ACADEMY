# 👨‍🍳 POO pour Cuisiniers - Cours 06 : Public, Private, Protected (protéger ses recettes secrètes !)

## 🍳 Salut le chef !

Jusqu'à maintenant, toutes tes propriétés étaient **`public`**.

Ça veut dire que **N'IMPORTE QUI** peut les modifier :

```php
$recette->temps_cuisson = 35;
$recette->temps_cuisson = -10; // PROBLÈME ! Un temps négatif ?!
```

**C'est dangereux !** 😱

Aujourd'hui, tu vas apprendre à **PROTÉGER** tes propriétés pour éviter que n'importe qui fasse n'importe quoi avec tes recettes !

C'est ce qu'on appelle **l'encapsulation**. 🔒

---

## 🤔 C'est quoi le problème avec `public` ?

Regarde ce code :

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
}

$gateau = new Recette("Gâteau au chocolat", 35, 180, 8);

// Quelqu'un peut faire des BÊTISES !
$gateau->temps_cuisson = -20; // Un temps négatif ?!
$gateau->portions = 0; // Zéro portion ?!
$gateau->temperature = 1000; // 1000°C ?!

echo "Temps de cuisson : " . $gateau->temps_cuisson . " min<br>";
?>
```

---

### 📺 Résultat :

```
Temps de cuisson : -20 min
```

**UN TEMPS DE CUISSON DE -20 MINUTES ?!** 🤯

Ça n'a **AUCUN SENS** !

**Le problème** : Avec `public`, n'importe qui peut mettre n'importe quoi !

---

## 🔒 Les 3 niveaux de protection

En POO, tu as **3 mots-clés** pour protéger tes propriétés et méthodes :

| Mot-clé | Visibilité | Qui peut y accéder ? |
|---------|------------|----------------------|
| **`public`** | 🌍 Partout | Tout le monde |
| **`private`** | 🔒 Privé | Seulement la classe elle-même |
| **`protected`** | 👨‍🍳 Protégé | La classe + les classes enfants |

---

### 🌍 `public` - Accessible partout

```php
class Recette {
    public $nom; // Tout le monde peut lire et modifier
}

$recette = new Recette();
$recette->nom = "Gâteau"; // ✅ OK
```

**Utilise `public` pour :** Les choses qui peuvent être librement modifiées sans danger.

---

### 🔒 `private` - Accessible SEULEMENT dans la classe

```php
class Recette {
    private $temps_cuisson; // Personne ne peut y accéder de l'extérieur
}

$recette = new Recette();
$recette->temps_cuisson = 35; // ❌ ERREUR ! PHP va râler
```

**Utilise `private` pour :** Les données sensibles qu'on doit protéger.

---

### 👨‍🍳 `protected` - Accessible dans la classe + les enfants

```php
class Recette {
    protected $temps_cuisson; // La classe + les classes enfants peuvent y accéder
}

class Dessert extends Recette {
    public function afficherTemps() {
        echo $this->temps_cuisson; // ✅ OK, je suis un enfant
    }
}

$recette = new Dessert();
$recette->temps_cuisson = 35; // ❌ ERREUR ! Pas accessible de l'extérieur
```

**Utilise `protected` pour :** Les données partagées avec les classes enfants, mais pas avec l'extérieur.

---

## 🛡️ Exemple avec `private`

```php
<?php
class Recette {
    private $nom;
    private $temps_cuisson;
    private $temperature;
    private $portions;

    public function __construct($n, $t, $temp, $p) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
        $this->temperature = $temp;
        $this->portions = $p;
    }

    public function calculerTempsTotal() {
        return $this->temps_cuisson;
    }
}

$gateau = new Recette("Gâteau au chocolat", 35, 180, 8);

echo $gateau->calculerTempsTotal(); // ✅ OK : 35

echo $gateau->temps_cuisson; // ❌ ERREUR ! temps_cuisson est private
?>
```

**Maintenant, personne ne peut modifier directement le temps de cuisson !**

Mais... **comment on fait pour lire ou modifier les propriétés alors ?** 🤔

---

## 🔑 Les GETTERS et SETTERS (les gardiens de la cuisine)

Les **getters** et **setters** sont des **méthodes** qui permettent de :
- **LIRE** (get) une propriété privée
- **MODIFIER** (set) une propriété privée **avec des contrôles**

---

### Exemple complet avec getters et setters

```php
<?php
class Recette {
    private $nom;
    private $temps_cuisson;
    private $temperature;
    private $portions;

    public function __construct($n, $t, $temp, $p) {
        $this->setNom($n); // J'utilise le setter pour contrôler
        $this->setTempsCuisson($t);
        $this->setTemperature($temp);
        $this->setPortions($p);
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

    // GETTER : lire le temps de cuisson
    public function getTempsCuisson() {
        return $this->temps_cuisson;
    }

    // SETTER : modifier le temps de cuisson (avec CONTRÔLE !)
    public function setTempsCuisson($t) {
        if ($t < 0) {
            echo "⚠️ ERREUR : Le temps de cuisson ne peut pas être négatif !<br>";
            return;
        }
        $this->temps_cuisson = $t;
    }

    // GETTER : lire la température
    public function getTemperature() {
        return $this->temperature;
    }

    // SETTER : modifier la température (avec CONTRÔLE !)
    public function setTemperature($temp) {
        if ($temp < 0 || $temp > 300) {
            echo "⚠️ ERREUR : Température invalide (0-300°C) !<br>";
            return;
        }
        $this->temperature = $temp;
    }

    // GETTER : lire les portions
    public function getPortions() {
        return $this->portions;
    }

    // SETTER : modifier les portions (avec CONTRÔLE !)
    public function setPortions($p) {
        if ($p <= 0) {
            echo "⚠️ ERREUR : Il faut au moins 1 portion !<br>";
            return;
        }
        $this->portions = $p;
    }

    public function afficherInfo() {
        echo "Recette : " . $this->nom . " (" . $this->temps_cuisson . " min, ";
        echo $this->temperature . "°C, " . $this->portions . " portions)<br>";
    }
}

// Utilisation
$gateau = new Recette("Gâteau au chocolat", 35, 180, 8);
$gateau->afficherInfo();

echo "Temps de cuisson : " . $gateau->getTempsCuisson() . " min<br>";

// Essayons de mettre des valeurs incorrectes
$gateau->setTempsCuisson(-20); // ⚠️ Bloqué !
$gateau->setPortions(0); // ⚠️ Bloqué !
$gateau->setTemperature(500); // ⚠️ Bloqué !

// Valeur correcte
$gateau->setTempsCuisson(40); // ✅ OK
$gateau->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Recette : Gâteau au chocolat (35 min, 180°C, 8 portions)
Temps de cuisson : 35 min
⚠️ ERREUR : Le temps de cuisson ne peut pas être négatif !
⚠️ ERREUR : Il faut au moins 1 portion !
⚠️ ERREUR : Température invalide (0-300°C) !
Recette : Gâteau au chocolat (40 min, 180°C, 8 portions)
```

**Maintenant, les données sont PROTÉGÉES !** 🛡️

---

## 🔍 Décortiquons les getters et setters

### Structure d'un GETTER

```php
public function getNom() {
    return $this->nom;
}
```

**`public`** → Accessible de partout (c'est une porte d'accès)

**`function getNom()`** → Nom : **get** + **Nom de la propriété** (convention)

**`return $this->nom;`** → Je **renvoie** la valeur de la propriété privée

**Traduction :** *"Donne-moi le nom de la recette"*

---

### Structure d'un SETTER

```php
public function setTempsCuisson($t) {
    if ($t < 0) {
        echo "⚠️ ERREUR : Le temps de cuisson ne peut pas être négatif !<br>";
        return;
    }
    $this->temps_cuisson = $t;
}
```

**`public`** → Accessible de partout

**`function setTempsCuisson($t)`** → Nom : **set** + **Nom de la propriété** + **paramètre**

**`if ($t < 0) { ... }`** → **CONTRÔLE** de la valeur avant de l'accepter

**`$this->temps_cuisson = $t;`** → Si c'est bon, je modifie la propriété

**Traduction :** *"Change le temps de cuisson, mais seulement si la valeur est correcte"*

---

## 💡 Pourquoi c'est GÉNIAL

### ✅ Avantage 1 : Sécurité

Tu empêches les valeurs **absurdes** :
- Temps de cuisson négatif
- Portions nulles
- Température impossible

---

### ✅ Avantage 2 : Contrôle

Tu peux ajouter des **règles métier** :

```php
public function setTempsCuisson($t) {
    if ($t > 300) {
        echo "⚠️ Attention : Temps de cuisson très long !<br>";
    }
    $this->temps_cuisson = $t;
}
```

---

### ✅ Avantage 3 : Évolution

Si tu changes la structure interne, le code extérieur ne casse pas :

```php
// Avant
private $temps_cuisson; // en minutes

// Après (tu veux stocker en secondes)
private $temps_cuisson_secondes;

public function getTempsCuisson() {
    return $this->temps_cuisson_secondes / 60; // Conversion automatique
}
```

Le code qui utilise `getTempsCuisson()` continue de fonctionner sans modification !

---

## 👨‍🍳 `protected` : pour les recettes de famille

Quand tu veux qu'une propriété soit **accessible aux classes enfants** mais **pas à l'extérieur** :

```php
<?php
class Recette {
    protected $nom; // Les enfants peuvent y accéder
    protected $temps_cuisson;

    public function __construct($n, $t) {
        $this->nom = $n;
        $this->temps_cuisson = $t;
    }
}

class Dessert extends Recette {
    private $sucre_grammes;

    public function __construct($n, $t, $sucre) {
        parent::__construct($n, $t);
        $this->sucre_grammes = $sucre;
    }

    public function afficherInfo() {
        // ✅ Je peux accéder à nom et temps_cuisson car ils sont protected
        echo "Dessert : " . $this->nom . " (" . $this->temps_cuisson . " min, ";
        echo $this->sucre_grammes . "g de sucre)<br>";
    }
}

$dessert = new Dessert("Tiramisu", 20, 100);
$dessert->afficherInfo();

// ❌ Mais de l'extérieur, on ne peut pas y accéder
// echo $dessert->nom; // ERREUR !
?>
```

---

### 📺 Résultat :

```
Dessert : Tiramisu (20 min, 100g de sucre)
```

**`protected` = accès familial (parent + enfants) mais pas public !**

C'est comme les recettes de famille : seuls les membres de la famille y ont accès ! 👨‍👩‍👧‍👦

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

1. Crée une classe `StockIngredient` avec :
   - Propriété **privée** : `$quantite` (en grammes)
   - Constructeur qui initialise la quantité
   - Méthode `getQuantite()` pour lire la quantité
   - Méthode `ajouter($grammes)` qui ajoute des grammes (seulement si grammes > 0)
   - Méthode `retirer($grammes)` qui retire des grammes (seulement si assez en stock)
   - Méthode `afficherStock()` qui affiche la quantité

2. Crée un stock de farine avec 1000g

3. Teste :
   - Ajouter 500g
   - Retirer 300g
   - Essayer de retirer 2000g (ça doit être refusé)
   - Essayer d'ajouter -100g (ça doit être refusé)

---

### Résultat attendu :

```
Stock actuel : 1000g
✅ Ajout de 500g effectué
Stock actuel : 1500g
✅ Retrait de 300g effectué
Stock actuel : 1200g
⚠️ ERREUR : Stock insuffisant !
Stock actuel : 1200g
⚠️ ERREUR : La quantité doit être positive !
Stock actuel : 1200g
```

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class StockIngredient {
    private $quantite;

    public function __construct($quantite_initiale) {
        $this->quantite = $quantite_initiale;
    }

    public function getQuantite() {
        return $this->quantite;
    }

    public function ajouter($grammes) {
        if ($grammes <= 0) {
            echo "⚠️ ERREUR : La quantité doit être positive !<br>";
            return;
        }
        $this->quantite += $grammes;
        echo "✅ Ajout de " . $grammes . "g effectué<br>";
    }

    public function retirer($grammes) {
        if ($grammes > $this->quantite) {
            echo "⚠️ ERREUR : Stock insuffisant !<br>";
            return;
        }
        $this->quantite -= $grammes;
        echo "✅ Retrait de " . $grammes . "g effectué<br>";
    }

    public function afficherStock() {
        echo "Stock actuel : " . $this->quantite . "g<br>";
    }
}

$farine = new StockIngredient(1000);
$farine->afficherStock();

$farine->ajouter(500);
$farine->afficherStock();

$farine->retirer(300);
$farine->afficherStock();

$farine->retirer(2000);
$farine->afficherStock();

$farine->ajouter(-100);
$farine->afficherStock();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`public`** = Accessible partout (utilise avec prudence)

✅ **`private`** = Accessible seulement dans la classe (protection maximale)

✅ **`protected`** = Accessible dans la classe + les enfants (recettes de famille)

✅ **GETTER** = Méthode pour **LIRE** une propriété privée (`getNom()`)

✅ **SETTER** = Méthode pour **MODIFIER** une propriété privée avec contrôle (`setNom($n)`)

✅ **L'encapsulation protège les données et évite les erreurs**

---

## 🎓 Récapitulatif de TOUTE la formation POO

**Cours 01** : Comprendre classe vs objet → Fiche recette vs plat préparé  
**Cours 02** : Créer ses premières recettes → `new`, propriétés, `->`  
**Cours 03** : Ajouter des actions → Méthodes, `$this`  
**Cours 04** : Simplifier la création → Constructeur `__construct`  
**Cours 05** : Réutiliser du code → Héritage `extends`, `parent::`  
**Cours 06** : Protéger ses recettes → `private`, getters/setters  

**TU AS MAINTENANT LES BASES SOLIDES DE LA POO !** 🎉

---

## 🚀 Et maintenant ?

Tu peux maintenant :

✅ Créer tes propres classes de recettes  
✅ Organiser ton code proprement  
✅ Réutiliser du code avec l'héritage  
✅ Protéger tes données  
✅ Lire et comprendre du code orienté objet  

**Prochaines étapes possibles :**
- Créer un mini-projet (gestion de restaurant, livre de recettes, gestion de stock...)
- Apprendre les concepts avancés (interfaces, traits, namespaces...)
- Découvrir les frameworks PHP (Laravel, Symfony...) qui utilisent MASSIVEMENT la POO

---

## 💪 Conseil final

La POO, c'est comme la cuisine :

**Au début**, ça semble compliqué et abstrait.  
**Avec la pratique**, ça devient naturel et logique.  
**Avec l'expérience**, tu te demandes comment tu faisais avant !

**Continue à pratiquer, crée des projets, fais des erreurs, corrige-les !**

C'est en **CODANT** qu'on devient développeur, pas en lisant ! 💻

---

**👨‍🍳 BRAVO pour avoir terminé cette formation !**

**Tu es maintenant un chef du code qui sait créer des applications solides et bien organisées !** 🏆

*PS : Garde ces cours comme référence. Relis-les quand tu as un doute. Et surtout... CODE, CODE, CODE ! 🔥*

*PPS : N'oublie pas : les meilleures recettes sont celles qu'on partage. Partage ton code, aide les autres, et continue d'apprendre ! 🍳*