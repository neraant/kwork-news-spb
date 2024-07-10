$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		easing: 'ease',
		waitForAnimate: false,
	})

	$slider.on('mouseenter', function () {
		$slider.slick('slickPause') // При наведении пауза
	})

	$slider.on('mouseleave', function () {
		$slider.slick('slickPlay') // При уходе с паузы продолжить прокрутку
	})
})
