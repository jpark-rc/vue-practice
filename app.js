Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: ''
		};
	}, //has to be called data
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue); // Vue establishes connection to recognize 'this'
			this.enteredValue = '';
		}
	}
}).mount('#app'); // Let Vue know which part of the app it should control. Div id

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
// 	const enteredValue = inputEl.value;
// 	const listItemEl = document.createElement('li');
// 	listItemEl.textContent = enteredValue;
// 	listEl.appendChild(listItemEl);
// 	inputEl.value = '';
// }

// buttonEl.addEventListener('click',addGoal);