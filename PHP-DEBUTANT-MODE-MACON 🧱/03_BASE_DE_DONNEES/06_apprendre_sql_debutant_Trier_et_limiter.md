# 🧱 Cours SQL Débutant – Trier et limiter avec `ORDER BY` et `LIMIT` 👷‍♂️📊

---

## 👋 Introduction

Sur ton chantier, tu aimerais pouvoir dire :
> "Montre-moi les 3 produits les moins chers."
> "Trie les clients par ordre alphabétique."
> "Affiche les 5 derniers devis que j'ai faits."

Avec `ORDER BY` et `LIMIT`, tu peux **ranger et filtrer** tes résultats comme un chef ! 🧹📦

---

## 🧰 1️⃣ À quoi sert `ORDER BY`

`ORDER BY` veut dire "range dans cet ordre".

Tu dis à ton ordinateur :
> "Trie-moi ces produits du moins cher au plus cher."

---

## 🧱 2️⃣ Exemple concret : trier par prix

Ta table `materiaux` :

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 5 | Truelle | Outillage | 12.50 | 8 |

Tu veux **trier du moins cher au plus cher** :

```sql
SELECT * FROM materiaux
ORDER BY prix ASC;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 5 | Truelle | Outillage | 12.50 | 8 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |

💬 *"Chef, voilà, triés du moins cher au plus cher !"*

---

## 🔍 3️⃣ Décortiquons doucement

| Partie du code | Explication |
|----------------|-------------|
| `ORDER BY prix` | Trie en fonction de la colonne "prix" |
| `ASC` | Ordre croissant (du plus petit au plus grand) |
| `DESC` | Ordre décroissant (du plus grand au plus petit) |

---

## 📊 4️⃣ Trier dans l'autre sens avec `DESC`

Tu veux **trier du plus cher au moins cher** :

```sql
SELECT * FROM materiaux
ORDER BY prix DESC;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 5 | Truelle | Outillage | 12.50 | 8 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |

💬 *"Chef, les produits les plus chers en premier !"*

---

## 🔢 5️⃣ Trier par ordre alphabétique

Tu veux **trier par nom de produit** :

```sql
SELECT * FROM materiaux
ORDER BY nom ASC;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 5 | Truelle | Outillage | 12.50 | 8 |

💬 *"Chef, tout est rangé par ordre alphabétique !"*

---

## 🎯 6️⃣ Limiter les résultats avec `LIMIT`

Parfois, tu ne veux voir que **les 3 premiers résultats**.

```sql
SELECT * FROM materiaux
ORDER BY prix ASC
LIMIT 3;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |

💬 *"Chef, voilà les 3 produits les moins chers !"*

---

## 🧩 7️⃣ Combiner avec `WHERE`

Tu veux **les 2 outils les moins chers** :

```sql
SELECT * FROM materiaux
WHERE categorie = "Outillage"
ORDER BY prix ASC
LIMIT 2;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 5 | Truelle | Outillage | 12.50 | 8 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |

💬 *"Chef, les 2 outils les moins chers de mon stock !"*

---

## 💡 8️⃣ Trier par stock

Tu veux voir **les produits avec le plus de stock en premier** :

```sql
SELECT * FROM materiaux
ORDER BY stock DESC;
```

Résultat 👇

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 3 | Sable sac | Granulat | 6.50 | 68 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 4 | Niveau à bulle | Outillage | 14.90 | 12 |
| 5 | Truelle | Outillage | 12.50 | 8 |

💬 *"Chef, les produits les plus en stock d'abord !"*

---

## 🧠 9️⃣ Résumé du chef

| Élément SQL | Rôle sur le chantier |
|--------------|----------------------|
| `ORDER BY` | Trier les résultats |
| `ASC` | Ordre croissant (A→Z, 1→100) |
| `DESC` | Ordre décroissant (Z→A, 100→1) |
| `LIMIT 5` | Afficher seulement les 5 premiers résultats |

---

## 🧪 🔟 Exercice du jour

1. Affiche **tous les produits triés par prix du plus cher au moins cher**.
2. Affiche **les 2 produits les moins chers**.
3. Affiche **les produits triés par nom (ordre alphabétique)**.
4. Affiche **les 3 produits avec le stock le plus faible**.
5. Affiche **les produits de catégorie Maçonnerie, triés du moins cher au plus cher**.

Vérifie tes résultats avec :

```sql
SELECT * FROM materiaux;
```

💬 *"Chef, tout est bien trié et limité ✅"*

---

## 🚀 1️⃣1️⃣ Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)
- ajouter (`INSERT INTO`)
- lire (`SELECT`)
- lire avec précision (`SELECT WHERE`)
- **trier (`ORDER BY`)**
- **limiter (`LIMIT`)**
- modifier (`UPDATE`)
- supprimer (`DELETE`)

Prochaine étape 👇
Tu vas apprendre à **connecter plusieurs tables entre elles**.
💬 Parce qu'un devis, c'est un client + des matériaux + une adresse de chantier !
Et pour ça, on va découvrir **les relations entre tables** 🔗
