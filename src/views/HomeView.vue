<template>
  <div class="max-w-screen-xl mx-auto lg:flex lg:gap-6 lg:px-0 md:px-3 sm:px-5 px-7">
    <!-- Colonne gauche -->
    <div class="lg:w-5 pt-9 lg:sticky lg:top-0 lg:self-start lg:h-fit">
      <h1 class="text-5xl"><a href="/">Idriss TAMERI</a></h1>
      <h2 class="mt-5 text-3xl font-medium">Développeur front-end</h2>
      <p>Créateur d'application web et mobile</p>
      <p>Situé dans la région Lyonnaise</p>
      <ul class="mt-4">
        <li class=""><a href="#Resume">À propos de moi</a></li>
        <li class="mt-2"><a href="#Experiences">Expériences</a></li>
        <li class="mt-2"><a href="#Projets">Projets</a></li>
      </ul>
      <CustomFooter />
    </div>

    <!-- Colonne droite -->
    <div class="lg:w-full mb-5 pt-9">
      <ResumeCard />

      <ExperienceList />

      <ProjectList />

      <GreetingFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/layout/CustomFooter.vue'
import ExperienceList from '@/components/experiences/ExperienceList.vue'
import ResumeCard from '@/components/ResumeCard.vue'
import ProjectList from '@/components/projects/ProjectList.vue'
import GreetingFooter from '@/components/GreetingFooter.vue'
</script>

<style scoped>
.max-w-screen-xl {
  max-width: 1280px;
}
.pt-9 {
  padding-top: 6rem;
}
</style>
