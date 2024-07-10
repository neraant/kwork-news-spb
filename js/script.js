document.addEventListener('DOMContentLoaded', () => {
	let additionalBtns = document.querySelectorAll('.additional-info-button')
	let modals = document.querySelectorAll('.modal-overlay')
	let closeBtns = document.querySelectorAll('.close')
	let registerBtn = document.querySelector('.registration-btn')
	let closeFormBtn = document.querySelector('.close-form')
	let formOverlay = document.querySelector('.overlay')
	let form = document.querySelector('form')

	form.addEventListener('submit', e => {
		e.preventDefault()

		formOverlay.style.opacity = '0'
		formOverlay.style.visibility = 'hidden'

		form.reset()
	})

	additionalBtns.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			modals[index].style.opacity = '1'
			modals[index].style.visibility = 'visible'
		})
	})

	closeBtns.forEach((closeBtn, index) => {
		closeBtn.addEventListener('click', () => {
			modals[index].style.opacity = '0'
			modals[index].style.visibility = 'hidden'
		})
	})

	closeFormBtn.addEventListener('click', () => {
		formOverlay.style.opacity = '0'
		formOverlay.style.visibility = 'hidden'
	})

	registerBtn.addEventListener('click', () => {
		formOverlay.style.opacity = '1'
		formOverlay.style.visibility = 'visible'
	})
})
