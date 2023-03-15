let array = document.querySelector(".array");
let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7];
arr = arr.filter((val, index) => {
	return !arr.includes(val, index + 1) ? val : null;
});
console.log(arr);
