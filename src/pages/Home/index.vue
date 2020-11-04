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


export default {
  name: 'Home',
  components: {
    ListContainer,
    Foods,
    Getmarry,
    Study,
    Service,
    Hotel,
    TypeNav

  }
}
</script>

<style scoped>

</style>
