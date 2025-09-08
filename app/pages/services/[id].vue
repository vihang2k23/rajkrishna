<template>
    <div>
      <PageHeader :title="service.title" subtitle="Learn more about our service" />
  
      <section class="service-details">
        <div class="container">
          <div class="details-grid">
            <!-- Image with floating shape -->
            <div class="details-image-wrapper">
              <div class="details-image-outer">
                <img :src="service.image" :alt="service.title" />
                <div class="floating-shape"></div>
              </div>
            </div>
  
            <!-- Content -->
            <div class="details-content">
              <h2 class="gradient-text">{{ service.title }}</h2>
              <p>{{ service.description }}</p>
  
              <h3>Key Features:</h3>
              <ul>
                <li 
                  v-for="(feature, i) in service.features" 
                  :key="i" 
                  class="feature-item"
                  :style="{ animationDelay: i * 0.2 + 's' }"
                >
                  {{ feature }}
                </li>
              </ul>
  
              <NuxtLink to="/services" class="btn btn-secondary">Back to Services</NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  
  const allServices = [
    {
      slug: 'renewable-energy',
      title: 'Renewable Energy Solutions',
      description: 'We design and implement cutting-edge renewable energy systems tailored to your needs.',
      features: [
        'Solar power installation and maintenance',
        'Wind energy systems',
        'Geothermal energy solutions',
        'Energy storage systems'
      ],
      image: '/image.png'
    },
    {
      slug: 'sustainable-construction',
      title: 'Sustainable Construction',
      description: 'Eco-friendly building practices that reduce environmental impact while maintaining structural integrity.',
      features: [
        'Green building materials',
        'Energy-efficient design',
        'Waste reduction strategies',
        'LEED certification consulting'
      ],
      image: '/image.png'
    },
    {
      slug: 'environmental-consulting',
      title: 'Environmental Consulting',
      description: 'Expert assessment and guidance for your environmental initiatives and compliance needs.',
      features: [
        'Environmental impact assessments',
        'Regulatory compliance consulting',
        'Sustainability reporting',
        'Carbon footprint analysis'
      ],
      image: '/image.png'
    }
  ]
  
  const route = useRoute()
  const service = computed(() => allServices.find(s => s.slug === route.params.slug) || allServices[0])
  </script>
  
  <style scoped>
  .service-details {
    padding: 6rem 0;
    background: linear-gradient(135deg, #e8f6ef, #ffffff);
  }
  
  /* Grid layout */
  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  /* Image styles with floating shape */
  .details-image-wrapper {
    perspective: 1000px;
  }
  
  .details-image-outer {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  .details-image-outer:hover {
    transform: rotateY(10deg) rotateX(5deg) scale(1.05);
  }
  
  .details-image-outer img {
    width: 100%;
    display: block;
    border-radius: 20px;
    transition: transform 0.5s;
  }
  
  .details-image-outer:hover img {
    transform: scale(1.1);
  }
  
  /* Floating decorative shape */
  .floating-shape {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.2);
    top: -20px;
    right: -20px;
    animation: float 3s ease-in-out infinite alternate;
    z-index: -1;
  }
  
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-20px) rotate(15deg); }
  }
  
  /* Content styles */
  .details-content h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #4caf50, #81c784);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }
  
  .details-content h2::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #4caf50;
    border-radius: 2px;
    margin-top: 8px;
    animation: underline 1s ease forwards;
  }
  
  @keyframes underline {
    from { width: 0; }
    to { width: 80px; }
  }
  
  .details-content p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .details-content ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
  }
  
  .feature-item {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    color: #555;
    opacity: 0;
    transform: translateX(-20px);
    animation: slideIn 0.5s forwards;
  }
  
  .feature-item::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-weight: bold;
  }
  
  /* Slide-in animation for features */
  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  /* Button */
  .btn-secondary {
    background: linear-gradient(90deg, #4caf50, #81c784);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .btn-secondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(76, 175, 80, 0.4);
  }
  
  /* Responsive */
  @media (max-width: 968px) {
    .details-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .details-image-wrapper {
      order: -1;
    }
  }
  </style>
  