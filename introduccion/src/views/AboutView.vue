<template>
  <div class="about">
    <h1>This is an <span>about</span> page</h1>
  </div>
</template>

<style lang="scss">
.about{
  color: orangered;
  span {
    color:white;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
