<template>
  <div class="dashboard-container">

    <p>{{ this.currentRole }}</p>

    <el-card class="box-card">
      <el-table
        align="right"
        stripe
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          v-if="this.currentRole=='adminDashboard'"
          align="right"
          label="עריכה"
          width="300"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle />
            <el-button type="danger" icon="el-icon-delete" circle />
          </template>
        </el-table-column>

        <el-table-column
          sortable
          align="right"
          prop="quantity"
          label="כמות"
        />
        <el-table-column
          align="right"
          prop="product"
          label="מוצר"
        />
        <el-table-column
          align="right"
          prop="citizen_name"
          label="שם תושב"
        />
        <el-table-column
          align="right"
          prop="citizen_id"
          label="מספר תושב"
        />
        <el-table-column
          align="right"
          sortable
          prop="datime"
          label="זמן"
        />
      </el-table>
    </el-card>
    <!-- <component :is="currentRole" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import store from '../../store'

export default {
  name: 'Citizens',
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
