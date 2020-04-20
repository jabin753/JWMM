<template>
  <div>
    <h1>Summary</h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summaryData: {},
      headers: [
        {
          text: 'Week',
          value: 'week'
        },
        { text: 'Lecture', value: 'lecture' }
      ],
      desserts: [
        {
          week: 'January 27–February 2',
          lecture: 'GENESIS 9-11'
        },
        {
          week: 'February 3-9',
          lecture: 'GENESIS 12-14'
        }
      ]
    }
  },
  mounted() {
    fetch('/api/wol/es')
      .then(res => res.json())
      .then(summaryData => (this.summaryData = summaryData))
  }
}
</script>
