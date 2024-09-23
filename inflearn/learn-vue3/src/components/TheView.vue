<template>
  <main>
    <div class="container py-4">
      <div class="row g-3">
        <!-- <div class="col-4"><AppCard title="제목1" content="내용1" /></div>
        <div class="col-4"><AppCard :title="post.title" :content="post.content" /></div> -->
        <div v-for="post in posts" class="col col-4" :key="post.id">
          <AppCard :title="post.title" :content="post.content" :type="post.type" :is-like="post.isLike" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
import { reactive } from "vue";

export default {
  components: {
    AppCard
  },
  setup() {
    const post = reactive({
      title: "제목2",
      content: "내용2"
    });
    const posts = reactive([
      { id: 1, title: "제목1", content: "내용1", isLike: true, type: "news" },
      { id: 2, title: "제목2", content: "내용2", isLike: true, type: "news" },
      { id: 3, title: "제목3", content: "내용3", isLike: true, type: "news" },
      { id: 4, title: "제목4", content: "내용4", isLike: false, type: "notice" },
      { id: 5, title: "제목5", content: "내용5", isLike: false, type: "notice" }
    ]);
    return { post, posts };
  }
};
</script>

<style lang="scss" scoped></style>
