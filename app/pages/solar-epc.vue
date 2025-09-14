<!-- pages/solarepc.vue -->
<template>
    <div>
      <PageHeader title="Solar EPC Solutions" subtitle="Comprehensive Solar Energy Offerings" />
  
      <section class="projects-content">
        <div class="container">
          <div class="projects-grid">
            <div
              v-for="(solution, index) in solarSolutions"
              :key="index"
              class="project-card"
              :class="{ reverse: index % 2 !== 0 }"
            >
              <div class="project-image">
                <img :src="solution.image" :alt="solution.title" />
              </div>
              <div class="project-details">
                <h2>{{ solution.title }}</h2>
                <p>{{ solution.description }}</p>
                <ul>
                  <li v-for="(feature, i) in solution.features" :key="i">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const solarSolutions = [
    {
      title: "Solar Technology",
      description: "Advanced technologies to harness solar power efficiently.",
      features: [
        "Solar On-Grid System",
        "Solar Micro Inverter",
        "Solar DC Optimizer",
        "Solar Off-Grid System",
      ],
      image: "/solar-tech.png",
    },
    {
      title: "Solar Rooftop",
      description: "Customized rooftop solar solutions for homes and businesses.",
      features: ["Residential", "Commercial & Industrial"],
      image: "/solar-rooftop.png",
    },
    {
      title: "Solar O&M",
      description: "Operation & Maintenance for long-term system performance.",
      features: ["Solar Power System O&M"],
      image: "/solar-om.png",
    },
    {
      title: "Solar Utility Scale",
      description: "Large-scale solar power plants for sustainable energy generation.",
      features: [
        "Solar Captive Purpose",
        "Solar Group Captive",
        "Solar Third-Party Sale",
        "Solar and Wind Hybrid System",
        "Solar with Bess Energy Storage System",
        "Solar (IEX) Power Sell to Exchange",
      ],
      image: "/solar-utility.png",
    },
    {
      title: "Solar Specialized Applications",
      description: "Tailored solar solutions for diverse industries and infrastructures.",
      features: [
        "Solar Mobile Towers",
        "Solar for Agriculture",
        "Solar for Highway Infrastructure",
        "Solar for EV Infrastructure",
        "Solar for Smart Cities",
        "Solar for Communication (Micro and Small)",
      ],
      image: "/solar-specialized.png",
    },
  ];
  </script>
  
  <style scoped>
  .projects-content {
    padding: 6rem 0;
    background: #FFFFFF;
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
    color: #092B47;
  }
  .project-details p {
    color: #092B47;
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
    color: #092B47;
  }
  .project-details li:before {
    content: '•';
    color: #EFA72E;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
  </style>
  