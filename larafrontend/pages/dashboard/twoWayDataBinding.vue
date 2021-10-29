<template>
  <div class="space-y-4">
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Two Way Data Binding: {{ value }} </h1>
      <twowaydatabinding :modelValue="value" @update:modelValue="value = $event" placeholder="Data Binding"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "twoWayDataBinding",
  data(){
    return {
      value: ''
    }
  },
}
</script>
