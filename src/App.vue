<template>
  <div class='container column'>
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
        <textarea id='value' rows='3' v-model='valueBlock'></textarea>
        <small v-if='error'> Колличестов символов должно быть больше 3</small>
      </div>

      <button class='btn primary'>Добавить</button>
    </form>

    <div class='card card-w70'>
      <app-nick-name
        v-for='(cvBlock,key) in cvBlocks'
        :key='key'
        :cvBlock='cvBlock.cvBlock'
        :cvBlockDescription='cvBlock.cvBlockDescription'
      >
      </app-nick-name>

      <!--      <h1>Резюме Nickname</h1>
            <div class='avatar'>
              <img src='https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png'>
            </div>
            <h2>Опыт работы</h2>
            <p>
              главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в
              некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь
              отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70
              лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует
              неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно
              принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к
              измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].
            </p>-->
      <h3 v-if='cvBlocks.length===0'>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <div class='container'>
    <p>
      <button class='btn primary'>Загрузить комментарии</button>
    </p>
    <div class='card'>
      <h2>Комментарии</h2>
      <ul class='list'>
        <li class='list-item'>
          <div>
            <p><strong>test@microsoft.com</strong></p>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
          </div>
        </li>
      </ul>
    </div>
    <div class='loader'></div>
  </div>
</template>

<script>
import AppNickName from '@/components/AppNickName';

export default {
  data() {
    return {
      typeBlock: 'title',
      valueBlock: '',
      error: false,
      cvBlocks: [],
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
        this.cvBlocks.push({
          cvBlock: this.typeBlock,
          cvBlockDescription: this.valueBlock,
        });

        this.typeBlock = 'title';
        this.valueBlock = '';

        this.error = false;

      } else {
        this.error = true;
      }
      this.console.log(this.cvBlocks);
    },
  },

  computed: {},

  components: {
    AppNickName,
  },
};
</script>

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
