<template>
  <div>
    <input v-model="colourCode" type="text" placeholder="Enter colour code" />
  </div>
</template>

<script>
export default {
  name: "ColourCode",
  computed: {
    colourCode: {
      get() {
        return this.$store.state.colourCode;
      },
      set(newValue) {
        this.$store.dispatch("setColourCode", newValue);
      },
    },
  },
};
</script>

<style></style>
