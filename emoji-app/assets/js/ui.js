/**
 *
 * @param {string} tagName
 * @param {Object} attrs
 * @returns {HTMLElement}
 */
export function createHtmlElt (tagName, attrs={}) {
    const elt = document.createElement(tagName)
    for (const [key, value] of Object.entries(attrs))
        elt.setAttribute(key, value)
    return elt
}