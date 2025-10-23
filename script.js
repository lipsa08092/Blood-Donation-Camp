tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#e11d48',
                        secondary: '#fecaca',
                        accent: '#dc2626',
                        dark: '#1f2937'
                    }
                }
            }
        }
        //Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            alert('Mobile menu functionality would be implemented here');
        });

        // Form submission
        document.getElementById('donorForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for registering!');
            this.reset();
        });

        // Smooth scrolling for navigation
        document.querySelectorAll().forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });