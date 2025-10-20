# 🎮 Cours PHP pour Gamers – Les Conditions : Comprendre `true`, `false`, `if`, `else`, `elseif`, `&&` et `||` 🕹️💡

---

## 👋 Introduction

Dans un jeu, tu prends **des décisions tout le temps** :

> "Si j`ai assez de HP, j`attaque."  
> "Si mes munitions sont vides, je recharge."  
> "Et si un boss apparaît, je fuis."

Eh bien ton ordinateur fait **exactement la même chose** dans le code du jeu !  
Mais attention… il est un peu simple d`esprit 😅

👉 Il ne comprend que **deux mots dans tout l`univers** :  
- `true` → ça veut dire **OUI, c`est vrai** ✅  
- `false` → ça veut dire **NON, c`est faux** ❌  

C`est tout.  
Ton ordinateur, c`est comme un NPC qui ne peut répondre que par "Oui" ou "Non" 😆

---

## 💡 1️⃣ `true` et `false` — le cerveau de ton ordinateur 🧠💻

Imagine ton ordinateur comme un interrupteur dans un jeu :  
> 🔆 Activé = `true` (OUI, c`est vrai)  
> 🌑 Désactivé = `false` (NON, c`est faux)

Pas de "peut-être", pas de "on verra" 😅  
C`est **OUI ou NON**, point barre.

| Situation | Valeur PHP | Signification |
|------------|-------------|----------------|
| Tu as des munitions | `true` | Oui, c`est vrai ✅ |
| Tu n`as pas de munitions | `false` | Non, c`est faux ❌ |

```php
$munitions = true;  // Oui, j'ai des munitions 🔫
$munitions = false; // Non, je suis à sec ❌
```

🧠 Quand PHP voit une **valeur vraie (`true`)**, il exécute ton code.  
Quand c`est **faux (`false`)**, il ne fait rien.

---

## 🎯 2️⃣ Le mot `if` – "SI c`est vrai, fais-le"

> "Si quelque chose est vrai, exécute ce bloc de code."

```php
$munitions = true;

if ($munitions) {
    echo "Je peux tirer !";
}
```

💬 PHP lit :  
"Est-ce que $munitions est vrai (true) ?"  
Oui ✅ → il affiche "Je peux tirer !"  
Non ❌ → il ignore ce code.

🎮 En langage gamer :  
> "J`ai des munitions ?"  
> "Oui ! Alors je tire." 💥

---

## 🔄 3️⃣ Le `else` – "SINON…"

Et si `$munitions` est `false` ?

```php
$munitions = false;

if ($munitions) {
    echo "Je peux tirer !";
} else {
    echo "Je dois recharger !";
}
```

💬 PHP réfléchit :  
"J`ai des munitions ? Non ❌ → alors je fais ce qu`il y a dans le `else`."

🎮 Traduction gamer :  
> "Si j`ai des munitions → je tire."  
> "Sinon → je recharge." 🔄

---

## ❤️ 4️⃣ Le `elseif` – "SINON SI..."

Dans un jeu, il y a souvent **plusieurs cas possibles** :

> "Si mes HP sont critiques, je fuis."  
> "Si mes HP sont bas, je me soigne."  
> "Sinon, je continue le combat."

```php
$hp = 30;

if ($hp < 20) {
    echo "HP critiques ! Je fuis ! 🏃";
} elseif ($hp < 50) {
    echo "HP bas, je prends une potion. 🧪";
} else {
    echo "Tout va bien, je continue le combat ! ⚔️";
}
```

💬 PHP teste dans l`ordre :  
1️⃣ Est-ce que HP < 20 ? ❌  
2️⃣ Est-ce que HP < 50 ? ✅  
➡️ Il affiche "HP bas, je prends une potion. 🧪"

🎮 Comme dans ton jeu :  
> "Si HP critiques → je fuis."  
> "Si HP bas → je me soigne."  
> "Sinon → je combat."

---

## ⚙️ 5️⃣ Le `&&` — le mot **ET**

Le symbole `&&` se lit **"ET"**.  
Tu l`utilises quand il faut **que les deux conditions soient vraies** pour agir.

> "Je peux attaquer le boss **si j`ai des munitions ET si mes HP sont suffisants.**"

