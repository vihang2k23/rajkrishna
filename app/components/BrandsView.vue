<template>
    <section class="brands">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <h2>Brands We Have</h2>
          <p>We partner with leading brands to deliver sustainable solutions</p>
        </div>
  
        <!-- Brands Grid -->
        <div class="slider">
          <!-- <div class="slide-track2"> -->
        <div class="brands-grid slide-track2">
          <div v-for="(brand, index) in brands" :key="index" class="brand-card slide">
            <img :src="brand.image" :alt="brand.name" />
          </div>
        </div>
      </div>
    </div>
    </section>
  </template>
  
  <script setup>
  const brands = [
    { name: "Brand 1", image: "/brands/abb-logo.png" },
    { name: "Brand 2", image: "/brands/adani-logo.svg" },
    { name: "Brand 3", image: "/brands/havells-logo-2.png" },
    { name: "Brand 4", image: "/brands/Polycab.png" },
    { name: "Brand 5", image: "/brands/Waaree-logo.png" },
    { name: "Brand 6", image: "/brands/sofar-logo.jpg" },
    { name: "Brand 1", image: "/brands/abb-logo.png" },
    { name: "Brand 2", image: "/brands/adani-logo.svg" },
    { name: "Brand 3", image: "/brands/havells-logo-2.png" },
    { name: "Brand 4", image: "/brands/Polycab.png" },
    { name: "Brand 5", image: "/brands/Waaree-logo.png" },
    { name: "Brand 6", image: "/brands/sofar-logo.jpg" },
    { name: "Brand 1", image: "/brands/abb-logo.png" },
    { name: "Brand 2", image: "/brands/adani-logo.svg" },
    { name: "Brand 3", image: "/brands/havells-logo-2.png" },
    { name: "Brand 4", image: "/brands/Polycab.png" },
    { name: "Brand 5", image: "/brands/Waaree-logo.png" },
    { name: "Brand 6", image: "/brands/sofar-logo.jpg" },
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
    gap: 5rem;
    justify-items: center;
    align-items: center;
  }
  
  /* Brand Card */
  /* .brand-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  } */
  
  .brand-card img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
  }
  
  /* .brand-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  } */
  
  @media (max-width: 768px) {
    .brand-card img {
      max-width: 90px;
      max-height: 45px;
    }
    .brands-grid {
      gap: 2rem;
    }
  }


  /* From Codepen Slider */

  .slider {
  height: 60px;
  position: relative;
  width: 100%;
  display: flex;  
  place-items: center;
  overflow: hidden;
}
.slider::before,
.slider::after{
  position:absolute;
  background-image:linear-gradient(to right,rgb(248,248,248) 0%,rgba(255,255,255,0) 100%);
  content:'';
  height:100%;width:25%;
  z-index:2;pointer-events:none;
}
.slider::before{
  left:0;
  top:0;
}
.slider::after{
  right:0;
  top:0;
  transform:rotateZ(180deg);
}

/*  IMPORTANT CODE BELOW */

.slide-track2 {
  width: calc(150px * 15);
  display: flex;
  animation: scroll2 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-150px * 10));
  }
}

@keyframes scroll2 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-150px * 5));
  }
}

@media screen and (max-width: 768px) {
  .slide-track {
    width: calc(80px * 20);
  }

  .slide-track2 {
    width: calc(80px * 15);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 10));
    }
  }

  @keyframes scroll2 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 5));
    }
  }
}

  </style>
  