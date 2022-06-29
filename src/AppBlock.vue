<template>
  <div class='card'>
    <h1>Title from AppBlock</h1>
    <slot name='header'>Header is not provided</slot>
    <slot>Default text is not provided</slot>
    <slot name='footer'>Footer is not provided</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
