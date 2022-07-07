<template>
  <div class='container'>
    <div class='card'>
      <h1>Vue Composition Api</h1>
      <small>data,method,computed,watch</small>

      <div class='form-control'>
        <!--        <input type='text' ref='textInput'>-->
        <input type='text' v-model='firstName'>
      </div>

      <button class='btn' @click='change'>Изменить</button>

    </div>
    <FrameWorkInfo :name='name' :version='version' @change-version='changeVersion'>
      <template #footer>
        <p>This is footer</p>
      </template>
    </FrameWorkInfo>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
import FrameWorkInfo from '@/FrameWorkInfo';

export default {
  setup() {
    const name = ref('VueJs');
    const version = ref('3');
    const nameProv = ref('VueJsProv');
    const versionProv = ref('3Prov');
    const textInput = ref(null);
    const firstName = ref('');
    const framework = reactive({ name: 'Vue', version: 3 });

    watch(firstName, (newValue, oldValue) => {
      console.log('newValue----->>', newValue);
      console.log('oldValue----->>', oldValue);
    });

    provide('nameProv', nameProv);
    provide('versionProv', versionProv);

    function changeInfo() {
      name.value = 'Vue JS!';
      version.value = '42';
    }

    function changeVersion(number) {
      version.value = number;
      versionProv.value = number;
    }

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });

    return {
      changeVersion: changeVersion,
      name,
      version,
      change: changeInfo,
      textInput,
      firstName,
    };
  },
  components: { FrameWorkInfo },
};
</script>
