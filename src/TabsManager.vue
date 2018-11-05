<template>
  <div class="header-flex">
  	<div class="cell-flex clickable" v-on:click="mainSelection = 'nofilter';newDisplay('all')">
  		<div class="center-text">All</div>
  	</div>
  	<div class="cell-flex">
  		<div class="center-text clickable" v-on:click="mainSelection == 'general' ? mainSelection = '':mainSelection = 'general'">General</div>
  		<div v-if="mainSelection == 'general'">
  			<GeneralTabs :isDisplayed="this.shouldDisplay" v-on:hoistDisplayRequest="newDisplay" class="border"></GeneralTabs>
  		</div>
  	</div>
  	<div class="cell-flex">
  		<div class="center-text clickable" v-on:click="mainSelection == 'smos' ? mainSelection = '':mainSelection = 'smos'">SMOS</div>
  		<div v-if="mainSelection == 'smos'">
  			<SmosTabs :isDisplayed="this.shouldDisplay" v-on:hoistDisplayRequest="newDisplay" class="border"></SmosTabs>
  		</div>
  	</div>
  	<div class="cell-flex">
  		<div class="center-text clickable" v-on:click="mainSelection == 'tfa' ? mainSelection = '':mainSelection = 'tfa'">TFA</div>
  		<div v-if="mainSelection == 'tfa'">
  			<TfaTabs :isDisplayed="this.shouldDisplay"  v-on:hoistDisplayRequest="newDisplay" class="border"></TfaTabs>
  		</div>
  	</div>
	
  </div>
</template>
<script>
import GeneralTabs from './GeneralTabs';
import SmosTabs from './SmosTabs';
import TfaTabs from './TfaTabs';

export default {
	props: ["shouldDisplay"],
	components: {
		GeneralTabs,SmosTabs,TfaTabs,
	},
	data: function() {
		 return {mainSelection: ""}
	},
	created: function() {
	},
	methods: {
		newDisplay : function(id) {
			if(id === this.shouldDisplay)
				this.$emit('hoistDisplayRequest', "all");
			else
				this.$emit('hoistDisplayRequest', id)
		},
	
	}
	}
</script>

<style lang="scss" scoped>
	.border {
		margin-top: 3px;
		border: 3px solid;
		position:absolute;
		width: 12%;
		background-color: white;
	
	}
	.header-flex {
		display: flex;
		flex-wrap: nowrap;
		justify-content:flex-start;
		align-items:stretch;
		vertical-align:middle;
		margin: 1px;
		}
	.cell-flex {
		flex-grow: 1;
		flex-basis: 25%;

	}
	.center-text {
		text-align: center;
		font-size: 26px;
	}
	
	.clickable {
		cursor: pointer;
	}
</style>
