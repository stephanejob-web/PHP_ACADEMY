# 👨‍🍳 POO pour Cuisiniers - Cours 02 : On prépare ta première recette en POO !

## 🍳 Re-salut le chef !

Dans le cours 01, tu as compris que :
- **CLASSE** = la fiche recette vierge
- **OBJET** = le plat préparé

C'était de la théorie. **Maintenant, on passe à la pratique !**

On va **VRAIMENT** créer ta première recette en PHP, avec du vrai code que tu vas taper toi-même ! 💻

Prêt ? Allez, on y va !

---

## 🍽️ Étape 1 : Créer la fiche recette (la classe)

Quand tu écris une fiche recette, tu notes quelles infos ?

- **Le nom** du plat (Gâteau au chocolat, Tarte aux pommes...)
- **Le temps de cuisson** (30 min, 45 min...)
- **La température** du four (180°C, 200°C...)
- **Le nombre de portions** (4, 6, 8 personnes...)

**En PHP, c'est exactement pareil !**

Voici comment on crée une fiche recette :

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}
?>
```

**Et voilà !** Tu viens de créer ta première fiche recette ! 🎉

---

## 🔍 Explications détaillées (ligne par ligne)

### Ligne 1 : `<?php`

Ça, tu connais déjà. C'est le début du code PHP.

---

### Ligne 2 : `class Recette {`

**`class`** → C'est le mot magique pour dire "je crée une fiche recette"

**`Recette`** → C'est le nom de ta fiche recette  
*Tu peux l'appeler comme tu veux : `Recette`, `Plat`, `Dessert`...  
Mais utilise un nom qui a du sens ! Pas `Truc` ou `Machin`* 😄

**`{`** → C'est l'accolade ouvrante. Elle marque le **début** de la fiche recette.

**Important :** En PHP, les noms de classes commencent par une **MAJUSCULE** : `Recette`, pas `recette`.

---

### Lignes 3 à 6 : Les informations de la recette

```php
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
```

**`public`** → Ça veut dire "visible par tout le monde"  
C'est comme une fiche recette affichée dans la cuisine : tout le monde peut la voir et la modifier.

**`$nom`** → Une info que chaque recette doit avoir : son nom

**`$temps_cuisson`** → Une info que chaque recette doit avoir : son temps de cuisson

**`$temperature`** → Une info que chaque recette doit avoir : sa température de cuisson

**`$portions`** → Une info que chaque recette doit avoir : son nombre de portions

**Le point-virgule `;`** → OBLIGATOIRE à la fin de chaque ligne ! Sinon PHP va râler. 😤

**Ces infos s'appellent des PROPRIÉTÉS.**

---

### Ligne 7 : `}`

**`}`** → L'accolade fermante. Elle marque la **fin** de la fiche recette.

**SUPER IMPORTANT :** Chaque `{` doit avoir son `}` !

---

### Ligne 8 : `?>`

La fin du code PHP. (Tu peux même l'oublier en fin de fichier, PHP s'en fiche.)

---

**ATTENTION !** ⚠️

À ce stade, **tu n'as préparé AUCUN plat !**

Tu as juste **créé la fiche recette vierge**.

C'est comme si tu avais le formulaire d'une recette, mais que tu n'as encore rien cuisiné.

---

## 🥘 Étape 2 : Préparer un vrai plat (créer un objet)

Maintenant qu'on a la fiche recette, **préparons un vrai plat !**

```php
<?php
// LA FICHE RECETTE
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}

