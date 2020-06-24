/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function xmensRecup() {
        const response = await fetch("http://localhost:3000/heroes");
        const xmen = await response.json();
        const addName = document.querySelector("#hero-name").value;
        const addPowers = document.querySelector("#hero-powers").value;
        const alterEgo = document.querySelector("#hero-alter-ego").value;

        if (addName == "" || alterEgo == "" || addPowers == "") {
            alert("All fields are required");
        } else {
            newXmen = {
                id: xmen.length + 1,
                name: addName,
                alterEgo,
                abilities: addPowers.split(","),
            };

            xmen.push(newXmen);

            console.table(xmen);
        }
    }

    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });
})();
