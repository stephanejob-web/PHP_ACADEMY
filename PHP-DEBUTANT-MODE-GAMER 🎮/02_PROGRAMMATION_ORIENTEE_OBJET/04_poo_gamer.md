# 🎮 POO pour Gamers - Cours 04 : Le constructeur (le SPAWN RAPIDE !)

## 🕹️ Salut le gamer !

Jusqu'à maintenant, pour spawner un personnage, tu faisais comment ?

```php
$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->pv_max = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";
$guerrier->niveau = 5;
```

**7 lignes** pour spawner UN SEUL personnage ! 😤

Et si tu dois spawner 10 personnages ? **70 lignes !**

C'est **LOURD**, non ?

Aujourd'hui, on va voir comment faire **TOUT ÇA en UNE SEULE LIGNE** ! 🔥

---

## 🤔 Le constructeur, c'est quoi ?

Le **constructeur**, c'est une méthode **spéciale** qui s'exécute **AUTOMATIQUEMENT** quand tu spawnes un personnage.

**Imagine :**

❌ **Avant (méthode longue)** :
- "OK, je spawn un guerrier."
- "Comment il s'appelle ?"
- "Thorin."
- "Combien de PV ?"
- "120."
- "Sa force ?"
- "30."
- "Son arme ?"
- "Épée légendaire."

**UNE CONVERSATION INTERMINABLE !** 😴

---

✅ **Avec le constructeur (spawn instantané)** :
- "Je spawn Thorin : guerrier niveau 5, 120 PV, 30 de force, Épée légendaire."
- "OK, spawné !"

**TOUT EN UNE FOIS !** 💪

---

## 🔨 Code SANS constructeur (la galère)

Rappel de ce que tu faisais avant :

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;
}

// Je spawn le personnage
$guerrier = new Personnage();

// Je DOIS remplir les stats une par une
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->pv_max = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";

echo "Personnage : " . $guerrier->nom;
?>
```

**6 lignes** juste pour spawner un personnage ! 😫

Et si tu oublies une ligne ? **Ton personnage est incomplet !**

---

## ✅ Code AVEC constructeur (le spawn instantané !)

Regarde maintenant :

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;

    // LE CONSTRUCTEUR
    public function __construct($n, $pv, $f, $arme) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
        $this->arme = $arme;
    }
}

// Je spawn le personnage EN UNE LIGNE !
$guerrier = new Personnage("Thorin", 120, 30, "Épée légendaire");

echo "Personnage : " . $guerrier->nom;
?>
```

**UNE SEULE LIGNE** pour spawner le personnage avec TOUTES ses stats ! 🎉

---

## 🔍 Décortiquons le constructeur (ligne par ligne)

### La déclaration du constructeur :

```php
public function __construct($n, $pv, $f, $arme) {
```

