const textContainer = document.getElementById("text-container");
const cursor = document.querySelector(".cursor");
const texts = ["Student", "Bangkit Cohort 2023", "Graphic Designer", "Full Stack Developer", "Freelancers"];
let textIndex = 0;
let charIndex = 0;

function type() {
	textContainer.textContent += texts[textIndex][charIndex];
	charIndex++;
	if (charIndex < texts[textIndex].length) {
		setTimeout(type, 100);
	} else {
		setTimeout(erase, 3000);
	}
}

function erase() {
	const currentText = texts[textIndex];
	textContainer.textContent = currentText.substring(0, charIndex);

	charIndex--;
	if (charIndex >= 0) {
		setTimeout(erase, 50);
	} else {
		charIndex = 0;
		textIndex = (textIndex + 1) % texts.length;
		cursor.style.display = "inline-block"; // Menampilkan kursor
		cursorBlink(); // Memulai animasi kursor berkedip
		setTimeout(type, 500);
	}
}

function cursorBlink() {
	let isVisible = true;
	setInterval(() => {
		isVisible = !isVisible;
		cursor.style.opacity = isVisible ? "1" : "0";
	}, 500); // Mengubah kecepatan berkedip kursor
}

type();


document.addEventListener('DOMContentLoaded', function () {
	const toggleSwitch = document.querySelector('.toggle-checkbox');

	toggleSwitch.addEventListener('change', switchTheme);

	function switchTheme() {
		if (toggleSwitch.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
});