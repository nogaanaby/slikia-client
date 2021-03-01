<template>
  <div class="dashboard-container">
    <SlikiaTable 
    :userType="userType" 
    :tableData.sync="tableData"
    :tableFields.sync="tableFields"
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
        for (let citizen of data){
          this.tableData.push(citizen)
        }
      })

    this.tableFields = [
      {
        name:"lastName",
        title: 'שם משפחה',
        sortable: true
      },
      {
        name:"firstName",
        title: 'שם פרטי',
        sortable: true
      },
      {
        name:"budgetId",
        title: 'מספר תושב',
        sortable: true
      },
      {
        name:"createdAt",
        title: 'זמן',
        sortable: true
      },   
      {
        name:"id",
        title: 'id',
        sortable: true
      },
    ]
  },
  methods:{
    deleteItem(itemIndex) {
      const citizen=this.tableData[itemIndex]
      const citizenName=citizen.firstName+' '+citizen.lastName
      const citizenId=citizen.id

      this.$confirm(` האם אתה בטוח שאתה רוצה למחוק את התושב ${citizenName}?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
          this.$store.dispatch('citizen/deleteCitizen',citizenId)
          .then((newCitizensTable) => {
            this.tableData=newCitizensTable
              this.$forceUpdate();
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
          })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });          
      });
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
