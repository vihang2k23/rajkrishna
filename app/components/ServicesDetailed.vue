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
    title: 'Voltage Stabilizer',
    description: 'Reliable stabilization solutions for consistent voltage supply.',
    features: [
      'Automatic Voltage Regulation – Maintains constant output voltage despite input fluctuations.',
      'Wide Input Range – Handles low and high voltage conditions efficiently.',
      'Overload Protection – Prevents damage to appliances during excess load.',
      'Short-Circuit Protection – Cuts off power supply immediately in case of a fault.',
      'High/Low Voltage Cutoff – Shuts down output if input voltage goes beyond safe limits.'
    ],
    image: '/images/voltage-stabilizer.png',
    slug: 'voltage-stabilizer'
  },
  {
    title: 'Automatic Water Sprinkler for Solar',
    description: 'Smart cleaning solution for solar panels ensuring maximum efficiency.',
    features: [
      'Keeps solar panels clean with automatic water spraying.',
      'Smart timer/sensor-based operation saves water and reduces manual effort.',
      'Durable, weather-resistant design for long life.',
      'Low maintenance and reliable performance.'
    ],
    image: '/images/solar-sprinkler.png',
    slug: 'automatic-water-sprinkler'
  },
  {
    title: 'Solar Water Heater',
    description: 'Efficient solar-powered water heating systems for all seasons.',
    features: [
      'Harnesses solar energy to provide hot water, reducing electricity costs.',
      'High-quality insulation retains heat for long hours.',
      'Eco-friendly, durable, and low maintenance.',
      'Available in different capacities for homes, apartments, and commercial needs.'
    ],
    image: '/images/solar-water-heater.png',
    slug: 'solar-water-heater'
  },
  {
    title: 'Electric Turnkey Solutions',
    description: 'Comprehensive electrical project execution from design to commissioning.',
    features: [
      'End-to-End Execution – From design, supply, installation to commissioning.',
      'Single Point Responsibility – One trusted partner.',
      'Customized Solutions as per client requirements.',
      'Time & Cost Efficiency with reduced overheads.',
      'Quality & Compliance with certified equipment.',
      'After-Sales Support for maintenance and assistance.'
    ],
    image: '/images/electric-turnkey.png',
    slug: 'electric-turnkey'
  },
  {
    title: 'Diesel Generator',
    description: 'Reliable power backup solutions for residential and industrial needs.',
    features: [
      'Ensures uninterrupted electricity during outages.',
      'Fuel efficient for longer run times.',
      'Robust & durable heavy-duty engines.',
      'Automatic Start/Stop during power failures.',
      'Low maintenance and easy servicing.',
      'Safety protection with overload & temperature safeguards.',
      'Available in capacities from small to large.',
      'Noise reduction with silencers/enclosures.'
    ],
    image: '/images/diesel-generator.png',
    slug: 'diesel-generator'
  },
  {
    title: 'Transformer',
    description: 'High-quality transformers delivering efficient and reliable performance.',
    features: [
      'High efficiency with minimal energy loss.',
      'Durable design with long service life.',
      'Available in multiple ratings for all needs.',
      'Cooling system options: oil-cooled or air-cooled.',
      'Low noise operation with minimal vibration.',
      'Safety protections: overload, short-circuit, surge.',
      'Customizable designs as per client requirements.',
      'Low maintenance with long service intervals.'
    ],
    image: '/images/transformer.png',
    slug: 'transformer'
  },
  {
    title: 'EV Charging Stations',
    description: 'Smart and energy-efficient charging solutions for electric vehicles.',
    features: [
      'Charge EVs faster and smarter.',
      'Compatible with all major connectors & standards.',
      'Smart features: mobile app, real-time monitoring, easy payments.',
      'Energy-efficient with solar integration & load management.',
      'Safe, reliable, and weatherproof for 24/7 use.',
      'Ideal for homes, businesses, and public networks.'
    ],
    image: '/images/ev-charging.png',
    slug: 'ev-charging-stations'
  }
]
</script>

<style scoped > 
  .services-detailed { padding: 6rem 0; background: #ffffff; position: relative; overflow: hidden; } /* Container & Layout */ .service-item { display: flex; align-items: center; gap: 4rem; margin-bottom: 6rem; } .service-item.reverse { flex-direction: row-reverse; } /* Service Content */ .service-content { flex: 1; } .service-content h2 { font-size: 2.4rem; margin-bottom: 1.5rem; font-weight: 700; } .gradient-text { background: linear-gradient(90deg, #092B47, #EFA72E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } .service-content p { font-size: 1.1rem; line-height: 1.8; color: #092B47; margin-bottom: 1.5rem; } /* Features */ .service-content ul { list-style: none; padding-left: 0; margin-bottom: 2rem; } .feature-item { position: relative; padding-left: 2rem; margin-bottom: 1rem; font-size: 1rem; color: #092B47; } .feature-item::before { content: "✓"; position: absolute; left: 0; color: #EFA72E; font-weight: bold; } /* Service Image */ .service-image-wrapper { flex: 1; } .service-image-outer { position: relative; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); transition: transform 0.4s; } .service-image-outer:hover { transform: scale(1.05); } .service-image-outer img { width: 100%; border-radius: 20px; display: block; transition: transform 0.5s; } .service-image-outer:hover img { transform: scale(1.1); } /* Decorative shape */ .decorative-shape { position: absolute; width: 120px; height: 120px; border-radius: 50%; background: rgba(239, 167, 46, 0.25); top: -20px; right: -20px; animation: float 3s ease-in-out infinite alternate; z-index: -1; } @keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-15px) rotate(10deg); } } /* Button */ .btn-primary { display: inline-block; background: linear-gradient(90deg, #092B47, #EFA72E); color: #fff; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; } .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(9, 43, 71, 0.25); } /* Responsive */ @media (max-width: 968px) { .service-item { flex-direction: column; gap: 2rem; margin-bottom: 4rem; } .service-item.reverse { flex-direction: column; } }

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
  max-width: 500px;   /* prevents oversized images */
  max-height: 350px;  /* fix height */
  margin: auto;       /* center inside flex */
}

.service-image-outer:hover {
  transform: scale(1.05);
}

.service-image-outer img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* crop oversized images */
  border-radius: 20px;
  display: block;
  transition: transform 0.5s;
}

.service-image-outer:hover img {
  transform: scale(1.1);
}</style>