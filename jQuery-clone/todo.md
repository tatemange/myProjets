Magnifique projet 🔥 ! Créer ta propre **lib JS façon jQuery** va te faire progresser à fond en JavaScript pur (DOM, typage, architecture modulaire…). Voici une **todo list ultra ciblée** pour concevoir ta lib personnalisée, tout en restant sous les **500 lignes de code**.

---

# 📚 `myQuery.js` — Librairie JS perso inspirée de jQuery

## 🎯 Objectif
Créer une mini-lib JavaScript polyvalente avec une syntaxe inspirée de jQuery :  
```js
$().select('.class').on('click', callback).addClass('active')
```

---

## ✅ Fonctionnalités de base DOM (priorité haute)
- [ ] `$()` : wrapper global (comme `jQuery`)
- [ ] `.select()` : sélection de nœuds (querySelectorAll)
- [ ] `.html()`, `.text()`, `.val()` : contenu
- [ ] `.addClass()`, `.removeClass()`, `.toggleClass()`
- [ ] `.css()` : appliquer du style
- [ ] `.attr()`, `.removeAttr()`, `.data()`
- [ ] `.on()`, `.off()` : gestion des événements
- [ ] `.append()`, `.prepend()`, `.remove()`, `.empty()`

---

## ⚙️ Fonctions utilitaires globales (non liées au DOM)
- [ ] `$.isArray()`, `$.isObject()`, `$.isString()`, `$.isNumber()`
- [ ] `$.clone(obj)` : deep clone
- [ ] `$.extend(target, source)` : merge d'objets
- [ ] `$.each(arr, fn)` : itération simple
- [ ] `$.type(value)` : retourne le type réel

---

## 📦 Fonctions sur tableaux & objets
- [ ] `$.map(arr, fn)` : transformation
- [ ] `$.filter(arr, fn)` : filtrage
- [ ] `$.unique(arr)` : supprime les doublons
- [ ] `$.flatten(arr)` : aplatissement (1 niveau)
- [ ] `$.deepEqual(a, b)` : comparaison profonde

---

## 💥 Fonctions bonus (si place dispo)
- [ ] `$.ready(fn)` : équivalent de `DOMContentLoaded`
- [ ] `.animate()` : animation CSS simple (transition)
- [ ] `.toggle()` : alternance de visibilité
- [ ] `.hasClass()` : vérifie une classe
- [ ] `.parent()`, `.children()`, `.siblings()`

---

## 📁 Structure du fichier
Tout dans un seul fichier `myQuery.js` :
```js
(function (global) {
  function $(selector) {
    // retourne une instance avec les méthodes DOM
  }

  $.isArray = function () { ... }
  $.extend = function () { ... }

  // autres méthodes globales...

  global.$ = $; // export dans window
})(window);
```

---

## 🔧 Étapes de dev (recommandées)
1. [ ] Créer la structure IIFE + wrapper de base `$`
2. [ ] Ajouter méthodes DOM essentielles (sélecteurs, events, classes)
3. [ ] Ajouter helpers utilitaires
4. [ ] Ajouter outils pour tableaux / objets
5. [ ] Nettoyer, minifier si besoin
6. [ ] Limiter à 500 lignes max (objectif)

---

Si tu veux, je peux t’aider à démarrer avec la **structure de base + les premières méthodes DOM**. Tu veux qu’on commence ça ensemble ?
