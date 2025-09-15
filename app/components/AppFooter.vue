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
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
            </a>
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
            <li><NuxtLink to="/solar-epc">Solar EPC</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h3>Services</h3>
          <ul>
            
            <li v-for="service in services" :key="service.slug">
    <NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
  </li>
</ul>

          
        </div>

        <!-- Contact -->
<!-- Contact -->
<div class="footer-section">
  <h3>Contact Us</h3>
  <ul class="contact-info">
    <li>
      <Icon name="mdi:map-marker" />
      Registered Address (shifting under process) (about to close):  
      371/47, Maniyasha Soc, Nr. Madhav Apartment, Jasodanagar Road,  
      Maninagar East, Ahmedabad 380008.
      <br /><br />
      Branch Address:  
      2, Shivali Apartment, Nr. Happy Street, B/S Rangwala Tower,  
      Law Garden, Elisbridge, Ahmedabad 380006
    </li>
    <li>
      <Icon name="mdi:phone" />
      +91 75748 58200
    </li>
    <li>
      <Icon name="mdi:email" />
      info.rajkrishnaengineering@gmail.com
    </li>
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
import { Icon } from '@iconify/vue'
const services = [
  {
    title: 'Voltage Stabilizer',
    slug: 'voltage-stabilizer'
  },
  {
    title: 'Automatic Water Sprinkler for Solar',
    slug: 'automatic-water-sprinkler'
  },
  {
    title: 'Solar Water Heater',
    slug: 'solar-water-heater'
  },
  {
    title: 'Electric Turnkey Solutions',
    slug: 'electric-turnkey'
  },
  {
    title: 'Diesel Generator',
    slug: 'diesel-generator'
  },
  {
    title: 'Transformer',
    slug: 'transformer'
  },
  {
    title: 'EV Charging Stations',
    slug: 'ev-charging-stations'
  }
]
// No extra logic needed
</script>

<style scoped>
.footer {
  background-color: #092B47; /* Blue */
  color: #FFFFFF; /* White text */
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
  color: #EFA72E; /* Yellow */
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
  color: #FFFFFF; /* White links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #EFA72E; /* Yellow on hover */
}

/* Brand / About */
.brand .logo img {
  height: 45px;
  margin-bottom: 1rem;
}

.tagline {
  color: #FFFFFF;
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
  background: #FFFFFF; /* White circles */
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #092B47; /* Blue icons */
}

.social-links a:hover {
  background: #EFA72E; /* Yellow on hover */
  color: #FFFFFF;
  transform: translateY(-3px);
}

/* Contact info */
.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #FFFFFF;
  font-size: 0.95rem;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid #FFFFFF;
  padding-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #FFFFFF;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-links a {
  color: #FFFFFF;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #EFA72E;
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
