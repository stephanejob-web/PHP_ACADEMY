# 🎮 POO pour Gamers - Cours 03 : Les méthodes (ton personnage devient VIVANT !)

## 🕹️ Salut le gamer !

Dans les cours précédents, tu as appris à :
- Créer un **template** (classe)
- Spawner des **personnages** (objets)
- Leur donner des **stats** (propriétés)

Mais jusqu'ici, ton personnage, il fait quoi ? **Il reste planté là comme un PNJ sans IA !** 😄

Aujourd'hui, on va lui apprendre à **FAIRE DES ACTIONS** !

---

## 🤔 Les méthodes, c'est quoi exactement ?

Jusqu'à maintenant, tu as appris les **PROPRIÉTÉS**.

**Les PROPRIÉTÉS** = Ce que le personnage **EST**

Exemple : un personnage **A** 120 PV, **A** 30 de force, **A** une épée...

---

Maintenant, on va voir les **MÉTHODES**.

**Les MÉTHODES** = Ce que le personnage **FAIT**

Exemple : un personnage **ATTAQUE**, **SE SOIGNE**, **LEVEL UP**...

---

### Comparaison simple :

**Dans un jeu :**

- **Propriété :** "Ce personnage a 120 PV" → **C'EST une stat**
- **Méthode :** "Attaque l'ennemi" → **C'EST une action**

---

**Un personnage avec des méthodes, c'est un personnage qui peut AGIR TOUT SEUL !**

Plus besoin de calculer les dégâts toi-même : le personnage attaque !  
Plus besoin de gérer la vie à la main : le personnage se soigne tout seul !

**Ton personnage devient comme un bot avec une IA !** 💪

---

## 🔨 Exemple 1 : Le personnage attaque

Dans un jeu, pour attaquer, tu fais comment ?

**dégâts = force du personnage**

Maintenant, on va apprendre au personnage à **attaquer LUI-MÊME** !

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;

    // MÉTHODE : attaquer
    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque avec " . $this->arme . " et inflige " . $degats . " points de dégâts ! ⚔️<br>";
        return $degats;
    }
}

$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";

// Je demande au personnage d'attaquer
$guerrier->attaquer();
?>
```

---

### 📺 Résultat dans le navigateur :

```
Thorin attaque avec Épée légendaire et inflige 30 points de dégâts ! ⚔️
```

**LE PERSONNAGE A ATTAQUÉ TOUT SEUL !** 💥

---

## 🔍 Décortiquons le code (ligne par ligne)

### La déclaration de la méthode :

```php
public function attaquer() {
```

**`public`** → La méthode est **visible par tout le monde** (comme les propriétés `public`)

**`function`** → Le mot magique pour dire **"je crée une action"**

**`attaquer`** → Le **nom** de l'action  
*Tu peux l'appeler comme tu veux : `attaquer()`, `attack()`, `frapper()`...*  
*Mais choisis un nom qui décrit bien ce que fait la méthode !*

**`()`** → Les **parenthèses** sont obligatoires après le nom  
*Pour l'instant, on met rien dedans. On verra pourquoi plus tard.*

**`{`** → L'accolade ouvrante : le **début** de la méthode

---

### Le code à l'intérieur :

```php
    $degats = $this->force;
    echo $this->nom . " attaque avec " . $this->arme . " et inflige " . $degats . " points de dégâts ! ⚔️<br>";
    return $degats;
```

**`$degats = $this->force;`** → Je calcule les dégâts basés sur MA force

**`$this`** → **MOT SUPER IMPORTANT !**  
Ça veut dire **"MOI-MÊME"** (le personnage qui exécute l'action)

**`$this->force`** → **MA** force (celle de ce personnage-ci, pas d'un autre personnage)

**`$this->nom`** → **MON** nom

**`$this->arme`** → **MON** arme

**`echo ...`** → J'affiche un message d'attaque

**`return $degats;`** → Je **RENVOIE** les dégâts infligés

---

### La fin de la méthode :

```php
}
```

**`}`** → L'accolade fermante : la **fin** de la méthode

---

## 🧠 Comprendre `$this` (TRÈS IMPORTANT !)

**`$this`** = **"MOI-MÊME"**

C'est le mot que le personnage utilise pour parler de lui-même.

---

### Exemple concret :

Imagine que tu as **3 personnages** dans ta partie :

1. Thorin le guerrier (30 de force)
2. Gandalf le mage (10 de force)
3. Legolas l'archer (20 de force)

Quand tu demandes à **Thorin** d'attaquer :
- Il va utiliser **SA** force (30)
- Pas la force de Gandalf (10) !

**`$this->force`** permet au personnage de dire : *"MA force à moi"*

---

### Analogie :

C'est comme si tu disais :
- **"Mon personnage"** → le personnage que **TU** contrôles
- **"Ton personnage"** → le personnage d'un autre joueur

**`$this`** c'est comme dire **"MON"** ou **"MA"**.

---

## 🎯 Appeler une méthode

Pour **utiliser** une méthode, c'est simple :

```php
$guerrier->attaquer();
```

**`$guerrier`** → Le personnage qui doit agir

**`->`** → La flèche (tu connais déjà !)

**`attaquer()`** → Le nom de la méthode + les parenthèses `()`

---

**Traduction en français :**

*"Hé Thorin, attaque !"*

Le personnage exécute l'action et **renvoie** le résultat.

---

## 🩹 Exemple 2 : Se soigner

Un personnage peut se soigner, non ?

Créons une méthode pour ça !

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;

    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque et inflige " . $degats . " dégâts ! ⚔️<br>";
        return $degats;
    }

    // MÉTHODE : se soigner
    public function seSoigner($montant) {
        $this->pv += $montant;
        if ($this->pv > $this->pv_max) {
            $this->pv = $this->pv_max;
        }
        echo $this->nom . " se soigne de " . $montant . " PV ! ❤️ (PV: " . $this->pv . "/" . $this->pv_max . ")<br>";
    }
}

$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 80;
$guerrier->pv_max = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";

echo "PV actuels : " . $guerrier->pv . "/" . $guerrier->pv_max . "<br>";

// Le personnage se soigne
$guerrier->seSoigner(30);

echo "Nouveaux PV : " . $guerrier->pv . "/" . $guerrier->pv_max . "<br>";
?>
```

