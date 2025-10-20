# 🧱 Cours SQL Débutant – Projet Final : Gestion Complète de Chantier 👷‍♂️🏗️

---

## 👋 Introduction

Félicitations chef ! 🎉
Tu as appris toutes les bases du SQL.

Maintenant, on passe aux **travaux pratiques** !
Tu vas créer une **base de données complète** pour gérer ton entreprise de maçonnerie.

💬 Ce projet reprend **tout ce que tu as appris** :
- Créer des tables
- Ajouter, modifier, supprimer des données
- Faire des recherches précises
- Relier des tables entre elles
- Afficher des données de plusieurs tables avec JOIN

---

## 🧰 1️⃣ Le cahier des charges

Tu dois gérer :
- **Les clients** : nom, téléphone, adresse, email
- **Les matériaux** : nom, catégorie, prix unitaire, stock
- **Les chantiers** : nom, adresse, date de début, statut, client associé
- **Les lignes de devis** : matériaux utilisés pour chaque chantier, quantités

---

## 🏗️ 2️⃣ Créer la base de données

```sql
CREATE DATABASE gestion_chantier;
USE gestion_chantier;
```

💬 *"Chef, l'entrepôt est créé !"*

---

## 👥 3️⃣ Créer la table `clients`

```sql
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    telephone VARCHAR(15),
    adresse VARCHAR(200),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

💬 *"Chef, la table clients est prête !"*

---

## 🧱 4️⃣ Créer la table `materiaux`

```sql
CREATE TABLE materiaux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    categorie VARCHAR(50),
    prix_unitaire DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

💬 *"Chef, la table matériaux est prête !"*

---

## 🏗️ 5️⃣ Créer la table `chantiers`

```sql
CREATE TABLE chantiers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    adresse VARCHAR(200),
    date_debut DATE,
    statut ENUM('en_attente', 'en_cours', 'termine') DEFAULT 'en_attente',
    client_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);
```

💬 *"Chef, la table chantiers est prête, reliée aux clients !"*

---

## 📋 6️⃣ Créer la table `lignes_devis`

```sql
CREATE TABLE lignes_devis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chantier_id INT,
    materiau_id INT,
    quantite INT NOT NULL,
    prix_total DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chantier_id) REFERENCES chantiers(id),
    FOREIGN KEY (materiau_id) REFERENCES materiaux(id)
);
```

💬 *"Chef, la table lignes_devis est prête !"*

---

## 📥 7️⃣ Remplir les tables avec des données

### Ajouter des clients

```sql
INSERT INTO clients (nom, telephone, adresse, email)
VALUES
('Dupont', '0601020304', '12 rue des Lilas, Paris', 'dupont@mail.com'),
('Martin', '0677889900', '5 avenue du Port, Lyon', 'martin@mail.com'),
('Durand', '0612345678', '8 chemin du Bois, Marseille', 'durand@mail.com'),
('Bernard', '0698765432', '3 place de la Gare, Toulouse', 'bernard@mail.com');
```

### Ajouter des matériaux

```sql
INSERT INTO materiaux (nom, categorie, prix_unitaire, stock)
VALUES
('Brique rouge', 'Maçonnerie', 1.20, 500),
('Ciment 25kg', 'Liant', 9.00, 80),
('Sable sac', 'Granulat', 6.50, 120),
('Niveau à bulle', 'Outillage', 14.90, 15),
('Truelle', 'Outillage', 12.50, 20),
('Parpaing 20x20x50', 'Maçonnerie', 1.80, 300),
('Mortier colle 25kg', 'Liant', 11.00, 60);
```

### Ajouter des chantiers

```sql
INSERT INTO chantiers (nom, adresse, date_debut, statut, client_id)
VALUES
('Mur de jardin', '12 rue des Lilas, Paris', '2025-01-15', 'en_cours', 1),
('Terrasse', '5 avenue du Port, Lyon', '2025-02-01', 'en_attente', 2),
('Abri de jardin', '12 rue des Lilas, Paris', '2025-01-20', 'termine', 1),
('Extension maison', '8 chemin du Bois, Marseille', '2025-03-01', 'en_attente', 3);
```

### Ajouter des lignes de devis

```sql
INSERT INTO lignes_devis (chantier_id, materiau_id, quantite, prix_total)
VALUES
(1, 1, 200, 240.00),   -- Mur de jardin : 200 briques
(1, 2, 10, 90.00),     -- Mur de jardin : 10 sacs de ciment
(1, 3, 15, 97.50),     -- Mur de jardin : 15 sacs de sable
(2, 6, 150, 270.00),   -- Terrasse : 150 parpaings
(2, 7, 8, 88.00),      -- Terrasse : 8 sacs de mortier
(3, 1, 100, 120.00),   -- Abri : 100 briques
(3, 2, 5, 45.00),      -- Abri : 5 sacs de ciment
(4, 6, 300, 540.00);   -- Extension : 300 parpaings
```

