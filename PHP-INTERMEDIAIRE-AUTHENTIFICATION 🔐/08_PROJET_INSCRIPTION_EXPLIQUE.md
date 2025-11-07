# 📝 PROJET : Page d'inscription ULTRA DÉTAILLÉE

## 👋 Pour les étudiants débutants

Ce fichier explique **LIGNE PAR LIGNE** comment créer une page d'inscription.

**On va prendre le temps d'expliquer CHAQUE détail.**

---

## 📋 Ce qu'on va créer

Une page `inscription.php` qui permet de créer un compte avec :
- Un formulaire HTML
- Vérification des données
- Messages d'erreur en rouge
- Messages de succès en vert

---

## 🧱 PARTIE 1 : COMPRENDRE LES ATTRIBUTS HTML

### C'est quoi un INPUT ?

Un input, c'est une **boîte** où l'utilisateur peut taper du texte.

```html
<input type="text" id="login" name="login">
```

**Il y a 3 attributs importants :**

---

### 1️⃣ L'attribut `type`

**Définit le TYPE de champ.**

```html
<input type="text">      <!-- Texte normal (visible) -->
<input type="password">   <!-- Texte caché (••••••) -->
<input type="email">      <!-- Champ email avec validation -->
<input type="number">     <!-- Seulement des chiffres -->
```

**Exemple avec `type="password"` :**

```html
<input type="password" placeholder="Votre mot de passe">
```

**Ce que tu tapes :** `monmotdepasse`
**Ce qu'on voit :** `••••••••••••••`

**Pourquoi ?** Pour que personne derrière toi ne puisse lire ton mot de passe !

---

### 2️⃣ L'attribut `name`

**C'est LE PLUS IMPORTANT !**

Le `name` crée une **variable PHP** avec les données du formulaire.

**Exemple :**

```html
<input type="text" name="login">
```

**En PHP, tu récupères avec :**

```php
$login = $_POST["login"];
```

**Le nom entre les crochets correspond EXACTEMENT au name de l'input !**

---

**Autre exemple :**

```html
<input type="password" name="motdepasse">
```

**En PHP :**

```php
$motdepasse = $_POST['motdepasse'];
```

**RÈGLE IMPORTANTE :**

- Si `name="toto"` → Tu récupères avec `$_POST['toto']`
- Si `name="age"` → Tu récupères avec `$_POST['age']`
- Si `name="email"` → Tu récupères avec `$_POST['email']`

**Le name, c'est le NOM de la variable ! 🎯**

---

### 3️⃣ L'attribut `id`

**Sert à identifier l'élément pour le CSS ou JavaScript.**

**Aussi utilisé pour lier le `<label>` au champ.**

```html
<label for="login">Votre login :</label>
<input type="text" id="login" name="login">
```

**Le `for` du label doit correspondre à l'`id` de l'input.**

**Avantage :** Quand tu cliques sur le label, le champ se sélectionne automatiquement !

---

### 📊 Tableau récapitulatif

| Attribut | Rôle | Exemple |
|----------|------|---------|
| **type** | Type de champ (texte, password, email...) | `type="password"` |
| **name** | Nom de la variable PHP (`$_POST['...']`) | `name="login"` |
| **id** | Identifiant CSS/JS + lien avec label | `id="login"` |

---

### 🎯 Exemple complet

```html
<label for="password">Mot de passe :</label>
<input
    type="password"         ← Le texte sera caché (••••)
    id="password"           ← Pour le CSS et le label
    name="password"         ← Pour PHP : $_POST["password"]
    placeholder="Tapez votre mot de passe"
    required
>
```

**En PHP, tu récupères avec :**

```php
$password = $_POST["password"];
```

---

## 🧱 PARTIE 2 : GESTION DES MESSAGES D'ERREUR ET SUCCÈS

### Pourquoi 2 variables séparées ?

On utilise **2 variables distinctes** :
- `$error` pour les **erreurs** (affichées en rouge)
- `$message` pour les **succès** (affichés en vert)

**Avantage :** C'est plus clair et plus facile à gérer !

---

### Initialisation en haut du fichier

