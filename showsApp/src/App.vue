<script setup>
  import RickMortyCards from "./components/RickMortyCards.vue"
  import SuspenseRickMortyVue from "./components/SuspenseRickMorty.vue";
  import Hero from "./components/Hero.vue"
  import { ref } from "vue";
import BreakingBadsCards from "./components/BreakingBadsCards.vue";

  const isBrBad = ref(false)

</script>

<template>
  <main>
    <Hero :isBrBad="isBrBad" @selectShow="isBrBad = !isBrBad"/>
<!--     <SuspenseRickMortyVue v-if="!isBrBad"/>
    <RickMortyCards v-else/> -->
    <KeepAlive>
      <Component :is="isBrBad ? RickMortyCards : SuspenseRickMortyVue"></Component>
    </KeepAlive>
  </main>
</template>
