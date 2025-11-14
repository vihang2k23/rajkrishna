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
          <p class="tagline">Engineering Energy with Precision.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <!-- Facebook Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <!-- Twitter Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-patel-21560464/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <!-- LinkedIn Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <!-- Instagram Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
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
              <NuxtLink :to="`/services/${service.slug}`">{{
                service.title
              }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul class="contact-info">
  <!-- Registered Office (Updated: Branch Address Only) -->
  <li>
    <div class="contact-item">
      <div class="contact-icon">
        <!-- Address Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
          />
        </svg>
      </div>

      <div class="contact-details space-y-2">
        <p>
          <strong>Registered Office:</strong><br />
          <a
            href="https://www.google.com/maps?q=2,+Shivali+Apartment,+Nr.+Happy+Street,+B/S+Rangwala+Tower,+Law+Garden,+Elisbridge,+Ahmedabad+380006,+Gujarat,+India"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[#EFA72E] transition"
          >
            2, Shivali Apartment, Nr. Happy Street, B/S Rangwala Tower,<br />
            Law Garden, Elisbridge, Ahmedabad 380006, Gujarat, India
          </a>
        </p>
      </div>
    </div>
  </li>

  <!-- Office Phone -->
  <li>
    <div class="contact-item">
      <div class="contact-icon">
        <!-- Office Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z"
          />
        </svg>
      </div>

      <div class="contact-details">
        <a href="tel:+919510594387" class="hover:text-[#EFA72E] transition">
          +91 9510594387
        </a>
      </div>
    </div>
  </li>

  <!-- Phone -->
  <li>
    <div class="contact-item">
      <div class="contact-icon">
        <!-- Phone Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
      </div>

      <div class="contact-details">
        <a href="tel:+917574858200" class="hover:text-[#EFA72E] transition">
          +91 75748 58200
        </a>
      </div>
    </div>
  </li>

  <!-- Email -->
  <li>
    <div class="contact-item">
      <div class="contact-icon">
        <!-- Email Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
      </div>

      <div class="contact-details">
        <a
          href="mailto:info.rajkrishnaengineering@gmail.com"
          class="hover:text-[#EFA72E] transition"
        >
          info.rajkrishnaengineering@gmail.com
        </a>
      </div>
    </div>
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
const services = [
  {
    title: "Voltage Stabilizer",
    slug: "voltage-stabilizer",
  },
  {
    title: "Automatic Water Sprinkler for Solar",
    slug: "automatic-water-sprinkler",
  },
  {
    title: "Solar Water Heater",
    slug: "solar-water-heater",
  },
  {
    title: "Electric Turnkey Solutions",
    slug: "electric-turnkey",
  },
  {
    title: "Diesel Generator",
    slug: "diesel-generator",
  },
  {
    title: "Transformer",
    slug: "transformer",
  },
  {
    title: "EV Charging Stations",
    slug: "ev-charging-stations",
  },
];
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0a2e4b 0%, #efa72e 90%);
  color: #ffffff;
  padding: 4rem 0 1.5rem;
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  color: #efa72e;
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
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #efa72e;
}

/* Brand / About */
.brand .logo img {
  height: 100px;
  margin-bottom: 1rem;
}

.tagline {
  color: #efa72e;
  font-weight: bolder;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #ffffff;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #092b47;
}

.social-links a:hover {
  background: #efa72e;
  color: #ffffff;
  transform: translateY(-3px);
}

/* Contact info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  gap: 0.8rem;
}

.contact-icon {
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.contact-details {
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #ffffff;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-links a {
  color: #ffffff;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #efa72e;
}

/* ✅ Responsive */
@media (max-width: 1024px) {
  .footer-section h3 {
    font-size: 1.1rem;
  }
  .footer-section a {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .brand {
    text-align: center;
  }

  .brand .logo img {
    height: 80px;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }

  .contact-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-icon {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 3rem 0 1rem;
  }

  .footer-section h3 {
    font-size: 1rem;
  }

  .footer-section a,
  .contact-details {
    font-size: 0.85rem;
  }

  .legal-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
/* ✅ Contact item fix */
.contact-item {
  display: flex;
  gap: 0.8rem;
  flex-wrap: nowrap; /* prevent breaking */
  align-items: flex-start;
}

.contact-details a {
  white-space: nowrap; /* keeps phone & email in one line */
  overflow: hidden;
  text-overflow: ellipsis; /* avoids overflow on tiny screens */
}

/* ✅ Mobile view */
@media (max-width: 768px) {
  .contact-item {
    flex-direction: row; /* keep icon + text inline */
    align-items: center;
  }

  .contact-details {
    font-size: 0.85rem;
  }
}
.contact-details a {
  white-space: normal; /* allow wrapping for addresses */
  word-break: break-word; /* wrap long words/addresses */
}

/* ✅ Special case: phone + email stay inline */
.contact-item a[href^="tel"],
.contact-item a[href^="mailto"] {
  white-space: nowrap; /* never break phone/email */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
