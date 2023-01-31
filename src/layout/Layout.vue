<template>
  <div class="container">
    <div class="container-content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;

  &-content {
    @apply mx-auto max-w-3xl;
  }
}
</style>
