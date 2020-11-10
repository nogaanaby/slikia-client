<template>
  <div class="dashb]oard-container">
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

    <div class="actions">
      <el-button type="primary" icon="el-icon-plus" circle />
      <el-button type="primary" plain icon="el-icon-download" circle />
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainTable',
  // props: ['tableData'],
  data() {
    return {
    }
  },
  computed: {

  },
  created() {
    const tableRow = {
      created_at:
        {
          title: 'זמן',
          value: '2016-09-03 16:34:09',
          sortable: true
        },
      citizen_name:
        {
          title: 'שם תושב',
          value: 'עידן',
          sortable: false
        },
      citizen_id:
        {
          title: 'מספר תושב',
          value: '2209991',
          sortable: true
        },
      product_name:
        {
          title: 'מוצר',
          value: "צ'ייסר וודקה",
          sortable: false
        },
      quantity:
        {
          title: 'כמות',
          value: '1',
          sortable: true
        }
    }

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

</style>
