# 🧱 Cours PHP pour Débutant – Les Tableaux Associatifs (Clés / Valeurs) 👷‍♂️

---

## 🚨 Pourquoi les tableaux sont très importants

Avant tout, arrêtons-nous un instant 👋  
Ce que tu vas apprendre ici, c`est l`un des concepts les plus importants de tout le PHP (et même de la programmation en général).

Les **tableaux**, c`est le **cœur du code** :  
➡️ c`est la façon de **ranger, organiser et retrouver les informations**.

---

### 🧰 Exemple de chantier

Sur un chantier, tu ranges ton matériel dans des boîtes :

- une boîte pour la maçonnerie,  
- une autre pour les outils de mesure,  
- une autre pour les produits (ciment, sable…).

En PHP, c`est pareil :  
> Un **tableau**, c`est comme une **caisse de rangement** pour tes données.

Sans tableaux, tu devrais créer une variable pour chaque chose 😩  
```php
$outil1 = "truelle";
$outil2 = "niveau";
$outil3 = "mètre";
```

Mais avec un tableau, tu peux **tout ranger au même endroit** :
```php
$outils = ["truelle", "niveau", "mètre"];
```

💬 En résumé :
> Savoir utiliser les tableaux, c`est comme bien ranger ton chantier.  
> Si tes caisses sont en ordre, ton travail devient plus simple et plus rapide !

---

## 👷‍♂️ 1️⃣ Rappel : les tableaux simples (avec numéros)

Dans le cours précédent, tu as appris à faire ça :

```php
$outils = ["truelle", "niveau", "mètre"];
```

| Numéro (index) | Outil |
|----------------|-------|
| 0 | truelle |
| 1 | niveau |
| 2 | mètre |

Pour afficher le deuxième outil :
```php
echo $outils[1]; // niveau
```

**Le problème ?**  
Tu dois **te souvenir du numéro (1)**.  
Pas pratique quand on a la tête pleine de ciment 😅  

Si tu as 50 outils, comment tu te rappelles que la truelle c`est le numéro 0, le marteau le numéro 12, etc. ?

---

## 🧱 2️⃣ Les tableaux associatifs – La solution !

### 🤔 Le problème des numéros

Sur un vrai chantier, tu ne dis JAMAIS :
> "Apporte-moi l`outil numéro 2 !"

Tu dis :
> "Apporte-moi **la truelle de maçon** !"  
> "Passe-moi **le niveau à bulle** !"

Tu utilises un **NOM**, pas un **NUMÉRO** !

### ✨ C`est ça, un tableau associatif !

> Chaque case a un **nom (clé)** au lieu d`un **numéro**.

Au lieu de dire "donne-moi la case 0", tu dis "donne-moi la case **maçonnerie**" !

---

## 🧰 3️⃣ Créer un tableau associatif

### La syntaxe :

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle",
    "traçage"    => "cordeau"
];
```

### 🔍 Décortiquons cette écriture :

```
"maçonnerie" => "truelle"
     ↑              ↑
   LA CLÉ      LA VALEUR
  (le nom)   (le contenu)
```

**La flèche `=>`** veut dire **"contient"** ou **"égale"**.

💬 Tu peux lire ça comme une phrase :
> "La boîte **maçonnerie** contient une **truelle**."  
> "La boîte **mesure** contient un **niveau à bulle**."

---

### 📦 Schéma visuel :

```
┌─────────────┬────────────────────┐
│ Nom (CLÉ)   │ Contenu (VALEUR)   │
├─────────────┼────────────────────┤
│ maçonnerie  │ truelle            │
│ mesure      │ niveau à bulle     │
│ traçage     │ cordeau            │
└─────────────┴────────────────────┘
```

C`est comme un **annuaire** :  
- Le **nom** (clé) te permet de trouver  
- Le **contenu** (valeur)

---

## 🔑 4️⃣ La CLÉ et la VALEUR – Explications simples

### 🔹 La CLÉ (Key en anglais)

C`est le **nom** que tu donnes à une case.  
C`est **TOI** qui choisis ce nom.

Exemples de clés :
- `"maçonnerie"`
- `"client"`
- `"prix"`
- `"nom"`

🧠 **Retiens :**
> La clé, c`est l`**étiquette** sur la boîte.

---

### 🔹 La VALEUR (Value en anglais)

C`est le **contenu** de la case.  
C`est ce que tu ranges dedans.

Exemples de valeurs :
- `"truelle"` (du texte)
- `40` (un nombre)
- `"Dupont"` (un nom)

🧠 **Retiens :**
> La valeur, c`est ce qu`il y a **dans** la boîte.

---

### 📋 Tableau récapitulatif :

| Terme | C`est quoi ? | Exemple |
|-------|--------------|---------|
| **CLÉ** | Le nom de la case | `"maçonnerie"` |
| **VALEUR** | Le contenu de la case | `"truelle"` |
| **=>** | La flèche qui relie les deux | `"maçonnerie" => "truelle"` |

