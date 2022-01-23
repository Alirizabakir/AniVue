<template>
  <div @click="active" class="hamburger-box">
    <div :class="{one: nuactive}" class="line"></div>
    <div :class="{two: nuactive}" class="line"></div>
    <div :class="{three: nuactive}" class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      nuactive: false
    }
  },
  methods: {
    active(){
      this.nuactive = !this.nuactive;
    }
  },
}
</script>

<style lang="scss" scoped>
.hamburger-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .line {
    width: 18px;
    height: 3px;
    background-color: #DAE0ED;
    margin: 2px;
    transition: all .3s ease-in-out;
  }
  .one {
    transform: translateY(7px) rotate(45deg);;
  }
  .two {
    transform: translateX(25px);
    opacity: 0;
  }
  .three {
   transform: translateY(-7px) rotate(-45deg);;
  }
}
</style>