<template>
  <div class="text-small">
  	<div ref="pre" class="spaced">Pre-Assessment</div>
  	<div ref="ass" class="spaced">Assessment</div>
  	<div ref="on" class="spaced">Onboarded</div>
  </div>
</template>
<script>
	export default {
	data () {
		return {}	
	},
  	mounted: function() {
    	console.log(this.$refs);
    	console.log("should iterate keys, then add click listener { () => this.selected = true, all others = false}")
  	}
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
	.spaced {
		margin: 5px;
	}
</style>
