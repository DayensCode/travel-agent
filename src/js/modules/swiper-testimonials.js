import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperVertical() {
	const swiper = new Swiper('#testimonials-colummn-1', {
		direction: 'vertical',
		slidesPerView: 'auto',
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 5000,
		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		}
	});
	const swiper2 = new Swiper('#testimonials-colummn-2', {
		direction: 'vertical',
		slidesPerView: 'auto',
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 7000,
		loop: true,
		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: false,
		}
	});
	const swiper3 = new Swiper('#testimonials-colummn-3', {
		direction: 'vertical',
		slidesPerView: 'auto',
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 5000,
		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		}
	});
}
	
export default swiperVertical;