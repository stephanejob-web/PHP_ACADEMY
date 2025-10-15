# 🧱 POO pour Maçons - Cours 02 : On construit ton premier mur en POO !

## 👷 Re-salut le bâtisseur !

Dans le cours 01, tu as compris que :
- **CLASSE** = le plan d'architecte
- **OBJET** = la construction réelle

C'était de la théorie. **Maintenant, on passe à la pratique !**

On va **VRAIMENT** créer ton premier mur en PHP, avec du vrai code que tu vas taper toi-même ! 💻

Prêt ? Allez, on y va !

---

## 🏗️ Étape 1 : Créer le plan du mur (la classe)

Quand tu dessines un plan de mur, tu notes quelles infos ?

- **La hauteur** (2m, 2.5m, 3m...)
- **La largeur** (3m, 4m, 5m...)
- **Le matériau** (brique, parpaing, placo...)

**En PHP, c'est exactement pareil !**

Voici comment on crée un plan de mur :

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}
?>
```

**Et voilà !** Tu viens de créer ton premier plan ! 🎉

---

## 🔍 Explications détaillées (ligne par ligne)

### Ligne 1 : `<?php`

Ça, tu connais déjà. C'est le début du code PHP.

---

### Ligne 2 : `class Mur {`

**`class`** → C'est le mot magique pour dire "je crée un plan"

**`Mur`** → C'est le nom de ton plan  
*Tu peux l'appeler comme tu veux : `Mur`, `Wall`, `Cloison`...  
Mais utilise un nom qui a du sens ! Pas `Truc` ou `Machin`* 😄

**`{`** → C'est l'accolade ouvrante. Elle marque le **début** du plan.

**Important :** En PHP, les noms de classes commencent par une **MAJUSCULE** : `Mur`, pas `mur`.

---

### Lignes 3 à 5 : Les propriétés

```php
    public $hauteur;
    public $largeur;
    public $materiaux;
```

**`public`** → Ça veut dire "visible par tout le monde"  
C'est comme un plan affiché sur le mur du bureau : tout le monde peut le voir et le modifier.

**`$hauteur`** → Une info que chaque mur doit avoir : sa hauteur

**`$largeur`** → Une info que chaque mur doit avoir : sa largeur

**`$materiaux`** → Une info que chaque mur doit avoir : son matériau

**Le point-virgule `;`** → OBLIGATOIRE à la fin de chaque ligne ! Sinon PHP va râler. 😤

**Ces infos s'appellent des PROPRIÉTÉS.**

---

### Ligne 6 : `}`

**`}`** → L'accolade fermante. Elle marque la **fin** du plan.

**SUPER IMPORTANT :** Chaque `{` doit avoir son `}` !

---

### Ligne 7 : `?>`

La fin du code PHP. (Tu peux même l'oublier en fin de fichier, PHP s'en fiche.)

---

**ATTENTION !** ⚠️

À ce stade, **tu n'as construit AUCUN mur !**

Tu as juste **dessiné le plan sur papier**.

C'est comme si tu avais le dessin d'une maison, mais que tu n'as encore rien construit sur le chantier.

---

## 🧱 Étape 2 : Construire un vrai mur (créer un objet)

Maintenant qu'on a le plan, **construisons un vrai mur !**

```php
<?php
// LE PLAN
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}

