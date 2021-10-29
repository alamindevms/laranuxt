<template>
  <input type="text" @input="optionApiEvent" class="h-10 w-full rounded-md border border-gray-200 px-2">
</template>

<script>
export default {
  name: "optionsEvent",
  methods:{
    optionApiEvent(event){
      this.$emit('optionEvent' , event.target.value)
    }

  }
}
</script>
