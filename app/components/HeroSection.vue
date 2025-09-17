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

  { image: '/hero/hero-bg-1.png' },
  { image: '/hero/hero-bg-2.jpg' },
  { image: '/hero/hero-bg-3.png' },

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
  height: calc(100vh - 100px); /* full height minus navbar */
  position: relative;
  overflow: hidden;
}

.hero .carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* keeps aspect ratio while filling */
  object-position: center; /* centers image */
  border-radius: 0; /* remove if any corner rounding happens */
}
.hero {
  height: 100vh; /* full viewport height */
  position: relative;
  overflow: hidden;
  background-color: #ffffff; /* white background to fill empty space */
}

.hero .carousel-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* ensures the whole image fits without cropping */
  object-position: center; /* center the image */
  display: block;
}

</style>