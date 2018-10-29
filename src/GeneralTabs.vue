<template>
  <div class="text-small">
  	<div ref="pre" class="clickable" v-on:click="click('pre')">Pre-Assessment</div>
  	<div ref="ass" class="clickable" v-on:click="click('ass')">Assessment</div>
  	<div ref="on" class="clickable" v-on:click="click('on')">Onboarded</div>
  </div>
</template>
<script>
	export default {
	props: ["isDisplayed"],
	
	data () {
		return {}	
	},
  	mounted: function() {
    },
	methods: {
	click: function(selection) {
			this.$emit('hoistDisplayRequest',selection)
	},
  },
}
</script>

<style lang="scss" scoped>
	.text-small {
		text-align: center;
		font-size: 16px;
	}
	.text-selected {
		background-color: black;
		color: white;
	}
	
	.clickable {
		cursor: pointer;
		margin: 5px;
	}
</style>
