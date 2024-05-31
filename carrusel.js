document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('#carousel img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPrevImage);
});
