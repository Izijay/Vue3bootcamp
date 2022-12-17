<script setup>
import Card from './Card.vue';
import Container from './Container.vue';

const data = [
    {
        id: 1,
        username: "laithharb",
        url: "https://media.ngroup.be/IMAGE/IMAGE-S1-00024/236364-selena-gomez.jpg",
        caption: ""
    },
    {
        id: 2,
        username: "metallica",
        url: "https://static.cnews.fr/sites/default/files/metallica_6385d420e67b2_0.jpg",
        caption: "Metal life"
    }
]
</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card 
                v-for="post in data" 
                :key="post.id" 
                :post="post" 
            />  
        </div> 
    </Container>
</template>

<style scoped>
    .timeline-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
</style>