// JE CONSTRUIS UN VRAI MUR
$mur_salon = new Mur();
?>
```

**BOOM !** 💥 Tu viens de construire ton premier mur !

---

## 🔍 Explication de la ligne magique

```php
$mur_salon = new Mur();
```

Décortiquons cette ligne **super importante** :

---

**`$mur_salon`** → C'est le **nom** de ton mur  
*Comme quand tu dis "le mur du salon" ou "le mur de la chambre"*

Tu peux l'appeler comme tu veux :
- `$mur_chambre`
- `$mur_garage`
- `$premier_mur`

---

**`=`** → Le signe égal pour **assigner** (mettre quelque chose dans la variable)

---

**`new`** → **LE MOT LE PLUS IMPORTANT !**

C'est le mot magique qui dit à PHP :  
*"Construis-moi quelque chose MAINTENANT !"*

C'est comme si tu disais à ton équipe :  
*"Allez, on construit ce mur !"*

---

**`Mur()`** → Tu construis d'après le plan qui s'appelle `Mur`

Les **parenthèses `()`** sont **obligatoires**. Pour l'instant, on met rien dedans.  
*(On verra pourquoi plus tard dans le cours sur le constructeur)*

---

**`;`** → Le point-virgule de fin de ligne (toujours obligatoire !)

---

### En résumé, cette ligne dit :

*"Hé PHP, construis-moi un mur en suivant le plan `Mur`, et appelle-le `$mur_salon`."*

---

## 🤔 Mais... mon mur est vide !

Oui, t'as raison ! 👍

Ton mur **existe**, mais il n'a **pas encore de dimensions**.

C'est comme si tu avais posé les premières briques, mais que tu ne lui as pas encore donné sa hauteur, sa largeur, etc.

**Il faut maintenant lui donner ses caractéristiques !**

---

## 📏 Étape 3 : Donner les dimensions au mur

Maintenant qu'on a construit le mur, on va lui dire :
- Quelle **hauteur** il fait
- Quelle **largeur** il fait
- Quel **matériau** on utilise

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}

// Je construis le mur
$mur_salon = new Mur();

// Je lui donne ses dimensions
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique rouge";
?>
```

**Maintenant ton mur a ses vraies dimensions !** 🎉

---

## 🔍 La flèche bizarre `->` : ton outil le plus important !

```php
$mur_salon->hauteur = 2.5;
```

**La flèche `->` c'est ta RÈGLE de maçon !** 📏

Elle sert à **accéder aux propriétés** d'un objet.

---

### Traduction en français :

**`$mur_salon->hauteur = 2.5;`**  
→ *"Le mur du salon, sa hauteur, c'est 2.5 mètres."*

**`$mur_salon->largeur = 4;`**  
→ *"Le mur du salon, sa largeur, c'est 4 mètres."*

**`$mur_salon->materiaux = "brique rouge";`**  
→ *"Le mur du salon, son matériau, c'est de la brique rouge."*

---

### Comment lire la flèche `->` ?

Tu peux la lire comme **"de"** ou **"du"**.

**`$mur_salon->hauteur`** = "la hauteur **DU** mur du salon"

**`$voiture->couleur`** = "la couleur **DE** la voiture"

---

### ⚠️ ERREUR FRÉQUENTE !

**Ne confonds pas le point `.` et la flèche `->` !**

❌ **FAUX :** `$mur_salon.hauteur = 2.5;` (ça marche dans d'autres langages, mais PAS en PHP !)

✅ **JUSTE :** `$mur_salon->hauteur = 2.5;`

En PHP, c'est **TOUJOURS** la flèche `->` pour accéder aux propriétés d'un objet.

---

## 🎉 Étape 4 : Afficher les infos du mur

Maintenant qu'on a construit le mur et qu'on lui a donné ses dimensions...

**On veut voir le résultat !**

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}

$mur_salon = new Mur();
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique rouge";

// J'affiche les infos
echo "Le mur du salon mesure " . $mur_salon->hauteur . " mètres de haut<br>";
echo "Il fait " . $mur_salon->largeur . " mètres de large<br>";
echo "Il est en " . $mur_salon->materiaux . "<br>";
?>
```

---

### 📺 Ce que tu verras dans ton navigateur :

```
Le mur du salon mesure 2.5 mètres de haut
Il fait 4 mètres de large
Il est en brique rouge
```

**FÉLICITATIONS !** 🏆

Tu viens de créer, construire et afficher ton **premier objet en POO** !

---

## 🔥 La VRAIE puissance : créer plusieurs murs avec le même plan !

Maintenant, tu vas comprendre **POURQUOI** la POO c'est génial.

**UN SEUL PLAN, AUTANT DE MURS QUE TU VEUX !**

```php
<?php
class Mur {
    public $hauteur;
    public $largeur;
    public $materiaux;
}

