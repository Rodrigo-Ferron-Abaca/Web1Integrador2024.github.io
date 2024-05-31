document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'img/imagen1.jpg',
        'img/imagen2.jpg',
        'img/imagen3.jpg'
    ];

    let currentIndex = 0;
    const carrusel = document.getElementById('carrusel');

    function ActualizarCarrusel() {
        carrusel.innerHTML = '';
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        imgElement.classList.add('active');
        carrusel.appendChild(imgElement);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        ActualizarCarrusel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        ActualizarCarrusel();
    }

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPrevImage);

    ActualizarCarrusel();
});

