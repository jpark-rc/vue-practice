const app = Vue.createApp({
	data: function() {
		return {
			myname: 'YJP',
			age: 9000,
			fav_num: Math.random(),
			img: 'https://i.redd.it/6a4wysdp9hw21.png'
		}
	},

	methods: {
		prepopulate() {
			return this.myname;
		}
	}
});

app.mount('#assignment');