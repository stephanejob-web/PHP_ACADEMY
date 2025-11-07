# 🍪 PDO Pour Débutants - Cours 06 : Les sessions PHP

## 👋 Salut !

Aujourd`hui, on va parler des **SESSIONS**.

**Question :**

*"Quand tu te connectes sur Facebook, comment le site se souvient que c`est TOI sur toutes les pages ?"*

**Réponse : Les SESSIONS ! 🎯**

---

## 🤔 C`est quoi une session ?

Une **session**, c`est une **mémoire temporaire** pour le site web.

**Analogie : Le bracelet à un festival**

Tu vas à un festival de musique.

1. **À l`entrée**, on te donne un **bracelet** avec un numéro unique
2. **À chaque stand**, tu montres ton bracelet
3. Le vendeur regarde le numéro et sait qui tu es
4. **À la sortie**, tu enlèves le bracelet

**Les sessions, c`est PAREIL !**

1. **Connexion** → PHP crée une session avec un ID unique
2. **Navigation** → À chaque page, PHP vérifie ton ID
3. **Déconnexion** → PHP détruit la session

---

## 📦 Comment PHP stocke les sessions ?

Quand tu visites un site PHP :

1. **PHP génère un ID unique** (exemple : `3f7h9k2m5p1q8r4s`)
2. **PHP crée un fichier** sur le serveur : `/tmp/sess_3f7h9k2m5p1q8r4s`
3. **PHP envoie un cookie** à ton navigateur avec cet ID
4. **À chaque page**, ton navigateur renvoie le cookie
5. **PHP lit le fichier** correspondant à ton ID

**Schéma :**

```
┌─────────────────┐                  ┌──────────────────┐
│   NAVIGATEUR    │                  │     SERVEUR      │
│                 │                  │                  │
│ Cookie:         │  ──────────────> │ Fichier:         │
│ ID=3f7h9k2m5p1q │                  │ sess_3f7h9k2m5p1q│
│                 │  <────────────── │                  │
│                 │                  │ $_SESSION[`user`]│
└─────────────────┘                  └──────────────────┘
```

---

## 🚀 Démarrer une session : session_start()

Pour utiliser les sessions, tu DOIS appeler **`session_start()`** en **HAUT** de chaque page.

```php
<?php
session_start();  // ⚠️ TOUJOURS EN PREMIER !

// Maintenant tu peux utiliser $_SESSION
?>
```

**⚠️ IMPORTANT :**

- `session_start()` doit être **AVANT TOUT code HTML**
- `session_start()` doit être **SUR CHAQUE PAGE** qui utilise les sessions

---

### Exemple CORRECT ✅

```php
<?php
session_start();  // En premier !
?>
<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
</head>
<body>
    <h1>Bienvenue</h1>
</body>
</html>
```

---

### Exemple INCORRECT ❌

```php
<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
</head>
<?php
session_start();  // ❌ TROP TARD ! Il y a déjà du HTML avant !
?>
<body>
    <h1>Bienvenue</h1>
</body>
</html>
```

**Erreur que tu verras :**

```
Warning: session_start(): Cannot send session cookie - headers already sent
```

---

## 📝 Stocker des données : $_SESSION

**`$_SESSION`** est un **tableau associatif** accessible partout.

**Exemple :**

```php
<?php
session_start();

// Stocker des infos
$_SESSION[`user_id`] = 5;
$_SESSION[`user_login`] = `alice`;
$_SESSION[`user_role`] = `admin`;

echo "Infos stockées en session !";
?>
```

**Ces infos sont maintenant disponibles sur TOUTES les pages ! 🎉**

---

## 📖 Lire des données de session

Sur une autre page :

```php
<?php
session_start();

// Récupérer les infos
echo "ID : " . $_SESSION[`user_id`];        // 5
echo "Login : " . $_SESSION[`user_login`];  // alice
echo "Rôle : " . $_SESSION[`user_role`];    // admin
?>
```

**Tant que la session est active, les données sont disponibles ! ✅**

---

## 🔍 Vérifier qu`un utilisateur est connecté

