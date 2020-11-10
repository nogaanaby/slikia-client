<template>
  <div class="dashboard-container" />
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Products',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard',
      tableData: []
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }

    // axios and get the data from the server

    this.tableData = [
      {
        datime: '2016-05-03 16:34:09',
        citizen_name: 'יאיר',
        citizen_id: '008997',
        product: 'בירה גולדסטאר',
        quantity: '2'
      },
      {
        datime: '2016-09-03 16:34:09',
        citizen_name: 'יאיר',
        citizen_id: '008997',
        product: 'בירה גולדסטאר',
        quantity: '2'
      },
      {
        datime: '2016-08-03 16:34:09',
        citizen_name: 'יאיר',
        citizen_id: '008997',
        product: 'בירה גולדסטאר',
        quantity: '2'
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
