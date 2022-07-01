<template>
  <div class='container'>
    <div class='card' v-if='show'>

      <h2 v-color:[type].blink.hover='myColor'>Directions</h2>

      <div class='form-control'>
        <label for='inp'>Default Input</label>
        <input v-focus type='text' id='inp'>
      </div>

      <button class='btn' @click='myColor="darkblue"'>Change</button>
      <button class='btn' @click='type=type==="color"?"backgroundColor":"color"'>Change type</button>
    </div>
  </div>
</template>

<script>
import focusDirective from '@/focusDirective';
import colorDirective from '@/colorDirective';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      myColor: 'darkred',
      type: 'color',
      show: true,
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.show = false;
    // }, 2000);
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },

};
</script>

