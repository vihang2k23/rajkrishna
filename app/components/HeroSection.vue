<template>
  <section class="hero" ref="hero">
    <div class="hero-background">
      <img
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        alt="Sustainable Energy"
      />
      <div class="overlay"></div>
    </div>

    <!-- 3D Floating Shapes -->
    <div class="floating-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>

    <!-- Particle Effect -->
    <div class="particles" ref="particles"></div>

    <!-- Content -->
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

    <!-- Scroll Indicator (now interactive & accessible) -->
    <div
      class="scroll-indicator"
      role="button"
      tabindex="0"
      aria-label="Scroll down"
      @click="scrollDown"
      @keydown.enter="scrollDown"
      @keydown.space.prevent="scrollDown"
    >
      <span>Scroll Down</span>
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const particles = ref(null);
const hero = ref(null);

let parallaxHandler;

function createParticles() {
  const particlesContainer = particles.value;
  if (!particlesContainer) return;

  // clear any existing particles (safety for hot reloads)
  particlesContainer.innerHTML = '';

  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties for each particle
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 10 + 15;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(particle);
  }
}

function parallax() {
  const scrolled = window.pageYOffset;
  const background = document.querySelector('.hero-background img') ;
  if (background) {
    // keep the same transform logic as before
    background.style.transform = `translateZ(-20px) scale(3) translateY(${scrolled * 0.4}px)`;
  }
}

function scrollDown() {
  const el = hero.value;
  if (!el) return;

  // Try to find the next sibling section to scroll to
  let next = el.nextElementSibling ;

  // If next exists and is visible, scroll to it; otherwise scroll by hero height
  if (next) {
    // compute absolute top of next element
    const top = next.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  } else {
    // fallback: scroll past the hero
    const top = el.offsetTop + el.offsetHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

onMounted(() => {
  createParticles();

  // parallax on scroll
  parallaxHandler = parallax;
  window.addEventListener('scroll', parallaxHandler, { passive: true });
});

onUnmounted(() => {
  // cleanup
  if (parallaxHandler) window.removeEventListener('scroll', parallaxHandler);
  if (particles.value) particles.value.innerHTML = '';
});
</script>

<style scoped>
/* keep your original styles, plus a couple small tweaks for the interactive indicator */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  color: #333;
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  perspective: 1000px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  z-index: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(-20px) scale(3);
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hero:hover .hero-background img {
  transform: translateZ(-10px) scale(2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(23, 97, 146, 0.7) 0%, rgba(32, 150, 84, 0.7) 100%);
  mix-blend-mode: multiply;
  z-index: 1;
}

/* 3D Floating Elements */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: float 15s infinite ease-in-out;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* shape sizes and positions */
.shape:nth-child(1) { width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s; }
.shape:nth-child(2) { width: 120px; height: 120px; top: 60%; left: 75%; animation-delay: -2s; background: rgba(76, 175, 80, 0.25); }
.shape:nth-child(3) { width: 60px; height: 60px; top: 70%; left: 15%; animation-delay: -5s; background: rgba(255, 255, 255, 0.2); }
.shape:nth-child(4) { width: 100px; height: 100px; top: 15%; left: 80%; animation-delay: -7s; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }

@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) translateZ(20px); }
  25% { transform: translate3d(20px, 30px, 0) rotate(5deg) translateZ(30px); }
  50% { transform: translate3d(-15px, 20px, 0) rotate(-5deg) translateZ(10px); }
  75% { transform: translate3d(10px, -15px, 0) rotate(3deg) translateZ(30px); }
}

.hero-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
  z-index: 3;
  transform-style: preserve-3d;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  transform: translateZ(50px);
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(30px) rotateX(30deg);
  animation: fadeInUp 1s forwards 0.5s;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s forwards 0.8s;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s forwards 1.1s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.btn:hover:before {
  transform: translateX(100%);
}

.btn-primary {
  background: #EFA72E;
  color: white;
  border: 2px solid #EFA72E;
}

.btn-primary:hover {
  background: #3e8e41;
  border-color: #3e8e41;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.4);
}

.btn-secondary {
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
}

.btn-secondary:hover {
  background: #fff;
  color: #333;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

/* Particles */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particleFloat 20s infinite linear;
}

@keyframes particleFloat {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
}

/* Parallax Scrolling Effect */
@media (min-width: 768px) {
  .hero { height: 100vh; }
  .hero-background { transform: translateZ(-40px) scale(4); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.5rem; }
  .hero-content p { font-size: 1.2rem; }
  .hero-buttons { flex-direction: column; align-items: center; }
  .btn { width: 220px; text-align: center; }
  .shape { display: none; }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 1s forwards 2s;
  cursor: pointer; /* make it obvious it's clickable */
  outline: none !important;;
  
}

.scroll-indicator:focus {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.12);
  border-radius: 8px;
}

@keyframes fadeIn {
  to { opacity: 0.8; }
}

.scroll-indicator span {
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.scroll-indicator .mouse {
  width: 26px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 15px;
  position: relative;
}

.scroll-indicator .wheel {
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s infinite;
}

@keyframes scrollWheel {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(16px); }
}
</style>
