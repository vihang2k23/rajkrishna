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
        <!-- Text Content -->
        <div class="service-content">
          <h2 class="gradient-text">{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <ul>
            <li v-for="(feature, i) in service.features" :key="i" class="feature-item">
              {{ feature }}
            </li>
          </ul>
          <NuxtLink :to="`/services/${service.slug}`" class="btn btn-primary">
            Learn More
          </NuxtLink>
        </div>

        <!-- Image with decorative element -->
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
    slug: 'renewable-energy'
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
    slug: 'sustainable-construction'
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
    slug: 'environmental-consulting'
  }
]
</script>

<style scoped>
.services-detailed {
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

/* Container & Layout */
.service-item {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
}

.service-item.reverse {
  flex-direction: row-reverse;
}

/* Service Content */
.service-content {
  flex: 1;
}

.service-content h2 {
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.gradient-text {
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #092B47;
  margin-bottom: 1.5rem;
}

/* Features */
.service-content ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.feature-item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #092B47;
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #EFA72E;
  font-weight: bold;
}

/* Service Image */
.service-image-wrapper {
  flex: 1;
}

.service-image-outer {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.4s;
}

.service-image-outer:hover {
  transform: scale(1.05);
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

/* Decorative shape */
.decorative-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(239, 167, 46, 0.25);
  top: -20px;
  right: -20px;
  animation: float 3s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-15px) rotate(10deg); }
}

/* Button */
.btn-primary {
  display: inline-block;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(9, 43, 71, 0.25);
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
