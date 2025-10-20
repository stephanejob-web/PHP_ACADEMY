# 🍳 Cours PHP Débutant – Les Conditions : Comprendre `true`, `false`, `if`, `else`, `elseif`, `&&` et `||` 👨‍🍳💡

---

## 👋 Introduction

Dans ta cuisine, tu prends **des décisions tout le temps** :

> "Si l`eau bout, je mets les pâtes."
> "Si le four est chaud, j`enfourne."
> "Et s`il fait trop chaud, je baisse la température."

Eh bien ton ordinateur fait **exactement la même chose** !
Mais attention… il est un peu simple d`esprit 😅

👉 Il ne comprend que **deux mots dans tout l`univers** :
- `true` → ça veut dire **OUI, c`est vrai** ✅
- `false` → ça veut dire **NON, c`est faux** ❌

C`est tout.
Ton ordinateur, c`est comme ton commis du lundi matin : il faut lui parler **simple et clair** 😆

---

## 💡 1️⃣ `true` et `false` — le cerveau de ton ordinateur 🧠💻

Imagine ton ordinateur comme un interrupteur électrique :
> 🔆 Allumé = `true` (OUI, c`est vrai)
> 🌑 Éteint = `false` (NON, c`est faux)

Pas de "un peu allumé", pas de "on verra" 😅
C`est **OUI ou NON**, point barre.

| Situation | Valeur PHP | Signification |
|------------|-------------|----------------|
| L`eau bout | `true` | Oui, c`est vrai ✅ |
| L`eau ne bout pas | `false` | Non, c`est faux ❌ |

```php
$eau_bout = true;  // Oui, l'eau bout 💧
$eau_bout = false; // Non, l'eau ne bout pas ⏳
```

🧠 Quand PHP voit une **valeur vraie (`true`)**, il exécute ton code.
Quand c`est **faux (`false`)**, il ne fait rien.

---

## 🍳 2️⃣ Le mot `if` – "SI c`est vrai, fais-le"

> "Si quelque chose est vrai, exécute ce bloc de code."

```php
$eau_bout = true;

if ($eau_bout) {
    echo "L'eau bout, je mets les pâtes.";
}
```

💬 PHP lit :
"Est-ce que $eau_bout est vrai (true) ?"
Oui ✅ → il affiche "L`eau bout, je mets les pâtes."
Non ❌ → il ignore ce code.

🍳 En langage de cuisine :
> "Chef, l`eau bout ?"
> "Oui ! Alors on met les pâtes." 🍝

---

## ☀️ 3️⃣ Le `else` – "SINON…"

Et si `$eau_bout` est `false` ?

```php
$eau_bout = false;

if ($eau_bout) {
    echo "L'eau bout, je mets les pâtes.";
} else {
    echo "L'eau ne bout pas, j'attends encore.";
}
```

💬 PHP réfléchit :
"L`eau bout ? Non ❌ → alors je fais ce qu`il y a dans le `else`."

🍳 Traduction humaine :
> "Si l`eau bout → je mets les pâtes."
> "Sinon → j`attends." ⏳

---

## 🌡️ 4️⃣ Le `elseif` – "SINON SI..."

Dans ta cuisine, il y a souvent **plusieurs cas possibles** :

> "Si le four est brûlant, je baisse."
> "S`il est tiède, j`attends."
> "Sinon, j`enfourne."

```php
$temperature = 120;

if ($temperature > 200) {
    echo "Trop chaud, je baisse le four.";
} elseif ($temperature < 150) {
    echo "Tiède, j'attends encore.";
} else {
    echo "Bonne température, j'enfourne !";
}
```

💬 PHP teste dans l`ordre :
1️⃣ Est-ce que la température > 200 ? ❌
2️⃣ Est-ce que la température < 150 ? ✅
➡️ Il affiche "Tiède, j`attends encore."

🍳 Comme dans ta cuisine :
> "Si c`est brûlant → je baisse."
> "Si c`est tiède → j`attends."
> "Sinon → j`enfourne."