---

## 🪛 5️⃣ Accéder à une valeur avec les crochets `[]`

Pour ouvrir une boîte, tu donnes son **nom** (la clé) entre crochets :

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle"
];

echo $outils["maçonnerie"];
```

**Résultat :**
```
truelle
```

### 🔍 Ce qui se passe :

1. PHP lit : `$outils["maçonnerie"]`
2. Il cherche la clé `"maçonnerie"` dans le tableau
3. Il trouve : `"maçonnerie" => "truelle"`
4. Il retourne la valeur : `"truelle"`

---

### Autre exemple :

```php
echo $outils["mesure"];
```

**Résultat :**
```
niveau à bulle
```

💬 PHP comprend :
> "Va dans la boîte appelée **mesure**, et dis-moi ce qu`il y a dedans."

---

### ⚠️ ATTENTION : Les guillemets sont OBLIGATOIRES !

#### ❌ MAUVAIS :
```php
echo $outils[maçonnerie]; // ERREUR !
```

#### ✅ BON :
```php
echo $outils["maçonnerie"]; // OK !
```

🧠 **Retiens :**
> Quand la clé est du texte, il FAUT des guillemets : `["maçonnerie"]`

---

## 🔧 6️⃣ Modifier ou ajouter des éléments

### 🔄 Modifier une valeur existante :

```php
$outils = [
    "maçonnerie" => "truelle",
    "traçage"    => "cordeau"
];

$outils["traçage"] = "fil à plomb";
```

💬 Maintenant, la boîte "traçage" contient "fil à plomb" au lieu de "cordeau".

---

### ➕ Ajouter une nouvelle case :

```php
$outils["peinture"] = "rouleau";
```

💬 Tu viens d`ajouter une **nouvelle boîte** appelée "peinture" avec un "rouleau" dedans !

---

### Exemple complet :

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau"
];

echo "Avant : ";
print_r($outils);

// Modifier
$outils["mesure"] = "mètre laser";

// Ajouter
$outils["démolition"] = "masse";

echo "Après : ";
print_r($outils);
```

**Résultat :**
```
Avant : Array ( [maçonnerie] => truelle [mesure] => niveau )
Après : Array ( [maçonnerie] => truelle [mesure] => mètre laser [démolition] => masse )
```

---

## 🧾 7️⃣ Voir tout le tableau avec print_r()

Pour voir **TOUT** ce qu`il y a dans ton tableau :

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle",
    "traçage"    => "fil à plomb"
];

print_r($outils);
```

**Résultat :**
```
Array
(
    [maçonnerie] => truelle
    [mesure] => niveau à bulle
    [traçage] => fil à plomb
)
```

💬 `print_r()` veut dire **"print readable"** (affiche de façon lisible).  
C`est super utile pour **vérifier** ce qu`il y a dans ton tableau !

---

## 🧠 8️⃣ Résumé avant la boucle

| Action | Code | Résultat |
|--------|------|-----------|
| **Créer** | `$outils = ["maçonnerie" => "truelle"];` | Crée le tableau |
| **Lire** | `echo $outils["maçonnerie"];` | Affiche "truelle" |
| **Modifier** | `$outils["traçage"] = "fil à plomb";` | Change la valeur |
| **Ajouter** | `$outils["peinture"] = "rouleau";` | Ajoute une case |
| **Voir tout** | `print_r($outils);` | Affiche tout le tableau |

---

### 🤯 *Petite pause humour :*

> "C`est quoi ce bazar ?! J`ai la tête qui chauffe, j`comprends plus rien à ces crochets et ces flèches !" 😵‍💫

C`est **NORMAL** de penser ça la première fois.  
**TOUT LE MONDE** passe par là.  

Mais rassure-toi 👷‍♂️ :  
➡️ À force d`en faire, ton cerveau va s`y habituer.  
➡️ Et un jour, tu feras des tableaux sans même y penser — comme un pro qui monte un mur bien droit 🧱.

💪 **Continue, tu es sur la bonne voie !**

---

# 🔁 9️⃣ La boucle `foreach` – Parcourir tout le tableau

Maintenant que tu sais **ouvrir une boîte avec les crochets**,  
on va apprendre à **ouvrir TOUTES les boîtes d`un coup** avec une boucle.

