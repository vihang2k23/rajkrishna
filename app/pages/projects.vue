<!-- pages/projects.vue -->
<template>
    <div>
      <PageHeader title="Our Projects" subtitle="Explore our completed sustainable initiatives" />
  
      <section class="projects-content">
        <div class="container">
          <div class="projects-grid">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="project-card"
              :class="{ reverse: index % 2 !== 0 }"
            >
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
              </div>
              <div class="project-details">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <ul>
                  <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
                </ul>
                <!-- <NuxtLink :to="project.link" class="btn btn-primary">Learn More</NuxtLink> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      title: 'Solar Farm Development',
      description: 'Large-scale solar farm installation providing clean energy to 10,000+ homes.',
      features: [
        'Installed 5 MW solar panels',
        'Optimized energy storage solutions',
        'Local community engagement',
      ],
      image: '/image.png',
      link: '/projects/solar-farm'
    },
    {
      title: 'Green Building Initiative',
      description: 'Eco-friendly office complex reducing energy consumption by 40%.',
      features: [
        'LEED-certified construction',
        'Solar panels & green roofs',
        'Energy-efficient lighting and HVAC',
      ],
      image: '/image.png',
      link: '/projects/green-building'
    },
    {
      title: 'Wind Energy Project',
      description: 'Innovative wind turbine installation supplying renewable energy to local industries.',
      features: [
        'Installed 20 turbines',
        'Integrated smart monitoring',
        'Reduced carbon footprint by 25%',
      ],
      image: '/image.png',
      link: '/projects/wind-energy'
    },
  ];
  </script>
  
  <style scoped>
  .projects-content {
    padding: 6rem 0;
    background: linear-gradient(135deg, #e0f7f1 0%, #ffffff 100%);
  }
  
  .projects-grid {
    display: grid;
    gap: 4rem;
  }
  
  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
  
  .project-card.reverse {
    direction: rtl;
  }
  
  .project-card.reverse > * {
    direction: ltr;
  }
  
  .project-image img {
    width: 100%;
    border-radius: 0;
    transition: transform 0.5s;
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-details {
    padding: 2rem;
  }
  
  .project-details h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #EFA72E, #81C784);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .project-details p {
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .project-details ul {
    list-style: none;
    margin-bottom: 1.5rem;
  }
  
  .project-details li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    color: #555;
  }
  
  .project-details li:before {
    content: '•';
    color: #EFA72E;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
  
  .btn-primary {
    display: inline-block;
    background: linear-gradient(90deg, #EFA72E, #81C784);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(76, 175, 80, 0.4);
  }
  
  @media (max-width: 968px) {
    .project-card {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  
    .project-card.reverse {
      direction: ltr;
    }
  }
  .projects-content {
  padding: 6rem 0;
  background: #FFFFFF; /* white background */
}

.projects-grid {
  display: grid;
  gap: 4rem;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.15);
}

.project-card.reverse {
  direction: rtl;
}

.project-card.reverse > * {
  direction: ltr;
}

.project-image img {
  width: 100%;
  border-radius: 0;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-details {
  padding: 2rem;
}

.project-details h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #092B47; /* Blue title */
}

.project-details p {
  color: #092B47; /* Blue text */
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-details ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

.project-details li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: #092B47; /* Blue text */
}

.project-details li:before {
  content: '•';
  color: #EFA72E; /* Yellow/Orange bullet */
  position: absolute;
  left: 0;
  font-weight: bold;
}

.btn-primary {
  display: inline-block;
  background: #EFA72E; /* Yellow/Orange button */
  color: #FFFFFF;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(239,167,46,0.4); /* subtle yellow glow */
}

@media (max-width: 968px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card.reverse {
    direction: ltr;
  }
}

  </style>
  