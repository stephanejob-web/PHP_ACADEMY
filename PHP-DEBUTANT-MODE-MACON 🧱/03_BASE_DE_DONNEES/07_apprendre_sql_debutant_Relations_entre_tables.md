# 🧱 Cours SQL Débutant – Les relations entre tables 👷‍♂️🔗

---

## 👋 Introduction

Sur ton chantier, tu as :
- Une liste de **clients** 👤
- Une liste de **matériaux** 🧱
- Une liste de **devis** 📄

Mais comment savoir **quel devis est pour quel client** ?
Et comment savoir **quels matériaux sont dans ce devis** ?

Pour ça, il faut **relier les tables entre elles** 🔗
C'est ce qu'on appelle les **relations** en SQL.

---

## 🧰 1️⃣ Pourquoi relier les tables ?

Imagine que tu notes tout dans **une seule grande table** :

| id_devis | client_nom | client_tel | materiau_nom | materiau_prix | quantite | montant |
|----------|-----------|-----------|-------------|--------------|----------|---------|
| 1 | Dupont | 0601020304 | Brique rouge | 1.20 | 100 | 120 |
| 1 | Dupont | 0601020304 | Ciment 25kg | 9.00 | 5 | 45 |
| 2 | Martin | 0677889900 | Sable sac | 6.50 | 10 | 65 |

😱 Tu vois le problème ?
- Le nom et le téléphone de Dupont sont **répétés** plusieurs fois
- Si Dupont change de numéro, il faut modifier **partout**
- C'est le **bazar** !

---

## 📁 2️⃣ La solution : plusieurs tables reliées

Au lieu de tout mettre dans une seule table, on fait **3 tables séparées** :

### Table `clients`
| id | nom | telephone |
|----|------|-----------|
| 1 | Dupont | 0601020304 |
| 2 | Martin | 0677889900 |

### Table `materiaux`
| id | nom | prix |
|----|------|------|
| 1 | Brique rouge | 1.20 |
| 2 | Ciment 25kg | 9.00 |
| 3 | Sable sac | 6.50 |

### Table `devis`
| id | client_id | materiau_id | quantite | montant |
|----|-----------|------------|----------|---------|
| 1 | 1 | 1 | 100 | 120 |
| 2 | 1 | 2 | 5 | 45 |
| 3 | 2 | 3 | 10 | 65 |

💬 **Maintenant, c'est propre !**
- Les infos du client sont **une seule fois** dans la table `clients`
- On fait le lien avec `client_id` et `materiau_id`

---

## 🔑 3️⃣ La clé primaire (Primary Key)

La **clé primaire**, c'est **l'identifiant unique** d'une ligne.

Dans la table `clients`, c'est `id`.
- Client 1 → Dupont
- Client 2 → Martin

💬 C'est comme un **numéro de dossier** sur ton chantier.
Chaque client a son numéro, et ce numéro ne change jamais.

---

## 🔗 4️⃣ La clé étrangère (Foreign Key)

La **clé étrangère**, c'est **le lien vers une autre table**.

Dans la table `devis`, on a :
- `client_id` → relie à la table `clients`
- `materiau_id` → relie à la table `materiaux`

💬 C'est comme si tu disais :
> "Ce devis est pour le client numéro 1."
> "Et il contient le matériau numéro 2."

---

## 🧱 5️⃣ Créer une table avec une clé étrangère

Voici comment créer la table `devis` avec des **relations** :

```sql
CREATE TABLE devis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    materiau_id INT,
    quantite INT,
    montant DECIMAL(10,2),
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (materiau_id) REFERENCES materiaux(id)
);
```

💬 Traduction chantier :
> "Cette table `devis` contient :
> - un ID unique
> - un lien vers un client (`client_id`)
> - un lien vers un matériau (`materiau_id`)
> - une quantité et un montant
> - Et je dis à la base que `client_id` doit correspondre à un client qui existe vraiment."

---

## 🔍 6️⃣ Décortiquons doucement

| Partie du code | Explication |
|----------------|-------------|
| `id INT AUTO_INCREMENT PRIMARY KEY` | Identifiant unique qui s'incrémente automatiquement |
| `client_id INT` | Colonne qui va contenir l'ID d'un client |
| `FOREIGN KEY (client_id)` | On dit que c'est une clé étrangère |
| `REFERENCES clients(id)` | Elle renvoie vers la colonne `id` de la table `clients` |

---

## 💡 7️⃣ Pourquoi c'est utile ?

Grâce aux relations, tu peux :
- **Éviter les répétitions** : les infos du client ne sont écrites qu'une fois
- **Maintenir la cohérence** : si tu changes le nom d'un client, c'est automatiquement à jour partout
- **Organiser proprement** : chaque chose à sa place
- **Faire des recherches puissantes** : "Donne-moi tous les devis du client Dupont avec le prix de chaque matériau"

---

## 🧩 8️⃣ Les types de relations

### Relation **Un à plusieurs** (1:N)
Un client peut avoir **plusieurs devis**.
Mais un devis appartient à **un seul client**.

```
clients (1) ----< devis (plusieurs)
```

### Relation **Plusieurs à plusieurs** (N:N)
Un devis peut contenir **plusieurs matériaux**.
Et un matériau peut être dans **plusieurs devis**.

Pour ça, on crée une **table de liaison** :

```
materiaux (plusieurs) >----< lignes_devis >----< devis (plusieurs)
```

---

## 🧠 9️⃣ Résumé du chef

| Concept | Explication simple |
|---------|-------------------|
| **Clé primaire (PK)** | L'identifiant unique d'une ligne (ex : `id`) |
| **Clé étrangère (FK)** | Le lien vers une autre table (ex : `client_id`) |
| **Relation 1:N** | Un client → plusieurs devis |
| **Relation N:N** | Plusieurs matériaux ↔ plusieurs devis |
| **FOREIGN KEY** | Instruction SQL pour créer une relation |
| **REFERENCES** | Indique vers quelle table/colonne ça pointe |

---

## 🧪 🔟 Exercice du jour

1. Crée une table `chantiers` avec :
   - id (clé primaire)
   - nom
   - adresse
   - client_id (clé étrangère vers `clients`)

```sql
CREATE TABLE chantiers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    adresse VARCHAR(200),
    client_id INT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);
```

2. Ajoute 2 chantiers pour Dupont (client_id = 1) :

```sql
INSERT INTO chantiers (nom, adresse, client_id)
VALUES
("Mur de jardin", "12 rue des Lilas", 1),
("Terrasse", "12 rue des Lilas", 1);
```

3. Vérifie ton travail :

```sql
SELECT * FROM chantiers;
```

💬 *"Chef, les chantiers sont bien reliés aux clients ✅"*

---

## 🚀 1️⃣1️⃣ Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)
- ajouter (`INSERT INTO`)
- lire (`SELECT`)
- lire avec précision (`SELECT WHERE`)
- trier (`ORDER BY`)
- limiter (`LIMIT`)
- modifier (`UPDATE`)
- supprimer (`DELETE`)
- **créer des relations entre tables**

Prochaine étape 👇
Tu vas apprendre à **afficher les données de plusieurs tables en même temps** avec `JOIN`.
💬 Parce que maintenant que tes tables sont reliées, tu veux pouvoir dire :
> "Montre-moi tous les chantiers avec le nom du client correspondant." 🔗📊
