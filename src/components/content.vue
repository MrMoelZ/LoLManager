<template>
  <div id="content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'content',
    data() {
        return {
            msg:'Hello Content'
        };
    }
}
</script>

<style src="./style/default.css"></style>
