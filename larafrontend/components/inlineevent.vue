<template>
  <input type="text" @input="$emit('inlineEvent' , $event.target.value)" class="h-10 w-full rounded-md border border-gray-200 px-2">
</template>

<script>
export default {
  name: "inlineEvent"
}
</script>
