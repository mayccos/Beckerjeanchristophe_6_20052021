//DOM  display total of media's likes 
const likesTotals = document.querySelector('.likesTotals');

/**
 * @param {object} medias
 * @returns create and insert Html element on PagePhotographe
 */
let displayTotalLikes = (medias) => {
    medias.then(medias =>{
        let totalLikes = 0;
        medias.map(media => {
            totalLikes += media.likes
        });
        return likesTotals.insertAdjacentHTML('beforeend', `${totalLikes}`);

    })
}
export {displayTotalLikes};