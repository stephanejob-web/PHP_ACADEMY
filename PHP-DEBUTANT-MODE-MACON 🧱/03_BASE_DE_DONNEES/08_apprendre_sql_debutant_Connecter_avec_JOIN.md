# 🧱 Cours SQL Débutant – Connecter les tables avec `JOIN` 👷‍♂️🔗

---

## 👋 Introduction

Tu as maintenant plusieurs tables reliées :
- `clients` 👤
- `materiaux` 🧱
- `devis` 📄
- `chantiers` 🏗️

Mais si tu fais :
```sql
SELECT * FROM devis;
```

Tu vois juste des **numéros** :

| id | client_id | materiau_id | quantite | montant |
|----|-----------|------------|----------|---------|
| 1 | 1 | 1 | 100 | 120 |

😕 C'est qui le client 1 ? C'est quoi le matériau 1 ?

Pour afficher les **noms** au lieu des numéros, il faut **joindre les tables**.
👉 C'est ce que fait **`JOIN`** !

---

## 🧰 1️⃣ À quoi sert `JOIN`

`JOIN` veut dire "assembler".

Tu dis à ton ordinateur :
> "Prends la table `devis`, et va chercher le nom du client dans la table `clients`."

---

## 🧱 2️⃣ Exemple concret avec `INNER JOIN`

### Tes tables

**Table `clients`**
| id | nom | telephone |
|----|------|-----------|
| 1 | Dupont | 0601020304 |
| 2 | Martin | 0677889900 |

**Table `chantiers`**
| id | nom | adresse | client_id |
|----|------|---------|-----------|
| 1 | Mur de jardin | 12 rue des Lilas | 1 |
| 2 | Terrasse | 5 avenue du Port | 2 |
| 3 | Abri de jardin | 12 rue des Lilas | 1 |

### La requête avec `JOIN`

```sql
SELECT chantiers.nom, chantiers.adresse, clients.nom AS client_nom
FROM chantiers
INNER JOIN clients ON chantiers.client_id = clients.id;
```

### Le résultat

| nom | adresse | client_nom |
|------|---------|-----------|
| Mur de jardin | 12 rue des Lilas | Dupont |
| Terrasse | 5 avenue du Port | Martin |
| Abri de jardin | 12 rue des Lilas | Dupont |

💬 *"Chef, maintenant je vois le nom du client à côté de chaque chantier !"*

---

## 🔍 3️⃣ Décortiquons doucement

| Partie du code | Explication |
|----------------|-------------|
| `SELECT chantiers.nom, clients.nom` | Sélectionne le nom du chantier ET le nom du client |
| `FROM chantiers` | Table de départ |
| `INNER JOIN clients` | Assemble avec la table `clients` |
| `ON chantiers.client_id = clients.id` | Condition : relie `client_id` avec `id` |
| `AS client_nom` | Renomme la colonne pour éviter la confusion |

---

## 📊 4️⃣ Afficher toutes les colonnes

Tu peux aussi afficher **tout** des deux tables :

```sql
SELECT *
FROM chantiers
INNER JOIN clients ON chantiers.client_id = clients.id;
```

Résultat 👇

| id | nom | adresse | client_id | id | nom | telephone |
|----|------|---------|-----------|----|----|-----------|
| 1 | Mur de jardin | 12 rue des Lilas | 1 | 1 | Dupont | 0601020304 |
| 2 | Terrasse | 5 avenue du Port | 2 | 2 | Martin | 0677889900 |
| 3 | Abri de jardin | 12 rue des Lilas | 1 | 1 | Dupont | 0601020304 |

💬 *"Chef, toutes les infos sont là, des deux tables !"*

---

## 🧩 5️⃣ Joindre trois tables en même temps

Imaginons que tu veux afficher :
- Le nom du chantier
- Le nom du client
- Les matériaux utilisés

**Table `lignes_devis`** (table de liaison)
| id | chantier_id | materiau_id | quantite |
|----|------------|------------|----------|
| 1 | 1 | 1 | 100 |
| 2 | 1 | 2 | 5 |
| 3 | 2 | 3 | 10 |

