<!-- components/TeamSection.vue -->
<template>
  <section class="team">
    <div class="team-background"></div>
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="gradient-text">Our Leadership Team</h2>
        <p>Meet the experts driving our mission forward</p>
      </div>

      <!-- Team Grid -->
      <div class="team-grid">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="team-member"
        >
          <!-- Image with Overlay -->
          <div class="member-image">
            <img :src="member.image" :alt="member.name" />
            <div class="member-overlay">
              <div class="social-links">
                <a
                  v-for="(link, platform) in member.social"
                  :key="platform"
                  :href="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon :name="getSocialIcon(platform)" />
                </a>
              </div>
            </div>
          </div>
          <!-- Info -->
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>

            <!-- Full Bio Paragraph -->
            <p class="bio-paragraph">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: "Ashutosh Patel",
    position: "CEO & Founder",
    bio: `Ashutosh Patel, the Founder & CEO of Rajkrishna Engineering, a company dedicated to
creating a sustainable future through renewable energy. With a background as an Electrical
Engineer and 15+ years of industry experience, I have had the privilege of working
across diverse organizations, gaining valuable insights into power systems, project
execution, and client-focused service.
In 2021, I embarked on my entrepreneurial journey by establishing Rajkrishna
Engineering, specializing in Solar Rooftop Projects. Over the past 3.5 years, my team and I
have successfully delivered projects that not only generate clean energy but also empower
clients to reduce costs and contribute to a greener planet.`,
    image: "/person.png", // replace with real photo when available
    social: {
      linkedin: "https://www.linkedin.com/in/ashutosh-patel-21560464/",
      twitter: "#"
    }
  }
]

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: "fa6-brands:linkedin",
    twitter: "fa6-brands:twitter",
    facebook: "fa6-brands:facebook",
    instagram: "fa6-brands:instagram"
  }
  return icons[platform] || "mdi:link"
}
</script>



<style scoped>
.team {
  position: relative;
  padding: 6rem 0;
  background: #ffffff;
  overflow: hidden;
}

.team-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/image.png') center/cover no-repeat;
  opacity: 0.05;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  font-size: 1.1rem;
  color: #092B47;
  opacity: 0.8;
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  justify-content: center;
}

/* Team Member Card */
.team-member {
  background: #fff;
  border-radius: 15px;
  max-width: 450px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s, box-shadow 0.4s;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
}

/* Member Image */
.member-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}

.team-member:hover .member-image img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 43, 71, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s;
}

.team-member:hover .member-overlay {
  opacity: 1;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 42px;
  height: 42px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background 0.3s;
}

.social-links a:hover {
  transform: scale(1.15);
  background: #092B47;
}

.social-links :deep(svg) {
  width: 22px;
  height: 22px;
  color: #EFA72E;
}

/* Member Info */
.member-info {
  padding: 1.5rem;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 0.5rem;
  color: #092B47;
  font-size: 1.2rem;
}

.position {
  color: #EFA72E;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Bio as Bullets */
.bio-list {
  list-style-type: disc;
  padding-left: 1.2rem;
  text-align: left;
  color: #092B47;
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
}

.bio-list li {
  margin-bottom: 0.5rem;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.8rem;
  }
  .team {
    padding: 4rem 1rem;
  }
  .member-image {
    height: 220px;
  }
  .bio-list {
    font-size: 0.9rem;
  }
}
.bio-paragraph {
  text-align: left;
  color: #092B47;
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

/* Responsive tweak */
@media (max-width: 768px) {
  .bio-paragraph {
    font-size: 0.9rem;
  }
}
</style>

