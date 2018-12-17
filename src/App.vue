<template>
  <div class="container">
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
				this.ids = JSON.parse(req.originalTarget.response)			
			})
			request.open("GET", "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/Shared%20Documents/dev/tabs-manager-vue/ids")
			request.send();
		},
		mounted: function(){
			
		},
		data () {
			return {shouldDisplay: "all", ids: null}
		},
		methods: {
			updateShouldDisplay: function(id) {
			
				//TAKES ID, returns tr node
				var toTR = function(node, skipmode) {
					while(node.tagName !== "TR" || skipmode) {
						skipmode = false;
						node = node.parentNode
						}
					return node;
				}
				document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").focus();
				this.shouldDisplay = id
				
					//Loop until all invisible elements are visible
					while(true){
						var displayAll = document.getElementsByClassName("remove-from-view");
						for(var i = 0 ; i < displayAll.length;i++){
							displayAll[i].classList.toggle("remove-from-view")
						}
						if(displayAll.length === 0)
							break;
					}
				if(this.shouldDisplay !== 'all'){
					//this.shouldDisplay is a category name aka smos name
					var shouldDisplayIds = Object.values(this.ids[this.shouldDisplay])
					//Get all ids inside object
					var allIds = Object.values(this.ids)
					//Loop on all ids in ids
					for(var i = 0 ; i < allIds.length;i++){
					//loop all elements of allids which are string ids of the form
						for(var j = 0 ; j < allIds[i].length; j++){
							//compare to shouldDisplay, if they should, then display
							if(!shouldDisplayIds.includes(allIds[i][j])){
								//DateTimeFieldDate have different structure, so double TR is needed
								if(allIds[i][j].includes("$DateTimeFieldDate"))
									toTR(toTR(document.getElementById(allIds[i][j])), true).className += " remove-from-view"
								else
									toTR(document.getElementById(allIds[i][j])).className += " remove-from-view"
							}
						}
					}
				}
				/*				
				How to get ids from edit list:
				
				var ids = document.getElementsByClassName("ms-formbody")
				for(var i = 0 ; i < ids.length -1 ; i++) {spans.push(ids[i].querySelector('[dir="none"]'))}
				for(var i = 0 ; i < spans.length; i++) {console.log(spans[i].firstChild.id)}
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
