<template>
    <section class="projects">
      <div class="container">
        <div class="section-header">
          <h2>Our Projects</h2>
          <p>Explore some of the sustainable projects we have successfully completed.</p>
        </div>
  
        <div class="projects-slider">
          <div v-for="(project, index) in projects" :key="index" class="project-item">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
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
  .projects {
    padding: 5rem 0;
    background: #f0f4f8;
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
  
  .projects-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .project-item {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    width: 300px;
    text-align: center;
    padding: 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .project-item:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: transform 0.3s;
  }
  
  .project-item:hover .project-image {
    transform: scale(1.08);
  }
  
  .project-title {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .project-desc {
    font-size: 1rem;
    color: #555;
  }
  
  /* Responsive */
  @media screen and (max-width: 768px) {
    .project-item {
      width: 45%;
    }
  }
  
  @media screen and (max-width: 480px) {
    .project-item {
      width: 90%;
    }
  }
  </style>
  