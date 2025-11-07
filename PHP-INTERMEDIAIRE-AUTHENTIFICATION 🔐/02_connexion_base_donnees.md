# 🔌 PDO Pour Débutants - Cours 02 : Se connecter à une base de données

## 👋 On se retrouve !

Dans le cours précédent, tu as appris **ce qu`est PDO**.

Aujourd`hui, on passe à l`**ACTION** !

On va apprendre à **se connecter à une base de données MySQL** avec PDO.

---

## 🎯 Ce qu`on va faire aujourd`hui

1. Créer une base de données dans phpMyAdmin
2. Écrire le code PHP pour se connecter avec PDO
3. Comprendre chaque ligne de code
4. Gérer les erreurs de connexion
5. Tester que ça marche

---

## 📦 Étape 1 : Créer la base de données

Avant de te connecter à une base, **il faut qu`elle existe** !

### Ouvre phpMyAdmin

1. Démarre **XAMPP** ou **WAMP**
2. Ouvre ton navigateur
3. Va sur : http://localhost/phpmyadmin

---

### Crée la base de données

1. Clique sur **"Nouvelle base de données"** (à gauche)
2. Nom de la base : `auth_db`
3. Interclassement : **utf8mb4_general_ci** (pour les accents français)
4. Clique sur **"Créer"**

**✅ Ta base de données est créée !**

---

### Crée une table d`utilisateurs

1. Clique sur la base `auth_db` (à gauche)
2. Clique sur l`onglet **SQL**
3. Copie-colle ce code :

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

4. Clique sur **"Exécuter"**

**✅ Ta table `users` est créée !**

---

## 💻 Étape 2 : Le code de connexion

Maintenant, on va écrire le code PHP pour se connecter à cette base.

Crée un fichier `config.php` :

```php
<?php
$host = `localhost`;
$dbname = `auth_db`;
$username = `root`;
$password = ``;

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connexion réussie !";
} catch (PDOException $e) {
    die("❌ Erreur de connexion : " . $e->getMessage());
}
?>
```

---

## 🔍 Décortiquons chaque ligne

### Les informations de connexion

```php
$host = `localhost`;
$dbname = `auth_db`;
$username = `root`;
$password = ``;
```

**`$host`** → L`adresse du serveur MySQL
- `localhost` = sur ton ordinateur
- En production, ça pourrait être `192.168.1.10` ou `monserveur.com`

**`$dbname`** → Le nom de ta base de données
- C`est `auth_db` qu`on vient de créer

**`$username`** → Le nom d`utilisateur MySQL
- `root` par défaut sur XAMPP/WAMP
- En production, tu auras un utilisateur spécifique

**`$password`** → Le mot de passe MySQL
- Vide par défaut sur XAMPP/WAMP
- En production, tu auras un vrai mot de passe

---

### Le try/catch

```php
try {
    // Code qui peut causer une erreur
} catch (PDOException $e) {
    // Code si une erreur se produit
}
```

**`try`** = "Essaie de faire ça"
**`catch`** = "Si ça échoue, fais ça à la place"

**Pourquoi ?**

Parce que se connecter à une base **peut échouer** :
- La base n`existe pas
- Le mot de passe est incorrect
- MySQL n`est pas démarré
- ...

Au lieu que PHP plante complètement, on **attrape** l`erreur et on affiche un message.

---

### La connexion PDO

```php
$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
```

C`est **LA ligne la plus importante** !

**`new PDO(...)`** → On crée un nouvel objet PDO (une connexion)

**Premier paramètre** : Le **DSN** (Data Source Name)

```
"mysql:host=$host;dbname=$dbname;charset=utf8"
```

Décomposons :
- **`mysql:`** → Type de base de données (MySQL)
- **`host=$host`** → Adresse du serveur (`localhost`)
- **`dbname=$dbname`** → Nom de la base (`auth_db`)
- **`charset=utf8`** → Encodage (pour les accents français)

**Deuxième paramètre** : Le nom d`utilisateur (`root`)

**Troisième paramètre** : Le mot de passe (vide ici)

---

### Configuration de PDO

```php
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```

**`setAttribute`** = "Modifier un réglage"

**`PDO::ATTR_ERRMODE`** = "Le mode de gestion des erreurs"

**`PDO::ERRMODE_EXCEPTION`** = "Lancer une exception si erreur"

**Traduction :**

*"PDO, si tu rencontres une erreur, déclenche une exception pour que je puisse l`attraper avec `catch`"*

**C`est IMPORTANT !** Sans ça, PDO affiche juste un warning et continue. On veut qu`il s`arrête !

---

### La gestion de l`erreur

```php
catch (PDOException $e) {
    die("❌ Erreur de connexion : " . $e->getMessage());
}
```

**`catch (PDOException $e)`** → Attrape l`exception dans la variable `$e`

**`$e->getMessage()`** → Récupère le message d`erreur

**`die(...)`** → Affiche un message et arrête le script

