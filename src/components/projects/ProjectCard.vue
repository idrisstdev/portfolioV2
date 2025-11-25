<template>
  <div class="bg-green-1000 md:flex flex-col justify-content-around mt-4 py-3 px-4">
    <div class="md:w-3">
      <img :src="project.picture" width="156" height="85" :alt="project.alt" />
    </div>
    <div class="md:w-9 md:pl-4">
      <div class="mb-2">
        <span class="font-bold">{{ project.name }}</span>
      </div>
      <p class="mb-3">
        {{ project.description }}
      </p>
      <ul class="flex">
        <li class="mr-2" v-for="techno in project.techno" :key="techno">
          <Tag class="text-xs" :value="techno" severity="secondary" :rounded="true" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Project } from '@/data/entity/project'
import Tag from 'primevue/tag'

defineProps<{ project: Project }>()
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
