<!-- pages/contact.vue -->
<template>
  <div>
    <PageHeader title="Contact Us" subtitle="Got Questions? We’ve Got Sun-Powered Answers." />

    <section class="contact-content">
  <div class="container">
    <div class="contact-grid">
      <!-- Contact Info -->
      <div class="contact-info card-3d">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Fill out the form or use the contact info below.</p>

        <ul class="contact-details space-y-4">

          <!-- Registered + Branch Offices -->
          <li class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
            </div>
            <div class="contact-content-details space-y-2">
              <p>
                <strong>Registered Office:</strong><br />
                <a href="https://www.google.com/maps?q=371/47,+Maniyasha+Soc,+Nr.+Madhav+Apartment,+Jasodanagar+Road,+Maninagar+East,+Ahmedabad+380008,+Gujarat,+India" 
                   target="_blank" rel="noopener noreferrer" class="hover:text-[#EFA72E] transition">
                  371/47, Maniyasha Soc, Nr. Madhav Apartment, Jasodanagar Road,<br />
                  Maninagar East, Ahmedabad 380008, Gujarat, India
                </a>
              </p>
              <p>
                <strong>Branch Office:</strong><br />
                <a href="https://www.google.com/maps?q=2,+Shivali+Apartment,+Nr.+Happy+Street,+B/S+Rangwala+Tower,+Law+Garden,+Elisbridge,+Ahmedabad+380006,+Gujarat,+India" 
                   target="_blank" rel="noopener noreferrer" class="hover:text-[#EFA72E] transition">
                  2, Shivali Apartment, Nr. Happy Street, B/S Rangwala Tower,<br />
                  Law Garden, Elisbridge, Ahmedabad 380006, Gujarat, India
                </a>
              </p>
            </div>
          </li>

          <!-- Phone 1 -->
          <li class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div class="contact-content-details">
              <h3>Phone</h3>
              <p><a href="tel:+917574858200" class="hover:text-[#EFA72E] transition">+91 75748 58200</a></p>
            </div>
          </li>

          <!-- Phone 2 -->
          <li class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z"/>
              </svg>
            </div>
            <div class="contact-content-details">
              <h3>Office</h3>
              <p><a href="tel:+919510594387" class="hover:text-[#EFA72E] transition">+91 95105 94387</a></p>
            </div>
          </li>

          <!-- Email -->
          <li class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div class="contact-content-details">
              <h3>Email</h3>
              <p><a href="mailto:info.rajkrishnaengineering@gmail.com" class="hover:text-[#EFA72E] transition">info.rajkrishnaengineering@gmail.com</a></p>
            </div>
          </li>

        </ul>

        <!-- Social Links -->
        <div class="social-section">
          <h3>Follow Us</h3>
          <div class="social-links">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License -->
                    <path
                      fill="currentColor"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License -->
                    <path
                      fill="currentColor"
                      d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ashutosh-patel-21560464/" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License -->
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    />
                  </svg>
                </a>
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

          <button type="submit" class="send-msg-btn">Send Message</button>
        </form>
      </div>

    </div>
  </div>
</section>


    <!-- Map -->
    <div class="map card-3d">
      <iframe
        src="https://www.google.com/maps?q=Shivali+Apartment,+Nr.+Happy+Street,+B/S+Rangwala+Tower,+Law+Garden,+Ellisbridge,+Ahmedabad+380006&hl=en&z=16&output=embed"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
  <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        class="w-16 h-16"
      />
    </a>
</template>

<script setup>
import { useHead } from "nuxt/app";
import { reactive } from "vue";

useHead({ title: "Contact Us" });

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", formData);
  Object.assign(formData, {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
};
</script>

<style scoped>
.contact-content-details p {
  margin: 0 !important;
}

.send-msg-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  background: linear-gradient(135deg, #efa72e, #2c3e50);
  color: #fff;
  transition: transform 0.7s ease;
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
}

.send-msg-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(20deg, #efa72e, #2c3e50);
  color: #fff;
}

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
/* .card-3d:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2);
} */

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
  margin-bottom: 40px;
}
.contact-icon {
  width: 50px;
  min-width: 50px;
  height: 55px;
  background: linear-gradient(135deg, #efa72e, #66bb6a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  box-shadow: 0 5px 12px rgba(76, 175, 80, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}
.contact-icon:hover {
  transform: rotate(10deg) scale(1.1);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.5);
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
  background: linear-gradient(135deg, #efa72e, #2c3e50);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}
.social-links a:hover {
  transform: scale(1.15) rotate(-10deg);
  box-shadow: 0 8px 20px #2c3e50;
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
  border-color: #efa72e;
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
  color: #efa72e;
  padding: 0 0.3rem;
}

/* Button */
.btn-3d {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  background: linear-gradient(135deg, #efa72e, #66bb6a);
  color: #fff;
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-3d:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.4);
}

/* Map */
.map {
  margin-top: 4rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
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
  border-color: #efa72e; /* accent border on hover */
}

/* Contact Icon */
.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #efa72e, #66bb6a);
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
  background: linear-gradient(135deg, #efa72e, #2c3e50);
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
  border-color: #efa72e;
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
  background: linear-gradient(135deg, #efa72e, #66bb6a);
  color: #fff;
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-modern:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
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
  color: #efa72e;
  font-size: 1.4rem;
  background: none; /* ✅ remove background box */
  border: none; /* ✅ no border */
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
  background: #ffffff;
}

/* Card with 3D Effect */
.card-3d {
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s, box-shadow 0.4s;
}
/* .card-3d:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
} */

/* Contact Info */
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #092b47; /* Blue */
}
.contact-info p {
  color: #092b47;
  margin-bottom: 2rem;
  line-height: 1.7;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 30px;
}
.contact-icon {
  width: 50px;
  height: 50px;
  background: #efa72e; /* Yellow/Orange */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.3rem;
  transition: transform 0.3s;
  padding: 12px;
}
.contact-icon:hover {
  transform: scale(1.1) rotate(10deg);
}

/* Social Links */
.social-links a {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #efa72e; /* Yellow/Orange */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: transform 0.3s, box-shadow 0.3s;
}
.social-links a:hover {
  transform: scale(1.15) rotate(-10deg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Form Inputs */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #efa72e; /* highlight border */
  border-radius: 12px;
  background: #ffffff;
  color: #092b47; /* Blue text */
  transition: all 0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #092b47; /* Blue focus */
  box-shadow: 0 0 10px rgba(9, 43, 71, 0.2);
  outline: none;
}
.form-group label {
  color: #092b47; /* Blue label */
}

/* Button */
.btn-3d {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  background: linear-gradient(135deg, #efa72e, #ffd166); /* warm gradient */
  color: #ffffff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-3d:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

/* Map */
.map {
  margin-top: 4rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
