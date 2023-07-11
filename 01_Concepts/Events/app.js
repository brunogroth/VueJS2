
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value; 
    },
    confirmName(){
      this.confirmedName = this.name;
    },
    increment() {
      this.counter = this.counter + 1;
    },
    decrement(){
      this.counter = this.counter - 1;
    }
    },


});
app.mount('#user-goal');