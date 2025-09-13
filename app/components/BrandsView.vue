<template>
    <section class="brands">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <h2>Brands We Have</h2>
          <p>We partner with leading brands to deliver sustainable solutions</p>
        </div>
  
        <!-- Brands Grid -->
        <div class="brands-grid">
          <div v-for="(brand, index) in brands" :key="index" class="brand-card">
            <img :src="brand.image" :alt="brand.name" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const brands = [
    { name: "Brand 1", image: "/brands/abb-logo.svg" },
    { name: "Brand 2", image: "/brands/adani-logo.svg" },
    { name: "Brand 3", image: "/brands/Havells_Logo.svg" },
    { name: "Brand 4", image: "/brands/Polycab.png" },
    { name: "Brand 5", image: "/brands/brand5.png" },
    { name: "Brand 6", image: "/brands/brand6.png" },
  ];
  </script>
  
  <style scoped>
  .brands {
    padding: 6rem 1rem;
    background: #f8f8f8;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-header h2 {
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(90deg, #092B47, #EFA72E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }
  
  .section-header p {
    font-size: 1.2rem;
    color: #555;
    max-width: 650px;
    margin: 0 auto;
    line-height: 1.8;
  }
  
  /* Brands Grid */
  .brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
  
  /* Brand Card */
  .brand-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .brand-card img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
  }
  
  .brand-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    .brand-card img {
      max-width: 90px;
      max-height: 45px;
    }
  }
  </style>
  