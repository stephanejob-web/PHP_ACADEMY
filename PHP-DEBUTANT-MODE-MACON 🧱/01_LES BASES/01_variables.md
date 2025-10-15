# 🧱 Cours PHP pour Débutant – Les Variables 👷‍♂️

---

## 🚨 Pourquoi une variable ? Comprendre avec une table de chantier 🪚

Imagine que tu es sur ton chantier.  
Tu as devant toi une **grande table de travail**, bien propre et bien rangée.  
Dessus, tu poses tout ce dont tu as besoin pour ta journée :  
🧱 du ciment, 🏗️ du sable, 📏 ton mètre, 🧾 le devis du client, 💶 le prix du mètre carré.

Mais pour ne pas te perdre, tu **mets une étiquette devant chaque chose** :  
> “Ciment”, “Sable”, “Client”, “Prix au m²”…

Ainsi, quand tu veux quelque chose, tu n’as pas besoin de réfléchir :  
tu regardes l’étiquette et tu trouves **directement** ce que tu veux.

💬 En PHP, c’est pareil :  
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

🧠 Ton ordinateur a une “table de mémoire”.  
Chaque fois que tu crées une variable, il pose la valeur sur sa table et colle une étiquette dessus pour la reconnaître plus tard.

---

## 💡 Pourquoi c’est utile

Si tu veux calculer un devis, tu n’as pas besoin de tout retenir dans ta tête.  
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
> “Regarde les deux valeurs sur la table (ciment et sable), additionne-les, et mets le résultat dans une nouvelle étiquette appelée total.”

---

## 🧰 1️⃣ Créer une variable

Chaque variable commence **toujours** par `$` en PHP.  
C’est comme si tu mettais une étiquette sur ton plan de travail.

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

Tu veux lire ce qu’il y a sur une étiquette ?  
Tu appelles simplement son nom :
```php
echo $client;
```

Résultat :
```
Dupont
```

💬 Ton ordinateur regarde sur sa table, trouve l’étiquette “client” et lit ce qu’il y a devant.

---

## 🔁 3️⃣ Changer la valeur d’une variable

Tu veux remplacer le devis du client ?  
Pas besoin de refaire la table — tu **remplaces juste la valeur** :

```php
$client = "Martin";
```

💬 L’étiquette reste la même, mais ce qu’il y a devant change.

---

## 🧱 4️⃣ Pourquoi “variable” ?

Parce que son **contenu peut varier**.  
Tu peux **changer ce qu’il y a dessus** sans changer le nom.

C’est comme si tu avais une étiquette “seau” sur ton établi :  
parfois tu y mets du sable, parfois du ciment.  
Mais l’étiquette, elle, reste “seau”.

---

## ⚙️ 5️⃣ Exemple concret

Tu veux calculer le prix d’un mur :
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
| Tu lis l’étiquette | Tu veux savoir ce que c’est | Tu fais `echo $nom;` |
| Tu remplaces le contenu | Tu changes la valeur | Tu réassignes `$nom = ...` |

---

## 💬 Phrase à retenir :
> Une variable, c’est comme une **étiquette sur ta table de chantier**.  
> Tu peux y poser n’importe quelle valeur, la changer quand tu veux,  
> et ton ordinateur s’en souviendra jusqu’à la fin du travail.

---

# 🧪 Exercices (niveau débutant)

### Exercice 1
Crée une variable `$nom` avec ton prénom et affiche-la.

### Exercice 2
Crée une variable `$age` et affiche :  
> “J’ai [ton âge] ans.”

### Exercice 3
Crée deux variables `$largeur = 5` et `$hauteur = 3`,  
puis calcule `$surface` et affiche-la.

### Exercice 4
Crée `$prix_m2 = 50` et calcule le prix d’un mur de 12 m².

### Exercice 5
Crée `$chantier_termine = false`  
et affiche un message selon que le chantier est terminé ou non.

### Exercice 6
Crée `$client = "Martin"`  
et affiche :  
> “Bonjour Martin, votre devis est prêt.”

### Exercice 7
Crée `$seaux = 3`, ajoute 2 seaux, affiche le total.

### Exercice 8
Crée `$prix_sac = 15`, `$quantite = 10`, puis calcule le total.

### Exercice 9
Crée `$prenom = "Paul"`, change sa valeur en `"Marc"` et affiche la nouvelle.

### Exercice 10
Crée `$ciment = 8` et `$sable = 6`, puis affiche la somme totale.

---

# ✅ Solutions

```php
// Exercice 1
$nom = "Laurent";
echo $nom;

// Exercice 2
$age = 45;
echo "J’ai $age ans.";

// Exercice 3
$largeur = 5;
$hauteur = 3;
$surface = $largeur * $hauteur;
echo "La surface est de $surface m².";

// Exercice 4
$prix_m2 = 50;
$surface = 12;
$total = $prix_m2 * $surface;
echo "Le prix du mur est de $total euros.";

// Exercice 5
$chantier_termine = false;
if ($chantier_termine) {
    echo "Le chantier est terminé.";
} else {
    echo "Le chantier est encore en cours.";
}

// Exercice 6
$client = "Martin";
echo "Bonjour $client, votre devis est prêt.";

// Exercice 7
$seaux = 3;
$seaux = $seaux + 2;
echo "Tu as maintenant $seaux seaux.";

// Exercice 8
$prix_sac = 15;
$quantite = 10;
$total = $prix_sac * $quantite;
echo "Le total est de $total euros.";

// Exercice 9
$prenom = "Paul";
$prenom = "Marc";
echo "Bonjour $prenom.";

// Exercice 10
$ciment = 8;
$sable = 6;
$total = $ciment + $sable;
echo "Le total de matériaux est $total.";
```
