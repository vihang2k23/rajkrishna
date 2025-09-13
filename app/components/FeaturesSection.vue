<template>
  <section class="features">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Why Choose Rajkrishna</h2>
        <p>
          We are committed to sustainable solutions that benefit both people and
          planet
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon">
            <div v-html="feature.icon"></div>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M5.4 19.6Q4.275 18.475 3.637 17T3 13.95t.6-3.112T5.55 7.95q1.5-1.5 4.238-2.275t7.087-.65q.65.025 1.2.275t.975.675t.675.988T20 8.175q.05 2.05-.112 3.788t-.526 3.137t-.924 2.488T17.1 19.45q-1.325 1.325-2.812 1.938T11.25 22q-1.625 0-3.175-.638T5.4 19.6m2.8-.4q.725.425 1.488.613T11.25 20q1.15 0 2.275-.462t2.15-1.488q.45-.45.913-1.263t.8-2.124t.512-3.175t.05-4.438q-1.225-.05-2.762-.037t-3.063.237t-2.9.725t-2.25 1.375q-1.125 1.125-1.55 2.225T5 13.7q0 1.475.563 2.588t.987 1.562q1.05-2 2.775-3.838T13.35 11q-1.8 1.575-3.137 3.563T8.2 19.2m0 0"/></svg>`,
    title: "Eco-Friendly Solutions",
    description:
      "Our approaches prioritize environmental sustainability and minimal ecological impact.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Pixel Icon by HackerNoon - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z"/><path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z"/></svg>`,
    title: "Innovative Technology",
    description:
      "We utilize cutting-edge technology to deliver efficient and effective renewal solutions.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Ultimate free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m14.461 17.471l-2.3-2.3a1.28 1.28 0 0 1 0-1.839l3.4-2.69a1.366 1.366 0 0 1 1.838 0l2 2a5.2 5.2 0 0 1 1.258 2.035l.529 1.591l2.069 2.068"/><path d="m12.9 15.9l-.434.433a2 2 0 0 0 .014 2.843l.876.858l2.949 1.11l2.068 2.068M9.539 6.529l2.3 2.3a1.28 1.28 0 0 1 0 1.839l-3.4 2.69a1.366 1.366 0 0 1-1.838 0l-2-2a5.2 5.2 0 0 1-1.253-2.033l-.529-1.591L.75 5.666"/><path d="m11.105 8.1l.434-.433a2 2 0 0 0-.014-2.843l-.876-.858L7.7 2.852L5.632.784M18.5 4.534l1.5-1.5m-4.5 0v-2m4.5 6.5h2m-17 10.5l-1.5 1.5m4.5 0v2m-4.5-6.5h-2"/></g></svg>`,
    title: "Expert Team",
    description:
      "Our team of specialists brings years of experience in sustainable development.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><!-- Icon from Carbon by IBM - undefined --><path fill="currentColor" d="M8 9a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m16 6a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m2 27h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L16 20l-4.58-8H5a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L16 16l3.42-6H27a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2"/></svg>`,
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships with clients to ensure ongoing success and support.",
  },
];
</script>
<style scoped>
.features {
  padding: 6rem 1rem;
  background: #ffffff; /* Clean white */
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.2rem;
  color: #555;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
}

/* Feature Card */
.feature-card {
  background: #fff;
  padding: 2.8rem 2rem;
  border-radius: 24px;
  border: 1px solid #eee;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(239, 167, 46, 0.08), transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
  z-index: 0;
}

.feature-card:hover::before {
  transform: scale(1);
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

/* Icon */
.feature-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #EFA72E, #092B47);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.feature-card:hover .feature-icon {
  transform: rotate(10deg) scale(1.15);
}

.feature-icon :deep(svg) {
  width: 46px;
  height: 46px;
  color: #fff;
}

/* Title & Description */
.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #092B47;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .features {
    padding: 4rem 1rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }

  .feature-icon {
    width: 75px;
    height: 75px;
  }

  .feature-icon :deep(svg) {
    width: 36px;
    height: 36px;
  }
}
.features {
  padding: 6rem 1rem;
  background: #FFFFFF; /* clean white */
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.2rem;
  color: #092B47; /* Blue for text */
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
}

/* Feature Card */
.feature-card {
  background: #FFFFFF;
  padding: 2.8rem 2rem;
  border-radius: 24px;
  border: 1px solid #eee;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(239, 167, 46, 0.08), transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
  z-index: 0;
}

.feature-card:hover::before {
  transform: scale(1);
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

/* Icon */
.feature-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #EFA72E, #092B47); /* Yellow → Blue gradient */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.feature-card:hover .feature-icon {
  transform: rotate(10deg) scale(1.15);
}

.feature-icon :deep(svg) {
  width: 46px;
  height: 46px;
  color: #FFFFFF; /* icons white on gradient */
}

/* Title & Description */
.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #092B47; /* Blue title */
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: #092B47; /* Blue description */
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .features {
    padding: 4rem 1rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }

  .feature-icon {
    width: 75px;
    height: 75px;
  }

  .feature-icon :deep(svg) {
    width: 36px;
    height: 36px;
  }
}

</style>



