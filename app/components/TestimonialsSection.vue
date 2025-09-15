<template>
  <section class="testimonials">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>What Our Clients Say</h2>
        <p>
          We value our clients and their feedback motivates us to keep improving.
        </p>
      </div>

      <!-- Testimonials Cards -->
      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card"
        >
          <div class="quote-icon">“</div>
          <p>{{ testimonial.message }}</p>
          <h4>{{ testimonial.name }}</h4>
          <span>{{ testimonial.position }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Bhaumik Patel",
    position: "Director, Mark Engineers",
    message:
      "Excellent service from start to finish! The team explained everything clearly and installed my solar rooftop system on time. My electricity bills have dropped significantly, and I couldn’t be happier.",
  },
  {
    name: "Mr. Sanjay Patel",
    position: "",
    message:
      "Very professional company with great knowledge about solar energy. The installation was quick, clean, and efficient. They guided me through the subsidy process as well, which saved me extra money.",
  },
  {
    name: "Mr. Amar Shah",
    position: "Maniratna Association",
    message:
      "Reliable, honest, and cost-effective! From consultation to installation, everything was handled smoothly. I now enjoy uninterrupted power and major savings on my monthly bills.",
  },
  {
    name: "Dr. Saurin Jhaveri",
    position: "Doctor",
    message:
      "Great experience! They use top-quality materials and the workmanship is excellent. I feel good knowing I’m using clean energy and saving money at the same time.",
  },
  {
    name: "Mr. Chintan Maniyar",
    position: "Director, Maniyar Builders",
    message:
      "The team was very friendly and knowledgeable. They completed the rooftop installation ahead of schedule and ensured everything was working perfectly. Highly recommended for anyone considering solar.",
  },
  {
    name: "Mr. Arvind Jain",
    position: "Director, Pheonix Fun Consultancy Services",
    message:
      "Great experience. They did excellent engineering 3D designing and installed the rooftop without hampering my elevation. My architect team was also impressed.",
  },
];
</script>

<style scoped>
.testimonials {
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #f9fbfa, #f0f4f8);
  position: relative;
  overflow: hidden;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #efa72e, #2e7d32);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  color: #607d8b;
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Grid Layout */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  justify-content: center;
}

/* Card */
.testimonial-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 1s forwards;
}

.testimonial-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
  background: #f9fefb;
}

.testimonial-card:nth-child(1) {
  animation-delay: 0.3s;
}
.testimonial-card:nth-child(2) {
  animation-delay: 0.6s;
}
.testimonial-card:nth-child(3) {
  animation-delay: 0.9s;
}
.testimonial-card:nth-child(4) {
  animation-delay: 1.2s;
}
.testimonial-card:nth-child(5) {
  animation-delay: 1.5s;
}
.testimonial-card:nth-child(6) {
  animation-delay: 1.8s;
}

/* Quote Icon */
.quote-icon {
  font-size: 3rem;
  font-weight: bold;
  color: #efa72e;
  margin-bottom: 1rem;
  line-height: 1;
}

/* Text */
.testimonial-card p {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #444;
  line-height: 1.6;
  font-size: 1rem;
}

.testimonial-card h4 {
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
}

.testimonial-card span {
  font-size: 0.9rem;
  color: #7f8c8d;
}

/* Animation */
@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media screen and (max-width: 768px) {
  .section-header h2 {
    font-size: 2.2rem;
  }
}
</style>
