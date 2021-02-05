<template>
  <div>
    <footer>
      <p class="text-center bg-dark text-white p-3">
        Created by
        <span style="font-family: cursive; font-weight: bold;"
          >Meyo &copysr;</span
        >
        {{ getDate() }};
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    getDate() {
      var d = new Date();
      var n = d.getFullYear();
      return n;
    },
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
}
</style>
