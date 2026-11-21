const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      isListVisible: true,
    };
  },
  methods: {
    addTask() {
      if (this.taskInput === "") {
        alert("Please input your task!");
      } else {
        this.tasks.push(this.taskInput);
      }
    },
  },
  computed: {
    buttonCaption() {
        return this.isListVisible ? "Hide" : "Show"
    }
  },
});

app.mount("#assignment");
