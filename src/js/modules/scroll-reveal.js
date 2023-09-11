import ScrollReveal from 'scrollreveal';

//базовые настройки
ScrollReveal({
	distance: '60px',
	duration: 2000,
});

function scrollReveal() {
	ScrollReveal().reveal('.header, .partners, .popular__title', {
		origin: 'top',
	});
	
	ScrollReveal().reveal('.discover__picture-hint, .discover__title', {
		origin: 'left',
	});
	
	ScrollReveal().reveal('.discover__picture-scroll, .discover__text, .popular__controls', {
		origin: 'right',
	});
	
	ScrollReveal().reveal('.discover__form, .discover__picture-img', {
		origin: 'bottom',
	});
}
	
	export default scrollReveal;