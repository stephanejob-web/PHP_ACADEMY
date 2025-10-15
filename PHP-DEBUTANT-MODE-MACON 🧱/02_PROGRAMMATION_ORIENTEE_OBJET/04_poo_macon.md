# 🧱 POO pour Maçons - Cours 04 : Le constructeur (la méthode du FLEMMARD !)

## 👷 Salut le bâtisseur !

Jusqu'à maintenant, pour créer un mur, tu faisais comment ?

```php
$mur = new Mur();
$mur->hauteur = 2.5;
$mur->largeur = 4;
$mur->materiaux = "brique";
$mur->couleur = "blanc";
```

**5 lignes** pour créer UN SEUL mur ! 😤

Et si tu dois créer 10 murs ? **50 lignes !**

C'est **LOURD**, non ?

Aujourd'hui, on va voir comment faire **TOUT ÇA en UNE SEULE LIGNE** ! 🔥

---

## 🤔 Le constructeur, c'est quoi ?

Le **constructeur**, c'est une méthode **spéciale** qui s'exécute **AUTOMATIQUEMENT** quand tu crées un objet.

**Imagine :**

❌ **Avant (méthode longue)** :
- "Hé chef, je construis un mur."
- "OK, il fait quelle hauteur ?"
- "2.5m."
- "Et la largeur ?"
- "4m."
- "Et le matériau ?"
- "Brique."

**UNE CONVERSATION INTERMINABLE !** 😴

---

✅ **Avec le constructeur (méthode rapide)** :
- "Hé chef, je construis un mur : 2.5m de haut, 4m de large, en brique."
- "OK, c'est noté !"

**TOUT EN UNE FOIS !** 💪

---

## 🔨 Code SANS constructeur (la galère)

Rappel de ce que tu faisais avant :

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}

// Je crée le mur
$mur_salon = new Mur();

// Je DOIS remplir les infos une par une
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique";

echo "Mon mur fait " . $mur_salon->hauteur . "m de haut";
?>
```

**5 lignes** juste pour créer un mur ! 😫

Et si tu oublies une ligne ? **Ton mur est incomplet !**

---

## ✅ Code AVEC constructeur (la classe !)

Regarde maintenant :

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;

    // LE CONSTRUCTEUR
    public function __construct($h, $l, $m) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
    }
}

// Je crée le mur EN UNE LIGNE !
$mur_salon = new Mur(2.5, 4, "brique");

echo "Mon mur fait " . $mur_salon->hauteur . "m de haut";
?>
```

**UNE SEULE LIGNE** pour créer le mur avec TOUTES ses infos ! 🎉

---

## 🔍 Décortiquons le constructeur (ligne par ligne)

### La déclaration du constructeur :

```php
public function __construct($h, $l, $m) {
```