---

## ⚙️ 5️⃣ Le `&&` — le mot **ET**

Le symbole `&&` se lit **"ET"**.
Tu l`utilises quand il faut **que les deux conditions soient vraies** pour cuisiner.

> "Je peux enfourner **si le four est chaud ET la pâte est prête.**"

```php
$four_chaud = true;
$pate_prete = true;

if ($four_chaud && $pate_prete) {
    echo "On peut enfourner le gâteau !";
} else {
    echo "Il manque quelque chose.";
}
```

💬 PHP réfléchit :
> "Le four est chaud ? ✅"
> "La pâte est prête ? ✅"
➡️ Les deux sont vrais → "On peut enfourner le gâteau !"

| Four chaud | Pâte prête | Résultat |
|----------|----------|-----------|
| ✅ | ✅ | On peut enfourner |
| ✅ | ❌ | Il manque la pâte |
| ❌ | ✅ | Le four n`est pas prêt |
| ❌ | ❌ | On attend ⏳ |

🍳 En résumé :
> Avec **ET (`&&`)**, il faut que **les deux conditions soient vraies** pour que le code s`exécute.

---

## 💨 6️⃣ Le `||` — le mot **OU**

Le symbole `||` se lit **"OU"**.
Tu l`utilises quand **une seule condition suffit**.

> "Je sors le plat **s`il est cuit OU si le minuteur sonne.**"

```php
$plat_cuit = false;
$minuteur = true;

if ($plat_cuit || $minuteur) {
    echo "Je vérifie la cuisson.";
} else {
    echo "Tout est sous contrôle, j'attends.";
}
```

💬 PHP pense :
> "Le plat est cuit ? Non ❌"
> "Le minuteur sonne ? Oui ✅"
➡️ Donc je vérifie.

| Condition 1 | Condition 2 | Résultat |
|--------------|--------------|-----------|
| ✅ | ❌ | Je vérifie |
| ❌ | ✅ | Je vérifie |
| ✅ | ✅ | Je vérifie |
| ❌ | ❌ | J`attends |

🍳 En résumé :
> Avec **OU (`||`)**, **une seule raison suffit** pour que le code s`exécute.

---

## 🧩 7️⃣ Le grand résumé du chef

| Mot / Signe | Lecture humaine | Quand c`est exécuté ? | Exemple concret |
|--------------|----------------|------------------------|----------------|
| `if` | Si | Quand c`est vrai (`true`) | "Si l`eau bout…" |
| `else` | Sinon | Quand c`est faux (`false`) | "Sinon, j`attends." |
| `elseif` | Sinon si | Quand le précédent est faux, mais celui-ci vrai | "Sinon, si c`est tiède…" |
| `&&` | ET | Quand **les deux** sont vrais | "Le four est chaud **et** la pâte prête." |
| `||` | OU | Quand **une seule** est vraie | "C`est cuit **ou** le minuteur sonne." |

---

## ❤️ Le mot du formateur

Ton ordinateur, c`est un commis très obéissant... mais un peu **bête** 😆
Il ne connaît que **"Oui chef !" (`true`)** ou **"Non chef !" (`false`)**.

Pas de "je crois que…" ou de "peut-être".
Toi, tu es **le cerveau** 🧠.
Lui, il exécute **ce que tu lui dis**, mais seulement **si la condition est vraie**.

💬 Et souviens-toi :
> Quand tu écris `true` → ton code s`exécute.
> Quand tu écris `false` → ton ordinateur croise les bras et dit "Non chef, je bouge pas." 😅

---

# 🧪 Exercices Pratiques

## 🧩 Exercice 1 – L`eau bout 💧
**Objectif :** Comprendre le `if`.
**Résultat attendu :**
> L`eau bout, je mets les pâtes.

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$eau_bout = true;
if ($eau_bout) {
    echo "L'eau bout, je mets les pâtes.";
}
```
</details>

---

