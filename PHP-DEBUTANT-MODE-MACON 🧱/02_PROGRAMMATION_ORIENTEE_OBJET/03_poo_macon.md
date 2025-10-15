# 🧱 POO pour Maçons - Cours 03 : Les méthodes (ton mur devient INTELLIGENT !)

## 👷 Salut le bâtisseur !

Dans les cours précédents, tu as appris à :
- Créer un **plan** (classe)
- Construire des **murs** (objets)
- Leur donner des **caractéristiques** (propriétés)

Mais jusqu'ici, ton mur, il fait quoi ? **Il reste planté là comme un piquet !** 😄

Aujourd'hui, on va lui apprendre à **FAIRE DES CHOSES** !

---

## 🤔 Les méthodes, c'est quoi exactement ?

Jusqu'à maintenant, tu as appris les **PROPRIÉTÉS**.

**Les PROPRIÉTÉS** = Ce que l'objet **EST**

Exemple : un mur **EST** haut de 2.5m, **EST** large de 4m, **EST** en brique...

---

Maintenant, on va voir les **MÉTHODES**.

**Les MÉTHODES** = Ce que l'objet **FAIT**

Exemple : un mur **CALCULE** sa surface, **SE REPEINT**, **AFFICHE** sa fiche...

---

### Comparaison simple :

**Sur un chantier :**

- **Propriété :** "Ce mur fait 4m de large" → **C'EST une caractéristique**
- **Méthode :** "Calcule la surface de ce mur" → **C'EST une action**

---

**Un mur avec des méthodes, c'est un mur qui peut TRAVAILLER TOUT SEUL !**

Plus besoin de calculer la surface toi-même : le mur le fait !  
Plus besoin de le repeindre à la main : le mur se repeint tout seul !

**Ton mur devient comme un ouvrier autonome !** 💪

---

## 🔨 Exemple 1 : Le mur calcule sa surface

Sur un chantier, pour calculer la surface d'un mur, tu fais comment ?

**hauteur × largeur = surface**

Facile, non ?

Maintenant, on va apprendre au mur à **faire ce calcul LUI-MÊME** !

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;

    // MÉTHODE : calculer la surface
    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }
}

$mur_salon = new Mur();
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique";

// Je demande au mur de calculer sa surface
$surface = $mur_salon->calculerSurface();

