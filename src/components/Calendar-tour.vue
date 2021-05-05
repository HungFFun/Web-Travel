<template>
  <div>
    <mdb-container class="pt-4">
      <v-calendar :attributes="attrsA" @dayclick="onDayClick" />
      <v-calendar :attributes="attrsA" class="ml-2"></v-calendar>
      <v-calendar :attributes="attrsB" class="ml-2"></v-calendar>
    </mdb-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrsA: [
        {
          highlight: 'red',
          dates: [new Date(2021, 4, 18), new Date(2021, 4, 16)],
        },
      ],
      attrsB: [
        {
          highlight: 'red',
          dates: new Date(2021, 4, 18),
        },
      ],
    };
  },

  methods: {
    onDayClick(day) {
      console.log(day.ariaLabel);
      console.log('get tour by date');
    },
  },
};
</script>

<style lang="scss" scoped></style>
