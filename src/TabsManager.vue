<template>
  <div class="header-flex">
  	<div class="cell-flex" v-on:click="selection = 'nofilter'">
  		<div class="center-text">Normal Display</div>
  	</div>
  	<div class="cell-flex" v-on:click="selection = 'general'">
  		<div class="center-text">General Display</div>
  		<div v-if="selection == 'general'">
  			<GeneralTabs class="border"></GeneralTabs>
  		</div>
  	</div>
  	<div class="cell-flex" v-on:click="selection = 'smos'">
  		<div class="center-text">SMOS Display</div>
  		<div v-if="selection == 'smos'">
  			<SmosTabs class="border"></SmosTabs>
  		</div>
  	</div>
  	<div class="cell-flex" v-on:click="selection = 'tfa'">
  		<div class="center-text">TFA <br/> Display</div>
  		<div v-if="selection == 'tfa'">
  			<TfaTabs class="border"></TfaTabs>
  		</div>
  	</div>
  </div>
</template>
<script>
import GeneralTabs from './GeneralTabs';
import SmosTabs from './SmosTabs';
import TfaTabs from './TfaTabs'

export default {
	components: {
		GeneralTabs,SmosTabs,TfaTabs,
	},
	data: function() {
		 return {selection: ""}
	},
	created: function() {
	},

	}
</script>

<style lang="scss" scoped>
	.border {
		margin-top: 3px;
		border: 3px solid; 
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
</style>
