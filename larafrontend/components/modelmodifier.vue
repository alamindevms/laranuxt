<template>
  <input
    type="text"
    :value="text"
    @input="onInput"
    class="h-10 w-full rounded-md border border-gray-200 px-2"
  >
</template>

<script>
export default {
  name: "modelModifier",
  props:{
    text: String,
  },
  methods:{
    onInput(event){
      this.$emit('update:text' , event.target.value)
    }
  }
}
</script>
