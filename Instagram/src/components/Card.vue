<script setup>
  const {VITE_BASE_PHOTO_URL} = import.meta.env

    const props = defineProps(['post'])
</script>

<template>
    <ACard hoverable style="width: 240px" class="card">
      <template #cover>
        <img alt="example" :src="`${VITE_BASE_PHOTO_URL}${post.url}`" />
      </template>
      <ACard-meta :title="post.username">
        <template #description>{{ post.caption}}</template>
      </ACard-meta>
    </ACard>
</template>

<style scoped>
    .card{
        margin-bottom: 10px;
    }
</style>