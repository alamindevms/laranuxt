<template>
  <div class="space-y-4">
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Two Way Data Binding: {{ value }} </h1>
      <twowaydatabinding :modelValue="value" @update:modelValue="value = $event" placeholder="Data Binding"/>
    </div>

    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Two Way Data Binding with Modifier: {{ text }} </h1>
      <modelmodifier :text.sync="text" placeholder="Data Binding"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">The ".sync" modifier (VueJS 2)</p>
        <p class="text-sx font-light text-gray-600">This is not a v-model implementation exactly but it will work as it is. With the .sync modifier (VueJS 2.3+), the child component doesn’t need a value prop. Instead, it uses the same prop name you synced in the parent.
          Also instead of emitting an input event to update the prop, you emit the conveniently named event update:text. (Source:
          <a href="https://medium.com/front-end-weekly/vues-v-model-directive-vs-sync-modifier-d1f83957c57c" class="text-blue-600">Vue’s new and improved prop.sync</a>).</p>

      </div>
    </div>

    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Two Way Data Binding with Custom prop and event: {{ text2 }} </h1>
      <custompropevent v-model="text2"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">Custom prop and event (VueJS 2)</p>
        <p class="text-sx font-light text-gray-600">You might have noticed that, in the previous examples, the name of the prop is always value and the name of the event is always input. These are defaults to implement a v-model in your custom component. But you can change it if you want. You can name the prop and the event according to your own needs.
          For that to be possible you may set the model attribute and tell the component which names you expect to represent the prop and the event that will update it.</p>

      </div>
    </div>

    <p class="text-sx font-light">Docs: <a href="https://dev.to/vcpablo/vuejs-2-different-ways-to-implement-v-model-1mjf" class="text-blue-600 my-2">https://dev.to/vcpablo/vuejs-2-different-ways-to-implement-v-model-1mjf</a></p>
  </div>
</template>

<script>
export default {
  name: "twoWayDataBinding",
  data(){
    return {
      value: '',
      text: '',
      text2: ''
    }
  },
}
</script>