---

## 🧰 A) Version simple : parcourir seulement les VALEURS

Si tu veux juste voir **ce qu`il y a dans les boîtes** (sans les noms) :

```php
$outils = ["truelle", "niveau", "mètre"];

foreach ($outils as $outil) {
    echo "J'utilise un $outil<br>";
}
```

**Résultat :**
```
J'utilise un truelle
J'utilise un niveau
J'utilise un mètre
```

---

### 🔍 Ce qui se passe :

💬 Lis la ligne comme une phrase :
> "Pour chaque élément **dans `$outils`**, appelle-le **`$outil`** et fais quelque chose avec."

| Tour | `$outil` contient | Affichage |
|------|-------------------|-----------|
| 1 | truelle | J`utilise un truelle |
| 2 | niveau | J`utilise un niveau |
| 3 | mètre | J`utilise un mètre |

C`est comme si PHP sortait **un outil à la fois** de ta caisse, te le montrait, puis passait au suivant !

---

## 🧱 B) Version complète : les CLÉS + les VALEURS

### 🚨 C`EST LA PARTIE LA PLUS IMPORTANTE !

Quand ton tableau a des **noms de boîtes** (clés), tu veux souvent voir **le nom ET le contenu** !

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau à bulle",
    "traçage"    => "cordeau"
];

foreach ($outils as $categorie => $outil) {
    echo "Dans la catégorie $categorie, j'utilise un $outil.<br>";
}
```

**Résultat :**
```
Dans la catégorie maçonnerie, j'utilise un truelle.
Dans la catégorie mesure, j'utilise un niveau à bulle.
Dans la catégorie traçage, j'utilise un cordeau.
```

---

## 🧠 Comprendre `$outils as $categorie => $outil`

### 🚨 LA LIGNE QUI REND FOU ! 😵‍💫

Bon, là c`est **LA** fameuse ligne qui fait peur à tout le monde la première fois.  
Mais t`inquiète, on va la **décortiquer tranquillement** 👇

```php
foreach ($outils as $categorie => $outil)
```

### 📖 Lis-le comme une phrase :

> "Pour **chaque paire** dans `$outils`,  
> mets le **nom de la boîte** dans `$categorie`,  
> et ce qu`il y a **dedans** dans `$outil`."

---

### 🔍 Décomposition mot par mot :

| Mot | Signification |
|-----|---------------|
| `foreach` | "Pour chaque" |
| `$outils` | Mon tableau complet |
| `as` | "En tant que" / "Appelle ça" |
| `$categorie` | Le **nom de la boîte** (la CLÉ) |
| `=>` | "et" |
| `$outil` | Le **contenu** (la VALEUR) |

---

### 🎯 Ce qui se passe à chaque tour :

Dans notre tableau :
```php
"maçonnerie" => "truelle"
```

PHP sépare automatiquement :
- `"maçonnerie"` → va dans `$categorie` (la CLÉ)
- `"truelle"` → va dans `$outil` (la VALEUR)

| Tour | `$categorie` (CLÉ) | `$outil` (VALEUR) |
|------|--------------------|-------------------|
| 1️⃣ | maçonnerie | truelle |
| 2️⃣ | mesure | niveau à bulle |
| 3️⃣ | traçage | cordeau |

---

### 💬 Pourquoi on choisit ces noms de variables ?

Tu pourrais écrire :
```php
foreach ($outils as $toto => $truc) {
    echo "$toto : $truc<br>";
}
```

PHP le comprendrait **très bien**.  
Mais… c`est **moche** et **incompréhensible** 😅

Le code, c`est comme un chantier :  
**Si tu ne mets pas d`étiquettes claires, plus personne ne s`y retrouve.**

👉 C`est pour ça qu`on donne des noms **logiques** :
- `$outils` → le tableau complet (ta caisse)
- `$categorie` → le nom de la boîte (la CLÉ)
- `$outil` → ce qu`il y a dedans (la VALEUR)

🧠 **Retiens :**
> Plus tu choisis des noms clairs, plus ton code est facile à lire !

---

### 🎯 Exemple avec d`autres noms :

```php
$clients = [
    "Dupont" => "devis signé",
    "Martin" => "en attente",
    "Durand" => "terminé"
];

foreach ($clients as $nom => $statut) {
    echo "Client $nom : $statut<br>";
}
```

