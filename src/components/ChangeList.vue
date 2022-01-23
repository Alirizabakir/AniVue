<template>
  <div class="change-list-box">
    <div class="list-name">
      <custom-text tag="b">{{ itemname }}</custom-text>
    </div>
    <div :class="{ active: cl }" class="change-list">
      <div class="list-header">
        <custom-text
          tag="b"
          v-for="list in changelist"
          :key="list"
          @click="changeinfo(list)"
        >
          {{ list.name }}
        </custom-text>
      </div>
      <div class="list-inner">
        <custom-text v-show="listname == 'Year'" @click="selectYear(info)" tag="b" v-for="info in iteminfo" :key="info">
          {{ info }}
        </custom-text>
        <custom-text v-show="listname == 'Type'" @click="selectType(infoo)" tag="b" v-for="infoo in iteminfo" :key="infoo">
          {{ infoo }}
        </custom-text>
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "./CustomText.vue";
export default {
  name: "ChangeList",
  components: { CustomText },
  props: ["cl"],
  data() {
    return {
      iteminfo: null,
      itemname: null,
      listname: null,
    };
  },
  computed: {
    changelist() {
      return this.$store.state.changelist;
    },
  },
  methods: {
    changeinfo(list) {
      this.iteminfo = list.info;
      this.listname = list.name;
    },
     selectYear(info){
      this.$store.commit('animeviewyear', info);
      this.itemname = info;
    },
    selectType(infoo){
      this.$store.commit('animeviewtype', infoo);
      this.itemname = infoo;
    }
  },
  created() {
    if (this.iteminfo == null) {
      this.$store.commit('animeviewdefault');
      this.iteminfo = this.$store.state.changelist[1].info;
      this.itemname = 'All List';
      this.listname = this.$store.state.changelist[1].name;
      
    }
  },
};
</script>

<style lang="scss" scoped>
.change-list-box {
  display: flex;
  position: relative;

  b {
    color: #d7dbe4;
    font-weight: 400;
  }

  .change-list {
    background-color: #6578a0;
    box-shadow: 1px 1px 8px black;

    width: 200px;

    position: absolute;
    top: 0px;

    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: translateX(170px);

    .list-header {
      background-color: #526488;

      padding: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      b {
        color: #d7dbe4;
        padding-right: 10px;
        cursor: pointer;
        font-weight: 600;

        &:hover {
          color: #082c61;
        }
      }
    }
    .list-inner {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5px;
      overflow-y: scroll;
      height: 200px;

      padding: 5px;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #0544a5;
      }
      &::-webkit-scrollbar-track {
        background: #ffffff;
      }

      b {
        color: #082c61;
        border-bottom: 1px solid #d7dbe4;
        cursor: pointer;
        font-weight: 600;

        padding: 5px;

        &:hover {
          color: #d7dbe4;
        }
      }
    }
  }
  .active {
      opacity: 1;
      transform: translateX(-80px);
    }
}
</style>