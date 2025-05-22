Excellent projet pour apprendre à la fois le **DOM**, les **fichiers**, le **parsing Markdown**, et créer ta propre **expérience utilisateur** ! Voici une **ToDo list complète** pour te guider **du début à la fin** :

---

# 🗂️ ToDo — Visualiseur de fichiers `.md` personnalisé

## 🧠 Objectif
Créer un site web en HTML/CSS/JS qui permet de **visualiser des fichiers Markdown** (`.md`) avec ton **propre moteur de rendu** ou une lib custom, et un design entièrement personnalisé.

---

## 🏗️ Structure de base
- [ ] Créer un projet avec cette structure :
  ```
  /md-viewer/
  ├── index.html
  ├── css/
  │   └── style.css
  ├── js/
  │   ├── main.js
  │   ├── parser.js
  │   └── loader.js
  └── docs/
      └── exemple.md
  ```

---

## 🖼️ HTML de base
- [ ] Créer une interface avec :
  - Un bouton ou champ de sélection de fichier `.md`
  - Une zone d'affichage du rendu
  - Un panneau ou menu de navigation (optionnel)
  - Une zone brute pour afficher le texte original (optionnel)

---

## 🎨 Design / UI
- [ ] Créer un design personnalisé avec CSS :
  - Choisir une police moderne
  - Utiliser des couleurs sobres / sombres / selon ton style
  - Styliser les balises Markdown : `h1`, `p`, `ul`, `code`, `blockquote`, etc.
  - Ajouter une version **dark mode** (bonus)

---

## 🧩 Fonctionnalités principales
- [ ] Permettre de charger un fichier `.md` depuis :
  - [ ] Le système de fichiers (`<input type="file">`)
  - [ ] Une URL (optionnel, pour plus tard)

- [ ] Lire le fichier Markdown sélectionné
  - Utiliser `FileReader` pour charger le texte

- [ ] Convertir le contenu Markdown en HTML
  - [ ] Utiliser une lib simple (ex: `marked.js`) ou
  - [ ] Créer ton **propre parser** (ex : transformer `#` en `<h1>`)

- [ ] Afficher dynamiquement le rendu HTML dans la page
  - Utiliser `innerHTML` dans une zone prévue (`<div id="viewer">`)

---

## ⚙️ Développement JS
### `loader.js`
- [ ] Gérer l'import d'un fichier Markdown avec `FileReader`
- [ ] Appeler le parser et envoyer le HTML à `main.js`

### `parser.js`
- [ ] Créer un parseur Markdown basique (ou wrapper d’une lib)
  - [ ] `# titre` → `<h1>`
  - [ ] `## sous-titre` → `<h2>`
  - [ ] `* liste` → `<ul><li>`
  - [ ] `` `code` `` → `<code>`
  - [ ] `[lien](url)` → `<a>`

### `main.js`
- [ ] Initialiser le DOM
- [ ] Écouter les événements (`change`, `click`)
- [ ] Afficher le HTML généré
- [ ] Gérer le mode sombre (bonus)

---

## 🧪 Tests à faire
- [ ] Charger plusieurs fichiers `.md`
- [ ] Vérifier que les titres, listes, code, liens sont bien rendus
- [ ] Essayer avec du contenu complexe

---

## ✨ Fonctionnalités bonus
- [ ] Navigateur de fichiers local (comme un explorateur de docs/)
- [ ] Affichage du contenu brut + rendu côte à côte
- [ ] Ajout de raccourcis clavier (ex : `Ctrl + O` pour ouvrir un fichier)
- [ ] Génération automatique de table des matières (sommaire)
- [ ] Intégration d’un éditeur Markdown live (`textarea` + rendu)

---

## 🚀 Étapes recommandées
1. [ ] Créer le squelette HTML/CSS/JS
2. [ ] Permettre le chargement d’un fichier `.md`
3. [ ] Afficher le texte brut
4. [ ] Intégrer le parser Markdown
5. [ ] Rendu du HTML stylisé dans la page
6. [ ] Ajouter tes propres styles
7. [ ] Ajouter les bonus si envie ✨

---

Tu veux que je t’aide à démarrer un fichier `index.html` propre et une base de `main.js` pour charger un fichier `.md` ?