**Résultat :**
```
Client Dupont : devis signé
Client Martin : en attente
Client Durand : terminé
```

Ici :
- `$nom` = la CLÉ (le nom du client)
- `$statut` = la VALEUR (l`état du chantier)

---

### 🤯 "Pfff… ça me rend fou tout ça !"

C`est **NORMAL** 😅  
**Tous les débutants** passent par là.

Voici la vérité :
- La **première fois**, tu ne comprends rien
- La **deuxième fois**, tu commences à voir
- La **dixième fois**, ça devient naturel
- Après 50 fois, tu le fais **les yeux fermés** 💪

👷‍♂️ Accroche-toi :  
> À force de pratiquer, tu vas voir que ça devient logique.  
> Et un jour, tu écriras `foreach` automatiquement,  
> comme un maçon qui trace droit sans son niveau 🧱

---

## 🔟 Compter les éléments avec count()

Comme pour les tableaux simples, tu peux compter combien de paires tu as :

```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau",
    "traçage"    => "cordeau"
];

echo "J'ai " . count($outils) . " types d'outils.";
```

**Résultat :**
```
J'ai 3 types d'outils.
```

---

## 📋 Récapitulatif complet

### Créer un tableau associatif :
```php
$outils = [
    "maçonnerie" => "truelle",
    "mesure"     => "niveau"
];
```

### Accéder à un élément :
```php
echo $outils["maçonnerie"]; // truelle
```

### Modifier :
```php
$outils["mesure"] = "mètre laser";
```

### Ajouter :
```php
$outils["peinture"] = "rouleau";
```

### Parcourir (CLÉ + VALEUR) :
```php
foreach ($outils as $categorie => $outil) {
    echo "$categorie : $outil<br>";
}
```

### Compter :
```php
echo count($outils);
```

---

## 🧱 Phrase à retenir

> Un **tableau associatif**, c`est comme une **caisse de chantier** :  
> chaque **boîte a un nom (CLÉ)** et un **contenu (VALEUR)**.  
> La **flèche `=>`** relie les deux.  
> Et grâce à **`foreach`**, tu peux **ouvrir toutes les boîtes** sans t`y perdre ! 🪣

---

# 🧪 Exercices Pratiques

## 📝 Exercice 1 : Créer ton premier tableau associatif
**Énoncé :**  
Crée un tableau `$materiaux` avec :
- clé : `"ciment"` → valeur : `8`
- clé : `"sable"` → valeur : `6`
- clé : `"gravier"` → valeur : `10`

Affiche le prix du ciment en utilisant les crochets.

**Ce qu`on attend :**  
- Un tableau associatif avec 3 paires
- Affichage d`une valeur avec sa clé

**Exemple de résultat attendu :**
```
8
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$materiaux = [
    "ciment" => 8,
    "sable" => 6,
    "gravier" => 10
];

echo $materiaux["ciment"];
?>
```
</details>

---

## 📝 Exercice 2 : Ajouter un élément
**Énoncé :**  
Reprends le tableau `$materiaux` de l`exercice 1.  
Ajoute une nouvelle paire : `"brique" => 12`.  
Affiche tout le tableau avec `print_r()`.

**Ce qu`on attend :**  
- Ajout d`une nouvelle clé-valeur
- Affichage du tableau complet

**Exemple de résultat attendu :**
```
Array ( [ciment] => 8 [sable] => 6 [gravier] => 10 [brique] => 12 )
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$materiaux = [
    "ciment" => 8,
    "sable" => 6,
    "gravier" => 10
];

$materiaux["brique"] = 12;

print_r($materiaux);
?>
```
</details>

---

## 📝 Exercice 3 : Modifier une valeur
**Énoncé :**  
Reprends le tableau `$materiaux`.  
Change le prix du sable de 6 à 7.  
Affiche le nouveau prix du sable.

**Ce qu`on attend :**  
- Modification d`une valeur existante
- Affichage de la nouvelle valeur

**Exemple de résultat attendu :**
```
7
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$materiaux = [
    "ciment" => 8,
    "sable" => 6,
    "gravier" => 10
];

$materiaux["sable"] = 7;

echo $materiaux["sable"];
?>
```
</details>

---

## 📝 Exercice 4 : Premier foreach avec clé et valeur
**Énoncé :**  
Crée un tableau `$clients` avec :
- `"Dupont"` => `"devis signé"`
- `"Martin"` => `"en attente"`
- `"Durand"` => `"terminé"`

Utilise foreach pour afficher :  
"Client [nom] : [statut]" pour chaque client.

**Ce qu`on attend :**  
- Un tableau associatif de 3 clients
- Boucle foreach qui affiche clé et valeur

**Exemple de résultat attendu :**
```
Client Dupont : devis signé
Client Martin : en attente
Client Durand : terminé
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$clients = [
    "Dupont" => "devis signé",
    "Martin" => "en attente",
    "Durand" => "terminé"
];

foreach ($clients as $nom => $statut) {
    echo "Client $nom : $statut<br>";
}
?>
```
</details>

---

## 📝 Exercice 5 : Ajouter un client
**Énoncé :**  
Reprends le tableau `$clients` de l`exercice 4.  
Ajoute un nouveau client : `"Bernard"` => `"nouveau"`.  
Affiche tous les clients avec foreach.

**Ce qu`on attend :**  
- Ajout d`une paire clé-valeur
- Affichage de tous les clients

**Exemple de résultat attendu :**
```
Client Dupont : devis signé
Client Martin : en attente
Client Durand : terminé
Client Bernard : nouveau
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$clients = [
    "Dupont" => "devis signé",
    "Martin" => "en attente",
    "Durand" => "terminé"
];

$clients["Bernard"] = "nouveau";

foreach ($clients as $nom => $statut) {
    echo "Client $nom : $statut<br>";
}
?>
```
</details>

---

## 📝 Exercice 6 : Outils et catégories
**Énoncé :**  
Crée un tableau `$outils` avec :
- `"truelle"` => `"maçonnerie"`
- `"scie"` => `"découpe"`
- `"cordeau"` => `"traçage"`

Affiche pour chaque outil :  
"L`outil [nom] sert pour [catégorie]."

**Ce qu`on attend :**  
- Tableau associatif de 3 outils
- Phrase personnalisée avec foreach

**Exemple de résultat attendu :**
```
L'outil truelle sert pour maçonnerie.
L'outil scie sert pour découpe.
L'outil cordeau sert pour traçage.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = [
    "truelle" => "maçonnerie",
    "scie" => "découpe",
    "cordeau" => "traçage"
];

