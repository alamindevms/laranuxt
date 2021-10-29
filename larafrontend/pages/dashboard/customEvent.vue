<template>
  <div class="space-y-4">
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Inline Event: {{ inlineValue }} </h1>
      <inlineevent placeholder="inline event" @inlineEvent="inlineEventTriggerFromParent"/>
    </div>
    <div class="px-5 py-10 bg-blue-100 rounded-md">
      <h1>Option Api Event: {{ optionValue }} </h1>
      <optionsevent placeholder="option api event" @optionEvent="optionEventTriggerFromParent"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "customEvent",
  data () {
    return {
      inlineValue: '',
      optionValue: ''
    }
  },
  methods: {
    inlineEventTriggerFromParent(event){
      this.inlineValue = event
      console.log(event)
    },
    optionEventTriggerFromParent(event){
      this.optionValue = event
      console.log(event)
    }
  }
}
</script>
