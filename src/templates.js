
import cards from './menu.json';
import menuItemTpl from './templates/menu-item.hbs';


const setOfCards = document.querySelector('.js-menu');
const cardsMarkup = createCardsEl(cards);
setOfCards.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsEl(cards) {
    return menuItemTpl(cards);
};