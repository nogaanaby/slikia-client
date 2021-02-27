<template>
  <div class="table-container">
    <p>{{ this.userType }}</p>

    <el-card class="box-card">
      <el-table
        align="right"
        stripe
        :data="tableData"
        style="width: 100%"
      >

        <el-table-column
          v-if="this.userType=='admin'"
          align="right"
          label="עריכה"
          width="300"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle />
            <el-button type="danger" icon="el-icon-delete" circle />
          </template>
        </el-table-column>

        <el-table-column v-for="field in tableFields" :key="field.name"
          sortable
          align="right"
          :prop="field.name"
          :label="field.title"
        />

      </el-table>
    </el-card>

    <div class="actions">
      <el-button type="primary" icon="el-icon-plus" circle />
      <el-button type="primary" plain icon="el-icon-download" circle />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SlikiaTable',
  props: ['tableFields','tableData','userType'],
  data() {
    return {
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
