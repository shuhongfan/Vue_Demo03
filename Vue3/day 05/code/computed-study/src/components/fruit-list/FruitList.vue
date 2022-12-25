<template>
  <div class="fruit-list-container">
    <!-- 水果列表 -->
    <div class="fruit-list">
      <!-- 水果的 item 项 -->
      <div class="fruit-item" v-for="item in fruitlist" :key="item.id">
        <div class="left">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.state" />
            <label class="custom-control-label" :for="item.id">
              <!-- 水果图片 -->
              <img :src="item.pic" alt="" class="thumb" />
            </label>
          </div>
        </div>
        <div class="right">
          <!-- 水果名称 -->
          <div class="top">{{ item.fruit }}</div>
          <div class="bottom">
            <!-- 水果单价 -->
            <span class="price">￥{{ item.price }}</span>
            <div class="btns">
              <!-- 水果数量 -->
              <button type="button" class="btn btn-light" @click="onSubClick(item.id)">-</button>
              <span class="count">{{ item.count }}</span>
              <button type="button" class="btn btn-light" @click="onAddClick(item.id)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="settle-box">
      <!-- TODO: 1. 动态计算已勾选的商品的总数量 -->
      <span>总数量：{{ total }}</span>
      <!-- TODO: 2. 动态计算已勾选的商品的总价 -->
      <span>总价：{{ amount }}元</span>
      <!-- TODO: 3. 动态计算按钮的禁用状态 -->
      <button type="button" class="btn btn-primary" :disabled="isDisabled">结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FruitList',
  data() {
    return {
      fruitlist: [
        { id: 1, fruit: '香橼', pic: '/src/assets/images/1.jpg', price: 5, count: 1, state: true },
        { id: 2, fruit: '柚子', pic: '/src/assets/images/2.jpg', price: 4.5, count: 1, state: false },
        { id: 3, fruit: '橘子', pic: '/src/assets/images/3.jpg', price: 3, count: 1, state: false },
        { id: 4, fruit: '橙子', pic: '/src/assets/images/4.jpg', price: 6, count: 1, state: false },
        { id: 5, fruit: '粑粑柑', pic: '/src/assets/images/5.jpg', price: 6.5, count: 1, state: false },
        { id: 6, fruit: '柠檬', pic: '/src/assets/images/6.jpg', price: 4, count: 1, state: false },
        { id: 7, fruit: '青柠', pic: '/src/assets/images/7.jpg', price: 5.2, count: 1, state: false },
      ],
    }
  },
  computed: {
    // 动态计算出勾选水果的总数量
    total() {
      let t = 0
      this.fruitlist.forEach(x => {
        if (x.state) {
          t += x.count
        }
      })
      return t
    },
    // 已勾选商品的总价格
    amount() {
      let a = 0
      this.fruitlist
        .filter(x => x.state)
        .forEach(x => {
          a += x.price * x.count
        })
      return a
    },
    // 控制按钮的禁用状态
    isDisabled() {
       return this.total === 0
    }
  },
  methods: {
    // 点击了数量 -1 按钮
    onSubClick(id) {
      const findResult = this.fruitlist.find(x => x.id === id)
      if (findResult && findResult.count > 1) {
        findResult.count--
      }
    },
    // 点击了数量 +1 按钮
    onAddClick(id) {
      const findResult = this.fruitlist.find(x => x.id === id)
      if (findResult) {
        findResult.count++
      }
    },
  },
}
</script>

<style lang="less" scoped>
.fruit-list-container {
  padding-bottom: 50px;
}
.fruit-item {
  display: flex;
  padding: 10px;
  & + .fruit-item {
    border-top: 1px solid #efefef;
  }
  .left {
    margin-right: 10px;
    .thumb {
      width: 100px;
      height: 100px;
    }
  }
  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-weight: bold;
      font-size: 13px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 13px;
        font-weight: bold;
        color: red;
      }
      .btns {
        display: flex;
        align-items: center;
        .count {
          display: inline-block;
          width: 28px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 47px;
  border-radius: 10px !important;
}

.settle-box {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
</style>
