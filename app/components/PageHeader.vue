<!-- components/PageHeader.vue -->
<template>
    <section class="page-header">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </section>
  </template>
  
  <script setup >
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style scoped>
  .page-header {
    background: linear-gradient(135deg, #4CAF50 0%, #2c3e50 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .page-header p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .page-header {
      padding: 3rem 0;
    }
    
    .page-header h1 {
      font-size: 2.5rem;
    }
  }
  </style>