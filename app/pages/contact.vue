<!-- pages/contact.vue -->
<template>
  <div>
    <PageHeader title="Contact Us" subtitle="Get in touch with our team" />

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info card-3d">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Fill out the form or use the contact info below.</p>

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

          <!-- Contact Form -->
          <div class="contact-form card-3d">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" id="name" v-model="formData.name" required placeholder=" " />
                <label for="name">Full Name</label>
              </div>

              <div class="form-group">
                <input type="email" id="email" v-model="formData.email" required placeholder=" " />
                <label for="email">Email Address</label>
              </div>

              <div class="form-group">
                <input type="tel" id="phone" v-model="formData.phone" placeholder=" " />
                <label for="phone">Phone Number</label>
              </div>

              <div class="form-group">
                <input type="text" id="subject" v-model="formData.subject" required placeholder=" " />
                <label for="subject">Subject</label>
              </div>

              <div class="form-group">
                <textarea id="message" v-model="formData.message" rows="5" required placeholder=" "></textarea>
                <label for="message">Message</label>
              </div>

              <button type="submit" class="btn-3d">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <div class="map card-3d">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
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
/* Background */
.contact-content {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f0f9f6, #e0f2f1, #ffffff);
}

/* Grid Layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Card with 3D Effect */
.card-3d {
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s, box-shadow 0.4s;
}
.card-3d:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2);
}

/* Contact Info */
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2e7d32;
}
.contact-info p {
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.7;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.contact-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  box-shadow: 0 5px 12px rgba(76,175,80,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}
.contact-icon:hover {
  transform: rotate(10deg) scale(1.1);
  box-shadow: 0 8px 20px rgba(76,175,80,0.5);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.social-links a {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}
.social-links a:hover {
  transform: scale(1.15) rotate(-10deg);
  box-shadow: 0 8px 20px rgba(76,175,80,0.4);
}

/* Form Inputs */
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 1rem;
  background: #f9f9f9;
  transition: all 0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #EFA72E;
  background: #fff;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.2);
  outline: none;
}
.form-group label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #777;
  font-size: 1rem;
  transition: all 0.3s;
}
.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  background: #fff;
  color: #EFA72E;
  padding: 0 0.3rem;
}

/* Button */
.btn-3d {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  color: #fff;
  box-shadow: 0 6px 15px rgba(76,175,80,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-3d:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(76,175,80,0.4);
}

/* Map */
.map {
  margin-top: 4rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
/* Card - modern flat style */
.card-flat {
  background: #fff;
  border: 1px solid #e5e7eb; /* subtle gray border */
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.25s, border-color 0.25s;
}
.card-flat:hover {
  transform: translateY(-4px);
  border-color: #EFA72E; /* accent border on hover */
}

/* Contact Icon */
.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.25s;
}
.contact-icon:hover {
  transform: scale(1.1);
}

/* Social Links */
.social-links a {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: background 0.3s, transform 0.3s;
}
.social-links a:hover {
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  color: #fff;
  transform: translateY(-2px);
}

/* Form Inputs */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #EFA72E;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);
  outline: none;
}

/* Button */
.btn-modern {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  background: linear-gradient(135deg, #EFA72E, #66bb6a);
  color: #fff;
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-modern:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(76,175,80,0.3);
}
/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EFA72E;
  font-size: 1.4rem;
  background: none; /* ✅ remove background box */
  border: none;     /* ✅ no border */
  box-shadow: none; /* ✅ no shadow */
  transition: transform 0.25s;
}

.contact-icon:hover {
  transform: scale(1.1); /* just a little bounce */
}

.contact-item h3 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.contact-item p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}
/* Background */
.contact-content {
  padding: 6rem 0;
  background: #FFFFFF;
}

/* Card with 3D Effect */
.card-3d {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s, box-shadow 0.4s;
}
.card-3d:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
}

/* Contact Info */
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #092B47; /* Blue */
}
.contact-info p {
  color: #092B47;
  margin-bottom: 2rem;
  line-height: 1.7;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.contact-icon {
  width: 50px;
  height: 50px;
  background: #EFA72E; /* Yellow/Orange */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 1.3rem;
  transition: transform 0.3s;
}
.contact-icon:hover {
  transform: scale(1.1) rotate(10deg);
}

/* Social Links */
.social-links a {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #EFA72E; /* Yellow/Orange */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  transition: transform 0.3s, box-shadow 0.3s;
}
.social-links a:hover {
  transform: scale(1.15) rotate(-10deg);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Form Inputs */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #EFA72E; /* highlight border */
  border-radius: 12px;
  background: #FFFFFF;
  color: #092B47; /* Blue text */
  transition: all 0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #092B47; /* Blue focus */
  box-shadow: 0 0 10px rgba(9,43,71,0.2);
  outline: none;
}
.form-group label {
  color: #092B47; /* Blue label */
}

/* Button */
.btn-3d {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  background: linear-gradient(135deg, #EFA72E, #FFD166); /* warm gradient */
  color: #FFFFFF;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-3d:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* Map */
.map {
  margin-top: 4rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}


</style>
