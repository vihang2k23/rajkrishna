<!-- pages/about.vue -->
<template>
    <div>
      <PageHeader title="About Us" subtitle="Learn about our mission and values" />
      
      <section class="about-content">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2015, Ataru Renew has been at the forefront of sustainable development and environmental renewal. Our journey began with a simple vision: to create a world where human progress and environmental stewardship go hand in hand.</p>
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
              <img src="/image.png" alt="About Ataru Renew" />
            </div>
          </div>
        </div>
      </section>
      
      <TeamSection />
      <StatsSection />
    </div>
  </template>
  
  <script setup >
import { useHead } from 'nuxt/app';

  useHead({
    title: 'About Us'
  })
  </script>
  
  <style scoped>
  .about-content {
    padding: 5rem 0;
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
  }
  
  .about-text p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #555;
  }
  
  .about-text ul {
    list-style: none;
    padding-left: 0;
  }
  
  .about-text li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    color: #555;
  }
  
  .about-text li:before {
    content: "✓";
    color: #4CAF50;
    position: absolute;
    left: 0;
  }
  
  .about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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