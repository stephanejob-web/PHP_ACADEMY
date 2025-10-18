# 🍳 Cours PHP pour Débutant – Les Fonctions 👨‍🍳

---

## 🥘 Pourquoi les fonctions ?

En cuisine, il y a des gestes que tu fais **souvent** :

- casser des œufs 🥚
- mélanger une pâte 🥄
- préchauffer le four 🔥
- dresser une assiette 🍽️

Tu n'as pas besoin qu'on te réexplique à chaque fois **comment faire**.
Tu connais déjà la méthode.
Tu pourrais presque dire à ton commis :
> "Regarde, je te montre une fois comment on fait, et après tu pourras le refaire tout seul !"

💬 En PHP, une **fonction**, c'est exactement ça :
> Tu apprends à ton ordinateur à faire une action,
> et ensuite, il peut la refaire tout seul quand tu lui demandes.

---

## 🧺 1️⃣ Qu'est-ce qu'une fonction ?

Une fonction, c'est comme une **recette** ou un **geste de chef**.
Tu le prépares une fois, et tu peux **le réutiliser** quand tu veux.

Exemple :
```php
function preparerPate() {
    echo "Je mélange la farine, les œufs et le sucre.<br>";
    echo "La pâte est prête !<br>";
}
```

Ici :
- `function` → tu dis à PHP : "Je crée une nouvelle recette."
- `preparerPate` → c'est le nom de la recette.
- `{ ... }` → c'est la liste des actions à faire.

---

## ⚙️ 2️⃣ Utiliser une fonction (la faire travailler)

Maintenant que tu as créé ta recette, tu peux l'utiliser :
```php
preparerPate();
```

Résultat :
```
Je mélange la farine, les œufs et le sucre.
La pâte est prête !
```

💬 Tu viens de dire à PHP :
> "Prépare la pâte !"

Et si tu veux le refaire encore une fois :
```php
preparerPate();
preparerPate();
```

Résultat :
```
Je mélange la farine, les œufs et le sucre.
La pâte est prête !
Je mélange la farine, les œufs et le sucre.
La pâte est prête !
```

🍳 Tu vois ?
Tu n'as pas eu besoin de tout réécrire :
tu as juste **rappelé la même fonction**.

---

## 📦 3️⃣ Pourquoi c'est utile ?

Imagine que tu veux préparer une pâte **10 fois dans la journée**.
Tu n'as pas envie d'écrire 20 lignes de code à chaque fois.

Avec une fonction, tu as juste besoin de **l'appeler**.
Tu gagnes du temps, tu fais moins d'erreurs, et ton code est plus propre.

C'est comme avoir **ton robot de cuisine** :
tu appuies sur le bouton, il fait le boulot.

---

## 🧩 4️⃣ Les fonctions avec des paramètres

Parfois, tu veux préciser ce que tu veux faire.

En cuisine, tu pourrais dire :
> "Fais-moi cuire **20 minutes** au four à **180 degrés**."

Tu donnes des **valeurs** à ta fonction.

En PHP :
```php
function cuire($temps, $temperature) {
    echo "Je cuis pendant $temps minutes à $temperature degrés.<br>";
}
```

Et pour l'utiliser :
```php
cuire(20, 180);
```

Résultat :
```
Je cuis pendant 20 minutes à 180 degrés.
```

💬 Les nombres entre parenthèses `(20, 180)` sont des **paramètres**.
Ce sont les **valeurs que tu donnes à ta recette**.

---

## 🧮 5️⃣ Les fonctions qui te donnent un résultat (`return`)

Une fonction peut aussi **te rendre un résultat**, comme un calcul.

Exemple :
```php
function calculerPrix($portions, $prix_portion) {
    $total = $portions * $prix_portion;
    return $total;
}
```

💬 `return` veut dire :
> "Rends-moi le résultat du calcul."

Et tu peux l'utiliser ainsi :
```php
$prix = calculerPrix(4, 12);
echo "Le menu coûte $prix euros.";
```

Résultat :
```
Le menu coûte 48 euros.
```

---

## 🧠 6️⃣ Pourquoi c'est pratique ?

- Tu écris **une seule fois** la méthode.
- Tu peux la **réutiliser partout**.
- Tu peux la **changer facilement** sans tout casser.

C'est comme un **geste de chef personnalisé** que tu maîtrises une fois,
et que tu sors de ton répertoire quand tu en as besoin.

---

## 🍳 En résumé simple

| Ce que c'est | Dans la vraie vie | En PHP |
|---------------|------------------|--------|
| Une fonction | Une recette ou un geste que tu peux refaire | `function nom() { ... }` |
| Lancer la fonction | Exécuter le geste | `nom();` |
| Paramètres | Les ingrédients que tu donnes | `(20, 180)` |
| `return` | Le résultat que la recette te rend | `return $total;` |

---

## 💬 Phrase à retenir :
> Une fonction, c'est comme une **recette de chef** :
> tu la notes une fois, et tu peux la refaire quand tu veux,
> sans tout réécrire, juste en donnant les bons ingrédients. 🍲🍳

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Ta première fonction
**Énoncé :**
Crée une fonction `direBonjour()` qui affiche le message "Bienvenue en cuisine, chef !"
Puis appelle cette fonction une fois.

**Ce qu'on attend :**
- Une fonction nommée `direBonjour`
- Aucun paramètre (parenthèses vides)
- Un `echo` qui affiche le message
- Un appel de la fonction avec `direBonjour();`

