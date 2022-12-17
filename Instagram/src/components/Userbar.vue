<script setup>
    const props = defineProps(['username', 'userInfo'])
</script>

<template>
    <div class="userbar-container">
        <div class="top-content">
            <ATypographyTitle :level="2">{{ props.username }}</ATypographyTitle>
        </div>
        <div class="bottom-content">
            <ATypographyTitle :level="5">{{ props.userInfo.posts }} Posts</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.userInfo.followers }} Followers</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.userInfo.following }} Following</ATypographyTitle>
        </div>
    </div>
</template>

<style scoped>
    .userbar-container {
        padding-bottom: 75px;
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