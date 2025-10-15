# 🎮 POO pour Gamers - Cours 02 : On spawn ton premier personnage en POO !

## 🕹️ Re-salut le gamer !

Dans le cours 01, tu as compris que :
- **CLASSE** = le template de création de personnage
- **OBJET** = le personnage spawné dans le jeu

C'était de la théorie. **Maintenant, on passe à la pratique !**

On va **VRAIMENT** créer ton premier personnage en PHP, avec du vrai code que tu vas taper toi-même ! 💻

Prêt ? Allez, on y va !

---

## 🎯 Étape 1 : Créer le template (la classe)

Quand tu crées un template de personnage, tu notes quelles infos ?

- **Le nom** du personnage (Thorin, Gandalf, Legolas...)
- **Les points de vie** (100 PV, 150 PV...)
- **La force** (20, 30, 15...)
- **L'arme** équipée (Épée, Arc, Bâton...)

**En PHP, c'est exactement pareil !**

Voici comment on crée un template de personnage :

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;
}
?>
```

**Et voilà !** Tu viens de créer ton premier template ! 🎉

---

## 🔍 Explications détaillées (ligne par ligne)

### Ligne 1 : `<?php`

Ça, tu connais déjà. C'est le début du code PHP.

---

### Ligne 2 : `class Personnage {`

**`class`** → C'est le mot magique pour dire "je crée un template"

**`Personnage`** → C'est le nom de ton template  
*Tu peux l'appeler comme tu veux : `Personnage`, `Character`, `Hero`...  
Mais utilise un nom qui a du sens ! Pas `Truc` ou `Machin`* 😄

**`{`** → C'est l'accolade ouvrante. Elle marque le **début** du template.

**Important :** En PHP, les noms de classes commencent par une **MAJUSCULE** : `Personnage`, pas `personnage`.

---

### Lignes 3 à 6 : Les stats du personnage

```php
    public $nom;
    public $pv;
    public $force;
    public $arme;
```

**`public`** → Ça veut dire "visible par tout le monde"  
C'est comme un personnage visible dans le jeu : tout le monde peut le voir et interagir avec lui.

**`$nom`** → Une stat que chaque personnage doit avoir : son nom

**`$pv`** → Une stat que chaque personnage doit avoir : ses points de vie

**`$force`** → Une stat que chaque personnage doit avoir : sa force

**`$arme`** → Une stat que chaque personnage doit avoir : son arme équipée

**Le point-virgule `;`** → OBLIGATOIRE à la fin de chaque ligne ! Sinon PHP va râler. 😤

**Ces infos s'appellent des PROPRIÉTÉS** (ou stats dans le langage gaming).

---

### Ligne 7 : `}`

**`}`** → L'accolade fermante. Elle marque la **fin** du template.

**SUPER IMPORTANT :** Chaque `{` doit avoir son `}` !

---

### Ligne 8 : `?>`

La fin du code PHP. (Tu peux même l'oublier en fin de fichier, PHP s'en fiche.)

---

**ATTENTION !** ⚠️

À ce stade, **tu n'as spawné AUCUN personnage !**

Tu as juste **créé le template de personnage**.

C'est comme si tu avais l'écran de création de perso, mais que tu n'as encore cliqué sur aucun bouton.

---

## 🎮 Étape 2 : Spawner un vrai personnage (créer un objet)

Maintenant qu'on a le template, **spawnons un vrai personnage !**

```php
<?php
// LE TEMPLATE
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;
}

