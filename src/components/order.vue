<template>
  <div class="order">
    <van-nav-bar
    title="南大北林校区"
    left-text="返回"
    right-text="使用详情"
    />
    <adress
    text="取"
    context="取货地址"
    />
    <adress
    text="收"
    context="收货地址"
    />
    <line-itme
    derc="物品信息"
    />
    <line-itme
    derc="取货码"
    />
    <line-itme
    derc="期望送达时间"
    />
    <line-itme
    derc="跑腿费"
    />
    <line-itme
    derc="小费"
    />
    <line-itme
    derc="备注："
    />
    <div class="footer">
      <div class="price">
        总计：{{}}
      </div>
      <div class="submit">
        立即下单
      </div>
    </div>
  </div>
</template>

<script>
import adress from '../components/adress.vue'
import lineItme from '../components/lineitme.vue'
export default {
  name: 'order',
  methods: {
  },
  components: {
    adress,
    lineItme
  }
}
</script>

<style lang='scss'>
.order {
  width: 100%;
  .footer {
    width: 100%;
    height: 55.556vw;
    margin: 2.778vw 0;
    .price {
      width: 33.333vw;
      color: red;
      font-size: 5.556vw;
      border: 1px solid red;
      margin-left: 5.556vw;
    }
    .submit {
      width: 27.778vw;
      text-align: center;
      color: red;
      font-size: 5.556vw;
      border: 1px solid red;
      border-radius: 2.778vw;
      margin-left: 55.556vw;
      margin-top: 27.778vw;
    }
  }
}
</style>
