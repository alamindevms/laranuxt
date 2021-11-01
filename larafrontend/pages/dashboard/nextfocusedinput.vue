<template>
  <div>
    <div class="px-5 py-10 bg-gray-100 rounded-md">
      <h1>Next Focused Input: {{ epfNoResult || 0 }} </h1>
      <div class="flex gap-1 flex-wrap">
        <focusedinput
          ref="epf_1"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_1"
          :class="{ 'border-red-500': false }"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          @keyup.native="focusNext($event,1)"
          @paste.native="onPaste($event)"
        />
        <focusedinput
          ref="epf_2"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_2"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,2)"
          @keyup.native.delete="focusPrev(2)"
        />
        <focusedinput
          ref="epf_3"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_3"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,3)"
          @keyup.native.delete="focusPrev(3)"
        />
        <focusedinput
          ref="epf_4"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_4"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,4)"
          @keyup.native.delete="focusPrev(4)"
        />
        <focusedinput
          ref="epf_5"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_5"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,5)"
          @keyup.native.delete="focusPrev(5)"
        />
        <focusedinput
          ref="epf_6"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_6"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,6)"
          @keyup.native.delete="focusPrev(6)"
        />
        <focusedinput
          ref="epf_7"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_7"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native="focusNext($event,7)"
          @keyup.native.delete="focusPrev(7)"
        />
        <focusedinput
          ref="epf_8"
          type="text"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          v-model="temp_epf.epf_8"
          class="!w-8 !h-8 sm:h-10 sm:w-12 text-xs text-center p-1"
          :class="{ 'border-red-500': false }"
          @keyup.native.delete="focusPrev(8)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nextFocusedInput",
  data() {
    return {
      temp_epf:{
        epf_1: null,
        epf_2: null,
        epf_3: null,
        epf_4: null,
        epf_5: null,
        epf_6: null,
        epf_7: null,
        epf_8: null,
      }
    };
  },
  computed:{
    epfNoResult(){
      let numb = this.temp_epf.epf_1
        +this.temp_epf.epf_2
        +this.temp_epf.epf_3
        +this.temp_epf.epf_4
        +this.temp_epf.epf_5
        +this.temp_epf.epf_6
        +this.temp_epf.epf_7
        +this.temp_epf.epf_8
      return parseInt(numb)
    }
  },
  methods: {
    onPaste(event){
      let pasteData = event.clipboardData.getData('text').split('')
      pasteData.forEach((data,index) => {
        switch (index){
          case 0:
            this.temp_epf.epf_1 = data
            break
          case 1:
            this.temp_epf.epf_2 = data
            break
          case 2:
            this.temp_epf.epf_3 = data
            break
          case 3:
            this.temp_epf.epf_4 = data
            break
          case 4:
            this.temp_epf.epf_5 = data
            break
          case 5:
            this.temp_epf.epf_6 = data
            break
          case 6:
            this.temp_epf.epf_7 = data
            break
          case 7:
            this.temp_epf.epf_8 = data
            break
        }
      })
    },
    focusNext(event,index){
      if(event.keyCode >= 48 && event.keyCode <= 57){
        switch (index){
          case 1:
            if(this.temp_epf.epf_1){
              this.$refs.epf_2.$el.focus()
            }
            break;
          case 2:
            if(this.temp_epf.epf_2){
              this.$refs.epf_3.$el.focus()
            }
            break;
          case 3:
            if(this.temp_epf.epf_3){
              this.$refs.epf_4.$el.focus()
            }
            break;
          case 4:
            if(this.temp_epf.epf_4){
              this.$refs.epf_5.$el.focus()
            }
            break;
          case 5:
            if(this.temp_epf.epf_5){
              this.$refs.epf_6.$el.focus()
            }
            break;
          case 6:
            if(this.temp_epf.epf_6){
              this.$refs.epf_7.$el.focus()
            }
            break;
          case 7:
            if(this.temp_epf.epf_7){
              this.$refs.epf_8.$el.focus()
            }
            break;
        }
      }
    },
    focusPrev(index){
      switch (index){
        case 2:
          this.$refs.epf_1.$el.focus()
          break;
        case 3:
          this.$refs.epf_2.$el.focus()
          break
        case 4:
          this.$refs.epf_3.$el.focus()
          break
        case 5:
          this.$refs.epf_4.$el.focus()
          break;
        case 6:
          this.$refs.epf_5.$el.focus()
          break
        case 7:
          this.$refs.epf_6.$el.focus()
          break
        case 8:
          this.$refs.epf_7.$el.focus()
          break
      }

    }
  },
}
</script>
