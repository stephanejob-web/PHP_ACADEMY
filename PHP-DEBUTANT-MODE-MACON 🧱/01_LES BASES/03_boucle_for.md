# 🤯 La boucle for – Ce sortilège qui fait tourner les têtes (et le code) 😅

---
💬 “Pourquoi les débutants ont peur de la boucle for ?”
Parce qu’elle tourne en rond, et eux aussi ! 😂

## 🚧 Pourquoi une boucle ?

Imagine que tu dois **poser 10 briques** une par une 🧱

Tu pourrais écrire :
```php
echo "Je pose la brique numéro 1<br>";
echo "Je pose la brique numéro 2<br>";
echo "Je pose la brique numéro 3<br>";
// ...
```

Mais là, soyons honnêtes…  
👉 Au bout de 10 lignes, t’en as marre.  
👉 Au bout de 100, t’as envie de jeter ton ordinateur dans la bétonnière 💻🪣

Heureusement, PHP a une solution magique pour **répéter une action sans se fatiguer** :  
c’est la **boucle** !

---

## 💡 C’est quoi une boucle ?

Une **boucle**, c’est comme un **apprenti bien dressé** 😄  
Tu lui dis :  
> “Pose une brique, avance d’un pas, et recommence… jusqu’à la fin du mur !”  

Et lui, il obéit sans broncher 👷‍♂️  

