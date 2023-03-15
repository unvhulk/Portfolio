// <!--
// 				LocalStorage wrapper with expiration
// 				myLocalStorage.setItem('roc8', '42', 1000);
// 				myLocalStorage.getItem('roc8'); // 42
// 				After 1 sec
// 				myLocalStorage.getItem('roc8'); // null

//   			-->
let wrapper = document.querySelector(".wrapper");
let enter = document.querySelector("button");
enter.addEventListener("click", () => {
	let key = document.querySelector(".key").value;
	let value = document.querySelector(".value").value;
	let time = document.querySelector(".time").value;

	const myLocalStorage = {
		setItem: (key, value, time) => {
			localStorage.setItem(key, value);
			setTimeout(() => {
				localStorage.removeItem(key);
			}, time);
		},
		getItem: (key) => {
			localStorage.getItem(key) != null
				? (wrapper.innerHTML = localStorage.getItem(key))
				: (wrapper.innerHTML = "null");
		},
	};
	myLocalStorage.setItem(key, value, time);
	myLocalStorage.getItem(key); // 42
	setTimeout(() => {
		myLocalStorage.getItem(key); // null
	}, time);
});
