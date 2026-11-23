# Vue.js Course Practice

This repository tracks my progress through Maximilian Schwarzmüller’s Vue.js course. It contains code-along examples, my assignment solutions, and the Monster Slayer course project. [View the course on Udemy](https://www.udemy.com/course/vuejs-2-the-complete-guide/)

**Status:** In progress. My latest exercise is a Vue component that shows or hides a friend’s contact details.

## What I’ve Practiced So Far

| Folder | Topics | What I Learned |
| --- | --- | --- |
| `gs-01-starting-project` | Vue app setup and reactive lists | I connected a text input to app data with `v-model` and used `v-for` to display each goal I added. |
| `basics-01-starting-code` | Interpolation and attribute binding | I displayed a course goal with `{{ }}` and used `v-bind:href` to set a link’s destination from app data. |
| `basics-assignment-1-problem` | Data binding | I displayed a calculated age, bound an image URL to `src`, and filled an input with a name from app data. |
| `basics-03-events-starting-code` | Events, two-way binding, computed properties, and watchers | I computed a full name from two inputs and used a watcher to reset a counter after it passed 50. |
| `basics-assignment-2-problem` | Keyboard and click events | I handled a button click and used `@keyup.enter` to confirm a typed value when the user pressed Enter. |
| `basics-assignment-3-problem` | Computed properties and watchers | I computed a message based on how the counter compared with the target of 37, then watched that result to schedule a reset. |
| `basics-10-styling-starting-setup` | Dynamic CSS classes | I toggled a box’s `active` class when it was clicked and practiced both object and array syntax for class bindings. |
| `basics-assignment-4-problem` | Class and style bindings | I used text inputs to choose a CSS class and set a background color, and a button to toggle a paragraph’s visibility. |
| `lists-cond-01-starting-setup` | Conditional rendering and keyed lists | I showed a message when the goal list was empty, rendered goals with `v-for`, and removed a goal when it was clicked. |
| `lists-cond-assignment-problem` | Task lists and `v-show` | I hid and showed a task list while keeping its items and used a computed property to switch the button label between “Show List” and “Hide List.” |
| `prj-monster-01-starting-setup` | Monster Slayer course project | I used computed properties to size health bars, watchers to detect the end of a battle, and a list to show each attack and heal. |
| `behind-scenes-01-starting-setup` | Lifecycle hooks, template refs, app instances, and JavaScript proxies | I traced lifecycle hooks in the console, read an input through `$refs`, mounted two apps on one page, and used a `Proxy` to explore how property changes can trigger updates. |
| `cmp-intro-01-starting-setup` | Component registration and local state | I registered a `friend-contact` component that manages its own toggle for showing a phone number and email address. |

## Running the Examples

1. Clone or download this repository.
2. Open any exercise folder’s `index.html` in a browser. Start with `gs-01-starting-project/index.html` for the goal list or `prj-monster-01-starting-setup/index.html` for Monster Slayer.

Each example loads Vue 3 from a CDN, so you’ll need an internet connection when opening it.