**Exemple de résultat attendu :**
```
Bienvenue en cuisine, chef !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direBonjour() {
    echo "Bienvenue en cuisine, chef !";
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
Bienvenue en cuisine, chef !
Bienvenue en cuisine, chef !
Bienvenue en cuisine, chef !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direBonjour() {
    echo "Bienvenue en cuisine, chef !<br>";
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
Crée une fonction `preparerPate()` qui affiche le message "Je mélange la farine, les œufs et le sucre."
Puis appelle cette fonction.

**Ce qu'on attend :**
- Une fonction nommée `preparerPate`
- Un message d'affichage qui décrit l'action
- Un appel de la fonction

**Exemple de résultat attendu :**
```
Je mélange la farine, les œufs et le sucre.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function preparerPate() {
    echo "Je mélange la farine, les œufs et le sucre.";
}

preparerPate();
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
Bonjour Julie !
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function direPrenom($prenom) {
    echo "Bonjour $prenom !";
}

direPrenom("Julie");
?>
```
</details>

---

## 📝 Exercice 5 : Fonction avec deux paramètres
**Énoncé :**
Crée une fonction `afficherIngredient($ingredient, $quantite)` qui affiche :
"J'ai [quantite] grammes de [ingredient]."
Appelle cette fonction avec "farine" et 500.

**Ce qu'on attend :**
- Une fonction avec deux paramètres
- Un message qui utilise les deux paramètres
- Un appel avec "farine" et 500

**Exemple de résultat attendu :**
```
J'ai 500 grammes de farine.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function afficherIngredient($ingredient, $quantite) {
    echo "J'ai $quantite grammes de $ingredient.";
}

afficherIngredient("farine", 500);
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

## 📝 Exercice 7 : Calculer des portions
**Énoncé :**
Crée une fonction `calculerPortions($personnes, $grammes_par_personne)` qui calcule et affiche la quantité totale nécessaire.
La formule est : total = personnes × grammes par personne.
Appelle cette fonction avec 6 personnes et 150 grammes par personne.

**Ce qu'on attend :**
- Une fonction avec deux paramètres
- Un calcul de multiplication
- Un affichage du résultat
- Un appel avec 6 et 150

**Exemple de résultat attendu :**
```
Il faut 900 grammes au total.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function calculerPortions($personnes, $grammes_par_personne) {
    $total = $personnes * $grammes_par_personne;
    echo "Il faut $total grammes au total.";
}

calculerPortions(6, 150);
?>
```
</details>

---

## 📝 Exercice 8 : Fonction avec `return`
**Énoncé :**
Crée une fonction `multiplier($a, $b)` qui **retourne** (avec `return`) le résultat de la multiplication.
Ensuite, appelle cette fonction avec 8 et 4, stocke le résultat dans une variable `$resultat`, puis affiche :
"8 fois 4 égal [resultat]."

**Ce qu'on attend :**
- Une fonction qui utilise `return` (pas `echo`)
- Un calcul de multiplication
- Un appel de fonction avec stockage du résultat
- Un `echo` pour afficher le message

**Exemple de résultat attendu :**
```
8 fois 4 égal 32.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function multiplier($a, $b) {
    return $a * $b;
}

$resultat = multiplier(8, 4);
echo "8 fois 4 égal $resultat.";
?>
```
</details>

---

## 📝 Exercice 9 : Calculer un prix
**Énoncé :**
Crée une fonction `calculerPrix($portions, $prix_portion)` qui calcule et affiche le prix total.
La formule est : prix total = portions × prix par portion.
Appelle cette fonction avec 4 portions à 12 euros la portion.

**Ce qu'on attend :**
- Une fonction avec deux paramètres
- Un calcul de multiplication
- Un affichage du prix total
- Un appel avec 4 et 12

**Exemple de résultat attendu :**
```
Le prix total est de 48 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function calculerPrix($portions, $prix_portion) {
    $total = $portions * $prix_portion;
    echo "Le prix total est de $total euros.";
}

calculerPrix(4, 12);
?>
```
</details>

---

## 📝 Exercice 10 : Présentation complète
**Énoncé :**
Crée une fonction `sePresenter($prenom, $age, $specialite)` qui affiche :
"Je m'appelle [prenom], j'ai [age] ans et je suis [specialite]."
Appelle cette fonction avec ton prénom, ton âge et "pâtissier".

**Ce qu'on attend :**
- Une fonction avec trois paramètres
- Un message complet qui utilise les trois paramètres
- Un appel avec tes informations personnelles

**Exemple de résultat attendu :**
```
Je m'appelle Julie, j'ai 32 ans et je suis pâtissier.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
function sePresenter($prenom, $age, $specialite) {
    echo "Je m'appelle $prenom, j'ai $age ans et je suis $specialite.";
}

sePresenter("Julie", 32, "pâtissier");
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

## 🍳 Et maintenant ? Le Grand Service ! 🥘

Bravo Chef ! 👏
Tu viens de finir d'apprendre **toutes les bases du PHP** :

📦 **Les variables** → pour stocker des ingrédients
🔢 **Les opérateurs** → pour faire des calculs
⚙️ **Les fonctions** → pour réutiliser tes recettes

C'est comme en cuisine :
- Tu sais **ranger tes ingrédients** (les variables)
- Tu sais **faire des calculs** (les portions)
- Tu sais **créer des recettes** (les fonctions)

### 🍳 Maintenant, on va **préparer un vrai menu** !

La prochaine étape, c'est un **mini-projet complet** où tu vas :
- Utiliser **tout ce que tu as appris**
- Créer un **vrai programme utile**
- Voir comment **tout s'assemble ensemble**

💪 Tu es prêt ?
Alors rendez-vous au prochain cours pour le **Mini-Projet Final : Le Calculateur de Coût de Recettes** !

🚀 À bientôt en cuisine !

---

**👉 Prochaine étape :** Mini-Projet – Calculateur de Coût de Recettes (on utilise tout ce qu'on a appris !)
