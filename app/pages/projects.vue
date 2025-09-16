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
    title: "80kW Corporate Building",
    image: "/projects/80kw Corporate Building (1).jpg",
  },
  {
    title: "300kW Project Plastic Industries",
    image: "/projects/300kw Project Plastic Industries.jpeg",
  },
  {
    title: "Common Society 10kW",
    image: "/projects/Common Society 10kw.jpg",
  },
  {
    title: "Solar Ground Mounted 1MW",
    image: "/projects/Solar-ground mounted 1mw.webp",
  },
  {
    title: "Textile Industries 180kW",
    image: "/projects/Textile Industries 180kW.jpg",
  },
];
</script>

<style scoped>
.projects-content {
  padding: 6rem 0;
  background: #ffffff;
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
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
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
  color: #092b47;
}
</style>
