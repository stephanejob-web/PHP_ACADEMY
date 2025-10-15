# 🎮 Cours PHP Débutant – Les Conditions : Comprendre `true`, `false`, `if`, `else`, `elseif`, `&&` et `||` ⚔️🧠

---

## 👋 Introduction

Dans ton jeu vidéo préféré, tu prends **des décisions à chaque instant** :

> “Si ma vie est basse, je bois une potion.”  
> “Si j’ai assez de mana, je lance un sort.”  
> “Sinon, je me planque derrière un mur !” 🧱

Ton ordinateur fait **exactement la même chose**.  
Mais il est un peu comme un PNJ sans intelligence artificielle 😅 :  
👉 il ne comprend que **deux états** :  
- `true` → **OUI**, c’est vrai ✅  
- `false` → **NON**, c’est faux ❌  

Pas de “peut-être” ni de “je réfléchis”.  
Juste **ON ou OFF**, comme un interrupteur 🎮

---

## 💡 1️⃣ `true` et `false` — le cerveau de ton programme 🧠💻

Imagine un **levier** dans ton jeu :  
> 🔆 Tiré = `true` (activé)  
> 🌑 Relevé = `false` (désactivé)

| Situation | Valeur PHP | Signification |
|------------|-------------|----------------|
| Le levier est activé | `true` | Oui, c’est vrai ✅ |
| Le levier est inactif | `false` | Non, c’est faux ❌ |

```php
$levier = true;  // Activé ⚙️
$levier = false; // Désactivé 💤
```

🧠 Quand PHP voit `true`, il **exécute l’action**.  
Quand c’est `false`, il **n’agit pas**.

---

## 🧩 2️⃣ Le `if` – “SI c’est vrai, fais-le”

> “Si quelque chose est vrai, exécute ce bloc de code.”

```php
$ennemi_visible = true;

if ($ennemi_visible) {
    echo "J’attaque l’ennemi ! ⚔️";
}
```

💬 PHP lit :
> “Est-ce que l’ennemi est visible ?”  
> Oui ✅ → il attaque !  
> Non ❌ → il ne bouge pas.

🕹️ En langage gamer :  
> “Si un monstre apparaît → j’engage le combat.” 💥

---

## 🧱 3️⃣ Le `else` – “SINON…”

Et si l’ennemi **n’est pas visible** ?

```php
$ennemi_visible = false;

if ($ennemi_visible) {
    echo "J’attaque l’ennemi ! ⚔️";
} else {
    echo "Rien en vue, je me repose. 😴";
}
```

💬 PHP réfléchit :  
> “Est-ce qu’un ennemi est là ? Non ❌ → alors j’exécute le `else`.”

🧠 En langage gamer :  
> “Si un ennemi apparaît → j’attaque.”  
> “Sinon → je régénère ma vie.” 💊

---

## 🌡️ 4️⃣ Le `elseif` – “SINON SI...”

Il y a souvent **plusieurs scénarios** dans un jeu :

> “Si je suis à moins de 10 PV → je bois une potion.”  
> “Sinon si ma vie est moyenne → je fais attention.”  
> “Sinon → je fonce dans le tas ! 😎”

```php
$vie = 25;

if ($vie < 10) {
    echo "💀 Vie critique, bois une potion !";
} elseif ($vie < 50) {
    echo "⚠️ Vie moyenne, reste prudent.";
} else {
    echo "💪 Pleine forme, fonce au combat !";
}
```

💬 PHP teste dans l’ordre :  
1️⃣ Vie < 10 ? ❌  
2️⃣ Vie < 50 ? ✅  
➡️ Il affiche : “⚠️ Vie moyenne, reste prudent.”

🎮 Comme dans un RPG : tu adaptes ta stratégie selon ta barre de vie.

---

## ⚙️ 5️⃣ Le `&&` — le mot **ET**

Le symbole `&&` signifie **“ET”**.  
Tu l’utilises quand il faut que **les deux conditions soient vraies** pour agir.

> “Je peux lancer un sort **si j’ai du mana ET si je ne suis pas étourdi.**”

```php
$mana = true;
$etourdi = false;

if ($mana && !$etourdi) {
    echo "🔥 Sort lancé !";
} else {
    echo "💤 Impossible de lancer le sort.";
}
```

💬 PHP pense :  
> “J’ai du mana ? ✅”  
> “Je ne suis pas étourdi ? ✅”  
➡️ Action validée 🎯

| Mana | Étourdi | Résultat |
|-------|----------|-----------|
| ✅ | ✅ | ❌ Impossible |
| ✅ | ❌ | ✅ Sort lancé |
| ❌ | ✅ | ❌ Rien ne se passe |
| ❌ | ❌ | ❌ Rien ne se passe |

🧠 En résumé :  
> Avec **ET (`&&`)**, il faut que **toutes les conditions soient vraies** pour agir.

---

### ⚔️ Autres exemples gamers :
- “Je peux équiper une arme **si j’ai le niveau ET la force nécessaire.**”  
- “Je peux entrer dans la zone **si la porte est ouverte ET j’ai la clé.**”  
- “Je peux sauvegarder **si je ne suis pas en combat ET si j’ai un point de sauvegarde.**”

---

## 💨 6️⃣ Le `||` — le mot **OU**

Le symbole `||` signifie **“OU”**.  
Tu l’utilises quand **une seule condition suffit**.

> “Je me soigne **si ma vie est basse OU si je suis empoisonné.**”

```php
$vie_basse = false;
$empoisonne = true;

if ($vie_basse || $empoisonne) {
    echo "💊 Je me soigne !";
} else {
    echo "💪 Tout va bien, je continue le combat.";
}
```

💬 PHP pense :  
> “Vie basse ? Non ❌”  
> “Empoisonné ? Oui ✅”  
➡️ Donc je me soigne.

🕹️ En résumé :  
> Avec **OU (`||`)**, **une seule condition vraie** suffit pour déclencher l’action.

| Vie basse | Empoisonné | Résultat |
|------------|-------------|-----------|
| ✅ | ❌ | Je me soigne |
| ❌ | ✅ | Je me soigne |
| ✅ | ✅ | Je me soigne |
| ❌ | ❌ | Je continue le combat |

---

## 🧩 7️⃣ Le grand résumé du joueur

| Signe | Lecture gamer | Quand c’est exécuté ? | Exemple |
|--------|----------------|------------------------|---------|
| `if` | Si | Quand c’est vrai (`true`) | “Si un monstre apparaît…” |
| `else` | Sinon | Quand c’est faux (`false`) | “Sinon, je reste en planque.” |
| `elseif` | Sinon si | Quand la précédente est fausse mais celle-ci vraie | “Sinon, si j’ai peu de vie…” |
| `&&` | ET | Quand **tout** est vrai | “J’ai du mana **et** je ne suis pas étourdi.” |
| `||` | OU | Quand **au moins une** est vraie | “Je me soigne s’il me reste peu de vie **ou** si je suis empoisonné.” |

---

## ❤️ Le mot du formateur

Ton ordinateur, c’est comme un coéquipier sans IA 😅  
Il ne comprend que deux ordres : **“Oui capitaine !” (`true`)** ou **“Non, pas possible !” (`false`)**.

C’est toi le stratège 🧠.  
Lui, il exécute **tes conditions** comme un script de jeu.

💬 Souviens-toi :
> `true` = ton code agit 🟢  
> `false` = ton code reste en attente 🔴  

Et comme dans un bon RPG…  
> Tes **conditions** définissent ton **scénario**. 🎬