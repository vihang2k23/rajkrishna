<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo.png" alt="Rajkrishna Logo" />
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <nav class="navigation">
        <ul>
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              :class="{ 'active-nav-item': isActive(item) }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Make in India Image (Desktop only) -->
      <div class="make-in-india hidden md:block">
        <img src="/makeinindia.png" alt="Make in India" />
      </div>

      <!-- Mobile Menu Button -->
      <div
        class="mobile-menu-button"
        :class="{ open: mobileMenuOpen }"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <ul>
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink :to="item.path" @click="toggleMobileMenu">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Make in India Image inside Mobile Menu -->
        <!-- <div class="mt-6 text-center">
          <img src="/makeinindia.png" alt="Make in India" class="mx-auto w-40" />
        </div> -->
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/solar-epc", label: "Solar EPC" },
  { path: "/contact", label: "Contact Us" },
];

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const isActive = (item) => {
  return item.path === route.path;
};
</script>

<style scoped>
/* Header Wrapper */
.header {
  background: #ffffff; /* White background */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

/* Layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.logo img {
  height: 75px;
  transition: transform 0.3s ease;
}
.logo img:hover {
  transform: scale(1.05);
}

/* Desktop Navigation */
.navigation ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.navigation a {
  text-decoration: none;
  color: #092b47; /* Blue text */
  font-weight: 500;
  font-size: 18px;
  position: relative;
  transition: color 0.3s;
}
.navigation a:hover,
.navigation a.active-nav-item {
  color: #efa72e; /* Yellow on hover */
}
.navigation a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: #efa72e; /* Yellow underline */
  transition: width 0.3s;
}
.navigation a:hover::after,
.navigation a.nuxt-link-active::after {
  width: 100%;
}
/* Make in India Image */
.make-in-india img {
  height: 50px;
  object-fit: contain;
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 110;
}
.mobile-menu-button span {
  width: 26px;
  height: 3px;
  background: #092b47; /* Blue bars */
  margin: 4px 0;
  border-radius: 4px;
  transition: 0.4s;
}
/* Animate into "X" when open */
.mobile-menu-button.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-menu-button.open span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-button.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  background: #ffffff; /* White dropdown */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}
.mobile-menu ul {
  list-style: none;
  padding: 0;
}
.mobile-menu a {
  display: block;
  padding: 0.8rem 0;
  text-decoration: none;
  color: #092b47; /* Blue text */
  font-weight: 500;
  border-bottom: 1px solid #eee;
  transition: color 0.3s;
}
.mobile-menu a:hover {
  color: #efa72e; /* Yellow hover */
}

/* Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .navigation {
    display: none;
  }
  .mobile-menu-button {
    display: flex;
  }
}
</style>
