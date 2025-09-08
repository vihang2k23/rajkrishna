<!-- components/TeamSection.vue -->
<template>
    <section class="team">
      <div class="container">
        <div class="section-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the experts driving our mission forward</p>
        </div>
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
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
  
  <script setup >
  const teamMembers = [
    {
      name: 'Jane Smith',
      position: 'CEO & Founder',
      bio: 'Environmental scientist with 15+ years of experience in sustainable development.',
      image: '/images/team/jane-smith.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'John Davis',
      position: 'Chief Technology Officer',
      bio: 'Renewable energy expert specializing in solar and wind power innovations.',
      image: '/images/team/john-davis.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Maria Rodriguez',
      position: 'Head of Operations',
      bio: 'Project management professional with a focus on sustainable construction.',
      image: '/images/team/maria-rodriguez.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      position: 'Lead Researcher',
      bio: 'PhD in Environmental Engineering with numerous publications in renewable technology.',
      image: '/images/team/david-kim.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
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
    padding: 5rem 0;
    background: #f8f9fa;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .team-member {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .team-member:hover {
    transform: translateY(-5px);
  }
  
  .member-image {
    position: relative;
    height: 300px;
    overflow: hidden;
  }
  
  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .team-member:hover .member-image img {
    transform: scale(1.1);
  }
  
  .member-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(76, 175, 80, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .team-member:hover .member-overlay {
    opacity: 1;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-links a {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
  }
  
  .social-links a:hover {
    transform: scale(1.1);
  }
  
  .social-links :deep(svg) {
    width: 20px;
    height: 20px;
    color: #4CAF50;
  }
  
  .member-info {
    padding: 1.5rem;
    text-align: center;
  }
  
  .member-info h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .position {
    color: #4CAF50;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .bio {
    color: #7f8c8d;
    line-height: 1.6;
  }
  </style>