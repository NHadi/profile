class Navbar {
    constructor(containerId) {
        this.containerId = containerId;
    }

    render() {
        const template = `
            <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
                    <!-- Uncomment the line below if you also wish to use an image logo -->
                    <!-- <img src="assets/img/logo.webp" alt=""> -->
                    <h1 class="sitename">Nurul Hadi</h1>
                </a>

                <nav id="navmenu" class="navmenu">
                    <ul>
                        <li><a href="#hero" class="nav-link">Home</a></li>
                        <li><a href="#about" class="nav-link">About</a></li>
                        <li><a href="#resume" class="nav-link">Resume</a></li>
                        <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                        <li><a href="#services" class="nav-link">Services</a></li>                     
                        <li><a href="#contact" class="nav-link">Contact</a></li>
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        `;

        $(`#${this.containerId}`).html(template);
        this.initializeEvents();
    }

    initializeEvents() {
        // Handle mobile navigation toggle
        $('.mobile-nav-toggle').on('click', function(e) {
            $('#navmenu').toggleClass('navbar-mobile');
            $(this).toggleClass('bi-list bi-x');
        });

        // Handle dropdowns
        $('.navmenu .dropdown > a').on('click', function(e) {
            if($('#navmenu').hasClass('navbar-mobile')) {
                e.preventDefault();
                $(this).next().toggleClass('dropdown-active');
            }
        });

        // Active link handling
        $('.nav-link').on('click', function() {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
    }
}

// Export the component
window.Navbar = Navbar; 