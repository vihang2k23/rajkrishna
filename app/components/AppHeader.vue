<!-- components/AppHeader.vue -->
<template>
    <header class="header">
      <div class="container">
        <div class="logo">
          <NuxtLink to="/">
            <img src="/logo.png" alt="Ataru Renew Logo" />
          </NuxtLink>
        </div>
        <nav class="navigation">
          <ul>
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="mobile-menu-button" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <ul>
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink :to="item.path" @click="toggleMobileMenu">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup >
import { ref } from 'vue';


  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]
  
  const mobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  </script>
  
  <style scoped>
  .header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo img {
    height: 50px;
  }
  
  .navigation ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  
  .navigation a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .navigation a:hover,
  .navigation a.nuxt-link-active {
    color: #4CAF50;
  }
  
  .mobile-menu-button {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .mobile-menu-button span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
  }
  
  .mobile-menu {
    display: none;
    background: #fff;
    padding: 1rem;
  }
  
  .mobile-menu ul {
    list-style: none;
  }
  
  .mobile-menu a {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .navigation {
      display: none;
    }
    
    .mobile-menu-button {
      display: flex;
    }
    
    .mobile-menu {
      display: block;
    }
  }
  </style>