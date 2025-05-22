const userColor = document.querySelector("#color");
const lightPallette = document.querySelector(".light.pallettes .pallette")
const darkPallette = document.querySelector(".dark.pallettes .pallette")
const download = document.querySelector(".download")
const setBtn = document.querySelector(".set")


const numbers = {
    "A": 10, "B": 11, "C": 12,
    "D": 13, "E": 14, "F": 15,
}

/**
 * 
 * @param {string} tagName 
 * @param {object} attrs 
 * @returns {HTMLElement}  
 */
function createHtmlElt(tagName, attrs={}) {
    const elt = document.createElement(tagName)
    for(const [key, value] of Object.entries(attrs)){
        if(key === "text")
            elt.textContent = value
        else if(key === "html")
            elt.innerHTML = value
        else  elt.setAttribute(key, value)
    }
    return elt;
}


/**
 * 
 * @param {string} color 
 * @param {number} reduction 
 */
function convertHexalToRGB(color){
    const rgb = [0, 0, 0, 0]
    let newColor = color.replace("#", "").split("").map((char) => char.toUpperCase())
    newColor = newColor.map((char, i) => numbers[newColor[i]] ? numbers[newColor[i]]: parseInt(newColor[i])) 
    let count = 0
    for(let i = 2; i <= newColor.length; i = i + 2){
        rgb[count] += (newColor[i-2] * 16) + newColor[i-1] 
        count++
    }
    if(rgb[3] == 0){
        rgb[3] = 1
    }    
    return rgb;
}

function reduise(rgb, reduction){
    for(let i = 0; i < rgb.length-1; i++){        
        rgb[i] = Math.floor(rgb[i] - (rgb[i] * (reduction / 100)))
    }
    return rgb
}

function increase(rgb, unit){
    for(let i = 0; i < rgb.length-1; i++){        
        rgb[i] = Math.floor(rgb[i] + (rgb[i] * (unit / 100)))
        if(rgb[i] > 255) rgb[i] = 255
    }
    return rgb
}


setBtn.addEventListener("click", setColor)

/**
 * Génère une palette de couleurs claires avec des teintes pastel
 * @param {string} baseColor - La couleur de base en hexadécimal
 * @returns {Array} - Tableau de couleurs harmonieuses claires
 */
function generateLightPalette(baseColor) {
    const rgb = convertHexalToRGB(baseColor);
    const palette = [];
    
    // Génère 5 couleurs claires avec des teintes pastel
    for (let i = 0; i < 5; i++) {
        const newRgb = [...rgb];
        // Augmente la luminosité et réduit la saturation pour un effet pastel
        for (let j = 0; j < 3; j++) {
            // Augmente la luminosité
            newRgb[j] = Math.floor(newRgb[j] + (255 - newRgb[j]) * 0.7);
            // Ajoute une teinte pastel
            if (j === 0) newRgb[j] = Math.min(255, newRgb[j] + 30); // Plus de rouge
            if (j === 1) newRgb[j] = Math.min(255, newRgb[j] + 20); // Plus de vert
            if (j === 2) newRgb[j] = Math.min(255, newRgb[j] + 10); // Plus de bleu
        }
        palette.push(newRgb);
    }
    
    return palette;
}

/**
 * Génère une palette de couleurs sombres avec des teintes profondes
 * @param {string} baseColor - La couleur de base en hexadécimal
 * @returns {Array} - Tableau de couleurs harmonieuses sombres
 */
function generateDarkPalette(baseColor) {
    const rgb = convertHexalToRGB(baseColor);
    const palette = [];
    
    // Génère 5 couleurs sombres avec des teintes profondes
    for (let i = 0; i < 5; i++) {
        const newRgb = [...rgb];
        // Réduit la luminosité et augmente la saturation
        for (let j = 0; j < 3; j++) {
            // Réduit la luminosité
            newRgb[j] = Math.floor(newRgb[j] * 0.3);
            // Ajoute des teintes profondes
            if (j === 0) newRgb[j] = Math.max(0, newRgb[j] - 20); // Moins de rouge
            if (j === 1) newRgb[j] = Math.max(0, newRgb[j] - 10); // Moins de vert
            if (j === 2) newRgb[j] = Math.min(255, newRgb[j] + 40); // Plus de bleu
        }
        palette.push(newRgb);
    }
    
    return palette;
}

function setColor(e) {
    if(userColor.value.length == 4 || userColor.value.length == 7 || userColor.value.length == 9){
        lightPallette.innerHTML = "";
        darkPallette.innerHTML = "";
        
        // Génère les palettes distinctes
        const lightColors = generateLightPalette(userColor.value);
        const darkColors = generateDarkPalette(userColor.value);
        
        // Affiche la palette claire
        lightColors.forEach(rgb => {
            const item = createHtmlElt("div", {"class": "item"});
            const span = createHtmlElt("span", {"class": "bg"});
            span.innerHTML = rgb;
            item.append(span);
            item.style.background = `rgb(${rgb})`;
            lightPallette.append(item);
        });
        
        // Affiche la palette sombre
        darkColors.forEach(rgb => {
            const item = createHtmlElt("div", {"class": "item"});
            const span = createHtmlElt("span", {"class": "bg"});
            span.innerHTML = rgb;
            item.append(span);
            item.style.background = `rgb(${rgb})`;
            darkPallette.append(item);
        });
    }
    else {
        console.log("Couleur invalide:", userColor.value);
    }
}
