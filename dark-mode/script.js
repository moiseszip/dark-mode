function changeBg() {
	button.classList.toggle('dark-mode')
	body.classList.toggle('dark-mode')
	h1.classList.toggle('dark-mode')

	if (h1.classList.contains('dark-mode')) {
		h1.innerHTML = 'Dark Mode ON'
	} else {
		h1.innerHTML = 'Light Mode ON'
	}

	if (button.classList.contains('dark-mode')) {
		button.innerHTML = 'Light Mode'
		button.style.backgroundColor = 'rgb(255, 255, 222)'
		button.style.color = 'rgb(0, 0, 0)'
	} else {
		button.innerHTML = 'Dark Mode'
		button.style.backgroundColor = 'rgb(0, 0, 0)'
		button.style.color = 'rgb(255, 255, 222)'
	}
}

const body = document.getElementsByTagName('body')[0]
const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')

button.addEventListener('click', changeBg)
