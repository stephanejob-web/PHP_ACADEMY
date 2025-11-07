# 📚 COURS COMPLET : PDO et Authentification PHP

## 👋 Bienvenue !

Ce cours est conçu pour les **DÉBUTANTS** qui veulent apprendre à créer un système d'authentification en PHP avec PDO.

**Prérequis :**
- Connaître les bases de PHP (variables, conditions, boucles)
- Avoir installé XAMPP ou WAMP
- Savoir créer des fichiers PHP

**Niveau :** Intermédiaire
**Durée estimée :** 6-8 heures de travail

---

## 🎯 Ce que tu vas apprendre

À la fin de ce cours, tu seras capable de :

✅ Comprendre ce qu'est PDO et pourquoi l'utiliser
✅ Te connecter à une base de données MySQL avec PDO
✅ Insérer des données de manière sécurisée
✅ Lire des données depuis la base
✅ Hasher et vérifier des mots de passe
✅ Utiliser les sessions PHP
✅ Créer un système complet d'inscription/connexion/déconnexion
✅ Protéger des pages (accès réservé aux utilisateurs connectés)

---

## 📖 Plan du cours

### 📘 Cours 01 : Introduction à PDO
**Fichier :** `01_introduction_pdo.md`

**Ce que tu vas apprendre :**
- C'est quoi PDO ?
- Pourquoi utiliser PDO au lieu de mysql_* ?
- Les 3 étapes de base : Connexion → Requête → Résultat
- La protection contre les injections SQL

**Durée :** 30 minutes

---

### 📘 Cours 02 : Se connecter à une base de données
**Fichier :** `02_connexion_base_donnees.md`

**Ce que tu vas apprendre :**
- Créer une base de données dans phpMyAdmin
- Écrire le code de connexion PDO
- Configurer PDO (mode erreur, mode fetch)
- Gérer les erreurs avec try/catch
- Créer un fichier `config.php` réutilisable

**Durée :** 45 minutes

**Exercice pratique :** Créer ta propre connexion PDO

---

### 📘 Cours 03 : Insérer des données (INSERT)
**Fichier :** `03_inserer_donnees.md`

**Ce que tu vas apprendre :**
- La requête SQL INSERT INTO
- ❌ La méthode dangereuse (à ne JAMAIS utiliser)
- ✅ La méthode sécurisée avec requêtes préparées
- Les placeholders (`:nom` et `?`)
- Récupérer l'ID du dernier élément inséré
- Vérifier si un login existe déjà

**Durée :** 1 heure

**Exercice pratique :** Créer un formulaire d'inscription

---

### 📘 Cours 04 : Lire des données (SELECT)
**Fichier :** `04_lire_donnees.md` *(à créer si nécessaire)*

**Ce que tu vas apprendre :**
- La requête SQL SELECT
- fetch() vs fetchAll()
- Filtrer avec WHERE
- Compter les résultats

**Durée :** 45 minutes

---

### 📘 Cours 05 : Sécurité des mots de passe
**Fichier :** `05_securite_mots_de_passe.md`

**Ce que tu vas apprendre :**
- Pourquoi on ne stocke JAMAIS un mot de passe en clair
- C'est quoi un hash ?
- `password_hash()` : hasher un mot de passe
- `password_verify()` : vérifier un mot de passe
- Le salt (sel) : c'est quoi et pourquoi c'est important
- Erreurs courantes à éviter (md5, sha1...)

**Durée :** 1 heure

**Exercice pratique :** Sécuriser un système d'inscription

---

### 📘 Cours 06 : Les sessions PHP
**Fichier :** `06_les_sessions.md`

**Ce que tu vas apprendre :**
- C'est quoi une session ?
- Démarrer une session avec `session_start()`
- Stocker des données dans `$_SESSION`
- Vérifier qu'un utilisateur est connecté
- Protéger une page
- Détruire une session (déconnexion)

**Durée :** 1 heure

**Exercice pratique :** Créer un système de connexion/déconnexion

---

### 📘 Cours 07 : Projet complet
**Fichier :** `07_projet_complet_authentification.md`

**Ce que tu vas faire :**
- Créer la base de données
- Créer un fichier de configuration
- Créer une page d'inscription
- Créer une page de connexion
- Créer une page d'accueil protégée
- Créer un script de déconnexion
- Tester tout le système

**Durée :** 2-3 heures

**Résultat :** Un système d'authentification complet et fonctionnel ! 🎉

---

## 🗺️ Parcours d'apprentissage recommandé

### Pour les débutants complets :

```
01. Introduction à PDO (30 min)
    ↓
02. Connexion à la base (45 min)
    ↓
03. Insérer des données (1h)
    ↓
05. Sécurité des mots de passe (1h)
    ↓
06. Les sessions (1h)
    ↓
07. Projet complet (2-3h)
```

**Conseil :** Fais les exercices pratiques à la fin de chaque cours !

---

### Pour ceux qui ont déjà des bases :

Tu peux sauter le cours 01 et commencer directement au cours 02.

Mais **ne saute JAMAIS** :
- Le cours 05 (sécurité des mots de passe)
- Le cours 06 (les sessions)
- Le cours 07 (projet complet)

---

## 💡 Conseils pour réussir

### 1. Pratique, pratique, pratique !

**NE TE CONTENTE PAS DE LIRE !**

À la fin de chaque cours, **FAIS L'EXERCICE PRATIQUE**.

C'est en **écrivant le code toi-même** que tu vas apprendre.

---

### 2. Tape le code toi-même

**Ne copie-colle pas bêtement !**

Tape le code **caractère par caractère**.

Ça te force à :
- Comprendre chaque ligne
- Mémoriser la syntaxe
- Repérer les erreurs

