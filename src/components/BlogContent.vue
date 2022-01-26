<template>
  <section id="BlogPage">
    <h1 class="title-text">{{ title }}</h1>
    <p class="content-text">{{ content }}</p>
    <button v-on:click="displayContent" class="text-link">See More</button>
  </section>
</template>

<script>
export default {
  name: "BlogContent",
  props: ["title", "content"],
  data() {},
  methods: {
    displayContent() {
      this.$emit("displayData", this.title);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.text-link {
color: #0c0e2d;
  padding: 5px;
  font-size:17px;

}
.title-text{
font-size:20px;
color:black;
font-weight:bold;
}
</style>
