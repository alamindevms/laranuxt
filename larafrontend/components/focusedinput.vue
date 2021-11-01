<template>
  <input class="h-10 focus:ring-cyan-500 focus:border-cyan-500 relative block w-full rounded-md sm:text-sm border-gray-300" :value="value" @input="onInput">
</template>

<script>
export default {
  name: "focusedInput",
  props: ['value'],

  model:{
    prop: 'value',
    event: 'update'
  },

  methods: {
    onInput(event){
      this.$emit('update' , event.target.value)
    },
  }
}
</script>
