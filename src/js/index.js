// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import autoCountryComplete from "./modules/auto-complete";
autoCountryComplete();

import datePicker from "./modules/date-picker";
datePicker();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 32,
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});