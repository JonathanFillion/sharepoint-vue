<template>
  <div class="text-small">
  	<div ref="sacm" class="clickable" v-on:click="click('sacm')">SACM</div>
  	<div ref="esd" class="clickable" v-on:click="click('esd')">ESD</div>
  	<div ref="emso/ecc" class="clickable" v-on:click="click('emso/ecc')">EMSO/ECC</div>
  	<div ref="mds" class="clickable" v-on:click="click('mds')">MDS</div>
  	<div ref="chg/rl" class="clickable" v-on:click="click('chg/rl')">CHG/RL</div>
  	<div ref="rfl" class="clickable" v-on:click="click('rfl')">RFL</div>
  	<div ref="ic" class="clickable" v-on:click="click('ic')">IC</div>
  	<div ref="im" class="clickable" v-on:click="click('im')">IM</div>
  	<div ref="pm" class="clickable" v-on:click="click('pm')">PM</div>
  	<div ref="itc" class="clickable" v-on:click="click('itc')">ITC</div>
  	<div ref="opr" class="clickable" v-on:click="click('opr')">OPR</div>
  </div>
</template>
<script>
	export default {
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
  .text-selected {
    background-color: black;
    color: white;
  }
    .clickable {
    margin: 5px;
	cursor: pointer;
  }
  
 
</style>
