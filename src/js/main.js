{
    const NAV_CLASS_NAME = "nav";

    const nav = document.getElementsByClassName(NAV_CLASS_NAME)[0];
    const openMenuBtn = document.querySelector('.nav__open_menu-btn');
    const closeMenuBg = document.querySelector('.nav__menu-background');

    openMenuBtn.addEventListener('click', () => {
        nav.classList.add(NAV_CLASS_NAME + '--as_menu');
    });

    closeMenuBg.addEventListener('click', () => {
        nav.classList.remove(NAV_CLASS_NAME + '--as_menu');
        console.log(22);
    });
}