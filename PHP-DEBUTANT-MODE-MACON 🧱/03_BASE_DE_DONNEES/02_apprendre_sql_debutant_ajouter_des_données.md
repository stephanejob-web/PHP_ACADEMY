# 🧱 Cours SQL Débutant – Ajouter des données avec `INSERT INTO` 👷‍♂️


---


## 👋 Introduction


Bravo chef 👏  

Tu as maintenant une belle étagère dans ton entrepôt numérique :  

ta **table `materiaux`**.  


Mais pour l’instant, elle est **vide**.  

Et une étagère vide… c’est triste 😅  


Aujourd’hui, on va apprendre à **mettre des matériaux dessus**.  

C’est ce qu’on fait avec la commande SQL :


```sql

INSERT INTO

```


---


## 🧰 1️⃣ Comprendre ce que fait `INSERT INTO`


Quand tu dis `INSERT INTO`, tu dis à ton ordinateur :


> “Mets cette information dans ce rayon.”


C’est comme si tu disais à ton apprenti :

> “Pose les sacs de ciment sur l’étagère ‘matériaux’.” 🪣


---


## 🧱 2️⃣ Exemple concret


Ta table `materiaux` ressemble à ça :


| id | nom | categorie | prix | stock |

|----|------|------------|------|-------|

|    |      |            |      |       |


Tu veux y ajouter **ta première brique rouge**.  

Voici la commande SQL :


```sql

INSERT INTO materiaux (nom, categorie, prix, stock)

VALUES ("Brique rouge", "Maçonnerie", 1.20, 320);

```


💬 Traduction en langage chantier :

> “Dans le rayon `materiaux`, ajoute un nouveau produit :

> - nom : Brique rouge  

> - catégorie : Maçonnerie  

> - prix : 1.20  

> - stock : 320”


---


## 🔍 3️⃣ Décortiquons doucement


| Partie du code | Explication simple |

|-----------------|--------------------|

| `INSERT INTO materiaux` | Je veux ranger un objet dans le rayon “materiaux” |

| `(nom, categorie, prix, stock)` | Voici les cases à remplir sur l’étiquette |

| `VALUES (...)` | Et voici les valeurs qu’on écrit dans chaque case |


---


## 💡 4️⃣ Ajouter plusieurs produits d’un coup


Tu peux remplir plusieurs lignes en une seule commande 👇


```sql

INSERT INTO materiaux (nom, categorie, prix, stock)

VALUES

("Ciment 25kg", "Liant", 8.50, 42),

("Sable sac", "Granulat", 6.00, 68),

("Niveau à bulle", "Mesure", 14.90, 12);

```


💬 *“Chef, j’ai rempli tout le rayon d’un coup !”*


---


## 📊 5️⃣ Vérifie ton travail


Après avoir ajouté des produits, vérifie que tout est bien rangé 👇


```sql

SELECT * FROM materiaux;

```


Résultat attendu :


| id | nom | categorie | prix | stock |

|----|------|------------|------|-------|

| 1  | Brique rouge | Maçonnerie | 1.20 | 320 |

| 2  | Ciment 25kg  | Liant       | 8.50 | 42  |

| 3  | Sable sac    | Granulat    | 6.00 | 68  |

| 4  | Niveau à bulle | Mesure | 14.90 | 12 |


💬 *“Tout est bien en place, chef ✅”*


---


## 🧱 6️⃣ Si tu oublies une colonne ?


Pas grave !  

Tu peux insérer uniquement certaines informations :


```sql

INSERT INTO materiaux (nom, prix)

VALUES ("Pierre grise", 9.90);

```


👉 Les autres colonnes (catégorie, stock) seront **vides pour l’instant**.


---


## 🧠 7️⃣ Résumé du chef


| Élément SQL | Rôle sur le chantier |

|--------------|----------------------|

| `INSERT INTO` | Poser un nouveau produit sur l’étagère |

| `(nom, prix, stock)` | Les colonnes à remplir |

| `VALUES (...)` | Les valeurs à mettre dans chaque case |

| `SELECT * FROM` | Vérifier que tout est bien en place |


---


## 🧪 8️⃣ Exercice du jour


Crée une table `clients` (si tu ne l’as pas déjà faite) :


| id | nom | telephone | adresse |

|----|------|------------|----------|


Et ajoute trois clients :


```sql

INSERT INTO clients (nom, telephone, adresse)

VALUES

("Dupont", "0601020304", "12 rue des Lilas"),

("Martin", "0677889900", "5 avenue du Port"),

("Durand", "0612345678", "8 chemin du Bois");

```


Ensuite, vérifie ton travail :


```sql

SELECT * FROM clients;

```


💬 *“Chef, tous les clients sont bien enregistrés ✅”*


---


## 🚀 9️⃣ Ce que tu sais maintenant


Tu sais :

- créer une table avec `CREATE TABLE`  

- **ajouter des données** avec `INSERT INTO`  

- et **vérifier ton stock** avec `SELECT * FROM`


> Bravo 👏 tu commences à gérer ton premier entrepôt SQL !  

> La prochaine fois, tu apprendras à **modifier** une information —  

> avec la commande magique `UPDATE`. 🔧