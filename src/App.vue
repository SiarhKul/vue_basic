<template>
  <div class='container'>
    <form class='card' @submit.prevent='submitForm'>
      <h1>Анкета на Vue разработчика!</h1>
      <!--      <div class='form-control' :class='{invalid:error.name}'>-->
      <!--        <label for='name'>Как тебя зовут?</label>-->
      <!--        <input type='text' id='name' placeholder='Введи имя' v-model.trim='name'>-->
      <!--        <small v-if='error.name'>{{ error.name }}</small>-->
      <!--      </div>-->

      <app-input placeholder='Enter your name'
                 :error='error.name'
                 label='name'
                 v-model='name'>
      </app-input>

      <div class='form-control'>
        <label for='age'>Выбери возраст</label>
        <input type='number' id='age' max='70' v-model.number='age'>
      </div>

      <div class='form-control'>
        <label for='city'>Твой город</label>
        <select id='city' v-model='city'>
          <option value='spb'>Санкт-Петербург</option>
          <option value='msk'>Москва</option>
          <option value='kzn'>Казань</option>
          <option selected value='nsk'>Новосибирск</option>
        </select>
      </div>

      <div class='form-checkbox'>
        <span class='label'>Готов к переезду в Токио?</span>
        <div class='checkbox'>
          <label><input type='radio' name='trip' value='yes' v-model='relocate' /> Да</label>
        </div>

        <div class='checkbox'>
          <label><input type='radio' name='trip' value='no' v-model='relocate' /> Нет</label>
        </div>
      </div>

      <div class='form-checkbox'>
        <span class='label'>Что знаешь во Vue?</span>
        <div class='checkbox'>
          <label><input type='checkbox' name='skills' v-model='skills' value='vuex' /> Vuex</label>
        </div>
        <div class='checkbox'>
          <label><input type='checkbox' name='skills' v-model='skills' value='cli' /> Vue CLI</label>
        </div>
        <div class='checkbox'>
          <label><input type='checkbox' name='skills' v-model='skills' value='router' /> Vue Router</label>

        </div>
      </div>

      <button type='submit' class='btn primary'>Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from '@/AppInput';

export default {
  components: { AppInput },
  data() {
    return {
      name: '',
      age: 23,
      city: 'spb',
      relocate: 'yes',
      skills: ['vuex'],
      error: { name: null },
    };

  },
  methods: {
    formValid() {
      let isValid = true;
      if (this.name.length === 0) {
        this.error.name = 'Enter your name';
        isValid = false;
      } else {
        this.error.name = null;
      }

      return isValid;
    },

    submitForm() {
      if (this.formValid()) {
        console.group('form Data');
        console.log('name', this.name);
        console.log('age', this.age);
        console.log('city', this.city);
        console.log('relocate', this.relocate);
        console.log('skills', this.skills);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border-color: #c25205;
}

</style>
