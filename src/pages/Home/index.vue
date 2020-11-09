<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Foods></Foods>
    <Getmarry></Getmarry>
    <Foods></Foods>
    <Getmarry></Getmarry>
    <Study></Study>
    <Service></Service>
    <Hotel></Hotel>
    <!-- <Crumbs></Crumbs> -->
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Foods from './Foods'
import Getmarry from './Getmarry'
import Study from './Study'
import Service from './Service'
import Hotel from './Hotel'
import TypeNav from '../../components/TypeNav'
import Crumbs from './Crumbs'


export default {
  name: 'Home',
  components: {
    ListContainer,
    Foods,
    Getmarry,
    Study,
    Service,
    Hotel,
    TypeNav,
    Crumbs

  },
  mounted() {
    const top = document.documentElement
  }
}
</script>

<style scoped>

</style>
