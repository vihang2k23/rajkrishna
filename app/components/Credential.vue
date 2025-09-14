<script setup lang="ts">

</script>

<template>
    <div>
        <div class="credential">
            <div class="container">
                <div class="section-header">
                    <h2>Credential</h2>
                </div>
                <div class="section-content">
                        <img class="credential-img" src="/credentail/IGBC.png" alt="">
                        <img class="credential-img" src="/credentail/ISO_9001-2015.svg.png" alt="">
                        <img class="credential-img" src="/credentail/MSME.png" alt="">
                        <img class="credential-img" src="/credentail/startup-india-logo-gradient-circle.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.credential {
    padding: 6rem 1rem;
    background: linear-gradient(135deg, #f0f4f8, #e8f5e9);  
    position: relative;
}

.credential-img{
    width: 80px;               
    aspect-ratio: 2 / 2;  
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #092B47, #EFA72E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
}
</style>