Pour savoir si un utilisateur est connecté, on vérifie si `$_SESSION[`user_id`]` existe :

```php
<?php
session_start();

if (isset($_SESSION[`user_id`])) {
    echo "Bienvenue " . $_SESSION[`user_login`] . " !";
} else {
    echo "Vous n`êtes pas connecté.";
}
?>
```

---

## 🛡️ Protéger une page

Pour créer une page **accessible seulement si connecté** :

```php
<?php
session_start();

// Si l`utilisateur n`est PAS connecté
if (!isset($_SESSION[`user_id`])) {
    header(`Location: connexion.php`);  // Redirection vers la connexion
    exit;  // Important : arrêter le script
}

// À partir d`ici, l`utilisateur est forcément connecté
?>
<!DOCTYPE html>
<html>
<head>
    <title>Page protégée</title>
</head>
<body>
    <h1>Bienvenue <?php echo $_SESSION[`user_login`]; ?> !</h1>
    <p>Cette page est réservée aux utilisateurs connectés.</p>
    <a href="deconnexion.php">Se déconnecter</a>
</body>
</html>
```

**Si quelqu`un essaie d`accéder sans être connecté → Redirection ! 🚫**

---

## 🗑️ Supprimer une variable de session

Pour supprimer **UNE SEULE** variable :

```php
<?php
session_start();

unset($_SESSION[`user_role`]);  // Supprime seulement `user_role`
?>
```

---

## 🔥 Détruire toute la session : session_destroy()

Pour **déconnecter** un utilisateur, on détruit la session :

```php
<?php
session_start();

// Détruire toutes les variables de session
$_SESSION = array();

// Détruire la session elle-même
session_destroy();

echo "Vous êtes déconnecté !";
?>
```

**Fichier complet `deconnexion.php` :**

```php
<?php
session_start();
$_SESSION = array();
session_destroy();
header(`Location: connexion.php`);
exit;
?>
```

---

## 🎯 Exemple complet : Connexion avec session

**fichier `connexion.php` :**

```php
<?php
session_start();
require `config.php`;

