<template>
  <div>
    <mdb-container class="pt-4">
      <v-calendar :attributes="attrs"></v-calendar>
      <v-calendar :attributes="attrs" class="ml-2"></v-calendar>
      <v-calendar :attributes="attrs" class="ml-2"></v-calendar>
    </mdb-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
        {
          highlight: 'red',
          dates: new Date(2021, 4, 16),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
