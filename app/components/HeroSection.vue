<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 2000,
  transition: 800,
}

const slides = [
  { image: '/hero/images/hero-bg-1.jpg' },
  { image: '/assets/images/hero-bg-2.jpg' },
  { image: '/assets/images/hero-bg-3.jpg' },
  { image: '/assets/images/hero-bg-4.jpg' },
  { image: '/assets/images/hero-bg-5.jpg' },
]

</script>

<template>
  <div>
    <div >
      <Carousel class="hero" v-bind="carouselConfig">
        <Slide v-for="slide in slides" :key="slide">
          <img class="carousel-img" src="/hero/hero-bg-3.jpg" alt="slide.image">
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.hero {
  /* background-image: url('../assets/images/hero-bg-1.jfif');
  background-size: cover;
  background-position: center;
  padding: 100px 0; */
  height: calc(100vh - 100px);
}

.hero .carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>