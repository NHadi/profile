class ComponentLoader {
    static async loadComponents() {
        // Initialize navbar
        if ($('#header').length) {
            const navbar = new Navbar('header');
            navbar.render();
        }

        // Initialize footer
        if ($('#footer').length) {
            const footer = new Footer('footer');
            footer.render();
        }

        // Initialize scroll-to-top button
        this.initScrollTop();
    }

    static initScrollTop() {
        const scrollTop = $('#scroll-top');
        
        if (scrollTop.length) {
            const toggleScrollTop = function() {
                if ($(window).scrollTop() > 100) {
                    scrollTop.addClass('active');
                } else {
                    scrollTop.removeClass('active');
                }
            };

            $(window).on('load scroll', toggleScrollTop);

            scrollTop.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            });
        }
    }
}

// Initialize components when DOM is ready
$(document).ready(() => {
    ComponentLoader.loadComponents();
}); 