<!-- components/HeroSection.vue -->
<template>
    <section class="hero">
      <div class="hero-background">
        <img src="/image.png" alt="Sustainable Energy" />
        <div class="overlay"></div>
      </div>
      <div class="hero-content">
        <div class="container">
          <h1>Sustainable Renewal Solutions for a Better Tomorrow</h1>
          <p>Innovative approaches to environmental renewal and sustainable development</p>
          <div class="hero-buttons">
            <NuxtLink to="/services" class="btn btn-primary">Our Services</NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup >
  // Hero section component
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 80vh;
    min-height: 600px;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .hero-content {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .btn {
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
  }
  
  .btn-primary {
    background: #4CAF50;
    color: white;
  }
  
  .btn-primary:hover {
    background: #3e8e41;
    transform: translateY(-2px);
  }
  
  .btn-secondary {
    border: 2px solid #fff;
    color: #fff;
  }
  
  .btn-secondary:hover {
    background: #fff;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .hero-content p {
      font-size: 1.2rem;
    }
    
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
  .hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.6s ease;
}

.hero:hover .hero-background img {
  transform: scale(1.15);
}

.hero-content h1,
.hero-content p {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.hero-content h1 { animation-delay: 0.3s; }
.hero-content p { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.btn-primary:hover {
  box-shadow: 0 0 20px rgba(76, 175, 80, 0.6);
  transform: translateY(-3px) scale(1.05);
}

  </style>