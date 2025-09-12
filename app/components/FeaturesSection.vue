<template>
  <section class="features">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Why Choose Rajkrishna</h2>
        <p>
          We are committed to sustainable solutions that benefit both people and
          planet
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon">
            <Icon :name="feature.icon" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "mdi:leaf",
    title: "Eco-Friendly Solutions",
    description:
      "Our approaches prioritize environmental sustainability and minimal ecological impact.",
  },
  {
    icon: "mdi:lightbulb-on",
    title: "Innovative Technology",
    description:
      "We utilize cutting-edge technology to deliver efficient and effective renewal solutions.",
  },
  {
    icon: "mdi:account-group",
    title: "Expert Team",
    description:
      "Our team of specialists brings years of experience in sustainable development.",
  },
  {
    icon: "mdi:calendar-clock",
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships with clients to ensure ongoing success and support.",
  },
];
</script>

<style scoped>
.features {
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #f4f9f4, #f8f9fa);
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 700;
  background: linear-gradient(90deg, #4caf50, #2e7d32);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.2rem;
  color: #607d8b;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
}

/* Feature Card */
.feature-card {
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -40%;
  width: 180%;
  height: 180%;
  background: radial-gradient(
    circle at center,
    rgba(76, 175, 80, 0.08),
    transparent
  );
  opacity: 0;
  transition: opacity 0.5s;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
}

/* Icon */
.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4caf50, #81c784);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.6s ease;
}

.feature-card:hover .feature-icon {
  transform: rotate(20deg) scale(1.1);
}

.feature-icon :deep(svg) {
  width: 42px;
  height: 42px;
  color: white;
}

/* Title & Text */
.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.feature-card p {
  color: #607d8b;
  line-height: 1.6;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .features {
    padding: 4rem 1rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }
}
</style>
