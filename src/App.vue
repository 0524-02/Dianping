<template>
 <div>
   <!-- <Detail></Detail> -->
   <Search></Search>
 </div>
</template>

<script>
import Detail from "./pages/Detail/index"
import Search from "./pages/Search/index"
export default {
  name: 'APP',
  components:{
    Detail,
    Search
  }
}
</script>

<style scoped>

</style>
