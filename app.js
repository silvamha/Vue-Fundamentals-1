const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      // middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: "20",
      message: "Hello Vue!",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    // udpdateMiddleName(e) {
    //   this.middleName = e.target.value;
    // },
    updateLastName(msg, e) {
      // e.preventDefault()
      console.log(msg);
      this.lastName = e.target.value;
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
}).mount("#app");

// setTimeout(() => {
//   vm.firstName ='Bob'
// }, 2000);
