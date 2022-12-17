<script setup>
import Card from './Card.vue';
import Container from './Container.vue';
import Userbar from './Userbar.vue';
import ImageGallery from './ImageGallery.vue';


</script>

<template>
    <Container>
        <div class="profile-container">
            <Userbar 
                username="laithharb"
                :userInfo="{
                    posts: 4,
                    followers: 100,
                    following: 342
                }"
            
            />
            <ImageGallery :posts="[
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                },
                {
                    id: 2,
                    image: 'https://static.skillshare.com/cdn-cgi/image/quality=80,width=1000,format=auto/uploads/project/4c49440fec9b45c5464596033e0a23d7/ad168d89'
                }
            ]"/>
        </div> 
    </Container>
</template>

<style scoped>
    .profile-container {
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 20px 0;
    }
</style>