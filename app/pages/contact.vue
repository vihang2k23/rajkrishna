<!-- pages/contact.vue -->
<template>
  <div>
    <PageHeader title="Contact Us" subtitle="Get in touch with our team" />

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info card">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Fill out the form or use the contact info below.</p>

            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon floating">
                  <Icon name="mdi:map-marker" />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>123 Green Street, Eco City, EC 12345</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon floating">
                  <Icon name="mdi:phone" />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon floating">
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

          <!-- Contact Form -->
          <div class="contact-form card">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" id="name" v-model="formData.name" required />
                <label for="name">Full Name</label>
              </div>

              <div class="form-group">
                <input type="email" id="email" v-model="formData.email" required />
                <label for="email">Email Address</label>
              </div>

              <div class="form-group">
                <input type="tel" id="phone" v-model="formData.phone" />
                <label for="phone">Phone Number</label>
              </div>

              <div class="form-group">
                <input type="text" id="subject" v-model="formData.subject" required />
                <label for="subject">Subject</label>
              </div>

              <div class="form-group">
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                <label for="message">Message</label>
              </div>

              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <div class="map card">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621465758367!2d-74.0059493486781!3d40.71278267922514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e1c2c0e29%3A0x564c3c64c3a3a1!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1645229877671!5m2!1sen!2sus" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { reactive } from 'vue';

useHead({ title: 'Contact Us' });

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', formData);
  Object.assign(formData, { name: '', email: '', phone: '', subject: '', message: '' });
};
</script>

<style scoped>
/* Overall Section */
.contact-content {
  padding: 6rem 0;
  background: linear-gradient(135deg, #e0f7f1 0%, #ffffff 100%);
}

/* Grid Layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

/* Contact Info */
.contact-info h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #4CAF50, #81C784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-info p {
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.8;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-icon:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 25px rgba(76,175,80,0.3);
}

.contact-icon :deep(svg) {
  width: 28px;
  height: 28px;
  color: #fff;
}

/* Social Section */
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
  transition: transform 0.3s, box-shadow 0.3s;
}

.social-links a:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 25px rgba(76,175,80,0.3);
}

.social-links :deep(svg) {
  width: 24px;
  height: 24px;
  color: #fff;
}

/* Form Styles */
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background: #f9f9f9;
  transition: all 0.3s;
}

.form-group label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #777;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4CAF50;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -0.5rem;
  left: 1rem;
  font-size: 0.85rem;
  color: #4CAF50;
  background: #fff;
  padding: 0 0.25rem;
}

/* Buttons */
.btn-primary {
  display: inline-block;
  background: linear-gradient(90deg, #4CAF50, #81C784);
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(76, 175, 80, 0.4);
}

/* Map Styling */
.map {
  margin-top: 4rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
