# 🧱 Cours PHP pour Débutant – Les Variables 👷‍♂️

---

## 🚨 Pourquoi une variable ? Comprendre avec une table de chantier 🪚

Imagine que tu es sur ton chantier.  
Tu as devant toi une **grande table de travail**, bien propre et bien rangée.  
Dessus, tu poses tout ce dont tu as besoin pour ta journée :  
🧱 du ciment, 🏗️ du sable, 📏 ton mètre, 🧾 le devis du client, 💶 le prix du mètre carré.

Mais pour ne pas te perdre, tu **mets une étiquette devant chaque chose** :  
> "Ciment", "Sable", "Client", "Prix au m²"…

Ainsi, quand tu veux quelque chose, tu n`as pas besoin de réfléchir :  
tu regardes l`étiquette et tu trouves **directement** ce que tu veux.

💬 En PHP, c`est pareil :  
- Chaque **étiquette** correspond à un **nom de variable**.  
- Chaque **objet sur la table** correspond à une **valeur**.

Exemple :
```php
$ciment = 8;
$sable = 6;
$prix_m2 = 40;
```

| Étiquette (nom) | Contenu (valeur) |
|-----------------|------------------|
| ciment | 8 |
| sable | 6 |
| prix_m2 | 40 |

🧠 Ton ordinateur a une "table de mémoire".  
Chaque fois que tu crées une variable, il pose la valeur sur sa table et colle une étiquette dessus pour la reconnaître plus tard.

---

## 💡 Pourquoi c`est utile

Si tu veux calculer un devis, tu n`as pas besoin de tout retenir dans ta tête.  
Tu peux **réutiliser les étiquettes** autant que tu veux :

```php
$ciment = 8;
$sable = 6;
$total = $ciment + $sable;

echo "Le total de matériaux est $total.";
```

Résultat :
```
Le total de matériaux est 14.
```

💬 Tu viens de dire à ton ordinateur :
> "Regarde les deux valeurs sur la table (ciment et sable), additionne-les, et mets le résultat dans une nouvelle étiquette appelée total."

---

## 🧰 1️⃣ Créer une variable

Chaque variable commence **toujours** par `$` en PHP.  
C`est comme si tu mettais une étiquette sur ton plan de travail.

```php
$client = "Dupont";
$surface = 25;
$prix_m2 = 40;
```

💬 Tu viens de coller trois étiquettes :
| Étiquette | Valeur |
|------------|--------|
| client | "Dupont" |
| surface | 25 |
| prix_m2 | 40 |

---

## 🧮 2️⃣ Utiliser une variable

Tu veux lire ce qu`il y a sur une étiquette ?  
Tu appelles simplement son nom :
```php
echo $client;
```

Résultat :
```
Dupont
```

💬 Ton ordinateur regarde sur sa table, trouve l`étiquette "client" et lit ce qu`il y a devant.

---

## 🔁 3️⃣ Changer la valeur d`une variable

Tu veux remplacer le devis du client ?  
Pas besoin de refaire la table — tu **remplaces juste la valeur** :

```php
$client = "Martin";
```

💬 L`étiquette reste la même, mais ce qu`il y a devant change.

---

## 🧱 4️⃣ Pourquoi "variable" ?

Parce que son **contenu peut varier**.  
Tu peux **changer ce qu`il y a dessus** sans changer le nom.

C`est comme si tu avais une étiquette "seau" sur ton établi :  
parfois tu y mets du sable, parfois du ciment.  
Mais l`étiquette, elle, reste "seau".

---

## ⚙️ 5️⃣ Exemple concret

Tu veux calculer le prix d`un mur :
```php
$largeur = 5;
$hauteur = 2;
$prix_m2 = 40;

$surface = $largeur * $hauteur;
$total = $surface * $prix_m2;

echo "Le mur coûte $total euros.";
```

Résultat :
```
Le mur coûte 400 euros.
```

💬 Tu as créé plusieurs étiquettes (`largeur`, `hauteur`, `prix_m2`, etc.)  
et PHP fait le calcul pour toi.

---

## 🧩 6️⃣ En résumé simple

