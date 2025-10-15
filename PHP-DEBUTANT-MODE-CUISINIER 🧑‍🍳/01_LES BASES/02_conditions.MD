# 🍳 Cours PHP Débutant – Les Conditions : Comprendre `true`, `false`, `if`, `else`, `elseif`, `&&` et `||` 👨‍🍳🧠

---

## 👋 Introduction

Dans ta cuisine, tu prends **des décisions tout le temps** :  

> “Si l’eau bout, je mets les pâtes.” 🍝  
> “Si le four est chaud, j’enfourne le gâteau.” 🍰  
> “Sinon, j’attends encore un peu.” 😅  

Ton ordinateur fait **exactement la même chose** !  
Il agit **en fonction de conditions**.  
Mais attention, lui, c’est un peu comme un commis distrait 😆 :  
🔘 il ne comprend que **deux états** :  
- `true` → **OUI chef !** ✅  
- `false` → **NON chef !** ❌  

Pas de “peut-être” ni de “je verrai plus tard” : juste **ON ou OFF** 🔥💨

---

## 💡 1️⃣ `true` et `false` — le cerveau du cuisinier 🤯

Imagine un **four** :  
> 🔥 Allumé = `true`  
> ❄️ Éteint = `false`

| Situation | Valeur PHP | Signification |
|------------|-------------|----------------|
| Le four est allumé | `true` | Oui, c’est vrai ✅ |
| Le four est éteint | `false` | Non, c’est faux ❌ |

```php
$four = true;  // Allumé 🔥
$four = false; // Éteint ❄️
```

🧠 PHP vérifie si ton “four” est `true` (allumé).  
S’il est éteint (`false`), il ne fait rien du tout.

---

## 🧩 2️⃣ Le `if` – “SI c’est vrai, fais-le”

> “Si l’eau bout, ajoute les pâtes.”

```php
$eau_chaude = true;

if ($eau_chaude) {
    echo "J’ajoute les pâtes ! 🍝";
}
```

💬 PHP lit :  
> “L’eau est chaude ? Oui ✅ → on met les pâtes !”  
> Sinon ❌ → rien ne se passe.

👨‍🍳 En résumé :  
> “Si la condition est vraie → j’agis.”  
> “Sinon → j’attends.”

---

## 🥄 3️⃣ Le `else` – “SINON...”

Et si l’eau **n’est pas encore chaude** ?

```php
$eau_chaude = false;

if ($eau_chaude) {
    echo "J’ajoute les pâtes ! 🍝";
} else {
    echo "Patience... l’eau chauffe encore. 🔥";
}
```

💬 PHP réfléchit :  
> “L’eau est chaude ? Non ❌ → alors j’exécute le `else`.”

👨‍🍳 En langage cuisine :  
> “Si l’eau bout → je mets les pâtes.”  
> “Sinon → j’attends encore un peu.”

---

## 🧶 4️⃣ Le `elseif` – “SINON SI...”

Dans la cuisine, il y a souvent **plusieurs situations** :

> “Si le four est trop chaud → je baisse la température.”  
> “Sinon si il est tiède → j’attends encore un peu.”  
> “Sinon → je mets le gâteau ! 🍰”

```php
$temperature = 120;

if ($temperature > 200) {
    echo "⚠️ Trop chaud ! Baisse le four.";
} elseif ($temperature > 100) {
    echo "⏳ Le four chauffe, encore un peu de patience.";
} else {
    echo "🍰 C’est bon, enfourne le gâteau !";
}
```

💬 PHP teste dans l’ordre :  
1️⃣ Est-ce trop chaud ? ❌  
2️⃣ Est-ce en train de chauffer ? ✅  
➡️ Affiche : “⏳ Le four chauffe…”

---

## ⚙️ 5️⃣ Le `&&` — le mot **ET**

Le symbole `&&` signifie **“ET”**.  
Tu l’utilises quand il faut que **plusieurs conditions soient vraies** pour agir.

> “Je mets le gâteau **si le four est chaud ET la pâte est prête.**”

```php
$four_chaud = true;
$pate_prete = true;

if ($four_chaud && $pate_prete) {
    echo "🍰 J’enfourne le gâteau !";
} else {
    echo "⏲️ Pas encore prêt...";
}
```

💬 PHP pense :  
> “Le four est chaud ? ✅”  
> “La pâte est prête ? ✅”  
➡️ Alors on cuit le gâteau ! 🎉

🧠 En résumé :  
> Avec **ET (`&&`)**, il faut que **toutes les conditions soient vraies**.

---

### 🍳 Autres exemples :
- “Je sers le plat **si la viande est cuite ET la sauce est chaude.**”  
- “Je dresse l’assiette **si la table est prête ET les invités sont là.**”  
- “Je nettoie la cuisine **si le service est fini ET le four est éteint.**”

---

## 💨 6️⃣ Le `||` — le mot **OU**

Le symbole `||` signifie **“OU”**.  
Tu l’utilises quand **une seule condition suffit**.

> “Je mets le minuteur **si le four est chaud OU si la plaque est allumée.**”

```php
$four_chaud = false;
$plaque_allumee = true;

if ($four_chaud || $plaque_allumee) {
    echo "⏰ Je lance le minuteur !";
} else {
    echo "😴 Rien ne chauffe pour le moment.";
}
```

💬 PHP pense :  
> “Four chaud ? Non ❌”  
> “Plaque allumée ? Oui ✅”  
➡️ Donc on démarre le minuteur ! ⏱️

🧠 En résumé :  
> Avec **OU (`||`)**, **une seule condition vraie** suffit pour déclencher l’action.

---

## 🧩 7️⃣ Le grand résumé du Chef 👨‍🍳

| Signe | Lecture cuisine | Quand c’est exécuté ? | Exemple |
|--------|----------------|------------------------|---------|
| `if` | Si | Quand c’est vrai (`true`) | “Si l’eau bout…” |
| `else` | Sinon | Quand c’est faux (`false`) | “Sinon, j’attends encore.” |
| `elseif` | Sinon si | Quand la précédente est fausse mais celle-ci vraie | “Sinon si le four est chaud…” |
| `&&` | ET | Quand **tout** est vrai | “Le four est chaud ET la pâte prête.” |
| `||` | OU | Quand **au moins une** est vraie | “Le four OU la plaque est chaude.” |

---

## ❤️ Le mot du Chef formateur

Ton ordinateur, c’est ton **commis de cuisine** 👨‍🍳  
Il ne réfléchit pas : il **exécute ce que tu lui dis**.

💬 Souviens-toi :  
> `true` = c’est prêt ! 🟢  
> `false` = pas encore 🔴  

Et comme en cuisine…  
> Tes **conditions** décident **de la réussite de la recette** ! 🍲✨
