const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  computed: {
    addToMessage() {
      return `${this.message} is a great framework to learn`;
    },
  }
}).mount('#app');
