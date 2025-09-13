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
        <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
          <!-- Image with Overlay -->
          <div class="member-image">
            <img :src="member.image" :alt="member.name" />
            <div class="member-overlay">
              <div class="social-links">
                <a v-for="(link, platform) in member.social" :key="platform" :href="link">
                  <Icon :name="getSocialIcon(platform)" />
                </a>
              </div>
            </div>
          </div>
          <!-- Info -->
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p class="bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Ashutosh Patel',
    position: 'CEO & Founder',
    bio: 'Environmental scientist with 15+ years of experience in sustainable development.',
    image: '/logo.png',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Bhairav Prajapti',
    position: 'Chief Technology Officer',
    bio: 'Renewable energy expert specializing in solar and wind power innovations.',
    image: '/logo.png',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Maria Rodriguez',
    position: 'Head of Operations',
    bio: 'Project management professional with a focus on sustainable construction.',
    image: '/logo.png',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'David Kim',
    position: 'Lead Researcher',
    bio: 'PhD in Environmental Engineering with numerous publications in renewable technology.',
    image: '/logo.png',
    social: { linkedin: '#', twitter: '#' }
  }
]

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: 'fa6-brands:linkedin',
    twitter: 'fa6-brands:twitter',
    facebook: 'fa6-brands:facebook',
    instagram: 'fa6-brands:instagram'
  }
  return icons[platform] || 'mdi:link'
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
  font-size: 2.5rem;
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
}

/* Team Member Card */
.team-member {
  background: #fff;
  border-radius: 15px;
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
  height: 300px;
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
  width: 45px;
  height: 45px;
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
  padding: 2rem 1.5rem;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 0.5rem;
  color: #092B47;
  font-size: 1.3rem;
}

.position {
  color: #EFA72E;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bio {
  color: #092B47;
  opacity: 0.75;
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
