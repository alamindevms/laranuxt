<template>
  <input
    type="text"
    :value="value"
    @input="onInput"
    class="h-10 w-full rounded-md border border-gray-200 px-2"
  >
</template>

<script>
export default {
  name: "customMethod",
  props:{
    value: String
  },
  methods:{
    onInput(event){
      this.$emit('input' , event.target.value)
    }
  }
}
</script>
