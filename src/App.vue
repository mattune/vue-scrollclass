<template>
  <div id="app">
    <section class="sec1" v-scrollClass>section1</section>
    <section class="sec2" v-scrollClass>section2</section>
    <section class="sec3" v-scrollClass>section3</section>
    <section class="sec4" v-scrollClass>section4</section>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  padding: 50px;
  font-size: 2rem;

  &.sec1 {background-color: red; }
  &.sec2 {background-color: blue; }
  &.sec3 {background-color: green; }
  &.sec4 {background-color: yellow; }
}


/* scrollclassでアニメーションさせたいclass名 */
.target {
  transition: all 0.4s ease;
  transform: translateY(40px);
  opacity: 0;

  &.action {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
