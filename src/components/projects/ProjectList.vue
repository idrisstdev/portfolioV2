<template>
  <div class="mt-6 mb-8" id="Projets">
    <h2>Projets</h2>
    <ProjectCard :project="project" v-for="project in projects" :key="project.name" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/data/entity/project'
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref<Project[]>([])

projects.value.push({
  description: 'Projet personnel de création de blog en Symfony',
  picture: 'https://picsum.photos/156/85',
  name: 'Kujaku Network',
  techno: ['Symfony', 'JavaScript'],
  url: '',
})
projects.value.push({
  description: 'Site vitrine crée pour un micro-entrepreneur proposant un gite en Guadeloupe',
  picture: 'https://picsum.photos/156/85',
  name: 'Ma Cabane Perchée dans les manguiers',
  techno: ['HTML/CSS', 'Bootstrap'],
  url: '',
})
projects.value.push({
  description:
    "Projet de groupe réalisé dans le cadre de mes études. Site fictif d'une agence web proposant plusieurs prestations",
  picture: 'https://picsum.photos/156/85',
  name: 'WebOn',
  techno: ['HTML/CSS', 'Bootstrap'],
  url: '',
})
</script>

<style scoped></style>
