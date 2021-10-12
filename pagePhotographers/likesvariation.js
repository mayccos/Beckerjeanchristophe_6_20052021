/**
 * variation of likes and total likes on photographer's page(increase or decrease)
 */
let likesTotalLikesVariation = () => {
    const mediaLikes = document.querySelectorAll('.media__likes');
    mediaLikes.forEach(like => {
        ['click', 'keyup'].forEach(event => like.addEventListener(event , (e) => {
            let likesTotals = document.querySelector('.likesTotals');
            if (e.key == 'Enter') {
                if(!like.classList.contains('media__liked')) {
                    likesTotalLikesIncrease(likesTotals, like);
                }else{
                    likesTotalLikesDecrease(likesTotals, like);
                }
                
            }else if (e.type == 'click') {
                if(!like.classList.contains('media__liked')) {
                    totalLikesLikesIncreased(likesTotals, like);
                }else{
                    totalLikesLikesDecreased(likesTotals, like);
                }
                 
            }
        }))
    })
}

/**
 * to increase media's likes and photographer's total of likes
 * @param {HTMLElement} likes totals  total of likes increased
 * @param {HTMLElement} like  numberof likes increased
 */

 let totalLikesLikesIncreased = (likesTotals, like) => {
    ++likesTotals.innerText;
    ++like.children[0].innerText;
    like.classList.add('media__liked');
 }

 /**
  * to decrease media's likes and photographer's total of likes
  * @param {HTMLElement} likes totals  total of likes decreased
  * @param {HTMLElement} like  numberof likes decreased
  */
  let totalLikesLikesDecreased = (likesTotals, like) => {
    --likesTotals.innerText;
    --like.children[0].innerText;
    like.classList.remove('media__liked');
 }

 export  {likesTotalLikesVariation};