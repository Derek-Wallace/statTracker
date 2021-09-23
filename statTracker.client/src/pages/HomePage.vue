<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 my-5 d-flex justify-content-center mx-auto">
        <h1>Stat Trackers</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2 mx-5">
        <div role="button" @click="tracker" class="blue-border p-2 d-flex justify-content-center align-items-center">
          <h2>
            Game Name
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../router'
export default {
  setup() {
    return {
      tracker() {
        router.push({ name: 'Tracker' })
      }
    }
  },
  name: 'Home'
}
</script>

<style scoped lang="scss">
.blue-border {
  border: blue solid 2px;
}
.blue-border:hover {
  background-color: blue;
  transition: .5s all;
  color: rgb(236, 235, 235);
}
</style>
