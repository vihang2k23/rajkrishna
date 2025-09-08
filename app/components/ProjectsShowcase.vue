<template>
    <section class="projects">
      <div class="container">
        <div class="section-header">
          <h2>Our Projects</h2>
          <p>Explore some of the sustainable projects we have successfully completed.</p>
        </div>
  
        <Swiper
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          effect="fade"
          navigation
          pagination
          class="projects-slider"
        >
          <SwiperSlide v-for="(project, index) in projects" :key="index">
            <div class="project-card">
              <img :src="project.image" :alt="project.title" />
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  
  const projects = [
    {
      title: 'Solar Farm Development',
      description: 'A large-scale solar farm providing clean energy to over 5000 homes.',
      image: '/image.png'
    },
    {
      title: 'Eco-Friendly Housing',
      description: 'Sustainable residential buildings with energy-efficient designs.',
      image: '/image.png'
    },
    {
      title: 'Community Wind Project',
      description: 'A community-based wind energy initiative supporting local power needs.',
      image: '/image.png'
    }
  ];
  </script>
  
  <style scoped>
  .projects { padding: 5rem 0; background: #f0f4f8; }
  .section-header { text-align: center; margin-bottom: 3rem; }
  .section-header h2 { font-size: 2.5rem; color: #2c3e50; }
  .section-header p { color: #7f8c8d; max-width: 600px; margin: 0 auto; }
  
  /* Project Card Effects */
  .project-card {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    transition: transform 0.5s, box-shadow 0.5s, filter 0.5s;
  }
  .project-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    filter: brightness(1.05);
  }
  .project-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .project-card:hover img { transform: scale(1.1); }
  
  .project-info { padding: 1.5rem; }
  .project-info h3 { font-size: 1.4rem; margin-bottom: 0.5rem; color: #2c3e50; }
  .project-info p { font-size: 1rem; color: #555; }
  </style>
  