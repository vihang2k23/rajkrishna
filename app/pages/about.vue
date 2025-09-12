<!-- pages/about.vue -->
<template>
  <div>
    <PageHeader title="About Us" subtitle="Learn about our mission and values" />

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>Founded in 2015, Rajkrishna has been at the forefront of sustainable development and environmental renewal. Our journey began with a simple vision: to create a world where human progress and environmental stewardship go hand in hand.</p>
            <p>Today, we're proud to have completed over 200 projects across multiple countries, each contributing to a more sustainable future.</p>

            <h2>Our Mission</h2>
            <p>To provide innovative, sustainable solutions that address environmental challenges while creating economic opportunities for communities worldwide.</p>

            <h2>Our Values</h2>
            <ul>
              <li>Sustainability in all our operations</li>
              <li>Innovation through research and development</li>
              <li>Integrity in our relationships</li>
              <li>Excellence in execution</li>
              <li>Community engagement and empowerment</li>
            </ul>
          </div>

          <div class="about-image">
            <img src="/image.png" alt="About Rajkrishna" />
          </div>
        </div>
      </div>
    </section>

    <TeamSection />
    <StatsSection />
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
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  color: #2c3e50;
  margin: 2rem 0 1rem;
  position: relative;
  font-size: 2rem;
}

.about-text h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: #4CAF50;
  margin-top: 0.5rem;
  border-radius: 2px;
}

.about-text p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
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
  color: #555;
  font-size: 1rem;
}

.about-text li::before {
  content: "✓";
  color: #4CAF50;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
}

.about-image img:hover {
  transform: scale(1.05);
}

@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image {
    order: -1;
  }
}
</style>
