<template>
  <div class="lineItme">
    <div class="item"
    :derc='derc'
    :showR='showR'
    :showP='showP'
    :text='text'
    >
      <span class="left">{{derc}}</span>
      <span class="right">
        <span class="text">{{text}}</span>
        <span class="price" v-if="showP==true">￥{{price}}</span>
        <span v-if="showR==true">></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lineItme',
  data () {
    return {
      price: 0
    }
  },
  props: {
    derc: {
      type: String,
      default: ''
    },
    showR: {
      type: Boolean,
      default: true
    },
    showP: {
      type: Boolean,
      default: false
    },
    text: {
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
    margin-left: 2.778vw;
  }
  .right {
    width: 50%;
    text-align: right;
    margin-right: 2.778vw;
    font-size: 5.556vw;
    span {
      margin: 0 2.778vw;
    }
    .text, .price {
      color: red;
    }
  }
}
</style>
