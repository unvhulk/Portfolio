let timer = document.querySelector(".timer");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let inter = 0;

timer.innerHTML = "0" + minutes + " : " + "0" + seconds;

const startStopwatch = () => {
	inter = setInterval(() => {
		seconds += 1;
		if (seconds > 59) minutes += 1;
		if (seconds < 10) timer.innerHTML = "0" + minutes + " : " + "0" + seconds;
	}, 1000);
	console.log(inter);
};

start.addEventListener("click", () => startStopwatch());

stop.addEventListener("click", () => clearInterval(inter));

reset.addEventListener("click", () => {
	clearInterval(inter);
	seconds = 0;
	minutes = 0;
	timer.innerHTML = "0" + minutes + " : " + "0" + seconds;
});
