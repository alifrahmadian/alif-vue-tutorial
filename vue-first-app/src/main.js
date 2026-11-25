import { createApp } from "vue";

// import ... from './'
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);

app.mount("#app");
