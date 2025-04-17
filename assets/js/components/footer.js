class Footer {
    constructor(containerId) {
        this.containerId = containerId;
    }

    render() {
        const template = `
            <div class="container">
                <div class="copyright text-center">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">EasyFolio</strong> <span>All Rights Reserved</span></p>
                </div>
                <div class="social-links d-flex justify-content-center">
                    <a href="" class="twitter"><i class="bi bi-twitter-x"></i></a>
                    <a href="" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
                <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        `;

        $(`#${this.containerId}`).html(template);
        this.initializeEvents();
    }

    initializeEvents() {
        // Add any footer-specific event handlers here
        $('.social-links a').on('click', function(e) {
            e.preventDefault();
            const platform = $(this).attr('class');
            // Handle social link clicks
            console.log(`Clicked ${platform} link`);
        });
    }
}

// Export the component
window.Footer = Footer; 