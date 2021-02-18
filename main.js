const blur = document.querySelector('.picture');
const loading = document.querySelector('.loading');

let log = 0;

function run() {
	log++;
	if (log > 99) {
		clearInterval(intervalSet);
	}
	loading.textContent = `${log}%`;
	loading.style.opacity = scale(log, 0, 100, 1, 0);
	blur.style.filter = `blur(${scale(log, 0, 100, 25, 0)}px )`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let intervalSet = setInterval(run, 25);