```php
$munitions = true;
$hp_suffisants = true;

if ($munitions && $hp_suffisants) {
    echo "J'attaque le boss ! 💪";
} else {
    echo "Je ne suis pas prêt...";
}
```

💬 PHP réfléchit :  
> "J`ai des munitions ? ✅"  
> "Mes HP sont bons ? ✅"  
➡️ Les deux sont vrais → "J`attaque le boss ! 💪"

| Munitions | HP suffisants | Résultat |
|-----------|---------------|-----------|
| ✅ | ✅ | On attaque le boss |
| ✅ | ❌ | Pas assez de HP |
| ❌ | ✅ | Pas de munitions |
| ❌ | ❌ | On reste au spawn 🏠 |

🎮 En résumé :  
> Avec **ET (`&&`)**, il faut que **les deux conditions soient vraies** pour que le code s`exécute.

---

## 💨 6️⃣ Le `||` — le mot **OU**

Le symbole `||` se lit **"OU"**.  
Tu l`utilises quand **une seule condition suffit**.

> "Je quitte la partie **si je rage OU si je lag.**"

```php
$rage = false;
$lag = true;

if ($rage || $lag) {
    echo "Je quitte la partie ! 😤";
} else {
    echo "Je continue à jouer ! 🎮";
}
```

💬 PHP pense :  
> "Je rage ? Non ❌"  
> "Je lag ? Oui ✅"  
➡️ Donc je quitte.

| Condition 1 | Condition 2 | Résultat |
|--------------|--------------|-----------|
| ✅ | ❌ | Je quitte |
| ❌ | ✅ | Je quitte |
| ✅ | ✅ | Je quitte |
| ❌ | ❌ | Je reste |

🎮 En résumé :  
> Avec **OU (`||`)**, **une seule raison suffit** pour que le code s`exécute.

---

## 🧩 7️⃣ Le grand résumé

| Mot / Signe | Lecture humaine | Quand c`est exécuté ? | Exemple concret |
|--------------|----------------|------------------------|----------------|
| `if` | Si | Quand c`est vrai (`true`) | "Si j`ai des munitions…" |
| `else` | Sinon | Quand c`est faux (`false`) | "Sinon, je recharge." |
| `elseif` | Sinon si | Quand le précédent est faux, mais celui-ci vrai | "Sinon, si mes HP sont bas…" |
| `&&` | ET | Quand **les deux** sont vrais | "J`ai des munitions **et** des HP." |
| `||` | OU | Quand **une seule** est vraie | "Je lag **ou** je rage." |

---

## ❤️ Le mot du formateur

Ton ordinateur, c`est un NPC très obéissant... mais un peu **bête** 😆  
Il ne connaît que **"Yes !" (`true`)** ou **"Nope !" (`false`)**.

Pas de "je crois que…" ou de "peut-être".  
Toi, tu es **le game designer** 🧠.  
Lui, il exécute **ce que tu lui dis**, mais seulement **si la condition est vraie**.

💬 Et souviens-toi :  
> Quand tu écris `true` → ton code s`exécute.  
> Quand tu écris `false` → ton ordinateur reste AFK et dit "Nope, pas aujourd`hui." 😅

---

# 🧪 Exercices Pratiques

## 🧩 Exercice 1 – Plus de munitions 🔫
**Objectif :** Comprendre le `if`.  
**Énoncé :** Tu as des munitions (`$munitions = true`). Affiche "Je peux tirer !" si c`est vrai.  
**Résultat attendu :**  
> Je peux tirer !

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$munitions = true;
if ($munitions) {
    echo "Je peux tirer !";
}
```
</details>

---

## 🧩 Exercice 2 – État des munitions 🔄
**Objectif :** Utiliser `if` et `else`.  
**Énoncé :** Si tu n`as pas de munitions (`$munitions = false`), affiche "Je dois recharger !", sinon affiche "Je peux tirer !".  
**Résultat attendu :**  
> Je dois recharger !

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$munitions = false;
if ($munitions) {
    echo "Je peux tirer !";
} else {
    echo "Je dois recharger !";
}
```
</details>

---

