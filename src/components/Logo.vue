<template>
    <div class="logo">
        <h1>AniVue</h1>
        <custom-text tag="p">The ultime otaku software</custom-text>
    </div>
</template>

<script>
import CustomText from './CustomText.vue'
export default {
  components: { CustomText },
    
}
</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 6em;
        color: #526488;
    }

    p {
        font-weight: 400;
        font-size: 2em;
        color: #526488c6;
    }
}
</style>