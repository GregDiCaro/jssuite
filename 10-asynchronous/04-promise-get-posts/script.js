/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() => {

        const prom1 = window.lib.getPosts()

        prom1.then((result)=>{
            console.table(result);
        })

        prom1.catch((error)=>{
            console.log(error);

        })
        
    })
})();
