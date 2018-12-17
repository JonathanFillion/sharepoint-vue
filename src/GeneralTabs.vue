<template>
  <div class="text-small">
	<div ref="classic" class="clickable" v-bind:class="{text_selected: 'classic' === this.isDisplayed}" v-on:click="click('classic')">Classic view</div>
  	<div ref="ass" class="clickable" v-bind:class="{text_selected: 'ass' === this.isDisplayed}" v-on:click="click('ass')">Assessment view</div>
  	<div ref="on" class="clickable" v-bind:class="{text_selected: 'on' === this.isDisplayed}" v-on:click="click('on')">Onboarding view</div>
  </div>
</template>
<script>
	export default {
	//
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
	.text_selected {
		background-color: black;
		color: white;
	}
	
	.clickable {
		cursor: pointer;
		margin: 5px;
	}
</style>
