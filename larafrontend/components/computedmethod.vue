<template>
  <input
    type="text"
    v-model="model"
    class="h-10 w-full rounded-md border border-gray-200 px-2"
  >
</template>

<script>
export default {
  name: "computedMethod",
  props:{
    value: String
  },
  computed:{
    model:{
      get(){
        return  this.value
      },
      set(value){
        this.$emit('input' , value)
      }
    }
  }
}
</script>
