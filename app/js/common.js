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
	 sectionPosition = sectionMassage.getBoundingClientRect();


	window.addEventListener('scroll', function () {


		if (sectionPosition.top > window.pageYOffset) {
			// mainInfoBlock.style.position = 'absolute';
			mainInfoBlock.classList.remove('fixed-info');
		}

		if (sectionPosition.top< window.pageYOffset) {
			// mainInfoBlock.style.position = 'fixed';
			mainInfoBlock.classList.add('fixed-info');
		
			mainContentTitle.innerHTML = 'Профессиональный массаж'
		}

		if (sectionSugaring.getBoundingClientRect().bottom < window.pageYOffset - 600) {
			mainContentTitle.innerHTML = 'Шугаринг'
		}

		if (sectionNail.getBoundingClientRect().bottom < window.pageYOffset - 900) {
			mainContentTitle.innerHTML = 'Маникюр педикюр'
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

})();
