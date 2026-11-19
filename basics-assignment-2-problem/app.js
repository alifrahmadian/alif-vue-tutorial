const app = Vue.createApp({
  data() {
    return {
      alertText: "This is an alert!",
      inputA: "",
      inputB: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertText);
    },
    setInputA(event) {
      this.inputA = event.target.value;
    },
    setInputB() {
      this.inputB = this.inputA;
    },
  },
});

app.mount("#assignment");