```php
<?php
// On crée 2 variables VIDES au début
$error = '';      // Pour les erreurs (rouge)
$message = '';    // Pour les succès (vert)
?>
```

---

### Comment on remplit ces variables ?

**Pendant le traitement du formulaire :**

```php
if (empty($login)) {
    $error = "Le login est obligatoire";
}

if ($compte_cree) {
    $message = "Inscription réussie !";
}
```

---

### Comment on les affiche ?

**En HTML, on vérifie si la variable contient quelque chose :**

```php
<?php if ($error): ?>
    <div class="erreur">
        <?php echo $error; ?>
    </div>
<?php endif; ?>

<?php if ($message): ?>
    <div class="succes">
        <?php echo $message; ?>
    </div>
<?php endif; ?>
```

**Explication :**

- `if ($error):` → Si `$error` contient quelque chose (pas vide)
- `<?php echo $error; ?>` → On affiche le message
- `endif;` → Fin du if

---

## 🚀 PARTIE 3 : CODE COMPLET EXPLIQUÉ

Voici le fichier `inscription.php` **ULTRA COMMENTÉ** :

```php
<?php
/**
 * ============================================
 * PAGE D'INSCRIPTION
 * ============================================
 *
 * Cette page permet de créer un nouveau compte utilisateur.
 *
 * Étapes :
 * 1. Afficher un formulaire HTML
 * 2. Récupérer les données quand le formulaire est soumis
 * 3. Vérifier que les données sont correctes
 * 4. Hasher le mot de passe
 * 5. Insérer dans la base de données
 * 6. Afficher un message de succès ou d'erreur
 */

// --------------------------------------------
// 1. CONNEXION À LA BASE DE DONNÉES
// --------------------------------------------
// On inclut le fichier qui se connecte à MySQL
require 'config.php';


// --------------------------------------------
// 2. INITIALISATION DES VARIABLES
// --------------------------------------------
// On crée 2 variables vides pour stocker les messages
$error = '';      // Pour les erreurs (affichées en ROUGE)
$message = '';    // Pour les succès (affichés en VERT)


// --------------------------------------------
// 3. TRAITEMENT DU FORMULAIRE
// --------------------------------------------
// On vérifie si le formulaire a été soumis
// $_SERVER['REQUEST_METHOD'] contient "GET" ou "POST"
// Quand on soumet un formulaire avec method="POST", ça vaut "POST"
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // --------------------------------------------
    // 3.1. RÉCUPÉRATION DES DONNÉES
    // --------------------------------------------
    // $_POST est un TABLEAU qui contient toutes les données du formulaire
    // $_POST["login"] récupère la valeur de l'input avec name="login"
    // trim() enlève les espaces au début et à la fin

    $login = trim($_POST["login"]);                  // Le nom d'utilisateur
    $password = $_POST["password"];                  // Le mot de passe
    $confirm_password = $_POST['confirm_password'];  // La confirmation


    // --------------------------------------------
    // 3.2. VÉRIFICATIONS (VALIDATION)
    // --------------------------------------------

    // VÉRIFICATION 1 : Les champs ne doivent pas être vides
    // empty() retourne true si la variable est vide
    // || signifie OU (si login vide OU password vide)
    if (empty($login) || empty($password) || empty($confirm_password)) {
        $error = "Tous les champs sont obligatoires";
    }

    // VÉRIFICATION 2 : Les 2 mots de passe doivent être identiques
    // !== signifie "différent de"
    elseif ($password !== $confirm_password) {
        $error = "Les mots de passe ne correspondent pas";
    }

    // VÉRIFICATION 3 : Le login doit faire au moins 3 caractères
    // strlen() retourne la longueur d'une chaîne de caractères
    elseif (strlen($login) < 3) {
        $error = "Le login doit contenir au moins 3 caractères";
    }

    // VÉRIFICATION 4 : Le mot de passe doit faire au moins 4 caractères
    elseif (strlen($password) < 4) {
        $error = "Le mot de passe doit contenir au moins 4 caractères";
    }

    // Si TOUTES les vérifications sont OK, on continue
    else {

        // --------------------------------------------
        // 3.3. VÉRIFIER SI LE LOGIN EXISTE DÉJÀ
        // --------------------------------------------
        // prepare() prépare une requête SQL sécurisée
        // Le ? est un placeholder (sera remplacé par une valeur)
        $stmt = $pdo->prepare("SELECT id FROM users WHERE login = ?");

        // execute() exécute la requête en remplaçant ? par $login
        $stmt->execute([$login]);

        // fetch() récupère le résultat (si trouvé)
        // Si fetch() retourne quelque chose, c'est que le login existe déjà
        if ($stmt->fetch()) {
            $error = "Ce login est déjà utilisé";
        }
        // Si le login n'existe pas, on peut créer le compte
        else {

            // --------------------------------------------
            // 3.4. HASHER LE MOT DE PASSE
            // --------------------------------------------
            // password_hash() transforme le mot de passe en hash sécurisé
            // PASSWORD_DEFAULT utilise l'algorithme le plus sûr
            // ⚠️ ON NE STOCKE JAMAIS UN MOT DE PASSE EN CLAIR !
            $password_hash = password_hash($password, PASSWORD_DEFAULT);


            // --------------------------------------------
            // 3.5. INSÉRER L'UTILISATEUR DANS LA BASE
            // --------------------------------------------
            // INSERT INTO = ajouter une ligne dans une table
            // Les ? seront remplacés par les valeurs du tableau execute()
            $stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (?, ?)");

            // On exécute en remplaçant les ? par les vraies valeurs
            // ATTENTION : On insère le HASH, pas le mot de passe en clair !
            if ($stmt->execute([$login, $password_hash])) {
                // ✅ Si l'insertion a réussi
                $message = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
            }
            else {
                // ❌ Si l'insertion a échoué
                $error = "Erreur lors de l'inscription";
            }
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
    <style>
        /* ============================================
           STYLE CSS SIMPLE
           ============================================ */

        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f4f4f4;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        /* Style pour les messages d'ERREUR (rouge) */
        .erreur {
            background-color: #ffebee;   /* Fond rouge clair */
            color: #c62828;              /* Texte rouge foncé */
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #ef5350;
        }

        /* Style pour les messages de SUCCÈS (vert) */
        .succes {
            background-color: #e8f5e9;   /* Fond vert clair */
            color: #2e7d32;              /* Texte vert foncé */
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #66bb6a;
        }

        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
            color: #555;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
        }

        button {
            width: 100%;
            padding: 12px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #1976D2;
        }

        .lien {
            text-align: center;
            margin-top: 20px;
        }

        .lien a {
            color: #2196F3;
            text-decoration: none;
        }

        .lien a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Inscription</h1>

    <!-- ============================================
         AFFICHAGE DES MESSAGES D'ERREUR
         ============================================ -->

    <?php if ($error): ?>
        <!-- Si $error contient quelque chose, on affiche -->
        <div class="erreur">
            <?php echo $error; ?>
        </div>
    <?php endif; ?>


    <!-- ============================================
         AFFICHAGE DES MESSAGES DE SUCCÈS
         ============================================ -->

    <?php if ($message): ?>
        <!-- Si $message contient quelque chose, on affiche -->
        <div class="succes">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>


    <!-- ============================================
         FORMULAIRE D'INSCRIPTION
         ============================================ -->

    <!--
        method="POST" = Les données sont envoyées en POST (sécurisé)
        action="" = Les données sont envoyées à la même page
    -->
    <form method="POST" action="">

        <!-- CHAMP LOGIN -->
        <label for="login">Login :</label>
        <input
            type="text"
            id="login"
            name="login"
            placeholder="Choisissez un nom d'utilisateur"
            required
        >
        <!--
            type="text" = Champ texte normal
            id="login" = Identifiant pour le CSS et le label
            name="login" = Nom de la variable PHP ($_POST["login"])
            placeholder = Texte d'exemple dans le champ
            required = Le champ est obligatoire
        -->

        <!-- CHAMP MOT DE PASSE -->
        <label for="password">Mot de passe :</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Choisissez un mot de passe"
            required
        >
        <!--
            type="password" = Le texte sera caché (•••••)
            id="password" = Identifiant
            name="password" = Variable PHP ($_POST["password"])
        -->

        <!-- CHAMP CONFIRMATION MOT DE PASSE -->
        <label for="confirm_password">Confirmez le mot de passe :</label>
        <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Retapez votre mot de passe"
            required
        >
        <!--
            name="confirm_password" = Variable PHP ($_POST['confirm_password'])
        -->

        <!-- BOUTON D'ENVOI -->
        <button type="submit">S'inscrire</button>
        <!--
            type="submit" = Bouton qui soumet le formulaire
        -->
    </form>

    <!-- LIEN VERS LA PAGE DE CONNEXION -->
    <div class="lien">
        Déjà un compte ? <a href="connexion.php">Se connecter</a>
    </div>
</body>
</html>
```

