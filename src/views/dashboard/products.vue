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
  name: 'Products',
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
        name:"product_id",
        title: 'מספר מוצר',
        sortable: true
      },
      {
        name:"product_name",
        title: 'שם מוצר',
        sortable: true
      },
      {
        name:"quantity",
        title: 'כמות',
        sortable: true
      }
    ]

    this.tableData = [
      {
        created_at: '2016-05-03 16:34:09',
        product_id: '556446',
        product_name: 'בירה שחורה',
        quantity:'40'
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
