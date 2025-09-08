<!-- components/ServicesDetailed.vue -->
<template>
  <section class="services-detailed">
    <div class="container">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="service-item" 
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <div class="service-content">
          <h2 class="gradient-text">{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <ul>
            <li v-for="(feature, i) in service.features" :key="i" class="feature-item">
              {{ feature }}
            </li>
          </ul>
          <NuxtLink :to="`/services/${service.slug}`" class="btn btn-primary">Learn More</NuxtLink>
        </div>
        <div class="service-image-wrapper">
          <div class="service-image-outer">
            <img :src="service.image" :alt="service.title" />
            <div class="decorative-shape"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  padding: 6rem 0;
  background: linear-gradient(135deg, #e0f7f1 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* Container & Layout */
.service-item {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
  perspective: 1000px;
}

.service-item.reverse {
  flex-direction: row-reverse;
}

/* Service Content */
.service-content {
  flex: 1;
}

.service-content h2 {
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-weight: 700;
}

.gradient-text {
  background: linear-gradient(90deg, #4caf50, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

/* Feature List Animation */
.service-content ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.feature-item {
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
  transform: translateX(-20px);
  opacity: 0;
  animation: slideIn 0.5s forwards;
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

/* Slide-in animation */
@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Service Image with 3D tilt & shadow */
.service-image-wrapper {
  flex: 1;
}

.service-image-outer {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-image-outer:hover {
  transform: rotateY(10deg) rotateX(5deg) scale(1.05);
}

.service-image-outer img {
  width: 100%;
  border-radius: 20px;
  display: block;
  transition: transform 0.5s;
}

.service-image-outer:hover img {
  transform: scale(1.1);
}

/* Decorative floating shape behind image */
.decorative-shape {
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

/* Buttons */
.btn-primary {
  display: inline-block;
  background: linear-gradient(90deg, #4caf50, #81c784);
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(76, 175, 80, 0.4);
}

/* Responsive */
@media (max-width: 968px) {
  .service-item {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .service-item.reverse {
    flex-direction: column;
  }
}
</style>
