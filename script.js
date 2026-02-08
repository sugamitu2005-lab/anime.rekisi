const fadeElems = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeElems.forEach(el => observer.observe(el));
