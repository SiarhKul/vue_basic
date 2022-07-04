<template>
  <div class='container column'>
    <app-form @onSubmitBlock='addBlockToList'></app-form>
    <app-cv-blocks :cvBlocks='cvBlocks'></app-cv-blocks>
  </div>

  <div class='container'>
    <p>
      <button class='btn primary' @click='onLoadComments'>Загрузить комментарии</button>
    </p>

    <app-loader v-if='commentsLoaded'></app-loader>
    <app-comments :comments='comments' v-if='comments.length>0'></app-comments>
  </div>
</template>

//---------------------------------------------------------JS

<script>
import AppForm from '@/components/AppForm';
import AppCvBlock from '@/components/AppCvBlocks';
import AppComments from '@/components/AppComments';
import AppLoader from '@/components/AppLoader';
import AppCvBlocks from '@/components/AppCvBlocks';

export default {
  data() {
    return {
      cvBlocks: [],
      commentsLoaded: false,
      comments: [],
    };
  },

  methods: {
    addBlockToList(block) {
      this.cvBlocks.push(block);
    },

    async onLoadComments() {
      try {
        this.commentsLoaded = true;
        const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42');
        this.comments = await data.json();
        this.commentsLoaded = false;

      } catch (e) {
        console.log(e);
        this.commentsLoaded = false;

      }
    },
  },

  components: {
    AppCvBlock, AppForm, AppComments, AppLoader, AppCvBlocks,
  },

};
</script>
//---------------------------------------------------------CSS
<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
