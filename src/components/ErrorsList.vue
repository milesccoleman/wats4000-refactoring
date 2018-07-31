<template>
	<div v-if="errorsData.length > 0">
    <h2>There was an error fetching weather data.</h2>
      <ul class="errors">
        <li v-for="error in errorsData">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorsData',
  data () {
    return {

    }
  },
  props: {
  	errorsData: []
  }
}
</script>

<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
</style>