// Mur 1 : Le salon
$mur_salon = new Mur();
$mur_salon->hauteur = 2.5;
$mur_salon->largeur = 4;
$mur_salon->materiaux = "brique rouge";

// Mur 2 : La chambre
$mur_chambre = new Mur();
$mur_chambre->hauteur = 2.8;
$mur_chambre->largeur = 3.5;
$mur_chambre->materiaux = "placo";

// Mur 3 : Le garage
$mur_garage = new Mur();
$mur_garage->hauteur = 3;
$mur_garage->largeur = 6;
$mur_garage->materiaux = "parpaing";

// J'affiche tout
echo "Salon : " . $mur_salon->materiaux . " (" . $mur_salon->hauteur . "m de haut)<br>";
echo "Chambre : " . $mur_chambre->materiaux . " (" . $mur_chambre->hauteur . "m de haut)<br>";
echo "Garage : " . $mur_garage->materiaux . " (" . $mur_garage->hauteur . "m de haut)<br>";
?>
```

---

### 📺 Résultat :

```
Salon : brique rouge (2.5m de haut)
Chambre : placo (2.8m de haut)
Garage : parpaing (3m de haut)
```

---

**TU VOIS LA MAGIE ?!** ✨

- **UN SEUL PLAN** (la classe `Mur`)
- **TROIS MURS DIFFÉRENTS** (trois objets)
- Chaque mur a **ses propres dimensions**
- Mais ils utilisent tous **le même modèle** !

C'est comme une usine qui fabrique des voitures : **un seul plan, mille voitures différentes** !

---

## ✍️ EXERCICE PRATIQUE (à faire absolument !)

Crée un fichier `mon_premier_mur.php` sur ton ordinateur et fais ceci :

### Instructions :

1. Crée la classe `Mur` avec les propriétés : `hauteur`, `largeur`, `materiaux`
2. Construis un mur pour **ta cuisine**
3. Donne-lui ces dimensions :
   - **Hauteur :** 2.6 mètres
   - **Largeur :** 5 mètres
   - **Matériau :** brique jaune
4. Affiche toutes ses infos avec `echo`

---

### Résultat attendu :

```
Le mur de la cuisine mesure 2.6 mètres de haut
Il fait 5 mètres de large
Il est en brique jaune
```

---

**Lance ton fichier PHP dans ton navigateur et vérifie que ça marche !**

Si ça ne marche pas, relis le cours et essaie de trouver ton erreur.  
Si ça marche, **BRAVO, TU ES UN CHAMPION !** 🏆

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`class Mur { }`** → Je crée le plan

✅ **`$mur = new Mur();`** → Je construis un objet réel d'après le plan

✅ **`$mur->hauteur = 2.5;`** → Je donne une valeur à une propriété

✅ **`$mur->hauteur`** → Je lis la valeur d'une propriété

✅ **La flèche `->` permet d'accéder aux propriétés d'un objet**

✅ **Un plan, autant d'objets que tu veux !**

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre à créer des **MÉTHODES**.

**C'est quoi une méthode ?**  
Les **ACTIONS** que peut faire ton mur !

Par exemple :
- Calculer sa surface **tout seul**
- Se repeindre **tout seul**
- Afficher sa fiche technique **tout seul**

Ton mur va devenir **INTELLIGENT** ! 🧠

---

Mais pour l'instant, **FAIS L'EXERCICE !**

Sérieux, prends 10 minutes et fais-le. C'est en **PRATIQUANT** qu'on apprend, pas en lisant.

Si tu sautes cet exercice, tu vas galérer au prochain cours. Je te préviens ! 😊

---

**👷 Allez, au boulot ! Tu es sur la bonne voie !**

*PS : Si tu as réussi l'exercice du premier coup, tu peux te féliciter. Tu es en train de devenir un vrai développeur ! 🎉*