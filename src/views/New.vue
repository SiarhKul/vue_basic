<template>
  <form class='card' @submit.prevent='onSubmit'>
    <h1>Создать новую задачу</h1>
    <div class='form-control'>
      <label for='title'>Название</label>
      <input type='text' id='title' v-model='formFields.titleTask'>
      <small v-if='errors.errorTitleTask'>{{ errors.errorTitleTask }}</small>
    </div>

    <div class='form-control'>
      <label for='date'>Дата дэдлайна</label>
      <input type='date' id='date' v-model='formFields.dateTask'>
      <small v-if='errors.errorDateTask'>{{ errors.errorDateTask }}</small>
    </div>

    <div class='form-control'>
      <label for='description'>Описание</label>
      <textarea id='description' v-model='formFields.descriptionTask'></textarea>
      <small v-if='errors.errorDescriptionTask'>{{ errors.errorDescriptionTask }}</small>
    </div>

    <button class='btn primary' >Создать</button>
    <!--    <button :disabled='!isButtonDisabled' class='btn primary'>Создать</button>-->
  </form>
</template>


<script>

import { reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const mainStore = useStore();
    const router = useRouter();
    const formFields = reactive({
      titleTask: '',
      dateTask: null,
      descriptionTask: '',
    });
    const errors = reactive({
      errorTitleTask: '',
      errorDateTask: '',
      errorDescriptionTask: '',
    });


    watch(formFields, (newVal, oldVal) => {
      if (formFields.titleTask.length < 3) {
        errors.errorTitleTask = 'Длинна должна быть больше 3 символов';
      } else {
        errors.errorTitleTask = '';
      }

      if (formFields.dateTask === undefined) {
        errors.errorDateTask = 'Дата не должна быть прошедшей';
      } else {
        errors.errorDateTask = null;
      }

      if (formFields.descriptionTask.length < 13) {
        errors.errorDescriptionTask = 'Длинна должна быть больше 13 символов';
      } else {
        errors.errorDescriptionTask = '';
      }

    });

    // const isButtonDisabled = computed(() => Object.values(formFields).every(field => !!field));
    // const isFormValid = computed(() => Object.values(errors).some(field => field));


    const onSubmit = () => {
      if (true) {
        const todo = {
          id: new Date().getTime() + Math.random(),
          status: 'active',
          ...formFields,
        };

        mainStore.commit('setFormFields', todo);

        formFields.id = null;
        formFields.titleTask = '';
        formFields.dateTask = undefined;
        formFields.descriptionTask = '';

        router.push("/")
      }
    };

    return {
      errors,
      formFields,
      // isButtonDisabled,
      onSubmit,
    };
  },
};

</script>