**`public`** → Visible par tout le monde (comme d'habitude)

**`function`** → C'est une méthode (tu connais)

**`__construct`** → **LE NOM MAGIQUE !**  
⚠️ **ATTENTION** : Ce nom est **OBLIGATOIRE** et ne change JAMAIS !  
C'est **TOUJOURS** `__construct` (avec **2 underscores** au début !)

**`($n, $pv, $f, $arme)`** → Les **paramètres** que tu vas donner lors du spawn
- `$n` = nom
- `$pv` = points de vie
- `$f` = force
- `$arme` = arme

*Tu peux les nommer comme tu veux : `$nom`, `$points_vie`, `$force`... Mais des noms courts, c'est plus rapide à écrire !*

**`{`** → Le début du constructeur

---

### Le code à l'intérieur :

```php
    $this->nom = $n;
    $this->pv = $pv;
    $this->pv_max = $pv;
    $this->force = $f;
    $this->arme = $arme;
```

**`$this->nom = $n;`** → Je mets la valeur reçue (`$n`) dans MA propriété `nom`

**`$this->pv = $pv;`** → Je mets la valeur reçue (`$pv`) dans MA propriété `pv`

**`$this->pv_max = $pv;`** → Je mets aussi cette valeur dans `pv_max` (PV de départ = PV max)

**`$this->force = $f;`** → Je mets la valeur reçue (`$f`) dans MA propriété `force`

**`$this->arme = $arme;`** → Je mets la valeur reçue (`$arme`) dans MA propriété `arme`

**En gros :** Je **transfère** les valeurs reçues dans les stats du personnage.

---

### La fin du constructeur :

```php
}
```

**`}`** → La fin du constructeur

---

## 🎯 Comment ça marche quand tu spawnes ?

```php
$guerrier = new Personnage("Thorin", 120, 30, "Épée légendaire");
```

**Voici ce qui se passe dans l'ordre :**

1. PHP crée un nouveau personnage `Personnage`
2. PHP voit que tu as donné 4 valeurs : `"Thorin"`, `120`, `30`, `"Épée légendaire"`
3. PHP appelle **AUTOMATIQUEMENT** le constructeur
4. Le constructeur reçoit les valeurs :
   - `$n` = "Thorin"
   - `$pv` = 120
   - `$f` = 30
   - `$arme` = "Épée légendaire"
5. Le constructeur remplit les stats :
   - `$this->nom` = "Thorin"
   - `$this->pv` = 120
   - `$this->pv_max` = 120
   - `$this->force` = 30
   - `$this->arme` = "Épée légendaire"
6. Le personnage est spawné **COMPLÈTEMENT CONFIGURÉ** !

**MAGIE !** ✨

---

## 🔥 Comparaison AVANT / APRÈS

### ❌ AVANT (sans constructeur) :

```php
$perso1 = new Personnage();
$perso1->nom = "Thorin";
$perso1->pv = 120;
$perso1->force = 30;
$perso1->arme = "Épée";

$perso2 = new Personnage();
$perso2->nom = "Gandalf";
$perso2->pv = 80;
$perso2->force = 10;
$perso2->arme = "Bâton";

$perso3 = new Personnage();
$perso3->nom = "Legolas";
$perso3->pv = 100;
$perso3->force = 20;
$perso3->arme = "Arc";
```

**15 lignes** pour spawner 3 personnages ! 😱

---

### ✅ APRÈS (avec constructeur) :

```php
$perso1 = new Personnage("Thorin", 120, 30, "Épée");
$perso2 = new Personnage("Gandalf", 80, 10, "Bâton");
$perso3 = new Personnage("Legolas", 100, 20, "Arc");
```

**3 lignes** pour spawner 3 personnages ! 🎉

**C'est 5 fois plus court !**

---

## 💡 Exemple complet avec méthodes

On peut combiner le constructeur avec les méthodes qu'on a vues au cours 03 !

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;

    // CONSTRUCTEUR
    public function __construct($n, $pv, $f, $arme) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
        $this->arme = $arme;
    }

    // MÉTHODE
    public function attaquer() {
        $degats = $this->force;
        echo $this->nom . " attaque avec " . $this->arme . " ! ⚔️ (" . $degats . " dégâts)<br>";
        return $degats;
    }

    // MÉTHODE
    public function afficherFiche() {
        echo "╔══════════════════╗<br>";
        echo "║ " . $this->nom . "<br>";
        echo "╠══════════════════╣<br>";
        echo "║ PV    : " . $this->pv . "/" . $this->pv_max . "<br>";
        echo "║ Force : " . $this->force . "<br>";
        echo "║ Arme  : " . $this->arme . "<br>";
        echo "╚══════════════════╝<br><br>";
    }
}

// Je spawne 3 personnages en 3 lignes !
$guerrier = new Personnage("Thorin", 120, 30, "Épée légendaire");
$mage = new Personnage("Gandalf", 80, 10, "Bâton magique");
$archer = new Personnage("Legolas", 100, 20, "Arc elfique");

// J'affiche les fiches
$guerrier->afficherFiche();
$mage->afficherFiche();
$archer->afficherFiche();

