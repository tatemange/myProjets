import {createHtmlElt} from "./ui.js"

const eltInput = document.querySelector(".inputs input")
const eltResult = document.querySelector(".emojis")


async function fetchFn(url) {
    const result = await fetch(url)
    if(result.ok)
        return result.json()
    throw new Error("url invalide")
}

function search(searchE, tab, result){
    let newTab = tab.filter((value) => value.name.includes(searchE))
    result.innerHTML = ""
    for(let i = 0; i < newTab.length && i < 50; i++ ){
        const span = createHtmlElt("span", {"class": "emoji"})
        span.textContent = newTab[i].char
        result.append(span)
    }
}

function getAllEmojis() {
    return fetchFn('./assets/datas/emoji.json')
}


getAllEmojis().then(emojis => {
    eltInput.addEventListener("input", (e) => {
        search(e.target.value, emojis, eltResult)
    })
}).catch(err => {
    console.error("Erreur de chargement des emojis:", err)
})