echo "La surface du mur est : " . $surface . " m²";
?>
```

---

### 📺 Résultat dans le navigateur :

```
La surface du mur est : 10 m²
```

**LE MUR A CALCULÉ TOUT SEUL !** 💥

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la méthode :

```php
public function calculerSurface() {
```

**`public`** → La méthode est **visible par tout le monde** (comme les propriétés `public`)

**`function`** → Le mot magique pour dire **"je crée une action"**

**`calculerSurface`** → Le **nom** de l'action  
*Tu peux l'appeler comme tu veux : `calculer()`, `getSurface()`, `surface()`...*  
*Mais choisis un nom qui décrit bien ce que fait la méthode !*

**`()`** → Les **parenthèses** sont obligatoires après le nom  
*Pour l'instant, on met rien dedans. On verra pourquoi plus tard.*

**`{`** → L'accolade ouvrante : le **début** de la méthode

---

### Le code à l'intérieur :

```php
    return $this->hauteur * $this->largeur;
```

**`return`** → Je **RENVOIE** le résultat du calcul

**`$this`** → **MOT SUPER IMPORTANT !**  
Ça veut dire **"MOI-MÊME"** (l'objet qui exécute la méthode)

**`$this->hauteur`** → **MA** hauteur (celle de ce mur-ci, pas d'un autre mur)

**`$this->largeur`** → **MA** largeur (celle de ce mur-ci)

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

C'est le mot que l'objet utilise pour parler de lui-même.

---

### Exemple concret :

Imagine que tu as **3 murs** sur ton chantier :

1. Le mur du salon (2.5m de haut)
2. Le mur de la chambre (3m de haut)
3. Le mur du garage (2.8m de haut)

Quand tu demandes au **mur du salon** de calculer SA surface :
- Il va utiliser **SA** hauteur (2.5m)
- Pas la hauteur du garage (2.8m) !

**`$this->hauteur`** permet au mur de dire : *"MA hauteur à moi"*

---

### Analogie :

C'est comme si tu disais :
- **"Ma truelle"** → la truelle que **TU** utilises
- **"Ta truelle"** → la truelle d'un autre

**`$this`** c'est comme dire **"MA"** ou **"MON"**.

---

## 🎯 Appeler une méthode

Pour **utiliser** une méthode, c'est simple :

```php
$surface = $mur_salon->calculerSurface();
```

**`$mur_salon`** → L'objet sur lequel tu veux agir

**`->`** → La flèche (tu connais déjà !)

**`calculerSurface()`** → Le nom de la méthode + les parenthèses `()`

---

**Traduction en français :**

*"Hé, mur du salon, calcule ta surface !"*

Le mur fait le calcul et **renvoie** le résultat.

---

## 🎨 Exemple 2 : Le mur se repeint

Un mur peut changer de couleur, non ?

Créons une méthode pour ça !

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
    public $couleur;

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    // MÉTHODE : repeindre le mur
    public function repeindre($nouvelle_couleur) {
        $this->couleur = $nouvelle_couleur;
        echo "Le mur a été repeint en " . $this->couleur . " !<br>";
    }
}

$mur_salon = new Mur();
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique";
$mur_salon->couleur = "blanc";

echo "Couleur actuelle : " . $mur_salon->couleur . "<br>";

// Je repeins le mur
$mur_salon->repeindre("bleu ciel");

echo "Nouvelle couleur : " . $mur_salon->couleur . "<br>";
?>
```

---

### 📺 Résultat :

```
Couleur actuelle : blanc
Le mur a été repeint en bleu ciel !
Nouvelle couleur : bleu ciel
```

**Le mur s'est repeint tout seul !** 🎨

---

## 🔍 Nouvelle notion : les PARAMÈTRES

Regarde bien cette ligne :

```php
public function repeindre($nouvelle_couleur) {
```

**Tu vois le `$nouvelle_couleur` entre les parenthèses ?**

Ça s'appelle un **PARAMÈTRE**.

---

### C'est quoi un paramètre ?

Un paramètre, c'est une **information que tu DOIS donner** à la méthode pour qu'elle fonctionne.

**Exemple :**

Pour repeindre un mur, tu DOIS dire **en quelle couleur**, non ?

Tu peux pas juste dire *"Repeins le mur"* sans préciser la couleur !

---

### Comment ça marche ?

```php
public function repeindre($nouvelle_couleur) {
    $this->couleur = $nouvelle_couleur;
    echo "Le mur a été repeint en " . $this->couleur . " !<br>";
}
```

**`$nouvelle_couleur`** → C'est une variable qui **reçoit** l'info que tu donnes

**`$this->couleur = $nouvelle_couleur;`** → Je change **MA** couleur avec la nouvelle couleur reçue

---

### Quand tu appelles la méthode :

```php
$mur_salon->repeindre("bleu ciel");
```

**`"bleu ciel"`** → C'est la valeur que tu **passes** au paramètre `$nouvelle_couleur`

La méthode reçoit `"bleu ciel"` et l'utilise pour changer la couleur du mur.

---

## 📋 Exemple 3 : Afficher la fiche technique

On peut aussi créer une méthode qui **affiche toutes les infos** du mur d'un coup !

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
    public $couleur;

    public function calculerSurface() {
        return $this->hauteur * $this->largeur;
    }

    public function repeindre($nouvelle_couleur) {
        $this->couleur = $nouvelle_couleur;
        echo "Le mur a été repeint en " . $this->couleur . " !<br>";
    }

    // MÉTHODE : afficher la fiche technique
    public function afficherFiche() {
        echo "===== FICHE TECHNIQUE DU MUR =====<br>";
        echo "Hauteur : " . $this->hauteur . " m<br>";
        echo "Largeur : " . $this->largeur . " m<br>";
        echo "Surface : " . $this->calculerSurface() . " m²<br>";
        echo "Matériau : " . $this->materiaux . "<br>";
        echo "Couleur : " . $this->couleur . "<br>";
        echo "===================================<br>";
    }
}

$mur_salon = new Mur();
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique";
$mur_salon->couleur = "blanc";

// J'affiche la fiche
$mur_salon->afficherFiche();
?>
```

---

### 📺 Résultat :

```
===== FICHE TECHNIQUE DU MUR =====
Hauteur : 2.5 m
Largeur : 4 m
Surface : 10 m²
Matériau : brique
Couleur : blanc
===================================
```

---

## 💡 Chose importante à remarquer :

Regarde cette ligne dans la méthode `afficherFiche()` :

```php
echo "Surface : " . $this->calculerSurface() . " m²<br>";
```

**Tu vois ?** Une méthode peut **appeler une autre méthode** !

Ici, `afficherFiche()` appelle `calculerSurface()` pour récupérer la surface.

**C'est puissant !** Les méthodes peuvent travailler ensemble ! 💪

---

## 🔥 Méthode AVEC paramètre VS SANS paramètre

### Méthode SANS paramètre :

```php
public function calculerSurface() {
    return $this->hauteur * $this->largeur;
}
```

**Appel :**
```php
$surface = $mur->calculerSurface(); // Pas besoin de donner d'info
```

---

### Méthode AVEC paramètre :

```php
public function repeindre($nouvelle_couleur) {
    $this->couleur = $nouvelle_couleur;
}
```

**Appel :**
```php
$mur->repeindre("rouge"); // Je DOIS donner une couleur
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_methodes.php` et fais ceci :

### Instructions :

1. Reprends ta classe `Mur` avec les propriétés : `hauteur`, `largeur`, `materiaux`
2. Ajoute une méthode `calculerPrix()` qui calcule le prix du mur
   - Le prix = **50€ par m²**
   - Utilise `calculerSurface()` pour avoir la surface
   - Retourne le prix total
3. Ajoute une méthode `afficherResume()` qui affiche :
   - Le matériau
   - Le prix total (utilise `calculerPrix()`)
4. Crée un mur de 2.5m de haut et 4m de large en brique
5. Affiche son résumé

---

### Résultat attendu :

```
Résumé du mur : Matériau = brique, Prix total = 500€
```

---

**Aide :**

Pour calculer le prix :
```php
public function calculerPrix() {
    $surface = $this->calculerSurface();
    return $surface * 50;
}
```

**Essaie de le faire toi-même avant de regarder la solution !**

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Propriété** = Ce que l'objet **EST** (hauteur, largeur, couleur...)

✅ **Méthode** = Ce que l'objet **FAIT** (calculer, repeindre, afficher...)

✅ **`$this`** = **"MOI-MÊME"** (l'objet qui parle de lui)

✅ **Méthode sans paramètre** : `calculerSurface()`

✅ **Méthode avec paramètre** : `repeindre($couleur)`

✅ **Une méthode peut appeler une autre méthode**

✅ **`return`** renvoie un résultat, **`echo`** affiche directement

---

## 📊 Tableau récapitulatif

| Type | Exemple | Utilisation |
|------|---------|-------------|
| **Propriété** | `$mur->hauteur` | Stocker une info |
| **Méthode sans paramètre** | `$mur->calculerSurface()` | Action simple |
| **Méthode avec paramètre** | `$mur->repeindre("rouge")` | Action avec info |
| **`$this`** | `$this->hauteur` | Parler de soi |
| **`return`** | `return $resultat;` | Renvoyer une valeur |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre le **CONSTRUCTEUR** !

**C'est quoi ?**

Un mur qui se construit **directement avec toutes ses infos** !

Plus besoin d'écrire 10 lignes pour créer un mur... tout se fait **en une seule ligne** ! 🚀

**Exemple de ce que tu pourras faire :**

```php
$mur = new Mur(2.5, 4, "brique"); // BOOM, mur créé avec tout !
```

Au lieu de :

```php
$mur = new Mur();
$mur->hauteur = 2.5;
$mur->largeur = 4;
$mur->materiaux = "brique";
```

**Ça va te changer la vie !** 😎

---

Mais pour l'instant, **FAIS L'EXERCICE !**

C'est en **pratiquant** qu'on devient bon. Pas en lisant. 💪

---

**👷 Continue comme ça, tu deviens un vrai pro !**

*PS : Si tu galères sur l'exercice, relis le cours. La réponse est dedans ! 😊*