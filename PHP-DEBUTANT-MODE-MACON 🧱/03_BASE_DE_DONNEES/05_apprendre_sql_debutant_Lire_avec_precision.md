# 🧱 Cours SQL Débutant – Lire avec précision avec `SELECT` et `WHERE` 👷‍♂️🔍

---

## 👋 Introduction

Imagine ton entrepôt rempli de centaines de produits.
🧱 Tu ne veux pas regarder **toute l'étagère** à chaque fois.

Tu veux pouvoir dire :
> "Apporte-moi seulement les briques rouges."
> "Montre-moi les produits de moins de 10€."
> "Cherche les matériaux en rupture de stock."

Pour ça, tu utilises `SELECT` avec `WHERE` 🔍

---

## 🧰 1️⃣ Rappel : `SELECT` tout court

Tu connais déjà cette commande :

```sql
SELECT * FROM materiaux;
```

💬 *"Chef, montre-moi TOUT ce qu'il y a sur l'étagère `materiaux`."*

Mais quand t'as 200 produits… c'est long 😅

---

## 🔍 2️⃣ Ajouter une condition avec `WHERE`

Tu peux **filtrer** ce que tu veux voir :

```sql
SELECT * FROM materiaux
WHERE categorie = "Maçonnerie";
```

💬 *"Chef, montre-moi seulement les produits de type Maçonnerie."*

---

## 🧱 3️⃣ Exemple concret

Ta table `materiaux` :

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 5 | Truelle | Outillage | 12.50 | 8 |

Tu veux voir **seulement les outils** :

```sql
SELECT * FROM materiaux
WHERE categorie = "Outillage";
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 5 | Truelle | Outillage | 12.50 | 8 |

💬 *"Voilà, chef, seulement les outils !"*

---

## 📊 4️⃣ Filtrer par prix

Tu veux voir **les produits de moins de 10€** :

```sql
SELECT * FROM materiaux
WHERE prix < 10;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 3 | Sable sac | Granulat | 6.50 | 68 |

---

## 🔢 5️⃣ Les opérateurs de comparaison

| Symbole | Signification | Exemple |
|---------|---------------|---------|
| `=` | égal à | `WHERE prix = 10` |
| `<` | inférieur à | `WHERE prix < 10` |
| `>` | supérieur à | `WHERE stock > 50` |
| `<=` | inférieur ou égal | `WHERE prix <= 10` |
| `>=` | supérieur ou égal | `WHERE stock >= 100` |
| `!=` ou `<>` | différent de | `WHERE categorie != "Liant"` |

---

## 🧩 6️⃣ Combiner plusieurs conditions avec `AND`

Tu veux **les produits de moins de 10€ ET en stock supérieur à 50** :

```sql
SELECT * FROM materiaux
WHERE prix < 10 AND stock > 50;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 3 | Sable sac | Granulat | 6.50 | 68 |

💬 *"Chef, voici les produits pas chers ET bien en stock."*

---

## 🔀 7️⃣ Combiner avec `OR` (ou)

Tu veux **les produits de catégorie Liant OU Granulat** :

```sql
SELECT * FROM materiaux
WHERE categorie = "Liant" OR categorie = "Granulat";
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 3 | Sable sac | Granulat | 6.50 | 68 |

---

## 💡 8️⃣ Chercher une partie de texte avec `LIKE`

Tu veux **tous les produits dont le nom contient "bulle"** :

```sql
SELECT * FROM materiaux
WHERE nom LIKE "%bulle%";
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |

💬 Le symbole `%` veut dire "n'importe quoi avant ou après".

---

## 🧠 9️⃣ Résumé du chef

| Élément SQL | Rôle sur le chantier |
|--------------|----------------------|
| `SELECT * FROM` | Montre-moi les produits de cette table |
| `WHERE` | Mais seulement ceux qui respectent cette condition |
| `=`, `<`, `>` | Pour comparer des valeurs |
| `AND` | Les deux conditions doivent être vraies |
| `OR` | Au moins une des conditions doit être vraie |
| `LIKE "%mot%"` | Chercher un mot dans un texte |

---

## 🧪 🔟 Exercice du jour

1. Affiche **tous les produits de moins de 15€**.
2. Affiche **les produits en stock inférieur à 20**.
3. Affiche **les produits de catégorie Outillage ET de prix supérieur à 10€**.
4. Cherche **tous les produits dont le nom contient "sac"**.
5. Affiche **les produits de catégorie Liant OU de prix inférieur à 5€**.

Vérifie tes résultats avec :

```sql
SELECT * FROM materiaux;
```

💬 *"Chef, j'ai tout filtré comme tu voulais ✅"*

---

## 🚀 1️⃣1️⃣ Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)
- ajouter (`INSERT INTO`)
- lire **tout** (`SELECT`)
- **lire avec précision (`SELECT WHERE`)**
- modifier (`UPDATE`)
- supprimer (`DELETE`)

Prochaine étape 👇
Tu vas apprendre à **ranger et limiter** tes résultats avec `ORDER BY` et `LIMIT`.
💬 Parce que parfois, tu veux juste voir les 5 produits les moins chers, triés du moins cher au plus cher 📊
