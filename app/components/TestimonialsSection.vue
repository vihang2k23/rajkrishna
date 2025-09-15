<template>
 <section class="testimonials">
  <!-- Section Header -->
  <div class="section-header">
    <h2>What Our Clients Say</h2>
    <p>We value our clients and their feedback motivates us to keep improving.</p>
  </div>

  <!-- Full-width Marquee -->
  <div class="marquee">
    <div class="marquee-content">
      <div
        v-for="(testimonial, index) in [...testimonials, ...testimonials]"
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
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f9fbfa, #f0f4f8);
  overflow: hidden;
  position: relative;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.4rem;
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

/* Marquee */
.marquee {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-content {
  display: flex;
  gap: 2rem;
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Card */
.testimonial-card {
  flex: 0 0 300px;
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.testimonial-card:hover {
  transform: scale(1.05);
  background: #f9fefb;
  transition: transform 0.3s ease;
}

/* Quote Icon */
.quote-icon {
  font-size: 2.5rem;
  font-weight: bold;
  color: #efa72e;
  margin-bottom: 1rem;
}

/* Text */
.testimonial-card p {
  font-style: italic;
  margin-bottom: 1.2rem;
  color: #444;
  line-height: 1.5;
  font-size: 1rem;
}

.testimonial-card h4 {
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.testimonial-card span {
  font-size: 0.9rem;
  color: #7f8c8d;
}
.testimonials {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f9fbfa, #f0f4f8);
  overflow: hidden;
  position: relative;
  width: 100%;
}

/* Remove container constraints */
.marquee {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 2rem 2rem; /* Optional: some space on left & right */
}

.marquee-content {
  display: flex;
  gap: 3rem; /* More space between cards */
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Card styling */
.testimonial-card {
  flex: 0 0 300px;
  background: transparent;
  text-align: center;
}


</style>
