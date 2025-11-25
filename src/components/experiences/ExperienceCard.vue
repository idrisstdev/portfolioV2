<template>
  <div class="bg-green-1000 md:flex flex-col justify-content-around mt-4 py-3 px-4">
    <div class="md:w-3">
      {{ formatedDate }}
    </div>
    <div class="md:w-9 md:pl-4">
      <div class="mb-2 flex justify-content-between align-items-center">
        <span class="font-bold"
          >{{ props.experience.intitule }} - {{ props.experience.entreprise }}</span
        >
        <font-awesome-icon icon="fa-solid fa-link" />
      </div>
      <p class="mb-3">
        {{ props.experience.description }}
      </p>
      <ul class="flex">
        <li class="mr-2" v-for="item in props.experience.techno" :key="item">
          <Tag class="text-xs" :value="item" severity="secondary" :rounded="true" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import Tag from 'primevue/tag'

import type { Experience } from '@/data/entity/experience'
import { formatDateToExperience } from '@/utils/date/dateUtils'
import { capitalizeFirstLetter } from '@/utils/string/stringUtils'
import { computed } from 'vue'
const props = defineProps<{ experience: Experience }>()

const formatedDate = computed(() => {
  return `${capitalizeFirstLetter(formatDateToExperience(props.experience.dateDebut))} - ${capitalizeFirstLetter(formatDateToExperience(props.experience.dateFin))}`
})
</script>

<style scoped>
li {
  text-decoration: none;
  list-style: none;
}

.bg-green-1000:hover {
  background-color: #2c4e26;
  cursor: pointer;
  border-radius: 0.35rem;
}

:deep(.p-tag-label) {
  font-size: 0.8rem;
}
:deep(.p-tag) {
  padding: 0.15rem 0.5rem;
}
</style>
