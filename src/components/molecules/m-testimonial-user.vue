<template>
  <div class="m_testimonial_user card mb-4 px-4" :class="{ 'is-color': color }">
    <div class="columns is-mobile">
      <div class="column is-3"><atom-img class="image" :src="src" /></div>
      <div class="column">
        <atom-text :text="name" />
        <atom-text class="is-size-7 mt-2" :text="designation" />
      </div>
    </div>
  </div>
</template>

<script>
import atomImg from "../atoms/atom-img/atom-img.vue";
import AtomText from "../atoms/atom-text/atom-text.vue";
export default {
  components: { atomImg, AtomText },
  props: ["src", "name", "designation", "color"],
  name: "m-testimonial-user",
};
</script>
<style scoped>
.image {
  border-radius: 80%;
  width: 50px;
}
.is-color {
  background-color: yellowgreen;
}
</style>