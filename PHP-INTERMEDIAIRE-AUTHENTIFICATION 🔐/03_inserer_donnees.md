# ➕ PDO Pour Débutants - Cours 03 : Insérer des données (INSERT)

## 👋 Salut !

Dans les cours précédents, tu as appris :
- Ce qu'est PDO
- Comment se connecter à une base de données

Aujourd'hui, on passe à l'action : **AJOUTER des données** dans la base !

On va apprendre à **insérer un utilisateur** dans la table `users`.

---

## 🎯 Ce qu'on va faire

1. Comprendre la requête SQL `INSERT INTO`
2. La méthode DANGEREUSE (à ne jamais utiliser)
3. La méthode SÉCURISÉE avec les requêtes préparées
4. Récupérer l'ID de l'utilisateur inséré
5. Exercice pratique

---

## 📖 La requête SQL INSERT

Pour ajouter une ligne dans une table, on utilise `INSERT INTO`.

**Syntaxe SQL :**

```sql
INSERT INTO nom_table (colonne1, colonne2, colonne3)
VALUES (valeur1, valeur2, valeur3);
```

**Exemple concret :**

```sql
INSERT INTO users (login, password)
VALUES ('alice', 'motdepasse123');
```

**Traduction :**

*"Ajoute une ligne dans la table `users` avec le login `alice` et le password `motdepasse123`"*

---

## ❌ Méthode DANGEREUSE (NE JAMAIS FAIRE !)

**Exemple de ce qu'il NE FAUT PAS FAIRE :**

```php
<?php
require 'config.php';

$login = $_POST["login"];
$password = $_POST["password"];

// ❌ DANGEREUX ! Injection SQL possible !
$sql = "INSERT INTO users (login, password) VALUES ('$login', '$password')";
$pdo->exec($sql);

echo "Utilisateur ajouté !";
?>
```

**Pourquoi c'est DANGEREUX ?**

Si un pirate tape dans le formulaire :

```
login: admin
password: test'); DROP TABLE users; --
```

**La requête devient :**

```sql
INSERT INTO users (login, password) VALUES ('admin', 'test'); DROP TABLE users; --')
```

**Résultat : Ta table est SUPPRIMÉE ! 💀**

**➡️ NE JAMAIS concaténer des variables dans une requête SQL !**

---

## ✅ Méthode SÉCURISÉE (avec requêtes préparées)

**La BONNE manière de faire :**

```php
<?php
require 'config.php';

$login = "alice";
$password = "motdepasse123";

// 1. Préparer la requête avec des placeholders
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");

// 2. Exécuter en passant les valeurs
$stmt->execute([
    ':login' => $login,
    ':password' => $password
]);

echo "✅ Utilisateur ajouté avec succès !";
?>
```

---

## 🔍 Décortiquons le code

### 1. Préparer la requête

```php
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
```

**`:login`** et **`:password`** sont des **placeholders** (emplacements réservés).

Ce sont des **variables nommées** que PDO va remplacer de manière sécurisée.

**Pourquoi c'est sécurisé ?**

PDO va :
1. Échapper les caractères dangereux
2. Traiter les valeurs comme du TEXTE (pas comme du code SQL)
3. Empêcher les injections SQL

---

### 2. Exécuter avec les valeurs

```php
$stmt->execute([
    ':login' => $login,
    ':password' => $password
]);
```

On passe un **tableau associatif** :
- La clé = le placeholder (`:login`)
- La valeur = la vraie valeur (`"alice"`)

PDO remplace automatiquement les placeholders par les valeurs.

---

## 🎨 Avec un formulaire HTML

Voici un exemple complet avec un formulaire :

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
</head>
<body>
    <h1>Créer un compte</h1>

    <?php
    require 'config.php';

    // Si le formulaire est soumis
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $login = trim($_POST["login"]);
        $password = trim($_POST["password"]);

        // Vérifier que les champs ne sont pas vides
        if (!empty($login) && !empty($password)) {
            try {
                $stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
                $stmt->execute([
                    ':login' => $login,
                    ':password' => $password
                ]);

                echo "<p style='color: green;'>✅ Compte créé avec succès !</p>";
            } catch (PDOException $e) {
                echo "<p style='color: red;'>❌ Erreur : " . $e->getMessage() . "</p>";
            }
        } else {
            echo "<p style='color: orange;'>⚠️ Veuillez remplir tous les champs.</p>";
        }
    }
    ?>

    <form method="POST" action="">
        <label>Login :</label>
        <input type="text" name="login" required><br><br>

        <label>Password :</label>
        <input type="password" name="password" required><br><br>

        <button type="submit">S'inscrire</button>
    </form>
