# 🚀 PROJET COMPLET : Système d`authentification avec PDO

## 🎯 Objectif du projet

Créer un système d`authentification complet avec :
- ✅ Page d`inscription
- ✅ Page de connexion
- ✅ Page d`accueil protégée
- ✅ Déconnexion

**Tout ce qu`on a appris dans les cours précédents, ON VA LE METTRE EN PRATIQUE !** 💪

---

## 📁 Structure du projet

Voici les fichiers qu`on va créer :

```
mon_projet/
├── config.php          # Connexion à la base
├── database.sql        # Structure de la base
├── inscription.php     # Formulaire d`inscription
├── connexion.php       # Formulaire de connexion
├── accueil.php         # Page protégée
├── deconnexion.php     # Script de déconnexion
└── style.css           # Un peu de style (optionnel)
```

---

## 🗄️ ÉTAPE 1 : Créer la base de données

### 1.1 Créer la base dans phpMyAdmin

1. Ouvre phpMyAdmin : http://localhost/phpmyadmin
2. Clique sur **"Nouvelle base de données"**
3. Nom : `auth_db`
4. Interclassement : `utf8mb4_general_ci`
5. Clique sur **"Créer"**

---

### 1.2 Créer le fichier database.sql

Crée un fichier `database.sql` :

```sql
-- Créer la base (si elle n`existe pas)
CREATE DATABASE IF NOT EXISTS auth_db;
USE auth_db;

-- Supprimer la table si elle existe déjà (pour recommencer à zéro)
DROP TABLE IF EXISTS users;

-- Créer la table users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Exécution :**
1. Clique sur la base `auth_db`
2. Clique sur l`onglet **SQL**
3. Copie-colle le contenu de `database.sql`
4. Clique sur **"Exécuter"**

**✅ Ta table est créée !**

---

## 🔌 ÉTAPE 2 : Connexion à la base (config.php)

Crée un fichier `config.php` :

```php
<?php
/**
 * Fichier de configuration - Connexion PDO
 * À inclure dans tous les fichiers PHP du projet
 */

// Informations de connexion
$host = `localhost`;
$dbname = `auth_db`;
$username = `root`;
$password = ``;  // Vide sur XAMPP/WAMP

try {
    // Créer la connexion PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    // Mode d`erreur : exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Mode de récupération : tableau associatif
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    die("❌ Erreur de connexion : " . $e->getMessage());
}
?>
```

**Teste le fichier :**

Ajoute temporairement cette ligne à la fin :

```php
echo "✅ Connexion réussie !";
```

Va sur : http://localhost/mon_projet/config.php

Si tu vois "✅ Connexion réussie !", c`est bon ! Retire l`echo après.

---

## 📝 ÉTAPE 3 : Page d`inscription (inscription.php)

Crée un fichier `inscription.php` :

```php
<?php
/**
 * PAGE D`INSCRIPTION
 * Permet de créer un nouveau compte utilisateur
 */

// Démarrer la session (on en aura besoin plus tard)
session_start();

// Inclure la connexion à la base
require `config.php`;

// Variables pour les messages
$message = ``;
$message_type = ``;  // `success` ou `error`

