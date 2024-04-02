const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: "20",
      message: "Hello Vue!",
    };
  },
  methods: {
    updateLastName(msg, e) {
      // e.preventDefault()
      console.log(msg);
      this.lastName = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
    increment() {
      this.age++;
    },
  },
  computed: {
    addToMessage() {
      return `${this.message} is a great framework to learn`;
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed property was called!");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName ='Bob'
// }, 2000);
