const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add(element.dataset.animation);
            observer.unobserve(element);
        }
    })
}, options);

const animationOnScroll = () => {
    const targetElements = document.querySelectorAll('[data-animation]');
    targetElements.forEach(element => observer.observe(element));
}

animationOnScroll();