foreach ($outils as $outil => $categorie) {
    echo "L'outil $outil sert pour $categorie.<br>";
}
?>
```
</details>

---

## 📝 Exercice 7 : Compter les éléments
**Énoncé :**  
Reprends le tableau `$outils` de l`exercice 6.  
Compte combien d`outils tu as et affiche :  
"J`ai X outils différents."

**Ce qu`on attend :**  
- Utilisation de count()
- Message avec le résultat

**Exemple de résultat attendu :**
```
J'ai 3 outils différents.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$outils = [
    "truelle" => "maçonnerie",
    "scie" => "découpe",
    "cordeau" => "traçage"
];

$nombre = count($outils);
echo "J'ai $nombre outils différents.";
?>
```
</details>

---

## 📝 Exercice 8 : Calculer un total
**Énoncé :**  
Crée un tableau `$prix` avec :
- `"ciment"` => `8`
- `"sable"` => `6`
- `"gravier"` => `10`

Calcule la somme totale des prix avec foreach.  
Affiche : "Total : X euros"

💡 Astuce : Crée une variable `$total = 0` avant la boucle, et ajoute chaque prix dedans.

**Ce qu`on attend :**  
- Une variable pour stocker le total
- Une boucle qui additionne les valeurs
- Affichage du résultat final

**Exemple de résultat attendu :**
```
Total : 24 euros
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$prix = [
    "ciment" => 8,
    "sable" => 6,
    "gravier" => 10
];

$total = 0;

foreach ($prix as $valeur) {
    $total += $valeur;
}

echo "Total : $total euros";
?>
```
</details>

---

## 📝 Exercice 9 : Afficher le stock
**Énoncé :**  
Crée un tableau `$stock` avec :
- `"briques"` => `120`
- `"sacs de ciment"` => `15`
- `"seaux"` => `8`

Affiche pour chaque élément :  
"J`ai [quantité] [objet]."

**Ce qu`on attend :**  
- Tableau avec quantités
- Boucle foreach qui affiche clé et valeur

**Exemple de résultat attendu :**
```
J'ai 120 briques.
J'ai 15 sacs de ciment.
J'ai 8 seaux.
```

<details>
<summary>👉 Essaye de faire par toi-même avant de regarder la solution !</summary>

```php
<?php
$stock = [
    "briques" => 120,
    "sacs de ciment" => 15,
    "seaux" => 8
];

foreach ($stock as $objet => $quantite) {
    echo "J'ai $quantite $objet.<br>";
}
?>
```
</details>
