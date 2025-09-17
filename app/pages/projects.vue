<template>
  <div>
    <PageHeader title="Our Projects" subtitle="Engineering Energy with Precision." />

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
  <p>⚡ {{ project.capacity }}</p>
  <p>🏢 {{ project.type }}</p>
  <p>📊 {{ project.units }}</p>
  <p>🗓️ {{ project.year }}</p>
</div>

          </div>
        </div>
      </div>
    </section>
  </div>
   <!-- Floating WhatsApp Button -->
   <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        class="w-16 h-16"
      />
    </a>
</template>

<script setup>
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
.project-details p {
  margin: 0.5rem 0;
  color: #555;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

</style>
