// const str = "This is roc8";

// let arr = [];

// for (let i = 0; i < str.length; i++) arr[i] = str[i];

// console.log(arr);
// arr = arr.map((val) => (val === " " ? "_" : val));

// console.log(arr.join(""));

//Print 1 after 1sec 2 after 2sec and 3 after 3sec
// let x = 1;
// let int = setInterval(() => {
// 	console.log(x);
// 	x++;
// 	if (x == 5) {
// 		clearInterval(int);
// 	}
// }, x * 1000);
// const promise = new Promise((resolve, reject) => {
// 	return resolve("heuuu");
// });

// const executionSeq = () => {
// 	console.log("1");

// 	promise.then((e) => {
// 		console.log(e);
// 	});
// 	console.log("2");
// };

// const executionSeq1 = async () => {
// 	console.log("1");
// 	// const res = await promise;
// 	// console.log(res);
// 	promise.then((e) => {
// 		console.log(e);
// 	});
// 	console.log("2");
// };
// executionSeq();
// executionSeq1();
// //microtask queue for promises
// So any promise without await will print out at the end of emptied event queue so here it prints out after the emptying of the event queue and they are executed at the end

//Polyfills ? Substitute functions
//Polyfill for map
// [].map(() => {});
// Array.prototype.myMap = function (cb) {
// 	let myArr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		myArr.push(cb(this[i]));
// 	}
// 	return myArr;
// };

// console.log([1, 2, 3].myMap((ele) => ele + 1));
//How to print the index of every element
// [].map(() => {});
// Array.prototype.myMap = function (cb) {
// 	let myArr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		myArr.push(cb(this[i]), i);
// 	}
// 	return myArr;
// };
// console.log(arr.split(" ").join("_"));
// console.log([1, 2, 3].myMap((ele, index) => index));
// Using Promises
const user = fetch("https://api.github.com/users/harshtth");
console.log(user);
user
	.then((res) => res.json())
	.then((user) => {
		console.log(user);
	});
