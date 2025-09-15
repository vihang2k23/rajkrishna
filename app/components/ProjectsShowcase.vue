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

      <!-- Projects Grid / Slider -->
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
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()
const projects = [
  {
    title: "Solar Farm Development",
    description:
      "A large-scale solar farm providing clean energy to over 5000 homes.",
    image: "/image.png",
  },
  {
    title: "Eco-Friendly Housing",
    description:
      "Sustainable residential buildings with energy-efficient designs.",
    image: "/image.png",
  },
  {
    title: "Community Wind Project",
    description:
      "A community-based wind energy initiative supporting local power needs.",
    image: "/image.png",
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

/* Title & Description */
.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #092B47;
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 1rem;
  color: #333333;
  line-height: 1.6;
  padding: 0 0.5rem;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .section-header h2 {
    font-size: 2.2rem;
  }
}
</style>