## 🧩 Exercice 2 – Température de l`eau 🌡️
**Objectif :** Utiliser `if` et `else`.
**Résultat attendu :**
> L`eau ne bout pas, j`attends encore.

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$eau_bout = false;
if ($eau_bout) {
    echo "L'eau bout, je mets les pâtes.";
} else {
    echo "L'eau ne bout pas, j'attends encore.";
}
```
</details>

---

## 🧩 Exercice 3 – Température du four 🔥
**Objectif :** Utiliser `elseif`.
**Résultat attendu :**
> Tiède, j`attends encore.

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$temperature = 120;
if ($temperature > 200) {
    echo "Trop chaud, je baisse le four.";
} elseif ($temperature < 150) {
    echo "Tiède, j'attends encore.";
} else {
    echo "Bonne température, j'enfourne !";
}
```
</details>

---

## 🧩 Exercice 4 – Conditions pour enfourner 🍰
**Objectif :** Utiliser `&&` (ET).
**Résultat attendu :**
> On peut enfourner !

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$four_chaud = true;
$pate_prete = true;
if ($four_chaud && $pate_prete) {
    echo "On peut enfourner !";
} else {
    echo "Il manque quelque chose.";
}
```
</details>

---

## 🧩 Exercice 5 – Contrôle de cuisson ⏲️
**Objectif :** Utiliser `||` (OU).
**Résultat attendu :**
> Je vérifie la cuisson.

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$plat_cuit = false;
$minuteur = true;
if ($plat_cuit || $minuteur) {
    echo "Je vérifie la cuisson.";
} else {
    echo "Tout est sous contrôle, j'attends.";
}
```
</details>

---

## 🧩 Exercice 6 – Hygiène 🧼
**Objectif :** Tester plusieurs conditions.
**Résultat attendu :**
> Tu peux cuisiner en toute sécurité.

<details><summary>💡 Afficher la solution</summary>

```php
$mains_lavees = true;
$tablier_propre = true;
if ($mains_lavees && $tablier_propre) {
    echo "Tu peux cuisiner en toute sécurité.";
} else {
    echo "Il te manque quelque chose pour l'hygiène.";
}
```
</details>

---

## 🧩 Exercice 7 – Comparer une température 🌡️
**Objectif :** Comparer avec `<` et `>`.
**Résultat attendu :**
> Température correcte.

<details><summary>💡 Afficher la solution</summary>

```php
$temp = 180;
if ($temp < 150) {
    echo "Trop froid.";
} elseif ($temp > 220) {
    echo "Trop chaud.";
} else {
    echo "Température correcte.";
}
```
</details>

---

## 🧩 Exercice 8 – Niveau de cuisson 🥩
**Objectif :** Utiliser plusieurs `elseif`.
**Résultat attendu :**
> À point

<details><summary>💡 Afficher la solution</summary>

```php
$temperature_viande = 60;
if ($temperature_viande >= 70) {
    echo "Bien cuit";
} elseif ($temperature_viande >= 55) {
    echo "À point";
} elseif ($temperature_viande >= 45) {
    echo "Saignant";
} else {
    echo "Cru";
}
```
</details>

---

## 🧩 Exercice 9 – Service 🍽️
**Objectif :** Tester deux booléens.
**Résultat attendu :**
> On peut servir !

<details><summary>💡 Afficher la solution</summary>

```php
$plats_prets = true;
$table_dressee = true;
if ($plats_prets && $table_dressee) {
    echo "On peut servir !";
} else {
    echo "Il manque quelque chose.";
}
```
</details>

---

## 🧩 Exercice 10 – Le chef est content 😄
**Objectif :** Condition finale.
**Résultat attendu :**
> Le chef est content !

<details><summary>💡 Afficher la solution</summary>

```php
$service_termine = true;
$clients_satisfaits = true;
if ($service_termine && $clients_satisfaits) {
    echo "Le chef est content !";
} else {
    echo "On doit encore améliorer le service.";
}
```
</details>
