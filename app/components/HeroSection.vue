<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
  transition: 800,
  slideEffect: 'fade'
}

const slides = [
  // { image: '/hero/bg-1.png' },
  // { image: '/hero/hero-bg-1.jpg' },
  { image: '/hero/hero-bg-2.png' },
  // { image: '/hero/hero-bg-3.jpg' },
  { image: '/hero/hero-bg-4.jpg' },
  { image: '/hero/hero-bg-5.jpg' },
]

</script>

<template>
  <div>
    <div >
      <Carousel class="hero" v-bind="carouselConfig">
        <Slide v-for="slide in slides" :key="slide">
          <img class="carousel-img" :src="slide.image" alt="slide.image">
        </Slide>

        <template #addons>
          <Navigation />
          <!-- <Pagination /> -->
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