// JE SPAWN UN VRAI PERSONNAGE
$guerrier = new Personnage();
?>
```

**BOOM !** 💥 Tu viens de spawn ton premier personnage !

---

## 🔍 Explication de la ligne magique

```php
$guerrier = new Personnage();
```

Décortiquons cette ligne **super importante** :

---

**`$guerrier`** → C'est le **nom** de ton personnage  
*Comme quand tu dis "mon guerrier" ou "mon mage"*

Tu peux l'appeler comme tu veux :
- `$mage`
- `$archer`
- `$boss_final`

---

**`=`** → Le signe égal pour **assigner** (mettre quelque chose dans la variable)

---

**`new`** → **LE MOT LE PLUS IMPORTANT !**

C'est le mot magique qui dit à PHP :  
*"Spawn-moi ce personnage MAINTENANT !"*

C'est comme si tu cliquais sur **"Créer le personnage"** dans un jeu.

---

**`Personnage()`** → Tu spawn d'après le template qui s'appelle `Personnage`

Les **parenthèses `()`** sont **obligatoires**. Pour l'instant, on met rien dedans.  
*(On verra pourquoi plus tard dans le cours sur le constructeur)*

---

**`;`** → Le point-virgule de fin de ligne (toujours obligatoire !)

---

### En résumé, cette ligne dit :

*"Hé PHP, spawn-moi un personnage en suivant le template `Personnage`, et appelle-le `$guerrier`."*

---

## 🤔 Mais... mon personnage n'a pas de stats !

Oui, t'as raison ! 👍

Ton personnage **existe**, mais il n'a **pas encore de stats**.

C'est comme si tu avais spawné un personnage, mais que tu ne lui as pas encore donné son nom, ses PV, etc.

**Il faut maintenant lui donner ses stats !**

---

## 📊 Étape 3 : Donner les stats au personnage

Maintenant qu'on a spawné le personnage, on va lui dire :
- Quel **nom** il a
- Combien de **PV** il a
- Combien de **force** il a
- Quelle **arme** il équipe

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;
}

// Je spawn le personnage
$guerrier = new Personnage();

// Je lui donne ses stats
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";
?>
```

**Maintenant ton personnage a toutes ses stats !** 🎉

---

## 🔍 La flèche bizarre `->` : ton outil le plus important !

```php
$guerrier->nom = "Thorin";
```

**La flèche `->` c'est ton CURSEUR de sélection !** 🖱️

Elle sert à **accéder aux stats** d'un personnage.

---

### Traduction en français :

**`$guerrier->nom = "Thorin";`**  
→ *"Le guerrier, son nom, c'est Thorin."*

**`$guerrier->pv = 120;`**  
→ *"Le guerrier, ses points de vie, c'est 120."*

**`$guerrier->force = 30;`**  
→ *"Le guerrier, sa force, c'est 30."*

**`$guerrier->arme = "Épée légendaire";`**  
→ *"Le guerrier, son arme équipée, c'est l'Épée légendaire."*

---

### Comment lire la flèche `->` ?

Tu peux la lire comme **"de"** ou **"du"**.

**`$guerrier->nom`** = "le nom **DU** guerrier"

**`$mage->mana`** = "le mana **DU** mage"

---

### ⚠️ ERREUR FRÉQUENTE !

**Ne confonds pas le point `.` et la flèche `->` !**

❌ **FAUX :** `$guerrier.nom = "Thorin";` (ça marche dans d'autres langages, mais PAS en PHP !)

✅ **JUSTE :** `$guerrier->nom = "Thorin";`

En PHP, c'est **TOUJOURS** la flèche `->` pour accéder aux propriétés d'un objet.

---

## 🎉 Étape 4 : Afficher les stats du personnage

Maintenant qu'on a spawné le personnage et qu'on lui a donné ses stats...

**On veut voir le résultat !**

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;
}

$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";

// J'affiche les stats
echo "=== FICHE PERSONNAGE ===<br>";
echo "Nom : " . $guerrier->nom . "<br>";
echo "PV : " . $guerrier->pv . "<br>";
echo "Force : " . $guerrier->force . "<br>";
echo "Arme : " . $guerrier->arme . "<br>";
echo "========================<br>";
?>
```

---

### 📺 Ce que tu verras dans ton navigateur :

```
=== FICHE PERSONNAGE ===
Nom : Thorin
PV : 120
Force : 30
Arme : Épée légendaire
========================
```

**FÉLICITATIONS !** 🏆

Tu viens de créer, spawner et afficher ton **premier personnage en POO** !

---

## 🔥 La VRAIE puissance : créer plusieurs personnages avec le même template !

Maintenant, tu vas comprendre **POURQUOI** la POO c'est génial.

**UN SEUL TEMPLATE, AUTANT DE PERSONNAGES QUE TU VEUX !**

```php
<?php
class Personnage {
    public $nom;
    public $pv;
    public $force;
    public $arme;
}