</body>
</html>
```

---

## 🆔 Récupérer l'ID de l'utilisateur inséré

Après avoir inséré un utilisateur, tu veux souvent récupérer son **ID**.

**Méthode :**

```php
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
$stmt->execute([
    ':login' => 'bob',
    ':password' => 'pass123'
]);

// Récupérer l'ID du dernier utilisateur inséré
$user_id = $pdo->lastInsertId();

echo "Utilisateur créé avec l'ID : " . $user_id;
```

**`lastInsertId()`** retourne l'ID de la dernière ligne insérée.

**Résultat :**

```
Utilisateur créé avec l'ID : 5
```

**Pourquoi c'est utile ?**

Imagine que tu veux créer un utilisateur ET l'connecter tout de suite :

```php
$user_id = $pdo->lastInsertId();
$_SESSION['user_id'] = $user_id;  // On stocke l'ID en session
header('Location: accueil.php');   // On redirige vers la page d'accueil
```

---

## 🔄 Vérifier si le login existe déjà

Avant d'insérer, c'est bien de **vérifier** si le login n'existe pas déjà.

```php
<?php
require 'config.php';

$login = "alice";
$password = "pass123";

// 1. Vérifier si le login existe
$stmt = $pdo->prepare("SELECT id FROM users WHERE login = :login");
$stmt->execute([':login' => $login]);
$user = $stmt->fetch();

// 2. Si le login existe déjà
if ($user) {
    echo "❌ Ce login est déjà pris !";
}
// 3. Sinon, on insère
else {
    $stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
    $stmt->execute([
        ':login' => $login,
        ':password' => $password
    ]);

    echo "✅ Utilisateur créé !";
}
?>
```

---

## 🎯 Deux types de placeholders

Il existe **deux syntaxes** de placeholders :

### 1. Placeholders nommés (`:nom`)

```php
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
$stmt->execute([
    ':login' => 'alice',
    ':password' => 'pass123'
]);
```

✅ **Avantages :**
- Lisible
- On voit clairement quelle valeur va où
- On peut utiliser le même placeholder plusieurs fois

---

### 2. Placeholders par position (`?`)

```php
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (?, ?)");
$stmt->execute(['alice', 'pass123']);
```

✅ **Avantages :**
- Plus court
- Plus rapide à écrire

❌ **Inconvénient :**
- Moins lisible
- L'ordre est important !

**Conseil : Utilise les placeholders nommés (`:nom`), c'est plus clair ! 💡**

---

## 🧠 Ce que tu DOIS retenir

✅ **INSERT INTO** = Ajouter une ligne dans une table

✅ **NE JAMAIS** concaténer des variables dans une requête SQL

✅ **Requête préparée** = `prepare()` puis `execute()`

✅ **Placeholders** = `:nom` ou `?`

✅ **lastInsertId()** = Récupérer l'ID de la dernière insertion

✅ **Vérifier l'existence** avant d'insérer (éviter les doublons)

---

## 📊 Méthode dangereuse VS sécurisée

| Critère | Concaténation | Requête préparée |
|---------|---------------|------------------|
| **Sécurité** | ❌ Injection SQL | ✅ Protégé |
| **Code** | `"... '$var' ..."` | `:placeholder` |
| **À utiliser** | ❌ JAMAIS | ✅ TOUJOURS |

---

## ✍️ EXERCICE PRATIQUE

**Objectif :** Créer un formulaire d'inscription complet

1. Crée un fichier `inscription.php`
2. Crée un formulaire avec :
   - Un champ `login`
   - Un champ `password`
   - Un bouton "S'inscrire"
3. Vérifie que les champs ne sont pas vides
4. Vérifie que le login n'existe pas déjà
5. Insère l'utilisateur dans la base
6. Affiche un message de succès ou d'erreur

**Bonus :**
- Ajoute une vérification : le login doit faire au moins 3 caractères
- Ajoute une vérification : le password doit faire au moins 6 caractères

---

## ⏭️ Dans le prochain cours...

Maintenant qu'on sait **INSÉRER** des données, on va apprendre à **LIRE** des données !

On va voir :
- `SELECT` : récupérer tous les utilisateurs
- `WHERE` : filtrer les résultats
- `fetch()` vs `fetchAll()` : récupérer un ou plusieurs résultats
- Compter le nombre d'utilisateurs

**Prêt à lire des données ? Let's go ! 🚀**

---

**💪 Bien joué ! Tu sais maintenant insérer des données avec PDO !**

*PS : N'oublie pas de faire l'exercice ! C'est en pratiquant qu'on progresse ! 💡*
