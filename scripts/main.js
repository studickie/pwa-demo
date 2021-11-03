const data = [
    {
        title: 'content-1',
        image: './images/image-1.JPG'
    }, {
        title: 'content-2',
        image: './images/image-2.JPG'
    }, {
        title: 'content-3',
        image: './images/image-3.JPG'
    }, {
        title: 'content-4',
        image: './images/image-4.JPG'
    }
];

function buildCard({ image, title }) {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'image alt text');

    li.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = title;

    li.appendChild(h2);

    return li;
}

window.addEventListener('load', () => {
    const container = document.querySelector('#container');

    const fragment = new DocumentFragment();

    data.forEach(itm => {
        fragment.append(buildCard(itm));
    });

    container.appendChild(fragment);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../serviceWorker.js', { scope: '../' })
            .then(reg => {
                console.log('service worker registered with scope: ', reg.scope);
            })
            .catch(err => {
                console.log('service worker error: ', err);
            });
    });
}