// Personnage 1 : Le guerrier
$guerrier = new Personnage();
$guerrier->nom = "Thorin";
$guerrier->pv = 120;
$guerrier->force = 30;
$guerrier->arme = "Épée légendaire";

// Personnage 2 : Le mage
$mage = new Personnage();
$mage->nom = "Gandalf";
$mage->pv = 80;
$mage->force = 10;
$mage->arme = "Bâton magique";

// Personnage 3 : L'archer
$archer = new Personnage();
$archer->nom = "Legolas";
$archer->pv = 100;
$archer->force = 20;
$archer->arme = "Arc elfique";

// J'affiche tout
echo $guerrier->nom . " (PV: " . $guerrier->pv . ", Force: " . $guerrier->force . ")<br>";
echo $mage->nom . " (PV: " . $mage->pv . ", Force: " . $mage->force . ")<br>";
echo $archer->nom . " (PV: " . $archer->pv . ", Force: " . $archer->force . ")<br>";
?>
```

---

### 📺 Résultat :

```
Thorin (PV: 120, Force: 30)
Gandalf (PV: 80, Force: 10)
Legolas (PV: 100, Force: 20)
```

---

**TU VOIS LA MAGIE ?!** ✨

- **UN SEUL TEMPLATE** (la classe `Personnage`)
- **TROIS PERSONNAGES DIFFÉRENTS** (trois objets)
- Chaque personnage a **ses propres stats**
- Mais ils utilisent tous **le même modèle** !

C'est comme dans un MMORPG : **un template de classe, des milliers de personnages** !

---

## ✍️ EXERCICE PRATIQUE (à faire absolument !)

Crée un fichier `mon_premier_personnage.php` sur ton ordinateur et fais ceci :

### Instructions :

1. Crée la classe `Personnage` avec les propriétés : `nom`, `pv`, `force`, `arme`
2. Spawn un personnage pour **un assassin**
3. Donne-lui ces stats :
   - **Nom :** Shadow
   - **PV :** 90
   - **Force :** 25
   - **Arme :** Dagues empoisonnées
4. Affiche toutes ses stats avec `echo`

---

### Résultat attendu :

```
=== FICHE PERSONNAGE ===
Nom : Shadow
PV : 90
Force : 25
Arme : Dagues empoisonnées
========================
```

---

**Lance ton fichier PHP dans ton navigateur et vérifie que ça marche !**

Si ça ne marche pas, relis le cours et essaie de trouver ton erreur.  
Si ça marche, **BRAVO, TU ES UN CHAMPION !** 🏆

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`class Personnage { }`** → Je crée le template

✅ **`$perso = new Personnage();`** → Je spawn un personnage réel d'après le template

✅ **`$perso->nom = "Thorin";`** → Je donne une valeur à une propriété

✅ **`$perso->nom`** → Je lis la valeur d'une propriété

✅ **La flèche `->` permet d'accéder aux propriétés d'un objet**

✅ **Un template, autant de personnages que tu veux !**

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre à créer des **MÉTHODES**.

**C'est quoi une méthode ?**  
Les **ACTIONS** que peut faire ton personnage !

Par exemple :
- Attaquer un ennemi **tout seul**
- Se soigner **tout seul**
- Level up **tout seul**

Ton personnage va devenir **INTELLIGENT** ! 🧠

---

Mais pour l'instant, **FAIS L'EXERCICE !**

Sérieux, prends 10 minutes et fais-le. C'est en **PRATIQUANT** qu'on apprend, pas en lisant.

Si tu sautes cet exercice, tu vas galérer au prochain cours. Je te préviens ! 😊

---

**🎮 Allez, au clavier ! Tu es sur la bonne voie !**

*PS : Si tu as réussi l'exercice du premier coup, tu peux te féliciter. Tu es en train de devenir un vrai développeur ! 🎉*