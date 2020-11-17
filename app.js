const app = Vue.createApp({
	data () {
		return {
			banana: 'yummy',
			link:'https://vuejs.org'
		} // Always return an object
	}// Has to be named as 'data'
});

app.mount('#user-goal');