<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>other</h1>
        <div>{{ test }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    test(){
      return this.$store.getters['test/test']
    },
  },
  async created(){
    await this.$store.dispatch('test/getTest')
  },
}
</script>
