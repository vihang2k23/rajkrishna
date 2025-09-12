<template>
  <footer class="footer">
    <div class="container">
      <!-- Top Grid -->
      <div class="footer-content">
        <!-- Brand / About -->
        <div class="footer-section brand">
          <div class="logo">
            <img src="/logo.png" alt="Rajkrishna Logo" />
          </div>
          <p class="tagline">
            Sustainable renewal solutions for a better tomorrow.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><Icon name="fa6-brands:facebook" /></a>
            <a href="#" aria-label="Twitter"><Icon name="fa6-brands:twitter" /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="fa6-brands:linkedin" /></a>
            <a href="#" aria-label="Instagram"><Icon name="fa6-brands:instagram" /></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Renewable Energy</a></li>
            <li><a href="#">Sustainable Construction</a></li>
            <li><a href="#">Environmental Consulting</a></li>
            <li><a href="#">Green Technology</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul class="contact-info">
            <li><Icon name="mdi:map-marker" /> 123 Green Street, Eco City</li>
            <li><Icon name="mdi:phone" /> +1 (555) 123-4567</li>
            <li><Icon name="mdi:email" /> info@rajkrishna.com</li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2025 Rajkrishna. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No extra logic needed
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e2a36, #2c3e50);
  color: #ecf0f1;
  padding: 4rem 0 1.5rem;
  font-family: "Inter", sans-serif;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

/* Section titles */
.footer-section h3 {
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #4caf50;
}

/* Lists */
.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.6rem;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #4caf50;
}

/* Brand / About */
.brand .logo img {
  height: 45px;
  margin-bottom: 1rem;
}

.tagline {
  color: #bdc3c7;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #34495e;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #ecf0f1;
}

.social-links a:hover {
  background: #4caf50;
  transform: translateY(-3px);
}

/* Contact info */
.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #bdc3c7;
  font-size: 0.95rem;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid #3d4e5e;
  padding-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #95a5a6;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-links a {
  color: #95a5a6;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #4caf50;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .legal-links {
    justify-content: center;
  }
}
</style>
