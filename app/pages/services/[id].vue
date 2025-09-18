<template>
  <div>
    <PageHeader
      :title="service.title"
      subtitle="Learn more about our service"
    />

    <section class="service-details">
      <div class="container">
        <div class="details-grid">
          <!-- Image with floating shape -->
          <div class="details-image-wrapper">
            <div class="details-image-outer" :class="{ 'full-image': service.slug === 'voltage-stabilizer' }">
  <img :src="service.image" :alt="service.title" />
  <div class="floating-shape"></div>
</div>

          </div>

          <!-- Content -->
          <div class="details-content">
            <h2>{{ service.title }}</h2>
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

            <div class="flex flex-wrap gap-3"><NuxtLink to="/services" class="btn btn-secondary">
              Back to Services
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-primary">
      Contact Us
    </NuxtLink></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Floating WhatsApp Button -->
  <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        class="w-16 h-16"
      />
    </a>
</template>

<script setup>


import { useRoute } from 'vue-router'



const allServices = [
  {
     slug: 'voltage-stabilizer',
    title: "Voltage Stabilizer",
    description:
      "Reliable stabilization solutions for consistent voltage supply.",
    features: [
      "Automatic Voltage Regulation – Maintains constant output voltage despite input fluctuations.",
      "Wide Input Range – Handles low and high voltage conditions efficiently.",
      "Overload Protection – Prevents damage to appliances during excess load.",
      "Short-Circuit Protection – Cuts off power supply immediately in case of a fault.",
      "High/Low Voltage Cutoff – Shuts down output if input voltage goes beyond safe limits.",
    ],
    image: "/images/Services.png",
  },
  {
    slug: "automatic-water-sprinkler",
    title: "Automatic Water Sprinkler for Solar",
    description:
      "Smart cleaning solution for solar panels ensuring maximum efficiency.",
    features: [
      "Keeps solar panels clean with automatic water spraying.",
      "Smart timer/sensor-based operation saves water and reduces manual effort.",
      "Durable, weather-resistant design for long life.",
      "Low maintenance and reliable performance.",
    ],
    image: "/images/solar-sprinkler.png",
  },
  {
    slug: "solar-water-heater",
    title: "Solar Water Heater",
    description:
      "Efficient solar-powered water heating systems for all seasons.",
    features: [
      "Harnesses solar energy to provide hot water, reducing electricity costs.",
      "High-quality insulation retains heat for long hours.",
      "Eco-friendly, durable, and low maintenance.",
      "Available in different capacities for homes, apartments, and commercial needs.",
    ],
    image: "/images/solar-water-heater.png",
  },
  {
    slug: "electric-turnkey",
    title: "Electric Turnkey Solutions",
    description:
      "Comprehensive electrical project execution from design to commissioning.",
    features: [
      "End-to-End Execution – From design, supply, installation to commissioning.",
      "Single Point Responsibility – One trusted partner.",
      "Customized Solutions as per client requirements.",
      "Time & Cost Efficiency with reduced overheads.",
      "Quality & Compliance with certified equipment.",
      "After-Sales Support for maintenance and assistance.",
    ],
    image: "/images/electric-turnkey.png",
  },
  {
    slug: "diesel-generator",
    title: "Diesel Generator",
    description:
      "Reliable power backup solutions for residential and industrial needs.",
    features: [
      "Ensures uninterrupted electricity during outages.",
      "Fuel efficient for longer run times.",
      "Robust & durable heavy-duty engines.",
      "Automatic Start/Stop during power failures.",
      "Low maintenance and easy servicing.",
      "Safety protection with overload & temperature safeguards.",
      "Available in capacities from small to large.",
      "Noise reduction with silencers/enclosures.",
    ],
    image: "/images/diesel-generator.png",
  },
  {
    slug: "transformer",
    title: "Transformer",
    description:
      "High-quality transformers delivering efficient and reliable performance.",
    features: [
      "High efficiency with minimal energy loss.",
      "Durable design with long service life.",
      "Available in multiple ratings for all needs.",
      "Cooling system options: oil-cooled or air-cooled.",
      "Low noise operation with minimal vibration.",
      "Safety protections: overload, short-circuit, surge.",
      "Customizable designs as per client requirements.",
      "Low maintenance with long service intervals.",
    ],
    image: "/images/transformer.png",
  },
  {
    slug: "ev-charging-stations",
    title: "EV Charging Stations",
    description:
      "Smart and energy-efficient charging solutions for electric vehicles.",
    features: [
      "Charge EVs faster and smarter.",
      "Compatible with all major connectors & standards.",
      "Smart features: mobile app, real-time monitoring, easy payments.",
      "Energy-efficient with solar integration & load management.",
      "Safe, reliable, and weatherproof for 24/7 use.",
      "Ideal for homes, businesses, and public networks.",
    ],
    image: "/images/ev-charging.png",
  },
];

const route = useRoute();
const service = computed(
  () => allServices.find((s) => s.slug === route.params.id) || allServices[0]
);

</script>
<style scoped>
.service-details {
  padding: 6rem 0;
  background: #ffffff; /* White background */
} /* Grid layout */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
} /* Image styles */
.details-image-wrapper {
  perspective: 1000px;
}
.details-image-outer {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
} /* Floating decorative shape */
.floating-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(9, 43, 71, 0.1); /* Blue accent with transparency */
  top: -20px;
  right: -20px;
  animation: float 3s ease-in-out infinite alternate;
  z-index: -1;
}
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(15deg);
  }
} /* Content styles */
.details-content h2 {
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #092b47; /* Blue */
  position: relative;
}
.details-content h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: #efa72e; /* Yellow underline */
  border-radius: 2px;
  margin-top: 8px;
  animation: underline 1s ease forwards;
}
@keyframes underline {
  from {
    width: 0;
  }
  to {
    width: 80px;
  }
}
.details-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.details-content h3 {
  color: #092b47; /* Blue for headings */
  margin-bottom: 1rem;
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
  color: #092b47; /* Blue for features */
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s forwards;
}
.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #efa72e; /* Yellow check */
  font-weight: bold;
} /* Slide-in animation */
@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
} /* Button */
.btn-secondary {
  background: #092b47; /* Blue button */
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.btn-secondary:hover {
  background: #efa72e; /* Yellow hover */
  color: #092b47;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(9, 43, 71, 0.3);
} /* Responsive */
@media (max-width: 968px) {
  .details-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .details-image-wrapper {
    order: -1;
  }
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
  max-width: 500px; /* prevents oversized images */
  max-height: 350px; /* fix height */
  margin: auto; /* center inside flex */
}

.service-image-outer:hover {
  transform: scale(1.05);
}

.service-image-outer img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* crop oversized images */
  border-radius: 20px;
  display: block;
  transition: transform 0.5s;
}

.service-image-outer:hover img {
  transform: scale(1.1);
}
/* Special case for Voltage Stabilizer */
.full-image {
  max-width: 60% !important;
  max-height: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}.details-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* keeps responsive */
}

/* Secondary button (already exists) */
.btn-secondary {
  background: #092b47;
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.btn-secondary:hover {
  background: #efa72e;
  color: #092b47;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(9, 43, 71, 0.3);
}

/* Primary button (new) */
.btn-primary {
  background: #efa72e;
  color: #092b47;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.btn-primary:hover {
  background: #092b47;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(239, 167, 46, 0.3);
}


</style>
