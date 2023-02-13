window.addEventListener('DOMContentLoaded', event => {

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        console.log("FAQ KALICAK!!!")
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 10000,
        });
    };

    var offset = 86;
    let links = document.querySelectorAll('#navbarResponsive .nav-link');
    console.log(links)
    links.forEach(element => {
        element.addEventListener('click',function ()
        {
            scrollOffset();
        });
    });

    function scrollOffset() {
        
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});