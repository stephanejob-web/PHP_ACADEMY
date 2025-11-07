# 🔐 PDO Pour Débutants - Cours 05 : Sécurité des mots de passe

## 👋 Salut l`apprenti dev !

Aujourd`hui, on va parler d`un sujet **CRUCIAL** : **la sécurité des mots de passe**.

**⚠️ RÈGLE N°1 DE LA SÉCURITÉ :**

**ON NE STOCKE JAMAIS UN MOT DE PASSE EN CLAIR DANS UNE BASE DE DONNÉES !**

---

## 🤔 Pourquoi c`est si important ?

Imagine que tu crées un site et que tu stockes les mots de passe comme ça :

| id | login | password |
|----|-------|----------|
| 1  | alice | azerty123 |
| 2  | bob   | monsupermotdepasse |
| 3  | charlie | 123456 |

**Problème :**

Si un pirate **vole ta base de données**, il voit **TOUS les mots de passe en clair** ! 😱

Il peut :
- Se connecter sur TON site avec les comptes
- Essayer ces mots de passe sur d`autres sites (Gmail, Facebook, banque...)

**C`est une CATASTROPHE !** 💀

---

## 🛡️ La solution : le HASHAGE

Au lieu de stocker `azerty123`, on stocke un **HASH** :

```
$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
```

**C`est quoi un hash ?**

C`est une **transformation irréversible** du mot de passe.

```
azerty123  →  [FONCTION DE HASHAGE]  →  $2y$10$92IXU...
```

**Propriétés importantes :**

✅ **Irréversible** : On ne peut PAS retrouver `azerty123` à partir du hash
✅ **Unique** : Chaque mot de passe donne un hash différent
✅ **Déterministe** : `azerty123` donnera toujours le même résultat (pour la vérification)

---

## 🧠 Analogie simple : La recette de cuisine

Imagine que tu prépares une **pizza**.

**Ingrédients :**
- Pâte
- Tomates
- Fromage

**Tu mets tout au four → TU OBTIENS UNE PIZZA 🍕**

**Maintenant, question :**

*"Est-ce que tu peux récupérer la pâte, les tomates et le fromage SÉPARÉS à partir de la pizza cuite ?"*

**Non ! C`est IMPOSSIBLE !** La transformation est **irréversible**.

**C`est EXACTEMENT comme ça que fonctionne le hashage !**

Tu mets ton mot de passe → Tu obtiens un hash → Tu ne peux plus revenir en arrière.

---

## 💻 En PHP : password_hash()

PHP a une fonction **géniale** pour hasher les mots de passe : **`password_hash()`**

**Syntaxe :**

```php
$hash = password_hash($password, PASSWORD_DEFAULT);
```

**Exemple :**

```php
<?php
$password = "azerty123";
$hash = password_hash($password, PASSWORD_DEFAULT);

echo $hash;
?>
```

**Résultat :**

```
$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
```

**C`est ÇA qu`on va stocker dans la base de données !**

---

## 🔍 Décortiquons le hash

Prenons ce hash :

```
$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
```

**Décomposition :**

