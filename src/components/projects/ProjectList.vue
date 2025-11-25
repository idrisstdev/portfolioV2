<template>
  <div class="mt-6 mb-8" id="Projets">
    <h2>Projets</h2>
    <ProjectCard
      :project="project"
      v-for="project in projects"
      :key="project.name"
      @click="handleClick(project)"
    />
    <Dialog
      v-model:visible="isModalVisible"
      header="Projet non disponible"
      modal
      :closable="true"
      :dismissableMask="true"
      :draggable="false"
      @hide="isModalVisible = false"
    >
      <div>Ce projet n'est pas en ligne actuellement. Il devrait arriver très bientôt</div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog'
import type { Project } from '@/data/entity/project'
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const isModalVisible = ref(false)

const projects = ref<Project[]>([])

projects.value.push({
  description: 'Projet personnel de création de blog en Symfony',
  picture: 'https://picsum.photos/156/85',
  alt: 'Image generée aléatoirement',
  name: 'Kujaku Network',
  techno: ['Symfony', 'JavaScript'],
  url: '',
})
projects.value.push({
  description: 'Site vitrine crée pour un micro-entrepreneur proposant un gite en Guadeloupe',
  picture: new URL('@/assets/img/macabaneperchee.png', import.meta.url).href,
  alt: 'image du projet web ma cabane perchée',
  name: 'Ma Cabane Perchée dans les manguiers',
  techno: ['HTML/CSS', 'Bootstrap'],
  url: 'https://idrisstdev.github.io/ma-cabane-perchee/',
})
projects.value.push({
  description:
    "Projet de groupe réalisé dans le cadre de mes études. Site fictif d'une agence web proposant plusieurs prestations",
  picture: new URL('@/assets/img/webon.png', import.meta.url).href,
  alt: 'Image du projet WebOn',
  name: 'WebOn',
  techno: ['HTML/CSS', 'Bootstrap'],
  url: 'https://idrisstdev.github.io/webon/',
})

function handleClick(item: Project) {
  if (item.url != '') {
    window.open(item.url)
  } else {
    isModalVisible.value = true
  }
}
</script>

<style scoped></style>
