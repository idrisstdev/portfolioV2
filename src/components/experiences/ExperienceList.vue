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
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi. Aspernatur sed quia debitis cum. Voluptates blanditiis esse necessitatibus eligendi vitae molestias nisi, .maiores architecto sit tempore, at veniam debitis.',
  entreprise: 'OKTEO',
  intitule: 'Developpeur front-end',
  techno: ['Flutter', 'Java Springboot', 'Vue'],
  url: 'https://www.okteo.fr/',
})
experiences.value.push({
  dateDebut: new Date('2021-04-12'),
  dateFin: new Date('2022-01-31'),
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi. Aspernatur sed quia debitis cum. Voluptates blanditiis esse necessitatibus eligendi vitae molestias nisi, .maiores architecto sit tempore, at veniam debitis.',
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
