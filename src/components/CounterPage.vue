<template>
  <section id="counter-page">
    <div class="counter-section">
     <button @click="decrementCounter()" class="btn">-</button>
      <h4 class="result-text">{{ count }}</h4>
      <button @click="incrementCounter()" class="btn">+</button>
    </div>
  </section>
</template>

<script>
// import BlogContent from "../components/BlogContent.vue";
import { numberDisplay, decrementCounter } from "../store";
export default {
  name: "CounterPage",

  computed: {
    count() {
      return numberDisplay.count;
    },
    decrementCounter() {
      return decrementCounter;
    },
  },
  methods:{
    incrementCounter() {
      numberDisplay.count++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-text {
  text-align: center;
  font-weight: bold;
}
#counter-page{
  margin:60px 0px;
}
.btn {
  background-color: #03a84e; /* Green */
  border: none;
  color: white;
  padding: 10px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 45px;
  height: 45px;
  margin: 15px;
}
.counter-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter-container {
  background-color: #fef8f5;
  height: 100vh;
}
.display-text {
  font-size: 20px;
  text-align: center;
}
</style>
