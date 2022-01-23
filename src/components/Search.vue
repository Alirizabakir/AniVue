<template>
  <div class="search">
    <form @submit.prevent="HandleSearch">
      <input
        type="search"
        class="search-field"
        placeholder="Search an anime.."
      />
    </form>
  </div>
</template>

<style lang="scss">
.search {
    width: 80%;
    
  input {
    border: 1px solid rgb(var(--br));
    border-radius: 3px;
    
    background-color: #7b8aa9a6;

    width: 100%;
    height: 50px;

    font-size: 16px;
    text-align: center;

    &::placeholder {
      color: #ebedf2;
    }

  }
}
</style>