- **`$2y$`** → Algorithme utilisé (bcrypt)
- **`10`** → Coût (nombre d`itérations, de 4 à 31)
- **`92IXUNpkjO0rOQ5byMi.`** → Le salt (sel aléatoire)
- **`Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi`** → Le hash du mot de passe

**Le salt, c`est quoi ?**

C`est une **chaîne aléatoire** ajoutée au mot de passe avant le hashage.

**Pourquoi ?**

Pour que deux personnes avec le même mot de passe aient des hash **différents** !

**Exemple :**

| Utilisateur | Mot de passe | Hash |
|-------------|--------------|------|
| alice | azerty123 | `$2y$10$abc123...` |
| bob | azerty123 | `$2y$10$xyz789...` |

**Même mot de passe, hash différent ! 🎯**

Ça empêche les attaques par **table arc-en-ciel** (rainbow table).

---

## ✅ Vérifier un mot de passe : password_verify()

Maintenant, comment on **vérifie** un mot de passe ?

On utilise **`password_verify()`** !

**Syntaxe :**

```php
$correct = password_verify($password, $hash);
```

**Exemple :**

```php
<?php
$password_saisi = "azerty123";
$hash_stocke = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";

if (password_verify($password_saisi, $hash_stocke)) {
    echo "✅ Mot de passe correct !";
} else {
    echo "❌ Mot de passe incorrect !";
}
?>
```

**Comment ça marche ?**

1. `password_verify()` extrait le **salt** du hash
2. Il hashe le mot de passe saisi avec ce salt
3. Il compare les deux hash
4. Si c`est identique → Mot de passe correct !

---

## 🎯 Exemple complet : Inscription

```php
<?php
require `config.php`;

$login = "alice";
$password = "monsupermotdepasse";

// 1. Hasher le mot de passe
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// 2. Insérer dans la base
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
$stmt->execute([
    `:login` => $login,
    `:password` => $password_hash  // On stocke le HASH, pas le mot de passe !
]);

echo "✅ Utilisateur créé !";
?>
```

**Dans la base de données :**

| id | login | password |
|----|-------|----------|
| 1  | alice | $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi |

**Le mot de passe en clair (`monsupermotdepasse`) n`est JAMAIS stocké ! ✅**

---

## 🔑 Exemple complet : Connexion

```php
<?php
require `config.php`;

$login = "alice";
$password = "monsupermotdepasse";

// 1. Récupérer l`utilisateur
$stmt = $pdo->prepare("SELECT * FROM users WHERE login = :login");
$stmt->execute([`:login` => $login]);
$user = $stmt->fetch();

// 2. Vérifier si l`utilisateur existe
if (!$user) {
    echo "❌ Login ou mot de passe incorrect !";
    exit;
}

// 3. Vérifier le mot de passe
if (password_verify($password, $user["password"])) {
    echo "✅ Connexion réussie !";
    // Démarrer la session, rediriger...
} else {
    echo "❌ Login ou mot de passe incorrect !";
}
?>
```

---

## ⚠️ Erreurs courantes à éviter

### Erreur n°1 : Stocker le mot de passe en clair

```php
// ❌ NE JAMAIS FAIRE ÇA !
$stmt = $pdo->prepare("INSERT INTO users (login, password) VALUES (:login, :password)");
$stmt->execute([
    `:login` => $login,
    `:password` => $password  // ❌ Mot de passe en clair !
]);
```

---

### Erreur n°2 : Utiliser md5() ou sha1()

```php
// ❌ NE JAMAIS FAIRE ÇA !
$hash = md5($password);  // ❌ md5() est CASSÉ !
$hash = sha1($password); // ❌ sha1() est CASSÉ !
```

**Pourquoi c`est dangereux ?**

- md5() et sha1() sont **trop rapides** → Un pirate peut tester des milliards de combinaisons par seconde
- Ils n`utilisent **pas de salt** → Vulnérable aux rainbow tables
- Ils sont **obsolètes** pour les mots de passe

**➡️ TOUJOURS utiliser `password_hash()` et `password_verify()` !**

---

### Erreur n°3 : Comparer les hash directement

```php
// ❌ NE JAMAIS FAIRE ÇA !
if ($user["password"] == $password_hash) {
    // Connexion
}
```

**Pourquoi c`est faux ?**

Chaque appel à `password_hash()` génère un **salt différent**, donc un **hash différent** !

```php
echo password_hash("test", PASSWORD_DEFAULT);  // $2y$10$abc...
echo password_hash("test", PASSWORD_DEFAULT);  // $2y$10$xyz...  (DIFFÉRENT !)
```

**➡️ TOUJOURS utiliser `password_verify()` pour comparer !**

---

## 🎓 Niveau avancé : Le coût

Tu peux ajuster le **coût** du hashage :

```php
$options = [`cost` => 12];
$hash = password_hash($password, PASSWORD_DEFAULT, $options);
```

**Le coût (cost) :**
- Valeur par défaut : **10**
- Min : **4** (très rapide, peu sécurisé)
- Max : **31** (très lent, très sécurisé)

**Plus le coût est élevé :**
- ✅ Plus c`est sécurisé (le pirate met plus de temps à casser)
- ❌ Plus c`est lent (ton serveur met plus de temps à hasher)

**Conseil :**

- Pour un petit site : **10** (par défaut)
- Pour un site sensible (banque) : **12** ou **13**

**Test de performance :**

```php
$start = microtime(true);
password_hash("test", PASSWORD_DEFAULT, [`cost` => 10]);
$end = microtime(true);
echo "Coût 10 : " . ($end - $start) . " secondes<br>";

$start = microtime(true);
password_hash("test", PASSWORD_DEFAULT, [`cost` => 12]);
$end = microtime(true);
echo "Coût 12 : " . ($end - $start) . " secondes<br>";
```

---

## 🧠 Ce que tu DOIS retenir

✅ **JAMAIS** stocker un mot de passe en clair

✅ **password_hash()** pour hasher (inscription)

✅ **password_verify()** pour vérifier (connexion)

✅ **PASSWORD_DEFAULT** utilise l`algorithme le plus sûr

✅ **Le salt est automatique** (géré par PHP)

✅ **Chaque hash est unique** même pour le même mot de passe

✅ **NE PAS** utiliser md5(), sha1() ou crypt()

---

## 📊 Tableau récapitulatif

| Fonction | Usage | Exemple |
|----------|-------|---------|
| **password_hash()** | Inscription | `$hash = password_hash($pass, PASSWORD_DEFAULT);` |
| **password_verify()** | Connexion | `if (password_verify($pass, $hash)) {...}` |
| **md5()** | ❌ Obsolète | N`UTILISE PAS |
| **sha1()** | ❌ Obsolète | N`UTILISE PAS |

---

## ✍️ EXERCICE PRATIQUE

**Objectif :** Sécuriser un système d`inscription

1. Crée un formulaire d`inscription
2. Hashe le mot de passe avec `password_hash()`
3. Insère l`utilisateur dans la base
4. Crée un formulaire de connexion
5. Vérifie le mot de passe avec `password_verify()`
6. Si correct, affiche "Bienvenue !"

**Vérifie dans phpMyAdmin :**
- Le mot de passe doit être un hash (pas en clair !)
- Il doit faire environ 60 caractères
- Il doit commencer par `$2y$`

---

## ⏭️ Dans le prochain cours...

Maintenant qu`on sait sécuriser les mots de passe, on va apprendre les **SESSIONS** !

On va voir :
- C`est quoi une session ?
- Comment démarrer une session
- Comment stocker des infos (user_id, login...)
- Comment vérifier qu`un utilisateur est connecté

**Prêt à garder tes utilisateurs connectés ? Let`s go ! 🚀**

---

**🔐 Bravo ! Tu sais maintenant sécuriser les mots de passe comme un pro !**

*PS : Si un jour quelqu`un te demande de stocker un mot de passe en clair, tu peux lui dire NON ! 💪*