// Ils attaquent
$guerrier->attaquer();
$mage->attaquer();
$archer->attaquer();
?>
```

---

### 📺 Résultat :

```
╔══════════════════╗
║ Thorin
╠══════════════════╣
║ PV    : 120/120
║ Force : 30
║ Arme  : Épée légendaire
╚══════════════════╝

╔══════════════════╗
║ Gandalf
╠══════════════════╣
║ PV    : 80/80
║ Force : 10
║ Arme  : Bâton magique
╚══════════════════╝

╔══════════════════╗
║ Legolas
╠══════════════════╣
║ PV    : 100/100
║ Force : 20
║ Arme  : Arc elfique
╚══════════════════╝

Thorin attaque avec Épée légendaire ! ⚔️ (30 dégâts)
Gandalf attaque avec Bâton magique ! ⚔️ (10 dégâts)
Legolas attaque avec Arc elfique ! ⚔️ (20 dégâts)
```

**Regarde comme c'est propre et rapide !** 😎

---

## 🎨 Paramètres avec valeurs par DÉFAUT

Tu peux aussi donner des **valeurs par défaut** aux paramètres !

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $pv_max;
    public $force;
    public $arme;
    public $niveau;

    // Constructeur avec valeur par défaut
    public function __construct($n, $pv, $f, $arme, $niv = 1) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->force = $f;
        $this->arme = $arme;
        $this->niveau = $niv;
    }

    public function afficherInfo() {
        echo $this->nom . " (Niv." . $this->niveau . ") - PV: " . $this->pv . ", Force: " . $this->force . "<br>";
    }
}

// Avec niveau spécifique
$boss = new Personnage("Dragon", 500, 80, "Griffes acérées", 50);

// Sans niveau = niveau 1 par défaut
$debutant = new Personnage("Apprenti", 50, 5, "Épée rouillée");

$boss->afficherInfo();
$debutant->afficherInfo();
?>
```

---

### 📺 Résultat :

```
Dragon (Niv.50) - PV: 500, Force: 80
Apprenti (Niv.1) - PV: 50, Force: 5
```

**`$niv = 1`** dans les paramètres veut dire :  
*"Si je ne donne pas de niveau, mets niveau 1 par défaut."*

---

## ⚠️ ERREURS FRÉQUENTES

### Erreur 1 : Oublier les 2 underscores

❌ **FAUX :**
```php
public function construct($n, $pv, $f, $arme) {
```

✅ **JUSTE :**
```php
public function __construct($n, $pv, $f, $arme) {
```

**Il faut TOUJOURS 2 underscores : `__construct`**

---

### Erreur 2 : Oublier de donner les paramètres

Si ton constructeur attend 4 paramètres, tu DOIS en donner 4 !

❌ **FAUX :**
```php
$guerrier = new Personnage(); // PHP va râler !
```

✅ **JUSTE :**
```php
$guerrier = new Personnage("Thorin", 120, 30, "Épée");
```

---

### Erreur 3 : Se tromper dans l'ordre

Les paramètres sont dans un **ordre précis** !

```php
public function __construct($nom, $pv, $force, $arme) {
```

❌ **FAUX :**
```php
$guerrier = new Personnage(120, "Thorin", "Épée", 30); // Ordre incorrect !
```

✅ **JUSTE :**
```php
$guerrier = new Personnage("Thorin", 120, 30, "Épée"); // Bon ordre !
```

---

## ✍️ EXERCICE PRATIQUE (obligatoire !)

Crée un fichier `exercice_constructeur.php` et fais ceci :

### Instructions :

1. Crée une classe `Monstre` avec :
   - Propriétés : `nom`, `pv`, `pv_max`, `degats`, `xp_donne`
   - Constructeur qui prend ces 5 valeurs (pv et pv_max reçoivent la même valeur)
   - Méthode `attaquer()` qui retourne les dégâts et affiche un message
   - Méthode `afficherInfo()` qui affiche toutes les stats

2. Spawne 3 monstres :
   - Goblin : 30 PV, 5 dégâts, 10 XP
   - Orc : 80 PV, 15 dégâts, 50 XP
   - Dragon : 300 PV, 50 dégâts, 500 XP

