document.addEventListener('DOMContentLoaded', () => {
	let myBtn = document.querySelector('.scrollbuttonid')

	window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			myBtn.style.display = 'block'
		} else {
			myBtn.style.display = 'none'
		}
	})

	myBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
})
