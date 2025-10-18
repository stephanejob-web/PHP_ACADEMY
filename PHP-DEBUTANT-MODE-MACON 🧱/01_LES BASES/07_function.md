# 🧱 Cours PHP pour Débutant – Les Fonctions 👷‍♂️

---

## 🚧 Pourquoi les fonctions ?

Sur ton chantier, il y a des tâches que tu fais **souvent** :

- faire du mortier 🪣  
- poser une brique 🧱  
- vérifier le niveau 📏  
- calculer la surface d'un mur 📐  

Tu n'as pas besoin qu'on te réexplique à chaque fois **comment faire**.  
Tu sais déjà la méthode.  
Tu pourrais presque dire à ton apprenti :
> "Regarde, je te montre une fois comment on fait, et après tu pourras le refaire tout seul !"

💬 En PHP, une **fonction**, c'est exactement ça :
> Tu apprends à ton ordinateur à faire une action,  
> et ensuite, il peut la refaire tout seul quand tu lui demandes.

---

## 🧰 1️⃣ Qu'est-ce qu'une fonction ?

Une fonction, c'est comme une **recette** ou une **machine de chantier**.  
Tu la construis une fois, et tu peux **la réutiliser** quand tu veux.

Exemple :
```php
function faireDuMortier() {
    echo "Je mélange le sable, le ciment et l'eau.<br>";
    echo "Le mortier est prêt !<br>";
}
```

Ici :
- `function` → tu dis à PHP : "Je crée une nouvelle recette."  
- `faireDuMortier` → c'est le nom de la recette.  
- `{ ... }` → c'est la liste des actions à faire.

---

## ⚙️ 2️⃣ Utiliser une fonction (la faire travailler)

Maintenant que tu as créé ta recette, tu peux l'utiliser :  
```php
faireDuMortier();
```

Résultat :
```
Je mélange le sable, le ciment et l'eau.
Le mortier est prêt !
```

💬 Tu viens de dire à PHP :
> "Fais le mortier !"

Et si tu veux le refaire encore une fois :
```php
faireDuMortier();
faireDuMortier();
```

Résultat :
```
Je mélange le sable, le ciment et l'eau.
Le mortier est prêt !
Je mélange le sable, le ciment et l'eau.
Le mortier est prêt !
```

🧱 Tu vois ?  
Tu n'as pas eu besoin de tout réécrire :  
tu as juste **rappelé la même fonction**.

---

## 📦 3️⃣ Pourquoi c'est utile ?

Imagine que tu veux faire du mortier **10 fois dans la journée**.  
Tu n'as pas envie d'écrire 20 lignes de code à chaque fois.

Avec une fonction, tu as juste besoin de **l'appeler**.  
Tu gagnes du temps, tu fais moins d'erreurs, et ton code est plus propre.

C'est comme avoir **ta propre bétonnière** :  
tu appuies sur le bouton, elle fait le boulot.

---

## 🧩 4️⃣ Les fonctions avec des paramètres

Parfois, tu veux préciser ce que tu veux faire.

Sur ton chantier, tu pourrais dire :
> "Fais-moi du mortier avec **3 seaux de sable** et **1 de ciment**."

Tu donnes des **valeurs** à ta fonction.

En PHP :
```php
function faireDuMortier($sable, $ciment) {
    echo "Je prends $sable seaux de sable et $ciment seaux de ciment.<br>";
    echo "Je mélange le tout avec de l'eau.<br>";
}
```

Et pour l'utiliser :
```php
faireDuMortier(3, 1);
```

