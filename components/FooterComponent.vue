<template>
     <footer class="footer">
        <div class="footer-container">
            <!-- Logo Section -->
            <div class="footer-logo">
                <div class="logo-text">G<span>🛩️</span>se Flight</div>
            </div>

            <!-- About Section -->
            <div class="footer-section">
                <h3 class="footer-heading">About</h3>
                <ul class="footer-links">
                    <li><a href="#">About GooseFlight</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Forum</a></li>
                </ul>
            </div>

            <!-- Support Section -->
            <div class="footer-section">
                <h3 class="footer-heading">Support</h3>
                <ul class="footer-links">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Trust and safety</a></li>
                    <li><a href="#">Accessibility</a></li>
                </ul>
            </div>

            <!-- Get the app Section -->
            <div class="footer-section app-section">
                <h3 class="footer-heading">Get the app</h3>
                <ul class="footer-links">
                    <li><a href="#">Tripma for Android</a></li>
                    <li><a href="#">Tripma for iOS</a></li>
                    <li><a href="#">Mobile site</a></li>
                </ul>
                <div class="app-buttons">
                    <a href="#"><img src="https://app-store-badge.png" alt="Download on the App Store" class="app-button"></a>
                    <a href="#"><img src="https://google-play-badge.png" alt="Get it on Google Play" class="app-button"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    background-color: #fff;
    padding: 3rem 0;
    font-family: Arial, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
}

.footer-logo {
    flex: 1;
}

.logo-text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.logo-text span {
    color: #ff9800;
}

.footer-section {
    flex: 1;
    margin: 0 2rem;
}

.footer-heading {
    color: #666;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 1rem;
}

.footer-links a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #ff9800;
}

.app-section {
    flex: 1;
}

.app-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.app-button {
    width: 140px;
    height: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        gap: 2rem;
    }

    .footer-section {
        margin: 0;
    }

    .app-buttons {
        flex-direction: row;
    }
}
</style>