<template>
  <div class="relative inline-block text-left h-10">
    <div class="h-full">
      <button @click="showMenu = true" ref="button" type="button" class="inline-flex justify-between items-center w-full h-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        {{ selected || label }}
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-show="showMenu" v-closable="{ exclude: ['button'], handler: 'toggleDropDown' }" class="origin-top-right absolute right-0 z-10 mt-2 w-full min-w-[15rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div class="p-1 space-y-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <p v-for="(item , index) in items" :key="index" @click="selectedItem(item)" :class="[selected == item ? 'bg-gray-100 text-gray-900' : 'text-gray-700' , 'text-gray-700 block px-4 py-2 text-sm rounded cursor-pointer']" role="menuitem">
            {{ item }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    items: Array,
    label: String
  },
  model: {
    prop: 'text',
    event: 'update'
  },
  data () {
    return {
      showMenu: false,
      selected: null
    }
  },
  methods: {
    toggleDropDown () {
      this.showMenu = false
    },
    selectedItem (item) {
      this.$emit('update', item)
      this.selected = item
      this.showMenu = false
    }
  }
}
</script>
