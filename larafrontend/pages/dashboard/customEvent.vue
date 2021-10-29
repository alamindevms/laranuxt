<template>
  <div>
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Inline Event: {{ inlineValue }} </h1>
      <inlineevent placeholder="inline event" @inlineEvent="eventTriggerFromParent"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "customEvent",
  data () {
    return {
      inlineValue: ''
    }
  },
  methods: {
    eventTriggerFromParent(event){
      this.inlineValue = event
      console.log(event)
    }
  }
}
</script>
