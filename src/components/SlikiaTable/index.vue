<template>
  <div class="table-container">
    <p>{{ this.userType }}</p>

    <el-card class="box-card">
      <div class="actions" align="right">
        <el-button type="primary" icon="el-icon-plus" circle @click="addItem" />
        <el-button type="primary" plain icon="el-icon-download" circle @click="exportTable" />
      </div>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple"><h3 class="Title"> Actions</h3> </div>    
        </el-col>
        <el-col :span="4" 
          v-for="(value,key) in tableData[0]"
          :key="key"
          align="right"
          >
          <div class="grid-content bg-purple" v-if="getFieldType(key)!='id'"><h3 class="Title"> {{getFieldTitle(key)}}</h3> </div>
        </el-col>

        <el-col :span="4" align="right">
          <div class="grid-content bg-purple"><h3 class="Title"> Id</h3> </div>    
        </el-col>
      </el-row>
  
  
      <el-row v-for="(row,rowIndex) in tableData" :key="rowIndex">
        <el-divider></el-divider>

        <el-col :span="4">
          <el-button type="success" icon="el-icon-check" circle @click="saveEdit(rowIndex)" v-show="editMode==rowIndex" />
          <el-button type="primary" icon="el-icon-edit" circle @click="editItem(rowIndex)" />
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(rowIndex)" />          
        </el-col>
        
        <el-col :span="4" 
          v-for="(value,key) in row"
          :key="key"
          sortable
          align="right">
          <div>
            <div v-show="editMode!=rowIndex">
              <div class="grid-content bg-purple text-field" v-if="getFieldType(key)=='int' || getFieldType(key)=='text'"> {{value}} </div>
              <div class="grid-content bg-purple date-field" v-if="getFieldType(key)=='date'"> {{dateFormat(value)}} </div>
            </div>

            <el-input
              v-if=" (getFieldType(key)=='int' || getFieldType(key)=='text' )"
              v-show="editMode==rowIndex"
              :placeholder="'הנה'"
              v-model="row[key]">
            </el-input>
            <el-date-picker
              v-if=" (getFieldType(key)=='date' )"
              v-show="editMode==rowIndex"
              v-model="row[key]"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </div>       
        </el-col>

        <el-col :span="4" align="right">
          <div class="grid-content bg-purple text-field"> {{row.id}} </div>
        </el-col>      

      </el-row>

    </el-card>

  </div>
</template>

<script>

export default {
  name: 'SlikiaTable',
  props: ['tableFields', 'tableData', 'userType'],
  data() {
    return {
      somthigArr:[],
      editMode:-1
    }
  },
  computed: {

  },
  created() {
    this.somthig()
  },
  methods: {
    somthig(){
      // counter=0
      // for(let row in this.tableData){
      //   for(let field in row){


      //   }
      //   this.somthingArr.push({

      //   })
      // }
    },
    deleteItem(itemIndex) {
      this.$confirm(` האם אתה בטוח שאתה רוצה למחוק?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$emit('deleteItem', itemIndex)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    editItem(rowIndex){
      this.editMode=rowIndex
    },
    exportTable() {

    },
    addItem() {
      const newItem={}
      this.tableFields.map((field)=>{
        newItem[field.name]=""
        })
      this.tableData.unshift(newItem)
      //this.$emit('addItem')
    },
    saveEdit(rowIndex){
      this.$confirm(` האם אתה בטוח שאתה רוצה לשמור?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info'
      }).then(() => {
        this.$emit('editItem', rowIndex)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Edit canceled'
        })
      })
    },
    getFieldType(key) {
     for(let fieldIndex in this.tableFields){
       let field=this.tableFields[fieldIndex]
       if(field.name==key){
         return field.type
       }
     }
     return null
    },
    getFieldTitle(key) {
     for(let fieldIndex in this.tableFields){
       let field=this.tableFields[fieldIndex]
       if(field.name==key){
         return field.title
       }
     }
     return null
    },
    dateFormat(date){
      var todayTime = new Date(date);
      var month = todayTime.getMonth() + 1;
      var day = todayTime.getDate();
      var year = todayTime.getFullYear();
      return month + "/" + day + "/" + year;
    }

  }
}
</script>

<style lang="scss" scoped>

</style>



<!---
<template>
  <div class="table-container">
    <p>{{ this.userType }}</p>

    <el-card class="box-card">
      <div class="actions" align="right">
        <el-button type="primary" icon="el-icon-plus" circle @click="addItem" />
        <el-button type="primary" plain icon="el-icon-download" circle @click="exportTable" />
      </div>
      <el-table
        align="right"
        stripe
        :data="tableData"
        border
        style="width: 100%"
      >

        <el-table-column
          v-if="this.userType=='admin'"
          align="right"
          label="עריכה"
          width="300"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="editItem(scope.$index)" />
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(scope.$index)" />
          </template>
        </el-table-column>

        <el-table-column
          v-for="field in tableFields"
          :key="field.name"
          sortable
          align="right"
          :prop="field.name"
          :label="field.title"
        />

      </el-table>
    </el-card>

  </div>
</template>

<script>

export default {
  name: 'SlikiaTable',
  props: ['tableFields', 'tableData', 'userType'],
  data() {
    return {
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    deleteItem(itemIndex) {
      this.$emit('deleteItem', itemIndex)
    },
    editItem() {},
    exportTable() {

    },
    addItem() {
      debugger
      const newItem={}
      this.tableFields.map((field)=>{
        newItem[field.name]=""
        })
      this.tableData.unshift(newItem)
      //this.$emit('addItem')
    }

  }
}
</script>

<style lang="scss" scoped>

</style>


-->