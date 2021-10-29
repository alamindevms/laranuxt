<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue' , $event.target.value)"
    class="h-10 w-full rounded-md border border-gray-200 px-2"
  >
</template>

<script>
export default {
  name: "twoWayDataBinding",
  props:{
    modelValue: String
  }
}
</script>