3. Affiche les infos des 3 monstres
4. Fais-les attaquer

---

### Résultat attendu :

```
Monstre : Goblin (PV: 30/30, Dégâts: 5, XP: 10)
Monstre : Orc (PV: 80/80, Dégâts: 15, XP: 50)
Monstre : Dragon (PV: 300/300, Dégâts: 50, XP: 500)
Goblin attaque et inflige 5 dégâts ! 👹
Orc attaque et inflige 15 dégâts ! 👹
Dragon attaque et inflige 50 dégâts ! 🐉
```

---

**Essaie de le faire toi-même avant de regarder la solution !**

<details>
<summary>📝 Voir la solution (clique pour déplier)</summary>

```php
<?php
class Monstre {
    public $nom;
    public $pv;
    public $pv_max;
    public $degats;
    public $xp_donne;

    public function __construct($n, $pv, $deg, $xp) {
        $this->nom = $n;
        $this->pv = $pv;
        $this->pv_max = $pv;
        $this->degats = $deg;
        $this->xp_donne = $xp;
    }

    public function attaquer() {
        $emoji = ($this->degats > 30) ? "🐉" : "👹";
        echo $this->nom . " attaque et inflige " . $this->degats . " dégâts ! " . $emoji . "<br>";
        return $this->degats;
    }

    public function afficherInfo() {
        echo "Monstre : " . $this->nom . " (PV: " . $this->pv . "/" . $this->pv_max;
        echo ", Dégâts: " . $this->degats . ", XP: " . $this->xp_donne . ")<br>";
    }
}

$goblin = new Monstre("Goblin", 30, 5, 10);
$orc = new Monstre("Orc", 80, 15, 50);
$dragon = new Monstre("Dragon", 300, 50, 500);

$goblin->afficherInfo();
$orc->afficherInfo();
$dragon->afficherInfo();

$goblin->attaquer();
$orc->attaquer();
$dragon->attaquer();
?>
```

</details>

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **Le constructeur s'appelle TOUJOURS `__construct`** (avec 2 underscores !)

✅ **Il s'exécute AUTOMATIQUEMENT** quand tu spawnes un personnage

✅ **Il permet de spawner un personnage en 1 ligne** au lieu de 7

✅ **Tu donnes les stats directement** : `new Personnage("Thorin", 120, 30, "Épée")`

✅ **Tu peux mettre des valeurs par défaut** : `__construct($n, $pv, $f, $arme, $niv = 1)`

✅ **L'ordre des paramètres est important !**

---

## 📊 Récapitulatif

| Sans constructeur | Avec constructeur |
|-------------------|-------------------|
| `$perso = new Personnage();` | `$perso = new Personnage("Thorin", 120, 30, "Épée");` |
| `$perso->nom = "Thorin";` | ✨ Tout est déjà configuré ! |
| `$perso->pv = 120;` | |
| `$perso->force = 30;` | |
| `$perso->arme = "Épée";` | |
| **= 5 lignes** | **= 1 ligne** |

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre **L'HÉRITAGE** !

**C'est quoi ?**

Créer des classes qui **héritent** d'autres classes !

**Exemple :**
- Tu as une classe `Personnage`
- Tu crées une classe `Guerrier` qui hérite de `Personnage`
- `Guerrier` a **TOUT** ce que `Personnage` a, **PLUS** des trucs en plus (rage, armure lourde...) !

C'est comme un système de classes dans un RPG : Personnage → Guerrier / Mage / Archer ! 🎮

**Tu vas adorer !** 🚀

---

Mais pour l'instant, **FAIS L'EXERCICE** !

Le constructeur est **SUPER IMPORTANT**. Tu vas l'utiliser **TOUT LE TEMPS** en POO.

---

**🎮 Bravo, tu progresses vraiment bien !**

*PS : Si tu as réussi l'exercice, GG ! Tu mérites une pause gaming ! 🎯*