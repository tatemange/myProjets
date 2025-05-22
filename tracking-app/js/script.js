// Ce script va utiliser la fonction renderMathInElement fournie par auto-render.min.js

// S'assure que le script s'exécute après le chargement complet du DOM,
// ce qui est garanti par l'attribut 'defer' sur la balise script,
// mais il est bon d'utiliser DOMContentLoaded par sécurité.
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionne tous les éléments du DOM ayant la classe 'math'
    const mathElements = document.querySelectorAll('.math');

    // Pour chaque élément trouvé...
    mathElements.forEach(function(element) {
        // Appelle la fonction renderMathInElement sur cet élément spécifique
        renderMathInElement(element, {
            // Configure quels délimiteurs mathématiques auto-render doit reconnaître.
            // KaTeX supporte $...$ et \(...\) pour l'inline,
            // et $$...$$ et \[...\] pour le display/bloc.
            delimiters: [
                {left: '$$', right: '$$', display: true}, // $$...$$ pour les formules bloc
                {left: '\\[', right: '\\]', display: true}, // \[...\] aussi pour les formules bloc
                {left: '$', right: '$', display: false},  // $...$ pour les formules inline
                {left: '\\(', right: '\\)', display: false} // \(...\) aussi pour les formules inline
            ],
            // Options supplémentaires (facultatif)
            // throwOnError: true, // Met à true pour lancer une erreur JS si le parsing échoue
            // trust: true, // Active certaines fonctionnalités potentiellement non sécurisées si votre LaTeX vient d'une source non fiable
            // ... voir la documentation KaTeX pour plus d'options
            throwOnError: false // Par défaut, affiche l'expression LaTeX en rouge si erreur
        });
    });

    // Si vous vouliez rendre les mathématiques PARTOUT dans le corps du document,
    // y compris dans les paragraphes SANS la classe 'math', vous pourriez commenter
    // la boucle forEach ci-dessus et utiliser ceci à la place :
    /*
    renderMathInElement(document.body, {
         delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '\\[', right: '\\]', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false}
            ],
            throwOnError: false
    });
    */

});

// Votre code mathrenderer.js précédent n'est plus nécessaire si vous utilisez KaTeX
// pour faire le rendu. Vous pouvez le supprimer ou le renommer pour ne pas le confondre.
// Si vous l'incluez encore dans votre HTML, il risque de créer des conflits ou de l'affichage double.