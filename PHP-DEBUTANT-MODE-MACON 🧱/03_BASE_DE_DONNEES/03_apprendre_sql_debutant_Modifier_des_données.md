# 🧱 Cours SQL Débutant – Modifier des données avec `UPDATE` 👷‍♂️🔧

---

## 👋 Introduction

Sur ton chantier, parfois, il faut **corriger quelque chose**.  
🧱 Une brique mal posée, un prix mal affiché, ou un stock à mettre à jour.

Dans une base de données, c’est pareil.  
On utilise la commande **`UPDATE`** pour **modifier une donnée existante**.

---

## 🧰 1️⃣ À quoi sert `UPDATE`

`UPDATE` veut dire “mets à jour”.

Tu dis à ton ordinateur :
> “Va dans ce rayon, trouve ce produit, et change sa valeur.”

---

## 🧱 2️⃣ Exemple concret

Tu as ta table `materiaux` :

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 2 | Ciment 25kg | Liant | 8.50 | 42 |

Mais le prix du **ciment** a changé.  
Tu veux passer de **8.50** à **9.00**.

Voici la commande :

```sql
UPDATE materiaux
SET prix = 9.00
WHERE id = 2;
```

💬 Traduction chantier :
> “Dans le rayon `materiaux`, cherche le produit n°2,  
> et mets à jour son prix à 9.00.”

---

## 🔍 3️⃣ Décortiquons doucement

| Partie du code | Explication |
|----------------|-------------|
| `UPDATE materiaux` | Dis à la base que tu veux modifier la table “materiaux” |
| `SET prix = 9.00` | Voici la nouvelle valeur |
| `WHERE id = 2` | Change **seulement** pour la ligne qui a l’ID 2 |

⚠️ **Important :**
Si tu oublies le `WHERE`, tu changes **toutes les lignes de la table** ! 😱  
C’est comme si tu changeais le prix de tous les produits d’un coup !

---

## 🧩 4️⃣ Modifier plusieurs colonnes à la fois

Tu peux corriger plusieurs choses en même temps 👇

```sql
UPDATE materiaux
SET prix = 9.00, stock = 50
WHERE id = 2;
```

💬 *“Chef, j’ai mis à jour le prix et refait le stock !”*

---

## 📋 5️⃣ Exemple avec un autre chantier

Imaginons une table `clients` :

| id | nom | telephone | adresse |
|----|------|------------|----------|
| 1 | Dupont | 0601020304 | 12 rue des Lilas |

Tu veux corriger le numéro de téléphone de M. Dupont :

```sql
UPDATE clients
SET telephone = "0611223344"
WHERE id = 1;
```

Résultat 👇

| id | nom | telephone | adresse |
|----|------|------------|----------|
| 1 | Dupont | 0611223344 | 12 rue des Lilas |

---

## 💡 6️⃣ Modifier selon une condition plus précise

Tu peux aussi utiliser une condition **sur un mot** :

```sql
UPDATE materiaux
SET prix = 7.90
WHERE categorie = "Liant";
```

💬 *“Chef, j’ai changé le prix de tous les matériaux de type Liant.”*

---

## 🧠 7️⃣ Résumé du chef

| Élément SQL | Rôle sur le chantier |
|--------------|----------------------|
| `UPDATE` | Dire qu’on veut changer une info |
| `SET` | Ce qu’on veut modifier |
| `WHERE` | Où on veut le faire |
| `=` | La nouvelle valeur |

---

## 🧪 8️⃣ Exercice du jour

1. Dans ta table `materiaux`,  
   change le stock de la **brique rouge** à `400`.  
2. Modifie le **prix du sable** à `6.50`.  
3. Vérifie ton travail avec :

```sql
SELECT * FROM materiaux;
```

💬 *“Chef, les prix et stocks sont bien mis à jour ✅”*

---

## 🚀 9️⃣ Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)  
- ajouter (`INSERT INTO`)  
- lire (`SELECT`)  
- **modifier (`UPDATE`)**

Prochaine étape 👇  
Tu apprendras à **supprimer** une ligne de ta table avec `DELETE`.  
💬 Parce que parfois, il faut **vider une étagère** avant de tout ranger proprement 🧹