Résultat :
```
Je prends 3 seaux de sable et 1 seau de ciment.
Je mélange le tout avec de l'eau.
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
> "Rends-moi le résultat du calcul."

Et tu peux l'utiliser ainsi :
```php
$prix = calculerPrix(10, 40);
echo "Le mur coûte $prix euros.";
```

Résultat :
```
Le mur coûte 400 euros.
```

---

## 🧠 6️⃣ Pourquoi c'est pratique ?

- Tu écris **une seule fois** la méthode.  
- Tu peux la **réutiliser partout**.  
- Tu peux la **changer facilement** sans tout casser.

C'est comme un **outil personnalisé** que tu fabriques une fois,  
et que tu sors de ta caisse quand tu en as besoin.

---

## 🧱 En résumé simple

| Ce que c'est | Dans la vraie vie | En PHP |
|---------------|------------------|--------|
| Une fonction | Une recette ou une machine que tu peux refaire | `function nom() { ... }` |
| Lancer la fonction | Appuyer sur le bouton "ON" | `nom();` |
| Paramètres | Les ingrédients que tu donnes | `(3, 1)` |
| `return` | Le résultat que la machine te rend | `return $total;` |

---

## 💬 Phrase à retenir :
> Une fonction, c'est comme une **recette de chantier** :  
> tu la notes une fois, et tu peux la refaire quand tu veux,  
> sans tout réécrire, juste en donnant les bons ingrédients. 🍲🧱

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Ta première fonction
**Énoncé :**  
Crée une fonction `direBonjour()` qui affiche le message "Bonjour chef, prêt à travailler !"  
Puis appelle cette fonction une fois.

**Ce qu'on attend :**  
- Une fonction nommée `direBonjour`
- Aucun paramètre (parenthèses vides)
- Un `echo` qui affiche le message
- Un appel de la fonction avec `direBonjour();`

**Exemple de résultat attendu :**
```
Bonjour chef, prêt à travailler !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direBonjour() {
    echo "Bonjour chef, prêt à travailler !";
}

direBonjour();
?>
```
</details>

---

## 📝 Exercice 2 : Appeler plusieurs fois
**Énoncé :**  
En utilisant la fonction `direBonjour()` de l'exercice précédent, appelle-la **3 fois** pour afficher le message trois fois.

**Ce qu'on attend :**  
- La même fonction `direBonjour()`
- Trois appels consécutifs de cette fonction
- Trois affichages du message

**Exemple de résultat attendu :**
```
Bonjour chef, prêt à travailler !
Bonjour chef, prêt à travailler !
Bonjour chef, prêt à travailler !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direBonjour() {
    echo "Bonjour chef, prêt à travailler !<br>";
}

direBonjour();
direBonjour();
direBonjour();
?>
```
</details>

---

## 📝 Exercice 3 : Fonction simple sans paramètre
**Énoncé :**  
Crée une fonction `preparerMortier()` qui affiche le message "Je mélange le ciment, le sable et l'eau."  
Puis appelle cette fonction.

**Ce qu'on attend :**  
- Une fonction nommée `preparerMortier`
- Un message d'affichage qui décrit l'action
- Un appel de la fonction

**Exemple de résultat attendu :**
```
Je mélange le ciment, le sable et l'eau.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function preparerMortier() {
    echo "Je mélange le ciment, le sable et l'eau.";
}

preparerMortier();
?>
```
</details>

---

## 📝 Exercice 4 : Fonction avec un paramètre
**Énoncé :**  
Crée une fonction `direPrenom($prenom)` qui prend un prénom en paramètre et affiche :  
"Bonjour [prenom] !"  
Appelle cette fonction avec ton prénom.

**Ce qu'on attend :**  
- Une fonction avec un paramètre `$prenom`
- Un message qui utilise ce paramètre
- Un appel avec un prénom de ton choix

**Exemple de résultat attendu :**
```
Bonjour Laurent !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direPrenom($prenom) {
    echo "Bonjour $prenom !";
}

direPrenom("Laurent");
?>
```
</details>

---

## 📝 Exercice 5 : Fonction avec deux paramètres
**Énoncé :**  
Crée une fonction `afficherMateriel($materiel, $quantite)` qui affiche :  
"J'ai [quantite] [materiel]."  
Appelle cette fonction avec "briques" et 50.

**Ce qu'on attend :**  
- Une fonction avec deux paramètres
- Un message qui utilise les deux paramètres
- Un appel avec "briques" et 50

**Exemple de résultat attendu :**
```
J'ai 50 briques.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function afficherMateriel($materiel, $quantite) {
    echo "J'ai $quantite $materiel.";
}

afficherMateriel("briques", 50);
?>
```
</details>

---

## 📝 Exercice 6 : Addition simple
**Énoncé :**  
Crée une fonction `additionner($a, $b)` qui affiche le résultat de l'addition des deux nombres.  
Appelle cette fonction avec 5 et 3.

**Ce qu'on attend :**  
- Une fonction avec deux paramètres
- Un calcul d'addition
- Un affichage du résultat
- Un appel avec 5 et 3

**Exemple de résultat attendu :**
```
Le résultat est 8.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function additionner($a, $b) {
    $resultat = $a + $b;
    echo "Le résultat est $resultat.";
}

