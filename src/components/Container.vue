<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 940px;
  margin: 0 auto;
 
}
.full {
  position: absolute;
  top: 60px;
  right: 0px;
  left: 0px;

  max-width: 80%;
}
</style>