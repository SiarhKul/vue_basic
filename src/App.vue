<template>
  <div class='container'>
    <app-alert :alert='alert' @close='alert=null'></app-alert>
    <form class='card' @submit.prevent='createPerson'>
      <h2>Работа с базой данных</h2>

      <div class='form-control'>
        <label for='name'>Enter name</label>
        <input type='text' id='name' v-model.trim='name'>
      </div>
      <button class='btn primary' :disabled='name.length===0'>Submit</button>
    </form>

    <app-loader v-if='loading'></app-loader>

    <app-people-list
      v-else
      :people='people'
      @load='loadPeople'
      @remove='removePerson'
    ></app-people-list>
  </div>
</template>
//-------------------------------------------------JS
<script>
import AppPeopleList from '@/AppPeopleList';
import AppAlert from '@/AppAlert';
import AppLoader from '@/AppLoader';
import axios from 'axios';

export default {

  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false,
    };
  },

  mounted() {
    this.loadPeople();
  },
  methods: {
    async createPerson() {
      const response = await fetch('https://vue-with-http-2ae88-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name,
        }),
      });

      const firebaseData = await response.json();

      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      });

      this.name = '';

    },

    async loadPeople() {
      try {
        this.loading = true;
        const { data } = await axios.get('https://vue-with-http-2ae88-default-rtdb.europe-west1.firebasedatabase.app/people.json');
        if (!data) {
          throw new Error('List of people it empty');
        }

        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key],
          };
        });

        this.loading = false;
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Error',
          text: e.message,
        };
        this.loading = false;
      }
    },

    async removePerson(id) {
      console.log(id);

      try {
        const name = this.people.find(person => person.id === id).firstName;
        await axios.delete(`https://vue-with-http-2ae88-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`);
        this.people = this.people.filter(person => person.id !== id);
        this.alert = {
          type: 'primary',
          title: 'Success',
          text: `User ${name} was  removed`,
        };
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  components: { AppLoader, AppPeopleList, AppAlert },
};
</script>
//-------------------------------------------------CSS
<style>

</style>
