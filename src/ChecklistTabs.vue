<template>
  <div class="text-small">
  	<div class="clickable" v-bind:class="{text_selected: 'check_sacm' === this.isDisplayed}" v-on:click="click('check_sacm')">Checklist SACM</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_esd' === this.isDisplayed}" v-on:click="click('check_esd')">Checklist ESD</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_ecc' === this.isDisplayed}" v-on:click="click('check_ecc')">Checklist ECC</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_mds' === this.isDisplayed}" v-on:click="click('check_mds')">Checklist MDS</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_chg' === this.isDisplayed}" v-on:click="click('check_chg')">Checklist CHG</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_rfl' === this.isDisplayed}" v-on:click="click('check_rfl')">Checklist RFL</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_im_pm' === this.isDisplayed}" v-on:click="click('check_im_pm')">Checklist IM-PM</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_itc' === this.isDisplayed}" v-on:click="click('check_itc')">Checklist ITC</div>
  	<div class="clickable" v-bind:class="{text_selected: 'check_opr' === this.isDisplayed}" v-on:click="click('check_opr')">Checklist OPR</div>
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
