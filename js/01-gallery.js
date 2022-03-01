import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('div.gllery');

galleryItems.forEach( element => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = photo.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.dataset.source = element.original;
    galleryImage.alt = element.description;
    galleryImage.src = element.preview;

    galleryBox.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
});

galleryBox.addEventListener('click', e => {
    e.preventDefault();
    basicLightbox.create('<img width="1280" src = ${e.target.dataset.source}>').show();
});