## 🧩 Exercice 3 – Gestion des HP ❤️
**Objectif :** Utiliser `elseif`.  
**Énoncé :** Tu as 30 HP. Si HP < 20, affiche "HP critiques ! Je fuis !". Si HP < 50, affiche "HP bas, je prends une potion.". Sinon, affiche "Tout va bien !".  
**Résultat attendu :**  
> HP bas, je prends une potion.

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$hp = 30;
if ($hp < 20) {
    echo "HP critiques ! Je fuis !";
} elseif ($hp < 50) {
    echo "HP bas, je prends une potion.";
} else {
    echo "Tout va bien !";
}
```
</details>

---

## 🧩 Exercice 4 – Attaquer le boss 💪
**Objectif :** Utiliser `&&` (ET).  
**Énoncé :** Tu peux attaquer le boss si tu as des munitions ET des HP suffisants (les deux à `true`). Sinon, affiche "Je ne suis pas prêt...".  
**Résultat attendu :**  
> J`attaque le boss !

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$munitions = true;
$hp_suffisants = true;
if ($munitions && $hp_suffisants) {
    echo "J'attaque le boss !";
} else {
    echo "Je ne suis pas prêt...";
}
```
</details>

---

## 🧩 Exercice 5 – Quitter la partie 😤
**Objectif :** Utiliser `||` (OU).  
**Énoncé :** Tu quittes la partie si tu rage (`$rage = false`) OU si tu lag (`$lag = true`). Sinon, tu continues.  
**Résultat attendu :**  
> Je quitte la partie !

💪 *Essaye par toi-même d`abord !*

<details><summary>💡 Afficher la solution</summary>

```php
$rage = false;
$lag = true;
if ($rage || $lag) {
    echo "Je quitte la partie !";
} else {
    echo "Je continue à jouer !";
}
```
</details>

---

## 🧩 Exercice 6 – Équipement requis 🎒
**Objectif :** Tester plusieurs conditions.  
**Énoncé :** Tu peux entrer dans le donjon si tu as une épée (`$epee = true`) ET une armure (`$armure = true`). Sinon, affiche "Il te manque de l`équipement.".  
**Résultat attendu :**  
> Tu peux entrer dans le donjon !

<details><summary>💡 Afficher la solution</summary>

```php
$epee = true;
$armure = true;
if ($epee && $armure) {
    echo "Tu peux entrer dans le donjon !";
} else {
    echo "Il te manque de l'équipement.";
}
```
</details>

---

## 🧩 Exercice 7 – Niveau de joueur 🎓
**Objectif :** Comparer avec `<` et `>`.  
**Énoncé :** Tu as le niveau 15 (`$niveau = 15`). Si niveau < 10, affiche "Débutant". Si niveau < 20, affiche "Intermédiaire". Sinon, affiche "Expert".  
**Résultat attendu :**  
> Intermédiaire

<details><summary>💡 Afficher la solution</summary>

```php
$niveau = 15;
if ($niveau < 10) {
    echo "Débutant";
} elseif ($niveau < 20) {
    echo "Intermédiaire";
} else {
    echo "Expert";
}
```
</details>

---

## 🧩 Exercice 8 – Rang de compétition 🏆
**Objectif :** Utiliser plusieurs `elseif`.  
**Énoncé :** Ton ELO est de 1450 (`$elo = 1450`). Si ELO >= 1800, affiche "Diamant". Si >= 1500, affiche "Platine". Si >= 1200, affiche "Or". Sinon, affiche "Argent".  
**Résultat attendu :**  
> Or

<details><summary>💡 Afficher la solution</summary>

```php
$elo = 1450;
if ($elo >= 1800) {
    echo "Diamant";
} elseif ($elo >= 1500) {
    echo "Platine";
} elseif ($elo >= 1200) {
    echo "Or";
} else {
    echo "Argent";
}
```
</details>

---

## 🧩 Exercice 9 – Lancement de partie 🎮
**Objectif :** Tester deux booléens.  
**Énoncé :** La partie peut démarrer si tous les joueurs sont prêts (`$joueurs_prets = true`) ET si la map est chargée (`$map_chargee = true`).  
**Résultat attendu :**  
> La partie peut démarrer !

<details><summary>💡 Afficher la solution</summary>

```php
$joueurs_prets = true;
$map_chargee = true;
if ($joueurs_prets && $map_chargee) {
    echo "La partie peut démarrer !";
} else {
    echo "On attend encore...";
}
```
</details>

---

