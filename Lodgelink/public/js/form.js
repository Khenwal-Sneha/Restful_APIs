document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.new-form');
    const title = document.querySelector('#title');
    const img = document.querySelector('#img');
    const price = document.querySelector('#price');
    const location = document.querySelector('#location');
    const country = document.querySelector('#country');
    const titleErr = document.querySelector('.title-err');
    const imgErr = document.querySelector('.img-err');
    const priceErr = document.querySelector('.price-err');
    const locErr = document.querySelector('.loc-err');
    const counErr = document.querySelector('.coun-err');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (title.value.trim() === '') {
            event.preventDefault();
            titleErr.classList.remove('no-display');
            isValid = false;
        } else {
            titleErr.classList.add('no-display');
        }

        if (img.value.trim() === '') {
            event.preventDefault();
            imgErr.classList.remove('no-display');
            isValid = false;
        } else {
            imgErr.classList.add('no-display');
        }

        if (price.value.trim() === '' || price.value <= 0) {
            event.preventDefault();
            priceErr.classList.remove('no-display');
            isValid = false;
        } else {
            priceErr.classList.add('no-display');
        }

        if (location.value.trim() === '') {
            event.preventDefault();
            locErr.classList.remove('no-display');
            isValid = false;
        } else {
            locErr.classList.add('no-display');
        }

        if (country.value.trim() === '') {
            event.preventDefault();
            counErr.classList.remove('no-display');
            isValid = false;
        } else {
            counErr.classList.add('no-display');
        }

        if (!isValid) {
            event.stopPropagation();
        }
    });
});


