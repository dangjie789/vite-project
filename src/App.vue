<script >
export default {
  name:'app',
  mounted(){
   this.$storage.setItem("project",{one:'math',teo:'english'})
   this.$storage.setItem("result",[100,100])
   this.$storage.removeItem("project")
   this.$storage.clear()
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