| Ce que tu fais | Dans la vraie vie | En PHP |
|----------------|-------------------|--------|
| Tu poses un objet sur ta table | Tu ranges une donnée | Tu crées une variable |
| Tu mets une étiquette dessus | Tu donnes un nom | Tu écris `$nom = valeur;` |
| Tu lis l`étiquette | Tu veux savoir ce que c`est | Tu fais `echo $nom;` |
| Tu remplaces le contenu | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c`est comme une **étiquette sur ta table de chantier**.  
> Tu peux y poser n`importe quelle valeur, la changer quand tu veux,  
> et ton ordinateur s`en souviendra jusqu`à la fin du travail.

---

# 🔧 Les Opérateurs en PHP

## 🧮 Les Opérateurs Arithmétiques (pour calculer)

Sur ton chantier, tu dois souvent **calculer** des choses : additionner des matériaux, multiplier des surfaces, etc.  
En PHP, tu utilises des **opérateurs** pour faire ces calculs.

### ➕ Addition : `+`
Pour **ajouter** deux valeurs ensemble.

```php
$sacs_matin = 5;
$sacs_aprem = 3;
$total = $sacs_matin + $sacs_aprem;
echo $total; // Affiche 8
```

💬 **Dans la vraie vie :** Tu avais 5 sacs le matin, tu en reçois 3 l`après-midi → tu as 8 sacs au total.

---

### ➖ Soustraction : `-`
Pour **enlever** une valeur d`une autre.

```php
$sacs_debut = 10;
$sacs_utilises = 4;
$sacs_restants = $sacs_debut - $sacs_utilises;
echo $sacs_restants; // Affiche 6
```

💬 **Dans la vraie vie :** Tu avais 10 sacs, tu en utilises 4 → il t`en reste 6.

---

### ✖️ Multiplication : `*`
Pour **multiplier** deux valeurs.

```php
$prix_sac = 15;
$quantite = 6;
$total = $prix_sac * $quantite;
echo $total; // Affiche 90
```

💬 **Dans la vraie vie :** Un sac coûte 15€, tu en prends 6 → ça fait 90€.

---

### ➗ Division : `/`
Pour **diviser** une valeur par une autre.

```php
$budget_total = 1000;
$nb_jours = 5;
$budget_par_jour = $budget_total / $nb_jours;
echo $budget_par_jour; // Affiche 200
```

💬 **Dans la vraie vie :** Tu as 1000€ pour 5 jours de travail → tu peux dépenser 200€ par jour.

---

## 🎯 Les Opérateurs d`Incrémentation (++, --)

### 🪜 Imagine une échelle sur ton chantier

Tu es sur une **échelle** avec des barreaux numérotés.  
Chaque barreau représente un **numéro** : 1, 2, 3, 4, 5...

**L`opérateur `++`** = **Monter d`un barreau** 🔼  
**L`opérateur `--`** = **Descendre d`un barreau** 🔽

---

### 📈 L`opérateur `++` (Incrémenter = Ajouter 1)

Imagine que tu comptes tes **seaux** sur le chantier.  
Tu en as **3**, puis ton collègue t`en apporte **1 de plus**.

**Méthode longue :**
```php
$seaux = 3;
$seaux = $seaux + 1; // Tu ajoutes 1
echo $seaux; // Affiche 4
```

**Méthode courte avec `++` :**
```php
$seaux = 3;
$seaux++; // Pareil que $seaux = $seaux + 1
echo $seaux; // Affiche 4
```

💬 **En langage maçon :**  
> "J`avais 3 seaux, j`en reçois 1 → `$seaux++` → j`ai maintenant 4 seaux."

🧠 **À retenir :** `$seaux++` veut dire "ajoute 1 à `$seaux`".

---

### 📉 L`opérateur `--` (Décrémenter = Enlever 1)

Maintenant, tu **utilises** un seau. Tu passes de **4 seaux à 3 seaux**.

**Méthode longue :**
```php
$seaux = 4;
$seaux = $seaux - 1; // Tu enlèves 1
echo $seaux; // Affiche 3
```

**Méthode courte avec `--` :**
```php
$seaux = 4;
$seaux--; // Pareil que $seaux = $seaux - 1
echo $seaux; // Affiche 3
```

💬 **En langage maçon :**  
> "J`avais 4 seaux, j`en utilise 1 → `$seaux--` → il m`en reste 3."

🧠 **À retenir :** `$seaux--` veut dire "enlève 1 à `$seaux`".

---

### 🎬 Exemple concret : Compter les briques posées

Tu poses des **briques** sur un mur.  
Chaque fois que tu poses une brique, tu veux **compter** combien tu en as posées.

```php
$briques_posees = 0; // Au début, tu n`as posé aucune brique

