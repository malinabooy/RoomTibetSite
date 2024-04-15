document.querySelectorAll('.photoHub__tourImage').forEach(function(image) {
    image.addEventListener('click', function() {
        const modalElem = document.querySelector('.photoHub__modalForImage');
        const modalImage = modalElem.querySelector('img');
        const prevBtn = modalElem.querySelector('.photoHub__prevBtn');
        const nextBtn = modalElem.querySelector('.photoHub__nextBtn');

        let currentIndex = parseInt(image.getAttribute('data-index'));

        const closeModal = event => {
            if (event.target === modalElem || event.target.closest('.photoHub__closeIcon')) {
                modalElem.classList.remove('open');
                document.body.classList.remove('photoHub____openModal');
            }
        };

        const openModal = () => {
            modalImage.src = image.src;
            modalElem.classList.add('open');
            document.body.classList.add('photoHub____openModal');
            
        };

        openModal();

        const showPrevImage = () => {
            currentIndex = currentIndex === 1 ? 6 : currentIndex - 1;
            const prevImage = document.querySelector(`[data-index="${currentIndex}"]`);
            modalImage.src = prevImage.src;
        };

        const showNextImage = () => {
            currentIndex = currentIndex === 6 ? 1 : currentIndex + 1;
            const nextImage = document.querySelector(`[data-index="${currentIndex}"]`);
            modalImage.src = nextImage.src;
        };

        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);

        modalElem.addEventListener('click', closeModal);

    });
});

