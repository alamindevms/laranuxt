<template>
	<div>
		<div class="mb-4 pb-4 border-b border-gray-200">
			<h1 class="text-gray-900">Dashboard</h1>
		</div>
		<div>
			<p class="text-sm text-gray-600 font-normal leading-7">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis at nihil ipsam. Excepturi voluptatem, nihil assumenda ad qui, sapiente illum sequi repellendus odio voluptatum fugiat molestias et. Dolore autem sed esse totam alias quis, culpa est corporis ullam voluptatibus minima similique nam nostrum inventore illo cumque architecto iusto id reiciendis, placeat laboriosam voluptates, velit suscipit. Laudantium corporis eaque deleniti, dolorum, eum sapiente totam culpa
				quod ducimus saepe magnam aliquam, praesentium vitae exercitationem placeat consequuntur. Illo facere laudantium debitis animi ad qui deleniti explicabo enim voluptate, assumenda iste minus inventore sunt facilis exercitationem recusandae nobis eligendi placeat praesentium doloremque nemo veritatis?
			</p>
      <p>{{ counted }}</p>
      <button @click="increment" class="px-4 py-2 rounded-md border border-gray-200 mt-4">Increment</button>
		</div>
	</div>
</template>

<script>
import {state} from "~/store";

export default {
	layout: "empty",
  computed:{
	  counted(){
	    return this.$store.state.count
    }
  },
  methods:{
    increment(){
	    this.$store.commit('valIncrement')
    }
  }
}
</script>

<style></style>