// JE PRÉPARE UN VRAI PLAT
$gateau_chocolat = new Recette();
?>
```

**BOOM !** 💥 Tu viens de préparer ton premier plat !

---

## 🔍 Explication de la ligne magique

```php
$gateau_chocolat = new Recette();
```

Décortiquons cette ligne **super importante** :

---

**`$gateau_chocolat`** → C'est le **nom** de ton plat  
*Comme quand tu dis "le gâteau au chocolat" ou "la tarte aux pommes"*

Tu peux l'appeler comme tu veux :
- `$tarte_pommes`
- `$mousse_chocolat`
- `$premier_dessert`

---

**`=`** → Le signe égal pour **assigner** (mettre quelque chose dans la variable)

---

**`new`** → **LE MOT LE PLUS IMPORTANT !**

C'est le mot magique qui dit à PHP :  
*"Prépare-moi ce plat MAINTENANT !"*

C'est comme si tu disais à ton commis :  
*"Allez, on cuisine ce gâteau !"*

---

**`Recette()`** → Tu prépares d'après la fiche recette qui s'appelle `Recette`

Les **parenthèses `()`** sont **obligatoires**. Pour l'instant, on met rien dedans.  
*(On verra pourquoi plus tard dans le cours sur le constructeur)*

---

**`;`** → Le point-virgule de fin de ligne (toujours obligatoire !)

---

### En résumé, cette ligne dit :

*"Hé PHP, prépare-moi un plat en suivant la fiche recette `Recette`, et appelle-le `$gateau_chocolat`."*

---

## 🤔 Mais... mon plat n'a pas d'infos !

Oui, t'as raison ! 👍

Ton plat **existe**, mais il n'a **pas encore d'informations**.

C'est comme si tu avais sorti tous les ingrédients, mais que tu ne leur as pas encore donné les quantités et le temps de cuisson.

**Il faut maintenant lui donner ses informations !**

---

## 📋 Étape 3 : Remplir la fiche recette

Maintenant qu'on a préparé le plat, on va lui dire :
- Quel **nom** il a
- Quel **temps de cuisson** il nécessite
- Quelle **température** utiliser
- Combien de **portions** il fait

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}

// Je prépare le plat
$gateau_chocolat = new Recette();

// Je remplis sa fiche recette
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;
?>
```

**Maintenant ton plat a toutes ses infos !** 🎉

---

## 🔍 La flèche bizarre `->` : ton ustensile le plus important !

```php
$gateau_chocolat->nom = "Gâteau au chocolat";
```

**La flèche `->` c'est ta LOUCHE de chef !** 🥄

Elle sert à **accéder aux informations** d'un plat.

---

### Traduction en français :

**`$gateau_chocolat->nom = "Gâteau au chocolat";`**  
→ *"Le gâteau au chocolat, son nom, c'est 'Gâteau au chocolat'."*

**`$gateau_chocolat->temps_cuisson = 35;`**  
→ *"Le gâteau au chocolat, son temps de cuisson, c'est 35 minutes."*

**`$gateau_chocolat->temperature = 180;`**  
→ *"Le gâteau au chocolat, sa température de cuisson, c'est 180 degrés."*

**`$gateau_chocolat->portions = 8;`**  
→ *"Le gâteau au chocolat, c'est pour 8 personnes."*

---

### Comment lire la flèche `->` ?

Tu peux la lire comme **"de"** ou **"du"**.

**`$gateau_chocolat->nom`** = "le nom **DU** gâteau au chocolat"

**`$tarte->temperature`** = "la température **DE** la tarte"

---

### ⚠️ ERREUR FRÉQUENTE !

**Ne confonds pas le point `.` et la flèche `->` !**

❌ **FAUX :** `$gateau_chocolat.nom = "Gâteau";` (ça marche dans d'autres langages, mais PAS en PHP !)

✅ **JUSTE :** `$gateau_chocolat->nom = "Gâteau au chocolat";`

En PHP, c'est **TOUJOURS** la flèche `->` pour accéder aux propriétés d'un objet.

---

## 🎉 Étape 4 : Afficher la fiche recette

Maintenant qu'on a préparé le plat et qu'on lui a donné toutes ses infos...

**On veut voir le résultat !**

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}

$gateau_chocolat = new Recette();
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;

// J'affiche la fiche recette
echo "Recette : " . $gateau_chocolat->nom . "<br>";
echo "Temps de cuisson : " . $gateau_chocolat->temps_cuisson . " minutes<br>";
echo "Température : " . $gateau_chocolat->temperature . "°C<br>";
echo "Portions : " . $gateau_chocolat->portions . " personnes<br>";
?>
```

---

### 📺 Ce que tu verras dans ton navigateur :

```
Recette : Gâteau au chocolat
Temps de cuisson : 35 minutes
Température : 180°C
Portions : 8 personnes
```

**FÉLICITATIONS !** 🏆

Tu viens de créer, préparer et afficher ta **première recette en POO** !

---

## 🔥 La VRAIE puissance : créer plusieurs plats avec la même fiche !

Maintenant, tu vas comprendre **POURQUOI** la POO c'est génial.

**UNE SEULE FICHE RECETTE, AUTANT DE PLATS QUE TU VEUX !**

```php
<?php
class Recette {
    public $nom;
    public $temps_cuisson;
    public $temperature;
    public $portions;
}

