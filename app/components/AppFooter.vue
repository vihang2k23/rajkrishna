<!-- components/AppFooter.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <img src="/logo.png" alt="Ataru Renew Logo" />
            </div>
            <p>Sustainable renewal solutions for a better tomorrow.</p>
            <div class="social-links">
              <a href="#"><Icon name="fa6-brands:facebook" /></a>
              <a href="#"><Icon name="fa6-brands:twitter" /></a>
              <a href="#"><Icon name="fa6-brands:linkedin" /></a>
              <a href="#"><Icon name="fa6-brands:instagram" /></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><NuxtLink to="/services">Services</NuxtLink></li>
              <li><NuxtLink to="/projects">Projects</NuxtLink></li>
              <li><NuxtLink to="/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Renewable Energy</a></li>
              <li><a href="#">Sustainable Construction</a></li>
              <li><a href="#">Environmental Consulting</a></li>
              <li><a href="#">Green Technology</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul class="contact-info">
              <li><Icon name="mdi:map-marker" /> 123 Green Street, Eco City</li>
              <li><Icon name="mdi:phone" /> +1 (555) 123-4567</li>
              <li><Icon name="mdi:email" /> info@rajkrishna.com</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Ataru Renew. All rights reserved.</p>
          <div class="legal-links">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup >
  // Footer component
  </script>
  
  <style scoped>
  .footer {
    background: #2c3e50;
    color: #fff;
    padding: 3rem 0 1rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-section h3 {
    margin-bottom: 1rem;
    color: #4CAF50;
  }
  
  .footer-section ul {
    list-style: none;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section a:hover {
    color: #4CAF50;
  }
  
  .logo img {
    height: 40px;
    margin-bottom: 1rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #4CAF50;
    border-radius: 50%;
    transition: background 0.3s;
  }
  
  .social-links a:hover {
    background: #3e8e41;
  }
  
  .contact-info li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .footer-bottom {
    border-top: 1px solid #34495e;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .legal-links {
    display: flex;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    .legal-links {
      justify-content: center;
    }
  }
  </style>