**Exemple de message d`erreur :**

```
❌ Erreur de connexion : SQLSTATE[HY000] [1045] Access denied for user `root`@`localhost`
```

Ça te dit **exactement** ce qui ne va pas !

---

## 🧪 Tester la connexion

### Test 1 : Connexion réussie

1. Assure-toi que **MySQL est démarré** (dans XAMPP/WAMP)
2. Va sur : http://localhost/config.php

**Résultat attendu :**

```
✅ Connexion réussie !
```

**Si tu vois ça, BRAVO ! Tu es connecté ! 🎉**

---

### Test 2 : Erreur volontaire

Maintenant, on va **provoquer une erreur** pour voir comment PDO la gère.

Change le nom de la base :

```php
$dbname = `mauvais_nom`;  // Base qui n`existe pas
```

Recharge la page.

**Résultat attendu :**

```
❌ Erreur de connexion : SQLSTATE[HY000] [1049] Unknown database `mauvais_nom`
```

**Le message d`erreur est clair ! PDO nous dit que la base n`existe pas.**

Remets le bon nom (`auth_db`) après le test.

---

## 🎨 Version améliorée : Masquer les erreurs en production

En **développement**, tu veux voir les erreurs détaillées.

En **production** (site en ligne), tu ne veux PAS afficher les détails aux utilisateurs (pour des raisons de sécurité).

Voici une version améliorée :

```php
<?php
$host = `localhost`;
$dbname = `auth_db`;
$username = `root`;
$password = ``;

// Mode : `dev` ou `prod`
$mode = `dev`;

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    if ($mode === `dev`) {
        echo "✅ Connexion réussie !";
    }
} catch (PDOException $e) {
    if ($mode === `dev`) {
        die("❌ Erreur de connexion : " . $e->getMessage());
    } else {
        die("❌ Erreur de connexion à la base de données. Veuillez contacter l`administrateur.");
    }
}
?>
```

---

### Nouvelle ligne ajoutée :

```php
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
```

**`PDO::FETCH_ASSOC`** = Retourner les résultats sous forme de **tableau associatif**

**Exemple :**

Sans cette ligne :
```php
[0 => 1, `id` => 1, 1 => `alice`, `login` => `alice`]  // Mélange d`indices
```

Avec cette ligne :
```php
[`id` => 1, `login` => `alice`]  // Propre et clair !
```

**C`est beaucoup plus lisible ! ✅**

---

## 📁 Organisation : Un fichier à inclure partout

Le fichier `config.php` est conçu pour être **inclus** dans tous tes autres fichiers PHP.

**Exemple :**

```php
<?php
// Dans inscription.php
require `config.php`;  // On inclut la connexion

// Maintenant on peut utiliser $pdo
$stmt = $pdo->prepare("SELECT * FROM users");
$stmt->execute();
?>
```

**Avantage :**

Tu écris le code de connexion **UNE SEULE FOIS** et tu le réutilises partout ! 🎯

---

## 🔐 Sécurité : NE JAMAIS commiter config.php

**⚠️ TRÈS IMPORTANT :**

Le fichier `config.php` contient des **informations sensibles** :
- Mot de passe de la base de données
- Nom de la base
- Nom d`utilisateur

**En production, ces infos sont SECRÈTES !**

**Bonne pratique :**

1. Crée un fichier `config.example.php` avec des valeurs fictives :

```php
<?php
$host = `localhost`;
$dbname = `votre_base`;
$username = `votre_user`;
$password = `votre_password`;
// ... reste du code
?>
```

2. Ajoute `config.php` dans `.gitignore` pour ne pas le publier sur GitHub

```
# .gitignore
config.php
```

3. Sur le serveur, crée `config.php` avec les vraies infos

---

## 🧠 Ce que tu DOIS retenir

✅ **Connexion PDO** = `new PDO(dsn, user, password)`

✅ **DSN** = `"mysql:host=...;dbname=...;charset=utf8"`

✅ **setAttribute** = Configurer PDO (mode erreur, mode fetch...)

✅ **try/catch** = Gérer les erreurs de connexion

✅ **FETCH_ASSOC** = Résultats sous forme de tableau associatif

✅ **config.php** = Fichier à inclure partout

✅ **Sécurité** = Ne jamais publier config.php avec les vrais mots de passe

---

## 📊 Checklist de connexion

Avant d`utiliser PDO, vérifie :

- [ ] MySQL est démarré (XAMPP/WAMP)
- [ ] La base de données existe
- [ ] Le nom de la base est correct dans `$dbname`
- [ ] Le nom d`utilisateur est correct (`root`)
- [ ] Le mot de passe est correct (vide par défaut)
- [ ] Tu as configuré `ERRMODE_EXCEPTION`
- [ ] Tu as configuré `FETCH_ASSOC`

---

## ✍️ EXERCICE PRATIQUE

**Objectif :** Créer ta propre connexion PDO

1. Crée une nouvelle base de données `test_pdo`
2. Crée un fichier `ma_connexion.php`
3. Écris le code de connexion (sans copier-coller !)
4. Teste que ça marche
5. Provoque une erreur volontaire (mauvais nom de base)
6. Vérifie que l`erreur s`affiche correctement

**Conseil :** Fais-le vraiment ! C`est en tapant le code qu`on apprend. 💪

---

## ⏭️ Dans le prochain cours...

Maintenant que tu sais te connecter, on va apprendre à **INSÉRER des données** !

On va voir :
- Comment ajouter un utilisateur dans la base
- Les requêtes préparées (SÉCURISÉ)
- La différence entre `execute([])` et concaténation
- Comment récupérer l`ID du dernier utilisateur inséré

**Prêt à créer ton premier utilisateur ? Let`s go ! 🚀**

---

**💪 Bien joué ! Tu maîtrises maintenant la connexion PDO !**

*PS : Garde bien ton fichier `config.php`, on va le réutiliser dans TOUS les prochains cours !*
