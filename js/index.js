window.addEventListener('scroll', () => {
    const mainElement = document.querySelector('.main');
    const toolsMainElement = document.querySelector('.tools_main');
    const why_uh = document.querySelector('.why_uh');
    const why_us = document.querySelector('.why_us');

    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight;

    const mainTranslateY = Math.min(500, scrollPosition / 3);
    const toolsTranslateY = Math.max(-500, -scrollPosition / 3);

    mainElement.style.transform = `translateY(${mainTranslateY}px)`;
    toolsMainElement.style.transform = `translateY(${toolsTranslateY}px)`;
    why_uh.style.transform = `translateY(${toolsTranslateY}px)`;
    why_us.style.transform = `translateY(${toolsTranslateY}px)`;

    if (scrollPosition > maxScroll) {
        mainElement.style.opacity = 0;
    } else {
        mainElement.style.opacity = Math.max(1 - scrollPosition / maxScroll, 0);
    }
    toolsMainElement.style.opacity = Math.min(scrollPosition / maxScroll, 1);
    why_uh.style.opacity = Math.min(scrollPosition / maxScroll, 1);
    why_us.style.opacity = Math.min(scrollPosition / maxScroll, 1);
});