💬 *"Chef, toutes les données sont en place !"*

---

## 🔍 8️⃣ Exercices pratiques

### Exercice 1 : Afficher tous les chantiers avec le nom du client

```sql
SELECT
    chantiers.nom AS chantier,
    chantiers.adresse,
    chantiers.statut,
    clients.nom AS client
FROM chantiers
INNER JOIN clients ON chantiers.client_id = clients.id;
```

### Exercice 2 : Afficher les matériaux en rupture de stock (moins de 20)

```sql
SELECT nom, categorie, stock
FROM materiaux
WHERE stock < 20
ORDER BY stock ASC;
```

### Exercice 3 : Calculer le coût total d'un chantier

```sql
SELECT
    chantiers.nom AS chantier,
    SUM(lignes_devis.prix_total) AS cout_total
FROM chantiers
INNER JOIN lignes_devis ON chantiers.id = lignes_devis.chantier_id
WHERE chantiers.id = 1
GROUP BY chantiers.nom;
```

### Exercice 4 : Afficher tous les détails d'un chantier

```sql
SELECT
    chantiers.nom AS chantier,
    clients.nom AS client,
    materiaux.nom AS materiau,
    lignes_devis.quantite,
    materiaux.prix_unitaire,
    lignes_devis.prix_total
FROM lignes_devis
INNER JOIN chantiers ON lignes_devis.chantier_id = chantiers.id
INNER JOIN clients ON chantiers.client_id = clients.id
INNER JOIN materiaux ON lignes_devis.materiau_id = materiaux.id
WHERE chantiers.id = 1;
```

### Exercice 5 : Trouver les 3 chantiers les plus chers

```sql
SELECT
    chantiers.nom AS chantier,
    SUM(lignes_devis.prix_total) AS cout_total
FROM chantiers
INNER JOIN lignes_devis ON chantiers.id = lignes_devis.chantier_id
GROUP BY chantiers.id, chantiers.nom
ORDER BY cout_total DESC
LIMIT 3;
```

### Exercice 6 : Mettre à jour le statut d'un chantier

```sql
UPDATE chantiers
SET statut = 'termine'
WHERE id = 2;
```

### Exercice 7 : Supprimer un client qui n'a pas de chantier

```sql
DELETE FROM clients
WHERE id = 4;
```

### Exercice 8 : Afficher les clients avec le nombre de chantiers

```sql
SELECT
    clients.nom AS client,
    COUNT(chantiers.id) AS nombre_chantiers
FROM clients
LEFT JOIN chantiers ON clients.id = chantiers.client_id
GROUP BY clients.id, clients.nom;
```

---

## 🧠 9️⃣ Résumé du projet

Tu as créé :
- ✅ 4 tables reliées entre elles
- ✅ Des clés primaires et étrangères
- ✅ Des données réalistes
- ✅ Des requêtes complexes avec JOIN
- ✅ Des calculs avec SUM() et COUNT()
- ✅ Des filtres, tris, et limitations

💬 *"Chef, tu as une vraie base de données professionnelle !"*

---

## 🚀 🔟 Aller plus loin

Maintenant que tu maîtrises SQL, tu peux :
- **Connecter ta base à PHP** pour créer un site web
- **Ajouter des fonctionnalités** : facturation, planning, suivi des paiements
- **Créer des vues** pour simplifier les requêtes complexes
- **Ajouter des index** pour accélérer les recherches
- **Mettre en place des triggers** pour automatiser certaines actions

---

## 🏆 1️⃣1️⃣ Félicitations !

🎉 Bravo chef ! Tu as terminé la formation SQL mode maçon !

Tu sais maintenant :
- Créer et gérer une base de données
- Organiser tes données proprement
- Faire des recherches puissantes
- Relier des tables entre elles
- Créer un projet complet de A à Z

💬 **Prochaine étape :**
Apprends à connecter tout ça avec **PHP** pour créer un vrai site web de gestion de chantier ! 💻🚀

---

## 📚 1️⃣2️⃣ Annexe : Commandes récapitulatives

```sql
-- Créer une base
CREATE DATABASE nom_base;
USE nom_base;

-- Créer une table
CREATE TABLE nom_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    colonne VARCHAR(100)
);

-- Ajouter des données
INSERT INTO table (colonne) VALUES ('valeur');

-- Lire
SELECT * FROM table WHERE condition;

-- Modifier
UPDATE table SET colonne = 'nouvelle_valeur' WHERE id = 1;

-- Supprimer
DELETE FROM table WHERE id = 1;

-- Joindre
SELECT * FROM table1
INNER JOIN table2 ON table1.id = table2.table1_id;

-- Trier et limiter
SELECT * FROM table ORDER BY colonne DESC LIMIT 5;
```

💬 *"Garde cette fiche sous la main, chef !"*

---

**Bonne continuation sur tes chantiers numériques ! 🧱💻**
