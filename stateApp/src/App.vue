<!-- One way to give states from parents to childs is to use props (prop drilling) 
  with definProps(), but as we do that, we need to pass the props 
  to every childs to the GreatGrandChild even if they dont need it.
  So defineProps() is good to send state to One child only.-->

  <!-- Another way is to use the provide() inject() methods :
  (https://vuejs.org/guide/components/provide-inject.html#provide-inject)
  provide a key (string or other) and a piece of state as parameters like this:
              -- const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
              -> provide("numbers", numbers) 
              => provide("KEY", state) 
  When provide is in the very top level (the Parent), inject() is in the childs:
              -> const numbers = inject("numbers")
              => const name_of_state = inject("KEY from provide")
  But if we need to apply some methods to the piece of state in the child an in the
  GreatGrandChild for exemple, add a number to the array. We need to copy/paste the 
  method addNumber(num) to the Child AND to the GreatGrandChild. -->

  <!-- Another way is to use Composable ==> 
      -- (https://vuejs.org/guide/reusability/composables.html#composables) 
      -- See the doc for more explanations.
    ===> To check: the others methods seems to update numbers in the Child and 
              GreatGrandChild when add button (addNumber) is clicked on.
              But not this one. -->

<!-- And one another way (and the best for me) is to use Pinia
    -- (https://pinia.vuejs.org/introduction.html) 
    -- npm install pinia
  Pinia is a store library for Vue, it allows you to share a state across 
  components/pages. 
  See the doc for more explanations.-->


<script setup>
  import Parent from "./components/Parent.vue"
  import { ref, provide } from "vue";

  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
  

</script>

<template>
  <main>
    <Parent />
  </main>
</template>

<style scoped>

</style>

<!-- ------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------- -->
<!-- ------------------------RGB GENERATOR------------------------------ -->
<!-- ------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------- -->
<!-- <script setup>
  import { ref, reactive } from 'vue';

//// WITH ref !!!////

/*    const color = ref({
    red: 0,
    green: 0,
    blue: 0
  }) 
 
  const selectRandomColor = () => {
    color.value.red = 166;
    color.value.green = 200;
    color.value.blue = 0;
  } */

// Ref 
//    - takes any value 
//    - access state with .value()
//    - can update entire object
// reactive 
//    - takes only Objects
//    - access state directly
//    - can only update properties

//// WITH reactive !!!////

  const color = reactive({
    red: 0,
    green: 0,
    blue: 0
  })

  const selectRandomColor = () => {
    color.red = 166;
    color.green = 200;
    color.blue = 0;
  }
</script>

<template>
  <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
    <div>
      <input type="number" v-model="color.red" placeholder="red">
      <input type="number" v-model="color.green" placeholder="green">
      <input type="number" v-model="color.blue" placeholder="blue">
      <button @click="selectRandomColor"> Select Random Color</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }
</style> -->
<!-- ------------------------------------------------------------------- -->
<!-- ------------------------------ END OF ----------------------------- -->
<!-- -------------------------- RGB GENERATOR -------------------------- -->
<!-- ------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------- -->