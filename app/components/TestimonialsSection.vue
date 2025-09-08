<template>
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Clients Say</h2>
          <p>We value our clients and their feedback motivates us to keep improving.</p>
        </div>
  
        <div class="testimonials-slider">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <p>"{{ testimonial.message }}"</p>
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
      name: 'John Doe',
      position: 'CEO, GreenTech',
      message: 'Ataru Renew provided us with excellent sustainable energy solutions that transformed our operations.'
    },
    {
      name: 'Jane Smith',
      position: 'Founder, EcoHome',
      message: 'Their team is knowledgeable, responsive, and truly cares about environmental impact.'
    },
    {
      name: 'Michael Lee',
      position: 'Manager, SolarGrid',
      message: 'We achieved our renewable energy goals thanks to their innovative and practical solutions.'
    }
  ]
  </script>
  
  <style scoped>
  .testimonials {
    padding: 5rem 0;
    background: #fff;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
    color: #2c3e50;
  }
  
  .section-header p {
    color: #7f8c8d;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .testimonials-slider {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    scroll-behavior: smooth;
    padding-bottom: 1rem;
  }
  
  .testimonial-card {
    min-width: 300px;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
  }
  
  .testimonial-card p {
    font-style: italic;
    margin-bottom: 1rem;
    color: #555;
  }
  
  .testimonial-card h4 {
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.2rem;
  }
  
  .testimonial-card span {
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  .testimonial-card {
  min-width: 300px;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.4s, box-shadow 0.4s, background 0.3s;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 1s forwards;
}

.testimonial-card:nth-child(1) { animation-delay: 0.3s; }
.testimonial-card:nth-child(2) { animation-delay: 0.6s; }
.testimonial-card:nth-child(3) { animation-delay: 0.9s; }

.testimonial-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  background: #eafaf1;
}

@keyframes fadeSlideUp {
  to { opacity: 1; transform: translateY(0); }
}

  </style>
  