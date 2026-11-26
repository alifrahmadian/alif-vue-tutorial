<template>
  <div class="user-layout">
    <active-user
      :key="activeUser.id"
      :id="activeUser.id"
      :username="activeUser.username"
      :age="activeUser.age"
    ></active-user>
    <user-data @set-active-user="setActiveUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUser: {
        id: "alif",
        username: "Alif Rahmadian",
        age: 27,
      },
    };
  },
  methods: {
    setActiveUser(username, age) {
      this.activeUser.id = username.trim().split(/\s+/)[0].toLowerCase();
      this.activeUser.username = username;
      this.activeUser.age = +age;
    },
  },
};
</script>

<style>
:root {
  --paper: #f7f3eb;
  --ivory: #fffdf8;
  --sage: #e9eedf;
  --ink: #383a30;
  --muted: #5e6254;
  --border: #d9d5c7;
  --olive: #526442;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: "DM Sans", system-ui, sans-serif;
  line-height: 1.5;
}

.user-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: min(48rem, calc(100% - 2rem));
  margin: clamp(2rem, 8vw, 5rem) auto;
}

.active-user,
.user-data {
  display: grid;
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid var(--border);
  border-radius: 1rem;
}

.active-user {
  align-content: center;
  gap: 0.5rem;
  background: var(--sage);
}

.active-user h2,
.active-user h3 {
  margin: 0;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.active-user h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

.active-user h3 {
  color: var(--muted);
  font-size: 1.25rem;
  font-weight: 500;
}

.user-data {
  align-content: start;
  background: var(--ivory);
}

.user-data form {
  display: grid;
  gap: 1.25rem;
}

.user-data form > div {
  display: grid;
  gap: 0.375rem;
}

.user-data label {
  font-size: 0.9rem;
  font-weight: 600;
}

.user-data input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid #a39d8c;
  border-radius: 0.5rem;
  background: var(--ivory);
  color: var(--ink);
  font: inherit;
  font-size: 1rem;
  font-weight: 400;
}

.save-button {
  justify-self: start;
  min-height: 2.75rem;
  padding: 0.625rem 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--olive);
  color: var(--ivory);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.save-button:hover {
  background-color: #435237;
}

.save-button:active {
  background-color: #35422c;
}

.user-data input:focus-visible,
.save-button:focus-visible {
  outline: 2px solid var(--olive);
  outline-offset: 2px;
}

@media (max-width: 36rem) {
  .user-layout {
    grid-template-columns: 1fr;
  }
}
</style>
