<template>
  <div><TheNav></TheNav></div>
  <TheView></TheView>
  <TheSlot>
    <template #a>a입니다.</template>
    <template #b>b입니다.</template>
    <template #c>c입니다.</template>
    암시적디폴트
  </TheSlot>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheSlot from "./components/TheSlot.vue";
import TheView from "./components/TheView.vue";
export default {
  components: {
    TheNav,
    TheView,
    TheSlot
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
