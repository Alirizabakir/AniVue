<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ anime.name }}</h3>
      <custom-text size="small" tag="b">Ep: {{ anime.episodes }}</custom-text>
    </div>
    <div class="card-info">
      <img :src="anime.imageUrl" :alt="anime.name" />
      <div class="card-text">
        <custom-text tag="p" size="small">
          {{anime.synopsis}}
        </custom-text>
        <div class="card-more">
          <custom-text tag="b">MORE</custom-text>
          <custom-text tag="b">MORE</custom-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "./CustomText.vue";
export default {
  components: { CustomText },
  name: "Card",
  props: ["anime"],
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #566787;
  border-radius: 3px;
  max-height: 100%;
  overflow: hidden;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;

    h3 {
      white-space: nowrap;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;

      color: #d7dbe4;
      font-weight: 400;

      &:hover {
        overflow: visible;
      }
    }

    b {
      color: #d7dbe4;
      font-weight: 400;
    }
  }

  .card-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    img {
      height: 200px;
    }

    .card-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      p {
        color: #d7dbe4;
        font-weight: 300;

        overflow: hidden;

        height: 160px;
        padding-right: 5px;
      }

      .card-more {
        display: flex;
        align-items: center;
        justify-content: space-around;

        width: 100%;
        height: 30px;

        b {
          color: #d7dbe4;
        }
      }
    }
  }
}
</style>