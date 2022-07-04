<template>
  <div class='container column'>
    <app-form @onSubmitBlock='addBlockToList'></app-form>

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
  </div>
  <div class='container'>
    <p>
      <button class='btn primary' @click='onLoadComments'>Загрузить комментарии</button>
    </p>
    <div class='loader' v-if='commentsLoaded'></div>
    <app-comments :comments='comments' v-if='comments.length>0'></app-comments>
  </div>
</template>

//---------------------------------------------------------JS

<script>
import AppForm from '@/components/AppForm';
import AppCvBlock from '@/components/AppCvBlock';
import AppComments from '@/components/AppComments';

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
      console.log('block----->>', block);
      this.cvBlocks.push(block);
    },

    async onLoadComments() {
      try {
        this.commentsLoaded = true;
        const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42');
        this.comments = await data.json();
        console.log('this.comments----->>', this.comments);
        this.commentsLoaded = false;

      } catch (e) {
        console.log(e);
        this.commentsLoaded = false;

      }
    },
  },

  components: {
    AppCvBlock, AppForm, AppComments,
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
