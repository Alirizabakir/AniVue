<template>
  <div class="app">
    <MasterHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
    <BackGround class="bg"/>
  </div>
</template>
<script>
import Container from "./components/Container";
import MasterHeader from "./components/MasterHeader";
import BackGround from './components/BackGround'

export default {
  name: "App",
  components: {
    Container,
    MasterHeader,
    BackGround,
  },
};
</script>
<style lang="scss">
.bg {
  z-index: -90;
  position: fixed;
    top: 50px;
    right: 0;
    left: 0;
}
</style>