---

### 3. Teste, casse, répare

**N'aie pas peur de faire des erreurs !**

- Change des valeurs
- Provoque des erreurs volontaires
- Essaie de comprendre pourquoi ça plante

C'est comme ça qu'on devient bon ! 💪

---

### 4. Utilise les outils de débogage

- Utilise `var_dump()` pour voir le contenu des variables
- Utilise `echo` pour suivre l'exécution
- Lis les messages d'erreur PHP
- Utilise l'inspecteur de ton navigateur

---

### 5. Va à ton rythme

**Prends ton temps !**

Il vaut mieux :
- Faire 1 cours par jour en comprenant tout
- Que de faire 7 cours en une journée sans rien comprendre

---

## 🎓 Après ce cours, tu pourras...

### Niveau 1 : Débutant accompli

- Créer un site avec inscription/connexion
- Protéger des pages
- Sécuriser les mots de passe

### Niveau 2 : Développeur intermédiaire

Tu pourras ensuite apprendre :
- Les UPDATE et DELETE en SQL
- Les jointures SQL (JOIN)
- Les rôles et permissions
- L'upload de fichiers
- L'envoi d'emails
- Les API REST

### Niveau 3 : Développeur confirmé

- Les frameworks PHP (Laravel, Symfony)
- L'architecture MVC
- Les tests unitaires
- Docker
- ...

**Mais tout commence ici ! 🚀**

---

## 📁 Structure finale du projet

À la fin du cours, tu auras un projet qui ressemble à ça :

```
mon_projet/
├── config.php              # Connexion PDO
├── database.sql            # Structure de la base
├── inscription.php         # Page d'inscription
├── connexion.php           # Page de connexion
├── accueil.php             # Page d'accueil protégée
├── deconnexion.php         # Script de déconnexion
└── style.css               # Style (optionnel)
```

**Et tu pourras le montrer fièrement dans ton portfolio ! 💼**

---

## ❓ Questions fréquentes

### Q : Combien de temps ça va me prendre ?

**R :** Entre 6 et 10 heures selon ton niveau.

- Si tu es TRÈS débutant : 10h
- Si tu as déjà fait du PHP : 6h

**Conseil :** Prévois 2-3 jours pour faire le cours tranquillement.

---

### Q : J'ai besoin de quoi pour suivre ce cours ?

**R :**
- Un ordinateur (Windows, Mac ou Linux)
- XAMPP ou WAMP installé
- Un éditeur de code (VS Code, Sublime Text...)
- Un navigateur web
- De la motivation ! 💪

---

### Q : Je suis bloqué, que faire ?

**R :**
1. Relis le cours
2. Vérifie les messages d'erreur
3. Utilise `var_dump()` pour débuguer
4. Teste ligne par ligne
5. Recommence depuis le début de l'étape

---

### Q : Est-ce que ce cours est à jour ?

**R :** Oui ! Ce cours utilise :
- PDO (la méthode moderne)
- password_hash() (le standard actuel)
- Les bonnes pratiques de sécurité

**Tu peux l'utiliser en 2025 et après ! ✅**

---

### Q : C'est suffisant pour créer un vrai site ?

**R :**

Pour un **petit projet perso** : OUI ! ✅

Pour un **site professionnel** : C'est une TRÈS BONNE BASE, mais tu devras ajouter :
- Validation email (confirmation de compte)
- Mot de passe oublié
- Protection contre le spam (captcha)
- Limitation des tentatives de connexion
- Logs de sécurité
- ...

**Mais ce cours te donne les FONDATIONS ! 🏗️**

---

## 🏆 Défis supplémentaires

Une fois que tu as fini le projet complet, essaie d'ajouter :

### Défi 1 : Ajout d'un champ email
- Ajoute une colonne `email` dans la table
- Modifie le formulaire d'inscription
- Vérifie que l'email est valide (avec `filter_var()`)

### Défi 2 : Page de profil
- Crée une page `profil.php`
- Affiche toutes les infos de l'utilisateur
- Permet de modifier le login ou l'email

### Défi 3 : Système de rôles
- Ajoute une colonne `role` (admin, user)
- Crée une page d'administration accessible seulement aux admins

### Défi 4 : Liste des utilisateurs
- Crée une page qui affiche tous les utilisateurs
- Avec pagination (10 utilisateurs par page)

### Défi 5 : Recherche d'utilisateurs
- Ajoute un formulaire de recherche
- Recherche par login ou email

---

## 📚 Ressources complémentaires

### Documentation officielle

- **PHP PDO :** https://www.php.net/manual/fr/book.pdo.php
- **password_hash() :** https://www.php.net/manual/fr/function.password-hash.php
- **Sessions :** https://www.php.net/manual/fr/book.session.php

### Tutoriels vidéo

- Chaîne YouTube "Grafikart" (français)
- Chaîne YouTube "Traversy Media" (anglais)

### Communautés

- Forum OpenClassrooms
- Stack Overflow (pour les questions techniques)
- Reddit r/PHPhelp

---

## ✅ Checklist avant de commencer

- [ ] XAMPP ou WAMP est installé
- [ ] Apache et MySQL sont démarrés
- [ ] phpMyAdmin est accessible (http://localhost/phpmyadmin)
- [ ] J'ai un éditeur de code
- [ ] Je suis motivé ! 💪

---

## 🚀 C'est parti !

**Prêt à devenir un pro de l'authentification PHP ?**

**Commence par le cours 01 : Introduction à PDO**

**Bon courage ! Tu vas y arriver ! 💪🎉**

---

**Créé avec ❤️ pour les débutants qui veulent progresser**
