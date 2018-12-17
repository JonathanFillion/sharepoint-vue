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
			return {shouldDisplay: "all", ids: null, logged:false}
		},
		methods: {
			updateShouldDisplay: function(id) {
				if(!this.logged){
					this.logged = true;
					this.logAccessToList();
				}
				//TAKES ID, returns tr node
				var toTR = function(node, skipmode) {
					while(node.tagName !== "TR" || skipmode) {
						skipmode = false;
						node = node.parentNode
						}
					return node;
				}
				
				var toggleBorder = function(currentDisplayId, ids) {
				if(typeof ids.separators[currentDisplayId] !== 'undefined'){
						var idToAddLine = ids.separators[currentDisplayId];
						if(idToAddLine.includes("$DateTimeFieldDate"))
							toTR(toTR(document.getElementById(idToAddLine)), true).classList.toggle("top-border");
						else
							toTR(document.getElementById(idToAddLine)).classList.toggle("top-border");
						}
				}
				
				//Focusing problem solved
				document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").focus();
				/*Hard to add style to a TR
				Remove any border added by the preceding display
				toggleBorder(this.shouldDisplay, this.ids)*/
				
				this.shouldDisplay = id;
				
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
					/*Hard to add style to a TR
					Add a border on top of the element if defined in the ids data
					toggleBorder(this.shouldDisplay, this.ids);*/
					
					//this.shouldDisplay is a category name like "classic", "onboarding"
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
			logAccessToList: function() {
					var url = "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/_api/Web/lists/getbytitle('logs')/items";
					$.ajax({
					url: url,
					method: 'POST',
					data: "{ '__metadata': { 'type': 'SP.List' }, 'Title': '"+document.getElementById("O365_MainLink_Me").innerText+"' }",
					beforeSend: function(XMLHttpRequest) {
						XMLHttpRequest.setRequestHeader('Accept', 'application/json; odata=verbose');
						XMLHttpRequest.setRequestHeader("X-RequestDigest", $("#__REQUESTDIGEST").val());
						XMLHttpRequest.setRequestHeader("Content-type", "application/json;odata=verbose");
					},
					success: function(resp) {
						console.log("request made");
						//console.log(resp)
					},
					error: function (err) {
						//console.log(err);
					}
				})
			}
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
	
	.top-border {
		
	}
</style>
