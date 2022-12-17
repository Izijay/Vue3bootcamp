<script setup>
    import { inject } from "vue";
    import {useNumbersStore} from "../stores/numbers"
   
    const {numbers, filterNum} = useNumbersStore()
</script>

<template>
    <div>
        <h1> GREAT GRAND CHILD Component {{ filterNum(16) }}</h1>
    </div>
</template>