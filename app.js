const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      message: "Hello Vue!",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
  computed: {
    addToMessage() {
      return `${this.message} is a great framework to learn`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName ='Bob'
// }, 2000);
