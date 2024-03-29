<template>
  <div class="space-y-4">
    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>1. Two Way Data Binding: {{ value }} </h1>
      <twowaydatabinding :modelValue="value" @update:modelValue="value = $event" placeholder="Data Binding"/>
    </div>

    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>2. Two Way Data Binding with Modifier: {{ text }} </h1>
      <modelmodifier :text.sync="text" placeholder="Data Binding"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">The ".sync" modifier (VueJS 2)</p>
        <p class="text-sx font-light text-gray-600">This is not a v-model implementation exactly but it will work as it is. With the .sync modifier (VueJS 2.3+), the child component doesn’t need a value prop. Instead, it uses the same prop name you synced in the parent.
          Also instead of emitting an input event to update the prop, you emit the conveniently named event update:text. (Source:
          <a href="https://medium.com/front-end-weekly/vues-v-model-directive-vs-sync-modifier-d1f83957c57c" class="text-blue-600">Vue’s new and improved prop.sync</a>).</p>

      </div>
    </div>

    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>3. Two Way Data Binding with Custom prop and event: {{ text2 }} </h1>
      <custompropevent v-model="text2"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">Custom prop and event (VueJS 2)</p>
        <p class="text-sx font-light text-gray-600">You might have noticed that, in the previous examples, the name of the prop is always value and the name of the event is always input. These are defaults to implement a v-model in your custom component. But you can change it if you want. You can name the prop and the event according to your own needs.
          For that to be possible you may set the model attribute and tell the component which names you expect to represent the prop and the event that will update it.</p>

      </div>
    </div>

    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>4. Local variable watcher: {{ text3 }} </h1>
      <localwatcher v-model="text3"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">Local variable watcher</p>
        <p class="text-sx font-light text-gray-600">You might have noticed that, in the previous examples, the name of the prop is always value and the name of the event is always input. These are defaults to implement a v-model in your custom component. But you can change it if you want. You can name the prop and the event according to your own needs.
          For that to be possible you may set the model attribute and tell the component which names you expect to represent the prop and the event that will update it.</p>
        <p class="text-sx font-light text-red-600 italic">The limitation is that when the value is changed from dev-tools it's not changed input field value but changed value. </p>

      </div>
    </div>

    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>5. Custom method: {{ text4 }} </h1>
      <custommethod v-model="text4"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">Custom method</p>
        <p class="text-sx font-light text-gray-600">You might have already read that, to prevent performance issues, you should avoid using watchers in your application.
          In this second example, we take advantage of the @input event triggered by the native input element* and, using a custom method inside our component, we pass the value of the input to the parent component emitting an input event so that the value prop is updated from the outside**.
        <p class="text-sx font-light text-gray-600">It is also important to mention that in this case we do not use the v-model in the native input, but the value attribute.</p>
        <p class="text-sx font-light text-gray-600 italic">* VueJS already attaches event listeners to form inputs for us automatically and when these inputs are destroyed, all listeners are destroyed as well</p>
        <p class="text-sx font-medium text-gray-800">⚠ VueJS 3: if you are using the latest version of VueJS, change the name of the prop from <span class="bg-green-100 px-2 py-1">value to modelValue</span> and the name of the event from <span class="bg-green-100 px-2 py-1"> input to update:modelValue </span> as per VueJS 3 docs</p>
      </div>
    </div>

    <div class="px-5 py-10 bg-cyan-100 rounded-md">
      <h1>6. "Powerful" computed property: {{ text5 }} </h1>
      <computedmethod v-model="text5"/>

      <div class="bg-gray-50 rounded-md p-2 mt-4">
        <p class="text-base font-medium text-gray-800">"Powerful" computed property</p>
        <p class="text-sx font-light text-gray-600">Another way of implementing v-model in your custom component is using computed properties getters and setters.</p>
        <p class="text-sx font-light text-gray-600 italic">You can define a local computed property, implement a getter that returns the value property, and a setter that emits an input event for the parent component to update the value prop from the outside**.</p>
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
      text2: '',
      text3: '',
      text4: '',
      text5: '',
    }
  },
}
</script>
