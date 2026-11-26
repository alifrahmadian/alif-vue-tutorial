<!-- // Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice -->

<template>
  <section class="user-data">
    <form @submit.prevent="setActiveUser">
      <div>
        <label>Name</label>
        <input type="text" v-model="nameInput" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="ageInput" />
      </div>
      <button class="save-button">Set Active User</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-active-user"],
  data() {
    return {
      nameInput: "",
      ageInput: null,
    };
  },
  methods: {
    setActiveUser() {
      this.$emit("set-active-user", this.nameInput, this.ageInput);
    },
  },
};
</script>
