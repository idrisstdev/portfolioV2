<template>
  <div class="max-w-screen-xl mx-auto lg:flex lg:gap-6 lg:px-0 md:px-3 sm:px-5 px-7">
    <!-- Colonne gauche : sticky dans la page globale -->
    <div class="lg:w-5 pt-9 lg:sticky lg:top-0 lg:self-start lg:h-fit">
      <h1 class="text-5xl"><a href="/">Idriss TAMERI</a></h1>
      <h2 class="text-3xl font-medium">Développeur front-end</h2>
      <p>Créateur d'application web et mobile</p>
      <p>Situé sur Lyon</p>
      <ul>
        <li>A propos de moi</li>
        <li><a href="#Projets">Projets</a></li>
        <li>Expériences</li>
      </ul>
      <CustomFooter />
    </div>

    <!-- Colonne droite : contenu scrollable naturellement -->
    <div class="lg:w-full pt-9">
      <div class="Resume">
        <p>
          Développeur diplomé en 2021, j'ai affuté mes compétences en apprennant de nombreux
          langages que ce soit côté front avec Vue.JS, React, Flutter pour le mobile ou back avec
          Java Springboot ou même fullstack avec Symfony. De ce fait je suis à l'aise avec la
          plupart des environnements de développement et très flexible. Apprendre un nouveau langage
          ne m'effraie pas.
        </p>
        <br />
        <p>
          De part mon expérience et préference, j'ai une appétence pour le front. Je peux réaliser
          du site vitrine, aux applications web voir mobiles jusqu'à la création d'API.
        </p>
      </div>

      <div class="Projets" id="Projets">
        <h2>Projets</h2>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>

      <div class="Experiences">
        <h2>Expériences</h2>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/layout/CustomFooter.vue'
import CustomCard from '@/components/CustomCard.vue'
</script>

<style scoped>
.max-w-screen-xl {
  max-width: 1280px;
}
.pt-9 {
  padding-top: 6rem;
}
</style>