**Table `materiaux`**
| id | nom | prix |
|----|------|------|
| 1 | Brique rouge | 1.20 |
| 2 | Ciment 25kg | 9.00 |
| 3 | Sable sac | 6.50 |

### La requête

```sql
SELECT
    chantiers.nom AS chantier,
    clients.nom AS client,
    materiaux.nom AS materiau,
    lignes_devis.quantite
FROM lignes_devis
INNER JOIN chantiers ON lignes_devis.chantier_id = chantiers.id
INNER JOIN clients ON chantiers.client_id = clients.id
INNER JOIN materiaux ON lignes_devis.materiau_id = materiaux.id;
```

### Le résultat

| chantier | client | materiau | quantite |
|----------|--------|----------|----------|
| Mur de jardin | Dupont | Brique rouge | 100 |
| Mur de jardin | Dupont | Ciment 25kg | 5 |
| Terrasse | Martin | Sable sac | 10 |

💬 *"Chef, je vois tout : le chantier, le client, et les matériaux !"*

---

## 💡 6️⃣ Les différents types de JOIN

### `INNER JOIN` (le plus courant)
Affiche **seulement** les lignes qui ont une correspondance dans les deux tables.

### `LEFT JOIN`
Affiche **toutes les lignes de la table de gauche**, même si elles n'ont pas de correspondance à droite.

Exemple :
```sql
SELECT chantiers.nom, clients.nom AS client_nom
FROM chantiers
LEFT JOIN clients ON chantiers.client_id = clients.id;
```

Si un chantier n'a pas de client, il apparaîtra quand même (avec `NULL` pour le client).

### `RIGHT JOIN`
Affiche **toutes les lignes de la table de droite**, même si elles n'ont pas de correspondance à gauche.

---

## 🧠 7️⃣ Résumé du chef

| Type de JOIN | Ce qu'il affiche |
|--------------|------------------|
| `INNER JOIN` | Seulement les lignes avec correspondance des deux côtés |
| `LEFT JOIN` | Toutes les lignes de gauche + correspondances de droite |
| `RIGHT JOIN` | Toutes les lignes de droite + correspondances de gauche |
| `AS` | Renomme une colonne pour plus de clarté |
| `table.colonne` | Précise de quelle table vient la colonne |

---

## 🧪 8️⃣ Exercice du jour

1. Affiche **tous les chantiers avec le nom du client** :

```sql
SELECT chantiers.nom AS chantier, clients.nom AS client
FROM chantiers
INNER JOIN clients ON chantiers.client_id = clients.id;
```

2. Crée une table `lignes_devis` :

```sql
CREATE TABLE lignes_devis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chantier_id INT,
    materiau_id INT,
    quantite INT,
    FOREIGN KEY (chantier_id) REFERENCES chantiers(id),
    FOREIGN KEY (materiau_id) REFERENCES materiaux(id)
);
```

3. Ajoute quelques lignes :

```sql
INSERT INTO lignes_devis (chantier_id, materiau_id, quantite)
VALUES
(1, 1, 100),
(1, 2, 5),
(2, 3, 10);
```

4. Affiche **les chantiers, les clients, et les matériaux** :

```sql
SELECT
    chantiers.nom AS chantier,
    clients.nom AS client,
    materiaux.nom AS materiau,
    lignes_devis.quantite
FROM lignes_devis
INNER JOIN chantiers ON lignes_devis.chantier_id = chantiers.id
INNER JOIN clients ON chantiers.client_id = clients.id
INNER JOIN materiaux ON lignes_devis.materiau_id = materiaux.id;
```

💬 *"Chef, tout est bien relié ✅"*

---

## 🚀 9️⃣ Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)
- ajouter (`INSERT INTO`)
- lire (`SELECT`)
- lire avec précision (`SELECT WHERE`)
- trier (`ORDER BY`)
- limiter (`LIMIT`)
- modifier (`UPDATE`)
- supprimer (`DELETE`)
- créer des relations entre tables
- **connecter les tables avec `JOIN`**

Prochaine étape 👇
Tu vas mettre tout ça en pratique avec un **projet complet** !
💬 On va créer une **base de données de gestion de chantier** de A à Z ! 🏗️🚀
