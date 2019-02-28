<template>
  <div class="text-small">
	<div ref="classic" title="The classic view we are using since the beginning of sharepoint" class="clickable" v-bind:class="{text_selected: 'classic' === this.isDisplayed}" v-on:click="click('classic')">Old Project view</div>
	<div ref="wp_over" title="Work package overview" class="clickable" v-bind:class="{text_selected: 'wp_over' === this.isDisplayed}" v-on:click="click('wp_over')">WP Overview</div>
  	<div ref="ass" title="An selection of fields relevant to the Assessment phase" class="clickable" v-bind:class="{text_selected: 'ass' === this.isDisplayed}" v-on:click="click('ass')">Assessment view</div>
  	<div ref="on" title="An overview of the onboarding progress" class="clickable" v-bind:class="{text_selected: 'on' === this.isDisplayed}" v-on:click="click('on')">Onboarding view</div>
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
