class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-brand">
                    <a href="index.html" class="nav-logo"><img src="images/logo.png" alt="Clembert Partners Logo"></a>
                    <span class="nav-tagline">Legal Guidance for Lending, Regulation, & Cross-Border Business</span>
                </div>
                <div class="nav-links">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="practice-areas.html" class="nav-link">Practice Areas</a>
                    <a href="insights.html" class="nav-link">Insights</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=clembertpartners@gmail.com&su=Consultation%20Request" target="_blank" class="btn btn-primary" style="margin-left: 1rem;">Book a Consultation</a>
                </div>
                <button class="hamburger" aria-label="Toggle navigation menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </nav>
        `;

        // Highlight active link
        const currentPath = window.location.pathname;
        const page = currentPath.split('/').pop() || 'index.html';
        const navLinkElements = this.querySelectorAll('.nav-link');

        navLinkElements.forEach(link => {
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Navbar scroll effect
        const navbar = this.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = this.querySelector('.hamburger');
        const navLinks = this.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking outside or on a link
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        navLinks.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container fade-up visible">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <a href="index.html" class="nav-logo"><img src="images/logo.png" alt="Clembert Partners Logo"></a>
                            <p class="footer-text mt-2">A commercial law firm advising founders, lenders, investors, and
                                international clients on FinTech, regulation, corporate structuring, dispute resolution, and
                                cross-border transactions across Africa.</p>
                        </div>
                        <div class="footer-links">
                            <h4>Social Media</h4>
                            <div class="social-icons">
                                <a href="https://www.instagram.com/clembert_partners?igsh=bXkzZzQ4emFnNHhr&utm_source=qr" target="_blank" aria-label="Instagram" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/share/1DoRbJ6152/?mibextid=wwXIfr" target="_blank" aria-label="Facebook" style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    Facebook
                                </a>
                                <a href="https://www.linkedin.com/company/clembert-partners/" target="_blank" aria-label="LinkedIn" style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    LinkedIn
                                </a>
                                <a href="https://x.com/clembertpartne1?s=21&t=_6_5V0SK_fqm3pydHraENQ" target="_blank" aria-label="Twitter" style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    Twitter
                                </a>
                            </div>
                        </div>
                        <div class="footer-contact">
                            <h4>Contact Us</h4>
                            <p>clembertpartners@gmail.com</p>
                            <p>+234 812 110 1333</p>
                            <p>78 Lome Crescent, Wuse Zone 7</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 Clembert Partners. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
