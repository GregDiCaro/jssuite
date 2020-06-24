/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function xmensRecup() {
        const response = await fetch("http://localhost:3000/heroes");
        xmen = await response.json();

        const template = document.querySelector("#tpl-hero");

        xmen.forEach(element => {
            const clone = template.content.cloneNode(true);

            clone.querySelector(".name").innerHTML = element.name;
            clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
            clone.querySelector(".powers").innerHTML = element.abilities;

            document.querySelector("#target").appendChild(clone);
        });
    }

    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });
})();
