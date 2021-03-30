<template>
  <div class="home container">
    <ul class="list-group mt-5" >
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Количество всех сотрудников
        <h3 class="badge bg-primary rounded-pill text-white">{{ person.length }}</h3>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Количество мужчин
        <h3 class="badge bg-primary rounded-pill text-white">{{ filteredArray[0].count }}</h3>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Количество женщин
        <h3 class="badge  bg-primary rounded-pill text-white">{{ filteredArray[1].count }}</h3>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Средний возраст сотрудника в компании
        <h3 class="badge bg-primary rounded-pill text-white">{{ avarageAge }}</h3>
      </li>
    </ul>
    <router-link tag="button" to="/all?page=1" type="button" class="btn btn-success mt-4">Страница всех сотрудников</router-link>
    <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    person: [],
    age: []
  }),
  computed: {
    filteredArray() {
      var ret = {}
      for (let i in this.person) {
        let key = this.person[i].gender
        ret[key] = {
           gender: key,
           count: ret[key] && ret[key].count ? ret[key].count + 1 : 1
        }
      }
      return Object.values(ret)
    },
    avarageAge() {
      var total = 0
      var avarage = 0
      this.person.forEach(i => {
        let key = i.date
        let count = Object.values(this.person).length
        let year = Number(key.substr(0, 4));
        let month = Number(key.substr(5, 2)) - 1;
        let day = Number(key.substr(8, 2));
        let today = new Date();
        var age = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
          age--;
        }
        total += age
        avarage = (total / count)
      })
      return avarage.toString().slice(0, 2)
    },
  },
  methods: {
    
  },
  async mounted() {
    this.person = await this.$store.dispatch('loadData')
  },

 
}
</script>
