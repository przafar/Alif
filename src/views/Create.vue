<template>
  <div class="container">
    <form @submit.prevent="submitHandler">
      <div class="md-form form-group mt-5">
        <label for="formGroupExampleInputMD">Ф.И.О {{ name }}</label>
        <input type="text" class="form-control" id="formGroupExampleInputMD" v-model="name" placeholder="Имя пользователья" >
      </div>
      <div class="md-form form-group mt-3">
        <label for="formGroupExampleInput2MD">Должность: {{ position }}</label>
        <input type="text" class="form-control" id="formGroupExampleInput2MD" v-model="position" placeholder="Должность">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend" >
          <label class="input-group-text text-uppercase" for="inputGroupSelect01">Отдел: {{ department }}</label>
        </div>
        <select @change="onChange($event)" v-model="department" class="custom-select text-uppercase" id="inputGroupSelect01">
          <option :value="dep"
                  v-for="dep in deparments" :key="dep.id"
          >
          {{ dep }}
          </option>
        </select>
      </div>
      <h5 class="mt-4">Пол</h5>
      <div class="form-check">
        <input v-model="gender" value="муж" type="radio" class="form-check-input" id="materialGroupExample1" name="groupOfMaterialRadios">
        <label class="form-check-label" for="materialGroupExample1">Муж</label>
      </div>
      <div class="form-check">
        <input v-model="gender" value="жен" type="radio" class="form-check-input" id="materialGroupExample2" name="groupOfMaterialRadios" checked>
        <label class="form-check-label" for="materialGroupExample2">Жен</label>
      </div>
      <h5 class="mt-4">Дата рождения</h5>
      <vuejs-datepicker class="mt-3" format="dd/MM/yyyy" v-model="date"></vuejs-datepicker>
      <div class="d-inline-block mt-5">
        <button type="submit" class="btn btn-info px-4">Создать</button>
      </div>
    </form>
  </div>
</template>
<script>
import vuejsDatepicker from 'vuejs-datepicker';

export default {
  data: () => ({
    gender: '',
    name: '',
    position: '',
    date: '',
    deparments: ['ит', 'бухгалтерия', 'маркетинг'],
    department: '',
    member: []

  }),
  methods: {
    async submitHandler() {
      const info = {
        name: this.name,
        department: this.department,
        position: this.position,
        gender: this.gender,
        date: this.date,

      }
      await this.$store.dispatch('createData', info)
      this.$router.go(-1)

    },
    onChange(event) {
      this.deparment = event.target.value
    },
  },
  async mounted() {
    
  },
  components: {
    vuejsDatepicker
  }
}
</script>