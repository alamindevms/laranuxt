<template>
  <div>
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Select Option: {{ selected }} </h1>
      <SelectOption v-model="selected" :items="items" label="Select Option"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectOption",
  data () {
    return {
      items: ['One', 'Two', 'Three'],
      selected: ''
    }
  },
}
</script>
