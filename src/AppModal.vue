<link rel='stylesheet' href='theme.css'>
<template>
  <div class='modal-backdrop' @click='$emit("close")' ></div>
<div class='modal'>
  <h3>It is the modal</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quaerat?</p>
</div>
</template>

<script>
export default {
  name: 'AppModal',
  emits:['close']
};
</script>

<style scoped>

</style>