## 🧩 Exercice 10 – Victoire ! 🏆
**Objectif :** Condition finale.  
**Énoncé :** Tu gagnes si le boss est vaincu (`$boss_vaincu = true`) ET si tu as survécu (`$en_vie = true`).  
**Résultat attendu :**  
> VICTOIRE ! GG WP !

<details><summary>💡 Afficher la solution</summary>

```php
$boss_vaincu = true;
$en_vie = true;
if ($boss_vaincu && $en_vie) {
    echo "VICTOIRE ! GG WP !";
} else {
    echo "Game Over... Réessaye !";
}
```
</details>

---

## 🧩 Exercice 11 – Cooldown de compétence ⏱️
**Objectif :** Tester une condition de temps.  
**Énoncé :** Ta compétence ultime a un cooldown de 45 secondes (`$cooldown = 45`). Si cooldown <= 0, affiche "Ultime prêt !". Sinon, affiche "En recharge...".  
**Résultat attendu :**  
> En recharge...

<details><summary>💡 Afficher la solution</summary>

```php
$cooldown = 45;
if ($cooldown <= 0) {
    echo "Ultime prêt !";
} else {
    echo "En recharge...";
}
```
</details>

---

## 🧩 Exercice 12 – Achat dans la boutique 💰
**Objectif :** Vérifier si tu as assez de gold.  
**Énoncé :** Une épée coûte 500 gold (`$prix = 500`). Tu as 750 gold (`$gold = 750`). Si tu as assez de gold, affiche "Achat effectué !". Sinon, affiche "Pas assez de gold.".  
**Résultat attendu :**  
> Achat effectué !

<details><summary>💡 Afficher la solution</summary>

```php
$prix = 500;
$gold = 750;
if ($gold >= $prix) {
    echo "Achat effectué !";
} else {
    echo "Pas assez de gold.";
}
```
</details>

---

## 🧩 Exercice 13 – Accès à une zone 🚪
**Objectif :** Condition avec niveau minimum.  
**Énoncé :** Pour accéder à la zone PvP, il faut être niveau 20 minimum (`$niveau_requis = 20`). Tu es niveau 18 (`$niveau = 18`).  
**Résultat attendu :**  
> Niveau insuffisant pour accéder à cette zone.

<details><summary>💡 Afficher la solution</summary>

```php
$niveau = 18;
$niveau_requis = 20;
if ($niveau >= $niveau_requis) {
    echo "Accès autorisé à la zone PvP !";
} else {
    echo "Niveau insuffisant pour accéder à cette zone.";
}
```
</details>

---

## 🧩 Exercice 14 – Streak de kills 🔥
**Objectif :** Système de streak.  
**Énoncé :** Tu as fait 7 kills consécutifs (`$streak = 7`). Si streak >= 10, affiche "LEGENDARY !". Si >= 5, affiche "UNSTOPPABLE !". Si >= 3, affiche "KILLING SPREE !". Sinon, rien.  
**Résultat attendu :**  
> UNSTOPPABLE !

<details><summary>💡 Afficher la solution</summary>

```php
$streak = 7;
if ($streak >= 10) {
    echo "LEGENDARY !";
} elseif ($streak >= 5) {
    echo "UNSTOPPABLE !";
} elseif ($streak >= 3) {
    echo "KILLING SPREE !";
}
```
</details>

---

## 🧩 Exercice 15 – Connexion au serveur 🌐
**Objectif :** Conditions multiples avec OU.  
**Énoncé :** Le serveur est indisponible si c`est une maintenance (`$maintenance = false`) OU si le serveur est plein (`$serveur_plein = true`).  
**Résultat attendu :**  
> Serveur indisponible.

<details><summary>💡 Afficher la solution</summary>

```php
$maintenance = false;
$serveur_plein = true;
if ($maintenance || $serveur_plein) {
    echo "Serveur indisponible.";
} else {
    echo "Connexion au serveur...";
}
```
</details>

---

## 🧩 Exercice 16 – Système de craft 🔨
**Objectif :** Vérifier plusieurs ressources avec ET.  
**Énoncé :** Pour crafter une épée, tu as besoin de fer (`$fer = true`) ET de bois (`$bois = true`) ET d`un marteau (`$marteau = false`).  
**Résultat attendu :**  
> Il te manque des ressources.

