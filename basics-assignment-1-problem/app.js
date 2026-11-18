const app = Vue.createApp({
  data() {
    return {
        name: "Alif Rahmadian",
        age: 27,
        imageLink: "https://static.wikia.nocookie.net/familyguy/images/9/90/FamilyGuy_Single_StewieBackpack_R7.jpg/revision/latest?cb=20200526171841",
    };
  },
  methods: {
    ageInFiveYears() {
        return this.age + 5;
    },
    favoriteNumber() {
        return Math.random();
    }
  },
});

app.mount("#assignment");