# 🧱 Cours PHP Débutant – Les Conditions : Comprendre `true`, `false`, `if`, `else`, `elseif`, `&&` et `||` 👷‍♂️💡

---

## 👋 Introduction

Sur un chantier, tu prends **des décisions tout le temps** :

> “S’il pleut, je reste à la maison.”  
> “S’il fait beau, je travaille.”  
> “Et s’il fait froid, je garde ma veste.”

Eh bien ton ordinateur fait **exactement la même chose** !  
Mais attention… il est un peu simple d’esprit 😅  

👉 Il ne comprend que **deux mots dans tout l’univers** :  
- `true` → ça veut dire **OUI, c’est vrai** ✅  
- `false` → ça veut dire **NON, c’est faux** ❌  

C’est tout.  
Ton ordinateur, c’est comme ton apprenti du lundi matin : il faut lui parler **simple et clair** 😆

---

## 💡 1️⃣ `true` et `false` — le cerveau de ton ordinateur 🧠💻

Imagine ton ordinateur comme un interrupteur électrique :  
> 🔆 Allumé = `true` (OUI, c’est vrai)  
> 🌑 Éteint = `false` (NON, c’est faux)

Pas de “un peu allumé”, pas de “on verra” 😅  
C’est **OUI ou NON**, point barre.

| Situation | Valeur PHP | Signification |
|------------|-------------|----------------|
| Il pleut | `true` | Oui, c’est vrai ✅ |
| Il ne pleut pas | `false` | Non, c’est faux ❌ |

```php
$pluie = true;  // Oui, il pleut 🌧️
$pluie = false; // Non, il ne pleut pas ☀️
```

🧠 Quand PHP voit une **valeur vraie (`true`)**, il exécute ton code.  
Quand c’est **faux (`false`)**, il ne fait rien.

---

## 🧱 2️⃣ Le mot `if` – “SI c’est vrai, fais-le”

> “Si quelque chose est vrai, exécute ce bloc de code.”

```php
$pluie = true;

if ($pluie) {
    echo "Il pleut, je reste à la maison.";
}
```

💬 PHP lit :
> “Est-ce que $pluie est vrai (true) ?”  
> Oui ✅ → il affiche “Il pleut, je reste à la maison.”  
> Non ❌ → il ignore ce code.

🧱 En langage de chantier :  
> “Chef, il pleut ?”  
> “Oui ! Alors on rentre.” 🏠

---

## ☀️ 3️⃣ Le `else` – “SINON…”

Et si `$pluie` est `false` ?

```php
$pluie = false;

if ($pluie) {
    echo "Il pleut, je reste à la maison.";
} else {
    echo "Il ne pleut pas, je vais sur le chantier.";
}
```

💬 PHP réfléchit :
> “Il pleut ? Non ❌ → alors je fais ce qu’il y a dans le `else`.”

🧱 Traduction humaine :
> “S’il pleut → je reste à la maison.”  
> “Sinon → je travaille.” 💪

---

## 🌡️ 4️⃣ Le `elseif` – “SINON SI...”

Sur un chantier, il y a souvent **plusieurs cas possibles** :

> “S’il gèle, j’arrête.”  
> “S’il fait froid, je fais attention.”  
> “Sinon, je bosse.”

```php
$temperature = 3;

if ($temperature < 0) {
    echo "Trop froid, on arrête.";
} elseif ($temperature < 5) {
    echo "Froid, on fait attention.";
} else {
    echo "Bonne température, on travaille !";
}
```

💬 PHP teste dans l’ordre :
1️⃣ Est-ce que la température < 0 ? ❌  
2️⃣ Est-ce que la température < 5 ? ✅  
➡️ Il affiche “Froid, on fait attention.”  

🧱 Comme sur ton chantier :
> “S’il gèle → j’arrête.”  
> “S’il fait froid → je fais attention.”  
> “Sinon → je bosse.”

---

## ⚙️ 5️⃣ Le `&&` — le mot **ET**

Le symbole `&&` se lit **“ET”**.  
Tu l’utilises quand il faut **que les deux conditions soient vraies** pour travailler.

> “Je peux monter le mur **si j’ai des briques ET du mortier.**”

```php
$briques = true;
$mortier = true;

if ($briques && $mortier) {
    echo "On peut monter le mur !";
} else {
    echo "Il manque quelque chose.";
}
```

💬 PHP réfléchit :
> “J’ai des briques ? ✅”  
> “J’ai du mortier ? ✅”  
➡️ Les deux sont vrais → “On peut monter le mur !”

| Briques | Mortier | Résultat |
|----------|----------|-----------|
| ✅ | ✅ | On peut travailler |
| ✅ | ❌ | Il manque du mortier |
| ❌ | ✅ | Il manque les briques |
| ❌ | ❌ | On reste au café ☕ |

🧱 En résumé :
> Avec **ET (`&&`)**, il faut que **les deux conditions soient vraies** pour que le code s’exécute.

---

### 👷‍♂️ Autres exemples du chantier :
- “Je peux peindre **si le mur est sec ET s’il fait chaud.**”  
- “Je peux monter sur l’échafaudage **si j’ai mon casque ET mes gants.**”  
- “Je peux couler la dalle **si j’ai du béton ET un coffrage.**”

---

## 💨 6️⃣ Le `||` — le mot **OU**

Le symbole `||` se lit **“OU”**.  
Tu l’utilises quand **une seule condition suffit**.

> “Je reste à la maison **s’il pleut OU s’il y a du vent.**”

```php
$pluie = false;
$vent = true;

if ($pluie || $vent) {
    echo "On reporte le chantier.";
} else {
    echo "Conditions parfaites, on travaille !";
}
```

💬 PHP pense :
> “Il pleut ? Non ❌”  
> “Il y a du vent ? Oui ✅”  
➡️ Donc on reporte.

🧱 En résumé :

| Condition 1 | Condition 2 | Résultat |
|--------------|--------------|-----------|
| ✅ | ❌ | On arrête |
| ❌ | ✅ | On arrête |
| ✅ | ✅ | On arrête |
| ❌ | ❌ | On bosse |

> Avec **OU (`||`)**, **une seule raison suffit** pour que le code s’exécute.

---

## 🧩 7️⃣ Le grand résumé du chef

| Mot / Signe | Lecture humaine | Quand c’est exécuté ? | Exemple concret |
|--------------|----------------|------------------------|----------------|
| `if` | Si | Quand c’est vrai (`true`) | “S’il pleut…” |
| `else` | Sinon | Quand c’est faux (`false`) | “Sinon, je bosse.” |
| `elseif` | Sinon si | Quand le précédent est faux, mais celui-ci vrai | “Sinon, s’il fait froid…” |
| `&&` | ET | Quand **les deux** sont vrais | “J’ai des briques **et** du mortier.” |
| `||` | OU | Quand **une seule** est vraie | “Il pleut **ou** il y a du vent.” |

---

## ❤️ Le mot du formateur

Ton ordinateur, c’est un apprenti très obéissant... mais un peu **bête** 😆  
Il ne connaît que **“Oui chef !” (`true`)** ou **“Non chef !” (`false`)**.  

Pas de “je crois que…” ou de “peut-être”.  
Toi, tu es **le cerveau** 🧠.  
Lui, il exécute **ce que tu lui dis**, mais seulement **si la condition est vraie**.

💬 Et souviens-toi :
> Quand tu écris `true` → ton code s’exécute.  
> Quand tu écris `false` → ton ordinateur croise les bras et dit “Non chef, je bouge pas.” 😅  

---