if ($_SERVER[`REQUEST_METHOD`] == `POST`) {
    $login = $_POST["login"];
    $password = $_POST["password"];

    // 1. Récupérer l`utilisateur
    $stmt = $pdo->prepare("SELECT * FROM users WHERE login = :login");
    $stmt->execute([`:login` => $login]);
    $user = $stmt->fetch();

    // 2. Vérifier
    if ($user && password_verify($password, $user["password"])) {
        // ✅ Connexion réussie !
        $_SESSION[`user_id`] = $user["id"];
        $_SESSION[`user_login`] = $user["login"];

        header(`Location: accueil.php`);
        exit;
    } else {
        $erreur = "Login ou mot de passe incorrect.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>

    <?php if (isset($erreur)): ?>
        <p style="color: red;"><?php echo $erreur; ?></p>
    <?php endif; ?>

    <form method="POST">
        <label>Login :</label>
        <input type="text" name="login" required><br><br>

        <label>Mot de passe :</label>
        <input type="password" name="password" required><br><br>

        <button type="submit">Se connecter</button>
    </form>
</body>
</html>
```

---

**fichier `accueil.php` :**

```php
<?php
session_start();

// Vérifier que l`utilisateur est connecté
if (!isset($_SESSION[`user_id`])) {
    header(`Location: connexion.php`);
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
</head>
<body>
    <h1>Bienvenue <?php echo $_SESSION[`user_login`]; ?> !</h1>
    <p>Vous êtes connecté.</p>
    <a href="deconnexion.php">Se déconnecter</a>
</body>
</html>
```

---

**fichier `deconnexion.php` :**

```php
<?php
session_start();
$_SESSION = array();
session_destroy();
header(`Location: connexion.php`);
exit;
?>
```

---

## ⚠️ Erreurs courantes

### Erreur n°1 : Oublier session_start()

```php
<?php
// ❌ ERREUR : pas de session_start() !
$_SESSION[`user_id`] = 5;  // ❌ Ne marchera pas !
?>
```

**➡️ TOUJOURS appeler `session_start()` en premier !**

---

### Erreur n°2 : session_start() après du HTML

```php
<!DOCTYPE html>
<html>
<?php
session_start();  // ❌ TROP TARD !
?>
```

**Erreur :**

```
Warning: session_start(): Cannot send session cookie - headers already sent
```

**➡️ `session_start()` AVANT tout HTML !**

---

### Erreur n°3 : Oublier exit après header()

```php
<?php
if (!isset($_SESSION[`user_id`])) {
    header(`Location: connexion.php`);
    // ❌ ERREUR : le code continue !
}

// Le code ici s`exécutera quand même !
?>
```

**➡️ TOUJOURS mettre `exit;` après `header()` !**

---

## 🔐 Sécurité des sessions

### 1. Regénérer l`ID après connexion

Pour éviter le **session hijacking** (vol de session) :

```php
session_start();
session_regenerate_id(true);  // Génère un nouvel ID
```

---

### 2. Définir un timeout

Pour déconnecter après 30 minutes d`inactivité :

```php
session_start();

$timeout = 1800;  // 30 minutes (en secondes)

if (isset($_SESSION[`LAST_ACTIVITY`]) && (time() - $_SESSION[`LAST_ACTIVITY`]) > $timeout) {
    session_unset();
    session_destroy();
    header(`Location: connexion.php`);
    exit;
}

$_SESSION[`LAST_ACTIVITY`] = time();  // Mise à jour du timestamp
?>
```

---

## 🧠 Ce que tu DOIS retenir

✅ **session_start()** doit être en **HAUT** de chaque page

✅ **$_SESSION** = tableau pour stocker des données

✅ **isset($_SESSION[`user_id`])** = vérifier si connecté

✅ **session_destroy()** = déconnecter l`utilisateur

✅ **header() + exit** = rediriger et arrêter le script

✅ **Les sessions expirent** quand on ferme le navigateur (par défaut)

---

## 📊 Tableau récapitulatif

| Fonction | Usage |
|----------|-------|
| **session_start()** | Démarrer/reprendre une session |
| **$_SESSION[`key`] = value** | Stocker une info |
| **$_SESSION[`key`]** | Lire une info |
| **unset($_SESSION[`key`])** | Supprimer une info |
| **session_destroy()** | Détruire toute la session |
| **isset($_SESSION[`key`])** | Vérifier si une info existe |

---

## ✍️ EXERCICE PRATIQUE

**Objectif :** Créer un système complet de connexion/déconnexion

1. Crée `connexion.php` :
   - Formulaire login/password
   - Vérifie les identifiants
   - Si correct, stocke `user_id` et `user_login` en session
   - Redirige vers `accueil.php`

2. Crée `accueil.php` :
   - Vérifie que l`utilisateur est connecté
   - Affiche "Bienvenue [login] !"
   - Lien vers `deconnexion.php`

3. Crée `deconnexion.php` :
   - Détruit la session
   - Redirige vers `connexion.php`

**Teste :**
- Essaie d`accéder à `accueil.php` sans te connecter → Redirection
- Connecte-toi → Tu arrives sur `accueil.php`
- Déconnecte-toi → Tu retournes sur `connexion.php`

---

## ⏭️ Dans le prochain cours...

Maintenant qu`on maîtrise tout (PDO, sécurité, sessions), on va créer un **PROJET COMPLET** !

On va créer un système d`authentification avec :
- Page d`inscription
- Page de connexion
- Page d`accueil protégée
- Déconnexion

**Prêt à créer ton premier vrai projet ? Let`s go ! 🚀**

---

**🍪 Bravo ! Tu maîtrises maintenant les sessions PHP !**

*PS : Les sessions, c`est la base de TOUS les sites avec authentification ! 💪*
