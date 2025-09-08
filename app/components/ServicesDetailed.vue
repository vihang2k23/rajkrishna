<!-- components/ServicesDetailed.vue -->
<template>
    <section class="services-detailed">
      <div class="container">
        <div v-for="(service, index) in services" :key="index" class="service-item" :class="{ 'reverse': index % 2 !== 0 }">
          <div class="service-content">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul>
              <li v-for="(feature, i) in service.features" :key="i">{{ feature }}</li>
            </ul>
            <NuxtLink :to="service.link" class="btn btn-primary">Learn More</NuxtLink>
          </div>
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup >
  const services = [
    {
      title: 'Renewable Energy Solutions',
      description: 'We design and implement cutting-edge renewable energy systems tailored to your needs.',
      features: [
        'Solar power installation and maintenance',
        'Wind energy systems',
        'Geothermal energy solutions',
        'Energy storage systems'
      ],
      image: '/image.png',
      link: '/services/renewable-energy'
    },
    {
      title: 'Sustainable Construction',
      description: 'Eco-friendly building practices that reduce environmental impact while maintaining structural integrity.',
      features: [
        'Green building materials',
        'Energy-efficient design',
        'Waste reduction strategies',
        'LEED certification consulting'
      ],
      image: '/image.png',
      link: '/services/sustainable-construction'
    },
    {
      title: 'Environmental Consulting',
      description: 'Expert assessment and guidance for your environmental initiatives and compliance needs.',
      features: [
        'Environmental impact assessments',
        'Regulatory compliance consulting',
        'Sustainability reporting',
        'Carbon footprint analysis'
      ],
      image: '/image.png',
      link: '/services/environmental-consulting'
    }
  ]
  </script>
  
  <style scoped>
  .services-detailed {
    padding: 5rem 0;
  }
  
  .service-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-bottom: 6rem;
  }
  
  .service-item:last-child {
    margin-bottom: 0;
  }
  
  .service-item.reverse {
    direction: rtl;
  }
  
  .service-item.reverse > * {
    direction: ltr;
  }
  
  .service-content h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  }
  
  .service-content p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  .service-content ul {
    list-style: none;
    margin-bottom: 2rem;
  }
  
  .service-content li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    color: #555;
  }
  
  .service-content li:before {
    content: "•";
    color: #4CAF50;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  .service-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 968px) {
    .service-item {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .service-item.reverse {
      direction: ltr;
    }
  }
  </style>