<template>
  <div class="mt-6 mb-8" id="Experiences">
    <h2>Expériences</h2>
    <ExperienceCard
      v-for="item in experiences"
      :key="item.entreprise"
      :experience="item"
      @click="handleClick(item)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/data/entity/experience'
import { ref } from 'vue'
import ExperienceCard from './ExperienceCard.vue'

const experiences = ref<Experience[]>([])

experiences.value.push({
  dateDebut: new Date('2023-03-13'),
  dateFin: new Date('2025-05-11'),
  description:
    "Maintenance d'anciens projets php. Mise à jour de projets Vue2 vers Vue3. Création d'une application web & mobile permettant la gestion de documents. Travail en collaboration avec developpeurs, chef de projets, analystes et l'équipe UI/UX.",
  entreprise: 'OKTEO',
  intitule: 'Developpeur front-end',
  techno: ['Flutter', 'Java Springboot', 'Vue', 'PHP'],
  url: 'https://www.okteo.fr/',
})
experiences.value.push({
  dateDebut: new Date('2021-04-12'),
  dateFin: new Date('2022-01-31'),
  description:
    'Réalisations de tests unitaires. Maintenance et corrections de bugs. Réalisations de spécifiques en javascript. Refactoring et ajout de nouvelles fonctionnalités du site interne',
  entreprise: "Interactiv' Technologies",
  intitule: 'Developpeur Web',
  techno: ['Symfony', 'PHP', 'JQuery'],
  url: 'https://www.interactiv-technologies.com/fr/',
})

function handleClick(item: Experience) {
  window.open(item.url)
}
</script>

<style lang="scss" scoped></style>