**`public`** → Visible par tout le monde (comme d'habitude)

**`function`** → C'est une méthode (tu connais)

**`__construct`** → **LE NOM MAGIQUE !**  
⚠️ **ATTENTION** : Ce nom est **OBLIGATOIRE** et ne change JAMAIS !  
C'est **TOUJOURS** `__construct` (avec **2 underscores** au début !)

**`($h, $l, $m)`** → Les **paramètres** que tu vas donner lors de la création
- `$h` = hauteur
- `$l` = largeur  
- `$m` = matériaux

*Tu peux les nommer comme tu veux : `$hauteur`, `$largeur`, `$materiaux`... Mais des noms courts, c'est plus rapide à écrire !*

**`{`** → Le début du constructeur

---

### Le code à l'intérieur :

```php
    $this->hauteur = $h;
    $this->largeur = $l;
    $this->materiaux = $m;
```

**`$this->hauteur = $h;`** → Je mets la valeur reçue (`$h`) dans MA propriété `hauteur`

**`$this->largeur = $l;`** → Je mets la valeur reçue (`$l`) dans MA propriété `largeur`

**`$this->materiaux = $m;`** → Je mets la valeur reçue (`$m`) dans MA propriété `materiaux`

**En gros :** Je **transfère** les valeurs reçues dans les propriétés de l'objet.

---

### La fin du constructeur :

```php
}
```

**`}`** → La fin du constructeur

---

## 🎯 Comment ça marche quand tu crées l'objet ?

```php
$mur_salon = new Mur(2.5, 4, "brique");
```

**Voici ce qui se passe dans l'ordre :**

1. PHP crée un nouvel objet `Mur`
2. PHP voit que tu as donné 3 valeurs : `2.5`, `4`, `"brique"`
3. PHP appelle **AUTOMATIQUEMENT** le constructeur
4. Le constructeur reçoit les valeurs :
   - `$h` = 2.5
   - `$l` = 4
   - `$m` = "brique"
5. Le constructeur remplit les propriétés :
   - `$this->hauteur` = 2.5
   - `$this->largeur` = 4
   - `$this->materiaux` = "brique"
6. L'objet est créé **COMPLÈTEMENT REMPLI** !

**MAGIE !** ✨

---

## 🔥 Comparaison AVANT / APRÈS

### ❌ AVANT (sans constructeur) :

```php
$mur1 = new Mur();
$mur1->hauteur = 2.5;
$mur1->largeur = 4;
$mur1->materiaux = "brique";

$mur2 = new Mur();
$mur2->hauteur = 3;
$mur2->largeur = 5;
$mur2->materiaux = "parpaing";

$mur3 = new Mur();
$mur3->hauteur = 2.8;
$mur3->largeur = 3.5;
$mur3->materiaux = "placo";
```

**15 lignes** pour créer 3 murs ! 😱

---

### ✅ APRÈS (avec constructeur) :

```php
$mur1 = new Mur(2.5, 4, "brique");
$mur2 = new Mur(3, 5, "parpaing");
$mur3 = new Mur(2.8, 3.5, "placo");
```

**3 lignes** pour créer 3 murs ! 🎉

**C'est 5 fois plus court !**

---

## 💡 Exemple complet avec méthodes

On peut combiner le constructeur avec les méthodes qu'on a vues au cours 03 !

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;

    // CONSTRUCTEUR
    public function __construct($h, $l, $m) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
    }

    // MÉTHODE
    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    // MÉTHODE
    public function afficherFiche() {
        echo "===== FICHE DU MUR =====<br>";
        echo "Hauteur : " . $this->hauteur . " m<br>";
        echo "Largeur : " . $this->largeur . " m<br>";
        echo "Surface : " . $this->calculerSurface() . " m²<br>";
        echo "Matériau : " . $this->materiaux . "<br>";
        echo "========================<br><br>";
    }
}

// Je crée 3 murs en 3 lignes !
$mur_salon = new Mur(2.5, 4, "brique");
$mur_chambre = new Mur(3, 5, "parpaing");
$mur_garage = new Mur(2.8, 6, "placo");

// J'affiche les fiches
$mur_salon->afficherFiche();
$mur_chambre->afficherFiche();
$mur_garage->afficherFiche();
?>
```

---

### 📺 Résultat :

```
===== FICHE DU MUR =====
Hauteur : 2.5 m
Largeur : 4 m
Surface : 10 m²
Matériau : brique
========================

===== FICHE DU MUR =====
Hauteur : 3 m
Largeur : 5 m
Surface : 15 m²
Matériau : parpaing
========================

===== FICHE DU MUR =====
Hauteur : 2.8 m
Largeur : 6 m
Surface : 16.8 m²
Matériau : placo
========================
```

**Regarde comme c'est propre et rapide !** 😎

---

## 🎨 Paramètres avec valeurs par DÉFAUT

Tu peux aussi donner des **valeurs par défaut** aux paramètres !

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
    public $couleur;

    // Constructeur avec valeur par défaut
    public function __construct($h, $l, $m, $c = "blanc") {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiaux = $m;
        $this->couleur = $c;
    }

    public function afficherInfo() {
        echo "Mur de " . $this->hauteur . "m × " . $this->largeur . "m en " . $this->materiaux . ", couleur " . $this->couleur . "<br>";
    }
}

// Avec couleur spécifique
$mur1 = new Mur(2.5, 4, "brique", "rouge");

// Sans couleur = blanc par défaut
$mur2 = new Mur(3, 5, "parpaing");

$mur1->afficherInfo();
$mur2->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Mur de 2.5m × 4m en brique, couleur rouge
Mur de 3m × 5m en parpaing, couleur blanc
```

**`$c = "blanc"`** dans les paramètres veut dire :  
*"Si je ne donne pas de couleur, mets blanc par défaut."*

---

## ⚠️ ERREURS FRÉQUENTES

### Erreur 1 : Oublier les 2 underscores

❌ **FAUX :**
```php
public function construct($h, $l, $m) {
```

✅ **JUSTE :**
```php
public function __construct($h, $l, $m) {
```

**Il faut TOUJOURS 2 underscores : `__construct`**

---

### Erreur 2 : Oublier de donner les paramètres

