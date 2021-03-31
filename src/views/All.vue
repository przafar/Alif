<template>
  <div>
    <div class="card card-cascade narrower">
      <div
        class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 mt-3 d-flex justify-content-between align-items-center">
        <router-link to="/" class="mx-3">
          <a class="font-weight-bold text-secondary" href="">Главная</a>
        </router-link>
        <router-link to="/create" class="mx-3">
          <a class="font-weight-bold text-secondary" href="">Добавить сотрудника</a>
        </router-link>
      </div>
      <div class="px-4 mt-4">
        <div class="table-wrapper">
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th scope="row">№</th>
                <th class="th-lg">
                  <a>Ф.И.О
                    <i class="fas fa-sort ml-1"></i>
                  </a>
                </th>
                <th class="th-lg">
                  <a class="dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Отдел</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-uppercase" @click="onChange(dep)" v-for="dep in deparments" :key="dep.id">{{ dep }}</a>
                  </div>
                </th>
                <th class="th-lg">
                  <a href="">Должность
                  </a>
                </th>
                <th class="th-lg">
                  <a class="dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Пол</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-uppercase" @click="filterGender(gen)" v-for="gen in gender" :key="gen.id">{{ gen }}</a>
                  </div>
                </th>
                <th class="th-lg">
                  <a href="">Дата рождения
                  </a>
                </th>
              </tr>
            </thead>
            <tbody v-for="(per, index) in items" :key="index">
                <router-link tag="tr" :to="{ name: 'Member', params: { id: per.id} }">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ per.name }}</td>
                  <td class="text-uppercase">{{ per.department }}</td>
                  <td>{{ per.position }}</td>
                  <td>{{ per.gender }}</td>
                  <td>{{ per.date.slice(0, 7) }}</td>
                </router-link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="mt-4 ml-4">
      <paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Назад'"
        :next-text="'Вперед'"
        :container-class="'pagination'"
        :page-class="'page-item page-link active'"
        :prev-class="'page-link page-item'"
        :next-class="'page-link page-item'"
        :active-class="'primary-color'"
        >
      </paginate>
    </div>
  </div>
</template>
<script>
import paginationMixin from '../mixins/pagination.mixin'
export default {
  mixins: [paginationMixin],
  data: () => ({
    person: [],
    deparments: ['ит', 'бухгалтерия', 'маркетинг'],
    gender: ['муж', 'жен']
  }),
  computed: {
  
  },
  methods: {

  },
  async mounted () {
    this.person = await this.$store.dispatch('loadData')
    this.setupPagination(this.person.map(person => {
      return {
        ...person,
      }
    }))
  }
}
</script>