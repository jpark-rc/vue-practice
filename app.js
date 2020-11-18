const app = Vue.createApp({
	data () {
		return {
			banana: 'yummy',
			link:'https://vuejs.org',
			exampleA: 'example A',
			exampleB: 'example B'
		} // Always return an object
	},// Has to be named as 'data'
	methods: {
		outputGoal: function() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				return this.exampleA
			} else {
				return this.exampleB
			}
		}
	}
});

app.mount('#user-goal');

// methods will always return an object of functions
// data itself is a function