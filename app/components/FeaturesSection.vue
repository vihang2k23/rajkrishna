<!-- components/FeaturesSection.vue -->
<template>
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Ataru Renew</h2>
          <p>We are committed to sustainable solutions that benefit both people and planet</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
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
  
  <script setup >
  const features = [
    {
      icon: 'mdi:leaf',
      title: 'Eco-Friendly Solutions',
      description: 'Our approaches prioritize environmental sustainability and minimal ecological impact.'
    },
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innovative Technology',
      description: 'We utilize cutting-edge technology to deliver efficient and effective renewal solutions.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Expert Team',
      description: 'Our team of specialists brings years of experience in sustainable development.'
    },
    {
      icon: 'mdi:calendar-clock',
      title: 'Long-Term Partnerships',
      description: 'We build lasting relationships with clients to ensure ongoing success and support.'
    }
  ]
  </script>
  
  <style scoped>
  .features {
    padding: 5rem 0;
    background: #f8f9fa;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .section-header p {
    font-size: 1.2rem;
    color: #7f8c8d;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.4s, box-shadow 0.4s;
}

.feature-card:hover {
  transform: translateY(-10px) rotate(-1deg);
  box-shadow: 0 15px 25px rgba(0,0,0,0.15);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4CAF50, #81C784);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.5s;
}



  
  .feature-icon :deep(svg) {
    width: 40px;
    height: 40px;
    color: white;
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .feature-card p {
    color: #7f8c8d;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .features {
      padding: 3rem 0;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
  }
  .feature-card:hover .feature-icon {
  transform: rotate(15deg);
}
  </style>