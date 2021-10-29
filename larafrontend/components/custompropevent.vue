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
  name: "customPropEvent",
  props:{
    text: String
  },
  model:{
    prop: 'text',
    event: 'update'
  },
  methods:{
    onInput(event){
      this.$emit('update' , event.target.value)
    }
  }
}
</script>
