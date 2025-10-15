# 🔀 Leçon 04 : Fusionner les versions (merge)

## Salut chef exécutif ! 🧙‍♂️🏗️

Dans la leçon 03, t'as appris à créer des **versions parallèles** (les branches).  
Maintenant, on va apprendre le truc le plus important...

**Le problème :**

Tu as créé une version test avec du basilic frais. 🌿  
Tu l'as goûtée... C'est délicieux ! Tu veux l'adopter !  

**Mais comment tu fais pour que cette variante devienne ta recette principale ?**

C'est ça qu'on va voir aujourd'hui : **le MERGE (la fusion)** ! 🔥

---

## 🤔 C'est quoi le merge ?

Le merge, c'est **fusionner deux versions de ta recette** en une seule.

**Analogie cuisine :**

Tu as deux versions :
- 🍅 **Recette principale** : Ta sauce tomate classique
- 🌿 **Version test** : La même sauce avec du basilic frais

Tu goûtes la version avec basilic frais... C'est parfait ! Tu veux l'adopter.

**Comment tu fais ?**

Tu prends ta version test, tu la ramènes dans ta recette principale, et tu dis :  
*"Maintenant, ma sauce officielle c'est celle avec le basilic frais !"*

**Résultat ?**  
Ta recette principale intègre maintenant le basilic frais ! 🎉  
Et tu peux jeter tes notes de test.

**Avec Git, c'est exactement pareil ! Le merge ramène le travail d'une branche vers une autre.**

---

## 🎯 Les deux étapes du merge

Pour fusionner deux versions, tu fais **2 étapes** :

### Étape 1 : Va sur la recette qui va RECEVOIR les changements

```bash
git switch main
```

**En français :** "Je vais sur la recette principale (celle qui va recevoir le basilic frais)"

**Analogie cuisine :** Tu ouvres ton livre à la page de la recette principale.

---

### Étape 2 : Ramène les changements de l'autre version

```bash
git merge nom-de-la-branche
```

**Exemple :**

```bash
git merge test-basilic
```

**En français :** "Ramène tous les changements de la version `test-basilic` ici"

**Analogie cuisine :** Tu notes dans ta recette principale : "Désormais on utilise du basilic frais au lieu du séché"

**C'est tout ! 🎉**

---

## 🧪 Exemple pratique complet

On va reprendre ton projet `mon-site` de la leçon 03.

### Situation de départ

Tu es sur la branche `test-formulaire` et tu as ajouté un formulaire de contact.  
Maintenant, tu veux adopter cette version comme recette principale.

---

### Étape 1 : Vérifie où tu en es

```bash
git branch
```

**Résultat :**

```
* test-formulaire
  main
```

Tu es sur `test-formulaire`. Parfait ! ✅

---

### Étape 2 : Assure-toi d'avoir tout sauvegardé

```bash
git status
```

**Résultat :**

```
nothing to commit, working tree clean
```

Nickel ! Tout est sauvegardé. ✅

**IMPORTANT :** Avant un merge, il faut TOUJOURS que tout soit noté (commit).

---

### Étape 3 : Va sur la recette principale

```bash
git switch main
```

**Traduction :** "Je vais sur la recette principale qui va recevoir le formulaire"

---

### Étape 4 : Fusionne !

```bash
git merge test-formulaire
```

**Ce qui se passe :**

```
Updating a1b2c3d..z9y8x7w
Fast-forward
 index.html | 5 +++++
 1 file changed, 5 insertions(+)
```

**Traduction :**  
Git a pris tous les changements de la version `test-formulaire` et les a intégrés dans `main` !

---

### Étape 5 : Vérifie que tout est là

Ouvre ton fichier `index.html`...

🎉 **Le formulaire est là !**

Tu as réussi ton premier merge ! 💪

---

## 🧹 Nettoyer après un merge

Maintenant que tu as fusionné, la branche `test-formulaire` ne sert plus à rien.

**C'est comme tes notes de test :** Une fois que t'as adopté le basilic frais dans ta recette principale, tu peux jeter tes brouillons de test.

### Supprimer une branche

```bash
git branch -d test-formulaire
```

**En français :** "Supprime la version `test-formulaire`, j'en ai plus besoin"

**Résultat :**

```
Deleted branch test-formulaire (was z9y8x7w).
```

**Analogie cuisine :** Tu jettes tes notes de test et tu gardes seulement la recette principale mise à jour. 🗑️

**Note :** Git refuse de supprimer une branche si elle contient des changements non fusionnés. C'est une sécurité ! 🛡️

---

## 📊 Les deux types de merge

Il existe **deux types** de merge. Comprends bien la différence !

### 1️⃣ Le Fast-Forward (fusion rapide) ⚡

**Situation :**  
Tu as créé une branche, tu as testé des trucs, mais PERSONNE n'a touché à la recette principale pendant ce temps.

```
    main: A --- B --- C
                       \
                        D --- E  test-basilic
```

**Quand tu fais le merge :**  
Git déplace juste la flèche de `main` vers `E`. Facile ! ⚡

```
    main: A --- B --- C --- D --- E
```

**Analogie cuisine :**  
La recette principale n'a pas changé. Tu adoptes simplement ta nouvelle version avec le basilic. Simple !

**C'est le cas le plus simple. Git fait ça automatiquement.**

---

### 2️⃣ Le Three-Way Merge (fusion à trois points) 🔀

**Situation :**  
Tu as créé une branche ET testé le basilic, mais quelqu'un a AUSSI modifié la recette principale pendant ce temps (ajouté du sel, par exemple).