additionner(5, 3);
?>
```
</details>

---

## 📝 Exercice 7 : Calculer une surface
**Énoncé :**  
Crée une fonction `calculerSurface($largeur, $longueur)` qui calcule et affiche la surface d'un rectangle.  
La formule est : surface = largeur × longueur.  
Appelle cette fonction avec 4 et 5.

**Ce qu'on attend :**  
- Une fonction avec deux paramètres
- Un calcul de multiplication
- Un affichage du résultat
- Un appel avec 4 et 5

**Exemple de résultat attendu :**
```
La surface est de 20 m².
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function calculerSurface($largeur, $longueur) {
    $surface = $largeur * $longueur;
    echo "La surface est de $surface m².";
}

calculerSurface(4, 5);
?>
```
</details>

---

## 📝 Exercice 8 : Fonction avec `return`
**Énoncé :**  
Crée une fonction `multiplier($a, $b)` qui **retourne** (avec `return`) le résultat de la multiplication.  
Ensuite, appelle cette fonction avec 6 et 7, stocke le résultat dans une variable `$resultat`, puis affiche :  
"6 fois 7 égal [resultat]."

**Ce qu'on attend :**  
- Une fonction qui utilise `return` (pas `echo`)
- Un calcul de multiplication
- Un appel de fonction avec stockage du résultat
- Un `echo` pour afficher le message

**Exemple de résultat attendu :**
```
6 fois 7 égal 42.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function multiplier($a, $b) {
    return $a * $b;
}

$resultat = multiplier(6, 7);
echo "6 fois 7 égal $resultat.";
?>
```
</details>

---

## 📝 Exercice 9 : Calculer un prix
**Énoncé :**  
Crée une fonction `calculerPrix($quantite, $prix_unitaire)` qui calcule et affiche le prix total.  
La formule est : prix total = quantité × prix unitaire.  
Appelle cette fonction avec 10 sacs à 8 euros le sac.

**Ce qu'on attend :**  
- Une fonction avec deux paramètres
- Un calcul de multiplication
- Un affichage du prix total
- Un appel avec 10 et 8

**Exemple de résultat attendu :**
```
Le prix total est de 80 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function calculerPrix($quantite, $prix_unitaire) {
    $total = $quantite * $prix_unitaire;
    echo "Le prix total est de $total euros.";
}

calculerPrix(10, 8);
?>
```
</details>

---

## 📝 Exercice 10 : Présentation complète
**Énoncé :**  
Crée une fonction `sePresenter($prenom, $age, $metier)` qui affiche :  
"Je m'appelle [prenom], j'ai [age] ans et je suis [metier]."  
Appelle cette fonction avec ton prénom, ton âge et "maçon".

**Ce qu'on attend :**  
- Une fonction avec trois paramètres
- Un message complet qui utilise les trois paramètres
- Un appel avec tes informations personnelles

**Exemple de résultat attendu :**
```
Je m'appelle Laurent, j'ai 45 ans et je suis maçon.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function sePresenter($prenom, $age, $metier) {
    echo "Je m'appelle $prenom, j'ai $age ans et je suis $metier.";
}

sePresenter("Laurent", 45, "maçon");
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant les bases des fonctions en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une fonction simple sans paramètre
- ✅ Appeler une fonction plusieurs fois
- ✅ Créer une fonction avec des paramètres
- ✅ Faire des calculs dans une fonction
- ✅ Utiliser `return` pour renvoyer un résultat
- ✅ Combiner plusieurs paramètres dans une fonction

---

## 🏗️ Et maintenant ? Le Grand Chantier ! 🚧

Bravo Laurent ! 👏  
Tu viens de finir d'apprendre **toutes les bases du PHP** :

📦 **Les variables** → pour stocker des données  
🔢 **Les opérateurs** → pour faire des calculs  
⚙️ **Les fonctions** → pour réutiliser ton code  

C'est comme sur ton chantier :  
- Tu sais **ranger tes outils** (les variables)
- Tu sais **faire des calculs** (les opérateurs)  
- Tu sais **créer des méthodes de travail** (les fonctions)

### 🧱 Maintenant, on va **construire un vrai mur** !

La prochaine étape, c'est un **mini-projet complet** où tu vas :
- Utiliser **tout ce que tu as appris**
- Créer un **vrai programme utile**
- Voir comment **tout s'assemble ensemble**

💪 Tu es prêt ?  
Alors rendez-vous au prochain cours pour le **Mini-Projet Final : Le Calculateur de Devis de Chantier** !

🚀 À bientôt sur le chantier du code !

---

**👉 Prochaine étape :** Mini-Projet – Calculateur de Devis (on utilise tout ce qu'on a appris !)