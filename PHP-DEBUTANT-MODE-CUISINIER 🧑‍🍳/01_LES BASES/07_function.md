# 🍳 Cours PHP pour Débutant – Les Fonctions 🥐🧠

---

## 🌱 Pourquoi les fonctions ?

En cuisine, tu fais souvent **les mêmes gestes** :
- casser un œuf 🥚  
- mélanger la pâte 🥧  
- préchauffer le four 🔥  
- dresser l’assiette 🍽️  

Tu ne veux pas tout réécrire à chaque recette, n’est-ce pas ? 😅  
Tu préfères avoir **ta routine de chef** — prépare, mélange, cuit, sers — toujours prête à être réutilisée.

💬 En PHP, une **fonction**, c’est pareil :  
> Tu définis une action une fois, et tu peux la **réutiliser** quand tu veux.  
> C’est ta **recette maison** 🥜

---

## 🧠 1️⃣ Qu’est-ce qu’une fonction ?

Une fonction, c’est comme une **recette** que tu crées toi-même.

```php
function preparerPate() {
    echo "🥧 Tu mélanges la farine, les œufs et le sucre.<br>";
    echo "🍰 La pâte est prête à cuire !<br>";
}
```

Ici :
- `function` → tu définis une **recette**.  
- `preparerPate` → le **nom** de ta recette.  
- `{ ... }` → les **étapes** à exécuter.

---

## 🥒 2️⃣ Utiliser une fonction

Tu veux préparer ta pâte ? Facile :
```php
preparerPate();
```

Résultat :
```
🥧 Tu mélanges la farine, les œufs et le sucre.
🍰 La pâte est prête à cuire !
```

Tu peux la refaire autant de fois que tu veux :

```php
preparerPate();
preparerPate();
```

💡 Une seule ligne, et tu relances la recette !

---

## 🥦 3️⃣ Pourquoi c’est utile ?

- Tu gagnes du **temps**.  
- Tu fais moins d’erreurs.  
- Ton code est **plus propre** et **réutilisable**.  

> Une fonction, c’est une **recette prête à l’emploi** : tu la prépares une fois, et tu la réutilises à volonté 😋

---

## 🍲 4️⃣ Les fonctions avec des **ingrédients (paramètres)**

Tu veux préparer une recette avec une **quantité variable** :

```php
function cuire($temps) {
    echo "🔥 Tu cuis pendant $temps minutes.<br>";
}
```

Tu l’appelles comme ça :
```php
cuire(20);
```

Résultat :
```
🔥 Tu cuis pendant 20 minutes.
```

💬 Le nombre entre parenthèses `(20)` est ton **paramètre**.  
C’est l’**ingrédient** que tu ajoutes à ta fonction.

---

## 🍞 5️⃣ Fonctions avec `return` – Le résultat final

Certaines recettes **retournent un plat prêt** 🍽️

```php
function calculerPrix($prix, $quantite) {
    $total = $prix * $quantite;
    return $total;
}
```

💬 `return` veut dire :  
> “Renvoie le résultat du plat au chef.”

Tu peux ensuite faire :
```php
$total = calculerPrix(5, 3);
echo "Le total est de $total euros.";
```

Résultat :
```
Le total est de 15 euros.
```

---

## 🧮 6️⃣ Pourquoi c’est hyper pratique ?

- Tu crées une **recette type** une fois.  
- Tu la réutilises **partout dans ton code**.  
- Tu peux la **modifier** sans tout casser.

C’est comme ton **livre de recettes personnalisé** 📖

---

## 🍳 7️⃣ En résumé version cuisine

| Ce que c’est | En cuisine | En PHP |
|---------------|-------------|--------|
| Une fonction | Une recette | `function nom() { ... }` |
| Exécuter la fonction | Cuisiner le plat | `nom();` |
| Paramètres | Les ingrédients | `(20)` |
| `return` | Le plat prêt | `return $total;` |

> 💬 Une fonction, c’est ta **recette magique** : tu la nommes, tu la prépares, et tu la sers quand tu veux. 🍰

---

# 🥒 Exercices (niveau cuisine)

### Exercice 1
Crée une fonction `direBonjour()` qui affiche :  
> “👋 Bienvenue en cuisine, chef !”

---

### Exercice 2
Appelle cette fonction 3 fois.

---

### Exercice 3
Crée une fonction `cuireTarte()` qui affiche :  
> “🔥 La tarte cuit au four pendant 30 minutes.”

---

### Exercice 4
Crée une fonction `cuire($temps)` qui affiche le temps de cuisson personnalisé.

---

### Exercice 5
Crée une fonction `calculerQuantite($personnes, $portion)`  
qui affiche la quantité totale (`personnes * portion`).

---

### Exercice 6
Crée une fonction `prixTotal($prix, $quantite)`  
qui **retourne** le total et l’affiche.

---

### Exercice 7
Crée une fonction `saluerChef($nom)`  
qui affiche :  
> “👋 Bonjour Chef [nom], prêt à cuisiner ?”

---

### Exercice 8
Crée une fonction `ajouterIngredient($ingredient, $quantite)`  
qui affiche :  
> “Tu ajoutes [quantite] de [ingredient].”

---

### Exercice 9
Crée une fonction `addition($a, $b)` qui retourne la somme des deux valeurs.

---

### Exercice 10
Crée une fonction `recette($temps, $etapes, $nom)`  
qui affiche :  
> “Ta recette [nom] comporte [etapes] étapes et dure [temps] minutes.”

---

# ✅ Solutions

```php
// 1
function direBonjour() {
    echo "👋 Bienvenue en cuisine, chef !<br>";
}
direBonjour();

// 2
direBonjour();
direBonjour();
direBonjour();

// 3
function cuireTarte() {
    echo "🔥 La tarte cuit au four pendant 30 minutes.<br>";
}
cuireTarte();

// 4
function cuire($temps) {
    echo "🔥 La cuisson dure $temps minutes.<br>";
}
cuire(45);

// 5
function calculerQuantite($personnes, $portion) {
    $total = $personnes * $portion;
    echo "🥧 Quantité totale : $total grammes.<br>";
}
calculerQuantite(4, 150);

// 6
function prixTotal($prix, $quantite) {
    $total = $prix * $quantite;
    echo "💰 Le total est de $total euros.<br>";
}
prixTotal(5, 3);

// 7
function saluerChef($nom) {
    echo "👋 Bonjour Chef $nom, prêt à cuisiner ?<br>";
}
saluerChef("Laurent");

// 8
function ajouterIngredient($ingredient, $quantite) {
    echo "Tu ajoutes $quantite de $ingredient.<br>";
}
ajouterIngredient("sucre", "100g");

// 9
function addition($a, $b) {
    return $a + $b;
}
echo "La somme est " . addition(20, 30) . "<br>";

// 10
function recette($temps, $etapes, $nom) {
    echo "🍳 Ta recette $nom comporte $etapes étapes et dure $temps minutes.<br>";
}
recette(45, 3, "tarte aux pommes");
```
