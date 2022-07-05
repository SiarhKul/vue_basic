<template>

  <div class='card card-w70'>
    <component v-for='cvBlock in cvBlocks'
               :key='cvBlock.type'
               :is="'app-' + cvBlock.cvBlock"
               v-bind='{value:cvBlock.cvBlockDescription}'
    >
    </component>
  </div>

</template>

<script>
import AppTitle from '@/components/cvblocks/AppTitle';
import AppAvatar from '@/components/cvblocks/AppAvatar';
import AppSubtitle from '@/components/cvblocks/AppSubtitle';
import AppText from '@/components/cvblocks/AppText';

export default {
  name: 'AppCvBlocks',
  props: ['cvBlocks'],
  components: { AppTitle, AppSubtitle, AppAvatar, AppText },
};
</script>

