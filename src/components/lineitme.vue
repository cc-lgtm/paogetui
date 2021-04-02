<template>
  <div class="lineItme">
    <div class="item"
    :derc='derc'
    :goto='goto'
    >
      <span class="left">{{derc}}</span>
      <span class="right">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lineItme',
  props: {
    derc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.lineItme {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 11.111vw;
    margin: 0.556vw 0;
    background-color: rgb(243, 246, 247);
  }
  .left {
    font-size: 5.556vw;
    width: 50%;
  }
  .right {
    width: 50%;
    text-align: right;
    margin-right: 2.778vw;
    font-size: 5.556vw;
  }
}
</style>
