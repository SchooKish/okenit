<template>
  <div class="main">
    <Mes v-for="item in dinamicData" :key="item.id" :info="item" />
  </div>
</template>

<script>
import Mes from "./Mes.vue";
import json from "../assets/data.json";
export default {
  name: "List",
  components: {
    Mes,
  },
  data() {
    return {
      data: json,
      dinamicData: [],
      count: 0,
    };
  },

  methods: {
    loadContent() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dinamicData.push(this.data[i]);
        }
        this.count++;
        if (this.count < this.data.length / 10) {
          this.loadContent();
        }
      }, 2000);
    },
  },
  mounted() {
    this.loadContent();
  },
};
</script>

<style scoped lang="scss"></style>
