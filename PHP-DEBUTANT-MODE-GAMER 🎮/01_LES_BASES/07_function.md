# 🎮 Cours PHP pour Débutant – Les Fonctions ⚔️💻

---

## 🚀 Pourquoi les fonctions ?

Dans ton jeu, tu fais souvent **les mêmes actions** :
- attaquer un ennemi ⚔️  
- lancer un sort 💥  
- utiliser une potion 💊  
- calculer tes points d’XP 📈  

Tu ne veux pas tout réécrire à chaque fois, non ? 😅  
Tu préfères **appuyer sur un bouton** — et que ton perso fasse tout automatiquement.

💬 En PHP, une **fonction**, c’est pareil :
> Tu définis une action une fois, et tu peux la **réutiliser** quand tu veux.  
> C’est ton **pouvoir spécial personnalisé** 💥

---

## 🧠 1️⃣ Qu’est-ce qu’une fonction ?

Une fonction, c’est comme une **attaque spéciale** que tu crées toi-même.

```php
function lancerSort() {
    echo "💥 Tu lances une boule de feu !<br>";
    echo "🔥 L’ennemi perd 50 PV !<br>";
}
```

Ici :
- `function` → tu crées une nouvelle **capacité**.  
- `lancerSort` → le **nom** de ton pouvoir.  
- `{ ... }` → les **actions** que ton sort va exécuter.

---

## ⚔️ 2️⃣ Utiliser une fonction

Tu veux lancer ton sort ? Facile :
```php
lancerSort();
```
Résultat :
```
💥 Tu lances une boule de feu !
🔥 L’ennemi perd 50 PV !
```

💬 Tu viens d’utiliser ton **pouvoir** !  
Et tu peux le refaire autant de fois que tu veux :

```php
lancerSort();
lancerSort();
```

Résultat :
```
💥 Tu lances une boule de feu !
🔥 L’ennemi perd 50 PV !
💥 Tu lances une boule de feu !
🔥 L’ennemi perd 50 PV !
```

🎮 Une seule ligne, attaque répétée. GG.

---

## 🧩 3️⃣ Pourquoi c’est utile ?

C’est simple :
- tu gagnes du **temps**,  
- tu fais moins d’erreurs,  
- ton code est **plus propre** et plus **réutilisable**.

💬 Une fonction, c’est ton **sort automatique** :  
tu le prépares une fois, et tu le spammes quand tu veux 😎

---

## 💥 4️⃣ Les fonctions avec des **paramètres**

Tu veux que ton sort ait plus de puissance selon ta mana :

```php
function lancerSort($degats) {
    echo "💥 Tu lances une attaque magique qui inflige $degats dégâts !<br>";
}
```

Tu l’appelles comme ça :
```php
lancerSort(80);
```

Résultat :
```
💥 Tu lances une attaque magique qui inflige 80 dégâts !
```

💬 Les valeurs entre parenthèses `(80)` sont les **paramètres**.  
Tu donnes des **valeurs personnalisées** à ton sort.

---

## 🧮 5️⃣ Fonctions avec `return` – Les résultats

Certains pouvoirs **retournent un résultat** (comme une récompense 💰).

```php
function calculerXP($ennemisVaincus, $xpParEnnemi) {
    $total = $ennemisVaincus * $xpParEnnemi;
    return $total;
}
```

💬 `return` veut dire :
> “Renvoie le résultat à ton joueur.”

Tu peux ensuite faire :
```php
$xp = calculerXP(5, 40);
echo "Tu gagnes $xp points d’expérience !";
```
Résultat :
```
Tu gagnes 200 points d’expérience !
```

---

## 🧠 6️⃣ Pourquoi c’est hyper pratique ?

- Tu crées une **fonction spéciale** une fois.  
- Tu peux la réutiliser **partout dans ton code**.  
- Tu peux la **modifier** sans casser tout ton programme.

C’est comme créer ta **macro personnalisée** 🎯

---

## 📜 7️⃣ En résumé gamer

| Ce que c’est | Dans ton jeu | En PHP |
|---------------|--------------|--------|
| Une fonction | Une attaque ou une compétence | `function nom() { ... }` |
| Lancer la fonction | Utiliser ton sort | `nom();` |
| Paramètres | La puissance du sort / ton mana | `(80)` |
| `return` | Les points gagnés ou le résultat | `return $xp;` |

> 💬 Une fonction, c’est ton **pouvoir magique personnel** : tu l’inventes, tu la nommes, et tu la lances quand tu veux. ⚡

---

# 🧪 Exercices (niveau gamer)

### Exercice 1
Crée une fonction `saluer()` qui affiche :  
> “👋 Bienvenue héros, prêt pour l’aventure ?”

---

### Exercice 2
Appelle cette fonction 3 fois.

---

### Exercice 3
Crée une fonction `soigner()` qui affiche :  
> “💊 Tu utilises une potion et récupères 50 PV.”

---

### Exercice 4
Crée une fonction `soigner($pv)` qui affiche combien de PV tu récupères.

---

### Exercice 5
Crée une fonction `calculerDegats($attaque, $defense)`  
qui affiche les dégâts infligés (`attaque - defense`).

---

### Exercice 6
Crée une fonction `gagnerXP($niveau, $ennemis)`  
qui retourne l’XP totale (`niveau * ennemis * 10`) et l’affiche.

---

### Exercice 7
Crée une fonction `saluerJoueur($pseudo)`  
qui affiche :  
> “👋 Salut [pseudo], ton aventure commence maintenant !”

---

### Exercice 8
Crée une fonction `afficherLoot($objet, $rarete)`  
qui affiche :  
> “Tu obtiens [objet] de rareté [rarete] !”

---

### Exercice 9
Crée une fonction `addition($a, $b)` qui retourne la somme des deux valeurs.

---

### Exercice 10
Crée une fonction `combat($attaque, $defense, $bonus)`  
qui calcule les dégâts (`attaque + bonus - defense`) et affiche :  
> “Tu infliges [dégâts] points de dégâts !”

---

# ✅ Solutions

```php
// 1
function saluer() {
    echo "👋 Bienvenue héros, prêt pour l’aventure ?<br>";
}
saluer();

// 2
saluer();
saluer();
saluer();

// 3
function soigner() {
    echo "💊 Tu utilises une potion et récupères 50 PV.<br>";
}
soigner();

// 4
function soigner($pv) {
    echo "💊 Tu récupères $pv PV.<br>";
}
soigner(75);

// 5
function calculerDegats($attaque, $defense) {
    $degats = $attaque - $defense;
    echo "⚔️ Tu infliges $degats points de dégâts !<br>";
}
calculerDegats(120, 30);

// 6
function gagnerXP($niveau, $ennemis) {
    $xp = $niveau * $ennemis * 10;
    echo "✨ Tu gagnes $xp points d’expérience !<br>";
}
gagnerXP(3, 5);

// 7
function saluerJoueur($pseudo) {
    echo "👋 Salut $pseudo, ton aventure commence maintenant !<br>";
}
saluerJoueur("LaurentGamer");

// 8
function afficherLoot($objet, $rarete) {
    echo "🎁 Tu obtiens $objet de rareté $rarete !<br>";
}
afficherLoot("épée ancienne", "épique");

// 9
function addition($a, $b) {
    return $a + $b;
}
echo "La somme est " . addition(20, 30) . "<br>";

// 10
function combat($attaque, $defense, $bonus) {
    $degats = $attaque + $bonus - $defense;
    echo "🔥 Tu infliges $degats points de dégâts !<br>";
}
combat(100, 40, 20);
```