```
    main: A --- B --- C --- F (ajout sel)
                       \
                        D --- E  test-basilic
```

**Quand tu fais le merge :**  
Git crée un **nouveau commit de fusion** qui combine les deux changements.

```
    main: A --- B --- C --- F --- G (commit de fusion)
                       \         /
                        D ----- E
```

**Analogie cuisine :**  
La recette principale a déjà changé (F = ajout de sel). Git doit combiner intelligemment le sel (F) avec ton basilic (D-E).

**Git crée un commit automatique qui s'appelle "Merge branch 'test-basilic' into main"**

**Résultat final :** Ta recette a maintenant le sel ET le basilic ! 🎉

---

## 🎯 Le workflow professionnel

Voici comment les pros travaillent TOUS LES JOURS :

```
1. Je suis sur main (recette principale)
        ↓
2. git switch -c test-nouvel-ingredient (je teste une variante)
        ↓
3. Je teste mon ingrédient
        ↓
4. git add . && git commit -m "Test terminé" (je note la version)
        ↓
5. git switch main (je retourne sur la recette principale)
        ↓
6. git merge test-nouvel-ingredient (je fusionne)
        ↓
7. git branch -d test-nouvel-ingredient (je jette mes notes de test)
        ↓
8. Recommence pour le prochain test ! 🔁
```

**C'est comme ça que bossent Google, Facebook, Netflix... TOUT LE MONDE ! 🌍**

---

## ✅ Les règles d'or du merge

### Règle 1 : Toujours merger VERS main (pas l'inverse)

❌ **MAUVAIS :**
```bash
git switch test-basilic
git merge main
```

✅ **BON :**
```bash
git switch main
git merge test-basilic
```

**Pourquoi ?**  
`main` est ta recette principale. C'est elle qui reçoit les nouveaux ingrédients, pas l'inverse !

**Analogie cuisine :**  
Tu intègres le basilic dans la recette principale, pas l'inverse !

---

### Règle 2 : Toujours sauvegarder avant un merge

Avant de faire `git merge`, assure-toi que tout est commit :

```bash
git status
```

Si tu vois des fichiers modifiés, sauvegarde d'abord :

```bash
git add .
git commit -m "Sauvegarde avant fusion"
```

**Analogie cuisine :**  
Avant d'adopter la nouvelle version, assure-toi que tout est bien noté dans le livre !

---

### Règle 3 : Supprimer les branches après le merge

Une fois mergée, la branche ne sert plus à rien. Supprime-la :

```bash
git branch -d nom-de-la-branche
```

**Analogie cuisine :**  
Une fois le basilic adopté dans la recette principale, jette tes brouillons de test. Garde pas 50 versions de test pour rien !

---

## 🎮 Exercice : À toi de jouer !

**Mission : Crée une branche, teste une variante, et fusionne**

1. Va dans ton projet `mon-portfolio`
2. Assure-toi d'être sur `main` avec `git branch`
3. Crée une nouvelle branche `test-competences` avec `git switch -c test-competences`
4. Modifie `index.html` : ajoute une liste de tes compétences (HTML, CSS, PHP...)
5. Sauvegarde avec `git add .` puis `git commit -m "Test - ajout compétences"`
6. Retourne sur `main` avec `git switch main`
7. Fusionne avec `git merge test-competences`
8. Vérifie que tes compétences apparaissent dans `index.html` sur `main` ! 🎉
9. Supprime la branche avec `git branch -d test-competences`
10. Vérifie qu'elle est bien supprimée avec `git branch`

**Si t'as réussi, t'es un MAÎTRE DE LA FUSION CULINAIRE ! 💪**

---

## 🔑 Antisèche : Les commandes de fusion

| Commande | Ce qu'elle fait | Analogie cuisine |
|----------|-----------------|------------------|
| `git switch main` | Aller sur la recette principale | Ouvrir le livre à la recette principale |
| `git merge nom-branche` | Fusionner une version dans la version actuelle | Adopter les changements testés |
| `git branch -d nom-branche` | Supprimer une branche | Jeter les notes de test |
| `git branch -D nom-branche` | Forcer la suppression | Jeter même si pas encore fusionné |

---

## 🧠 Récapitulatif : Le cycle complet

Maintenant tu connais le **cycle complet** du développeur pro :

```
1. git switch -c test-nouvel-ingredient (créer une version test)
        ↓
2. Tester l'ingrédient
        ↓
3. git add . && git commit (noter la version)
        ↓
4. git switch main (retourner sur la recette principale)
        ↓
5. git merge test-nouvel-ingredient (adopter les changements)
        ↓
6. git branch -d test-nouvel-ingredient (jeter les notes de test)
        ↓
7. Recommence ! 🔁
```

**C'est exactement comme ça que travaillent les développeurs dans le monde entier ! 🌍**

---

## 💬 Citation du jour

> "Un bon chef sait quand jeter ses brouillons de test.  
> Une fois la recette adoptée, garde pas 50 versions de test qui traînent !"
> 
> — Le Chef Étoilé du Code 🍳

---

## 🚀 La suite au prochain épisode...

Dans la **leçon 05**, tu vas apprendre à gérer les **CONFLITS** :

- ⚠️ Que se passe-t-il quand deux chefs ont modifié la même recette ?
- 🤔 Comment Git gère ces situations ?
- 🛠️ Comment résoudre un conflit comme un pro ?

**Prépare-toi, c'est là que ça devient sérieux ! 🔥**

---

**Maintenant, va fusionner ! 🚀**