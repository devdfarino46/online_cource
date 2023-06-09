{
    const NAV_CLASS_NAME = "nav";

    let nav = document.getElementsByClassName(NAV_CLASS_NAME)[0];
    let openMenuBtn = document.querySelector('.nav__open_menu-btn');
    let closeMenuBg = document.querySelector('.nav__menu-background');

    openMenuBtn.addEventListener('click', () => {
        nav.classList.add(NAV_CLASS_NAME + '--as_menu');
    });

    closeMenuBg.addEventListener('click', () => {
        nav.classList.remove(NAV_CLASS_NAME + '--as_menu');
    });
}

{
    let slider = document.querySelector('.content__team-slider-wrapper');
    let item = document.querySelector('.content__team-slider-wrapper>.team');
    let prevBtn = document.querySelector('.slider-prev-control-btn');
    let nextBtn = document.querySelector('.slider-next-control-btn');

    let itemWidth = item.getBoundingClientRect().width;
    let sliderGap = parseInt(getComputedStyle(slider).columnGap);

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: (itemWidth + sliderGap),
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -(itemWidth + sliderGap),
            behavior: 'smooth'
        });
    });
}

{
    let DOT_CLASS_NAME = "content__testimonials-slider-dot";

    let sliderBg = document.querySelector('.content__testimonials-this-background');
    let slider = document.querySelector('.content__testimonials-this-wrapper');
    let items = document.querySelectorAll('.content__testimonials-this-wrapper>.testimonial');
    let prevBtn = document.querySelector('.content__testimonials-prev-btn');
    let nextBtn = document.querySelector('.content__testimonials-next-btn');
    let dots = document.querySelectorAll('.'+DOT_CLASS_NAME);

    let itemWidth = items[0].getBoundingClientRect().width;
    let sliderGap = parseInt(getComputedStyle(slider).columnGap);
    
    let itemIndex = 0;

    let scrollTo = (direction) => {
        slider.scrollBy({
            left: direction * (itemWidth + sliderGap)
        });
    }

    let setDot = (index = null) => {
        dots.forEach(dot => {
            dot.classList.remove(DOT_CLASS_NAME+'--this');
        });

        dots[itemIndex].classList.add(DOT_CLASS_NAME+'--this');
    }
    
    nextBtn.addEventListener('click', () => {
        scrollTo(1);

        if (itemIndex < items.length - 1) {
            itemIndex += 1;
        }

        setDot();
    });

    prevBtn.addEventListener('click', () => {
        scrollTo(-1);

        if (itemIndex > 0) {
            itemIndex -= 1;
        }

        setDot();
    });
}