import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperHorizontal() {
	const swiper = new Swiper('#swiper-popular', {
		slidesPerView: 4,
		spaceBetween: 32,
		navigation: {
			nextEl: '#sliderNext',
			prevEl: '#sliderPrev',
		},
		loop: true
	});
}
	
export default swiperHorizontal;