💬 En PHP, on écrit ça avec la fameuse formule magique :  

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je pose la brique numéro $i<br>";
}
```

---

## 🧩 Le sortilège du `for` 🪄

Regarde bien cette ligne :
```php
for ($i = 1; $i <= 10; $i++)
```

C’est comme une **phrase magique en trois étapes** ✨

| Partie | Explication simple |
|---------|--------------------|
| `$i = 1` | Je **commence** à la brique numéro **1** 🧱 |
| `$i <= 10` | Je **continue** tant que je n’ai **pas dépassé 10 briques** 🔟 |
| `$i++` | J’**avance d’une brique** à chaque fois 👣 |

---

### 🔎 Zoom sur `$i` — le compteur du chantier 🧰

> 💬 `$i` n’est **pas un mot magique** de PHP.  
> C’est simplement **une variable** qu’on utilise pour **compter** les tours de boucle.

Les programmeurs utilisent souvent `$i` car ça vient du mot anglais *“iteration”* (tour de boucle).  
Mais tu peux l’appeler comme tu veux ! 😄

Par exemple :

```php
for ($brique = 1; $brique <= 10; $brique++) {
    echo "Je pose la brique numéro $brique<br>";
}
```

ou même :

```php
for ($tour = 1; $tour <= 10; $tour++) {
    echo "Je pose la brique numéro $tour<br>";
}
```

👉 PHP s’en fiche du nom, tant que c’est **le même dans les trois parties** du `for`.

🧠 Retient ceci :  
> `$i`, `$brique`, ou `$tour`, c’est juste une **étiquette** qui sert à se souvenir où on en est dans la boucle.

---

### 🔹 1️⃣ `$i = 1` — Le départ

Tu dis à ton apprenti :
> “Commence à la **première brique**.”

👉 `$i = 1` veut dire que ton compteur **commence à 1**.

---

### 🔹 2️⃣ `$i <= 10` — La condition

Tu lui dis :
> “Continue **tant que** tu n’as **pas fini les 10 briques**.”

Quand `$i` devient 11 :
> “Chef ! J’ai fini le mur !” 😅

Alors la boucle s’arrête **toute seule**.

---

### 🔹 3️⃣ `$i++` — Le pas en avant

C’est ton petit **pas de maçon** 👣  

Chaque fois que tu poses une brique, tu avances d’une place.  

🧠 Astuce :  
Le `++` veut dire **“ajoute 1”** à ta variable.  
Ton compteur `$i` passe donc de 1 à 2, puis 3, puis 4… automatiquement.  

Et si tu te demandes :  
> “Mais c’est quoi ce bordel de deux + à la suite ?! 🤨”  

Pas de panique, c’est juste la façon de PHP de dire :  
> “Eh ! Ajoute 1 et continue ton boulot, chef !” 😆  

---

## 💬 Ce que fait la boucle

```php
for ($i = 1; $i <= 10; $i++) {
    echo "Je pose la brique numéro $i<br>";
}
```

Résultat :
```
Je pose la brique numéro 1
Je pose la brique numéro 2
Je pose la brique numéro 3
...
Je pose la brique numéro 10
```

Quand il arrive à 11 :
> “Chef ! Le mur est fini !” 🧱✅

---

## 🧮 Exemple 2 – Les sacs de ciment 💪

```php
for ($sac = 1; $sac <= 5; $sac++) {
    echo "Je porte le sac de ciment numéro $sac<br>";
}
```

Résultat :
```
Je porte le sac de ciment numéro 1
Je porte le sac de ciment numéro 2
Je porte le sac de ciment numéro 3
Je porte le sac de ciment numéro 4
Je porte le sac de ciment numéro 5
```

💬 Et voilà ! Ton dos te remercie, et PHP a fait le boulot sans se plaindre 😅

---

## 🧱 En résumé

| Élément | Rôle sur le chantier |
|----------|----------------------|
| `$i = 1` | Tu **commences** à la première brique 🧱 |
| `$i <= 10` | Tu **poses** jusqu’à la 10e brique 🔟 |
| `$i++` | Tu **avances d’un pas** 👣 |
| `for` | Tu **répètes le travail** sans râler 😅 |
| `$i` | C’est ton **compteur de chantier** 🧰 |

---

## 💬 Phrase à retenir
> La boucle `for`, c’est comme ton **apprenti préféré** :  
> tu lui dis **quand commencer**, **quand s’arrêter**, et il bosse tout seul ! 🧱🤖

---

# 🧪 Exercices (niveau débutant)

### Exercice 1
Affiche les nombres de 1 à 10 avec une boucle `for`. 🔢

### Exercice 2
Affiche :  
> “Je pose la brique numéro X”  
pour X allant de 1 à 5. 🧱

### Exercice 3
Affiche :  
> “Je remplis le seau numéro X”  
pour X allant de 1 à 3. 🪣

### Exercice 4
Affiche :  
> “Je vérifie le niveau du mur numéro X”  
pour X allant de 1 à 4. 📏

### Exercice 5
Affiche :  
> “Je range l’outil numéro X dans la caisse.”  
de 1 à 6. 🧰

### Exercice 6
Affiche tous les nombres pairs entre 2 et 10. ⚙️

### Exercice 7
Affiche tous les nombres de 10 à 1 (en comptant à l’envers). 🔙

### Exercice 8
Affiche la table de multiplication de 5.  
(ex : “5 x 1 = 5”, “5 x 2 = 10”, etc.) 🧮

### Exercice 9
Affiche :  
> “Je fais le mur étage X”  
pour X de 1 à 3, puis affiche :  
> “Tous les étages sont terminés !” 🏗️

### Exercice 10
Affiche ton prénom 5 fois 😄

---

# ✅ Solutions

```php
// 1
for ($i = 1; $i <= 10; $i++) {
    echo "$i<br>";
}

// 2
for ($i = 1; $i <= 5; $i++) {
    echo "Je pose la brique numéro $i<br>";
}

// 3
for ($i = 1; $i <= 3; $i++) {
    echo "Je remplis le seau numéro $i<br>";
}

// 4
for ($i = 1; $i <= 4; $i++) {
    echo "Je vérifie le niveau du mur numéro $i<br>";
}

// 5
for ($i = 1; $i <= 6; $i++) {
    echo "Je range l’outil numéro $i dans la caisse.<br>";
}

// 6
for ($i = 2; $i <= 10; $i += 2) {
    echo "$i<br>";
}

// 7
for ($i = 10; $i >= 1; $i--) {
    echo "$i<br>";
}

// 8
for ($i = 1; $i <= 10; $i++) {
    $resultat = 5 * $i;
    echo "5 x $i = $resultat<br>";
}

// 9
for ($i = 1; $i <= 3; $i++) {
    echo "Je fais le mur étage $i<br>";
}
echo "Tous les étages sont terminés !<br>";

// 10
for ($i = 1; $i <= 5; $i++) {
    echo "Laurent<br>";
}
```