---

### 📺 Résultat :

```
PV actuels : 80/120
Thorin se soigne de 30 PV ! ❤️ (PV: 110/120)
Nouveaux PV : 110/120
```

**Le personnage s'est soigné tout seul !** 🩹

---

## 🔍 Nouvelle notion : les PARAMÈTRES

Regarde bien cette ligne :

```php
public function seSoigner($montant) {
```

**Tu vois le `$montant` entre les parenthèses ?**

Ça s'appelle un **PARAMÈTRE**.

---

### C'est quoi un paramètre ?

Un paramètre, c'est une **information que tu DOIS donner** à la méthode pour qu'elle fonctionne.

**Exemple :**

Pour se soigner, tu DOIS dire **de combien de PV**, non ?

Tu peux pas juste dire *"Soigne-toi"* sans préciser le montant !

---

### Comment ça marche ?

```php
public function seSoigner($montant) {
    $this->pv += $montant;
    if ($this->pv > $this->pv_max) {
        $this->pv = $this->pv_max;
    }
    echo $this->nom . " se soigne de " . $montant . " PV ! ❤️<br>";
}
```

**`$montant`** → C'est une variable qui **reçoit** l'info que tu donnes

**`$this->pv += $montant;`** → J'ajoute le montant à MES PV

**`if ($this->pv > $this->pv_max)`** → Je vérifie que je ne dépasse pas le max

---

### Quand tu appelles la méthode :

```php
$guerrier->seSoigner(30);
```

**`30`** → C'est la valeur que tu **passes** au paramètre `$montant`

La méthode reçoit `30` et l'utilise pour soigner le personnage.

---

## 📊 Exemple 3 : Afficher la fiche complète

On peut aussi créer une méthode qui **affiche toutes les infos** du personnage d'un coup !

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;
    public $niveau;

    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque et inflige " . $degats . " dégâts ! ⚔️<br>";
        return $degats;
    }

    public function seSoigner($montant) {
        $this->pv += $montant;
        if ($this->pv > $this->pv_max) {
            $this->pv = $this->pv_max;
        }
        echo $this->nom . " se soigne de " . $montant . " PV ! ❤️<br>";
    }

    // MÉTHODE : afficher la fiche
    public function afficherFiche() {
        echo "╔════════════════════════╗<br>";
        echo "║   FICHE PERSONNAGE     ║<br>";
        echo "╠════════════════════════╣<br>";
        echo "║ Nom    : " . $this->nom . "<br>";
        echo "║ Niveau : " . $this->niveau . "<br>";
        echo "║ PV     : " . $this->pv . "/" . $this->pv_max . "<br>";
        echo "║ Force  : " . $this->force . "<br>";
        echo "║ Arme   : " . $this->arme . "<br>";
        echo "╚════════════════════════╝<br>";
    }
}

$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->pv_max = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";
$guerrier->niveau = 5;

