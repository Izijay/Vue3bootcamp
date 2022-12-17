<script setup>
    const props = defineProps(['post'])
</script>

<template>
    <ACard hoverable style="width: 240px" class="card">
      <template #cover>
        <img alt="example" :src="post.url" />
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