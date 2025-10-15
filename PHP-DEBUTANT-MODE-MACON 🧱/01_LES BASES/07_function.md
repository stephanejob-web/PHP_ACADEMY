# 🧱 Cours PHP pour Débutant – Les Fonctions 👷‍♂️

---

## 🚧 Pourquoi les fonctions ?

Sur ton chantier, il y a des tâches que tu fais **souvent** :

- faire du mortier 🪣  
- poser une brique 🧱  
- vérifier le niveau 📏  
- calculer la surface d’un mur 📐  

Tu n’as pas besoin qu’on te réexplique à chaque fois **comment faire**.  
Tu sais déjà la méthode.  
Tu pourrais presque dire à ton apprenti :
> “Regarde, je te montre une fois comment on fait, et après tu pourras le refaire tout seul !”

💬 En PHP, une **fonction**, c’est exactement ça :
> Tu apprends à ton ordinateur à faire une action,  
> et ensuite, il peut la refaire tout seul quand tu lui demandes.

---

## 🧰 1️⃣ Qu’est-ce qu’une fonction ?

Une fonction, c’est comme une **recette** ou une **machine de chantier**.  
Tu la construis une fois, et tu peux **la réutiliser** quand tu veux.

Exemple :
```php
function faireDuMortier() {
    echo "Je mélange le sable, le ciment et l’eau.<br>";
    echo "Le mortier est prêt !<br>";
}
```

Ici :
- `function` → tu dis à PHP : “Je crée une nouvelle recette.”  
- `faireDuMortier` → c’est le nom de la recette.  
- `{ ... }` → c’est la liste des actions à faire.

---

## ⚙️ 2️⃣ Utiliser une fonction (la faire travailler)

Maintenant que tu as créé ta recette, tu peux l’utiliser :  
```php
faireDuMortier();
```

Résultat :
```
Je mélange le sable, le ciment et l’eau.
Le mortier est prêt !
```

💬 Tu viens de dire à PHP :
> “Fais le mortier !”

Et si tu veux le refaire encore une fois :
```php
faireDuMortier();
faireDuMortier();
```

Résultat :
```
Je mélange le sable, le ciment et l’eau.
Le mortier est prêt !
Je mélange le sable, le ciment et l’eau.
Le mortier est prêt !
```

🧱 Tu vois ?  
Tu n’as pas eu besoin de tout réécrire :  
tu as juste **rappelé la même fonction**.

---

## 📦 3️⃣ Pourquoi c’est utile ?

Imagine que tu veux faire du mortier **10 fois dans la journée**.  
Tu n’as pas envie d’écrire 20 lignes de code à chaque fois.

Avec une fonction, tu as juste besoin de **l’appeler**.  
Tu gagnes du temps, tu fais moins d’erreurs, et ton code est plus propre.

C’est comme avoir **ta propre bétonnière** :  
tu appuies sur le bouton, elle fait le boulot.

---

## 🧩 4️⃣ Les fonctions avec des paramètres

Parfois, tu veux préciser ce que tu veux faire.

Sur ton chantier, tu pourrais dire :
> “Fais-moi du mortier avec **3 seaux de sable** et **1 de ciment**.”

Tu donnes des **valeurs** à ta fonction.

En PHP :
```php
function faireDuMortier($sable, $ciment) {
    echo "Je prends $sable seaux de sable et $ciment seaux de ciment.<br>";
    echo "Je mélange le tout avec de l’eau.<br>";
}
```

Et pour l’utiliser :
```php
faireDuMortier(3, 1);
```

Résultat :
```
Je prends 3 seaux de sable et 1 seau de ciment.
Je mélange le tout avec de l’eau.
```

💬 Les nombres entre parenthèses `(3, 1)` sont des **paramètres**.  
Ce sont les **valeurs que tu donnes à ta recette**.

---

## 🧮 5️⃣ Les fonctions qui te donnent un résultat (`return`)

Une fonction peut aussi **te rendre un résultat**, comme une calculatrice.

Exemple :
```php
function calculerPrix($surface, $prix_m2) {
    $total = $surface * $prix_m2;
    return $total;
}
```

💬 `return` veut dire :
> “Rends-moi le résultat du calcul.”

Et tu peux l’utiliser ainsi :
```php
$prix = calculerPrix(10, 40);
echo "Le mur coûte $prix euros.";
```

