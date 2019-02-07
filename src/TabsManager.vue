<template>
  <div class="header-flex">
  	<div class="cell-flex button-format">
  		<div class="center-text clickable unselectable" v-on:click="mainSelection == 'general' ? mainSelection = '':mainSelection = 'general'" 
		title="Main area to take notes, get an overview of the work package">General</div>
  		<div v-if="mainSelection == 'general'">
  			<GeneralTabs :isDisplayed="this.shouldDisplay" v-on:hoistDisplayRequest="newDisplay" class="border unselectable"></GeneralTabs>
  		</div>
  	</div>
  	<div class="cell-flex button-format">
  		<div class="center-text clickable unselectable" v-on:click="mainSelection == 'smos' ? mainSelection = '':mainSelection = 'smos'"
		title="Fill information about SMOS areas, this is temporary content">SMOS</div>
  		<div v-if="mainSelection == 'smos'">
  			<SmosTabs :isDisplayed="this.shouldDisplay" v-on:hoistDisplayRequest="newDisplay" class="border unselectable"></SmosTabs>
  		</div>
  	</div>
  	<div class="cell-flex button-format">
  		<div class="center-text clickable unselectable" v-on:click="mainSelection == 'checklist' ? mainSelection = '':mainSelection = 'checklist'"
		title="Checklist for each SMOS">Checklist</div>
  		<div v-if="mainSelection == 'checklist'">
  			<ChecklistTabs :isDisplayed="this.shouldDisplay"  v-on:hoistDisplayRequest="newDisplay" class="border unselectable"></ChecklistTabs>
  		</div>
  	</div>
	<div class="cell-flex clickable  button-format" v-on:click="mainSelection = 'nofilter';newDisplay('all')">
  		<div class="center-text clickable unselectable" title="Display all the fields of the list">All</div>
  	</div>
	<div class="unselectable button-format clickable">
		<div class="question-font center-text" v-on:click="displayHelpMessage()">?</div>
	</div>
  </div>
</template>
<script>
import GeneralTabs from './GeneralTabs';
import SmosTabs from './SmosTabs';
import ChecklistTabs from './ChecklistTabs';

export default {
	props: ["shouldDisplay"],
	components: {
		GeneralTabs,SmosTabs,ChecklistTabs,
	},
	data: function() {
		 return {mainSelection: ""}
	},
	created: function() {
	},
	methods: {
		newDisplay : function(id) {
			this.mainSelection = "";
			if(id === this.shouldDisplay)
				this.$emit('hoistDisplayRequest', "all");
			else
				this.$emit('hoistDisplayRequest', id)
		},
		displayHelpMessage : function () {
			var message = "These buttons are filters. Use them to access specific fields. To remove a selection, either click All or click the selected filter again." +
			"\n\nCes boutons sont des filtres. Utiliser les pour trouver des champs spécifiques. Pour retirer un filtrage, cliquer sur All ou sur la sélection précédente\n\n" +
			"Source code can be found on github ==> https://github.com/JonathanFillion/sharepoint-vue"
			alert(message)
		}
	
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
	.button-format {
		border: 1px solid;
		margin: 0px 5px;
	}
	
	.clickable {
		cursor: pointer;
	}
	.question-font {
		font-size: 30px;
		color: #5061e5;
	}
	.unselectable {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
}
</style>
