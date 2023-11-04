document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(pageNumber) {
        pages.forEach(page => page.style.display = 'none');
        if (pageNumber >= 0 && pageNumber < pages.length) {
            pages[pageNumber].style.display = 'block';
            currentPage = pageNumber;
        }
    }

    function goToNextPage() {
        showPage(currentPage + 1);
    }

    function goToPreviousPage() {
        showPage(currentPage - 1);
    }

    showPage(0);

    const skipButtons = document.querySelectorAll('.skip-button');
    const nextButtons = document.querySelectorAll('.next-button');
    const getStartedButton = document.querySelector('.get-started-button');

    for (let i = 0; i < skipButtons.length; i++) {
        skipButtons[i].addEventListener('click', function() {
        });
    }

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', goToNextPage);
    }

    getStartedButton.addEventListener('click', function() {
        showPage(0); 
    });
});