// Tu poses une brique
$briques_posees++;
echo "Briques posées : $briques_posees<br>"; // Affiche 1

// Tu poses une autre brique
$briques_posees++;
echo "Briques posées : $briques_posees<br>"; // Affiche 2

// Tu poses encore une brique
$briques_posees++;
echo "Briques posées : $briques_posees<br>"; // Affiche 3
```

💬 **Ce qui se passe :**
- Au début : `$briques_posees = 0`
- Après `$briques_posees++` : `$briques_posees = 1`
- Après `$briques_posees++` : `$briques_posees = 2`
- Après `$briques_posees++` : `$briques_posees = 3`

🧠 **C`est comme si tu montais l`échelle barreau par barreau !**

---

### 🔄 Exemple avec `--` : Compter les sacs restants

Tu as **10 sacs de ciment**.  
Chaque fois que tu utilises un sac, tu **décrémente** le compteur.

```php
$sacs_restants = 10; // Au début, tu as 10 sacs

// Tu utilises un sac
$sacs_restants--;
echo "Sacs restants : $sacs_restants<br>"; // Affiche 9

// Tu utilises un autre sac
$sacs_restants--;
echo "Sacs restants : $sacs_restants<br>"; // Affiche 8

// Tu utilises encore un sac
$sacs_restants--;
echo "Sacs restants : $sacs_restants<br>"; // Affiche 7
```

💬 **Ce qui se passe :**
- Au début : `$sacs_restants = 10`
- Après `$sacs_restants--` : `$sacs_restants = 9`
- Après `$sacs_restants--` : `$sacs_restants = 8`
- Après `$sacs_restants--` : `$sacs_restants = 7`

🧠 **C`est comme si tu descendais l`échelle barreau par barreau !**

---

### 📊 Tableau récapitulatif

| Opérateur | Signification | Exemple | Résultat |
|-----------|---------------|---------|----------|
| `++` | Ajoute 1 (monte d`un barreau) | `$x = 5; $x++;` | `$x` vaut maintenant **6** |
| `--` | Enlève 1 (descend d`un barreau) | `$x = 5; $x--;` | `$x` vaut maintenant **4** |

---

### ⚠️ Attention : Avant ou Après ?

Il y a **deux façons** d`utiliser `++` et `--` :

#### 🔵 Après la variable : `$x++` ou `$x--`
Le changement se fait **après** avoir utilisé la variable.

```php
$seaux = 5;
echo $seaux++; // Affiche 5 (puis ajoute 1 après)
echo $seaux;   // Affiche 6
```

💬 **En langage maçon :**  
> "Regarde combien j`ai de seaux (5), **puis** ajoute-en 1."

---

#### 🔴 Avant la variable : `++$x` ou `--$x`
Le changement se fait **avant** d`utiliser la variable.

```php
$seaux = 5;
echo ++$seaux; // Ajoute 1 d`abord, puis affiche 6
echo $seaux;   // Affiche 6
```

💬 **En langage maçon :**  
> "Ajoute-en 1 **d`abord**, puis regarde combien j`en ai (6)."

---

### 🧠 Astuce pour retenir

🪜 **Imagine ton échelle :**
- `$seaux++` → "Je compte d`abord où je suis (5), **puis** je monte d`un barreau (6)"
- `++$seaux` → "Je monte d`un barreau **d`abord** (6), puis je regarde où je suis"

👉 **Dans 95% des cas, tu utiliseras `$seaux++` ou `$seaux--`** (après la variable).

---

## 🔗 Les Opérateurs d`Affectation Combinés

### 🧰 Les raccourcis pour les calculs

Parfois, tu veux **modifier une variable** en y ajoutant, multipliant, etc.

#### ➕ `+=` : Ajouter à la variable

**Méthode longue :**
```php
$seaux = 5;
$seaux = $seaux + 3;
echo $seaux; // Affiche 8
```

**Méthode courte :**
```php
$seaux = 5;
$seaux += 3; // Pareil que $seaux = $seaux + 3
echo $seaux; // Affiche 8
```

💬 **En langage maçon :** "J`avais 5 seaux, on m`en livre 3 → `$seaux += 3` → j`en ai 8 maintenant."

---

#### ➖ `-=` : Enlever à la variable

```php
$briques = 100;
$briques -= 20; // Pareil que $briques = $briques - 20
echo $briques; // Affiche 80
```

💬 **En langage maçon :** "J`avais 100 briques, j`en utilise 20 → il m`en reste 80."

---

#### ✖️ `*=` : Multiplier la variable

```php
$prix = 50;
$prix *= 2; // Pareil que $prix = $prix * 2
echo $prix; // Affiche 100
```

💬 **En langage maçon :** "Le prix était 50€, il double → ça fait 100€."

---

#### ➗ `/=` : Diviser la variable

```php
$budget = 1000;
$budget /= 2; // Pareil que $budget = $budget / 2
echo $budget; // Affiche 500
```

💬 **En langage maçon :** "J`avais 1000€, je le partage en 2 → j`ai 500€ de chaque côté."

---

## 📋 Tableau récapitulatif complet

| Opérateur | Signification | Exemple | Équivalent | Résultat |
|-----------|---------------|---------|------------|----------|
| `+` | Addition | `$x = 5 + 3` | - | `$x = 8` |
| `-` | Soustraction | `$x = 5 - 3` | - | `$x = 2` |
| `*` | Multiplication | `$x = 5 * 3` | - | `$x = 15` |
| `/` | Division | `$x = 10 / 2` | - | `$x = 5` |
| `++` | Incrémentation | `$x++` | `$x = $x + 1` | Ajoute 1 |
| `--` | Décrémentation | `$x--` | `$x = $x - 1` | Enlève 1 |
| `+=` | Addition combinée | `$x += 3` | `$x = $x + 3` | Ajoute 3 |
| `-=` | Soustraction combinée | `$x -= 3` | `$x = $x - 3` | Enlève 3 |
| `*=` | Multiplication combinée | `$x *= 3` | `$x = $x * 3` | Multiplie par 3 |
| `/=` | Division combinée | `$x /= 3` | `$x = $x / 3` | Divise par 3 |

---

## 💬 En résumé

| Action | Opérateur | Ce que ça fait |
|--------|-----------|----------------|
| Monter d`un barreau (ajouter 1) | `$seaux++` | Tu passes de 5 à 6 seaux |
| Descendre d`un barreau (enlever 1) | `$seaux--` | Tu passes de 5 à 4 seaux |
| Ajouter plusieurs barreaux | `$seaux += 3` | Tu passes de 5 à 8 seaux |
| Enlever plusieurs barreaux | `$seaux -= 2` | Tu passes de 5 à 3 seaux |

🧠 **Phrase à retenir :**
> `++` et `--` sont comme **monter ou descendre une échelle, un barreau à la fois**.  
> C`est le moyen le plus rapide d`ajouter ou d`enlever 1 !

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Comprendre l`incrémentation
**Énoncé :**  
Tu commences ta journée avec `$briques_posees = 0`.  
Utilise l`opérateur `++` pour incrémenter cette variable **5 fois** (comme si tu posais 5 briques).  
Affiche le résultat final.

**Ce qu`on attend :**  
- Une variable initialisée à 0
- Utilisation de `++` cinq fois
- L`affichage du nombre final de briques posées

**Exemple de résultat attendu :**
```
J`ai posé 5 briques.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$briques_posees = 0;
$briques_posees++;
$briques_posees++;
$briques_posees++;
$briques_posees++;
$briques_posees++;
echo "J`ai posé $briques_posees briques.";
?>
```
</details>

---

## 📝 Exercice 2 : Comprendre la décrémentation
**Énoncé :**  
Tu as `$sacs_ciment = 10` au début du chantier.  
Utilise l`opérateur `--` pour décrémenter cette variable **3 fois** (comme si tu utilisais 3 sacs).  
Affiche combien de sacs il te reste.

**Ce qu`on attend :**  
- Une variable initialisée à 10
- Utilisation de `--` trois fois
- L`affichage du nombre de sacs restants

**Exemple de résultat attendu :**
```
Il me reste 7 sacs de ciment.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$sacs_ciment = 10;
$sacs_ciment--;
$sacs_ciment--;
$sacs_ciment--;
echo "Il me reste $sacs_ciment sacs de ciment.";
?>
```
</details>

---

## 📝 Exercice 3 : Utiliser +=
**Énoncé :**  
Tu as `$briques = 50` briques sur le chantier.  
Un camion t`en livre 30 de plus. Utilise l`opérateur `+=` pour ajouter ces briques.  
Affiche le nouveau total.

**Ce qu`on attend :**  
- Utilisation de l`opérateur `+=`
- L`affichage du total après livraison

**Exemple de résultat attendu :**
```
J`ai maintenant 80 briques.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$briques = 50;
$briques += 30;
echo "J`ai maintenant $briques briques.";
?>
```
</details>

---

## 📝 Exercice 4 : Utiliser -=
**Énoncé :**  
Tu as `$budget = 500` euros.  
Tu achètes du matériel pour 150 euros. Utilise l`opérateur `-=` pour soustraire cette dépense.  
Affiche le budget restant.

**Ce qu`on attend :**  
- Utilisation de l`opérateur `-=`
- L`affichage du budget après achat

**Exemple de résultat attendu :**
```
Budget restant : 350 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$budget = 500;
$budget -= 150;
echo "Budget restant : $budget euros.";
?>
```
</details>

---

## 📝 Exercice 5 : Ma première variable
**Énoncé :**  
Crée une variable appelée `$prenom` qui contient ton prénom, puis affiche-la avec `echo`.

**Ce qu`on attend :**  
- Une variable `$prenom` correctement créée
- L`affichage de ton prénom à l`écran

**Exemple de résultat attendu :**
```
Laurent
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prenom = "Laurent";
echo $prenom;
?>
```
</details>

---

## 📝 Exercice 6 : Présentation complète
**Énoncé :**  
Crée deux variables : `$prenom` avec ton prénom et `$age` avec ton âge.  
Affiche ensuite une phrase complète : "Je m`appelle [prénom] et j`ai [âge] ans."

**Ce qu`on attend :**  
- Deux variables correctement déclarées
- Une phrase complète qui utilise ces deux variables

**Exemple de résultat attendu :**
```
Je m`appelle Laurent et j`ai 45 ans.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prenom = "Laurent";
$age = 45;
echo "Je m`appelle $prenom et j`ai $age ans.";
?>
```
</details>

---

## 📝 Exercice 7 : Calculer une surface
**Énoncé :**  
Tu dois calculer la surface d`un mur rectangulaire.  
Crée deux variables : `$largeur = 5` et `$longueur = 3`.  
Calcule la surface dans une nouvelle variable `$surface` et affiche le résultat.

**Ce qu`on attend :**  
- Trois variables : `$largeur`, `$longueur` et `$surface`
- Le calcul correct de la multiplication
- L`affichage de la surface

**Exemple de résultat attendu :**
```
La surface du mur est de 15 m².
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$largeur = 5;
$longueur = 3;
$surface = $largeur * $longueur;
echo "La surface du mur est de $surface m².";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer un prix total
**Énoncé :**  
Tu achètes 8 sacs de ciment. Chaque sac coûte 12 euros.  
Crée une variable `$prix_sac = 12` et une variable `$quantite = 8`.  
Calcule le prix total et affiche-le.

**Ce qu`on attend :**  
- Deux variables pour le prix unitaire et la quantité
- Une variable pour le total
- L`affichage du montant total

**Exemple de résultat attendu :**
```
Le prix total est de 96 euros.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix_sac = 12;
$quantite = 8;
$total = $prix_sac * $quantite;
echo "Le prix total est de $total euros.";
?>
```
</details>

---

## 📝 Exercice 9 : Modifier une variable
**Énoncé :**  
Crée une variable `$client = "Dupont"`.  
Affiche d`abord "Bonjour Dupont".  
Ensuite, change la valeur de `$client` en "Martin" et affiche "Bonjour Martin".

**Ce qu`on attend :**  
- Une variable créée puis modifiée
- Deux affichages différents montrant que la variable a changé

**Exemple de résultat attendu :**
```
Bonjour Dupont
Bonjour Martin
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$client = "Dupont";
echo "Bonjour $client<br>";
$client = "Martin";
echo "Bonjour $client";
?>
```
</details>

---

## 📝 Exercice 10 : Additionner des matériaux
**Énoncé :**  
Sur ton chantier, tu as `$sacs_ciment = 5` et `$sacs_sable = 7`.  
Calcule le nombre total de sacs dans une variable `$total_sacs` et affiche le résultat.

**Ce qu`on attend :**  
- Trois variables au total
- Une addition correcte
- Un message clair avec le résultat

**Exemple de résultat attendu :**
```
J`ai un total de 12 sacs sur le chantier.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$sacs_ciment = 5;
$sacs_sable = 7;
$total_sacs = $sacs_ciment + $sacs_sable;
echo "J`ai un total de $total_sacs sacs sur le chantier.";
?>
```
</details>

---

## 📝 Exercice 11 : Calculer un devis complet
**Énoncé :**  
Tu dois faire un devis pour carreler une pièce.  
Crée les variables suivantes :
- `$largeur_piece = 4`
- `$longueur_piece = 5`
- `$prix_m2 = 35`

Calcule d`abord la surface de la pièce, puis le prix total du carrelage, et affiche les deux résultats.

**Ce qu`on attend :**  
- Calcul de la surface (largeur × longueur)
- Calcul du prix total (surface × prix au m²)
- Affichage des deux informations

**Exemple de résultat attendu :**
```
Surface de la pièce : 20 m²
Prix total du carrelage : 700 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$largeur_piece = 4;
$longueur_piece = 5;
$prix_m2 = 35;

$surface = $largeur_piece * $longueur_piece;
$prix_total = $surface * $prix_m2;

echo "Surface de la pièce : $surface m²<br>";
echo "Prix total du carrelage : $prix_total euros";
?>
```
</details>

---

## 📝 Exercice 12 : Incrémenter une variable
**Énoncé :**  
Tu commences la journée avec `$seaux = 3` sur le chantier.  
Un collègue t`en apporte 4 de plus. Modifie la variable `$seaux` en lui ajoutant 4, puis affiche le nouveau nombre de seaux.

**Ce qu`on attend :**  
- Une variable initialisée à 3
- Une modification qui ajoute 4 à cette variable
- L`affichage du résultat final

**Exemple de résultat attendu :**
```
Tu as maintenant 7 seaux.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$seaux = 3;
$seaux = $seaux + 4;
echo "Tu as maintenant $seaux seaux.";
?>
```
</details>

---

## 📝 Exercice 13 : Variables de texte
**Énoncé :**  
Crée trois variables :
- `$entreprise = "BTP Services"`
- `$ville = "Lyon"`
- `$telephone = "04 78 12 34 56"`

Affiche ensuite un message complet : "L`entreprise [entreprise] située à [ville] - Tél : [telephone]"

**Ce qu`on attend :**  
- Trois variables de type texte (string)
- Un message formaté qui utilise toutes les variables

**Exemple de résultat attendu :**
```
L`entreprise BTP Services située à Lyon - Tél : 04 78 12 34 56
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$entreprise = "BTP Services";
$ville = "Lyon";
$telephone = "04 78 12 34 56";
echo "L`entreprise $entreprise située à $ville - Tél : $telephone";
?>
```
</details>

---

## 📝 Exercice 14 : Calcul complexe avec plusieurs variables
**Énoncé :**  
Tu dois calculer le coût total d`un chantier. Tu as besoin de :
- `$heures_travail = 16` (nombre d`heures travaillées)
- `$taux_horaire = 25` (euros par heure)
- `$materiel = 150` (coût du matériel en euros)

Calcule d`abord le coût de la main d`œuvre (`$cout_main_oeuvre`), puis le coût total du chantier (`$cout_total`) qui est la somme de la main d`œuvre et du matériel. Affiche tous les détails.

**Ce qu`on attend :**  
- Plusieurs calculs intermédiaires
- L`utilisation de toutes les variables créées
- Un affichage détaillé du devis

**Exemple de résultat attendu :**
```
Heures de travail : 16h à 25€/h = 400€
Matériel : 150€
Coût total du chantier : 550€
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$heures_travail = 16;
$taux_horaire = 25;
$materiel = 150;

$cout_main_oeuvre = $heures_travail * $taux_horaire;
$cout_total = $cout_main_oeuvre + $materiel;

echo "Heures de travail : {$heures_travail}h à {$taux_horaire}€/h = {$cout_main_oeuvre}€<br>";
echo "Matériel : {$materiel}€<br>";
echo "Coût total du chantier : {$cout_total}€";
?>
```
</details>

---

## 🎯 Félicitations !

Si tu as réussi tous ces exercices, tu maîtrises maintenant les bases des variables en PHP ! 🎉

Tu sais maintenant :
- ✅ Créer une variable avec le symbole `$`
- ✅ Stocker différents types de valeurs (nombres, texte)
- ✅ Afficher le contenu d`une variable
- ✅ Modifier la valeur d`une variable
- ✅ Faire des calculs avec plusieurs variables
- ✅ Combiner des variables dans des messages

**Prochaine étape :** Les conditions (if/else) pour rendre ton code plus intelligent ! 🚀