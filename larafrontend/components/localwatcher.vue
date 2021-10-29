<template>
  <input
    type="text"
    v-model="model"
    class="h-10 w-full rounded-md border border-gray-200 px-2"
  >
</template>

<script>
export default {
  name: "localWatcher",
  props:{
    value: String
  },
  data(){
    return {
      model: this.value
    }
  },
  watch:{
    model(currentValue){
      console.log(currentValue)
      this.$emit('input' , currentValue)
    }
  }
}
</script>
