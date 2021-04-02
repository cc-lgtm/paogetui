<template>
  <div class="adress">
    <div class="icon" :text="text">
      <span>{{text}}</span>
    </div>
    <div class="content" :context="context">
      <span>{{context}}</span>
    </div>
    <div class="adressbtn">
      <div class="btn">
        地址簿
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adress',
  props: ['text', 'context']
}
</script>

<style lang='scss'>
.adress {
  width: 100%;
  height: 13.889vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(226, 236, 236);
  margin: 1.778vw 0;
  .icon {
    width: 10vw;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
    background-color: azure;
    border-radius: 50%;
    color: #ccc;
  }
  .content {
    width: 60%;
    font-size: 5.556vw;
  }
  .adressbtn {
    width: 80px;
    height: 10vw;
    line-height: 10vw;
    background-color: rgb(213, 233, 229);
    text-align: center;
    font-size: 5.556vw;
    border-radius: 3vw;
    color: rgb(55, 148, 202);
    border: 0.278vw solid red;
  }
}
</style>
