/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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

        idXmen = document.querySelector("#hero-id").value;

        if (idXmen < xmen.length && idXmen > 0) {
            xmen.splice(idXmen - 1, 1);
        }

        console.table(xmen);
    }

    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });
})();
