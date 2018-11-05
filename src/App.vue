<template>
  <div class="container">
  <div>{{this.shouldDisplay}}</div>
    <TabsManager :shouldDisplay="this.shouldDisplay" v-on:hoistDisplayRequest="updateShouldDisplay"></TabsManager>
	
  </div>
</template>

<script>
	import TabsManager from './TabsManager';
	export default {
		components: {
			TabsManager
		},
		created: function() {
			var request = new XMLHttpRequest();
			request.addEventListener('load', (req) => {
				this.ids = JSON.parse(JSON.parse(req.originalTarget.response))			
			})
			request.open("GET", "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/Shared%20Documents/dev/sharepoint-edit-vue/ids")
			request.send();
		},
		mounted: function(){
		},
		data () {
			return {shouldDisplay: "all", ids: null}
		},
		methods: {
			updateShouldDisplay: function(id) {
			
				//TAKES ID
				var toTR = function(elemId) {
					var node = document.getElementById(elemId);
					while(node.tagName !== "TR") {node = node.parentNode}
					return node;
}
			
				this.shouldDisplay = id
				
				if(this.shouldDisplay === 'all'){
					var displayAll = document.getElementsByClassName("remove-from-view");
					console.log(displayAll)
					for(var i = 0 ; i < displayAll.length;i++){
						displayAll[i].classList.toggle("remove-from-view")
					}
				
				} else {
					var shouldDisplayIds = Object.values(this.ids[this.shouldDisplay])
					console.log(shouldDisplayIds)
					var allIds = Object.values(this.ids)
					for(var i = 0 ; i < allIds.length;i++){
						for(var j = 0 ; j < allIds[i].length; j++){
							toTR(allIds[i][j]).className += " remove-from-view"
						}
					}
				}
				/*
				Weird issues : retire invisible doit etre cliquer plusieurs fois pour tout remettre, parent - enfants ???
				Doulbe TR might be needed, not implememted.
				
				
				
				
				
				*/
			
			},
			
		}
	}
</script>

<style lang="scss">
	.container {
		postion: relative;
	}
	
	.remove-from-view {
		display:none;
	}
</style>