Résultat :
```
Le mur coûte 400 euros.
```

---

## 🧠 6️⃣ Pourquoi c’est pratique ?

- Tu écris **une seule fois** la méthode.  
- Tu peux la **réutiliser partout**.  
- Tu peux la **changer facilement** sans tout casser.

C’est comme un **outil personnalisé** que tu fabriques une fois,  
et que tu sors de ta caisse quand tu en as besoin.

---

## 🧱 En résumé simple

| Ce que c’est | Dans la vraie vie | En PHP |
|---------------|------------------|--------|
| Une fonction | Une recette ou une machine que tu peux refaire | `function nom() { ... }` |
| Lancer la fonction | Appuyer sur le bouton “ON” | `nom();` |
| Paramètres | Les ingrédients que tu donnes | `(3, 1)` |
| `return` | Le résultat que la machine te rend | `return $total;` |

---

## 💬 Phrase à retenir :
> Une fonction, c’est comme une **recette de chantier** :  
> tu la notes une fois, et tu peux la refaire quand tu veux,  
> sans tout réécrire, juste en donnant les bons ingrédients. 🍲🧱

---

# 🧪 Exercices (niveau débutant)

### Exercice 1
Crée une fonction `direBonjour()` qui affiche :  
> “Bonjour chef, prêt à travailler !”

### Exercice 2
Appelle cette fonction 3 fois.

### Exercice 3
Crée une fonction `preparerMortier()` qui affiche :  
> “Je mélange le ciment, le sable et l’eau.”

### Exercice 4
Crée une fonction `preparerMortier($sable, $ciment)`  
qui affiche combien de seaux tu prends de chaque.

### Exercice 5
Crée une fonction `calculerSurface($largeur, $hauteur)`  
qui affiche la surface du mur.

### Exercice 6
Crée une fonction `calculerPrix($surface, $prix_m2)`  
qui renvoie le total et affiche le résultat.

### Exercice 7
Crée une fonction `direClient($nom)`  
qui affiche :  
> “Bonjour [nom], votre devis est prêt.”

### Exercice 8
Crée une fonction `afficherStock($materiau, $quantite)`  
qui affiche :  
> “Il reste [quantite] [materiau].”

### Exercice 9
Crée une fonction `addition($a, $b)` qui renvoie la somme de deux nombres.

### Exercice 10
Crée une fonction `calculerMur($largeur, $hauteur, $prix_m2)`  
qui calcule la surface, puis le prix, et affiche :  
> “Le mur de [surface] m² coûte [prix] euros.”

---

# ✅ Solutions

```php
// Exercice 1
function direBonjour() {
    echo "Bonjour chef, prêt à travailler !<br>";
}
direBonjour();

// Exercice 2
direBonjour();
direBonjour();
direBonjour();

// Exercice 3
function preparerMortier() {
    echo "Je mélange le ciment, le sable et l’eau.<br>";
}
preparerMortier();

// Exercice 4
function preparerMortier($sable, $ciment) {
    echo "Je prends $sable seaux de sable et $ciment seaux de ciment.<br>";
    echo "Je mélange le tout avec de l’eau.<br>";
}
preparerMortier(3, 1);

// Exercice 5
function calculerSurface($largeur, $hauteur) {
    $surface = $largeur * $hauteur;
    echo "La surface du mur est de $surface m².<br>";
}
calculerSurface(5, 2);

// Exercice 6
function calculerPrix($surface, $prix_m2) {
    $total = $surface * $prix_m2;
    echo "Le prix du mur est de $total euros.<br>";
}
calculerPrix(10, 40);

// Exercice 7
function direClient($nom) {
    echo "Bonjour $nom, votre devis est prêt.<br>";
}
direClient("Martin");

// Exercice 8
function afficherStock($materiau, $quantite) {
    echo "Il reste $quantite $materiau.<br>";
}
afficherStock("sacs de ciment", 12);

// Exercice 9
function addition($a, $b) {
    return $a + $b;
}
echo "Le résultat de l’addition est " . addition(4, 6) . "<br>";

// Exercice 10
function calculerMur($largeur, $hauteur, $prix_m2) {
    $surface = $largeur * $hauteur;
    $prix = $surface * $prix_m2;
    echo "Le mur de $surface m² coûte $prix euros.<br>";
}
calculerMur(5, 2, 40);
```
