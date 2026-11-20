const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      textHidden: false,
      backgroundColor: "",
    };
  },
  computed: {
    outputInputStyle() {
      if (this.userInput === "user1") {
        return { user1: true };
      } else if (this.userInput === "user2") {
        return { user2: true };
      } else {
        return {};
      }
    },
    visibility() {
        if (this.textHidden) {
            return { hidden: true }
        }

        return { visible: true }
    },
  },
  methods: {
    setInput(input) {
      return (this.userInput = input);
    },
    displayInput() {
      return this.textHidden = !this.textHidden;
    },
    setBackgroundColor(input) {
        return this.backgroundColor = input;
    },
  },
});


app.mount("#assignment");
