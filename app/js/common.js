(() => {

	let menuBtn = document.getElementById('main-menu-btn');
	let menuBtnIcon = document.getElementById('toggle-btn');
	let menu = document.getElementById('main-nav');
	let contuctsPhone = document.getElementById('contucts-phone');
	let contuctsAddress = document.getElementById('contucts-address');
	let socialLinksList = document.getElementById('social-links-list');

	menuBtn.addEventListener('click', e => {
		e.preventDefoult;

		toggleClassToElement(menu, 'show-menu');
		
		toggleClassToElement(menuBtnIcon, 'show-menu');

		toggleClassToElement(contuctsPhone, 'menu-is-active');

		toggleClassToElement(contuctsAddress, 'menu-is-active');
		
		toggleClassToElement(socialLinksList, 'menu-is-active');

		toggleClassToElement(menuBtn, 'menu-is-active');

	});

	function toggleClassToElement(el, className) {
		el.classList.toggle(className);
	};

	// Scroll page effect

	let mainContentTitle = document.getElementById('main-info-title'),
			mainInfoBlock = document.getElementById('main-info'),
			sectionMassage = document.getElementById('massage-section'),
			sectionSugaring = document.getElementById('sugaring-section'),
			sectionNail = document.getElementById('nail-section'),
			virtuesSection = document.getElementById('main-footer'),
			mainFooter = document.getElementById('our-virtues-section'),
			sectionPosition = sectionMassage.getBoundingClientRect();


	window.addEventListener('scroll', function () {


		if (sectionPosition.top > window.pageYOffset) {
			mainInfoBlock.classList.remove('fixed-info');
		}

		if (sectionPosition.top < window.pageYOffset) {
			mainInfoBlock.classList.add('fixed-info');
		
			mainContentTitle.innerHTML = 'Профессиональный массаж'
		}

		if (sectionSugaring.getBoundingClientRect().bottom < window.pageYOffset - 600) {
			mainContentTitle.innerHTML = 'Шугаринг'
		}

		if (sectionNail.getBoundingClientRect().bottom < window.pageYOffset - 900) {
			mainContentTitle.innerHTML = 'Маникюр педикюр'
		}

		if (mainFooter.getBoundingClientRect().bottom < window.pageYOffset -4200) {
			mainInfoBlock.classList.add('zero-opacity');
		} else {
			mainInfoBlock.classList.remove('zero-opacity');
		}

	});

	//Clients counter

	let clients = document.getElementById('clients');

	function counter() {
		clients.innerHTML = '0';
		animate({
 			duration: 1000,
 			timing(timeFraction) {
 			  return timeFraction;
 			},
 			draw(progress) {
 			  elem.style.width = progress * 100 + '%';
 			}
		});
	};

	//Footer Gallert

	let galleryList = document.getElementsByClassName('gallery-list-item');

	let quantityGalleryListItems = galleryList.length;

	 function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	};

// for (let i = 0; i < galleryList.length; i++) {
// 		galleryList[i].style.order = getRandom(0, galleryList.length)
// 	}	
		
// // let timerId = setInterval(function() {
// // 	for (let i = 0; i < galleryList.length; i++) {
// // 		galleryList[i].style.order = getRandom(0, galleryList.length)
// // 	}	
// // }, 6000);
	

	// console.log( listItemsRandomOrederArray );

})();