// J'affiche la fiche
$guerrier->afficherFiche();
?>
```

---

### 📺 Résultat :

```
╔════════════════════════╗
║   FICHE PERSONNAGE     ║
╠════════════════════════╣
║ Nom    : Thorin
║ Niveau : 5
║ PV     : 120/120
║ Force  : 30
║ Arme   : Épée légendaire
╚════════════════════════╝
```

---

## 💡 Chose importante à remarquer :

Regarde cette ligne dans une méthode :

```php
echo "║ PV     : " . $this->pv . "/" . $this->pv_max . "<br>";
```

**Tu vois ?** Une méthode peut **utiliser plusieurs propriétés** du personnage !

Ici, `afficherFiche()` utilise `nom`, `niveau`, `pv`, `pv_max`, `force`, `arme`.

**C'est puissant !** Les méthodes peuvent accéder à toutes les stats ! 💪

---

## 🔥 Méthode AVEC paramètre VS SANS paramètre

### Méthode SANS paramètre :

```php
public function attaquer() {
    return $this->force;
}
```

**Appel :**
```php
$guerrier->attaquer(); // Pas besoin de donner d'info
```

---

### Méthode AVEC paramètre :

```php
public function seSoigner($montant) {
    $this->pv += $montant;
}
```

**Appel :**
```php
$guerrier->seSoigner(30); // Je DOIS donner le montant
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_methodes.php` et fais ceci :

### Instructions :

1. Reprends ta classe `Personnage` avec les propriétés : `nom`, `pv`, `pv_max`, `force`, `arme`
2. Ajoute une méthode `recevoirDegats($degats)` qui :
   - Enlève les dégâts des PV
   - Affiche un message "X reçoit Y dégâts !"
   - Si PV <= 0, affiche "X est KO ! 💀"
3. Ajoute une méthode `estVivant()` qui retourne `true` si PV > 0, sinon `false`
4. Crée un personnage avec 100 PV max et 100 PV actuels
5. Fais-lui recevoir 30 dégâts, puis 80 dégâts

---

### Résultat attendu :

```
Thorin reçoit 30 dégâts ! (PV: 70/100)
Thorin reçoit 80 dégâts ! (PV: 0/100)
Thorin est KO ! 💀
```

---

**Aide :**

Pour recevoir des dégâts :
```php
public function recevoirDegats($degats) {
    $this->pv -= $degats;
    if ($this->pv < 0) {
        $this->pv = 0;
    }
    echo $this->nom . " reçoit " . $degats . " dégâts ! (PV: " . $this->pv . "/" . $this->pv_max . ")<br>";
    if ($this->pv <= 0) {
        echo $this->nom . " est KO ! 💀<br>";
    }
}
```

**Essaie de le faire toi-même avant de regarder la solution !**

---

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;

    public function recevoirDegats($degats) {
        $this->pv -= $degats;
        if ($this->pv < 0) {
            $this->pv = 0;
        }
        echo $this->nom . " reçoit " . $degats . " dégâts ! (PV: " . $this->pv . "/" . $this->pv_max . ")<br>";
        if ($this->pv <= 0) {
            echo $this->nom . " est KO ! 💀<br>";
        }
    }

    public function estVivant() {
        return $this->pv > 0;
    }
}

$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 100;
$guerrier->pv_max = 100;
$guerrier->force = 30;
$guerrier->arme = "Épée";

$guerrier->recevoirDegats(30);
$guerrier->recevoirDegats(80);
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Propriété** = Ce que le personnage **EST** (nom, PV, force...)

✅ **Méthode** = Ce que le personnage **FAIT** (attaquer, soigner, afficher...)

✅ **`$this`** = **"MOI-MÊME"** (le personnage qui parle de lui)

✅ **Méthode sans paramètre** : `attaquer()`

✅ **Méthode avec paramètre** : `seSoigner($montant)`

✅ **Une méthode peut utiliser toutes les propriétés du personnage**

✅ **`return`** renvoie un résultat, **`echo`** affiche directement

---

## 📊 Tableau récapitulatif

| Type | Exemple | Utilisation |
|------|---------|-------------|
| **Propriété** | `$perso->pv` | Stocker une stat |
| **Méthode sans paramètre** | `$perso->attaquer()` | Action simple |
| **Méthode avec paramètre** | `$perso->seSoigner(30)` | Action avec info |
| **`$this`** | `$this->force` | Parler de soi |
| **`return`** | `return $degats;` | Renvoyer une valeur |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre le **CONSTRUCTEUR** !

**C'est quoi ?**

Un personnage qui se crée **directement avec toutes ses stats** !

Plus besoin d'écrire 10 lignes pour créer un personnage... tout se fait **en une seule ligne** ! 🚀

**Exemple de ce que tu pourras faire :**

```php
$guerrier = new Personnage("Thorin", 120, 30, "Épée"); // BOOM, perso créé !
```

Au lieu de :

```php
$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée";
```

**Ça va te changer la vie !** 😎

---

Mais pour l'instant, **FAIS L'EXERCICE !**

C'est en **pratiquant** qu'on devient bon. Pas en lisant. 💪

---

**🎮 Continue comme ça, tu deviens un vrai dev de jeu !**

*PS : Si tu galères sur l'exercice, relis le cours. La réponse est dedans ! 😊*