// Traitement du formulaire
if ($_SERVER[`REQUEST_METHOD`] == `POST`) {

    // Récupérer et nettoyer les données
    $login = trim($_POST["login"]);
    $password = trim($_POST["password"]);
    $password_confirm = trim($_POST[`password_confirm`]);

    // --- VALIDATION ---

    // Vérifier que tous les champs sont remplis
    if (empty($login) || empty($password) || empty($password_confirm)) {
        $message = "⚠️ Tous les champs sont obligatoires !";
        $message_type = `error`;
    }
    // Vérifier la longueur du login
    elseif (strlen($login) < 3) {
        $message = "⚠️ Le login doit contenir au moins 3 caractères.";
        $message_type = `error`;
    }
    // Vérifier la longueur du mot de passe
    elseif (strlen($password) < 6) {
        $message = "⚠️ Le mot de passe doit contenir au moins 6 caractères.";
        $message_type = `error`;
    }
    // Vérifier que les mots de passe correspondent
    elseif ($password !== $password_confirm) {
        $message = "⚠️ Les mots de passe ne correspondent pas.";
        $message_type = `error`;
    }
    // Si tout est OK, on insère
    else {
        try {
            // Vérifier si le login existe déjà
            $stmt = $pdo->prepare("SELECT id FROM users WHERE login = :login");
            $stmt->execute([`:login` => $login]);
            $user_existe = $stmt->fetch();

            if ($user_existe) {
                $message = "❌ Ce login est déjà utilisé !";
                $message_type = `error`;
            }
            else {
                // Hasher le mot de passe
                $password_hash = password_hash($password, PASSWORD_DEFAULT);

                // Insérer l`utilisateur
                $stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
                $stmt->execute([
                    `:login` => $login,
                    `:password` => $password_hash
                ]);

                $message = "✅ Compte créé avec succès ! Vous pouvez maintenant vous connecter.";
                $message_type = `success`;
            }

        } catch (PDOException $e) {
            $message = "❌ Erreur lors de la création du compte : " . $e->getMessage();
            $message_type = `error`;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
        }
        .message {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        .message.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .message.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .link {
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <h1>📝 Inscription</h1>

    <!-- Affichage du message -->
    <?php if ($message): ?>
        <div class="message <?php echo $message_type; ?>">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <!-- Formulaire -->
    <form method="POST" action="">
        <label for="login">Login :</label>
        <input
            type="text"
            id="login"
            name="login"
            placeholder="Choisissez un nom d`utilisateur"
            required
        >

        <label for="password">Mot de passe :</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Choisissez un mot de passe"
            required
        >

        <label for="password_confirm">Confirmez le mot de passe :</label>
        <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            placeholder="Retapez votre mot de passe"
            required
        >

        <button type="submit">S`inscrire</button>
    </form>

    <div class="link">
        Déjà un compte ? <a href="connexion.php">Se connecter</a>
    </div>
</body>
</html>
```

---

## 🔐 ÉTAPE 4 : Page de connexion (connexion.php)

Crée un fichier `connexion.php` :

```php
<?php
/**
 * PAGE DE CONNEXION
 * Permet de se connecter avec un compte existant
 */

// Démarrer la session
session_start();

// Si l`utilisateur est déjà connecté, rediriger vers l`accueil
if (isset($_SESSION[`user_id`])) {
    header(`Location: accueil.php`);
    exit;
}

// Inclure la connexion à la base
require `config.php`;

// Variables pour les messages
$message = ``;

// Traitement du formulaire
if ($_SERVER[`REQUEST_METHOD`] == `POST`) {

    // Récupérer et nettoyer les données
    $login = trim($_POST["login"]);
    $password = trim($_POST["password"]);

    // Vérifier que les champs ne sont pas vides
    if (empty($login) || empty($password)) {
        $message = "⚠️ Veuillez remplir tous les champs.";
    }
    else {
        try {
            // Rechercher l`utilisateur
            $stmt = $pdo->prepare("SELECT * FROM users WHERE login = :login");
            $stmt->execute([`:login` => $login]);
            $user = $stmt->fetch();

            // Vérifier si l`utilisateur existe ET si le mot de passe est correct
            if ($user && password_verify($password, $user["password"])) {
                // ✅ Connexion réussie !

                // Stocker les infos en session
                $_SESSION[`user_id`] = $user["id"];
                $_SESSION[`user_login`] = $user["login"];

                // Rediriger vers la page d`accueil
                header(`Location: accueil.php`);
                exit;
            }
            else {
                // ❌ Login ou mot de passe incorrect
                $message = "❌ Login ou mot de passe incorrect.";
            }

        } catch (PDOException $e) {
            $message = "❌ Erreur : " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
        }
        .message {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #218838;
        }
        .link {
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <h1>🔐 Connexion</h1>

    <!-- Affichage du message d`erreur -->
    <?php if ($message): ?>
        <div class="message">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <!-- Formulaire -->
    <form method="POST" action="">
        <label for="login">Login :</label>
        <input
            type="text"
            id="login"
            name="login"
            placeholder="Votre nom d`utilisateur"
            required
        >

        <label for="password">Mot de passe :</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            required
        >

        <button type="submit">Se connecter</button>
    </form>

    <div class="link">
        Pas encore de compte ? <a href="inscription.php">S`inscrire</a>
    </div>
</body>
</html>
```

---

## 🏠 ÉTAPE 5 : Page d`accueil protégée (accueil.php)

Crée un fichier `accueil.php` :

```php
<?php
/**
 * PAGE D`ACCUEIL PROTÉGÉE
 * Accessible seulement si l`utilisateur est connecté
 */

// Démarrer la session
session_start();

// Vérifier si l`utilisateur est connecté
if (!isset($_SESSION[`user_id`])) {
    // Non connecté → Redirection vers la connexion
    header(`Location: connexion.php`);
    exit;
}

// À partir d`ici, l`utilisateur est forcément connecté
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
        }
        .welcome-box {
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .welcome-box h1 {
            color: #155724;
            margin: 0 0 10px 0;
        }
        .info {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #dc3545;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="welcome-box">
        <h1>🎉 Bienvenue <?php echo htmlspecialchars($_SESSION[`user_login`]); ?> !</h1>
        <p>Vous êtes maintenant connecté.</p>
    </div>

    <div class="info">
        <h3>Informations de session</h3>
        <p><strong>ID utilisateur :</strong> <?php echo $_SESSION[`user_id`]; ?></p>
        <p><strong>Login :</strong> <?php echo htmlspecialchars($_SESSION[`user_login`]); ?></p>
    </div>

    <p>Cette page est protégée. Seuls les utilisateurs connectés peuvent y accéder.</p>

    <a href="deconnexion.php" class="btn">Se déconnecter</a>
</body>
</html>
```

---

## 🚪 ÉTAPE 6 : Déconnexion (deconnexion.php)

Crée un fichier `deconnexion.php` :

```php
<?php
/**
 * SCRIPT DE DÉCONNEXION
 * Détruit la session et redirige vers la page de connexion
 */

// Démarrer la session
session_start();

// Détruire toutes les variables de session
$_SESSION = array();

// Détruire la session elle-même
session_destroy();

// Rediriger vers la page de connexion
header(`Location: connexion.php`);
exit;
?>
```

---

## 🎨 BONUS : Style CSS (style.css)

Crée un fichier `style.css` (optionnel) :

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: `Segoe UI`, Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Vous pouvez personnaliser davantage selon vos goûts ! */
```

---

## ✅ ÉTAPE 7 : Tester le projet

### Test 1 : Inscription

1. Va sur : http://localhost/mon_projet/inscription.php
2. Crée un compte (login: `test`, password: `test123`)
3. Tu dois voir : "✅ Compte créé avec succès !"
4. Vérifie dans phpMyAdmin que l`utilisateur est bien créé
5. Vérifie que le mot de passe est **hashé** (commence par `$2y$`)

---

### Test 2 : Connexion

1. Clique sur "Se connecter"
2. Entre les identifiants : `test` / `test123`
3. Tu dois être redirigé vers `accueil.php`
4. Tu dois voir : "🎉 Bienvenue test !"

---

### Test 3 : Protection de page

1. Déconnecte-toi
2. Essaie d`aller directement sur : http://localhost/mon_projet/accueil.php
3. Tu dois être **redirigé** vers `connexion.php`
4. ✅ La page est bien protégée !

---

### Test 4 : Déconnexion

1. Connecte-toi
2. Clique sur "Se déconnecter"
3. Tu dois être redirigé vers `connexion.php`
4. Essaie d`accéder à `accueil.php` → Tu es redirigé
5. ✅ La déconnexion marche !

---

## 🧠 Ce que tu as appris dans ce projet

✅ **Structurer un projet** avec plusieurs fichiers
✅ **Créer une base de données** et une table
✅ **Se connecter avec PDO** (`config.php`)
✅ **Insérer des utilisateurs** avec `INSERT`
✅ **Hasher les mots de passe** avec `password_hash()`
✅ **Vérifier les mots de passe** avec `password_verify()`
✅ **Utiliser les sessions** pour garder l`utilisateur connecté
✅ **Protéger des pages** avec `if (!isset($_SESSION[`user_id`]))`
✅ **Rediriger** avec `header(`Location: ...`)`
✅ **Valider des formulaires** (champs vides, longueur...)

**BRAVO ! Tu as créé ton premier système d`authentification complet ! 🎉**

---

## 🚀 Améliorations possibles

Pour aller plus loin, tu peux ajouter :

1. **Un champ email** à l`inscription
2. **Une page de profil** pour modifier ses infos
3. **Un système "Se souvenir de moi"** avec des cookies
4. **Une fonction "Mot de passe oublié"**
5. **Des rôles** (admin, utilisateur...)
6. **Une page d`administration** pour voir tous les utilisateurs

---

**💪 Félicitations ! Tu es maintenant capable de créer des systèmes d`authentification sécurisés !**
