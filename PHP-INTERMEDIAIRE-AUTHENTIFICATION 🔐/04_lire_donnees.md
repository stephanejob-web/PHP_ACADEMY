# 📖 PDO Pour Débutants - Cours 04 : Lire des données (SELECT)

## 👋 Salut !

Dans le cours précédent, tu as appris à **INSÉRER** des données.

Aujourd'hui, on va apprendre à **LIRE** (récupérer) des données depuis la base !

On va utiliser la requête SQL **SELECT**.

---

## 🎯 Ce qu'on va faire

1. Comprendre la requête SELECT
2. Récupérer UN utilisateur avec `fetch()`
3. Récupérer TOUS les utilisateurs avec `fetchAll()`
4. Filtrer avec WHERE
5. Compter le nombre de résultats
6. Limiter les résultats

---

## 📖 La requête SQL SELECT

Pour **lire** des données dans une table, on utilise `SELECT`.

**Syntaxe de base :**

```sql
SELECT colonnes FROM nom_table;
```

**Exemples :**

```sql
-- Récupérer TOUTES les colonnes de TOUS les utilisateurs
SELECT * FROM users;

-- Récupérer seulement le login et l'id
SELECT id, login FROM users;

-- Récupérer UN utilisateur précis
SELECT * FROM users WHERE id = 5;
```

---

## 🔍 fetch() : Récupérer UN résultat

**`fetch()`** récupère **UNE SEULE ligne** de résultat.

**Exemple : Récupérer l'utilisateur avec l'ID 1**

```php
<?php
require 'config.php';

// Préparer la requête
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");

// Exécuter
$stmt->execute([':id' => 1]);

// Récupérer le résultat
$user = $stmt->fetch();

// Afficher
if ($user) {
    echo "Login : " . $user["login"] . "<br>";
    echo "Créé le : " . $user["created_at"];
} else {
    echo "Utilisateur introuvable.";
}
?>
```

**Résultat :**

```
Login : alice
Créé le : 2025-01-15 10:30:00
```

---

## 🔍 Qu'est-ce que fetch() retourne ?

**Si un résultat est trouvé :**

`fetch()` retourne un **tableau associatif** :

```php
[
    'id' => 1,
    'login' => 'alice',
    'password' => '$2y$10$abc...',
    'created_at' => '2025-01-15 10:30:00'
]
```

**Si aucun résultat :**

`fetch()` retourne **`false`**.

C'est pour ça qu'on vérifie avec `if ($user)`.

---

## 📚 fetchAll() : Récupérer TOUS les résultats

**`fetchAll()`** récupère **TOUTES les lignes** sous forme de tableau.

**Exemple : Récupérer tous les utilisateurs**

```php
<?php
require 'config.php';

// Préparer la requête
$stmt = $pdo->prepare("SELECT * FROM users");

// Exécuter
$stmt->execute();

// Récupérer TOUS les résultats
$users = $stmt->fetchAll();

// Afficher
foreach ($users as $user) {
    echo "- " . $user["login"] . "<br>";
}
?>
```

**Résultat :**

```
- alice
- bob
- charlie
```

---

## 🔍 Qu'est-ce que fetchAll() retourne ?

Un **tableau de tableaux** :

```php
[
    [
        'id' => 1,
        'login' => 'alice',
        'password' => '...',
        'created_at' => '...'
    ],
    [
        'id' => 2,
        'login' => 'bob',
        'password' => '...',
        'created_at' => '...'
    ],
    [
        'id' => 3,
        'login' => 'charlie',
        'password' => '...',
        'created_at' => '...'
    ]
]
```

On peut le parcourir avec une **boucle foreach**.

---

## 🎯 WHERE : Filtrer les résultats

**WHERE** permet de filtrer les résultats selon une condition.

### Exemple 1 : Chercher un utilisateur par login

```php
<?php
require 'config.php';

$login = "alice";

$stmt = $pdo->prepare("SELECT * FROM users WHERE login = :login");
$stmt->execute([':login' => $login]);
$user = $stmt->fetch();

if ($user) {
    echo "Utilisateur trouvé : " . $user["login"];
} else {
    echo "Utilisateur introuvable.";
}
?>
```

---

### Exemple 2 : Chercher tous les utilisateurs créés après une date

```php
<?php
require 'config.php';

$stmt = $pdo->prepare("SELECT * FROM users WHERE created_at > :date");
$stmt->execute([':date' => '2025-01-01']);
$users = $stmt->fetchAll();

foreach ($users as $user) {
    echo "- " . $user["login"] . " (créé le " . $user["created_at"] . ")<br>";
}
?>
```

---

## 🔢 Compter le nombre de résultats

### Méthode 1 : Avec rowCount()

```php
<?php
require 'config.php';

$stmt = $pdo->prepare("SELECT * FROM users");
$stmt->execute();

// Compter le nombre de lignes
$nombre = $stmt->rowCount();

echo "Il y a " . $nombre . " utilisateurs.";
?>
```

---

### Méthode 2 : Avec COUNT() en SQL (plus rapide)

```php
<?php
require 'config.php';

$stmt = $pdo->prepare("SELECT COUNT(*) as total FROM users");
$stmt->execute();
$result = $stmt->fetch();

echo "Il y a " . $result['total'] . " utilisateurs.";
?>
```

