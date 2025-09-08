<template>
    <section class="cta">
      <div class="container">
        <h2>Ready to Transform Your Energy Approach?</h2>
        <p>Partner with us today to achieve sustainable solutions that make a difference.</p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get Started</NuxtLink>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .cta {
    padding: 5rem 0;
    text-align: center;
    background: linear-gradient(90deg, #4CAF50, #3e8e41);
    color: white;
  }
  
  .cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .cta p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .btn-lg {
    padding: 1rem 3rem;
    font-size: 1.1rem;
  }
  
  .btn-primary {
    background: white;
    color: #4CAF50;
  }
  
  .btn-primary:hover {
    background: #f0f0f0;
    color: #3e8e41;
  }
  .cta {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(90deg, #4CAF50, #3e8e41);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
  animation: rotateGlow 6s linear infinite;
}

@keyframes rotateGlow {
  0% { transform: rotate(0deg) translate(0,0); }
  100% { transform: rotate(360deg) translate(0,0); }
}

.btn-primary {
  background: white;
  color: #4CAF50;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255,255,255,0.7);
}

  </style>
  