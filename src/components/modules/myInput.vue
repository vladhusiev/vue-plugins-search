<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.fetchAllData()
    },
    ...mapActions({
        fetchAllData: 'packages/fetchAllData',
    }),
  }
}
</script>

<style scoped>

</style>