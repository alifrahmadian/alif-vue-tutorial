const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    outputResult() {
      if (this.result < 37) {
        return "Not there yet";
      }
      if (this.result > 37) {
        return "Too much!";
      }
      return this.result;
    },
  },
  methods: {
    addNumber(num) {
      this.result += num;
    },
  },
  watch: {
    outputResult() {
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
