<template>
  <section class="cta">
    <div class="container">

      <h2>Do You Need a Consultation?</h2>
      <p>
        Green Line can give you lots of advantages, from which you will surely
        benefit.
      </p>
      <!-- Use NuxtLink only -->
      <NuxtLink 
        to="/contact" 
        class="btn cursor-pointer btn-primary btn-lg">
        Contact Us
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// ❌ Not needed when using NuxtLink
</script>

<style scoped>
.cta {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(
    90deg,
    #092b47,
    #efa72e
  ); /* Blue → Yellow gradient */
  color: #ffffff; /* White text */
  position: relative;
  overflow: hidden;
}

/* Glow animation */
.cta::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  animation: rotateGlow 6s linear infinite;
  pointer-events: none; /* ✅ important fix */
}


@keyframes rotateGlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Headings */
.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* Buttons */
.btn-lg {
  padding: 1rem 3rem;
  font-size: 1.1rem;
}

.btn-primary {
  background: #ffffff; /* White button */
  color: #092b47; /* Blue text */
  font-weight: 600;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s, background 0.3s;
}

.btn-primary:hover {
  background: #efa72e; /* Yellow hover */
  color: #ffffff; /* White text */
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(239, 167, 46, 0.6);
}
</style>