<details><summary>💡 Afficher la solution</summary>

```php
$fer = true;
$bois = true;
$marteau = false;
if ($fer && $bois && $marteau) {
    echo "Épée craftée avec succès !";
} else {
    echo "Il te manque des ressources.";
}
```
</details>

---

## 🧩 Exercice 17 – Système de sauvegarde 💾
**Objectif :** Vérifier avant de sauvegarder.  
**Énoncé :** Tu peux sauvegarder si tu n`es pas en combat (`$en_combat = false`) ET si tu es dans une zone sûre (`$zone_sure = true`).  
**Résultat attendu :**  
> Partie sauvegardée !

<details><summary>💡 Afficher la solution</summary>

```php
$en_combat = false;
$zone_sure = true;
if (!$en_combat && $zone_sure) {
    echo "Partie sauvegardée !";
} else {
    echo "Impossible de sauvegarder maintenant.";
}
```
</details>

---

## 🧩 Exercice 18 – Bonus d`XP 🌟
**Objectif :** Calculer un bonus avec conditions.  
**Énoncé :** Tu gagnes 100 XP de base (`$xp_base = 100`). Si tu as un boost actif (`$boost = true`), multiplie l`XP par 2. Affiche l`XP final.  
**Résultat attendu :**  
> Tu gagnes 200 XP !

<details><summary>💡 Afficher la solution</summary>

```php
$xp_base = 100;
$boost = true;
if ($boost) {
    $xp_final = $xp_base * 2;
} else {
    $xp_final = $xp_base;
}
echo "Tu gagnes $xp_final XP !";
```
</details>

---

## 🧩 Exercice 19 – Match competitif 🎯
**Objectif :** Conditions complexes.  
**Énoncé :** Tu peux jouer en mode compétitif si ton niveau >= 30 (`$niveau = 35`) ET si ton K/D >= 1.0 (`$kd = 1.5`).  
**Résultat attendu :**  
> Accès au mode compétitif autorisé !

<details><summary>💡 Afficher la solution</summary>

```php
$niveau = 35;
$kd = 1.5;
if ($niveau >= 30 && $kd >= 1.0) {
    echo "Accès au mode compétitif autorisé !";
} else {
    echo "Tu ne remplis pas les conditions.";
}
```
</details>

---

## 🧩 Exercice 20 – Le système de quête complet 📜
**Objectif :** Mini-projet final.  
**Énoncé :** Tu as une quête. Pour la valider, tu dois avoir tué le boss (`$boss_tue = true`), récupéré l`objet (`$objet_recupere = true`) ET être retourné voir le PNJ (`$pnj_visite = true`). Si toutes les conditions sont remplies, affiche "Quête terminée ! +500 XP +200 Gold". Sinon, affiche ce qu`il reste à faire.  
**Résultat attendu :**  
> Quête terminée ! +500 XP +200 Gold

<details><summary>💡 Afficher la solution</summary>

```php
$boss_tue = true;
$objet_recupere = true;
$pnj_visite = true;

if ($boss_tue && $objet_recupere && $pnj_visite) {
    echo "Quête terminée ! +500 XP +200 Gold";
} else {
    echo "Quête en cours. Il te reste des objectifs à accomplir :<br>";
    if (!$boss_tue) echo "- Vaincre le boss<br>";
    if (!$objet_recupere) echo "- Récupérer l'objet<br>";
    if (!$pnj_visite) echo "- Retourner voir le PNJ<br>";
}
```
</details>

---

## 🎯 GG WP ! 🏆

Si tu as réussi tous ces exercices, tu maîtrises maintenant les conditions en PHP ! 🎉

Tu sais maintenant :
- ✅ Utiliser `if` pour tester une condition
- ✅ Utiliser `else` pour gérer le cas contraire
- ✅ Utiliser `elseif` pour tester plusieurs conditions
- ✅ Utiliser `&&` (ET) pour combiner des conditions qui doivent toutes être vraies
- ✅ Utiliser `||` (OU) pour accepter qu`une seule condition soit vraie
- ✅ Comparer des valeurs avec `<`, `>`, `<=`, `>=`, `==`
- ✅ Créer des systèmes de jeu intelligents

**Prochaine étape :** Les boucles (`for`, `while`) pour répéter des actions automatiquement ! 🔄🚀