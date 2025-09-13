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
  background: #ffffff; /* Clean white */
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.2rem;
  color: #555;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
}

/* Feature Card */
.feature-card {
  background: #fff;
  padding: 2.8rem 2rem;
  border-radius: 24px;
  border: 1px solid #eee;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(239, 167, 46, 0.08), transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
  z-index: 0;
}

.feature-card:hover::before {
  transform: scale(1);
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

/* Icon */
.feature-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #EFA72E, #092B47);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.feature-card:hover .feature-icon {
  transform: rotate(10deg) scale(1.15);
}

.feature-icon :deep(svg) {
  width: 46px;
  height: 46px;
  color: #fff;
}

/* Title & Description */
.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #092B47;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  z-index: 1;
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

  .feature-icon {
    width: 75px;
    height: 75px;
  }

  .feature-icon :deep(svg) {
    width: 36px;
    height: 36px;
  }
}
.features {
  padding: 6rem 1rem;
  background: #FFFFFF; /* clean white */
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.2rem;
  color: #092B47; /* Blue for text */
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
}

/* Feature Card */
.feature-card {
  background: #FFFFFF;
  padding: 2.8rem 2rem;
  border-radius: 24px;
  border: 1px solid #eee;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(239, 167, 46, 0.08), transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
  z-index: 0;
}

.feature-card:hover::before {
  transform: scale(1);
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

/* Icon */
.feature-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #EFA72E, #092B47); /* Yellow → Blue gradient */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.feature-card:hover .feature-icon {
  transform: rotate(10deg) scale(1.15);
}

.feature-icon :deep(svg) {
  width: 46px;
  height: 46px;
  color: #FFFFFF; /* icons white on gradient */
}

/* Title & Description */
.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #092B47; /* Blue title */
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: #092B47; /* Blue description */
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  z-index: 1;
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

  .feature-icon {
    width: 75px;
    height: 75px;
  }

  .feature-icon :deep(svg) {
    width: 36px;
    height: 36px;
  }
}

</style>