---

## 🔍 RÉSUMÉ : Ce qui se passe étape par étape

### 1. L'utilisateur arrive sur la page

- Les variables `$error` et `$message` sont **vides**
- Aucun message ne s'affiche
- Le formulaire s'affiche

---

### 2. L'utilisateur remplit le formulaire

Il tape :
- Login : `alice`
- Mot de passe : `test123`
- Confirmation : `test123`

Puis clique sur **"S'inscrire"**

---

### 3. Le formulaire est soumis

- `$_POST["login"]` contient `"alice"`
- `$_POST["password"]` contient `"test123"`
- `$_POST['confirm_password']` contient `"test123"`

---

### 4. Le PHP vérifie les données

- ✅ Les champs ne sont pas vides
- ✅ Les 2 mots de passe correspondent
- ✅ Le login fait plus de 3 caractères
- ✅ Le mot de passe fait plus de 4 caractères
- ✅ Le login n'existe pas déjà

---

### 5. Le PHP insère dans la base

- Le mot de passe est hashé : `$2y$10$abc...`
- L'utilisateur est inséré dans la table `users`
- `$message` est rempli avec `"Inscription réussie !"`

---

### 6. La page se recharge

- Le formulaire se réaffiche
- La boîte VERTE s'affiche avec `"Inscription réussie !"`

