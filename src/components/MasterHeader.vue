<template>
  <header class="header">
    <Container class="container">
      <!-- Navigation -->
      <nav class="navigation">
        <router-link to="/">
          <custom-text tag="b">HOME</custom-text>
        </router-link>
        <router-link to="/tv">
          <custom-text tag="b">TV</custom-text>
        </router-link>
        <router-link to="/movies">
          <custom-text tag="b">MOVIES</custom-text>
        </router-link>
        <router-link to="/mylist">
          <custom-text tag="b">MYLIST</custom-text>
        </router-link>
        <router-link to="/signin">
          <custom-text tag="b" size="small">SIGN IN</custom-text>
        </router-link>
        <router-link to="/signup">
          <custom-text tag="b" size="small">SIGN UP</custom-text>
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
import CustomText from "./CustomText.vue";


export default {
  name: "MasterHeader",
  components: {
    Container,
    CustomText,
  },   
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #526488;

  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .container {
    width: 520px;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      color: #dfe4ed;
      height: 50px;
    }
  }
}
</style>