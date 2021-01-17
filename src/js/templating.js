import itemsTemplate from '../templates/gallery-items.hbs'
import menuItems from '../menu.json'


const markup = itemsTemplate(menuItems);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);