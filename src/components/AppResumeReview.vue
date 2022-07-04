<template>
  <div class='card card-w70'>
    <app-cv-block
      v-for='(cvBlock,key) in cvBlocks'
      :key='key'
      :cvBlock='cvBlock.cvBlock'
      :cvBlockDescription='cvBlock.cvBlockDescription'
    >
    </app-cv-block>

    <h3 v-if='cvBlocks.length===0'>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>


</template>

<script>
export default {
  name: 'AppResumeReview',
};
</script>

<style scoped>

</style>
