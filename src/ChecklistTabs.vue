<template>
  <div class="text-small">
  	<div class="clickable" v-bind:class="{text_selected: 'check_sacm' === this.isDisplayed}" v-on:click="click('check_sacm')">SACM</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_esd' === this.isDisplayed}" v-on:click="click('check_esd')">ESD</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_ecc' === this.isDisplayed}" v-on:click="click('check_ecc')">ECC</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_mds' === this.isDisplayed}" v-on:click="click('check_mds')">MDS</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_chg' === this.isDisplayed}" v-on:click="click('check_chg')">CHG</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_rfl' === this.isDisplayed}" v-on:click="click('check_rfl')">RFL</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_im_pm' === this.isDisplayed}" v-on:click="click('check_im_pm')">IM-PM</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_itc' === this.isDisplayed}" v-on:click="click('check_itc')">ITC</div>
  	<!-- <div class="clickable" v-bind:class="{text_selected: 'check_opr' === this.isDisplayed}" v-on:click="click('check_opr')">OPR</div> -->
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
  .text_selected {
    background-color: black;
    color: white;
  }
    .clickable {
    margin: 5px;
	cursor: pointer;
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