Si ton constructeur attend 3 paramètres, tu DOIS en donner 3 !

❌ **FAUX :**
```php
$mur = new Mur(); // PHP va râler !
```

✅ **JUSTE :**
```php
$mur = new Mur(2.5, 4, "brique");
```

---

### Erreur 3 : Se tromper dans l'ordre

Les paramètres sont dans un **ordre précis** !

```php
public function __construct($hauteur, $largeur, $materiaux) {
```

❌ **FAUX :**
```php
$mur = new Mur("brique", 2.5, 4); // Ordre incorrect !
```

✅ **JUSTE :**
```php
$mur = new Mur(2.5, 4, "brique"); // Bon ordre !
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_constructeur.php` et fais ceci :

### Instructions :

1. Crée une classe `Porte` avec :
   - Propriétés : `hauteur`, `largeur`, `materiau`, `couleur`
   - Constructeur qui prend ces 4 valeurs
   - Méthode `calculerSurface()` qui retourne hauteur × largeur
   - Méthode `afficherInfo()` qui affiche toutes les infos + la surface

2. Crée 3 portes :
   - Porte d'entrée : 2.1m × 0.9m, bois, marron
   - Porte chambre : 2m × 0.8m, bois, blanc
   - Porte garage : 2.5m × 2.5m, métal, gris

3. Affiche les infos des 3 portes

---

### Résultat attendu :

```
Porte : 2.1m × 0.9m, matériau bois, couleur marron, surface 1.89m²
Porte : 2m × 0.8m, matériau bois, couleur blanc, surface 1.6m²
Porte : 2.5m × 2.5m, matériau métal, couleur gris, surface 6.25m²
```

---

**Essaie de le faire toi-même avant de regarder la solution !**

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Porte {
    public $hauteur;
    public $largeur;
    public $materiau;
    public $couleur;

    public function __construct($h, $l, $mat, $coul) {
        $this->hauteur = $h;
        $this->largeur = $l;
        $this->materiau = $mat;
        $this->couleur = $coul;
    }

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    public function afficherInfo() {
        echo "Porte : " . $this->hauteur . "m × " . $this->largeur . "m, ";
        echo "matériau " . $this->materiau . ", ";
        echo "couleur " . $this->couleur . ", ";
        echo "surface " . $this->calculerSurface() . "m²<br>";
    }
}

$porte1 = new Porte(2.1, 0.9, "bois", "marron");
$porte2 = new Porte(2, 0.8, "bois", "blanc");
$porte3 = new Porte(2.5, 2.5, "métal", "gris");

$porte1->afficherInfo();
$porte2->afficherInfo();
$porte3->afficherInfo();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Le constructeur s'appelle TOUJOURS `__construct`** (avec 2 underscores !)

✅ **Il s'exécute AUTOMATIQUEMENT** quand tu crées un objet

✅ **Il permet de créer un objet en 1 ligne** au lieu de 5

✅ **Tu donnes les valeurs directement** : `new Mur(2.5, 4, "brique")`

✅ **Tu peux mettre des valeurs par défaut** : `__construct($h, $l, $m = "brique")`

✅ **L'ordre des paramètres est important !**

---

## 📊 Récapitulatif

| Sans constructeur | Avec constructeur |
|-------------------|-------------------|
| `$mur = new Mur();` | `$mur = new Mur(2.5, 4, "brique");` |
| `$mur->hauteur = 2.5;` | ✨ Tout est déjà rempli ! |
| `$mur->largeur = 4;` | |
| `$mur->materiaux = "brique";` | |
| **= 4 lignes** | **= 1 ligne** |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **L'HÉRITAGE** !

**C'est quoi ?**

Créer des classes qui **héritent** d'autres classes !

**Exemple :**
- Tu as une classe `Mur`
- Tu crées une classe `MurPorteur` qui hérite de `Mur`
- `MurPorteur` a **TOUT** ce que `Mur` a, **PLUS** des trucs en plus !

C'est comme un fils qui hérite des compétences de son père, et qui ajoute ses propres compétences ! 👨‍👦

**Tu vas adorer !** 🚀

---

Mais pour l'instant, **FAIS L'EXERCICE** !

Le constructeur est **SUPER IMPORTANT**. Tu vas l'utiliser **TOUT LE TEMPS** en POO.

---

**👷 Bravo, tu progresses vraiment bien !**

*PS : Si tu as réussi l'exercice, tu mérites une pause. Va boire un café, tu l'as mérité ! ☕*