// Plat 1 : Gâteau au chocolat
$gateau_chocolat = new Recette();
$gateau_chocolat->nom = "Gâteau au chocolat";
$gateau_chocolat->temps_cuisson = 35;
$gateau_chocolat->temperature = 180;
$gateau_chocolat->portions = 8;

// Plat 2 : Tarte aux pommes
$tarte_pommes = new Recette();
$tarte_pommes->nom = "Tarte aux pommes";
$tarte_pommes->temps_cuisson = 40;
$tarte_pommes->temperature = 190;
$tarte_pommes->portions = 6;

// Plat 3 : Cookies
$cookies = new Recette();
$cookies->nom = "Cookies au chocolat";
$cookies->temps_cuisson = 12;
$cookies->temperature = 175;
$cookies->portions = 20;

// J'affiche tout
echo $gateau_chocolat->nom . " : " . $gateau_chocolat->temps_cuisson . " min à " . $gateau_chocolat->temperature . "°C<br>";
echo $tarte_pommes->nom . " : " . $tarte_pommes->temps_cuisson . " min à " . $tarte_pommes->temperature . "°C<br>";
echo $cookies->nom . " : " . $cookies->temps_cuisson . " min à " . $cookies->temperature . "°C<br>";
?>
```

---

### 📺 Résultat :

```
Gâteau au chocolat : 35 min à 180°C
Tarte aux pommes : 40 min à 190°C
Cookies au chocolat : 12 min à 175°C
```

---

**TU VOIS LA MAGIE ?!** ✨

- **UNE SEULE FICHE RECETTE** (la classe `Recette`)
- **TROIS PLATS DIFFÉRENTS** (trois objets)
- Chaque plat a **ses propres infos**
- Mais ils utilisent tous **le même modèle** !

C'est comme dans un restaurant : **une fiche recette, cent plats préparés** !

---

## ✍️ EXERCICE PRATIQUE (à faire absolument !)

Crée un fichier `ma_premiere_recette.php` sur ton ordinateur et fais ceci :

### Instructions :

1. Crée la classe `Recette` avec les propriétés : `nom`, `temps_cuisson`, `temperature`, `portions`
2. Prépare une recette pour **une quiche lorraine**
3. Donne-lui ces infos :
   - **Nom :** Quiche lorraine
   - **Temps de cuisson :** 45 minutes
   - **Température :** 200°C
   - **Portions :** 6 personnes
4. Affiche toutes ses infos avec `echo`

---

### Résultat attendu :

```
Recette : Quiche lorraine
Temps de cuisson : 45 minutes
Température : 200°C
Portions : 6 personnes
```

---

**Lance ton fichier PHP dans ton navigateur et vérifie que ça marche !**

Si ça ne marche pas, relis le cours et essaie de trouver ton erreur.  
Si ça marche, **BRAVO, TU ES UN CHAMPION !** 🏆

---

## 🧠 Ce que tu DOIS retenir de ce cours

✅ **`class Recette { }`** → Je crée la fiche recette

✅ **`$plat = new Recette();`** → Je prépare un plat réel d'après la fiche

✅ **`$plat->nom = "Gâteau";`** → Je donne une valeur à une propriété

✅ **`$plat->nom`** → Je lis la valeur d'une propriété

✅ **La flèche `->` permet d'accéder aux propriétés d'un objet**

✅ **Une fiche recette, autant de plats que tu veux !**

---

## ⏭️ Dans le prochain cours...

Tu vas apprendre à créer des **MÉTHODES**.

**C'est quoi une méthode ?**  
Les **ACTIONS** que peut faire ta recette !

Par exemple :
- Calculer les calories **toute seule**
- Ajuster les portions **toute seule**
- Afficher la fiche technique **toute seule**

Ta recette va devenir **INTELLIGENTE** ! 🧠

---

Mais pour l'instant, **FAIS L'EXERCICE !**

Sérieux, prends 10 minutes et fais-le. C'est en **PRATIQUANT** qu'on apprend, pas en lisant.

Si tu sautes cet exercice, tu vas galérer au prochain cours. Je te préviens ! 😊

---

**👨‍🍳 Allez, au fourneau ! Tu es sur la bonne voie !**

*PS : Si tu as réussi l'exercice du premier coup, tu peux te féliciter. Tu es en train de devenir un vrai développeur ! 🎉*