**La méthode 2 est PLUS RAPIDE** car SQL compte directement dans la base sans tout récupérer.

---

## 🔝 Limiter le nombre de résultats : LIMIT

Pour récupérer seulement **les 5 premiers** utilisateurs :

```php
<?php
require 'config.php';

$stmt = $pdo->prepare("SELECT * FROM users LIMIT 5");
$stmt->execute();
$users = $stmt->fetchAll();

foreach ($users as $user) {
    echo "- " . $user["login"] . "<br>";
}
?>
```

---

## 📊 Trier les résultats : ORDER BY

Pour trier par ordre alphabétique :

```php
<?php
require 'config.php';

// Ordre croissant (A → Z)
$stmt = $pdo->prepare("SELECT * FROM users ORDER BY login ASC");
$stmt->execute();
$users = $stmt->fetchAll();

foreach ($users as $user) {
    echo "- " . $user["login"] . "<br>";
}
?>
```

**`ASC`** = Croissant (A → Z, 1 → 9)
**`DESC`** = Décroissant (Z → A, 9 → 1)

---

## 🎨 Exemple complet : Recherche d'utilisateur

Voici un exemple avec un formulaire de recherche :

```php
<?php
require 'config.php';

$resultats = [];
$recherche = '';

// Si le formulaire est soumis
if (isset($_GET['recherche'])) {
    $recherche = trim($_GET['recherche']);

    if (!empty($recherche)) {
        // Recherche avec LIKE (recherche partielle)
        $stmt = $pdo->prepare("SELECT * FROM users WHERE login LIKE :recherche");
        $stmt->execute([':recherche' => '%' . $recherche . '%']);
        $resultats = $stmt->fetchAll();
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Recherche d'utilisateurs</title>
</head>
<body>
    <h1>🔍 Recherche d'utilisateurs</h1>

    <!-- Formulaire de recherche -->
    <form method="GET" action="">
        <input
            type="text"
            name="recherche"
            placeholder="Rechercher un login..."
            value="<?php echo htmlspecialchars($recherche); ?>"
        >
        <button type="submit">Rechercher</button>
    </form>

    <!-- Affichage des résultats -->
    <?php if (!empty($recherche)): ?>
        <h2>Résultats pour "<?php echo htmlspecialchars($recherche); ?>" :</h2>

        <?php if (count($resultats) > 0): ?>
            <ul>
                <?php foreach ($resultats as $user): ?>
                    <li>
                        <?php echo htmlspecialchars($user["login"]); ?>
                        (créé le <?php echo $user["created_at"]; ?>)
                    </li>
                <?php endforeach; ?>
            </ul>
            <p><?php echo count($resultats); ?> résultat(s) trouvé(s).</p>
        <?php else: ?>
            <p>Aucun utilisateur trouvé.</p>
        <?php endif; ?>
    <?php endif; ?>
</body>
</html>
```

---

## 🔍 LIKE : Recherche partielle

**`LIKE`** permet de faire des recherches **partielles**.

**Exemples :**

```sql
-- Commence par "al"
WHERE login LIKE 'al%'     → alice, alfred

-- Contient "ob"
WHERE login LIKE '%ob%'    → bob, roberto

-- Termine par "ce"
WHERE login LIKE '%ce'     → alice, bruce
```

---

## 🧠 Ce que tu DOIS retenir

✅ **SELECT** = Lire des données

✅ **fetch()** = Récupérer UN résultat

✅ **fetchAll()** = Récupérer TOUS les résultats

✅ **WHERE** = Filtrer les résultats

✅ **COUNT()** = Compter le nombre de résultats

✅ **LIMIT** = Limiter le nombre de résultats

✅ **ORDER BY** = Trier les résultats

✅ **LIKE** = Recherche partielle

---

## 📊 Tableau récapitulatif

| Méthode | Usage | Retour |
|---------|-------|--------|
| **fetch()** | Récupérer 1 ligne | Tableau ou false |
| **fetchAll()** | Récupérer toutes les lignes | Tableau de tableaux |
| **rowCount()** | Compter les résultats | Nombre (int) |

---

## ✍️ EXERCICE PRATIQUE

**Objectif :** Créer une page qui liste tous les utilisateurs

1. Crée un fichier `liste_users.php`
2. Récupère TOUS les utilisateurs de la base
3. Affiche-les dans un tableau HTML :
   - Colonne 1 : ID
   - Colonne 2 : Login
   - Colonne 3 : Date de création
4. Affiche le nombre total d'utilisateurs en bas

**Bonus :**
- Ajoute un tri par ordre alphabétique
- Ajoute un formulaire de recherche
- Limite à 10 utilisateurs par page (pagination)

---

## ⏭️ Dans le prochain cours...

Maintenant qu'on sait LIRE et INSÉRER des données, on va apprendre la **SÉCURITÉ DES MOTS DE PASSE** !

On va voir :
- Pourquoi on ne stocke JAMAIS un mot de passe en clair
- Comment hasher un mot de passe avec `password_hash()`
- Comment vérifier un mot de passe avec `password_verify()`

**C'est CRUCIAL pour la sécurité ! 🔐**

---

**📖 Bien joué ! Tu sais maintenant lire des données avec PDO !**

*PS : N'oublie pas de faire l'exercice ! C'est en pratiquant qu'on progresse ! 💪*
