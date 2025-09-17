<template>
  <section class="projects">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Our Projects</h2>
        <p>
          Explore some of the sustainable projects we have successfully
          completed.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-slider">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-item"
        >
          <div class="image-wrapper">
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            />
            <button @click="router.push('/projects')" class="overlay cursor-pointer">
              <span class="view-text">View More</span>
            </button>
          </div>

          <div class="project-details">
            <h2>{{ project.title }}</h2>
            <p>⚡ {{ project.capacity }}</p>
            <p>🏢 {{ project.type }}</p>
            <p>📊 {{ project.units }}</p>
            <p>🗓️ {{ project.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()

const projects = [
  {
    title: "Corporate Building – 80kW, Ahmedabad",
    image: "/projects/80kw Corporate Building (1).jpg",
    capacity: "80 kW",
    type: "Corporate Building",
    units: "1,16,800 units/Year",
    year: 2022,
  },
  {
    title: "Industrial – 300kW, Gujarat",
    image: "/projects/300kw Project Plastic Industries.jpeg",
    capacity: "300 kW",
    type: "Plastic Industries",
    units: "4,38,000 units/Year",
    year: 2021,
  },
  {
    title: "Residential Rooftop – 10kW, Ahmedabad",
    image: "/projects/Common Society 10kw.jpg",
    capacity: "10 kW",
    type: "Common Society Project",
    units: "14,600 units/Year",
    year: 2024,
  },
  {
    title: "Ground Mounted – 1MW, Gujarat",
    image: "/projects/Solar-ground mounted 1mw.webp",
    capacity: "1 MW",
    type: "Ground Mounted Project",
    units: "14,60,000 units/Year",
    year: 2021,
  },
  {
    title: "Industrial – 180kW, Ahmedabad",
    image: "/projects/Textile Industries 180kW.jpg",
    capacity: "180 kW",
    type: "Textile Industries",
    units: "2,62,800 units/Year",
    year: 2023,
  },
];
</script>

<style scoped>
.projects {
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #f0f4f8, #e8f5e9);  
  position: relative;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  color: #092B47;
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* Grid */
.projects-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  justify-content: center;
}

/* Project Card */
.project-item {
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  padding: 1.5rem 1rem;
  box-shadow: 0 8px 25px rgba(9, 43, 71, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
}

.project-item:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 40px rgba(9, 43, 71, 0.25);
}

/* Image with Overlay */
.image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-item:hover .project-image {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(239, 167, 46, 0.85),
    rgba(9, 43, 71, 0.4)
  );
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

.view-text {
  color: #FFFFFF;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  background: rgba(9, 43, 71, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

/* Project Details */
.project-details {
  text-align: left;
  padding: 0 0.5rem;
}

.project-details h2 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #092B47;
  margin-bottom: 0.5rem;
}

.project-details p {
  font-size: 1rem;
  margin: 0.2rem 0;
  color: #092B47;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .section-header h2 {
    font-size: 2.2rem;
  }
}
</style>
