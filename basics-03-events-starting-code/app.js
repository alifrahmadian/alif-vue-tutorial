const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "Rahmadian";
    //   }
    // }, // when the name changes, this method will be reexecuted

    // lastName(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Rahmadian";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