---

## ❌ Cas d'erreur : Mots de passe différents

### Si l'utilisateur tape :

- Login : `bob`
- Mot de passe : `azerty`
- Confirmation : `azert` ← **DIFFÉRENT !**

### Ce qui se passe :

1. Le PHP vérifie : `$password !== $confirm_password`
2. C'est vrai ! Ils sont différents
3. `$error` est rempli avec `"Les mots de passe ne correspondent pas"`
4. La boîte ROUGE s'affiche avec le message

---

## 🧠 Points IMPORTANTS à retenir

### 1. Les attributs HTML

- **`type`** = Type de champ (text, password, email...)
- **`name`** = Nom de la variable PHP (`$_POST['...']`)
- **`id`** = Identifiant CSS + lien avec label

---

### 2. Les variables de messages

- **`$error`** = Pour les erreurs (rouge)
- **`$message`** = Pour les succès (vert)

On les initialise **vides** en haut du fichier.

---

### 3. La validation

On vérifie TOUJOURS les données :
- Champs non vides
- Longueur minimale
- Mots de passe identiques
- Login unique

---

### 4. La sécurité

- **Toujours** hasher les mots de passe avec `password_hash()`
- **Toujours** utiliser des requêtes préparées (`prepare()` + `execute()`)
- **Jamais** faire confiance aux données de l'utilisateur

---

## ✅ Checklist de test

Teste ces cas :

- [ ] Formulaire vide → Message d'erreur
- [ ] Login trop court (< 3 car.) → Message d'erreur
- [ ] Mot de passe trop court (< 4 car.) → Message d'erreur
- [ ] Mots de passe différents → Message d'erreur
- [ ] Login déjà existant → Message d'erreur
- [ ] Tout correct → Message de succès + utilisateur dans la base

---

## 🎓 Exercice pratique

Maintenant, **TAPE CE CODE TOI-MÊME** !

Ne copie-colle pas, tape caractère par caractère.

**Teste tous les cas d'erreur pour bien comprendre ! 💪**

---

**Bon courage ! Tu vas y arriver ! 🚀**
