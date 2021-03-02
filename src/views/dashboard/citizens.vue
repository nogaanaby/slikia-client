<template>
  <div class="dashboard-container">
    <SlikiaTable
      :user-type="userType"
      :table-data.sync="tableData"
      :table-fields.sync="tableFields"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SlikiaTable from '@/components/SlikiaTable'

export default {
  name: 'Citizens',
  components: { SlikiaTable },

  data() {
    return {
      tableData: [],
      tableFields: []
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'userType'
    ])
  },
  watch: {

  },
  created() {
    this.$store.dispatch('citizen/getCitizens')
      .then((data) => {
        console.log(data)
        for (const citizen of data) {
          this.tableData.push(citizen)
        }
      })

    this.tableFields = [
      {
        name: 'lastName',
        title: 'שם משפחה',
        sortable: true,
        editable:true,
        type: 'text',
        order: 4

      },
      {
        name: 'firstName',
        title: 'שם פרטי',
        sortable: true,
        editable:true,
        type: 'text',
        order: 3
      },
      {
        name: 'budgetId',
        title: 'מספר תושב',
        sortable: true,
        editable:true,
        type: 'int',
        order: 2
      },
      {
        name: 'createdAt',
        title: 'זמן',
        sortable: true,
        editable:true,
        type: 'date',
        order: 1
      },
      {
        name: 'id',
        title: 'id',
        sortable: true,
        editable:false,
        type: 'id',
        order: 0
      }
    ]
  },
  methods: {
    deleteItem(itemIndex) {
      const citizen = this.tableData[itemIndex]
      const citizenName = citizen.firstName + ' ' + citizen.lastName
      const citizenId = citizen.id

        this.$store.dispatch('citizen/deleteCitizen', citizenId)
          .then((newCitizensTable) => {
            this.tableData = newCitizensTable
            this.$forceUpdate()
            this.$message({
              type: 'success',
              message: 'Delete completed'
            })
          }).catch((err) => {
            this.$message({
              type: 'err',
              message: err
            })
          })
    }
  }
}
</script>

<style>
  .dashboard-container{
    margin: auto;
    height: 100%;
    padding: 10%;
  }
</style>
