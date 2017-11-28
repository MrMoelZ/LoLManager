<template>
  <div id="test">
      {{msg}}
  </div>
</template>

<script>
export default {
    name: 'test',
    created() {
        console.log('Created');
        window.services.data.test();
    },
    data() {
        return {
            msg: 'test'
        }
    }
}
</script>

<style></style>
