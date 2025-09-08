<!-- layouts/default.vue -->
<template>
    <div class="app-container">
      <AppHeader />
      <main>
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup >
  // Default layout with header and footer
  </script>
  
  <style scoped>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
  </style>