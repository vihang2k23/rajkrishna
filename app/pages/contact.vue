<!-- pages/contact.vue -->
<template>
    <div>
      <PageHeader title="Contact Us" subtitle="Get in touch with our team" />
      
      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Please fill out the form or use the contact information below.</p>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">
                    <Icon name="mdi:map-marker" />
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>123 Green Street, Eco City, EC 12345</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <Icon name="mdi:phone" />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <Icon name="mdi:email" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>info@rajkrishna.com</p>
                  </div>
                </div>
              </div>
              
              <div class="social-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                  <a href="#"><Icon name="fa6-brands:facebook" /></a>
                  <a href="#"><Icon name="fa6-brands:twitter" /></a>
                  <a href="#"><Icon name="fa6-brands:linkedin" /></a>
                  <a href="#"><Icon name="fa6-brands:instagram" /></a>
                </div>
              </div>
            </div>
            
            <div class="contact-form">
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" v-model="formData.name" required />
                </div>
                
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" v-model="formData.email" required />
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" v-model="formData.phone" />
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" v-model="formData.subject" required />
                </div>
                
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621465758367!2d-74.0059493486781!3d40.71278267922514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e1c2c0e29%3A0x564c3c64c3a3a1!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1645229877671!5m2!1sen!2sus" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </template>
  
  <script setup >
import { useHead } from 'nuxt/app';
import { reactive } from 'vue';

  useHead({
    title: 'Contact Us'
  })
  
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const submitForm = () => {
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    // Reset form
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }
  </script>
  
  <style scoped>
  .contact-content {
    padding: 5rem 0;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .contact-info h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  }
  
  .contact-info > p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .contact-details {
    margin-bottom: 2rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    background: #4CAF50;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .contact-icon :deep(svg) {
    width: 24px;
    height: 24px;
    color: white;
  }
  
  .contact-item h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .contact-item p {
    color: #555;
  }
  
  .social-section h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-links a {
    width: 50px;
    height: 50px;
    background: #4CAF50;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }
  
  .social-links a:hover {
    background: #3e8e41;
  }
  
  .social-links :deep(svg) {
    width: 24px;
    height: 24px;
    color: white;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 600;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4CAF50;
  }
  
  .map {
    height: 400px;
  }
  
  @media (max-width: 968px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
  </style>