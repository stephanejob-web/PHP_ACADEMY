# 🧱 Cours SQL Débutant – Supprimer des données avec `DELETE` 👷‍♂️🧹

---

## 👋 Introduction

Sur ton chantier, parfois, il faut **vider une étagère**.
🧱 Un produit périmé, un client qui ne revient plus, ou une erreur de saisie.

Dans une base de données, c'est pareil.
On utilise la commande **`DELETE`** pour **supprimer une ou plusieurs lignes**.

⚠️ **Attention :** Supprimer, c'est définitif ! Pas de retour en arrière possible.
Alors on fait attention avant d'appuyer sur "Entrée" 🚨

---

## 🧰 1️⃣ À quoi sert `DELETE`

`DELETE` veut dire "efface".

Tu dis à ton ordinateur :
> "Va dans ce rayon, trouve cette ligne, et supprime-la."

---

## 🧱 2️⃣ Exemple concret

Tu as ta table `materiaux` :

| id | nom | categorie | prix | stock |
|----|------|------------|------|-------|
| 1 | Brique rouge | Maçonnerie | 1.20 | 320 |
| 2 | Ciment 25kg | Liant | 9.00 | 42 |
| 3 | Sable sac | Granulat | 6.50 | 68 |

Tu veux **supprimer le sable** (ligne n°3).

Voici la commande :

```sql
DELETE FROM materiaux
WHERE id = 3;
```

💬 Traduction chantier :
> "Dans le rayon `materiaux`, cherche le produit n°3,
> et retire-le de l'étagère."

---

## 🔍 3️⃣ Décortiquons doucement

| Partie du code | Explication |
|----------------|-------------|
| `DELETE FROM materiaux` | Dis à la base que tu veux supprimer une ligne dans "materiaux" |
| `WHERE id = 3` | Supprime **seulement** la ligne qui a l'ID 3 |

⚠️ **DANGER :**
Si tu oublies le `WHERE`, tu supprimes **TOUTES les lignes de la table** ! 😱
C'est comme si tu vidais tout l'entrepôt d'un coup !

```sql
DELETE FROM materiaux;
-- ❌ Ça efface TOUT ! Fais gaffe !
```

---

## 📋 4️⃣ Supprimer selon une condition

Tu peux aussi supprimer selon une caractéristique :

```sql
DELETE FROM materiaux
WHERE stock = 0;
```

💬 *"Chef, j'ai viré tous les produits en rupture de stock !"*

---

## 💡 5️⃣ Exemple avec un autre chantier

Imaginons une table `clients` :

| id | nom | telephone | adresse |
|----|------|------------|----------|
| 1 | Dupont | 0611223344 | 12 rue des Lilas |
| 2 | Martin | 0677889900 | 5 avenue du Port |
| 3 | Durand | 0612345678 | 8 chemin du Bois |

Tu veux **retirer Martin** de ta liste :

```sql
DELETE FROM clients
WHERE nom = "Martin";
```

Résultat 👇

| id | nom | telephone | adresse |
|----|------|------------|----------|
| 1 | Dupont | 0611223344 | 12 rue des Lilas |
| 3 | Durand | 0612345678 | 8 chemin du Bois |

💬 *"Martin a été retiré de la liste, chef ✅"*

---

## 🧩 6️⃣ Supprimer plusieurs lignes d'un coup

Tu peux supprimer tous les produits d'une catégorie :

```sql
DELETE FROM materiaux
WHERE categorie = "Granulat";
```

💬 *"Chef, tous les granulats ont été retirés du stock."*

---

## 🧠 7️⃣ Résumé du chef

| Élément SQL | Rôle sur le chantier |
|--------------|----------------------|
| `DELETE FROM` | Dire qu'on veut supprimer dans une table |
| `WHERE` | Préciser **quelle(s) ligne(s)** supprimer |
| **Pas de WHERE** | ⚠️ Supprime TOUTES les lignes ! |

---

## 🧪 8️⃣ Exercice du jour

1. Dans ta table `materiaux`,
   supprime le produit avec l'ID 2 (le ciment).
2. Vérifie ton travail avec :

```sql
SELECT * FROM materiaux;
```

3. Ajoute à nouveau un produit pour tester :

```sql
INSERT INTO materiaux (nom, categorie, prix, stock)
VALUES ("Truelle", "Outillage", 12.50, 8);
```

4. Puis supprime tous les produits dont le stock est inférieur à 10.

💬 *"Chef, le ménage est fait ✅"*

---

## 🛡️ 9️⃣ Conseil de sécurité

Avant de supprimer, **vérifie toujours** ce que tu vas effacer :

```sql
-- 1️⃣ D'abord, regarde ce que tu vas supprimer
SELECT * FROM materiaux WHERE stock = 0;

-- 2️⃣ Si c'est bon, alors supprime
DELETE FROM materiaux WHERE stock = 0;
```

💬 *"Mesure deux fois, coupe une fois"* — comme sur un chantier 📏✂️

---

## 🚀 🔟 Tu sais maintenant

Tu sais :
- créer (`CREATE TABLE`)
- ajouter (`INSERT INTO`)
- lire (`SELECT`)
- modifier (`UPDATE`)
- **supprimer (`DELETE`)**

Prochaine étape 👇
Tu vas apprendre à **lire avec précision** grâce à `SELECT` et `WHERE`.
💬 Parce que chercher "toutes les briques rouges de moins de 2€", c'est quand même plus pratique que tout regarder à la main 🔍
