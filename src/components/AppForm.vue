<template>
  <form class='card card-w30' @submit.prevent='onSubmit'>
    <div class='form-control'>
      <label for='type'>Тип блока</label>
      <select id='type' v-model='typeBlock'>
        <option value='title'>Заголовок</option>
        <option value='subtitle'>Подзаголовок</option>
        <option value='avatar'>Аватар</option>
        <option value='text'>Текст</option>
      </select>
    </div>

    <div class='form-control'>
      <label for='value'>Значение</label>
      <textarea id='value' rows='3' v-model.trim='valueBlock'></textarea>
      <small v-if='error'> Колличестов символов должно быть больше 3</small>
    </div>

    <button class='btn primary' :disabled='valueBlock.length===0'>Добавить</button>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
  emits: ['onSubmitBlock'],
  data() {
    return {
      typeBlock: 'title',
      valueBlock: '',
      error: false,
    };
  },

  methods: {

    isFormValid() {
      let isValidValue = true;
      if (this.valueBlock.length <= 3) {
        isValidValue = false;
      }
      return isValidValue;
    },

    onSubmit() {
      if (this.isFormValid()) {
        this.$emit('onSubmitBlock', {
          cvBlock: this.typeBlock,
          cvBlockDescription: this.valueBlock,
        });

        this.typeBlock = 'title';
        this.valueBlock = '';

        this.error = false;

      } else {
        this.error = true;
      }
    },
  },
};
</script>

