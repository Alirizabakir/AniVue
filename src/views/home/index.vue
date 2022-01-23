<template>
  <div class="main">
    <Container class="main-logo">
      <Logo class="logo" />
      <Search class="search" />
    </Container>
    <Container :class="{ full: isFull }" class="main-inner">
      <div class="main-info">
        <div class="info-header">
          <div class="setting">
            <div class="setting-button">
              <IconFull @click="isFull = !isFull" class="icons" />
              <IconSetting class="icons" />
              <IconSearch class="icons" />
            </div>
            <div class="more">
              <ChangeList :cl="isActive" />
              <Hamburger @click="isActive = !isActive" class="hamburger" />
            </div>
          </div>
        </div>
        <div :class="{ cardFull: isFull }" class="card-box">
          <Card
            :itemname="iname"
            class="card"
            v-for="anime in animeview"
            :key="anime"
            :anime="anime"
          ></Card>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";
import Logo from "@/components/Logo.vue";
import Search from "@/components/Search.vue";
import Hamburger from "@/components/Hamburger.vue";
import IconFull from "@/icons/Full.vue";
import IconSetting from "@/icons/Setting.vue";
import IconSearch from "@/icons/Search.vue";
import ChangeList from "@/components/ChangeList.vue";

export default {
  name: "Home",
  props: ["itemname"],
  components: {
    Container,
    Card,
    Logo,
    Search,
    Hamburger,
    IconFull,
    IconSearch,
    IconSetting,
    ChangeList,
  },
  data() {
    return {
      isFull: false,
      isActive: false,
      iname: "",
      selectedInfo: null,
    };
  },
  computed: {
    animelist() {
      return this.$store.state.animelist;
    },
    animeview() {
      return this.$store.state.animeview;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.main {
  .main-logo {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 50px;

    .search {
      margin-top: 30px;
    }
  }

  .main-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    .main-info {
      background-color: #526488;
      border-radius: 5px;
      box-shadow: 0px 0px 12px black;

      .info-header {
        padding-top: 24px;

        height: 80px;

        .setting {
          width: 100%;
          height: 40px;
          background-color: #0544a5;

          padding: 0 16px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          .more {
            display: flex;
            justify-content: space-between;
            width: 150px;

            position: relative;

            .hamburger {
              cursor: pointer;
            }
          }

          .setting-button {
            display: flex;
            align-items: center;

            .icons {
              margin-right: 18px;
              width: 18px;

              transition: all .2s;

              &:hover {
                  transform: scale(1.2);
                }

              .icon {
                fill: #d7dbe4;
                
              }
            }
          }
        }
      }

      .card-box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        padding: 24px;

        .card {
          box-shadow: 1px 1px 8px black;
        }
      }

      .cardFull {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
}
</style>