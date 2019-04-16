<template>
  <div class="container">
  <h3>Select from the following drop down menus</h3>
  <br />
    <TabsManager :shouldDisplay="this.shouldDisplay" v-on:hoistDisplayRequest="updateShouldDisplay"></TabsManager>
	<br />
	<a class="bigger" href="https://gcdocs.gc.ca/ssc-spc/llisapi.dll?func=ll&objid=26844089&objAction=browse&sort=name&viewType=1" target="_blank">Help Documentation</a>
	<br />
	<h4>You currently are in :  <span class="bigger" ref="display_selection"></span></h4>
	<br />
	
  </div>
</template>

<script>
	import TabsManager from './TabsManager';
	export default {
		components: {
			TabsManager
		},
		created: function() {
			//All the ids of web elements
			//Just ctrl-h and replace \r and \n and tabs and spaces for enters(notepadd++)
						
			var handler = function(){
				if(http.readyState == 4 && http.status == 200) {
					this.ids = JSON.parse(http.responseText)
				}
			}

			var boundHandler = handler.bind(this);
			
			var http = new XMLHttpRequest();
			var url = "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/Shared%20Documents/dev/sharepoint-checklist/ids.txt";
			var params = "";
			http.open("GET", url, true);

			http.onreadystatechange = boundHandler;
			
			http.send();
			
		},
	
		data () {
		//indicators used to decide what to display 
			return {shouldDisplay: "all", ids: null, logged:false}
		},
		methods: {
		//User clicked in the menu, id is hoisted from the lower components to this function, this function update the id
			updateShouldDisplay: function(id) {
			
			
			
				//TAKES ID, returns tr node
				//Dont ask what skipmode is, just know it helps in the DOM, probalby a double TR
				var toTR = function(node, skipmode) {
					while(node.tagName !== "TR" || skipmode) {
						skipmode = false;
						node = node.parentNode
						}
					return node;
				}
				//Not used currently
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
				//Update the id
				this.shouldDisplay = id;
				//Display to user the selected view name
				this.$refs.display_selection.innerText = this.translateViewAcronymToHumanReadable(this.shouldDisplay);
					//Remove all invisibles
					//Loop until all invisible elements are visible
					while(true){
						var displayAll = document.getElementsByClassName("remove-from-view");
						for(var i = 0 ; i < displayAll.length;i++){
							displayAll[i].classList.toggle("remove-from-view")
						}
						if(displayAll.length === 0)
							break;
					}
					
					//If all we need to do nothing
					
					//if not all, do something in here
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
								//Add invisibility class
								try {
									if(allIds[i][j].includes("$DateTimeFieldDate"))
										toTR(toTR(document.getElementById(allIds[i][j])), true).className += " remove-from-view"
									else
										toTR(document.getElementById(allIds[i][j])).className += " remove-from-view"
								} catch(err) {
								//In case of id non-existent, catch and display error message
									console.log("Should remove from ids   :  " + allIds[i][j]);
									}
							}
						}
					}
				}
				/*				
				How to get ids from edit list:
				//If ever the ids file is lost, or you need all the ids, run this snippet into browser console
				var ids = document.getElementsByClassName("ms-formbody")
				for(var i = 0 ; i < ids.length -1 ; i++) {spans.push(ids[i].querySelector('[dir="none"]'))}
				for(var i = 0 ; i < spans.length; i++) {console.log(spans[i].firstChild.id)}
				*/
			
			},
			//Just a log function to check usage, see list logs for web activity
			debugList: function() {
					var url = "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/_api/Web/lists/getbytitle('logs')/items";
					$.ajax({
						url: url,
						method: 'GET',
						beforeSend: function(XMLHttpRequest) {
						XMLHttpRequest.setRequestHeader('Accept', 'application/json; odata=verbose');
					},
					success: function(data) {
						console.log(data.d.results);
					}
				});
			}, 
			//Small logging function to find out who is using the tool most
			logAccessToList: function() {
					//this.debugList();
					var url = "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/_api/Web/lists/getbytitle('logs')/items";
					//var url = "https://synergi.ssc-spc.gc.ca/IS/SMO-OGS/SMTPS/_api/Web/lists/getbytitle('test')/items";
					$.ajax({
					url: url,
					method: 'POST',
					data: "{ '__metadata': { 'type': 'SP.Data.LogsListItem' }, 'Title': '"+document.getElementById("O365_MainLink_Me").innerText+"', data: 'filters'}",
					//data: "{ '__metadata': { 'type': 'SP.Data.LogsListItem' }, 'Title': 'blable', 'data' : '1234'}",
					beforeSend: function(XMLHttpRequest) {
						XMLHttpRequest.setRequestHeader('Accept', 'application/json; odata=verbose');
						XMLHttpRequest.setRequestHeader("X-RequestDigest", $("#__REQUESTDIGEST").val());
						XMLHttpRequest.setRequestHeader("Content-type", "application/json;odata=verbose");
					},
					success: function(resp) {
						//console.log("request made");
						//console.log(resp)
					},
					error: function (err) {
						console.log(err);
					}
				})
			},
			
			translateViewAcronymToHumanReadable: function(acro){
				var transition = {
					"classic":"Old Project View",
					"wp_over":"WP Overview",
					"ass":"SMTPS Assessment View",
					"on":"Onboarding View",
					"check_sacm":"SACM Checklist",
					"check_esd":"ESD Checklist",
					"check_ecc":"EMSO/ECC Checklist",
					"check_mds":"MDS Checklist",
					"check_chg":"CHG Checklist",
					"check_rfl":"RFL Checklist",
					"check_im_pm":"IM/PM Checklist",
					"check_itc":"ITC Checklist",
					"check_opr":"OPR Checklist",
					"all":"All Fields View",
					
				}
				
			
			return transition[acro]
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
	
	.bigger {
		font-size: 18px;
	}
</style>
