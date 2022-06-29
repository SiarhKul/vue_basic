<template>
  <div class='container pt-1'>
    <div class='card'>
      <h2>Dynamic</h2>
      <async-component></async-component>
      <app-button :color='oneColor' @action='active="one"' ref='byBtn'>One</app-button>
      <app-button :color='twoColor' @action='active="two"'>Two</app-button>
    </div>
    <keep-alive>
      <component :is='componentName'></component>
    </keep-alive>

  </div>
</template>

<script>
import AppButton from '@/AppButton';
import AppTextOne from '@/AppTextOne';
import AppTextTwo from '@/AppTextTwo';

export default {
  name: 'App',
  components: { AppButton, AppTextOne, AppTextTwo },
  data() {
    return {
      active: 'one',
    };
  },
  mounted() {
    this.$refs.byBtn.logBtn();
  },

  computed: {
    componentName() {
      return `app-text-${this.active}`;
    },
    // componentName: {
    //   get() {
    //     return `app-text-${this.active}`;
    //   },
    //   set(value) {
    //     console.log(value);
    //   },
    // },


    oneColor() {
      return this.active === 'one' ? 'primary' : '';
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : '';
    },
  },
};
</script>

<style scoped>
</style>
