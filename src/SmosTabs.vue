<template>
  <div class="text-small">
  	<div ref="sacm" class="spaced">SACM</div>
  	<div ref="esd" class="spaced">ESD</div>
  	<div ref="emso/ecc" class="spaced">EMSO/ECC</div>
  	<div ref="mds" class="spaced">MDS</div>
  	<div ref="chg/rl" class="spaced">CHG/RL</div>
  	<div ref="rfl" class="spaced">RFL</div>
  	<div ref="ic" class="spaced">IC</div>
  	<div ref="im" class="spaced">IM</div>
  	<div ref="pm" class="spaced">PM</div>
  	<div ref="itc" class="spaced">ITC</div>
  	<div ref="opr" class="spaced">OPR</div>
  </div>
</template>
<script>
	export default {
  data () {
    return {} 
  },
  mounted: function() {
    console.log(this.$refs);
    console.log("should iterate keys, then add click listener { () => this.selected = true, all others = false}")
  }
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
    .spaced {
    margin: 5px;
  }
</style>
