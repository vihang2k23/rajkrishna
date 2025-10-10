<template>
  <div>
    <!-- Removed subtitle -->
    <PageHeader title="About Us" />
    <section class="about-content">
  <div class="container">
    <div class="about-text centered">
      <h2>About Us</h2>
      <p>
        M/S Rajkrishna Engineering is a trusted name in the field of Solar EPC solutions,
        delivering end-to-end services from design, engineering, procurement, installation
        to commissioning and maintenance of solar power projects. With a strong commitment
        to innovation and sustainability, we aim to empower industries, businesses, and
        individuals with clean and reliable solar energy.
      </p>
      <p>
        Backed by technical expertise and industry experience, we specialize in rooftop
        solar, ground-mounted systems, and customized solar solutions that maximize efficiency
        and long-term value. Our focus is not only on building projects, but also on building
        long-lasting relationships through quality, transparency, and timely execution.
      </p>
      <p>
        At Rajkrishna Engineering, we believe in harnessing the power of the sun to create a
        greener tomorrow. Our mission is to contribute towards India’s renewable energy goals
        by providing cost-effective and sustainable solar power solutions for residential,
        commercial, and industrial sectors.
      </p>
      <p>
        At Rajkrishna Engineering, we believe solar energy is not just a power solution,
        but an investment in a greener future. With a commitment to innovation, quality,
        and sustainability, we aim to create a lasting impact for our customers and the
        environment.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>End-to-end Solar EPC Solutions</li>
        <li>Expertise in Rooftop &amp; Ground-mounted Projects</li>
        <li>Quality-driven Execution &amp; Timely Delivery</li>
        <li>Commitment to Sustainability &amp; Clean Energy</li>
        <li>Dedicated After-sales Service &amp; AMC Support</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple yet powerful: to drive the adoption of renewable energy by
        combining technical expertise, quality engineering, and customer trust.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Integrity First –</strong> We believe in honest, transparent, and ethical
          practices in every project we undertake.
        </li>
        <li>
          <strong>Customer Commitment –</strong> Our clients are at the heart of our work.
          We deliver reliable, customized, on-time and future-ready solutions.
        </li>
        <li>
          <strong>People &amp; Teamwork –</strong> Stronger together through collaboration.
          Respect for every individual and idea.
        </li>
        <li>
          <strong>Excellence in Execution –</strong> Precision, safety, and quality in every project.
        </li>
        <li>
          <strong>Service –</strong> Customer service is not a department, it’s an attitude!
        </li>
      </ul>
    </div>
  </div>
</section>


    <!-- Leadership Team with Photos -->
    <TeamSection />

    <StatsSection />
 <!-- Floating WhatsApp Button -->
 <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
    >
      <!-- <img  alt="WhatsApp" /> -->
      <img
 src="/whatsapp-icon.png"
  format="webp"
 
  loading="lazy"
  alt="WhatsApp"
/>
    </a>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'About Us'
})
</script>


<style scoped>
.about-content {
  padding: 6rem 0;
  background: #FFFFFF;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  text-align: left;
}

.about-text.centered {
  max-width: 900px;
  margin: 0 auto;
}

.about-text h2 {
  color: #092B47;
  margin: 2rem 0 1rem;
  position: relative;
  font-size: 2rem;
  font-weight: 700;
}

.about-text h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: #EFA72E;
  margin-top: 0.5rem;
  border-radius: 2px;
}

.about-text p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #092B47;
  font-size: 1rem;
}

.about-text ul {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.about-text li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  color: #092B47;
  font-size: 1rem;
}

.about-text li::before {
  content: "✓";
  color: #EFA72E;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Image */
.about-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(9, 43, 71, 0.2);
  transition: transform 0.5s, box-shadow 0.5s;
}

.about-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 50px rgba(239, 167, 46, 0.3);
}

.whatsapp-float {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #25D366;
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 1000;
}

.whatsapp-float:hover {
  background: #128C7E;
}

.whatsapp-float img {
  width: 2rem;
  height: 2rem;
}
/* ✅ Responsive */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-text.centered {
    text-align: center;
  }

  .about-text h2 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 0.95rem;
  }
}

@media (max-width: 600px) {
  .about-content {
    padding: 3rem 1rem;
  }

  .about-text h2 {
    font-size: 1.6rem;
  }

  .about-text p,
  .about-text li {
    font-size: 0.9rem;
  }

  .about-text li {
    padding-left: 1.5rem;
  }

  .about-text li::before {
    font-size: 0.9rem;
  }
}
</style>

