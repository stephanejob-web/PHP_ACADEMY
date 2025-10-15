# 🧱 Cours PHP pour Débutant – La Boucle `while` 😄👷‍♂️

---

## 🚧 Pourquoi une autre boucle ?

Tu connais déjà la **boucle `for`** :  
elle sert quand tu sais **à l’avance combien de fois** tu veux répéter ton travail.

👉 Exemple :  
> “Je veux poser **10 briques**, pas une de plus, pas une de moins.” 🧱  

Mais parfois sur ton chantier… tu **ne sais pas encore combien de fois** tu devras recommencer 😅  

Exemples :
- Tu fais du mortier **jusqu’à ce qu’il ait la bonne texture** 🪣  
- Tu vérifies ton mur **jusqu’à ce qu’il soit bien droit** 📏  
- Tu ranges les outils **tant qu’il en reste sur le sol** 🧰  

💬 Et là, c’est la **boucle `while`** qui vient à ton secours.  

Elle veut dire :  
> “**Tant que** quelque chose est vrai, continue.”  

---

## 🧠 1️⃣ Comprendre “Tant que…”

Imagine cette phrase sur ton chantier :  
> “**Tant que** le mur n’est pas fini, je continue à poser des briques.”

Tu ne sais pas combien de fois tu vas le dire,  
mais tu sais **quand tu devras t’arrêter**.  

Et ça, c’est exactement ce que fait la boucle `while` 😄  

---

## 🔧 2️⃣ Exemple simple

```php
$i = 1;

while ($i <= 5) {
    echo "Je pose la brique numéro $i<br>";
    $i++;
}
```

Résultat :
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
Je pose la brique numéro 4
Je pose la brique numéro 5
```

💬 Ici, ton apprenti pose des briques **tant que** `$i` est inférieur ou égal à 5.

---

## 🔍 Décortiquons ligne par ligne

| Ligne | Ce que ça veut dire |
|-------|----------------------|
| `$i = 1;` | Je commence à la première brique 🧱 |
| `while ($i <= 5)` | Tant que je n’ai pas dépassé 5 briques, je continue 👷‍♂️ |
| `$i++;` | J’avance d’une brique à chaque fois 👣 |

---

### ⚠️ Attention au piège !

Si tu oublies d’écrire `$i++`...  
ton apprenti va **continuer à poser la même brique pour toujours !** 😱  

C’est ce qu’on appelle une **boucle infinie** 🌀  
Et ton ordinateur se met à tourner comme une bétonnière sans fin 😅  

---

## 🪣 3️⃣ Exemple concret : remplir des seaux

```php
$seau = 0;

while ($seau < 3) {
    echo "Je remplis le seau numéro " . ($seau + 1) . "<br>";
    $seau++;
}
```

Résultat :
```
Je remplis le seau numéro 1
Je remplis le seau numéro 2
Je remplis le seau numéro 3
```

💬 PHP continue **tant que** le nombre de seaux remplis est inférieur à 3.  

---

## ⚖️ 4️⃣ La grande différence entre `for` et `while`

🥊 **Comparons-les côte à côte :**

| Situation | Tu utilises `for` | Tu utilises `while` |
|------------|-------------------|--------------------|
| Tu sais **combien de fois** tu vas répéter | ✅ Oui | ❌ Non |
| Tu sais **quand t’arrêter** mais pas combien de tours | ❌ Non | ✅ Oui |
| Exemple concret | “Je veux poser **10 briques**.” | “Je pose **tant que le mur n’est pas droit**.” |
| Mot clé à retenir | “**Pour** 10 fois” | “**Tant que** c’est vrai” |
| Type de personne | Maçon organisé 📏 | Maçon patient 🧘‍♂️ |

💬 En résumé :
- `for` = “Je sais d’avance combien de fois je bosse.”  
- `while` = “Je continue tant que c’est nécessaire.”  

---

## 🧩 5️⃣ Autre exemple rigolo

Tu veux boire ton café **tant qu’il en reste** ☕  

```php
$tasse = 3;

while ($tasse > 0) {
    echo "Je bois une gorgée... glou glou ☕<br>";
    $tasse--;
}

echo "Tasse vide ! Je retourne bosser 👷‍♂️";
```

Résultat :
```
Je bois une gorgée... glou glou ☕
Je bois une gorgée... glou glou ☕
Je bois une gorgée... glou glou ☕
Tasse vide ! Je retourne bosser 👷‍♂️
```

---

## 💬 Phrase à retenir

> La boucle `while`, c’est ton **apprenti obstiné** 😄  
> Il continue **tant que** le travail n’est pas terminé,  
> et s’arrête **quand la condition devient fausse**.  

---

# 🧪 Exercices (niveau débutant)

### Exercice 1  
Affiche les nombres de 1 à 5 avec une boucle `while`.

### Exercice 2  
Affiche :  
> “Je pose la brique numéro X”  
pour X allant de 1 à 4.

### Exercice 3  
Affiche :  
> “Je remplis le seau numéro X”  
pour X allant de 1 à 3.

### Exercice 4  
Affiche :  
> “Je range l’outil numéro X”  
pour X de 1 à 5.

### Exercice 5  
Affiche les nombres de 10 à 1 avec une boucle `while`.

### Exercice 6  
Fais une boucle `while` qui affiche :  
> “Je vérifie le niveau du mur…”  
jusqu’à ce que `$niveau` atteigne 3.

### Exercice 7  
Fais une boucle qui affiche la table de 3 (3 x 1, 3 x 2, etc.) jusqu’à 10.

### Exercice 8  
Crée une boucle qui affiche :  
> “J’empile le sac numéro X”  
jusqu’à 7.

### Exercice 9  
Fais une boucle qui compte à partir de 0 jusqu’à 20, mais affiche seulement les nombres pairs.

### Exercice 10  
Affiche ton prénom 5 fois avec une boucle `while`.

---

# ✅ Solutions

```php
// 1
$i = 1;
while ($i <= 5) {
    echo "$i<br>";
    $i++;
}

// 2
$i = 1;
while ($i <= 4) {
    echo "Je pose la brique numéro $i<br>";
    $i++;
}

// 3
$seau = 1;
while ($seau <= 3) {
    echo "Je remplis le seau numéro $seau<br>";
    $seau++;
}

// 4
$outil = 1;
while ($outil <= 5) {
    echo "Je range l’outil numéro $outil<br>";
    $outil++;
}

// 5
$i = 10;
while ($i >= 1) {
    echo "$i<br>";
    $i--;
}

// 6
$niveau = 1;
while ($niveau <= 3) {
    echo "Je vérifie le niveau du mur... (étape $niveau)<br>";
    $niveau++;
}

// 7
$i = 1;
while ($i <= 10) {
    echo "3 x $i = " . (3 * $i) . "<br>";
    $i++;
}

// 8
$x = 1;
while ($x <= 7) {
    echo "J’empile le sac numéro $x<br>";
    $x++;
}

// 9
$i = 0;
while ($i <= 20) {
    if ($i % 2 == 0) {
        echo "$i<br>";
    }
    $i++;
}

// 10
$i = 1;
while ($i <= 5) {
    echo "Laurent<br>";
    $i++;
}
```
