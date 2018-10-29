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
			var illegal = id.indexOf("/")
			if(illegal !== -1) {
				
				
				id = id.substring(0, illegal) + "_" + id.substring(illegal+1, id.length)
			}
			this.shouldDisplay = id
			
			
			
			console.log(this.ids[this.shouldDisplay])
			},
			
		}
	}
</script>

<style lang="scss">
	.container {
		postion: relative;
	}
</style>
