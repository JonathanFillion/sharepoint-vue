<template>
  <div class="text-small">
  	<div class="clickable" ref="tfa" v-bind:class="{text_selected: 'tfa' === this.isDisplayed}" v-on:click="click('tfa')">TFA</div>
  </div>
</template>
<script>
	export default {
	props: ["isDisplayed"],
	data () {
		return {}	
	},
	mounted: function() {
		console.log(this.$refs)
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
	.text_selected {
		background-color: black;
		color: white;
	}
	
	.clickable {
		cursor: pointer;
		margin: 5px;
		}
</style>
