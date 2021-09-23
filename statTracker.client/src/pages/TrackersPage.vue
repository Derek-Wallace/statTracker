<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 mx-auto d-flex justify-content-center">
        <h1>Game Name</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex">
        <p>stat:</p>
        <p role="button" class="mx-2" @click="decrease">
          -
        </p>
        <p>
          {{ stat1 }}
        </p>
        <p role="button" class="mx-2" @click="increase">
          +
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { statService } from '../services/StatService'
export default {
  setup() {
    return {
      stat1: computed(() => AppState.stat1),
      increase() {
        statService.increase()
      },
      decrease() {
        statService.decrease()
      }
    }
  }
}
</script>

<style>

</style>
