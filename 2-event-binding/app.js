const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
  	confirmInput() {
  		this.confirmedName = this.name
  	},
  	submitForm(event) {
  		alert('Submitted!');
  	},
  	setName(event,lastName) { // Always gets the event argument from the browser
  		this.name = event.target.value + ' ' + lastName;
  	},
  	add(num) {
  		this.counter = this.counter + num 
  	},
  	reduce(num) {
  		this.counter = this.counter - num
  	}
  }
});

app.mount('#events');
