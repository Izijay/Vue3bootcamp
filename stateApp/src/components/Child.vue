<script setup>
    import GrandChild from "./GrandChild.vue"
    import { inject } from "vue";
    import {useNumbersStore} from "../stores/numbers"
   
    const {numbers, addNumber} = useNumbersStore()
    
  
</script>

<template>
    <div>
        <h1> CHILD Component {{ numbers }}</h1>
        <button @click="addNumber(42)">add</button>
        <div class="line"></div>
        <GrandChild />
    </div>
</template>