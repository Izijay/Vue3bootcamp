<script setup>
import UploadPhotoModal from './UploadPhotoModal.vue'
import { useRoute } from 'vue-router';
import { useUserStore } from "../stores/users"
import { storeToRefs } from 'pinia';

const route = useRoute();
const userStore = useUserStore();
const { user } = storeToRefs(userStore)
const { username: ProfileUsername } = route.params
const props = defineProps(['user', 'userInfo', 'addNewPost'])

</script>

<template>
    <div class="userbar-container" v-if="props.user">
        <div class="top-content">
            <ATypographyTitle :level="2">{{ props.user.username }}</ATypographyTitle>
            <UploadPhotoModal v-if="user && ProfileUsername === user.username" :addNewPost="addNewPost" />
        </div>
        <div class="bottom-content">
            <ATypographyTitle :level="5">{{ props.userInfo.posts }} Posts</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.userInfo.followers }} Followers</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.userInfo.following }} Following</ATypographyTitle>
        </div>
    </div>
    <div v-else class="userbar-container">
        <div class="top-content">
            <ATypographyTitle :level="2">User not found.</ATypographyTitle>
        </div>
    </div>
</template>

<style scoped>
.userbar-container {
    padding-bottom: 75px;
}

.top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom-content {
    display: flex;
    align-items: center;
}

.bottom-content h5 {
    align-items: center;
    margin: 0 !important;
    padding: 0;
    margin-right: 30px !important;
}
</style>