<template>
  <div class="dashboard-container">
    <SlikiaTable 
    :userType="userType" 
    :tableData.sync="tableData"
    :tableFields.sync="tableFields"
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
    // axios and get the data from the server

    this.tableFields = [
      {
        name:"created_at",
        title: 'זמן',
        sortable: true
      },
      {
        name:"citizen_id",
        title: 'מספר תושב',
        sortable: true
      },
      {
        name:"citizen_name",
        title: 'שם תושב',
        sortable: true
      }
    ]

    this.tableData = [
      {
        created_at: '2016-05-03 16:34:09',
        citizen_name: 'משה',
        citizen_id: '46464646',
      }
    ]
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
